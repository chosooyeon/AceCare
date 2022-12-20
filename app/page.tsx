import Image from 'next/image'
import styles from './page.module.css'
import Card from '@components/goods/Card'
import { Suspense } from "react";
// import Header from '../components/common/Header'

export default function Home() {
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}>
          <Header/>
      </Suspense> */}
      <section className='w-[1280px] container my-12 mx-auto px-4 md:px-12'>
          <div className='text-black'>살균소독제</div>
          <Card category="disinfectant"/>

          <div className='text-black'>마스크</div>
          <Card category="mask"/>

          <div className='text-black'>코로나키트</div>
          <Card category="coronaKit"/>

          <div className='text-black'>온도계</div>
          <Card category="thermometor"/>
      </section>
    </>
  )
}
