import React from "react";

class ServiceItem extends React.Component {
    render() {
        const serviceTemplate = this.props.data.map(function(item) {
            return (
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-image">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="card__content">
                            <h3 className="card__ttl">{item.title}</h3>
                            <p>{item.text}</p>
                            <a href={item.href} className="link-more">Get started
                                <svg className="icon icon-arrow-r"><use xlinkHref="#icon-arrow-r"></use></svg>
                            </a>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <React.Fragment>
                {serviceTemplate}
            </React.Fragment>
        )
    }
}

export default ServiceItem;
