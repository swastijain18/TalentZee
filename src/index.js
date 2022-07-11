import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './components/Contact';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes >
        <Route exact path='/' element={<App />} />

        <Route exact path='/contact' element={<Contact />} />

      </Routes >
    </Router>
    <App />
  </React.StrictMode>

);

reportWebVitals();
