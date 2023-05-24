import QuickAccess from '../components/QuickAccess';
import Map from '../components/Map';
import SafetyCards from '../components/SafetyCards';

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
      <QuickAccess />
      <div className='dashboardGridContainer'>
        <Map />
        <SafetyCards />
      </div>
    </div>
  );
};

export default Dashboard;
