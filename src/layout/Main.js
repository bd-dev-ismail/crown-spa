import React from 'react';
import { Outlet } from 'react-router-dom';
import {Nav} from '../components/Nav/Nav';
import {Footer} from '../components/Footer/Footer';
const Main = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;