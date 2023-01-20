export const EpubPreviewerPrefix = ".previewer ";

export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const addPrefix = (className: string, prefix?: string): string => {
  if (prefix) return `${prefix}-${className}`;
  return className;
};

export const slingleLineEllipsis = () => {
  return "text-overflow: ellipsis; white-space: nowrap; overflow: hidden;\n"
}
