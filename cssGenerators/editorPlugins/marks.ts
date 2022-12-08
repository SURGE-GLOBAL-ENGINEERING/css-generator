export const getMarkCss = (prefix: string) => {
  return `
    ${prefix}span.monospace {
      font-family: 'Courier', sans-serif;
    }

    ${prefix}span.smallcaps {
      font-variant: small-caps;
    }

    ${prefix}span.sansserif {
      font-family: 'PT Sans';
    }
  `;
};
