import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const p="/assets/image-20231025120807049.e0ccff10.png",l="/assets/image-20231025120729045.1c46c4ac.png",o="/assets/image-20231025124724775.d76c502b.png",_=JSON.parse('{"title":"文档项目仓库分离","description":"","frontmatter":{},"headers":[],"relativePath":"articles/VitePress/07文档项目仓库分离.md","filePath":"articles/VitePress/07文档项目仓库分离.md","lastUpdated":null}'),c={name:"articles/VitePress/07文档项目仓库分离.md"},t=e(`<h1 id="文档项目仓库分离" tabindex="-1">文档项目仓库分离 <a class="header-anchor" href="#文档项目仓库分离" aria-label="Permalink to &quot;文档项目仓库分离&quot;">​</a></h1><p>目的：项目开发完，代码不想动了。以后只编辑文档，隐藏项目代码。</p><p>分析：</p><p>1、A仓库存文档，B仓库Gihub pages仓库，也就是项目仓库。</p><p>2、A仓库更新，用github actions创建workflow，触发派发事件通知B仓库。</p><p>3、B仓库接收到该事件，拉取A仓库文档，然后自动部署。</p><h1 id="b仓库自动克隆a仓库" tabindex="-1">B仓库自动克隆A仓库 <a class="header-anchor" href="#b仓库自动克隆a仓库" aria-label="Permalink to &quot;B仓库自动克隆A仓库&quot;">​</a></h1><p>分析：<code>actions/checkout@v3</code> 克隆代码时会将代码仓库克隆到工作空间（workspace）中，并设置一些环境变量以提供有关克隆操作的信息，其中工作空间就是<code>github.workspace</code>。我们就可以在这里操作。</p><p>yml脚本：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">name: Deploy</span></span>
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
<span class="line"><span style="color:#24292e;">          publish_dir: docs/.vitepress/dist</span></span></code></pre></div><h1 id="a仓库发送触发事件" tabindex="-1">A仓库发送触发事件 <a class="header-anchor" href="#a仓库发送触发事件" aria-label="Permalink to &quot;A仓库发送触发事件&quot;">​</a></h1><p>分析：</p><p>使用 GitHub 的仓库派发事件（repository_dispatch）。这允许你手动或通过仓库 A 的 Actions workflow 向B仓库发送自定义事件，以触发B的 workflow 的运行。</p><p>你需要确保在 GitHub Actions workflow 中提供了正确的身份验证凭证，以便访问仓库 B。这通常包括 SSH 密钥或 个人访问令牌 Personal Access Token（PAT），并将其存储在仓库 A 的 Secrets 中。</p><p>流程：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1、github中创建PAT (SSH也可以)</span></span>
<span class="line"><span style="color:#e1e4e8;">2、A仓库存储PAT</span></span>
<span class="line"><span style="color:#e1e4e8;">3、B仓库定义触发事件</span></span>
<span class="line"><span style="color:#e1e4e8;">4、A仓库定义发送触发事件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1、github中创建PAT (SSH也可以)</span></span>
<span class="line"><span style="color:#24292e;">2、A仓库存储PAT</span></span>
<span class="line"><span style="color:#24292e;">3、B仓库定义触发事件</span></span>
<span class="line"><span style="color:#24292e;">4、A仓库定义发送触发事件</span></span></code></pre></div><p>在setting -&gt; developer settings 中创建PAT</p><p><img src="`+p+'" alt="image-20231025120807049"></p><p>自定义一个名字</p><p><img src="'+l+'" alt="image-20231025120729045"></p><p>存储在A仓库的中，自定义名字</p><p><img src="'+o+`" alt="image-20231025124724775"></p><p>B仓库的工作流中加入监听事件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">name: Deploy</span></span>
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
<span class="line"><span style="color:#24292e;">...</span></span></code></pre></div><p>A仓库的工作流开启事件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">name: Trigger Update Event</span></span>
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
<span class="line"><span style="color:#24292e;">          -d &#39;{&quot;event_type&quot;: &quot;update-event&quot;}&#39;</span></span></code></pre></div>`,26),i=[t];function r(y,u,d,h,g,m){return n(),a("div",null,i)}const v=s(c,[["render",r]]);export{_ as __pageData,v as default};
