import {
  fontNamesToCss,
  getDefaultCss,
  getTocCss,
  getBookTitleCss,
  getImageCss,
  getSMIconCss,
  getMarkCss,
  getAlignCss,
  getBlockQuoteCss,
  getChapterHeaderCss,
  getOrnamentalBreakCss,
  getVerseCss,
  getFullBleedImageCss,
  getFullPageImageCss,
  getEndNoteCss,
  getFirstParagraphCss,
  getCopyrightCss,
  getDedicationCss,
  getEpigraphCss,
  getAlsobyCss,
  getListPluginCss
} from "./.";

import { Theme } from "../types";
import { EpubPreviewerPrefix } from "helpers";

/**
 * Returns a css string to style the book according to provided theme properties
 * @param themeProps Atticus theme properties
 * @param fontBaseUrl The base url for the location where the actual font files reside
 * @param isPreviewer If css is generated for editor previewer, default false
 * @returns {string} Css string to format the book according to provided theme properties
 */
export const themePropsToCss = (
  themeProps: Theme,
  fontBaseUrl: string,
  isPreviewer: boolean = false
): string => {
  const { properties: styleProps } = themeProps;
  const fontCss = fontNamesToCss(
    [
      styleProps.chapterTitle.font,
      styleProps.chapterSubtitle.font,
      styleProps.chapterNo.font,
    ],
    fontBaseUrl
  );

  const prefix = isPreviewer ? EpubPreviewerPrefix : "";

  const styleCss = `
    ${getChapterHeaderCss(themeProps, prefix)}

    ${getDefaultCss(prefix)}

    ${prefix}.wrapper{
      /* https://css-tricks.com/almanac/properties/o/overflow-wrap/ */
      overflow-wrap: break-word;
      ${styleProps.paragraph.hyphens ? `hyphens: auto;` : ``}

      ${styleProps.paragraph.justify ? `text-align: justify;` : ``}
    }
    
    ${prefix}p{
      orphans: 2; 
      widows: 2;
      padding-bottom: 0em;
      margin-top: 0em;
      padding-top: 0em;
      line-height: 1.6em;
      text-indent: ${
        styleProps.paragraph.indent ? styleProps.paragraph.indent : 0
      }em;
      margin-block-end: ${
        !styleProps.paragraph.indent ? styleProps.paragraph.paragraphSpacing : 0
      }em;
    }

    ${prefix}p:empty:not(:first-of-type){
      min-height: 1em;
    }

    ${prefix}p:first-of-type{
      text-indent: 0rem !important;
    }

    ${prefix}.text-after-subheading {
      text-indent: 0rem !important;
    }

    ${prefix}.print-wrapper{
      height: 100%;
      max-height:100%;
    }
    
    ${getFirstParagraphCss(styleProps.firstParagraph,styleProps.paragraph, prefix)}

    ${getFullBleedImageCss(prefix)}

    /* Editor Plugins */

    ${getAlignCss(prefix)}

    ${getBlockQuoteCss(prefix)}

    ${getOrnamentalBreakCss(styleProps.ornamentalBreakWidth, prefix)}

    ${getImageCss(prefix)}

    ${getSMIconCss(prefix)}

    ${getVerseCss(prefix)}

    ${getEndNoteCss(prefix)}

    ${getMarkCss(prefix)}

    ${getListPluginCss(prefix)}

    /* Chapter Types */

    ${getBookTitleCss(styleProps.chapterNo.font, prefix)}

    ${getTocCss(styleProps.titleAlignment, prefix)}

    ${getCopyrightCss(prefix)}

    ${getDedicationCss(prefix)}

    ${getEpigraphCss(prefix)}

    ${getAlsobyCss(prefix)}
    
    ${getFullPageImageCss(prefix)}
  `;

  return `${styleCss} ${fontCss}`;
};
