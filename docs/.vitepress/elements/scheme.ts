import type { Token } from "markdown-it";

export default {
    render(tokens: Token[], idx: number) {
        const token = tokens[idx];
        if (token.nesting === 1) {
            return `<div class="custom-block is-scheme">\n<p class="custom-block-title">Scheme</p>`;
        } else {
            return "</div>\n";
        }
    },
};
