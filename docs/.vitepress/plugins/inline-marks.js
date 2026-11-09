function createDelimPlugin(md, { name, marker: markerChar, size, tag }) {
    const marker = markerChar.charCodeAt(0);
    const markup = markerChar.repeat(size);

    // Insert each marker as a separate text token, and add it to delimiter list
    function tokenize(state, silent) {
        const start = state.pos;

        if (silent) {
            return false;
        }
        if (state.src.charCodeAt(start) !== marker) {
            return false;
        }

        const scanned = state.scanDelims(state.pos, true);
        let len = scanned.length;

        if (len < size) {
            return false;
        }

        // leftover characters that can't form a full marker
        const rest = len % size;
        if (rest) {
            const token = state.push("text", "", 0);
            token.content = markerChar.repeat(rest);
            len -= rest;
        }

        for (let i = 0; i < len; i += size) {
            const token = state.push("text", "", 0);
            token.content = markup;

            if (!scanned.can_open && !scanned.can_close) {
                continue;
            }

            state.delimiters.push({
                marker,
                length: 0, // disable "rule of 3" checks meant for emphasis
                jump: i / size, // 1 delimiter = `size` characters
                token: state.tokens.length - 1,
                end: -1,
                open: scanned.can_open,
                close: scanned.can_close,
            });
        }

        state.pos += scanned.length;

        return true;
    }

    // Walk through delimiter list and replace text tokens with tags
    function postProcess(state, delimiters) {
        let token;
        const loneMarkers = [];
        const max = delimiters.length;

        for (let i = 0; i < max; i++) {
            const startDelim = delimiters[i];

            if (startDelim.marker !== marker) {
                continue;
            }
            if (startDelim.end === -1) {
                continue;
            }

            const endDelim = delimiters[startDelim.end];

            token = state.tokens[startDelim.token];
            token.type = `${name}_open`;
            token.tag = tag;
            token.nesting = 1;
            token.markup = markup;
            token.content = "";

            token = state.tokens[endDelim.token];
            token.type = `${name}_close`;
            token.tag = tag;
            token.nesting = -1;
            token.markup = markup;
            token.content = "";

            const prev = state.tokens[endDelim.token - 1];
            if (
                size > 1 &&
                prev.type === "text" &&
                prev.content.length < size &&
                prev.content === markerChar.repeat(prev.content.length)
            ) {
                loneMarkers.push(endDelim.token - 1);
            }
        }

        // Move leftover single markers after the subsequent *_close tags
        while (loneMarkers.length) {
            const i = loneMarkers.pop();
            let j = i + 1;

            while (
                j < state.tokens.length &&
                state.tokens[j].type === `${name}_close`
            ) {
                j++;
            }

            j--;

            if (i !== j) {
                const token = state.tokens[j];
                state.tokens[j] = state.tokens[i];
                state.tokens[i] = token;
            }
        }
    }

    md.inline.ruler.before("emphasis", name, tokenize);
    md.inline.ruler2.before("emphasis", name, function (state) {
        const tokens_meta = state.tokens_meta;
        const max = (tokens_meta || []).length;

        postProcess(state, state.delimiters);

        for (let curr = 0; curr < max; curr++) {
            if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
                postProcess(state, tokens_meta[curr].delimiters);
            }
        }
    });
}

export function inline_marks_plugin(md) {
    createDelimPlugin(md, { name: "q", marker: "=", size: 1, tag: "q" });
    createDelimPlugin(md, { name: "ins", marker: "~", size: 1, tag: "ins" });
    createDelimPlugin(md, { name: "mark", marker: "@", size: 1, tag: "mark" });
}
