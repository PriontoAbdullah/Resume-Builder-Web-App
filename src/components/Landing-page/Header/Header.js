import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-2 sticky-top">
      <a class="navbar-brand" href="#">Resume Builder</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Templates</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
        </ul>

        <ul className='navbar-nav align-items-center'>
          <li className='nav-item'>
            <a class="nav-link" href="#">Login</a>
          </li>
          <li className='nav-item'>
            <a class="nav-link" href="#">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;