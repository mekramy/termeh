import type MarkdownIt from "markdown-it";
import type { Highlighter } from "shiki";
import theme from "../theme";

export function inlineCode(md: MarkdownIt, highlighter: Highlighter) {
    md.inline.ruler.before("backticks", "inline_shiki", (state, silent) => {
        const start = state.pos;

        if (state.src.charCodeAt(start) !== 0x60) return false;

        const match = state.src
            .slice(start)
            .match(/^(`+)([\s\S]+?)\1\{([\w+-]+)\}/);

        if (!match) return false;

        if (silent) return true;

        const token = state.push("inline_shiki", "code", 0);

        token.content = match[2];
        token.meta = { lang: match[3] };

        state.pos += match[0].length;

        return true;
    });

    md.renderer.rules.inline_shiki = (tokens, index) => {
        const token = tokens[index];

        const html = highlighter.codeToHtml(token.content, {
            defaultColor: false,
            lang: token.meta.lang,
            themes: theme as never,
        });

        const code = html.match(/<code\b[^>]*>([\s\S]*?)<\/code>/);

        if (!code) return md.utils.escapeHtml(token.content);

        return `<code class="vp-code">${code[1]}</code>`;
    };
}
