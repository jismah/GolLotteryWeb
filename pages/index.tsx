import type { NextPage } from 'next'

import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import About from '../components/about';
import Numbers from '../components/Numbers';
import Page404 from '../pages/404';

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Gol Lottery">
      <Header />
      <Hero />
      <Numbers />
      <About />
      <Footer />
      
      {/* <Page404 /> */}
    </Layout>
  )
}

export default Home
