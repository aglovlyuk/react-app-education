import React from "react";
import ServiceItem from './ServiceItem';
import CardTrail from './CardTrail';
import Issues from './Issues';
import Refer from './Refer';

const allServices = [
    {
        id: 1,
        img: "/images/img01.png",
        title: 'Ticket Disputes',
        text: 'All your driving tickets sorted.',
        href: 'href'
    },
    {
        id: 2,
        img: "images/img02.png",
        title: 'Find Hidden Money',
        text: 'All your driving tickets sorted.',
        href: 'href'
    },
    {
        id: 3,
        img: "images/img03.png",
        title: 'Government Paperwork',
        text: 'All your driving tickets sorted.',
        href: 'href'
    },
    {
        id: 4,
        img: "images/img04.png",
        title: 'I’m Owed $500+',
        text: 'All your driving tickets sorted.',
        href: 'href'
    },
    {
        id: 5,
        img: "images/img05.png",
        title: 'Customer Service Issues',
        text: 'All your driving tickets sorted.',
        href: 'href'
    }
];

const Services = () => {
    return (
        <React.Fragment>

            <section className="services">
                <div className="row">
                    <div className="col-lg-7">
                        <h3 className="block-title">POPULAR PRODUCTS</h3>

                        <div className="row">
                            <ServiceItem data={allServices} />

                            <div className="col-sm-6">
                                <div className="card card--new">
                                    <div className="card__content text-center">
                                        <h3 className="card__ttl">Have a custom issue?</h3>
                                        <a href="href" className="btn-secondary">Get started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <h3 className="block-title">FREE TRAIL CARD</h3>

                        <CardTrail />
                    </div>
                </div>

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

        </React.Fragment>
    )
};

export default Services;
