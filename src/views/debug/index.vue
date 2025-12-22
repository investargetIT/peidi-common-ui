<script lang="ts" setup>
import { markRaw, onMounted, ref } from "vue";
import Test from "./components/pd-Test/index.vue";
import PwdChangeForm from "./components/pd-PwdChangeForm/index.vue";
import { ElMessage } from "element-plus";
import { Icon } from "@iconify/vue";

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

// 初始化组件数据
onMounted(() => {
  const componentList = [
    { name: "PwdChangeForm", component: markRaw(PwdChangeForm) },
    { name: "Test", component: markRaw(Test) },
  ];

  components.value = componentList.map((item) => {
    const filePath = `./components/pd-${item.name}/index.vue`;
    const code = componentFiles[filePath] || "// 代码加载中...";

    return {
      ...item,
      code,
    };
  });

  if (components.value.length > 0) {
    activeName.value = components.value[0]!.name;
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
</script>

<template>
  <div>
    <el-tabs v-model="activeName" :tab-position="'left'">
      <el-tab-pane
        v-for="item in components"
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
                <el-icon><Icon icon="ep:document-copy" /></el-icon>
                复制代码
              </el-button>
            </div>
            <el-card style="height: calc(100% - 77px); overflow: auto">
              <!-- <pre
                style="
                  margin: 0;
                  padding: 16px;
                  white-space: pre-wrap;
                  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
                  font-size: 14px;
                  line-height: 1.5;
                  height: 100%;
                  background: #f6f8fa;
                  border-radius: 4px;
                  color: #24292e;
                "
                >{{ item.code }}</pre
              > -->
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
</style>
