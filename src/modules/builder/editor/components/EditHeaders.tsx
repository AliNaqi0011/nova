import { Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { headers } from '@/helpers/constants/editor-data';
import HeaderTitle from '../atoms/HeaderTitle';

const containerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemAnimation = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const EditHeaders = ({ onLinkClick }: { onLinkClick: (link: string) => void }) => {
  return (
    <motion.div initial="initial" animate="animate" variants={containerAnimation}>
      <h2 className="text-2xl font-bold text-white mb-4 px-3">Edit Your Resume</h2>
      {Object.entries(headers).map(([link, { title }]) => (
        <motion.a onClick={() => onLinkClick(link)} key={title} variants={itemAnimation}>
          <HeaderTitle title={title} />
          <Divider className="bg-white/10" />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default EditHeaders;
