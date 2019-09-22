import React from "react";
import ServiceItem from './ServiceItem';
import CardTrail from './CardTrail';
import Issues from './Issues';
import Refer from './Refer';
import allServices from '../mock/allServices';

const Services = () => {
    return (
        <section className="services">
            <div className="row">
                <div className="col-lg-7">

                    {/* POPULAR PRODUCTS */}
                    <h3 className="block-title">POPULAR PRODUCTS</h3>
                    <div className="row">
                        <ServiceItem data={allServices} />

                        <div className="col-sm-6">
                            <div className="card card--new">
                                <div className="card__content text-center">
                                    <h3 className="card__ttl">Have a custom issue?</h3>
                                    <a href="/" className="btn-secondary">Get started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TRAIL CARD */}
                <div className="col-lg-5">
                    <h3 className="block-title">FREE TRAIL CARD</h3>
                    <CardTrail />
                </div>
            </div>

            {/* OPEN ISSUES */}
            <div className="row">
                <div className="col-lg-7">
                    <h3 className="block-title">OPEN ISSUES</h3>

                    <Issues />
                </div>

                <div className="col-lg-5 d-flex flex-column">
                    <h3 className="block-title">REFER A FRIEND</h3>

                    <Refer />
                </div>
            </div>
        </section>
    )
};

export default Services;
