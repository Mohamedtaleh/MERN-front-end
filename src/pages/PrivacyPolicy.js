import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container1 from "../components/Container";

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={"Privacy Policy"} />
            <BreadCrumb title="Privacy Policy" />
            <Container1 class1="policy-wrapper py-5 home-wrapper2">
                    <div className="row">
                        <div className="col-12">
                            <p className="policy">

                            </p>

                        </div>
                    </div>

            </Container1>


        </>
    )
}


export default PrivacyPolicy;
