import Link from 'next/link'
import React, { useState, useEffect } from "react";
import DropDownMenu from '../normal/DropDownMenu';
import { goodsList } from '../../goodsData/coronaGoods';

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
  // const name = getData();
  // console.log(JSON.stringify(name))
  console.log('header log : 클라이언트단이 아닌 서버에 찍힘')

  const disinfectantData = goodsList.filter((x)=>x.category === 'disinfectant') //todo: SSG로 변경 필요
  const maskData = goodsList.filter((x)=>x.category === 'mask')                 //todo: SSG로 변경 필요
  const coronaKitData = goodsList.filter((x)=>x.category === 'coronaKit')       //todo: SSG로 변경 필요
  const thermometorData = goodsList.filter((x)=>x.category === 'thermometor')   //todo: SSG로 변경 필요

    return (
      <header className="sticky top-0 z-50 bg-yellow-100 laptop:z-50 w-full max-w-8xl mx-auto flex-none flex h-16 laptop:h-20 shadow-lg justify-center">
          {/* <div className="flex-none flex p-2 items-center border-b border-gray-200 lg:border-b-0 lg:hidden ">
              <MenuIcon className="w-10 lg:hidden hover:bg-gray-300 hover:rounded-lg focus:bg-gray-300 focus:rounded-lg"/>
          </div> */}
          <div className="w-[1280px] flex justify-between">
            <div className="w-[150px] m-5">
                <span className="font-bold text-xl w-auto text-black"><Link href="/">Header</Link></span>
            </div>
            <div className="flex justify-between items-center">
  
              <nav className="hidden tablet:block">
                <ul className="inline-flex">
                <li className='m-10 w-15 list-none text-black'><DropDownMenu buttonName='disinfectant' items={disinfectantData}/></li>
                <li className='m-10 w-15 list-none text-black'><DropDownMenu buttonName='mask' items={maskData}/></li>
                <li className='m-10 w-15 list-none text-black'><DropDownMenu buttonName='coronaKit' items={coronaKitData}/></li>
                <li className='m-10 w-15 list-none text-black'><DropDownMenu buttonName='thermometor' items={thermometorData}/></li>
                    <li className='m-10 w-15 list-none text-black'><Link href="/">Root</Link></li>
                    {/* <li className='m-10 w-15 list-none text-black'><Link href="/playground">Playground</Link></li>
                    <li className='m-10 w-15 list-none text-black'><Link href="/about">about</Link></li>
                    <li className='m-10 w-15 list-none text-black'><Link href="/blog">blog</Link></li> */}
      
                </ul>
              </nav>
            </div>
          </div>
          
          
      </header>
    )
  }
  