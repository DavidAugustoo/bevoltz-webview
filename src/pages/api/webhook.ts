// pages/api/webhook.js

import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const paymentData = req.body

    // Aqui, você pode verificar se a notificação é realmente do Mercado Pago.
    // Por exemplo, verifique assinaturas, tokens, etc.

    if (
      paymentData.status === 'approved' &&
      paymentData.payment_type_id === 'pix'
    ) {
      // Faça o que você precisa fazer quando o pagamento for confirmado, por exemplo:
      // - Atualizar o status do pedido no seu banco de dados
      // - Enviar um e-mail de confirmação ao cliente
      // - Etc.

      res.status(200).send({ message: 'Pagamento via PIX confirmado!' })
    } else {
      res.status(200).send({
        message: 'Notificação recebida, mas não é um pagamento PIX aprovado.',
      })
    }
  } else {
    res.status(405).send({ message: 'Método não permitido.' })
  }
}
