export const getBlockQuoteCss = (prefixRule: string) => {
  return `
    ${prefixRule}blockquote{
      line-height: 1.6em;
      padding-left: 10%;
      padding-right: 10%;
      margin-top: 2rem;
      margin-bottom: 2rem;
      orphans: 3; 
      widows: 3;
    }

    ${prefixRule}blockquote .quotee{
      text-align: right;
    }
  `
}