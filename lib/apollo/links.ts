import { HttpLink } from '@apollo/client';

export const authServerLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_AUTH_SERVER_GRAPHQL_URL
});

export const mainServerLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_MAIN_SERVER_GRAPHQL_URL
});
