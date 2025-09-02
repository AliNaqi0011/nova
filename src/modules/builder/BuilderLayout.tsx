import EditorLayout from './editor/EditorLayout';
import { ResumeLayout } from './resume/ResumeLayout';
import Header from '../landing/Header';
import Footer from '../landing/Footer';
import ResumeHeader from './resume/components/ResumeHeader';
import { useState } from 'react';
import { PanelLeftOpen, PanelRightOpen, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import TemplatesSideBar from './templates/TemplatesSideBar';



const BuilderLayout = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isTemplatesOpen, setIsTemplatesOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 builder-layout">
      <div className="header-trigger"></div>
      <div className="sticky top-0 z-[9999] bg-black/95 backdrop-blur-sm border-b border-gray-800 builder-header transition-transform duration-300 hover:translate-y-0 -translate-y-full hover:opacity-100 opacity-0">
        <Header />
      </div>
      <div className="flex-1 flex pt-16">
        {/* Editor Sidebar (Left) */}
        {!isFullscreen && isLeftPanelOpen && (
          <aside className="hidden lg:block w-[30vw] min-w-[20rem] max-w-[28rem] bg-gray-900/50 border-r border-gray-800 relative">
            <button
              onClick={() => setIsLeftPanelOpen(false)}
              className="absolute top-4 right-2 z-10 p-1 text-gray-400 hover:text-white transition-colors"
            >
              <PanelLeftOpen className="h-4 w-4 rotate-180" />
            </button>
            <EditorLayout />
          </aside>
        )}
        
        {/* Left Panel Toggle Button */}
        {!isFullscreen && !isLeftPanelOpen && (
          <button
            onClick={() => setIsLeftPanelOpen(true)}
            className="hidden lg:block fixed left-4 top-1/2 z-30 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-r-lg transition-colors"
          >
            <PanelLeftOpen className="h-4 w-4" />
          </button>
        )}

        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 flex">
            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-gradient-to-b from-gray-950/60 to-gray-900/40 overflow-hidden">
              <div className="w-full max-w-[210mm] mt-3 mb-4 mx-auto px-2 md:px-4 relative z-20">
                <ResumeHeader isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen} />
              </div>
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800">
                <ResumeLayout />
              </div>
            </div>
          </div>
        </main>

        {/* Templates Sidebar (Right) */}
        {!isFullscreen && isRightPanelOpen && (
          <aside className="hidden lg:block w-[25vw] min-w-[18rem] max-w-[22rem] bg-gray-900/50 border-l border-gray-800 relative">
            <button
              onClick={() => setIsRightPanelOpen(false)}
              className="absolute top-4 left-2 z-10 p-1 text-gray-400 hover:text-white transition-colors"
            >
              <PanelRightOpen className="h-4 w-4 rotate-180" />
            </button>
            <TemplatesSideBar />
          </aside>
        )}
        
        {/* Right Panel Toggle Button */}
        {!isFullscreen && !isRightPanelOpen && (
          <button
            onClick={() => setIsRightPanelOpen(true)}
            className="hidden lg:block fixed right-4 top-1/2 z-30 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-l-lg transition-colors"
          >
            <PanelRightOpen className="h-4 w-4" />
          </button>
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


      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BuilderLayout;
