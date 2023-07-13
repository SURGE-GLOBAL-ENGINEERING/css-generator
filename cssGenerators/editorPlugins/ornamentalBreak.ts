import { EpubPreviewerPrefix } from "../../helpers"

/**
 * Can contain previewer only styles
 */
export const getOrnamentalBreakCss = (ornamentalBreakWidth: number, prefixRule: string, isPreviewer: boolean) => {
  return `
    ${prefixRule}.ornamental-break{
      text-align: center;
      display: block;
      width: 100%;
      padding: ${isPreviewer ? '1.2rem' : '0.8rem'} 0rem;
    }
    
    ${prefixRule}.ornamental-break img{
      width: ${ornamentalBreakWidth || 50}%;
    }
  `
}