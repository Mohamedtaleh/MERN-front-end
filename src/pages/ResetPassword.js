import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container1 from "../components/Container";
import CustomInput from "../components/CustomInput";



const ResetPass = () => {
    return (
        <>
           <Meta title={"Reset Pasword"} />
            <BreadCrumb title="Reset Password" />
            <Container1 class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="login-card">
                            <h3 className="text-center">Reset Password</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <CustomInput type="password" name="password" className="form-control"
                                    placeholder="New Password " />
                                <CustomInput type="password" name="confpassword" className="form-control"
                                    placeholder="Confirm Password"/>


                                <div>
                                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15 ">
                                        <button className="button border-0" type="submit">Submit</button>

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

export default ResetPass;
