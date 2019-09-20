import React from "react";

const Modal = () => {
    return (
        <div className="modal fade" id="modal-general" tabIndex="-1" role="dialog" aria-labelledby="modal-general" aria-hidden="true">
            <div className="modal-dialog modal-wide" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-general">DoNotPay Always Has Your Back</h5>
                    </div>
                    <div className="modal-body">
                        <div className="modal-body__intro">
                            <p><span className="modal-txt-mark">Disclaimer:</span> In order to keep the lights on, we ask for a small tip of $3 a
                                month to pay it forward. This would enable us to help the next individual who may be dealing
                                with an overdraft, flight cancellation nightmare, or even someone getting evicted by their
                                landlord.</p>
                            <p>Of course, your tip won’t begin until *after we succeed in helping you. *If you don’t have
                                enough money in your account to cover the tip, *you won’t be charged anything.</p>
                        </div>

                        <ul className="benefits-list">
                            <li className="benefits-list__item"><strong className="modal-txt-mark">Fight
                                Corporations:</strong> Let us know your problem and we will contact the corporation for
                                you. Never have to waste hours on the phone again!
                            </li>
                            <li className="benefits-list__item"><strong className="modal-txt-mark">Sue Anyone:</strong> Owed more than $500? DoNotPay allows you to
                                generate demand letters, court filings and even a script.
                            </li>
                            <li className="benefits-list__item"><strong className="modal-txt-mark">Beat Bureaucracy:</strong> Let us know your problem and we will
                                contact the corporation for you. Never have to waste hours on the phone again!
                            </li>
                            <li className="benefits-list__item"><strong className="modal-txt-mark">Stay Protected:</strong> From relationship problems to landlord
                                issues, DoNotPay has your back in hundreds of areas.
                            </li>
                        </ul>
                        <h6>Your Connected Account</h6>
                        <div className="connected-card">
                            <div className="connected-card__img">
                                <img src="" alt="" />
                            </div>
                            <div className="connected-card__name">Wells Fargo Card</div>
                            <div className="connected-card__number">**** 2019</div>
                        </div>
                        <p className="modal-agreement">I agree to the DoNotPay Terms of Service dummy text used in
                            laying out print, graphic or 5.00 per month web designse passage is attributed to an
                            unknown.</p>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-transparency" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-lg btn-width-200 btn-primary">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;
