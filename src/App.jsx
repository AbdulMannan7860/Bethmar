import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import NotFound from './Pages/NotFound';
import Civil from './Pages/Civil';
import Fiber from './Pages/Fiber';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import DesignVal from './Pages/DesignVal';
import Traffic from './Pages/Traffic';
import Reinstatement from './Pages/Reinstatement';

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
          <Route exact path="/design-validation" element={<DesignVal />} />
          <Route exact path="/traffic-management" element={<Traffic />} />
          <Route exact path="/reinstatement" element={<Reinstatement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
