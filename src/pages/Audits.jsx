import React, { useState } from 'react';
import MainCarousel from '../components/MainCarousel';
import SelectionCarousel from '../components/SelectionCarousel';

const Audits = () => {

  return (
    <div className="audits-container">
      <MainCarousel />
      <SelectionCarousel />
    </div>
  );
};

export default Audits;
 