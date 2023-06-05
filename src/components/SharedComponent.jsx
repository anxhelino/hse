import React from 'react';

import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import { Outlet } from 'react-router';

const SharedComponent = () => {
  return (
    <>
      <MobileNavigation />
      <Navigation />
      <Outlet />
    </>
  );
};

export default SharedComponent;
