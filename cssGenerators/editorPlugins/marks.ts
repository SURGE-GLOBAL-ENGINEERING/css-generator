export const getMarkCss = (themeId: string) => {
  return `
    .${themeId} span.monospace {
      font-family: 'Courier', sans-serif;
    }

    .${themeId} span.smallcaps {
      font-variant: small-caps;
    }

    .${themeId} span.sansserif {
      font-family: 'PT Sans';
    }
  `;
};
