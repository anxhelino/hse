import React from 'react';
import InputText from './InputText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AddSiteMap from './addSiteMap';

const dataHeader = [
  {
    text: 'Site Type*',
  },
  {
    text: 'Site Name*',
  },
];
const siteAddress = [
  {
    text: 'Country*',
  },
  {
    text: 'Address 1*',
  },
  {
    text: 'Address 2*',
  },
  {
    text: 'State/ Province / Region ',
  },
  {
    text: 'Zip/Postal Code*',
  },
];

const marker = {
  text: 'Latitude and longitude *',
};

const SiteInformationContainer = () => {
  return (
    <div className='createSiteFlex'>
      <div className='createSiteInfoContainer'>
        <form>
          {dataHeader.map((item, index) => {
            return <InputText key={item.text} text={item.text} />;
          })}
          <div className='infoHeader'>
            <h3>Site Address</h3>
          </div>
          {siteAddress.map((item, index) => {
            return <InputText key={item.text} text={item.text} />;
          })}
          <div className='infoHeader'>
            <h3>Site Map Marker</h3>
          </div>

          <div className='inputRow marker'>
            <span>{marker.text}</span>
            <input type='text' placeholder='Latitude' />
            <input type='text' placeholder='Longitude' />
          </div>
          <div className='assetsButtonContainer' style={{ marginTop: '2rem' }}>
            <Link
              to={'add-new-site/siteInformation'}
              className='assetsButton'
              style={{ float: 'right' }}
            >
              <FontAwesomeIcon icon={faPlus} />
              Add New Site
            </Link>
          </div>
        </form>
      </div>
      <AddSiteMap />
    </div>
  );
};

export default SiteInformationContainer;
