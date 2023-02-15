import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../Footer/Footer';
import Header from '../../Header/Header';

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
