import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header-user">
                    <div className="header-user__icon">
                        <svg className="icon icon-notification"><use xlinkHref="#icon-notification"></use></svg>
                    </div>
                </div>

                <div className="login">
                    <button className="btn-transparency login-link">
                        <svg className="icon icon-ava"><use xlinkHref="#icon-ava"></use></svg>
                    </button>
                </div>
            </div>
        </header>
    )
};

export default Header;
