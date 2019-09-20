import React from "react";

const CardTrail = () => {
    return (
        <React.Fragment>

            <div className="card-trail">
                <div className="card-trail__content">
                    <img className="card-trail__img" src={ require('./../images/card.png')} alt="" />
                </div>

                <div className="card-panel">
                    <span className="card-panel__ttl">Did the card work for you?</span>

                    <div className="d-flex flex-grow-1 justify-content-end">
                        <input type="radio" name="card-work" id="card-work-yes" />
                        <label className="card-panel__label" htmlFor="card-work-yes">YES</label>
                        <input type="radio" name="card-work" id="card-work-no" />
                        <label className="card-panel__label" htmlFor="card-work-no">NO</label>
                    </div>
                </div>

                <div className="card-info">
                    <div className="card-info__row">
                        <div className="card-info__ttl">Card Number</div>
                        <div className="card-info__txt">3821-3718-2718-3826</div>
                        <button className="card-info__action btn-transparency">
                            <svg className="icon icon-copy"><use xlinkHref="#icon-copy"></use></svg>
                            <span className="tooltip-over">Copy</span>
                        </button>
                    </div>

                    <div className="card-info__row">
                        <div className="card-info__ttl">CVV</div>
                        <div className="card-info__txt">382</div>
                        <button className="card-info__action btn-transparency">
                            <svg className="icon icon-copy"><use xlinkHref="#icon-copy"></use></svg>
                            <span className="tooltip-over">Copy</span>
                        </button>
                    </div>

                    <div className="card-info__row">
                        <div className="card-info__ttl">Expiry Date</div>
                        <div className="card-info__txt">11/21</div>
                        <button className="card-info__action btn-transparency">
                            <svg className="icon icon-copy"><use xlinkHref="#icon-copy"></use></svg>
                            <span className="tooltip-over">Copy</span>
                        </button>
                    </div>

                    <div className="card-info__footer">
                        <svg className="icon icon-card"><use xlinkHref="#icon-card"></use></svg>
                        <p>DoNotPay free trail sed do sit amet con sect etur adipis cing elit sed do
                            eiusmod.</p>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
};

export default CardTrail;