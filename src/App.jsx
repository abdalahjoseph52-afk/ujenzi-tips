import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SEO from './components/utils/SEO';
import ScrollToTop from './components/utils/ScrollToTop';
import PriceTicker from './components/ui/PriceTicker';

// Section Components
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import TwendeSite from './components/sections/TwendeSite';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';

// Page Components
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Calculator from './pages/Calculator';
import Pros from './pages/Pros';
import ServicesPage from './pages/ServicesPage';
import Resources from './pages/Resources';
import Plans from './pages/Plans';
import FAQ from './pages/FAQ';
import Guide from './pages/Guide';
import Order from './pages/Order';
import Budget from './pages/Budget';
import Converter from './pages/Converter'; // <--- NEW IMPORT

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <TwendeSite />
      <Team />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-ujenzi-dark text-white selection:bg-ujenzi-accent selection:text-ujenzi-dark flex flex-col">
      <Toaster position="top-center" richColors />
      
      <SEO />
      <ScrollToTop />

      {/* FIXED ELEMENTS */}
      <PriceTicker />
      <Navbar />
      
      <main className="flex-grow pt-48">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/converter" element={<Converter />} /> {/* <--- NEW ROUTE */}
          <Route path="/pros" element={<Pros />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/order" element={<Order />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;