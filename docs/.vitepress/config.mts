import container from "markdown-it-container";
import type { Highlighter } from "shiki";
import { defineConfig } from "vitepress";
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import llmstxt from "vitepress-plugin-llms";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

import Sidebar from "./sidebar";
import theme from "./theme";

import Alert from "./elements/alert";
import Error from "./elements/alert.error";
import Info from "./elements/alert.info";
import Tip from "./elements/alert.tip";
import Warn from "./elements/alert.warn";

import Block from "./elements/block";
import Appendix from "./elements/block.appendix";
import Signature from "./elements/block.signature";

import { inlineCode, tableFallbackPlugin } from "./plugins";

// https://vitepress.dev/reference/site-config
let highlighter: Highlighter;
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
        theme: theme as never,
        defaultHighlightLang: "scss",

        shikiSetup(instance) {
            highlighter = instance;
        },

        config(md) {
            md.use(groupIconMdPlugin as never);
            md.use(tabsMarkdownPlugin as never);

            md.use(container as never, "alert", Alert);
            md.use(container as never, "tip", Tip);
            md.use(container as never, "info", Info);
            md.use(container as never, "warn", Warn);
            md.use(container as never, "error", Error);

            md.use(container as never, "block", Block);
            md.use(container as never, "appendix", Appendix);
            md.use(container as never, "signature", Signature);

            md.use(tableFallbackPlugin);
            md.use(inlineCode as never, () => highlighter);
        },
    },
    vite: {
        plugins: [
            llmstxt({
                ignoreFilesPerOutput: {
                    llmsTxt: ["ai.md"],
                    llmsFullTxt: ["ai.md"],
                },
            }),
            groupIconVitePlugin(),
        ],
    },
});
