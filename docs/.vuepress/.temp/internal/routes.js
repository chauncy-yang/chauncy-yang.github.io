export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/ychze/Projects/vuepress-site/docs/README.md"), meta: {"title":"首页"} }],
  ["/backend/", { loader: () => import(/* webpackChunkName: "backend_index.html" */"/Users/ychze/Projects/vuepress-site/docs/backend/README.md"), meta: {"title":"后端"} }],
  ["/backend/docker-basics.html", { loader: () => import(/* webpackChunkName: "backend_docker-basics.html" */"/Users/ychze/Projects/vuepress-site/docs/backend/docker-basics.md"), meta: {"title":"Docker 基础"} }],
  ["/backend/express-intro.html", { loader: () => import(/* webpackChunkName: "backend_express-intro.html" */"/Users/ychze/Projects/vuepress-site/docs/backend/express-intro.md"), meta: {"title":"Node.js Express 入门"} }],
  ["/backend/mysql-queries.html", { loader: () => import(/* webpackChunkName: "backend_mysql-queries.html" */"/Users/ychze/Projects/vuepress-site/docs/backend/mysql-queries.md"), meta: {"title":"MySQL 常用查询"} }],
  ["/frontend/", { loader: () => import(/* webpackChunkName: "frontend_index.html" */"/Users/ychze/Projects/vuepress-site/docs/frontend/README.md"), meta: {"title":"前端"} }],
  ["/frontend/async-js.html", { loader: () => import(/* webpackChunkName: "frontend_async-js.html" */"/Users/ychze/Projects/vuepress-site/docs/frontend/async-js.md"), meta: {"title":"JavaScript 异步编程"} }],
  ["/frontend/css-grid.html", { loader: () => import(/* webpackChunkName: "frontend_css-grid.html" */"/Users/ychze/Projects/vuepress-site/docs/frontend/css-grid.md"), meta: {"title":"CSS Grid 布局"} }],
  ["/frontend/vue3-composition.html", { loader: () => import(/* webpackChunkName: "frontend_vue3-composition.html" */"/Users/ychze/Projects/vuepress-site/docs/frontend/vue3-composition.md"), meta: {"title":"Vue3 组合式 API"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Users/ychze/Projects/vuepress-site/docs/guide/README.md"), meta: {"title":"指南"} }],
  ["/guide/deployment.html", { loader: () => import(/* webpackChunkName: "guide_deployment.html" */"/Users/ychze/Projects/vuepress-site/docs/guide/deployment.md"), meta: {"title":"部署到 GitHub Pages"} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting-started.html" */"/Users/ychze/Projects/vuepress-site/docs/guide/getting-started.md"), meta: {"title":"快速开始"} }],
  ["/reading/", { loader: () => import(/* webpackChunkName: "reading_index.html" */"/Users/ychze/Projects/vuepress-site/docs/reading/README.md"), meta: {"title":"读书笔记"} }],
  ["/reading/clean-code.html", { loader: () => import(/* webpackChunkName: "reading_clean-code.html" */"/Users/ychze/Projects/vuepress-site/docs/reading/clean-code.md"), meta: {"title":"《代码整洁之道》摘要"} }],
  ["/reading/csapp-notes.html", { loader: () => import(/* webpackChunkName: "reading_csapp-notes.html" */"/Users/ychze/Projects/vuepress-site/docs/reading/csapp-notes.md"), meta: {"title":"《深入理解计算机系统》笔记"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/ychze/Projects/vuepress-site/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);
