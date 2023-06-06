import React from 'react';

import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import { Outlet } from 'react-router';
import Header from './Header';

const SharedComponent = () => {
  return (
    <>
      <div className='mainContainer'>
        <Header />
        <div className='desktopContainer'>
          <MobileNavigation />
          <Navigation />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SharedComponent;
