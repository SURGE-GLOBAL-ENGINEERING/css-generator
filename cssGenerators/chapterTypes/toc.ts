import { Alignment } from "../../types";

export const getTocCss = (titleAlignment: Alignment, themeId: string) => {
  return `
    .${themeId} .toc-list{
      padding: 0px;
      margin-left: 0px;
      list-style: none;
    }
    .${themeId} .toc-subtitle{
      margin-left: 1.5rem;
    }
    .${themeId} .toc-subheading{
      margin-left: 1.5rem;
    }
    .${themeId} .toc-subheading-epub{
      margin-left: 0.5rem;
      list-style-type:none;
    }
    .${themeId} .toc-subtitle-epub{
      margin-left: 0.5rem;
      list-style-type:none;
    }
    .${themeId} .toc-subtitle-inner{
      text-decoration:none;
    }
    .${themeId} .table-of-content{
      margin-left: 0px;
      line-height: 1.6rem;
    }
    /* EPUB TOC */
    .${themeId} .epub-toc-title-card h2 {
      text-align: ${titleAlignment}
    }
  `
};