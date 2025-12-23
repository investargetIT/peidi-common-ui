<script lang="ts">
export default {
  name: "pd-DataTable",
};
</script>
<script setup lang="ts">
import { ref, watch } from "vue";
import axios from "axios";
import { ElConfigProvider } from "element-plus";
import { useElementPlusI18n } from "../../hooks/useElementPlusI18n";
import { ElMessage } from "element-plus";

const { elementLocale } = useElementPlusI18n();
/**
 * 接收传过来的值
 *
 * @param tableConfig 表格配置
 * @param paginationConfig 分页配置
 *
 */
const props = defineProps({
  tableConfig: {
    type: Object as () => {
      columns: {
        prop: string;
        label: string;
        minWidth?: number | string;
        align?: string;
        fixed?: string;
        sortable?: boolean | string;
        showOverflowTooltip?: boolean;
      }[];
    },
    required: true,
  },
  paginationConfig: {
    type: Object as () => {
      pageSize?: number;
      pageSizes?: number[];
      size?: string;
      disabled?: boolean;
      background?: boolean;
      layout?: string;
    },
  },
  requestConfig: {
    type: Object as () => {
      // 获取表格数据的请求配置
      get: {
        url: string;
        method: string;
        headers: Record<string, string>;
        params?: Record<string, any>;
        data?: Record<string, any>;
        timeout: number;
      };
    },
    required: true,
  },
});

//#region 表格相关
const tableData = ref([]);
//#endregion

//#region 分页相关
const defaultPaginationOptions = {
  pageSize: 10,
  pageSizes: [10, 20, 30, 40],
  size: "default",
  disabled: false,
  background: true,
  layout: "total, sizes, prev, pager, next, jumper",
};
const paginationParams = ref({
  ...defaultPaginationOptions,
  ...props.paginationConfig,
  currentPage: 1,
  total: 100,
});
//#endregion

//#region 请求相关
watch(
  [
    () => paginationParams.value.currentPage,
    () => paginationParams.value.pageSize,
  ],
  async ([newCurrentPage, newPageSize]) => {
    try {
      const response = await axios({
        ...props.requestConfig.get,
        params: {
          pageNo: newCurrentPage,
          pageSize: newPageSize,
        },
      });
      if (response.data.code === 200) {
        const resData = response.data || {};
        // 如果当前页大于总页数，重置为最后一页 排除总页数为0的情况
        if (
          resData.data?.current > resData.data?.pages &&
          resData.data?.total !== 0
        ) {
          paginationParams.value.currentPage = resData.data?.pages;
          return;
        }

        // 更新总页数
        paginationParams.value.total = resData.data?.total || 0;

        tableData.value = resData.data?.records || [];
      } else {
        // 错误处理
        ElMessage.error(response.data.msg || "数据获取失败");
      }
    } catch (error: any) {
      // 错误处理
      ElMessage.error(error.message || "数据获取失败");
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
//#endregion
</script>

<template>
  <el-config-provider :locale="elementLocale">
    <div>
      <!-- 表格 -->
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            v-for="item in props.tableConfig.columns"
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
            :min-width="item.minWidth"
            :align="item.align"
            :fixed="item.fixed"
            :sortable="item.sortable"
            :show-overflow-tooltip="item.showOverflowTooltip"
          />
        </el-table>
      </div>
      <!-- 分页器 -->
      <div
        style="
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-top: 20px;
        "
      >
        <el-pagination
          v-model:current-page="paginationParams.currentPage"
          v-model:page-size="paginationParams.pageSize"
          :page-sizes="paginationParams.pageSizes"
          :size="paginationParams.size"
          :disabled="paginationParams.disabled"
          :background="paginationParams.background"
          :layout="paginationParams.layout"
          :total="paginationParams.total"
        />
      </div>
    </div>
  </el-config-provider>
</template>
