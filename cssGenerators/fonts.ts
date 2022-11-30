import { find } from "lodash";

import { getAtticusFonts, commonFontCss } from "../helpers";

/**
 * Generates css for rendering fonts
 * @param fonts An array containing chapter title, subtitle and chapter number fonts
 * @returns css for the fonts passed as inputs and common fonts
 */
export const fontNamesToCss = (fonts: string[]): string => {
  const atticusFonts = getAtticusFonts();
  const fontCss = Array.from(new Set(fonts)).reduce((acc, v) => {
    const f = find(atticusFonts, { _id: v });
    return acc = acc + (f && f.css ? "\n" + f.css : "");
  }, "");

  return `${fontCss} ${commonFontCss}`;
};
