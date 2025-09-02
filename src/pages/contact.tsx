import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/modules/landing/Header';
import Footer from '@/modules/landing/Footer';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';

const ContactPage: NextPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Contact Us - Nova Resume</title>
        <meta name="description" content="Get in touch with Nova Resume team" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>

      <Link href="/" className="fixed top-6 left-6 z-50 text-white hover:text-purple-400 transition-colors">
        <ArrowLeft className="h-6 w-6" />
      </Link>
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-400">We'd love to hear from you</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-purple-400" />
                  <span className="text-gray-300">alinaqi.te@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-purple-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-purple-400" />
                  <span className="text-gray-300">123 Resume Street, Career City, CC 12345</span>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:alinaqi.te@gmail.com?subject=Contact from Nova Resume';
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;