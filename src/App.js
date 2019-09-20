import React from 'react';
import { ReactComponent as SvgSprite } from './images/sprite.svg';
import Aside from './components/Aside';
import Header from './components/Header';
import MainHeading from './components/MainHeading';
import Services from './components/Services';
import Pagination from './components/Pagination';
import Modal from './components/Modal';

function App() {
  return (
    <React.Fragment>
        <SvgSprite />
        <div className="wrapper">
            <Aside />
            <main className="main">
                <Header />
                <div className="dashboard">
                    <MainHeading />
                    <Services />
                    <Pagination />
                    <Modal />
                </div>
            </main>
        </div>
    </React.Fragment>
  );
}

export default App;
