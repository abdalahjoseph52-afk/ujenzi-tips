import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-ujenzi-dark text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-20">
        <h1 className="text-4xl font-bold mb-8 text-ujenzi-accent">Privacy Policy</h1>
        <div className="prose prose-invert prose-lg">
          <p>Effective Date: November 2025</p>
          <p>At Ujenzi Tips, we respect your privacy. This policy explains how we handle your data in compliance with the Tanzania Personal Data Protection Act (PDPA) of 2022.</p>
          <h3>1. Data Collection</h3>
          <p>We collect information you provide directly (Name, Email, Phone) when you fill out our contact forms or subscribe to our newsletter.</p>
          <h3>2. Use of Data</h3>
          <p>Your data is used solely to communicate with you regarding construction services, consultations, and updates. We do not sell your data to third parties.</p>
          <h3>3. Your Rights</h3>
          <p>You have the right to request access to or deletion of your personal data held by us.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Privacy;