"use client"
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import DropDownMenu from '@components/ui/DropDownMenu';
import { goodsList } from '@json/goodsData/coronaGoods';
import SideMenu from '@components/common/SideMenu';
import { MenuItem } from '@type/menu';


export default function Header() {

  const menuItems:MenuItem[] = [
    {
      title: 'disinfectant',
      items: goodsList.filter((x)=>x.category === 'disinfectant') //todo: SSG로 변경 필요
    },
    {
      title: 'mask',
      items: goodsList.filter((x)=>x.category === 'mask')                 //todo: SSG로 변경 필요
    },
    {
      title: 'coronaKit',
      items: goodsList.filter((x)=>x.category === 'coronaKit')       //todo: SSG로 변경 필요
    },
    {
      title: 'thermometor',
      items: goodsList.filter((x)=>x.category === 'thermometor')   //todo: SSG로 변경 필요
    }
  ]

    return (
      <header className="sticky top-0 z-50 bg-white laptop:z-50 w-full max-w-8xl mx-auto flex-none flex h-16 laptop:h-20 shadow-lg justify-center">
          <div className="w-[1280px] flex justify-between">
            <SideMenu menuItems={menuItems} />

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
                  {
                    menuItems.map((item:MenuItem, idx:number)=>{
                      return (
                        <li key={idx} className='m-5 w-15 list-none text-black'><DropDownMenu buttonName={item.title} items={item.items}/></li>  
                      )
                    })
                  }
                </ul>
              </nav>
            </div>
          </div>
      </header>
    )
  }
  