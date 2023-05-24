import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faRightFromBracket,
  faGraduationCap,
  faBook,
  faMagnifyingGlassLocation,
  faFlag,
} from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNavigation = () => {
  const [openMore, setOpenMore] = useState(false);
  const [activeLink, setActiveLink] = useState('Dashboard');

  const toggleMore = () => {
    setOpenMore(!openMore);
  };

  const handlePageChange = (e) => {
    if (e.target.id === 'More') {
      return;
    }

    console.log(e.target.closest('mobileNavigation'));

    if (!e.target.id && !e.target.closest('mobileNavigation')) {
      if (e.target.parentNode.id === 'More') {
        return;
      }
      setActiveLink(e.target.parentNode.id);
      return;
    }

    setActiveLink(e.target.id);
  };

  return (
    <footer>
      <div className='mobileNavigation' onClick={(e) => handlePageChange(e)}>
        <Link to='/'>
          <div
            className={activeLink === 'Dashboard' ? 'active' : ''}
            id='Dashboard'
          >
            <FontAwesomeIcon icon={faHouse} id='Dashboard' />
            <p id='Dashboard'>Dashboard</p>
          </div>
        </Link>
        <Link to='sites'>
          <div id='Sites' className={activeLink === 'Sites' ? 'active' : ''}>
            <FontAwesomeIcon icon={faMapLocationDot} id='Sites' />
            <p id='Sites'>Sites</p>
          </div>
        </Link>
        <Link to='issues'>
          <div id='Issues' className={activeLink === 'Issues' ? 'active' : ''}>
            <FontAwesomeIcon icon={faCircleExclamation} id='Issues' />
            <p id='Issues'>Issues</p>
          </div>
        </Link>
        <Link to='about'>
          <div id='About' className={activeLink === 'About' ? 'active' : ''}>
            <FontAwesomeIcon icon={faCircleInfo} id='About' />
            <p id='About'>About</p>
          </div>
        </Link>
        <div
          className={activeLink === 'More' ? 'mobileMore active' : 'mobileMore'}
          onClick={() => toggleMore()}
          id='More'
        >
          <FontAwesomeIcon icon={faBars} id='More' />
          <p id='More'>More</p>
          <div className={openMore ? 'more' : 'more hidden'}>
            <Link to='training'>
              <div id='Training'>
                <FontAwesomeIcon icon={faGraduationCap} id='Training' />
                <p id='Training'>Training</p>
              </div>
            </Link>
            <Link to='policies'>
              <div id='Policies'>
                <FontAwesomeIcon icon={faBook} id='Policies' />
                <p id='Policies'>Policies</p>
              </div>
            </Link>
            <Link to='report'>
              <div id='Report'>
                <FontAwesomeIcon icon={faFlag} id='Report' />
                <p id='Report'>Report</p>
              </div>
            </Link>
            <Link to='audits'>
              <div id='Audits'>
                <FontAwesomeIcon icon={faMagnifyingGlassLocation} id='Audits' />
                <p id='Audits'>Audits</p>
              </div>
            </Link>

            <div id='Logout'>
              <FontAwesomeIcon icon={faRightFromBracket} id='Logout' />
              <p id='Logout'>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileNavigation;
