import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MobileNavigation from './components/MobileNavigation';
import Navigation from './components/Navigation';
import {
  Settings,
  Dashboard,
  Audits,
  Issues,
  Policies,
  Report,
  Sites,
  Assets,
  Diary,
} from './pages';

function App() {
  return (
    <div className='mainContainer'>
      <Header />
      <div className='desktopContainer'>
        <Router>
          <Navigation />
          <MobileNavigation />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/audits' element={<Audits />} />
            <Route path='/issues' element={<Issues />} />
            <Route path='/policies' element={<Policies />} />
            <Route path='/report' element={<Report />} />
            <Route path='/sites' element={<Sites />} />
            <Route path='/assets' element={<Assets />} />
            <Route path='/dairy' element={<Diary />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
