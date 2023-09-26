export const getCopyrightCss = (themeId: string) => {
  return `
    .${themeId} .copyrights {
      font-size: 0.75rem;
    }

    .${themeId} .copyrights p{
      text-indent: 0em !important;
      margin-bottom: 0.8em;
    }

    .${themeId} .copyrights p:first-of-type .word:nth-child(-n+4){
      text-transform: none;
    }

    .${themeId} .copyrights p:first-of-type .first-letter{
      font-size: 1em;
      line-height: inherit;
      margin: inherit;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  `;
}