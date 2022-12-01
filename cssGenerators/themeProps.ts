import { fontNamesToCss } from "./.";

import {
  getImagePlacementOrder,
  fontStyleToCssProp,
  getNormalizedOpacity,
} from "../helpers";

import { ThemeProps } from "../types";

/**
 * Returns a css string to style the book according to provided theme properties
 * @param themeProps Atticus theme properties
 * @param fontBaseUrl The base url for the location where the actual font files reside
 * @returns {string} Css string to format the book according to provided theme properties
 */
export const themePropsToCss = (
  themeProps: ThemeProps,
  fontBaseUrl: string
): string => {
  const { properties: styleProps } = themeProps; 
  const fontCss = fontNamesToCss(
    [
      styleProps.chapterTitle.font,
      styleProps.chapterSubtitle.font,
      styleProps.chapterNo.font,
    ],
    fontBaseUrl
  );
  const styleCss = `
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
      ${fontStyleToCssProp(styleProps.chapterNo.style)}
      display: inline-block;
    }
    .${themeProps._id} .chapter-title h2, .epub-toc-title-card h2{
      font-family: '${styleProps.chapterTitle.font}';
      font-size: ${(4 + styleProps.chapterTitle.size) / 3}em;
      text-align: ${styleProps.chapterTitle.align}!important;
      line-height: 1.${styleProps.chapterTitle.size};
      width: ${styleProps.chapterTitle.width}%;
      ${fontStyleToCssProp(styleProps.chapterTitle.style)}
      display: inline-block;
    }
    .${themeProps._id} .chapter-subtitle h3{
      font-family: '${styleProps.chapterSubtitle.font}';
      font-size: ${(3 + styleProps.chapterSubtitle.size) / 3}em;
      text-align: ${styleProps.chapterSubtitle.align};
      line-height: 1.${styleProps.chapterSubtitle.size};
      width: ${styleProps.chapterSubtitle.width}%;
      ${fontStyleToCssProp(styleProps.chapterSubtitle.style)}
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
    .${themeProps._id} .publisher-details{
      font-family: '${styleProps.chapterNo.font}';
    }

    /*      **********      */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      margin-block: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    /*      **********      */

    .toc-list{
      padding: 0px;
      margin-left: 0px;
      list-style: none;
    }
    .toc-subtitle{
      margin-left: 1.5rem;
    }
    .toc-subheading{
      margin-left: 1.5rem;

    }
    .toc-subheading-epub{
      margin-left: 0.5rem;
      list-style-type:none;
    }
    .toc-subtitle-epub{
      margin-left: 0.5rem;
      list-style-type:none;
    }
    .toc-subtitle-inner{
      text-decoration:none;
    }
    b{
      font-weight: bold;
    }

    em, i{
      font-style: italic;
    }

    span.monospace {
      font-family: 'Courier', sans-serif;
    }

    span.smallcaps {
      font-variant: small-caps;
    }

    span.sansserif {
      font-family: 'PT Sans';
    }

    h2 {
      font-size: 1.2em;
      padding: 0.6em 0em;
    }

    h1 {
      font-size: 1.3em;
      font-weight: bold;
      padding: 0.6em 0em;
    }

    h3 {
      font-size: 1.15em;
      font-weight: bold;
      padding: 0.6em 0em;
    }

    h4 {
      font-size: 1.1em;
      font-weight: 500;
      padding: 0.6em 0em;
    }

    h5 {
      font-size: 1.075em;
      font-weight: 500;
      padding: 0.6em 0em;
    }

    h6 {
      font-size: 1.075em;
      font-weight: 500;
      padding: 0.6em 0em;
      font-style: italic;
    }


    ul, ol{
      padding: 0rem 1rem;
    }

    .list-parent{
      padding: 1rem;
    }

    li{
      padding: 0.2rem 0rem;
    }

    .table-of-content{
      margin-left: 0px;
      line-height: 1.6rem;

    }

    /* Common Chapter Title card alignment */

    .chapter-title-card.left{
      text-align: left;
    }

    .chapter-title-card.center{
      text-align: center;
    }

    .chapter-title-card.right{
      text-align: right;
    }
    .chapter-title-card{
      width: 100%;
      justify-content:center;
    }

    .chapter-title-card .chapter-number{
      width: 100%;
      text-align: inherit;
    }

    .chapter-title-card h2{
      width: 100%;
      text-align: inherit;
    }

    .chapter-title-card h3{
      width: 100%;
      text-align: inherit;
    }

    .wrapper{
      /* https://css-tricks.com/almanac/properties/o/overflow-wrap/ */
      overflow-wrap: break-word;
      ${styleProps.paragraph.hyphens ? `hyphens: auto;` : ``}

      ${styleProps.paragraph.justify ? `text-align: justify;` : ``}
    }

    p:empty:not(:first-of-type){
      min-height: 1em;
    }
    
    p{
      orphans: 2; 
      widows: 2;
      padding-bottom: 0em;
      margin-top: 0em;
      padding-top: 0em;
      line-height: 1.6em;
      text-indent: ${
        styleProps.paragraph.indent ? styleProps.paragraph.indent : 0
      }em;
      margin-block-end: ${
        !styleProps.paragraph.indent ? styleProps.paragraph.paragraphSpacing : 0
      }em;
    }

    p:first-of-type{
      text-indent: 0rem !important;
    }

    .text-after-subheading {
      text-indent: 0rem !important;
    }

    .align-left{
      text-align: left !important;
    }
    .align-center{
      text-align: center !important;
    }
    .align-right{
      text-align: right !important;
    }

    blockquote{
      line-height: 1.6em;
      padding-left: 10%;
      padding-right: 10%;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    .ornamental-break{
      text-align: center;
      display: block;
      width: 100%;
      padding: 0.8rem 0rem;
    }
    
    .ornamental-break img{
      width: ${styleProps.ornamentalBreakWidth || 50}%;
    }
    
    .image{
      display: flex;
      flex-direction: column;
      width: 100%;
      page-break-inside: avoid;
      height: auto;
    }

    .image img{
        height:auto;
      page-break-inside: avoid;
    }

    .image.image-flow-left{
      justify-content: flex-start;
      align-items: flex-start;
      text-align: left;
    }

    .image.image-wrap-left {
      float: left;
      margin-right: 0.8rem;
    }

    .image.image-flow-middle{
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .image.image-flow-right{
      justify-content: flex-end;
      align-items: flex-end;
      text-align: right;
    }

    .image.image-wrap-right {
      float: right;
      margin-left: 0.8rem;
    }

    .image .caption{
      width: 96%;
      font-style: italic;
    }

    .image.image-size-small a{
      width: 30%;
    }

    .image.image-size-small .img-with-empty-link{
      width: 30%;
    }

    .image.image-size-medium a{
      width: 45%;
    }

    .image.image-size-medium .img-with-empty-link{
      width: 45%;
    }

    .image.image-size-large a{
      width: 100%;
    }

    .image.image-size-large .img-with-empty-link{
      width: 100%;
    }

    .image img{
      display: block;
      margin-bottom: 0.6rem;
      display: inline-block;
    }

    .image img:not(.img-with-empty-link){
      width: 100%;
    }

    .profile-links > div {
      display: inline-block;
    }

    .profile-links {
      text-align: center;
      margin: 10px 0px;
      page-break-inside: avoid;
    }

    .social-profile-icon-small {
      text-align: center;
      width: 15px;
      height: 15px;
      margin: 5px;
    }

    .social-profile-icon-medium {
      text-align: center;
      width: 20px;
      height: 20px;
      margin: 5px;
    }

    .social-profile-icon-large {
      text-align: center;
      width: 25px;
      height: 25px;
      margin: 5px;
    }

    blockquote{
      orphans: 3; 
      widows: 3;
    }

    .verse{
      padding: 2rem 20%;
      line-height: 1.6em;
      orphans: 3; 
      widows: 3;
    }

    .title{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      height: 100vh;
    }
    
    .title-card{
      width: 100%;
      text-align: center;
      padding: 2rem 0.4rem;
    }

    .title-card h1{
      font-size: 2.5rem;
      text-align: inherit;
      padding: 0.4rem 0rem;
    }
    
    .title-card h2{
      font-size: 1.75rem;
      text-align: inherit;
      padding: 0.2rem 0rem;
    }
    
    .title-card h3{
      font-size: 1.5rem;
      text-align: inherit;
      padding: 0.2rem 0rem;
    }

    /* EPUB TOC */
    .epub-toc-title-card h2 {
      text-align: ${styleProps.titleAlignment}
    }

    .publisher-details{
      width: 100%;
      padding: 2rem 1.6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    
    .publisher-logo{
      width: auto;
      max-width: 80px !important;
      padding: 0.8rem 0rem;
    }
    .publisher-logo img{
      width: 80px;
      height: auto;
    }

    /* COPYRIGHTS */

    .copyrights {
      font-size: 0.75rem;
    }

    .copyrights p{
      text-indent: 0em !important;
      margin-bottom: 0.8em;
    }

    .copyrights .chapter-title-card{
      display: none;
    }

    .copyrights p:first-of-type .word:nth-child(-n+4){
      text-transform: none;
    }

    .copyrights p:first-of-type .first-letter{
      font-size: 1em;
      line-height: inherit;
      margin: inherit;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    .copyrights .chapter-title-card{
      display: none !important;
    }

    /* Dedication */

    .dedication .chapter-title-card{
      display: none !important;
    }

    .dedication{
      padding-top: 33.33%;
      text-align: center;
      display: flex;
      justify-content: center;
    }
    .dedication * {
      text-align: center;
    }

    /* Epigraph */

    .epigraph .chapter-title-card{
      display: none !important;
    }

    .epigraph{
      padding-top: 33.33%;
    }

    /* Also by */
    .also-by p{
      text-indent: 0 !important;
      margin-bottom: 0.6rem;
      text-align: center;
    }

    .image-full{
      width: 100%;
      height:auto;
      vertical-align: middle;
      
    }

    .image-full img{
      width: 100%;
      height: auto;
      max-height:100%;
      object-fit:contain;
      vertical-align: middle;
    }

    .img-vert-middle{
      position: absolute;
      top: 50%;  /* position the top  edge of the element at the middle of the parent */
      left: 50%; /* position the left edge of the element at the middle of the parent */
      transform: translate(-50%, -50%);
    }

    .img-vert-top{
      position:absolute; 
      top:0;
    }

    .img-vert-bottom{
      position:absolute; 
      bottom:0;
    }
    
    .print-wrapper{
      height: 100%;
      max-height:100%;
    }

    .fullpage-image{
      height: 100%;
      max-height:100%;
      position:relative;
    }

    .image-full-bleed{
      width: 100%;
      height:100%;
      vertical-align: middle;
    }

    .image-full-bleed img{
      width: 100%;
      height: auto;
      max-height:100%;
      object-fit:fill;
      vertical-align: middle;
    }

    .full-bleed{
      height: 100%;
      max-height:100%;
      position:relative;
    }

    .withDropcap .dropcap, .ornamental-break + p{
      text-indent: 0!important;
    }
    ${
      styleProps.firstParagraph.dropcap
        ? `
      .withDropcap .dropcap {
        float: left;
      }
      .withDropcap .dropcap{
        font-size: 3rem;
        line-height: 1;
        padding: 0 0.25rem;
        margin-right: 0.125rem;
        webkit-initial-letter: 2;
        initial-letter: 2;
        transform: scale(1.1);
      }
      .withDropcap .dropcap:before {
        margin-bottom: 0.275rem;  
      }
      .withDropcap .dropcap:after {
        margin-top: -0.175rem;  
      }
      .endnote-link{
        color: inherit;
        text-decoration: none;
        padding-left: 0.2rem;
      }
      .endnotes{
        font-size: 0.9rem !important;
        padding-top: 1rem !important;
        margin-top: 1rem !important;
        margin-bottom: 2rem !important;
        page-break-inside: avoid;
        break-inside: avoid;
      }
      .endnotes-separator{
        height:0.175rem;
        background-color:#000000;
        margin-bottom: 2rem !important;
      }
      .endnote-backlink{
        color: inherit;
        text-decoration: none;
      }
      a{
        text-decoration: none;
        color: inherit;
      }
      `
        : ""
    }
    ${
      styleProps.firstParagraph.uppercaseFourWords
        ? `
      .withDropcap .dropcap,
      .withDropcap .lead_word{
        text-transform: uppercase;
      }
      `
        : ""
    }
  `;

  return `${styleCss} ${fontCss}`;
};
