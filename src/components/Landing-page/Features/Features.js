import React from 'react';
import './Features.css';
import icon1 from '../../../images/about-icon-01.png';
import icon2 from '../../../images/about-icon-02.png';
import icon3 from '../../../images/about-icon-03.png';
import crestImage from '../../../images/slider-icon123.png';
import featuresImage from '../../../images/right-image.png';

const Features = () => {
    return (
        <section class="section" id="features">
            <div class="container">
                <div class="row">
                    <div class="left-text col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix">
                        <div class="my-5">
                            <h2>Our resume Builder Features</h2>
                            <p>A creative, professional layout can grab a recruiter's attention. Our resume layout optimizer makes sure all your content is aligned and organized so your resume looks like a work of art.</p>
                        </div>

                        <ul>
                            <li>
                                <img src={icon1} alt="icon1" />
                                <div class="text">
                                    <h6>Live Feedback to Improve Your Content</h6>
                                    <p>If you aren't sure how to write a resume, don't worry. Our content optimizer analyzes your resume and gives you suggested revisions to increase the quality of your content.</p>
                                </div>
                            </li>
                            <li class="my-5">
                                <img src={icon2} alt="icon2" />
                                <div class="text">
                                    <h6>Free Resume Templates and Cover Letter</h6>
                                    <p>Not only do you get to build your resume for free, you also get access to successful resume samples and cover letter examples that you can use for guidance.</p>
                                </div>
                            </li>
                            <li>
                                <img src={icon3} alt="icon3" />
                                <div class="text">
                                    <h6>Templates Suited to Your Exact Needs</h6>
                                    <p>Let our free resume templates and cover letter templates do the work for you. Choose from a selection of recruiter-approved layout designs for different job types.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-5 col-md-12 col-sm-12" >
                        <img src={crestImage} class="rounded img-fluid d-block mx-auto" alt="Features Img 1" />
                        <img src={featuresImage} class="rounded img-fluid d-block mx-auto" alt="Features Img 2" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;