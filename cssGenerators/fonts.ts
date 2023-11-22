import { headerStyleToFontVariant, getFontFaceCss } from "../helpers";
import { ThemeStyleProps, UsedFont } from "../types";

/**
 * Generates @font-face css for rendering selected fonts and font varients of header elements
 * @param usedFonts Fonts used in the epub
 * @param isPreviewer whether the css are for previewer
 * @returns css for the fonts passed as inputs
 */
export const getHeaderElementFontFaceCss = (
  usedFonts: UsedFont[],
  isPreviewer: boolean,
): string => {
  let fontCss = "";

  usedFonts.map(usedFont => {
    fontCss += getFontFaceCss(usedFont, isPreviewer);
  })
  
  return fontCss;
};
