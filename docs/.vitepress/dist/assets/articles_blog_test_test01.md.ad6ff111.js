import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.6ee49df6.js";const l="/assets/image-20231022215614585.4141b045.png",v=JSON.parse('{"title":"vitepress+github搭建个人博客","description":"","frontmatter":{},"headers":[],"relativePath":"articles/blog/test/test01.md","filePath":"articles/blog/test/test01.md"}'),p={name:"articles/blog/test/test01.md"},o=e(`<h1 id="vitepress-github搭建个人博客" tabindex="-1">vitepress+github搭建个人博客 <a class="header-anchor" href="#vitepress-github搭建个人博客" aria-label="Permalink to &quot;vitepress+github搭建个人博客&quot;">​</a></h1><h2 id="环境-项目初始化" tabindex="-1">环境&amp;项目初始化 <a class="header-anchor" href="#环境-项目初始化" aria-label="Permalink to &quot;环境&amp;项目初始化&quot;">​</a></h2><p>安装node.js</p><p>安装git</p><p>创建项目</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 创建文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">mkdir zjc_vite &amp; cd zjc_vite</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 全局安装yarn</span></span>
<span class="line"><span style="color:#e1e4e8;">npm install -g yarn</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 初始化项目（一直回车）</span></span>
<span class="line"><span style="color:#e1e4e8;">yarn init</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;">yarn add --dev vitepress</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 创建文件夹</span></span>
<span class="line"><span style="color:#24292e;">mkdir zjc_vite &amp; cd zjc_vite</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 全局安装yarn</span></span>
<span class="line"><span style="color:#24292e;">npm install -g yarn</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 初始化项目（一直回车）</span></span>
<span class="line"><span style="color:#24292e;">yarn init</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 安装vitepress</span></span>
<span class="line"><span style="color:#24292e;">yarn add --dev vitepress</span></span></code></pre></div><p>项目结构如下，<strong>请自行创建没有的目录/文件</strong>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">docs </span></span>
<span class="line"><span style="color:#e1e4e8;">	./vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;">		config.ts 	// 定义导航栏、侧边栏</span></span>
<span class="line"><span style="color:#e1e4e8;">	public		// 图片等公共资源</span></span>
<span class="line"><span style="color:#e1e4e8;">	articels	// 博客</span></span>
<span class="line"><span style="color:#e1e4e8;">	index.md	// 定义网站首页</span></span>
<span class="line"><span style="color:#e1e4e8;">package.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">docs </span></span>
<span class="line"><span style="color:#24292e;">	./vitepress</span></span>
<span class="line"><span style="color:#24292e;">		config.ts 	// 定义导航栏、侧边栏</span></span>
<span class="line"><span style="color:#24292e;">	public		// 图片等公共资源</span></span>
<span class="line"><span style="color:#24292e;">	articels	// 博客</span></span>
<span class="line"><span style="color:#24292e;">	index.md	// 定义网站首页</span></span>
<span class="line"><span style="color:#24292e;">package.json</span></span></code></pre></div><p><img src="`+l+`" alt="image-20231022215614585"></p><h2 id="配置-package-json" tabindex="-1">配置./package.json <a class="header-anchor" href="#配置-package-json" aria-label="Permalink to &quot;配置./package.json&quot;">​</a></h2><p>package.json是整个项目的配置，如项目启动、项目打包、项目部署等。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;dev&quot;: &quot;vitepress dev docs&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;serve&quot;: &quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;dev&quot;: &quot;vitepress dev docs&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;serve&quot;: &quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="定义网站首页-docs-index-md" tabindex="-1">定义网站首页./docs/index.md <a class="header-anchor" href="#定义网站首页-docs-index-md" aria-label="Permalink to &quot;定义网站首页./docs/index.md&quot;">​</a></h2><p>可以直接套用，以后再详细研究。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">layout: home</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">title: 明日盈盈</span></span>
<span class="line"><span style="color:#e1e4e8;">titleTemplate: Make each day count, Make learning a habit.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">hero:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: </span></span>
<span class="line"><span style="color:#e1e4e8;">  text: 明日盈盈</span></span>
<span class="line"><span style="color:#e1e4e8;">  tagline: Make each day count, Make learning a habit.</span></span>
<span class="line"><span style="color:#e1e4e8;">  actions:</span></span>
<span class="line"><span style="color:#e1e4e8;">    - theme: brand</span></span>
<span class="line"><span style="color:#e1e4e8;">      text: Home</span></span>
<span class="line"><span style="color:#e1e4e8;">      link: /</span></span>
<span class="line"><span style="color:#e1e4e8;">    - theme: alt</span></span>
<span class="line"><span style="color:#e1e4e8;">      text: View on Github</span></span>
<span class="line"><span style="color:#e1e4e8;">      link: https://github.com/mingriyingying</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">features:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - icon: 🛠️</span></span>
<span class="line"><span style="color:#e1e4e8;">    title: Test</span></span>
<span class="line"><span style="color:#e1e4e8;">    details: Loading...</span></span>
<span class="line"><span style="color:#e1e4e8;">  - icon: ⚡️</span></span>
<span class="line"><span style="color:#e1e4e8;">    title: Test</span></span>
<span class="line"><span style="color:#e1e4e8;">    details: Loading...</span></span>
<span class="line"><span style="color:#e1e4e8;">  - icon: 🖖</span></span>
<span class="line"><span style="color:#e1e4e8;">    title: Test</span></span>
<span class="line"><span style="color:#e1e4e8;">    details: Loading...</span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">layout: home</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">title: 明日盈盈</span></span>
<span class="line"><span style="color:#24292e;">titleTemplate: Make each day count, Make learning a habit.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">hero:</span></span>
<span class="line"><span style="color:#24292e;">  name: </span></span>
<span class="line"><span style="color:#24292e;">  text: 明日盈盈</span></span>
<span class="line"><span style="color:#24292e;">  tagline: Make each day count, Make learning a habit.</span></span>
<span class="line"><span style="color:#24292e;">  actions:</span></span>
<span class="line"><span style="color:#24292e;">    - theme: brand</span></span>
<span class="line"><span style="color:#24292e;">      text: Home</span></span>
<span class="line"><span style="color:#24292e;">      link: /</span></span>
<span class="line"><span style="color:#24292e;">    - theme: alt</span></span>
<span class="line"><span style="color:#24292e;">      text: View on Github</span></span>
<span class="line"><span style="color:#24292e;">      link: https://github.com/mingriyingying</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">features:</span></span>
<span class="line"><span style="color:#24292e;">  - icon: 🛠️</span></span>
<span class="line"><span style="color:#24292e;">    title: Test</span></span>
<span class="line"><span style="color:#24292e;">    details: Loading...</span></span>
<span class="line"><span style="color:#24292e;">  - icon: ⚡️</span></span>
<span class="line"><span style="color:#24292e;">    title: Test</span></span>
<span class="line"><span style="color:#24292e;">    details: Loading...</span></span>
<span class="line"><span style="color:#24292e;">  - icon: 🖖</span></span>
<span class="line"><span style="color:#24292e;">    title: Test</span></span>
<span class="line"><span style="color:#24292e;">    details: Loading...</span></span>
<span class="line"><span style="color:#24292e;">---</span></span></code></pre></div><h2 id="定义博客-docs-articles" tabindex="-1">定义博客./docs/articles <a class="header-anchor" href="#定义博客-docs-articles" aria-label="Permalink to &quot;定义博客./docs/articles&quot;">​</a></h2><p>创建几个markdown文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span></code></pre></div><h2 id="配置-deploy-sh" tabindex="-1">配置./deploy.sh <a class="header-anchor" href="#配置-deploy-sh" aria-label="Permalink to &quot;配置./deploy.sh&quot;">​</a></h2><p>deploy.sh作用是将项目上传至github等代码仓库，也可以不用此脚本，手动提交代码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/usr/bin/env sh</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#e1e4e8;">set -e</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 生成静态文件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">yarn build</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 进入生成的文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">cd docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">git init</span></span>
<span class="line"><span style="color:#e1e4e8;">git add -A</span></span>
<span class="line"><span style="color:#e1e4e8;">git commit -m &#39;deploy&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># git push -f git@github.com:你的git名/你的git项目名.git master:你的git分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git push -f origin deploy</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">cd -</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/usr/bin/env sh</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#24292e;">set -e</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 生成静态文件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">yarn build</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 进入生成的文件夹</span></span>
<span class="line"><span style="color:#24292e;">cd docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">git init</span></span>
<span class="line"><span style="color:#24292e;">git add -A</span></span>
<span class="line"><span style="color:#24292e;">git commit -m &#39;deploy&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># git push -f git@github.com:你的git名/你的git项目名.git master:你的git分支</span></span>
<span class="line"><span style="color:#24292e;">git push -f origin deploy</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">cd -</span></span></code></pre></div>`,21),t=[o];function c(i,r,d,y,h,g){return n(),a("div",null,t)}const b=s(p,[["render",c]]);export{v as __pageData,b as default};
