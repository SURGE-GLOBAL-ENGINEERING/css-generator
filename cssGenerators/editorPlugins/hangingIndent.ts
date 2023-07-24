export const getHangingIndentCss = (prefixRule: string) => {
    return `
      ${prefixRule}.hanging{
        line-height: 1.6em;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        text-indent: -0.25in;
        padding-left: 0.25in;
        orphans: 3; 
        widows: 3;
      }
    `
  };