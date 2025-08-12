import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Bell, ChevronDown, Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Resume Templates', href: '#templates' },
  { name: 'Resume Builder', href: '/builder' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-lg' : 'py-4'
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? 'border-b border-white/10' : ''
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r from-teal-500/50 via-purple-500/50 to-orange-500/50 opacity-20`}
        ></div>
      </div>
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Nova Resume</span>
            <Image
              src="/icons/resume-icon.png"
              alt="Nova Resume"
              width={scrolled ? 28 : 32}
              height={scrolled ? 28 : 32}
              className="h-auto transition-all duration-300 bg-white rounded-md p-0.5"
            />
            <span
              className={`text-white font-semibold transition-all duration-300 ${
                scrolled ? 'text-lg' : 'text-xl'
              }`}
            >
              Nova Resume
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors group"
            >
              {item.name}
              <span className="absolute bottom-[-2px] left-1/2 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6">
          <motion.div whileHover={{ scale: 1.2 }}>
            <Bell className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <ShoppingCart className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
          </motion.div>
          <div className="relative">
            <button
              onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center gap-2"
            >
              <Image
                src="https://randomuser.me/api/portraits/men/18.jpg"
                alt="User"
                width={32}
                height={32}
                className="rounded-full"
              />
              <ChevronDown
                className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${
                  isProfileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {isProfileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-gray-800/80 backdrop-blur-lg shadow-lg ring-1 ring-white/10"
                >
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white"
                    >
                      Sign out
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                  <span className="sr-only">Nova Resume</span>
                  <Image
                    src="/icons/resume-icon.png"
                    alt="Nova Resume"
                    width={28}
                    height={28}
                    className="h-auto bg-white rounded-md p-0.5"
                  />
                  <span className="text-white font-semibold text-lg">Nova Resume</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
