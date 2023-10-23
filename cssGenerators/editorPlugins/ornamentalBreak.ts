import { EpubPreviewerPrefix } from "../../helpers"

/**
 * Can contain previewer only styles
 */
export const getOrnamentalBreakCss = (ornamentalBreakWidth: number, themeId: string, isPreviewer: boolean) => {
  return `
    .${themeId} .ornamental-break{
      text-align: center;
      display: block;
      width: 100%;
      padding: ${isPreviewer ? '1.2rem' : '0.8rem'} 0rem;
    }
    
    .${themeId} .ornamental-break img{
      width: ${ornamentalBreakWidth || 50}%;
    }
  `
}