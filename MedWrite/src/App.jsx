import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Membership from './pages/Membership';
import About from './pages/About';
import Courses from './pages/Courses';
import LearningPathways from './pages/LearningPathways';
import Resources from './pages/Resources';
import FreelanceCentre from './pages/FreelanceCentre';
import ProfessionalNetwork from './pages/ProfessionalNetwork';
import Ethics from './pages/Ethics';
import Events from './pages/Events';
import CareerCentre from './pages/CareerCentre';
import Contact from './pages/Contact';

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20 px-4">
      <div className="text-7xl mb-6">📄</div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-gray-500 mb-8 max-w-md">The page you're looking for doesn't exist. Let's get you back to the right place.</p>
      <a href="/" className="btn-primary">
        Go to Homepage
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/pathways" element={<LearningPathways />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/freelance" element={<FreelanceCentre />} />
            <Route path="/network" element={<ProfessionalNetwork />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/events" element={<Events />} />
            <Route path="/career" element={<CareerCentre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
