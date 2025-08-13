import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeaderTitle = ({ title }: { title: string }) => (
  <motion.div
    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
    className="flex items-center my-2 p-3 rounded-lg cursor-pointer transition-colors duration-200"
  >
    <p className="text-lg ml-2 text-white font-medium">{title}</p>
    <div className="ml-auto pl-4 flex items-center text-gray-400">
      <ArrowRight className="h-5 w-5" />
    </div>
  </motion.div>
);

export default HeaderTitle;
