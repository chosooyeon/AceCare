'use client'
import Card from '@components/goods/Card'
import React, { useState, useEffect } from "react";

export default function Home() {
  const sections = [
    {title: '살균소독제', category: 'disinfectant'},
    {title: '마스크', category: 'mask'},
    {title: '코로나키트', category: 'coronaKit'},
    {title: '온도계', category: 'thermometor'}
  ]

  useEffect(()=>{
    const elements = document.querySelectorAll('section');
        
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let elem:any = entry.target;

        if(entry.intersectionRatio > 0){
          elem.classList.add('slide')
        }else{
          elem.classList.remove('slide')
        }
      });
    });

    elements.forEach((el) => {
        observer.observe(el);
    });

  }, [])
  return (
    <div className='w-[1024px] container my-12 mx-auto px-4 md:px-12'>
      {
        sections.map((section, idx:number) => {
          return (
            <section key={idx} className='bg-slate-50 rounded-lg'>
              <div className='text-black pt-5 pl-5'>{section.title}</div>
              <div className='m-7'>
                <Card category={section.category}/>
              </div>
            </section>
          )
        })
      }
    </div>
  )
}
