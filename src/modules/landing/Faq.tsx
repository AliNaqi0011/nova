import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'How do I create a resume with Nova Resume?',
    answer:
      'Creating a resume is simple! Sign up for free, choose from our professional templates, fill in your information using our guided editor, and download your resume as a PDF. The entire process takes just minutes.',
  },
  {
    id: 2,
    question: 'Is Nova Resume completely free?',
    answer:
      'Yes! Nova Resume is completely free to use. You can create unlimited resumes, access all templates, and download your resumes without any cost or hidden fees.',
  },
  {
    id: 3,
    question: 'Are the resume templates ATS-friendly?',
    answer:
      'Absolutely! All our templates are designed to be ATS (Applicant Tracking System) friendly, ensuring your resume gets past automated screening systems and reaches human recruiters.',
  },
  {
    id: 4,
    question: 'Can I edit my resume after downloading?',
    answer:
      'Yes! Your resume data is saved in your account, so you can return anytime to make edits, try different templates, or create multiple versions for different job applications.',
  },
  {
    id: 5,
    question: 'What file formats can I download my resume in?',
    answer:
      'You can download your resume as a high-quality PDF, which is the preferred format for most job applications and ensures your formatting stays consistent across all devices.',
  },
  {
    id: 6,
    question: 'Is my data secure and private?',
    answer:
      'Yes, your privacy is our priority. Your resume data is stored securely and never shared with third parties. You have full control over your information and can delete it anytime.',
  },
  {
    id: 7,
    question: 'Do I need to create an account to use the builder?',
    answer:
      'While you can try our builder without an account, creating a free account allows you to save your progress, access your resumes from any device, and make edits anytime.',
  },
  {
    id: 8,
    question: 'Can I create multiple resumes for different jobs?',
    answer:
      'Yes! You can create multiple resumes tailored for different positions, industries, or career levels. This helps you customize your application for each opportunity.',
  },
];

export default function Faq() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div id="faq" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="text-center text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.dl
            className="mt-16 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10"
              >
                <details className="group/details">
                  <summary className="flex w-full cursor-pointer list-none items-center justify-between text-left text-lg font-medium leading-7">
                    {faq.question}
                    <ChevronDown className="h-6 w-6 transition-transform duration-300 group-open/details:rotate-180" />
                  </summary>
                  <div className="mt-4 text-base leading-7 text-gray-400">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))
          </motion.dl>
        </div>
      </div>
    </div>
  );
}
