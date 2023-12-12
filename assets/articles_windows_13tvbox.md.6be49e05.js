import{_ as a,o as t,c as e,Q as s}from"./chunks/framework.2516552c.js";const b=JSON.parse('{"title":"软件介绍","description":"","frontmatter":{},"headers":[],"relativePath":"articles/windows/13tvbox.md","filePath":"articles/windows/13tvbox.md","lastUpdated":null}'),p={name:"articles/windows/13tvbox.md"},o=s(`<h1 id="软件介绍" tabindex="-1">软件介绍 <a class="header-anchor" href="#软件介绍" aria-label="Permalink to &quot;软件介绍&quot;">​</a></h1><p>一、软件介绍</p><p>1、TVBox是一个空壳软件，相当于一个本地播放器，软件并不能直接播放网络视频。</p><p>2、配置文件内有资源网站地址信息，tvbox+配置文件=网络视频播放器。</p><p>3、目前配置文件分为两种：网络和本地（建议直接用网络配置，在配置地址栏粘贴即可）</p><p>二、源码</p><p>源码地址：<a href="https://github.com/CatVodTVOfficial/TVBoxOSC" target="_blank" rel="noreferrer">https://github.com/CatVodTVOfficial/TVBoxOSC</a></p><p>功能：支持直播及搜索；提供三种播放器；UI界面；安卓、电视盒子均可安装等。</p><h1 id="自制接口" tabindex="-1">自制接口 <a class="header-anchor" href="#自制接口" aria-label="Permalink to &quot;自制接口&quot;">​</a></h1><p>配置文件只有三个（先下载别人）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">xxx.jar		爬虫+解析</span></span>
<span class="line"><span style="color:#e1e4e8;">xxx.json	配置软件：jar的路径、电视频道配置的路径、视频源的地址、搜索引擎、壁纸链接等等 </span></span>
<span class="line"><span style="color:#e1e4e8;">xxx.txt		电视频道的配置文件，里面就是各个频道的直播地址</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">xxx.jar		爬虫+解析</span></span>
<span class="line"><span style="color:#24292e;">xxx.json	配置软件：jar的路径、电视频道配置的路径、视频源的地址、搜索引擎、壁纸链接等等 </span></span>
<span class="line"><span style="color:#24292e;">xxx.txt		电视频道的配置文件，里面就是各个频道的直播地址</span></span></code></pre></div><p>1、创建仓库，并上传</p><p>2、复制xxx.txt的网络地址<code>https://xxx.../xxx.txt</code>，编译成base64编码</p><p>3、复制xxx.jar的网络地址<code>https://xxx.../xxx.jar</code></p><p>4、修改xxx.json中的上面两个的地址</p><p><img src="https://i0.hdslb.com/bfs/article/0719c73383a23990a4624090fb0a3e9d33512914.png@942w_143h_progressive.webp" alt="img"></p>`,16),n=[o];function l(c,r,i,x,d,h){return t(),e("div",null,n)}const f=a(p,[["render",l]]);export{b as __pageData,f as default};