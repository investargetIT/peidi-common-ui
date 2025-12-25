<script setup lang="ts">
import Introduction from "../../../utils/introduction.vue";
import introMarkdown from "./intro.md?raw";

const TABLE_DATA = [
  {
    name: "张三",
    age: 25,
    email: "zhangsan@example.com",
  },
  {
    name: "李四",
    age: 30,
    email: "lisi@example.com",
  },
  {
    name: "王五",
    age: 35,
    email: "wangwu@example.com",
  },
];
const TABLE_COLUMNS_CONFIG = [
  {
    prop: "name",
    label: "姓名",
    width: 50,
  },
  {
    prop: "age",
    label: "年龄",
    width: 50,
  },
  {
    prop: "email",
    label: "邮箱",
    width: 100,
  },
];
const FILE_NAME = "导出数据";
</script>

<template>
  <div>
    <h1>pd-ExcelExport</h1>
    <pd-ExcelExport
      title="导出数据"
      :data="TABLE_DATA"
      :columnsConfig="TABLE_COLUMNS_CONFIG"
      :fileName="FILE_NAME"
    />
    <el-divider />
    <Introduction :markdownContent="introMarkdown" />
  </div>
</template>
