import { headerStyleToFontVariant } from "./getFontVariant";

const isDefaultDropcapFont = (font?: string): boolean => !font || font === "Default";

export const getDropcapFontFamily = (
  dropcapFont: string | undefined
): string => {
  if (isDefaultDropcapFont(dropcapFont)) return "";
  return `font-family: '${dropcapFont}${headerStyleToFontVariant([])}';`;
};

export const shouldGenerateDropcapLetterClasses = (dropcapFont?: string): boolean => !isDefaultDropcapFont(dropcapFont);