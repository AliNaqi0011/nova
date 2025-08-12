import { motion } from 'framer-motion';
import { FileText, Pencil, Download, CheckCircle } from 'lucide-react';

const steps = [
  {
    name: 'Pick a template',
    description: 'Choose a professional, ATS-friendly resume template from our library.',
    icon: FileText,
    imageUrl: 'https://placehold.co/400x300.png',
    aiHint: 'resume templates',
  },
  {
    name: 'Customize your resume',
    description: 'Use our intuitive editor to add your experience, skills, and education.',
    icon: Pencil,
    imageUrl: 'https://placehold.co/400x300.png',
    aiHint: 'person writing',
  },
  {
    name: 'Download in PDF',
    description: 'Instantly download your resume as a PDF and start applying for jobs.',
    icon: Download,
    imageUrl: 'https://placehold.co/400x300.png',
    aiHint: 'person holding document',
  },
  {
    name: 'Land your dream job',
    description: 'Apply for your dream job with a resume that gets you noticed.',
    icon: CheckCircle,
    imageUrl: 'https://placehold.co/400x300.png',
    aiHint: 'person celebrating',
  },
];

export default function HowItWorks() {
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
      },
    },
  };

  return (
    <div className="bg-black text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Create Your Resume in 4 Easy Steps
          </motion.h2>
        </div>
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mt-24 lg:max-w-none md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.name}
              className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex-shrink-0 mb-4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-[0_0_20px_theme(colors.purple.500/0.5)]">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-6">{step.name}</h3>
                <p className="mt-2 text-base text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
