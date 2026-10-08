import { defineConfig } from "vitepress";

import container from "markdown-it-container";
import markdownItIns from "markdown-it-ins";
import markdownItMark from "markdown-it-mark";
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { fallbacks } from "./fallbacks";

import Definition from "./definition";
import Dependencies from "./dependencies";
import ErrorBlock from "./error";
import Scheme from "./scheme";
import Sidebar from "./sidebar";

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

        sidebar: Sidebar,

        socialLinks: [
            { icon: "npm", link: "https://www.npmjs.com/termeh" },
            { icon: "github", link: "https://github.com/mekramy/termeh" },
        ],
    },

    markdown: {
        config(md) {
            md.use(groupIconMdPlugin);
            md.use(tabsMarkdownPlugin);
            md.use(markdownItIns);
            md.use(markdownItMark);
            md.use(fallbacks);
            md.use(container, "error", ErrorBlock);
            md.use(container, "scheme", Scheme);
            md.use(container, "definition", Definition);
            md.use(container, "dependencies", Dependencies);
        },
    },
    vite: {
        plugins: [groupIconVitePlugin()],
    },
});
