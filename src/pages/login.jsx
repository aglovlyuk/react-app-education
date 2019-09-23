import React from 'react';

// Components

const Login = () => {
    return (
        <React.Fragment>
            <div className="login-header">
                <div className="login-header__container container--md d-flex justify-content-center">
                    <a href="/" className="logo-txt">DoNotPay</a>
                    <a href="/" className="btn-help btn-transparency" aria-label="Help">
                        <svg className="icon icon-question"><use xlinkHref="#icon-question"></use></svg>
                    </a>
                </div>
            </div>

            <div className="empty-wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-xl-6">
                            <div className="login-card">
                                <div className="login-card__header">
                                    <h4 className="login-card__header-ttl">Sign in</h4>
                                    <p className="login-card__header-txt">Sign in to your account with your mobile
                                        number</p>
                                </div>

                                <div className="login-card__body">
                                    <form method="POST" action="">
                                        <div className="form-group login-card__control">
                                            <input id="tel" type="tel" className="form-control-bordered" name="tel"
                                                   placeholder="Your mobile number" required />
                                                <svg className="icon icon-phone"><use xlinkHref="#icon-phone"></use></svg>
                                        </div>

                                        <div className="form-group text-center mb-0">
                                            <a href="/dashboard" type="submit" className="mb-4 btn-lg btn-block btn-primary">
                                                Continue
                                            </a>

                                            <p className="login-card__note">New to DoNotPay? <a href="/">Create an account</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Login;
