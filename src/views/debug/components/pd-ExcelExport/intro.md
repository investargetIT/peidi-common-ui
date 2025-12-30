# pd-ExcelExport 组件技术文档

## 概述

pd-ExcelExport 是一个基于 Vue 3 + TypeScript 的 Excel 导出组件，提供简单易用的数据导出功能。组件基于 ExcelJS 和 file-saver 库实现，支持自定义列配置、样式定制、格式化功能和超链接支持。

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
  // 新增超链接配置
  hyperlink?: {
    // 超链接地址，可以是字符串或函数
    url: string | ((value: any, row: any) => string);
    // 显示文本，可以是字符串或函数，默认为单元格值
    text?: string | ((value: any, row: any) => string);
    // 超链接提示文本
    tooltip?: string;
  };
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

### 2. 超链接功能

#### 基本超链接

```typescript
const columnsConfig = [
  {
    prop: "website",
    label: "网站",
    width: 80,
    hyperlink: {
      url: "website", // 直接使用数据中的website字段作为URL
      text: "访问网站",
      tooltip: "点击访问网站"
    }
  }
];
```

#### 动态超链接

```typescript
const columnsConfig = [
  {
    prop: "email",
    label: "邮箱",
    width: 80,
    hyperlink: {
      url: (value) => `mailto:${value}`,
      text: (value) => `发送邮件给${value}`,
      tooltip: "点击发送邮件"
    }
  },
  {
    prop: "profile",
    label: "个人资料",
    width: 80,
    hyperlink: {
      url: (value, row) => `/user/profile/${row.id}`,
      text: "查看详情"
    }
  }
];
```

#### 复杂超链接示例

```typescript
const tableData = [
  { 
    id: 1, 
    name: "张三", 
    email: "zhangsan@example.com",
    website: "https://example.com",
    github: "zhangsan"
  }
];

const columnsConfig = [
  { prop: "name", label: "姓名", width: 50 },
  {
    prop: "email",
    label: "邮箱",
    width: 80,
    hyperlink: {
      url: (value) => `mailto:${value}`,
      text: "📧 发送邮件"
    }
  },
  {
    prop: "website",
    label: "网站",
    width: 80,
    hyperlink: {
      url: "website",
      text: "🌐 访问网站"
    }
  },
  {
    prop: "github",
    label: "GitHub",
    width: 80,
    hyperlink: {
      url: (value) => `https://github.com/${value}`,
      text: (value) => `👨‍💻 ${value}`,
      tooltip: "查看GitHub主页"
    }
  }
];
```

### 3. 自定义样式

组件内置了现代化的表格样式：

- **表头**：深蓝色背景，白色文字
- **数据行**：交替行颜色，提高可读性
- **超链接**：蓝色带下划线样式
- **边框**：细边框设计
- **字体**：微软雅黑，优化中文显示

### 4. Excel 功能支持

- **冻结表头**：滚动时表头保持可见
- **自动筛选**：支持列筛选功能
- **页面设置**：A4 纸张，横向打印
- **自适应宽度**：自动调整列宽
- **超链接**：支持单元格超链接功能

## 使用示例

### 完整示例

```vue
<template>
  <pd-ExcelExport
    title="导出用户数据"
    :data="userData"
    :columnsConfig="columnsConfig"
    fileName="用户信息"
  />
</template>

<script setup lang="ts">
const userData = [
  {
    id: 1,
    name: "张三",
    email: "zhangsan@example.com",
    website: "https://zhangsan.com",
    salary: 15000,
    createTime: "2023-01-15"
  },
  {
    id: 2,
    name: "李四",
    email: "lisi@example.com",
    website: "https://lisi.com",
    salary: 18000,
    createTime: "2023-02-20"
  }
];

const columnsConfig = [
  { prop: "name", label: "姓名", width: 50 },
  {
    prop: "email",
    label: "邮箱",
    width: 80,
    hyperlink: {
      url: (value) => `mailto:${value}`,
      text: "📧 发送邮件",
      tooltip: "点击发送邮件"
    }
  },
  {
    prop: "website",
    label: "个人网站",
    width: 80,
    hyperlink: {
      url: "website",
      text: "🌐 访问网站"
    }
  },
  {
    prop: "salary",
    label: "薪资",
    width: 60,
    format: (value) => `¥${value.toLocaleString()}`
  },
  {
    prop: "createTime",
    label: "创建时间",
    width: 80,
    format: (value) => new Date(value).toLocaleDateString()
  }
];
</script>
```

## 注意事项

1. **超链接样式**：超链接单元格会自动应用蓝色带下划线的样式
2. **数据验证**：确保超链接的URL格式正确
3. **性能考虑**：大量数据导出时，建议使用分页或异步处理
4. **浏览器兼容性**：确保用户使用的Excel版本支持超链接功能