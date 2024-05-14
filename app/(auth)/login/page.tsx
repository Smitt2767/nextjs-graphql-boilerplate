'use client';

import { signIn } from 'next-auth/react';
import React from 'react';

const Page = () => {
  const login = async () => {
    await signIn('credentials', {
      email: 'smit@cappital.co',
      password: 'Smit@1234'
    });
  };
  return (
    <>
      <button onClick={login}>Login</button>
    </>
  );
};

export default Page;
