import { headerStyleToFontVariant, getFontFaceCss } from "../helpers";
import { FontVariant, ThemeStyleProps } from "../types";

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
    },
    {
      fontId: styleProps.headings.h2.font,
      variant: headerStyleToFontVariant([])
    },
    {
      fontId: styleProps.headings.h3.font,
      variant: headerStyleToFontVariant([])
    },
    {
      fontId: styleProps.headings.h4.font,
      variant: headerStyleToFontVariant([])
    },
    {
      fontId: styleProps.headings.h5.font,
      variant: headerStyleToFontVariant([])
    },
    {
      fontId: styleProps.headings.h6.font,
      variant: headerStyleToFontVariant([])
    }
  ];

  headerFonts.map(font => {
    fontCss += getFontFaceCss(font.fontId, font.variant, fontBaseUrl);
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
    fontCss += getFontFaceCss(font.fontId, font.variant, fontBaseUrl);
  })

  return fontCss;
}