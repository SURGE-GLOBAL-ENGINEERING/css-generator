export const getHangingIndentCss = (themeId: string) => {
    return `
      .${themeId} .hanging{
        line-height: 1.6em;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        text-indent: -2rem;
        padding-left: 2rem;
      }
    `
  };