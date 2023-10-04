// pages/api/webhook.js

import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    res.writeHead(302, { Location: '/success' })
    return res.end()
  } else {
    res.status(405).send({ message: 'Método não permitido.' })
  }
}
