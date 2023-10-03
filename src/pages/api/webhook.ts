// pages/api/webhook.js

import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const paymentData = req.body

    if (
      paymentData.status === 'approved' &&
      paymentData.payment_type_id === 'pix'
    ) {
      res.writeHead(302, { Location: '/success' })
      return res.end()
    } else {
      res.status(200).send({
        message: 'Notificação recebida, mas não é um pagamento PIX aprovado.',
      })
    }
  } else {
    res.status(405).send({ message: 'Método não permitido.' })
  }
}
