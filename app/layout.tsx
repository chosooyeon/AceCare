import './globals.css'
// import Footer from '../components/common/Footer'
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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body className='bg-white'>
        <Header />
        {/* <SideBar /> */}
        <div className='text-black'>/laytout.tsx</div>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
