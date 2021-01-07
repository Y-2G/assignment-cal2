import React from 'react';
import Head from 'next/head';
import Container from '../components/Container';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Calculator</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container />
  </div>
)

export default Home;