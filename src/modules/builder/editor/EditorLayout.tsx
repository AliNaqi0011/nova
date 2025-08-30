import React, { useState } from 'react';

import DataHeaders from './components/EditHeaders';
import EditSection from './components/EditSection';
import ErrorBoundary from '@/helpers/common/components/ErrorBoundary';
import { OutlinedButton } from '@/helpers/common/atoms/Buttons';
import { headers } from '@/helpers/constants/editor-data';
import { resetResumeStore } from '@/stores/useResumeStore';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { SectionManager } from './components/SectionManager';

interface EditorLayoutProps {
  closeEditor?: () => void;
  isMobile?: boolean;
}

const EditorLayout = ({ closeEditor, isMobile = false }: EditorLayoutProps) => {
  const [link, setLink] = useState('');
  const section = headers[link];

  const linkClickHandler = (link: string) => {
    setLink(link);
  };

  const displayElement = link ? (
    <EditSection section={section} onLinkClick={linkClickHandler} />
  ) : (
    <DataHeaders onLinkClick={linkClickHandler} />
  );

  return (
    <ErrorBoundary>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-black/80 backdrop-blur-sm border-l border-white/10 h-full text-gray-300 p-6 overflow-auto relative no-scrollbar"
      >
        {isMobile && (
          <button
            onClick={closeEditor}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
            aria-label="Close editor"
          >
            <X className="h-6 w-6" />
          </button>
        )}
        {displayElement}

        <div className="mt-8 space-y-6">
          <SectionManager />
          <OutlinedButton onClick={resetResumeStore}>Reset all edits</OutlinedButton>
        </div>
      </motion.div>
    </ErrorBoundary>
  );
};

export default EditorLayout;
