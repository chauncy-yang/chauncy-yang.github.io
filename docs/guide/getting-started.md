# 快速开始

## 环境要求

- Node.js v18+
- 包管理器：npm / pnpm / yarn

## 创建项目

```bash
# 创建目录
mkdir vuepress-site
cd vuepress-site

# 初始化
git init
npm init -y

# 安装 VuePress
npm install -D vuepress@next @vuepress/bundler-vite@next @vuepress/theme-default@next
```

## 目录结构

```
.
├── docs
│   ├── .vuepress
│   │   └── config.js    # 配置文件
│   ├── guide
│   │   └── README.md    # 指南首页
│   └── README.md        # 站点首页
└── package.json
```

## 常用命令

```bash
# 启动开发服务器
npx vuepress dev docs

# 构建静态文件
npx vuepress build docs
```
