import styleObjectToCss from "react-style-object-to-css";

import {
  getImagePlacementOrder,
  fontStylesToCssProp,
  getNormalizedOpacity,
  getTitleFontSize,
  getSubTitleFontSize,
  getChapNumberFontSize
} from "../helpers";

import { Theme } from "../types";

/**
 * Can contain previewer only styles
 */
export const getChapterHeaderCss = (
  themeProps: Theme,
  isPreviewer: boolean
) => {
  const { properties: styleProps } = themeProps;
  const renderLightHeaderText =
    styleProps.image?.placement === "background-image" &&
    styleProps.image?.headerTextColor === "light";
  return `
    .${themeProps._id} .chp_bg{
      background-color: rgba(255,255,255, ${1 - getNormalizedOpacity(
        styleProps.image.opacity
      )});
      background-blend-mode: lighten;
      opacity: ${getNormalizedOpacity(styleProps.image.opacity)};
    }

    .${themeProps._id} .chapter-title-card .chapter-title h2{
      color: ${
        renderLightHeaderText ? "white" : "black"
      };
    }

    .${themeProps._id} .chapter-title-card .chapter-number{
      color: ${
        renderLightHeaderText ? "white" : "black"
      };
    }

    .${themeProps._id} .chapter-title-card .chapter-subtitle h3{
      color: ${
        renderLightHeaderText ? "white" : "black"
      };
    }

    .${themeProps._id} .chapter-title-card, .${themeProps._id} .title-card, .epub-toc-title-card{
      display: flex;
      flex-direction: column;
    }

    .${themeProps._id} .chapter-title-card, .epub-toc-title-card{
      display: flex;
      position: relative;
      min-height: 13em;
      ${styleObjectToCss(styleProps.titleCardExtras)}
    }

    .${themeProps._id} .chp_clr_none img, .chp_clr_none{
      filter: grayscale(100%);
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
    }

    .${themeProps._id} .chp_clr_all img, .chp_clr_all{
      filter: grayscale(0%);
      -webkit-filter: grayscale(0%);
      -moz-filter: grayscale(0%);
      -ms-filter: grayscale(0%);
      -o-filter: grayscale(0%);
    }

    .${themeProps._id} .chapter-title-card .chp_img{
      order: ${getImagePlacementOrder(styleProps.image.placement)};
      text-align: ${styleProps.image.alignment};
      padding-top: 0.3em;
    }

    .${themeProps._id} .chapter-title-card .chp_img img{
      width: ${styleProps.image.width}%;
    }

    .${themeProps._id} .chapter-title-card .chapter-number, .${themeProps._id} .chapter-title-card .chapter-title, .${themeProps._id} .chapter-title-card .chapter-subtitle, .epub-toc-title-card h2{
      padding-left: 3%;
      width: 94%;
      z-index: 10;
      display: block;
    }

    .${themeProps._id} .chapter-number{
      text-align: ${styleProps.chapterNo.align}!important;
      order: 2;
      text-transform: capitalize;
    }

    .${themeProps._id} .chapter-title{
      text-align: ${styleProps.chapterTitle.align}!important;
      order: 3;
    }

    .${themeProps._id} .chapter-subtitle{
      text-align: ${styleProps.chapterSubtitle.align}!important;
      order: 4;
    }

    .${themeProps._id} .chapter-number span, .${themeProps._id} .chapter-title h2, .epub-toc-title-card h2, .${themeProps._id} .chapter-subtitle h3 {
        font-weight: 400;
    }

    .${themeProps._id} .chapter-number span{
      display: inline-block;
      font-family: '${styleProps.chapterNo.font}';
      font-size: ${getChapNumberFontSize(styleProps.chapterNo)}em;
      text-align: ${styleProps.chapterNo.align};
      line-height: 1.${styleProps.chapterNo.size};
      width: ${styleProps.chapterNo.width}%;
      ${fontStylesToCssProp(styleProps.chapterNo.style)};
      ${styleObjectToCss(styleProps.chapterNo.extras)};
    }

    .${themeProps._id} .chapter-title h2, .epub-toc-title-card h2{
      display: inline-block;
      font-family: '${styleProps.chapterTitle.font}';
      font-size: ${getTitleFontSize(styleProps.chapterTitle)}em;
      text-align: ${styleProps.chapterTitle.align}!important;
      line-height: 1.${styleProps.chapterTitle.size};
      width: ${styleProps.chapterTitle.width}%;
      ${fontStylesToCssProp(styleProps.chapterTitle.style)};
      ${styleObjectToCss(styleProps.chapterTitle.extras)};
    }

    .${themeProps._id} .chapter-subtitle h3{
      display: inline-block;
      font-family: '${styleProps.chapterSubtitle.font}';
      font-size: ${getSubTitleFontSize(styleProps.chapterSubtitle)}em;
      text-align: ${styleProps.chapterSubtitle.align};
      line-height: 1.${styleProps.chapterSubtitle.size};
      width: ${styleProps.chapterSubtitle.width}%;
      ${fontStylesToCssProp(styleProps.chapterSubtitle.style)};
      ${styleObjectToCss(styleProps.chapterSubtitle.extras)};
    }

    .${themeProps._id} header .meta{
      font-size: ${4 + 2 * styleProps.header.size}pt;
      font-family: ${styleProps.header.font};
    }
    .${themeProps._id} footer .meta{
      font-size: ${4 + 2 * styleProps.footer.size}pt;
      font-family: ${styleProps.footer.font};
    }
    .${themeProps._id} .title-card {
      font-family: '${styleProps.chapterTitle.font}';
    }
    .${themeProps._id} .title-card h1{
      padding: 9px 0;
    }
    .${themeProps._id} .title-card h2{
      padding: 15px 0;
    }
    .${themeProps._id} .title-card h3{
      padding: 15px 0;
    }

    .${themeProps._id} .chapter-title-card.left{
      text-align: left;
    }

    .${themeProps._id} .chapter-title-card.center{
      text-align: center;
    }

    .${themeProps._id} .chapter-title-card.right{
      text-align: right;
    }
    .${themeProps._id} .chapter-title-card{
      width: 100%;
      justify-content:center;
    }

    .${themeProps._id} .chapter-title-card .chapter-number{
      width: 100%;
      text-align: inherit;
    }

    .${themeProps._id} .chapter-title-card h2{
      width: 100%;
      text-align: inherit;
    }

    .${themeProps._id} .chapter-title-card h3{
      width: 100%;
      text-align: inherit;
    }

    ${isPreviewer ? `
    .chapter-title-card .chp_bg{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: -1;
    }`: ""}
  `
}