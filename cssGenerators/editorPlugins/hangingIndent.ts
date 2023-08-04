export const getHangingIndentCss = (prefixRule: string, indentValue: number) => {
    return `
      ${prefixRule}.hanging{
        line-height: 1.6em;
        text-indent: -${indentValue}cm;
        padding-left: ${indentValue}cm;
        orphans: 3; 
        widows: 3;
      }
    `
  };