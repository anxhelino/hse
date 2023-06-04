import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const AddSiteMap = ({ location }) => {
  const lat = location?.lat || 59.440765;
  const lng = location?.lng || 24.755728;
  const locationName = location?.location;
  console.log(lat);
  return (
    <div className='map'>
      <div className='locationContainer'>
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
      </div>
    </div>
  );
};

export default AddSiteMap;
