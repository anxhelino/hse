import React from 'react';

import AssetsButton from './AssetsButton';
import AssetsSearch from './AssetsSearch';
import AssetsTable from './AssetsTable';
import PageNumber from './PageNumber';

const AssetsContainer = () => {
  return (
    <div className='assetsContainer'>
      <div className='pageSubTitle'>
        <h1>Assets</h1>
      </div>
      <div className='assetsFlex'>
        <AssetsButton />
        <AssetsSearch />
      </div>
      <AssetsTable />
      <PageNumber />
    </div>
  );
};

export default AssetsContainer;
