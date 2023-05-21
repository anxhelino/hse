import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardBox = ({ value, icon }) => {
  return (
    <div className='cardBox'>
      <p>{value}</p>
      <FontAwesomeIcon icon={icon} id='Logout' />
    </div>
  );
};

export default CardBox;
