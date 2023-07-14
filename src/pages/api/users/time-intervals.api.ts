import { NextApiRequest, NextApiResponse } from 'next'
import { buildNextauthOptions } from '../auth/[...nextauth].api'
import { getServerSession } from 'next-auth/next'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  const session = await getServerSession(
    req,
    res,
    buildNextauthOptions(req, res),
  )
  return res.json({
    session,
  })
}
