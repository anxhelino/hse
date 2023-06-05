import React from 'react';
import { Link } from 'react-router-dom';

const Setting = ({ setting }) => {
  return (
    <div className='settingsCard'>
      <Link to={`/settings/${setting.title.trim().replace(/\s/g, '')}`}>
        <h3>{setting.title}</h3>
      </Link>
      <p>{setting.text}</p>
    </div>
  );
};

export default Setting;
