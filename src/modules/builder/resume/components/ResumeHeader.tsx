import { useTemplates } from '@/stores/useTemplate';
import { useZoom } from '@/stores/useZoom';
import ResumeController from '../atoms/ResumeController';
import { ResumeTitle } from '../atoms/ResumeTitle';
import { Button } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '');

const ResumeHeader = () => {
  const { zoomIn, zoomOut, resetZoom } = useZoom.getState();
  const templateName = useTemplates((state) => state.activeTemplate.name);

  const handlePayment = async () => {
    try {
      const res = await fetch('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: `${templateName} Resume PDF`,
          success_url: `${window.location.origin}/builder?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: window.location.href,
        }),
      });

      const { sessionId } = await res.json();
      if (!sessionId) {
        throw new Error('Failed to create Stripe session');
      }

      const stripe = await stripePromise;
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          alert(error.message);
        }
      }
    } catch (error) {
      console.error('Payment Error:', error);
      alert('Could not initiate payment. Please try again.');
    }
  };

  const handleDownloadClick = () => {
    // For now, this directly calls the payment handler.
    // In a real app, you might want to check if the user has already paid for this session.
    handlePayment();
  };

  // Check for successful payment from URL query parameters.
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('session_id')) {
      // Payment was successful. Trigger the download.
      // A small delay gives the user a moment to see the page has reloaded.
      setTimeout(() => {
        globalThis?.print();

        // Optional: remove query params to avoid re-triggering download on refresh
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
      }, 500);
    }
  }

  return (
    <div className="flex items-center justify-between">
      <ResumeTitle title={templateName} />
      <div className="hidden md:flex items-center gap-4">
        <Button
          variant="contained"
          size="small"
          onClick={handleDownloadClick}
          className="bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_10px_theme(colors.purple.500/0.5)]"
        >
          Download as PDF
        </Button>
        <ResumeController zoomIn={zoomIn} zoomOut={zoomOut} resetZoom={resetZoom} />
      </div>
    </div>
  );
};

export default ResumeHeader;
