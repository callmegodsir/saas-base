import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { createCheckout } from '@/libs/stripe';
import connectMongo from '@/libs/mongoose';
import User from '@/models/User';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    await connectMongo();

    const { id } = session.user;
    const { method, body } = req;

    switch (method) {
      case 'POST': {
        if (!body.priceId) {
          return res.status(404).send({ error: 'Need a Price ID for Stripe' });
        } else if (!body.successUrl || !body.cancelUrl) {
          return res
            .status(404)
            .send({ error: 'Need valid success/failure URL to return to' });
        }

        try {
          const user = await User.findById(id);

          if (!user) {
            return res.status(404).json({ error: 'User doesnt exists' });
          }

          const { coupon, successUrl, cancelUrl } = body;

          const stripeSessionURL = await createCheckout({
            successUrl,
            cancelUrl,
            user,
            clientReferenceID: user._id.toString(),
            priceId: body.priceId,
            couponId: coupon ? coupon : undefined,
          });
          return res.status(200).json({ url: stripeSessionURL });
        } catch (e) {
          console.error(e);
          return res.status(500).json({ error: e });
        }
      }

      default:
        res.status(404).json({ error: 'Unknow request type' });
    }
  } else {
    // Not Signed in
    res.status(401).end();
  }
}
