import { defineConfig } from "vitepress";
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import container from "markdown-it-container";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    cleanUrls: true,
    assetsDir: "static",

    lang: "en-US",
    title: "Termeh",
    description: "Modern, responsive, and modular CSS framework.",

    head: [["link", { rel: "icon", href: "/assets/logo.png" }]],

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
                    { text: "Configuration", link: "/guide/configuration" },
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

            {
                text: "Generic",
                collapsed: true,
                items: [
                    {
                        text: "Generic Package",
                        link: "/guide/generic/intro",
                    },
                    {
                        text: "Mini Reset",
                        link: "/guide/generic/minireset",
                    },
                    {
                        text: "Base Styles",
                        link: "/guide/generic/base",
                    },
                    {
                        text: "Heading Styles",
                        link: "/guide/generic/heading",
                    },
                    {
                        text: "Image Styles",
                        link: "/guide/generic/image",
                    },
                    {
                        text: "Table Styles",
                        link: "/guide/generic/table",
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

            md.use(container, "extra", {
                render(tokens, idx) {
                    const token = tokens[idx];
                    if (token.nesting === 1) {
                        const title = token.info.trim().slice(5).trim();
                        const titleEl = title
                            ? `<p class="custom-block-title">${title}</p>`
                            : `<p class="custom-block-title">Extra</p>`;
                        return `<section class="custom-block extra">${titleEl}\n`;
                    } else {
                        return `</section>\n`;
                    }
                },
            });
        },
    },
    vite: {
        plugins: [groupIconVitePlugin()],
    },
});
