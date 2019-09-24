import React from "react";

import PopularServices from '../containers/AllServices';
import OpenedIssues from '../containers/Issues';
import CardTrail from './CardTrail';
import Refer from '../containers/Refer';

const Services = () => {
    return (
        <section className="services">
            <div className="row">
                <PopularServices />

                {/* TRAIL CARD */}
                <div className="col-lg-5">
                    <h3 className="block-title">FREE TRAIL CARD</h3>
                    <CardTrail />
                </div>
            </div>

            {/* OPEN ISSUES */}
            <div className="row">
                <OpenedIssues />
                <Refer />
            </div>
        </section>
    )
};

export default Services;
