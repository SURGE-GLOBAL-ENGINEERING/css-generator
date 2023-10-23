export type Font = {
  id: string,
  name: string,
  variants: FontVariant[],
  fontType?: string,
  additionalInfo?: string,
  availableForPrint?: boolean
  availableForChapterHeaderOptions: boolean
}

export enum FontVariant {
  regular = "regular",
  bold = "bold",
  italic = "italic",
  boldItalic = "boldItalic"
}
