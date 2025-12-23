import {
  computed,
  defineAsyncComponent,
  watch,
  type App,
  type AsyncComponentLoader,
  type Plugin,
} from "vue";
import { createPdI18n, setGlobalI18n, type LocaleMessages } from "./locales";

// 定义 import.meta.glob 返回的类型
type GlobModules = Record<string, () => Promise<any>>;

const components = (import.meta as any).glob(
  "./pd-ui/**/pd-*.vue"
) as GlobModules;

// 组件库插件选项类型
export interface PdUIOptions {
  locale?: string | (() => string);
  messages?: Record<string, Partial<LocaleMessages>>;
  i18n?: any; // 允许传入已有的 i18n 实例
}

// 全局注册组件函数
const pdGlobalComponent: Plugin = {
  install(app: App, options: PdUIOptions = {}) {
    // 处理国际化
    let i18nInstance = options.i18n;

    if (!i18nInstance) {
      // 修正：如果 locale 是函数，调用它来获取初始值
      const initialLocale =
        typeof options.locale === "function"
          ? options.locale()
          : options.locale;

      i18nInstance = createPdI18n({
        locale: initialLocale,
        messages: options.messages,
      });

      // 注册 i18n 插件
      app.use(i18nInstance);
    }

    // 设置全局 i18n 实例供组件使用
    setGlobalI18n(i18nInstance);

    // 注册所有动态组件
    for (const [key, value] of Object.entries(components)) {
      const name = key.slice(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
      app.component(name, defineAsyncComponent(value as AsyncComponentLoader));
    }

    // 提供全局配置（可选）
    app.provide("pd-ui-config", {
      locale: i18nInstance.global.locale,
      t: i18nInstance.global.t,
    });

    // 如果传入的是响应式的 locale，监听其变化
    if (typeof options.locale === "function") {
      // 修正：确保只在 locale 是函数时才调用
      const localeComputed = computed(() => {
        const localeFn = options.locale as () => string;
        return localeFn();
      });
      watch(localeComputed, (newLocale) => {
        if (i18nInstance && i18nInstance.global) {
          i18nInstance.global.locale.value = newLocale;
        }
      });
    }
  },
};

export default pdGlobalComponent;

// 导出所有组件和工具
export * from "./locales";
export * from "./hooks/useLocale";
