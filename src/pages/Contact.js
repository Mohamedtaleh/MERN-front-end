import React from "react";
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import { AiOutlineHome ,AiOutlineMail ,AiOutlineInfoCircle} from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi"
import Container1 from "../components/Container";


const Contact = () => {
    return (
        <>
            <Meta title={"Contact Us"} />
            <BreadCrumb title="Contact Us" />
            <Container1 class1="contact-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105816.68568481608!2d-5.084142387606012!3d34.02407765191764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b484d445777%3A0x10e6aaaeedd802ef!2sFez!5e0!3m2!1ses!2sma!4v1682968180553!5m2!1ses!2sma"
                                width="600"
                                height="450"
                                className="border-0 w-100"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">

                            </iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between ">
                                <div><h3 className="contact-title mb-4 ">Contact</h3>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <input id="ss" className="form-control" type="text" placeholder="Name" />
                                        </div>
                                       <div>
                                            <input id="ss" className="form-control" type="email" placeholder="Email" />
                                        </div>
                                       <div>
                                            <input id="ss" className="form-control" type="tel" placeholder="Phone Number" />
                                        </div>
                                       <div>
                                            <textarea
                                                name=""
                                                id="ss"
                                                className="w-100 form-control"
                                                placeholder="Comments"
                                                cols="38"
                                                rows="4" >

                                            </textarea>
                                        </div>
                                        <div>
                                            <button className="button border-0">Submit</button>

                                        </div>
                                    </form>

                                </div>
                                <div><h3 className="contact-title mb-4 ">Get in Touch With Us</h3>
                                    <div>
                                        <ul className="ps-0">
                                            <li className="mb-4 d-flex gap-15">
                                                <AiOutlineHome className="fs-5" />
                                                <address className="mb-0">
                                                    Hno : Ras Louta Street 14 D N 27
                                                </address>
                                            </li>
                                            <li className="mb-4 d-flex gap-15">
                                                <BiPhoneCall className="fs-5" />
                                                <a href="tel:+212 639087753" className="mb-0">+212 639087753</a>
                                            </li>
                                            <li className="mb-4 d-flex gap-15">
                                                <AiOutlineMail className="fs-5" />
                                                <a href="mailto:mohamedtaleh0@gmail.com" className="mb-0">
                                                    Culture@Mar.com
                                                </a>

                                            </li>
                                            <li className="mb-4 d-flex gap-15">
                                                <AiOutlineInfoCircle className="fs-5" />
                                                <p className="mb-0">
                                                    Monday - Friday 10 AM - 8 PM

                                                </p>

                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
            </Container1>

        </>

    )
}
export default Contact;
