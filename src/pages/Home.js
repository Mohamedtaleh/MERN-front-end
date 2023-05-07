import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import main from "../images/main-banner-1.jpg";
import catbanner from "../images/catbanner-01.jpg";
import catbanner2 from "../images/catbanner-03.jpg";
import catbanner3 from "../images/catbanner-02.jpg";
import catbanner4 from "../images/catbanner-04.jpg";
import headphone from '../images/headphone.jpg';
import tv from '../images/tv.jpg';
import camera from '../images/camera.jpg'
import smart from '../images/smart.png';
import tablet from '../images/tablet_.jpg'
import brand1 from '../images/brand-01.png';
import brand2 from '../images/brand-02.png';
import brand3 from '../images/brand-03.png';
import brand4 from '../images/brand-04.png';
import brand5 from '../images/brand-05.png';
import brand6 from '../images/brand-06.png';
import brand7 from '../images/brand-07.png';
import brand8 from '../images/brand-08.png';
import Container1 from "../components/Container";
import { servicesPro } from "../utils/Data";


const Home = () => {
    return (

        <>
            <Container1 class1="home-wrapper-1 py-5">
                   <div className="row">
                        <div className="col-6">
                            <div className="main-banner p-3 position-relative">
                                <img src={main} alt="main-banner"
                                    className="img-fluid rounded-3" />
                                <div className="main-banner-content position-absolute">
                                    <h4>RECHARGED FOR PROS.</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999.00 or $41.62/mo<br />for 24 mon.Footnote*</p>
                                    <Link className="button">BUY NOW</Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10" >
                            <div className="small-banner p-3 position-relative "id="small" >
                                <img src={catbanner} alt="main-banner"
                                    className="img-fluid rounded-3" />
                                <div className="small-banner-content position-absolute">
                                    <h4>Best Sale</h4>
                                    <h5>Laptops Max</h5>
                                    <p>From $1699.00 or <br /> $64.55/mo .</p>

                                </div>
                                </div>
                            <div className="small-banner p-3 position-relative" >
                                <img src={catbanner2} alt="main-banner"
                                    className="img-fluid rounded-3" />
                                <div className="small-banner-content position-absolute">
                                    <h4>New arrivale</h4>
                                    <h5>Buy IPAD Air</h5>
                                    <p>From $599.00 or<br /> $49.40/mo</p>

                                </div>
                                </div>
                            <div className="small-banner p-3 position-relative">
                                <img src={catbanner3} alt="main-banner"
                                    className="img-fluid rounded-3" />
                                <div className="small-banner-content position-absolute">
                                    <h4>15% OFF</h4>
                                    <h5>Smartwatch 7</h5>
                                    <p>Shop the latest brand <br /> styles and colors</p>

                                </div>
                                </div>
                            <div className="small-banner p-3 position-relative">
                                <img src={catbanner4} alt="main-banner"
                                    className="img-fluid rounded-3" />
                                <div className="small-banner-content position-absolute">
                                    <h4>Free engraving</h4>
                                    <h5>AirPods Max</h5>
                                    <p>Hight-fidelity playback &<br/> ultra-low distorion</p>

                                </div>
                                </div>






                            </div>
                        </div>

                    </div>
            </Container1>

            <Container1 class1="home-wrapper-2 py-5" >
                    <div className="row">
                        <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            {
                                servicesPro?.map((i, j) => {
                                    return (
                                <div className="d-flex align-items-center gap-15" key={j}>
                                            <img src={i.image} alt="services" />
                                            <div>
                                                <h6>{i.title}</h6>
                                                <p className="mb-0">{ i.tagline}</p>
                                            </div>
                                </div>
                                    )

                                })
                            }



                        </div>

                        </div>
                    </div>
            </Container1>

            <Container1 class1="home-wrapper-2 py-5" >
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between flex-wrap align-items-center ">
                                <div className=" d-flex gap align-items-center">
                                    <div><h6>
                                        HeadPhone
                                    </h6>
                                        <p>
                                            10 Items

                                        </p>
                                    </div>
                                    <img src={headphone} alt="camera"/>
                                </div>


                                <div className=" d-flex gap align-items-center">
                                    <div><h6>
                                        Smart Tv
                                    </h6>
                                        <p>
                                            10 Items

                                        </p>
                                    </div>
                                    <img src={tv} alt="camera"/>
                                </div>

                                <div className=" d-flex gap align-items-center">
                                    <div><h6>
                                        Cameras
                                    </h6>
                                        <p>
                                            10 Items

                                        </p>
                                    </div>
                                    <img src={camera} alt="camera"/>
                                </div>

                                <div className=" d-flex gap align-items-center">
                                    <div><h6>
                                        Music & gaming
                                    </h6>
                                        <p>
                                            10 Items

                                        </p>
                                    </div>
                                    <img src={camera} alt="camera"/>
                                </div>



                               <div className=" d-flex gap-align-items-center">
                                   <div><h6>
                                       HeadPhone
                                   </h6>
                                       <p>
                                           10 Items
                                       </p>
                                   </div>
                                   <img src={headphone} alt="camera"/>
                               </div>
                               <div className=" d-flex gap-align-items-center">
                                   <div><h6>
                                       Smart Tv
                                   </h6>
                                       <p>
                                           10 Items
                                       </p>
                                   </div>
                                   <img src={tv} alt="camera"/>
                               </div>
                               <div className=" d-flex gap-align-items-center">
                                   <div><h6>
                                       Cameras
                                   </h6>
                                       <p>
                                           10 Items
                                       </p>
                                   </div>
                                   <img src={camera} alt="camera"/>
                               </div>
                               <div className=" d-flex gap-align-items-center">
                                   <div><h6>
                                       Music & gaming
                                   </h6>
                                       <p>
                                           10 Items
                                       </p>
                                   </div>
                                   <img src={camera} alt="camera"/>
                               </div>




                            </div>
                        </div>
                    </div>
            </Container1>

            <Container1 class1="featured-wrapper py-5 home-wrapper-2" >
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Featured Collection</h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                    </div>
            </Container1>


            <Container1 class1="famous-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-3">
                            <div className="famous-card  position-relative">
                                <img src={smart}   alt="famous" />
                                <div className="famous-content position-absolute">
                                    <h5> Big screen</h5>
                                    <h6>Smart Watch Series 7</h6>
                                    <p>From $399 or $16.99/mo.<br />for 24/mo</p>
                                </div>

                            </div>
                        </div>


                       <div className="col-3">
                            <div className="famous-card  position-relative " style={{"left":"400px"}}>
                                <img src={tablet} width="700px"  height="390px" alt="famous" />
                                <div className="famous-content position-absolute " style={{"color": "black"}}>
                                    <h3> Studio Display</h3>
                                    <h4>600 Nits Of Brightness</h4>
                                    <p id="p">27-inch 5k Retina display</p>
                                </div>

                            </div>
                        </div>



                    </div>
            </Container1>

            <Container1 class1="special-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Special Products</h3>
                        </div>

                    </div>
                    <div className="row ">
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />

                    </div>
            </Container1>

            <Container1 class1="popular-wrapper py-5 home-wrapper-2">
                   <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Product</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                    </div>

            </Container1>

            <Container1 class1="marque-wrapper py-5" >
                    <div className="row">
                        <div className="col-12">
                            <div className="marque-inner-wrapper card-wrapper">
                                < Marquee className="d-flex">
                                    <div className="mx-4 w-25"><img  src={brand1} alt="brand"/></div>
                                    <div className="mx-4 w-25"><img  src={brand2} alt="brand"/></div>
                                    <div className="mx-4 w-25"><img  src={brand3} alt="brand"/></div>
                                    <div className="mx-4 w-25"><img  src={brand4} alt="brand"/></div>
                                    <div className="mx-4 w-25"><img  src={brand5} alt="brand"/></div>
                                    <div className="mx-4 w-25"><img  src={brand6} alt="brand"/></div>
                                    <div className="mx-4 w-25"><img  src={brand7} alt="brand"/></div>
                                    <div className="mx-4 w-25"><img  src={brand8} alt="brand"/></div>

                                </Marquee>
                        </div>
                    </div>
                    </div>

            </Container1>
            <Container1 class1="blog-wrapper py-5 home-wrapper-2">
                   <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Latest Blogs</h3>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <BlogCard />
                            </div>
                            <div className="col-3">
                                <BlogCard />
                            </div>
                            <div className="col-3">
                                <BlogCard />
                            </div>
                            <div className="col-3">
                                <BlogCard />
                            </div>

                        </div>


                    </div>

            </Container1>
        </>






    )
}


export default Home;
