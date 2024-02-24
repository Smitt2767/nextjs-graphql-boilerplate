import { APP_INFO } from '@/constants';
import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import 'server-only';

const mainServerLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_MAIN_SERVER_GRAPHQL_URL
});

const contextLink = setContext(async (_, { headers, token }) => {
  return {
    authorization: token ? `Bearer ${token}` : '',
    ...headers
  };
});

export const serverClient = new ApolloClient({
  link: from([contextLink, mainServerLink]),
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
