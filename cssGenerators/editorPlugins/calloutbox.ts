export const getCalloutBoxCss = (prefixRule: string) => {
	return `
      ${prefixRule}.calloutbox {
        margin-top: 5px;
        border: 2px solid rgb(52, 51, 51);
        background-color: #faffef;
        padding: 1em 1em 1em 1em;
      }

      ${prefixRule}.calloutbox-callout-unfilled{
        background-color: transparent !important;
      }

      ${prefixRule}.calloutbox-callout-no-border{
        border: none !important;
      }
    `;
};
