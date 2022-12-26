"use client"
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import DropDownMenu from '@components/ui/DropDownMenu';
import { goodsList } from '@json/goodsData/coronaGoods';
import SideMenu from '@components/common/SideMenu';
import { getGoodsAll } from "@components/api/goods";
import { MenuItem } from '@type/menu';
import { GoodsInfo } from "@type/goods";

export default function Header() {

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  useEffect(() => {
    async function initData(){
      const goodsList:GoodsInfo[] = await getGoodsAll();

      setMenuItems([
        {
          title: '살균소독제',
          items: goodsList.filter((x)=>x.category === 'disinfectant')
        },
        {
          title: '마스크',
          items: goodsList.filter((x)=>x.category === 'mask')
        },
        {
          title: '코로나키트',
          items: goodsList.filter((x)=>x.category === 'coronaKit')
        },
        {
          title: '온도계',
          items: goodsList.filter((x)=>x.category === 'thermometor')
        }
      ])
    }
    initData()
  }, [])

    return (
      <header className="sticky top-0 z-50 bg-white laptop:z-50 w-full max-w-8xl mx-auto flex-none flex h-14 laptop:h-20 shadow-lg justify-center backdrop-blur-xl bg-white/30">
          <div className="w-[1280px] flex">
            <div className='tablet:hidden'>
              <SideMenu menuItems={menuItems} />
            </div>

            {/* 
            // * AceCare Main Button
             */}
            <div className="w-[150px] m-5 inline-flex justify-center items-center">
                <span className="font-bold text-xl w-auto text-black hover:text-main-color"><Link href="/">AceCare</Link></span>
            </div>

            {/* 
            // * 상품 카테고리 메뉴 
             */}
            <div className="flex justify-between items-center">
              <nav className="hidden tablet:block">
                <ul className="inline-flex">
                  {
                    menuItems.map((item:MenuItem, idx:number)=>{
                      return (
                        <li key={idx} className='m-5 w-15 list-none'>
                          <DropDownMenu buttonName={item.title} items={item.items}/>
                        </li>  
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
  