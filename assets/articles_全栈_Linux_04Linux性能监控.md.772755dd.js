import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.2516552c.js";const m=JSON.parse('{"title":"内存","description":"","frontmatter":{},"headers":[],"relativePath":"articles/全栈/Linux/04Linux性能监控.md","filePath":"articles/全栈/Linux/04Linux性能监控.md","lastUpdated":1698165534000}'),l={name:"articles/全栈/Linux/04Linux性能监控.md"},p=n(`<h1 id="内存" tabindex="-1">内存 <a class="header-anchor" href="#内存" aria-label="Permalink to &quot;内存&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[zjc@localhost ~]$ free -m</span></span>
<span class="line"><span style="color:#e1e4e8;">              total        used        free      shared  buff/cache   available</span></span>
<span class="line"><span style="color:#e1e4e8;">Mem:         643466       25024      520640          40       97801      616556</span></span>
<span class="line"><span style="color:#e1e4e8;">Swap:          4095           0        4095</span></span>
<span class="line"><span style="color:#e1e4e8;">[zjc@localhost ~]$ free -h</span></span>
<span class="line"><span style="color:#e1e4e8;">              total        used        free      shared  buff/cache   available</span></span>
<span class="line"><span style="color:#e1e4e8;">Mem:           628G         24G        508G         40M         95G        602G</span></span>
<span class="line"><span style="color:#e1e4e8;">Swap:          4.0G          0B        4.0G</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[zjc@localhost ~]$ free -m</span></span>
<span class="line"><span style="color:#24292e;">              total        used        free      shared  buff/cache   available</span></span>
<span class="line"><span style="color:#24292e;">Mem:         643466       25024      520640          40       97801      616556</span></span>
<span class="line"><span style="color:#24292e;">Swap:          4095           0        4095</span></span>
<span class="line"><span style="color:#24292e;">[zjc@localhost ~]$ free -h</span></span>
<span class="line"><span style="color:#24292e;">              total        used        free      shared  buff/cache   available</span></span>
<span class="line"><span style="color:#24292e;">Mem:           628G         24G        508G         40M         95G        602G</span></span>
<span class="line"><span style="color:#24292e;">Swap:          4.0G          0B        4.0G</span></span></code></pre></div><p>其中， <code>-m</code> 选项是以MB为单位来展示内存使用信息; <code>-h</code> 选项则是以人类(human)可读的单位来展示。</p><h1 id="gpu" tabindex="-1">GPU <a class="header-anchor" href="#gpu" aria-label="Permalink to &quot;GPU&quot;">​</a></h1><p><code>nvitop</code>是一款交互式NVIDIA-GPU设备性能&amp;资源&amp;进程的实时监测工具。</p><p>conda安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install --upgrade nvitop</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install --upgrade nvitop</span></span></code></pre></div><p>使用时有三种模式</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Automatically configure the display mode according to the terminal size</span></span>
<span class="line"><span style="color:#e1e4e8;">$ nvitop -m auto     # shortcut: \`a\` key</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># Arbitrarily display as \`full\` mode</span></span>
<span class="line"><span style="color:#e1e4e8;">$ nvitop -m full     # shortcut: \`f\` key</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># Arbitrarily display as \`compact\` mode</span></span>
<span class="line"><span style="color:#e1e4e8;">$ nvitop -m compact  # shortcut: \`c\` key</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Automatically configure the display mode according to the terminal size</span></span>
<span class="line"><span style="color:#24292e;">$ nvitop -m auto     # shortcut: \`a\` key</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># Arbitrarily display as \`full\` mode</span></span>
<span class="line"><span style="color:#24292e;">$ nvitop -m full     # shortcut: \`f\` key</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># Arbitrarily display as \`compact\` mode</span></span>
<span class="line"><span style="color:#24292e;">$ nvitop -m compact  # shortcut: \`c\` key</span></span></code></pre></div>`,9),o=[p];function c(t,i,r,d,h,u){return a(),e("div",null,o)}const f=s(l,[["render",c]]);export{m as __pageData,f as default};
