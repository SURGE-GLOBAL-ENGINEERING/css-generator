import { EpubPreviewerPrefix } from "helpers"

/**
 * Can contain previewer only styles
 */
export const getOrnamentalBreakCss = (ornamentalBreakWidth: number, prefix: string) => {
  return `
    ${prefix}.ornamental-break{
      text-align: center;
      display: block;
      width: 100%;
      padding: ${prefix === EpubPreviewerPrefix ? '1.2rem' : '0.8rem'} 0rem;
    }
    
    ${prefix}.ornamental-break img{
      width: ${ornamentalBreakWidth || 50}%;
    }
  `
}