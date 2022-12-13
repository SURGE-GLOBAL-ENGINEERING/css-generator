import {
  getImagePlacementOrder,
  fontStylesToCssProp,
  getNormalizedOpacity,
} from "../helpers";

import { Theme } from "types"

export const getChapterHeaderCss = (themeProps: Theme) => {
  const { properties: styleProps } = themeProps;

  return `
    .chp_bg{
      background-color: rgba(255,255,255, ${getNormalizedOpacity(
        styleProps.image.opacity
      )});
      background-blend-mode: lighten;
      opacity: ${getNormalizedOpacity(styleProps.image.opacity)};
    }

    .${themeProps._id} .chapter-title-card .chapter-title h2{
      color: ${styleProps.textLight === "light" ? "white" : "black"};
    }

    .${themeProps._id} .chapter-title-card .chapter-number{
      color: ${styleProps.textLight === "light" ? "white" : "black"};
    }

    .${themeProps._id} .chapter-title-card .chapter-subtitle h3{
      color: ${styleProps.textLight === "light" ? "white" : "black"};
    }

    .${themeProps._id} .chapter-title-card, .${themeProps._id} .title-card, .epub-toc-title-card{
      display: flex;
      flex-direction: column;
    }

    .${themeProps._id} .chapter-title-card, .epub-toc-title-card{
      position: relative;
      min-height: 13em;
      padding-top: 1em;
      padding-bottom: 1em;
      display: flex;
    }

    .chp_clr_none img, .chp_clr_none{
      filter: grayscale(100%);
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
    }

    .chp_clr_all img, .chp_clr_all{
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
      font-family: '${styleProps.chapterNo.font}';
      font-size: ${(2 + styleProps.chapterNo.size) / 3}em;
      text-align: ${styleProps.chapterNo.align};
      line-height: 1.${styleProps.chapterNo.size};
      width: ${styleProps.chapterNo.width}%;
      ${fontStylesToCssProp(styleProps.chapterNo.style)}
      display: inline-block;
    }

    .${themeProps._id} .chapter-title h2, .epub-toc-title-card h2{
      font-family: '${styleProps.chapterTitle.font}';
      font-size: ${(4 + styleProps.chapterTitle.size) / 3}em;
      text-align: ${styleProps.chapterTitle.align}!important;
      line-height: 1.${styleProps.chapterTitle.size};
      width: ${styleProps.chapterTitle.width}%;
      ${fontStylesToCssProp(styleProps.chapterTitle.style)}
      display: inline-block;
    }

    .${themeProps._id} .chapter-subtitle h3{
      font-family: '${styleProps.chapterSubtitle.font}';
      font-size: ${(3 + styleProps.chapterSubtitle.size) / 3}em;
      text-align: ${styleProps.chapterSubtitle.align};
      line-height: 1.${styleProps.chapterSubtitle.size};
      width: ${styleProps.chapterSubtitle.width}%;
      ${fontStylesToCssProp(styleProps.chapterSubtitle.style)}
      display: inline-block;
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
      font-size: 44px;
      padding: 0.6em 0em;
      font-weight: 600;
    }
    .${themeProps._id} .title-card h2{
      font-size: 22px;
      padding: 1em 0em;
    }
    .${themeProps._id} .title-card h3{
      font-size: 20px;
      color:#666;
      padding: 1em 0em;
    }

    ${themeProps._id} .chapter-title-card.left{
      text-align: left;
    }

    ${themeProps._id} .chapter-title-card.center{
      text-align: center;
    }

    ${themeProps._id} .chapter-title-card.right{
      text-align: right;
    }
    ${themeProps._id} .chapter-title-card{
      width: 100%;
      justify-content:center;
    }

    ${themeProps._id} .chapter-title-card .chapter-number{
      width: 100%;
      text-align: inherit;
    }

    ${themeProps._id} .chapter-title-card h2{
      width: 100%;
      text-align: inherit;
    }

    ${themeProps._id} .chapter-title-card h3{
      width: 100%;
      text-align: inherit;
    }
  `
}