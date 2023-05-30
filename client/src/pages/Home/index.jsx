import React from "react";
import Hero from "./layout/Hero";
import Services from "./layout/Services";
import HappyClient from "./layout/HappyClient";
import News from "./layout/News";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Hero />
      <Services />
      <HappyClient />
      <News />
    </>
  );
};

export default Home;
