import React from "react";
import mainLogo from './../images/logo.svg';

const Aside = () => {
    return (
        <React.Fragment>
            <aside className="sidebar fixed-left navbar-expand-md navbar-light" id="sidebar">
                {/*Toggler*/}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse"
                        aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <svg className="icon icon-burger"><use xlinkHref="#icon-burger"></use></svg>
                </button>

                <a className="navbar-brand" href="href">
                    <img className="logo__img" src={mainLogo} width="119" alt="" />
                </a>

                <div className="login d-md-none">
                    <button className="btn-transparency login-link">
                        <svg className="icon icon-logout"><use xlinkHref="#icon-logout"></use></svg>
                        Log Out
                    </button>
                </div>

                {/* Collapsing nav */}
                <div className="collapse navbar-collapse" id="sidebarCollapse">
                    <div className="collapse-inner">
                        <nav className="main-nav">
                            <ul className="main-nav__list">
                                <li className="main-nav__item is-active">
                                    <a href="href">
                                        <span className="main-nav__item-icon">
                                            <svg className="icon icon-home"><use xlinkHref="#icon-home"></use></svg>
                                        </span>
                                        Home
                                    </a>
                                </li>
                                <li className="main-nav__item">
                                    <a href="href">
                                        <span className="main-nav__item-icon"><svg className="icon icon-star"><use xlinkHref="#icon-star"></use></svg></span>
                                        Rewards <span className="badge badge-primary">3,123</span>
                                    </a>
                                </li>
                                <li className="main-nav__item">
                                    <a href="href">
                                        <span className="main-nav__item-icon"><svg className="icon icon-document"><use xlinkHref="#icon-document"></use></svg></span>
                                        Disputes
                                    </a>
                                </li>
                                <li className="main-nav__item">
                                    <a href="href">
                                        <span className="main-nav__item-icon"><svg className="icon icon-people"><use xlinkHref="#icon-people"></use></svg></span>
                                        Community
                                    </a>
                                </li>
                                <li className="main-nav__item">
                                    <a href="href">
                                        <span className="main-nav__item-icon"><svg className="icon icon-shield"><use xlinkHref="#icon-shield"></use></svg></span>
                                        Police Protection
                                    </a>
                                </li>
                                <li className="main-nav__item">
                                    <a href="href">
                                        <span className="main-nav__item-icon"><svg className="icon icon-frame"><use xlinkHref="#icon-frame"></use></svg></span>
                                        Document Checker
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <nav className="additional-nav">
                            <ul className="additional-nav__list">
                                <li className="additional-nav__list-item"><a href="href">Help</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>

        </React.Fragment>
    )
};

export default Aside;