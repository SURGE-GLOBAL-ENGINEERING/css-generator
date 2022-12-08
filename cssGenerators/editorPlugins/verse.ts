export const getVerseCss = (prefix: string) => {
  return `
    ${prefix}.verse{
      padding: 2rem 20%;
      line-height: 1.6em;
      orphans: 3; 
      widows: 3;
    }
  `
};
