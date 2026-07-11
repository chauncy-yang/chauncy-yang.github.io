import{i as e,r as t,s as n,t as r}from"./app-DQTDj375.js";var i=JSON.parse(`{"path":"/guide/getting-started.html","title":"快速开始","lang":"zh-CN","frontmatter":{},"git":{},"filePathRelative":"guide/getting-started.md"}`),a={name:`getting-started.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h1><h2 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求"><span>环境要求</span></a></h2><ul><li>Node.js v18+</li><li>包管理器：npm / pnpm / yarn</li></ul><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 创建目录</span></span>
<span class="line"><span class="token function">mkdir</span> vuepress-site</span>
<span class="line"><span class="token builtin class-name">cd</span> vuepress-site</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 初始化</span></span>
<span class="line"><span class="token function">git</span> init</span>
<span class="line"><span class="token function">npm</span> init <span class="token parameter variable">-y</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装 VuePress</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next @vuepress/bundler-vite@next @vuepress/theme-default@next</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">.</span>
<span class="line">├── docs</span>
<span class="line">│   ├── .vuepress</span>
<span class="line">│   │   └── config.js    # 配置文件</span>
<span class="line">│   ├── guide</span>
<span class="line">│   │   └── README.md    # 指南首页</span>
<span class="line">│   └── README.md        # 站点首页</span>
<span class="line">└── package.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 启动开发服务器</span></span>
<span class="line">npx vuepress dev docs</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 构建静态文件</span></span>
<span class="line">npx vuepress build docs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};