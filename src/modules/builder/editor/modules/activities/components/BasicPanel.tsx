import React from 'react';
import { motion } from 'framer-motion';
import { IActivityTab } from '../ActivitiesLayout';

const BasicPanel = ({ activeTab }: { activeTab: IActivityTab }) => {
  const ActiveTabComponent = activeTab.component;

  const animation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <motion.div
      key={activeTab.key}
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 rounded-b-lg"
    >
      <form noValidate autoComplete="off" className="flex flex-col gap-4">
        <ActiveTabComponent />
      </form>
    </motion.div>
  );
};

export default BasicPanel;
