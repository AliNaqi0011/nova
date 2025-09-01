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
    // Force visibility of resume content
    const resumeElement = document.getElementById('resume-page-view');
    const containerElement = document.getElementById('resume-container');
    const builderLayout = document.querySelector('.builder-layout');
    
    if (resumeElement) {
      resumeElement.style.visibility = 'visible';
      resumeElement.style.opacity = '1';
      resumeElement.style.display = 'block';
    }
    
    if (containerElement) {
      containerElement.style.visibility = 'visible';
      containerElement.style.opacity = '1';
      containerElement.style.display = 'flex';
      containerElement.style.alignItems = 'center';
      containerElement.style.justifyContent = 'center';
    }
    
    // Reset layout padding for print
    if (builderLayout) {
      const flexElement = builderLayout.querySelector('.flex-1');
      if (flexElement) {
        (flexElement as HTMLElement).style.paddingTop = '0';
      }
    }
    
    // Add print class to body
    document.body.classList.add('printing');
    
    setTimeout(() => {
      globalThis?.print();
      // Remove print class after printing
      setTimeout(() => {
        document.body.classList.remove('printing');
        // Restore original padding
        if (builderLayout) {
          const flexElement = builderLayout.querySelector('.flex-1');
          if (flexElement) {
            (flexElement as HTMLElement).style.paddingTop = '';
          }
        }
      }, 1000);
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
