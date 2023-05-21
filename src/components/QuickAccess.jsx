import React from 'react';
import CardBox from './CardBox';
import {
  faCircleExclamation,
  faCircleCheck,
  faTriangleExclamation,
  faCircleQuestion,
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
    value: 'Platform Information',
    icon: faCircleQuestion,
  },
];

const QuickAccess = () => {
  return (
    <div className='quickAccessContainer'>
      <h3>Shortcuts</h3>
      <div className='quickAccess'>
        {boxData.map((box, index) => (
          <CardBox key={index} value={box.value} icon={box.icon} />
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
