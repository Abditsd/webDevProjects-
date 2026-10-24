import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Services from './pages/Services.js';
import Sectors from './pages/Sectors.js';
import Process from './pages/Process.js';
import Insights from './pages/Insights.js';
import InsightDetail from './pages/InsightDetail.js';
import Contact from './pages/Contact.js';
import NotFound from './pages/NotFound.js';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="sectors" element={<Sectors />} />
        <Route path="process" element={<Process />} />
        <Route path="insights" element={<Insights />} />
        <Route path="insights/:slug" element={<InsightDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
