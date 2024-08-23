import { FirstParagraph } from "../types";
import { headerStyleToFontVariant, getDropCapCssClasses } from "../helpers";

/**
 * Can contain previewer only styles
 */
export const getFirstParagraphCss = (
  firstParagraph: FirstParagraph,
  themeId: string,
  isPreviewer: boolean
) => {
  const baseFontSize = 15; //html font size
  const dropcapBaseFontSize = 12; // dropcap default font size

  const calculateValue = (value: number) => isPreviewer 
    ? `${(value / baseFontSize) * dropcapBaseFontSize}rem` 
    : `${value}rem`;

  return `
    .${themeId} .withDropcap .dropcap, .${themeId} .ornamental-break + p{
      text-indent: 0!important;
    }
    ${
      firstParagraph.dropcap
        ? `
      .${themeId} .withDropcap .dropcap {
        float: left;
      }
      .${themeId} .withDropcap .dropcap{
        font-size: ${calculateValue(3)};
        font-family: '${firstParagraph.dropcapFont}${headerStyleToFontVariant([])}';
        line-height: ${parseFloat(calculateValue(1))};
        padding: 0 0.25rem;
        margin-right: ${calculateValue(0.125)};
      }
      ${getDropCapCssClasses(firstParagraph.dropcapFont, themeId, isPreviewer)}`
        : ""
    }
    ${
      firstParagraph.uppercaseFourWords
        ? `
      .${themeId} .withDropcap .dropcap,
      .${themeId} .withDropcap .lead_word{
        text-transform: uppercase;
      }
      `
        : ""
    }
  `;
};
