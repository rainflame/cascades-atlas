import type { LayerSpecification } from "maplibre-gl";

type ContourKey =
  | "contour_40ft_landcover"
  | "contour_200ft_landcover"
  | "contour_1000ft_landcover"
  | "contour_40ft_ice"
  | "contour_200ft_ice"
  | "contour_1000ft_ice"
  | "contour_1000ft_ice_labels"
  | "contour_200ft_ice_labels"
  | "contour_1000ft_landcover_labels"
  | "contour_200ft_landcover_labels";

const contours: { [key in ContourKey]: LayerSpecification } = {
  contour_40ft_landcover: {
    id: "contour_40ft_landcover",
    type: "line",
    source: "basemap",
    "source-layer": "contour_40_landcover",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#c69e7580",
      "line-width": [
        "interpolate",
        ["exponential", 0.5],
        ["zoom"],
        12,
        0.5,
        20,
        1,
      ],
      "line-opacity": [
        "interpolate",
        ["exponential", 0.25],
        ["zoom"],
        12,
        0,
        14,
        0.5,
      ],
    },
  },
  contour_200ft_landcover: {
    id: "contour_200ft_landcover",
    type: "line",
    source: "basemap",
    "source-layer": "contour_200_landcover",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#af8f6e80",
      "line-width": [
        "interpolate",
        ["exponential", 0.5],
        ["zoom"],
        11,
        0.1,
        20,
        1.5,
      ],
      "line-opacity": [
        "interpolate",
        ["exponential", 0.25],
        ["zoom"],
        11,
        0,
        12,
        0.5,
      ],
    },
  },
  contour_1000ft_landcover: {
    id: "contour_1000ft_landcover",
    type: "line",
    source: "basemap",
    "source-layer": "contour_1000_landcover",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#9c785580",
      "line-width": [
        "interpolate",
        ["exponential", 0.5],
        ["zoom"],
        10,
        0.1,
        20,
        1.5,
      ],
      "line-opacity": [
        "interpolate",
        ["exponential", 0.25],
        ["zoom"],
        10,
        0,
        11,
        0.5,
      ],
    },
  },
  contour_40ft_ice: {
    id: "contour_40ft_ice",
    type: "line",
    source: "basemap",
    "source-layer": "contour_40_ice",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#99a5c180",
      "line-width": [
        "interpolate",
        ["exponential", 0.5],
        ["zoom"],
        12,
        0.5,
        20,
        1,
      ],
      "line-opacity": [
        "interpolate",
        ["exponential", 0.25],
        ["zoom"],
        12,
        0,
        14,
        0.5,
      ],
    },
  },
  contour_200ft_ice: {
    id: "contour_200ft_ice",
    type: "line",
    source: "basemap",
    "source-layer": "contour_200_ice",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#7b8eb780",
      "line-width": [
        "interpolate",
        ["exponential", 0.5],
        ["zoom"],
        11,
        0.1,
        20,
        1.5,
      ],
      "line-opacity": [
        "interpolate",
        ["exponential", 0.25],
        ["zoom"],
        11,
        0,
        12,
        0.5,
      ],
    },
  },
  contour_1000ft_ice: {
    id: "contour_1000ft_ice",
    type: "line",
    source: "basemap",
    "source-layer": "contour_1000_ice",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#5374ba80",
      "line-width": [
        "interpolate",
        ["exponential", 0.5],
        ["zoom"],
        10,
        0.1,
        20,
        1.5,
      ],
      "line-opacity": [
        "interpolate",
        ["exponential", 0.25],
        ["zoom"],
        10,
        0,
        11,
        0.5,
      ],
    },
  },
  contour_1000ft_ice_labels: {
    id: "contour_1000ft_ice_labels",
    type: "symbol",
    source: "basemap",
    "source-layer": "contour_1000_ice",
    layout: {
      "symbol-placement": "line",
      "text-field": "{elevation}",
      "text-font": ["Decimal Book"],
      "text-size": ["interpolate", ["linear"], ["zoom"], 10, 8, 18, 12],
      "text-anchor": "center",
      "text-rotation-alignment": "map",
      "text-pitch-alignment": "map",
    },
    paint: {
      "text-color": "#5374ba",
      "text-halo-color": "#ebe9e5",
      "text-halo-width": 2,
    },
    minzoom: 12,
    maxzoom: 16,
  },

  contour_200ft_ice_labels: {
    id: "contour_200ft_ice_labels",
    type: "symbol",
    source: "basemap",
    "source-layer": "contour_200_ice",
    layout: {
      "symbol-placement": "line",
      "text-field": "{elevation}",
      "text-font": ["Decimal Book"],
      "text-size": ["interpolate", ["linear"], ["zoom"], 10, 8, 18, 12],
      "text-anchor": "center",
      "text-rotation-alignment": "map",
      "text-pitch-alignment": "map",
    },
    paint: {
      "text-color": "#5374ba",
      "text-halo-color": "#ebe9e5",
      "text-halo-width": 2,
    },
    minzoom: 14,
    maxzoom: 16,
  },

  contour_1000ft_landcover_labels: {
    id: "contour_1000ft_landcover_labels",
    type: "symbol",
    source: "basemap",
    "source-layer": "contour_1000_landcover",
    layout: {
      "symbol-placement": "line",
      "text-field": "{elevation}",
      "text-font": ["Decimal Book"],
      "text-size": ["interpolate", ["linear"], ["zoom"], 10, 8, 18, 12],
      "text-anchor": "center",
      "text-rotation-alignment": "map",
      "text-pitch-alignment": "map",
    },
    paint: {
      "text-color": "#9c7855",
      "text-halo-color": "#e2e0d3",
      "text-halo-width": 2,
    },
    minzoom: 12,
    maxzoom: 16,
  },

  contour_200ft_landcover_labels: {
    id: "contour_200ft_landcover_labels",
    type: "symbol",
    source: "basemap",
    "source-layer": "contour_200_landcover",
    layout: {
      "symbol-placement": "line",
      "text-field": "{elevation}",
      "text-font": ["Decimal Book"],
      "text-size": ["interpolate", ["linear"], ["zoom"], 10, 8, 18, 12],
      "text-anchor": "center",
      "text-rotation-alignment": "map",
      "text-pitch-alignment": "map",
    },
    paint: {
      "text-color": "#9c7855",
      "text-halo-color": "#e2e0d3",
      "text-halo-width": 2,
    },
    minzoom: 14,
    maxzoom: 16,
  },
};

export default contours;
