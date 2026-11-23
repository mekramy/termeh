import dark from "shiki/themes/catppuccin-frappe.mjs";
// import light from "shiki/themes/github-light-default.mjs";
import light from "shiki/themes/snazzy-light.mjs";

const lightTheme = {
    ...light,
    name: "light-custom",
    tokenColors: [
        ...(light.tokenColors ?? []),

        // Strings
        {
            scope: ["string"],
            settings: { foreground: "#179820" },
        },

        // Some
        {
            scope: [
                // Values
                "constant.numeric",
                "constant,constant.character",
                // Colors
                "support.constant.color",
                "constant.other.color.rgb-value",
                // Constants
                "support.constant.property-value",
            ],
            settings: { foreground: "#FF5C57CC" },
        },

        // Units
        {
            scope: ["keyword.other.unit"],
            settings: { foreground: "#11658F" },
        },
    ],
};

const darkTheme = {
    ...dark,
    name: "dark-custom",
    tokenColors: [
        ...(dark.tokenColors ?? []),
        // Variables
        {
            scope: ["variable.scss", "punctuation.definition.variable.scss"],
            settings: { foreground: "#C6D0F5" },
        },
    ],
};

export default {
    light: lightTheme,
    dark: darkTheme,
};
