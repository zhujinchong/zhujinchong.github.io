import{_ as l,o as a,c as e,k as s,Q as n}from"./chunks/framework.2516552c.js";const p="/assets/image-20231022215614585.4141b045.png",t="/assets/image-20231022225823512.30f77a05.png",o="/assets/image-20231022230259032.bfc93074.png",c="/assets/image-20231022230523314.1ff16217.png",i="/assets/image-20231022231037344.50f5f8a1.png",r="/assets/image-20231022233357679.67eb4a91.png",y="/assets/image-20231022232206983.70041b2f.png",u="/assets/image-20231022232556611.1f4c8e5a.png",d="/assets/image-20231022232730618.02dee0e5.png",m="/assets/image-20231022233221763.81c44fcb.png",g="/assets/image-20231024091627846.22e0b0a9.png",h="/assets/image-20231022233926480.764d27e9.png",q="/assets/image-20231023161555470.c5fc37e8.png",v="/assets/image-20231023175405698.b862dcff.png",b="/assets/image-20231023175506169.6088b6d3.png",f="/assets/image-20231025120807049.e0ccff10.png",k="/assets/image-20231025120729045.1c46c4ac.png",Q="/assets/image-20231025124724775.d76c502b.png",V=JSON.parse('{"title":"一、项目搭建","description":"","frontmatter":{},"headers":[],"relativePath":"articles/VitePress/index.md","filePath":"articles/VitePress/index.md","lastUpdated":null}'),T={name:"articles/VitePress/index.md"},x=n(`<h1 id="一、项目搭建" tabindex="-1">一、项目搭建 <a class="header-anchor" href="#一、项目搭建" aria-label="Permalink to &quot;一、项目搭建&quot;">​</a></h1><h2 id="环境-项目初始化" tabindex="-1">环境&amp;项目初始化 <a class="header-anchor" href="#环境-项目初始化" aria-label="Permalink to &quot;环境&amp;项目初始化&quot;">​</a></h2><p>安装node.js，略</p><p>安装git，略</p><p>创建项目</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 创建文件夹</span></span>
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
<span class="line"><span style="color:#24292e;">package.json</span></span></code></pre></div><p><img src="`+p+`" alt="image-20231022215614585"></p><h2 id="配置-package-json" tabindex="-1">配置./package.json <a class="header-anchor" href="#配置-package-json" aria-label="Permalink to &quot;配置./package.json&quot;">​</a></h2><p>package.json是整个项目的配置，如项目启动、项目打包、项目部署等。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;dev&quot;: &quot;vitepress dev docs&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;serve&quot;: &quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;dev&quot;: &quot;vitepress dev docs&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;serve&quot;: &quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>后面可以一边开发，一边查看效果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn dev</span></span></code></pre></div><h2 id="自定义网站首页-docs-index-md" tabindex="-1">自定义网站首页./docs/index.md <a class="header-anchor" href="#自定义网站首页-docs-index-md" aria-label="Permalink to &quot;自定义网站首页./docs/index.md&quot;">​</a></h2><p>可以直接套用，以后再详细研究。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">---</span></span>
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
<span class="line"><span style="color:#24292e;">---</span></span></code></pre></div><p>运行测试，查看效果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn dev</span></span></code></pre></div><p><img src="`+t+`" alt="image-20231022225823512"></p><h2 id="创建博客-docs-articles" tabindex="-1">创建博客./docs/articles <a class="header-anchor" href="#创建博客-docs-articles" aria-label="Permalink to &quot;创建博客./docs/articles&quot;">​</a></h2><blockquote><p>我这里加了一层articles，不加这一层目录也可以。</p></blockquote><p>创建几个markdown文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">articles</span></span>
<span class="line"><span style="color:#e1e4e8;">	blog</span></span>
<span class="line"><span style="color:#e1e4e8;">		index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">		test01.md</span></span>
<span class="line"><span style="color:#e1e4e8;">		test02.md</span></span>
<span class="line"><span style="color:#e1e4e8;">	test</span></span>
<span class="line"><span style="color:#e1e4e8;">		index.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">articles</span></span>
<span class="line"><span style="color:#24292e;">	blog</span></span>
<span class="line"><span style="color:#24292e;">		index.md</span></span>
<span class="line"><span style="color:#24292e;">		test01.md</span></span>
<span class="line"><span style="color:#24292e;">		test02.md</span></span>
<span class="line"><span style="color:#24292e;">	test</span></span>
<span class="line"><span style="color:#24292e;">		index.md</span></span></code></pre></div><h2 id="自定义导航栏-docs-vitepress-config-ts" tabindex="-1">自定义导航栏./docs/.vitepress/config.ts <a class="header-anchor" href="#自定义导航栏-docs-vitepress-config-ts" aria-label="Permalink to &quot;自定义导航栏./docs/.vitepress/config.ts&quot;">​</a></h2><p>定义logo和home</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">    themeConfig: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        logo: &quot;/home.svg&quot;,  // 导航栏最左侧logo</span></span>
<span class="line"><span style="color:#e1e4e8;">        siteTitle: &quot;Home&quot;, // 导航栏最左侧title</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">    themeConfig: {</span></span>
<span class="line"><span style="color:#24292e;">        logo: &quot;/home.svg&quot;,  // 导航栏最左侧logo</span></span>
<span class="line"><span style="color:#24292e;">        siteTitle: &quot;Home&quot;, // 导航栏最左侧title</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><img src="`+o+`" alt="image-20231022230259032"></p><p>定义菜单</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">    themeConfig: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        logo: &quot;/home.svg&quot;,  // 导航栏最左侧logo</span></span>
<span class="line"><span style="color:#e1e4e8;">        siteTitle: &quot;Home&quot;, // 导航栏最左侧title</span></span>
<span class="line"><span style="color:#e1e4e8;">        nav: [</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 一级菜单</span></span>
<span class="line"><span style="color:#e1e4e8;">            {</span></span>
<span class="line"><span style="color:#e1e4e8;">                text: &quot;博客&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                // 二级菜单</span></span>
<span class="line"><span style="color:#e1e4e8;">                items: [</span></span>
<span class="line"><span style="color:#e1e4e8;">                    { text: &#39;test01&#39;, link: &#39;/articles/blog/test/&#39; },</span></span>
<span class="line"><span style="color:#e1e4e8;">                    { text: &#39;test02&#39;, link: &#39;/articles/blog/test02&#39; },</span></span>
<span class="line"><span style="color:#e1e4e8;">                ]</span></span>
<span class="line"><span style="color:#e1e4e8;">            },</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 一级菜单</span></span>
<span class="line"><span style="color:#e1e4e8;">            { text: &quot;test&quot;, link: &quot;/articles/test/&quot; }</span></span>
<span class="line"><span style="color:#e1e4e8;">        ]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">    themeConfig: {</span></span>
<span class="line"><span style="color:#24292e;">        logo: &quot;/home.svg&quot;,  // 导航栏最左侧logo</span></span>
<span class="line"><span style="color:#24292e;">        siteTitle: &quot;Home&quot;, // 导航栏最左侧title</span></span>
<span class="line"><span style="color:#24292e;">        nav: [</span></span>
<span class="line"><span style="color:#24292e;">            // 一级菜单</span></span>
<span class="line"><span style="color:#24292e;">            {</span></span>
<span class="line"><span style="color:#24292e;">                text: &quot;博客&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                // 二级菜单</span></span>
<span class="line"><span style="color:#24292e;">                items: [</span></span>
<span class="line"><span style="color:#24292e;">                    { text: &#39;test01&#39;, link: &#39;/articles/blog/test/&#39; },</span></span>
<span class="line"><span style="color:#24292e;">                    { text: &#39;test02&#39;, link: &#39;/articles/blog/test02&#39; },</span></span>
<span class="line"><span style="color:#24292e;">                ]</span></span>
<span class="line"><span style="color:#24292e;">            },</span></span>
<span class="line"><span style="color:#24292e;">            // 一级菜单</span></span>
<span class="line"><span style="color:#24292e;">            { text: &quot;test&quot;, link: &quot;/articles/test/&quot; }</span></span>
<span class="line"><span style="color:#24292e;">        ]</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><img src="`+c+`" alt="image-20231022230523314"></p><p>定义侧边栏</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 侧边栏：指定菜单及对应的侧边栏</span></span>
<span class="line"><span style="color:#e1e4e8;">        sidebar: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;/articles/blog/test&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">                {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    text: &quot;Test&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    items: [</span></span>
<span class="line"><span style="color:#e1e4e8;">                        { text: &quot;test01&quot;, link: &quot;/articles/blog/test/test01&quot; },</span></span>
<span class="line"><span style="color:#e1e4e8;">                        { text: &quot;test02&quot;, link: &quot;/articles/blog/test/test02&quot; },</span></span>
<span class="line"><span style="color:#e1e4e8;">                    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">                },</span></span>
<span class="line"><span style="color:#e1e4e8;">            ],</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">        // 侧边栏：指定菜单及对应的侧边栏</span></span>
<span class="line"><span style="color:#24292e;">        sidebar: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;/articles/blog/test&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">                {</span></span>
<span class="line"><span style="color:#24292e;">                    text: &quot;Test&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                    items: [</span></span>
<span class="line"><span style="color:#24292e;">                        { text: &quot;test01&quot;, link: &quot;/articles/blog/test/test01&quot; },</span></span>
<span class="line"><span style="color:#24292e;">                        { text: &quot;test02&quot;, link: &quot;/articles/blog/test/test02&quot; },</span></span>
<span class="line"><span style="color:#24292e;">                    ],</span></span>
<span class="line"><span style="color:#24292e;">                },</span></span>
<span class="line"><span style="color:#24292e;">            ],</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><img src="`+i+`" alt="image-20231022231037344"></p><p>完整配置如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">    title: &quot;明日盈盈&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    description: &#39;一只程序猿&#39;, //mate标签description，多用于搜索引擎抓取摘要</span></span>
<span class="line"><span style="color:#e1e4e8;">    base: &quot;/&quot;, // / 或者 /xxx/</span></span>
<span class="line"><span style="color:#e1e4e8;">    head: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        [&#39;link&#39;, { rel: &#39;icon&#39;, href: &#39;/home.svg&#39; }], // 网站icon</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    themeConfig: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        logo: &quot;/home.svg&quot;,  // 导航栏最左侧logo</span></span>
<span class="line"><span style="color:#e1e4e8;">        siteTitle: &quot;Home&quot;, // 导航栏最左侧title</span></span>
<span class="line"><span style="color:#e1e4e8;">        nav: [</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 一级菜单</span></span>
<span class="line"><span style="color:#e1e4e8;">            {</span></span>
<span class="line"><span style="color:#e1e4e8;">                text: &quot;博客&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                // 二级菜单</span></span>
<span class="line"><span style="color:#e1e4e8;">                items: [</span></span>
<span class="line"><span style="color:#e1e4e8;">                    { text: &#39;test01&#39;, link: &#39;/articles/blog/test/&#39; },</span></span>
<span class="line"><span style="color:#e1e4e8;">                    { text: &#39;test02&#39;, link: &#39;/articles/blog/test02&#39; },</span></span>
<span class="line"><span style="color:#e1e4e8;">                ]</span></span>
<span class="line"><span style="color:#e1e4e8;">            },</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 一级菜单</span></span>
<span class="line"><span style="color:#e1e4e8;">            { text: &quot;test&quot;, link: &quot;/articles/test/&quot; }</span></span>
<span class="line"><span style="color:#e1e4e8;">        ],</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 导航栏右侧：社交链接</span></span>
<span class="line"><span style="color:#e1e4e8;">        socialLinks: [</span></span>
<span class="line"><span style="color:#e1e4e8;">            { icon: &quot;github&quot;, link: &quot;https://github.com/mingriyingying&quot; },</span></span>
<span class="line"><span style="color:#e1e4e8;">        ],</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 侧边栏：指定菜单及对应的侧边栏</span></span>
<span class="line"><span style="color:#e1e4e8;">        sidebar: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;/articles/blog/test&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">                {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    text: &quot;Test&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    items: [</span></span>
<span class="line"><span style="color:#e1e4e8;">                        { text: &quot;test01&quot;, link: &quot;/articles/blog/test/test01&quot; },</span></span>
<span class="line"><span style="color:#e1e4e8;">                        { text: &quot;test02&quot;, link: &quot;/articles/blog/test/test02&quot; },</span></span>
<span class="line"><span style="color:#e1e4e8;">                    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">                },</span></span>
<span class="line"><span style="color:#e1e4e8;">            ],</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">    title: &quot;明日盈盈&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    description: &#39;一只程序猿&#39;, //mate标签description，多用于搜索引擎抓取摘要</span></span>
<span class="line"><span style="color:#24292e;">    base: &quot;/&quot;, // / 或者 /xxx/</span></span>
<span class="line"><span style="color:#24292e;">    head: [</span></span>
<span class="line"><span style="color:#24292e;">        [&#39;link&#39;, { rel: &#39;icon&#39;, href: &#39;/home.svg&#39; }], // 网站icon</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">    themeConfig: {</span></span>
<span class="line"><span style="color:#24292e;">        logo: &quot;/home.svg&quot;,  // 导航栏最左侧logo</span></span>
<span class="line"><span style="color:#24292e;">        siteTitle: &quot;Home&quot;, // 导航栏最左侧title</span></span>
<span class="line"><span style="color:#24292e;">        nav: [</span></span>
<span class="line"><span style="color:#24292e;">            // 一级菜单</span></span>
<span class="line"><span style="color:#24292e;">            {</span></span>
<span class="line"><span style="color:#24292e;">                text: &quot;博客&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                // 二级菜单</span></span>
<span class="line"><span style="color:#24292e;">                items: [</span></span>
<span class="line"><span style="color:#24292e;">                    { text: &#39;test01&#39;, link: &#39;/articles/blog/test/&#39; },</span></span>
<span class="line"><span style="color:#24292e;">                    { text: &#39;test02&#39;, link: &#39;/articles/blog/test02&#39; },</span></span>
<span class="line"><span style="color:#24292e;">                ]</span></span>
<span class="line"><span style="color:#24292e;">            },</span></span>
<span class="line"><span style="color:#24292e;">            // 一级菜单</span></span>
<span class="line"><span style="color:#24292e;">            { text: &quot;test&quot;, link: &quot;/articles/test/&quot; }</span></span>
<span class="line"><span style="color:#24292e;">        ],</span></span>
<span class="line"><span style="color:#24292e;">        // 导航栏右侧：社交链接</span></span>
<span class="line"><span style="color:#24292e;">        socialLinks: [</span></span>
<span class="line"><span style="color:#24292e;">            { icon: &quot;github&quot;, link: &quot;https://github.com/mingriyingying&quot; },</span></span>
<span class="line"><span style="color:#24292e;">        ],</span></span>
<span class="line"><span style="color:#24292e;">        // 侧边栏：指定菜单及对应的侧边栏</span></span>
<span class="line"><span style="color:#24292e;">        sidebar: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;/articles/blog/test&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">                {</span></span>
<span class="line"><span style="color:#24292e;">                    text: &quot;Test&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                    items: [</span></span>
<span class="line"><span style="color:#24292e;">                        { text: &quot;test01&quot;, link: &quot;/articles/blog/test/test01&quot; },</span></span>
<span class="line"><span style="color:#24292e;">                        { text: &quot;test02&quot;, link: &quot;/articles/blog/test/test02&quot; },</span></span>
<span class="line"><span style="color:#24292e;">                    ],</span></span>
<span class="line"><span style="color:#24292e;">                },</span></span>
<span class="line"><span style="color:#24292e;">            ],</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h1 id="二、部署到github" tabindex="-1">二、部署到github <a class="header-anchor" href="#二、部署到github" aria-label="Permalink to &quot;二、部署到github&quot;">​</a></h1><h2 id="项目打包" tabindex="-1">项目打包 <a class="header-anchor" href="#项目打包" aria-label="Permalink to &quot;项目打包&quot;">​</a></h2><p>上面项目记得打包（打包后的文件是 docs/.vitepress/dist）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn build</span></span></code></pre></div><p><img src="`+r+'" alt="image-20231022233357679"></p><h2 id="github创建仓库" tabindex="-1">github创建仓库 <a class="header-anchor" href="#github创建仓库" aria-label="Permalink to &quot;github创建仓库&quot;">​</a></h2><p>先在Github创建一个名字叫username.github.io的仓库</p><p><img src="'+y+'" alt="image-20231022232206983"></p><h2 id="上传dist至github" tabindex="-1">上传dist至github <a class="header-anchor" href="#上传dist至github" aria-label="Permalink to &quot;上传dist至github&quot;">​</a></h2><p>进入本地dist文件夹，按照github首页教程，将dist中的内容push到github</p><p><img src="'+u+'" alt="image-20231022232556611"></p><p>我这里上传到的是deploy分支，默认是master分支，教程上是main分支。</p><p><img src="'+d+'" alt="image-20231022232730618"></p><h2 id="设置github-pages" tabindex="-1">设置Github Pages <a class="header-anchor" href="#设置github-pages" aria-label="Permalink to &quot;设置Github Pages&quot;">​</a></h2><p>设置github的setting</p><p><img src="'+m+`" alt="image-20231022233221763"></p><p>最后访问 <a href="https://mingriyingying.github.io/" target="_blank" rel="noreferrer">https://mingriyingying.github.io/</a></p><h1 id="三、进阶配置" tabindex="-1">三、进阶配置 <a class="header-anchor" href="#三、进阶配置" aria-label="Permalink to &quot;三、进阶配置&quot;">​</a></h1><h2 id="自动生成菜单" tabindex="-1">自动生成菜单 <a class="header-anchor" href="#自动生成菜单" aria-label="Permalink to &quot;自动生成菜单&quot;">​</a></h2><p>目的：能够根据 <code>docs</code> 目录自动地生成菜单和侧边栏，无需再手动去维护.</p><p>分析：在执行 <code>yarn dev</code> 之后，vitepress 会先运行 <code>.vitepress/config.js</code> 脚本，在这里自定义一个方法实现此功能。</p><p>注意：</p><ol><li>每个目录至少要有一个 <code>index.md</code> 文件，你可以在 <code>index.md</code> 做一些总览和介绍</li><li>如果新建了新文件夹，需要重新执行一遍，目录配置才能生效</li></ol><p>原理：自定义两个方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 导航栏</span></span>
<span class="line"><span style="color:#e1e4e8;">function generateNavConfig2(articlesPath) {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// 侧边栏</span></span>
<span class="line"><span style="color:#e1e4e8;">function generateSidebarConfig2(articlesPath) {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const navConfig = generateNavConfig2(&quot;&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">const sidebarConfig = generateSidebarConfig2(&quot;&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">    themeConfig: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        nav: navConfig,</span></span>
<span class="line"><span style="color:#e1e4e8;">        sidebar: sidebarConfig,</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 导航栏</span></span>
<span class="line"><span style="color:#24292e;">function generateNavConfig2(articlesPath) {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// 侧边栏</span></span>
<span class="line"><span style="color:#24292e;">function generateSidebarConfig2(articlesPath) {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const navConfig = generateNavConfig2(&quot;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">const sidebarConfig = generateSidebarConfig2(&quot;&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">    themeConfig: {</span></span>
<span class="line"><span style="color:#24292e;">        nav: navConfig,</span></span>
<span class="line"><span style="color:#24292e;">        sidebar: sidebarConfig,</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>看代码，根据自己项目调整。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// Node.js 提供的文件系统模块（fs）和路径模块（path）</span></span>
<span class="line"><span style="color:#e1e4e8;">const fs = require(&quot;fs&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">const path = require(&quot;path&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function generateNavConfig2(articlesPath) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const navConfigList = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">    const firstLevelList = fs.readdirSync(articlesPath);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // nav: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    //     // 一级菜单</span></span>
<span class="line"><span style="color:#e1e4e8;">    //     {</span></span>
<span class="line"><span style="color:#e1e4e8;">    //         text: &quot;博客&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    //         // 二级菜单</span></span>
<span class="line"><span style="color:#e1e4e8;">    //         items: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    //             { text: &#39;vitepress&#39;, link: &#39;/articles/blog/vitepress/&#39; },</span></span>
<span class="line"><span style="color:#e1e4e8;">    //             { text: &#39;算法&#39;, link: &#39;/articles/blog/算法/&#39; },</span></span>
<span class="line"><span style="color:#e1e4e8;">    //         ]</span></span>
<span class="line"><span style="color:#e1e4e8;">    //     },</span></span>
<span class="line"><span style="color:#e1e4e8;">    //     // 一级菜单</span></span>
<span class="line"><span style="color:#e1e4e8;">    //     { text: &quot;test&quot;, link: &quot;/articles/test/&quot; }</span></span>
<span class="line"><span style="color:#e1e4e8;">    // ],</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    firstLevelList.forEach((firstLevelName) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        const secondLevelList = fs.readdirSync(\`\${articlesPath}/\${firstLevelName}\`);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 文件or文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">        let isFirstMenu = false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (secondLevelName of secondLevelList) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (fs.lstatSync(path.join(articlesPath, firstLevelName, secondLevelName)).isFile()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                isFirstMenu = true;</span></span>
<span class="line"><span style="color:#e1e4e8;">                break;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (isFirstMenu) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            navConfigList.push({ text: firstLevelName, link: \`/articles/\${firstLevelName}/\` })</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            let tmpNav = { text: firstLevelName, items: [] }</span></span>
<span class="line"><span style="color:#e1e4e8;">            secondLevelList.forEach((secondLevelName) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                tmpNav[&quot;items&quot;].push({ text: secondLevelName, link: \`/articles/\${firstLevelName}/\${secondLevelName}/\` })</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;">            navConfigList.push(tmpNav)</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">    return navConfigList</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function generateSidebarConfig2(articlesPath) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const sidebarConfig = {};</span></span>
<span class="line"><span style="color:#e1e4e8;">    const firstLevelList = fs.readdirSync(articlesPath);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // sidebar: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    //     &quot;/articles/blog/vitepress&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    //         {</span></span>
<span class="line"><span style="color:#e1e4e8;">    //             text: &quot;vitepress&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    //             items: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    //                 { text: &quot;test01&quot;, link: &quot;/articles/blog/vitepress/01VitePress+Github搭建个人博客&quot; },</span></span>
<span class="line"><span style="color:#e1e4e8;">    //                 { text: &quot;test02&quot;, link: &quot;/articles/blog/vitepress/02新环境如何配置&quot; },</span></span>
<span class="line"><span style="color:#e1e4e8;">    //             ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    //         },</span></span>
<span class="line"><span style="color:#e1e4e8;">    //     ],</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // },</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 如果只有index文件，就没有侧边栏</span></span>
<span class="line"><span style="color:#e1e4e8;">    firstLevelList.forEach((firstLevelName) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        const secondLevelList = fs.readdirSync(\`\${articlesPath}/\${firstLevelName}\`);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 文件or文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">        let isFirstMenu = false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (secondLevelName of secondLevelList) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            curPath = fs.lstatSync(path.join(articlesPath, firstLevelName, secondLevelName))</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (curPath.isFile()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                isFirstMenu = true;</span></span>
<span class="line"><span style="color:#e1e4e8;">                break;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 如果是一级菜单</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (isFirstMenu) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            let isNeedSide = false</span></span>
<span class="line"><span style="color:#e1e4e8;">            for (filename of secondLevelList) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                curPath = fs.lstatSync(path.join(articlesPath, firstLevelName, filename))</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (curPath.isFile() &amp;&amp; filename != &quot;index.md&quot;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    isNeedSide = true;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    break;</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (isNeedSide) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                let tmpSide = { text: firstLevelName, items: [] }</span></span>
<span class="line"><span style="color:#e1e4e8;">                secondLevelList.forEach((filename) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    if (filename !== &quot;images&quot; &amp;&amp; filename !== &quot;index.md&quot;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        tmpSide[&quot;items&quot;].push({ text: filename, link: \`/articles/\${firstLevelName}/\${filename}\` })</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                })</span></span>
<span class="line"><span style="color:#e1e4e8;">                sidebarConfig[\`/articles/\${firstLevelName}\`] = [tmpSide]</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            secondLevelList.forEach((secondLevelName) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                const fileList = fs.readdirSync(\`\${articlesPath}/\${firstLevelName}/\${secondLevelName}\`);</span></span>
<span class="line"><span style="color:#e1e4e8;">                let isNeedSide = false</span></span>
<span class="line"><span style="color:#e1e4e8;">                for (filename of fileList) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    curPath = fs.lstatSync(path.join(articlesPath, firstLevelName, secondLevelName, filename))</span></span>
<span class="line"><span style="color:#e1e4e8;">                    if (curPath.isFile() &amp;&amp; filename != &quot;index.md&quot;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        isNeedSide = true;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        break;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (isNeedSide) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    let tmpSide = { text: secondLevelName, items: [] }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    fileList.forEach((filename) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        if (filename !== &quot;images&quot; &amp;&amp; filename !== &quot;index.md&quot;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            tmpSide[&quot;items&quot;].push({ text: filename, link: \`/articles/\${firstLevelName}/\${secondLevelName}/\${filename}\` })</span></span>
<span class="line"><span style="color:#e1e4e8;">                        }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    })</span></span>
<span class="line"><span style="color:#e1e4e8;">                    sidebarConfig[\`/articles/\${firstLevelName}/\${secondLevelName}\`] = [tmpSide]</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            })</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    return sidebarConfig</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const docsPath = path.dirname(__dirname); // __dirname是当前文件所属目录的绝对路径</span></span>
<span class="line"><span style="color:#e1e4e8;">const articlesPath = path.join(docsPath, &#39;articles&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">const navConfig = generateNavConfig2(articlesPath);</span></span>
<span class="line"><span style="color:#e1e4e8;">const sidebarConfig = generateSidebarConfig2(articlesPath);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">    title: &quot;明日盈盈&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    description: &#39;一只程序猿&#39;, //mate标签description，多用于搜索引擎抓取摘要</span></span>
<span class="line"><span style="color:#e1e4e8;">    base: &quot;/&quot;, // / 或者 /xxx/</span></span>
<span class="line"><span style="color:#e1e4e8;">    head: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        [&#39;link&#39;, { rel: &#39;icon&#39;, href: &#39;/img/home.svg&#39; }], // 网站icon</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    themeConfig: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        logo: &quot;/img/home.svg&quot;,  // 导航栏最左侧logo</span></span>
<span class="line"><span style="color:#e1e4e8;">        siteTitle: &quot;Home&quot;, // 导航栏最左侧title</span></span>
<span class="line"><span style="color:#e1e4e8;">        nav: navConfig,</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 导航栏右侧：社交链接</span></span>
<span class="line"><span style="color:#e1e4e8;">        socialLinks: [</span></span>
<span class="line"><span style="color:#e1e4e8;">            { icon: &quot;github&quot;, link: &quot;https://github.com/mingriyingying&quot; },</span></span>
<span class="line"><span style="color:#e1e4e8;">        ],</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 侧边栏：指定菜单及对应的侧边栏</span></span>
<span class="line"><span style="color:#e1e4e8;">        sidebar: sidebarConfig,</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// Node.js 提供的文件系统模块（fs）和路径模块（path）</span></span>
<span class="line"><span style="color:#24292e;">const fs = require(&quot;fs&quot;);</span></span>
<span class="line"><span style="color:#24292e;">const path = require(&quot;path&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function generateNavConfig2(articlesPath) {</span></span>
<span class="line"><span style="color:#24292e;">    const navConfigList = [];</span></span>
<span class="line"><span style="color:#24292e;">    const firstLevelList = fs.readdirSync(articlesPath);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // nav: [</span></span>
<span class="line"><span style="color:#24292e;">    //     // 一级菜单</span></span>
<span class="line"><span style="color:#24292e;">    //     {</span></span>
<span class="line"><span style="color:#24292e;">    //         text: &quot;博客&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    //         // 二级菜单</span></span>
<span class="line"><span style="color:#24292e;">    //         items: [</span></span>
<span class="line"><span style="color:#24292e;">    //             { text: &#39;vitepress&#39;, link: &#39;/articles/blog/vitepress/&#39; },</span></span>
<span class="line"><span style="color:#24292e;">    //             { text: &#39;算法&#39;, link: &#39;/articles/blog/算法/&#39; },</span></span>
<span class="line"><span style="color:#24292e;">    //         ]</span></span>
<span class="line"><span style="color:#24292e;">    //     },</span></span>
<span class="line"><span style="color:#24292e;">    //     // 一级菜单</span></span>
<span class="line"><span style="color:#24292e;">    //     { text: &quot;test&quot;, link: &quot;/articles/test/&quot; }</span></span>
<span class="line"><span style="color:#24292e;">    // ],</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    firstLevelList.forEach((firstLevelName) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        const secondLevelList = fs.readdirSync(\`\${articlesPath}/\${firstLevelName}\`);</span></span>
<span class="line"><span style="color:#24292e;">        // 文件or文件夹</span></span>
<span class="line"><span style="color:#24292e;">        let isFirstMenu = false;</span></span>
<span class="line"><span style="color:#24292e;">        for (secondLevelName of secondLevelList) {</span></span>
<span class="line"><span style="color:#24292e;">            if (fs.lstatSync(path.join(articlesPath, firstLevelName, secondLevelName)).isFile()) {</span></span>
<span class="line"><span style="color:#24292e;">                isFirstMenu = true;</span></span>
<span class="line"><span style="color:#24292e;">                break;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        if (isFirstMenu) {</span></span>
<span class="line"><span style="color:#24292e;">            navConfigList.push({ text: firstLevelName, link: \`/articles/\${firstLevelName}/\` })</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            let tmpNav = { text: firstLevelName, items: [] }</span></span>
<span class="line"><span style="color:#24292e;">            secondLevelList.forEach((secondLevelName) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                tmpNav[&quot;items&quot;].push({ text: secondLevelName, link: \`/articles/\${firstLevelName}/\${secondLevelName}/\` })</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;">            navConfigList.push(tmpNav)</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">    return navConfigList</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function generateSidebarConfig2(articlesPath) {</span></span>
<span class="line"><span style="color:#24292e;">    const sidebarConfig = {};</span></span>
<span class="line"><span style="color:#24292e;">    const firstLevelList = fs.readdirSync(articlesPath);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // sidebar: {</span></span>
<span class="line"><span style="color:#24292e;">    //     &quot;/articles/blog/vitepress&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">    //         {</span></span>
<span class="line"><span style="color:#24292e;">    //             text: &quot;vitepress&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    //             items: [</span></span>
<span class="line"><span style="color:#24292e;">    //                 { text: &quot;test01&quot;, link: &quot;/articles/blog/vitepress/01VitePress+Github搭建个人博客&quot; },</span></span>
<span class="line"><span style="color:#24292e;">    //                 { text: &quot;test02&quot;, link: &quot;/articles/blog/vitepress/02新环境如何配置&quot; },</span></span>
<span class="line"><span style="color:#24292e;">    //             ],</span></span>
<span class="line"><span style="color:#24292e;">    //         },</span></span>
<span class="line"><span style="color:#24292e;">    //     ],</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // },</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 如果只有index文件，就没有侧边栏</span></span>
<span class="line"><span style="color:#24292e;">    firstLevelList.forEach((firstLevelName) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        const secondLevelList = fs.readdirSync(\`\${articlesPath}/\${firstLevelName}\`);</span></span>
<span class="line"><span style="color:#24292e;">        // 文件or文件夹</span></span>
<span class="line"><span style="color:#24292e;">        let isFirstMenu = false;</span></span>
<span class="line"><span style="color:#24292e;">        for (secondLevelName of secondLevelList) {</span></span>
<span class="line"><span style="color:#24292e;">            curPath = fs.lstatSync(path.join(articlesPath, firstLevelName, secondLevelName))</span></span>
<span class="line"><span style="color:#24292e;">            if (curPath.isFile()) {</span></span>
<span class="line"><span style="color:#24292e;">                isFirstMenu = true;</span></span>
<span class="line"><span style="color:#24292e;">                break;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        // 如果是一级菜单</span></span>
<span class="line"><span style="color:#24292e;">        if (isFirstMenu) {</span></span>
<span class="line"><span style="color:#24292e;">            let isNeedSide = false</span></span>
<span class="line"><span style="color:#24292e;">            for (filename of secondLevelList) {</span></span>
<span class="line"><span style="color:#24292e;">                curPath = fs.lstatSync(path.join(articlesPath, firstLevelName, filename))</span></span>
<span class="line"><span style="color:#24292e;">                if (curPath.isFile() &amp;&amp; filename != &quot;index.md&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">                    isNeedSide = true;</span></span>
<span class="line"><span style="color:#24292e;">                    break;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            if (isNeedSide) {</span></span>
<span class="line"><span style="color:#24292e;">                let tmpSide = { text: firstLevelName, items: [] }</span></span>
<span class="line"><span style="color:#24292e;">                secondLevelList.forEach((filename) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                    if (filename !== &quot;images&quot; &amp;&amp; filename !== &quot;index.md&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">                        tmpSide[&quot;items&quot;].push({ text: filename, link: \`/articles/\${firstLevelName}/\${filename}\` })</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                })</span></span>
<span class="line"><span style="color:#24292e;">                sidebarConfig[\`/articles/\${firstLevelName}\`] = [tmpSide]</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            secondLevelList.forEach((secondLevelName) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                const fileList = fs.readdirSync(\`\${articlesPath}/\${firstLevelName}/\${secondLevelName}\`);</span></span>
<span class="line"><span style="color:#24292e;">                let isNeedSide = false</span></span>
<span class="line"><span style="color:#24292e;">                for (filename of fileList) {</span></span>
<span class="line"><span style="color:#24292e;">                    curPath = fs.lstatSync(path.join(articlesPath, firstLevelName, secondLevelName, filename))</span></span>
<span class="line"><span style="color:#24292e;">                    if (curPath.isFile() &amp;&amp; filename != &quot;index.md&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">                        isNeedSide = true;</span></span>
<span class="line"><span style="color:#24292e;">                        break;</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">                if (isNeedSide) {</span></span>
<span class="line"><span style="color:#24292e;">                    let tmpSide = { text: secondLevelName, items: [] }</span></span>
<span class="line"><span style="color:#24292e;">                    fileList.forEach((filename) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                        if (filename !== &quot;images&quot; &amp;&amp; filename !== &quot;index.md&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">                            tmpSide[&quot;items&quot;].push({ text: filename, link: \`/articles/\${firstLevelName}/\${secondLevelName}/\${filename}\` })</span></span>
<span class="line"><span style="color:#24292e;">                        }</span></span>
<span class="line"><span style="color:#24292e;">                    })</span></span>
<span class="line"><span style="color:#24292e;">                    sidebarConfig[\`/articles/\${firstLevelName}/\${secondLevelName}\`] = [tmpSide]</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            })</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    return sidebarConfig</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const docsPath = path.dirname(__dirname); // __dirname是当前文件所属目录的绝对路径</span></span>
<span class="line"><span style="color:#24292e;">const articlesPath = path.join(docsPath, &#39;articles&#39;);</span></span>
<span class="line"><span style="color:#24292e;">const navConfig = generateNavConfig2(articlesPath);</span></span>
<span class="line"><span style="color:#24292e;">const sidebarConfig = generateSidebarConfig2(articlesPath);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">    title: &quot;明日盈盈&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    description: &#39;一只程序猿&#39;, //mate标签description，多用于搜索引擎抓取摘要</span></span>
<span class="line"><span style="color:#24292e;">    base: &quot;/&quot;, // / 或者 /xxx/</span></span>
<span class="line"><span style="color:#24292e;">    head: [</span></span>
<span class="line"><span style="color:#24292e;">        [&#39;link&#39;, { rel: &#39;icon&#39;, href: &#39;/img/home.svg&#39; }], // 网站icon</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">    themeConfig: {</span></span>
<span class="line"><span style="color:#24292e;">        logo: &quot;/img/home.svg&quot;,  // 导航栏最左侧logo</span></span>
<span class="line"><span style="color:#24292e;">        siteTitle: &quot;Home&quot;, // 导航栏最左侧title</span></span>
<span class="line"><span style="color:#24292e;">        nav: navConfig,</span></span>
<span class="line"><span style="color:#24292e;">        // 导航栏右侧：社交链接</span></span>
<span class="line"><span style="color:#24292e;">        socialLinks: [</span></span>
<span class="line"><span style="color:#24292e;">            { icon: &quot;github&quot;, link: &quot;https://github.com/mingriyingying&quot; },</span></span>
<span class="line"><span style="color:#24292e;">        ],</span></span>
<span class="line"><span style="color:#24292e;">        // 侧边栏：指定菜单及对应的侧边栏</span></span>
<span class="line"><span style="color:#24292e;">        sidebar: sidebarConfig,</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="支持latex数学公式" tabindex="-1">支持Latex数学公式 <a class="header-anchor" href="#支持latex数学公式" aria-label="Permalink to &quot;支持Latex数学公式&quot;">​</a></h2><p>参考：<a href="https://blog.csdn.net/delete_you/article/details/130815350" target="_blank" rel="noreferrer">https://blog.csdn.net/delete_you/article/details/130815350</a></p><p>目的：支持Latex数学公式</p><p>分析：由于目前vitepress最新版依旧采用markdown-it作为md渲染库，默认并不支持latex语法，所以我们需要将其替换为另一个渲染库才可以。</p><p>这里使用最新的 <code>markdown-it-mathjax3</code> 作为渲染库。</p><p>先安装。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install markdown-it-mathjax3 -D</span></span>
<span class="line"><span style="color:#e1e4e8;">或者</span></span>
<span class="line"><span style="color:#e1e4e8;">yarn add markdown-it-mathjax3 -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install markdown-it-mathjax3 -D</span></span>
<span class="line"><span style="color:#24292e;">或者</span></span>
<span class="line"><span style="color:#24292e;">yarn add markdown-it-mathjax3 -D</span></span></code></pre></div><p>打开文件夹 <code>.vitepress/config.js</code> 添加如下代码即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import mathjax3 from &quot;markdown-it-mathjax3&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const customElements = [</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;math&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;maction&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;maligngroup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;malignmark&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;menclose&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;merror&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mfenced&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mfrac&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mi&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mlongdiv&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mmultiscripts&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mn&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mo&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mover&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mpadded&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mphantom&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mroot&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mrow&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;ms&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mscarries&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mscarry&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mscarries&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msgroup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mlongdiv&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msline&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mspace&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msqrt&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msrow&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mstyle&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msub&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msubsup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtable&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtd&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtext&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtr&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;munder&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;munderover&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;semantics&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;math&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mi&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mn&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mo&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;ms&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mspace&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtext&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;menclose&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;merror&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mfenced&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mfrac&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mpadded&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mphantom&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mroot&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mrow&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msqrt&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mstyle&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mmultiscripts&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mover&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mprescripts&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msub&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msubsup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;munder&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;munderover&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;none&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;maligngroup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;malignmark&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtable&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtd&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtr&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mlongdiv&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mscarries&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mscarry&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msgroup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msline&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msrow&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;maction&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;semantics&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;annotation&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;annotation-xml&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mjx-container&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mjx-assistive-mml&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">];</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">	markdown: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		config: (md) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">			md.use(mathjax3);</span></span>
<span class="line"><span style="color:#e1e4e8;">		},</span></span>
<span class="line"><span style="color:#e1e4e8;">	},</span></span>
<span class="line"><span style="color:#e1e4e8;">	vue: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		template: {</span></span>
<span class="line"><span style="color:#e1e4e8;">			compilerOptions: {</span></span>
<span class="line"><span style="color:#e1e4e8;">				isCustomElement: (tag) =&gt; customElements.includes(tag),</span></span>
<span class="line"><span style="color:#e1e4e8;">			},</span></span>
<span class="line"><span style="color:#e1e4e8;">		},</span></span>
<span class="line"><span style="color:#e1e4e8;">	},</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import mathjax3 from &quot;markdown-it-mathjax3&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const customElements = [</span></span>
<span class="line"><span style="color:#24292e;">	&quot;math&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;maction&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;maligngroup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;malignmark&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;menclose&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;merror&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mfenced&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mfrac&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mi&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mlongdiv&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mmultiscripts&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mn&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mo&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mover&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mpadded&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mphantom&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mroot&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mrow&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;ms&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mscarries&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mscarry&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mscarries&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msgroup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mlongdiv&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msline&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mspace&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msqrt&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msrow&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mstyle&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msub&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msubsup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtable&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtd&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtext&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtr&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;munder&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;munderover&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;semantics&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;math&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mi&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mn&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mo&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;ms&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mspace&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtext&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;menclose&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;merror&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mfenced&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mfrac&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mpadded&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mphantom&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mroot&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mrow&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msqrt&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mstyle&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mmultiscripts&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mover&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mprescripts&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msub&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msubsup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;munder&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;munderover&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;none&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;maligngroup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;malignmark&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtable&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtd&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtr&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mlongdiv&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mscarries&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mscarry&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msgroup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msline&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msrow&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;maction&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;semantics&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;annotation&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;annotation-xml&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mjx-container&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mjx-assistive-mml&quot;,</span></span>
<span class="line"><span style="color:#24292e;">];</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">	markdown: {</span></span>
<span class="line"><span style="color:#24292e;">		config: (md) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">			md.use(mathjax3);</span></span>
<span class="line"><span style="color:#24292e;">		},</span></span>
<span class="line"><span style="color:#24292e;">	},</span></span>
<span class="line"><span style="color:#24292e;">	vue: {</span></span>
<span class="line"><span style="color:#24292e;">		template: {</span></span>
<span class="line"><span style="color:#24292e;">			compilerOptions: {</span></span>
<span class="line"><span style="color:#24292e;">				isCustomElement: (tag) =&gt; customElements.includes(tag),</span></span>
<span class="line"><span style="color:#24292e;">			},</span></span>
<span class="line"><span style="color:#24292e;">		},</span></span>
<span class="line"><span style="color:#24292e;">	},</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>latex测试</p><blockquote><p>F = \\sum_{n=-\\infty}^{\\infty}\\left|\\mathscr{F}\\left[f(x)\\right]\\right|^{2}\\Delta x</p></blockquote>`,74),L={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},C={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.733ex"},xmlns:"http://www.w3.org/2000/svg",width:"23.735ex",height:"6.268ex",role:"img",focusable:"false",viewBox:"0 -1562.5 10491.1 2770.5","aria-hidden":"true"},_=n('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D439" d="M48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1026.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="munderover" transform="translate(2082.6,0)"><g data-mml-node="mo" transform="translate(393.8,0)"><path data-c="2211" d="M60 948Q63 950 665 950H1267L1325 815Q1384 677 1388 669H1348L1341 683Q1320 724 1285 761Q1235 809 1174 838T1033 881T882 898T699 902H574H543H251L259 891Q722 258 724 252Q725 250 724 246Q721 243 460 -56L196 -356Q196 -357 407 -357Q459 -357 548 -357T676 -358Q812 -358 896 -353T1063 -332T1204 -283T1307 -196Q1328 -170 1348 -124H1388Q1388 -125 1381 -145T1356 -210T1325 -294L1267 -449L666 -450Q64 -450 61 -448Q55 -446 55 -439Q55 -437 57 -433L590 177Q590 178 557 222T452 366T322 544L56 909L55 924Q55 945 60 948Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(0,-1050) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(600,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1378,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2156,0)"><path data-c="221E" d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z" style="stroke-width:3;"></path></g></g><g data-mml-node="TeXAtom" transform="translate(762.3,1150) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="221E" d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z" style="stroke-width:3;"></path></g></g></g><g data-mml-node="msup" transform="translate(4480.9,0)"><g data-mml-node="mrow"><g data-mml-node="mo" transform="translate(0 -0.5)"><path data-c="7C" d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(278,0)"><g data-mml-node="mi"><path data-c="2131" d="M258 428Q258 489 322 562T482 685T661 735Q726 735 824 693T977 651Q990 651 990 644Q990 639 971 612T948 581Q947 580 938 580Q878 580 784 621T617 663Q544 663 480 635T379 568T320 492T299 431Q299 387 362 387Q404 387 438 402T493 438T527 486T546 531T551 563Q551 569 550 575T549 584T549 590Q551 593 563 602T579 611Q584 611 592 605T608 584T616 548Q616 513 595 477T554 423Q518 392 464 372T349 351Q258 351 258 428ZM324 187T305 187T286 196Q286 202 301 217Q327 242 383 262T484 290L527 297L567 356Q624 441 643 467T688 521Q715 550 752 581T795 613T804 603T808 587T778 547T702 444T626 300H637Q663 302 685 306L697 308L703 317Q745 376 792 400Q806 406 818 406Q849 406 849 375Q847 355 831 338T797 312T763 296L747 290Q744 289 735 266T724 241Q722 240 702 232T664 217T645 210Q638 210 638 218Q638 224 653 246T669 270Q669 271 668 271Q663 270 624 264L607 263Q570 199 529 152Q513 133 484 106T409 45T305 -13T193 -36Q109 -36 74 -10T39 50Q39 86 64 121T128 158Q171 158 171 121Q171 97 141 83Q125 75 107 75Q93 75 80 83Q76 71 76 62Q76 29 117 15T207 0Q324 0 494 248L501 258H495Q368 239 330 195Q324 187 305 187ZM775 335Q806 358 806 368Q805 369 804 369Q800 369 791 360Q774 336 775 335Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mrow" transform="translate(1434.7,0)"><g data-mml-node="mo"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(278,0)"><path data-c="1D453" d="M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(828,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1217,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1789,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2178,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(3890.7,0) translate(0 -0.5)"><path data-c="7C" d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z" style="stroke-width:3;"></path></g></g><g data-mml-node="TeXAtom" transform="translate(4201.7,477.1) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g></g><g data-mml-node="mi" transform="translate(9086.1,0)"><path data-c="394" d="M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(9919.1,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g></g></g>',1),N=[_],w=s("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("mi",null,"F"),s("mo",null,"="),s("munderover",null,[s("mo",{"data-mjx-texclass":"OP"},"∑"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"n"),s("mo",null,"="),s("mo",null,"−"),s("mi",{mathvariant:"normal"},"∞")]),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",{mathvariant:"normal"},"∞")])]),s("msup",null,[s("mrow",{"data-mjx-texclass":"INNER"},[s("mo",{"data-mjx-texclass":"OPEN"},"|"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",{mathvariant:"script"},"F")]),s("mrow",{"data-mjx-texclass":"INNER"},[s("mo",{"data-mjx-texclass":"OPEN"},"["),s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mo",{"data-mjx-texclass":"CLOSE"},"]")]),s("mo",{"data-mjx-texclass":"CLOSE"},"|")]),s("mrow",{"data-mjx-texclass":"ORD"},[s("mn",null,"2")])]),s("mi",{mathvariant:"normal"},"Δ"),s("mi",null,"x")])],-1),P=n(`<h2 id="自定义首页-组件" tabindex="-1">自定义首页(组件) <a class="header-anchor" href="#自定义首页-组件" aria-label="Permalink to &quot;自定义首页(组件)&quot;">​</a></h2><p>参考：<a href="https://juejin.cn/post/7134586612406714375#heading-5" target="_blank" rel="noreferrer">https://juejin.cn/post/7134586612406714375#heading-5</a></p><p>目的：首页太丑，想要自己修改或者自定义页面。</p><p>分析：vitepress也是支持直接在md中写vue的，所以可以通过vue组件的形式，完全自己自定义一套样式。</p><p>安装vue</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">yarn add -D vue</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">yarn add -D vue</span></span></code></pre></div><p>新建一个组件.vitepress/components/home.vue</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div class=&quot;home-wrapper&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div v-for=&quot;item in list&quot; :key=&quot;item&quot; class=&quot;home-item&quot;&gt;{{item}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">.home-wrapper {</span></span>
<span class="line"><span style="color:#e1e4e8;">  text-align: center;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">.home-item {</span></span>
<span class="line"><span style="color:#e1e4e8;">  padding: 4px 8px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  display: inline-block;</span></span>
<span class="line"><span style="color:#e1e4e8;">  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292e;">const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div class=&quot;home-wrapper&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div v-for=&quot;item in list&quot; :key=&quot;item&quot; class=&quot;home-item&quot;&gt;{{item}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">.home-wrapper {</span></span>
<span class="line"><span style="color:#24292e;">  text-align: center;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">.home-item {</span></span>
<span class="line"><span style="color:#24292e;">  padding: 4px 8px;</span></span>
<span class="line"><span style="color:#24292e;">  display: inline-block;</span></span>
<span class="line"><span style="color:#24292e;">  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><p>然后修改index.md</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">layout: home</span></span>
<span class="line"><span style="color:#e1e4e8;">这部分内容可以保持不变</span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">import home from &#39;./.vitepress/components/home.vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;home /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">layout: home</span></span>
<span class="line"><span style="color:#24292e;">这部分内容可以保持不变</span></span>
<span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292e;">import home from &#39;./.vitepress/components/home.vue&#39;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;home /&gt;</span></span></code></pre></div><p><img src="`+g+`" alt="image-20231024091627846"></p><h2 id="自定义模板-文档页面布局" tabindex="-1">自定义模板(文档页面布局) <a class="header-anchor" href="#自定义模板-文档页面布局" aria-label="Permalink to &quot;自定义模板(文档页面布局)&quot;">​</a></h2><p>略。</p><h1 id="四、高级部署" tabindex="-1">四、高级部署 <a class="header-anchor" href="#四、高级部署" aria-label="Permalink to &quot;四、高级部署&quot;">​</a></h1><h2 id="一键上传至仓库" tabindex="-1">一键上传至仓库 <a class="header-anchor" href="#一键上传至仓库" aria-label="Permalink to &quot;一键上传至仓库&quot;">​</a></h2><p>在项目根目录下创建./deploy.sh脚本。deploy.sh作用是将项目上传至github等代码仓库。（注意，我这里是上传至deploy分支）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/usr/bin/env sh</span></span>
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
<span class="line"><span style="color:#24292e;">cd -</span></span></code></pre></div><p>在package.json中添加命令</p><p><img src="`+h+`" alt="image-20231022233926480"></p><p>执行命令，完成自动上传至github</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn deploy</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn deploy</span></span></code></pre></div><h2 id="利用github-actions自动部署" tabindex="-1">利用Github Actions自动部署 <a class="header-anchor" href="#利用github-actions自动部署" aria-label="Permalink to &quot;利用Github Actions自动部署&quot;">​</a></h2><p>一般，我们开发完需要将<strong>项目代码</strong>提交至github的主分支，然后再将<strong>打包代码</strong>提交至另一个分支 或者 另一个仓库。</p><p>Github Actions则会自动构建发布：GitHub提供了服务器，我们把打包过程发至服务器中进行。</p><p>打包发布过程主要是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1、构建：yarn build</span></span>
<span class="line"><span style="color:#e1e4e8;">2、上传dist文件夹至 另一个分支 或者 另一个仓库。（我们这里用 本仓库的另一个分支）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1、构建：yarn build</span></span>
<span class="line"><span style="color:#24292e;">2、上传dist文件夹至 另一个分支 或者 另一个仓库。（我们这里用 本仓库的另一个分支）</span></span></code></pre></div><p>首先创建Github Actions的工作流文件worlflow，位置./.github/workflows/deploy.yml。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">name: Deploy</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">on:</span></span>
<span class="line"><span style="color:#e1e4e8;">  push:</span></span>
<span class="line"><span style="color:#e1e4e8;">    branches:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - master</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">jobs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  deploy:</span></span>
<span class="line"><span style="color:#e1e4e8;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#e1e4e8;">    steps:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#e1e4e8;">      - uses: actions/setup-node@v3</span></span>
<span class="line"><span style="color:#e1e4e8;">        with:</span></span>
<span class="line"><span style="color:#e1e4e8;">          node-version: 16</span></span>
<span class="line"><span style="color:#e1e4e8;">          cache: yarn</span></span>
<span class="line"><span style="color:#e1e4e8;">      - run: yarn install --frozen-lockfile</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Build</span></span>
<span class="line"><span style="color:#e1e4e8;">        run: yarn build</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Deploy</span></span>
<span class="line"><span style="color:#e1e4e8;">        uses: peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#e1e4e8;">        with:</span></span>
<span class="line"><span style="color:#e1e4e8;">          github_token: \${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="color:#e1e4e8;">          publish_dir: docs/.vitepress/dist</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">name: Deploy</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">on:</span></span>
<span class="line"><span style="color:#24292e;">  push:</span></span>
<span class="line"><span style="color:#24292e;">    branches:</span></span>
<span class="line"><span style="color:#24292e;">      - master</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">jobs:</span></span>
<span class="line"><span style="color:#24292e;">  deploy:</span></span>
<span class="line"><span style="color:#24292e;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#24292e;">    steps:</span></span>
<span class="line"><span style="color:#24292e;">      - uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#24292e;">      - uses: actions/setup-node@v3</span></span>
<span class="line"><span style="color:#24292e;">        with:</span></span>
<span class="line"><span style="color:#24292e;">          node-version: 16</span></span>
<span class="line"><span style="color:#24292e;">          cache: yarn</span></span>
<span class="line"><span style="color:#24292e;">      - run: yarn install --frozen-lockfile</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - name: Build</span></span>
<span class="line"><span style="color:#24292e;">        run: yarn build</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - name: Deploy</span></span>
<span class="line"><span style="color:#24292e;">        uses: peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#24292e;">        with:</span></span>
<span class="line"><span style="color:#24292e;">          github_token: \${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="color:#24292e;">          publish_dir: docs/.vitepress/dist</span></span></code></pre></div><p>修改github actions权限：项目仓库下的settings</p><p><img src="`+q+'" alt="image-20231023161555470"></p><p>上传代码。等部署成功后，就可以切换gh-page的分支。为什么会自动生成gh-page分支，因为<code>peaceiris/actions-gh-pages@v3</code>这个工作流自动帮你做了。</p><p><img src="'+v+'" alt="image-20231023175405698"></p><p>试了好几种deploy部署脚本，终于成功了。</p><p><img src="'+b+`" alt="image-20231023175506169"></p><p>不知道和这个有没有关系：在项目根目录下添加了.gitignore文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">node_modules</span></span>
<span class="line"><span style="color:#e1e4e8;">package-lock.json</span></span>
<span class="line"><span style="color:#e1e4e8;">docs/.vitepress/dist</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">node_modules</span></span>
<span class="line"><span style="color:#24292e;">package-lock.json</span></span>
<span class="line"><span style="color:#24292e;">docs/.vitepress/dist</span></span></code></pre></div><h2 id="文档项目仓库分离" tabindex="-1">文档项目仓库分离 <a class="header-anchor" href="#文档项目仓库分离" aria-label="Permalink to &quot;文档项目仓库分离&quot;">​</a></h2><p>目的：项目开发完，代码不想动了。以后只编辑文档，隐藏项目代码。</p><p>分析：</p><p>1、A仓库存文档，B仓库Gihub pages仓库（项目仓库+部署仓库）。</p><p>2、A仓库更新，用github actions创建workflow，触发派发事件通知B仓库。</p><p>3、B仓库接收到该事件，拉取A仓库文档，然后自动部署。</p><p>总结，两个仓部分别解决一下两个问题：</p><p>1、B仓库自动克隆A仓库的文件，并完成部署。</p><p>2、A仓库更新时，发送触发事件给B仓库。</p><p><strong>解决1：B仓库自动克隆A仓库？</strong></p><p>直接看最终的yml脚本：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">name: Deploy</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">on:</span></span>
<span class="line"><span style="color:#e1e4e8;">  push:</span></span>
<span class="line"><span style="color:#e1e4e8;">    branches:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - master</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">jobs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  deploy:</span></span>
<span class="line"><span style="color:#e1e4e8;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#e1e4e8;">    steps:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Checkout Repository A</span></span>
<span class="line"><span style="color:#e1e4e8;">        uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Clone Repository B</span></span>
<span class="line"><span style="color:#e1e4e8;">        run: |</span></span>
<span class="line"><span style="color:#e1e4e8;">          cd \${{ github.workspace }}</span></span>
<span class="line"><span style="color:#e1e4e8;">          git clone https://github.com/mingriyingying/zjc_notes.git temp-repo</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Copy Repository B to Folder in Repository A</span></span>
<span class="line"><span style="color:#e1e4e8;">        run: |</span></span>
<span class="line"><span style="color:#e1e4e8;">          cd \${{ github.workspace }}</span></span>
<span class="line"><span style="color:#e1e4e8;">          rm -rf docs/articles/*</span></span>
<span class="line"><span style="color:#e1e4e8;">          mv temp-repo/articles/* docs/articles/</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Setup Node.js (yarn)</span></span>
<span class="line"><span style="color:#e1e4e8;">        uses: actions/setup-node@v3</span></span>
<span class="line"><span style="color:#e1e4e8;">        with:</span></span>
<span class="line"><span style="color:#e1e4e8;">          node-version: 16</span></span>
<span class="line"><span style="color:#e1e4e8;">          cache: yarn</span></span>
<span class="line"><span style="color:#e1e4e8;">      </span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Yarn Install</span></span>
<span class="line"><span style="color:#e1e4e8;">        run: yarn install --frozen-lockfile</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Yarn Build</span></span>
<span class="line"><span style="color:#e1e4e8;">        run: yarn build</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Deploy to Branch gh-pages</span></span>
<span class="line"><span style="color:#e1e4e8;">        uses: peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#e1e4e8;">        with:</span></span>
<span class="line"><span style="color:#e1e4e8;">          github_token: \${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="color:#e1e4e8;">          publish_dir: docs/.vitepress/dist</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">name: Deploy</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">on:</span></span>
<span class="line"><span style="color:#24292e;">  push:</span></span>
<span class="line"><span style="color:#24292e;">    branches:</span></span>
<span class="line"><span style="color:#24292e;">      - master</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">jobs:</span></span>
<span class="line"><span style="color:#24292e;">  deploy:</span></span>
<span class="line"><span style="color:#24292e;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#24292e;">    steps:</span></span>
<span class="line"><span style="color:#24292e;">      - name: Checkout Repository A</span></span>
<span class="line"><span style="color:#24292e;">        uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - name: Clone Repository B</span></span>
<span class="line"><span style="color:#24292e;">        run: |</span></span>
<span class="line"><span style="color:#24292e;">          cd \${{ github.workspace }}</span></span>
<span class="line"><span style="color:#24292e;">          git clone https://github.com/mingriyingying/zjc_notes.git temp-repo</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - name: Copy Repository B to Folder in Repository A</span></span>
<span class="line"><span style="color:#24292e;">        run: |</span></span>
<span class="line"><span style="color:#24292e;">          cd \${{ github.workspace }}</span></span>
<span class="line"><span style="color:#24292e;">          rm -rf docs/articles/*</span></span>
<span class="line"><span style="color:#24292e;">          mv temp-repo/articles/* docs/articles/</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - name: Setup Node.js (yarn)</span></span>
<span class="line"><span style="color:#24292e;">        uses: actions/setup-node@v3</span></span>
<span class="line"><span style="color:#24292e;">        with:</span></span>
<span class="line"><span style="color:#24292e;">          node-version: 16</span></span>
<span class="line"><span style="color:#24292e;">          cache: yarn</span></span>
<span class="line"><span style="color:#24292e;">      </span></span>
<span class="line"><span style="color:#24292e;">      - name: Yarn Install</span></span>
<span class="line"><span style="color:#24292e;">        run: yarn install --frozen-lockfile</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - name: Yarn Build</span></span>
<span class="line"><span style="color:#24292e;">        run: yarn build</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - name: Deploy to Branch gh-pages</span></span>
<span class="line"><span style="color:#24292e;">        uses: peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#24292e;">        with:</span></span>
<span class="line"><span style="color:#24292e;">          github_token: \${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="color:#24292e;">          publish_dir: docs/.vitepress/dist</span></span></code></pre></div><p><strong>解决2：A仓库发送触发事件。</strong></p><p>分析：</p><p>使用 GitHub 的仓库派发事件（repository_dispatch）。这允许你手动或通过仓库 A 的 Actions workflow 向B仓库发送自定义事件，以触发B的 workflow 的运行。</p><p>你需要确保在 GitHub Actions workflow 中提供了正确的身份验证凭证，以便访问仓库 B。这通常包括 SSH 密钥或 个人访问令牌 Personal Access Token（PAT），并将其存储在仓库 A 的 Secrets 中。</p><p>流程：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1、在github中创建PAT (SSH也可以)</span></span>
<span class="line"><span style="color:#e1e4e8;">2、在A仓库中存储PAT</span></span>
<span class="line"><span style="color:#e1e4e8;">3、在A仓库中定义发送触发事件</span></span>
<span class="line"><span style="color:#e1e4e8;">4、在B仓库中加入触发事件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1、在github中创建PAT (SSH也可以)</span></span>
<span class="line"><span style="color:#24292e;">2、在A仓库中存储PAT</span></span>
<span class="line"><span style="color:#24292e;">3、在A仓库中定义发送触发事件</span></span>
<span class="line"><span style="color:#24292e;">4、在B仓库中加入触发事件</span></span></code></pre></div><p>创建PAT：在setting -&gt; developer settings 中创建PAT</p><p><img src="`+f+'" alt="image-20231025120807049"></p><p>自定义一个名字</p><p><img src="'+k+'" alt="image-20231025120729045"></p><p>在A仓库中存储刚才的PAT，自定义名字</p><p><img src="'+Q+`" alt="image-20231025124724775"></p><p>在A仓库的工作流定义触发事件，自定义事件名字为<code>update-event</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">name: Trigger Update Event</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">on:</span></span>
<span class="line"><span style="color:#e1e4e8;">  push:</span></span>
<span class="line"><span style="color:#e1e4e8;">    branches:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - master</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">jobs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  trigger-webhook:</span></span>
<span class="line"><span style="color:#e1e4e8;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#e1e4e8;">    steps:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Trigger Repository B Workflow</span></span>
<span class="line"><span style="color:#e1e4e8;">        run: |</span></span>
<span class="line"><span style="color:#e1e4e8;">          curl -X POST https://api.github.com/repos/mingriyingying/mingriyingying.github.io/dispatches \\</span></span>
<span class="line"><span style="color:#e1e4e8;">          -H &quot;Authorization: token \${{ secrets.UPDATE_EVENT }}&quot; \\</span></span>
<span class="line"><span style="color:#e1e4e8;">          -H &quot;Accept: application/vnd.github.everest-preview+json&quot; \\</span></span>
<span class="line"><span style="color:#e1e4e8;">          -d &#39;{&quot;event_type&quot;: &quot;update-event&quot;}&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">name: Trigger Update Event</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">on:</span></span>
<span class="line"><span style="color:#24292e;">  push:</span></span>
<span class="line"><span style="color:#24292e;">    branches:</span></span>
<span class="line"><span style="color:#24292e;">      - master</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">jobs:</span></span>
<span class="line"><span style="color:#24292e;">  trigger-webhook:</span></span>
<span class="line"><span style="color:#24292e;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#24292e;">    steps:</span></span>
<span class="line"><span style="color:#24292e;">      - name: Trigger Repository B Workflow</span></span>
<span class="line"><span style="color:#24292e;">        run: |</span></span>
<span class="line"><span style="color:#24292e;">          curl -X POST https://api.github.com/repos/mingriyingying/mingriyingying.github.io/dispatches \\</span></span>
<span class="line"><span style="color:#24292e;">          -H &quot;Authorization: token \${{ secrets.UPDATE_EVENT }}&quot; \\</span></span>
<span class="line"><span style="color:#24292e;">          -H &quot;Accept: application/vnd.github.everest-preview+json&quot; \\</span></span>
<span class="line"><span style="color:#24292e;">          -d &#39;{&quot;event_type&quot;: &quot;update-event&quot;}&#39;</span></span></code></pre></div><p>在B仓库的工作流中加入监听事件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">name: Deploy</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">on:</span></span>
<span class="line"><span style="color:#e1e4e8;">  push:</span></span>
<span class="line"><span style="color:#e1e4e8;">    branches:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - master</span></span>
<span class="line"><span style="color:#e1e4e8;">  repository_dispatch:</span></span>
<span class="line"><span style="color:#e1e4e8;">    types: [update-event]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">jobs:</span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">name: Deploy</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">on:</span></span>
<span class="line"><span style="color:#24292e;">  push:</span></span>
<span class="line"><span style="color:#24292e;">    branches:</span></span>
<span class="line"><span style="color:#24292e;">      - master</span></span>
<span class="line"><span style="color:#24292e;">  repository_dispatch:</span></span>
<span class="line"><span style="color:#24292e;">    types: [update-event]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">jobs:</span></span>
<span class="line"><span style="color:#24292e;">...</span></span></code></pre></div><h1 id="新电脑环境配置" tabindex="-1">新电脑环境配置 <a class="header-anchor" href="#新电脑环境配置" aria-label="Permalink to &quot;新电脑环境配置&quot;">​</a></h1><p>安装node，略。</p><p>安装git，略。</p><p>克隆项目</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git clone https://github.com/mingriyingying/mingriyingying.github.io.git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git clone https://github.com/mingriyingying/mingriyingying.github.io.git</span></span></code></pre></div><p>安装依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install -g yarn	# 安装yarn</span></span>
<span class="line"><span style="color:#e1e4e8;">yarn install	# 安装package.json里所有包，并将包及它的所有依赖项保存进yarn.lock</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install -g yarn	# 安装yarn</span></span>
<span class="line"><span style="color:#24292e;">yarn install	# 安装package.json里所有包，并将包及它的所有依赖项保存进yarn.lock</span></span></code></pre></div><p>开发</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn dev # 接着开发</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn dev # 接着开发</span></span></code></pre></div><p>部署</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn deploy</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn deploy</span></span></code></pre></div>`,75);function H(j,S,A,M,$,E){return a(),e("div",null,[x,s("mjx-container",L,[(a(),e("svg",C,N)),w]),P])}const B=l(T,[["render",H]]);export{V as __pageData,B as default};
