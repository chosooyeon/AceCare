"use client";

import React, { useState, useEffect } from "react";

export default function DropDown() {
  let buttonInfo = {
    name: "버튼명",
  };
  let dropdownItems = [
    {
      name: "Account settings",
    },
    {
      name: "Support",
    },
    {
      name: "License",
    },
  ];

  return (
    <div className="group">
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {buttonInfo.name}
      </button>

      <div
        className={`hidden group-hover:block absolute bg-white w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none -mt-1`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-0" role="none">
          {dropdownItems.map((item, index) => {
            return (
              <a
                key={index}
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-300"
                role="menuitem"
                id="menu-item-0"
                tabIndex={-1}
              >
                {item.name}
              </a>
            );
          })}
          {/* <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-0"
            tabIndex={-1}
          ></a> */}
        </div>
      </div>
    </div>
  );
}
