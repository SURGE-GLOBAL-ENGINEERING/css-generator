export const getFullPageImageCss = (prefix: string) => {
  return `
    ${prefix}.image-full{
      width: 100%;
      height:auto;
      vertical-align: middle;
    }

    ${prefix}.image-full img{
      width: 100%;
      height: auto;
      max-height:100%;
      object-fit:contain;
      vertical-align: middle;
    }

    ${prefix}.fullpage-image{
      height: 100%;
      max-height:100%;
      position:relative;
    }
  `
}