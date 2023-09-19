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
        BerkshireSwash: {
            C: {
                "font-size": "2.2rem",
                "margin-right": "0.425rem",
                padding: "0.15rem 0.25rem 0rem",
            },
            G: {
                "font-size": "2rem",
                "margin-left": "-0.18rem",
                "margin-right": "0.325rem",
                padding: "0.18rem 0.25rem 0rem"
            },
            H: {
                "font-size": "1.8rem",
                padding: "0.4rem 0.25rem 0rem",
                "margin-right": "0.45rem",
            },
            J: {
                "font-size": "2.1rem",
                "margin-right": "0.2rem",
                padding: "0.18rem 0.25rem 0rem"
            },
            K: {
                "font-size": "2.1rem",
                "margin-left": "-0.1rem",
                "margin-right": "0.55rem",
                padding: "0.2rem 0.25rem 0rem"
            },
            M: {
                "font-size": "2.1rem",
                padding: "0.5rem 0.25rem 0rem",
                "margin-right": "0.4rem",
            },
            N: {
                "font-size": "2.1rem",
                padding: "0.2rem 0.25rem 0rem",
                "margin-right": "0.525rem",
            },
            Q: {
                "font-size": "2.1rem",
                "margin-left": "-0.2rem",
                "margin-right": "0.4rem",
                padding: "0.1rem 0.25rem 0rem",
            },
            R: {
                "font-size": "2.15rem",
                "margin-left": "-0.1rem",
                "margin-right": "0.55rem",
                padding: "0.15rem 0.25rem 0rem",
            },
            S: {
                "font-size": "2.2rem",
                "margin-left": "-0.15rem",
                "margin-right": "0.225rem",
                padding: "0.2rem 0.25rem 0rem",
            },
            Y: {
                "font-size": "1.9rem",
                "margin-left": "0.09rem",
                "margin-right": "0.5rem",
                padding: "0.2rem 0.25rem 0rem",
            },
            default: {
                "font-size": "2.4rem",
                "margin-right": "0.35rem",
                padding: "0.18rem 0.25rem 0rem",
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