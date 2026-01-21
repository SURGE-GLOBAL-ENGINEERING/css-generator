import styleObjectToCss from "react-style-object-to-css";

import {
  getImagePlacementOrder,
  fontStylesToCssProp,
  getNormalizedOpacity,
  getFontFamilyName,
  headerStyleToFontVariant,
  addPrefix,
  thumbnailCssOverwrites,
  getUpdatedTextColorStyles
} from "../helpers";

import { Theme } from "../types";

/**
 * Can contain previewer only styles
 */
export const getChapterHeaderCss = (
  themeProps: Theme,
  isPreviewer: boolean = false,
  isThumbnail: boolean = false,
  prefix?: string,
) => {
  const { properties: styleProps } = themeProps;

  return `
    

    .${themeProps._id} .${addPrefix("chapter-number", prefix)} span{
      display: inline-block;
      font-family: ${getFontFamilyName(
        styleProps.chapterNo.font,
        headerStyleToFontVariant(styleProps.chapterNo.style)
      )};
      font-size: ${styleProps.chapterNo.size}px;
      text-align: ${styleProps.chapterNo.align};
      width: ${styleProps.chapterNo.width}%;
      ${fontStylesToCssProp(styleProps.chapterNo.style)}
      ${styleObjectToCss(styleProps.chapterNo.extras)}
      ${isThumbnail? thumbnailCssOverwrites.number(): ""}
    }

    .${themeProps._id} .${addPrefix("chapter-title", prefix)} h2, .${themeProps._id} .${addPrefix("epub-toc-title-card", prefix)} h2{
      display: inline-block;
      font-family: ${getFontFamilyName(
        styleProps.chapterTitle.font,
        headerStyleToFontVariant(styleProps.chapterTitle.style)
      )} !important;
      font-size: ${styleProps.chapterTitle.size}px;
      text-align: ${styleProps.chapterTitle.align}!important;
      width: ${styleProps.chapterTitle.width}%;
      ${fontStylesToCssProp(styleProps.chapterTitle.style)}
      ${styleObjectToCss(styleProps.chapterTitle.extras)}
      ${isThumbnail? thumbnailCssOverwrites.title(): ""}
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} .${addPrefix("chapter-subtitle", prefix)} h3{
      display: inline-block;
      font-family: ${getFontFamilyName(
        styleProps.chapterSubtitle.font,
        headerStyleToFontVariant(styleProps.chapterSubtitle.style)
      )};
      font-size: ${styleProps.chapterSubtitle.size}px;
      text-align: ${styleProps.chapterSubtitle.align};
      width: ${styleProps.chapterSubtitle.width}%;
      ${fontStylesToCssProp(styleProps.chapterSubtitle.style)}
      ${styleObjectToCss(styleProps.chapterSubtitle.extras)}
      ${isThumbnail? thumbnailCssOverwrites.subtitle(): ""}
    }

    .${themeProps._id} header .${addPrefix("meta", prefix)}{
      font-size: ${4 + 2 * styleProps.header.size}pt;
      font-family: ${styleProps.header.font};
    }

    .${themeProps._id} footer .${addPrefix("meta", prefix)}{
      font-size: ${4 + 2 * styleProps.footer.size}pt;
      font-family: ${styleProps.footer.font};
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} .left{
      text-align: left;
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} .center{
      text-align: center;
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} .right{
      text-align: right;
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)}{
      width: 100%;
      justify-content:center;
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} .${addPrefix("chp_bg", prefix)}{
      background-color: rgba(255,255,255, ${1 - getNormalizedOpacity(
        styleProps.image.opacity
      )});
      opacity: ${getNormalizedOpacity(styleProps.image.opacity)};
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} .${addPrefix("chapter-title", prefix)} h2{
      opacity: 1 !important;
      word-break: break-word;
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} .${addPrefix("chapter-number", prefix)}{
      opacity: 1 !important;
      word-break: break-word;
    }

    .${themeProps._id} .${addPrefix("chapter-subtitle", prefix)} h3{
      opacity: 1 !important;
      word-break: break-word;
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)}, .${themeProps._id} .${addPrefix("title-card", prefix)}, .${themeProps._id} .${addPrefix("epub-toc-title-card", prefix)}{
      display: flex;
      flex-direction: column;
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)}, .${themeProps._id} .${addPrefix("epub-toc-title-card", prefix)}{
      display: flex;
      position: relative;
      min-height: 15em;
      padding-bottom: 0;
      ${styleObjectToCss(styleProps.titleCardExtras?.digital)}
      ${isThumbnail? thumbnailCssOverwrites.titleCard(): ""}
    }

    .${themeProps._id} .${addPrefix("chp_clr_none", prefix)} img, .${addPrefix("chp_clr_none", prefix)}{
      filter: grayscale(100%);
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
    }

    .${themeProps._id} .${addPrefix("chp_clr_all", prefix)} img, .${addPrefix("chp_clr_all", prefix)}{
      filter: grayscale(0%);
      -webkit-filter: grayscale(0%);
      -moz-filter: grayscale(0%);
      -ms-filter: grayscale(0%);
      -o-filter: grayscale(0%);
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} .${addPrefix("chp_img", prefix)}{
      order: ${getImagePlacementOrder(styleProps.image.placement)};
      text-align: ${styleProps.image.alignment};
      padding-top: 0.3em;
      z-index: 10;
      ${isThumbnail? thumbnailCssOverwrites.imageContainer(): ""}
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} .${addPrefix("chp_img", prefix)} img{
      width: ${styleProps.image.width}%;
    }

    .${themeProps._id} .${addPrefix("chapter-number", prefix)}{
      text-align: ${styleProps.chapterNo.align}!important;
      order: 2;
      text-transform: capitalize;
      z-index: 10;
    }

    .${themeProps._id} .${addPrefix("chapter-title", prefix)}{
      text-align: ${styleProps.chapterTitle.align}!important;
      order: 3;
      z-index: 10;
    }

    .${themeProps._id} .${addPrefix("chapter-subtitle", prefix)}{
      text-align: ${styleProps.chapterSubtitle.align}!important;
      order: 4;
      z-index: 10;
    }

    .${themeProps._id} .${addPrefix("chapter-number", prefix)} span, .${themeProps._id} .${addPrefix("chapter-title", prefix)} h2, .${themeProps._id} .${addPrefix("epub-toc-title-card", prefix)} h2, .${themeProps._id} .${addPrefix("chapter-subtitle", prefix)} h3 {
        font-weight: 400;
    }

    .inverted * {
      color: white !important;
    }

    `;
};

export const getChapterHeaderDarkModeCssOverrides = (
  themeProps: Theme,
  prefix?: string,
) => {
  const { properties: styleProps } = themeProps;
  return `
    .${themeProps._id} .${addPrefix("chapter-number", prefix)} span{
      ${styleObjectToCss(getUpdatedTextColorStyles(styleProps.chapterNo.extras))}
    }
    
    .${themeProps._id} .${addPrefix("chapter-title", prefix)} h2, .${themeProps._id} .${addPrefix("epub-toc-title-card", prefix)} h2{
      ${styleObjectToCss(getUpdatedTextColorStyles(styleProps.chapterTitle.extras))}
    }
    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} .${addPrefix("chapter-subtitle", prefix)} h3{
      ${styleObjectToCss(getUpdatedTextColorStyles(styleProps.chapterSubtitle.extras))}
    }
  `
};