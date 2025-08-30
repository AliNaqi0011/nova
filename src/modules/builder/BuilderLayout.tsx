import EditorLayout from './editor/EditorLayout';
import { ResumeLayout } from './resume/ResumeLayout';
import Header from '../landing/Header';
import Footer from '../landing/Footer';
import ResumeHeader from './resume/components/ResumeHeader';
import { useState } from 'react';
import { PanelLeftOpen, PanelRightOpen, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import TemplatesSideBar from './templates/TemplatesSideBar';

const RateUsSection = () => (
  <div className="bg-black py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        Enjoying the Builder?
      </h2>
      <p className="mt-3 text-lg leading-8 text-gray-400">
        If you find our resume builder helpful, please consider giving us a star on GitHub!
      </p>
      <div className="mt-6">
        <motion.a
          href="https://github.com/sadanandpai/resume-builder"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-x-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:shadow-purple-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Star className="h-5 w-5" aria-hidden="true" />
          Rate Us on GitHub
        </motion.a>
      </div>
    </div>
  </div>
);

const BuilderLayout = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isTemplatesOpen, setIsTemplatesOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="sticky top-0 z-30 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <Header />
      </div>
      <div className="flex-1 flex pt-2">
        {/* Editor Sidebar (Left) */}
        {!isFullscreen && (
          <aside className="hidden lg:block w-[22vw] min-w-[18rem] max-w-[24rem] bg-gray-900/50 border-r border-gray-800">
            <EditorLayout />
          </aside>
        )}

        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 flex">
            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-gradient-to-b from-gray-950/60 to-gray-900/40 overflow-hidden">
              <div className="w-full max-w-[210mm] mt-3 mb-2 mx-auto px-2 md:px-4">
                <ResumeHeader isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen} />
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800">
                <ResumeLayout />
              </div>
            </div>
          </div>
        </main>

        {/* Templates Sidebar (Right) */}
        {!isFullscreen && (
          <aside className="hidden lg:block w-[22vw] min-w-[18rem] max-w-[24rem] bg-gray-900/50 border-l border-gray-800">
            <TemplatesSideBar />
          </aside>
        )}
      </div>

      {/* Mobile Action Buttons */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <motion.button
          onClick={() => setIsEditorOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg shadow-purple-500/25 backdrop-blur-sm"
          aria-label="Open editor"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <PanelLeftOpen className="h-5 w-5" />
        </motion.button>
        <motion.button
          onClick={() => setIsTemplatesOpen(true)}
          className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-3 rounded-full shadow-lg shadow-pink-500/25 backdrop-blur-sm"
          aria-label="Open templates"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <PanelRightOpen className="h-5 w-5" />
        </motion.button>
      </div>

      {/* Mobile Editor Sidebar */}
      <AnimatePresence>
        {isEditorOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:hidden fixed inset-0 z-50"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsEditorOpen(false)}
            ></div>
            <aside className="absolute left-0 top-0 h-full w-full max-w-sm bg-black">
              <EditorLayout closeEditor={() => setIsEditorOpen(false)} isMobile={true} />
            </aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Templates Sidebar */}
      <AnimatePresence>
        {isTemplatesOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:hidden fixed inset-0 z-50"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsTemplatesOpen(false)}
            ></div>
            <aside className="absolute right-0 top-0 h-full w-full max-w-sm bg-black">
              <TemplatesSideBar closeEditor={() => setIsTemplatesOpen(false)} isMobile={true} />
            </aside>
          </motion.div>
        )}
      </AnimatePresence>

      <RateUsSection />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BuilderLayout;
