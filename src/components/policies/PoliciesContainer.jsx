import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PoliciesImage from '../../assets/images/policy-analyzer-svgrepo-com.svg';

const PoliciesContainer = () => {
  return (
    <div className='issuesContainer'>
      <div className='pageSubTitle'>
        <h1>Policies</h1>
        <button className='actionButton'>
          <FontAwesomeIcon icon={faPlus} />
          Upload Policy
        </button>
      </div>
      <div className='emptyIssuesContainer'>
        <img src={PoliciesImage} alt='issues' className='issuesImage' />
        <p className='issuesMainParagraph'>
          Upload any Policy implemented by your company
        </p>
        <p>Policies created and done by your company will be listed here</p>
      </div>
    </div>
  );
};

export default PoliciesContainer;
