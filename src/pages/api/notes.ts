import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  // GET req
  if (req.method === 'GET') {
    try {
      const notes = [
        { id: 1, text: 'My note #1', completed: false },
        { id: 2, text: 'My note #2', completed: true },
        { id: 3, text: 'My note #3', completed: false },
      ]

      // GET SUCCESS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      res.status(201).json({
        error: false,
        notes,
      })
    } catch (err) {
      // GET ERROR -----------------------------------------------------------------
      res.status(500).json({ error: true, message: err.message, err })
    }
  } else {
    // error => invalid req method
    res.status(405).json({ error: true, message: 'Only support GET req' })
  }
}
