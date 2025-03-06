"use client";

import maplibregl from "maplibre-gl";
import type { SourceSpecification } from "maplibre-gl";
import basemapStyle from "@/lib/map-style/basemap";
import { useEffect, useRef } from "react";

export default function Page() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  const basemap: SourceSpecification = {
    type: "vector",
    tiles: [
      `${process.env.NEXT_PUBLIC_MAPSERVICE_TILES_URL}/central_oregon/basemap/2025-01-23_346dd2b5/{z}/{x}/{y}.mvt`,
    ],
    maxzoom: 16,
  };

  const elevation: SourceSpecification = {
    type: "raster-dem",
    tiles: [
      `${process.env.NEXT_PUBLIC_MAPSERVICE_TILES_URL}/central_oregon/elevation/2023-12-04_6AF17C79/{z}/{x}/{y}.webp`,
    ],
    tileSize: 512,
  };

  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      maxBounds: [
        [-123.417224, 43.022586],
        [-118.980589, 45.278084],
      ],
      center: [-121.315144, 44.058086],
      zoom: 10,
      maxZoom: 18,
      hash: "loc",
      style: {
        version: 8,
        glyphs: `${process.env.NEXT_PUBLIC_MAPSERVICE_STATIC_URL}/{fontstack}/{range}.pbf`,
        sources: {
          basemap,
          elevation,
        },
        layers: basemapStyle,
      },
    });

    return () => {
      map.current?.remove();
    };
  }, []);
  return <div ref={mapContainer} style={{ width: "100vw", height: "100vh" }} />;
}
