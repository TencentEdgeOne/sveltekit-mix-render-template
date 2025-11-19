# SvelteKit 混合渲染模板

一个基于 **SvelteKit 2** 和 **Svelte 5** 的混合渲染演示项目，展示了 SSR、Prerender、Streaming 等多种渲染策略，遵循现代 Web 开发最佳实践构建。

本模板使用 **@edgeone/sveltekit** 适配器，可无缝部署到 **EdgeOne Pages** 平台，支持边缘计算能力和全球内容分发。

## ✨ 特性

- 🚀 **混合渲染策略** - 演示 SSR、CSR、Prerender、Streaming 等渲染方式
- ⚡ **现代化前端** - SvelteKit 2 + Svelte 5 + TypeScript
- 🎨 **交互式演示** - 包含 Wordle 风格游戏（Sverdle）展示 SvelteKit 能力
- 🔧 **开箱即用** - 预配置开发环境和构建流程
- 🌐 **边缘就绪** - 兼容 EdgeOne Pages 部署

## 🛠️ 技术栈

### 前端
- **SvelteKit 2.47.1** - 现代化全栈 Web 框架
- **Svelte 5.41.0** - 响应式 UI 框架，支持 runes
- **TypeScript 5.9.3** - 类型安全的 JavaScript
- **Vite 7.1.10** - 快速构建工具和开发服务器

### 部署
- **@edgeone/sveltekit** - EdgeOne Pages 的 SvelteKit 适配器
- **EdgeOne Pages** - 边缘计算平台，全球 CDN

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- EdgeOne Pages 账号

### 安装依赖

```bash
# 克隆项目
git clone <your-repo-url>
cd sveltekit-mix-render-template

# 安装依赖
npm install
```

### 本地开发

```bash
# 启动开发服务器
edgeone pages dev

# 访问 http://localhost:8088
```

### 构建

```bash
# 构建生产版本
edgeone pages build
```

## 📚 功能演示

### 混合渲染策略

**SSR（服务端渲染）**
- 路径：`/ssr`
- 特点：每次请求都在服务器上重新渲染
- 适用场景：动态内容和个性化页面
- 实现方式：使用 `+page.server.ts` 配合 load 函数

**CSR（客户端渲染）**
- 路径：`/csr`
- 特点：完全在浏览器中渲染
- 适用场景：高度交互的应用和不需要 SEO 的单页应用
- 实现方式：在 `+page.ts` 中设置 `export const ssr = false`

**Prerender（静态站点生成）**
- 路径：`/prerender`
- 特点：在构建时预先生成静态 HTML 页面
- 适用场景：营销页面、博客和文档
- 实现方式：在 `+page.server.ts` 或 `+page.ts` 中设置 `export const prerender = true`

**Streaming（流式渲染）**
- 路径：`/streaming`
- 特点：逐步渲染页面内容，提升用户体验
- 适用场景：数据密集型页面和多个异步数据源
- 实现方式：从 load 函数返回 promises，并使用 `{#await}` 块

### 交互式演示

**Sverdle（Wordle 克隆）**
- 路径：`/sverdle`
- 一个功能完整的 Wordle 风格猜词游戏
- 演示表单处理、状态管理和服务端验证
- 展示使用 SvelteKit 构建交互式应用的最佳实践

## 🗄️ 项目结构

```
sveltekit-mix-render-template/
├── src/                    # 源代码目录
│   ├── routes/            # SvelteKit 路由
│   │   ├── +layout.svelte # 根布局组件
│   │   ├── +page.svelte   # 首页组件
│   │   ├── Header.svelte  # 导航头部
│   │   ├── Counter.svelte # 交互式计数器演示
│   │   ├── ssr/           # SSR 演示页面
│   │   ├── csr/           # CSR 演示页面
│   │   ├── prerender/     # Prerender 演示页面
│   │   ├── streaming/     # Streaming 演示页面
│   │   └── sverdle/       # Wordle 游戏演示
│   ├── lib/               # 库代码
│   │   ├── images/        # 图片资源
│   └── app.html           # HTML 模板
├── static/                # 静态资源
├── package.json           # 项目配置
├── svelte.config.js       # SvelteKit 配置
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
└── eslint.config.js       # ESLint 配置
```

## 📄 许可证

本项目使用 MIT 许可证 - 查看 [LICENSE](https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/mit.txt) 文件了解详情。

## 🚀 一键部署

[![使用 EdgeOne Pages 部署](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?from=github&template=sveltekit-mix-render-template)
