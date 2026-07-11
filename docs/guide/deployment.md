# 部署到 GitHub Pages

本文档记录如何将 VuePress 站点部署到 GitHub Pages。

## 前提

- 已创建 GitHub 仓库：`chauncy-yang/chauncy-yang.github.io`
- 代码已推送到 GitHub

## 方案：GitHub Actions 自动部署

在 `.github/workflows/` 下创建部署工作流文件。

## 验证部署

1. 推送代码到 `main` 分支
2. 进入 GitHub 仓库 → Actions 标签页，查看工作流运行状态
3. 工作流完成后，访问 `https://chauncy-yang.github.io/`
