import type { Token } from "markdown-it";

export default {
    render(tokens: Token[], idx: number) {
        const token = tokens[idx];
        if (token.nesting === 1) {
            return `<div class="quote">\n`;
        } else {
            return "</div>\n";
        }
    },
};
