import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="Footer" className=''>
            <div className='container'>
                <div className='row footer-top py-3'>
                    <div className='col-md-6 py-3'>
                        <h4 class="text-info">Resume Builder Web App</h4>
                        <h6 class="text-white">Email: resumebuilder@gmail.com</h6>
                        <h6 class="text-white">Phone: +990 1234 56789</h6>
                    </div>
                    <div className='col-md-3'>
                        <ul className="list-unstyled">
                            <li><a href='/help'>Get Help</a></li>
                            <li><a href='/faq'>Read FAQ</a></li>
                            <li><a href='/templates'>View All Templates</a></li>
                            <li><a href='/aboutus'>About Us</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <ul className="list-unstyled">
                            <li><a href='/policy'>Privacy Policy</a></li>
                            <li><a href='/cookie'>Cookie Policy</a></li>
                            <li><a href='/terms'>Terms of Use</a></li>
                            <li><a href='/contacts'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className='footer-bottom d-flex justify-content-center'>
                    <p className='text-secondary'>Copyright &copy; 2020 Resume Builder Web App </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;