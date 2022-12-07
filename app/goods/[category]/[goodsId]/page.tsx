import { usePathname } from "next/navigation";
import Image from "next/image";
import { goodsList } from "../../../../goodsData/coronaGoods";

export async function generateStaticParams() {
  const rows = goodsList;

  return rows?.map((row: any) => ({
    category: row.category,
    goodsId: row.id,
  }));
}

export default function Goods() {
  const pathname = usePathname();
  let category = pathname?.split("/")[2];
  return (
    <>
      <section className="">
        {/*<h1 className='text-black'>path : {path}</h1>*/}
        <h1>카테고리 &gt; {category}</h1>
        <Image
          src="/img/disinfectant_HLNS.jpg"
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
