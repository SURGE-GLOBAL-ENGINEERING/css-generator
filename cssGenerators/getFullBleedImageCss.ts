export const getFullBleedImageCss = (prefix: string) => {
  return `
    ${prefix}.image-full-bleed{
      width: 100%;
      height:100%;
      vertical-align: middle;
    }

    ${prefix}.image-full-bleed img{
      width: 100%;
      height: auto;
      max-height:100%;
      object-fit:fill;
      vertical-align: middle;
    }

    ${prefix}.full-bleed{
      height: 100%;
      max-height:100%;
      position:relative;
    }
  `;
};
