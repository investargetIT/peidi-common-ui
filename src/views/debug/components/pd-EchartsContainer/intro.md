# pd-EchartsContainer 组件技术文档

## 概述

基于 Vue 3 和 Element Plus 的 ECharts 图表封装组件，提供样式封装和功能增强。

## 核心特性

- 完全兼容 ECharts 配置
- 响应式尺寸监听
- 动态配置更新
- 自动资源清理
- 自定义插槽支持

## 组件属性

| 属性   | 类型   | 必需 | 默认值             | 描述             |
| ------ | ------ | ---- | ------------------ | ---------------- |
| name   | String | 是   | -                  | 图表唯一标识符   |
| title  | String | 否   | ""                 | 图表标题         |
| text   | String | 否   | ""                 | 描述文本         |
| option | Object | 否   | {}                 | ECharts 配置对象 |
| style  | Object | 否   | { width: "700px" } | 容器样式         |

## 技术实现

### 核心逻辑

```javascript
// 图表初始化
myChart = echarts.init(chartDom);
props.option && myChart.setOption(props.option);

// 响应式监听
resizeObserver = new ResizeObserver((entries) => {
  myChart && myChart.resize();
});

// 配置更新监听
watch(
  () => props.option,
  (newOption) => {
    myChart && myChart.setOption(newOption);
  },
  { deep: true }
);
```

### 资源管理

```javascript
onUnmounted(() => {
  if (myChart) {
    myChart.dispose();
    myChart = null;
  }
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
});
```

## 使用示例

### 基础用法

```vue
<template>
  <pd-EchartsContainer
    name="basicChart"
    title="基础图表"
    :option="chartOption"
    :style="{ width: '100%' }"
  />
</template>

<script setup>
const chartOption = {
  tooltip: { trigger: "item" },
  series: [{ type: "pie", data: [] }],
};
</script>
```

### 高级用法

```vue
<template>
  <pd-EchartsContainer
    :name="chartConfig.name"
    :title="chartConfig.title"
    :option="chartConfig.option"
    :style="chartConfig.style"
  >
    <template #custom-content>
      <div>自定义内容</div>
    </template>
  </pd-EchartsContainer>
</template>

<script setup>
const chartConfig = {
  name: "advancedChart",
  title: "高级图表",
  option: {
    tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
    series: [
      {
        type: "pie",
        radius: ["35%", "60%"],
        data: [{ value: 1048, name: "数据1" }],
      },
    ],
  },
  style: { width: "100%", borderRadius: "10px" },
};
</script>
```

## 样式计算

```javascript
// 图表最小高度计算
const chartMinHeight = computed(() => {
  if (!props.style.height) return "450px";
  return props.style.height.replace("px", "") - 100 + "px" || "450px";
});
```

## 注意事项

1. name 属性必须唯一
2. option 对象变化会深度监听
3. 确保容器有明确尺寸
4. 支持所有 ECharts 图表类型和配置选项

## 兼容性

- Vue 3.x + Element Plus + ECharts 5.x
- 现代浏览器（支持 ResizeObserver）
