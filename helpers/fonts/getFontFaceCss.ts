import { startCase, find } from "lodash";
import { FontVariant, UsedFont } from "../../types";
import { fonts } from "./fontList";
import { epubFontBaseUrl, getFontFamilyName, getFontFileName, getNumericPartFromVariant } from "./misc";

/**
 * @param usedFont A font used in the epub
 * @param isPreviewer whether the css are for previewer
 * @returns @font-face css for the selected font variant
 */
export const getFontFaceCss = (usedFont: UsedFont, isPreviewer: boolean) => {
  const {id, variant, remoteSrc, localSrc} = usedFont;
  let cssString = "\n";

  const fontFamilyName = getFontFamilyName(id, variant);

  /** "fonts/fontName.extension" is the default fonts folder location for bundled epubs */
  const fontSrc = isPreviewer ? remoteSrc : `${epubFontBaseUrl}/${localSrc}`;

  cssString += `@font-face{\n  font-family: ${fontFamilyName};\n  src: url("${fontSrc}");\n  `;
  if(variant === FontVariant.bold) cssString += "font-weight: bold;  "
  if(variant === FontVariant.italic) cssString += "font-style: italic;  "
  if(variant === FontVariant.boldItalic) cssString += "font-weight: bold;\n  font-style: italic;  "
  if (
    [
      FontVariant.weight_100,
      FontVariant.weight_200,
      FontVariant.weight_300,
      FontVariant.weight_500,
      FontVariant.weight_600,
      FontVariant.weight_700,
      FontVariant.weight_800,
      FontVariant.weight_900,
    ].includes(variant)
  ) {
    cssString += `font-weight: ${variant};  `;
  }
  if (
    [
      FontVariant.italic_100,
      FontVariant.italic_200,
      FontVariant.italic_300,
      FontVariant.italic_500,
      FontVariant.italic_600,
      FontVariant.italic_700,
      FontVariant.italic_800,
      FontVariant.italic_900,
    ].includes(variant)
  ) {
    cssString += `font-weight: ${getNumericPartFromVariant(variant)};\n  font-style: italic;  `;
  }

  cssString += `\n}\n.${fontFamilyName}{\n  font-family: ${fontFamilyName};\n}`

  return cssString;
}

