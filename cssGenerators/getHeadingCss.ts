import { getFontFamilyName, headerStyleToFontVariant } from "../helpers";

import { Theme } from "../types";

export const getHeadingCss = (themeId: string, themeProps: Theme): string => {
  const { properties: styleProps } = themeProps;

  const getFontFamily = (font: string) => {
    let fontFamily = "";
    if (font !== "Default") {
      fontFamily = `font-family: ${getFontFamilyName(
        font,
        headerStyleToFontVariant([])
      )};`;
    }
    return fontFamily;
  };

  return `
        .${themeId} h2, .${themeId} h3, .${themeId} h4, .${themeId} h5, .${themeId} h6, 
    
        .${themeId} h2 {
          font-size: ${styleProps.headings.h2.size}em;
          ${getFontFamily(styleProps.headings.h2.font)}
          font-weight: 600;
          padding: 0.6em 0em;
        }
    
        .${themeId} h3 {
          font-size: ${styleProps.headings.h3.size}em;
          ${getFontFamily(styleProps.headings.h3.font)}
          font-weight: 600;
          padding: 0.6em 0em;
        }
    
        .${themeId} h4 {
          font-size: ${styleProps.headings.h4.size}em;
          ${getFontFamily(styleProps.headings.h4.font)}
          font-weight: 600;
          padding: 0.6em 0em;
        }
    
        .${themeId} h5 {
          font-size: ${styleProps.headings.h5.size}em;
          ${getFontFamily(styleProps.headings.h5.font)}
          font-weight: 600;
          padding: 0.6em 0em;
        }
    
        .${themeId} h6 {
          font-size: ${styleProps.headings.h6.size}em;
          ${getFontFamily(styleProps.headings.h6.font)}
          font-weight: 600;
          padding: 0.6em 0em;
        }
      `;
};
