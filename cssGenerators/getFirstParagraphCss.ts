import { EpubPreviewerPrefix, FirstParagraph, Paragraph } from "types"

/**
 * Can contain previewer only styles
 */
export const getFirstParagraphCss = (firstParagraph: FirstParagraph, paragraph: Paragraph, prefix: string) => {
  return `
    ${prefix}.withDropcap .dropcap, ${prefix}.ornamental-break + p{
      text-indent: 0!important;
    }
    ${
      firstParagraph.dropcap
        ? `
      ${prefix}.withDropcap .dropcap {
        float: left;
      }
      ${prefix}.withDropcap .dropcap{
        font-size: 3rem;
        line-height: 1;
        padding: 0 0.25rem;
        margin-right: 0.125rem;
        webkit-initial-letter: 2;
        initial-letter: 2;
        transform: scale(1.1);
      }
      ${prefix}.withDropcap .dropcap:before {
        margin-bottom: 0.275rem;  
      }
      ${prefix}.withDropcap .dropcap:after {
        margin-top: -0.175rem;  
      }`
        : ""
    }
    ${
      firstParagraph.uppercaseFourWords
        ? `
      ${prefix}.withDropcap .dropcap,
      ${prefix}.withDropcap .lead_word{
        text-transform: uppercase;
      }
      `
        : ""
    }
    ${
      prefix === EpubPreviewerPrefix ? `
        .previewer p:not(p.lead_word, p.dropcap){
          text-indent: ${firstParagraph.indent ? firstParagraph.indent : 0}em;
          margin-block-end: ${!firstParagraph.indent ? paragraph.paragraphSpacing : 0}em;
        }
      `: ""
    }
  `
}