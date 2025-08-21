import { defineConfig } from "vitepress";
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    cleanUrls: true,
    assetsDir: "static",

    lang: "en-US",
    title: "Termeh",
    description: "Modern, responsive, and modular CSS framework.",

    head: [["link", { rel: "icon", href: "/static/logo.png" }]],

    // https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        search: {
            provider: "local",
        },

        nav: [
            { text: "Home", link: "/" },
            { text: "Guide", link: "/guide/introduction" },
        ],

        sidebar: [
            {
                text: "Introduction",
                collapsed: false,
                items: [
                    {
                        text: "Introduction",
                        link: "/guide/introduction",
                    },
                ],
            },
            {
                text: "Core Concept",
                collapsed: false,
                items: [
                    {
                        text: "Core Concepts",
                        link: "/guide/core/intro",
                    },
                    {
                        text: "Variable",
                        link: "/guide/core/variable",
                    },
                    {
                        text: "Gap",
                        link: "/guide/core/gap",
                    },
                    {
                        text: "Unit",
                        link: "/guide/core/unit",
                    },
                    {
                        text: "Text",
                        link: "/guide/core/text",
                    },
                    {
                        text: "Flexbox",
                        link: "/guide/core/flex",
                    },
                    {
                        text: "Responsive",
                        link: "/guide/core/responsive",
                    },
                    {
                        text: "Color",
                        link: "/guide/core/color",
                    },
                    {
                        text: "Palette",
                        link: "/guide/core/palette",
                    },
                    {
                        text: "Contrast",
                        link: "/guide/core/contrast",
                    },
                    {
                        text: "UI",
                        link: "/guide/core/ui",
                    },
                    {
                        text: "Utils",
                        link: "/guide/core/utils",
                    },
                ],
            },
        ],

        socialLinks: [
            { icon: "npm", link: "https://www.npmjs.com/termeh" },
            { icon: "github", link: "https://github.com/mekramy/termeh" },
        ],
    },

    markdown: {
        config(md) {
            md.use(groupIconMdPlugin);
        },
    },
    vite: {
        plugins: [groupIconVitePlugin()],
    },
});
