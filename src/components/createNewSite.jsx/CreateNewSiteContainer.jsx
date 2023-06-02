import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const CreateNewSiteContainer = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className='settingsContainer'>
      <div className='pageSubTitle'>
        <h1>Create New Site</h1>
      </div>
      <div className='createNewSiteContainer'>
        <div className=' quickAccessText' style={{ height: '3.2rem' }}>
          <div
            className={
              location.pathname === '/sites/add-new-site/siteInformation'
                ? 'linkContainer active'
                : 'linkContainer'
            }
          >
            <Link to='siteInformation'>Site Information</Link>
          </div>
          <div
            className={
              location.pathname === '/sites/add-new-site/siteDocuments'
                ? 'linkContainer active'
                : 'linkContainer'
            }
          >
            <Link to='siteDocuments'>Site Documents</Link>
          </div>
          <div
            className={
              location.pathname === '/sites/add-new-site/siteActions'
                ? 'linkContainer active'
                : 'linkContainer'
            }
          >
            <Link to='siteActions'>Actions</Link>
          </div>
          <div
            className={
              location.pathname === '/sites/add-new-site/siteJobs'
                ? 'linkContainer active'
                : 'linkContainer'
            }
          >
            <Link to='siteJobs'>Jobs</Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default CreateNewSiteContainer;
