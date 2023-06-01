import React from 'react';
import SitesButton from './SitesButton';
import Map from '../Map';
import AssetsSearch from '../Assets/AssetsSearch';

const mapData = [
  {
    lat: 59.440765,
    lng: 24.755728,
    location: 'Estonia Harjumaa Tallinn Sadama',
  },
  {
    lat: 40.390886,
    lng: 49.806381,
    location: 'Baku, Baku City, Azerbaijan',
  },
];

const SitesContainer = () => {
  return (
    <div className='sitesContainer'>
      <h1 className='pageSubTitle'>Sites</h1>
      <div className='assetsFlex'>
        <SitesButton />
        <AssetsSearch />
      </div>
      <div className='mapsContainer'>
        {mapData.map((map) => {
          return <Map location={map} key={map.lat} />;
        })}
      </div>
    </div>
  );
};

export default SitesContainer;
