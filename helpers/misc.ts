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
  title: () => `\npadding: 0px;\n line-height: 1;\n width: 100%;\n font-seize: 1em;\n ${slingleLineEllipsis()}`,
  subtitle: () => `\npadding: 0px;\n line-height: 1;\n width: 100%;\n font-seize: 0.8em;\n ${slingleLineEllipsis()}`,
  number: () => `\npadding: 0px;\n line-height: 1;\n width: 100%;\n font-seize: 0.8em;\n ${slingleLineEllipsis()}`,
  titleCard: () => "\npadding: 0px;\n min-height: unset;\n",
}
