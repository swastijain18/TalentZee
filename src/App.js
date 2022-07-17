import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomeBanner from "./components/HomeBanner.js"
// import Cources from "./Cources";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";


import Home from "./components/Home.js"
import Layout from "./components/Layout.js";
import Cources from "./components/Cources.js"
import AboutPage from "./components/AboutPage.js"
import DailyFeed from "./components/DailyFeed.js"
import Contact from "./components/Contact.js"


function App() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Cources />
      <Features />
      <Footer />
      {/* <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home />}>

            <Route index element={<Home />} />

            <Route path="cources" element={<Cources />} />
            <Route path="aboutPage" element={<AboutPage />} />
            <Route path="dailyFeed" element={<DailyFeed />} />
            <Route path="contact" element={<Contact />} />
          </Route>

        </Routes >
      </BrowserRouter> */}

    </div>
  );
}

export default App;
