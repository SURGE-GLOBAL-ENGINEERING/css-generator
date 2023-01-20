import styleObjectToCss from "react-style-object-to-css";

import {
  getImagePlacementOrder,
  fontStylesToCssProp,
  getNormalizedOpacity,
  getTitleFontSize,
  getSubTitleFontSize,
  getChapNumberFontSize,
  // getThemeThumbnailFontSize,
  getTitleDirection,
  getFontFamilyName,
  headerStyleToFontVariant,
  slingleLineEllipsis,
  addPrefix,
  thumbnailCssOverwrites
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
  const renderLightHeaderText =
    styleProps.image?.placement === "background-image" &&
    styleProps.image?.headerTextColor === "light";

  return `
    .${themeProps._id} .${addPrefix("chp_bg")}{
      background-color: rgba(255,255,255, ${1 - getNormalizedOpacity(
        styleProps.image.opacity
      )});
      background-blend-mode: lighten;
      opacity: ${getNormalizedOpacity(styleProps.image.opacity)};
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} .${addPrefix("chapter-title", prefix)} h2{
      color: ${
        renderLightHeaderText ? "white" : "black"
      };
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} .${addPrefix("chapter-number", prefix)}{
      color: ${
        renderLightHeaderText ? "white" : "black"
      };
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} .${addPrefix("chapter-subtitle", prefix)} h3{
      color: ${
        renderLightHeaderText ? "white" : "black"
      };
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)}, .${themeProps._id} .${addPrefix("title-card", prefix)}, .${addPrefix("epub-toc-title-card", prefix)}{
      display: flex;
      flex-direction: column;
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)}, .${addPrefix("epub-toc-title-card", prefix)}{
      display: flex;
      position: relative;
      min-height: 13em;
      padding-bottom: 0;
      ${styleObjectToCss(styleProps.titleCardExtras)}
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
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} .${addPrefix("chp_img", prefix)} img{
      width: ${styleProps.image.width}%;
    }

    .${themeProps._id} .${addPrefix("chapter-number", prefix)}{
      text-align: ${styleProps.chapterNo.align}!important;
      order: 2;
      text-transform: capitalize;
    }

    .${themeProps._id} .${addPrefix("chapter-title", prefix)}{
      text-align: ${styleProps.chapterTitle.align}!important;
      order: 3;
    }

    .${themeProps._id} .${addPrefix("chapter-subtitle", prefix)}{
      text-align: ${styleProps.chapterSubtitle.align}!important;
      order: 4;
    }

    .${themeProps._id} .${addPrefix("chapter-number", prefix)} span, .${themeProps._id} .${addPrefix("chapter-title", prefix)} h2, .${addPrefix("epub-toc-title-card", prefix)} h2, .${themeProps._id} .${addPrefix("chapter-subtitle", prefix)} h3 {
        font-weight: 400;
    }

    .${themeProps._id} .${addPrefix("chapter-number", prefix)} span{
      display: inline-block;
      font-family: ${getFontFamilyName(
        styleProps.chapterNo.font,
        headerStyleToFontVariant(styleProps.chapterNo.style)
      )};
      font-size: ${getChapNumberFontSize(styleProps.chapterNo)}em;
      text-align: ${styleProps.chapterNo.align};
      line-height: ${isThumbnail ? 1 : `1.${styleProps.chapterNo.size}`}
      width: ${styleProps.chapterNo.width}%;
      direction: ${getTitleDirection(styleProps.chapterNo.align)};
      ${fontStylesToCssProp(styleProps.chapterNo.style)}
      ${styleObjectToCss(styleProps.chapterNo.extras)}
      ${isThumbnail? thumbnailCssOverwrites.number(): ""}
    }

    .${themeProps._id} .${addPrefix("chapter-title", prefix)} h2, .${addPrefix("epub-toc-title-card", prefix)} h2{
      display: inline-block;
      font-family: ${getFontFamilyName(
        styleProps.chapterTitle.font,
        headerStyleToFontVariant(styleProps.chapterTitle.style)
      )};
      font-size: ${getTitleFontSize(styleProps.chapterTitle)}em;
      text-align: ${styleProps.chapterTitle.align}!important;
      line-height: 1.${styleProps.chapterTitle.size};
      width: ${styleProps.chapterTitle.width}%;
      direction: ${getTitleDirection(styleProps.chapterTitle.align)};
      ${fontStylesToCssProp(styleProps.chapterTitle.style)}
      ${styleObjectToCss(styleProps.chapterTitle.extras)}
      ${isThumbnail? thumbnailCssOverwrites.title(): ""}
    }

    .${themeProps._id} .${addPrefix("chapter-subtitle", prefix)} h3{
      display: inline-block;
      font-family: ${getFontFamilyName(
        styleProps.chapterSubtitle.font,
        headerStyleToFontVariant(styleProps.chapterSubtitle.style)
      )};
      font-size: ${getSubTitleFontSize(styleProps.chapterSubtitle)}em;
      text-align: ${styleProps.chapterSubtitle.align};
      line-height: ${isThumbnail ? 1 : `1.${styleProps.chapterSubtitle.size}`}
      width: ${styleProps.chapterSubtitle.width}%;
      direction: ${getTitleDirection(styleProps.chapterSubtitle.align)};
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

    .${themeProps._id} .${addPrefix("title-card", prefix)} {
      font-family: '${styleProps.chapterTitle.font}';
    }

    .${themeProps._id} .${addPrefix("title-card", prefix)} h1{
      padding: 9px 0;
    }

    .${themeProps._id} .${addPrefix("title-card", prefix)} h2{
      padding: 15px 0;
    }

    .${themeProps._id} .${addPrefix("title-card", prefix)} h3{
      padding: 15px 0;
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

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} span{
      width: 100%;
      text-align: inherit;
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} h2{
      width: 100%;
      text-align: inherit;
    }

    .${themeProps._id} .${addPrefix("chapter-title-card", prefix)} h3{
      width: 100%;
      text-align: inherit;
    }

    ${
      isPreviewer || isThumbnail
        ? `
    .${addPrefix("chapter-title-card", prefix)} .${addPrefix("chp_bg", prefix)}{
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: -1;
    }`
        : ""
    }
  `;
}

// export const getThemeThumbnailHeaderCss = (themeProps: Theme, prefix: string) => {
//   const { properties: styleProps } = themeProps;
//   const renderLightHeaderText =
//     styleProps.image?.placement === "background-image" &&
//     styleProps.image?.headerTextColor === "light";

//   return `
//     .${prefix} .${themeProps._id} .chp_bg{
//       background-color: rgba(255,255,255, ${
//         1 - getNormalizedOpacity(styleProps.image.opacity)
//       });
//       background-blend-mode: lighten;
//       opacity: ${getNormalizedOpacity(styleProps.image.opacity)};
//     }

//     .${prefix} .${themeProps._id} .chapter-title-card .chapter-title h2{
//       color: ${renderLightHeaderText ? "white" : "black"};
//     }

//     .${prefix} .${themeProps._id} .chapter-title-card .chapter-number{
//       color: ${renderLightHeaderText ? "white" : "black"};
//     }

//     .${prefix} .${themeProps._id} .chapter-title-card .chapter-subtitle h3{
//       color: ${renderLightHeaderText ? "white" : "black"};
//     }

//     .${prefix} .${themeProps._id} .chp_clr_none img, .chp_clr_none{
//       filter: grayscale(100%);
//       -webkit-filter: grayscale(100%);
//       -moz-filter: grayscale(100%);
//       -ms-filter: grayscale(100%);
//       -o-filter: grayscale(100%);
//     }

//     .${prefix} .${themeProps._id} .chp_clr_all img, .chp_clr_all{
//       filter: grayscale(0%);
//       -webkit-filter: grayscale(0%);
//       -moz-filter: grayscale(0%);
//       -ms-filter: grayscale(0%);
//       -o-filter: grayscale(0%);
//     }

//     .${prefix} .${themeProps._id} .chapter-title-card .chp_img{
//       order: ${getImagePlacementOrder(styleProps.image.placement)};
//       text-align: ${styleProps.image.alignment};
//       padding-top: 0.3em;
//     }

//     .${prefix} .${themeProps._id} .chapter-title-card .chp_img img{
//       width: ${styleProps.image.width}%;
//     }

//     .${prefix} .${themeProps._id} .chapter-number{
//       text-align: ${styleProps.chapterNo.align}!important;
//       order: 2;
//       text-transform: capitalize;
//     }

//     .${prefix} .${themeProps._id} .chapter-title{
//       text-align: ${styleProps.chapterTitle.align}!important;
//       order: 3;
//     }

//     .${prefix} .${themeProps._id} .chapter-subtitle{
//       text-align: ${styleProps.chapterSubtitle.align}!important;
//       order: 4;
//     }

//     .${prefix} .${themeProps._id} .chapter-number span, .${themeProps._id} .chapter-title h2, .epub-toc-title-card h2, .${themeProps._id} .chapter-subtitle h3 {
//         font-weight: 400;
//     }

//     .${prefix} .${themeProps._id} .chapter-number span{
//       display: inline-block;
//       font-family: ${getFontFamilyName(
//         styleProps.chapterNo.font,
//         headerStyleToFontVariant(styleProps.chapterNo.style)
//       )};
//       font-size: ${getChapNumberFontSize(styleProps.chapterNo)}em;
//       text-align: ${styleProps.chapterNo.align};
//       line-height: 1;
//       width: ${styleProps.chapterNo.width}%;
//       direction: ${getTitleDirection(styleProps.chapterNo.align)};
//       ${fontStylesToCssProp(styleProps.chapterNo.style)}
//       ${styleObjectToCss(styleProps.chapterNo.extras)}
//     }

//     .${prefix} .${themeProps._id} .chapter-title h2, .epub-toc-title-card h2{
//       display: inline-block;
//       font-family: ${getFontFamilyName(
//         styleProps.chapterTitle.font,
//         headerStyleToFontVariant(styleProps.chapterTitle.style)
//       )};
//       font-size: ${getTitleFontSize(styleProps.chapterTitle)}em;
//       text-align: ${styleProps.chapterTitle.align}!important;
//       line-height: 1;
//       width: ${styleProps.chapterTitle.width}%;
//       direction: ${getTitleDirection(styleProps.chapterTitle.align)};
//       ${fontStylesToCssProp(styleProps.chapterTitle.style)}
//       ${styleObjectToCss(styleProps.chapterTitle.extras)}
//     }

//     .${prefix} .${themeProps._id} .chapter-subtitle h3{
//       display: inline-block;
//       font-family: ${getFontFamilyName(
//         styleProps.chapterSubtitle.font,
//         headerStyleToFontVariant(styleProps.chapterSubtitle.style)
//       )};
//       font-size: ${getSubTitleFontSize(styleProps.chapterSubtitle)}em;
//       text-align: ${styleProps.chapterSubtitle.align};
//       line-height: 1;
//       width: ${styleProps.chapterSubtitle.width}%;
//       direction: ${getTitleDirection(styleProps.chapterSubtitle.align)};
//       ${fontStylesToCssProp(styleProps.chapterSubtitle.style)}
//       ${styleObjectToCss(styleProps.chapterSubtitle.extras)}
//     }
//     `;
// };