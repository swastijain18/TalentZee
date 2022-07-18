import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"


import App from "./App.js"
import Home from "./components/Home.js"
import CoursePage from "./components/CoursePage.js"
import AboutPage from "./components/AboutPage.js"
import DailyFeed from "./components/DailyFeed.js"
import Contact from "./components/Contact.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<App />} />

      {/* <Route index element={<Home />} /> */}

      <Route path="coursePage" element={<CoursePage />} />
      <Route path="aboutPage" element={<AboutPage />} />
      <Route path="dailyFeed" element={<DailyFeed />} />
      <Route path="contact" element={<Contact />} />
      
    </Routes >
  </BrowserRouter>
);


reportWebVitals();
