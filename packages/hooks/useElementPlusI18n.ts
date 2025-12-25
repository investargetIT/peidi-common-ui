import { computed } from "vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import { useLocale } from "./useLocale";

// 定义支持的语言类型
type SupportedLocale = "zh-cn" | "en";

// Element Plus 语言包映射（使用类型断言确保类型安全）
const elementLocales: Record<SupportedLocale, any> = {
  "zh-cn": zhCn,
  en: en,
};

export function useElementPlusI18n() {
  const { locale: currentLocale }: any = useLocale();

  // Element Plus 语言包（使用类型安全的访问方式）
  const elementLocale = computed(() => {
    const localeKey = currentLocale.value as SupportedLocale;
    return elementLocales[localeKey] || zhCn;
  });

  // Element Plus 国际化函数
  const elementT = (key: string) => {
    const localeKey = currentLocale.value as SupportedLocale;
    const locale = elementLocales[localeKey] || zhCn;
    // 这里可以根据key获取对应的翻译文本
    // 例如：locale.pagination.itemsPerPage 等
    return key;
  };

  return {
    elementLocale,
    elementT,
  };
}
