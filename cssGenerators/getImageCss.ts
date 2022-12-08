export const getImageCss = (prefix: string) => {
  return `
    ${prefix}.image{
      display: flex;
      flex-direction: column;
      width: 100%;
      page-break-inside: avoid;
      height: auto;
    }

    ${prefix}.image img{
        height:auto;
      page-break-inside: avoid;
    }

    ${prefix}.image.image-flow-left{
      justify-content: flex-start;
      align-items: flex-start;
      text-align: left;
    }

    ${prefix}.image.image-wrap-left {
      float: left;
      margin-right: 0.8rem;
    }

    ${prefix}.image.image-flow-middle{
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    ${prefix}.image.image-flow-right{
      justify-content: flex-end;
      align-items: flex-end;
      text-align: right;
    }

    ${prefix}.image.image-wrap-right {
      float: right;
      margin-left: 0.8rem;
    }

    ${prefix}.image .caption{
      width: 96%;
      font-style: italic;
    }

    ${prefix}.image.image-size-small a{
      width: 30%;
    }

    ${prefix}.image.image-size-small .img-with-empty-link{
      width: 30%;
    }

    ${prefix}.image.image-size-medium a{
      width: 45%;
    }

    ${prefix}.image.image-size-medium .img-with-empty-link{
      width: 45%;
    }

    ${prefix}.image.image-size-large a{
      width: 100%;
    }

    ${prefix}.image.image-size-large .img-with-empty-link{
      width: 100%;
    }

    ${prefix}.image img{
      display: block;
      margin-bottom: 0.6rem;
      display: inline-block;
    }

    ${prefix}.image img:not(.img-with-empty-link){
      width: 100%;
    }
  `;
};
