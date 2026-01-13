export type DeviceName =
  | "paperwhite"
  | "fire"
  | "oasis"
  | "forma"
  | "clara"
  | "libra"
  | "nia"
  | "glowlight"
  | "glowlight_plus"
  | "iphone"
  | "ipad"
  | "galaxy_s21"
  | "galaxy_tab_7"
  | "print";


export function getBgColorForDevice(device: DeviceName) {
    switch (device) {
        case "paperwhite":
            return "#d9e0db";
        case "forma":
            return "#f3f7f5";
        case "libra":
            return "#f3f7f5";
        case "clara":
            return "#d9e0db";
        case "nia":
            return "#f3f7f5";
        case "oasis":
            return "#d9e0db";
        case "glowlight":
            return "#d9e0db";
        case "glowlight_plus":
            return "#d9e0db";
        default:
            return "#fff";
    }
}

export const PLUGIN_CLASSES = ["contact-bubble", "ios-sent-bubble", "ios-received-bubble", "ios-android-sent-bubble", "ios-android-received-bubble", "android-sent-bubble", "android-received-bubble"];


/**
 * Dark mode override inline styles
 * Since having an inline style attribute in the element can be used the reset back to the light mode colors
 * We inject the style attribute using Javascript 
 * @param classname
 *  
 */
export function injectStyleAttribute(element: HTMLElement, classList: DOMTokenList) {

    const pluginClassesInElement = Array.from(classList.values()).filter((className) => PLUGIN_CLASSES.includes(className));

    const isHeading = element.tagName.toLowerCase().startsWith("h");

    if (pluginClassesInElement.length === 0 && !isHeading) {
        return;
    }
    let styleString = "";


    
    /**
     * Check Elements (Headings, Subheadings, Subtitle)
     */
    const elementTag = element.tagName.toLowerCase();


    switch (elementTag) {
        case "h1":
            styleString += "color: #000000 !important;";
            break;
        case "h2":
            styleString += "color: #000000 !important;";
            break;
        case "h3":
            styleString += "color: #000000 !important;";
            break;
        case "h4":
            styleString += "color: #000000 !important;";
            break;
        case "h5":
            styleString += "color: #000000 !important;";
            break;
        case "h6":
            styleString += "color: #000000 !important;";
            break;
    }
    
    /**
     * Check Classes
     */
    pluginClassesInElement.forEach((className) => {
        switch (className) {
            case "message-bubble":
                styleString += "color: #ffffff !important;";
                break;
            case "contact-bubble":
                styleString += "color: #aeaeae";
                break;
            case "ios-sent-bubble":
                styleString += "background-color: #056be6; border-color: #056be6;";
                break;
            case "ios-received-bubble":
                styleString += "background-color: #d8d8d8; color: #000000; border-color: #d8d8d8;";
                break;
            case "ios-android-sent-bubble":
                styleString += "background-color: #148527;border-color: #148527; color: #ffffff";
                break;
            case "ios-android-received-bubble":
                styleString += "background-color: #075E54; border-color: #075E54; color: #ffffff";
                break;
            case "android-sent-bubble":
                styleString += "background-color: #075E54; border-color: #075E54; color: #ffffff";
                break;
            case "android-received-bubble":
                styleString += "background-color: #444444; border-color: #444444; color: #ffffff";
                break;

        }
    });
    element.setAttribute("style", styleString);
}








