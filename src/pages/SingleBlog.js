import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import blog3 from '../images/blog-1.jpg'
import Container1 from "../components/Container";


const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog name"} />
            <BreadCrumb title="Dynamic Blog name" />

            <Container1 class1="blog-wrapper home-wrapper-2 py-5 ">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <h3 className="title">
                                    A Beautifull Sunday Morning Renaissance
                                </h3>
                                <img src={blog3} className="img-fluid w-100 my-4" alt="blog" />
                                <p>
                                    Vous êtes de plus en plus à nous poser des questions sur les montres connectées.
                                    Même si ce n’est pas notre spécialité, en tant que technophiles, c’est un sujet
                                    qui nous intéresse. Et quand nous délaissons nos montres mécaniques, c’est généralement
                                    au profit d’une G-Shock. Alors quand la marque japonaise nous a proposé de tester leur
                                    nouvelle G-Squad GBD-H2000, nous avons bondi sur l’occasion afin de vous livrer notre ressenti.
                                </p>

                                <Link to="/blogs" className="d-flex align-items-center
                                gap-10"> <AiOutlineArrowLeft className="fs-4" />Go back to Blogs</Link>




                            </div>
                        </div>

                </div>

            </Container1>



        </>
    )
}

export default SingleBlog;
