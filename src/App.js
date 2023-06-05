import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MobileNavigation from './components/MobileNavigation';
import Navigation from './components/Navigation';
import { About, Dashboard, Audits, Issues, Policies, Report, Sites, Training, Diary } from './pages';
import Signup from './pages/Signup';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className='mainContainer'>
      <Router>
        <Header />
        <div className='desktopContainer'>
          <Navigation />
          <MobileNavigation />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/about' element={<About />} />
            <Route path='/audits' element={<Audits />} />
            <Route path='/issues' element={<Issues />} />
            <Route path='/policies' element={<Policies />} />
            <Route path='/report' element={<Report />} />
            <Route path='/sites' element={<Sites />} />
            <Route path='/training' element={<Training />} />
            <Route path='/diary' element={<Diary />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
