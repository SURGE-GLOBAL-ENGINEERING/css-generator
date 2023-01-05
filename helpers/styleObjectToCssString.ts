/**
 * Converts camelCase phrases to kebab-case
 * @param camelCase Style object property name in camelCase eg: backgroundColor
 * @returns kebab-case css friendly property name eg: background-color
 */
const camelCaseToKebabCase = (camelCase: string) => {
  return camelCase.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
};

/**
 * @param styleObject A style object of valid css property names and values
 * @returns A parsed css string
 */
export const styleObjectToCssString = (styleObject: any) => {
  const cssString = Object.keys(styleObject).reduce(
    (css, currentProp) =>
      css +
      `${camelCaseToKebabCase(currentProp)}: ${styleObject[currentProp]};`,
    ""
  );
  return cssString;
};
