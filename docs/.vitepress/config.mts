import { defineConfig } from "vitepress";
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
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
                        text: "Generic Module",
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
            {
                text: "Helper",
                collapsed: true,
                items: [
                    {
                        text: "Layout Helpers",
                        link: "/guide/helper/layout",
                    },
                    {
                        text: "Attachment Helpers",
                        link: "/guide/helper/attachment",
                    },
                    {
                        text: "Visibility Helpers",
                        link: "/guide/helper/visibility",
                    },
                    {
                        text: "Typography Helpers",
                        link: "/guide/helper/typography",
                    },
                ],
            },
            {
                text: "Layout",
                collapsed: true,
                items: [
                    {
                        text: "Container",
                        link: "/guide/layout/container",
                    },
                    {
                        text: "Grid",
                        link: "/guide/layout/grid",
                    },
                    {
                        text: "Gaper",
                        link: "/guide/layout/gaper",
                    },
                    {
                        text: "Wrapper",
                        link: "/guide/layout/wrapper",
                    },
                    {
                        text: "Padder",
                        link: "/guide/layout/padder",
                    },
                    {
                        text: "Attacher",
                        link: "/guide/layout/attacher",
                    },
                    {
                        text: "Landscape",
                        link: "/guide/layout/landscape",
                    },
                    {
                        text: "Gallery",
                        link: "/guide/layout/gallery",
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
            md.use(tabsMarkdownPlugin);

            md.use(container, "definition", {
                render(tokens, idx) {
                    const token = tokens[idx];
                    if (token.nesting === 1) {
                        return `<div class="custom-block definition">\n`;
                    } else {
                        return "</div>\n";
                    }
                },
            });

            md.use(container, "termeh", {
                render(tokens, idx) {
                    const token = tokens[idx];
                    if (token.nesting === 1) {
                        const title = token.info.trim().slice(6).trim();
                        const titleEl = `<summary class="custom-block-title">
                                <img src="/assets/icon-light.png" class="light-only">
                                <img src="/assets/icon-dark.png" class="dark-only">
                                <span class="title">${
                                    title || "Dependencies"
                                }</span>
                                <span class="termeh-arrow"></span>
                            </summary>`;
                        return `<details class="custom-block termeh">${titleEl}\n`;
                    } else {
                        return `</details>\n`;
                    }
                },
            });
        },
    },
    vite: {
        plugins: [groupIconVitePlugin()],
    },
});
