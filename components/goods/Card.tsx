'use client'

import Image from "next/image";
import { getGoodsCategoryData } from "@components/api/goods";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GoodsInfo } from "@type/goods";

export default function Card({ category }: { category:string }){

    const [categoryGoods, setCategoryGoods] = useState<GoodsInfo[]>([])

    useEffect(() => {
        async function fetchGoodsCategory(){
            let goodslist = await getGoodsCategoryData(category)
            setCategoryGoods(goodslist)
        }
        fetchGoodsCategory()
    },[category]);
    return(
        <>
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {categoryGoods.map((goods:GoodsInfo,index:number)=>{
                return(
                    <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        {/*Article*/}
                        <article className="overflow-hidden rounded-lg hover:border hover:border-gray-200 shadow-md hover:shadow-lg">

                            
                            <Link href={`/goods/${goods.category}/${goods.id}`}>
                                <Image alt="Placeholder" className="block h-auto w-full" width="160" height="240" src={goods.image_path}/>
                            </Link>
                            

                            <header className="flex bg-white items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <Link className="no-underline hover:underline text-black" href={`/goods/${goods.category}/${goods.id}`}>
                                        {goods.name}
                                    </Link>
                                </h1>
                                <p className="text-grey-darker text-sm">{goods.kor_category}</p>
                            </header>

                        </article>
                        {/*END Article*/}
                    </div>
                )
            })}
            </div>
        </>
    )
}