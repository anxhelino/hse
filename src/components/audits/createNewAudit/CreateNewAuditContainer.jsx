import React from 'react';
import AuditFormContainer from './AuditFormContainer';

const CreateNewAuditContainer = () => {
  return (
    <div className='issuesContainer'>
      <div className='pageSubTitle'>
        <h2>Create New Inspection</h2>
      </div>
      <AuditFormContainer />
    </div>
  );
};

export default CreateNewAuditContainer;
