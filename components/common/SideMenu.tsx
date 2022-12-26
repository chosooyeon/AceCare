import { HiMenu } from "react-icons/hi";
import { RiArrowUpSLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { GoodsInfo } from "@type/goods";
import { MenuItem } from "@type/menu";

export default function SideMenu({menuItems}: {menuItems:MenuItem[]}) {
    const router = useRouter()
    const [sideView, setSideView] = useState(false);
    useEffect(() => {
      if(sideView){
          document.body.style.overflow = "hidden";
      }else{
          document.body.style.overflow = "unset";
      }
    }, [sideView]);

    return(
        <>
           <div className="p-2 w-8 items-center text-gray-500 hover:text-main-color inline-flex">
                <button onClick={()=>setSideView(!sideView)}>
                    <span>
                        <HiMenu className="w-8 h-10"/>    
                    </span>
                </button>
            </div>

            <div className={`fixed top-0 z-[1200] lg:hidden w-full h-[100vh] bg-gray-500 opacity-40 transition blur-sm ${sideView?'visible':'invisible'}`} onClick={()=>setSideView(!sideView)}></div>
            <div className={`fixed top-0 z-[1300] lg:hidden w-[300px] h-[100vh] bg-white ${sideView?'left-0':'left-[-300px]'} duration-300`}>
                <div className="text-black font-bold text-lg p-5 hover:text-main-color border-b border-gray-200" onClick={()=>{
                    setSideView(!sideView)
                    router.push(`/`)
                }}>
                AceCare
                </div>
                <nav>
                    {
                        menuItems.map((menuItem, idx) =>{
                            return (
                                <AccordionMenu title={menuItem.title} items={menuItem.items} sideView={sideView} setSideView={setSideView} key={idx} />
                            )
                        })
                    }
                </nav>
            </div>
            
        </>
    )
}


function AccordionMenu ({title, items, sideView, setSideView}: {title:string, items:GoodsInfo[], sideView:boolean, setSideView:any}) {
    const router = useRouter()
    const [toggle, setToggle] = useState(true);
    const clickedToggle = () => {
        // console.log(toggle)
        setToggle((prev) => !prev);
    };

    return (
        <div className="bg-white text-black">
            <div className="flex place-content-between h-10 pl-3 hover:rounded-lg hover:font-bold hover:text-main-color" onClick={clickedToggle}>
                <div className="self-center">{title}</div>
                <button className="w-5"><RiArrowUpSLine className={`justify-self-end ${toggle?'rotate-180 duration-500':'duration-500'}`}/></button>
            </div>
            <div>
                <ul className={`p-1 ml-2 ${toggle?'block':'hidden'} ${toggle?'animate-accordian-menu-open':'animate-accordian-menu-close'} border-l`}> 
                    {
                        items.map((item :GoodsInfo, idx:number)=>{
                            return (
                                <li className="hover:bg-white hover:font-bold hover:text-main-color" key={idx}>
                                    <button className='transition duration-150 ease-in-out' onClick={()=>{
                                        setSideView(!sideView)
                                        router.push(`/goods/${item.category}/${item.id}`)
                                    }}>
                                        <span className="relative flex"><BsDot className='self-center'/>{item.name}</span>
                                    </button>
                                </li>        
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}