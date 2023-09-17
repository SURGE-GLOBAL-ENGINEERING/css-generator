export const getAlsobyCss = (prefixRule: string) => {
  return `
    ${prefixRule}.also-by p{
      text-indent: 0 !important;
      margin-bottom: 0.6rem;
      text-align: center;
    }
  `;
};
