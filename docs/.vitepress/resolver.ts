export default {
    render(tokens, idx) {
        const token = tokens[idx];
        const title = token.info.trim().slice(8).trim();
        if (token.nesting === 1) {
            return `<div class="custom-block is-block is-resolver">\n<h1 class="title">${title || "Color Variation"}</h1>`;
        } else {
            return "</div>\n";
        }
    },
};
