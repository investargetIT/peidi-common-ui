<script lang="ts">
export default {
  name: "pd-DataTable",
};
</script>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import { ElConfigProvider } from "element-plus";
import { useElementPlusI18n } from "../../hooks/useElementPlusI18n";
import {
  getLocalStorage,
  updateLocalStorage,
} from "../../hooks/useLocalStorage";
import { useLocale } from "../../hooks/useLocale";
import { ElMessage } from "element-plus";
import { Icon as IconifyIcon } from "@iconify/vue";
import { ElMessageBox } from "element-plus";

const { t } = useLocale();

const { elementLocale } = useElementPlusI18n();
/**
 * 接收传过来的值
 *
 * @param id 组件唯一性id
 * @param searchFormConfig 搜索表单配置
 * @param tableConfig 表格配置
 * @param paginationConfig 分页配置
 *
 */
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  searchFormConfig: {
    type: Object as () => {
      formItems: {
        prop: string;
        label: string;
        type: "text" | "select" | "date";
        config: {
          placeholder?: string;
          options?: {
            label: string;
            value: string;
          }[];
        };
      }[];
    },
    required: true,
  },
  tableConfig: {
    type: Object as () => {
      table?: {
        headerRowStyle?: Object;
        cellStyle?: Object;
        size?: string;
        emptyText?: string;
      };
      columns: {
        prop: string;
        label: string;
        minWidth?: number | string;
        align?: string;
        fixed?: string;
        sortable?: boolean | string;
        showOverflowTooltip?: boolean;
        render?: (scope: any) => any;
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
      delete?: {
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

//#region 组件配置相关
const componentConfigKey = (id: string) => `pd-DataTable-${id}`;
//#endregion

//#region 操作事件相关 增、删、改、查
const handleDeleteConfirm = (row: any) => {
  ElMessageBox.confirm(`确认删除该条数据吗？【${row.id}】`, "删除确认", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      fetchDeleteData(row);
    })
    .catch(() => {});
};
//#endregion

//#region 查询栏相关
const searchForm = ref<Record<string, string>>({});

const initSearchForm = () => {
  const searchFromTemp: Record<string, string> = {};
  props.searchFormConfig.formItems.forEach((item) => {
    // 检查对象是否有当前属性
    if (!searchFromTemp.hasOwnProperty(item.prop)) {
      searchFromTemp[item.prop] = "";
    }
  });
  searchForm.value = searchFromTemp;
};
initSearchForm();
//#endregion

//#region 表格相关
const tableData = ref([]);
const defaultTableOptions = {
  headerRowStyle: {
    color: "#0a0a0a",
  },
  cellStyle: {
    color: "#0a0a0a",
  },
  size: "default",
  emptyText: "暂无数据",
};
const tableParams = ref({
  ...defaultTableOptions,
  ...props.tableConfig.table,
});
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
// 获取表格数据方法
const fetchDataTable = async () => {
  try {
    const response = await axios({
      ...props.requestConfig.get,
      params: {
        pageNo: paginationParams.value.currentPage,
        pageSize: paginationParams.value.pageSize,
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
};
const fetchDeleteData = async (row: any) => {
  try {
    const response = await axios({
      ...props.requestConfig.delete,
      data: {
        id: row.id,
      },
    });
    if (response.data.code === 200) {
      // 成功处理
      ElMessage.success("删除成功");
      fetchDataTable();
    } else {
      // 错误处理
      ElMessage.error(response.data.msg || "删除失败");
    }
  } catch (error: any) {
    // 错误处理
    ElMessage.error(error.message || "删除失败");
  }
};
watch(
  [
    () => paginationParams.value.currentPage,
    () => paginationParams.value.pageSize,
  ],
  ([newCurrentPage, newPageSize], [oldCurrentPage, oldPageSize]) => {
    if (newPageSize !== oldPageSize) {
      updateLocalStorage("peidi-commom-ui-config", {
        [`${componentConfigKey(props.id)}-pageSize`]: newPageSize,
      });
    }
    fetchDataTable();
  },
  {
    // immediate: true,
    deep: true,
  }
);
//#endregion

onMounted(() => {
  // 初始化配置
  const componentConfig: any = getLocalStorage(
    "peidi-commom-ui-config",
    componentConfigKey(props.id)
  );
  if (componentConfig) {
    // 合并配置
    paginationParams.value = {
      ...paginationParams.value,
      pageSize:
        componentConfig[`${componentConfigKey(props.id)}-pageSize`] ||
        paginationParams.value.pageSize,
    };
  }
});
</script>

<template>
  <el-config-provider :locale="elementLocale">
    <div>
      <el-card style="height: 100%" shadow="never">
        <!-- 查询栏 -->
        <div>
          <el-form :model="searchForm" inline>
            <el-form-item
              v-for="item in props.searchFormConfig.formItems"
              :key="item.prop"
              :prop="item.prop"
              :label="item.label"
            >
              <el-input
                v-if="item.type === 'text'"
                v-model="searchForm[item.prop]"
                :placeholder="item.config.placeholder"
                style="width: 200px"
                clearable
              />
              <el-select
                v-else-if="item.type === 'select'"
                v-model="searchForm[item.prop]"
                :placeholder="item.config.placeholder"
                style="width: 200px"
                clearable
              >
                <el-option
                  v-for="option in item.config.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                />
              </el-select>
              <el-date-picker
                v-else-if="item.type === 'date'"
                type="daterange"
                v-model="searchForm[item.prop]"
                clearable
              />
            </el-form-item>
            <el-form-item>
              <el-button>重置</el-button>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
      <el-card style="height: 100%; margin-top: 12px" shadow="never">
        <!-- 操作栏 -->
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <div>表格</div>
          <div>
            <el-button type="primary"
              ><iconify-icon
                icon="si:add-fill"
                width="18"
                height="18"
              ></iconify-icon
              >新增</el-button
            >
          </div>
        </div>
        <!-- 表格 -->
        <div>
          <el-table :data="tableData" style="width: 100%" v-bind="tableParams">
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
            >
              <template #default="scope" v-if="item.render">
                <component :is="item.render(scope)" />
              </template>
              <template #default="scope" v-else>
                {{ scope.row[item.prop] }}
              </template>
            </el-table-column>
            <el-table-column
              prop="Operation"
              :label="t('dataTable.operation')"
              min-width="150"
            >
              <template #default="scope">
                <el-button text class="pd-DataTable-operation">
                  <iconify-icon
                    icon="mingcute:edit-line"
                    width="18"
                    height="18"
                    style="color: #2563eb"
                  ></iconify-icon>
                </el-button>
                <el-button
                  text
                  class="pd-DataTable-operation"
                  @click="handleDeleteConfirm(scope.row)"
                >
                  <iconify-icon
                    icon="lsicon:delete-outline"
                    width="18"
                    height="18"
                    style="color: rgb(245, 108, 108)"
                  ></iconify-icon
                ></el-button>
              </template>
            </el-table-column>
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
      </el-card>
    </div>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.pd-DataTable-operation {
  padding: 8px;
}
</style>
