export const getHangingIndentCss = (themeId: string) => {
    return `
      .${themeId} .hanging{
        line-height: 1.6em;
        text-indent: -0.25in;
        padding-left: 0.25in;
        orphans: 3; 
        widows: 3;
      }
    `
  };