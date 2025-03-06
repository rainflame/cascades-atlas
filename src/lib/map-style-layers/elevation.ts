import type { LayerSpecification } from "maplibre-gl";

type ElevationKey = "hillshade";

const elevation: { [key in ElevationKey]: LayerSpecification } = {
  hillshade: {
    id: "hillshade",
    type: "hillshade",
    source: "elevation",
    "source-layer": "elevation",
    paint: {
      "hillshade-exaggeration": 0.8,
      "hillshade-shadow-color": "#5a5a5a",
      "hillshade-highlight-color": "#FFFFFF",
      "hillshade-accent-color": "#5a5a5a",
      "hillshade-illumination-direction": 335,
      "hillshade-illumination-anchor": "viewport",
    },
  },
};

export default elevation;
