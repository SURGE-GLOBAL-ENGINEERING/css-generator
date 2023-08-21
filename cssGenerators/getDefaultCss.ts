export const getDefaultCss = (paragraphSpacing: number, prefixRule: string): string => {
  return `
      ${prefixRule}html, ${prefixRule}body, ${prefixRule}div, ${prefixRule}span, ${prefixRule}applet, ${prefixRule}object, ${prefixRule}iframe,
      ${prefixRule}h1, ${prefixRule}p, ${prefixRule}blockquote, ${prefixRule}pre,
      ${prefixRule}a, ${prefixRule}abbr, ${prefixRule}acronym, ${prefixRule}address, ${prefixRule}big, ${prefixRule}cite, ${prefixRule}code,
      ${prefixRule}del, ${prefixRule}dfn, ${prefixRule}em, ${prefixRule}img, ${prefixRule}ins, ${prefixRule}kbd, ${prefixRule}q, ${prefixRule}s, ${prefixRule}samp,
      ${prefixRule}small, ${prefixRule}strike, ${prefixRule}strong, ${prefixRule}tt, ${prefixRule}var,
      ${prefixRule}b, ${prefixRule}u, ${prefixRule}i, ${prefixRule}center,
      ${prefixRule}dl, ${prefixRule}dt, ${prefixRule}dd, ${prefixRule}ol, ${prefixRule}ul, ${prefixRule}li,
      ${prefixRule}fieldset, ${prefixRule}form, ${prefixRule}label, ${prefixRule}legend,
      ${prefixRule}table, ${prefixRule}caption, ${prefixRule}tbody, ${prefixRule}tfoot, ${prefixRule}thead, ${prefixRule}tr, ${prefixRule}th, ${prefixRule}td,
      ${prefixRule}article, ${prefixRule}aside, ${prefixRule}canvas, ${prefixRule}details, ${prefixRule}embed, 
      ${prefixRule}figure, ${prefixRule}figcaption, ${prefixRule}footer, ${prefixRule}header, ${prefixRule}hgroup, 
      ${prefixRule}menu, ${prefixRule}nav, ${prefixRule}output, ${prefixRule}ruby, ${prefixRule}section, ${prefixRule}summary,
      ${prefixRule}time, ${prefixRule}mark, ${prefixRule}audio, ${prefixRule}video {
        margin: 0;
        margin-block: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
      }
      /* HTML5 display-role reset for older browsers */
      ${prefixRule}article, ${prefixRule}aside, ${prefixRule}details, ${prefixRule}figcaption, ${prefixRule}figure, 
      ${prefixRule}footer, ${prefixRule}header, ${prefixRule}hgroup, ${prefixRule}menu, ${prefixRule}nav, ${prefixRule}section {
        display: block;
      }
      ${prefixRule}body {
        line-height: 1;
      }
      ${prefixRule}blockquote, ${prefixRule}q {
        quotes: none;
      }
      ${prefixRule}blockquote:before, ${prefixRule}blockquote:after,
      ${prefixRule}q:before, ${prefixRule}q:after {
        content: '';
        content: none;
      }
      ${prefixRule}table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      ${prefixRule}b{
        font-weight: bold;
      }
    
      ${prefixRule}em, ${prefixRule}i{
        font-style: italic;
      }

      ${prefixRule}h1 {
        font-size: 1.3em;
        padding: 0.6em 0em;
      }
  
      ${prefixRule}ul, ${prefixRule}ol{
        padding: 0rem 1rem;
        line-height: ${paragraphSpacing};
      }

      ${prefixRule}ul .reset-padding, ${prefixRule}ol .reset-padding{
        margin-left: -1rem;
      }
      ${prefixRule}li{
        padding: 0.2rem 0rem;
      }

    `;
};
