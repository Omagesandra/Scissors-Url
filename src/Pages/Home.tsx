import React from "react";
import Navbar from "../scenes/navbar";
import Pricing from "../scenes/pricing";
import MyUrl from "../scenes/myUrl";
import Faqs from "../scenes/faqs";
import Revolution from "../scenes/revolution";
import Footer from "../scenes/footer";
import Analytics from "../scenes/analytics";
import Features from "../scenes/features";
const Home = () => {


  return (
    <div className="">
      <Navbar/>
      <Analytics/>
      <Features />
      <Pricing  />
      <MyUrl />
      <Faqs />
      <Revolution />
      <Footer />
    </div>
  );
};

export default Home;
