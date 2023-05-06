import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import watch from '../images/watch.jpg';
import cross from '../images/cross.svg';
import Container1 from "../components/Container";


const ComparePro = () => {
    return (
        <>
           <Meta title={"Compare Products"} />
            <BreadCrumb title="Compare Products" />
            <Container1 class1="compare-product-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-3"><div className="compare-product-card position-relative">
                            <img src={cross} alt="cross" className="position-absolute img-fluid cross"/>
                            <div className="product-card-image">
                                <img src={watch} alt="product"/>
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Honor T1 7,0c 1 GB RAM 8 GB ROM 7 Inch With Tablet</h5>
                                <h6 className="price mb-3 mt-3">$ 100.00</h6>

                                <div>
                                    <div className="product-detail">
                                        <h5>Brand</h5>
                                        <p>Havels</p>

                                    </div>

                                    <div className="product-detail">
                                        <h5>Type</h5>
                                        <p>Watch</p>

                                    </div>

                                    <div className="product-detail">
                                        <h5>SKU</h5>
                                        <p>Havels</p>

                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability</h5>
                                        <p>In Stock</p>

                                    </div>

                                    <div className="product-detail">
                                        <h5>color</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>size</h5>
                                        <div className="d-flex gap-10 ">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            <p>XL</p>
                                            <p>XXL</p>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        </div>
                         <div className="col-3"><div className="compare-product-card position-relative">
                            <img src={cross} alt="cross" className="position-absolute img-fluid cross"/>
                            <div className="product-card-image">
                                <img src={watch} alt="product"/>
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Honor T1 7,0c 1 GB RAM 8 GB ROM 7 Inch With Tablet</h5>
                                <h6 className="price mb-3 mt-3">$ 100.00</h6>

                                <div>
                                    <div className="product-detail">
                                        <h5>Brand</h5>
                                        <p>Havels</p>

                                    </div>

                                    <div className="product-detail">
                                        <h5>Type</h5>
                                        <p>Watch</p>

                                    </div>

                                    <div className="product-detail">
                                        <h5>SKU</h5>
                                        <p>Havels</p>

                                    </div>
                                    <div className="product-detail">
                                        <h5>Availability</h5>
                                        <p>In Stock</p>

                                    </div>

                                    <div className="product-detail">
                                        <h5>color</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>size</h5>
                                        <div className="d-flex gap-10 ">
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                            <p>XL</p>
                                            <p>XXL</p>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
            </Container1>
        </>
            )

}


export default ComparePro;
