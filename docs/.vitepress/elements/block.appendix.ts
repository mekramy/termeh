import type { Token } from "markdown-it";

export default {
    render(tokens: Token[], idx: number) {
        const token = tokens[idx];
        const title = token.info.trim().slice(8).trim();
        if (token.nesting === 1) {
            return `<div class="custom-block is-appendix">\n`;
        } else {
            return "</div>\n";
        }
    },
};
