import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const p="/assets/image-20231023161555470.c5fc37e8.png",l="/assets/image-20231023175405698.b862dcff.png",o="/assets/image-20231023175506169.6088b6d3.png",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/VitePress/04利用Github Actions自动部署.md","filePath":"articles/VitePress/04利用Github Actions自动部署.md","lastUpdated":null}'),c={name:"articles/VitePress/04利用Github Actions自动部署.md"},t=e(`<h2 id="利用github-actions自动部署" tabindex="-1">利用Github Actions自动部署 <a class="header-anchor" href="#利用github-actions自动部署" aria-label="Permalink to &quot;利用Github Actions自动部署&quot;">​</a></h2><p>一般，我们开发完需要将<strong>项目代码</strong>提交至github的主分支，然后再将<strong>打包代码</strong>提交至另一个分支 或者 另一个仓库。</p><p>Github Actions则会自动构建发布：GitHub提供了服务器，我们把打包过程发至服务器中进行。</p><p>打包发布过程主要是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1、构建：yarn build</span></span>
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
<span class="line"><span style="color:#24292e;">          publish_dir: docs/.vitepress/dist</span></span></code></pre></div><p>修改github actions权限：项目仓库下的settings</p><p><img src="`+p+'" alt="image-20231023161555470"></p><p>上传代码。等部署成功后，就可以切换gh-page的分支。为什么会自动生成gh-page分支，因为<code>peaceiris/actions-gh-pages@v3</code>这个工作流自动帮你做了。</p><p><img src="'+l+'" alt="image-20231023175405698"></p><p>试了好几种deploy部署脚本，终于成功了。</p><p><img src="'+o+`" alt="image-20231023175506169"></p><p>不知道和这个有没有关系：在项目根目录下添加了.gitignore文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">node_modules</span></span>
<span class="line"><span style="color:#e1e4e8;">package-lock.json</span></span>
<span class="line"><span style="color:#e1e4e8;">docs/.vitepress/dist</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">node_modules</span></span>
<span class="line"><span style="color:#24292e;">package-lock.json</span></span>
<span class="line"><span style="color:#24292e;">docs/.vitepress/dist</span></span></code></pre></div>`,15),i=[t];function r(d,y,u,h,g,_){return n(),a("div",null,i)}const v=s(c,[["render",r]]);export{m as __pageData,v as default};
