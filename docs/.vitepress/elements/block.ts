import type { Token } from "markdown-it";

export default {
    render(tokens: Token[], idx: number) {
        const token = tokens[idx];
        const title = token.info.trim().slice(5).trim();
        if (token.nesting === 1) {
            return `<div class="custom-block is-block">\n
                <p class="custom-block-title">${title || "Demo"}</p>`;
        } else {
            return "</div>\n";
        }
    },
};
