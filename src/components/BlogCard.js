import React from "react";
import { Link } from "react-router-dom";
import blog1 from '../images/blog-1.jpg'


const BlogCard = () => {
    return (
        <>
                <div className="blog-card">
                    <div className="card-image">
                        <img src={blog1} alt="blog" className="img-fluid w-100" />
                    </div>
                    <div className="blog-content">
                        <p className="date"> 2 Dec 2022</p>
                        <h5 className="title">A beautiful sunday morning renaissance</h5>
                        <p className="desc">You're only As good As Your Last Collection . Wish is An
                                            Enormous Processure .I think There is something ,About....</p>
                        <Link className="button" to="/blogs/:id">Read More</Link>


                    </div>
                </div>
        </>
    )
}


export default BlogCard;
