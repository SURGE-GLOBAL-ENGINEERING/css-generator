export const EpubPreviewerPrefix = ".previewer ";

export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const addPrefix = (className: string, prefix?: string): string => {
  if (prefix) return `${prefix}-${className}`;
  return className;
};

export const slingleLineEllipsis = () => {
  return "text-overflow: ellipsis;\n white-space: nowrap;\n overflow: hidden;\n"
}

/**
 * Add at the last line of css in order to overwrite any previously configured css
 */
export const thumbnailCssOverwrites = {
  title: () => `\npadding-top: 2px;\n padding-bottom: 2px;\n line-height: 1;\n width: 100%;\n font-size: 1em;\n ${slingleLineEllipsis()}`,
  subtitle: () => `\npadding-top: 2px;\n padding-bottom: 2px;\n line-height: 1;\n width: 100%;\n font-size: 0.8em;\n ${slingleLineEllipsis()}`,
  number: () => `\npadding-top: 2px;\n padding-bottom: 2px;\n line-height: 1;\n width: 100%;\n font-size: 0.8em;\n ${slingleLineEllipsis()}`,
  titleCard: () => "\npadding-top: 2px;\n padding-bottom: 2px;\n min-height: 80px;\n",
  imageContainer: () => "\npadding-top: 3px;\n padding-bottom: 2px;\n line-height: 0px;\n",
}

/** 
 * Adds css !important tag to all color related styles 
 * if text color is not explicitly set, add #171D21 as the default text color
 * 
 * returns only the updated color related styles
 * */
export const getUpdatedTextColorStyles = (shouldInvertTextColor: boolean, styles: Record<string, string | number> | undefined) => {
  const updatedStyles: Record<string, string> = {};
  for (const key in styles) {
    if (key.toLowerCase().includes("color")) {
      updatedStyles[key] = `${styles[key]} !important`;
    }
  }

  if (!updatedStyles["color"]) {
    updatedStyles["color"] = "#171D21 !important";
  }

  if (shouldInvertTextColor) {
    updatedStyles["color"] = "#FFFFFF !important";
  }
  
  return updatedStyles;
}