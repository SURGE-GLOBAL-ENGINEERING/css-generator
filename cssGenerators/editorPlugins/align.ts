export const getAlignCss = (prefix: string) => {
  return `
    ${prefix}.align-left{
      text-align: left !important;
    }
    ${prefix}.align-center{
      text-align: center !important;
    }
    ${prefix}.align-right{
      text-align: right !important;
    }
  `;
};
