import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import MobileNavigation from './components/MobileNavigation';
import Navigation from './components/Navigation';
import { About, Dashboard, Audits, Issues, Policies, Report, Sites, Training, Diary } from './pages';
import Signup from './pages/Signup';
import LoginPage from './pages/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className='mainContainer'>
      <Router>
        <Header />
        <div className='desktopContainer'>
          {isAuthenticated && (
            <>
              <Navigation />
              <MobileNavigation />
            </>
          )}
          <Routes>
            {isAuthenticated ? (
              <>
                <Route path='/' element={<Dashboard />} />
                <Route path='/about' element={<About />} />
                <Route path='/audits' element={<Audits />} />
                <Route path='/issues' element={<Issues />} />
                <Route path='/policies' element={<Policies />} />
                <Route path='/report' element={<Report />} />
                <Route path='/sites' element={<Sites />} />
                <Route path='/training' element={<Training />} />
                <Route path='/diary' element={<Diary />} />
              </>
            ) : (
              <>
                <Route path='/' element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
                <Route path='/signup' element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
              </>
            )}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
