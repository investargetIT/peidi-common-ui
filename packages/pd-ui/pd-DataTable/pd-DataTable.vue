<script lang="ts">
export default {
  name: "pd-DataTable",
};
</script>
<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import axios from "axios";
import { useElementPlusI18n } from "../../hooks/useElementPlusI18n";
import {
  getLocalStorage,
  updateLocalStorage,
} from "../../hooks/useLocalStorage";
import { useLocale } from "../../hooks/useLocale";
import { Icon as IconifyIcon } from "@iconify/vue";
import {
  ElConfigProvider,
  ElMessage,
  ElMessageBox,
  type FormInstance,
} from "element-plus";
import dayjs from "dayjs";

const { t } = useLocale();

const { elementLocale } = useElementPlusI18n();
/**
 * 接收传过来的值
 *
 * @param id 组件唯一性id
 * @param searchFormConfig 搜索表单配置
 * @param operationFormConfig 操作表单配置
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
          searchType?: string;
          placeholder?: string;
          options?: {
            label: string;
            value: string;
          }[];
        };
      }[];
    },
  },
  operationFormConfig: {
    type: Object as () => {
      form?: Object;
      formItems: {
        prop: string;
        label: string;
        type: "text" | "select" | "date" | "hidden";
        config: {
          placeholder?: string;
          options?: {
            label: string;
            value: string;
          }[];
          expandAttribute?: Object;
        };
      }[];
      rules?: Object;
    },
  },
  tableConfig: {
    type: Object as () => {
      title?: string;
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
        timeout?: number;
      };
      delete?: {
        url: string;
        method: string;
        headers: Record<string, string>;
        params?: Record<string, any>;
        data?: Record<string, any>;
        timeout?: number;
      };
      add?: {
        url: string;
        method: string;
        headers: Record<string, string>;
        params?: Record<string, any>;
        data?: Record<string, any>;
        timeout?: number;
      };
      edit?: {
        url: string;
        method: string;
        headers: Record<string, string>;
        params?: Record<string, any>;
        data?: Record<string, any>;
        timeout?: number;
      };
    },
    required: true,
  },
});

//#region 工具函数
/**
 * 将源对象的属性赋值给目标对象，如果目标对象没有该属性，则忽略
 * @param source 源对象
 * @param target 目标对象
 * @returns 合并后的目标对象
 */
function assignSourceToTarget(
  source: Record<string, any>,
  target: Record<string, any>
) {
  const targetTemp = Object.assign({}, target);
  Object.keys(source).forEach((key) => {
    if (targetTemp.hasOwnProperty(key)) {
      targetTemp[key] = source[key];
    }
  });
  return targetTemp;
}
/**
 * 判断是否为空，空代表null、undefined、{}
 * @param data 要判断的数据
 * @returns 是否为空
 */
function isEmpty(data: any) {
  if (data === null || data === undefined) return true;
  if (typeof data === "object") return Object.keys(data).length === 0;
  return false;
}
//#endregion

//#region 组件配置相关
const componentConfigKey = (id: string) => `pd-DataTable-${id}`;
//#endregion

//#region 操作事件相关 增、删、改、查
const handleDeleteConfirm = (row: any) => {
  ElMessageBox.confirm(
    t("dataTable.confirmDelete") + `【${row.id}】`,
    t("dataTable.confirmDeleteTitle"),
    {
      confirmButtonText: t("dataTable.confirm"),
      cancelButtonText: t("dataTable.cancel"),
      type: "warning",
    }
  )
    .then(() => {
      fetchDeleteData(row);
    })
    .catch(() => {});
};
// 新增数据点击事件
const handleAddClick = () => {
  operationVisible.value = true;
  operationType.value = "add";
};
// 编辑数据点击事件
const handleEditClick = (row: any) => {
  operationVisible.value = true;
  operationType.value = "edit";
  // 遍历operationForm对象，把row的属性值赋值给operationForm.value里有的属性
  operationForm.value = assignSourceToTarget(row, operationForm.value);
  // console.log("编辑数据点击事件赋值", operationForm.value);
};
const handleOperationSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      // 提交表单数据
      if (operationType.value === "add") {
        fetchAddData(operationForm.value);
      } else {
        fetchEditData(operationForm.value);
      }
    } else {
      ElMessage.error(t("dataTable.pleaseFillInCompleteInfo"));
    }
  });
};
//#endregion

//#region 查询栏相关
const searchForm = ref<Record<string, string>>({});

const initSearchForm = () => {
  if (isEmpty(props.searchFormConfig)) return;
  const searchFromTemp: Record<string, string> = {};
  props.searchFormConfig?.formItems.forEach((item) => {
    // 检查对象是否有当前属性
    if (!searchFromTemp.hasOwnProperty(item.prop)) {
      searchFromTemp[item.prop] = "";
    }
  });
  searchForm.value = searchFromTemp;
};
initSearchForm();

// 格式化查询参数
const formatSearchParams = () => {
  const searchStr: Record<string, any>[] = [];
  Object.keys(searchForm.value).forEach((key) => {
    if (searchForm.value[key]) {
      const searchFormConfigItem = props.searchFormConfig?.formItems.find(
        (item) => item.prop === key
      );

      const searchTypeTemp = searchFormConfigItem?.config?.searchType || "like";

      const formartSearchValue = (value: string) => {
        if (searchFormConfigItem?.type === "date") {
          value = dayjs(value).format("YYYY-MM-DD");
        }
        if (searchTypeTemp === "equals") {
          value = `"${value}"`;
        }
        return value;
      };

      searchStr.push({
        searchName: key,
        searchType: searchTypeTemp,
        searchValue: formartSearchValue(searchForm.value[key]),
      });
    }
  });
  return JSON.stringify(searchStr);
};

const handleReset = () => {
  // 清空查询表单里的属性值
  Object.keys(searchForm.value).forEach((key) => {
    searchForm.value[key] = "";
  });
  fetchDataTable();
};
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
  emptyText: t("dataTable.noData"),
};
const tableParams = ref({
  ...defaultTableOptions,
  ...props.tableConfig.table,
});
//#endregion

//#region 排序相关
const sortStr = ref<{ sortName: string; sortType: string }[]>([]);
// 处理排序事件
function handleSortChange(column: any) {
  // console.log("排序事件", column);
  // 处理排序逻辑
  if (column.column.sortable === "custom") {
    // 自定义排序逻辑
    // 这里可以根据 column.prop 来判断是哪个列在排序
    // 并根据 column.order 来判断排序方向（ascending 或 descending）
    // 最后更新表格数据即可
    if (!column.order) {
      sortStr.value = [];
    }
    if (column.order === "descending") {
      sortStr.value = [
        {
          sortName: column.prop,
          sortType: "desc",
        },
      ];
    }
    if (column.order === "ascending") {
      sortStr.value = [
        {
          sortName: column.prop,
          sortType: "asc",
        },
      ];
    }
    fetchDataTable();
  }
}
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
const loading = ref(true);
// 获取表格数据方法
const fetchDataTable = async () => {
  loading.value = true;
  try {
    const response = await axios({
      ...props.requestConfig.get,
      params: {
        pageNo: paginationParams.value.currentPage,
        pageSize: paginationParams.value.pageSize,
        searchStr: formatSearchParams(),
        sortStr: JSON.stringify(sortStr.value),
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
      ElMessage.error(response.data.msg || t("dataTable.dataFetchFailed"));
    }
  } catch (error: any) {
    // 错误处理
    ElMessage.error(error.message || t("dataTable.dataFetchFailed"));
  } finally {
    loading.value = false;
  }
};
const fetchDeleteData = async (row: any) => {
  try {
    const response = await axios({
      ...props.requestConfig.delete,
      data: assignSourceToTarget(row, props.requestConfig.delete?.data || {}),
    });
    if (response.data.code === 200) {
      // 成功处理
      ElMessage.success(t("dataTable.deleteSuccess"));
      fetchDataTable();
    } else {
      // 错误处理
      ElMessage.error(response.data.msg || t("dataTable.deleteError"));
    }
  } catch (error: any) {
    // 错误处理
    ElMessage.error(error.message || t("dataTable.deleteError"));
  }
};
const fetchAddData = async (formData: any) => {
  try {
    const response = await axios({
      ...props.requestConfig.add,
      data: formData,
    });
    if (response.data.code === 200) {
      // 成功处理
      ElMessage.success(t("dataTable.addSuccess"));
      fetchDataTable();
      operationVisible.value = false;
    } else {
      // 错误处理
      ElMessage.error(response.data.msg || t("dataTable.addError"));
    }
  } catch (error: any) {
    // 错误处理
    ElMessage.error(error.message || t("dataTable.addError"));
  }
};
const fetchEditData = async (formData: any) => {
  try {
    const response = await axios({
      ...props.requestConfig.edit,
      data: formData,
    });
    if (response.data.code === 200) {
      // 成功处理
      ElMessage.success(t("dataTable.editSuccess"));
      fetchDataTable();
      operationVisible.value = false;
    } else {
      // 错误处理
      ElMessage.error(response.data.msg || t("dataTable.editError"));
    }
  } catch (error: any) {
    // 错误处理
    ElMessage.error(error.message || t("dataTable.editError"));
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

//#region 操作弹窗相关
const operationVisible = ref(false);
const operationType = ref<"add" | "edit">("add");
const operationTitle = computed(() => {
  return operationType.value === "add"
    ? t("dataTable.addData")
    : t("dataTable.editData");
});
const operationForm = ref<Record<string, string>>({});

const initOperationForm = () => {
  if (isEmpty(props.operationFormConfig)) return;
  const operationFromTemp: Record<string, string> = {};
  props.operationFormConfig?.formItems.forEach((item) => {
    // 检查对象是否有当前属性
    if (!operationFromTemp.hasOwnProperty(item.prop)) {
      operationFromTemp[item.prop] = "";
    }
  });
  operationForm.value = operationFromTemp;

  // console.log("初始化operationForm", operationForm.value);
};
initOperationForm();

const operationFormRef = ref<FormInstance>();

const filteredOperationFormItems = computed(() => {
  return props.operationFormConfig?.formItems.filter((item) => {
    return item.type !== "hidden";
  });
});
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
      <el-card
        style="height: 100%"
        shadow="never"
        class="pd-DataTable-search-card"
        v-if="!isEmpty(props.searchFormConfig)"
      >
        <!-- 查询栏 -->
        <div>
          <el-form :model="searchForm" inline>
            <el-form-item
              v-for="item in props.searchFormConfig?.formItems"
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
                v-model="searchForm[item.prop]"
                :placeholder="item.config.placeholder"
                style="width: 200px"
                clearable
              />
            </el-form-item>
            <el-form-item>
              <el-button @click="handleReset">{{
                t("dataTable.reset")
              }}</el-button>
              <el-button type="primary" @click="fetchDataTable">{{
                t("dataTable.query")
              }}</el-button>
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
          <div>{{ props.tableConfig.title }}</div>
          <div>
            <el-button
              type="primary"
              @click="handleAddClick"
              v-if="!isEmpty(props.operationFormConfig)"
            >
              <iconify-icon
                icon="si:add-fill"
                width="18"
                height="18"
              ></iconify-icon
              >{{ t("dataTable.add") }}</el-button
            >
          </div>
        </div>
        <!-- 表格 -->
        <div>
          <el-table
            :data="tableData"
            style="width: 100%"
            v-bind="tableParams"
            v-loading="loading"
            @sort-change="handleSortChange"
          >
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
                <el-button
                  text
                  class="pd-DataTable-operation"
                  @click="handleEditClick(scope.row)"
                  v-if="!isEmpty(props.operationFormConfig)"
                >
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
                  v-if="!isEmpty(props.requestConfig.delete)"
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
      <!-- 操作弹窗 -->
      <el-dialog
        v-model="operationVisible"
        :title="operationTitle"
        width="500"
        v-if="!isEmpty(props.operationFormConfig)"
      >
        <el-form
          :model="operationForm"
          v-bind="props.operationFormConfig?.form"
          :rules="props.operationFormConfig?.rules"
          ref="operationFormRef"
        >
          <el-form-item
            v-for="item in filteredOperationFormItems"
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
          >
            <el-input
              v-if="item.type === 'text'"
              v-model="operationForm[item.prop]"
              :placeholder="item.config.placeholder"
              clearable
              v-bind="item.config.expandAttribute"
            />
            <el-select
              v-else-if="item.type === 'select'"
              v-model="operationForm[item.prop]"
              :placeholder="item.config.placeholder"
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
              v-model="operationForm[item.prop]"
              :placeholder="item.config.placeholder"
              clearable
            />
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button
              type="primary"
              @click="handleOperationSubmit(operationFormRef)"
            >
              {{ t("dataTable.confirm") }}
            </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.pd-DataTable-search-card {
  :deep(.el-card__body) {
    padding-bottom: 0;
  }
}
.pd-DataTable-operation {
  padding: 8px;
}
</style>
