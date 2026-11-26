import type MarkdownIt from "markdown-it";
import type { Highlighter } from "shiki";
import theme from "../theme";

export function inlineCode(md: MarkdownIt, getHighlighter: () => Highlighter) {
    md.renderer.rules.code_inline = (tokens, idx) => {
        const token = tokens[idx];

        const isScss = token.attrs?.some(([key]) => key === "scss") ?? false;

        if (!isScss) {
            return `<code v-pre>${md.utils.escapeHtml(token.content)}</code>`;
        }

        const html = getHighlighter().codeToHtml(token.content, {
            lang: "sass",
            themes: theme as never,
            defaultColor: false,
        });
        const code = html.match(/<code\b[^>]*>([\s\S]*?)<\/code>/);

        return `<code v-pre class="vp-code">${
            code ? code[1] : md.utils.escapeHtml(token.content)
        }</code>`;
    };
}
