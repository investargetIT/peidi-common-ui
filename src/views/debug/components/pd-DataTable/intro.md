# pd-DataTable 组件技术文档

## 组件概述

基于 Vue 3 + Element Plus 的通用数据表格组件，集成增删改查、搜索、分页、排序等功能。

## 核心特性

- ✅ 完整的 CRUD 操作
- ✅ 动态搜索表单
- ✅ 分页与排序
- ✅ 表单验证
- ✅ 国际化支持
- ✅ 本地存储配置
- ✅ 自定义列渲染

## Props 配置

### 必需参数

**id** (`string`) - 组件唯一标识，用于本地存储配置

**tableConfig** (`object`) - 表格配置：

```typescript
{
  title?: string,                    // 表格标题
  table?: {                          // Element Plus 表格属性
    headerRowStyle?: object,
    cellStyle?: object,
    size?: string,
    emptyText?: string
  },
  columns: [{                        // 列定义（必需）
    prop: string,                    // 数据字段名
    label: string,                   // 列标题
    minWidth?: number | string,      // 最小宽度
    align?: string,                  // 对齐方式
    fixed?: string,                  // 固定列位置
    sortable?: boolean | 'custom',   // 排序支持
    showOverflowTooltip?: boolean,   // 溢出提示
    render?: (scope) => any         // 自定义渲染函数
  }]
}
```

**requestConfig** (`object`) - API 请求配置：

```typescript
{
  get: {                             // 获取数据（必需）
    url: string,
    method: string,
    headers: Record<string, string>,
    params?: object,
    data?: object,
    timeout?: number
  },
  delete?: {                         // 删除操作（可选）
    url: string,
    method: string,
    headers: Record<string, string>,
    params?: object,
    data?: object,
    timeout?: number
  },
  add?: {                           // 新增操作（可选）
    url: string,
    method: string,
    headers: Record<string, string>,
    params?: object,
    data?: object,
    timeout?: number
  },
  edit?: {                          // 编辑操作（可选）
    url: string,
    method: string,
    headers: Record<string, string>,
    params?: object,
    data?: object,
    timeout?: number
  }
}
```

### 可选参数

**searchFormConfig** (`object`) - 搜索表单配置：

```typescript
{
  formItems: [
    {
      prop: string, // 表单字段名
      label: string, // 字段标签
      type: "text" | "select" | "date", // 输入类型
      config: {
        searchType: "like" | "equals", // 搜索类型（默认: like）
        placeholder: string, // 占位符
        options: [
          {
            // select 类型选项
            label: string,
            value: string,
          },
        ],
      },
    },
  ];
}
```

**operationFormConfig** (`object`) - 操作表单配置：

```typescript
{
  form?: object,                     // Element Plus 表单属性
  formItems: [{                      // 表单项
    prop: string,                     // 字段名
    label: string,                    // 字段标签
    type: 'text' | 'select' | 'date' | 'hidden', // 输入类型
    config: {
      placeholder?: string,           // 占位符
      options?: [{                    // select 类型选项
        label: string,
        value: string
      }],
      expandAttribute?: object        // 扩展属性
    }
  }],
  rules?: object                      // 表单验证规则
}
```

**paginationConfig** (`object`) - 分页配置：

```typescript
{
  pageSize?: number,                 // 每页条数（默认: 10）
  pageSizes?: number[],              // 每页条数选项（默认: [10,20,30,40]）
  size?: string,                     // 尺寸
  disabled?: boolean,                // 禁用分页
  background?: boolean,              // 背景色（默认: true）
  layout?: string                    // 布局（默认: 'total, sizes, prev, pager, next, jumper'）
}
```

## API 请求格式

### GET 请求参数

```javascript
{
  pageNo: number,        // 当前页码
  pageSize: number,      // 每页条数
  searchStr: string,     // 搜索条件 JSON 字符串
  sortStr: string        // 排序条件 JSON 字符串
}
```

### 搜索条件格式

```javascript
[
  {
    searchName: "字段名",
    searchType: "like" | "equals",
    searchValue: "搜索值",
  },
];
```

### 排序条件格式

```javascript
[
  {
    sortName: "字段名",
    sortType: "asc" | "desc",
  },
];
```

## 响应数据格式

```javascript
{
  code: 200,             // 状态码
  msg: "success",        // 消息
  data: {
    records: [...],      // 数据数组
    total: number,       // 总条数
    current: number,     // 当前页
    pages: number        // 总页数
  }
}
```

## 内置功能

### 操作功能

- **搜索**：动态生成搜索表单
- **新增**：模态框表单添加数据
- **编辑**：模态框表单修改数据
- **删除**：确认对话框后删除
- **分页**：可配置分页选项
- **排序**：支持自定义排序列
- **本地存储**：自动保存分页大小配置

### 国际化键值

- `dataTable.add` - 新增按钮
- `dataTable.edit` - 编辑按钮
- `dataTable.delete` - 删除按钮
- `dataTable.confirmDelete` - 删除确认消息
- `dataTable.reset` - 重置按钮
- `dataTable.query` - 查询按钮
- `dataTable.noData` - 无数据提示

## 使用示例

```vue
<template>
  <pd-DataTable
    id="user-management"
    :tableConfig="tableConfig"
    :requestConfig="requestConfig"
    :searchFormConfig="searchFormConfig"
    :operationFormConfig="operationFormConfig"
  />
</template>

<script setup>
const tableConfig = {
  title: "用户管理",
  columns: [
    { prop: "id", label: "ID", minWidth: 80 },
    { prop: "name", label: "姓名", minWidth: 120, sortable: true },
    { prop: "email", label: "邮箱", minWidth: 200 },
  ],
};

const requestConfig = {
  get: {
    url: "/api/users",
    method: "GET",
    headers: { "Content-Type": "application/json" },
  },
  delete: {
    url: "/api/users/delete",
    method: "POST",
    headers: { "Content-Type": "application/json" },
  },
};

const searchFormConfig = {
  formItems: [
    {
      prop: "name",
      label: "姓名",
      type: "text",
      config: { placeholder: "请输入姓名" },
    },
  ],
};
</script>
```

## 依赖项

- Vue 3
- Element Plus
- Axios
- Day.js
- Vue I18n
- @iconify/vue
