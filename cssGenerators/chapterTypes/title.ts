import styleObjectToCss from "react-style-object-to-css";

import { getFontFamilyName, getFontFamilyFromFontMap } from "../../helpers";
import { FontVariant, BookTitlePage, HeaderFonts } from "../../types";

interface bookTitlteCssProps {
  themeId: string;
  chapterHeaderFonts: HeaderFonts;
  isPreviewer: boolean;
  titlePageConfigs?: BookTitlePage;
}
export const getBookTitleCss = (props: bookTitlteCssProps) => {
  const { themeId, chapterHeaderFonts, isPreviewer, titlePageConfigs } = props;

  return `
    .${themeId} .title{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      height: ${isPreviewer ? "100%" : "100vh"};
    }
    
    .${themeId} .title-card{
      position: absolute;
      top:0px;
      width: 100%;
      text-align: center;
      padding: 2rem 0.4rem;
    }


    .${themeId} .title-card h1{
      font-size: 44px;
      text-align: inherit;
      padding: 0.6em 0em;
      font-family: ${
        titlePageConfigs?.title?.fontMap
          ? getFontFamilyFromFontMap(
              chapterHeaderFonts,
              titlePageConfigs.title.fontMap
            )
          : getFontFamilyName(
              chapterHeaderFonts.chapterTitleFont,
              FontVariant.regular
            )
      };
      ${styleObjectToCss(titlePageConfigs?.title?.extras)}
    }
    
    .${themeId} .title-card h2{
      font-size: 22px;
      text-align: inherit;
      padding: 1em 0em;
      font-family: ${
        titlePageConfigs?.author?.fontMap
          ? getFontFamilyFromFontMap(
              chapterHeaderFonts,
              titlePageConfigs.author.fontMap
            )
          : getFontFamilyName(
              chapterHeaderFonts.chapterTitleFont,
              FontVariant.regular
            )
      };
      ${styleObjectToCss(titlePageConfigs?.author?.extras)}
    }
    
    .${themeId} .title-card h3{
      font-size: 20px;
      text-align: inherit;
      padding: 1em 0em;
      color:#666;
      font-family: ${
        titlePageConfigs?.subtitle?.fontMap
          ? getFontFamilyFromFontMap(
              chapterHeaderFonts,
              titlePageConfigs.subtitle.fontMap
            )
          : getFontFamilyName(
              chapterHeaderFonts.chapterTitleFont,
              FontVariant.regular
            )
      };
      ${styleObjectToCss(titlePageConfigs?.subtitle?.extras)}
    }

    .${themeId} .publisher-details{
      position: absolute;
      bottom: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 2rem 1.6rem;
      text-transform:capitalize;
      font-family: ${
        titlePageConfigs?.publisher?.fontMap
          ? getFontFamilyFromFontMap(
              chapterHeaderFonts,
              titlePageConfigs.publisher.fontMap
            )
          : getFontFamilyName(
              chapterHeaderFonts.chapterNumberFont,
              FontVariant.regular
            )
      };
      ${styleObjectToCss(titlePageConfigs?.publisher?.extras)}
    }
    
    .${themeId} .publisher-logo{
      width: auto;
      max-width: 80px !important;
      padding: 0.8rem 0rem;
    }

    .${themeId} .publisher-logo img{
      width: 80px;
      height: auto;
    }
  `;
};
