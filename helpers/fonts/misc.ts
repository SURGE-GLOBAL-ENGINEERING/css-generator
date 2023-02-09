import { find } from "lodash";
import { capitalizeFirstLetter } from "../misc";
import { BookTitleFontMap, Font, FontVariant, HeaderFonts, HeaderFontStyle } from "../../types";
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

export const getFontFamilyFromFontMap = (fonts: HeaderFonts, fontMap: BookTitleFontMap): string => {
  switch(fontMap){
    case "chapterTitle": return getFontFamilyName(fonts.chapterTitleFont, FontVariant.regular);
    case "chapterSubtitle": return getFontFamilyName(fonts.chapterSubtitleFont, FontVariant.regular);
    default: return getFontFamilyName(fonts.chapterNumberFont, FontVariant.regular)
  }
}