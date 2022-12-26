export const getSMIconCss = (themeId: string) => {
  return `
    .${themeId} .profile-links > div {
      display: inline-block;
    }

    .${themeId} .profile-links {
      text-align: center;
      margin: 10px 0px;
      page-break-inside: avoid;
    }

    .${themeId} .social-profile-icon-small {
      text-align: center;
      width: 15px;
      height: 15px;
      margin: 5px;
    }

    .${themeId} .social-profile-icon-medium {
      text-align: center;
      width: 20px;
      height: 20px;
      margin: 5px;
    }

    .${themeId} .social-profile-icon-large {
      text-align: center;
      width: 25px;
      height: 25px;
      margin: 5px;
    }
  `;
};
