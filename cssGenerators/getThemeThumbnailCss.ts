import { Theme } from "../types";
import { getChapterHeaderCss } from "./getChapterHeaderCss";

/**
 * Can contain previewer only styles
 */
export const getThemeThumbnailCss = (
  theme: Theme,
  prefix?: string,
) => {
  const { properties: styleProps } = theme;
  const thumbnailChapterHeaderCss = getChapterHeaderCss(theme, false, true, prefix)
  const thumbnailChapterBodyCss = `
    .thumbnail-body, .${theme?._id} p{
      text-indent: ${
        styleProps.paragraph.indent ? styleProps.paragraph.indent : 0
      }em;
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