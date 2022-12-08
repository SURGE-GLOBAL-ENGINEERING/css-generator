export const getDedicationCss = (prefix: string) => {
  return `
    ${prefix}.dedication .chapter-title-card{
      display: none !important;
    }

    ${prefix}.dedication{
      padding-top: 33.33%;
      text-align: center;
      display: flex;
      justify-content: center;
    }
    
    ${prefix}.dedication * {
      text-align: center;
    }
  `;
};
