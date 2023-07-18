export const getCopyrightCss = (prefixRule: string) => {
  return `
    ${prefixRule}.copyrights {
      font-size: 0.75rem;
    }

    ${prefixRule}.copyrights p{
      text-indent: 0em !important;
      margin-bottom: 0.8em;
    }

    ${prefixRule}.copyrights p:first-of-type .word:nth-child(-n+4){
      text-transform: none;
    }

    ${prefixRule}.copyrights p:first-of-type .first-letter{
      font-size: 1em;
      line-height: inherit;
      margin: inherit;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  `;
}