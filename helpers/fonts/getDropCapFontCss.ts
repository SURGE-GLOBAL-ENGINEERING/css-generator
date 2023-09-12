export const getDropCapFontCss = (fontFamily: string, isPreviewer: boolean) => {
  let drop = ``;
  switch(fontFamily) {
    case ("FrederickatheGreat"): 
      drop = `margin-right: 0.8rem;\n margin-left: 0.46rem;\n padding: 0.25rem 0.25rem 0rem;\n `;
      isPreviewer ? drop += `font-size: 4.1rem;\n ` : drop+=`font-size: 3.6rem;\n `;
      return drop;
      case ("ArchitectsDaughter"):
        drop = `margin-right: 0.35rem;\n padding: 0 0.25rem;\n `;
        isPreviewer ? drop += `font-size: 3rem;\n ` : drop+=`font-size: 2.9rem;\n `;
        return drop;
    default: return `margin-right: 0.125rem;\n padding: 0 0.25rem;\n `;
  }
};