import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container1 from "../components/Container";
import CustomInput from "../components/CustomInput";


const ForgotPass = () => {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" />

            <Container1 class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="login-card">
                            <h3 className="text-center">Reset Your Password</h3>
                            <p className="text-center mt-2 mb-3">
                                We will send you an email to reset your password
                            </p>
                            <form action="" className="d-flex flex-column gap-15">
                                <CustomInput type="email" name="email" className="form-control"
                                    placeholder="Email"/>

                                <div>
                                    <div className="mt-3 d-flex justify-content-center flex-column align-items-center gap-15 ">
                                        <button className="button border-0 login" type="submit">Submit</button>
                                        <Link to='/login'>Cancel</Link>


                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    </div>
            </Container1>


        </>
    )
}


export default ForgotPass;
