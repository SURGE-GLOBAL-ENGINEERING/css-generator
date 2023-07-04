import { ImageCaption } from "../types";
import { getCaptionStyles } from "../helpers";

export const getImageCss = (themeId: string, captionProps: ImageCaption) => {
  return `
    .${themeId} .image{
      display: flex;
      flex-direction: column;
      width: 100%;
      page-break-inside: avoid;
      height: auto;
    }

    .${themeId} .image img{
        height:auto;
      page-break-inside: avoid;
    }

    .${themeId} .image.image-flow-left{
      justify-content: flex-start;
      align-items: flex-start;
      text-align: left;
    }

    .${themeId} .image.image-wrap-left {
      float: left;
      margin-right: 0.8rem;
    }

    .${themeId} .image.image-flow-middle{
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .${themeId} .image.image-flow-right{
      justify-content: flex-end;
      align-items: flex-end;
      text-align: right;
    }

    .${themeId} .image.image-wrap-right {
      float: right;
      margin-left: 0.8rem;
    }

    .${themeId} .image .caption{
      width: 96%;
      font-size: ${captionProps.size}em;
      ${getCaptionStyles(captionProps.layout)}
    }

    .${themeId} .image.image-size-small a{
      width: 30%;
    }

    .${themeId} .image.image-size-small .img-with-empty-link{
      width: 30%;
    }

    .${themeId} .image.image-size-medium a{
      width: 45%;
    }

    .${themeId} .image.image-size-medium .img-with-empty-link{
      width: 45%;
    }

    .${themeId} .image.image-size-large a{
      width: 100%;
    }

    .${themeId} .image.image-size-large .img-with-empty-link{
      width: 100%;
    }

    .${themeId} .image img{
      display: block;
      margin-bottom: 0.6rem;
      display: inline-block;
    }

    .${themeId} .image img:not(.img-with-empty-link){
      width: 100%;
    }
  `;
};
