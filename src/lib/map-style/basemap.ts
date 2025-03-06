import type { LayerSpecification } from "maplibre-gl";
import contours from "@/lib/map-style-layers/contours";
import elevation from "@/lib/map-style-layers/elevation";
import waterways from "@/lib/map-style-layers/waterways";
import water from "@/lib/map-style-layers/water";

const basemapStyle: LayerSpecification[] = [
  {
    id: "background",
    type: "background",
    paint: { "background-color": "hsl(47, 26%, 88%)" },
  },
  elevation.hillshade,
  contours.contour_40ft_landcover,
  contours.contour_200ft_landcover,
  contours.contour_1000ft_landcover,
  contours.contour_40ft_ice,
  contours.contour_200ft_ice,
  contours.contour_1000ft_ice,
  waterways.rivers,
  waterways.streams,
  waterways.canals,
  waterways.waterways_intermittent,
  waterways.canal_culvert_casings,
  waterways.canals_in_culverts,
  contours.contour_1000ft_ice_labels,
  contours.contour_200ft_ice_labels,
  contours.contour_1000ft_landcover_labels,
  contours.contour_200ft_landcover_labels,
  water.water_fill,
  water.water_outline,

  //   peaks.peaks_points,
  //   places.places_points_p1,
  //   places.places_points_p2,
  water.water_labels,
  waterways.waterway_labels,
  //   peaks.peaks_labels,
  //   places.places_labels_p3,
  //   places.places_labels_p2,
  //   places.places_labels_p1,
];

export default basemapStyle;
