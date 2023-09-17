export const getFullBleedImageCss = (prefixRule: string) => {
  return `
    ${prefixRule}image-full-bleed{
      width: 100%;
      height:100%;
      vertical-align: middle;
    }

    ${prefixRule}.image-full-bleed img{
      width: 100%;
      height: auto;
      max-height:100%;
      object-fit:fill;
      vertical-align: middle;
    }

    ${prefixRule}.full-bleed{
      height: 100%;
      max-height:100%;
      position:relative;
    }
  `;
};
