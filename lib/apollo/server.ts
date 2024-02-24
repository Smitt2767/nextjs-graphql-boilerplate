import { APP_INFO } from '@/constants';
import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { authServerLink, mainServerLink } from './links';

import 'server-only';

const contextLink = setContext(async (_, { headers, token }) => {
  return {
    headers: {
      authorization: token ? `Bearer ${token}` : '',
      // TODO: remove this
      'x-workspace-id': 'f2ff9e3a-7c6b-47fa-a0d6-f2e695d060b4',
      'x-app-id': '3deebedd-3e44-40ad-9fbf-d72a1f70d756',
      ...headers
    }
  };
});

const createClient = (link: HttpLink) =>
  new ApolloClient({
    link: from([contextLink, link]),
    cache: new InMemoryCache(),
    version: APP_INFO.version,
    name: APP_INFO.title,
    ssrMode: true,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all'
      },
      mutate: {
        errorPolicy: 'all'
      }
    }
  });

export const serverClient = createClient(mainServerLink);
export const serverAuthClient = createClient(authServerLink);
