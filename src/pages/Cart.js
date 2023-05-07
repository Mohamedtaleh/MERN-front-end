import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from '../images/watch.jpg';
import { RiDeleteBinFill } from 'react-icons/ri';
import { Link } from "react-router-dom";
import Container1 from "../components/Container";



const Cart = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <BreadCrumb title="Cart" />
            <Container1 class1="cart-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                <h4 className="cart-col-1" >Product</h4>
                                <h4 className="cart-col-2">Price</h4>
                                <h4 className="cart-col-3">Quantity</h4>
                                <h4 className="cart-col-4">Total</h4>

                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img src={watch} className="img-fluid" alt="Product" />
                                    </div>
                                    <div className="w-75">
                                        <p className="title">
                                            Somethink
                                        </p>
                                        <p className="color">Size : XL</p>
                                        <p className="size">Color : blue</p>
                                    </div>
                                </div>
                                <div className="cart-col-2 ">
                                    <h5 className="price">$ 100.00</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div>
                                        <input type="number" name="" className="form-contol w-50" />
                                    </div>
                                    <div>
                                        <RiDeleteBinFill className="text-danger fs-5 position-relative" id="aitw" />
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">$ 100.00</h5>

                                </div>

                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img src={watch} className="img-fluid" alt="Product" />
                                    </div>
                                    <div className="w-75">
                                        <p className="title">
                                            Somethink
                                        </p>
                                        <p className="color">Size : XL</p>
                                        <p className="size">Color : blue</p>
                                    </div>
                                </div>
                                <div className="cart-col-2 ">
                                    <h5 className="price">$ 100.00</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div>
                                        <input type="number" name="" className="form-contol w-50" />
                                    </div>
                                    <div>
                                        <RiDeleteBinFill className="text-danger fs-5 position-relative" id="aitw" />
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">$ 100.00</h5>

                                </div>

                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img src={watch} className="img-fluid" alt="Product" />
                                    </div>
                                    <div className="w-75">
                                        <p className="title">
                                            Somethink
                                        </p>
                                        <p className="color">Size : XL</p>
                                        <p className="size">Color : blue</p>
                                    </div>
                                </div>
                                <div className="cart-col-2 ">
                                    <h5 className="price">$ 100.00</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div>
                                        <input type="number" name="" className="form-contol w-50" />
                                    </div>
                                    <div>
                                        <RiDeleteBinFill className="text-danger fs-5 position-relative" id="aitw" />
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">$ 100.00</h5>

                                </div>

                            </div>
                            <div className="col-12 py-2 mt-4">
                                <div className="d-flex justify-content-between align-items-baseline">
                                    <Link to='/store' className="button">Continue To Shopping</Link>
                                    <div className="d-flex align-items-end flex-column">
                                        <h4>SubTotal : $ 1000</h4>
                                        <p>Taxes and shipping calculated at checkout</p>
                                        <Link to="/checkout" className="button">Checkout</Link>
                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>
            </Container1>
        </>
    )
}


export default Cart;
