import { find } from "lodash";

import { getAtticusFonts } from "../helpers";

/**
 * Generates css for rendering fonts
 * @param fonts An array containing chapter title, subtitle and chapter number fonts
 * @param fontBaseUrl The base url for the location where the actual font files reside 
 * @returns css for the fonts passed as inputs
 */
export const fontNamesToCss = (fonts: string[], fontBaseUrl: string): string => {
  const atticusFonts = getAtticusFonts(fontBaseUrl);
  const fontCss = Array.from(new Set(fonts)).reduce((acc, fontName) => {
    const f = find(atticusFonts, { _id: fontName });
    return acc = acc + (f?.css ? "\n" + f.css : "");
  }, "");

  return `${fontCss}`;
};
