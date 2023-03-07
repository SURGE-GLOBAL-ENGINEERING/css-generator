import { EpubPreviewerPrefix } from "../helpers";
import { FirstParagraph, Paragraph } from "../types";

/**
 * Can contain previewer only styles
 */
export const getFirstParagraphCss = (
  firstParagraph: FirstParagraph,
  paragraph: Paragraph,
  themeId: string,
  isPreviewer: boolean
) => {
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
        font-size: 3rem;
        line-height: 1;
        padding: 0 0.25rem;
        margin-right: 0.125rem;
        webkit-initial-letter: 2;
        initial-letter: 2;
        transform: scale(1.1);
      }
      .${themeId} .withDropcap .dropcap:before,
      .${themeId} .withDropcap .dropcap:after {
        content: "";
        display: block;
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
    ${
      isPreviewer
        ? `
        .${themeId} .withDropcap .dropcap{
          max-height: ${15 * 2}px;
        }
      `
        : ""
    }
  `;
};
