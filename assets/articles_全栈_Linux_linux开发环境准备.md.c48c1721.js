import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.2516552c.js";const g=JSON.parse('{"title":"虚拟机环境","description":"","frontmatter":{},"headers":[],"relativePath":"articles/全栈/Linux/linux开发环境准备.md","filePath":"articles/全栈/Linux/linux开发环境准备.md","lastUpdated":1698149129000}'),p={name:"articles/全栈/Linux/linux开发环境准备.md"},o=e(`<p>按照教程来</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1. 安装VMWare</span></span>
<span class="line"><span style="color:#e1e4e8;">2. 安装Centos</span></span>
<span class="line"><span style="color:#e1e4e8;">3. 修改网络配置（NAT）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. 安装VMWare</span></span>
<span class="line"><span style="color:#24292e;">2. 安装Centos</span></span>
<span class="line"><span style="color:#24292e;">3. 修改网络配置（NAT）</span></span></code></pre></div><h1 id="虚拟机环境" tabindex="-1">虚拟机环境 <a class="header-anchor" href="#虚拟机环境" aria-label="Permalink to &quot;虚拟机环境&quot;">​</a></h1><h2 id="_1-ip" tabindex="-1">1. IP <a class="header-anchor" href="#_1-ip" aria-label="Permalink to &quot;1. IP&quot;">​</a></h2><p>修改网络 IP 地址为静态 IP 地址，避免 IP 地址经常变化。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@hadoop100 ~]# vim /etc/sysconfig/network-scripts/ifcfg-ens33</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">BOOTPROTO=&quot;static&quot; 	# 静态IP</span></span>
<span class="line"><span style="color:#e1e4e8;">IPADDR=192.168.10.100 #IP 地址</span></span>
<span class="line"><span style="color:#e1e4e8;">GATEWAY=192.168.10.2 #网关</span></span>
<span class="line"><span style="color:#e1e4e8;">DNS1=192.168.10.2	#域名解析器</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@hadoop100 ~]# vim /etc/sysconfig/network-scripts/ifcfg-ens33</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">BOOTPROTO=&quot;static&quot; 	# 静态IP</span></span>
<span class="line"><span style="color:#24292e;">IPADDR=192.168.10.100 #IP 地址</span></span>
<span class="line"><span style="color:#24292e;">GATEWAY=192.168.10.2 #网关</span></span>
<span class="line"><span style="color:#24292e;">DNS1=192.168.10.2	#域名解析器</span></span></code></pre></div><h2 id="_2-hostname" tabindex="-1">2. hostname <a class="header-anchor" href="#_2-hostname" aria-label="Permalink to &quot;2. hostname&quot;">​</a></h2><p>修改主机</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@hadoop100 ~]# vim /etc/hostname</span></span>
<span class="line"><span style="color:#e1e4e8;">hadoop100</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@hadoop100 ~]# vim /etc/hostname</span></span>
<span class="line"><span style="color:#24292e;">hadoop100</span></span></code></pre></div><p>修改主机映射文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@hadoop100 ~]# vim /etc/hosts</span></span>
<span class="line"><span style="color:#e1e4e8;">192.168.10.100 hadoop100</span></span>
<span class="line"><span style="color:#e1e4e8;">192.168.10.101 hadoop101</span></span>
<span class="line"><span style="color:#e1e4e8;">192.168.10.102 hadoop102</span></span>
<span class="line"><span style="color:#e1e4e8;">192.168.10.103 hadoop103</span></span>
<span class="line"><span style="color:#e1e4e8;">192.168.10.104 hadoop104</span></span>
<span class="line"><span style="color:#e1e4e8;">192.168.10.105 hadoop105</span></span>
<span class="line"><span style="color:#e1e4e8;">192.168.10.106 hadoop106</span></span>
<span class="line"><span style="color:#e1e4e8;">192.168.10.107 hadoop107</span></span>
<span class="line"><span style="color:#e1e4e8;">192.168.10.108 hadoop108</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@hadoop100 ~]# vim /etc/hosts</span></span>
<span class="line"><span style="color:#24292e;">192.168.10.100 hadoop100</span></span>
<span class="line"><span style="color:#24292e;">192.168.10.101 hadoop101</span></span>
<span class="line"><span style="color:#24292e;">192.168.10.102 hadoop102</span></span>
<span class="line"><span style="color:#24292e;">192.168.10.103 hadoop103</span></span>
<span class="line"><span style="color:#24292e;">192.168.10.104 hadoop104</span></span>
<span class="line"><span style="color:#24292e;">192.168.10.105 hadoop105</span></span>
<span class="line"><span style="color:#24292e;">192.168.10.106 hadoop106</span></span>
<span class="line"><span style="color:#24292e;">192.168.10.107 hadoop107</span></span>
<span class="line"><span style="color:#24292e;">192.168.10.108 hadoop108</span></span></code></pre></div><p>重启</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">reboot</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">reboot</span></span></code></pre></div><h2 id="_3-xsync同步脚本" tabindex="-1">3. xsync同步脚本 <a class="header-anchor" href="#_3-xsync同步脚本" aria-label="Permalink to &quot;3. xsync同步脚本&quot;">​</a></h2><p>编辑同步主机名</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[root@hadoop100 ~]# vim ~/bin/xsync</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[root@hadoop100 ~]# vim ~/bin/xsync</span></span></code></pre></div><h2 id="_4-ssh无密登录" tabindex="-1">4. ssh无密登录 <a class="header-anchor" href="#_4-ssh无密登录" aria-label="Permalink to &quot;4. ssh无密登录&quot;">​</a></h2><p>xsync同步脚本还需要无密登录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 进入ssh目录</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@hadoop100 ~]# cd ~/.ssh</span></span>
<span class="line"><span style="color:#e1e4e8;"># 生成key</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@hadoop100 .ssh]# ssh-keygen -t rsa</span></span>
<span class="line"><span style="color:#e1e4e8;"># 拷贝公钥到其他机器 （完成后在其他机器重复此操作）</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@hadoop100 .ssh]# ssh-copy-id hadoop102</span></span>
<span class="line"><span style="color:#e1e4e8;">[root@hadoop100 .ssh]# ssh-copy-id hadoop103</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 进入ssh目录</span></span>
<span class="line"><span style="color:#24292e;">[root@hadoop100 ~]# cd ~/.ssh</span></span>
<span class="line"><span style="color:#24292e;"># 生成key</span></span>
<span class="line"><span style="color:#24292e;">[root@hadoop100 .ssh]# ssh-keygen -t rsa</span></span>
<span class="line"><span style="color:#24292e;"># 拷贝公钥到其他机器 （完成后在其他机器重复此操作）</span></span>
<span class="line"><span style="color:#24292e;">[root@hadoop100 .ssh]# ssh-copy-id hadoop102</span></span>
<span class="line"><span style="color:#24292e;">[root@hadoop100 .ssh]# ssh-copy-id hadoop103</span></span></code></pre></div>`,19),l=[o];function c(t,i,r,d,h,y){return a(),n("div",null,l)}const v=s(p,[["render",c]]);export{g as __pageData,v as default};
