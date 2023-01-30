import { getFontFamilyName } from "../../helpers";
import { FontVariant } from "types";

interface bookTitlteCssProps {
  themeId: string;
  chapTitleFont: string;
  chapNumberFont: string;
}
export const getBookTitleCss = (props: bookTitlteCssProps) => {
  const { themeId, chapTitleFont, chapNumberFont } = props;
  return `
    .${themeId} .title{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      height: 100vh;
    }
    
    .${themeId} .title-card{
      width: 100%;
      text-align: center;
      padding: 2rem 0.4rem;
      font-family: ${getFontFamilyName(
        chapTitleFont,
        FontVariant.regular
      )};
    }

    .${themeId} .title-card h1{
      font-size: 2.5rem;
      text-align: inherit;
      padding: 0.4rem 0rem;
      text-transform:capitalize;
    }
    
    .${themeId} .title-card h2{
      font-size: 1.75rem;
      text-align: inherit;
      padding: 0.2rem 0rem;
      text-transform:capitalize;
    }
    
    .${themeId} .title-card h3{
      font-size: 1.5rem;
      text-align: inherit;
      padding: 0.2rem 0rem;
      text-transform:capitalize;
    }

    .${themeId} .publisher-details{
      width: 100%;
      padding: 2rem 1.6rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-transform:capitalize;
      font-family: ${getFontFamilyName(chapNumberFont, FontVariant.regular)};
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
