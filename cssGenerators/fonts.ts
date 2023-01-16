import { headerStyleToFontVariant, getFontFaceCss } from "../helpers";
import { ThemeStyleProps } from "../types";

/**
 * Generates @font-face css for rendering selected fonts and font varients of header elements
 * @param styleProps Theme properties
 * @param fontBaseUrl The base url for the location where the actual font files reside
 * @returns css for the fonts passed as inputs
 */
export const getHeaderElementFontFaceCss = (
  styleProps: ThemeStyleProps,
  fontBaseUrl: string,
): string => {
  let fontCss = "";

  const headerFonts = [
    {
      fontId: styleProps.chapterNo.font,
      variant: headerStyleToFontVariant(styleProps.chapterNo.style)
    },
    {
      fontId: styleProps.chapterTitle.font,
      variant: headerStyleToFontVariant(styleProps.chapterTitle.style)
    },
    {
      fontId: styleProps.chapterSubtitle.font,
      variant: headerStyleToFontVariant(styleProps.chapterSubtitle.style)
    }
  ];

  headerFonts.map(font => {
    fontCss += getFontFaceCss(font.fontId, font.variant, fontBaseUrl);
  })
  
  return fontCss;
};
