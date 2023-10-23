import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const l="/assets/image-20231022215614585.4141b045.png",p="/assets/image-20231022225823512.30f77a05.png",o="/assets/image-20231022230259032.bfc93074.png",t="/assets/image-20231022230523314.1ff16217.png",c="/assets/image-20231022231037344.50f5f8a1.png",i="/assets/image-20231022233357679.67eb4a91.png",r="/assets/image-20231022232206983.70041b2f.png",y="/assets/image-20231022232556611.1f4c8e5a.png",d="/assets/image-20231022232730618.02dee0e5.png",u="/assets/image-20231022233221763.81c44fcb.png",g="/assets/image-20231022233926480.764d27e9.png",h="/assets/image-20231023161555470.c5fc37e8.png",m="/assets/image-20231023175405698.b862dcff.png",v="/assets/image-20231023175506169.6088b6d3.png",$=JSON.parse('{"title":"项目搭建","description":"","frontmatter":{},"headers":[],"relativePath":"articles/blog/vitepress/01VitePress+Github搭建个人博客.md","filePath":"articles/blog/vitepress/01VitePress+Github搭建个人博客.md"}'),f={name:"articles/blog/vitepress/01VitePress+Github搭建个人博客.md"},q=e(`<h1 id="项目搭建" tabindex="-1">项目搭建 <a class="header-anchor" href="#项目搭建" aria-label="Permalink to &quot;项目搭建&quot;">​</a></h1><h2 id="环境-项目初始化" tabindex="-1">环境&amp;项目初始化 <a class="header-anchor" href="#环境-项目初始化" aria-label="Permalink to &quot;环境&amp;项目初始化&quot;">​</a></h2><p>安装node.js</p><p>安装git</p><p>创建项目</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 创建文件夹</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>运行测试，查看效果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn dev</span></span></code></pre></div><h2 id="自定义网站首页-docs-index-md" tabindex="-1">自定义网站首页./docs/index.md <a class="header-anchor" href="#自定义网站首页-docs-index-md" aria-label="Permalink to &quot;自定义网站首页./docs/index.md&quot;">​</a></h2><p>可以直接套用，以后再详细研究。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">---</span></span>
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
<span class="line"><span style="color:#24292e;">---</span></span></code></pre></div><p>运行测试，查看效果</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn dev</span></span></code></pre></div><p><img src="`+p+`" alt="image-20231022225823512"></p><h2 id="创建博客-docs-articles" tabindex="-1">创建博客./docs/articles <a class="header-anchor" href="#创建博客-docs-articles" aria-label="Permalink to &quot;创建博客./docs/articles&quot;">​</a></h2><p>创建几个markdown文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">articles</span></span>
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
<span class="line"><span style="color:#24292e;">		index.md</span></span></code></pre></div><h2 id="自定义导航-docs-vitepress-config-ts" tabindex="-1">自定义导航./docs/.vitepress/config.ts <a class="header-anchor" href="#自定义导航-docs-vitepress-config-ts" aria-label="Permalink to &quot;自定义导航./docs/.vitepress/config.ts&quot;">​</a></h2><p>定义logo和home</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export default {</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><img src="`+t+`" alt="image-20231022230523314"></p><p>定义侧边栏</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">export default {</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h1 id="部署到github" tabindex="-1">部署到github <a class="header-anchor" href="#部署到github" aria-label="Permalink to &quot;部署到github&quot;">​</a></h1><h2 id="项目打包" tabindex="-1">项目打包 <a class="header-anchor" href="#项目打包" aria-label="Permalink to &quot;项目打包&quot;">​</a></h2><p>上面项目记得打包（打包后的文件是 docs/.vitepress/dist）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn build</span></span></code></pre></div><p><img src="`+i+'" alt="image-20231022233357679"></p><h2 id="github创建仓库" tabindex="-1">github创建仓库 <a class="header-anchor" href="#github创建仓库" aria-label="Permalink to &quot;github创建仓库&quot;">​</a></h2><p>创建一个名字叫username.github.io的仓库</p><p><img src="'+r+'" alt="image-20231022232206983"></p><h2 id="上传dist至github" tabindex="-1">上传dist至github <a class="header-anchor" href="#上传dist至github" aria-label="Permalink to &quot;上传dist至github&quot;">​</a></h2><p>进入本地dist文件夹，按照github首页教程，将dist中的内容push到github</p><p><img src="'+y+'" alt="image-20231022232556611"></p><p>我这里上传到的是deploy分支，默认是main/master分支</p><p><img src="'+d+'" alt="image-20231022232730618"></p><h2 id="设置github-pages" tabindex="-1">设置Github Pages <a class="header-anchor" href="#设置github-pages" aria-label="Permalink to &quot;设置Github Pages&quot;">​</a></h2><p>设置github的setting</p><p><img src="'+u+`" alt="image-20231022233221763"></p><p>最后访问 <a href="https://mingriyingying.github.io/" target="_blank" rel="noreferrer">https://mingriyingying.github.io/</a></p><h1 id="项目进阶配置" tabindex="-1">项目进阶配置 <a class="header-anchor" href="#项目进阶配置" aria-label="Permalink to &quot;项目进阶配置&quot;">​</a></h1><h2 id="_1、一键部署" tabindex="-1">1、一键部署 <a class="header-anchor" href="#_1、一键部署" aria-label="Permalink to &quot;1、一键部署&quot;">​</a></h2><p>在项目根目录下创建./deploy.sh脚本。deploy.sh作用是将项目上传至github等代码仓库。（注意，我这里是上传至deploy分支）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/usr/bin/env sh</span></span>
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
<span class="line"><span style="color:#24292e;">cd -</span></span></code></pre></div><p>在package.json中添加命令</p><p><img src="`+g+`" alt="image-20231022233926480"></p><p>执行命令，完成自动上传至github</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn deploy</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn deploy</span></span></code></pre></div><h2 id="_2、自动生成菜单" tabindex="-1">2、自动生成菜单 <a class="header-anchor" href="#_2、自动生成菜单" aria-label="Permalink to &quot;2、自动生成菜单&quot;">​</a></h2><p>参考：<a href="https://juejin.cn/post/7214805603449339963" target="_blank" rel="noreferrer">https://juejin.cn/post/7214805603449339963</a></p><p>目的：能够根据 <code>docs</code> 目录自动地生成 <code>sidebar</code> 的配置，无需再手动去维护.</p><p>分析：在执行 <code>yarn dev</code> 之后，vitepress 会先运行 <code>.vitepress/config.js</code> 脚本，在这里自定义一个方法实现此功能。</p><p>注意：</p><ol><li>每个目录至少要有一个 <code>index.md</code> 文件，你可以在 <code>index.md</code> 做一些总览和介绍</li><li>如果新建了新文件夹，需要重新执行一遍，目录配置才能生效</li></ol><p>看代码，根据自己项目调整。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// Node.js 提供的文件系统模块（fs）和路径模块（path）</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_3、利用github-actions自动部署" tabindex="-1">3、利用Github Actions自动部署 <a class="header-anchor" href="#_3、利用github-actions自动部署" aria-label="Permalink to &quot;3、利用Github Actions自动部署&quot;">​</a></h2><p>参考：<a href="https://juejin.cn/post/7245980207315861562#heading-9" target="_blank" rel="noreferrer">https://juejin.cn/post/7245980207315861562#heading-9</a></p><p>参考2：<a href="https://cloud.tencent.com/developer/article/2339135" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/2339135</a></p><p>按照上面流程，我们开发完需要将<strong>项目代码</strong>提交至github的主分支，然后再将<strong>打包代码</strong>提交至deploy分支。</p><p>Github Actions则会自动构建发布：GitHub提供了服务器，我们把打包过程发至服务器中进行。</p><p>首先创建配置文件，位置./.github/workflows/deploy.yml。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">name: Deploy</span></span>
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
<span class="line"><span style="color:#24292e;">          publish_dir: docs/.vitepress/dist</span></span></code></pre></div><p>修改github actions权限：项目仓库下的settings</p><p><img src="`+h+'" alt="image-20231023161555470"></p><p>上传代码。等部署成功后，就可以切换page的分支。</p><p><img src="'+m+'" alt="image-20231023175405698"></p><p>试了好几种deploy部署脚本，终于成功了。</p><p><img src="'+v+'" alt="image-20231023175506169"></p>',81),b=[q];function k(L,x,N,_,C,P){return n(),a("div",null,b)}const j=s(f,[["render",k]]);export{$ as __pageData,j as default};
