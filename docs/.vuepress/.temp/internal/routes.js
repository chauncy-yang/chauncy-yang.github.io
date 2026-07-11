export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/ychze/Projects/vuepress-site/docs/README.md"), meta: {"title":"首页"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Users/ychze/Projects/vuepress-site/docs/guide/README.md"), meta: {"title":"指南"} }],
  ["/guide/deployment.html", { loader: () => import(/* webpackChunkName: "guide_deployment.html" */"/Users/ychze/Projects/vuepress-site/docs/guide/deployment.md"), meta: {"title":"部署到 GitHub Pages"} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting-started.html" */"/Users/ychze/Projects/vuepress-site/docs/guide/getting-started.md"), meta: {"title":"快速开始"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/ychze/Projects/vuepress-site/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);
