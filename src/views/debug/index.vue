<script lang="ts" setup>
import { getCurrentInstance, markRaw, onMounted, ref, watch } from "vue";
import { ElMessage } from "element-plus";
import { Icon as IconifyIcon } from "@iconify/vue";

import HowToUse from "./components/pd-HowToUse/index.vue";
import Test from "./components/pd-Test/index.vue";
import PwdChangeForm from "./components/pd-PwdChangeForm/index.vue";

const { globalProperties } = getCurrentInstance()!.appContext.config;

// 使用Vite的import.meta.glob自动读取组件文件
const componentFiles = import.meta.glob("./components/**/index.vue", {
  as: "raw",
  eager: true,
});

const components = ref<
  Array<{
    name: string;
    component: any;
    code: string;
  }>
>([]);

const activeName = ref("");

// 从URL参数获取当前组件
const getComponentFromUrl = (): string => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("component") || "";
};

// 更新URL参数
const updateUrlParams = (componentName: string) => {
  const url = new URL(window.location.href);
  if (componentName) {
    url.searchParams.set("component", componentName);
  } else {
    url.searchParams.delete("component");
  }
  // 使用replaceState避免产生历史记录
  window.history.replaceState({}, "", url);
};

// 初始化组件数据
onMounted(() => {
  const componentList = [
    { name: "HowToUse", component: markRaw(HowToUse) },
    { name: "Test", component: markRaw(Test) },
    { name: "PwdChangeForm", component: markRaw(PwdChangeForm) },
  ];

  components.value = componentList.map((item) => {
    const filePath = `./components/pd-${item.name}/index.vue`;
    const code = componentFiles[filePath] || "// 代码加载中...";

    return {
      ...item,
      code,
    };
  });

  // 如果有URL参数，使用URL参数中的组件，否则使用第一个
  const urlComponent = getComponentFromUrl();
  if (
    urlComponent &&
    components.value.some((item) => item.name === urlComponent)
  ) {
    activeName.value = urlComponent;
  } else if (components.value.length > 0) {
    activeName.value = components.value[0]!.name;
    // 同步到URL
    updateUrlParams(activeName.value);
  }
});

// 监听activeName变化，更新URL参数
watch(activeName, (newName) => {
  if (newName) {
    updateUrlParams(newName);
  }
});

// 复制代码功能
const copyCode = async (code: string) => {
  try {
    await navigator.clipboard.writeText(code);
    ElMessage.success("代码已复制到剪贴板");
  } catch (err) {
    // 降级方案：使用textarea复制
    const textarea = document.createElement("textarea");
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    ElMessage.success("代码已复制到剪贴板");
  }
};

const currentLocale = ref(globalProperties.$getLocale());
// 处理语言切换命令
const handleCommand = (command: string) => {
  if (command === "中文") {
    // 切换为中文
    globalProperties.$changeLocale("zh-cn");
  } else if (command === "English") {
    // 切换为英文
    globalProperties.$changeLocale("en");
  }
  currentLocale.value = globalProperties.$getLocale();
};
</script>

<template>
  <div>
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
      "
    >
      <div>
        <span>{{ currentLocale }}</span>
      </div>
      <div>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <iconify-icon
              icon="vscode-icons:file-type-locale"
              width="32"
              height="32"
            ></iconify-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="中文">中文</el-dropdown-item>
              <el-dropdown-item command="English">English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <el-divider />
    <el-tabs v-model="activeName" :tab-position="'left'">
      <el-tab-pane
        v-for="item in components"
        :key="item.name"
        :label="item.name"
        :name="item.name"
        lazy
      >
        <div style="display: flex; height: 800px; gap: 20px">
          <!-- 组件预览区域 -->
          <div
            style="
              flex: 1;
              padding: 20px;
              border: 1px solid #e4e7ed;
              border-radius: 4px;
              overflow: auto;
            "
          >
            <h3 style="margin-bottom: 20px; color: #409eff">组件预览</h3>
            <component :is="item.component" />
          </div>

          <!-- 代码展示区域 -->
          <div style="flex: 1">
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;
              "
            >
              <h3 style="color: #409eff">源代码</h3>
              <el-button
                type="primary"
                size="small"
                @click="copyCode(item.code)"
              >
                <el-icon><iconify-icon icon="ep:document-copy" /></el-icon>
                复制代码
              </el-button>
            </div>
            <el-card style="height: calc(100% - 77px); overflow: auto">
              <highlightjs language="javascript" :code="item.code" />
            </el-card>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
:deep(.hljs) {
  font-family: "Consolas", "Monaco", "Courier New", monospace;
}
:deep(.el-divider--horizontal) {
  margin: 12px 0;
}
</style>
