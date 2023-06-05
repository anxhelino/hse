import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const SitesButton = () => {
  return (
    <div className='assetsButtonContainer'>
      <Link to={'add-new-site/siteInformation'} className='assetsButton'>
        <FontAwesomeIcon icon={faPlus} />
        Add New Site
      </Link>
    </div>
  );
};

export default SitesButton;
