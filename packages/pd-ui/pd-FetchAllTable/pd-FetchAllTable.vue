<script lang="ts">
export default {
  name: "pd-FetchAllTable",
};
</script>

<script setup lang="ts">
import { useFetchAllTable } from "./hooks/useFetchAllTable";

/**
 * 接收传过来的值
 *
 * @param requestConfig 请求配置
 */
const props = defineProps({
  requestConfig: {
    type: Object as () => {
      url: string;
      token: string;
      timeout?: number;
      params?: Record<string, any>;
      callback?: (data: any) => void;
    },
    required: true,
  },
});

const { fetchData, loading: fetchDataLoading } = useFetchAllTable();
const handleClick = async () => {
  const result = await fetchData(props.requestConfig);
  if (props.requestConfig.callback) {
    props.requestConfig.callback(result);
  }
};
</script>

<template>
  <div>
    <el-button type="primary" :loading="fetchDataLoading" @click="handleClick"
      >一键请求表格数据</el-button
    >
  </div>
</template>
