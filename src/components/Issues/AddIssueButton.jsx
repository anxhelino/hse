import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddIssueButton = ({ openModal }) => {
  return (
    <button
      className='actionButton'
      onClick={() => openModal.current.openModal()}
    >
      <FontAwesomeIcon icon={faPlus} />
      Report Issue
    </button>
  );
};

export default AddIssueButton;
