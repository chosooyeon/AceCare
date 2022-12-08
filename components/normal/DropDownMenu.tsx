
import React, { useState, useEffect } from "react";
import Link from 'next/link';

//todo: items type 귀찮아서 안했지만 api가 명확해지면 타입지정
// export type Item = {
//     text: string;
//     slug?: string;
//   };

export default function DropDownMenu({buttonName, items}:{buttonName:string, items:any}) {

  return (
    <div className="group">
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md px-4 py-2 tablet:text-lg text-sm font-medium"
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
          {items.map((item:any, index:any) => {
            return (
              <Link
                key={index}
                href={`/goods/${item.category}/${item.id}`}
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300"
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
