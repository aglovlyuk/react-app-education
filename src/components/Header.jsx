import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header-user">
                    <button type="button" className="btn-transparency header-user__icon">
                        <svg className="icon icon-notification"><use xlinkHref="#icon-notification"></use></svg>
                    </button>
                </div>

                <div className="login">
                    <Link to="/account" className="btn-transparency login-link">
                        <svg className="icon icon-ava"><use xlinkHref="#icon-ava"></use></svg>
                    </Link>
                </div>
            </div>
        </header>
    )
};

export default Header;
