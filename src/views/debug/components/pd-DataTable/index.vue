<script setup lang="ts">
import { h, resolveComponent } from "vue";
import Introduction from "../../../utils/introduction.vue";
import introMarkdown from "./intro.md?raw";
import { ElMessage } from "element-plus";

const TOKEN = localStorage.getItem("peidi-common-ui-token") || "";

const SEARCH_FORM_CONFIG = {
  formItems: [
    {
      prop: "id",
      label: "ID",
      type: "text",
      config: {
        searchType: "equals",
        placeholder: "Search ID",
      },
    },
    {
      prop: "milvusId",
      label: "Milvus ID",
      type: "text",
      config: {
        searchType: "equals",
        placeholder: "Search Milvus ID",
      },
    },
  ],
};
const OPERATION_FORM_CONFIG = {
  form: {
    labelWidth: "auto",
    labelPosition: "left",
  },
  formItems: [
    {
      prop: "id",
      label: "ID",
      type: "hidden",
    },
    {
      prop: "milvusId",
      label: "Milvus ID",
      type: "hidden",
    },
    {
      prop: "field",
      label: "Field",
      type: "text",
      config: {
        placeholder: "Enter Field",
        expandAttribute: { type: "textarea", rows: 10 },
      },
    },
    {
      prop: "searchSql",
      label: "SQL",
      type: "text",
      config: {
        placeholder: "Enter SQL",
        expandAttribute: { type: "textarea", rows: 10 },
      },
    },
    {
      prop: "tableName",
      label: "Table",
      type: "text",
      config: {
        placeholder: "Enter Table",
      },
    },
  ],
  rules: {
    field: [
      { required: true, message: "Please enter a field", trigger: "blur" },
    ],
    searchSql: [
      { required: true, message: "Please enter a SQL", trigger: "blur" },
    ],
    tableName: [
      { required: true, message: "Please enter a table", trigger: "blur" },
    ],
  },
};
const TABLE_CONFIG = {
  title: "GBI表",
  columns: [
    {
      prop: "id",
      label: "ID",
      minWidth: 100,
      render: (scope: any) => {
        return h("div", { style: { color: "red" } }, scope.row.id);
      },
      sortable: "custom",
    },
    {
      prop: "milvusId",
      label: "Milvus ID",
      minWidth: 100,
      render: (scope: any) => {
        const ElTag = resolveComponent("el-tag");
        return h(
          ElTag,
          {
            type: "info",
            effect: "plain",
            style: "color: #09090b",
          },
          () => scope.row.milvusId
        );
      },
    },
    {
      prop: "field",
      label: "Field",
      minWidth: 200,
      showOverflowTooltip: true,
    },
    {
      prop: "searchSql",
      label: "SQL",
      minWidth: 200,
      showOverflowTooltip: true,
    },
  ],
};
const REQUEST_CONFIG = {
  get: {
    url: "https://api.peidigroup.cn/ai/gbi/table/page",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
    timeout: 1000 * 10,
  },
  delete: {
    url: "https://api.peidigroup.cn/ai/gbi/table/delete",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
    data: {
      id: "",
      milvusId: "",
    },
    timeout: 1000 * 10,
  },
  add: {
    url: "https://api.peidigroup.cn/ai/gbi/table/new",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
    timeout: 1000 * 10,
  },
  edit: {
    url: "https://api.peidigroup.cn/ai/gbi/table/update",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
    timeout: 1000 * 10,
  },
};

const handleExport = (searchForm: any) => {
  console.log("点击导出", searchForm);
  ElMessage({
    message: "点击了导出按钮: " + JSON.stringify(searchForm),
  });
};
</script>

<template>
  <div>
    <h1>pd-DataTable</h1>
    <pd-DataTable
      id="debug"
      :searchFormConfig="SEARCH_FORM_CONFIG"
      :operationFormConfig="OPERATION_FORM_CONFIG"
      :tableConfig="TABLE_CONFIG"
      :requestConfig="REQUEST_CONFIG"
    >
      <template #operationBar="{ searchForm }">
        <el-button @click="handleExport(searchForm)"> 导出 </el-button>
      </template>
    </pd-DataTable>
    <el-divider />
    <Introduction :markdownContent="introMarkdown" />
  </div>
</template>
