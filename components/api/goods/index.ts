
const URL = process.env.NEXT_PUBLIC_API_URL
const SSR:any = { cache: "no-store", headers:{'Accept':'application/json'}}       //getServerSideProps(SSR) : 서버에서 api를 요청한 후에 렌더링을 한다.
const SSG:any = { cache: "force-cache", headers:{'Accept':'application/json'}}    //getStaticProps(SSG) : 빌드된 데이터를 서버에 json,html 파일을 가지고 있는다.
const ISR:any = { next: {revalidate: 10}, headers:{'Accept':'application/json'}}    //getStaticProps(ISR) : 시간 주기로 서버에서 렌더링을 한다.

async function getGoodsAll() {
    let reqUrl = `${URL}/api/goods/all`;
    const res = await fetch(reqUrl ,SSG);
    return res.json();
}

async function getGoodsData(category: string, goodsId: number) {
    let reqUrl = `${URL}/api/goods/${category}/${goodsId}`;
    const res = await fetch(reqUrl, SSG);
    return res.json();
}

async function getGoodsCategoryData(category: string) {
    let reqUrl = `${URL}/api/goods/${category}`;
    const res = await fetch(reqUrl, SSG);
    return res.json();
}

async function getCategory(category: any){
    let reqUrl = `${URL}/api/category/${category}`;
    const res = await fetch(reqUrl, SSG);
    return res.json();
}

export { getGoodsAll, getGoodsData, getGoodsCategoryData, getCategory }