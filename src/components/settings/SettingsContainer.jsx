import React from 'react';
import WorkWalletSettings from './WorkWalletSettings';
import AssetsSettings from './AssetsSettings';
import AuditSettings from './AuditsSettings';

const SettingsContainer = () => {
  return (
    <div className='settingsContainer'>
      <div className='pageSubTitle'>
        <h1>Settings</h1>
      </div>
      <WorkWalletSettings />
      <AssetsSettings />
      <AuditSettings />
    </div>
  );
};

export default SettingsContainer;
