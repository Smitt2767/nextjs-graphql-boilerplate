import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { ROUTES } from './constants';
import { LoginSchema } from './schemas';
import { serverAuthClient } from './lib/apollo/server';
import { LOGIN } from './graphql/mutations';
import { type LoginResponseData, type User, type CurrentUserResponseData } from './types';
import { CURRENT_USER } from './graphql/queries';
import { ApolloError } from '@apollo/client';

interface SessionUser {
  accessToken: string;
  refreshToken: string;
  user: User;
}

declare module 'next-auth' {
  // eslint-disable-next-line no-unused-vars
  interface User extends SessionUser {}

  // eslint-disable-next-line no-unused-vars
  interface Session extends SessionUser {}
}

class AuthError extends Error {
  constructor(code: string, message: string) {
    super(JSON.stringify({ code, message }));
  }
}

const getCurrentUser = async (accessToken: string) => {
  return await serverAuthClient.query<CurrentUserResponseData>({
    query: CURRENT_USER,
    context: {
      token: accessToken
    }
  });
};

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);
        try {
          if (!validateFields.success) {
            throw new AuthError('VALIDATION_ERROR', 'Please provide email & password');
          }
          const { data, errors } = await serverAuthClient.mutate<LoginResponseData>({
            mutation: LOGIN,
            variables: {
              data: {
                email: validateFields.data.email,
                password: validateFields.data.password
              }
            }
          });

          if (errors && errors.length > 0) {
            const error = errors[0];
            const code = error.extensions.code as string;
            throw new AuthError(code, error.message);
          }

          if (!data?.login) {
            throw new AuthError('INVALID_CREDENTIAL', 'Invalid credentials');
          }

          return {
            accessToken: data.login.accessToken,
            refreshToken: data.login.refreshToken,
            user: data.login.user,
            id: data.login.user.id
          };
        } catch (error) {
          if (error instanceof ApolloError) {
            const { graphQLErrors, networkError } = error;
            if (graphQLErrors.length > 0) {
              const error = graphQLErrors[0];
              const code = error.extensions.code as string;
              throw new AuthError(code, error.message);
            }
            if (networkError) {
              throw new AuthError('NETWORK_ERROR', networkError.message);
            }
          } else if (error instanceof Error) {
            throw new AuthError('SOMETHING_WENT_WRONG', error.message);
          }
          throw new AuthError('SOMETHING_WENT_WRONG', 'Something went wrong');
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, trigger }) {
      switch (trigger) {
        case 'signIn': {
          token.user = user;
          break;
        }
        default:
          {
            if (token.user && (token.user as SessionUser).accessToken) {
              const accessToken = (token.user as SessionUser).accessToken;
              const refreshToken = (token.user as SessionUser).refreshToken;

              const { data, errors } = await getCurrentUser(accessToken);

              if (!errors && data.currentUser) {
                token.user = { accessToken, refreshToken, user: data.currentUser };
              }
            }
          }
          break;
      }

      // TODO: handle token expiry logic here

      return token;
    },
    session({ session, token }) {
      const sessionToken = token as unknown as SessionUser;
      if (session.user) {
        return {
          ...session,
          ...sessionToken.user
        };
      }
      return session;
    }
  },
  pages: {
    signIn: ROUTES.LOGIN,
    error: ROUTES.LOGIN
  },
  session: {
    strategy: 'jwt'
  }
});
