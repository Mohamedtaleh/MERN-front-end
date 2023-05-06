import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin,BsGithub,BsYoutube,BsInstagram,BsFacebook } from "react-icons/bs";
import newsletter from '../images/newsletter.png';



const Footer = () => {
    return (
        <>

            <footer className="py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src={newsletter} alt="newsletter" width="20px" height="20px"/>
                                <h2 className="mb-0 text-white " style={{fontSize:"20px",letterSpacing:"1px"}}> Sign Up For Newsletter</h2>
                            </div>

                        </div>
                        <div className="col-7">
                            <div className="input-group  p-20 ">
                                <input type="text"
                                    className="form-control py-1"
                                    placeholder="Your Email Address "
                                    aria-label= "Your Email Address "
                                    aria-describedby="basic-addon2" />
                                <span className="input-group-text p-2 " id="basic-addon2">
                                    Subscribe
                            </span>
                            </div>

                        </div>

                    </div>

                </div>
            </footer>
            <footer className="py-4">

                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4"><h4 className="text-white mb-4">Contact Us</h4>  <div>

                            <address className="text-white">
                                Hno : Ras Louta Street 14 D N 27<br /> Fnideq, Morocco <br />
                                PinCode : 93100

                            </address>
                            <a href="tel:+212639087753" className="mt-4 text-white d-block mb-2">
                                +212 63908 7753
                            </a>
                            <a href="mailto:culture@mar.com" className="text-white d-block mt-2 mb-2">
                                Culture@Mar.com
                            </a>

                            <div className="social-icons d-flex align-items-center gap-30 mt-4">
                                <a href="/" className="text-white"><BsFacebook  className="fs-5"/></a>
                                <a href="/" className="text-white"><BsInstagram className="fs-5"/></a>
                                <a href="/" className="text-white"><BsLinkedin  className="fs-5"/></a>
                                <a href="/" className="text-white"><BsYoutube   className="fs-5"/></a>
                                <a href="/" className="text-white"><BsGithub    className="fs-5"/></a>
                            </div>









                        </div>   </div>
                        <div className="col-3"><h4 className="text-white mb-4">Information</h4>  <div className="footer-link d-flex flex-column">
                          <Link to="/privacypolicy" className="text-white py-2 mb-1">Privacy Policy</Link>
                          <Link to="/refundpolicy" className="text-white py-2 mb-1">Refund Policy</Link>
                          <Link to="/shippingpolicy" className="text-white py-2 mb-1">Shipping Policy</Link>
                          <Link to="/terms" className="text-white py-2 mb-1">Terms Of service</Link>
                          <Link to="/blogs" className="text-white py-2 mb-1">Blogs</Link>

                        </div>   </div>
                        <div className="col-3"><h4 className="text-white mb-4">Account</h4>  <div className="footer-link d-flex flex-column" >
                           <Link to="/" className="text-white py-2 mb-1">About US</Link>
                           <Link to="/" className="text-white py-2 mb-1">Faq's</Link>
                           <Link to="/" className="text-white py-2 mb-1">Contact</Link>
                           <Link to="/" className="text-white py-2 mb-1">Search</Link>
                           <Link to="/" className="text-white py-2 mb-1">Size Chart</Link>



                        </div>   </div>
                        <div className="col-2"><h4 className="text-white mb-4">Quick Links</h4>  <div className="footer-link d-flex flex-column">
                            <Link to="/" className="text-white py-2 mb-1">Laptops</Link>
                            <Link to="/" className="text-white py-2 mb-1">Headphones</Link>
                            <Link to="/" className="text-white py-2 mb-1">Tablet</Link>
                            <Link to="/" className="text-white py-2 mb-1">Watch</Link>
                        </div>   </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="col-12">
                        <p className="text-center mb-0 text-white">
                            &copy; {new Date().getFullYear()} Powered By Mar Culture
                        </p>

                    </div>


                </div>
            </footer>
        </>




    )
}


export default Footer;
