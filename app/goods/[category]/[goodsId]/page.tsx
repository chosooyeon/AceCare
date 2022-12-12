// 'use client'

import Image from "next/image";
import { getGoodsData, getGoodsAll, getCategory } from "./pageApi";

export async function generateStaticParams() {
  const rows = await getGoodsAll();

  let params = rows?.map((row: any) => ({
    category: row.category,
    goodsId: row.id,
  }));
  return params;
}

export default async function Goods({ params }: { params: any }) {
  let category = params.category;
  let goodsId = params.goodsId;

  // import { usePathname } from "next/navigation"; <== 이거는 client 컴포넌트에서만 사용할 수 있다고 해서 제외했어요
  // generateStaticParams 펑션에서 리턴된 데이터는 Goods 파라미터로 들어와요

  let res = await getGoodsData(category, goodsId);
  let resCategory = await getCategory(category);

  res = res[0];
  resCategory = resCategory[0];

  return (
    <main className="">
      {/*<h1 className='text-black'>path : {path}</h1> 카테고리 &gt; {category} */}
      <h1 className="text-black">{`카테고리 > ${resCategory.kor_category}`}</h1>
      <div className="grid grid-cols-1 place-items-center p-5">
        <Image src={res.image_path} width={512} height={512} alt="" />
      </div>

      <h1 className="text-black">{`상품상세 > ${res.name}`}</h1>
      <div className="grid grid-cols-1 place-items-center p-5">
        <Image src={res.image_path} width={512} height={512} alt="" />
      </div>
    </main>
  );
}
