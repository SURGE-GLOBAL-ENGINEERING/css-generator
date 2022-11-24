import { getImagePlacementOrder, fontStyleToCssProp } from "./helpers";

import { ThemeStyleProps } from "./types";

/**
 * Returns a css string to style the book according to provided theme properties
 * @param themeProps Atticus theme properties
 * @param themeId Id of the theme
 * @returns {string} Css string to format the book according to provided theme properties
 */
export const convertThemeStylePropsToCss = (
  themeProps: ThemeStyleProps,
  themeId: string
): string => {
  const themeImageOpacity =
    themeProps.image.opacity !== undefined ? themeProps.image.opacity : 100;

  const style = `
  .chp_bg{
    background-color: rgba(255,255,255, ${1.0 - themeImageOpacity / 100});
    background-blend-mode: lighten;
    opacity: ${themeImageOpacity};
  }
  .${themeId} .chapter-title-card .chapter-title h2{
    color: ${themeProps.textLight === "light" ? "white" : "black"};
  }
  .${themeId} .chapter-title-card .chapter-number{
    color: ${themeProps.textLight === "light" ? "white" : "black"};
  }
  .${themeId} .chapter-title-card .chapter-subtitle h3{
    color: ${themeProps.textLight === "light" ? "white" : "black"};
  }
  .${themeId} .chapter-title-card, .${themeId} .title-card, .epub-toc-title-card{
    display: flex;
    flex-direction: column;
  }
  .${themeId} .chapter-title-card, .epub-toc-title-card{
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
  .${themeId} .chapter-title-card .chp_img{
    order: ${getImagePlacementOrder(themeProps.image.placement)};
    text-align: ${themeProps.image.alignment};
    padding-top: 0.3em;
  }
  .${themeId} .chapter-title-card .chp_img img{
    width: ${themeProps.image.width}%;
  }
  .${themeId} .chapter-title-card .chapter-number, .${themeId} .chapter-title-card .chapter-title, .${themeId} .chapter-title-card .chapter-subtitle, .epub-toc-title-card h2{
    padding-left: 3%;
    width: 94%;
    z-index: 10;
    display: block;
  }
  .${themeId} .chapter-number{
    text-align: ${themeProps.chapterNo.align}!important;
    order: 2;
    text-transform: capitalize;
  }
  .${themeId} .chapter-title{
    text-align: ${themeProps.chapterTitle.align}!important;
    order: 3;
  }
  .${themeId} .chapter-subtitle{
    text-align: ${themeProps.chapterSubtitle.align}!important;
    order: 4;
  }
  .${themeId} .chapter-number span, .${themeId} .chapter-title h2, .epub-toc-title-card h2, .${themeId} .chapter-subtitle h3 {
      font-weight: 400;
  }
  .${themeId} .chapter-number span{
    font-family: '${themeProps.chapterNo.font}';
    font-size: ${(2 + themeProps.chapterNo.size) / 3}em;
    text-align: ${themeProps.chapterNo.align};
    line-height: 1.${themeProps.chapterNo.size};
    width: ${themeProps.chapterNo.width}%;
    ${fontStyleToCssProp(themeProps.chapterNo.style)}
    display: inline-block;
  }
  .${themeId} .chapter-title h2, .epub-toc-title-card h2{
    font-family: '${themeProps.chapterTitle.font}';
    font-size: ${(4 + themeProps.chapterTitle.size) / 3}em;
    text-align: ${themeProps.chapterTitle.align}!important;
    line-height: 1.${themeProps.chapterTitle.size};
    width: ${themeProps.chapterTitle.width}%;
    ${fontStyleToCssProp(themeProps.chapterTitle.style)}
    display: inline-block;
  }
  .${themeId} .chapter-subtitle h3{
    font-family: '${themeProps.chapterSubtitle.font}';
    font-size: ${(3 + themeProps.chapterSubtitle.size) / 3}em;
    text-align: ${themeProps.chapterSubtitle.align};
    line-height: 1.${themeProps.chapterSubtitle.size};
    width: ${themeProps.chapterSubtitle.width}%;
    ${fontStyleToCssProp(themeProps.chapterSubtitle.style)}
    display: inline-block;
  }
  .${themeId} header .meta{
    font-size: ${4 + 2 * themeProps.header.size}pt;
    font-family: ${themeProps.header.font};
  }
  .${themeId} footer .meta{
    font-size: ${4 + 2 * themeProps.footer.size}pt;
    font-family: ${themeProps.footer.font};
  }
  .${themeId} .title-card {
    font-family: '${themeProps.chapterTitle.font}';
  }
  .${themeId} .title-card h1{
    font-size: 44px;
    padding: 0.6em 0em;
    font-weight: 600;
  }
  .${themeId} .title-card h2{
    font-size: 22px;
    padding: 1em 0em;
  }
  .${themeId} .title-card h3{
    font-size: 20px;
    color:#666;
    padding: 1em 0em;
  }
  .${themeId} .publisher-details{
    font-family: '${themeProps.chapterNo.font}';
  }
`;

  return style;
};
