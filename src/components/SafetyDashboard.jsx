import {
  faTriangleExclamation,
  faCheck,
  faBoltLightning,
  faPlantWilt,
  faHouse,
  faHandcuffs,
} from '@fortawesome/free-solid-svg-icons';

import SafetyDashboardCard from './SafetyDashboardCard';
import Accidents from './charts/Accidents';

const data = [
  [
    {
      name: 'First Aid Injury',
      cases: 100,
    },
    {
      name: 'To be determined',
      cases: 30,
    },
    {
      name: 'Medical Treatment',
      cases: 10,
    },
    {
      name: 'Critical Injury',
      cases: 3,
    },
  ],
  [
    {
      name: 'Behaviour',
      cases: 90,
    },
    {
      name: 'Competenc',
      cases: 60,
    },
    {
      name: 'Housekeeping',
      cases: 40,
    },
    {
      name: 'Doc',
      cases: 40,
    },
    {
      name: 'Equipment',
      cases: 30,
    },
    {
      name: 'Work at height',
      cases: 15,
    },
    {
      name: 'Other',
      cases: 6,
    },
  ],
  [
    {
      name: 'Red Card',
      cases: 15,
    },
    {
      name: 'Yellow Card',
      cases: 27,
    },
    {
      name: 'Green Card',
      cases: 17,
    },
  ],
  [
    {
      name: 'General Inspection',
      cases: 50,
    },
    {
      name: 'H&S Audits',
      cases: 40,
    },
    {
      name: 'General Audit',
      cases: 30,
    },
    {
      name: 'Pre Start Checklist',
      cases: 10,
    },
    {
      name: 'Pre Work Inspections',
      cases: 10,
    },
    {
      name: 'Property Check',
      cases: 5,
    },
  ],
];

const dataBox = [
  {
    value: 100,
    icon: faTriangleExclamation,
    text: 'Total Accidents',
  },
  {
    value: 96,
    icon: faTriangleExclamation,
    text: 'Near Miss Accidents',
  },
  {
    value: 66,
    icon: faTriangleExclamation,
    text: 'Total Safety Cards',
  },
  {
    value: 177,
    icon: faCheck,
    text: 'Total Audits Completed',
  },
];

const damages = [
  {
    value: 5,
    icon: faBoltLightning,
    text: 'Service Damage',
  },
  {
    value: 3,
    icon: faPlantWilt,
    text: 'Enviromental',
  },
  {
    value: 6,
    icon: faHouse,
    text: 'Property Damage',
  },
  {
    value: 1,
    icon: faHandcuffs,
    text: 'Crime / Violence',
  },
];

const SafetyDashboard = () => {
  return (
    <div className='safetyDashboardContainer'>
      <h3 className='safetyDashboardTitle'>Safety Dashboard</h3>
      {data.map((row, i) => {
        return (
          <>
            <div className='safetyDashboardRow' key={i}>
              <SafetyDashboardCard key={row.text} data={dataBox[i]} />
              <Accidents data={row} />
            </div>
          </>
        );
      })}
      <div className='safetyDashboardRow'>
        {damages.map((row, i) => {
          return <SafetyDashboardCard key={row.text} data={row} />;
        })}
      </div>
    </div>
  );
};

export default SafetyDashboard;
