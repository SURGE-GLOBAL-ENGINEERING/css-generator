export const getDedicationCss = (prefixRule: string) => {
  return `
    ${prefixRule}.dedication{
      padding-top: 33.33%;
      text-align: center;
      display: flex;
      justify-content: center;
    }
    
    ${prefixRule}.dedication * {
      text-align: center;
    }
  `;
};
