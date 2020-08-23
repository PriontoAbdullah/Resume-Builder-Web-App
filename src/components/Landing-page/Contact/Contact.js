import React from 'react';
import './Contact.css';
import icon from '../../../images/about-icon-03.png';

const Contact = () => {
    return (
        <section id="Contact">
            <div class="Container">
                <div class="row d-flex justify-content-center my-4">
                    <h2>We're happy to hear from you</h2>
                </div>
                <div class="row">
                    <div class="col-lg-5 col-md-12 col-sm-12 ml-5">
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="email" class="form-control" id="FormControlInput1" placeholder="Jhon Doe" required />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="FormControlInput2" placeholder="name@example.com" required />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">How did you find us?</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option value="friends">Friends</option>
                                    <option value="family">Family</option>
                                    <option value="Search" selected>Search Engine</option>
                                    <option value="ad">Advertisement</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" id="FormControlTextarea1" rows="1" placeholder="Drop us a line"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    <div class="col-lg-6 col-md-12 col-sm-12 mobile-top-fix ml-5">
                        <div class="my-4">
                            <img src={icon} alt="icon" />
                            <h6 class="my-3">Say hello</h6>
                            <h2 class="text-primary">Get in touch, send us an e-mail or call us</h2>
                        </div>
                        <p>Our Vision is to - <strong class="text-dark">Fight Galactic Unemployment</strong> </p>
                        <p>Questions? Enquiries? Suggestions? Existential doubts? Our teams are ready to hear about them!</p>
                        <h5>Contact us now</h5>
                        <h4 class="text-info">Email: resumebuilder@gmail.com</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;