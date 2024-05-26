import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="foot-container">
            <div className="foot-content">
                <div className="subscribe_box">
                    <h1>JOIN OUR MAILING LIST</h1>
                    <label>
                        <input type="text" placeholder="Enter your email address" />
                        <button className='btn'>Subscribe</button>
                    </label>
                </div>
                <div className="foot_list">
                    <ul className='cols'>
                        <li>
                            <h3>About Us</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, iste id deleniti fugiat reprehenderit corrupti officia dolorem, commodi saepe facere ad cupiditate pariatur quis, expedita quaerat labore eveniet distinctio cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum at necessitatibus ea saepe et neque illum autem, est dicta, fuga illo laboriosam. Facilis temporibus sequi alias! Amet quasi illo dignissimos.
                            </p>
                        </li>
                        <li className='foot_links'>
                            <ul>
                                <h4>Quick Links</h4>
                                <li>Home</li>
                                <li>NewS</li>
                                <li>Recoginition</li>
                                <li>Parteners</li>
                                <li>Contact Us</li>
                            </ul>
                        </li>
                        <li className="foot_tech">
                            <ul>
                                <h4>Technologies</h4>
                                <li> Moore AI </li>
                                <li> Frost Micro </li>
                                <li> Frost One </li>
                            </ul>
                        </li>
                        {/* <li className='foot_contact'> */}
                        {/* <ul className='f_contact_li'>
                                <h4> Contact Info </h4>
                                <li> <i class="fa fa-home" aria-hidden="true"></i> <div> SmallSpark.Space <span>United Kingdom</span></div> </li>
                                <li> Email </li>
                            </ul> */}
                        <li className="contact-info">
                            <h4>Contact Info</h4>
                            <p><i className="fa fa-map-marker-alt"></i> Smallspark.Space</p>
                            <p>United Kingdom</p>
                            <p><i className="fa fa-envelope"></i> Email</p>
                            <p><a href="mailto:enquiries@smallsparkspace.co.uk">enquiries@smallsparkspace.co.uk</a></p>
                            <div className="social-media">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>
                        </li>
                        {/* </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer