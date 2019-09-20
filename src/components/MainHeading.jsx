import React from "react";

const MainHeading = () => {
    return (
        <React.Fragment>

            <section className="dashboard__heading">
                <div className="row">
                    <div className="col-sm-7">
                        <h2>Welcome back Josh</h2>
                        <p className="dashboard__heading-txt">Your DoNotPay Reward Balance is
                            <mark className="mark-txt">3,213 points</mark>
                        </p>
                    </div>
                    <div className="col-sm-5 text-sm-right">
                        <button className="btn-primary" data-toggle="modal" data-target="#modal-general">
                            Solve my problem
                        </button>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
};

export default MainHeading;
