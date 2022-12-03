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
  | "below-subtitle"
  | "background-image";

export type Alignment = "left" | "center" | "right";

export type PrintExtent = "margins" | "full-bleed";

export type HeaderImage = {
  url?: string;
  width?: number;
  placement?: ImagePlacement;
  alignment?: Alignment;
  printExtent?: PrintExtent;
  opacity?: number;
};

export type ChapterNumbering =
  | "number"
  | "chapter+number"
  | "word"
  | "chapter+word";

export type PrintLayout =
  | "layout1"
  | "layout2"
  | "layout3"
  | "layout4"
  | "layout5"
  | "layout6"
  | "layout7"
  | "layout8";

export type BeginFirstSentence = "chapter" | "break";

export type NotesMode = "FOOTNOTE" | "END_OF_CHAPTER" | "END_OF_BOOK";

export type EpubNotesMode = "END_OF_CHAPTER" | "END_OF_BOOK";

export type LayoutPriority = "WIDOWS_AND_ORPHANS" | "BALANCED_PAGE_SPREAD" | "BEST_OF_BOTH";


export type ThemeStyleProps = {
  individualChapterImage: boolean;
  image: HeaderImage;
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
  /** ------------------------------------- */
  titleCard: {
    chapterNumber: boolean;
    title: boolean;
    subtitle: boolean;
    image: boolean;
  };
  chapterNumbering: ChapterNumbering;
  titleAlignment: Alignment;
  printBaseFont: string;
  trim: {
    height: number;
    width: number;
    isLargeTrim?: boolean;
  };
  layout: PrintLayout;
  firstParagraph: {
    indent: 0 | 1;
    uppercaseFourWords: boolean;
    dropcap: boolean;
  };
  beginFirstSentence: BeginFirstSentence;
  paragraph: {
    indent: 0 | 1;
    paragraphSpacing: number;
    hyphens: boolean;
    justify: boolean;
  };
  margin: {
    bottom: number;
    top: number;
    outer: number;
    inner: number;
  };
  baseFontSize: number;
  dynamicPageBreaks: {
    breakSubheadings: boolean;
    breakOrnamentalBreaks: boolean;
  };
  layoutPriority?: LayoutPriority
  ornamentalBreakImage: string;
  ornamentalBreakWidth: number;
  hideOrnamentalBreakImage?: boolean;
  notesMode: NotesMode;
  ePubNotesMode: EpubNotesMode;
};

export type ThemeProps = {
  _id: string;
  css: string;
  properties: ThemeStyleProps;
}
