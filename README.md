# Peidi Common UI

基于 Vue 3 + TypeScript + Vite 构建的现代化通用 UI 组件库。

## ✨ 特性

- 🚀 **前沿技术栈**：基于 Vue 3.5 + TypeScript 5.9 构建
- ⚡ **极速开发体验**：使用 Vite 7.2 构建，毫秒级热更新
- 🎨 **精美 UI 设计**：集成 Element Plus 2.11 组件库
- 🌐 **国际化支持**：内置 vue-i18n 多语言方案
- 📦 **模块化设计**：支持按需引入，优化打包体积
- 🔧 **完整类型支持**：100% TypeScript 覆盖
- 🎯 **开箱即用**：提供业务常用组件和工具函数

## 🛠️ 技术栈

| 技术         | 版本    |
| ------------ | ------- |
| Vue          | 3.5.24  |
| TypeScript   | 5.9.3   |
| Vite         | 7.2.4   |
| Element Plus | 2.11.8  |
| Axios        | 1.13.2  |
| Highlight.js | 11.11.1 |
| Iconify Vue  | 5.0.0   |

## 📦 安装

```bash
# 使用 pnpm（推荐）
pnpm install
# 或使用 npm
npm install
# 或使用 yarn
yarn install
```

## 🚀 快速开始

### 开发环境

```bash
pnpm dev
```

访问 http://localhost:5173 查看组件库演示。

### 生产构建

```bash
pnpm build
```

### 预览构建结果

```bash
pnpm preview
```

## 📁 项目结构

```
peidi-common-ui/
├── src/                  # 源代码目录
│   ├── components/       # 组件源码
│   ├── utils/           # 工具函数
│   └── types/           # 类型定义
├── packages/             # 组件包目录
├── pd-ui-package/        # UI 包目录
├── public/              # 静态资源
├── index.html           # HTML 入口文件
├── vite.config.ts       # Vite 配置
├── tsconfig.json        # TypeScript 配置
├── package.json         # 项目配置
└── README.md            # 项目说明
```

## 🎯 核心功能

- **通用组件**：封装业务中高频使用的 UI 组件
- **工具函数**：提供常用的工具方法集合
- **类型定义**：完整的 TypeScript 类型系统
- **主题定制**：支持自定义主题配置
- **国际化**：内置多语言支持方案

## 🔧 开发指南

### 添加新组件

1.  在 `src/components` 目录下创建组件文件
2.  导出组件类型定义
3.  在入口文件中注册组件
4.  编写组件文档和示例

### 样式规范

- 使用 SCSS 预处理器
- 遵循 BEM 命名规范
- 支持主题变量定制

### 代码规范

- 使用 ESLint + Prettier 进行代码格式化
- 提交前自动运行代码检查
- 遵循 Vue 3 Composition API 最佳实践

## 🤝 贡献指南

1.  Fork 本仓库
2.  创建特性分支 (`git checkout -b feature/AmazingFeature`)
3.  提交更改 (`git commit -m 'Add some AmazingFeature'`)
4.  推送到分支 (`git push origin feature/AmazingFeature`)
5.  开启 Pull Request

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 [Issue](https://github.com/your-username/peidi-common-ui/issues)
- 发送邮件至：[your-email@example.com]

---

**如果这个项目对你有帮助，请给我们一个 Star！⭐**
