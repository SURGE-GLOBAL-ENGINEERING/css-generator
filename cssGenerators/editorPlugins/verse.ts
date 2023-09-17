export const getVerseCss = (prefixRule: string) => {
  return `
    ${prefixRule}.verse{
      padding: 2rem 20%;
      line-height: 1.6em;
      orphans: 3; 
      widows: 3;
    }
  `
};
