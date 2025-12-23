export const EXAMPLE_REGISTER_CODE = 
`
import { createApp, computed, ref } from "vue";
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

class Locale {
static getLocale() {
    const locale = localStorage.getItem("peidi-common-ui-locale");
    if (locale) {
    return locale;
    }
    localStorage.setItem("peidi-common-ui-locale", "zh-cn");
    return "zh-cn";
}
static changeLocale(newLocale: string) {
    // console.log("切换语言为:", newLocale);
    currentLocale.value = newLocale;
    localStorage.setItem("peidi-common-ui-locale", newLocale);
}
}

// 创建响应式的语言状态
const currentLocale = ref(Locale.getLocale());

const app = createApp(App);
app.use(ElementPlus);
app.use(hljsVuePlugin);
app.use(pdGlobalComponent, {
locale: () => currentLocale.value,
});
// 注册到全局变量
app.config.globalProperties.$changeLocale = Locale.changeLocale; // 挂载全局

app.mount("#app");
`

export const EXAMPLE_USE_CODE = 
`
import { getCurrentInstance, markRaw, onMounted, ref } from "vue";
const { globalProperties } = getCurrentInstance()!.appContext.config;

...
// 处理语言切换命令
const handleCommand = (command: string) => {
  if (command === "中文") {
    // 切换为中文
    globalProperties.$changeLocale("zh-cn");
  } else if (command === "English") {
    // 切换为英文
    globalProperties.$changeLocale("en");
  }
};
...
`