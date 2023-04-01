import React from "react";
import About from "../components/sections/About";
import BestSellers from "../components/sections/BestSellers";
import Footer from "../components/sections/Footer";
import HelloPage from "../components/sections/HelloPage";
import Hero from "../components/sections/Hero";
import Offers from "../components/sections/Offers";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Offers />
      <BestSellers />
      <HelloPage />
      <Footer />
    </div>
  );
}

export default Home;
