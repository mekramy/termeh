export default {
    render(tokens, idx) {
        const token = tokens[idx];
        if (token.nesting === 1) {
            return `<div class="quote is-error">\n`;
        } else {
            return "</div>\n";
        }
    },
};
