"use client";

import { Suspense, lazy } from "react";
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
    <div className="pointer-events-none absolute inset-x-0 flex h-[100%] items-end justify-center md:h-[100%]">
      <div className="relative h-full w-full max-w-[24rem] overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-b from-transparent to-[#04071d]" />
        <div className="absolute inset-0 z-10">
          <Suspense fallback={null}>
            <World data={serviceAreaRoutes} globeConfig={globeConfig} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
