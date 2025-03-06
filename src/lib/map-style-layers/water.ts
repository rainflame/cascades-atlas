import type { LayerSpecification } from "maplibre-gl";

type WaterKey = "water_fill" | "water_labels" | "water_outline";

const water: { [key in WaterKey]: LayerSpecification } = {
  water_fill: {
    id: "water_fill",
    type: "fill",
    source: "basemap",
    "source-layer": "water",
    paint: {
      "fill-color": "#9dcde1",
      "fill-opacity": 1,
    },
  },
  water_outline: {
    id: "water_outline",
    type: "line",
    source: "basemap",
    "source-layer": "water",
    paint: {
      "line-color": "#4a7d9f",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.25, 16, 2],
    },
    minzoom: 10,
  },
  water_labels: {
    id: "water_labels",
    type: "symbol",
    source: "basemap",
    "source-layer": "water-labels",
    layout: {
      "symbol-placement": "line-center",
      "text-field": "{name}",
      "text-font": ["Decimal Bold"],
      "text-max-angle": 90,
      "text-size": ["interpolate", ["linear"], ["zoom"], 11, 12, 16, 12],
      "text-transform": "uppercase",
      "text-letter-spacing": 0.5,
      "text-max-width": 14,
      "text-anchor": "center",
      "text-justify": "center",
      "text-padding": 2,
      "text-rotation-alignment": "map",
      "text-pitch-alignment": "map",
    },
    paint: {
      "text-color": "#4a7d9f",
    },
    minzoom: 11,
    maxzoom: 18,
  },
};

export default water;
