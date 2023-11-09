export const getCalloutBoxCss = (themeId: string) => {
	return `
      .${themeId} .calloutbox {
        box-sizing: border-box;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 1em 1em 1em 1em;
        display: inline-block;
        width: 100%;
      }
    `;
};
