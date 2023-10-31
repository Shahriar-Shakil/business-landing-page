"use client";
import { usePathname } from "next/navigation";

import React, { useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function Locomotive({ children }) {
  const scrollRef = React.createRef();
  const pathname = usePathname();
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      location={pathname}
      onLocationChange={(scroll) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
      containerRef={scrollRef}
    >
      <main data-scroll-container className="scroll" ref={scrollRef}>
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
}
