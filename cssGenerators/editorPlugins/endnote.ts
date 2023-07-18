export const getEndNoteCss = (prefixRule: string) => {
  return `
    ${prefixRule}.endnote-link{
      color: inherit;
      text-decoration: none;
      padding-left: 0.2rem;
    }
    ${prefixRule}.endnotes{
      font-size: 0.9rem !important;
      padding-top: 1rem !important;
      margin-top: 1rem !important;
      margin-bottom: 2rem !important;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    ${prefixRule}.endnotes-separator{
      height:0.175rem;
      background-color:#000000;
      margin-bottom: 2rem !important;
    }
    ${prefixRule}.endnote-backlink{
      color: inherit;
      text-decoration: none;
    }
    ${prefixRule}a{
      text-decoration: none;
      color: inherit;
    }
  `;
};
