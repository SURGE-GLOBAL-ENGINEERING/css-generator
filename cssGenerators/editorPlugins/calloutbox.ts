export const getCalloutBoxCss = (themeId: string, isPreviewer: boolean = false) => {
	return `
      .${themeId} .calloutbox {
        box-sizing: border-box;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 1em 1em 1em 1em;
        display: ${isPreviewer ? "block !important" : "inline-block"};
        width: 100%;
        ${isPreviewer ? `
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        orphans: 3;
        widows: 3;
        ` : ""}
      }
      ${isPreviewer ? `
      .${themeId} .dropcap-containing-block:has(+ .calloutbox)::after {
        clear: both;
        content: "";
        display: block;
      }
      ` : ""}
    `;
};
