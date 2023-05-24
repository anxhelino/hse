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
import { Link } from 'react-router-dom';

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
        <Link to='/'>
          <div
            className={activeLink === 'dashboard' ? 'active' : ''}
            id='dashboard'
          >
            <FontAwesomeIcon icon={faHouse} id='dashboard' />
            <p id='dashboard'>Dashboard</p>
          </div>
        </Link>
        <Link to='/sites'>
          <div id='sites' className={activeLink === 'sites' ? 'active' : ''}>
            <FontAwesomeIcon icon={faMapLocationDot} id='sites' />
            <p id='sites'>Sites</p>
          </div>
        </Link>
        <Link to='/issues'>
          <div id='issues' className={activeLink === 'issues' ? 'active' : ''}>
            <FontAwesomeIcon icon={faCircleExclamation} id='issues' />
            <p id='issues'>Issues</p>
          </div>
        </Link>
        <Link to='/about'>
          <div id='about' className={activeLink === 'about' ? 'active' : ''}>
            <FontAwesomeIcon icon={faCircleInfo} id='about' />
            <p id='about'>About</p>
          </div>
        </Link>
        <Link to='./training'>
          <div
            id='training'
            className={activeLink === 'training' ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faGraduationCap} id='training' />
            <p id='training'>Training</p>
          </div>
        </Link>
        <Link to='./policies'>
          <div
            id='policies'
            className={activeLink === 'policies' ? 'active' : ''}
          >
            <FontAwesomeIcon icon={faBook} id='policies' />
            <p id='policies'>Policies</p>
          </div>
        </Link>
        <Link to='./report'>
          <div id='report' className={activeLink === 'report' ? 'active' : ''}>
            <FontAwesomeIcon icon={faFlag} id='report' />
            <p id='report'>Report</p>
          </div>
        </Link>
        <Link to='./audits'>
          <div id='audits' className={activeLink === 'audits' ? 'active' : ''}>
            <FontAwesomeIcon icon={faMagnifyingGlassLocation} id='audits' />
            <p id='audits'>Audits</p>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Navigation;
