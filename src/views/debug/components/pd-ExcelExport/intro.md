# pd-ExcelExport 组件技术文档

## 概述

pd-ExcelExport 是一个基于 Vue 3 + TypeScript 的 Excel 导出组件，提供简单易用的数据导出功能。组件基于 ExcelJS 和 file-saver 库实现，支持自定义列配置、样式定制和格式化功能。

## 技术栈

- **Vue 3.5.24** - 前端框架
- **TypeScript 5.9.3** - 类型支持
- **ExcelJS 4.4.0** - Excel 文件处理
- **file-saver 2.0.5** - 文件下载
- **Element Plus 2.11.8** - UI 组件库

## 安装依赖

确保项目中已安装必要的依赖：

```bash
npm install exceljs file-saver
# 或
yarn add exceljs file-saver
```

## 组件导入

### 全局注册

在项目入口文件中全局注册组件：

```typescript
// main.ts
import { createApp } from "vue";
import pdGlobalComponent from "peidi-common-ui";

const app = createApp(App);
app.use(pdGlobalComponent);
```

### 局部导入

```vue
<script setup lang="ts">
import { PdExcelExport } from "peidi-common-ui";
</script>
```

## 基本用法

### 简单数据导出

```vue
<template>
  <pd-ExcelExport
    title="导出数据"
    :data="tableData"
    :columnsConfig="columnsConfig"
    fileName="用户数据"
  />
</template>

<script setup lang="ts">
const tableData = [
  { name: "张三", age: 25, email: "zhangsan@example.com" },
  { name: "李四", age: 30, email: "lisi@example.com" },
  { name: "王五", age: 35, email: "wangwu@example.com" },
];

const columnsConfig = [
  { prop: "name", label: "姓名", width: 50 },
  { prop: "age", label: "年龄", width: 50 },
  { prop: "email", label: "邮箱", width: 100 },
];
</script>
```

## API 文档

### Props 配置

| 属性            | 类型             | 必填 | 默认值 | 说明             |
| --------------- | ---------------- | ---- | ------ | ---------------- |
| `data`          | `Array<any>`     | ✅   | -      | 要导出的数据数组 |
| `columnsConfig` | `ColumnConfig[]` | ✅   | -      | 列配置数组       |
| `fileName`      | `string`         | ✅   | -      | 导出的文件名     |

### ColumnConfig 接口

```typescript
interface ColumnConfig {
  prop: string; // 数据字段名
  label: string; // 表头显示文本
  width?: number; // 列宽度（可选）
  format?: (value: any) => string; // 数据格式化函数（可选）
}
```

## 高级功能

### 1. 数据格式化

```typescript
const columnsConfig = [
  {
    prop: "salary",
    label: "薪资",
    width: 80,
    format: (value) => `¥${value.toLocaleString()}`,
  },
  {
    prop: "createTime",
    label: "创建时间",
    width: 120,
    format: (value) => new Date(value).toLocaleDateString(),
  },
];
```

### 2. 自定义样式

组件内置了现代化的表格样式：

- 表头：深蓝色背景，白色文字
- 数据行：交替行颜色，提高可读性
- 边框：细边框设计
- 字体：微软雅黑，优化中文显示

### 3. Excel 功能支持

- **冻结表头**：滚动时表头保持可见
- **自动筛选**：支持列筛选功能
- **页面设置**：A4 纸张，横向打印
- **自适应宽度**：自动调整列宽
