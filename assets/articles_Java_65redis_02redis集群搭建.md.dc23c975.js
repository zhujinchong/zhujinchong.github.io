import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.2516552c.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/65redis/02redis集群搭建.md","filePath":"articles/Java/65redis/02redis集群搭建.md","lastUpdated":1698165159000}'),l={name:"articles/Java/65redis/02redis集群搭建.md"},p=a(`<p>单机启动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 修改配置</span></span>
<span class="line"><span style="color:#e1e4e8;">daemonize yes</span></span>
<span class="line"><span style="color:#e1e4e8;"># 后台启动</span></span>
<span class="line"><span style="color:#e1e4e8;">redis-server redis.conf</span></span>
<span class="line"><span style="color:#e1e4e8;"># 访问</span></span>
<span class="line"><span style="color:#e1e4e8;">redis-cli</span></span>
<span class="line"><span style="color:#e1e4e8;"># 退出</span></span>
<span class="line"><span style="color:#e1e4e8;">quit</span></span>
<span class="line"><span style="color:#e1e4e8;"># redis停止</span></span>
<span class="line"><span style="color:#e1e4e8;">redis-cli shutdown</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 修改配置</span></span>
<span class="line"><span style="color:#24292e;">daemonize yes</span></span>
<span class="line"><span style="color:#24292e;"># 后台启动</span></span>
<span class="line"><span style="color:#24292e;">redis-server redis.conf</span></span>
<span class="line"><span style="color:#24292e;"># 访问</span></span>
<span class="line"><span style="color:#24292e;">redis-cli</span></span>
<span class="line"><span style="color:#24292e;"># 退出</span></span>
<span class="line"><span style="color:#24292e;">quit</span></span>
<span class="line"><span style="color:#24292e;"># redis停止</span></span>
<span class="line"><span style="color:#24292e;">redis-cli shutdown</span></span></code></pre></div><p>集群启动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 1. 解压</span></span>
<span class="line"><span style="color:#e1e4e8;"># 2. 编译和安装</span></span>
<span class="line"><span style="color:#e1e4e8;">cd redis-5.0.6/</span></span>
<span class="line"><span style="color:#e1e4e8;">make</span></span>
<span class="line"><span style="color:#e1e4e8;">make install</span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装完以后/usr/local/bin/下面有redis的脚本</span></span>
<span class="line"><span style="color:#e1e4e8;"># 3. 到/usr/local下创建redis-cluster, 并创建7个</span></span>
<span class="line"><span style="color:#e1e4e8;">cd /usr/local/</span></span>
<span class="line"><span style="color:#e1e4e8;">mkdir redis-cluster</span></span>
<span class="line"><span style="color:#e1e4e8;">cd redis-cluster/</span></span>
<span class="line"><span style="color:#e1e4e8;">mkdir 7000 7001 7002</span></span>
<span class="line"><span style="color:#e1e4e8;"># 4. 拷贝并修改配置到各个目录下</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 配置========================</span></span>
<span class="line"><span style="color:#e1e4e8;">bind 10.45.151.213 #IP  </span></span>
<span class="line"><span style="color:#e1e4e8;">port 7000    #端口</span></span>
<span class="line"><span style="color:#e1e4e8;">daemonize yes   #是否后台启动</span></span>
<span class="line"><span style="color:#e1e4e8;">pidfile /var/run/redis_7000.pid #进程存放文件的地址（daemonize需要）</span></span>
<span class="line"><span style="color:#e1e4e8;">logfile &quot;/usr/local/redis-cluster/7000/7000.log&quot; #日志文件</span></span>
<span class="line"><span style="color:#e1e4e8;">save 900 1  #rdb存储</span></span>
<span class="line"><span style="color:#e1e4e8;">appendonly yes #aof存储</span></span>
<span class="line"><span style="color:#e1e4e8;">appendfilename &quot;appendonly.aof&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">cluster-enabled yes  #是否是集群方式启动</span></span>
<span class="line"><span style="color:#e1e4e8;">cluster-config-file nodes-7000.conf</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 5. 启动各个redis</span></span>
<span class="line"><span style="color:#e1e4e8;">redis-server 7000/redis.conf</span></span>
<span class="line"><span style="color:#e1e4e8;">redis-server 7001/redis.conf</span></span>
<span class="line"><span style="color:#e1e4e8;">redis-server 7002/redis.conf</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 如果以前有过集群，请把各个目录下的配置文件、备份数据删除</span></span>
<span class="line"><span style="color:#e1e4e8;"># 6. 以前使用ruby搭建集群，现在直接用redis-cli：</span></span>
<span class="line"><span style="color:#e1e4e8;">redis-cli --cluster create 10.45.151.213:7000 10.45.151.213:7001 10.45.151.213:7002 --cluster-replicas 1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 8. 连接，测试</span></span>
<span class="line"><span style="color:#e1e4e8;">redis-cli -c -p 7000 -h 10.45.151.213</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 1. 解压</span></span>
<span class="line"><span style="color:#24292e;"># 2. 编译和安装</span></span>
<span class="line"><span style="color:#24292e;">cd redis-5.0.6/</span></span>
<span class="line"><span style="color:#24292e;">make</span></span>
<span class="line"><span style="color:#24292e;">make install</span></span>
<span class="line"><span style="color:#24292e;"># 安装完以后/usr/local/bin/下面有redis的脚本</span></span>
<span class="line"><span style="color:#24292e;"># 3. 到/usr/local下创建redis-cluster, 并创建7个</span></span>
<span class="line"><span style="color:#24292e;">cd /usr/local/</span></span>
<span class="line"><span style="color:#24292e;">mkdir redis-cluster</span></span>
<span class="line"><span style="color:#24292e;">cd redis-cluster/</span></span>
<span class="line"><span style="color:#24292e;">mkdir 7000 7001 7002</span></span>
<span class="line"><span style="color:#24292e;"># 4. 拷贝并修改配置到各个目录下</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 配置========================</span></span>
<span class="line"><span style="color:#24292e;">bind 10.45.151.213 #IP  </span></span>
<span class="line"><span style="color:#24292e;">port 7000    #端口</span></span>
<span class="line"><span style="color:#24292e;">daemonize yes   #是否后台启动</span></span>
<span class="line"><span style="color:#24292e;">pidfile /var/run/redis_7000.pid #进程存放文件的地址（daemonize需要）</span></span>
<span class="line"><span style="color:#24292e;">logfile &quot;/usr/local/redis-cluster/7000/7000.log&quot; #日志文件</span></span>
<span class="line"><span style="color:#24292e;">save 900 1  #rdb存储</span></span>
<span class="line"><span style="color:#24292e;">appendonly yes #aof存储</span></span>
<span class="line"><span style="color:#24292e;">appendfilename &quot;appendonly.aof&quot;</span></span>
<span class="line"><span style="color:#24292e;">cluster-enabled yes  #是否是集群方式启动</span></span>
<span class="line"><span style="color:#24292e;">cluster-config-file nodes-7000.conf</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 5. 启动各个redis</span></span>
<span class="line"><span style="color:#24292e;">redis-server 7000/redis.conf</span></span>
<span class="line"><span style="color:#24292e;">redis-server 7001/redis.conf</span></span>
<span class="line"><span style="color:#24292e;">redis-server 7002/redis.conf</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 如果以前有过集群，请把各个目录下的配置文件、备份数据删除</span></span>
<span class="line"><span style="color:#24292e;"># 6. 以前使用ruby搭建集群，现在直接用redis-cli：</span></span>
<span class="line"><span style="color:#24292e;">redis-cli --cluster create 10.45.151.213:7000 10.45.151.213:7001 10.45.151.213:7002 --cluster-replicas 1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 8. 连接，测试</span></span>
<span class="line"><span style="color:#24292e;">redis-cli -c -p 7000 -h 10.45.151.213</span></span></code></pre></div>`,4),c=[p];function o(r,i,t,d,y,u){return n(),e("div",null,c)}const v=s(l,[["render",o]]);export{f as __pageData,v as default};
