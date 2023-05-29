import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  return (
    <div className='map'>
      <div>
        <h3>Nearest Site</h3>
      </div>
      <div className='locationContainer'>
        <div className='locationDescription'>
          <p>Estonia Harjumaa Tallinn Sadama</p>
        </div>
        <MapContainer
          center={[59.440765, 24.755728]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[59.440767, 24.755728]}>
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
