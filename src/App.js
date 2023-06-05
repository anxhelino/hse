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
  CreateNewSite,
  SiteInformation,
  SiteDocuments,
  SiteActions,
  SiteJobs,
} from './pages';
import SharedComponent from './components/SharedComponent';

function App() {
  return (
    <div className='mainContainer'>
      <Header />
      <div className='desktopContainer'>
        <Router>
          {/* <Navigation />
          <MobileNavigation /> */}
          <Routes>
            <Route element={<SharedComponent />}>
              <Route path='/' element={<Dashboard />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/audits' element={<Audits />} />
              <Route path='/issues' element={<Issues />} />
              <Route path='/policies' element={<Policies />} />
              <Route path='/report' element={<Report />} />
              <Route path='/sites'>
                <Route index element={<Sites />} />
                <Route path='add-new-site' element={<CreateNewSite />}>
                  <Route path='siteInformation' element={<SiteInformation />} />
                  <Route path='siteDocuments' element={<SiteDocuments />} />
                  <Route path='siteActions' element={<SiteActions />} />
                  <Route path='siteJobs' element={<SiteJobs />} />
                </Route>
              </Route>
              <Route path='/assets' element={<Assets />} />
              <Route path='/dairy' element={<Diary />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
