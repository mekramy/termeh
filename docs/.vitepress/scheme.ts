export default {
    render(tokens, idx) {
        const token = tokens[idx];
        if (token.nesting === 1) {
            return `<div class="custom-block scheme">\n<p class="custom-block-title">Scheme</p>`;
        } else {
            return "</div>\n";
        }
    },
};
