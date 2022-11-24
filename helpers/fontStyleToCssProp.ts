import { FontStyle } from "../types";

export const fontStyleToCssProp = (style: FontStyle): string => {
  switch (style) {
    case "bold":
      return "font-weight: 900!important;";
    case "bold-italic":
      return "font-weight: 900!important; font-style: italic;";
    case "italic":
      return "font-style: italic;";
    case "small-caps":
      return "font-variant: small-caps;";
    case "underlined":
      return "text-decoration: underline;";
    default:
      return "";
  }
};
