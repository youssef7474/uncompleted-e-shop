import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import {Outlet} from "react-router-dom"


const RootLayOut = () => {
  return (
    <div>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
  </div>
  );
}

export default RootLayOut;
