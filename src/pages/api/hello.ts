// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import mercadopago from 'mercadopago'

type Data = {
  id: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  mercadopago.configure({
    access_token:
      'APP_USR-4764043651408948-082318-00e8c3b0c0381605b193d19c4849f8c5-1457798436',
  })

  // Cria um objeto de preferência
  let preference = {
    items: [
      {
        title: 'Recarga beVoltz',
        unit_price: 1,
        quantity: 1,
      },
    ],
    back_urls: {
      success: 'http://localhost:3000/success',
      failure: 'http://localhost:3000/failure',
      pending: 'http://www.seu-site/pending',
    },
    auto_return: 'approved' as 'approved',
  }

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.status(200).json({ id: response.body.id })
    })
    .catch(function (error) {
      console.log(error)
      res.status(400).json({ id: error })
    })
}
