import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container1 from "../components/Container";
import CustomInput from "../components/CustomInput";


const SignUp = () => {
    return (
        <>
            <Meta title={"Sign Up"} />
            <BreadCrumb title="Sign up" />

        <Container1 class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="login-card">
                            <h3 className="text-center">Create Account </h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <CustomInput type="text" name="text" className="form-control"
                                    placeholder="First Name" />
                                <CustomInput type="text" name="text" className="form-control"
                                    placeholder="Last Name" />
                                <CustomInput type="tel" name="tel" className="form-control"
                                    placeholder="Phone Number" />
                                <CustomInput type="email" name="email" className="form-control"
                                    placeholder="Email" />
                                <CustomInput  type="password" name="password" className="form-control"
                                    placeholder="Password" />


                                <div>
                                    <div className="mt-2 d-flex justify-content-center align-items-center gap-15 ">
                                        <button className="button border-0">Create</button>

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


export default SignUp;
