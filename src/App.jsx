import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';

// --- 1. LAYOUT & UTILS ---
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SEO from './components/utils/SEO';
import ScrollToTop from './components/utils/ScrollToTop';
import PriceTicker from './components/ui/PriceTicker';
import FundiAI from './components/ui/FundiAI';

// --- 2. COMPONENTS MPYA (Style ya Semen Merah Putih) ---
import HeroModern from './components/sections/HeroModern';
import ServicesGrid from './components/sections/ServicesGrid';
import StatsSection from './components/sections/StatsSection';
import InspirationGallery from './components/sections/InspirationGallery';
import ConstructionRoadmap from './components/sections/ConstructionRoadmap'; 
import DownloadsSection from './components/sections/DownloadsSection';

// --- 3. SECTIONS ZA ZAMANI (Zinazoendelea kutumika) ---
import Team from './components/sections/Team';
import TwendeSite from './components/sections/TwendeSite';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import About from './components/sections/About';
import Testimonials from './components/sections/Testimonials';

// --- 4. PAGES (Njia za Ndani) ---
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
import Converter from './pages/Converter';
import Locations from './pages/Locations'; 
import MarketPrices from './pages/MarketPrices'; // 🔥 PAGE MPYA YA BEI

// 👇 HOME PAGE MPYA: Mtiririko Kamili
const Home = () => {
  return (
    <>
      {/* 1. Hero Kubwa */}
      <HeroModern />
      
      {/* 2. Huduma (Grid) */}
      <ServicesGrid />

      {/* 3. Takwimu (Trust) */}
      <StatsSection />

      {/* 4. Picha za Nyumba (Inspirasi) */}
      <InspirationGallery />

      {/* 5. Mwongozo wa Ujenzi (Timeline) */}
      <ConstructionRoadmap />

      {/* 6. Maktaba ya Nyaraka (Downloads) */}
      <DownloadsSection />
      
      {/* 7. Maelezo ya Ziada (SEO & Trust) */}
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
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Logic ya kuangalia QR Tool (Kama unaitumia kupitia query params)
  const searchParams = new URLSearchParams(window.location.search);
  const isQrTool = searchParams.get('tool') === 'qr';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-ujenzi-accent selection:text-ujenzi-dark flex flex-col">
      <Toaster position="top-center" richColors />
      
      <SEO />
      <ScrollToTop />

      {/* --- FIXED HEADER CONTAINER ---
         Hapa tunaweka Ticker na Navbar PAMOJA ili zitembee kama kitu kimoja.
         Zina 'z-50' ili ziwe juu ya kila kitu.
      */}
      <div className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-xl bg-white/95 backdrop-blur-md">
         <PriceTicker />
         <Navbar />
      </div>
      
      {/* --- MAIN CONTENT PADDING ---
         Tunahitaji padding kubwa juu (pt) kwa sababu Header yetu sasa ni NDEFU
         (Ticker + Logo Kubwa). Bila hii, maandishi yatafunikwa.
         - Mobile: pt-[150px]
         - Desktop: pt-[180px]
      */}
      <main className={`flex-grow ${isHomePage ? 'pt-[150px] md:pt-[180px]' : 'pt-[160px] md:pt-[200px]'}`}> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Tools */}
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/budget" element={<Budget />} />
          
          {/* Market & Maps */}
          <Route path="/locations" element={<Locations />} />
          <Route path="/market-prices" element={<MarketPrices />} /> {/* 🔥 NJIA MPYA */}
          
          {/* Services & Resources */}
          <Route path="/pros" element={<Pros />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/guide" element={<Guide />} />
          
          {/* Support Pages */}
          <Route path="/order" element={<Order />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      
      {/* AI Assistant (Floating) */}
      <FundiAI /> 
    </div>
  );
}

export default App;