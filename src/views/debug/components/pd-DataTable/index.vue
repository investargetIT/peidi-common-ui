<script setup lang="ts">
const TABLE_CONFIG = {
  columns: [
    {
      prop: "title",
      label: "Title",
    },
    {
      prop: "channel",
      label: "Platforms",
    },
    {
      prop: "longAmount",
      label: "Price Range",
    },
    {
      prop: "reviewCnt",
      label: "Reviews",
    },
    {
      prop: "reviewCnt",
      label: "Est. Sales",
    },
    {
      prop: "star",
      label: "Rating",
    },
    {
      prop: "Operation",
      label: "Operation",
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
};
</script>

<template>
  <div>
    <h1>pd-DataTable</h1>
    <pd-DataTable
      :tableConfig="TABLE_CONFIG"
      :requestConfig="REQUEST_CONFIG"
    ></pd-DataTable>
  </div>
</template>
