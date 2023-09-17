export const getAlignCss = (prefixRule: string) => {
  return `
    ${prefixRule}.align-left{
      text-align: left !important;
    }
    ${prefixRule}.align-center{
      text-align: center !important;
    }
    ${prefixRule}.align-right{
      text-align: right !important;
    }
  `;
};
