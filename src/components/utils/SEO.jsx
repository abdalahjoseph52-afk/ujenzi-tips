import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../hooks/useLanguage';

const SEO = () => {
  const { t, lang } = useLanguage();

  // SAFETY CHECK: If 't.seo' doesn't exist in content.js, use these defaults.
  // This prevents the "Undefined reading title" crash.
  const seoData = t.seo || {
    title: "Ujenzi Tips | Build with Knowledge",
    description: "The #1 Construction Platform in Tanzania.",
    keywords: "Construction, Tanzania, Ujenzi"
  };

  return (
    <Helmet>
      {/* Dynamic Title */}
      <title>{seoData.title}</title>

      {/* Dynamic Meta Description */}
      <meta name="description" content={seoData.description} />
      
      {/* Dynamic Keywords */}
      <meta name="keywords" content={seoData.keywords} />

      {/* Language Alternates */}
      <html lang={lang} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'sw_TZ'} />
      
      {/* Open Graph / Social Media */}
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
    </Helmet>
  );
};

export default SEO;