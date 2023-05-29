import QuickAccess from '../components/QuickAccess';
import Map from '../components/Map';
import SafetyCards from '../components/SafetyCards';
import SafetyDashboard from '../components/SafetyDashboard';
import AuditTargets from '../components/AuditTargets';

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
      <QuickAccess />
      <div className='dashboardGridContainer'>
        <Map />
        <SafetyCards />
      </div>
      <SafetyDashboard />
      <AuditTargets />
    </div>
  );
};

export default Dashboard;
