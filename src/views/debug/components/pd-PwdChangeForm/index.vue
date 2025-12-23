<script setup lang="ts">
import { ref } from "vue";

const REQUEST_CONFIG = {
  url: "https://user.peidigroup.cn/user/update-password",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "1930161144376926509",
  },
  data: {
    identifier: "1926449443739600965",
  },
  timeout: 1000 * 10,
};
const dialogVisible = ref(false);
</script>

<template>
  <div>
    <h1>pd-PwdChangeForm</h1>
    <el-button @click="dialogVisible = true">打开修改密码弹窗</el-button>
    <pd-PwdChangeForm
      v-model:visible="dialogVisible"
      :requestConfig="REQUEST_CONFIG"
    />
  </div>
</template>
