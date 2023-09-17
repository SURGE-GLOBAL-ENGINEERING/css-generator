export const getSMIconCss = (prefixRule: string) => {
  return `
    ${prefixRule}.profile-links > div {
      display: inline-block;
    }

    ${prefixRule}.profile-links {
      text-align: center;
      margin: 10px 0px;
      page-break-inside: avoid;
    }

    ${prefixRule}.social-profile-icon-small {
      text-align: center;
      width: 15px;
      height: 15px;
      margin: 5px;
    }

    ${prefixRule}.social-profile-icon-medium {
      text-align: center;
      width: 20px;
      height: 20px;
      margin: 5px;
    }

    ${prefixRule}.social-profile-icon-large {
      text-align: center;
      width: 25px;
      height: 25px;
      margin: 5px;
    }
  `;
};
