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

  //optimize this
  if (headerStyle.includes(HeaderFontStyle.weight_100)) {
    return FontVariant.weight_100;
  }
  if (headerStyle.includes(HeaderFontStyle.weight_200)) {
    return FontVariant.weight_200;
  }
  if (headerStyle.includes(HeaderFontStyle.weight_300)) {
    return FontVariant.weight_300;
  }
  if (headerStyle.includes(HeaderFontStyle.weight_500)) {
    return FontVariant.weight_500;
  }
  if (headerStyle.includes(HeaderFontStyle.weight_600)) {
    return FontVariant.weight_600;
  }
  if (headerStyle.includes(HeaderFontStyle.weight_700)) {
    return FontVariant.weight_700;
  }
  if (headerStyle.includes(HeaderFontStyle.weight_800)) {
    return FontVariant.weight_800;
  }
  if (headerStyle.includes(HeaderFontStyle.weight_900)) {
    return FontVariant.weight_900;
  }
  if (headerStyle.includes(HeaderFontStyle.italic_100)) {
    return FontVariant.italic_100;
  }
  if (headerStyle.includes(HeaderFontStyle.italic_200)) {
    return FontVariant.italic_200;
  }
  if (headerStyle.includes(HeaderFontStyle.italic_300)) {
    return FontVariant.italic_300;
  }
  if (headerStyle.includes(HeaderFontStyle.weight_500)) {
    return FontVariant.italic_500;
  }
  if (headerStyle.includes(HeaderFontStyle.italic_600)) {
    return FontVariant.italic_600;
  }
  if (headerStyle.includes(HeaderFontStyle.italic_700)) {
    return FontVariant.italic_700;
  }
  if (headerStyle.includes(HeaderFontStyle.italic_800)) {
    return FontVariant.italic_800;
  }
  if (headerStyle.includes(HeaderFontStyle.italic_900)) {
    return FontVariant.italic_900;
  }
  return FontVariant.regular;
};
