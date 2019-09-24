import React from "react";

export default (props) => {
    return (
        <div className="col-sm-6">
            <div className="card">
                <div className="card-image">
                    <img src={props.img} alt="" />
                </div>
                <div className="card__content">
                    <h3 className="card__ttl">{props.title}</h3>
                    <p>{props.text}</p>
                    <a href={props.href} className="link-more">Get started
                        <svg className="icon icon-arrow-r"><use xlinkHref="#icon-arrow-r"></use></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
