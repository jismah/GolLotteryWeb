import type { NextPage } from 'next'

import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import About from '../components/about';
import Numbers from '../components/Numbers';

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Gol Lottery">
      <Header />
      <Hero />
      <Numbers />
      <About />
      <Footer />
    </Layout>
  )
}

export default Home
