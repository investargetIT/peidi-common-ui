import { createApp } from "vue";
// import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

/*黑色主题*/
// import "highlight.js/styles/atom-one-dark.css";
/*白色主题*/
import "highlight.js/styles/stackoverflow-light.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import hljsVuePlugin from "@highlightjs/vue-plugin";
hljs.registerLanguage("javascript", javascript);

import pdGlobalComponent from "../packages/index.ts";

const app = createApp(App);
app.use(ElementPlus);
app.use(hljsVuePlugin);
pdGlobalComponent(app);
app.mount("#app");
