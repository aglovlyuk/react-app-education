import React from "react";

const Issues = () => {
    return (
        <React.Fragment>

            <div className="cards-issues">
                <div className="row">
                    <div className="col-md-6 card-issue">
                        <h3 className="card-issue__ttl">You’ve got money!</h3>
                        <div className="card-issue__img">
                            <img src={ require('./../images/ico-money.png')} alt="" />
                        </div>
                        <span className="card-issue__price">$201.<small>52</small></span>
                        <div className="card-issue__txt">
                            <p>I have contacted United and waived your change fees, saving you <strong
                                className="txt-success">$201.52</strong></p>
                        </div>
                        <a href="href" className="btn-md btn-secondary">CLEAR NOTIFCATION</a>
                    </div>

                    <div className="col-md-6 card-issue">
                        <h3 className="card-issue__ttl">Parking Ticket Dispute</h3>
                        <div className="card-issue__img">
                            <img src={ require('./../images/ico-ticket.png')} alt="" />
                        </div>
                        <div className="card-issue__slider">
                            <img src={ require('./../images/slider.png')} alt="" />
                        </div>
                        <div className="card-issue__txt">
                            <p>We need your account number to send funds to <strong className="txt-mark">Resolve
                                now</strong></p>
                        </div>
                        <a href="href" className="btn-md btn-danger">RESOLVE NOW</a>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
};

export default Issues;
