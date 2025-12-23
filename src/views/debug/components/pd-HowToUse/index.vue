<script setup lang="ts">
// @ts-ignore
import { EXAMPLE_REGISTER_CODE, EXAMPLE_USE_CODE } from "./example.js";
</script>

<template>
  <div>
    <h1>佩蒂通用组件 使用说明</h1>
    <div>
      <h3>1、安装</h3>
      <p>推荐pnpm安装组件库：</p>
      <pre>pnpm install peidi-common-ui</pre>
    </div>
    <div>
      <h3>2、支持国际化</h3>
      <p>
        在项目入口文件（如main.ts）中注册时传入响应式的语言状态，核心代码如下：
      </p>
      <pre v-html="EXAMPLE_REGISTER_CODE"></pre>
      <p>
        在组件中使用时，当语言状态改变时，调用全局函数修改响应式的语言状态，核心代码如下：
      </p>
      <pre v-html="EXAMPLE_USE_CODE"></pre>
      <h4>支持的语言列表</h4>
      <ul>
        <li>简体中文（zh-cn）</li>
        <li>美国英语（en）</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
pre {
  background-color: #f5f7fa;
  padding: 10px;
  border-radius: 4px;
  overflow: auto;
}
</style>
