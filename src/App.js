import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import Login from './pages/login/Login';
import CreateNewAsset from './pages/assets/CreateNewAsset';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
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
          <Route path='/assets'>
            <Route index element={<Assets />} />
            <Route path='create-new-asset' element={<CreateNewAsset />} />
          </Route>
          <Route path='/dairy' element={<Diary />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
