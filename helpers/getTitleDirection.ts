import { Alignment } from "../types/themeProps"

const titleDirectionOrder = new Map([
    ["right", "rtl"],
    ["left", "ltr"],
    ["center", "inherit"],
]);

export const getTitleDirection = (align: Alignment) => titleDirectionOrder.get(align) || "inherit";