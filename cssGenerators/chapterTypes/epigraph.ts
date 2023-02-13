export const getEpigraphCss = (themeId: string) => {
  return `
    .epigraph .chapter-title-card{
      display: none !important;
    }

    .${themeId} .epigraph{
      padding-top: 33.33%;
    }
  `;
};
