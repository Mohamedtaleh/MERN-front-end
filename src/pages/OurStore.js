import React,{useState} from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Rating } from 'react-simple-star-rating';
import ProductCard from '../components/ProductCard';
import Color from "../components/Color";
import watch from '../images/watch.jpg';
import gr4 from '../images/gr4.svg'
import gr3 from '../images/gr3.svg'
import gr2 from '../images/gr2.svg'
import gr from '../images/gr.svg'
import Container1 from "../components/Container";


const OurStore = () => {
        const [rating, setRating] = useState(0);
        const handleRating = (rate) => {
        setRating(rate)
    }

    const [grid, setGrid] = useState(4);

    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumb title="Our Store" />

            <Container1 class1="store-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3"><h3 className="filter-title">Shop By Categories</h3>
                                <div><ul className="ps-0">
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>

                                </ul></div>
                            </div>
                            <div className="filter-card mb-3"><h3 className="filter-title">Filter By</h3>
                                <div>
                                    <h5 className="sub-title ">Availability</h5>
                                    <div>
                                        <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label" htmlFor="">
                                            In Stock (2)
                                        </label>
                                    </div>




                                  <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" />
                                        <label className="form-check-label" htmlFor="">
                                            Out of Stock (0)
                                        </label>
                                    </div>


                                    </div>
                                    <h5 className="sub-title ">Price</h5>
                                    <div className="d-flex align-items-center gap-10 ">
                                        <span className="dollar">$</span>&nbsp;

                                        <div className="form-floating  py-1">
                                             <input type="email" className="form-control"  id="floatingInput" placeholder="From"/>
                                             <label htmlFor="floatingInput" className="from">From</label>
                                        </div>&nbsp;

                                        <span className="dollar">$</span>&nbsp;

                                        <div className="form-floating  py-1">

                                             <input type="email" className="form-control"   id="floatingInput1" placeholder="To"/>
                                             <label htmlFor="floatingInput" className="to">To</label>
                                            </div>
                                    </div>

                                    <h5 className="sub-title ">Colors</h5>
                                    <div >
                                        <Color />


                                    </div>

                                    <h5 className="sub-title ">Size</h5>
                                    <div>
                                         <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-1" />
                                        <label className="form-check-label" htmlFor="color-1">
                                            S (1)
                                            </label>
                                            </div>



                                        <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-2" />
                                        <label className="form-check-label" htmlFor="color-2">
                                            M (3)
                                            </label>
                                            </div>


                                        <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-3" />
                                        <label className="form-check-label" htmlFor="color-3">
                                             L (5)
                                            </label>
                                            </div>

                                         <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-4" />
                                        <label className="form-check-label" htmlFor="color-4">
                                            XL (10)
                                            </label>
                                            </div>


                                        <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="color-5" />
                                        <label className="form-check-label" htmlFor="color-5">
                                            XXL (25)
                                        </label>

                                    </div>
                                </div>






                                </div>
                            </div>
                            <div className="filter-card mb-3"><h3 className="filter-title">Product Tags</h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Headphone
                                        </span>

                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Laptop
                                        </span>

                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Mobile
                                        </span>

                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Speaker
                                        </span>

                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Tablet
                                        </span>

                                    </div>
                                </div>

                            </div>
                            <div className="filter-card mb-3"><h3 className="filter-title">Random Products</h3>
                                <div >
                                    <div className="random-product mb-3 d-flex ">
                                        <div className="w-50">
                                            <img src={watch} className="img-fluid" alt="product"/>
                                        </div>

                                        <div className="w-50">
                                            <h5>Kids headphones bulk 10 pack multi colored for students </h5>
                                                <Rating
                                                         onClick={handleRating}
                                                        size={24}
                                                         activeColor="#ffd700"
                                                        value={3}
                                                        allowHover={true}
                                                        initialValue={3}
                                                        readonly={true}
                                                        /* Available Props */
                                                        />&nbsp;
                                            <b> &nbsp;$ 250</b>
                                        </div>
                                    </div>



                                    <div className="random-product mb-3 d-flex ">
                                        <div className="w-50">
                                            <img src={watch} className="img-fluid" alt="product"/>
                                        </div>

                                        <div className="w-50">
                                            <h5>Kids headphones bulk 10 pack multi colored for students </h5>
                                                <Rating
                                                         onClick={handleRating}
                                                        size={24}
                                                         activeColor="#ffd700"
                                                        value={3}
                                                        allowHover={true}
                                                        initialValue={3}
                                                        readonly={true}
                                                        /* Available Props */
                                                        />&nbsp;
                                            <b> &nbsp;$ 250</b>
                                        </div>
                                    </div>


                                    <div className="random-product d-flex ">
                                        <div className="w-50">
                                            <img src={watch} className="img-fluid" alt="product"/>
                                        </div>

                                        <div className="w-50">
                                            <h5>Kids headphones bulk 10 pack multi colored for students </h5>
                                                <Rating
                                                         onClick={handleRating}
                                                        size={24}
                                                         activeColor="#ffd700"
                                                        value={3}
                                                        allowHover={true}
                                                        initialValue={3}
                                                        readonly={true}
                                                        /* Available Props */
                                                        />&nbsp;
                                            <b> &nbsp;$ 250</b>
                                        </div>
                                    </div>



                                </div>
                            </div>

                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                     <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 d-block"
                                            style={{ "width":"-webkit-fill-available"}}>Sort By:</p>
                                    <select name="" className="form-control form-select">
                                        <option value="manual">Featured</option>
                                        <option value="best-selling" selected="selected">Best Selling</option>
                                        <option value="title-ascending">Alphabetically, A-Z</option>
                                        <option value="title-descending">Alphabetically, Z-A</option>
                                        <option value="price-ascending">Price, low to high</option>
                                        <option value="price-descending">Price, high to low</option>
                                        <option value="created-ascending">Date, old to new</option>
                                        <option value="created-descending">Date, new to old</option>


                                    </select>
                                    </div>


                                    <div className="d-flex align-items-center gap-10">

                                        <p className="totalproducts mb-0 ">25 Products </p>
                                        <div className="d-flex gap-15 align-items-center grid ">

                                            <img onClick={() =>{setGrid(3)}} src={gr4} className="d-flex img-fluid" alt="grid" />
                                        <img onClick={() =>{setGrid(4)}} src={gr3} className="d-flex img-fluid" alt="grid" />
                                        <img onClick={() =>{setGrid(6)}} src={gr2} className="d-flex img-fluid" alt="grid" />
                                        <img  onClick={() =>{setGrid(12)}} src={gr} className="d-flex img-fluid" alt="grid"/>



                                        </div>


                                    </div>
                                </div>

                            </div>


                            <div className="product-list py-5">
                                <div className="d-flex gap-10 flex-wrap">
                                     <ProductCard grid={grid} />
                                </div>

                            </div>



                        </div>

                    </div>

            </Container1>
        </>
    )
}


export default OurStore;
