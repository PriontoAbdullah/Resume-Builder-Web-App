import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Landing-page/Header/Header';
import Hero from './components/Landing-page/Hero/Hero';
import Features from './components/Landing-page/Features/Features';

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
