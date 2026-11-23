import type { Token } from "markdown-it";

export default {
    render(tokens: Token[], idx: number) {
        const token = tokens[idx];
        const title = token.info.trim().slice(8).trim();
        if (token.nesting === 1) {
            return title
                ? `<div class="note custom-block">\n<h1 class="title">${title}</h1>`
                : `<div class="note custom-block">\n`;
        } else {
            return "</div>\n";
        }
    },
};
