# Peidi Common UI

基于 Vue 3 + TypeScript + Vite 构建的通用 UI 组件库。

## 技术栈

| 技术         | 版本   |
| ------------ | ------ |
| Vue          | 3.5.24 |
| TypeScript   | 5.9.3  |
| Vite         | 7.2.4  |
| Element Plus | 2.11.8 |

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发环境

```bash
pnpm dev
```

### 生产构建

```bash
pnpm build
```

## NPM 打包发布指南

### 1. 打包项目

执行构建命令：

```bash
npm run build
```

构建成功后，dist 目录下会出现打包文件。

### 2. 初始化 package.json

在打包好的目录下执行：

```bash
npm init -y
```

### 3. 设置 npm 源

确保使用官方 npm 源：

```bash
npm config set registry https://registry.npmjs.org/
```

### 4. 登录 npm 账号

```bash
npm adduser
# 或
npm login
```

按照提示输入用户名、密码、邮箱，并验证邮箱验证码。

### 5. 发布到 npm

```bash
npm publish --access=public
```

### 注意事项

- 确保 package.json 中的 name 字段是唯一的，避免名称冲突
- 首次发布需要验证邮箱
- 发布前确认版本号正确

## 项目结构

```
peidi-common-ui/
├── dist/                # 打包输出目录
├── packages/            # 组件库代码目录
│   ├── pd-ui/           # 组件库代码目录
│   ├── locales/         # 多语言配置目录
├── src/                 # 项目源代码目录
│   ├── views/           # 页面组件目录
│   ├── utils/           # 工具函数目录
├── .gitignore           # Git 忽略文件配置
├── package.json         # 项目依赖配置文件
├── pnpm-lock.yaml       # pnpm 锁文件
├── README.md            # 项目说明文档
├── tsconfig.json        # TypeScript 配置文件
└── vite.config.ts       # Vite 配置文件
```

## 开发说明

- 使用 Vue 3 Composition API
- 完全 TypeScript 支持
- 支持按需引入组件
