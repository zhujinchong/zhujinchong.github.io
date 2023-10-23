import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.2516552c.js";const u=JSON.parse('{"title":"自定义首页(组件)","description":"","frontmatter":{},"headers":[],"relativePath":"articles/blog/vitepress/04自定义首页&模板.md","filePath":"articles/blog/vitepress/04自定义首页&模板.md","lastUpdated":1698075212000}'),p={name:"articles/blog/vitepress/04自定义首页&模板.md"},l=n(`<h1 id="自定义首页-组件" tabindex="-1">自定义首页(组件) <a class="header-anchor" href="#自定义首页-组件" aria-label="Permalink to &quot;自定义首页(组件)&quot;">​</a></h1><p>参考：<a href="https://juejin.cn/post/7134586612406714375#heading-5" target="_blank" rel="noreferrer">https://juejin.cn/post/7134586612406714375#heading-5</a></p><p>目的：首页太丑，想要自己修改或者自定义页面。</p><p>分析：vitepress也是支持直接在md中写vue的，所以可以通过vue组件的形式，完全自己自定义一套样式。</p><p>安装vue</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">yarn add -D vue</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">yarn add -D vue</span></span></code></pre></div><p>新建一个组件.vitepress/components/home.vue</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;script setup&gt;</span></span>
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
<span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">import home from &#39;./.vitepress/components/home.vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;home /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">layout: home</span></span>
<span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292e;">import home from &#39;./.vitepress/components/home.vue&#39;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;home /&gt;</span></span></code></pre></div><h1 id="自定义模板-文档页面布局" tabindex="-1">自定义模板(文档页面布局) <a class="header-anchor" href="#自定义模板-文档页面布局" aria-label="Permalink to &quot;自定义模板(文档页面布局)&quot;">​</a></h1><p>略。</p>`,12),t=[l];function o(c,i,r,d,y,h){return e(),a("div",null,t)}const m=s(p,[["render",o]]);export{u as __pageData,m as default};
