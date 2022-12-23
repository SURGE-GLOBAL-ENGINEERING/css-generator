import { FontStyle } from "../types";

export const fontStylesToCssProp = (style: FontStyle): string => {
  switch (style) {
    case "bold":
      return "font-weight: 900!important;";
    case "italic":
      return "font-style: italic;";
    case "small-caps":
      return "font-variant: small-caps;";
    case "underlined":
      return "text-decoration: underline;";
    case "bold-italic":
      return "font-weight: 900!important; font-style: italic;"
    case "normal":
      return "";
  }
};
