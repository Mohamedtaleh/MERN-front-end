import React,{useState} from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import { Rating } from 'react-simple-star-rating';
import ReactImageZoom from "react-image-zoom";
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Container1 from "../components/Container";




const SingleProduct = () => {

    const url = window.location.href
    const props = {
        width: 595,
        height: 500,
        zoomWidth: 500,
        img: "https://ae01.alicdn.com/kf/HTB12foVbf1TBuNjy0Fjq6yjyXXav/EYKI-Mens-Sport-Watch-2018-Luxury-Brand-Male-Clock-Brown-Leather-Watchband-Man-Dress-Wrist-Watches.jpg_Q90.jpg_.webp"
    };
    const [setRating] = useState(false);
    const handleRating = (rate) => {
    setRating(rate)
    }
    const [orderedProduct] = useState(true);
    return (

        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <Container1 class1="main-product-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>

                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div><img src="https://ae01.alicdn.com/kf/HTB12foVbf1TBuNjy0Fjq6yjyXXav/EYKI-Mens-Sport-Watch-2018-Luxury-Brand-Male-Clock-Brown-Leather-Watchband-Man-Dress-Wrist-Watches.jpg_Q90.jpg_.webp" className="img-fluid" alt="watch"/></div>
                                <div><img src="https://ae01.alicdn.com/kf/HTB12foVbf1TBuNjy0Fjq6yjyXXav/EYKI-Mens-Sport-Watch-2018-Luxury-Brand-Male-Clock-Brown-Leather-Watchband-Man-Dress-Wrist-Watches.jpg_Q90.jpg_.webp" className="img-fluid" alt="watch"/></div>
                                <div><img src="https://ae01.alicdn.com/kf/HTB12foVbf1TBuNjy0Fjq6yjyXXav/EYKI-Mens-Sport-Watch-2018-Luxury-Brand-Male-Clock-Brown-Leather-Watchband-Man-Dress-Wrist-Watches.jpg_Q90.jpg_.webp" className="img-fluid" alt="watch"/></div>
                                <div><img src="https://ae01.alicdn.com/kf/HTB12foVbf1TBuNjy0Fjq6yjyXXav/EYKI-Mens-Sport-Watch-2018-Luxury-Brand-Male-Clock-Brown-Leather-Watchband-Man-Dress-Wrist-Watches.jpg_Q90.jpg_.webp" className="img-fluid" alt="watch"/></div>

                            </div>



                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3>Kids heaphones Bulks 10 Pack Multi Colored For Student</h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$ 100.00</p>
                                    <div className="d-flex align-items center gap-10">
                                            <Rating
                                                onClick={handleRating}
                                                size={24}
                                                activeColor="#ffd700"
                                                value={5}
                                                allowHover={true}
                                                initialValue={4}
                                                readonly={true}
                                                /* Available Props */
                                        />
                                        <p className="mb-0 t-review ">(2 reviews)</p>

                                    </div>
                                    <a href="#review" className="review-btn">Write a Review</a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="d-flex gap-10 align-items-center my-2"><h3 className="product-heading">Type : </h3><p className="product-data">Watch</p></div>
                                    <div className="d-flex gap-10 align-items-center my-2"><h3 className="product-heading">Brand : </h3><p className="product-data">Halens</p></div>
                                    <div className="d-flex gap-10 align-items-center my-2"><h3 className="product-heading">Category : </h3><p className="product-data">Watch</p></div>
                                    <div className="d-flex gap-10 align-items-center my-2"><h3 className="product-heading">Tags : </h3><p className="product-data">Smart Watch</p></div>
                                    <div className="d-flex gap-10 align-items-center my-2"><h3 className="product-heading">Availability : </h3><p className="product-data">In Stock</p></div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3"><h3 className="product-heading">Size : </h3><div className="d-flex flex-wrap gap-15">
                                        <span className="badge1 border border-1 border-secondary  p-2">S</span>
                                        <span className="badge1 border border-1 border-secondary  p-2">M</span>
                                        <span className="badge1 border border-1 border-secondary  p-2">Xl</span>
                                        <span className="badge1 border border-1 border-secondary  p-2">xxl</span>

                                    </div></div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3"><h3 className="product-heading">Color : </h3><Color /></div>
                                    <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3"><h3 className="product-heading mt-2 ">Quantity : </h3><div className="">
                                        <input
                                            type="number"
                                            name=""
                                            placeholder="1"
                                            style={{ "width": "70px" }}
                                            min={1}
                                            max={100}
                                            className="form-control border border-1 border-secondary"

                                        />
                                    </div>
                                        <div className="d-flex align-items-center ms-5 gap-30">
                                                <button className="button border-0 login" type="submit">Add To Cart</button>
                                                <button className="button signup">Buy It Now</button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15 ">
                                        <div className="mt-3">
                                            <TbGitCompare className="fs-4 me-2" />
                                            <a href="/">Add to Compare</a>
                                        </div>
                                        <div className="mt-3">
                                            <AiOutlineHeart className="fs-4 me-2"  />
                                            <a href="/">Add to Wishlist</a>
                                        </div>

                                    </div>
                                    <div className="d-flex gap-10 flex-column  my-3"><h3 className="product-heading">Shipping & Returns : </h3>
                                        <p className="product-data">Free Shipping and returns available on all orders! <br /> We ship all US domestic orders within <b>5-10 business day!</b> </p></div>
                                    <div className="d-flex gap-10 flex-column my-3"><h3 className="product-heading">Materials : </h3>
                                        <p className="product-data"> ainsi que quelque chose qui soit esthétiquement <br/> agréable pour
                                            vous (après tout, vous devriez en voir beaucoup).
                                        </p></div>
                                    <div className="d-flex gap-10 flex-column my-3"><h3 className="product-heading">Share </h3>
                                        <CopyToClipboard text={url}>
                                                  <button className="button25 bg-white"><p className="position-relative">Copy URL to the clipboard</p></button>
                                        </CopyToClipboard></div>




                                </div>

                            </div>

                        </div>
                    </div>
            </Container1>
            <Container1 class1="description-wrapper py-5 home-wrapper-2 ">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="">Description</h3>

                            <div className="bg-white p-3">
                            <p >
                                    Vous êtes de plus en plus à nous poser des questions sur les montres connectées.
                                    Même si ce n’est pas notre spécialité, en tant que technophiles, c’est un sujet
                                    qui nous intéresse. Et quand nous délaissons nos montres mécaniques, c’est généralement
                                    au profit d’une G-Shock. Alors quand la marque japonaise nous a proposé de tester leur
                                    nouvelle G-Squad GBD-H2000, nous avons bondi sur l’occasion afin de vous livrer notre ressenti.
                            </p>
                            </div>

                        </div>
                    </div>
            </Container1>
            <Container1 id="review" class1="reviews-wrapper  home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h3>Reviews</h3>
                           <div className="reviews-inner-wrapper">
                                <div className="reviews-head d-flex justify-content-between align-items-end">

                                <div>
                                    <h4 className="mb-2">Customer Reviews</h4>
                                    <div className="d-flex align-items-center gap-10">
                                 <Rating
                                 onClick={handleRating}
                                size={24}
                                activeColor="#ffd700"
                                value={5}
                                allowHover={true}
                                initialValue={4}
                                readonly={true}
                                /* Available Props */
                                        />
                                        <p className="mb-0">Based on 2 Reviews</p>
                                    </div>
                                </div>
                                {
                                    orderedProduct && <div>
                                        <a  id="aa"className="text-dark text-decoration-underline  " href="/">Write a Review</a>

                                </div>

                                }

                                </div>
                                <div  className="review-form py-4">

                                    <h4 className="mb-2">Write a Review</h4>
                                   <form action="" className="d-flex flex-column gap-15">

                                        <div>
                                            <div className="mb-3">
                               <Rating
                                 onClick={handleRating}
                                 size={24}
                                activeColor="#ffd700"
                                value={5}
                                allowHover={true}
                                initialValue={4}
                                readonly={false}
                                /* Available Props */
                                                />
                                                </div>
                                            <textarea
                                                name=""
                                                id="ss"
                                                className="w-100 form-control"
                                                placeholder="Write your comments here"
                                                cols="38"
                                                rows="4" >

                                            </textarea>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="button border-0">Submit Review</button>

                                        </div>
                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center ">
                                            <h6 className="mb-0">Navdeep</h6>
                                           <Rating
                                                onClick={handleRating}
                                                size={24}
                                                activeColor="#ffd700"
                                                value={5}
                                                allowHover={true}
                                                initialValue={4}
                                                readonly={true}
                                                /* Available Props */
                                            />
                                        </div>

                                        <p className="mt-3" > he is actually the mot beautifful product that I had ever buyed from someome
                                             Thanksyou so much for your good quallity</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
            </Container1>
            <Container1 class1="special-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Product</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                        <ProductCard />
                    </div>

            </Container1>
      </>
    )
}

export default SingleProduct;
