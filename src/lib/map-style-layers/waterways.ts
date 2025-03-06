import type { LayerSpecification } from "maplibre-gl";

type WaterwayKey =
  | "streams"
  | "rivers"
  | "waterways_intermittent"
  | "canal_culvert_casings"
  | "canals_in_culverts"
  | "canals"
  | "waterway_labels";

const waterways: { [key in WaterwayKey]: LayerSpecification } = {
  streams: {
    id: "streams",
    type: "line",
    source: "basemap",
    "source-layer": "waterways",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#4a7d9f",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.25, 18, 3],
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0, 14, 1],
    },
    filter: [
      "all",
      [
        "any",
        ["==", "type", "stream"],
        ["==", "type", "ditch"],
        ["==", "type", "drain"],
      ],
      ["!=", "intermittent", "yes"],
    ],
    minzoom: 10,
    maxzoom: 19,
  },

  rivers: {
    id: "rivers",
    type: "line",
    source: "basemap",
    "source-layer": "waterways",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#4a7d9f",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.25, 18, 6],
      "line-opacity": 1,
    },
    filter: ["==", "type", "river"],
  },

  waterways_intermittent: {
    id: "waterways_intermittent",
    type: "line",
    source: "basemap",
    "source-layer": "waterways",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-dasharray": [4, 4],
      "line-color": "#4a7d9f",
      "line-width": ["interpolate", ["linear"], ["zoom"], 12, 0.25, 18, 3],
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 12, 0, 14, 1],
    },
    filter: ["==", "intermittent", "yes"],
    minzoom: 12,
    maxzoom: 19,
  },

  canal_culvert_casings: {
    id: "canal_culvert_casings",
    type: "line",
    source: "basemap",
    "source-layer": "waterways",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#0c396080",
      "line-dasharray": [2, 2],
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.9, 18, 7],
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0, 14, 1],
    },
    filter: ["all", ["==", "tunnel", "culvert"], ["==", "type", "canal"]],
    minzoom: 10,
    maxzoom: 19,
  },

  canals: {
    id: "canals",
    type: "line",
    source: "basemap",
    "source-layer": "waterways",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#4a7d9f",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.1, 18, 5],
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0, 14, 1],
    },
    filter: ["all", ["==", "type", "canal"], ["!=", "tunnel", "culvert"]],
    minzoom: 10,
    maxzoom: 19,
  },

  canals_in_culverts: {
    id: "canals_in_culverts",
    type: "line",
    source: "basemap",
    "source-layer": "waterways",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#dae5f2",
      "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.5, 18, 5],
      "line-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0, 14, 1],
    },
    filter: ["all", ["==", "type", "canal"], ["==", "tunnel", "culvert"]],
    minzoom: 10,
    maxzoom: 19,
  },

  waterway_labels: {
    id: "waterway_labels",
    type: "symbol",
    source: "basemap",
    "source-layer": "waterways",
    layout: {
      "symbol-placement": "line",
      "text-field": "{name}",
      "text-font": ["Decimal Book"],
      "symbol-spacing": 650,
      "text-size": ["interpolate", ["linear"], ["zoom"], 10, 10, 18, 14],
      "text-anchor": "center",
      "text-rotation-alignment": "map",
      "text-pitch-alignment": "map",
    },
    paint: {
      "text-color": "#0c3960",
      "text-halo-color": "#ffffffBF",
      "text-halo-width": 2,
    },
    minzoom: 12,
    maxzoom: 19,
  },
};

export default waterways;
