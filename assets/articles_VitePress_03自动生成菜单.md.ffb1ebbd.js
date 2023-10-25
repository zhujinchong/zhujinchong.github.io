import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.2516552c.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/VitePress/03自动生成菜单.md","filePath":"articles/VitePress/03自动生成菜单.md","lastUpdated":null}'),l={name:"articles/VitePress/03自动生成菜单.md"},p=a(`<h2 id="自动生成菜单" tabindex="-1">自动生成菜单 <a class="header-anchor" href="#自动生成菜单" aria-label="Permalink to &quot;自动生成菜单&quot;">​</a></h2><p>目的：能够根据 <code>docs</code> 目录自动地生成菜单和侧边栏，无需再手动去维护.</p><p>分析：在执行 <code>yarn dev</code> 之后，vitepress 会先运行 <code>.vitepress/config.js</code> 脚本，在这里自定义一个方法实现此功能。</p><p>注意：</p><ol><li>每个目录至少要有一个 <code>index.md</code> 文件，你可以在 <code>index.md</code> 做一些总览和介绍</li><li>如果新建了新文件夹，需要重新执行一遍，目录配置才能生效</li></ol><p>原理：自定义两个方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 导航栏</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,9),o=[p];function t(c,i,r,y,f,d){return n(),e("div",null,o)}const v=s(l,[["render",t]]);export{m as __pageData,v as default};
