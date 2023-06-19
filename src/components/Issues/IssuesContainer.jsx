import { useRef } from 'react';
import AddIssueButton from './AddIssueButton';
import IssuesList from './IssuesList';
import IssuesSearch from './IssuesSearch';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CreateActionsModal from '../sites/siteActions/CreateActionsModal';
import { faCalendar, faImagePortrait } from '@fortawesome/free-solid-svg-icons';
import IssuesDropdown from './IssuesDropdown';

const FirstStep = ({ setActive }) => {
  return (
    <div className='reportIssuesFirstStep'>
      <h2>What type of issue?</h2>
      <div onClick={() => setActive('SecondStep')}>Observation</div>
      <div onClick={() => setActive('SecondStep')}>Maintenance</div>
      <div onClick={() => setActive('SecondStep')}>Incident</div>
      <div onClick={() => setActive('SecondStep')}>Near Miss</div>
      <div onClick={() => setActive('SecondStep')}>Hazard</div>
    </div>
  );
};

const secondStepData = [
  {
    label: 'On What Site?',
  },
  {
    label: 'On Which Asset?',
  },
];

const SecondStep = () => {
  return (
    <div className='reportIssuesSecondStep'>
      <div className='secondStepHeader'>
        <span className='issueTypeInfo'>General</span>
        <span className='issueDate'>
          <FontAwesomeIcon icon={faCalendar} />
          {new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </span>
      </div>
      <div className='createActionFormContainer'>
        <div>
          <input type='text' className='actionTitle' placeholder='Add title' />
        </div>
        <div>
          <input
            type='text'
            className='actionDescription'
            placeholder='Description of what happened'
          />
        </div>
      </div>
      <div className='issuesDropdown'>
        {secondStepData.map((data, i) => {
          return <IssuesDropdown labels={data.label} />;
        })}
      </div>

      <div className='issuePhotoUpload'>
        <label className='issuePhotoUpload'>
          <input type='file' />
          <FontAwesomeIcon icon={faImagePortrait} />
          <span className='uploadIssuePhotoDescription'>Add photos/videos</span>
        </label>
      </div>
      <div className='createIssueButtons'>
        <button className='cancelCreateIssue'>Cancel</button>
        <button className='submitCreateIssue' disabled>
          Submit
        </button>
      </div>
    </div>
  );
};

const Component = {
  FirstStep,
  SecondStep,
};

const ReportIssuesContainer = () => {
  const [active, setActive] = useState('FirstStep');
  const ActiveStep = Component[active];
  return (
    <div className='reportIssues'>
      <ActiveStep setActive={setActive} />
    </div>
  );
};

const IssuesContainer = () => {
  const modalRef = useRef();

  return (
    <>
      <div className='issuesContainer'>
        <div className='pageSubTitle'>
          <h1>Issues</h1>
          <AddIssueButton openModal={modalRef} />
        </div>
        <div className='issuesWrapper'>
          <IssuesSearch />
          <IssuesList />
        </div>
      </div>
      <div className='createIssueModal'>
        <CreateActionsModal ref={modalRef}>
          <ReportIssuesContainer />
        </CreateActionsModal>
      </div>
    </>
  );
};

export default IssuesContainer;
