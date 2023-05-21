import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faFlag,
  faGraduationCap,
  faHouse,
  faMagnifyingGlassLocation,
} from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('Dashboard');

  const handlePageChange = (e) => {
    if (!e.target.id && !e.target.closest('navigation')) {
      setActiveLink(e.target.parentNode.id);
      return;
    }

    setActiveLink(e.target.id);
  };

  return (
    <footer>
      <div className='desktopNavProfile'>
        <p>Welcome Anxhelino</p>
      </div>
      <div className='navigation' onClick={(e) => handlePageChange(e)}>
        <div
          className={activeLink === 'Dashboard' ? 'active' : ''}
          id='Dashboard'
        >
          <FontAwesomeIcon icon={faHouse} id='Dashboard' />
          <p id='Dashboard'>Dashboard</p>
        </div>
        <div id='Sites' className={activeLink === 'Sites' ? 'active' : ''}>
          <FontAwesomeIcon icon={faMapLocationDot} id='Sites' />
          <p id='Sites'>Sites</p>
        </div>
        <div id='Issues' className={activeLink === 'Issues' ? 'active' : ''}>
          <FontAwesomeIcon icon={faCircleExclamation} id='Issues' />
          <p id='Issues'>Issues</p>
        </div>
        <div id='About' className={activeLink === 'About' ? 'active' : ''}>
          <FontAwesomeIcon icon={faCircleInfo} id='About' />
          <p id='About'>About</p>
        </div>

        <div
          id='Training'
          className={activeLink === 'Training' ? 'active' : ''}
        >
          <FontAwesomeIcon icon={faGraduationCap} id='Training' />
          <p id='Training'>Training</p>
        </div>
        <div
          id='Policies'
          className={activeLink === 'Policies' ? 'active' : ''}
        >
          <FontAwesomeIcon icon={faBook} id='Policies' />
          <p id='Policies'>Policies</p>
        </div>
        <div id='Report' className={activeLink === 'Report' ? 'active' : ''}>
          <FontAwesomeIcon icon={faFlag} id='Report' />
          <p id='Report'>Report</p>
        </div>
        <div id='Audits' className={activeLink === 'Audits' ? 'active' : ''}>
          <FontAwesomeIcon icon={faMagnifyingGlassLocation} id='Audits' />
          <p id='Audits'>Audits</p>
        </div>
      </div>
    </footer>
  );
};

export default Navigation;
