import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import watch from '../images/watch.jpg'

const SpecialProduct = () => {
       const [setRating] = useState(0);
       const handleRating = (rate ) => {
       setRating(rate)
       }
    return(
        <>
            <div className="col-6 mb-4">
                <div className="special-product-card">
                    <div className="d-flex justify-content-between">
                        <div> <img src={watch} className="img-fluid" alt="speacialProduct" /></div>
                        <div className="special-product-content">
                            <h5 className="brand">Havels</h5>
                            <h6 className="title"> Samsung Galaxy Note10+ Mobile Phone;Sim...</h6>
                            <Rating
                                 onClick={handleRating}
                                 size={24}
                                 activeColor="#ffd700"
                                 value={3}
                                 allowHover={true}
                                 initialValue={5}
                                readonly={true}
                                className="mb-2"
                                 /* Available Props */
                            />
                            <p className="price"><span id="price-1">$100</span>&nbsp;
                                <strike>$200</strike></p>
                            <div className="discount-till d-flex align-items-center gap-10">
                                <p className="mb-0"><b>5</b> Days &nbsp;</p>
                                <div className="d-flex gap-10 align-items-center ">
                                    <span className="badge rounded-circle p-3 ">1</span>&nbsp;:&nbsp;
                                    <span className="badge rounded-circle p-3 ">1</span>&nbsp;:&nbsp;
                                    <span className="badge rounded-circle p-3 ">1</span>

                                </div>

                            </div>
                                <div className="prod-count my-3">
                                    <p>Products : 5 </p>
                                    <div className="progress">
                                        <div className="progress-bar"
                                            role="progressbar"
                                            style={{"width":"25%"}}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                            </div>
                            <Link className="button">
                                Add To Cart
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default SpecialProduct;
