import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { productName, success_url, cancel_url } = req.body;

      if (!productName || !success_url || !cancel_url) {
        return res.status(400).json({ error: 'Missing required parameters' });
      }

      // Create a Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: productName,
                description: 'A professional resume tailored to your needs.',
              },
              unit_amount: 500, // Amount in cents ($5.00)
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: success_url,
        cancel_url: cancel_url,
      });

      if (!session.id) {
        throw new Error('Could not create Stripe session');
      }

      res.status(200).json({ sessionId: session.id });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      console.error('Stripe Error:', errorMessage);
      res.status(500).json({ error: 'Something went wrong with the payment process.' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
