import React,{useState} from "react";
import { Rating } from 'react-simple-star-rating'
import { Link, useLocation } from "react-router-dom";
import watch from '../images/watch.jpg';
import speaker from '../images/speaker.jpg';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import addCart from '../images/add-cart.svg';
import wish from '../images/wish.svg';



const ProductCard = (props) => {
    const [rating, setRating] = useState(0);
    const handleRating = (rate) => {
    setRating(rate)
    }
    const {grid} = props

    let location = useLocation();



    return (
        <>
            <div className={`col-3 ${location.pathname === "/store"} ? gr-${grid} : "col-3" `}>
                <Link to="/product/:id" className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent"
                        >
                            <img  src={wish} alt="whishlist"/>
                        </button>

                    </div>
                    <div className="product-image">
                        <img src={watch} className="img-fluid" alt="product" />
                        <img  src={speaker}  className="img-fluid" alt="product"/>
                    </div>
                    <div className="product-details">
                        <h6 className="brand"> Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                         <Rating
                            onClick={handleRating}
                            size={24}
                            activeColor="#ffd700"
                            value={3}
                            allowHover={true}
                            initialValue={3}
                            readonly={true}
                            /* Available Props */
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            HUAWEI WATCH GT 3 46 mm,Longue autonomie,AI Running Coach,100+ modes sport
                            ,Appels Bluetooth,Positionnement à cinq systèmes,Suivi de la fréquence cardiaque
                            ,Surveillance du SpO2,iOS et Android,Noir

                        </p>


                        <p className="price">$100.00</p>
                    </div>

                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent" ><img src={prodcompare} alt="add" /></button>
                            <button className="border-0 bg-transparent" ><img src={view} alt="add" /></button>
                            <button className="border-0 bg-transparent" ><img src={addCart} alt="add" /></button>

                        </div>
                    </div>

                </Link>

            </div>
            <div className={`col-3 ${location.pathname === "/store"} ? gr-${grid} : "col-3" `}>
                <Link to="/product/:id" className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <Link to="/singleproduct"
                        >
                            <img  src={wish} alt="whishlist"/>
                        </Link>

                    </div>
                    <div className="product-image">
                        <img src={watch} className="img-fluid" alt="product" />
                        <img  src={speaker}  className="img-fluid" alt="product"/>
                    </div>
                    <div className="product-details">
                        <h6 className="brand"> Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                         <Rating
                            onClick={handleRating}
                            size={24}
                            activeColor="#ffd700"
                            value={3}
                            allowHover={true}
                            initialValue={3}
                            readonly={true}
                            /* Available Props */
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            HUAWEI WATCH GT 3 46 mm,Longue autonomie,AI Running Coach,100+ modes sport
                            ,Appels Bluetooth,Positionnement à cinq systèmes,Suivi de la fréquence cardiaque
                            ,Surveillance du SpO2,iOS et Android,Noir

                        </p>


                        <p className="price">$100.00</p>
                    </div>

                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link ><img src={prodcompare} alt="add" /></Link>
                            <Link ><img src={view} alt="add" /></Link>
                            <Link ><img src={addCart} alt="add" /></Link>

                        </div>
                    </div>

                </Link>

            </div>

        </>
    )
}


export default ProductCard;
