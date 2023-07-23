import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import './Layout.scss';

export const Layout: FC = () => {
  return (
    <div className={'layout'}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
