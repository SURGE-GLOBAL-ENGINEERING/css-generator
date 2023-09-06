export const getDropCapFontCss = (fontFamily: string) => {
  let drop = ``;
  switch(fontFamily) {
    case ("FrederickatheGreat"): 
      drop = `margin-right: 1rem;\n margin-left: 0.7rem;\n font-size: 4.2rem;\n padding: 0.25rem 0.25rem 0rem;\n `;
      return drop;
    default: return `margin-right: 0.125rem;\n padding: 0 0.25rem;\n `;
  }
};