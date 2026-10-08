export default {
    render(tokens, idx) {
        const token = tokens[idx];
        const title = token.info.trim().slice(12).trim();
        if (token.nesting === 1) {
            return `<div class="custom-block dependencies">\n<h1 class="title">${title || "Dependencies"}</h1>`;
        } else {
            return "</div>\n";
        }
    },
};
