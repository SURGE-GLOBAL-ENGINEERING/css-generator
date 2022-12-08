export const getEndNoteCss = (prefix: string) => {
  return `
    ${prefix}.endnote-link{
      color: inherit;
      text-decoration: none;
      padding-left: 0.2rem;
    }
    ${prefix}.endnotes{
      font-size: 0.9rem !important;
      padding-top: 1rem !important;
      margin-top: 1rem !important;
      margin-bottom: 2rem !important;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    ${prefix}.endnotes-separator{
      height:0.175rem;
      background-color:#000000;
      margin-bottom: 2rem !important;
    }
    ${prefix}.endnote-backlink{
      color: inherit;
      text-decoration: none;
    }
    ${prefix}a{
      text-decoration: none;
      color: inherit;
    }
  `;
};
