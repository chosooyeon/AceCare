// 'use client'

import Image from "next/image";
import { getGoodsData, getGoodsAll, getCategory } from "@components/api/goods";
import { GoodsInfo } from "@type/goods";

export async function generateStaticParams() {
  const rows:GoodsInfo[] = await getGoodsAll();
  let params = rows.map((row: GoodsInfo) => ({
    category: row.category,
    goodsId: row.id,
  }));
  return params;
}

export default async function Goods({ params }: { params: any }) {
  let category = params.category;
  let goodsId = params.goodsId;

  let goods:GoodsInfo = await getGoodsData(category, goodsId);
  let resCategory = await getCategory(category);

  resCategory = resCategory[0];

  return (
    <main className="">
      {/*<h1 className='text-black'>path : {path}</h1> 카테고리 &gt; {category} */}
      <h1 className="text-black">{`카테고리 > ${resCategory.kor_category}`}</h1>
      <div className="grid grid-cols-1 place-items-center p-5">
        <Image src={goods.image_path} width={512} height={512} alt="" />
      </div>

      <h1 className="text-black">{`상품상세 > ${goods.name}`}</h1>
      <div className="grid grid-cols-1 place-items-center p-5">
        {goods.img_detail_paths?.map((item:string, index:number) => {
            return(
                <Image key={index} src={item} width={512} height={512} alt="" />
            )
        })}
      </div>
    </main>
  );
}
