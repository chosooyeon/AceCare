import Image from 'next/image'
import styles from './page.module.css'
import { Suspense } from "react";
// import Header from '../components/common/Header'

export default function Home() {
  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}>
          <Header/>
      </Suspense> */}
      <section className=''>
        <div className='text-black'>/page.tsx ,Root Page</div>
      </section>
    </>
  )
}
