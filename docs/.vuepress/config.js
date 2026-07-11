import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: null,
    // 导航栏 — 显示在页面顶部
    navbar: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '前端', link: '/frontend/' },
      { text: '后端', link: '/backend/' },
      { text: '读书笔记', link: '/reading/' },
    ],
    // 侧边栏 — 按路径分组
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md',
            '/guide/deployment.md',
          ],
        },
      ],
      '/frontend/': [
        {
          text: '前端',
          children: [
            '/frontend/README.md',
            '/frontend/vue3-composition.md',
            '/frontend/css-grid.md',
            '/frontend/async-js.md',
          ],
        },
      ],
      '/backend/': [
        {
          text: '后端',
          children: [
            '/backend/README.md',
            '/backend/express-intro.md',
            '/backend/mysql-queries.md',
            '/backend/docker-basics.md',
          ],
        },
      ],
      '/reading/': [
        {
          text: '读书笔记',
          children: [
            '/reading/README.md',
            '/reading/csapp-notes.md',
            '/reading/clean-code.md',
          ],
        },
      ],
    },
    editLink: false,
    lastUpdated: true,
    contributors: true,
  }),
  base: '/',
  lang: 'zh-CN',
  title: '我的知识笔记',
  description: '用 VuePress 构建的个人知识库',
})
