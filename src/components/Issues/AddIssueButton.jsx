import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddIssueButton = () => {
  return (
    <button className='actionButton'>
      <FontAwesomeIcon icon={faPlus} />
      Report Issue
    </button>
  );
};

export default AddIssueButton;
