/**
 * Normalizes and handles the possibility of having two opacity scales from 0-1 and 0-100
 * @param opacity Image opacity in scale 0-1 or 0-100
 * @returns Normalized opacity in scale 0-1
 */
export const getNormalizedOpacity = (opacity: number | undefined) => {
  if (opacity !== undefined) {
    if(opacity > 1){
      return opacity/100;
    }
    return opacity;
  }
  return 1;
};
