'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { ApolloClient, NormalizedCacheObject, ApolloProvider as Provider } from '@apollo/client';
import { createAuthClient, createClient } from '@/lib/apollo/client';

type Client = ApolloClient<NormalizedCacheObject>;
type ClientOptions = Parameters<typeof createClient>[0];

const ApolloProviderContext = createContext<null | {
  client: Client;
  authClient: Client;
}>(null);

const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  const options: ClientOptions = useMemo(
    () => ({
      accessToken: '',
      refreshToken: '',
      logout() {}
    }),
    []
  );

  const client = useMemo(() => createClient(options), [options]);
  const authClient = useMemo(() => createAuthClient(options), [options]);

  return (
    <ApolloProviderContext.Provider
      value={{
        authClient,
        client
      }}
    >
      <Provider client={client}>{children}</Provider>
    </ApolloProviderContext.Provider>
  );
};

export const useApollo = () => {
  const context = useContext(ApolloProviderContext);
  if (!context) throw new Error('useApollo must be used within ApolloProvider context');

  return context;
};

export default ApolloProvider;
