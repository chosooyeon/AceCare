"use client";

import { useSelectedLayoutSegments } from "next/navigation";

export default function DetailGoodsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  // const selectedLayoutSegments = useSelectedLayoutSegments();
  // console.log(selectedLayoutSegments);

  // let path = "";
  // selectedLayoutSegments.map((segment, index) => {
  //   path += `/${segment}`;
  // });
  return (
    <section className="container mx-auto max-w-5xl">
      {/* <h1 className="text-black">path : {path}</h1> */}
      <div className="px-10">{children}</div>
    </section>
  );
}
