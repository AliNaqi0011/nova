import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const trustLogos = [
  { name: 'Google', logo: '/icons/google-logo.svg' },
  { name: 'Amazon', logo: '/icons/amazon-logo.svg' },
  { name: 'Apple', logo: '/icons/apple-logo.svg' },
  { name: 'Microsoft', logo: '/icons/microsoft-logo.svg' },
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-purple-500/20 via-pink-500/20 to-transparent opacity-30 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-24">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="lg:col-span-6 place-self-center text-center lg:text-left">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-tight"
              variants={itemVariants}
            >
              Build Your Future, <span className="block">One Resume at a Time</span>
            </motion.h1>
            <motion.p
              className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Create pixel-perfect, professional resumes in minutes with our ATS-friendly templates.
              <span className="text-purple-400 font-medium">No design experience needed.</span>
            </motion.p>
            <motion.div
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-x-6"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/login">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-[0_0_30px_theme(colors.purple.500/0.4)] hover:shadow-[0_0_40px_theme(colors.purple.500/0.6)] transition-all duration-300 text-base sm:text-lg">
                    Create Your Resume
                  </button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#templates">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-500/50 hover:border-purple-400 text-white hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300 text-base sm:text-lg backdrop-blur-sm">
                    Explore Templates
                  </button>
                </a>
              </motion.div>
            </motion.div>
            <motion.div className="mt-12" variants={itemVariants}>
              <p className="text-sm text-gray-400 mb-6">
                Trusted by 1000+ professionals at top companies:
              </p>
              <div className="flex justify-center lg:justify-start items-center gap-4 sm:gap-6 lg:gap-8 filter grayscale opacity-60 hover:opacity-80 transition-opacity duration-300 flex-wrap">
                {trustLogos.map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    className="transition-all duration-200"
                  >
                    <div className="w-16 sm:w-20 lg:w-24 h-6 sm:h-7 lg:h-8 bg-gray-600 rounded flex items-center justify-center text-xs text-gray-300">
                      {company.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-6 flex items-center justify-center">
            <motion.div
              className="relative"
              animate={{ y: [-8, 8] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 blur-3xl animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-40 blur-xl"></div>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src="/templates/modern.png"
                  alt="Professional Resume Builder Interface"
                  width={700}
                  height={700}
                  className="relative rounded-xl sm:rounded-2xl shadow-2xl shadow-purple-900/60 border border-purple-500/20 w-full max-w-md sm:max-w-lg lg:max-w-none"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
