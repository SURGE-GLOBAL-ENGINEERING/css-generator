import { headerStyleToFontVariant, getFontFaceCss } from "../helpers";
import { Subheadings, ThemeStyleProps } from "../types";

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
    const headings: Subheadings[] = ["h2", "h3", "h4", "h5", "h6"];

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
    },
  ];

  // include every subheading fonts used except for "Default" font 
  for (const heading of headings) {
    const { font } = styleProps.headings[heading];
    if (font !== "Default") {
      headerFonts.push({
        fontId: font,
        variant: headerStyleToFontVariant([]),
      });
    }
  }

  headerFonts.map(font => {
    fontCss += getFontFaceCss(font.fontId, font.variant, fontBaseUrl);
  })
  
  return fontCss;
};
