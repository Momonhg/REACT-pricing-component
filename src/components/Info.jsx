import React from "react";

function Info(props) {
return (
<div className="pricing-column col-lg-4 col-md-6">
    <div className="card">
        <div className="card-header">
            <h3 className="pricing-name"> {props.name} </h3>
        </div>
        <div className="class-body">
            <div className="pricing-amount">{props.price}</div>
            <div className="pricing-container">
            <hr />
                <p>{props.storage}</p>
                <hr />
                <p>{props.user}</p>
                <hr />
                <p>{props.ggused}</p>
                <hr />
            </div>
            <button type="button" className="button-55 btn-outline-secondary mb-3"> Learn more
            </button>
        </div>
    </div>

</div>
);
}

export default Info;