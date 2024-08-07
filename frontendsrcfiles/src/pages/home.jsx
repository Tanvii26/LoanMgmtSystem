import React from 'react'
import './home.css'
import { Navigate, NavLink } from 'react-router-dom'
function home() {
    return (
        <div class="home">
            <div class="top">

                <div class="nav">
                    <div class="nav-left">
                        SwiftCash
                    </div>
                    <div class="nav-right">
                        <ul class="nav-lis">
                            <li class="item">About</li>
                            <li class="item">
                                <NavLink to="/home-loan">
                                    Home Loan
                                </NavLink>
                            </li>
                            <li class="item">
                                <NavLink to="/personal-loan">
                                    Personal Loan
                                </NavLink>
                            </li>
                            <li class="item">
                                <NavLink to="/signin">
                                    LogIn
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div class="vid">
                    <div class="vid-left">
                        <h1 class="logo">Global Network.</h1>
                        <h1 class="logo">Local Connectivity.</h1>
                    </div>

                    <div class="vid-right">
                        <p>
                            We are dedicated to responsibly providing financial services to enable growth and economic progress
                            around the world. Helping organizations grow and move forward.

                        </p>
                        <button>Read More</button>
                    </div>
                </div>


            </div>

            <div class="services">
                <div class="left">
                    <h2 class="heading">Our Services</h2>
                    <h3 class="content">At our institution, we provide a comprehensive suite of services, seamlessly integrated to ensure a unified experience throughout the entire loan lifecycle. We treat our clients as part of a global relationship, offering personalized support and tailored solutions at every step.</h3>
                </div>

                <div class="right">
                    <ul>
                        <li>Account Management</li>
                        <li>Payment Processing</li>
                        <li>Portfolio Monitoring</li>
                        <li>Audit Reporting</li>
                        <li>Recovery and Write Off</li>
                        <li>Customer Service</li>
                    </ul>
                </div>


            </div>

            <div class="loan">
                <div class="loan-left">
                    <h2>Home Loan</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus animi dolorem suscipit minus quia, magnam ad corporis! Tenetur commodi porro voluptate illo? Optio, libero aperiam?</p>
                    <NavLink to="/home-loan">
                        <button class="btn-dark">Apply</button>
                    </NavLink>
                </div>

                <div class="loan-right">
                    <h2>Personal Loan</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus animi dolorem suscipit minus quia, magnam ad corporis! Tenetur commodi porro voluptate illo? Optio, libero aperiam?</p>
                    <NavLink to="/personal-loan">
                        <button class="btn-dark">Apply</button>
                    </NavLink>
                </div>
            </div>

            <div class="contact" id="contact">
                <div class="contact-left">
                    <h1>Stay Connected.</h1>
                    <h1>Learn from Our</h1>
                    <h1>Experts. Subscribe</h1>

                </div>

                <div class="contact-right">
                    <div class="form">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="email" placeholder="Email" id="email" />
                        <button class="sub">Subscribe</button>
                    </div>
                    <div class="last">
                        <span><i class="fa-solid fa-map-pin"></i>  Mumbai, India</span>
                        <span><i class="fa-solid fa-envelope"></i>  infoemail.com </span>
                        <span><i class="fa-solid fa-phone"></i>  +91 11111 22222 </span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default home