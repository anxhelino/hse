import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardBox = ({ value, icon }) => {
  return (
    <div className='cardBox'>
      <div className='cardBoxText'>
        <p>{value}</p>
        {value === 'Accidents' ? (
          <span>1</span>
        ) : '' || value === 'My Audits' ? (
          <span>1</span>
        ) : (
          ''
        )}
      </div>
      <div className='quickAccessIconContainer'>
        <FontAwesomeIcon icon={icon} id='Logout' />
      </div>
    </div>
  );
};

export default CardBox;
