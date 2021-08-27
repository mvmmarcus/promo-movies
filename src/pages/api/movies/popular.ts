import { NextApiRequest, NextApiResponse } from 'next'
import moviesApi from 'services/movies'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req
  switch (method) {
    case 'GET':
      try {
        const { page } = query
        const { data } = await moviesApi.getMostPopularMovies(page as string)
        res.status(200).json(data)
      } catch (error) {
        res
          .status(error?.response?.status || 404)
          .json({ success: false, data: error?.response?.data || error })
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
export default handler
