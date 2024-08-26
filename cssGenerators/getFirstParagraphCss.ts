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
        webkit-initial-letter: 2;
        initial-letter: 2;
        transform: scale(1.1);
      }
      ${getDropCapCssClasses(firstParagraph.dropcapFont, themeId, isPreviewer)}
      .${themeId} .withDropcap .dropcap:before,
      .${themeId} .withDropcap .dropcap:after {
        content: "";
        display: block;
      }
      .${themeId} .withDropcap .dropcap:before {
        margin-bottom: 0.275rem;
      }
      .${themeId} .withDropcap .dropcap:after {
        margin-top: -0.175rem;
      }`
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
