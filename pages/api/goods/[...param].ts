// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextRequest } from "next/server";
import { goodsList } from "../../../json/goodsData/coronaGoods";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  let returnObj = {};
  let returnStatus = 200;

  const query = req.nextUrl.pathname.split("/");

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
    let goodsArr = goodsList.filter(
      (x) => x.id === goodsId && x.category === category
    );
    goodsArr.length > 0 ? returnObj=goodsArr[0] : null //Array가 아닌 Object로 리턴하기 위함.
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
