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
  <div className="bg-black py-8 px-4 sm:px-6 lg:px-8 print:hidden">
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

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <div className="flex-1 flex pt-14">
        {/* Editor Sidebar (Left) */}
        <aside className="hidden lg:block w-[22vw] min-w-[18rem] print:hidden">
          <EditorLayout />
        </aside>

        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 flex">
            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-gray-950/40 print:bg-white overflow-hidden">
              <div className="w-full md:w-[210mm] mt-5 mb-3 mx-auto print:hidden px-4 md:px-0">
                <ResumeHeader />
              </div>
              <div className="flex-1 overflow-y-auto no-scrollbar">
                <ResumeLayout />
              </div>
            </div>
          </div>
        </main>

        {/* Templates Sidebar (Right) */}
        <aside className="hidden lg:block w-[22vw] min-w-[18rem] print:hidden">
          <TemplatesSideBar />
        </aside>
      </div>

      {/* Mobile Action Buttons */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        <button
          onClick={() => setIsEditorOpen(true)}
          className="bg-purple-600 text-white p-3 rounded-full shadow-lg"
          aria-label="Open editor"
        >
          <PanelLeftOpen className="h-6 w-6" />
        </button>
        <button
          onClick={() => setIsTemplatesOpen(true)}
          className="bg-purple-600 text-white p-3 rounded-full shadow-lg"
          aria-label="Open templates"
        >
          <PanelRightOpen className="h-6 w-6" />
        </button>
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
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default BuilderLayout;
