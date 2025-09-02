import { useTemplates } from '@/stores/useTemplate';
import { useZoom } from '@/stores/useZoom';
import ResumeController from '../atoms/ResumeController';
import { ResumeTitle } from '../atoms/ResumeTitle';
import { useResumeStore } from '@/stores/useResumeStore';
import { useState, useEffect } from 'react';
import { Maximize2, Minimize2, Printer, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResumeHeaderProps {
  isFullscreen?: boolean;
  setIsFullscreen?: (value: boolean) => void;
}

const ResumeHeader = ({ isFullscreen = false, setIsFullscreen }: ResumeHeaderProps) => {
  const { zoomIn, zoomOut, resetZoom } = useZoom.getState();
  const templateName = useTemplates((state) => state.activeTemplate.name);
  const resumeData = useResumeStore();
  const [isDownloading, setIsDownloading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!document.fullscreenElement;
      if (setIsFullscreen) {
        setIsFullscreen(isCurrentlyFullscreen);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [setIsFullscreen]);

  const handlePrint = () => {
    setIsDownloading(true);

    const resumeElement = document.getElementById('resume-page-view');
    if (!resumeElement) {
      alert('Resume not found!');
      setIsDownloading(false);
      return;
    }

    // Create print window
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups for printing');
      setIsDownloading(false);
      return;
    }

    // Get resume HTML and styles
    const resumeHTML = resumeElement.outerHTML;
    const styles = Array.from(document.styleSheets)
      .map((sheet) => {
        try {
          return Array.from(sheet.cssRules)
            .map((rule) => rule.cssText)
            .join('\n');
        } catch (e) {
          return '';
        }
      })
      .join('\n');

    // Write to print window
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Resume - ${resumeData.basics.name}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: Arial, sans-serif; }
            @page { size: A4; margin: 0; }
            @media print {
              body { -webkit-print-color-adjust: exact; }
              #resume-page-view {
                width: 210mm !important;
                height: 297mm !important;
                transform: none !important;
                box-shadow: none !important;
                margin: 0 !important;
                padding: 0 !important;
              }
            }
            ${styles}
          </style>
        </head>
        <body>
          ${resumeHTML}
        </body>
      </html>
    `);

    printWindow.document.close();

    // Wait for content to load then print
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
      setIsDownloading(false);
    }, 500);
  };

  return (
    <div className="flex items-center justify-between bg-gray-900/80 backdrop-blur-sm rounded-lg px-4 py-3 border border-gray-700/50 relative z-10 resume-header">
      <ResumeTitle title={templateName} />

      <div className="flex items-center gap-2">
        {/* Zoom Controls */}
        <div className="block">
          <ResumeController zoomIn={zoomIn} zoomOut={zoomOut} resetZoom={resetZoom} />
        </div>

        {/* Preview Toggle */}
        <motion.button
          onClick={() => setShowPreview(!showPreview)}
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Toggle Preview"
        >
          <Eye className="h-4 w-4" />
        </motion.button>

        {/* Fullscreen Toggle */}
        {setIsFullscreen && (
          <motion.button
            onClick={() => {
              if (!isFullscreen) {
                // Enter fullscreen
                if (document.documentElement.requestFullscreen) {
                  document.documentElement.requestFullscreen();
                }
              } else {
                // Exit fullscreen
                if (document.exitFullscreen) {
                  document.exitFullscreen();
                }
              }
              setIsFullscreen(!isFullscreen);
            }}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </motion.button>
        )}

        {/* Print Button */}
        <motion.button
          onClick={handlePrint}
          disabled={isDownloading}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-600 text-white rounded-lg font-medium transition-all duration-200 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Printer className="h-4 w-4" />
          <span className="hidden sm:inline">
            {isDownloading ? 'Preparing...' : 'Print Resume'}
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default ResumeHeader;
export type { ResumeHeaderProps };
