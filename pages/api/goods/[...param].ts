// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextRequest } from 'next/server'
import { goodsList } from '../../../goodsData/coronaGoods'

export const config = {
    runtime: 'experimental-edge',
  }
  
  export default async function handler(req: NextRequest) {
    const query = req.nextUrl.pathname.split('/')
    console.log(query)

    if(query.length < 5){
        return new Response(
            JSON.stringify({msg:"url error"}),
            {
              status: 401,
              headers: {
                'content-type': 'application/json',
              },
            }
          )
    }else{
        let category:string = query[3]
        let goodsId:string = query[4]
        let goodsInfo = goodsList.filter(x => x.id === goodsId  && x.category === category)
        
        return new Response(
        JSON.stringify(goodsInfo),
        {
            status: 200,
            headers: {
            'content-type': 'application/json',
            },
        }
        )
    }

    
  }