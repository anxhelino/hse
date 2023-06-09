import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ActionsButton = ({ setOpenModal }) => {
  return (
    <div className='actionsButtonContainer'>
      <button
        className='actionButton'
        onClick={() => {
          setOpenModal.current.openModal();
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
        Create Action
      </button>
    </div>
  );
};

export default ActionsButton;
