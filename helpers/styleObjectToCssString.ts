/**
 * @param styleObject A style object of valid css property names and values, both property name and value are expected to be strings
 * @returns A parsed css string
 */
export const styleObjectToCssString = (styleObject: any) => {
  let cssString = "";
  for (const key in styleObject) {
    cssString += `${key}: ${styleObject[key]};`;
  }
  return cssString;
};
