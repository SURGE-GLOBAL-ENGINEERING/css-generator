export const getDefaultCss = (prefix: string): string => {
  return `
      ${prefix}html, ${prefix}body, ${prefix}div, ${prefix}span, ${prefix}applet, ${prefix}object, ${prefix}iframe,
      ${prefix}h1, ${prefix}h2, ${prefix}h3, ${prefix}h4, ${prefix}h5, ${prefix}h6, ${prefix}p, ${prefix}blockquote, ${prefix}pre,
      ${prefix}a, ${prefix}abbr, ${prefix}acronym, ${prefix}address, ${prefix}big, ${prefix}cite, ${prefix}code,
      ${prefix}del, ${prefix}dfn, ${prefix}em, ${prefix}img, ${prefix}ins, ${prefix}kbd, ${prefix}q, ${prefix}s, ${prefix}samp,
      ${prefix}small, ${prefix}strike, ${prefix}strong, ${prefix}tt, ${prefix}var,
      ${prefix}b, ${prefix}u, ${prefix}i, ${prefix}center,
      ${prefix}dl, ${prefix}dt, ${prefix}dd, ${prefix}ol, ${prefix}ul, ${prefix}li,
      ${prefix}fieldset, ${prefix}form, ${prefix}label, ${prefix}legend,
      ${prefix}table, ${prefix}caption, ${prefix}tbody, ${prefix}tfoot, ${prefix}thead, ${prefix}tr, ${prefix}th, ${prefix}td,
      ${prefix}article, ${prefix}aside, ${prefix}canvas, ${prefix}details, ${prefix}embed, 
      ${prefix}figure, ${prefix}figcaption, ${prefix}footer, ${prefix}header, ${prefix}hgroup, 
      ${prefix}menu, ${prefix}nav, ${prefix}output, ${prefix}ruby, ${prefix}section, ${prefix}summary,
      ${prefix}time, ${prefix}mark, ${prefix}audio, ${prefix}video {
        margin: 0;
        margin-block: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      ${prefix}article, ${prefix}aside, ${prefix}details, ${prefix}figcaption, ${prefix}figure, 
      ${prefix}footer, ${prefix}header, ${prefix}hgroup, ${prefix}menu, ${prefix}nav, ${prefix}section {
        display: block;
      }
      ${prefix}body {
        line-height: 1;
      }
      ${prefix}blockquote, ${prefix}q {
        quotes: none;
      }
      ${prefix}blockquote:before, ${prefix}blockquote:after,
      ${prefix}q:before, ${prefix}q:after {
        content: '';
        content: none;
      }
      ${prefix}table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      ${prefix}b{
        font-weight: bold;
      }
    
      ${prefix}em, ${prefix}i{
        font-style: italic;
      }

      ${prefix}h1 {
        font-size: 1.3em;
        font-weight: bold;
        padding: 0.6em 0em;
      }
  
      ${prefix}h2 {
        font-size: 1.2em;
        font-weight: 600;
        padding: 0.6em 0em;
      }
  
      ${prefix}h3 {
        font-size: 1.15em;
        font-weight: bold;
        padding: 0.6em 0em;
      }
  
      ${prefix}h4 {
        font-size: 1.1em;
        font-weight: 500;
        padding: 0.6em 0em;
      }
  
      ${prefix}h5 {
        font-size: 1.075em;
        font-weight: 500;
        padding: 0.6em 0em;
      }
  
      ${prefix}h6 {
        font-size: 1.075em;
        font-weight: 500;
        padding: 0.6em 0em;
        font-style: italic;
      }
  
      ${prefix}ul, ${prefix}ol{
        padding: 0rem 1rem;
      }

      ${prefix}li{
        padding: 0.2rem 0rem;
      }

    `;
};
