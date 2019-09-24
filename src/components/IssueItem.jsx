import React from "react";

export default (props) => {
    return (
        <div className="col-md-6 card-issue">
            <h3 className="card-issue__ttl">{props.title}</h3>
            <div className="card-issue__img">
                <img src={props.img} alt="" />
            </div>
            { props.price && <span className="card-issue__price" dangerouslySetInnerHTML={{__html: props.price}}></span> }
            <div className="card-issue__txt">
                <p>
                    {props.text}
                    <strong className="txt-success">{props.textMark}</strong>
                </p>
            </div>
            <a href="/" className={`btn-md btn-${props.btnType} card-issue__btn`}>{props.btnText}</a>
        </div>
    )
}
