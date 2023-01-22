import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Nav from '../pages/Navbar/Nav';

const Main = () => {
    return (
        <div>
           <Nav></Nav>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Main;