import "../styles/globals.css";
import Footer from "@components/common/Footer";
import Header from "@components/common/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link
            href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
            rel="stylesheet"
            type="text/css"
          />
      </head>
      <body className="bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
