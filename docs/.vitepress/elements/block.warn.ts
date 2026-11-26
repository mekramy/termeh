import type { Token } from "markdown-it";

export default {
    render(tokens: Token[], idx: number) {
        const token = tokens[idx];
        const title = token.info.trim().slice(4).trim();
        if (token.nesting === 1) {
            return title
                ? `<div class="warn custom-block">\n
                    <p class="custom-block-title">${title}</p>`
                : `<div class="warn custom-block">\n`;
        } else {
            return "</div>\n";
        }
    },
};
