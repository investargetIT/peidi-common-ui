import { defineAsyncComponent, type App, type AsyncComponentLoader } from "vue";

// 定义 import.meta.glob 返回的类型
type GlobModules = Record<string, () => Promise<any>>;

const components = (import.meta as any).glob("./pd-ui/**/pd-*.vue") as GlobModules;
const pdGlobalComponent = (app: App) => {
  for (const [key, value] of Object.entries(components)) {
    const name = key.slice(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
    app.component(name, defineAsyncComponent(value as AsyncComponentLoader));
  }
};

export default pdGlobalComponent;