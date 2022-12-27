
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { GoodsInfo } from "@type/goods";

export default function DropDownMenu({buttonName, items}:{buttonName:string, items:GoodsInfo[]}) {

  return (
    <div className="group">
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md px-4 py-2 tablet:text-base font-semibold text-gray-500 hover:text-main-color"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {buttonName}
      </button>

      <div
        className={`hidden group-hover:block absolute bg-white w-40 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none -mt-1`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-0" role="none">
          {items.map((item:GoodsInfo, index:any) => {
            return (
              <Link
                key={index}
                href={`/goods/${item.category}/${item.id}`}
                className="text-gray-700 block px-4 py-2 text-sm hover:text-main-color"
                role="menuitem"
                id="menu-item-0"
                tabIndex={-1}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
