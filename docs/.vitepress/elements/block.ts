import type { Token } from "markdown-it";

export default {
    render(tokens: Token[], idx: number) {
        const token = tokens[idx];
        const title = token.info.trim().slice(5).trim();
        if (token.nesting === 1) {
            return `<div class="custom-block is-block">\n<h1 class="title">${title || "Demo"}</h1>`;
        } else {
            return "</div>\n";
        }
    },
};
