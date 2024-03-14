export const getTextMessagesCss = (themeId: string) => {
    return `
    .${themeId} .text-messages-container{
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
      padding: 0px 30px 0px;
      word-break: break-word;
    }

    .${themeId} .message-bubble {
      border-style: solid;
      border: 1px;
      border-radius: 1em;
      padding: 2% 3%;
      margin-bottom: 5px;
      color: #fff;
      display: inline-block;
      margin-right: 30px;
    }

    .${themeId} .sent{
      text-align: right;
      margin-right: 0px;
      margin-left: 30px;
    }
  
    .${themeId} .contact-bubble {
      margin-bottom: 1px;
      padding: 0px;
      font-size: 0.8em;
      color: #aeaeae;
      border:0;
    }
  
    .${themeId} .ios-sent-bubble {
      background-color: #147efb;
      border-color: #147efb;
    }
  
    .${themeId} .ios-received-bubble {
      background-color: #d8d8d8;
      color: #000000;
      border-color: #d8d8d8;
    }
  
    .${themeId} .ios-android-sent-bubble {
      background-color: #53d769;
      border-color: #53d769;
    }
  
    .${themeId} .ios-android-received-bubble {
      background-color: #d8d8d8;
      color: #000000;
      border-color: #d8d8d8;
    }

    .${themeId} .android-sent-bubble {
      background-color: #075E54;
      border-color: #075E54;
      border-radius: 16px 16px 0px 16px;
    }
  
    .${themeId} .android-received-bubble {
      background-color: #444444;
      border-color: #444444;
      border-radius: 16px 16px 16px 0px;
    }
    `
  };