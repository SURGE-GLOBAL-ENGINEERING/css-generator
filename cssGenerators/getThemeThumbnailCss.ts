import { Theme } from "../types";
import { getChapterHeaderCss } from "./getChapterHeaderCss";

/**
 * Styles for the theme thumbnails
 */
export const getThemeThumbnailCss = (
  theme: Theme,
  prefix?: string,
) => {
  const { properties: styleProps } = theme;
  const prefixRule = `.${theme._id} `;
  const thumbnailChapterHeaderCss = getChapterHeaderCss(theme, false, true, prefixRule, prefix);
  const thumbnailChapterBodyCss = `
    .thumbnail-body, .${theme?._id} p{
      text-indent: ${styleProps.paragraph.indent ? styleProps.hangingIndent : 0}cm;
      margin-block-end: ${
        !styleProps.paragraph.indent ? styleProps.paragraph.paragraphSpacing : 0
      }em;
    }

    .thumbnail-body, .${theme?._id} p:first-of-type{
      text-indent: 0rem !important;
    }
  `;
  return `${thumbnailChapterHeaderCss} ${thumbnailChapterBodyCss}`;
};