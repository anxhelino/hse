import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import SafetyDashboardCard from './SafetyDashboardCard';
import Accidents from './charts/Accidents';

const SafetyDashboard = () => {
  return (
    <div className='safetyDashboardContainer'>
      <h3 className='safetyDashboardTitle'>Safety Dashboard</h3>
      <div className='safetyDashboardRow'>
        <SafetyDashboardCard
          value={100}
          icon={faTriangleExclamation}
          text={'Total Accidents'}
        />
        <Accidents />
      </div>
    </div>
  );
};

export default SafetyDashboard;
