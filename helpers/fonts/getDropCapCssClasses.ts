type CharacterFontStyle = {
    "font-size"?: string;
    "margin-left"?: string;
    "margin-right"?: string;
    padding?: string;
    transform?: string;
    "line-height"?: number;
}

type FontStyles = Record<string, Record<string, CharacterFontStyle>>;

const baseFontSize = 15; //html font size
const dropcapBaseFontSize = 12; // dropcap default font size
const adjustFontSize = (originalSizeRem: string | number) => {
    return `${parseFloat(originalSizeRem.toString()) / baseFontSize * dropcapBaseFontSize}rem`;
};

const getDropCapFontCss = (fontFamily: string, letter: string, isPreviewer: boolean) => {
    const fontStyles: FontStyles = {
        AbrilFatface: {
            C: {
                "font-size": isPreviewer ? "3.3rem" : "3.0rem",
                "margin-left": "-0.3rem",
                "margin-right": "0.1rem",
                padding: isPreviewer ? "0.23rem 0.25rem 0rem" : "0.3rem 0.25rem 0rem",
                transform: "scale(0.9)",
                "line-height": 0.7
            },
            G: {
                "font-size": isPreviewer ? "3.3rem" : "3.0rem",
                "margin-left": "-0.3rem",
                "margin-right": "0.1rem",
                padding: isPreviewer ? "0.23rem 0.25rem 0rem" : "0.3rem 0.25rem 0rem",
                transform: "scale(0.9)",
                "line-height": 0.7
            },
            O: {
                "font-size": isPreviewer ? "3.3rem" : "3.0rem",
                "margin-left": "-0.3rem",
                "margin-right": "0.1rem",
                padding: isPreviewer ? "0.23rem 0.25rem 0rem" : "0.3rem 0.25rem 0rem",
                transform: "scale(0.9)",
                "line-height": 0.7
            },
            Q: {
                "font-size": isPreviewer ? "2.7rem" : "2.3rem",
                "margin-left": "-0.3rem",
                "margin-right": "0.1rem",
                padding: isPreviewer ? "0.1rem 0.25rem 0rem" : "0.35rem 0.25rem 0rem",
                transform: "scale(0.9)",
                "line-height": 0.7
            },
            S: {
                "font-size": isPreviewer ? "3.3rem" : "3.0rem",
                "margin-left": "-0.3rem",
                "margin-right": "0.1rem",
                padding: isPreviewer ? "0.23rem 0.25rem 0rem" : "0.3rem 0.25rem 0rem",
                transform: "scale(0.9)",
                "line-height": 0.7
            },
            default: {
                "font-size": isPreviewer ? "3.3rem" : "3.1rem",
                "margin-left": "-0.3rem",
                "margin-right": "0.1rem",
                padding: isPreviewer ? "0.23rem 0.25rem 0rem" : "0.3rem 0.25rem 0rem",
                transform: "scale(0.9)",
                "line-height": 0.7
            }
        },
        ArchitectsDaughter: {
            default: {
                "font-size": isPreviewer ? "3rem" : "2.9rem",
                "margin-right": "0.35rem",
                padding: "0 0.25rem",
            }
        },
        Comfortaa : {
            default: {
                "font-size": "2.49rem",
                "margin-right": "0.35rem",
                padding: "0.3rem 0.125rem 0.25rem",
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
        ImperialScript: {
            A: {
                "font-size": "4.2rem",
                "margin-right": "1.4rem",
                padding: "0.05rem 0.325rem 0rem",
                transform: "scale(1.2)",
            },
            B: {
                "font-size": "4.6rem",
                "margin-right": "0.8rem",
                padding: "0.05rem 0rem",
                transform: "scale(1.2)",
            },
            C: {
                "font-size": "4.4rem",
                "margin-right": "1.3rem",
                padding: "0.1rem 0.1rem 0rem",
                transform: "scale(1.2)",
            },
            D: {
                "font-size": "4.65rem",
                "margin-right": "0.4rem",
                padding: "0.05rem 0.5rem 0rem",
                transform: "scale(1.2)",
            },
            E: {
                "font-size": "4.6rem",
                "margin-right": "1rem",
                padding: "0.03rem 0rem 0rem",
                transform: "scale(1.2)",
                "line-height": 0.9
            },
            F: {
                "font-size": "4.7rem",
                "margin-right": "1.7rem",
                padding: "0.03rem 0.4rem 0rem",
                transform: "scale(1.2)",
                "line-height": 0.9
            },
            G: {
                "font-size": "3.1rem",
                "margin-right": "0.9rem",
                padding: "0.1rem 0rem 0rem",
                transform: "scale(1.2)",
                "line-height": 1.2
            },
            H: {
                "font-size": "4.3rem",
                "margin-right": "1.8rem",
                padding: "0.2rem 0.4rem 0rem",
                transform: "scale(1.2)",
            },
            I: {
                "font-size": "4.5rem",
                "margin-right": "1.8rem",
                padding: "0.05rem 0.2rem 0rem",
                transform: "scale(1.2)",
            },
            J: {
                "font-size": "3.6rem",
                "margin-right": "1.1rem",
                padding: "0rem 0.32rem 0rem",
                transform: "scale(1.2)",
            },
            K: {
                "font-size": "4.1rem",
                "margin-right": "1.9rem",
                padding: "0rem 0.4rem 0rem",
                transform: "scale(1.2)",
            },
            L: {
                "font-size": "4.6rem",
                "margin-right": "1.5rem",
                padding: "0rem 0.55rem 0rem",
                transform: "scale(1.2)",
            },
            M: {
                "font-size": "4.2rem",
                "margin-right": "2.5rem",
                padding: "0.25rem 0.35rem 0rem",
                transform: "scale(1.2)",
            },
            N: {
                "font-size": "4.0rem",
                "margin-right": "2.8rem",
                padding: "0.25rem 0.15rem 0rem",
                transform: "scale(1.2)",
            },
            O: {
                "font-size": "4.4rem",
                "margin-right": "1rem",
                padding: "0.325rem 0rem 0rem",
                transform: "scale(1.2)",
                "line-height": 0.9
            },
            P: {
                "font-size": "4.3rem",
                "margin-right": "1.5rem",
                padding: "0.325rem 0.25rem 0rem",
                transform: "scale(1.2)",
                "line-height": 0.9
            },
            Q: {
                "font-size": "4.6rem",
                "margin-right": "1rem",
                padding: "0.325rem 0.rem 0rem",
                transform: "scale(1.2)",
                "line-height": 0.85
            },
            R: {
                "font-size": "4.6rem",
                "margin-right": "1.1rem",
                padding: "0.325rem 0rem 0rem",
                transform: "scale(1.2)",
                "line-height": 0.85
            },
            S: {
                "font-size": "4.2rem",
                "margin-right": "0.2rem",
                padding: "0.325rem 0.5rem 0rem",
                transform: "scale(1.2)",
                "line-height": 0.9
            },
            T: {
                "font-size": "4.54rem",
                "margin-right": "1.7rem",
                padding: "0.4rem 0.5rem 0rem",
                transform: "scale(1.2)",
                "line-height": 0.8
            },
            U: {
                "font-size": "4rem",
                "margin-right": "1.3rem",
                padding: "0.4rem 0.45rem 0rem",
                transform: "scale(1.2)",
            },
            V: {
                "font-size": "4.21rem",
                "margin-right": "2.7rem",
                padding: "0.45rem 0.1rem 0rem",
                transform: "scale(1.2)",
                "line-height": 0.9
            },
            W: {
                "font-size": "4.21rem",
                "margin-right": "2.4rem",
                padding: "0.45rem 0.4rem 0rem",
                transform: "scale(1.2)",
                "line-height": 0.9
            },
            X: {
                "font-size": "4.0rem",
                "margin-right": "0.6rem",
                padding: "0.45rem 0.7rem 0rem",
                transform: "scale(1.2)",
                "line-height": 0.75
            },
            Y: {
                "font-size": "3.04rem",
                "margin-right": "1.2rem",
                padding: isPreviewer ? "0.47rem 0.2rem 1rem" : "0.47rem 0.2rem 0rem",
                transform: "scale(1.2)",
                "line-height": 0.9
            },
            Z: {
                "font-size": "3.04rem",
                "margin-right": "0.6rem",
                padding: isPreviewer ? "0.47rem 0.2rem 1rem" : "0.47rem 0.2rem 0rem",
                transform: "scale(1.2)",
                "line-height": 0.9
            },
        },
        EuphoriaScript: {
            A: {
                "font-size": "2.5rem",
                padding: "0.3rem 0.2rem 0rem"
            },
            C: {
                "font-size": "2.65rem",
                padding: "0.25rem 0rem 0rem",
                "margin-right": "0.4rem"
            },
            F: {
                "font-size": "2.5rem",
                padding: "0.3rem 0.2rem 0rem",
                "margin-right": "0.2rem"
            },
            G: {
                "font-size": "2.2rem",
                padding: "0.2rem 0.1rem 0rem",
                "margin-right": "0.15rem"
            },
            I: {
                "font-size": "2.65rem",
                padding: "0.25rem 0.1rem 0rem",
                "margin-right": "0.25rem"
            },
            J: {
                "font-size": "2.4rem",
                padding: "0.2rem 0.1rem 0rem",
                "margin-right": "0.25rem"
            },
            K: {
                "font-size": "2.35rem",
                padding: "0.2rem 0.1rem 0rem",
                "margin-right": "0.45rem"
            },
            L: {
                "font-size": "2.35rem",
                padding: "0.2rem 0.2rem 0rem",
                "margin-right": "0.45rem"
            },
            M: {
                "font-size": "2.65rem",
                padding: "0.25rem 0.1rem 0rem",
                "margin-right": "0.25rem"
            },
            N: {
                "font-size": "2.65rem",
                padding: "0.25rem 0.1rem 0rem",
                "margin-right": "0.25rem"
            },
            O: {
                "font-size": "2.86rem",
                padding: "0.2rem 0rem 0rem",
                "margin-right": "0.35rem",
                "margin-left": "-0.1rem"
            },
            P: {
                "font-size": "2.85rem",
                padding: "0.2rem 0.1rem 0rem",
                "margin-right": "0.45rem"
            },
            Q: {
                "font-size": "2.35rem",
                padding: "0.2rem 0.1rem 0rem",
                "margin-right": "0.4rem"
            },
            R: {
                "font-size": "2.55rem",
                padding: "0.25rem 0.1rem 0rem",
                "margin-right": "0.35rem"
            },
            S: {
                "font-size": "2.55rem",
                padding: "0.25rem 0.1rem 0rem",
                "margin-right": "0.2rem"
            },
            T: {
                "font-size": "2.45rem",
                padding: "0.38rem 0.1rem 0rem",
                "margin-right": "0.65rem"
            },
            U: {
                "font-size": "2.65rem",
                padding: "0.25rem 0.1rem 0rem",
                "margin-right": "0.25rem"
            },
            V: {
                "font-size": "2.7rem",
                padding: "0.25rem 0.1rem 0rem",
                "margin-right": "0.35rem"
            },
            W: {
                "font-size": "2.7rem",
                padding: "0.25rem 0.1rem 0rem",
                "margin-right": "0.35rem"
            },
            X: {
                "font-size": "2.55rem",
                padding: "0.25rem 0.1rem 0rem",
                "margin-right": "0.5rem"
            },
            Y: {
                "font-size": "2.2rem",
                padding: "0.2rem 0.1rem 0rem",
                "margin-right": "0.15rem"
            },
            Z: {
                "font-size": "2.35rem",
                padding: "0.2rem 0.1rem 0rem",
                "margin-right": "0.45rem"
            },
            default: {
                "font-size": "2.65rem",
                padding: "0.25rem 0.17rem 0rem",
                "margin-right": "0.2rem"
            }
        },
        CinzelDecorative: {
            A: {
                "font-size": "2rem",
                padding: "0.3rem 0.1rem 0rem",
                "margin-right": "0.7rem"
            },
            B: {
                "font-size": isPreviewer ? "2.8rem" : "2.5rem",
                padding: "0.1rem 0.1rem 0rem",
                "margin-right": "0.325rem"
            },
            C: {
                "font-size": isPreviewer ? "2.8rem" : "2.5rem",
                padding: "0.1rem 0.1rem 0rem",
                "margin-right": "0.325rem"
            },
            D: {
                "font-size": "2.8rem",
                padding: "0.1rem 0.4rem 0rem",
                "margin-right": "0.125rem"
            },
            E: {
                "font-size": "2.4rem",
                padding: "0.3rem 0rem 0rem",
                "margin-right": "0.4rem",
                "margin-left": "-0.1rem"
            },
            F: {
                "font-size": "2.4rem",
                padding: "0.3rem 0rem 0rem",
                "margin-right": "0.4rem",
                "margin-left": "-0.1rem"
            },
            G: {
                "font-size": "2.1rem",
                padding: "0.25rem 0rem 0rem",
                "margin-right": "0.9rem"
            },
            H: {
                "font-size": "2.1rem",
                padding: "0.325rem 0rem 0rem",
                "margin-right": "0.4rem"
            },
            J: {
                "font-size": "2.2rem",
                padding: "0.25rem 0.2rem 0rem",
                "margin-right": "0.1rem"
            },
            K: {
                "font-size": "2rem",
                padding: "0.3rem 0rem 0rem",
                "margin-right": "0.8rem",
                "margin-left": "-0.1rem"
            },
            L: {
                "font-size": "2rem",
                padding: "0.25rem 0rem 0rem",
                "margin-right": "1.4rem",
                "margin-left": "-0.2rem"
            },
            M: {
                "font-size": "1.9rem",
                padding: "0.5rem 0.45rem 0rem",
                "margin-right": "0.25rem"
            },
            N: {
                "font-size": "1.9rem",
                padding: "0.5rem 0.45rem 0rem",
                "margin-right": "0.25rem"
            },
            O: {
                "font-size": isPreviewer ? "2.86rem" : "2.5rem",
                padding: "0.2rem 0rem 0rem",
                "margin-right": "0.35rem",
                "margin-left": "-0.1rem"
            },
            P: {
                "font-size": "2.4rem",
                padding: "0.3rem 0rem 0rem",
                "margin-right": "0.4rem",
                "margin-left": "-0.1rem"
            },
            Q: {
                "font-size": "2rem",
                padding: "0.25rem 0rem 0rem",
                "margin-right": "1.6rem"
            },
            R: {
                "font-size": "2rem",
                padding: "0.3rem 0rem 0rem",
                "margin-right": "0.8rem",
                "margin-left": "-0.1rem"
            },
            S: {
                "font-size": "2.3rem",
                padding: "0.25rem 0rem 0rem",
                "margin-right": "0.4rem"
            },
            T: {
                "font-size": "2.8rem",
                padding: "0.1rem 0.4rem 0rem",
                "margin-right": "0.125rem"
            },
            U: {
                "font-size": "2.16rem",
                padding: "0.6rem 0rem 0rem",
                "margin-right": "0.55rem",
                "margin-left": "-0.1rem"
            },
            V: {
                "font-size": "2rem",
                padding: "0.75rem 0rem 0rem",
                "margin-right": "0.8rem"
            },
            W: {
                "font-size": "1.7rem",
                padding: "0.7rem 0rem 0rem",
                "margin-right": "0.75rem"
            },
            X: {
                "font-size": "1.9rem",
                padding: "0.5rem 0.45rem 0rem",
                "margin-right": "0.25rem"
            },
            Y: {
                "font-size": "2.4rem",
                padding: "0.3rem 0rem 0rem",
                "margin-right": "0.4rem"
            },
            Z: {
                "font-size": "2.1rem",
                padding: "0.25rem 0.1rem 0rem",
                "margin-right": "1.1rem"
            },
            default: {
                "font-size": "2.8rem",
                padding: "0.1rem 0.1rem 0rem",
                "margin-right": "0.325rem"
            }
        },
        Kalam: {
            C: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.53rem",
                "margin-left": "-0.23rem",
                "line-height": 0.8,
            },
            D: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.6rem",
                "margin-left": "-0.3rem",
                "line-height": 0.8,
            },
            E: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.625rem",
                "margin-left": "-0.1rem",
                "line-height": 0.8,
            },
            F: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.775rem",
                "margin-left": "-0.1rem",
                "line-height": 0.8,
            },
            G: {
                "font-size": "4.1rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.25rem",
                "margin-left": "-0.1rem",
                "line-height": 0.8,
            },
            H: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.525rem",
                "margin-left": "-0.1rem",
                "line-height": 0.8,
            },
            I: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.6rem",
                "margin-left": "-0.3rem",
                "line-height": 0.8,
            },
            J: {
                "font-size": "4.8rem",
                padding: "0.65rem 0rem 0rem",
                "margin-right": "0.625rem",
                "line-height": 0.8,
            },
            M: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.525rem",
                "margin-left": "-0.1rem",
                "line-height": 0.8,
            },
            O: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.6rem",
                "margin-left": "-0.23rem",
                "line-height": 0.8,
            },
            P: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.525rem",
                "margin-left": "-0.1rem",
                "line-height": 0.8,
            },
            Q: {
                "font-size": "4rem",
                padding: "0.65rem 0rem 0rem",
                "margin-right": "0.25rem",
                "margin-left": "-0.1rem",
                "line-height": 0.8,
            },
            T: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.75rem",
                "margin-left": "-0.1rem",
                "line-height": 0.8,
            },
            U: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.6rem",
                "margin-left": "-0.3rem",
                "line-height": 0.8,
            },
            V: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.825rem",
                "margin-left": "-0.3rem",
                "line-height": 0.8,
            },
            W: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.455rem",
                "margin-left": "-0.1rem",
                "line-height": 0.8,
            },
            X: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.525rem",
                "margin-left": "-0.1rem",
                "line-height": 0.8,
            },
            Y: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.725rem",
                "margin-left": "-0.3rem",
                "line-height": 0.8,
            },
            Z: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.5rem",
                "margin-left": "-0.1rem",
                "line-height": 0.8,
            },
            default: {
                "font-size": "4.7rem",
                padding: "0.8rem 0rem 0rem",
                "margin-right": "0.325rem",
                "line-height": 0.8,
            }
        },
        CaviarDreams: {
            A: {
                "font-size": "4.25rem",
                padding: "0.1rem 0.1rem 0rem",
                "margin-right": "0.4rem",
            },
            Q: {
                "font-size": "3.63rem",
                padding: "0.1rem 0.1rem 0rem",
                "margin-right": "0.4rem",
                "margin-left": "-0.2rem"
            },
            S: {
                "font-size": "4.25rem",
                padding: "0.1rem 0.1rem 0rem",
                "margin-right": "0.4rem",
            },
            T: {
                "font-size": "4.25rem",
                padding: "0.1rem 0.1rem 0rem",
                "margin-right": "0.4rem",
            },
            X: {
                "font-size": "4.25rem",
                padding: "0.1rem 0.1rem 0rem",
                "margin-right": "0.4rem",
            },
            default: {
                "font-size": "4.25rem",
                padding: "0.1rem 0rem 0rem",
                "margin-right": "0.4rem",
                "margin-left": "-0.15rem"
            }
        },
        ThreeDumb: {
            R: {
              "font-size": isPreviewer ? "2.45rem" : "2.4rem",
            },
            S: {
              "font-size": isPreviewer ? "2.3rem" : "2.3rem",
              padding: "0.15rem 0.25rem 0rem",
            },
            T: {
              "font-size": isPreviewer ? "2.45rem" : "2.4rem",
            },
            U: {
              "font-size": isPreviewer ? "2.5rem" : "2.4rem",
            },
            W: {
              "font-size": isPreviewer ? "2.4rem" : "2.2rem",
            },
            X: {
              "font-size": isPreviewer ? "2.5rem" : "2.45rem",
            },
            Y: {
              "font-size": isPreviewer ? "2.4rem" : "2.35rem",
            },
            Z: {
              "font-size": isPreviewer ? "2.4rem" : "2.35rem",
            },
            default: {
              "font-size": isPreviewer ? "2.4rem" : "2.3rem",
              padding: "0.1rem 0.25rem 0rem",
            },
        },
        Chomsky:{
            A: {
                "font-size": "4.4rem",
                "padding": "0.3rem 0.5rem 0rem 0.23rem",
            },
            B: {
                "font-size":  "4.2rem",
                "line-height": 0.8,
                padding: "0.8rem 0.5rem 0rem 0rem",
            },
            C: {
                "font-size": "4.2rem",
                "line-height": 0.8,
                padding: "0.9rem 0.5rem 0rem 0rem",
            },
            F: {
                "font-size": "3.7rem",
                "line-height": 0.75,
                padding: "0.8rem 0.4rem 0rem 0.21rem",
            },
            I: {
                "font-size": "3.8rem",
                "line-height": 0.75,
                padding: "0.9rem 0.5rem 0rem 0rem",
            },
            J: {
                "font-size": "3.8rem",
                "line-height": 0.75,
                padding: "0.9rem 0.5rem 0rem 0rem",
            },
            M: {
                "font-size": "3.75rem",
                "line-height": 0.8,
                padding: "0.8rem 0.5rem 0rem 0.15rem",
            },
            N: {
                "font-size": "3.85rem",
                "line-height": 0.8,
                padding: "0.8rem 0.5rem 0rem 0.15rem",
            },
            P: {
                "font-size": "3.9rem",
                "line-height": 0.8,
                padding: "0.7rem 0.5rem 0rem 0rem",
            },
            Q: {
                "font-size": "3.8rem",
                "line-height": 0.8,
                padding: "0.7rem 0.5rem 0rem 0.15rem",
            },
            S: {
                "font-size": "3.5rem",
                "line-height": 0.8,
                padding: "0.85rem 0.5rem 0rem 0rem",
            },
            X: {
                "font-size": "3.8rem",
                "line-height": 0.75,
                padding: "0.9rem 0.5rem 0rem 0rem",
            },
            Y: {
                "font-size": "3.4rem",
                "line-height": 0.75,
                padding: "0.8rem 0.5rem 0rem 0rem",
            },
            default: {
                "font-size": "4.2rem",
                "line-height": 0.75,
                padding: "0.9rem 0.5rem 0rem 0rem",
            },
        }

    };

    const fontFamilyStyles = fontStyles[fontFamily] || {};
    const styles = fontFamilyStyles[letter] || fontFamilyStyles.default || {};

    // Adjust font size if it exists in styles and isPreviewer is true
    if (isPreviewer) {
        const styleKeys = ["font-size", "margin-left", "margin-right"] as const;
        styleKeys.forEach((prop) => {
            if (styles[prop]) styles[prop] = adjustFontSize(styles[prop] as string);
        });
    
        if (styles["line-height"]) {
            styles["line-height"] = parseFloat(adjustFontSize(styles["line-height"]));
        }
    }

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
            cssString += `.${prefixRule} .withDropcap .dropcap.letter_${letter} {\n  ${fontRule}\n}\n`;
        }
    }

    return cssString;
};