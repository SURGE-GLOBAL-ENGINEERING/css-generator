export type Font = {
  id: string,
  name: string,
  variants: FontVariant[],
  fontType?: string,
  additionalInfo?: string,
  availableForPrint?: boolean,
  availableForDropCap?: boolean,
}

export enum FontVariant {
  regular = "regular",
  bold = "bold",
  italic = "italic",
  boldItalic = "boldItalic",
  weight_100 = "100",
  weight_200 = "200",
  weight_300 = "300",
  weight_500 = "500",
  weight_600 = "600",
  weight_700 = "700",
  weight_800 = "800",
  weight_900 = "900",
  italic_100 = "100italic",
  italic_200 = "200italic",
  italic_300 = "300italic",
  italic_500 = "500italic",
  italic_600 = "600italic",
  italic_700 = "700italic",
  italic_800 = "800italic",
  italic_900 = "900italic",
}

export type UsedFont = {
  id: string,
  variant: FontVariant,
  remoteSrc: string,
  localSrc: string
}