import React from 'react';
import './Hero.css';
import heroImage from '../../../images/slider-icon.png';
import { useAuth } from '../../Authentication/useAuth';
import { Link } from 'react-router-dom';

const Hero = () => {

    const auth = useAuth();

    return (
        <div class="hero-area" id="Hero">
            <div class="container">
                <div class="row mt-5 align-items-center">
                    <div class="col-md-6 mb-5">
                        <h2 class="mb-4">The Online Resume Builder <br /> You Deserve</h2>
                        <p>Creating a Professional Resume and Cover Letter Has Never Been <strong>So Easy</strong> </p>
                        <button class="mt-3 main-button">
                            {auth.user ?
                                <Link to='/resume-builder'>Get Started For Free</Link>
                                :
                                <Link to='/login'>Get Started For Free</Link>
                            }
                        </button>
                    </div>
                    <div class="col-md-6">
                        <img src={heroImage} class="rounded img-fluid d-block mx-auto" alt="Hero-Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;