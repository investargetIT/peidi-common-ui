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
const handleExport = () => {
  loading.value = true;
  exportToExcel(props.data, props.columnsConfig, props.fileName)
    .then(() => {
      ElMessage.success(t("excelExport.exportSuccess"));
    })
    .catch(() => {
      ElMessage.error(t("excelExport.exportError"));
    })
    .finally(() => {
      loading.value = false;
    });
};
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
