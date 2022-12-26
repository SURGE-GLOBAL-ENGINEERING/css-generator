export const getAlignCss = (themeId: string) => {
  return `
    .${themeId} .align-left{
      text-align: left !important;
    }
    .${themeId} .align-center{
      text-align: center !important;
    }
    .${themeId} .align-right{
      text-align: right !important;
    }
  `;
};
