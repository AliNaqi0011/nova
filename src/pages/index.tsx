import Head from 'next/head';
import LandingLayout from '@/modules/landing/LandingLayout';
import { SEOHead } from '@/components/SEO/SEOHead';

function HomePage() {
  return (
    <div>
      <SEOHead />

      <LandingLayout />
    </div>
  );
}

export default HomePage;
