import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ location }) => {
  const lat = location?.lat || 59.440765;
  const lng = location?.lng || 24.755728;
  const locationName = location?.location;
  console.log(lat);
  return (
    <div className='map'>
      <div>{location ? '' : <h3>Nearest Site</h3>}</div>
      <div className='locationContainer'>
        <div className='locationDescription'>
          <p>{location ? locationName : 'Estonia Harjumaa Tallinn Sadama'}</p>
        </div>
        <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[lat, lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        <div className='mapFooter'>
          <div className='checkSite'>
            <p>Check In</p>
          </div>
          <div className='siteReportMap'>
            <p>Report Issue On Site</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
