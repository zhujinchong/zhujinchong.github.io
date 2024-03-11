import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.2516552c.js";const h=JSON.parse('{"title":"容器","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Python/01环境.md","filePath":"articles/Python/01环境.md","lastUpdated":null}'),p={name:"articles/Python/01环境.md"},l=n(`<h1 id="容器" tabindex="-1">容器 <a class="header-anchor" href="#容器" aria-label="Permalink to &quot;容器&quot;">​</a></h1><p>准备镜像和容器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 测试镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run --rm --gpus &#39;&quot;device=6&quot;&#39; \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--name zjcdev \\</span></span>
<span class="line"><span style="color:#e1e4e8;">-it ddff6bac9a9c \\</span></span>
<span class="line"><span style="color:#e1e4e8;">/bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 创建容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run --gpus &#39;&quot;device=6&quot;&#39; \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--name zjcvpn \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--network=host \\</span></span>
<span class="line"><span style="color:#e1e4e8;">-v /data01/root/zjc/zjcvpn:/zjcvpn \\</span></span>
<span class="line"><span style="color:#e1e4e8;">-p 9999:9999 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--shm-size=1gb \\</span></span>
<span class="line"><span style="color:#e1e4e8;">-itd ddff6bac9a9c \\</span></span>
<span class="line"><span style="color:#e1e4e8;">/bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 进入容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker exec -it zjcvpn /bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;">cd /zjcvpn</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 测试镜像</span></span>
<span class="line"><span style="color:#24292e;">docker run --rm --gpus &#39;&quot;device=6&quot;&#39; \\</span></span>
<span class="line"><span style="color:#24292e;">--name zjcdev \\</span></span>
<span class="line"><span style="color:#24292e;">-it ddff6bac9a9c \\</span></span>
<span class="line"><span style="color:#24292e;">/bin/bash</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 创建容器</span></span>
<span class="line"><span style="color:#24292e;">docker run --gpus &#39;&quot;device=6&quot;&#39; \\</span></span>
<span class="line"><span style="color:#24292e;">--name zjcvpn \\</span></span>
<span class="line"><span style="color:#24292e;">--network=host \\</span></span>
<span class="line"><span style="color:#24292e;">-v /data01/root/zjc/zjcvpn:/zjcvpn \\</span></span>
<span class="line"><span style="color:#24292e;">-p 9999:9999 \\</span></span>
<span class="line"><span style="color:#24292e;">--shm-size=1gb \\</span></span>
<span class="line"><span style="color:#24292e;">-itd ddff6bac9a9c \\</span></span>
<span class="line"><span style="color:#24292e;">/bin/bash</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 进入容器</span></span>
<span class="line"><span style="color:#24292e;">docker exec -it zjcvpn /bin/bash</span></span>
<span class="line"><span style="color:#24292e;">cd /zjcvpn</span></span></code></pre></div><h1 id="jupyter-notebook" tabindex="-1">Jupyter Notebook <a class="header-anchor" href="#jupyter-notebook" aria-label="Permalink to &quot;Jupyter Notebook&quot;">​</a></h1><p>安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install jupyter</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install jupyter</span></span></code></pre></div><p>生成配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">jupyter notebook --generate-config</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">jupyter notebook --generate-config</span></span></code></pre></div><p>修改配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">vim /root/.jupyter/jupyter_notebook_config.py</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">vim /root/.jupyter/jupyter_notebook_config.py</span></span></code></pre></div><p>修改以下配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">c.ServerApp.ip = &#39;0.0.0.0&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">c.ServerApp.port = 9999</span></span>
<span class="line"><span style="color:#e1e4e8;">c.ServerApp.open_browser = False</span></span>
<span class="line"><span style="color:#e1e4e8;">c.ServerApp.password = &#39;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">c.ServerApp.token = &#39;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">c.ServerApp.notebook_dir = &#39;/zjcvpn&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">c.ServerApp.allow_remote_access = True</span></span>
<span class="line"><span style="color:#e1e4e8;">c.ServerApp.allow_root = True</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">c.ServerApp.ip = &#39;0.0.0.0&#39;</span></span>
<span class="line"><span style="color:#24292e;">c.ServerApp.port = 9999</span></span>
<span class="line"><span style="color:#24292e;">c.ServerApp.open_browser = False</span></span>
<span class="line"><span style="color:#24292e;">c.ServerApp.password = &#39;&#39;</span></span>
<span class="line"><span style="color:#24292e;">c.ServerApp.token = &#39;&#39;</span></span>
<span class="line"><span style="color:#24292e;">c.ServerApp.notebook_dir = &#39;/zjcvpn&#39;</span></span>
<span class="line"><span style="color:#24292e;">c.ServerApp.allow_remote_access = True</span></span>
<span class="line"><span style="color:#24292e;">c.ServerApp.allow_root = True</span></span></code></pre></div><p>运行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">jupyter notebook</span></span>
<span class="line"><span style="color:#e1e4e8;">nohup jupyter notebook 2&gt;&amp;1 &amp;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">jupyter notebook</span></span>
<span class="line"><span style="color:#24292e;">nohup jupyter notebook 2&gt;&amp;1 &amp;</span></span></code></pre></div><p>安装扩展</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">jupyter contrib nbextension install --user</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">jupyter contrib nbextension install --user</span></span></code></pre></div>`,16),o=[l];function c(t,r,i,d,y,u){return e(),a("div",null,o)}const b=s(p,[["render",c]]);export{h as __pageData,b as default};
