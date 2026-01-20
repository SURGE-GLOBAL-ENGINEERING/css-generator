import { Theme } from "../types";
import { getChapterHeaderCss, getChapterHeaderDarkModeCssOverrides } from "./getChapterHeaderCss";

/**
 * Styles for the theme thumbnails
 */
export const getThemeThumbnailCss = (
  theme: Theme,
  prefix?: string,
) => {
  const { properties: styleProps } = theme;
  const thumbnailChapterHeaderCss = getChapterHeaderCss(theme, false, true, prefix)
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

export const getThemeThumbnailDarkModeCssOverrides = (
  theme: Theme,
  prefix?: string
): string => {
  const defaultOverrides = `
    .theme-cards .ant-list-items .theme-card.active .theme-element {
      border-color: #3568BA !important;
      border-width: 4px !important;
    }
    .theme-element:not(button) {
      background-color: #ffffff !important;
    }
    .theme-thumbnail, .thumbnail-body {
      color: #171D21 !important;
    }

  `;
  const chapterHeaderOverrides = getChapterHeaderDarkModeCssOverrides(theme, prefix);
  return `${defaultOverrides} ${chapterHeaderOverrides}`;
}