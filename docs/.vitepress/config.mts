import type { Highlighter } from "shiki";

import { defineConfig } from "vitepress";

import container from "markdown-it-container";
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

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

let highlighter: Highlighter;

// https://vitepress.dev/reference/site-config
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
        shikiSetup(instance) {
            highlighter = instance;
        },

        config(md) {
            md.use(groupIconMdPlugin as never);
            md.use(tabsMarkdownPlugin as never);

            md.use(inlineCode as never, highlighter);
            md.use(tableFallbackPlugin);
            md.use(inline_marks_plugin);

            md.use(container, "error", ErrorBlock);
            md.use(container, "module", ModuleBlock);

            md.use(container, "scheme", Scheme);
            md.use(container, "signature", Signature);

            md.use(container, "block", Block);
            md.use(container, "appendix", Appendix);
            md.use(container, "resolver", Resolver);
        },
    },
    vite: {
        plugins: [groupIconVitePlugin()],
    },
});
