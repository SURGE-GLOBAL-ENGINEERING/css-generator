import { FontStyle } from "../types";

const getCssForStyle = (style: FontStyle): string => {
  switch (style) {
    case "bold":
      return " font-weight: 900!important;";
    case "italic":
      return " font-style: italic;";
    case "small-caps":
      return " font-variant: small-caps;";
    case "underlined":
      return " text-decoration: underline;";
    case "normal":
      return "";
  }
};

export const fontStylesToCssProp = (styles: FontStyle[]): string => {
  let cssstring = "";
  styles.map((style) => (cssstring += getCssForStyle(style)));
  return cssstring;
};
