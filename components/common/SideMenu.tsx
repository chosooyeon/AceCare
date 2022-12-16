import { HiMenu } from "react-icons/hi";
import React, { useState, useEffect } from "react";

export default function SideMenu() {
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
           <div className="p-2 w-8 items-center text-gray-500 hover:text-black inline-flex tablet:hidden">
                <button onClick={()=>setSideView(!sideView)}>
                    <span>
                        <HiMenu className="w-8 h-10"/>    
                    </span>
                </button>
            </div>

            <div className={`fixed top-0 z-[1200] lg:hidden w-full h-[100vh] bg-gray-500 opacity-40 transition blur-sm ${sideView?'visible':'invisible'}`} onClick={()=>setSideView(!sideView)}></div>
          <nav className={`fixed top-0 z-[1300] lg:hidden w-[300px] h-full bg-white opacity-100 ${sideView?'left-0':'left-[-300px]'} duration-300`}>

          </nav>
        </>
    )
}