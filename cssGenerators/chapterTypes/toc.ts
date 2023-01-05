import { Alignment, Theme } from "../../types";

export const getTocCss = (themeProps: Theme, themeId: string ,) => {
  const { properties: styleProps } = themeProps;
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
      text-align: ${styleProps.titleAlignment};
      font-family: '${styleProps.chapterTitle.font}';
    }

    .${themeId} .toc-entry {
      line-height: 1.6rem;
    }

    .${themeId} .toc-block {
      list-style: none;
    }
  `
};