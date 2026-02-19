import { FirstParagraph } from "../types";
import { getDropCapCssClasses } from "../helpers";
import { getDropcapFontFamily, shouldGenerateDropcapLetterClasses } from "../helpers";

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

  /**
    * If the drop cap font is "Default", omit the font family and 
    * do not generate drop cap letter CSS classes
    * This allows the drop cap to use the body font
    */
  const dropcapFamily = getDropcapFontFamily(firstParagraph.dropcapFont);
  const dropcapLetterClasses = shouldGenerateDropcapLetterClasses(firstParagraph.dropcapFont)
    ? getDropCapCssClasses(firstParagraph.dropcapFont, themeId, isPreviewer)
    : "";

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
        ${dropcapFamily}
        line-height: ${parseFloat(calculateValue(1))};
        padding: 0 0.25rem;
        margin-right: ${calculateValue(0.125)};
      }
      ${dropcapLetterClasses}`
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
