import {
  getHeaderElementFontFaceCss,
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
  getCalloutBoxCss,
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
  getHeadingCss,
  getHangingIndentCss,
} from "./.";

import { Theme, UsedFont } from "../types";
import { epubFontBaseUrl } from "../helpers";
import { getTextMessagesCss } from "./editorPlugins/textMessages";

/**
 * Returns a css string to style the book according to provided theme properties
 * @param themeProps Atticus theme properties
 * @param fontBaseUrl The base url for the location where the actual font files reside
 * @param isPreviewer If css is generated for editor previewer, default false
 * @param containerClassName Class name for the immediate parent element to avoid css conflicts
 * when generated css is used in multiple places
 * @returns {string} Css string to format the book according to provided theme properties
 */
export const themePropsToCss = (
  themeProps: Theme,
  usedFonts: UsedFont[],
  fontBaseUrl?: string,
  isPreviewer: boolean = false,
  containerClassName?: string
): string => {
  const { properties: styleProps } = themeProps;

  const fontFaceCss = getHeaderElementFontFaceCss(usedFonts, isPreviewer);

  const styleCss = `
    ${getChapterHeaderCss(themeProps, isPreviewer, false, containerClassName)}

    ${getDefaultCss(
      themeProps._id,
      themeProps.properties.paragraph.paragraphSpacing
    )}

    ${getHeadingCss(themeProps._id, themeProps)}

    .${themeProps._id} .wrapper{
      /* https://css-tricks.com/almanac/properties/o/overflow-wrap/ */
      overflow-wrap: break-word;
      ${styleProps.paragraph.hyphens ? `hyphens: auto;` : ``}

      ${styleProps.paragraph.justify ? `text-align: justify;` : ``}
    }

    /*
      The second target, checking if the paragraph is the first paragraph in
      the document and is a descendant of class align-center and applying
      the default paragraph styling is due to a bug where if the first
      paragraph is centered, it does not align with the rest of the document
      caused by {theme} p:first-of-type which needs to be overridden for this
      scenario.
    */
    .${themeProps._id} p {
      orphans: 2;
      widows: 2;
      padding-bottom: 0em;
      margin-top: 0em;
      padding-top: 0em;
      line-height: 1.6em;
      text-indent: ${
        styleProps.paragraph.indent ? styleProps.hangingIndent : 0
      }cm !important;
      margin-block-end: ${
        !styleProps.paragraph.indent ? styleProps.paragraph.paragraphSpacing : 0
      }em;
    }

    .${themeProps._id} p:empty:not(:first-of-type) {
      min-height: 1em;
    }

    .${themeProps._id} p:first-of-type {
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
      themeProps._id,
      isPreviewer
    )}

    ${getFullBleedImageCss(themeProps._id)}

    /* Editor Plugins */

    ${getAlignCss(themeProps._id)}

    ${getBlockQuoteCss(themeProps._id)}

    ${getOrnamentalBreakCss(
      styleProps.ornamentalBreakWidth,
      themeProps._id,
      isPreviewer
    )}

    ${getImageCss(themeProps._id, themeProps.properties.imageCaption)}

    ${getSMIconCss(themeProps._id)}

    ${getVerseCss(themeProps._id)}

    ${getCalloutBoxCss(themeProps._id)}

    ${getEndNoteCss(themeProps._id, styleProps.footnoteFontSize)}

    ${getMarkCss(themeProps._id)}

    ${getListPluginCss(themeProps._id, isPreviewer)}

    ${getHangingIndentCss(themeProps._id, styleProps.hangingIndent)}

    ${getTextMessagesCss(themeProps._id)}

    /* Chapter Types */

    ${getBookTitleCss(themeProps, isPreviewer)}

    ${getTocCss(themeProps, themeProps._id)}

    ${getCopyrightCss(themeProps._id)}

    ${getDedicationCss(themeProps._id)}

    ${getEpigraphCss(themeProps._id)}

    ${getAlsobyCss(themeProps._id)}

    ${getFullPageImageCss(themeProps._id)}

    ${getPartCss(themeProps._id)}
  `;

  return `${styleCss} ${fontFaceCss}`;
};
