export const getCopyrightCss = (prefix: string) => {
  return `
    ${prefix}.copyrights {
      font-size: 0.75rem;
    }

    ${prefix}.copyrights p{
      text-indent: 0em !important;
      margin-bottom: 0.8em;
    }

    ${prefix}.copyrights .chapter-title-card{
      display: none;
    }

    ${prefix}.copyrights p:first-of-type .word:nth-child(-n+4){
      text-transform: none;
    }

    ${prefix}.copyrights p:first-of-type .first-letter{
      font-size: 1em;
      line-height: inherit;
      margin: inherit;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    ${prefix}.copyrights .chapter-title-card{
      display: none !important;
    }
  `;
}