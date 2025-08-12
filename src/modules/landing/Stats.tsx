import { Star } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, name: 'Job-winning resumes created', value: '7,000,000+' },
  { id: 2, name: 'Used by employees at top companies' },
  { id: 3, name: '5-star rating on Trustpilot', value: '4.5 / 5' },
];

const companyLogos = [
  { name: 'Google', logo: 'https://cdn.worldvectorlogo.com/logos/google-2015.svg' },
  { name: 'Amazon', logo: 'https://cdn.worldvectorlogo.com/logos/amazon-2.svg' },
  { name: 'Apple', logo: 'https://cdn.worldvectorlogo.com/logos/apple-14.svg' },
  { name: 'Microsoft', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
];

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          className="rounded-2xl bg-black/20 backdrop-blur-lg border border-white/10 shadow-2xl shadow-purple-500/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <dl className="grid grid-cols-1 divide-y divide-white/10 lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
            <motion.div className="flex flex-col gap-y-2 p-8 text-center" variants={itemVariants}>
              <dt className="text-base leading-7 text-gray-400">{stats[0].name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stats[0].value}
              </dd>
            </motion.div>
            <motion.div className="flex flex-col gap-y-4 p-8 text-center" variants={itemVariants}>
              <dt className="text-base leading-7 text-gray-400">{stats[1].name}</dt>
              <dd className="flex justify-center items-center gap-x-6">
                {companyLogos.map((company) => (
                  <Image
                    key={company.name}
                    src={company.logo}
                    alt={company.name}
                    width={80}
                    height={30}
                    className="h-7 object-contain"
                  />
                ))}
              </dd>
            </motion.div>
            <motion.div className="flex flex-col gap-y-2 p-8 text-center" variants={itemVariants}>
              <dt className="text-base leading-7 text-gray-400">{stats[2].name}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-white sm:text-4xl flex justify-center items-center gap-2">
                {stats[2].value} <Star className="h-7 w-7 text-yellow-400 fill-yellow-400" />
              </dd>
            </motion.div>
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
