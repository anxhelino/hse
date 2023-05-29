import React from 'react';
import CardBox from './CardBox';
import {
  faCircleExclamation,
  faCircleCheck,
  faTriangleExclamation,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

const boxData = [
  {
    value: 'Report Issue',
    icon: faCircleExclamation,
  },
  {
    value: 'My Audits',
    icon: faCircleCheck,
  },
  {
    value: 'Accidents',
    icon: faTriangleExclamation,
  },
  {
    value: 'Company Documents',
    icon: faBook,
  },
];

const QuickAccess = () => {
  return (
    <div className='quickAccessContainer'>
      <div className='quickAccessText'>
        <h3>Shortcuts</h3>
      </div>
      <div className='quickAccess'>
        {boxData.map((box, index) => (
          <CardBox key={index} value={box.value} icon={box.icon} />
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
