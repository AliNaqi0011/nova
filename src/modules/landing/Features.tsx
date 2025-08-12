import { FileText, Palette, Star, Zap, Bot, Download } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'ATS-Friendly Templates',
    description:
      'Choose from a library of professionally designed and ATS-optimized resume templates.',
    icon: FileText,
  },
  {
    name: 'Easy Customization',
    description: 'Quickly customize colors, fonts, and layouts to match your personal brand.',
    icon: Palette,
  },
  {
    name: 'AI Resume Writer',
    description:
      'Get intelligent suggestions to improve your resume content and make it stand out.',
    icon: Bot,
  },
  {
    name: 'Download & Share',
    description: 'Download your resume as a high-quality PDF, ready for any job application.',
    icon: Download,
  },
  {
    name: 'Cover Letter Builder',
    description: 'Create a matching cover letter to complete your job application.',
    icon: Star,
  },
  {
    name: 'Instant Preview',
    description: 'See your changes in real-time as you build your resume.',
    icon: Zap,
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div id="features" className="bg-black text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            All the tools you need to land your dream job
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our powerful features are designed to help you build a professional resume that opens
            doors.
          </motion.p>
        </div>
        <motion.div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="relative pl-16 group"
                variants={itemVariants}
              >
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 group-hover:bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300">
                    <feature.icon
                      className="h-6 w-6 text-purple-400 group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
