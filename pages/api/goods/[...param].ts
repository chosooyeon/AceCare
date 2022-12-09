// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextRequest } from "next/server";
import { goodsList } from "../../../goodsData/coronaGoods";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  let returnObj = {};
  let returnStatus = 200;

  const query = req.nextUrl.pathname.split("/");
  console.log(query);
  if (query.length === 4) {
    let category: string = query[3];
    if (category === "all") {
      //전체 상품조회
      //https://acecare.vercel.app/api/goods/all
      returnObj = goodsList;
    } else {
      //카테고리 전체 상품조회
      // https://acecare.vercel.app/api/goods/[categoryId]
      returnObj = goodsList.filter((x) => x.category === category);
    }
  } else if (query.length === 5) {
    //상품조회
    // https://acecare.vercel.app/api/goods/[categoryId]/[goodsId]
    let category: string = query[3];
    let goodsId: string = query[4];
    returnObj = goodsList.filter(
      (x) => x.id === goodsId && x.category === category
    );
  } else {
    returnObj = { msg: "url error" };
    returnStatus = 401;
  }

  return new Response(JSON.stringify(returnObj), {
    status: returnStatus,
    headers: {
      "content-type": "application/json",
    },
  });
}
