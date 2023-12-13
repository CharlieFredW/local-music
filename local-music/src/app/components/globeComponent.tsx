"use client";

import { useState, useEffect, useRef, forwardRef } from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("./globeWrapper"), {
  ssr: false,
});

const World = () => {
  const globeRef = useRef();
  const [globeReady, setGlobeReady] = useState(false);
  const startTime = 1000;

  useEffect(() => {
    if (!globeRef.current) {
      return;
    }

    // Set the initial point of view and disable zoom
    (globeRef.current as any).pointOfView(
      {
        lat: 39.609913,
        lng: -105.962477,
        altitude: 2.5,
      },
      startTime
    );
    (globeRef.current as any).controls().enableZoom = false;
  }, [globeReady]);

  return (
    <>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        onGlobeReady={() => setGlobeReady(true)}
        height={1000}
        animateIn={true}
        ref={globeRef}
      />
    </>
  );
};

export default World;
