import React from 'react';
import IssuesDropdown from '../../Issues/IssuesDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

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
        <div className='auditInput'>
          <p>Conducted On</p>
          <input
            type='text'
            className=''
            placeholder='Audit Title'
            value={new Date().toLocaleDateString('en-us', {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          />
          <div className='addConductedNote'>
            <FontAwesomeIcon icon={faBook} />
            <span>Add Note</span>
          </div>
        </div>
        <div className='auditInput'>
          <p>Prepared By</p>
          <input type='text' placeholder='' value='userName' />
          <div className='addConductedNote'>
            <FontAwesomeIcon icon={faBook} />
            <span>Add Note</span>
          </div>
        </div>
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
