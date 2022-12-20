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
      <section className=''>
        <div className='text-black'>마스크</div>
        <Card category="disinfectant"/>
      </section>
    </>
  )
}
