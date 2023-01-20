export const EpubPreviewerPrefix = ".previewer ";

export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const slingleLineEllipsis = () => {
  return "text-overflow: ellipsis; white-space: nowrap; overflow: hidden;\n"
}
