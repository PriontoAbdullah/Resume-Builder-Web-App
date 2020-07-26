import React from 'react';
import './Templates.css';
import temp1 from '../../../images/td-3.png';
import temp2 from '../../../images/td-4.png';
import temp3 from '../../../images/td-1.png';
import temp4 from '../../../images/td-2.png';

const Templates = () => {
    return (
        <section class="container my-5" id="Templates">
            <div class=" my-5">
                <h2 class='my-4'>Our Templates</h2>
                <p class="lead">Making a resume is the first step of any job search. Not sure how to make a resume? Our online resume builder gives you free resume templates to follow.</p>
            </div>

            <div class="card-deck">
                <div class="card">
                    <img src={temp1} class="card-img-top rounded mx-auto" alt="phone-1" />
                    <div class="card-body">
                        <h5 class="card-title">For Freshers</h5>
                        <button class="btn btn-info mt-3">View Now →</button>
                    </div>
                </div>
                <div class="card">
                    <img src={temp2} class="card-img-top rounded mx-auto" alt="phone-2" />
                    <div class="card-body">
                        <h5 class="card-title">For Mobile Developer</h5>
                        <button class="btn btn-info mt-3">View Now →</button>
                    </div>
                </div>
                <div class="card">
                    <img src={temp3} class="card-img-top rounded mx-auto" alt="phone-3" />
                    <div class="card-body">
                        <h5 class="card-title">For Web Developer</h5>
                        <button class="btn btn-info mt-3">View Now →</button>
                    </div>
                </div>
                <div class="card">
                    <img src={temp4} class="card-img-top rounded mx-auto" alt="phone-3" />
                    <div class="card-body">
                        <h5 class="card-title">For Software Engineer</h5>
                        <button class="btn btn-info mt-3">View Now →</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Templates;