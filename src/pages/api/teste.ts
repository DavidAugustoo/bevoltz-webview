// pages/api/webhook.js

import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.writeHead(302, { Location: '/success' })
  return res.end()
}
