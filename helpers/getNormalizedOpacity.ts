export const getNormalizedOpacity = (opacity: number | undefined) => {
  if (opacity !== undefined) return opacity;
  return 100;
};
