import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const trustLogos = [
  { name: 'Google', logo: 'https://cdn.worldvectorlogo.com/logos/google-2015.svg' },
  { name: 'Amazon', logo: 'https://cdn.worldvectorlogo.com/logos/amazon-2.svg' },
  { name: 'Apple', logo: 'https://cdn.worldvectorlogo.com/logos/apple-14.svg' },
  { name: 'Microsoft', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
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

      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16 sm:pt-40 sm:pb-24">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="lg:col-span-6 place-self-center text-center lg:text-left">
            <motion.h1
              className="text-4xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
              variants={itemVariants}
            >
              Build Your Future, One Resume at a Time
            </motion.h1>
            <motion.p className="mt-6 text-lg leading-8 text-gray-300" variants={itemVariants}>
              Create a job-winning resume in minutes with our professional, ATS-friendly templates.
              No experience needed.
            </motion.p>
            <motion.div
              className="mt-10 flex items-center justify-center lg:justify-start gap-x-6"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/builder" passHref>
                  <Button
                    variant="contained"
                    size="large"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_20px_theme(colors.purple.500/0.5)]"
                  >
                    Create Your Resume
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  size="large"
                  className="text-white border-purple-500/50 hover:bg-white/10"
                >
                  Explore Templates
                </Button>
              </motion.div>
            </motion.div>
            <motion.div className="mt-10" variants={itemVariants}>
              <p className="text-sm text-gray-400">Trusted by over 500+ professionals at:</p>
              <div className="mt-4 flex justify-center lg:justify-start items-center gap-6 filter grayscale opacity-60">
                {trustLogos.map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={80}
                      height={30}
                      className="h-6 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-6 flex items-center justify-center">
            <motion.div
              className="relative"
              animate={{ y: [-5, 5] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl opacity-20 blur-2xl"></div>
              <Image
                src="/templates/modern.png"
                alt="Resume Builder Interface"
                width={600}
                height={600}
                className="relative rounded-xl shadow-2xl shadow-purple-900/40"
                data-ai-hint="professional resume examples"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
