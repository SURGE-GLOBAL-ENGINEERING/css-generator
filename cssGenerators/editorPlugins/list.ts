/** li ol css in getDefaultCss.ts */
export const getListPluginCss = (themeId: string, isPreviewer: boolean) => {
  if (isPreviewer) {
    return `.${themeId} .list-parent{
      padding: 1rem;
    }`;
  }
};
