import React from 'react';
import './Review.css';
import customer1 from '../../../images/customer-1.jpg';
import customer2 from '../../../images/customer-2.jpg';
import customer3 from '../../../images/customer-3.jpg';

const Review = () => {
    return (
        <section id="Review">
            <div>
                <div class="row d-flex justify-content-center">
                    <h2 class=" my-4">See what our customers have to say</h2>
                </div>
                <div class="row ml-2 my-3">
                    <div class="col col-md-4">
                        <blockquote>
                            Very easy to use and looks great. Saved me a ton of time. Awesome template need to have some more specialization of keyword and data figure example.
                        <cite><img src={customer1} alt="customer-1" /> Alberto Duncan</cite>
                        </blockquote>
                    </div>
                    <div class="col col-md-4">
                        <blockquote>
                            Thank you for sharing these free templates to the job seekers!
                            Looking forward to hearing from you! I am wowed by your service.
                            Thank you!
                        <cite><img src={customer2} alt="customer-2" /> Joana Silva</cite>
                        </blockquote>
                    </div>
                    <div class="col col-md-4">
                        <blockquote>
                            It helped me with my CV and the outcome was fabulous, I even got a job with it. You guys saved me a lot of time and made my CV look better than ever, thanks.
                        <cite><img src={customer3} alt="customer-3" /> Milton Chapman</cite>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;