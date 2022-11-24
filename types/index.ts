export type FontStyle =
  | "normal"
  | "bold"
  | "italic"
  | "bold-italic"
  | "underlined"
  | "small-caps";

export type ImagePlacement =
  | "above-chapter-no"
  | "above-chapter-title"
  | "below-chapter-title"
  | "below-subtitle";

export type ImageLayout = "no-image" | "background-image" | "image-element";

export type Alignment = "left" | "center" | "right";

export type PrintExtent = "margins" | "full-bleed";

export type ImageProps = {
  chapterId: string;
  url: string;
  background: boolean;
  width?: number;
  placement?: ImagePlacement;
  alignment?: Alignment;
  printExtent?: PrintExtent;
  opacity?: number;
};

export type ThemeStyleProps = {
  layout: ImageLayout;
  image: ImageProps;
  individualChapterImage: boolean;
  textLight?: string;
  chapterNo: {
    font: string;
    size: number;
    style: FontStyle;
    align: Alignment;
    width: number;
  };
  chapterTitle: {
    font: string;
    style: FontStyle;
    size: number;
    align: Alignment;
    width: number;
  };
  chapterSubtitle: {
    font: string;
    style: FontStyle;
    size: number;
    align: Alignment;
    width: number;
  };
  header: {
    font: string;
    size: number;
  };
  footer: {
    font: string;
    size: number;
  };
};
