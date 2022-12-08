export const getEpigraphCss = (prefix: string) => {
  return `
    ${prefix}.epigraph .chapter-title-card{
      display: none !important;
    }

    ${prefix}.epigraph{
      padding-top: 33.33%;
    }
  `;
};
