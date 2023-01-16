import { HeaderFontStyle } from "../../types";

const getCssForStyle = (style: HeaderFontStyle): string => {
  switch (style) {
    case "bold":
      return "font-weight: 900!important;\n";
    case "italic":
      return "font-style: italic;\n";
    case "small-caps":
      return "font-variant: small-caps;\n";
    case "underlined":
      return "text-decoration: underline;\n";
    default:
      return "";
  }
};

export const fontStylesToCssProp = (styles: HeaderFontStyle[]): string => {
  let cssstring = "";
  styles.map((style) => (cssstring += getCssForStyle(style)));
  return cssstring;
};
