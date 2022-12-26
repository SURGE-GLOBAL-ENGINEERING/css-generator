export const getFullPageImageCss = (themeId: string) => {
  return `
    .${themeId} .image-full{
      width: 100%;
      height:auto;
      vertical-align: middle;
    }

    .${themeId} .image-full img{
      width: 100%;
      height: auto;
      max-height:100%;
      object-fit:contain;
      vertical-align: middle;
    }

    .${themeId} .fullpage-image{
      height: 100%;
      max-height:100%;
      position:relative;
    }
  `
}