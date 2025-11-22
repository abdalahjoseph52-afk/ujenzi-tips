import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-ujenzi-dark text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-20">
        <h1 className="text-4xl font-bold mb-8 text-ujenzi-accent">Terms of Service</h1>
        <div className="prose prose-invert prose-lg">
          <p>Welcome to Ujenzi Tips. By accessing our website, you agree to these terms.</p>
          <h3>1. Content Disclaimer</h3>
          <p>The information provided on Ujenzi Tips is for educational purposes only. While we strive for accuracy, construction projects vary. Always consult with a verified professional before making structural changes.</p>
          <h3>2. Intellectual Property</h3>
          <p>All content (videos, articles, logos) is the property of Ujenzi Tips and may not be reproduced without permission.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Terms;