import React from 'react';
import IssuesDropdown from '../../Issues/IssuesDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import AuditFormInput from './AuditFormInput';

const inputData = [
  {
    value: new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
    label: 'Conducted On',
  },
  {
    value: 'UserName',
    label: 'Prepared By',
  },
];

const AuditFormContainer = () => {
  return (
    <div className='auditFormContainer'>
      <form>
        <div className='auditTitleForm'>
          <input
            type='text'
            className='actionTitle'
            placeholder='Audit Title'
          />
        </div>
        {inputData.map((data) => {
          return <AuditFormInput inputData={data} />;
        })}
        <div className='auditInput'>
          <IssuesDropdown labels='Location' />
          <div className='addConductedNote'>
            <FontAwesomeIcon icon={faBook} />
            <span>Add Note</span>
          </div>
        </div>
        <div className='auditInput'>
          <IssuesDropdown
            labels='Audit Type'
            fields={[
              'General Inspection',
              'H&S Audit',
              'Marquee sign off',
              'Other',
            ]}
          />
          <div className='addConductedNote'>
            <FontAwesomeIcon icon={faBook} />
            <span>Add Note</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuditFormContainer;
