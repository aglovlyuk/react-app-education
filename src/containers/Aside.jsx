import React from 'react';

import mainLogo from './../images/logo.svg';
import AsideNavItem from '../components/AsideNavItem';
import navMock from '../data/navMock';

class Aside extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            navItems: []
        };
    }

    render() {
        return (
            <aside className="sidebar fixed-left navbar-expand-md navbar-light" id="sidebar">
                {/*Toggler*/}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse"
                        aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <svg className="icon icon-burger"><use xlinkHref="#icon-burger"></use></svg>
                </button>

                <a className="navbar-brand" href="/">
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
                                {navMock && navMock.map( navItem => <AsideNavItem key={`nav-${navItem.title}`} {...navItem}/> )}
                            </ul>
                        </nav>

                        <nav className="additional-nav">
                            <ul className="additional-nav__list">
                                <li className="additional-nav__list-item"><a href="/">Help</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </aside>
        )
    }
}

export default Aside;
