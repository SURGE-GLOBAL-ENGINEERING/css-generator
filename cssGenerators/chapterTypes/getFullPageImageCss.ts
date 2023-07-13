export const getFullPageImageCss = (prefixRule: string) => {
  return `
    ${prefixRule}.image-full{
      width: 100%;
      height:auto;
      vertical-align: middle;
    }

    ${prefixRule}.image-full img{
      width: 100%;
      height: auto;
      max-height:100%;
      object-fit:contain;
      vertical-align: middle;
    }

    ${prefixRule}.fullpage-image{
      height: 100%;
      max-height:100%;
      position:relative;
    }
  `
}