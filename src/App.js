import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AuthProvider } from './components/Authentication/useAuth';
import Header from './components/Landing-page/Header/Header';
import Hero from './components/Landing-page/Hero/Hero';
import About from './components/Landing-page/About/About';
import Features from '././components/Landing-page/Features/Features';
import Templates from './components/Landing-page/Templates/Templates';
import Review from './components/Landing-page/Review/Review';
import Contact from './components/Landing-page/Contact/Contact';
import Footer from './components/Landing-page/Footer/Footer';
import Login from './components/Authentication/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>

          <Route exact path="/">
            <Header />
            <Hero />
            <About />
            <Features />
            <Templates />
            <Review />
            <Contact />
            <Footer />
          </Route>

          <Route path='/login'>
            <Login />
            <Footer />
          </Route>

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
