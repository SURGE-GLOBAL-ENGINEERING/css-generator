/** li ol css in getDefaultCss.ts */
export const getListPluginCss = (prefixRule: string, isPreviewer: boolean) => {
  if (!isPreviewer) {
    return `${prefixRule}.list-parent{
      padding: 1rem;
    }`;
  }
  return "";
};
