import QuickAccess from '../components/QuickAccess';
import Map from '../components/Map';
import SafetyCards from '../components/SafetyCards';
import SafetyDashboard from '../components/SafetyDashboard';

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
      <QuickAccess />
      <div className='dashboardGridContainer'>
        <Map />
        <SafetyCards />
      </div>
      <SafetyDashboard />
    </div>
  );
};

export default Dashboard;
