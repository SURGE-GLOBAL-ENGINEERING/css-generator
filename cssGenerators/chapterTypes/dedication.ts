export const getDedicationCss = (themeId: string) => {
  return `
    .${themeId} .dedication{
      padding-top: 33.33%;
      text-align: center;
      display: flex;
      justify-content: center;
    }
    
    .${themeId} .dedication * {
      text-align: center;
    }
  `;
};
