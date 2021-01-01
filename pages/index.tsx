import React from 'react';
import Head from 'next/head';
import Calculator from './Calculator';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Calculator</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Calculator />
  </div>
)

export default Home