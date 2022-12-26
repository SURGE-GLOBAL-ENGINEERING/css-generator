/** li ol css in getDefaultCss.ts */
export const getListPluginCss = (themeId: string) => {
  return `
    .${themeId} .list-parent{
      padding: 1rem;
    }
  `;
};
