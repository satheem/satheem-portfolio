
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechSphere from './components/TechSphere';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="bg-[#0D0D0D] text-white font-sans antialiased overflow-x-hidden">
      <Cursor />
      <Header activeSection={activeSection} />
      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero setActiveSection={setActiveSection} />
        <About setActiveSection={setActiveSection} />
        <TechSphere setActiveSection={setActiveSection} />
        <Projects setActiveSection={setActiveSection} />
        <Contact setActiveSection={setActiveSection} />
      </main>
      <Footer />
    </div>
  );
};

export default App;