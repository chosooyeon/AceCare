'use client'

import { usePathname } from "next/navigation";
import Image from "next/image";
import { goodsList } from "../../../../goodsData/coronaGoods";

async function getData() {
  // let reqUrl = `https://acecare.vercel.app/api/goods/all`
  let reqUrl = `http://localhost:3000/api/goods/all`
  const res = await fetch(reqUrl,
      {
        // cache: 'no-store' //getServerSideProps(SSR) : 서버에서 api를 요청한 후에 렌더링을 한다.
        cache: 'force-cache' //getStaticProps(SSG) : 빌드된 데이터를 서버에 json,html 파일을 가지고 있는다.
        // next: { revalidate:10} //getStaticProps(ISR) : 시간 주기로 서버에서 렌더링을 한다.
      });
  return res.json();
}

export async function generateStaticParams() {
  const rows = await getData();
  // const rows = goodsList;

  return rows?.map((row: any) => ({
    category: row.category,
    goodsId: row.id,
  }));
}

async function getGoodsData(category:any, goodsId:any) {
  // let reqUrl = `https://acecare.vercel.app/api/goods/${category}/${goodsId}`
  let reqUrl = `http://localhost:3000/api/goods/${category}/${goodsId}`
  const res = await fetch(reqUrl,
      {
        // cache: 'no-store' //getServerSideProps(SSR) : 서버에서 api를 요청한 후에 렌더링을 한다.
        cache: 'force-cache' //getStaticProps(SSG) : 빌드된 데이터를 서버에 json,html 파일을 가지고 있는다.
        // next: { revalidate:10} //getStaticProps(ISR) : 시간 주기로 서버에서 렌더링을 한다.
      });
  return res.json();
}


export default async function Goods() {

  const pathname = usePathname();
  let category = pathname?.split("/")[2];
  let goodsId = pathname?.split("/")[3];

  let res = await getGoodsData(category,goodsId)
  console.log(res,"res")

  return (
    <>
      <section className="">
        {/*<h1 className='text-black'>path : {path}</h1>*/}
        <h1>카테고리 &gt; {category}</h1>
        <Image
          src={res.image_path}
          width={512}
          height={512}
          alt=""
        />

        <h1>상세정보</h1>
        <div className="text-black">이곳은 상품 상세 페이지 입니다.</div>
      </section>
    </>
  );
}
