import React from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Civil from './Pages/Civil';
import Fiber from './Pages/Fiber';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/civil" element={<Civil />}></Route>
          <Route exact path="/fiber" element={<Fiber />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="*" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
