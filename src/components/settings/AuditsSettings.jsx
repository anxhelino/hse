import React from 'react';
import Setting from './Setting';

const settings = [
  {
    title: 'Audit Types',
    text: 'Manage the list of Audit types and their associated checklists.',
  },
  {
    title: 'Audit Checklists',
    text: 'Manage the list of Audit checklists and their associated items',
  },
  {
    title: 'Audit Design Templates',
    text: 'Upload and manage report design templates and layout structures for Audits',
  },
  {
    title: 'Audit Notifications',
    text: 'Manage Audit notifications',
  },
];

const AuditSettings = () => {
  return (
    <div className='settingSection'>
      <div className='settingTitle'>
        <h3>Work Wallet Setup</h3>
      </div>
      <div className='settingsFlex'>
        {settings.map((setting, i) => {
          return <Setting setting={setting} key={setting.title} />;
        })}
      </div>
    </div>
  );
};

export default AuditSettings;
