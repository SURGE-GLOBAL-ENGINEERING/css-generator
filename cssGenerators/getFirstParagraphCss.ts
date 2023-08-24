import { FirstParagraph } from "../types";
import { headerStyleToFontVariant } from "../helpers";

/**
 * Can contain previewer only styles
 */
export const getFirstParagraphCss = (
  firstParagraph: FirstParagraph,
  prefixRule: string,
) => {
  return `
    @font-face{
      font-family: '3Dumbregular';
      src: url(fonts/3Dumb-Regular.ttf),
           url(https://atticus-dev-content-v1.s3.amazonaws.com/fonts/3Dumb-Regular.ttf);
    }
    @font-face{
      font-family: 'Chomskyregular';
      src: url(fonts/Chomsky-Regular.ttf),
           url(https://atticus-dev-content-v1.s3.amazonaws.com/fonts/Chomsky-Regular.ttf);
    }
    ${prefixRule}.withDropcap .dropcap, ${prefixRule}.ornamental-break + p{
      text-indent: 0!important;
    }
    ${
      firstParagraph.dropcap
        ? `
        ${prefixRule}.withDropcap .dropcap {
        float: left;
      }
      ${prefixRule}.withDropcap .dropcap{
        font-size: 3rem;
        font-family: '${firstParagraph.dropcapFont}${headerStyleToFontVariant([])}';
        line-height: 1;
        padding: 0 0.25rem;
        margin-right: 0.125rem;
        webkit-initial-letter: 2;
        initial-letter: 2;
        transform: scale(1.1);
      }
      ${prefixRule}.withDropcap .dropcap:before,
      ${prefixRule}.withDropcap .dropcap:after {
        content: "";
        display: block;
      }
      ${prefixRule}.withDropcap .dropcap:before {
        margin-bottom: 0.275rem;
      }
      ${prefixRule}.withDropcap .dropcap:after {
        margin-top: -0.175rem;
      }`
        : ""
    }
    ${
      firstParagraph.uppercaseFourWords
        ? `
      ${prefixRule}.withDropcap .dropcap,
      ${prefixRule}.withDropcap .lead_word{
        text-transform: uppercase;
      }
      `
        : ""
    }
  `;
};
