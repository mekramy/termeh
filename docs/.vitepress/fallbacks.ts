import type MarkdownIt from "markdown-it";

export function fallbacks(md: MarkdownIt) {
    md.core.ruler.after("inline", "table_colspan", (state) => {
        const tokens = state.tokens;
        let cols = 0;
        let cellIndex = 0;

        for (let i = 0; i < tokens.length; i++) {
            const t = tokens[i];

            if (t.type === "table_open") cols = 0;
            else if (t.type === "th_open") cols++;
            else if (t.type === "tr_open") cellIndex = 0;
            else if (t.type === "td_open") {
                const inline = tokens[i + 1];
                const first = inline?.children?.[0];

                if (first?.type === "text" && first.content.startsWith("++")) {
                    first.content = first.content.replace(/^\+\+\s*/, "");
                    t.attrSet("colspan", String(Math.max(cols - cellIndex, 1)));
                    t.attrJoin("class", "is-fallback");

                    const ins = new state.Token("html_inline", "", 0);
                    ins.content = "<ins>Fallback:</ins>&nbsp;";
                    inline.children!.unshift(ins);
                }
                cellIndex++;
            }
        }
    });
}
