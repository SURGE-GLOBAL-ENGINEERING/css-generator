
import { ImageCaptionLayout } from "../types"

function getCaptionStyles(style: ImageCaptionLayout) {
  let captionCss = ``
  switch (style) {
    case ("center"):
      captionCss = `
        text-align: center;
      `;
      break;
    case ("center-italized"):
      captionCss = `
        text-align: center;
        font-style: italic;
      `;
      break;
    case ("left-line-above"):
      captionCss = `
        border-top: 1px solid;
        padding-top: .25em;
      `;
      break;
    case ("left-line-preceding"):
      captionCss = `
        border-left: 2px solid;
        padding-left: .5em;
      `;
      break;
    default:
      captionCss = `
        text-align: left;
      `;
  }
  return captionCss;
}

export { getCaptionStyles };