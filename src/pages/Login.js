import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container1 from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />

        <Container1 class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="login-card">
                            <h3 className="text-center">Login</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <CustomInput type="email" name="email" className="form-control"
                                    placeholder="Email"/>
                                <CustomInput type="password" name="password" className="form-control"
                                    placeholder="Password"/>
                                <div>
                                    <Link to='/forgot'>Forgot Password?</Link>
                                    <div className="mt-3 d-flex justify-content-center align-items-center gap-15 ">
                                        <button className="button border-0 login" type="submit">Login</button>
                                        <Link className="button signup" to="/signup">SignUp</Link>

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


export default Login;
