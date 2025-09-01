import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/modules/landing/Header';
import Footer from '@/modules/landing/Footer';
import { Users, Target, Award } from 'lucide-react';

const AboutPage: NextPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>About Us - Nova Resume</title>
        <meta name="description" content="Learn about Nova Resume and our mission" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>

      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">About Nova Resume</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're on a mission to help job seekers create professional, impactful resumes 
              that get them noticed by employers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
              <p className="text-gray-400">
                To democratize professional resume creation and help everyone land their dream job.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Our Team</h3>
              <p className="text-gray-400">
                A passionate team of developers and designers committed to your success.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Our Values</h3>
              <p className="text-gray-400">
                Quality, accessibility, and user-first design in everything we create.
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Nova Resume was born from a simple observation: creating a professional resume 
                shouldn't be complicated, expensive, or time-consuming. We noticed that many 
                talented individuals were being held back not by their skills or experience, 
                but by their inability to present themselves effectively on paper.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our platform combines the power of modern web technology with intuitive design 
                to make resume creation accessible to everyone. Whether you're a recent graduate, 
                career changer, or seasoned professional, Nova Resume provides the tools you need 
                to showcase your unique value proposition.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we're proud to have helped thousands of job seekers create resumes that 
                have opened doors to new opportunities. But we're just getting started – we're 
                continuously working to add new features, templates, and tools to help you succeed 
                in your career journey.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;