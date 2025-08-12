import Head from 'next/head';
import LandingLayout from '@/modules/landing/LandingLayout';

function HomePage() {
  return (
    <div>
      <Head>
        <title>Nova Resume: A new way to build your resume</title>
        <meta name="description" content="Build your professional resume with Nova Resume" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>

      <LandingLayout />
    </div>
  );
}

export default HomePage;
