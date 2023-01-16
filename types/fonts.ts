export type Font = {
  id: string,
  name: string,
  variants: FontVariant[],
  fontType?: string
}

export enum FontVariant {
  regular = "regular",
  bold = "bold",
  italic = "italic",
  boldItalic = "boldItalic"
}
