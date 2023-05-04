export type ChapterType = 'uncategorized' | 'chapter' | 'custom' | 'half-title' | 'title' | 'toc' | 'endnotes'
| 'image'|  'about-author' | 'copyrights' | 'epigraph' | 'foreword' | 'introduction' | 'preface' | 'prologue'
 | 'epilogue' | 'afterword' | 'acknowledgments' | 'also-by' | 'dedication' | 'blurbs' | 'volume' | 'part';

export enum HeaderFontStyle {
  regular = "regular",
  bold = "bold",
  italic = "italic",
  underlined = "underlined",
  smallcaps = "small-caps",
}
export type ImagePlacement =
  | "above-chapter-no"
  | "above-chapter-title"
  | "below-chapter-title"
  | "below-subtitle"
  | "background-image";

export type Alignment = "left" | "center" | "right";

export type PrintExtent = "margins" | "full-bleed";

export type Colored = "all" | "print" | "ebook" | "none";

export type HeaderTextColor = "default" | "light";

export type BookTitleFontMap = "chapterTitle" | "chapterSubtitle" | "chapterNumber";
export type SceneBreakShowSetting = "break-with-image" | "break-without-image" | "no-break";

export interface PrintExtraProps {
  textTransform: "capitalize" | "uppercase" | "lowercase";
  fontVariant: "superscript" | "subscript" | "small-caps" | "normal"
  fontWeight: number;
  borderTop: number | string;
  borderBottom: number | string;
  borderColor: string;
  borderStyle: "dashed" | "dotted" | "solid"
  color: string;

  paddingTop: number | string; // ! provide with the em value
  paddingBottom: number | string;

  fontSize: number | string;
  fontFamily: string;
  lineHeight: number | string;
  imageSrc: string;
  width: number | string;
}

export interface HeaderExtras {
  print: Partial<PrintExtraProps>,
  digital: Record<string, string | number>
}

export type HeaderImage = {
  url: string;
  width: number;
  placement: ImagePlacement;
  alignment: Alignment;
  printExtent: PrintExtent;
  opacity: number;
  colored: Colored;
  headerTextColor: HeaderTextColor;
};

export type HeaderElement = {
  font: string;
  size: number;
  fontSizeOffset?: number;
  style: HeaderFontStyle[];
  align: Alignment;
  width: number;
  extras?: Record<string, string | number>;
  printExtras?: Partial<PrintExtraProps>;
};

export type BookTitleMeta = {
  fontMap?: BookTitleFontMap;
  extras?: Record<string, string | number>;
  printExtras?: Partial<PrintExtraProps>;
}

export type BookTitlePage = {
  title?: BookTitleMeta;
  subtitle?: BookTitleMeta;
  author?: BookTitleMeta;
  publisher?: BookTitleMeta;
}

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

export type LayoutPriority =
  | "WIDOWS_AND_ORPHANS"
  | "BALANCED_PAGE_SPREAD"
  | "BEST_OF_BOTH";

export type FirstParagraph = {
  indent: 0 | 1;
  uppercaseFourWords: boolean;
  dropcap: boolean;
};

export type Paragraph = {
  indent: 0 | 1;
  paragraphSpacing: number;
  hyphens: boolean;
  justify: boolean;
};

export type ThemeHeaderPropsType = "chapterNo" | "chapterTitle" | "chapterSubtitle" | "image" | "header" | "footer";

export type TrimUnits = "in" | "mm"

export type ThemeStyleProps = {
  individualChapterImage: boolean;
  image: HeaderImage;
  chapterNo: HeaderElement;
  chapterTitle: HeaderElement;
  chapterSubtitle: HeaderElement;
  titleCard: {
    chapterNumber: boolean;
    title: boolean;
    subtitle: boolean;
    image: boolean;
  };
  chapterNumbering: ChapterNumbering;
  titleCardExtras?: HeaderExtras;

  header: {
    font: string;
    size: number;
  };
  footer: {
    font: string;
    size: number;
  };

  printBaseFont: string;
  baseFontSize: number;

  trim: {
    unit?: TrimUnits;
    height: number;
    width: number;
    isLargeTrim?: boolean;
  };
  layout: PrintLayout;
  firstParagraph: FirstParagraph;
  beginFirstSentence: BeginFirstSentence;
  paragraph: Paragraph;
  margin: {
    bottom: number;
    top: number;
    outer: number;
    inner: number;
  };
  dynamicPageBreaks: {
    breakSubheadings: boolean;
    breakOrnamentalBreaks: boolean;
  };
  layoutPriority: LayoutPriority;

  ornamentalBreakImage: string;
  ornamentalBreakWidth: number;
  sceneBreakShowSetting: SceneBreakShowSetting;

  notesMode: NotesMode;
  ePubNotesMode: EpubNotesMode;
  bookTitlePage?: BookTitlePage;
  chapterOverrides?: Record<ChapterType, Record<ThemeHeaderPropsType, any>>
};

export type ThemeMeta = {
  _id: string;
  name: string;
  css: string;
  isPredefinedTheme: boolean;
  fonts: string[];
  isFavourite: boolean;
};

export type Theme = ThemeMeta & { properties: ThemeStyleProps };

export interface HeaderFonts {
  chapterNumberFont: string;
  chapterSubtitleFont: string;
  chapterTitleFont: string;
}