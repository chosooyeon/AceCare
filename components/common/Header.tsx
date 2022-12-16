"use client"
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import DropDownMenu from '@components/normal/DropDownMenu';
import { goodsList } from '@json/goodsData/coronaGoods';
import SideMenu from '@components/common/SideMenu';
import { HiMenu } from "react-icons/hi";

//todo: vercel에 배포되면 api로 가져오도록 변경 필요 
async function getData() {
  // let reqUrl = `${mainUrl}/api/user/1`
  let reqUrl = `http://localhost:3000/api/user/1`
  const res = await fetch(reqUrl, 
    { 
      // cache: 'no-store' //getServerSideProps(SSR) : 서버에서 api를 요청한 후에 렌더링을 한다.
      cache: 'force-cache' //getStaticProps(SSG) : 빌드된 데이터를 서버에 json,html 파일을 가지고 있는다.
      // next: { revalidate:10} //getStaticProps(ISR) : 시간 주기로 서버에서 렌더링을 한다.
  });
  return res.json();
}

export default function Header() {

  const disinfectantData = goodsList.filter((x)=>x.category === 'disinfectant') //todo: SSG로 변경 필요
  const maskData = goodsList.filter((x)=>x.category === 'mask')                 //todo: SSG로 변경 필요
  const coronaKitData = goodsList.filter((x)=>x.category === 'coronaKit')       //todo: SSG로 변경 필요
  const thermometorData = goodsList.filter((x)=>x.category === 'thermometor')   //todo: SSG로 변경 필요

    return (
      <header className="sticky top-0 z-50 bg-white laptop:z-50 w-full max-w-8xl mx-auto flex-none flex h-16 laptop:h-20 shadow-lg justify-center">
          <div className="w-[1280px] flex justify-between">
            <SideMenu />

            {/* 
            // * AceCare Main Button
             */}
            <div className="w-[150px] m-5 inline-flex justify-center items-center">
                <span className="font-bold text-xl w-auto text-black"><Link href="/">AceCare</Link></span>
            </div>

            {/* 
            // * 상품 카테고리 메뉴 
             */}
            <div className="flex justify-between items-center">
              <nav className="hidden tablet:block">
                <ul className="inline-flex">
                  {/* // todo: 버튼명 카테고리 명으로 변경 필요 */ }
                  <li className='m-5 w-15 list-none text-black'><DropDownMenu buttonName='disinfectant' items={disinfectantData}/></li>
                  <li className='m-5 w-15 list-none text-black'><DropDownMenu buttonName='mask' items={maskData}/></li>
                  <li className='m-5 w-15 list-none text-black'><DropDownMenu buttonName='coronaKit' items={coronaKitData}/></li>
                  <li className='m-5 w-15 list-none text-black'><DropDownMenu buttonName='thermometor' items={thermometorData}/></li>
                </ul>
              </nav>
            </div>
          </div>
      </header>
    )
  }
  