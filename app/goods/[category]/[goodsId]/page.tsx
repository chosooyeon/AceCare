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
    <main>
      <div className="font-sans text-black text-center">{`${resCategory.kor_category} 카테고리에 있는 ${goods.name} 상품을 보고계십니다`}</div>
      
      <div className="grid grid-cols-1 place-items-center p-5">
        <Image src={goods.image_path} width={512} height={512} alt="" />
      </div>

      <div className="text-black text-center">구입과 관련한 궁금한 점이 있으신가요?</div>
      <div className="text-black text-center">TEL: 010.0000.0000</div>

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
