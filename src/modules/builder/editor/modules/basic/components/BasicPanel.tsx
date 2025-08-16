import React from 'react';
import { motion } from 'framer-motion';
import Contacts from './Contacts';
import Links from './Links';
import About from './About';
import { IBasicDetailsItem } from '@/stores/basic.interface';
import { useBasicDetails } from '@/stores/basic';

const BasicPanel = ({
  activeTab,
  basicTabs,
}: {
  activeTab: number;
  basicTabs: IBasicDetailsItem;
}) => {
  const onChangeText = useBasicDetails((state) => state.reset);
  const onChangeHandler = (value: unknown, key: string) => {
    const updatedTabs = { ...basicTabs, [key]: value };
    onChangeText(updatedTabs);
  };

  const animation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <motion.div
      key={activeTab}
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      transition={{ duration: 0.3 }}
      className="bg-white p-6 rounded-b-lg"
    >
      <form noValidate autoComplete="off" className="flex flex-col gap-4">
        {activeTab === 0 && <Contacts basicTabs={basicTabs} onChangeHandler={onChangeHandler} />}
        {activeTab === 1 && <Links basicTabs={basicTabs} onChangeHandler={onChangeHandler} />}
        {activeTab === 2 && <About basicTabs={basicTabs} onChangeHandler={onChangeHandler} />}
      </form>
    </motion.div>
  );
};

export default BasicPanel;
