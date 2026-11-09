import type { Token } from "markdown-it";

export default {
    render(tokens: Token[], idx: number) {
        const token = tokens[idx];
        const title = token.info.trim().slice(9).trim();
        if (token.nesting === 1) {
            return `<div class="custom-block is-signature">`;
        } else {
            return "</div>\n";
        }
    },
};
