import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import Header from '../components/Header';

const MainLayout: FC = () => {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
