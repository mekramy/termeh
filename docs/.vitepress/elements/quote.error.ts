import type { Token } from "markdown-it";

export default {
    render(tokens: Token[], idx: number) {
        const token = tokens[idx];
        if (token.nesting === 1) {
            return `<div class="quote is-error">\n<strong>Throw</strong>\n`;
        } else {
            return "</div>\n";
        }
    },
};
