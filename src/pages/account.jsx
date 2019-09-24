import React from 'react';
import { Link } from 'react-router-dom';

// Components
import MainHeading from '../components/MainHeading';

const Account = () => {
    return (
        <>
            <div className="alert-global alert alert-warning" role="alert">
                <p>Looks like we still need you to add your bank account details. </p>
                <a href="/" className="btn-secondary btn-md">UPDATE BANK DETAILS</a>
                <button className="btn-transparency btn-close" type="button" aria-label="Close"></button>
            </div>

            <div className="dashboard">
                <MainHeading />

                <section className="services">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column">
                            <h3 className="block-title">PROFILE</h3>
                            <div className="refer-card">
                                <h3 className="refer-card__ttl">Profile</h3>

                                <div className="user-profile">
                                    <svg className="user-profile__ava icon icon-ava"><use xlinkHref="#icon-ava"></use></svg>
                                    <span className="user-profile__name">Joshua Browder</span>
                                    <div className="user-profile__create-date">07/02/2018</div>

                                    <button className="user-profile__cta btn-primary btn-cta" type="button">
                                        UPDATE PROFILE
                                        <svg className="icon icon-arrow-angle"><use xlinkHref="#icon-arrow-angle"></use></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex flex-column">
                            <h3 className="block-title">ACCOUNT SETTINGS</h3>
                            <div className="refer-card">
                                <h3 className="refer-card__ttl">Settings</h3>

                                <ul className="account-nav">
                                    <li className="account-nav__item">
                                        <Link to="/">Terms of Service</Link>
                                    </li>
                                    <li className="account-nav__item">
                                        <Link to="/">Contact us</Link>
                                    </li>
                                    <li className="account-nav__item">
                                        <Link to="/">End DoNotPay Services</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex flex-column">
                            <h3 className="block-title">BANK ACCOUNT</h3>
                            <div className="refer-card">
                                <h3 className="refer-card__ttl">Connected Accounts</h3>
                                <div className="connected-card mt-5">
                                    <div className="connected-card__img">
                                        <img src={ require('./../images/visa.png')} alt="" />
                                    </div>
                                    <div className="connected-card__name">Wells Fargo Card</div>
                                    <div className="connected-card__number">
                                        **** 2019
                                        <svg className="connected-card__number-arrow icon icon-arrow-angle"><use xlinkHref="#icon-arrow-angle"></use></svg>
                                    </div>
                                </div>

                                <a href="/" className="refer-card__link link-primary">+ Add bank details</a>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex flex-column">
                            <h3 className="block-title">REFER A FRIEND</h3>
                            <div className="refer-card flex-grow-1">
                                <h3 className="refer-card__ttl">Refer a friend</h3>
                                <p className="refer-card__txt">Lorem ipsum dolor sit amet consectetur adipi</p>

                                <div className="mb-5 form-control-wrap">
                                    <svg className="icon icon-man"><use xlinkHref="#icon-man"></use></svg>
                                    <input className="form-control" type="email" name="" placeholder="example@email.com" id="" />
                                </div>

                                <div className="refer-card__footer d-flex align-items-center">
                                    <button className="refer-card__cta btn-primary" type="submit">SEND</button>
                                    <p className="mb-0">Or create an <a href="/">invite code</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
};

export default Account;
