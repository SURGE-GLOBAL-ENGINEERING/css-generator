import { ImageCaption } from "../types";
import { getCaptionStyles } from "../helpers";

export const getImageCss = (prefixRule: string, captionProps: ImageCaption) => {
  return `
    ${prefixRule}.image{
      display: flex;
      flex-direction: column;
      width: 100%;
      page-break-inside: avoid;
      height: auto;
    }

    ${prefixRule}.image img{
        height:auto;
      page-break-inside: avoid;
    }

    ${prefixRule}.image.image-flow-left{
      justify-content: flex-start;
      align-items: flex-start;
      text-align: left;
    }

    ${prefixRule}.image.image-wrap-left {
      float: left;
      margin-right: 0.8rem;
    }

    ${prefixRule}.image.image-flow-middle{
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    ${prefixRule}.image.image-flow-right{
      justify-content: flex-end;
      align-items: flex-end;
      text-align: right;
    }

    ${prefixRule}.image.image-wrap-right {
      float: right;
      margin-left: 0.8rem;
    }

    ${prefixRule}.image .caption{
      width: 96%;
      font-size: ${captionProps.size}em;
      ${getCaptionStyles(captionProps.layout)}
    }

    ${prefixRule}.image.image-size-small a{
      width: 30%;
    }

    ${prefixRule}.image.image-size-small .img-with-empty-link{
      width: 30%;
    }

    ${prefixRule}.image.image-size-medium a{
      width: 45%;
    }

    ${prefixRule}.image.image-size-medium .img-with-empty-link{
      width: 45%;
    }

    ${prefixRule}.image.image-size-large a{
      width: 100%;
    }

    ${prefixRule}.image.image-size-large .img-with-empty-link{
      width: 100%;
    }

    ${prefixRule}.image img{
      display: block;
      margin-bottom: 0.6rem;
      display: inline-block;
    }

    ${prefixRule}.image img:not(.img-with-empty-link){
      width: 100%;
    }
  `;
};
