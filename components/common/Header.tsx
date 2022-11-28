import Link from 'next/link'
import React, { useState, useEffect } from "react";

export default function Header() {
  // const name = getData();
  // console.log(JSON.stringify(name))
  console.log('header log : 클라이언트단이 아닌 서버에 찍힘')

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
  