import { Font } from "../types";

export const commonFontCss = `
  @font-face {
    font-family: 'PT Sans';
    src: url(fonts/PTSans-Regular.ttf), url(https://atticus-content.s3.amazonaws.com/fonts/PTSans-Regular.ttf);
  }
  @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    src: url(fonts/PTSans-Italic.ttf), url(https://atticus-content.s3.amazonaws.com/fonts/PTSans-Italic.ttf);
  }
  @font-face {
    font-family: 'PT Sans';
    font-weight: bold;
    src: url(fonts/PTSans-Bold.ttf), url(https://atticus-content.s3.amazonaws.com/fonts/PTSans-Bold.ttf);
  }
  @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: bold;
    src: url(fonts/PTSans-BoldItalic.ttf), url(https://atticus-content.s3.amazonaws.com/fonts/PTSans-BoldItalic.ttf);
  }
  @font-face {
    font-family: 'Courier Prime';
    src: url(fonts/CourierPrime-Regular.ttf), url(https://atticus-content.s3.amazonaws.com/fonts/CourierPrime-Regular.ttf);
  }
  @font-face {
    font-family: 'Courier Prime';
    font-style: italic;
    src: url(fonts/CourierPrime-Italic.ttf), url(https://atticus-content.s3.amazonaws.com/fonts/CourierPrime-Italic.ttf);
  }
  @font-face {
    font-family: 'Courier Prime';
    font-weight: bold;
    src: url(fonts/CourierPrime-Bold.ttf), url(https://atticus-content.s3.amazonaws.com/fonts/CourierPrime-Bold.ttf);
  }
  @font-face {
    font-family: 'Courier Prime';
    font-style: italic;
    font-weight: bold;
    src: url(fonts/CourierPrime-BoldItalic.ttf), url(https://atticus-content.s3.amazonaws.com/fonts/CourierPrime-BoldItalic.ttf);
  }
`;

export const getAtticusFonts = (baseUrl: string): Font[] => {
  return [
    {
      _id: "RockSalt",
      css: `@font-face{\n  font-family: RockSalt;\n  src: url("fonts/RockSalt.ttf"), url("${baseUrl}/RockSalt-Regular.ttf");\n}\n.RockSalt{\n  font-family: RockSalt;\n}`,
      name: "Rock Salt",
    },
    {
      _id: "Cantarell",
      css: `@font-face{\n  font-family: Cantarell;\n  src: url("fonts/Cantarell.ttf"), url("${baseUrl}/Cantarell-Regular.ttf");\n}\n.Cantarell{\n  font-family: Cantarell;\n}`,
      name: "Cantarell",
    },
    {
      _id: "RobotoCondensed",
      css: `@font-face{\n  font-family: RobotoCondensed;\n  src: url("fonts/RobotoCondensed.ttf"), url("${baseUrl}/RobotoCondensed-Regular.ttf");\n}\n.RobotoCondensed{\n  font-family: RobotoCondensed;\n}`,
      name: "Roboto Condensed",
    },
    {
      _id: "RobotoLight",
      css: `@font-face{\n  font-family: RobotoLight;\n  src: url("fonts/RobotoLight.ttf"), url("${baseUrl}/RobotoLight.ttf");\n}\n\n@font-face{\n  font-family: RobotoLight;\n  font-style: italic;\n  src: url("fonts/RobotoLight-Italic.ttf"), url("${baseUrl}/RobotoLight-Italic.ttf");\n}\n.RobotoLight{\n  font-family: RobotoLight;\n}`,
      name: "Roboto Light",
    },
    {
      _id: "Poppins",
      css: `@font-face{\n  font-family: Poppins;\n  src: url("fonts/Poppins.ttf"), url("${baseUrl}/Poppins-Regular.ttf");\n}\n.Poppins{\n  font-family: Poppins;\n}`,
      name: "Poppins",
    },
    {
      _id: "LifeSavers",
      css: `@font-face{\n  font-family: LifeSavers;\n  src: url("fonts/LifeSavers.ttf"), url("${baseUrl}/LifeSavers.ttf");\n}\n.LifeSavers{\n  font-family: LifeSavers;\n}`,
      name: "Life Savers",
    },
    {
      _id: "Delius",
      css: `@font-face{\n  font-family: Delius;\n  src: url("fonts/Delius.ttf"), url("${baseUrl}/Delius-Regular.ttf");\n}\n.Delius{\n  font-family: Delius;\n}`,
      name: "Delius",
    },
    {
      _id: "Crushed",
      css: `@font-face{\n  font-family: Crushed;\n  src: url("fonts/Crushed.ttf"), url("${baseUrl}/Crushed-Regular.ttf");\n}\n.Crushed{\n  font-family: Crushed;\n}`,
      name: "Crushed",
    },
    {
      _id: "HelveticaNeue",
      css: `@font-face{\n  font-family: HelveticaNeue;\n  src: url("fonts/HelveticaNeue.ttf"), url("${baseUrl}/HelveticaNeue-Regular.ttf");\n}\n.HelveticaNeue{\n  font-family: HelveticaNeue;\n}`,
      name: "Helvetica Neue",
    },
    {
      _id: "Selima",
      css: `@font-face{\n  font-family: Selima;\n  src: url("fonts/Selima.ttf"), url("${baseUrl}/Selima-Regular.ttf");\n}\n.Selima{\n  font-family: Selima;\n}`,
      name: "Selima",
    },
    {
      _id: "Spartan",
      css: `@font-face{\n  font-family: Spartan;\n  src: url("fonts/Spartan.ttf"), url("${baseUrl}/Spartan-Regular.ttf");\n}\n.Spartan{\n  font-family: Spartan;\n}`,
      name: "Spartan",
    },
    {
      _id: "GreatVibes",
      css: `@font-face{\n  font-family: GreatVibes;\n  src: url("fonts/GreatVibes.ttf"), url("${baseUrl}/GreatVibes-Regular.ttf");\n}\n.GreatVibes{\n  font-family: GreatVibes;\n}`,
      name: "Great Vibes",
    },
    {
      _id: "Cinzel",
      css: `@font-face{\n  font-family: Cinzel;\n  src: url("fonts/Cinzel.ttf"), url("${baseUrl}/Cinzel-Regular.ttf");\n}\n.Cinzel{\n  font-family: Cinzel;\n}`,
      name: "Cinzel",
    },
    {
      _id: "CinzelDecorative",
      css: `@font-face{\n  font-family: CinzelDecorative;\n  src: url("fonts/CinzelDecorative.ttf"), url("${baseUrl}/CinzelDecorative-Regular.ttf");\n}\n.CinzelDecorative{\n  font-family: CinzelDecorative;\n}`,
      name: "Cinzel Decorative",
    },
    {
      _id: "AlegreyaSansSC",
      css: `@font-face{\n  font-family: AlegreyaSansSC;\n  src: url("fonts/AlegreyaSansSC.ttf"), url("${baseUrl}/AlegreyaSansSC-Regular.ttf");\n}\n.AlegreyaSansSC{\n  font-family: AlegreyaSansSC;\n}`,
      name: "Alegreya Sans SC",
    },
    {
      _id: "Alegreya",
      css: `@font-face{\n  font-family: Alegreya;\n  src: url("fonts/Alegreya.ttf"), url("${baseUrl}/Alegreya-Regular.ttf");\n}\n.Alegreya{\n  font-family: Alegreya;\n}`,
      name: "Alegreya",
    },
    {
      _id: "Marcellus",
      css: `@font-face{\n  font-family: Marcellus;\n  src: url("fonts/Marcellus.ttf"), url("${baseUrl}/Marcellus-Regular.ttf");\n}\n.MarcellusBold{\n  font-family: MarcellusBold;\n}`,
      name: "Marcellus",
    },
    {
      _id: "OpenDyslexic",
      css: `@font-face{\n  font-family: OpenDyslexic;\n  src: url("fonts/OpenDyslexic.ttf"), url("${baseUrl}/OpenDyslexic-Regular.ttf");\n}\n.OpenDyslexic{\n  font-family: OpenDyslexic;\n}`,
      name: "OpenDyslexic",
    },
    {
      _id: "EuphoriaScript",
      css: `@font-face{\n  font-family: EuphoriaScript;\n  src: url("fonts/EuphoriaScript.ttf"), url("${baseUrl}/EuphoriaScript-Regular.ttf");\n}\n.EuphoriaScript{\n  font-family: EuphoriaScript;\n}`,
      name: "Euphoria Script",
    },
    {
      _id: "VollkornSC",
      css: `@font-face{\n  font-family: VollkornSC;\n  src: url("fonts/VollkornSC-Regular.ttf"), url("${baseUrl}/VollkornSC-Regular.ttf");\n}\n.VollkornSC{\n  font-family: VollkornSC;\n}`,
      name: "Vollkorn SC",
    },
    {
      _id: "Megrim",
      css: `@font-face{\n  font-family: Megrim;\n  src: url("fonts/Megrim.ttf"), url("${baseUrl}/Megrim-Regular.ttf");\n}\n.Megrim{\n  font-family: Megrim;\n}`,
      name: "Megrim",
    },
    {
      _id: "Quantico",
      css: `@font-face{\n  font-family: Quantico;\n  src: url("fonts/Quantico.ttf"), url("${baseUrl}/Quantico-Regular.ttf");\n}\n.Quantico{\n  font-family: Quantico;\n}`,
      name: "Quantico",
    },
    {
      _id: "EmilysCandy",
      css: `@font-face{\n  font-family: EmilysCandy;\n  src: url("fonts/EmilysCandy.ttf"), url("${baseUrl}/EmilysCandy-Regular.ttf");\n}\n.EmilysCandy{\n  font-family: EmilysCandy;\n}`,
      name: "Emilys Candy",
    },
    {
      _id: "Raleway",
      css: `@font-face{\n  font-family: Raleway;\n  src: url("fonts/Raleway.ttf"), url("${baseUrl}/Raleway-Regular.ttf");\n}\n.Raleway{\n  font-family: Raleway;\n}`,
      name: "Raleway",
    },
    {
      _id: "PressStart2P",
      css: `@font-face{\n  font-family: PressStart2P;\n  src: url("fonts/PressStart2P.ttf"), url("${baseUrl}/PressStart2P-Regular.ttf");\n}\n.PressStart2P{\n  font-family: PressStart2P;\n}`,
      name: "Press Start 2P",
    },
    {
      _id: "Anton",
      css: `@font-face{\n  font-family: Anton;\n  src: url("fonts/Anton.ttf"), url("${baseUrl}/Anton-Regular.ttf");\n}\n.Anton{\n  font-family: Anton;\n}`,
      name: "Anton",
    },
    {
      _id: "Audiowide",
      css: `@font-face{\n  font-family: Audiowide;\n  src: url("fonts/Audiowide.ttf"), url("${baseUrl}/Audiowide-Regular.ttf");\n}\n.Audiowide{\n  font-family: Audiowide;\n}`,
      name: "Audiowide",
    },
    {
      _id: "Aldrich",
      css: `@font-face{\n  font-family: Aldrich;\n  src: url("fonts/Aldrich.ttf"), url("${baseUrl}/Aldrich-Regular.ttf");\n}\n.Aldrich{\n  font-family: Aldrich;\n}`,
      name: "Aldrich",
    },
    {
      _id: "Oswald",
      css: `@font-face{\n  font-family: Oswald;\n  src: url("fonts/Oswald.ttf"), url("${baseUrl}/Oswald-Regular.ttf");\n}\n.Oswald{\n  font-family: Oswald;\n}`,
      name: "Oswald",
    },
    {
      _id: "BigShouldersDisplay",
      css: `@font-face{\n  font-family: BigShouldersDisplay;\n  src: url("fonts/BigShouldersDisplay.ttf"), url("${baseUrl}/BigShouldersDisplay-Regular.ttf");\n}\n.BigShouldersDisplay{\n  font-family: BigShouldersDisplay;\n}`,
      name: "Big Shoulders Display",
    },
    {
      _id: "Montserrat",
      css: `@font-face{\n  font-family: Montserrat;\n  src: url("fonts/Montserrat.ttf"), url("${baseUrl}/Montserrat-Regular.ttf");\n}\n.Montserrat{\n  font-family: Montserrat;\n}`,
      name: "Montserrat",
    },
    {
      _id: "Forum",
      css: `@font-face{\n  font-family: Forum;\n  src: url("fonts/Forum.ttf"), url("${baseUrl}/Forum-Regular.ttf");\n}\n.Forum{\n  font-family: Forum;\n}`,
      name: "Forum",
    },
    {
      _id: "SpecialElite",
      css: `@font-face{\n  font-family: SpecialElite;\n  src: url("fonts/SpecialElite.ttf"), url("${baseUrl}/SpecialElite-Regular.ttf");\n}\n.SpecialElite{\n  font-family: SpecialElite;\n}`,
      name: "Special Elite",
    },
    {
      _id: "Syncopate",
      css: `@font-face{\n  font-family: Syncopate;\n  src: url("fonts/Syncopate.ttf"), url("${baseUrl}/Syncopate-Regular.ttf");\n}\n.Syncopate{\n  font-family: Syncopate;\n}`,
      name: "Syncopate",
    },
    {
      _id: "Voltaire",
      css: `@font-face{\n  font-family: Voltaire;\n  src: url("fonts/Voltaire.ttf"), url("${baseUrl}/Voltaire-Regular.ttf");\n}\n.Voltaire{\n  font-family: Voltaire;\n}`,
      name: "Voltaire",
    },
    {
      _id: "SixCaps",
      css: `@font-face{\n  font-family: SixCaps;\n  src: url("fonts/SixCaps.ttf"), url("${baseUrl}/SixCaps-Regular.ttf");\n}\n.SixCaps{\n  font-family: SixCaps;\n}`,
      name: "Six Caps",
    },
    {
      _id: "OldStandardTT",
      css: `@font-face{\n  font-family: OldStandardTT;\n  src: url("fonts/OldStandardTT-Regular.ttf"), url("${baseUrl}/OldStandardTT-Regular.ttf");\n}\n.OldStandardTT{\n  font-family: OldStandardTT;\n}`,
      name: "Old Standard",
    },
    {
      _id: "Benne",
      css: `@font-face{\n  font-family: Benne;\n  src: url("fonts/Benne-Regular.ttf"), url("${baseUrl}/Benne-Regular.ttf");\n}\n\n@font-face{\n  font-family: Benne;\n  font-weight: bold;\n  src: url("fonts/Benne-Bold.ttf"), url("${baseUrl}/Benne-Bold.ttf");\n}\n\n@font-face{\n  font-family: Benne;\n  font-style: italic;\n  src: url("fonts/Benne-Italic.ttf"), url("${baseUrl}/Benne-Italic.ttf");\n}\n\n@font-face{\n  font-family: Benne;\n  font-weight: bold;\n  font-style: italic;\n  src: url("fonts/Benne-BoldItalic.ttf"), url("${baseUrl}/Benne-BoldItalic.ttf");\n}\n.Benne{\n  font-family: Benne;\n}`,
      name: "Benne",
      before: 0.35,
      after: -1.25,
    },
    {
      _id: "Cardo",
      css: `@font-face{\n  font-family: Cardo;\n  font-weight: normal;\n  src: url("fonts/Cardo104s.ttf"), url("${baseUrl}/Cardo104s.ttf");\n}\n\n@font-face{\n  font-family: Cardo;\n  font-weight: bold;\n  src: url("fonts/Cardob101.ttf"), url("${baseUrl}/Cardob101.ttf");\n}\n\n@font-face{\n  font-family: Cardo;\n  font-style: italic;\n  src: url("fonts/Cardoi99.ttf"), url("${baseUrl}/Cardoi99.ttf");\n}\n\n@font-face{\n  font-family: Cardo;\n  font-style: italic;\n  font-weight: bold;\n  src: url("fonts/Cardo-BoldItalic.ttf"), url("${baseUrl}/Cardo-BoldItalic.ttf");\n}\n.Cardo{\n  font-family: Cardo;\n}`,
      name: "Cardo",
      before: 0,
      after: -1,
    },
    {
      _id: "CrimsonPro",
      css: `@font-face{\n  font-family: CrimsonPro;\n  font-weight: normal;\n  src: url("fonts/CrimsonPro-Regular.ttf"), url("${baseUrl}/CrimsonPro-Regular.ttf");\n}\n\n@font-face{\n  font-family: CrimsonPro;\n  font-weight: bold;\n  src: url("fonts/CrimsonPro-Bold.ttf"), url("${baseUrl}/CrimsonPro-Bold.ttf");\n}\n\n@font-face{\n  font-family: CrimsonPro;\n  font-style: italic;\n  src: url("fonts/CrimsonPro-Italic.ttf"), url("${baseUrl}/CrimsonPro-Italic.ttf");\n}\n\n@font-face{\n  font-family: CrimsonPro;\n  font-weight: bold;\n  font-style: italic;\n  src: url("fonts/CrimsonPro-BoldItalic.ttf"), url("${baseUrl}/CrimsonPro-BoldItalic.ttf");\n}\n.CrimsonPro{\n  font-family: CrimsonPro;\n}`,
      name: "Crimson Pro",
      before: -0.25,
      after: -0.75,
    },
    {
      _id: "EBGaramond",
      css: `@font-face{\n  font-family: EBGaramond;\n  font-weight: 300;\n  src: url("fonts/EBGaramond12-Regular.ttf"), url("${baseUrl}/EBGaramond12-Regular.ttf");\n}\n\n@font-face{\n  font-family: EBGaramond;\n  font-weight: 300;\n  font-style: italic;\n  src: url("fonts/EBGaramond12-Italic"), url("${baseUrl}/EBGaramond12-Italic");\n}\n.EBGaramond{\n  font-family: EBGaramond;\n}`,
      name: "EB Garamond",
      before: 0.15,
      after: -0.5,
    },
    {
      _id: "LibreBaskerville",
      css: `@font-face{\n  font-family: LibreBaskerville;\n  font-weight: normal;\n  src: url("fonts/LibreBaskerville-Regular.otf"), url("${baseUrl}/LibreBaskerville-Regular.otf");\n}\n\n@font-face{\n  font-family: LibreBaskerville;\n  font-weight: bold;\n  src: url("fonts/LibreBaskerville-Bold.otf"), src: url("${baseUrl}/LibreBaskerville-Bold.otf");\n}\n\n@font-face{\n  font-family: LibreBaskerville;\n  font-style: italic;\n  src: url("fonts/LibreBaskerville-Italic.otf"), url("${baseUrl}/LibreBaskerville-Italic.otf");\n}\n\n@font-face{\n  font-family: LibreBaskerville;\n  font-weight: bold;\n  font-style: italic;\n  src: url("fonts/LibreBaskerville-BoldItalic.ttf"), url("${baseUrl}/LibreBaskerville-BoldItalic.ttf");\n}\n.LibreBaskerville{\n  font-family: LibreBaskerville;\n}`,
      name: "Libre Baskerville",
      before: 0,
      after: -1,
    },
    {
      _id: "LibreCaslon",
      css: `@font-face{\n  font-family: LibreCaslon;\n  font-weight: normal;\n  src: url("fonts/LibreCaslon-Regular.ttf"), url("${baseUrl}/LibreCaslon-Regular.ttf");\n}\n\n@font-face{\n  font-family: LibreCaslon;\n  font-weight: bold;\n  src: url("fonts/LibreCaslon-Bold.ttf"), url("${baseUrl}/LibreCaslon-Bold.ttf");\n}\n\n@font-face{\n  font-family: LibreCaslon;\n  font-style: italic;\n  src: url("fonts/LibreCaslon-Italic.ttf"), url("${baseUrl}/LibreCaslon-Italic.ttf");\n}\n\n@font-face{\n  font-family: LibreCaslon;\n  font-weight: bold;\n  font-style: italic;\n  src: url("fonts/LibreCaslon-BoldItalic.ttf"), url("${baseUrl}/LibreCaslon-BoldItalic.ttf");\n}\n.LibreCaslon{\n  font-family: LibreCaslon;\n}`,
      name: "Libre Caslon",
      before: -0.125,
      after: -1,
    },
    {
      _id: "Lora",
      css: `@font-face{\n  font-family: Lora;\n  font-weight: normal;\n  src: url("fonts/Lora-Regular.ttf"), url("${baseUrl}/Lora-Regular.ttf");\n}\n\n@font-face{\n  font-family: Lora;\n  font-weight: bold;\n  src: url("fonts/Lora-Bold.ttf"), url("${baseUrl}/Lora-Bold.ttf");\n}\n\n@font-face{\n  font-family: Lora;\n  font-style: italic;\n  src: url("fonts/Lora-Italic.ttf"), url("${baseUrl}/Lora-Italic.ttf");\n}\n\n@font-face{\n  font-family: Lora;\n  font-weight: bold;\n  font-style: italic;\n  src: url("fonts/Lora-BoldItalic.ttf"), url("${baseUrl}/Lora-BoldItalic.ttf");\n}\n.Lora{\n  font-family: Lora;\n}`,
      name: "Lora",
      before: -0.125,
      after: -0.75,
    },
    {
      _id: "OpenDyslexic",
      css: `@font-face{\n  font-family: OpenDyslexic;\n  font-weight: normal;\n  src: url("fonts/OpenDyslexic-Regular.ttf"), url("${baseUrl}/OpenDyslexic-Regular.ttf");\n}\n\n@font-face{\n  font-family: OpenDyslexic;\n  font-weight: bold;\n  src: url("fonts/OpenDyslexic-Bold.ttf"), url("${baseUrl}/OpenDyslexic-Bold.ttf");\n}\n\n@font-face{\n  font-family: OpenDyslexic;\n  font-style: italic;\n  src: url("fonts/OpenDyslexic-Italic.ttf"), url("${baseUrl}/OpenDyslexic-Italic.ttf");\n}\n\n@font-face{\n  font-family: OpenDyslexic;\n  font-style: italic;\n  font-weight: bold;\n  src: url("fonts/OpenDyslexic-BoldItalic.otf"), url("${baseUrl}/OpenDyslexic-BoldItalic.otf");\n}\n.OpenDyslexic{\n  font-family: OpenDyslexic;\n}`,
      name: "OpenDyslexic",
      before: -0.25,
      after: -0.75,
    },
    {
      _id: "Rosario",
      css: `@font-face{\n  font-family: Rosario;\n  font-weight: normal;\n  src: url("fonts/Rosario-Regular.ttf"), url("${baseUrl}/Rosario-Regular.ttf");\n}\n\n@font-face{\n  font-family: Rosario;\n  font-weight: bold;\n  src: url("fonts/Rosario-Bold.ttf"), url("${baseUrl}/Rosario-Bold.ttf");\n}\n\n@font-face{\n  font-family: Rosario;\n  font-style: italic;\n  src: url("fonts/Rosario-Italic.ttf"), url("${baseUrl}/Rosario-Italic.ttf");\n}\n\n@font-face{\n  font-family: Rosario;\n  font-style: italic;\n  font-weight: bold;\n  src: url("fonts/Rosario-BoldItalic.ttf"), url("${baseUrl}/Rosario-BoldItalic.ttf");\n}\n.Rosario{\n  font-family: Rosario;\n}`,
      name: "Rosario",
      before: -0.25,
      after: -0.75,
    },
    {
      _id: "Spectral",
      css: `@font-face{\n  font-family: Spectral;\n  font-weight: normal;\n  src: url("fonts/Spectral-Regular.ttf"), url("${baseUrl}/Spectral-Regular.ttf");\n}\n\n@font-face{\n  font-family: Spectral;\n  font-weight: bold;\n  src: url("fonts/Spectral-Bold.ttf"), url("${baseUrl}/Spectral-Bold.ttf");\n}\n\n@font-face{\n  font-family: Spectral;\n  font-style: italic;\n  src: url("fonts/Spectral-Italic.ttf"), url("${baseUrl}/Spectral-Italic.ttf");\n}\n\n@font-face{\n  font-family: Spectral;\n  font-weight: bold;\n  font-style: italic;\n  src: url("fonts/Spectral-BoldItalic.ttf"), url("${baseUrl}/Spectral-BoldItalic.ttf");\n}\n.Spectral{\n  font-family: Spectral;\n}`,
      name: "Spectral",
      before: -0.25,
      after: -0.75,
    },
    {
      _id: "TheanoDidot",
      css: `@font-face{\n  font-family: TheanoDidot;\n  src: url("fonts/TheanoDidot-Regular.ttf"), url("${baseUrl}/TheanoDidot-Regular.ttf");\n}\n\n@font-face{\n  font-family: TheanoDidot;\n  font-weight: bold;\n  src: url("fonts/TheanoDidot-Bold.ttf"), url("${baseUrl}/TheanoDidot-Bold.ttf");\n}\n\n@font-face{\n  font-family: TheanoDidot;\n  font-style: italic;\n  src: url("fonts/TheanoDidot-Italic.ttf"), url("${baseUrl}/TheanoDidot-Italic.ttf");\n}\n\n@font-face{\n  font-family: TheanoDidot;\n  font-weight: bold;\n  font-style: italic;\n  src: url("fonts/TheanoDidot-BoldItalic.ttf"), url("${baseUrl}/TheanoDidot-BoldItalic.ttf");\n}\n.TheanoDidot{\n  font-family: TheanoDidot;\n}`,
      name: "Theano Didot",
    },
    {
      _id: "YoungSerif",
      name: "Young Serif",
      css: `@font-face{
          font-family: YoungSerif;
          font-weight: normal;
          src: url("fonts/YoungSerif-Regular.ttf"), url("${baseUrl}/YoungSerif-Regular.ttf");
        }

        @font-face{
          font-family: YoungSerif;
          font-weight: bold;
          src: url("fonts/YoungSerif-Bold.ttf"), url("${baseUrl}/YoungSerif-Bold.ttf");
        }

        @font-face{
          font-family: YoungSerif;
          font-style: italic;
          src: url("fonts/YoungSerif-Italic.ttf"), url("${baseUrl}/YoungSerif-Italic.ttf");
        }

        @font-face{
          font-family: YoungSerif;
          font-weight: bold;
          font-style: italic;
          src: url("fonts/YoungSerif-BoldItalic.ttf"), url("${baseUrl}/YoungSerif-BoldItalic.ttf");
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
          src: url("fonts/PTSans-Regular.ttf"), url("${baseUrl}/PTSans-Regular.ttf");
        }

        @font-face{
          font-family: PTSans;
          font-weight: bold;
          src: url("fonts/PTSans-Bold.ttf"), url("${baseUrl}/PTSans-Bold.ttf");
        }

        @font-face{
          font-family: PTSans;
          font-style: italic;
          src: url("fonts/PTSans-Italic.ttf"), url("${baseUrl}/PTSans-Italic.ttf");
        }

        @font-face{
          font-family: PTSans;
          font-style: italic;
          font-weight: bold;
          src: url("fonts/PTSans-BoldItalic.ttf"), url("${baseUrl}/PTSans-BoldItalic.ttf");
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
          src: url("fonts/SourceSansPro-Regular.ttf"), url("${baseUrl}/SourceSansPro-Regular.ttf");
        }

        @font-face{
          font-family: SourceSansPro;
          font-weight: bold;
          src: url("fonts/SourceSansPro-Bold.ttf"), url("${baseUrl}/SourceSansPro-Bold.ttf");
        }

        @font-face{
          font-family: SourceSansPro;
          font-style: italic;
          src: url("fonts/SourceSansPro-Italic.ttf"), url("${baseUrl}/SourceSansPro-Italic.ttf");
        }

        @font-face{
          font-family: SourceSansPro;
          font-style: italic;
          font-weight: bold;
          src: url("fonts/SourceSansPro-BoldItalic.ttf"), url("${baseUrl}/SourceSansPro-BoldItalic.ttf");
        }`,
      before: -0.125,
      after: -0.75,
    },
    {
      _id: "OpenSans",
      name: "Open Sans",
      css: `@font-face{
          font-family: OpenSans;
          src: url("fonts/OpenSans-Regular.ttf"), url("${baseUrl}/OpenSans-Regular.ttf");
        }

        @font-face{
          font-family: OpenSans;
          font-weight: bold;
          src: url("fonts/OpenSans-Bold.ttf"), url("${baseUrl}/OpenSans-Bold.ttf");
        }

        @font-face{
          font-family: OpenSans;
          font-style: italic;
          src: url("fonts/OpenSans-Italic.ttf"), url("${baseUrl}/OpenSans-Italic.ttf");
        }

        @font-face{
          font-family: OpenSans;
          font-weight: bold;
          font-style: italic;
          src: url("fonts/OpenSans-BoldItalic.ttf"), url("${baseUrl}/OpenSans-BoldItalic.ttf");
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
          src: url("fonts/OpenSansLT-Regular.ttf"), url("${baseUrl}/OpenSansLT-Regular.ttf");
        }

        @font-face{
          font-family: OpenSansLT;
          font-weight: bold;
          src: url("fonts/OpenSansLT-Bold.ttf"), url("${baseUrl}/OpenSansLT-Bold.ttf");
        }`,
      before: -0.125,
      after: -0.75,
    },
  ].sort((a, b) => a.name.localeCompare(b.name));
};
