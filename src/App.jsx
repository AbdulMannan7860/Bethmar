import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Civil from './Pages/Civil';
import Fiber from './Pages/Fiber';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/civil" element={<Civil />} />
          <Route exact path="/fiber" element={<Fiber />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
