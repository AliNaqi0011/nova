import Cta from './Cta';
import Faq from './Faq';
import Features from './Features';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Stats from './Stats';
import Templates from './Templates';
import Testimonials from './Testimonials';

const LandingLayout = () => {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <Templates />
        <Testimonials />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
