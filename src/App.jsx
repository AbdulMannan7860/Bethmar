import React from 'react';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import LocationMap from './components/LocationMap';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Details />
      <LocationMap />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
