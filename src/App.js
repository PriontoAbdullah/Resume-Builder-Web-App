import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Landing-page/Header/Header';
import Hero from './components/Landing-page/Hero/Hero';
import About from './components/Landing-page/About/About';
import Features from '././components/Landing-page/Features/Features';
import Templates from './components/Landing-page/Templates/Templates';
import Review from './components/Landing-page/Review/Review';
import Contact from './components/Landing-page/Contact/Contact';
import Footer from './components/Landing-page/Footer/Footer';

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Features />
      <Templates />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
