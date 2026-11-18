import dark from "shiki/themes/catppuccin-frappe.mjs";
// import light from "shiki/themes/github-light-default.mjs";
import light from "shiki/themes/rose-pine-dawn.mjs";

export default {
    dark: {
        ...dark,
        name: "dark-custom",
        tokenColors: [
            ...(dark.tokenColors ?? []),
            // Variables
            {
                scope: [
                    "variable.scss",
                    "punctuation.definition.variable.scss",
                ],
                settings: { foreground: "#C6D0F5" },
            },
        ],
    },
    light: {
        ...light,
        name: "light-custom",
        tokenColors: [
            ...(light.tokenColors ?? []),

            // Symbols
            {
                scope: [
                    "comment",
                    "punctuation",
                    "invalid.deprecated",
                    "meta.tag.other.html",
                ],
                settings: { foreground: "#90A4AE" },
            },

            // Strings
            {
                scope: [
                    "string.quoted.double.scss",
                    "string.quoted.single.scss",
                    "punctuation.definition.string.begin.scss",
                    "punctuation.definition.string.end.scss",
                ],
                settings: { foreground: "#179820" },
            },

            // Variables
            {
                scope: ["variable"],
                settings: { foreground: "#7d819e" },
            },

            // Keywords
            {
                scope: [
                    "keyword.control.at-rule",
                    "keyword.control.if",
                    "keyword.control.else",
                    "keyword.control.return",
                    "punctuation.definition.keyword.scss",
                ],
                settings: { foreground: "#7209b7" },
            },

            // Functions
            {
                scope: [
                    "entity.name",
                    "constant.numeric",
                    "constant.language",
                    "support.function",
                ],
                settings: { foreground: "#0466c8" },
            },

            // Values
            {
                scope: [
                    "punctuation.definition.string",
                    "string",
                    "support.constant",
                ],
                settings: { foreground: "#174781" },
            },

            // Property
            {
                scope: [
                    "entity.name.section",
                    "entity.name.tag",
                    "entity.name.namespace",
                    "entity.name.type",
                    "markup.inserted.diff",
                    "meta.property-name.css",
                    "support",
                ],
                settings: { foreground: "#014f86" },
            },
        ],
    },
};
