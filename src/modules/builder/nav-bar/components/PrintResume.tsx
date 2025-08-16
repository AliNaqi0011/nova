import { useEffect } from 'react';
import { Button } from '@mui/material';

export const PrintResume: React.FC = () => {
  useEffect(() => {
    const beforePrintHandler = () => {
      globalThis.document.title = `Resume_Builder_${Date.now()}`;
    };
    const afterPrintHandler = () => {
      globalThis.document.title = 'Single Page Resume Builder';
    };

    globalThis?.addEventListener('beforeprint', beforePrintHandler);
    globalThis?.addEventListener('afterprint', afterPrintHandler);

    return () => {
      globalThis?.removeEventListener('beforeprint', beforePrintHandler);
      globalThis?.removeEventListener('afterprint', afterPrintHandler);
    };
  }, []);

  return (
    <Button onClick={() => globalThis?.print()} variant="outlined" color="primary">
      Download as PDF
    </Button>
  );
};
