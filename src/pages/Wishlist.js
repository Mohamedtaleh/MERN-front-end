import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import cross from "../images/cross.svg";
import watch from '../images/watch.jpg';



const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src={cross}
                                    alt="cross"
                                    className="position-absolute img-fluid cross"
                                />

                                <div className="wishlist-card-image">
                                    <img src={watch}
                                        alt="watch"
                                        className="img-fluid w-100"
                                    />

                                </div>
                                <div className="px-2 py-3">
                                    <h5 className="title">
                                        Honor T1 7,0c 1 GB RAM 8 GB ROM 7 Inch With Tablet
                                    </h5>
                                    <h6 className="price">
                                        $ 100.00
                                    </h6>
                                </div>
                            </div>


                        </div>

                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src={cross}
                                    alt="cross"
                                    className="position-absolute img-fluid cross"
                                />

                                <div className="wishlist-card-image">
                                    <img src={watch}
                                        alt="watch"
                                        className="img-fluid w-100"
                                    />

                                </div>
                                <div className="px-2 py-3">
                                    <h5 className="title">
                                        Honor T1 7,0c 1 GB RAM 8 GB ROM 7 Inch With Tablet
                                    </h5>
                                    <h6 className="price">
                                        $ 100.00
                                    </h6>
                                </div>
                            </div>


                        </div>

                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img
                                    src={cross}
                                    alt="cross"
                                    className="position-absolute img-fluid cross"
                                />

                                <div className="wishlist-card-image">
                                    <img src={watch}
                                        alt="watch"
                                        className="img-fluid w-100"
                                    />

                                </div>
                                <div className="px-2 py-3">
                                    <h5 className="title">
                                        Honor T1 7,0c 1 GB RAM 8 GB ROM 7 Inch With Tablet
                                    </h5>
                                    <h6 className="price">
                                        $ 100.00
                                    </h6>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Wishlist;
