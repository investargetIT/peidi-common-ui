<script lang="ts">
export default {
  name: "pd-ExcelExport",
};
</script>
<script setup lang="ts">
import { PropType, ref } from "vue";
import { Icon as IconifyIcon } from "@iconify/vue";
import { useLocale } from "../../hooks/useLocale";
import { exportToExcel, type ColumnConfig } from "./utils/export";
import { ElMessage } from "element-plus";

const { t } = useLocale();

/**
 * 接收传过来的值
 *
 * @param data 导出数据
 * @param columnsConfig 导出数据列配置
 */
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  columnsConfig: {
    type: Array as PropType<ColumnConfig[]>,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
});

const loading = ref(false);

// 定义回调函数类型
interface ExportCallbacks {
  onBeforeExport?: () => void;
  onSuccess?: () => void;
  onError?: (error?: any) => void;
  onFinally?: () => void;
}

const handleExport = (callbacks?: ExportCallbacks) => {
  loading.value = true;

  // 导出前回调
  callbacks?.onBeforeExport?.();

  exportToExcel(props.data, props.columnsConfig, props.fileName)
    .then(() => {
      ElMessage.success(t("excelExport.exportSuccess"));
      // 导出成功回调
      callbacks?.onSuccess?.();
    })
    .catch((error) => {
      ElMessage.error(t("excelExport.exportError"));
      // 导出失败回调
      callbacks?.onError?.(error);
    })
    .finally(() => {
      loading.value = false;
      // 导出完成回调
      callbacks?.onFinally?.();
    });
};

// 暴露点击按钮的方法，支持传入回调函数
const triggerButtonClick = (callbacks?: ExportCallbacks) => {
  handleExport(callbacks);
};

// 暴露方法给父组件
defineExpose({
  triggerButtonClick,
});
</script>

<template>
  <div>
    <el-button
      type="primary"
      color="#217346"
      @click="handleExport"
      :loading="loading"
    >
      <iconify-icon
        icon="bx:download"
        width="16"
        height="16"
        style="margin-right: 5px"
      ></iconify-icon>
      {{ t("excelExport.exportExcel") }}
    </el-button>
  </div>
</template>
