import { startCase, find } from "lodash";
import { FontVariant } from "../../types";
import { fonts } from "./fontList";
import { getFontFamilyName, getFontFileName } from "./misc";

/**
 * @param fontId font id for the selected font
 * @param fontVariant selected font variant
 * @param baseUrl base url for the location of the fonts
 * @returns @font-face css for the selected font variant
 */
export const getFontFaceCss = (fontId: string, fontVariant: FontVariant,  baseUrl: string) => {
  const font = find(fonts, {id: fontId});
  if(!font) {
    console.warn(`Warning: Could not find font ${fontId}`);
    return "";
  }
  if(!font.variants.includes(fontVariant)){
    console.warn(`Warning: Atticus does not support ${startCase(fontVariant)} variant of ${font.name}`);
    return "";
  }
  
  let cssString = "\n";

  const fontFamilyName = getFontFamilyName(font.id, fontVariant);
  const fontFileName = getFontFileName(font, fontVariant);

  cssString += `@font-face{\n  font-family: ${fontFamilyName};\n  src: url("${baseUrl}/${fontFileName}");\n  `;
  if(fontVariant === FontVariant.bold) cssString += "font-weight: bold;  "
  if(fontVariant === FontVariant.italic) cssString += "font-style: italic;  "
  if(fontVariant === FontVariant.boldItalic) cssString += "font-weight: bold;\n  font-style: italic;  "
  cssString += `\n}\n.${fontFamilyName}{\n  font-family: ${fontFamilyName};\n}`

  return cssString;
}

