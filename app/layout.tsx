import './globals.css'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
// import SideBar from '../components/common/SideBar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head/>
      <body className='bg-white'>
        <Header />
        {/* <SideBar /> */}
        <div className='text-black'>/laytout.tsx</div>
        {children}
         <Footer />
      </body>
    </html>
  )
}
