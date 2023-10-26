export const getCalloutBoxCss = (themeId: string) => {
	return `
      .${themeId} .calloutbox {
        margin-top: 5px;
        padding: 1em 1em 1em 1em;
        display: inline-block;
        width: 100%;
      }
    `;
};
