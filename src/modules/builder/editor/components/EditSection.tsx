import { ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const animation = {
  initial: { x: 25, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

interface IEditSection {
  section: {
    title: string;
    component: () => ReactNode;
  };
  onLinkClick: (link: string) => void;
}

const EditSection = ({ section, onLinkClick }: IEditSection) => {
  return (
    <motion.div initial={animation.initial} animate={animation.animate}>
      <div>
        <a
          className="flex items-center mb-6 mt-4 cursor-pointer text-gray-400 hover:text-white transition-colors"
          onClick={() => onLinkClick('')}
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="pl-2 ml-2 text-2xl font-bold text-white">{section.title}</span>
        </a>
      </div>
      <section.component />
    </motion.div>
  );
};

export default EditSection;
