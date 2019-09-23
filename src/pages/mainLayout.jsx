import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import { ReactComponent as SvgSprite } from '../images/sprite.svg';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Dashboard from "./dashboard";
import Account from "./account";

const mainLayout = () => {
    return (
        <React.Fragment>
            <SvgSprite />
            <div className="wrapper">
                <Aside />
                <main className="main">
                    <Header />

                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/account" component={Account} />
                     </Switch>
                </main>
            </div>
        </React.Fragment>
    )
};

export default mainLayout;
