import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const p="/assets/image-20231022233926480.764d27e9.png",u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/VitePress/02一键部署.md","filePath":"articles/VitePress/02一键部署.md","lastUpdated":null}'),l={name:"articles/VitePress/02一键部署.md"},o=e(`<h2 id="一键部署" tabindex="-1">一键部署 <a class="header-anchor" href="#一键部署" aria-label="Permalink to &quot;一键部署&quot;">​</a></h2><p>在项目根目录下创建./deploy.sh脚本。deploy.sh作用是将项目上传至github等代码仓库。（注意，我这里是上传至deploy分支）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/usr/bin/env sh</span></span>
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
<span class="line"><span style="color:#24292e;">cd -</span></span></code></pre></div><p>在package.json中添加命令</p><p><img src="`+p+'" alt="image-20231022233926480"></p><p>执行命令，完成自动上传至github</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yarn deploy</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yarn deploy</span></span></code></pre></div>',7),t=[o];function c(i,r,d,y,g,h){return n(),a("div",null,t)}const m=s(l,[["render",c]]);export{u as __pageData,m as default};
