import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Authentication/useAuth';
import userPhoto from '../../../images/User.png';

const Header = () => {

  const auth = useAuth();

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-2 sticky-top">
      <Link class="navbar-brand text-info" to="/">Resume Builder</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
          <li class="nav-item active">
            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/#Templates">Templates</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/#Features">Features</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/#Services">Services</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/#Blog">Blog</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/#ContactUs">Contact Us</Link>
          </li>
        </ul>

        <ul className='navbar-nav align-items-center'>
          <li className='nav-item'>
            {
              auth.user ?
                <Link to='/' className='nav-link'>
                  {auth.user.displayName}
                  <img className='ml-3' src={auth.user.photoURL ? auth.user.photoURL : userPhoto} width="35px" alt="" />
                </Link>
                :
                <Link to='/login' className='nav-link'>Login</Link>
            }
          </li>

          <li className='nav-item'>
            {
              auth.user ?
                <Link to='/' className='nav-link'>
                  <button onClick={() => { auth.signOut() }}
                    className='btn btn-primary'
                  >
                    Sign Out
                  </button>
                </Link>
                :
                <Link to='/login' className='nav-link'>
                  <button
                    className='btn btn-primary'
                  >
                    Sign Up
                  </button>
                </Link>
            }
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Header;