import { createApp, ref } from "vue";
// import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

/*黑色主题*/
// import "highlight.js/styles/atom-one-dark.css";
/*白色主题*/
import "highlight.js/styles/stackoverflow-light.css";
import hljs from "highlight.js/lib/core";
import hljsVuePlugin from "@highlightjs/vue-plugin";
// 批量引入常用语言库
import 'highlight.js/lib/common';

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
app.config.globalProperties.$changeLocale = Locale.changeLocale; // 挂载全局方法
app.config.globalProperties.$getLocale = Locale.getLocale; // 挂载全局方法

app.mount("#app");
