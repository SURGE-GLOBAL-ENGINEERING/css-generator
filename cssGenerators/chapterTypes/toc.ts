import { Alignment } from "../../types";

export const getTocCss = (titleAlignment: Alignment, prefix: string) => {
  return `
    ${prefix}.toc-list{
      padding: 0px;
      margin-left: 0px;
      list-style: none;
    }
    ${prefix}.toc-subtitle{
      margin-left: 1.5rem;
    }
    ${prefix}.toc-subheading{
      margin-left: 1.5rem;
    }
    .toc-subheading-epub{
      margin-left: 0.5rem;
      list-style-type:none;
    }
    .toc-subtitle-epub{
      margin-left: 0.5rem;
      list-style-type:none;
    }
    .toc-subtitle-inner{
      text-decoration:none;
    }
    ${prefix}.table-of-content{
      margin-left: 0px;
      line-height: 1.6rem;
    }
    /* EPUB TOC */
    .epub-toc-title-card h2 {
      text-align: ${titleAlignment}
    }
  `
};