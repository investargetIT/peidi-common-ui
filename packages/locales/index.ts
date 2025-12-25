import { createI18n } from "vue-i18n";

// 导入语言包
import zhcn from "./zh-cn";
import en from "./en";

// 导出语言包供用户按需导入
export { zhcn, en };

// 导出语言包类型
export type LocaleMessages = typeof zhcn;

// 默认语言配置
export const defaultLocale = "zh-cn";
export const messages = {
  "zh-cn": zhcn,
  en: en,
};

// 创建 i18n 实例的函数
export function createPdI18n(options?: {
  locale?: string;
  messages?: Record<string, any>;
}) {
  const locale = options?.locale || defaultLocale;
  const mergedMessages = { ...messages, ...options?.messages };

  return createI18n({
    legacy: false, // 使用 Composition API 模式
    locale,
    fallbackLocale: "zh-cn",
    messages: mergedMessages,
    // 禁用警告
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
    fallbackWarn: false,
    missing: (_locale: any, key: any) => {
      // console.warn(
      //   `[pd-ui] Missing translation for key: ${key} in locale: ${locale}`
      // );
      return key;
    },
  });
}

// 全局 i18n 实例（可选）
let globalI18n: ReturnType<typeof createI18n> | null = null;

export function setGlobalI18n(i18n: any) {
  globalI18n = i18n;
}

export function getGlobalI18n() {
  return globalI18n;
}
