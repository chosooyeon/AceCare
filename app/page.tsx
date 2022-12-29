'use client'
import Card from '@components/goods/Card'
import {SlideAnim} from '@components/hooks/Anim'

export default function Home() {
  const sections = [
    {title: '살균소독제', category: 'disinfectant'},
    {title: '마스크', category: 'mask'},
    {title: '코로나키트', category: 'coronaKit'},
    {title: '온도계', category: 'thermometor'}
  ]
  
  SlideAnim()
  
  return (
    <div className='w-[1024px] container my-12 mx-auto px-4 md:px-12'>
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
  )
}
