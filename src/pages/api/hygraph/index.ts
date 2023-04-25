import { gql } from "@apollo/client"
import { NextApiRequest, NextApiResponse } from "next"
import { getClient } from "../../../../lib/apolloClient"



export default async (req: NextApiRequest, res: NextApiResponse) => {

    const GET_CATEGORIES = gql` 
       query myQuery {
          categories {
            id
            name
            categoryThumbnail {
              url
            }
            slug
            }
          }
      `

    // const { query } = req.body

  try {
    const client = getClient()
    
    const queryResponse = await client.query({
        query: GET_CATEGORIES
    })

    res.json(queryResponse)
  } catch (e) {
    console.error(e)
  }
}
