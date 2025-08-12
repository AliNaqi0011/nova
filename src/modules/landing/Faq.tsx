import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'How do I make a resume?',
    answer:
      'You can use our resume builder! Just pick a template, fill in your details, and download your resume in minutes. Our AI writer can even help you write your resume summary and bullet points.',
  },
  {
    id: 2,
    question: 'What is the best resume template?',
    answer:
      'The best resume template depends on your industry and experience. Our builder offers a variety of professional, modern, and creative templates that are all ATS-friendly.',
  },
  {
    id: 3,
    question: 'Is Nova Resume free?',
    answer:
      'Yes, our core resume builder is completely free to use. You can create, edit, and download a basic resume without any cost. We also offer premium templates and features for a small fee.',
  },
  {
    id: 4,
    question: 'Can I download my resume as a PDF?',
    answer:
      'Absolutely! All our templates can be downloaded as a high-resolution PDF, which is the standard format for job applications.',
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
                <dt>
                  <details>
                    <summary className="flex w-full cursor-pointer list-none items-center justify-between text-left text-lg font-medium leading-7">
                      {faq.question}
                      <ChevronDown className="h-6 w-6 transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <dd className="mt-4 text-base leading-7 text-gray-400">
                      <p>{faq.answer}</p>
                    </dd>
                  </details>
                </dt>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
}
