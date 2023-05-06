import React from "react";




const Container1 = (props ) => {
    return (

            <section className={props.class1}>
            <div className="container-xxl">
                {props.children}
            </div>
            </section>

    )
}


export default Container1;
