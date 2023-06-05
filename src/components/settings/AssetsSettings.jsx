import React from 'react';
import Setting from './Setting';

const settings = [
  {
    title: 'Asset Types',
    text: 'Manage the list of Asset Types and their associated inspection',
  },
  {
    title: 'Asset Inspection Types',
    text: 'Manage the list of Asset inspection types and their associated checklists',
  },
  {
    title: 'Asset Inspection Checklists',
    text: 'Manage the list of Asset Inspection checklistss and their associated items',
  },
  {
    title: 'Asset Notifications',
    text: 'Manage Asset notifications',
  },
];

const AssetsSettings = () => {
  return (
    <div className='settingSection'>
      <div className='settingTitle'>
        <h3>Assets</h3>
      </div>
      <div className='settingsFlex'>
        {settings.map((setting, i) => {
          return <Setting setting={setting} key={setting.title} />;
        })}
      </div>
    </div>
  );
};

export default AssetsSettings;
