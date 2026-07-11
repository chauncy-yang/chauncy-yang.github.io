import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    // 站点标题
    logo: null,
    // 导航栏
    navbar: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
    ],
    // 侧边栏
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
    },
    // 编辑链接
    editLink: false,
    // 最后更新时间
    lastUpdated: true,
    // 贡献者
    contributors: true,
  }),
  // 部署到 chauncy-yang.github.io（用户站点，base 为 /）
  base: '/',
  lang: 'zh-CN',
  title: '我的知识笔记',
  description: '用 VuePress 构建的个人知识库',
})
