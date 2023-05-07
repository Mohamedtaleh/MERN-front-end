import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import watch from '../images/watch.jpg';
import Container1 from "../components/Container";



const Checkout = () => {
    return (
        <>
            <Container1 class1="checkout-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">Mar Culture</h3>
                                <nav
                                    style={{"--bs-breadcrumb-divider ": ">"}}
                                    aria-label="breadcrumb">
                                     <ol className="breadcrumb">
                                        <li className="breadcrumb-item total-price"><Link to="/cart" className="text-dark">Cart</Link></li> &nbsp;
                                        <li className="breadcrumb-item active total-price" aria-current="page">Informartion</li>
                                        <li className="breadcrumb-item active total-price">Shipping</li> &nbsp;
                                        <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h4 className="title total">
                                    Contact Informartion
                                </h4>
                                <p className="user-details ">
                                    Bablo picasso (Bablo75@gmail.com)
                                </p>
                                <h4 className="mb-3 total">
                                    Shipping Address

                                </h4>
                                <form action="" className="d-flex flex-wrap gap-15 justify-content-between">
                                    <div className="w-100">
                                        <select name="" className="form-control form-select">
                                            <option value="" selected disabled>
                                                Country/Region
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1"> <input className="form-control" placeholder="First Name (optional)" type="text" /></div>
                                    <div className="flex-grow-1"> <input className="form-control" placeholder="Last Name" type="text"/></div>
                                    <div className="w-100"> <input className="form-control" placeholder="Address" type="text"/></div>
                                    <div className="w-100"> <input className="form-control" placeholder="Appartment, Suite , etc... (optional) " type="text"/></div>
                                    <div className="flex-grow-1"> <input className="form-control" placeholder="City" type="text"/></div>
                                    <div className="flex-grow-1">
                                        <select name="" className="form-control form-select" selected disabled>
                                            <option value="">
                                                Select State

                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1"><input className="form-control" placeholder="ZIP code" type="text" /></div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <Link to="/cart" className="total" >
                                                <AiOutlineArrowLeft  className="me-2 "/>
                                                Return to Cart </Link>
                                            <Link to="/cart" className="button " > Continue to Shipping </Link>

                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="border-bottom py-4">
                                <div className="d-flex gap-10 mb-2 align-items-center">
                                <div className="w-75 d-flex gap-10">
                                        <div className="w-25 position-relative">
                                            <span style={{"top":"-10px" ,"right":"2px","width":"30px","height":"30px" }} className="badge1 d-flex justify-content-center align-items-center bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                            <img src={watch} className="img-fluid"
                                                alt="product" />
                                        </div>
                                        <div>
                                            <h5 className="total-price">best watch ever</h5>
                                            <p className="total-price">#mohameed</p>
                                        </div>

                                </div>
                                <div className="flex-grow-1">
                                        <h5 className="total">$ 100.00</h5>

                                </div>
                                </div>

                            </div>
                            <div className="border-bottom py-4">
                                <div className="d-flex justify-content-between align-items-center">
                                <p className="total">
                                    Subtotal
                                </p>
                                <p className="total-price">$ 1000</p>

                                </div>


                                <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0 total">
                                    Shipping
                                </p>
                                <p className="mb-0 total-price">$ 20</p>

                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center  py-4">
                                <h4 className="total">
                                    Total
                                </h4>
                                <h5 className="total-price-2">$ 1020</h5>

                            </div>
                        </div>

                    </div>
            </Container1>



        </>
    )
}


export default Checkout;
