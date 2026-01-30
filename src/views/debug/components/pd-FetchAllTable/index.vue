<script setup lang="ts">
import { ref } from "vue";
import Introduction from "../../../utils/introduction.vue";
import introMarkdown from "./intro.md?raw";
// 生产环境直接从包中引入
// import { useFetchAllTable } from "peidi-common-ui";
import { useFetchAllTable } from "../../../../../packages/index";

const TOKEN = localStorage.getItem("peidi-common-ui-token") || "";

const uiRes = ref("");
const REQUEST_CONFIG = {
  // url: "https://api.peidigroup.cn/oms/invoice/customer/page",
  url: "https://api.peidigroup.cn/oms/bi/shuyunNick-page",
  token: TOKEN,
  params: {
    pageNum: 1,
    pageSize: 10,
  },
  callback: (data: any) => {
    uiRes.value = JSON.stringify(data);
  },
};

const { fetchData, loading } = useFetchAllTable();
const hooksRes = ref("");
const handleClick = async () => {
  hooksRes.value = JSON.stringify(await fetchData(REQUEST_CONFIG));
};
</script>

<template>
  <div>
    <h1>pd-FetchAllTable</h1>
    <div>
      <pd-FetchAllTable :requestConfig="REQUEST_CONFIG" />
    </div>
    <div>
      <p>推荐使用hooks用法: useFetchAllTable</p>
      <el-button type="primary" @click="handleClick" :loading="loading">
        点击使用Hooks请求
      </el-button>
      <p>Hooks请求状态：{{ loading }}</p>
    </div>
    <el-collapse>
      <el-collapse-item
        :title="'请求结果 -UI组件' + (uiRes?.length ? ' ✅' : '')"
        name="1"
      >
        {{ uiRes }}
      </el-collapse-item>
      <el-collapse-item
        :title="'请求结果 -Hooks' + (hooksRes?.length ? ' ✅' : '')"
        name="2"
      >
        {{ hooksRes }}
      </el-collapse-item>
    </el-collapse>
    <el-divider />
    <Introduction :markdownContent="introMarkdown" />
  </div>
</template>
