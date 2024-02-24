'use client';

import { type ApolloError } from '@apollo/client';
import React from 'react';

const Error = ({ error }: { error: ApolloError }) => {
  // TODO: Handle error

  console.log(error);

  return <div>Oops</div>;
};

export default Error;
