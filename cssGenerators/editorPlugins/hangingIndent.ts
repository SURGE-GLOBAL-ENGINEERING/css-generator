export const getHangingIndentCss = (themeId: string) => {
    return `
      .${themeId} .hanging{
        line-height: 1.6em;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        text-indent: -3rem;
        padding-left: 3rem;
      }
    `
  };