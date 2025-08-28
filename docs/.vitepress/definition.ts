export default {
    render(tokens, idx) {
        const token = tokens[idx];
        if (token.nesting === 1) {
            return `<div class="custom-block definition">\n`;
        } else {
            return "</div>\n";
        }
    },
};
