import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AssetsButton = () => {
  return (
    <div className='assetsButtonContainer'>
      <Link to={'create-new-asset'} className='assetsButton'>
        <FontAwesomeIcon icon={faPlus} /> Create New Asset
      </Link>
    </div>
  );
};

export default AssetsButton;
