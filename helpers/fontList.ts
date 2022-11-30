import { Font } from "../types";

export const commonFontCss = `
  @font-face {
    font-family: 'PT Sans';
    src: url(fonts/PTSans-Regular.ttf);
    src: url(https://atticus-content.s3.amazonaws.com/fonts/PTSans-Regular.ttf);
  }
  @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    src: url(fonts/PTSans-Italic.ttf);
    src: url(https://atticus-content.s3.amazonaws.com/fonts/PTSans-Italic.ttf);
  }
  @font-face {
    font-family: 'PT Sans';
    font-weight: bold;
    src: url(fonts/PTSans-Bold.ttf);
    src: url(https://atticus-content.s3.amazonaws.com/fonts/PTSans-Bold.ttf);
  }
  @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: bold;
    src: url(fonts/PTSans-BoldItalic.ttf);
    src: url(https://atticus-content.s3.amazonaws.com/fonts/PTSans-BoldItalic.ttf);
  }
  @font-face {
    font-family: 'Courier Prime';
    src: url(fonts/CourierPrime-Regular.ttf);
    src: url(https://atticus-content.s3.amazonaws.com/fonts/CourierPrime-Regular.ttf);
  }
  @font-face {
    font-family: 'Courier Prime';
    font-style: italic;
    src: url(fonts/CourierPrime-Italic.ttf);
    src: url(https://atticus-content.s3.amazonaws.com/fonts/CourierPrime-Italic.ttf);
  }
  @font-face {
    font-family: 'Courier Prime';
    font-weight: bold;
    src: url(fonts/CourierPrime-Bold.ttf);
    src: url(https://atticus-content.s3.amazonaws.com/fonts/CourierPrime-Bold.ttf);
  }
  @font-face {
    font-family: 'Courier Prime';
    font-style: italic;
    font-weight: bold;
    src: url(fonts/CourierPrime-BoldItalic.ttf);
    src: url(https://atticus-content.s3.amazonaws.com/fonts/CourierPrime-BoldItalic.ttf);
  }
`;

const atticusFonts: Font[] = [
  {
    _id: "RockSalt",
    css: '@font-face{\n  font-family: RockSalt;\n  src: url("fonts/RockSalt.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/RockSalt-Regular.ttf");\n}\n.RockSalt{\n  font-family: RockSalt;\n}',
    name: "Rock Salt",
  },
  {
    _id: "Cantarell",
    css: '@font-face{\n  font-family: Cantarell;\n  src: url("fonts/Cantarell.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Cantarell-Regular.ttf");\n}\n.Cantarell{\n  font-family: Cantarell;\n}',
    name: "Cantarell",
  },
  {
    _id: "RobotoCondensed",
    css: '@font-face{\n  font-family: RobotoCondensed;\n  src: url("fonts/RobotoCondensed.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/RobotoCondensed-Regular.ttf");\n}\n.RobotoCondensed{\n  font-family: RobotoCondensed;\n}',
    name: "Roboto Condensed",
  },
  {
    _id: "RobotoLight",
    css: '@font-face{\n  font-family: RobotoLight;\n  src: url("fonts/RobotoLight.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/RobotoLight.ttf");\n}\n\n@font-face{\n  font-family: RobotoLight;\n  font-style: italic;\n  src: url("fonts/RobotoLight-Italic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/RobotoLight-Italic.ttf");\n}\n.RobotoLight{\n  font-family: RobotoLight;\n}',
    name: "Roboto Light",
  },
  {
    _id: "Poppins",
    css: '@font-face{\n  font-family: Poppins;\n  src: url("fonts/Poppins.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Poppins-Regular.ttf");\n}\n.Poppins{\n  font-family: Poppins;\n}',
    name: "Poppins",
  },
  {
    _id: "LifeSavers",
    css: '@font-face{\n  font-family: LifeSavers;\n  src: url("fonts/LifeSavers.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/LifeSavers.ttf");\n}\n.LifeSavers{\n  font-family: LifeSavers;\n}',
    name: "Life Savers",
  },
  {
    _id: "Delius",
    css: '@font-face{\n  font-family: Delius;\n  src: url("fonts/Delius.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Delius-Regular.ttf");\n}\n.Delius{\n  font-family: Delius;\n}',
    name: "Delius",
  },
  {
    _id: "Crushed",
    css: '@font-face{\n  font-family: Crushed;\n  src: url("fonts/Crushed.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Crushed-Regular.ttf");\n}\n.Crushed{\n  font-family: Crushed;\n}',
    name: "Crushed",
  },
  {
    _id: "HelveticaNeue",
    css: '@font-face{\n  font-family: HelveticaNeue;\n  src: url("fonts/HelveticaNeue.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/HelveticaNeue-Regular.ttf");\n}\n.HelveticaNeue{\n  font-family: HelveticaNeue;\n}',
    name: "Helvetica Neue",
  },
  {
    _id: "Selima",
    css: '@font-face{\n  font-family: Selima;\n  src: url("fonts/Selima.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Selima-Regular.ttf");\n}\n.Selima{\n  font-family: Selima;\n}',
    name: "Selima",
  },
  {
    _id: "Spartan",
    css: '@font-face{\n  font-family: Spartan;\n  src: url("fonts/Spartan.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Spartan-Regular.ttf");\n}\n.Spartan{\n  font-family: Spartan;\n}',
    name: "Spartan",
  },
  {
    _id: "GreatVibes",
    css: '@font-face{\n  font-family: GreatVibes;\n  src: url("fonts/GreatVibes.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/GreatVibes-Regular.ttf");\n}\n.GreatVibes{\n  font-family: GreatVibes;\n}',
    name: "Great Vibes",
  },
  {
    _id: "Cinzel",
    css: '@font-face{\n  font-family: Cinzel;\n  src: url("fonts/Cinzel.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Cinzel-Regular.ttf");\n}\n.Cinzel{\n  font-family: Cinzel;\n}',
    name: "Cinzel",
  },
  {
    _id: "CinzelDecorative",
    css: '@font-face{\n  font-family: CinzelDecorative;\n  src: url("fonts/CinzelDecorative.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/CinzelDecorative-Regular.ttf");\n}\n.CinzelDecorative{\n  font-family: CinzelDecorative;\n}',
    name: "Cinzel Decorative",
  },
  {
    _id: "AlegreyaSansSC",
    css: '@font-face{\n  font-family: AlegreyaSansSC;\n  src: url("fonts/AlegreyaSansSC.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/AlegreyaSansSC-Regular.ttf");\n}\n.AlegreyaSansSC{\n  font-family: AlegreyaSansSC;\n}',
    name: "Alegreya Sans SC",
  },
  {
    _id: "Alegreya",
    css: '@font-face{\n  font-family: Alegreya;\n  src: url("fonts/Alegreya.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Alegreya-Regular.ttf");\n}\n.Alegreya{\n  font-family: Alegreya;\n}',
    name: "Alegreya",
  },
  {
    _id: "Marcellus",
    css: '@font-face{\n  font-family: Marcellus;\n  src: url("fonts/Marcellus.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Marcellus-Regular.ttf");\n}\n.MarcellusBold{\n  font-family: MarcellusBold;\n}',
    name: "Marcellus",
  },
  {
    _id: "OpenDyslexic",
    css: '@font-face{\n  font-family: OpenDyslexic;\n  src: url("fonts/OpenDyslexic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/OpenDyslexic-Regular.ttf");\n}\n.OpenDyslexic{\n  font-family: OpenDyslexic;\n}',
    name: "OpenDyslexic",
  },
  {
    _id: "EuphoriaScript",
    css: '@font-face{\n  font-family: EuphoriaScript;\n  src: url("fonts/EuphoriaScript.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/EuphoriaScript-Regular.ttf");\n}\n.EuphoriaScript{\n  font-family: EuphoriaScript;\n}',
    name: "Euphoria Script",
  },
  {
    _id: "VollkornSC",
    css: '@font-face{\n  font-family: VollkornSC;\n  src: url("fonts/VollkornSC-Regular.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/VollkornSC-Regular.ttf");\n}\n.VollkornSC{\n  font-family: VollkornSC;\n}',
    name: "Vollkorn SC",
  },
  {
    _id: "Megrim",
    css: '@font-face{\n  font-family: Megrim;\n  src: url("fonts/Megrim.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Megrim-Regular.ttf");\n}\n.Megrim{\n  font-family: Megrim;\n}',
    name: "Megrim",
  },
  {
    _id: "Quantico",
    css: '@font-face{\n  font-family: Quantico;\n  src: url("fonts/Quantico.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Quantico-Regular.ttf");\n}\n.Quantico{\n  font-family: Quantico;\n}',
    name: "Quantico",
  },
  {
    _id: "EmilysCandy",
    css: '@font-face{\n  font-family: EmilysCandy;\n  src: url("fonts/EmilysCandy.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/EmilysCandy-Regular.ttf");\n}\n.EmilysCandy{\n  font-family: EmilysCandy;\n}',
    name: "Emilys Candy",
  },
  {
    _id: "Raleway",
    css: '@font-face{\n  font-family: Raleway;\n  src: url("fonts/Raleway.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Raleway-Regular.ttf");\n}\n.Raleway{\n  font-family: Raleway;\n}',
    name: "Raleway",
  },
  {
    _id: "PressStart2P",
    css: '@font-face{\n  font-family: PressStart2P;\n  src: url("fonts/PressStart2P.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/PressStart2P-Regular.ttf");\n}\n.PressStart2P{\n  font-family: PressStart2P;\n}',
    name: "Press Start 2P",
  },
  {
    _id: "Anton",
    css: '@font-face{\n  font-family: Anton;\n  src: url("fonts/Anton.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Anton-Regular.ttf");\n}\n.Anton{\n  font-family: Anton;\n}',
    name: "Anton",
  },
  {
    _id: "Audiowide",
    css: '@font-face{\n  font-family: Audiowide;\n  src: url("fonts/Audiowide.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Audiowide-Regular.ttf");\n}\n.Audiowide{\n  font-family: Audiowide;\n}',
    name: "Audiowide",
  },
  {
    _id: "Aldrich",
    css: '@font-face{\n  font-family: Aldrich;\n  src: url("fonts/Aldrich.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Aldrich-Regular.ttf");\n}\n.Aldrich{\n  font-family: Aldrich;\n}',
    name: "Aldrich",
  },
  {
    _id: "Oswald",
    css: '@font-face{\n  font-family: Oswald;\n  src: url("fonts/Oswald.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Oswald-Regular.ttf");\n}\n.Oswald{\n  font-family: Oswald;\n}',
    name: "Oswald",
  },
  {
    _id: "BigShouldersDisplay",
    css: '@font-face{\n  font-family: BigShouldersDisplay;\n  src: url("fonts/BigShouldersDisplay.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/BigShouldersDisplay-Regular.ttf");\n}\n.BigShouldersDisplay{\n  font-family: BigShouldersDisplay;\n}',
    name: "Big Shoulders Display",
  },
  {
    _id: "Montserrat",
    css: '@font-face{\n  font-family: Montserrat;\n  src: url("fonts/Montserrat.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Montserrat-Regular.ttf");\n}\n.Montserrat{\n  font-family: Montserrat;\n}',
    name: "Montserrat",
  },
  {
    _id: "Forum",
    css: '@font-face{\n  font-family: Forum;\n  src: url("fonts/Forum.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Forum-Regular.ttf");\n}\n.Forum{\n  font-family: Forum;\n}',
    name: "Forum",
  },
  {
    _id: "SpecialElite",
    css: '@font-face{\n  font-family: SpecialElite;\n  src: url("fonts/SpecialElite.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/SpecialElite-Regular.ttf");\n}\n.SpecialElite{\n  font-family: SpecialElite;\n}',
    name: "Special Elite",
  },
  {
    _id: "Syncopate",
    css: '@font-face{\n  font-family: Syncopate;\n  src: url("fonts/Syncopate.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Syncopate-Regular.ttf");\n}\n.Syncopate{\n  font-family: Syncopate;\n}',
    name: "Syncopate",
  },
  {
    _id: "Voltaire",
    css: '@font-face{\n  font-family: Voltaire;\n  src: url("fonts/Voltaire.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Voltaire-Regular.ttf");\n}\n.Voltaire{\n  font-family: Voltaire;\n}',
    name: "Voltaire",
  },
  {
    _id: "SixCaps",
    css: '@font-face{\n  font-family: SixCaps;\n  src: url("fonts/SixCaps.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/SixCaps-Regular.ttf");\n}\n.SixCaps{\n  font-family: SixCaps;\n}',
    name: "Six Caps",
  },
  {
    _id: "OldStandardTT",
    css: '@font-face{\n  font-family: OldStandardTT;\n  src: url("fonts/OldStandardTT-Regular.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/OldStandardTT-Regular.ttf");\n}\n.OldStandardTT{\n  font-family: OldStandardTT;\n}',
    name: "Old Standard",
  },
  {
    _id: "Benne",
    css: '@font-face{\n  font-family: Benne;\n  src: url("fonts/Benne-Regular.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Benne-Regular.ttf");\n}\n\n@font-face{\n  font-family: Benne;\n  font-weight: bold;\n  src: url("fonts/Benne-Bold.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Benne-Bold.ttf");\n}\n\n@font-face{\n  font-family: Benne;\n  font-style: italic;\n  src: url("fonts/Benne-Italic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Benne-Italic.ttf");\n}\n\n@font-face{\n  font-family: Benne;\n  font-weight: bold;\n  font-style: italic;\n  src: url("fonts/Benne-BoldItalic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Benne-BoldItalic.ttf");\n}\n.Benne{\n  font-family: Benne;\n}',
    name: "Benne",
    before: 0.35,
    after: -1.25,
  },
  {
    _id: "Cardo",
    css: '@font-face{\n  font-family: Cardo;\n  font-weight: normal;\n  src: url("fonts/Cardo104s.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Cardo104s.ttf");\n}\n\n@font-face{\n  font-family: Cardo;\n  font-weight: bold;\n  src: url("fonts/Cardob101.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Cardob101.ttf");\n}\n\n@font-face{\n  font-family: Cardo;\n  font-style: italic;\n  src: url("fonts/Cardoi99.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Cardoi99.ttf");\n}\n\n@font-face{\n  font-family: Cardo;\n  font-style: italic;\n  font-weight: bold;\n  src: url("fonts/Cardo-BoldItalic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Cardo-BoldItalic.ttf");\n}\n.Cardo{\n  font-family: Cardo;\n}',
    name: "Cardo",
    before: 0,
    after: -1,
  },
  {
    _id: "CrimsonPro",
    css: '@font-face{\n  font-family: CrimsonPro;\n  font-weight: normal;\n  src: url("fonts/CrimsonPro-Regular.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/CrimsonPro-Regular.ttf");\n}\n\n@font-face{\n  font-family: CrimsonPro;\n  font-weight: bold;\n  src: url("fonts/CrimsonPro-Bold.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/CrimsonPro-Bold.ttf");\n}\n\n@font-face{\n  font-family: CrimsonPro;\n  font-style: italic;\n  src: url("fonts/CrimsonPro-Italic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/CrimsonPro-Italic.ttf");\n}\n\n@font-face{\n  font-family: CrimsonPro;\n  font-weight: bold;\n  font-style: italic;\n  src: url("fonts/CrimsonPro-BoldItalic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/CrimsonPro-BoldItalic.ttf");\n}\n.CrimsonPro{\n  font-family: CrimsonPro;\n}',
    name: "Crimson Pro",
    before: -0.25,
    after: -0.75,
  },
  {
    _id: "EBGaramond",
    css: '@font-face{\n  font-family: EBGaramond;\n  font-weight: 300;\n  src: url("fonts/EBGaramond12-Regular.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/EBGaramond12-Regular.ttf");\n}\n\n@font-face{\n  font-family: EBGaramond;\n  font-weight: 300;\n  font-style: italic;\n  src: url("fonts/EBGaramond12-Italic");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/EBGaramond12-Italic");\n}\n.EBGaramond{\n  font-family: EBGaramond;\n}',
    name: "EB Garamond",
    before: 0.15,
    after: -0.5,
  },
  {
    _id: "LibreBaskerville",
    css: '@font-face{\n  font-family: LibreBaskerville;\n  font-weight: normal;\n  src: url("fonts/LibreBaskerville-Regular.otf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/LibreBaskerville-Regular.otf");\n}\n\n@font-face{\n  font-family: LibreBaskerville;\n  font-weight: bold;\n  src: url("fonts/LibreBaskerville-Bold.otf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/LibreBaskerville-Bold.otf");\n}\n\n@font-face{\n  font-family: LibreBaskerville;\n  font-style: italic;\n  src: url("fonts/LibreBaskerville-Italic.otf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/LibreBaskerville-Italic.otf");\n}\n\n@font-face{\n  font-family: LibreBaskerville;\n  font-weight: bold;\n  font-style: italic;\n  src: url("fonts/LibreBaskerville-BoldItalic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/LibreBaskerville-BoldItalic.ttf");\n}\n.LibreBaskerville{\n  font-family: LibreBaskerville;\n}',
    name: "Libre Baskerville",
    before: 0,
    after: -1,
  },
  {
    _id: "LibreCaslon",
    css: '@font-face{\n  font-family: LibreCaslon;\n  font-weight: normal;\n  src: url("fonts/LibreCaslon-Regular.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/LibreCaslon-Regular.ttf");\n}\n\n@font-face{\n  font-family: LibreCaslon;\n  font-weight: bold;\n  src: url("fonts/LibreCaslon-Bold.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/LibreCaslon-Bold.ttf");\n}\n\n@font-face{\n  font-family: LibreCaslon;\n  font-style: italic;\n  src: url("fonts/LibreCaslon-Italic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/LibreCaslon-Italic.ttf");\n}\n\n@font-face{\n  font-family: LibreCaslon;\n  font-weight: bold;\n  font-style: italic;\n  src: url("fonts/LibreCaslon-BoldItalic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/LibreCaslon-BoldItalic.ttf");\n}\n.LibreCaslon{\n  font-family: LibreCaslon;\n}',
    name: "Libre Caslon",
    before: -0.125,
    after: -1,
  },
  {
    _id: "Lora",
    css: '@font-face{\n  font-family: Lora;\n  font-weight: normal;\n  src: url("fonts/Lora-Regular.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Lora-Regular.ttf");\n}\n\n@font-face{\n  font-family: Lora;\n  font-weight: bold;\n  src: url("fonts/Lora-Bold.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Lora-Bold.ttf");\n}\n\n@font-face{\n  font-family: Lora;\n  font-style: italic;\n  src: url("fonts/Lora-Italic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Lora-Italic.ttf");\n}\n\n@font-face{\n  font-family: Lora;\n  font-weight: bold;\n  font-style: italic;\n  src: url("fonts/Lora-BoldItalic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Lora-BoldItalic.ttf");\n}\n.Lora{\n  font-family: Lora;\n}',
    name: "Lora",
    before: -0.125,
    after: -0.75,
  },
  {
    _id: "OpenDyslexic",
    css: '@font-face{\n  font-family: OpenDyslexic;\n  font-weight: normal;\n  src: url("fonts/OpenDyslexic-Regular.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/OpenDyslexic-Regular.ttf");\n}\n\n@font-face{\n  font-family: OpenDyslexic;\n  font-weight: bold;\n  src: url("fonts/OpenDyslexic-Bold.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/OpenDyslexic-Bold.ttf");\n}\n\n@font-face{\n  font-family: OpenDyslexic;\n  font-style: italic;\n  src: url("fonts/OpenDyslexic-Italic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/OpenDyslexic-Italic.ttf");\n}\n\n@font-face{\n  font-family: OpenDyslexic;\n  font-style: italic;\n  font-weight: bold;\n  src: url("fonts/OpenDyslexic-BoldItalic.otf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/OpenDyslexic-BoldItalic.otf");\n}\n.OpenDyslexic{\n  font-family: OpenDyslexic;\n}',
    name: "OpenDyslexic",
    before: -0.25,
    after: -0.75,
  },
  {
    _id: "Rosario",
    css: '@font-face{\n  font-family: Rosario;\n  font-weight: normal;\n  src: url("fonts/Rosario-Regular.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Rosario-Regular.ttf");\n}\n\n@font-face{\n  font-family: Rosario;\n  font-weight: bold;\n  src: url("fonts/Rosario-Bold.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Rosario-Bold.ttf");\n}\n\n@font-face{\n  font-family: Rosario;\n  font-style: italic;\n  src: url("fonts/Rosario-Italic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Rosario-Italic.ttf");\n}\n\n@font-face{\n  font-family: Rosario;\n  font-style: italic;\n  font-weight: bold;\n  src: url("fonts/Rosario-BoldItalic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Rosario-BoldItalic.ttf");\n}\n.Rosario{\n  font-family: Rosario;\n}',
    name: "Rosario",
    before: -0.25,
    after: -0.75,
  },
  {
    _id: "Spectral",
    css: '@font-face{\n  font-family: Spectral;\n  font-weight: normal;\n  src: url("fonts/Spectral-Regular.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Spectral-Regular.ttf");\n}\n\n@font-face{\n  font-family: Spectral;\n  font-weight: bold;\n  src: url("fonts/Spectral-Bold.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Spectral-Bold.ttf");\n}\n\n@font-face{\n  font-family: Spectral;\n  font-style: italic;\n  src: url("fonts/Spectral-Italic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Spectral-Italic.ttf");\n}\n\n@font-face{\n  font-family: Spectral;\n  font-weight: bold;\n  font-style: italic;\n  src: url("fonts/Spectral-BoldItalic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/Spectral-BoldItalic.ttf");\n}\n.Spectral{\n  font-family: Spectral;\n}',
    name: "Spectral",
    before: -0.25,
    after: -0.75,
  },
  {
    _id: "TheanoDidot",
    css: '@font-face{\n  font-family: TheanoDidot;\n  src: url("fonts/TheanoDidot-Regular.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/TheanoDidot-Regular.ttf");\n}\n\n@font-face{\n  font-family: TheanoDidot;\n  font-weight: bold;\n  src: url("fonts/TheanoDidot-Bold.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/TheanoDidot-Bold.ttf");\n}\n\n@font-face{\n  font-family: TheanoDidot;\n  font-style: italic;\n  src: url("fonts/TheanoDidot-Italic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/TheanoDidot-Italic.ttf");\n}\n\n@font-face{\n  font-family: TheanoDidot;\n  font-weight: bold;\n  font-style: italic;\n  src: url("fonts/TheanoDidot-BoldItalic.ttf");\n  src: url("https://atticus-content.s3.amazonaws.com/fonts/TheanoDidot-BoldItalic.ttf");\n}\n.TheanoDidot{\n  font-family: TheanoDidot;\n}',
    name: "Theano Didot",
  },
  {
    _id: "YoungSerif",
    name: "Young Serif",
    css: `@font-face{
        font-family: YoungSerif;
        font-weight: normal;
        src: url("fonts/YoungSerif-Regular.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/YoungSerif-Regular.ttf");
      }
      
      @font-face{
        font-family: YoungSerif;
        font-weight: bold;
        src: url("fonts/YoungSerif-Bold.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/YoungSerif-Bold.ttf");
      }
      
      @font-face{
        font-family: YoungSerif;
        font-style: italic;
        src: url("fonts/YoungSerif-Italic.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/YoungSerif-Italic.ttf");
      }
  
      @font-face{
        font-family: YoungSerif;
        font-weight: bold;
        font-style: italic;
        src: url("fonts/YoungSerif-BoldItalic.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/YoungSerif-BoldItalic.ttf");
      }
      
      .YoungSerif{ 
        font-family: YoungSerif;
      }`,
    before: -0.1,
    after: -0.75,
  },
  {
    _id: "PTSans",
    name: "PT Sans",
    css: `@font-face{
        font-family: PTSans;
        font-weight: normal;
        src: url("fonts/PTSans-Regular.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/PTSans-Regular.ttf");
      }
      
      @font-face{
        font-family: PTSans;
        font-weight: bold;
        src: url("fonts/PTSans-Bold.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/PTSans-Bold.ttf");
      }
      
      @font-face{
        font-family: PTSans;
        font-style: italic;
        src: url("fonts/PTSans-Italic.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/PTSans-Italic.ttf");
      }
  
      @font-face{
        font-family: PTSans;
        font-style: italic;
        font-weight: bold;
        src: url("fonts/PTSans-BoldItalic.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/PTSans-BoldItalic.ttf");
      }`,
    before: -0.25,
    after: -0.75,
  },
  {
    _id: "SourceSansPro",
    name: "Source Sans Pro",
    css: `@font-face{
        font-family: SourceSansPro;
        font-weight: normal;
        src: url("fonts/SourceSansPro-Regular.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/SourceSansPro-Regular.ttf");
      }
      
      @font-face{
        font-family: SourceSansPro;
        font-weight: bold;
        src: url("fonts/SourceSansPro-Bold.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/SourceSansPro-Bold.ttf");
      }
      
      @font-face{
        font-family: SourceSansPro;
        font-style: italic;
        src: url("fonts/SourceSansPro-Italic.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/SourceSansPro-Italic.ttf");
      }
      
      @font-face{
        font-family: SourceSansPro;
        font-style: italic;
        font-weight: bold;
        src: url("fonts/SourceSansPro-BoldItalic.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/SourceSansPro-BoldItalic.ttf");
      }`,
    before: -0.125,
    after: -0.75,
  },
  {
    _id: "OpenSans",
    name: "Open Sans",
    css: `@font-face{
        font-family: OpenSans;
        src: url("fonts/OpenSans-Regular.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/OpenSans-Regular.ttf");
      }
  
      @font-face{
        font-family: OpenSans;
        font-weight: bold;
        src: url("fonts/OpenSans-Bold.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/OpenSans-Bold.ttf");
      }
      
      @font-face{
        font-family: OpenSans;
        font-style: italic;
        src: url("fonts/OpenSans-Italic.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/OpenSans-Italic.ttf");
      }
  
      @font-face{
        font-family: OpenSans;
        font-weight: bold;
        font-style: italic;
        src: url("fonts/OpenSans-BoldItalic.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/OpenSans-BoldItalic.ttf");
      }
      
      .OpenSans{ 
        font-family: OpenSans;
      }`,
    before: -0.125,
    after: -0.75,
  },
  {
    _id: "OpenSansLT",
    name: "Large Print Open Sans (no italics)",
    css: `@font-face{
        font-family: OpenSansLT;
        src: url("fonts/OpenSansLT-Regular.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/OpenSansLT-Regular.ttf");
      }
  
      @font-face{
        font-family: OpenSansLT;
        font-weight: bold;
        src: url("fonts/OpenSansLT-Bold.ttf");
        src: url("https://atticus-content.s3.amazonaws.com/fonts/OpenSansLT-Bold.ttf");
      }`,
    before: -0.125,
    after: -0.75,
  },
];

export const getAtticusFonts = (): Font[] => {
  return atticusFonts.sort((a, b) => a.name.localeCompare(b.name));
}


