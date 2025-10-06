import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Services from './pages/Services.jsx';
import OurDentist from './pages/OurDentist.jsx';
import ContactUs from './pages/ContactUs.jsx';
import ScrollToTop from './components/ScrollToTop';
import SendMessage from './pages/SendMessage.jsx';

function App() {
  return (
    <Router basename="/horizon-dental">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-dentist" element={<OurDentist />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/send-message" element={<SendMessage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;