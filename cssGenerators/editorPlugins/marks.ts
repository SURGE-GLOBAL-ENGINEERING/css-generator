export const getMarkCss = (prefixRule: string) => {
  return `
    ${prefixRule}span.monospace {
      font-family: 'Courier', sans-serif;
    }

    ${prefixRule}span.smallcaps {
      font-variant: small-caps;
    }

    ${prefixRule}span.sansserif {
      font-family: 'PT Sans';
    }
  `;
};
