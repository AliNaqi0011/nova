import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/modules/landing/Header';
import Footer from '@/modules/landing/Footer';

const PrivacyPage: NextPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Privacy Policy - Nova Resume</title>
        <meta name="description" content="Nova Resume Privacy Policy" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>

      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  build a resume, or contact us for support. This may include your name, email address, 
                  and resume content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and maintain our resume building service</li>
                  <li>To process your requests and respond to your inquiries</li>
                  <li>To improve our services and user experience</li>
                  <li>To send you technical notices and support messages</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Storage and Security</h2>
                <p>
                  Your resume data is stored locally in your browser and is not transmitted to our servers 
                  unless you explicitly choose to save it to your account. We implement appropriate security 
                  measures to protect your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal information. You can do this 
                  through your account settings or by contacting us directly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at 
                  support@novaresume.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;