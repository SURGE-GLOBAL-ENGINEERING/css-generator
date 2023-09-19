type CharacterFontStyle = {
    "font-size"?: string;
    "margin-left"?: string;
    "margin-right"?: string;
    padding?: string;
}

type FontStyles = Record<string, Record<string, CharacterFontStyle>>;

const getDropCapFontCss = (fontFamily: string, letter: string, isPreviewer: boolean) => {
    const fontStyles: FontStyles = {
        ArchitectsDaughter: {
            default: {
                "font-size": isPreviewer ? "3rem" : "2.9rem",
                "margin-right": "0.35rem",
                padding: "0 0.25rem",
            }
        },
        FrederickatheGreat: {
            Q: {
                "font-size": "3.6rem",
                "margin-left": "-0.1rem",
                padding: "0.15rem 0.35rem 0rem",
            },
            S: {
                "font-size": "4.2rem",
                "margin-left": "-0.4rem",
                padding: "0.25rem 0.35rem 0rem",
            },
            V: {
                "font-size": isPreviewer ? "4.2rem" : "3.6rem",
                "margin-left": "0.46rem",
                "margin-right": "0.8rem",
                padding: "0.25rem 0.25rem 0rem",
            },
            W: {
                "font-size": isPreviewer ? "4.2rem" : "3.6rem",
                "margin-left": "0.46rem",
                "margin-right": "0.8rem",
                padding: "0.25rem 0.25rem 0rem",
            },
            Y: {
                "font-size": isPreviewer ? "4.2rem" : "3.6rem",
                "margin-left": "0.46rem",
                "margin-right": "0.85rem",
                padding: "0.25rem 0.25rem 0rem",
            },
            default: {
                "font-size": "4.2rem",
                "margin-left": "0.1rem",
                padding: "0.25rem 0.45rem 0rem",
            }
        },
    };

    const fontFamilyStyles = fontStyles[fontFamily] || {};
    const styles = fontFamilyStyles[letter] || fontFamilyStyles.default || {};

    const css = Object.entries(styles)
        .map(([property, value]) => `${property}: ${value};`)
        .join("\n  ");

    return css;
};

export const getDropCapCssClasses = (fontFamily: string, prefixRule: string, isPreviewer: boolean) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let cssString = "";

    for (let letter of alphabet) {
        const fontRule = getDropCapFontCss(fontFamily, letter, isPreviewer);
        if (fontRule) {
            cssString += `${prefixRule}.withDropcap .dropcap.letter_${letter} {\n  ${fontRule}\n}\n`;
        }
    }

    return cssString;
};