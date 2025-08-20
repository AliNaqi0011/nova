import { useTemplates } from '@/stores/useTemplate';
import { useZoom } from '@/stores/useZoom';
import ResumeController from '../atoms/ResumeController';
import { ResumeTitle } from '../atoms/ResumeTitle';
import { Button } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import { useResumeStore } from '@/stores/useResumeStore';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const ResumeHeader = () => {
  const { zoomIn, zoomOut, resetZoom } = useZoom.getState();
  const templateName = useTemplates((state) => state.activeTemplate.name);
  const resumeData = useResumeStore();
  const [isDownloading, setIsDownloading] = useState(false);
  const router = useRouter();

  const handleDownload = async () => {
    setIsDownloading(true);
    const resumeElement = document.getElementById('resume-page-view');
    if (!resumeElement) {
      console.error('Resume element not found');
      setIsDownloading(false);
      return;
    }

    try {
      const canvas = await html2canvas(resumeElement, {
        scale: 3, // Higher scale for better quality
        useCORS: true,
        logging: false, // Turn off logging for production
        width: resumeElement.offsetWidth,
        height: resumeElement.offsetHeight,
        windowWidth: resumeElement.scrollWidth,
        windowHeight: resumeElement.scrollHeight,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasWidth / canvasHeight;

      let newWidth = pdfWidth;
      let newHeight = newWidth / ratio;

      if (newHeight > pdfHeight) {
        newHeight = pdfHeight;
        newWidth = newHeight * ratio;
      }

      const offsetX = (pdfWidth - newWidth) / 2;
      const offsetY = (pdfHeight - newHeight) / 2;

      pdf.addImage(imgData, 'PNG', offsetX, offsetY, newWidth, newHeight);
      pdf.save(`${resumeData.basics.name}-resume.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
      handleDownload();
      // Clean up the URL
      router.replace(router.pathname, undefined, { shallow: true });
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
      // Clean up the URL
      router.replace(router.pathname, undefined, { shallow: true });
    }
  }, [router]);

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: `${templateName} Resume`,
          success_url: `${window.location.origin}${window.location.pathname}?success=true`,
          cancel_url: `${window.location.origin}${window.location.pathname}?canceled=true`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create Stripe session');
      }

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error('Stripe.js has not loaded yet.');
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.warn('Error redirecting to Stripe Checkout:', error);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <ResumeTitle title={templateName} />
      <div className="hidden md:flex items-center gap-4">
        <ResumeController zoomIn={zoomIn} zoomOut={zoomOut} resetZoom={resetZoom} />
        <Button
          onClick={handleCheckout}
          variant="outlined"
          color="primary"
          disabled={isDownloading}
        >
          {isDownloading ? 'Downloading...' : 'Download as PDF'}
        </Button>
      </div>
    </div>
  );
};

export default ResumeHeader;
