import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  // initial state
  const todos = [
    { id: 1, text: 'My todo #1', completed: false },
    { id: 2, text: 'My todo #2', completed: true },
    { id: 3, text: 'My todo #3', completed: false },
  ]

  // GET req
  if (req.method === 'GET') {
    try {
      // GET SUCCESS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      res.status(201).json({
        success: true,
        todos,
      })
    } catch (err) {
      // GET ERROR -----------------------------------------------------------------
      res.status(500).json({ success: false, msg: err.message })
    }
  } else {
    // error => invalid req method
    res.status(405).json({
      success: false,
      msg: 'Only support GET, POST, PUT, and DELETE req',
    })
  }
}
