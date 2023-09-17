import { Alignment, Theme } from "../../types";

export const getTocCss = (themeProps: Theme, prefixRule: string ,) => {
  const { properties: styleProps } = themeProps;
  return `
    ${prefixRule}.toc-list{
      padding: 0px;
      margin-left: 0px;
      list-style: none;
    }
    ${prefixRule}.toc-subheading{
      margin-left: 1.5rem;
    }
    ${prefixRule}.toc-subheading-epub{
      margin-left: 0.5rem;
      list-style-type:none;
    }
    ${prefixRule}.toc-subtitle-epub{
      margin-left: 0.5rem;
      list-style-type:none;
    }
    ${prefixRule}.toc-subtitle-inner{
      text-decoration:none;
    }
    ${prefixRule}.table-of-content{
      margin-left: 0px;
      line-height: 1.6rem;
    }
    /* EPUB TOC */
    ${prefixRule}.epub-toc-title-card h2 {
      text-align: ${styleProps.chapterTitle.align};
      font-family: '${styleProps.chapterTitle.font}';
    }

    ${prefixRule}.toc-entry {
      line-height: 1.6rem;
    }

    ${prefixRule}.toc-block {
      list-style: none;
    }
    ${prefixRule}.chapter-num-hidden {
      visibility: hidden;
    }
  `
};