import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import Schedule from './pages/Schedule';
import Timeline from './pages/Timeline';
import ModuleFreeze from './pages/ModuleFreeze';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="module-freeze" element={<ModuleFreeze />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
