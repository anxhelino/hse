import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MobileNavigation from './components/MobileNavigation';
import Navigation from './components/Navigation';
import {
  About,
  Dashboard,
  Audits,
  Issues,
  Policies,
  Report,
  Sites,
  Training,
} from './pages';

function App() {
  return (
    <div className='mainContainer'>
      <Header />
      <MobileNavigation />
      <div className='desktopContainer'>
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/about' element={<About />} />
            <Route path='/audits' element={<Audits />} />
            <Route path='/issues' element={<Issues />} />
            <Route path='/policies' element={<Policies />} />
            <Route path='/report' element={<Report />} />
            <Route path='/sites' element={<Sites />} />
            <Route path='/training' element={<Training />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
