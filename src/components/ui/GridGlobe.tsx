"use client";

import React, { Suspense, lazy } from "react";
import { serviceAreaRoutes } from "../../../data";

const World = lazy(() => import("./Globe").then((module) => ({ default: module.World })));

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 6.5244, lng: 3.3792 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <div className="absolute -left-5 top-36 flex h-full w-full items-center justify-center cursor-grabbing md:top-40">
      <div className="relative mx-auto h-96 w-full max-w-7xl overflow-hidden px-4">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 select-none bg-gradient-to-b from-transparent to-white dark:to-black" />
        <div className="absolute z-10 h-72 w-full md:h-full">
          <Suspense fallback={null}>
            <World data={serviceAreaRoutes} globeConfig={globeConfig} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
