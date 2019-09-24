import React from 'react';

import ServiceItem from "../components/ServiceItem";
import Services from '../data/allServices';

class PopularServices extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            serviceItems: []
        };
    }

    render() {
        return (
            <div className="col-lg-7">
                {/* POPULAR PRODUCTS */}
                <h3 className="block-title">POPULAR PRODUCTS</h3>
                <div className="row">
                    {Services && Services.map( item => <ServiceItem key={`${item.id}`} {...item}/> )}

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
        )
    }
}

export default PopularServices;
