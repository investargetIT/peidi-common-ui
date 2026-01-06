# pd-DataTable 组件技术文档

## 组件概述

基于 Vue 3 + Element Plus 的通用数据表格组件，集成增删改查、搜索、分页、排序等功能。组件提供完整的 CRUD 操作支持，支持动态表单配置和自定义插槽。

## 核心特性

- ✅ 完整的 CRUD 操作
- ✅ 动态搜索表单
- ✅ 分页与排序
- ✅ 表单验证
- ✅ 国际化支持
- ✅ 本地存储配置
- ✅ 自定义列渲染
- ✅ 操作栏插槽支持
- ✅ 自定义排序逻辑

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

## 插槽支持

### operationBar 操作栏插槽

通过插槽可以在操作栏添加自定义按钮和功能：

```vue
<template>
  <pd-DataTable
    id="user-management"
    :tableConfig="tableConfig"
    :requestConfig="requestConfig"
  >
    <template #operationBar="{ searchForm }">
      <el-button @click="handleExport(searchForm)">导出</el-button>
      <el-button @click="handleCustomAction">自定义操作</el-button>
    </template>
  </pd-DataTable>
</template>

<script setup>
const handleExport = (searchForm) => {
  console.log("导出数据，搜索条件:", searchForm);
  // 导出逻辑
};

const handleCustomAction = () => {
  console.log("自定义操作");
};
</script>
```

**插槽参数：**

- `searchForm` - 当前搜索表单数据

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

- **搜索**：动态生成搜索表单，支持文本、选择框、日期选择器
- **新增**：模态框表单添加数据，支持表单验证
- **编辑**：模态框表单修改数据，自动填充原数据
- **删除**：确认对话框后删除，支持自定义删除逻辑
- **分页**：可配置分页选项，自动保存用户偏好
- **排序**：支持自定义排序列和排序逻辑
- **本地存储**：自动保存分页大小配置

### 自定义排序

支持两种排序模式：

1. **自动排序**：设置 `sortable: true`
2. **自定义排序**：设置 `sortable: 'custom'`，通过 `handleSortChange` 事件处理

```typescript
// 自定义排序示例
const tableConfig = {
  columns: [
    {
      prop: "name",
      label: "姓名",
      sortable: "custom", // 启用自定义排序
    },
  ],
};

// 排序事件处理
function handleSortChange(column) {
  if (column.column.sortable === "custom") {
    // 自定义排序逻辑
    if (column.order === "descending") {
      // 降序排序逻辑
    } else if (column.order === "ascending") {
      // 升序排序逻辑
    }
  }
}
```

### 国际化键值

- `dataTable.add` - 新增按钮
- `dataTable.edit` - 编辑按钮
- `dataTable.delete` - 删除按钮
- `dataTable.confirmDelete` - 删除确认消息
- `dataTable.reset` - 重置按钮
- `dataTable.query` - 查询按钮
- `dataTable.noData` - 无数据提示
- `dataTable.addData` - 新增数据标题
- `dataTable.editData` - 编辑数据标题
- `dataTable.operation` - 操作列标题

## 使用示例

### 基础用法

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
    {
      prop: "status",
      label: "状态",
      minWidth: 100,
      render: (scope) => {
        return h(
          "span",
          {
            style: { color: scope.row.status === "active" ? "green" : "red" },
          },
          scope.row.status === "active" ? "活跃" : "禁用"
        );
      },
    },
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
  add: {
    url: "/api/users/add",
    method: "POST",
    headers: { "Content-Type": "application/json" },
  },
  edit: {
    url: "/api/users/edit",
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
    {
      prop: "status",
      label: "状态",
      type: "select",
      config: {
        placeholder: "请选择状态",
        options: [
          { label: "活跃", value: "active" },
          { label: "禁用", value: "inactive" },
        ],
      },
    },
  ],
};

const operationFormConfig = {
  form: {
    labelWidth: "100px",
  },
  formItems: [
    {
      prop: "name",
      label: "姓名",
      type: "text",
      config: { placeholder: "请输入姓名" },
    },
    {
      prop: "email",
      label: "邮箱",
      type: "text",
      config: { placeholder: "请输入邮箱" },
    },
  ],
  rules: {
    name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
    email: [
      { required: true, message: "请输入邮箱", trigger: "blur" },
      { type: "email", message: "邮箱格式不正确", trigger: "blur" },
    ],
  },
};
</script>
```

### 高级用法 - 自定义操作栏

```vue
<template>
  <pd-DataTable
    id="advanced-table"
    :tableConfig="tableConfig"
    :requestConfig="requestConfig"
  >
    <template #operationBar="{ searchForm }">
      <el-button type="success" @click="handleExport(searchForm)">
        <iconify-icon icon="bx:download" width="16" height="16" />
        导出Excel
      </el-button>
      <el-button type="warning" @click="handleBatchOperation">
        批量操作
      </el-button>
    </template>
  </pd-DataTable>
</template>

<script setup>
import { ref } from "vue";

const selectedRows = ref([]);

const handleExport = (searchForm) => {
  // 导出逻辑，可以使用搜索条件
  console.log("导出数据，搜索条件:", searchForm);
};

const handleBatchOperation = () => {
  // 批量操作逻辑
  console.log("批量操作");
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

## 注意事项

1. **组件 ID**：每个组件实例需要唯一的 ID，用于本地存储配置
2. **API 格式**：确保后端 API 返回的数据格式符合组件要求
3. **表单验证**：操作表单支持 Element Plus 的表单验证规则
4. **自定义渲染**：列渲染函数需要返回 VNode 或组件
5. **排序处理**：自定义排序需要在后端实现相应的排序逻辑
6. **错误处理**：组件内置了基本的错误提示，可根据需要扩展
