<script lang="ts">
export default {
  name: "pd-Button",
};
</script>
<script setup lang="ts">
import { useLocale } from "../../hooks/useLocale";

const { t } = useLocale();

/**
 * 接收传过来的值
 *
 * @param title 标题
 */
defineProps({
  title: {
    type: String,
    default: "",
  },
});

const handleClick = () => {
  alert("点击了按钮");
};
</script>

<template>
  <div class="pd-test">
    <h1>pd-Test</h1>
    <button class="pd-test-btn" @click="handleClick">
      {{ t("test.button") }}  
    </button>
    <p>参数内容：{{ title }}</p>
    <p>插槽内容：</p>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  button {
    background-color: #f9f9f9;
  }
}
</style>
