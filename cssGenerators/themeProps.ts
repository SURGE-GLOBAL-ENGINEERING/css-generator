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
  getHangingIndentCss
} from "./.";

import { Theme } from "../types";
import { epubFontBaseUrl } from "../helpers";

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
  fontBaseUrl?: string,
  isPreviewer: boolean = false,
  containerClassName?: string
): string => {
  const { properties: styleProps } = themeProps;
  /** "fonts/fontName.extension" is the default fonts folder location for bundled epubs */
  const fontLocation = isPreviewer ? fontBaseUrl : epubFontBaseUrl;

  if(!fontLocation){
    throw new Error("Missing font base Url for previewer");
  }

  const prefixRule = isPreviewer ? `.${themeProps._id} ` : "";

  const fontFaceCss = getHeaderElementFontFaceCss(styleProps, fontLocation);

  const styleCss = `
    ${getChapterHeaderCss(themeProps, isPreviewer, false, prefixRule, containerClassName,)}

    ${getDefaultCss(themeProps.properties.paragraph.paragraphSpacing, `.${themeProps._id} `)}

    ${getHeadingCss(prefixRule, themeProps, prefixRule)} 

    ${prefixRule}.wrapper{
      /* https://css-tricks.com/almanac/properties/o/overflow-wrap/ */
      overflow-wrap: break-word;
      ${styleProps.paragraph.hyphens ? `hyphens: auto;` : ``}
      ${styleProps.paragraph.justify ? `text-align: justify;` : ``}
    }

    ${prefixRule}p{
      orphans: 2;
      widows: 2;
      padding-bottom: 0em;
      margin-top: 0em;
      padding-top: 0em;
      line-height: 1.6em;
      text-indent: ${
        styleProps.paragraph.indent ? styleProps.hangingIndent :  0
      }cm;
      margin-block-end: ${
        !styleProps.paragraph.indent ? styleProps.paragraph.paragraphSpacing : 0
      }em;
    }

    ${prefixRule}p:empty:not(:first-of-type){
      min-height: 1em;
    }

    ${prefixRule}p:first-of-type{
      text-indent: 0rem !important;
    }

    ${prefixRule}.text-after-subheading {
      text-indent: 0rem !important;
    }

    ${prefixRule}.print-wrapper{
      height: 100%;
      max-height:100%;
    }

    ${getFirstParagraphCss(
      styleProps.firstParagraph,
      prefixRule
    )}

    ${getFullBleedImageCss(prefixRule)}

    /* Editor Plugins */

    ${getAlignCss(prefixRule)}

    ${getBlockQuoteCss(prefixRule)}

    ${getOrnamentalBreakCss(
      styleProps.ornamentalBreakWidth,
      prefixRule,
      isPreviewer
    )}
    
    ${getImageCss(prefixRule, themeProps.properties.imageCaption)}
    
    ${getSMIconCss(prefixRule)}

    ${getVerseCss(prefixRule)}

    ${getCalloutBoxCss(prefixRule)} 

    ${getEndNoteCss(prefixRule, styleProps.footnoteFontSize)}

    ${getMarkCss(prefixRule)}

    ${getListPluginCss(prefixRule, isPreviewer)}

    ${getHangingIndentCss(prefixRule, styleProps.hangingIndent)}

    /* Chapter Types */

    ${getBookTitleCss(themeProps, isPreviewer)}

    ${getTocCss(themeProps, prefixRule)}

    ${getCopyrightCss(prefixRule)}

    ${getDedicationCss(prefixRule)}

    ${getEpigraphCss(prefixRule)}

    ${getAlsobyCss(prefixRule)}

    ${getFullPageImageCss(prefixRule)}

    ${getPartCss(prefixRule)}
  `;

  return `${styleCss} ${fontFaceCss}`;
};
