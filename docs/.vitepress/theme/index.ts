import DefaultTheme from "vitepress/theme";
import Preview from "../components/Preview.vue";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import "@catppuccin/vitepress/theme/mocha/teal.css";
import "virtual:group-icons.css";
import "./style.scss";
import "./block.scss";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component("Preview", Preview);
        enhanceAppWithTabs(app);
    },
};
