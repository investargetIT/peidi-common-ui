# pd-FetchAllTable 组件技术文档

## 概述

pd-FetchAllTable 是一个基于 Vue 3 + TypeScript 的一键获取全部表格数据组件。组件提供了一个便捷的按钮，能够一次性获取大量表格数据（默认pageSize设置为10万条），适用于需要获取完整数据列表的场景。同时提供了灵活的 useFetchAllTable Hook 供开发者直接使用。

## 核心特性

- ✅ 一键触发数据获取
- ✅ 大数据量支持（默认获取10万条数据）
- ✅ 加载状态显示
- ✅ 灵活的请求配置
- ✅ 请求完成回调支持
- ✅ 错误处理与日志记录
- ✅ 提供独立 Hook 便于程序化调用

## 组件属性

| 属性            | 类型          | 必填 | 默认值 | 说明            |
| --------------- | ------------- | ---- | ------ | --------------- |
| `requestConfig` | RequestConfig | ✅   | -      | API请求配置对象 |

### RequestConfig 配置项

| 属性     | 类型                  | 必填 | 说明                                      |
| -------- | --------------------- | ---- | ----------------------------------------- |
| url      | `string`              | ✅   | API请求地址                               |
| token    | `string`              | ✅   | 认证令牌，用于请求头中的Authorization字段 |
| timeout  | `number`              | ❌   | 请求超时时间，默认30秒                    |
| params   | `Record<string, any>` | ❌   | 附加请求参数                              |
| callback | `(data: any) => void` | ❌   | 请求成功后的回调函数                      |

## useFetchAllTable Hook

除了UI组件外，还提供了一个可组合函数 useFetchAllTable，可以在任何地方使用。

### 返回值

| 属性      | 类型                                                       | 说明                   |
| --------- | ---------------------------------------------------------- | ---------------------- |
| fetchData | `(config: RequestConfig) => Promise<ResponseData \| null>` | 执行数据获取的方法     |
| loading   | `Ref<boolean>`                                             | 当前是否正在加载的状态 |

### 响应数据结构

```typescript
interface ResponseData<T = any> {
  code: number; // 状态码
  data: T; // 实际数据
  [key: string]: any; // 其他字段
}
```

## 技术实现

### 核心逻辑

```typescript
// 使用axios发起GET请求
const response = await axios({
  url: config.url,
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: config.token,
  },
  params: {
    pageNo: 1,
    pageSize: 10e4, // 设置大数值以获取所有数据
    ...config.params,
  },
  timeout: config.timeout || 1000 * 30,
});
```

### 分页处理

组件内部自动设置 `pageNo: 1` 和 `pageSize: 10e4`（即100000）以获取尽可能多的数据，适合需要一次性获取全部数据的场景。

### 加载状态管理

```typescript
const loading = ref(false);

// 请求开始时
loading.value = true;

// 请求结束后（无论成功或失败）
loading.value = false;
```

## 使用示例

### 组件用法

```vue
<template>
  <pd-FetchAllTable :request-config="requestConfig" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const requestConfig = {
  url: "/api/users",
  token: "your-auth-token",
  params: {
    status: "active",
  },
};
</script>
```

### Hook 用法

```vue
<template>
  <div>
    <el-button type="primary" @click="handleClick" :loading="loading">
      点击获取全部数据
    </el-button>
    <div v-if="result">获取结果: {{ result }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useFetchAllTable } from "peidi-common-ui";

const { fetchData, loading } = useFetchAllTable();

const requestConfig = {
  url: "/api/users",
  token: "your-auth-token",
  params: {
    status: "active",
  },
  callback: (data) => {
    console.log("获取到数据:", data);
  },
};

const result = ref(null);

const handleClick = async () => {
  result.value = await fetchData(requestConfig);
};
</script>
```

### 带回调函数的组件用法

```vue
<template>
  <pd-FetchAllTable :request-config="requestConfigWithCallback" />
</template>

<script setup lang="ts">
const requestConfigWithCallback = {
  url: "/api/products",
  token: "your-auth-token",
  params: {
    category: "electronics",
  },
  callback: (data) => {
    console.log("获取到数据:", data);
    // 在这里处理获取到的数据
  },
};
</script>
```

### 结合 Element Plus Table 的使用

```vue
<template>
  <div>
    <pd-FetchAllTable :request-config="requestConfig" />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="status" label="状态" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const tableData = ref([]);

const requestConfig = {
  url: "/api/users",
  token: "your-auth-token",
  callback: (result) => {
    if (result && result.data) {
      tableData.value = result.data.list || result.data;
    }
  },
};
</script>
```

## 注意事项

1. **大数据量风险**: 组件默认设置pageSize为10万，对于数据量很大的API，请谨慎使用，避免服务器压力过大或响应过慢。
2. **认证安全**: 确保传递给组件的token具有适当的权限和安全性。
3. **错误处理**: 组件内部会捕获并打印错误信息，但在生产环境中建议添加额外的错误处理逻辑。
4. **超时设置**: 如果请求的数据量较大，建议适当增加timeout值。
5. **Hook灵活性**: useFetchAllTable Hook 提供了更大的灵活性，可以在任何需要的地方直接调用，不受UI组件限制。
