'use client';

import React from 'react';
import ApolloProvider from './ApolloProvider';
import { Toaster } from 'sonner';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProvider>
      <Toaster closeButton duration={5000} />
      {children}
    </ApolloProvider>
  );
};

export default Providers;
