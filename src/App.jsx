import React from 'react';
import { Toaster } from 'sonner';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import TwendeSite from './components/sections/TwendeSite';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact'; // <--- IMPORT THIS
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ujenzi-dark text-white selection:bg-ujenzi-accent selection:text-ujenzi-dark">
      <Toaster position="top-center" richColors />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <TwendeSite />
        <Team />
        <Blog />
        <Contact /> {/* <--- ADD THIS (This contains the form and id="contact") */}
      </main>
      <Footer />
    </div>
  );
}

export default App;