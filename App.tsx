
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FacultyAndStandards from './components/FacultyAndStandards';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppPopup from './components/WhatsAppPopup';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <FacultyAndStandards />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export default App;
