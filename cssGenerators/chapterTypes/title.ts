import styleObjectToCss from "react-style-object-to-css";

import {
  getFontFamilyName,
  getFontFamilyFromFontMap,
  headerStyleToFontVariant,
} from "../../helpers";
import { Theme } from "../../types";

export const getBookTitleCss = (themeProps: Theme, isPreviewer: boolean) => {
  const styleProps = themeProps.properties;
  const titlePageConfigs = styleProps.bookTitlePage;

  const bookTitleFont = titlePageConfigs?.title?.fontMap
    ? getFontFamilyFromFontMap(styleProps, titlePageConfigs.title.fontMap)
    : getFontFamilyName(
        styleProps.chapterTitle.font,
        headerStyleToFontVariant(styleProps.chapterTitle.style)
      );

  const bookSubtitleFont = titlePageConfigs?.subtitle?.fontMap
    ? getFontFamilyFromFontMap(styleProps, titlePageConfigs.subtitle.fontMap)
    : getFontFamilyName(
        styleProps.chapterTitle.font,
        headerStyleToFontVariant(styleProps.chapterTitle.style)
      );

  const bookAuthorFont = titlePageConfigs?.author?.fontMap
    ? getFontFamilyFromFontMap(styleProps, titlePageConfigs.author.fontMap)
    : getFontFamilyName(
        styleProps.chapterTitle.font,
        headerStyleToFontVariant(styleProps.chapterTitle.style)
      );

  const bookPublisherFont = titlePageConfigs?.publisher?.fontMap
    ? getFontFamilyFromFontMap(styleProps, titlePageConfigs.publisher.fontMap)
    : getFontFamilyName(
        styleProps.chapterNo.font,
        headerStyleToFontVariant(styleProps.chapterNo.style)
      );

  return `
    .${themeProps._id} .title{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      height: ${isPreviewer ? "100%" : "100vh"};
    }
    
    .${themeProps._id} .title-card{
      position: relative;
      top:0px;
      width: 100%;
      text-align: center;
      padding: 2rem 0.4rem;
    }

    .${themeProps._id} .title-card h1{
      font-size: 44px;
      text-align: inherit;
      padding: 0.6em 0em;
      font-family: ${bookTitleFont};
      ${styleObjectToCss(styleProps.bookTitlePage?.title?.extras)}
    }
    
    .${themeProps._id} .title-card h2{
      font-size: 22px;
      text-align: inherit;
      padding: 1em 0em;
      font-weight: normal;
      font-family: ${bookAuthorFont};
      ${styleObjectToCss(styleProps.bookTitlePage?.author?.extras)}
    }
    
    .${themeProps._id} .title-card h3{
      font-size: 20px;
      text-align: inherit;
      padding: 1em 0em;
      font-family: ${bookSubtitleFont};
      ${styleObjectToCss(styleProps?.bookTitlePage?.subtitle?.extras)}
    }

    .${themeProps._id} .publisher-details{
      position: ${isPreviewer ? "relative" : "absolute"};
      bottom: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 2rem 1.6rem;
      text-transform:capitalize;
      font-family: ${bookPublisherFont};
      ${styleObjectToCss(styleProps.bookTitlePage?.publisher?.extras)}
    }
    
    .${themeProps._id} .publisher-logo{
      width: auto;
      max-width: 80px !important;
      padding: 0.8rem 0rem;
    }

    .${themeProps._id} .publisher-logo img{
      width: 80px;
      height: auto;
    }
  `;
};
