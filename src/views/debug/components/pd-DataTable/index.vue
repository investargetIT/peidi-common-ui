<script setup lang="ts">
import { h, resolveComponent } from "vue";
const TOKEN = "1930161144376926695";

const SEARCH_FORM_CONFIG = {
  formItems: [
    {
      prop: "title",
      label: "Product Name",
      type: "text",
      config: {
        searchType: "like",
        placeholder: "Search Product Name",
      },
    },
    {
      prop: "channel",
      label: "Platforms",
      type: "select",
      config: {
        searchType: "equals",
        placeholder: "Select Platforms",
        options: [
          { label: "Amazon", value: "Amazon" },
          { label: "Chewy", value: "Chewy" },
        ],
      },
    },
    {
      prop: "date",
      label: "Date",
      type: "date",
      config: {
        searchType: "equals",
        placeholder: "Select Date",
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
        expandAttribute: { type: "textarea" },
      },
    },
    {
      prop: "searchSql",
      label: "SQL",
      type: "text",
      config: {
        placeholder: "Enter SQL",
        expandAttribute: { type: "textarea" },
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
  title: "Product List",
  columns: [
    {
      prop: "title",
      label: "Product Name",
      minWidth: 200,
      showOverflowTooltip: true,
    },
    {
      prop: "channel",
      label: "Platforms",
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
          () => scope.row.channel
        );
      },
    },
    {
      prop: "longAmount",
      label: "Price Range",
      minWidth: 150,
      render: (scope: any) => {
        return h(
          "div",
          { style: { color: "#71717a" } },
          `$${scope.row.longAmount || 0} - ${scope.row.amount || 0}`
        );
      },
    },
    {
      prop: "reviewCnt",
      label: "Reviews",
      minWidth: 100,
      render: (scope: any) => {
        return h("span", {}, Number(scope.row.reviewCnt || 0).toLocaleString());
      },
    },
    {
      prop: "reviewCnt",
      label: "Est. Sales",
      minWidth: 100,
    },
    {
      prop: "star",
      label: "Rating",
      minWidth: 100,
    },
  ],
};
const REQUEST_CONFIG = {
  get: {
    url: "https://api.peidigroup.cn/ai/intelligence/product/page",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
    },
    timeout: 1000 * 10,
  },
  delete: {
    url: "https://api.peidigroup.cn/ai/intelligence/product/delete",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: TOKEN,
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
    ></pd-DataTable>
  </div>
</template>
