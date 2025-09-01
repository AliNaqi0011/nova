import Image from 'next/image';
import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const navigation = {
  solutions: [
    { name: 'Resume Builder', href: '/builder' },
    { name: 'AI Resume Writer', href: '#features' },
    { name: 'Cover Letter', href: '#' },
    { name: 'Templates', href: '#templates' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Tutorials', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: (props: React.ComponentProps<'svg'>) => <Twitter {...props} />,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props: React.ComponentProps<'svg'>) => <Linkedin {...props} />,
    },
  ],
};

const MotionLink = motion(Link);

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-black border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-20 lg:px-8 lg:pt-24">
        <motion.div
          className="md:grid md:grid-cols-2 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/icons/resume-icon.png"
                  alt="Nova Resume"
                  width={28}
                  height={28}
                  className="h-auto bg-white rounded-md p-0.5"
                />
                <span className="text-white font-semibold text-lg">Nova Resume</span>
              </Link>
            </motion.div>
            <motion.p className="text-sm leading-6 text-gray-400 max-w-xs" variants={itemVariants}>
              Build your future, one resume at a time. Create professional, job-winning resumes in
              minutes.
            </motion.p>
            <motion.div className="flex space-x-6" variants={itemVariants}>
              {navigation.social.map((item) => (
                <MotionLink
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white"
                  whileHover={{ y: -2, color: '#c084fc' }} // purple-400
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </MotionLink>
              ))}
            </motion.div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 md:mt-0">
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <MotionLink
                      href={item.href}
                      className="text-sm leading-6 text-gray-400 hover:text-white"
                      whileHover={{ x: 2, color: '#f472b6' }} // pink-400
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.name}
                    </MotionLink>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="mt-10 md:mt-0" variants={itemVariants}>
              <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <MotionLink
                      href={item.href}
                      className="text-sm leading-6 text-gray-400 hover:text-white"
                      whileHover={{ x: 2, color: '#f472b6' }} // pink-400
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.name}
                    </MotionLink>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="mt-10 md:mt-0" variants={itemVariants}>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <MotionLink
                      href={item.href}
                      className="text-sm leading-6 text-gray-400 hover:text-white"
                      whileHover={{ x: 2, color: '#f472b6' }} // pink-400
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.name}
                    </MotionLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Nova Resume. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
