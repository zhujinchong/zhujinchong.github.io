import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/全栈/Linux/02Shell脚本之服务启停脚本.md","filePath":"articles/全栈/Linux/02Shell脚本之服务启停脚本.md","lastUpdated":1698149129000}'),p={name:"articles/全栈/Linux/02Shell脚本之服务启停脚本.md"},l=e(`<p>启动脚本startup.sh</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/bin/sh</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">PORT=7888</span></span>
<span class="line"><span style="color:#e1e4e8;">GPU=1</span></span>
<span class="line"><span style="color:#e1e4e8;">nohup python run_app.py --port=$PORT 2&gt;&amp;1 &amp;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/bin/sh</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">PORT=7888</span></span>
<span class="line"><span style="color:#24292e;">GPU=1</span></span>
<span class="line"><span style="color:#24292e;">nohup python run_app.py --port=$PORT 2&gt;&amp;1 &amp;</span></span></code></pre></div><p>停止脚本shutdown.sh</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/bin/sh</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#设置关闭的端口</span></span>
<span class="line"><span style="color:#e1e4e8;">port=7888</span></span>
<span class="line"><span style="color:#e1e4e8;">#获取此端口运行的进程</span></span>
<span class="line"><span style="color:#e1e4e8;">pid=\`netstat -ntlp | grep $port | awk &#39;{print $NF}&#39; | awk -F &#39;/&#39; &#39;{print $1}&#39;\`</span></span>
<span class="line"><span style="color:#e1e4e8;">#判断如果进程号不为空则，关闭进程</span></span>
<span class="line"><span style="color:#e1e4e8;">if test -z &quot;$pid&quot;;then</span></span>
<span class="line"><span style="color:#e1e4e8;">  echo &quot;$port的进程未启动！&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">else</span></span>
<span class="line"><span style="color:#e1e4e8;">  kill -9 $pid</span></span>
<span class="line"><span style="color:#e1e4e8;">  echo &quot;$port的进程$pid 关闭成功！&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">fi</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/bin/sh</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#设置关闭的端口</span></span>
<span class="line"><span style="color:#24292e;">port=7888</span></span>
<span class="line"><span style="color:#24292e;">#获取此端口运行的进程</span></span>
<span class="line"><span style="color:#24292e;">pid=\`netstat -ntlp | grep $port | awk &#39;{print $NF}&#39; | awk -F &#39;/&#39; &#39;{print $1}&#39;\`</span></span>
<span class="line"><span style="color:#24292e;">#判断如果进程号不为空则，关闭进程</span></span>
<span class="line"><span style="color:#24292e;">if test -z &quot;$pid&quot;;then</span></span>
<span class="line"><span style="color:#24292e;">  echo &quot;$port的进程未启动！&quot;</span></span>
<span class="line"><span style="color:#24292e;">else</span></span>
<span class="line"><span style="color:#24292e;">  kill -9 $pid</span></span>
<span class="line"><span style="color:#24292e;">  echo &quot;$port的进程$pid 关闭成功！&quot;</span></span>
<span class="line"><span style="color:#24292e;">fi</span></span></code></pre></div><p>其中<code>$NF</code>是awk命令自带的变量，表示文本列数，这里表示要取最后一列。</p>`,5),o=[l];function t(c,i,r,d,y,h){return n(),a("div",null,o)}const $=s(p,[["render",t]]);export{u as __pageData,$ as default};
