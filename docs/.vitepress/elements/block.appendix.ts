import type { Token } from "markdown-it";

export default {
    render(tokens: Token[], idx: number) {
        const token = tokens[idx];
        const title = token.info.trim().slice(8).trim();
        if (token.nesting === 1) {
            return `<div class="custom-block is-appendix">\n<h2 class="title">Appendix</h2>\n`;
        } else {
            return "</div>\n";
        }
    },
};
