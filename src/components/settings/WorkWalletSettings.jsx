import React from 'react';
import Setting from './Setting';

const settings = [
  {
    title: 'Configuration',
    text: 'Globally configure settings for your Wallet',
  },
  {
    title: 'Departments',
    text: 'Manage the list of Departments within your company',
  },
  {
    title: 'Glossary Translations',
    text: 'Manage Manage the glossary translations for your wallet',
  },
  {
    title: 'Mobile Device Management',
    text: 'Manage mobile devices and settings for your wallet',
  },
  {
    title: 'Job Titles',
    text: 'Create a range of Job Titles with any required trainig or qualifications.',
  },
  {
    title: 'ID Document Types',
    text: 'Manage the diferent types of ID Documents and their relevant lifespan',
  },
  {
    title: 'Ocupations',
    text: 'Manage the different types of Ocupations.',
  },
];

const WorkWalletSettings = () => {
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

export default WorkWalletSettings;
