import { AnimatePresence, motion } from 'framer-motion';

import Image from 'next/image';
import { ReactNode } from 'react';

const animation = {
  exit: {
    height: '0',
    paddingTop: 0,
    paddingBottom: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  enter: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

const nonEditableStyle =
  "opacity-60 after:content-[''] after:absolute after:h-full after:w-full after:top-0 after:left-0 after:cursor-not-allowed";

const EditSectionContainer = ({
  title,
  expanded,
  clickHandler,
  isEnabled,
  setIsEnabled,
  children,
}: {
  title: string;
  expanded: boolean;
  clickHandler: () => void;
  isEnabled: boolean;
  setIsEnabled: (enabled: boolean) => void;
  children: ReactNode;
}) => {
  const toggleVisibility = (e: React.MouseEvent) => {
    setIsEnabled(!isEnabled);
    e.stopPropagation();
  };

  return (
    <div className="shadow-sm rounded-lg overflow-hidden">
      <div
        className={`bg-black shadow-sm h-12 w-full
         relative flex items-center justify-between px-4 text-white font-bold text-lg select-none cursor-pointer z-10`}
        onClick={clickHandler}
      >
        <span>{title}</span>
        <Image
          src={isEnabled ? '/icons/eye.svg' : '/icons/eye-slash.svg'}
          alt="eye"
          height="16"
          width="21"
          onClick={toggleVisibility}
          className="brightness-0 invert"
        />
      </div>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial="exit"
            animate="enter"
            exit="exit"
            variants={animation}
            className={`bg-white shadow-sm relative px-4 py-6 overflow-hidden ${
              !isEnabled && nonEditableStyle
            }`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EditSectionContainer;
