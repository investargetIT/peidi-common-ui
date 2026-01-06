<script setup lang="ts">
import { ref } from "vue";
import Introduction from "../../../utils/introduction.vue";
import introMarkdown from "./intro.md?raw";

const TABLE_DATA = [
  {
    name: "张三",
    age: 25,
    email: "zhangsan@example.com",
    website: "https://www.baidu.com",
  },
  {
    name: "李四",
    age: 30,
    email: "lisi@example.com",
    website: "https://www.baidu.com",
  },
  {
    name: "王五",
    age: 35,
    email: "wangwu@example.com",
    website: "https://www.baidu.com",
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
    width: 20,
    hyperlink: {
      url: (value: string) => `mailto:${value}`,
      text: (value: string) => `${value}`,
      tooltip: "发送邮件",
    },
  },
  {
    prop: "website",
    label: "网站",
    width: 25,
    hyperlink: {
      url: (value: string) => `${value}`,
      text: (value: string) => `${value}`,
    },
  },
];
const FILE_NAME = "导出数据";

const excelExportRef = ref();

const triggerButtonClick = () => {
  if (excelExportRef.value) {
    if (excelExportRef.value) {
      excelExportRef.value.triggerButtonClick({
        onBeforeExport: () => {
          console.log("导出开始前执行");
        },
        onSuccess: () => {
          console.log("导出成功时执行");
        },
        onError: (error: any) => {
          console.log("导出失败时执行，错误信息:", error);
        },
        onFinally: () => {
          console.log("导出完成后执行");
        },
      });
    }
  }
};
</script>

<template>
  <div>
    <h1>pd-ExcelExport</h1>
    <pd-ExcelExport
      ref="excelExportRef"
      title="导出数据"
      :data="TABLE_DATA"
      :columnsConfig="TABLE_COLUMNS_CONFIG"
      :fileName="FILE_NAME"
    />
    <el-button style="margin-top: 20px" @click="triggerButtonClick"
      >手动触发导出</el-button
    >
    <el-divider />
    <Introduction :markdownContent="introMarkdown" />
  </div>
</template>
