<script setup lang="ts">
import { h, resolveComponent } from "vue";

const SEARCH_FORM_CONFIG = {
  formItems: [
    {
      prop: "title",
      label: "Product Name",
      type: "text",
      config: {
        placeholder: "Search Product Name",
      },
    },
    {
      prop: "channel",
      label: "Platforms",
      type: "select",
      config: {
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
    },
  ],
};
const TABLE_CONFIG = {
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
      Authorization: "1930161144376926632",
    },
    timeout: 1000 * 10,
  },
  delete: {
    url: "https://api.peidigroup.cn/ai/intelligence/product/delete",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "1930161144376926632",
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
      :tableConfig="TABLE_CONFIG"
      :requestConfig="REQUEST_CONFIG"
    ></pd-DataTable>
  </div>
</template>
