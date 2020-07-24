import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Landing-page/Header/Header';
import Hero from './components/Landing-page/Hero/Hero';
import Templates from './components/Landing-page/Templates/Templates';

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Templates />
    </div>
  );
}

export default App;
