import { ImagePlacement } from "../types";

const imagePlacementOrderMap = new Map([
  ["above-chapter-no", 1],
  ["above-chapter-title", 2],
  ["below-chapter-title", 3],
]);

const defaultPlacement = 4;

export const getImagePlacementOrder = (placement?: ImagePlacement): number => {
    return placement? (imagePlacementOrderMap.get(placement) || defaultPlacement) : defaultPlacement;
};