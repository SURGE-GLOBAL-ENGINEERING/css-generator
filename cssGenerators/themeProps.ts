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
  getListPluginCss,
  getPartCss,
} from "./.";

import { Theme } from "../types";

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

  const styleCss = `
    ${getChapterHeaderCss(themeProps, isPreviewer)}

    ${getDefaultCss(themeProps._id)}

    .${themeProps._id} .wrapper{
      /* https://css-tricks.com/almanac/properties/o/overflow-wrap/ */
      overflow-wrap: break-word;
      ${styleProps.paragraph.hyphens ? `hyphens: auto;` : ``}

      ${styleProps.paragraph.justify ? `text-align: justify;` : ``}
    }
    
    .${themeProps._id} p{
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

    .${themeProps._id} p:empty:not(:first-of-type){
      min-height: 1em;
    }

    .${themeProps._id} p:first-of-type{
      text-indent: 0rem !important;
    }

    .${themeProps._id} .text-after-subheading {
      text-indent: 0rem !important;
    }

    .${themeProps._id} .print-wrapper{
      height: 100%;
      max-height:100%;
    }
    
    ${getFirstParagraphCss(
      styleProps.firstParagraph,
      styleProps.paragraph,
      themeProps._id,
      isPreviewer
    )}

    ${getFullBleedImageCss(themeProps._id)}

    /* Editor Plugins */

    ${getAlignCss(themeProps._id)}

    ${getBlockQuoteCss(themeProps._id)}

    ${getOrnamentalBreakCss(styleProps.ornamentalBreakWidth, themeProps._id, isPreviewer)}

    ${getImageCss(themeProps._id)}

    ${getSMIconCss(themeProps._id)}

    ${getVerseCss(themeProps._id)}

    ${getEndNoteCss(themeProps._id)}

    ${getMarkCss(themeProps._id)}

    ${getListPluginCss(themeProps._id)}

    /* Chapter Types */

    ${getBookTitleCss(styleProps.chapterNo.font, themeProps._id)}

    ${getTocCss(themeProps, themeProps._id)}

    ${getCopyrightCss(themeProps._id)}

    ${getDedicationCss(themeProps._id)}

    ${getEpigraphCss(themeProps._id)}

    ${getAlsobyCss(themeProps._id)}
    
    ${getFullPageImageCss(themeProps._id)}

    ${getPartCss(themeProps._id)}
  `;

  return `${styleCss} ${fontCss}`;
};
