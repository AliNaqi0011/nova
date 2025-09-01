import { useEffect } from 'react';
import { Button } from '@mui/material';
import { Download } from 'lucide-react';

export const PrintResume: React.FC = () => {
  useEffect(() => {
    const beforePrintHandler = () => {
      globalThis.document.title = `Resume_${Date.now()}`;
      // Hide all non-print elements
      const nonPrintElements = document.querySelectorAll('.no-print, header, nav, footer');
      nonPrintElements.forEach(el => {
        (el as HTMLElement).style.display = 'none';
      });
    };
    
    const afterPrintHandler = () => {
      globalThis.document.title = 'Nova Resume Builder';
      // Restore hidden elements
      const nonPrintElements = document.querySelectorAll('.no-print, header, nav, footer');
      nonPrintElements.forEach(el => {
        (el as HTMLElement).style.display = '';
      });
    };

    globalThis?.addEventListener('beforeprint', beforePrintHandler);
    globalThis?.addEventListener('afterprint', afterPrintHandler);

    return () => {
      globalThis?.removeEventListener('beforeprint', beforePrintHandler);
      globalThis?.removeEventListener('afterprint', afterPrintHandler);
    };
  }, []);

  const handlePrint = () => {
    // Ensure resume is visible and properly formatted
    const resumeElement = document.getElementById('resume-page-view');
    if (resumeElement) {
      resumeElement.style.opacity = '1';
      resumeElement.style.visibility = 'visible';
    }
    
    setTimeout(() => {
      globalThis?.print();
    }, 100);
  };

  return (
    <Button 
      onClick={handlePrint} 
      variant="outlined" 
      color="primary"
      startIcon={<Download size={16} />}
      className="print-button no-print"
    >
      Download as PDF
    </Button>
  );
};
