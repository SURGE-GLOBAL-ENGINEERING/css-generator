export const getFullBleedImageCss = (themeId: string) => {
  return `
    .${themeId} .image-full-bleed{
      width: 100%;
      height:100%;
      vertical-align: middle;
    }

    .${themeId} .image-full-bleed img{
      width: 100%;
      height: auto;
      max-height:100%;
      object-fit:fill;
      vertical-align: middle;
    }

    .${themeId} .full-bleed{
      height: 100%;
      max-height:100%;
      position:relative;
    }
  `;
};
