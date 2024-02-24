'use client';

import React from 'react';
import ApolloProvider from './ApolloProvider';
import { Toaster } from 'sonner';
import { SessionProvider } from 'next-auth/react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider refetchOnWindowFocus={false}>
      <ApolloProvider>
        <Toaster closeButton duration={5000} />
        {children}
      </ApolloProvider>
    </SessionProvider>
  );
};

export default Providers;
