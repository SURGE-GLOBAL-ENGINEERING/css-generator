import { getFontFamilyName, headerStyleToFontVariant } from "../helpers";

import { Theme } from "../types";

export const getHeadingCss = (themeId: string, themeProps: Theme, prefixRule: string): string => {
  const { properties: styleProps } = themeProps;

  const getFontFamily = (font: string) => {
    if (font !== "Default") {
      return getFontFamilyName(font, headerStyleToFontVariant([]));
    }
    return;
  };

  return `
        ${prefixRule}h2, ${prefixRule}h3, ${prefixRule}h4, ${prefixRule}h5, ${prefixRule}h6, 
    
        ${prefixRule}h2 {
          font-size: ${styleProps.headings.h2.size}em;
          font-family:  ${getFontFamily(styleProps.headings.h2.font)};
          font-weight: 600;
          padding: 0.6em 0em;
        }
    
        ${prefixRule}h3 {
          font-size: ${styleProps.headings.h3.size}em;
          font-family: ${getFontFamily(styleProps.headings.h3.font)};
          font-weight: 600;
          padding: 0.6em 0em;
        }
    
        ${prefixRule}h4 {
          font-size: ${styleProps.headings.h4.size}em;
          font-family: ${getFontFamily(styleProps.headings.h4.font)};
          font-weight: 600;
          padding: 0.6em 0em;
        }
    
        ${prefixRule}h5 {
          font-size: ${styleProps.headings.h5.size}em;
          font-family: ${getFontFamily(styleProps.headings.h5.font)};
          font-weight: 600;
          padding: 0.6em 0em;
        }
    
        ${prefixRule}h6 {
          font-size: ${styleProps.headings.h6.size}em;
          font-family: ${getFontFamily(styleProps.headings.h6.font)};
          font-weight: 600;
          padding: 0.6em 0em;
        }
      `;
};
