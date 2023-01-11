export enum FontStyle {
  regular = "regular",
  bold = "bold",
  italic = "italic",
  boldItalic = "boldItalic"
}

const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const getCssForFontStyles = (font: Font, baseUrl: string) => {
  let cssString = "\n";
  const extension = font.fontType ? font.fontType : "ttf";
  font.styles.map(style => {
    const fontFamilyName = `${font.id}-${capitalizeFirstLetter(style)}`;
    cssString += `@font-face{\n  font-family: ${fontFamilyName};\n  src: url("fonts/${fontFamilyName}.${extension}"), url("${baseUrl}/${fontFamilyName}.${extension}");\n  `;
    if(style === FontStyle.bold) cssString += "font-weight: bold;  "
    if(style === FontStyle.italic) cssString += "font-style: italic;  "
    if(style === FontStyle.boldItalic) cssString += "font-weight: bold;\n  font-style: italic;  "
    cssString += "\n}\n"
  })

  return cssString + `\.${font.id}{\n  font-family: ${font.id};\n}`;
}

export interface Font {
  id: string,
  name: string,
  styles: FontStyle[],
  fontType?: string
}

const fonts: Font[] = [
  {
    id: "Aldrich",
    name: "Aldrich",
    styles: [FontStyle.regular]
  },
  {
    id: "Alegreya",
    name: "Alegreya",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic]
  },
  {
    id: "AlegreyaSansSC",
    name: "Alegreya Sans SC",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic]
  },
  {
    id: "Allura",
    name: "Allura",
    styles: [FontStyle.regular]
  },
  {
    id: "Anton",
    name: "Anton",
    styles: [FontStyle.regular]
  },
  {
    id: "Audiowide",
    name: "Audiowide",
    styles: [FontStyle.regular]
  },
  {
    id: "Benne",
    name: "Benne",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic]
  },
  {
    id: "BigShouldersDisplay",
    name: "Big Shoulders Display",
    styles: [FontStyle.regular, FontStyle.bold]
  },
  {
    id: "BlackOpsOne",
    name: "BlackOpsOne",
    styles: [FontStyle.regular]
  },
  {
    id: "Cantarell",
    name: "Cantarell",
    styles: [FontStyle.regular]
  },
  {
    id: "Cardo",
    name: "Cardo",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic]
  },
  {
    id: "Cinzel",
    name: "Cinzel",
    styles: [FontStyle.regular]
  },
  {
    id: "CinzelDecorative",
    name: "Cinzel Decorative",
    styles: [FontStyle.regular, FontStyle.bold]
  },
  {
    id: "CourierPrime",
    name: "Courier Prime",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic]
  },
  {
    id: "CrimsonPro",
    name: "Crimson Pro",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic]
  },
  {
    id: "Crushed",
    name: "Crushed",
    styles: [FontStyle.regular]
  },
  {
    id: "DelaGothicOne",
    name: "Dela Gothic One",
    styles: [FontStyle.regular]
  },
  {
    id: "Delius",
    name: "Delius",
    styles: [FontStyle.regular]
  },
  {
    id: "EBGaramond",
    name: "EB Garamond",
    styles: [FontStyle.regular, FontStyle.italic]
  },
  {
    id: "EmilysCandy",
    name: "Emilys Candy",
    styles: [FontStyle.regular]
  },
  {
    id: "EuphoriaScript",
    name: "Euphoria Script",
    styles: [FontStyle.regular]
  },
  {
    id: "Forum",
    name: "Forum",
    styles: [FontStyle.regular]
  },
  {
    id: "GreatVibes",
    name: "Great Vibes",
    styles: [FontStyle.regular]
  },
  {
    id: "HelveticaNeue",
    name: "Helvetica Neue",
    styles: [FontStyle.regular]
  },
  {
    id: "LibreBaskerville",
    name: "Libre Baskerville",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic],
    fontType: "otf"
  },
  {
    id: "LibreCaslon",
    name: "Libre Caslon",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic],
    fontType: "otf"
  },
  {
    id: "LifeSavers",
    name: "Life Savers",
    styles: [FontStyle.regular, FontStyle.bold]
  }, 
  {
    id: "Lora",
    name: "Lora",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic]
  },
  {
    id: "Marcellus",
    name: "Marcellus",
    styles: [FontStyle.regular]
  },
  {
    id: "Megrim",
    name: "Megrim",
    styles: [FontStyle.regular]
  },
  {
    id: "Montserrat",
    name: "Montserrat",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic]
  },
  {
    id: "OldStandardTT",
    name: "Old Standard",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic]
  },
  {
    id: "OpenDyslexic",
    name: "OpenDyslexic",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic],
  },
  {
    id: "OpenSans",
    name: "Open Sans",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic],
  },
  {
    id: "OpenSansLT",
    name: "Large Print Open Sans (no italics)",
    styles: [FontStyle.regular, FontStyle.bold],
  },
  {
    id: "Oswald",
    name: "Oswald",
    styles: [FontStyle.regular]
  },
  {
    id: "Poppins",
    name: "Poppins",
    styles: [FontStyle.regular]
  }, 
  {
    id: "PressStart2P",
    name: "Press Start 2P",
    styles: [FontStyle.regular]
  },
  {
    id: "PTSans",
    name: "PT Sans",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic],
  },
  {
    id: "Quantico",
    name: "Quantico",
    styles: [FontStyle.regular]
  },
  {
    id: "Raleway",
    name: "Raleway",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic]
  },
  {
    id: "Roboto",
    name: "Roboto",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic]
  }, 
  {
    id: "RobotoCondensed",
    name: "Roboto Condensed",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic]
  }, 
  {
    id: "RobotoLight",
    name: "Roboto Light",
    styles: [FontStyle.regular, FontStyle.italic]
  }, 
  {
    id: "RockSalt",
    name: "Rock Salt",
    styles: [FontStyle.regular]
  },
  {
    id: "Rosario",
    name: "Rosario",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic],
  },
  {
    id: "Selima",
    name: "Selima",
    styles: [FontStyle.regular]
  },
  {
    id: "SixCaps",
    name: "Six Caps",
    styles: [FontStyle.regular]
  },
  {
    id: "SourceSansPro",
    name: "Source Sans Pro",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic],
    fontType: "otf"
  },
  {
    id: "Spartan",
    name: "Spartan",
    styles: [FontStyle.regular]
  },
  {
    id: "SpecialElite",
    name: "Special Elite",
    styles: [FontStyle.regular]
  },
  {
    id: "Spectral",
    name: "Spectral",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic],
  },
  {
    id: "Syncopate",
    name: "Syncopate",
    styles: [FontStyle.regular, FontStyle.bold]
  },
  {
    id: "TheanoDidot",
    name: "TheanoDidot",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic],
  },
  {
    id: "VollkornSC",
    name: "Vollkorn SC",
    styles: [FontStyle.regular, FontStyle.bold]
  },
  {
    id: "Voltaire",
    name: "Voltaire",
    styles: [FontStyle.regular]
  },
  {
    id: "YoungSerif",
    name: "Young Serif",
    styles: [FontStyle.regular, FontStyle.bold, FontStyle.italic, FontStyle.boldItalic],
  },
]