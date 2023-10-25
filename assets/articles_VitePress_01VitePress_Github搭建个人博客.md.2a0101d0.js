import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const l="/assets/image-20231022215614585.4141b045.png",p="/assets/image-20231022225823512.30f77a05.png",t="/assets/image-20231022230259032.bfc93074.png",o="/assets/image-20231022230523314.1ff16217.png",c="/assets/image-20231022231037344.50f5f8a1.png",i="/assets/image-20231022233357679.67eb4a91.png",r="/assets/image-20231022232206983.70041b2f.png",y="/assets/image-20231022232556611.1f4c8e5a.png",d="/assets/image-20231022232730618.02dee0e5.png",u="/assets/image-20231022233221763.81c44fcb.png",P=JSON.parse('{"title":"项目搭建","description":"","frontmatter":{},"headers":[],"relativePath":"articles/VitePress/01VitePress+Github搭建个人博客.md","filePath":"articles/VitePress/01VitePress+Github搭建个人博客.md","lastUpdated":null}'),g={name:"articles/VitePress/01VitePress+Github搭建个人博客.md"},h=e(`<h1 id="项目搭建" tabindex="-1">项目搭建 <a class="header-anchor" href="#项目搭建" aria-label="Permalink to &quot;项目搭建&quot;">​</a></h1><h2 id="环境-项目初始化" tabindex="-1">环境&amp;项目初始化 <a class="header-anchor" href="#环境-项目初始化" aria-label="Permalink to &quot;环境&amp;项目初始化&quot;">​</a></h2><p>安装node.js，略</p><p>安装git，略</p><p>创建项目</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 创建文件夹</span></span>
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
<span class="line"><span style="color:#24292e;">---</span></span></code></pre></div><p>运行测试，查看效果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn dev</span></span></code></pre></div><p><img src="`+p+`" alt="image-20231022225823512"></p><h2 id="创建博客-docs-articles" tabindex="-1">创建博客./docs/articles <a class="header-anchor" href="#创建博客-docs-articles" aria-label="Permalink to &quot;创建博客./docs/articles&quot;">​</a></h2><blockquote><p>我这里加了一层articles，不加这一层目录也可以。</p></blockquote><p>创建几个markdown文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">articles</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><img src="`+t+`" alt="image-20231022230259032"></p><p>定义菜单</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export default {</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><img src="`+o+`" alt="image-20231022230523314"></p><p>定义侧边栏</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export default {</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><img src="`+c+`" alt="image-20231022231037344"></p><p>完整配置如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export default {</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h1 id="部署到github" tabindex="-1">部署到github <a class="header-anchor" href="#部署到github" aria-label="Permalink to &quot;部署到github&quot;">​</a></h1><h2 id="项目打包" tabindex="-1">项目打包 <a class="header-anchor" href="#项目打包" aria-label="Permalink to &quot;项目打包&quot;">​</a></h2><p>上面项目记得打包（打包后的文件是 docs/.vitepress/dist）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn build</span></span></code></pre></div><p><img src="`+i+'" alt="image-20231022233357679"></p><h2 id="github创建仓库" tabindex="-1">github创建仓库 <a class="header-anchor" href="#github创建仓库" aria-label="Permalink to &quot;github创建仓库&quot;">​</a></h2><p>先在Github创建一个名字叫username.github.io的仓库</p><p><img src="'+r+'" alt="image-20231022232206983"></p><h2 id="上传dist至github" tabindex="-1">上传dist至github <a class="header-anchor" href="#上传dist至github" aria-label="Permalink to &quot;上传dist至github&quot;">​</a></h2><p>进入本地dist文件夹，按照github首页教程，将dist中的内容push到github</p><p><img src="'+y+'" alt="image-20231022232556611"></p><p>我这里上传到的是deploy分支，默认是master分支，教程上是main分支。</p><p><img src="'+d+'" alt="image-20231022232730618"></p><h2 id="设置github-pages" tabindex="-1">设置Github Pages <a class="header-anchor" href="#设置github-pages" aria-label="Permalink to &quot;设置Github Pages&quot;">​</a></h2><p>设置github的setting</p><p><img src="'+u+'" alt="image-20231022233221763"></p><p>最后访问 <a href="https://mingriyingying.github.io/" target="_blank" rel="noreferrer">https://mingriyingying.github.io/</a></p>',53),q=[h];function b(m,v,k,x,_,f){return n(),a("div",null,q)}const T=s(g,[["render",b]]);export{P as __pageData,T as default};
