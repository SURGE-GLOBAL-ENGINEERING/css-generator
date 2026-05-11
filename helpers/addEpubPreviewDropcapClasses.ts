export const addEpubPreviewDropcapClasses = (innerHtml: string): string => {
  if (!innerHtml.includes("dropcap")) {
    return innerHtml;
  }

  const hasWrappedImage = /\bimage-wrap-(left|right)\b/.test(innerHtml);
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(innerHtml, "text/html");

  parsedDocument.querySelectorAll(".dropcap").forEach((dropcap) => {
    const block = dropcap.closest("p, .align-left");
    block?.classList.add("dropcap-containing-block");

    if (hasWrappedImage) {
      block?.classList.add("dropcap-keep-together");
    }
  });

  return parsedDocument.body.innerHTML;
};
