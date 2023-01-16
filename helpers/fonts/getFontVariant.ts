import { HeaderFontStyle, FontVariant } from "../../types";

export const headerStyleToFontVariant = (
  headerStyle: HeaderFontStyle[]
): FontVariant => {
  if (
    headerStyle.includes(HeaderFontStyle.bold) &&
    headerStyle.includes(HeaderFontStyle.italic)
  ) {
    return FontVariant.boldItalic;
  }
  if (headerStyle.includes(HeaderFontStyle.bold)) {
    return FontVariant.bold;
  }
  if (headerStyle.includes(HeaderFontStyle.italic)) {
    return FontVariant.italic;
  }
  return FontVariant.regular;
};
