import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const ActionFiltersHeader = () => {
  return (
    <div className='filtersHeaderContainer'>
      <div className='actionsSearchContainer'>
        <FontAwesomeIcon icon={faSearch} />
        <input type='text' placeholder='Search...' className='actionsSearch' />
      </div>
      <div className='actionsAssignedToMe'>
        <FontAwesomeIcon icon={faUser} />
        <span>Assigned to me</span>
      </div>
      <div className='actionsToggle'>
        <span>Hide closed</span>
        <label className='switch'>
          <input type='checkbox' />
          <span className='slider round'></span>
        </label>
      </div>
    </div>
  );
};

export default ActionFiltersHeader;
