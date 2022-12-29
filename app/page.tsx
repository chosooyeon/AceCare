'use client'
import Card from '@components/goods/Card'
import {SlideAnim} from '@components/hooks/Anim'
import { useEffect } from 'react'

export default function Home() {
  const sections = [
    {title: '살균소독제', category: 'disinfectant'},
    {title: '마스크', category: 'mask'},
    {title: '코로나키트', category: 'coronaKit'},
    {title: '온도계', category: 'thermometor'}
  ]
  
  SlideAnim()

  useEffect(()=>{
    const introText = document.querySelectorAll("span");

    let timer = 200;
    introText.forEach((item) => {
      item.style.animation = `fade 500ms ${(timer += 100)}ms forwards`;
    });
  })
  
  
  return (
  <>
    <div className='w-[1024px] container my-12 mx-auto px-4 md:px-12'>
      <div className='text-center text-2xl'>
        <p>
          <span>안</span>
          <span>녕</span>
          <span>하</span>
          <span>세</span>
          <span>요</span>
        </p>
        <p>
          <span>A</span>
          <span>c</span>
          <span>e</span>
          <span>C</span>
          <span>a</span>
          <span>r</span>
          <span>e</span>
          <span>입</span>
          <span>니</span>
          <span>다</span>
        </p>
      </div>
      {
        sections.map((section, idx:number) => {
          return (
            <section key={idx} className='rounded-lg'>
              <div className='text-black pt-5 pl-5'>{section.title}</div>
              <div className='card m-7'>
                <Card category={section.category}/>
              </div>
            </section>
          )
        })
      }
    </div>
    </>
  )
}
