import { Button } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Cta() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <motion.h2
          className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Get started for free.
          <br />
          Land your dream job tomorrow.
        </motion.h2>
        <motion.div
          className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/builder" passHref>
              <Button
                variant="contained"
                size="large"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_20px_theme(colors.purple.500/0.5)]"
              >
                Build My Resume Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
