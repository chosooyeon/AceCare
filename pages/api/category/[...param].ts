import type { NextRequest } from "next/server";
import { categoryList } from "../../../json/categoryData/categoryList";

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
            //카테고리 전체 조회
            //https://acecare.vercel.app/api/category/all
            returnObj = categoryList;
        } else {
            // 카테고리 category로 조회
            // https://acecare.vercel.app/api/category/[category]
            let category: string = query[3];
            returnObj = categoryList.filter(
                (x) => x.category === category
            );
        }
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
