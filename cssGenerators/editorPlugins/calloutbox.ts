export const getCalloutBoxCss = (themeId: string) => {
	return `
      .${themeId} .calloutbox {
        margin-top: 5px;
        border: 2px solid rgb(52, 51, 51);
        background-color: #faffef;
        padding: 1em 1em 1em 1em;
      }

      .${themeId} .calloutbox-callout-unfilled{
        background-color: transparent !important;
      }

      .${themeId} .calloutbox-callout-no-border{
        border: none !important;
      }
    `;
};
