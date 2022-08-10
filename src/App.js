import React from "react";

import HomeBanner from "./components/HomeBanner.js"
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cources from "./components/Cources.js"



function App() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Cources />
      <Features />
      <Footer />


    </div>
  );
}

export default App;
