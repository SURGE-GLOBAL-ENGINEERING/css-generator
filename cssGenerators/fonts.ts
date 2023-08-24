import { headerStyleToFontVariant, getFontFaceCss } from "../helpers";
import { FontVariant, ThemeStyleProps, UsedFont } from "../types";

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

interface fontType {
  fontId: string,
  variant: FontVariant
}

export const getDropCapFontFaceCss = (
  styleProps: ThemeStyleProps,
  fontBaseUrl: string,
): string => {
  let fontCss = "";
  let dropCapFont = styleProps.firstParagraph.dropcapFont;
  let dropCapFontList: fontType[] = [];

  if (dropCapFont !== 'Default') {
    dropCapFontList.push({
      fontId: dropCapFont,
      variant: headerStyleToFontVariant([]),
    });
  }

  dropCapFontList.map(font => {
    fontCss += getFontFaceCss(font.fontId, font.variant, fontBaseUrl); //this gets changed
  })

  return fontCss;
}