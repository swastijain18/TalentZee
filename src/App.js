import './App.css';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import Cources from './components/Cources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import AboutPage from './components/AboutPage';
import Features from './components/Features';

function App() {
  return (
    <>
      {/* <Routes >
        <Route exact path='/' element={<App />} />
        <Route path='/contact' element={<Contact />} />
      </Routes > */}
      
      <AboutPage/>
 
    <Header/>
    <HomeBanner />
    <Cources />
    <Features/>
    <Footer />
    <Contact/>
    </>
  );
}

export default App;
