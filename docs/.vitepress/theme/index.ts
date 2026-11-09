import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import DefaultTheme from "vitepress/theme";
import Preview from "../components/Preview.vue";

import "@catppuccin/vitepress/theme/mocha/teal.css";
import "virtual:group-icons.css";
import "./appendix.scss";
import "./block.scss";
import "./quote.scss";
import "./scheme.scss";
import "./signature.scss";
import "./style.scss";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component("Preview", Preview);
        enhanceAppWithTabs(app);
    },
};
