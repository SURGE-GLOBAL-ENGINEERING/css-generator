import { find } from "lodash";
import { capitalizeFirstLetter } from "../misc";
import { BookTitleFontMap, Font, FontVariant, HeaderFonts, HeaderFontStyle, ThemeStyleProps } from "../../types";
import { fonts } from "./fontList";
import { headerStyleToFontVariant } from "./getFontVariant";

export const epubFontBaseUrl = "fonts";

export const getFontFileName = (font: Font, variant: FontVariant): string => {
  const extension = font.fontType ? font.fontType : "ttf";
  return `${font.id}-${capitalizeFirstLetter(variant)}.${extension}`
}

export const getFontFamilyName = (fontId: string, variant: FontVariant): string => {
  return `${fontId}${capitalizeFirstLetter(variant)}`;
}

export const getFontFileNameForEpubGen = (fontId: string, style: HeaderFontStyle[]): string => {
  let font = find(fonts, {id: fontId});
  if(!font){
    font = fonts[0];
  }
  let fontVariant = headerStyleToFontVariant(style);
  if(!font.variants.includes(fontVariant)){
    fontVariant = FontVariant.regular;
  }
  return getFontFileName(font, fontVariant);
}

export const getFontFamilyFromFontMap = (themeStyleProps: ThemeStyleProps, fontMap: BookTitleFontMap): string => {
  const headerFontConfig: HeaderFonts = {
    chapterTitleFont: {
      fontId: themeStyleProps.chapterTitle.font,
      fontVariant: headerStyleToFontVariant(themeStyleProps.chapterTitle.style)
    },
    chapterSubtitleFont: {
      fontId: themeStyleProps.chapterSubtitle.font,
      fontVariant: headerStyleToFontVariant(themeStyleProps.chapterSubtitle.style)
    },
    chapterNumberFont: {
      fontId: themeStyleProps.chapterNo.font,
      fontVariant: headerStyleToFontVariant(themeStyleProps.chapterNo.style)
    }
  };
  switch(fontMap){
    case "chapterTitle": return getFontFamilyName(headerFontConfig.chapterTitleFont.fontId, headerFontConfig.chapterTitleFont.fontVariant);
    case "chapterSubtitle": return getFontFamilyName(headerFontConfig.chapterSubtitleFont.fontId, headerFontConfig.chapterSubtitleFont.fontVariant);
    default: return getFontFamilyName(headerFontConfig.chapterNumberFont.fontId, headerFontConfig.chapterNumberFont.fontVariant);
  }
}