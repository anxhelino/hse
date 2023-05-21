import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='mobileHeader'>
      <div className='mobileLogo'>
        <h1>Parrotias</h1>
      </div>
      <h3>Dashboard</h3>
      <div className='desktopLogout'>
        <p>Logout</p>
        <FontAwesomeIcon icon={faRightFromBracket} id='Logout' />
      </div>
    </header>
  );
};

export default Header;
