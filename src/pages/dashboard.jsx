import React from 'react';

// Components
import MainHeading from '../components/MainHeading';
import Services from '../components/Services';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <MainHeading />
            <Services />
            <Pagination />
            <Modal />
        </div>
    )
};

export default Dashboard;
