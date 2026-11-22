import container from "markdown-it-container";
import type { Highlighter } from "shiki";
import { defineConfig } from "vitepress";
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import llmstxt from "vitepress-plugin-llms";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import theme from "./theme";

import {
    inlineCode,
    inline_marks_plugin,
    tableFallbackPlugin,
} from "./plugins";

import ErrorBlock from "./elements/quote.error";
import ModuleBlock from "./elements/quote.module";

import Block from "./elements/block";
import Appendix from "./elements/block.appendix";
import Resolver from "./elements/block.resolver";
import Scheme from "./elements/scheme";
import Signature from "./elements/signature";
import Sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
let highlighter: Highlighter;
export default defineConfig({
    cleanUrls: true,
    assetsDir: "static",

    lang: "en-US",
    title: "Termeh",
    description: "Modern, responsive, and modular CSS framework.",

    head: [
        ["link", { rel: "icon", href: "/assets/logo.png" }],
        [
            "script",
            {},
            `
                document.addEventListener("click", (event) => {
                    const target = event.target;
                    if (!(target instanceof Element)) return;
                    if (!target.closest("h1 + blockquote a")) return;

                    event.preventDefault();
                    event.stopImmediatePropagation();
                }, true);
            `,
        ],
    ],

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

        shikiSetup(instance) {
            highlighter = instance;
        },

        config(md) {
            md.use(groupIconMdPlugin as never);
            md.use(tabsMarkdownPlugin as never);

            md.use(inlineCode as never, highlighter);
            md.use(tableFallbackPlugin);
            md.use(inline_marks_plugin);

            md.use(container as never, "error", ErrorBlock);
            md.use(container as never, "module", ModuleBlock);

            md.use(container as never, "scheme", Scheme);
            md.use(container as never, "signature", Signature);

            md.use(container as never, "block", Block);
            md.use(container as never, "appendix", Appendix);
            md.use(container as never, "resolver", Resolver);
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
