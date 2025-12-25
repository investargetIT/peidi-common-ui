import { ref } from "vue";
import { getGlobalI18n } from "../locales";

// 在组件内使用的 Composition API
export function useLocale() {
  const i18n = getGlobalI18n();

  if (!i18n) {
    // console.warn(
    //   "[pd-ui] i18n is not installed. Please install i18n before using components."
    // );
    return {
      t: (key: string, _params?: Record<string, any>) => key,
      locale: ref("zh-cn"),
      changeLocale: (_locale: string) => {
        // console.warn("[pd-ui] i18n is not installed");
      },
    };
  }

  const { t, locale } = i18n.global;

  return {
    // 翻译函数
    t: (key: string, params?: Record<string, any>) => {
      const result = t(key, params as any);
      return typeof result === "string" ? result : key;
    },
    // 当前语言（响应式）
    locale,
    // 切换语言
    changeLocale: (newLocale: string) => {
      //@ts-ignore
      locale.value = newLocale;
    },
  };
}
