// 추후 mode 에 따라서 분기처리 "http://localhost:3000"
let URL = "https://acecare.vercel.app"

/**
 * cache: 'no-store' //getServerSideProps(SSR) : 서버에서 api를 요청한 후에 렌더링을 한다.
 * cache: "force-cache", //getStaticProps(SSG) : 빌드된 데이터를 서버에 json,html 파일을 가지고 있는다.
 * next: { revalidate:10} //getStaticProps(ISR) : 시간 주기로 서버에서 렌더링을 한다.
 * */

async function getGoodsAll() {
    let reqUrl = `${URL}/api/goods/all`;
    const res = await fetch(reqUrl, { cache: "force-cache" });
    return res.json();
}

async function getGoodsData(category: any, goodsId: any) {
    let reqUrl = `${URL}/api/goods/${category}/${goodsId}`;
    const res = await fetch(reqUrl, { cache: "force-cache"});
    return res.json();
}

async function getCategory(category: any){
    let reqUrl = `${URL}/category/${category}`;
    const res = await fetch(reqUrl, { cache: "force-cache" });
    return res.json();
}

export { getGoodsAll, getGoodsData, getCategory }