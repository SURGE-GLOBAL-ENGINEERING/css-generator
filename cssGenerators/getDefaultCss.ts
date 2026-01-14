export const getDefaultCss = (themeId: string, paragraphSpacing: number): string => {
  return `
      .${themeId} html, .${themeId} body, .${themeId} div, .${themeId} span, .${themeId} applet, .${themeId} object, .${themeId} iframe,
      .${themeId} h1, .${themeId} p, .${themeId} blockquote, .${themeId} pre,
      .${themeId} a, .${themeId} abbr, .${themeId} acronym, .${themeId} address, .${themeId} big, .${themeId} cite, .${themeId} code,
      .${themeId} del, .${themeId} dfn, .${themeId} em, .${themeId} img, .${themeId} ins, .${themeId} kbd, .${themeId} q, .${themeId} s, .${themeId} samp,
      .${themeId} small, .${themeId} strike, .${themeId} strong, .${themeId} tt, .${themeId} var,
      .${themeId} b, .${themeId} u, .${themeId} i, .${themeId} center,
      .${themeId} dl, .${themeId} dt, .${themeId} dd, .${themeId} ol, .${themeId} ul, .${themeId} li,
      .${themeId} fieldset, .${themeId} form, .${themeId} label, .${themeId} legend,
      .${themeId} table, .${themeId} caption, .${themeId} tbody, .${themeId} tfoot, .${themeId} thead, .${themeId} tr, .${themeId} th, .${themeId} td,
      .${themeId} article, .${themeId} aside, .${themeId} canvas, .${themeId} details, .${themeId} embed, 
      .${themeId} figure, .${themeId} figcaption, .${themeId} footer, .${themeId} header, .${themeId} hgroup, 
      .${themeId} menu, .${themeId} nav, .${themeId} output, .${themeId} ruby, .${themeId} section, .${themeId} summary,
      .${themeId} time, .${themeId} mark, .${themeId} audio, .${themeId} video {
        margin: 0;
        margin-block: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
      }
      /* HTML5 display-role reset for older browsers */
      .${themeId} article, .${themeId} aside, .${themeId} details, .${themeId} figcaption, .${themeId} figure, 
      .${themeId} footer, .${themeId} header, .${themeId} hgroup, .${themeId} menu, .${themeId} nav, .${themeId} section {
        display: block;
      }
      .${themeId} body {
        line-height: 1;
      }
      .${themeId} blockquote, .${themeId} q {
        quotes: none;
      }
      .${themeId} blockquote:before, .${themeId} blockquote:after,
      .${themeId} q:before, .${themeId} q:after {
        content: '';
        content: none;
      }
      .${themeId} table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      .${themeId} b{
        font-weight: bold;
      }
    
      .${themeId} em, .${themeId} i{
        font-style: italic;
      }

      .${themeId} h1 {
        font-size: 1.3em;
        padding: 0.6em 0em;
      }
  
      .${themeId} ul, .${themeId} ol{
        padding: 0rem 1rem;
        line-height: ${paragraphSpacing};
      }

      .${themeId} ul .reset-padding, .${themeId} ol .reset-padding{
        margin-left: -1rem;
      }
      .${themeId} li{
        padding: 0.2rem 0rem;
      }

    `;
};

export const getDefaultDarkModeCssOverrides = (
  themeId: string,
  containerClassName?: string
): string => {
  return `
  .${themeId} .${containerClassName} {
    color: #171D21 !important;
  }
  .${themeId} .${containerClassName} :is(h1, h2, h3, h4, h5, h6) {
    color: #171D21 !important;
  }
  .${themeId} .${containerClassName} .p-device .inside {
    background-color: #ffffff !important;
  }
  .${themeId} .${containerClassName} .p-device.paperwhite .inside {
    background-color: #d9e0db !important;
  }
  .${themeId} .${containerClassName} .p-device.paperwhite .inside > div {
    -webkit-filter: grayscale(100%) !important;
    -moz-filter: grayscale(100%) !important;
    -ms-filter: grayscale(100%) !important;
    -o-filter: grayscale(100%) !important;
  }
  .${themeId} .${containerClassName} .p-device.forma .inside {
    background-color: #f3f7f5 !important;
  }
  .${themeId} .${containerClassName} .p-device.libra .inside {
    background-color: #f3f7f5 !important;
  }
  .${themeId} .${containerClassName} .p-device.clara .inside {
    background-color: #d9e0db !important;
  }
  .${themeId} .${containerClassName} .p-device.clara .inside > div {
    -webkit-filter: grayscale(100%) !important;
    -moz-filter: grayscale(100%) !important;
    -ms-filter: grayscale(100%) !important;
    -o-filter: grayscale(100%) !important;
  }
  .${themeId} .${containerClassName} .p-device.nia .inside {
    background-color: #f3f7f5 !important;
  }
  .${themeId} .${containerClassName} .p-device.oasis .inside {
    background-color: #d9e0db !important;
  }
  .${themeId} .${containerClassName} .p-device.oasis .inside > div {
    -webkit-filter: grayscale(100%) !important;
    -moz-filter: grayscale(100%) !important;
    -ms-filter: grayscale(100%) !important;
    -o-filter: grayscale(100%) !important;
  }
  .${themeId} .${containerClassName} .p-device.glowlight .inside {
    background-color: #d9e0db !important;
  }
  .${themeId} .${containerClassName} .p-device.glowlight .inside > div {
    -webkit-filter: grayscale(100%) !important;
    -moz-filter: grayscale(100%) !important;
    -ms-filter: grayscale(100%) !important;
    -o-filter: grayscale(100%) !important;
  }
  .${themeId} .${containerClassName} .p-device.glowlight_plus .inside {
    background-color: #d9e0db !important;
  }
  .${themeId} .${containerClassName} .p-device.glowlight_plus .inside > div {
    -webkit-filter: grayscale(100%) !important;
    -moz-filter: grayscale(100%) !important;
    -ms-filter: grayscale(100%) !important;
    -o-filter: grayscale(100%) !important;
  }
  `
}
