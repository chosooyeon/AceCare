// 'use client'

import { usePathname } from "next/navigation";
import Image from "next/image";
import { goodsList } from "../../../../goodsData/coronaGoods";

async function getGoodsAll() {
  // let reqUrl = `https://acecare.vercel.app/api/goods/all`
  let reqUrl = `https://acecare.vercel.app/api/goods/all`;
  const res = await fetch(reqUrl, {
    // cache: 'no-store' //getServerSideProps(SSR) : 서버에서 api를 요청한 후에 렌더링을 한다.
    cache: "force-cache", //getStaticProps(SSG) : 빌드된 데이터를 서버에 json,html 파일을 가지고 있는다.
    // next: { revalidate:10} //getStaticProps(ISR) : 시간 주기로 서버에서 렌더링을 한다.
  });
  return res.json();
}

export async function generateStaticParams() {
  const rows = await getGoodsAll();
  // const rows = goodsList;

  let params = rows?.map((row: any) => ({
    category: row.category,
    goodsId: row.id,
  }));
  return params;
}

async function getGoodsData(category: any, goodsId: any) {
  // let reqUrl = `https://acecare.vercel.app/api/goods/${category}/${goodsId}`
  let reqUrl = `https://acecare.vercel.app/api/goods/${category}/${goodsId}`;
  const res = await fetch(reqUrl, {
    // cache: 'no-store' //getServerSideProps(SSR) : 서버에서 api를 요청한 후에 렌더링을 한다.
    cache: "force-cache", //getStaticProps(SSG) : 빌드된 데이터를 서버에 json,html 파일을 가지고 있는다.
    // next: { revalidate:10} //getStaticProps(ISR) : 시간 주기로 서버에서 렌더링을 한다.
  });
  return res.json();
}

export default async function Goods({ params }: { params: any }) {
  let category = params.category;
  let goodsId = params.goodsId;

  // import { usePathname } from "next/navigation"; <== 이거는 client 컴포넌트에서만 사용할 수 있다고 해서 제외했어요
  // generateStaticParams 펑션에서 리턴된 데이터는 Goods 파라미터로 들어와요

  let res = await getGoodsData(category, goodsId);
  // console.log(res, "res");

  res = res[0];
  return (
    <main className="">
      {/*<h1 className='text-black'>path : {path}</h1> 카테고리 &gt; {category} */}
      <h1 className="text-black">{`카테고리>${category}`}</h1>
      <div className="grid grid-cols-1 place-items-center p-5">
        <Image src={res.image_path} width={512} height={512} alt="" />
      </div>

      <div className="grid grid-cols-1 place-items-center p-5">
        <Image src={res.image_path} width={512} height={512} alt="" />
      </div>

      <div className="grid grid-cols-1 place-items-center p-5">
        <Image src={res.image_path} width={512} height={512} alt="" />
      </div>

      <div className="grid grid-cols-1 place-items-center p-5">
        <Image src={res.image_path} width={512} height={512} alt="" />
      </div>
    </main>
  );
}
