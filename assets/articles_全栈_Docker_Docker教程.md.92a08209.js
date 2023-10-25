import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const l="/assets/image-20230315230828867.7f18e9b8.png",p="/assets/image-20230315225521290.fff5ac86.png",o="/assets/image-20230315231551787.df524d51.png",c="/assets/image-20221208232429008.91cec2c3.png",t="/assets/image-20221212230010384.4c8400e2.png",r="/assets/image-20221213221829300.c0aff492.png",i="/assets/image-20221213224620709.8afd4bc1.png",y="/assets/image-20221213225554962.f70390a9.png",d="/assets/image-20221213225719331.0cdde683.png",k="/assets/image-20221213230242541.6ac8c20e.png",u="/assets/image-20221213231757349.d8f7924f.png",f=JSON.parse('{"title":"1  简介安装","description":"","frontmatter":{},"headers":[],"relativePath":"articles/全栈/Docker/Docker教程.md","filePath":"articles/全栈/Docker/Docker教程.md","lastUpdated":1698198415000}'),m={name:"articles/全栈/Docker/Docker教程.md"},h=e('<h1 id="_1-简介安装" tabindex="-1">1 简介安装 <a class="header-anchor" href="#_1-简介安装" aria-label="Permalink to &quot;1  简介安装&quot;">​</a></h1><h2 id="_1-1-简介" tabindex="-1">1.1 简介 <a class="header-anchor" href="#_1-1-简介" aria-label="Permalink to &quot;1.1  简介&quot;">​</a></h2><ul><li>Docker是一个开源应用容器引擎</li><li>Docker诞生于2013年，基于Go语言实验</li><li>Docker可以打包应用，然后发布到任何流行的Linux机器上</li><li>容器是完全使用沙箱机制，相互隔离</li><li>容器性能开销极低</li><li>Docker从17.03版本以后分为Community Edition社区版，和Enterprise Edition企业版</li></ul><h2 id="_1-2-基本概念" tabindex="-1">1.2 基本概念 <a class="header-anchor" href="#_1-2-基本概念" aria-label="Permalink to &quot;1.2  基本概念&quot;">​</a></h2><p>Docker包括三个基本概念：</p><ul><li>镜像Image：相当于是一个root文件系统，和操作系统镜像概念差不多；</li><li>容器Container：镜像和容器的关系，相当于类和实例对象，容器可以被创建、启动、停止、删除等；</li><li>仓库：仓库是用来保存镜像的，相当于一个代码控制中心，类似于Maven仓库。</li></ul><h2 id="_1-3-安装" tabindex="-1">1.3 安装 <a class="header-anchor" href="#_1-3-安装" aria-label="Permalink to &quot;1.3  安装&quot;">​</a></h2><p>参考官网：<a href="https://docs.docker.com/engine/install/centos/" target="_blank" rel="noreferrer">https://docs.docker.com/engine/install/centos/</a></p><p><img src="'+l+`" alt="image-20230315230828867"></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 1、安装yum-utils，是为了使用yum-config-manager命令</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yum-utils</span></span>
<span class="line"><span style="color:#6A737D;"># 2、通过 yum-config-manager 设置镜像仓库地址阿里云 </span></span>
<span class="line"><span style="color:#B392F0;">yum-config-manager</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--add-repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 3、安装</span></span>
<span class="line"><span style="color:#6A737D;"># docker-ce : docker 引擎，社区版</span></span>
<span class="line"><span style="color:#6A737D;"># docker-ce-cli : docker 引擎的命令行界面，社区版</span></span>
<span class="line"><span style="color:#6A737D;"># containerd.io : 守护进程 containerd。 它在 docker 包上独立工作，并且是 docker 包所必需的。</span></span>
<span class="line"><span style="color:#6A737D;"># docker-compose-plugin： docker编排插件，后面用</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker-ce</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker-ce-cli</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">containerd.io</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker-compose-plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 4、查看docker版本，验证是否验证成功</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span>
<span class="line"><span style="color:#6A737D;"># 如果失败，看是否关闭了防火墙</span></span>
<span class="line"><span style="color:#6A737D;"># 关闭</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">firewalld</span></span>
<span class="line"><span style="color:#6A737D;"># 禁止开机启动防火墙</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">disable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 5、根据需要，设置开机自动启动</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span></span>
<span class="line"><span style="color:#6A737D;"># 6、启动 关闭 重启docker</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 7、配置镜像加速，因为国内从docker hub官方仓库下载较慢</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> 镜像从Docker Hub下载。</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> 国内从Docker Hub获取镜像时会遇到困难，所以必须配置加速器。</span></span>
<span class="line"><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> 阿里镜像加速器、免费、参考官方：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 1、安装yum-utils，是为了使用yum-config-manager命令</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yum-utils</span></span>
<span class="line"><span style="color:#6A737D;"># 2、通过 yum-config-manager 设置镜像仓库地址阿里云 </span></span>
<span class="line"><span style="color:#6F42C1;">yum-config-manager</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--add-repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 3、安装</span></span>
<span class="line"><span style="color:#6A737D;"># docker-ce : docker 引擎，社区版</span></span>
<span class="line"><span style="color:#6A737D;"># docker-ce-cli : docker 引擎的命令行界面，社区版</span></span>
<span class="line"><span style="color:#6A737D;"># containerd.io : 守护进程 containerd。 它在 docker 包上独立工作，并且是 docker 包所必需的。</span></span>
<span class="line"><span style="color:#6A737D;"># docker-compose-plugin： docker编排插件，后面用</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker-ce</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker-ce-cli</span><span style="color:#24292E;"> </span><span style="color:#032F62;">containerd.io</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker-compose-plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 4、查看docker版本，验证是否验证成功</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span>
<span class="line"><span style="color:#6A737D;"># 如果失败，看是否关闭了防火墙</span></span>
<span class="line"><span style="color:#6A737D;"># 关闭</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">firewalld</span></span>
<span class="line"><span style="color:#6A737D;"># 禁止开机启动防火墙</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">disable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">firewalld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 5、根据需要，设置开机自动启动</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span></span>
<span class="line"><span style="color:#6A737D;"># 6、启动 关闭 重启docker</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 7、配置镜像加速，因为国内从docker hub官方仓库下载较慢</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> 镜像从Docker Hub下载。</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> 国内从Docker Hub获取镜像时会遇到困难，所以必须配置加速器。</span></span>
<span class="line"><span style="color:#D73A49;">*</span><span style="color:#24292E;"> 阿里镜像加速器、免费、参考官方：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors</span></span></code></pre></div><p>阿里云镜像获取地址：<a href="https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors%EF%BC%8C%E7%99%BB%E9%99%86%E5%90%8E%EF%BC%8C%E5%B7%A6%E4%BE%A7%E8%8F%9C%E5%8D%95%E9%80%89%E4%B8%AD%E9%95%9C%E5%83%8F%E5%8A%A0%E9%80%9F%E5%99%A8%E5%B0%B1%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0%E4%BD%A0%E7%9A%84%E4%B8%93%E5%B1%9E%E5%9C%B0%E5%9D%80%E4%BA%86%EF%BC%9A" target="_blank" rel="noreferrer">https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors，登陆后，左侧菜单选中镜像加速器就可以看到你的专属地址了：</a></p><p><img src="`+p+`" alt="image-20230315225521290"></p><h1 id="_2-docker命令" tabindex="-1">2 Docker命令 <a class="header-anchor" href="#_2-docker命令" aria-label="Permalink to &quot;2  Docker命令&quot;">​</a></h1><h2 id="_2-1-docker服务命令" tabindex="-1">2.1 Docker服务命令 <a class="header-anchor" href="#_2-1-docker服务命令" aria-label="Permalink to &quot;2.1  Docker服务命令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 开启</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl start docker</span></span>
<span class="line"><span style="color:#e1e4e8;"># 关闭</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl stop docker</span></span>
<span class="line"><span style="color:#e1e4e8;"># 重启</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl restart docker</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看状态</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl status docker</span></span>
<span class="line"><span style="color:#e1e4e8;"># 开启自动启动</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl enable docker</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 开启</span></span>
<span class="line"><span style="color:#24292e;">systemctl start docker</span></span>
<span class="line"><span style="color:#24292e;"># 关闭</span></span>
<span class="line"><span style="color:#24292e;">systemctl stop docker</span></span>
<span class="line"><span style="color:#24292e;"># 重启</span></span>
<span class="line"><span style="color:#24292e;">systemctl restart docker</span></span>
<span class="line"><span style="color:#24292e;"># 查看状态</span></span>
<span class="line"><span style="color:#24292e;">systemctl status docker</span></span>
<span class="line"><span style="color:#24292e;"># 开启自动启动</span></span>
<span class="line"><span style="color:#24292e;">systemctl enable docker</span></span></code></pre></div><h2 id="_2-2-docker镜像命令" tabindex="-1">2.2 Docker镜像命令 <a class="header-anchor" href="#_2-2-docker镜像命令" aria-label="Permalink to &quot;2.2  Docker镜像命令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 查看本地主机上的镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker images</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">* REPOSITORY：表示镜像的仓库源</span></span>
<span class="line"><span style="color:#e1e4e8;">* TAG：镜像的标签版本号</span></span>
<span class="line"><span style="color:#e1e4e8;">* IMAGE ID：镜像ID</span></span>
<span class="line"><span style="color:#e1e4e8;">* CREATED：镜像创建时间</span></span>
<span class="line"><span style="color:#e1e4e8;">* SIZE：镜像大小</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 搜索镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker search redis</span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装指定版本镜像，从网站hub.docker.com查找版本 （不写版本号，默认最新版）</span></span>
<span class="line"><span style="color:#e1e4e8;">docker pull redis:5.0</span></span>
<span class="line"><span style="color:#e1e4e8;">docker pull centos:7</span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装最新版本镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker pull redis</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker rmi redis:5.0</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker rmi 镜像id</span></span>
<span class="line"><span style="color:#e1e4e8;"># 强制删除</span></span>
<span class="line"><span style="color:#e1e4e8;">docker rmi -f 镜像id</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看镜像/容器/数据卷所占的空间</span></span>
<span class="line"><span style="color:#e1e4e8;">docker system df</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 查看本地主机上的镜像</span></span>
<span class="line"><span style="color:#24292e;">docker images</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">* REPOSITORY：表示镜像的仓库源</span></span>
<span class="line"><span style="color:#24292e;">* TAG：镜像的标签版本号</span></span>
<span class="line"><span style="color:#24292e;">* IMAGE ID：镜像ID</span></span>
<span class="line"><span style="color:#24292e;">* CREATED：镜像创建时间</span></span>
<span class="line"><span style="color:#24292e;">* SIZE：镜像大小</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 搜索镜像</span></span>
<span class="line"><span style="color:#24292e;">docker search redis</span></span>
<span class="line"><span style="color:#24292e;"># 安装指定版本镜像，从网站hub.docker.com查找版本 （不写版本号，默认最新版）</span></span>
<span class="line"><span style="color:#24292e;">docker pull redis:5.0</span></span>
<span class="line"><span style="color:#24292e;">docker pull centos:7</span></span>
<span class="line"><span style="color:#24292e;"># 安装最新版本镜像</span></span>
<span class="line"><span style="color:#24292e;">docker pull redis</span></span>
<span class="line"><span style="color:#24292e;"># 删除镜像</span></span>
<span class="line"><span style="color:#24292e;">docker rmi redis:5.0</span></span>
<span class="line"><span style="color:#24292e;"># 删除镜像</span></span>
<span class="line"><span style="color:#24292e;">docker rmi 镜像id</span></span>
<span class="line"><span style="color:#24292e;"># 强制删除</span></span>
<span class="line"><span style="color:#24292e;">docker rmi -f 镜像id</span></span>
<span class="line"><span style="color:#24292e;"># 查看镜像/容器/数据卷所占的空间</span></span>
<span class="line"><span style="color:#24292e;">docker system df</span></span></code></pre></div><p>虚悬镜像：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">repository和tag都是none的镜像称之为虚悬镜像，没有任何作用。</span></span>
<span class="line"><span style="color:#e1e4e8;">删除命令：</span></span>
<span class="line"><span style="color:#e1e4e8;">docker image prune</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">repository和tag都是none的镜像称之为虚悬镜像，没有任何作用。</span></span>
<span class="line"><span style="color:#24292e;">删除命令：</span></span>
<span class="line"><span style="color:#24292e;">docker image prune</span></span></code></pre></div><h2 id="_2-3-docker容器命令" tabindex="-1">2.3 Docker容器命令 <a class="header-anchor" href="#_2-3-docker容器命令" aria-label="Permalink to &quot;2.3  Docker容器命令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 创建容器，并进入容器终端	 -i表示保持运行 -t表示给容器分配终端</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -it --name c1 centos:7 /bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;"># 退出容器（容器也停止工作了）</span></span>
<span class="line"><span style="color:#e1e4e8;">exit</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看正在运行的容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker ps</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看所有容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker ps -a</span></span>
<span class="line"><span style="color:#e1e4e8;"># 创建容器，并运行在后台。可以随意进退</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -id --name c2 centos:7 </span></span>
<span class="line"><span style="color:#e1e4e8;"># 进入容器终端</span></span>
<span class="line"><span style="color:#e1e4e8;">docker exec -it c2 /bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;"># 停止容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker stop c2</span></span>
<span class="line"><span style="color:#e1e4e8;"># 强制停止</span></span>
<span class="line"><span style="color:#e1e4e8;">docker kill 容器ID或容器名</span></span>
<span class="line"><span style="color:#e1e4e8;"># 启动容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker start c2</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除容器 （容器id或容器名）</span></span>
<span class="line"><span style="color:#e1e4e8;">docker rm c2</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看容器信息</span></span>
<span class="line"><span style="color:#e1e4e8;">docker inspect c2</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看容器日志</span></span>
<span class="line"><span style="color:#e1e4e8;">docker logs 容器ID</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看容器内运行的进程</span></span>
<span class="line"><span style="color:#e1e4e8;">docker top 容器ID</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 拷贝文件到主机</span></span>
<span class="line"><span style="color:#e1e4e8;">docker cp 容器ID:容器内路径 目的主机路径</span></span>
<span class="line"><span style="color:#e1e4e8;"># 导入导出容器（注意：不是镜像）</span></span>
<span class="line"><span style="color:#e1e4e8;">docker export 容器ID &gt; xxx.tar</span></span>
<span class="line"><span style="color:#e1e4e8;">cat xxx.tar | docker import -镜像用户/镜像名:版本号</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 创建容器，并进入容器终端	 -i表示保持运行 -t表示给容器分配终端</span></span>
<span class="line"><span style="color:#24292e;">docker run -it --name c1 centos:7 /bin/bash</span></span>
<span class="line"><span style="color:#24292e;"># 退出容器（容器也停止工作了）</span></span>
<span class="line"><span style="color:#24292e;">exit</span></span>
<span class="line"><span style="color:#24292e;"># 查看正在运行的容器</span></span>
<span class="line"><span style="color:#24292e;">docker ps</span></span>
<span class="line"><span style="color:#24292e;"># 查看所有容器</span></span>
<span class="line"><span style="color:#24292e;">docker ps -a</span></span>
<span class="line"><span style="color:#24292e;"># 创建容器，并运行在后台。可以随意进退</span></span>
<span class="line"><span style="color:#24292e;">docker run -id --name c2 centos:7 </span></span>
<span class="line"><span style="color:#24292e;"># 进入容器终端</span></span>
<span class="line"><span style="color:#24292e;">docker exec -it c2 /bin/bash</span></span>
<span class="line"><span style="color:#24292e;"># 停止容器</span></span>
<span class="line"><span style="color:#24292e;">docker stop c2</span></span>
<span class="line"><span style="color:#24292e;"># 强制停止</span></span>
<span class="line"><span style="color:#24292e;">docker kill 容器ID或容器名</span></span>
<span class="line"><span style="color:#24292e;"># 启动容器</span></span>
<span class="line"><span style="color:#24292e;">docker start c2</span></span>
<span class="line"><span style="color:#24292e;"># 删除容器 （容器id或容器名）</span></span>
<span class="line"><span style="color:#24292e;">docker rm c2</span></span>
<span class="line"><span style="color:#24292e;"># 查看容器信息</span></span>
<span class="line"><span style="color:#24292e;">docker inspect c2</span></span>
<span class="line"><span style="color:#24292e;"># 查看容器日志</span></span>
<span class="line"><span style="color:#24292e;">docker logs 容器ID</span></span>
<span class="line"><span style="color:#24292e;"># 查看容器内运行的进程</span></span>
<span class="line"><span style="color:#24292e;">docker top 容器ID</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 拷贝文件到主机</span></span>
<span class="line"><span style="color:#24292e;">docker cp 容器ID:容器内路径 目的主机路径</span></span>
<span class="line"><span style="color:#24292e;"># 导入导出容器（注意：不是镜像）</span></span>
<span class="line"><span style="color:#24292e;">docker export 容器ID &gt; xxx.tar</span></span>
<span class="line"><span style="color:#24292e;">cat xxx.tar | docker import -镜像用户/镜像名:版本号</span></span></code></pre></div><h1 id="_3-docker容器的数据卷" tabindex="-1">3 Docker容器的数据卷 <a class="header-anchor" href="#_3-docker容器的数据卷" aria-label="Permalink to &quot;3  Docker容器的数据卷&quot;">​</a></h1><blockquote><p>坑：Docker挂载主机目录访问如果出现cannot open directory .: Permission denied</p><p>解决办法：在挂载目录后多加一个--privileged=true参数即可</p><p>原因：如果是CentOS7安全模块会比之前系统版本加强，不安全的会先禁止，所以目录挂载的情况被默认为不安全的行为。在SELinux里面挂载目录被禁止掉了额，如果要开启，我们一般使用--privileged=true命令，扩大容器的权限解决挂载目录没有权限的问题，也即使用该参数，container内的root拥有真正的root权限，否则，container内的root只是外部的一个普通用户权限。</p></blockquote><h2 id="_3-1-数据卷概念及作用" tabindex="-1">3.1 数据卷概念及作用 <a class="header-anchor" href="#_3-1-数据卷概念及作用" aria-label="Permalink to &quot;3.1  数据卷概念及作用&quot;">​</a></h2><p>容器的思考：</p><ul><li>Docker容器删除后，数据也被删除了吗？是的，这样很危险！</li><li>Docker容器和外部机器能直接交换文件？不能，需要通过宿主机！</li><li>容器之间想要进行数据交互？不能！</li></ul><p>数据卷概念的提出：</p><ul><li>数据卷是宿主机中的一个目录或文件；</li><li>当容器目录和数据卷目录绑定后，对方的修改会立即同步；</li><li>一个数据卷可以被多个容器同时挂载；</li><li>一个容器也可以挂载多个数据卷。</li><li>容器重启后，仍然可用。</li></ul><h2 id="_3-2-配置数据卷" tabindex="-1">3.2 配置数据卷 <a class="header-anchor" href="#_3-2-配置数据卷" aria-label="Permalink to &quot;3.2  配置数据卷&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 创建启动容器时，使用-v参数设置数据卷</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -v 宿主机目录:容器目录</span></span>
<span class="line"><span style="color:#e1e4e8;"># -d后台运行 -p端口 </span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -d -p 5000:5000 --name c1 -v /宿主机目录:/容器目录 --privileged=true centos:7</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 案例</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -it --name c1 -v /tmp/host_data:/tmp/docker_data centos</span></span>
<span class="line"><span style="color:#e1e4e8;">cd /tmp/docker_data</span></span>
<span class="line"><span style="color:#e1e4e8;">touche dockerin.txt</span></span>
<span class="line"><span style="color:#e1e4e8;">exit</span></span>
<span class="line"><span style="color:#e1e4e8;">cd /tmp/host_data 发现文件存在，说明数据卷设置成功</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 两个容器使用一个数据卷</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -it --name c2 -v ~/data:/root/data centos:7</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -it --name c3 -v ~/data:/root/data centos:7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 创建启动容器时，使用-v参数设置数据卷</span></span>
<span class="line"><span style="color:#24292e;">docker run -v 宿主机目录:容器目录</span></span>
<span class="line"><span style="color:#24292e;"># -d后台运行 -p端口 </span></span>
<span class="line"><span style="color:#24292e;">docker run -d -p 5000:5000 --name c1 -v /宿主机目录:/容器目录 --privileged=true centos:7</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 案例</span></span>
<span class="line"><span style="color:#24292e;">docker run -it --name c1 -v /tmp/host_data:/tmp/docker_data centos</span></span>
<span class="line"><span style="color:#24292e;">cd /tmp/docker_data</span></span>
<span class="line"><span style="color:#24292e;">touche dockerin.txt</span></span>
<span class="line"><span style="color:#24292e;">exit</span></span>
<span class="line"><span style="color:#24292e;">cd /tmp/host_data 发现文件存在，说明数据卷设置成功</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 两个容器使用一个数据卷</span></span>
<span class="line"><span style="color:#24292e;">docker run -it --name c2 -v ~/data:/root/data centos:7</span></span>
<span class="line"><span style="color:#24292e;">docker run -it --name c3 -v ~/data:/root/data centos:7</span></span></code></pre></div><h2 id="_3-3-数据卷容器" tabindex="-1">3.3 数据卷容器 <a class="header-anchor" href="#_3-3-数据卷容器" aria-label="Permalink to &quot;3.3  数据卷容器&quot;">​</a></h2><p>多个容器绑定一个数据卷，可以实现数据交换和共享。</p><p>同时，Docker也提供了数据卷容器（数据卷继承）来实现多个容器数据交换和共享。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 1. 创建启动c3数据卷容器，使用-v参数设置数据卷</span></span>
<span class="line"><span style="color:#e1e4e8;"># docker会自动分配一个容器目录</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -it --name c3 -v /volume centos:7</span></span>
<span class="line"><span style="color:#e1e4e8;"># 2. 创建启动c1c2容器，使用--volumes-from参数设置数据卷</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -it --name c1 --volumes-from c3 centos:7 /bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -it --name c2 --volumes-from c3 centos:7 /bin/bash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 1. 创建启动c3数据卷容器，使用-v参数设置数据卷</span></span>
<span class="line"><span style="color:#24292e;"># docker会自动分配一个容器目录</span></span>
<span class="line"><span style="color:#24292e;">docker run -it --name c3 -v /volume centos:7</span></span>
<span class="line"><span style="color:#24292e;"># 2. 创建启动c1c2容器，使用--volumes-from参数设置数据卷</span></span>
<span class="line"><span style="color:#24292e;">docker run -it --name c1 --volumes-from c3 centos:7 /bin/bash</span></span>
<span class="line"><span style="color:#24292e;">docker run -it --name c2 --volumes-from c3 centos:7 /bin/bash</span></span></code></pre></div><h1 id="_4-docker应用部署" tabindex="-1">4 Docker应用部署 <a class="header-anchor" href="#_4-docker应用部署" aria-label="Permalink to &quot;4  Docker应用部署&quot;">​</a></h1><h2 id="_4-1-mysql" tabindex="-1">4.1 MySQL <a class="header-anchor" href="#_4-1-mysql" aria-label="Permalink to &quot;4.1  MySQL&quot;">​</a></h2><p>登录docker hub，搜索mysql，找到版本，查看安装和使用镜像教程</p><p><img src="`+o+`" alt="image-20230315231551787"></p><h3 id="简单版" tabindex="-1">简单版 <a class="header-anchor" href="#简单版" aria-label="Permalink to &quot;简单版&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 搜索MySQL镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker search mysql</span></span>
<span class="line"><span style="color:#e1e4e8;"># 拉取MySQL镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker pull mysql:5.7</span></span>
<span class="line"><span style="color:#e1e4e8;"># 启动</span></span>
<span class="line"><span style="color:#e1e4e8;"># -p主机和容器端口绑定</span></span>
<span class="line"><span style="color:#e1e4e8;"># -e设置root密码</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker ps</span></span>
<span class="line"><span style="color:#e1e4e8;"># 进入容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker exec -it mysql /bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;">mysql -uroot -p</span></span>
<span class="line"><span style="color:#e1e4e8;">show databases;</span></span>
<span class="line"><span style="color:#e1e4e8;">create database db01;</span></span>
<span class="line"><span style="color:#e1e4e8;">use db01;</span></span>
<span class="line"><span style="color:#e1e4e8;">create table t1(id int, name varchar(20));</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into t1 values(1, &#39;tom&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">quit;</span></span>
<span class="line"><span style="color:#e1e4e8;"># 用客户端连接数据库</span></span>
<span class="line"><span style="color:#e1e4e8;">select * from t1;</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into t1 values(2, &#39;张三&#39;);  # 发现报错，因为字符编码不是utf8</span></span>
<span class="line"><span style="color:#e1e4e8;"># 退出容器</span></span>
<span class="line"><span style="color:#e1e4e8;">exit</span></span>
<span class="line"><span style="color:#e1e4e8;">docker ps</span></span>
<span class="line"><span style="color:#e1e4e8;">docker stop mysql # 停止容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker ps		# 查看运行中的容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker ps -a	# 查看所有容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker rm mysql # 删除容器</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 搜索MySQL镜像</span></span>
<span class="line"><span style="color:#24292e;">docker search mysql</span></span>
<span class="line"><span style="color:#24292e;"># 拉取MySQL镜像</span></span>
<span class="line"><span style="color:#24292e;">docker pull mysql:5.7</span></span>
<span class="line"><span style="color:#24292e;"># 启动</span></span>
<span class="line"><span style="color:#24292e;"># -p主机和容器端口绑定</span></span>
<span class="line"><span style="color:#24292e;"># -e设置root密码</span></span>
<span class="line"><span style="color:#24292e;">docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7</span></span>
<span class="line"><span style="color:#24292e;"># 查看容器</span></span>
<span class="line"><span style="color:#24292e;">docker ps</span></span>
<span class="line"><span style="color:#24292e;"># 进入容器</span></span>
<span class="line"><span style="color:#24292e;">docker exec -it mysql /bin/bash</span></span>
<span class="line"><span style="color:#24292e;">mysql -uroot -p</span></span>
<span class="line"><span style="color:#24292e;">show databases;</span></span>
<span class="line"><span style="color:#24292e;">create database db01;</span></span>
<span class="line"><span style="color:#24292e;">use db01;</span></span>
<span class="line"><span style="color:#24292e;">create table t1(id int, name varchar(20));</span></span>
<span class="line"><span style="color:#24292e;">insert into t1 values(1, &#39;tom&#39;);</span></span>
<span class="line"><span style="color:#24292e;">quit;</span></span>
<span class="line"><span style="color:#24292e;"># 用客户端连接数据库</span></span>
<span class="line"><span style="color:#24292e;">select * from t1;</span></span>
<span class="line"><span style="color:#24292e;">insert into t1 values(2, &#39;张三&#39;);  # 发现报错，因为字符编码不是utf8</span></span>
<span class="line"><span style="color:#24292e;"># 退出容器</span></span>
<span class="line"><span style="color:#24292e;">exit</span></span>
<span class="line"><span style="color:#24292e;">docker ps</span></span>
<span class="line"><span style="color:#24292e;">docker stop mysql # 停止容器</span></span>
<span class="line"><span style="color:#24292e;">docker ps		# 查看运行中的容器</span></span>
<span class="line"><span style="color:#24292e;">docker ps -a	# 查看所有容器</span></span>
<span class="line"><span style="color:#24292e;">docker rm mysql # 删除容器</span></span></code></pre></div><h3 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h3><ul><li>中文乱码</li><li>备份数据库</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 创建容器,设置端口映射、目录映射</span></span>
<span class="line"><span style="color:#e1e4e8;">mkdir ~/docker/mysql</span></span>
<span class="line"><span style="color:#e1e4e8;">cd ~/docker/mysql</span></span>
<span class="line"><span style="color:#e1e4e8;"># 为了方式容器被删除，实际开发必须配置以下：</span></span>
<span class="line"><span style="color:#e1e4e8;"># conf.d配置utf-8编码；</span></span>
<span class="line"><span style="color:#e1e4e8;"># logs日志</span></span>
<span class="line"><span style="color:#e1e4e8;"># data数据</span></span>
<span class="line"><span style="color:#e1e4e8;"># -e 指定密码（并且是必须）</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -d -p 3306:3306 --name mysql --privileged=true -v ~/docker/mysql/conf:/etc/mysql/conf.d -v ~/docker/mysql/logs:/logs -v ~/docker/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 修改utf-8编码</span></span>
<span class="line"><span style="color:#e1e4e8;">cd conf</span></span>
<span class="line"><span style="color:#e1e4e8;">vim my.cnf</span></span>
<span class="line"><span style="color:#e1e4e8;">###################以下内容不要修改，复制到文件</span></span>
<span class="line"><span style="color:#e1e4e8;">[client]</span></span>
<span class="line"><span style="color:#e1e4e8;">default_character_set=utf8</span></span>
<span class="line"><span style="color:#e1e4e8;">[mysqld]</span></span>
<span class="line"><span style="color:#e1e4e8;">collation_server = utf8_general_ci</span></span>
<span class="line"><span style="color:#e1e4e8;">character_set_server = utf8</span></span>
<span class="line"><span style="color:#e1e4e8;">##########################################</span></span>
<span class="line"><span style="color:#e1e4e8;"># 重启mysql</span></span>
<span class="line"><span style="color:#e1e4e8;">docker restart mysql</span></span>
<span class="line"><span style="color:#e1e4e8;"># 4. 操作容器中的MySQL</span></span>
<span class="line"><span style="color:#e1e4e8;">docker exec -it mysql /bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;">mysql -uroot -p</span></span>
<span class="line"><span style="color:#e1e4e8;">show variables like &#39;character%&#39;; 查看是否是utf-8编码</span></span>
<span class="line"><span style="color:#e1e4e8;">show databases;</span></span>
<span class="line"><span style="color:#e1e4e8;">create database db01;</span></span>
<span class="line"><span style="color:#e1e4e8;">show databases;</span></span>
<span class="line"><span style="color:#e1e4e8;">use db01;</span></span>
<span class="line"><span style="color:#e1e4e8;">create table t1(id int, name varchar(20));</span></span>
<span class="line"><span style="color:#e1e4e8;"># 用客户端连接数据库, 验证是否有乱码</span></span>
<span class="line"><span style="color:#e1e4e8;">select * from t1;</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into t1 values(1, &#39;张三&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"># 此时再删除容器，新建容器数据仍然存在</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 创建容器,设置端口映射、目录映射</span></span>
<span class="line"><span style="color:#24292e;">mkdir ~/docker/mysql</span></span>
<span class="line"><span style="color:#24292e;">cd ~/docker/mysql</span></span>
<span class="line"><span style="color:#24292e;"># 为了方式容器被删除，实际开发必须配置以下：</span></span>
<span class="line"><span style="color:#24292e;"># conf.d配置utf-8编码；</span></span>
<span class="line"><span style="color:#24292e;"># logs日志</span></span>
<span class="line"><span style="color:#24292e;"># data数据</span></span>
<span class="line"><span style="color:#24292e;"># -e 指定密码（并且是必须）</span></span>
<span class="line"><span style="color:#24292e;">docker run -d -p 3306:3306 --name mysql --privileged=true -v ~/docker/mysql/conf:/etc/mysql/conf.d -v ~/docker/mysql/logs:/logs -v ~/docker/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 修改utf-8编码</span></span>
<span class="line"><span style="color:#24292e;">cd conf</span></span>
<span class="line"><span style="color:#24292e;">vim my.cnf</span></span>
<span class="line"><span style="color:#24292e;">###################以下内容不要修改，复制到文件</span></span>
<span class="line"><span style="color:#24292e;">[client]</span></span>
<span class="line"><span style="color:#24292e;">default_character_set=utf8</span></span>
<span class="line"><span style="color:#24292e;">[mysqld]</span></span>
<span class="line"><span style="color:#24292e;">collation_server = utf8_general_ci</span></span>
<span class="line"><span style="color:#24292e;">character_set_server = utf8</span></span>
<span class="line"><span style="color:#24292e;">##########################################</span></span>
<span class="line"><span style="color:#24292e;"># 重启mysql</span></span>
<span class="line"><span style="color:#24292e;">docker restart mysql</span></span>
<span class="line"><span style="color:#24292e;"># 4. 操作容器中的MySQL</span></span>
<span class="line"><span style="color:#24292e;">docker exec -it mysql /bin/bash</span></span>
<span class="line"><span style="color:#24292e;">mysql -uroot -p</span></span>
<span class="line"><span style="color:#24292e;">show variables like &#39;character%&#39;; 查看是否是utf-8编码</span></span>
<span class="line"><span style="color:#24292e;">show databases;</span></span>
<span class="line"><span style="color:#24292e;">create database db01;</span></span>
<span class="line"><span style="color:#24292e;">show databases;</span></span>
<span class="line"><span style="color:#24292e;">use db01;</span></span>
<span class="line"><span style="color:#24292e;">create table t1(id int, name varchar(20));</span></span>
<span class="line"><span style="color:#24292e;"># 用客户端连接数据库, 验证是否有乱码</span></span>
<span class="line"><span style="color:#24292e;">select * from t1;</span></span>
<span class="line"><span style="color:#24292e;">insert into t1 values(1, &#39;张三&#39;);</span></span>
<span class="line"><span style="color:#24292e;"># 此时再删除容器，新建容器数据仍然存在</span></span></code></pre></div><h2 id="_4-2-redis" tabindex="-1">4.2 Redis <a class="header-anchor" href="#_4-2-redis" aria-label="Permalink to &quot;4.2 Redis&quot;">​</a></h2><h3 id="简单版-1" tabindex="-1">简单版 <a class="header-anchor" href="#简单版-1" aria-label="Permalink to &quot;简单版&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 获取镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker pull redis:6.0.8</span></span>
<span class="line"><span style="color:#e1e4e8;"># 启动容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -d -p 6379:6379 --name redis  redis:6.0.8</span></span>
<span class="line"><span style="color:#e1e4e8;"># 进入容器，并使用redis</span></span>
<span class="line"><span style="color:#e1e4e8;">docker exec -it redis /bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;">redis-cli</span></span>
<span class="line"><span style="color:#e1e4e8;">set k1 v1</span></span>
<span class="line"><span style="color:#e1e4e8;">quit</span></span>
<span class="line"><span style="color:#e1e4e8;"># 退出容器，并删除容器</span></span>
<span class="line"><span style="color:#e1e4e8;">exit</span></span>
<span class="line"><span style="color:#e1e4e8;">docker stop redis</span></span>
<span class="line"><span style="color:#e1e4e8;">docker rm redis</span></span>
<span class="line"><span style="color:#e1e4e8;">docker ps -a</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 获取镜像</span></span>
<span class="line"><span style="color:#24292e;">docker pull redis:6.0.8</span></span>
<span class="line"><span style="color:#24292e;"># 启动容器</span></span>
<span class="line"><span style="color:#24292e;">docker run -d -p 6379:6379 --name redis  redis:6.0.8</span></span>
<span class="line"><span style="color:#24292e;"># 进入容器，并使用redis</span></span>
<span class="line"><span style="color:#24292e;">docker exec -it redis /bin/bash</span></span>
<span class="line"><span style="color:#24292e;">redis-cli</span></span>
<span class="line"><span style="color:#24292e;">set k1 v1</span></span>
<span class="line"><span style="color:#24292e;">quit</span></span>
<span class="line"><span style="color:#24292e;"># 退出容器，并删除容器</span></span>
<span class="line"><span style="color:#24292e;">exit</span></span>
<span class="line"><span style="color:#24292e;">docker stop redis</span></span>
<span class="line"><span style="color:#24292e;">docker rm redis</span></span>
<span class="line"><span style="color:#24292e;">docker ps -a</span></span></code></pre></div><h3 id="常见问题-1" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题-1" aria-label="Permalink to &quot;常见问题&quot;">​</a></h3><ul><li>数据备份</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 先从redis安装包 copy一份redis.conf</span></span>
<span class="line"><span style="color:#e1e4e8;">mkdir ~/redis</span></span>
<span class="line"><span style="color:#e1e4e8;">cp redis.conf ~/redis/</span></span>
<span class="line"><span style="color:#e1e4e8;"># 修改下面几个配置</span></span>
<span class="line"><span style="color:#e1e4e8;">############################</span></span>
<span class="line"><span style="color:#e1e4e8;"># 1.redis设置密码 可选</span></span>
<span class="line"><span style="color:#e1e4e8;">requirepass 123</span></span>
<span class="line"><span style="color:#e1e4e8;"># 2.注释bind。允许redi外地连接</span></span>
<span class="line"><span style="color:#e1e4e8;">#bind 127.0.0.1</span></span>
<span class="line"><span style="color:#e1e4e8;"># 3.daemonize设置为no。因为该配置和docker参数冲突，会导致容器一直启动失败</span></span>
<span class="line"><span style="color:#e1e4e8;">daemonize no</span></span>
<span class="line"><span style="color:#e1e4e8;"># 4.开启redis数据持久化 可选</span></span>
<span class="line"><span style="color:#e1e4e8;">#appendonly yes</span></span>
<span class="line"><span style="color:#e1e4e8;">############################</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 启动（启动不成功，就是本地redis.conf有问题，可能和docker版本不匹配等）</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -d -p 6379:6379 --privileged=true --name redis -v ~/redis/redis.conf:/etc/redis/redis.conf -v ~/redis/data:/data redis:6.0.8 redis-server /etc/redis/redis.conf</span></span>
<span class="line"><span style="color:#e1e4e8;"># 进入容器，并使用redis</span></span>
<span class="line"><span style="color:#e1e4e8;">docker exec -it redis /bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;">redis-cli</span></span>
<span class="line"><span style="color:#e1e4e8;">quit</span></span>
<span class="line"><span style="color:#e1e4e8;"># 退出</span></span>
<span class="line"><span style="color:#e1e4e8;">exit</span></span>
<span class="line"><span style="color:#e1e4e8;">docker stop redis</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 先从redis安装包 copy一份redis.conf</span></span>
<span class="line"><span style="color:#24292e;">mkdir ~/redis</span></span>
<span class="line"><span style="color:#24292e;">cp redis.conf ~/redis/</span></span>
<span class="line"><span style="color:#24292e;"># 修改下面几个配置</span></span>
<span class="line"><span style="color:#24292e;">############################</span></span>
<span class="line"><span style="color:#24292e;"># 1.redis设置密码 可选</span></span>
<span class="line"><span style="color:#24292e;">requirepass 123</span></span>
<span class="line"><span style="color:#24292e;"># 2.注释bind。允许redi外地连接</span></span>
<span class="line"><span style="color:#24292e;">#bind 127.0.0.1</span></span>
<span class="line"><span style="color:#24292e;"># 3.daemonize设置为no。因为该配置和docker参数冲突，会导致容器一直启动失败</span></span>
<span class="line"><span style="color:#24292e;">daemonize no</span></span>
<span class="line"><span style="color:#24292e;"># 4.开启redis数据持久化 可选</span></span>
<span class="line"><span style="color:#24292e;">#appendonly yes</span></span>
<span class="line"><span style="color:#24292e;">############################</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 启动（启动不成功，就是本地redis.conf有问题，可能和docker版本不匹配等）</span></span>
<span class="line"><span style="color:#24292e;">docker run -d -p 6379:6379 --privileged=true --name redis -v ~/redis/redis.conf:/etc/redis/redis.conf -v ~/redis/data:/data redis:6.0.8 redis-server /etc/redis/redis.conf</span></span>
<span class="line"><span style="color:#24292e;"># 进入容器，并使用redis</span></span>
<span class="line"><span style="color:#24292e;">docker exec -it redis /bin/bash</span></span>
<span class="line"><span style="color:#24292e;">redis-cli</span></span>
<span class="line"><span style="color:#24292e;">quit</span></span>
<span class="line"><span style="color:#24292e;"># 退出</span></span>
<span class="line"><span style="color:#24292e;">exit</span></span>
<span class="line"><span style="color:#24292e;">docker stop redis</span></span></code></pre></div><h1 id="_5-镜像高级" tabindex="-1">5 镜像高级 <a class="header-anchor" href="#_5-镜像高级" aria-label="Permalink to &quot;5  镜像高级&quot;">​</a></h1><p><img src="`+c+`" alt="image-20221208232429008"></p><h2 id="_1-镜像原理" tabindex="-1">1 镜像原理 <a class="header-anchor" href="#_1-镜像原理" aria-label="Permalink to &quot;1  镜像原理&quot;">​</a></h2><p>思考：</p><ul><li>Docker镜像本质是什么？</li><li>Docker中CentOS镜像为什么只有200M，而CentOS安装包就要几个G？</li><li>Docker中Tomcat镜像为什么有500M，而Tomcat安装包只有70M?</li></ul><p>预备知识：</p><ul><li>Linux文件系统由bootfs和rootfs两部分组成，bootfs基本一样，rootfs不同厂商定制不同。</li></ul><p>镜像原理：</p><ul><li>Docker镜像由特殊的文件系统叠加而成；</li><li>最低层是bootfs，并使用宿主机的bootfs；</li><li>第二层是rootfs，称为base image；</li><li>然后再往上可以叠加其他的镜像文件；</li><li>镜像是只读的，镜像之上是容器，容器才是可写的。</li></ul><h2 id="_2-镜像制作" tabindex="-1">2 镜像制作 <a class="header-anchor" href="#_2-镜像制作" aria-label="Permalink to &quot;2  镜像制作&quot;">​</a></h2><p>容器可以转为镜像，镜像可以打包成压缩文件，这样就方便了部署。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 运行容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -it centos:7 /bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;"># 编辑一个文件，并保存</span></span>
<span class="line"><span style="color:#e1e4e8;">vi a.txt</span></span>
<span class="line"><span style="color:#e1e4e8;"># 退出</span></span>
<span class="line"><span style="color:#e1e4e8;">exit</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 首先：转成镜像</span></span>
<span class="line"><span style="color:#e1e4e8;"># docker commit 【-m=&quot;commit信息&quot;】 【-a=&quot;作者&quot;】 容器id 镜像名称:版本号</span></span>
<span class="line"><span style="color:#e1e4e8;">docker commit -m=&quot;edit file&quot; -a=&quot;tom&quot; 85f068a8e090 zjc/mycentos:1</span></span>
<span class="line"><span style="color:#e1e4e8;"># 然后：压缩</span></span>
<span class="line"><span style="color:#e1e4e8;"># docker save -o 压缩文件名称 镜像名称:版本号</span></span>
<span class="line"><span style="color:#e1e4e8;">docker save -o ./mycentos.tar zjc/mycentos:1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker rm 85f068a8e090</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker rmi zjc/mycentos:1</span></span>
<span class="line"><span style="color:#e1e4e8;"># 从文件加载镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker load -i mycentos.tar</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 除了save和load，还有export和import</span></span>
<span class="line"><span style="color:#e1e4e8;"># 容器直接导出</span></span>
<span class="line"><span style="color:#e1e4e8;">docker export 容器ID &gt; xxx.tar</span></span>
<span class="line"><span style="color:#e1e4e8;">或者</span></span>
<span class="line"><span style="color:#e1e4e8;">docker export xxx.tar 容器名</span></span>
<span class="line"><span style="color:#e1e4e8;"># 导入</span></span>
<span class="line"><span style="color:#e1e4e8;">docker import xxx.tar zjc/mycentos:1</span></span>
<span class="line"><span style="color:#e1e4e8;">或</span></span>
<span class="line"><span style="color:#e1e4e8;">cat mycentos.tar | docker import - zjc/mycentos:1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 运行容器</span></span>
<span class="line"><span style="color:#24292e;">docker run -it centos:7 /bin/bash</span></span>
<span class="line"><span style="color:#24292e;"># 编辑一个文件，并保存</span></span>
<span class="line"><span style="color:#24292e;">vi a.txt</span></span>
<span class="line"><span style="color:#24292e;"># 退出</span></span>
<span class="line"><span style="color:#24292e;">exit</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 首先：转成镜像</span></span>
<span class="line"><span style="color:#24292e;"># docker commit 【-m=&quot;commit信息&quot;】 【-a=&quot;作者&quot;】 容器id 镜像名称:版本号</span></span>
<span class="line"><span style="color:#24292e;">docker commit -m=&quot;edit file&quot; -a=&quot;tom&quot; 85f068a8e090 zjc/mycentos:1</span></span>
<span class="line"><span style="color:#24292e;"># 然后：压缩</span></span>
<span class="line"><span style="color:#24292e;"># docker save -o 压缩文件名称 镜像名称:版本号</span></span>
<span class="line"><span style="color:#24292e;">docker save -o ./mycentos.tar zjc/mycentos:1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 删除容器</span></span>
<span class="line"><span style="color:#24292e;">docker rm 85f068a8e090</span></span>
<span class="line"><span style="color:#24292e;"># 删除镜像</span></span>
<span class="line"><span style="color:#24292e;">docker rmi zjc/mycentos:1</span></span>
<span class="line"><span style="color:#24292e;"># 从文件加载镜像</span></span>
<span class="line"><span style="color:#24292e;">docker load -i mycentos.tar</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 除了save和load，还有export和import</span></span>
<span class="line"><span style="color:#24292e;"># 容器直接导出</span></span>
<span class="line"><span style="color:#24292e;">docker export 容器ID &gt; xxx.tar</span></span>
<span class="line"><span style="color:#24292e;">或者</span></span>
<span class="line"><span style="color:#24292e;">docker export xxx.tar 容器名</span></span>
<span class="line"><span style="color:#24292e;"># 导入</span></span>
<span class="line"><span style="color:#24292e;">docker import xxx.tar zjc/mycentos:1</span></span>
<span class="line"><span style="color:#24292e;">或</span></span>
<span class="line"><span style="color:#24292e;">cat mycentos.tar | docker import - zjc/mycentos:1</span></span></code></pre></div><blockquote><p>注意：制作镜像时，容器内挂载的目录不能复制。</p></blockquote><h2 id="_3-上传到阿里云仓库" tabindex="-1">3 上传到阿里云仓库 <a class="header-anchor" href="#_3-上传到阿里云仓库" aria-label="Permalink to &quot;3 上传到阿里云仓库&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">登录阿里云-&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">控制台-&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">容器镜像服务-&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">创建个人实例-&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">创建命名空间-&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">创建镜像仓库（选本地仓库，通过命令上传）-&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">按照阿里云提供的操作文档即可</span></span>
<span class="line"><span style="color:#e1e4e8;">docker login --username=ai0425 registry.cn-hangzhou.aliyuncs.com</span></span>
<span class="line"><span style="color:#e1e4e8;">docker tag [ImageId] registry.cn-hangzhou.aliyuncs.com/zhujinchong/mycentos:[镜像版本号]</span></span>
<span class="line"><span style="color:#e1e4e8;">docker push registry.cn-hangzhou.aliyuncs.com/zhujinchong/mycentos:[镜像版本号]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 拉取镜像验证是否已经上传</span></span>
<span class="line"><span style="color:#e1e4e8;">docker pull registry.cn-hangzhou.aliyuncs.com/zhujinchong/mycentos:[镜像版本号]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">登录阿里云-&gt;</span></span>
<span class="line"><span style="color:#24292e;">控制台-&gt;</span></span>
<span class="line"><span style="color:#24292e;">容器镜像服务-&gt;</span></span>
<span class="line"><span style="color:#24292e;">创建个人实例-&gt;</span></span>
<span class="line"><span style="color:#24292e;">创建命名空间-&gt;</span></span>
<span class="line"><span style="color:#24292e;">创建镜像仓库（选本地仓库，通过命令上传）-&gt;</span></span>
<span class="line"><span style="color:#24292e;">按照阿里云提供的操作文档即可</span></span>
<span class="line"><span style="color:#24292e;">docker login --username=ai0425 registry.cn-hangzhou.aliyuncs.com</span></span>
<span class="line"><span style="color:#24292e;">docker tag [ImageId] registry.cn-hangzhou.aliyuncs.com/zhujinchong/mycentos:[镜像版本号]</span></span>
<span class="line"><span style="color:#24292e;">docker push registry.cn-hangzhou.aliyuncs.com/zhujinchong/mycentos:[镜像版本号]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 拉取镜像验证是否已经上传</span></span>
<span class="line"><span style="color:#24292e;">docker pull registry.cn-hangzhou.aliyuncs.com/zhujinchong/mycentos:[镜像版本号]</span></span></code></pre></div><h2 id="_4-上传到私有仓库" tabindex="-1">4 上传到私有仓库 <a class="header-anchor" href="#_4-上传到私有仓库" aria-label="Permalink to &quot;4 上传到私有仓库&quot;">​</a></h2><p>像DockerHub、阿里云等公有仓库不太安全，可以使用官方提供的工具Docker Registry搭建私有仓库。</p><p><strong>搭建私有仓库</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 1、拉取私有仓库镜像 Docker Registry</span></span>
<span class="line"><span style="color:#e1e4e8;">docker pull registry</span></span>
<span class="line"><span style="color:#e1e4e8;"># 2、启动私有仓库容器，相当于本地有个DockerHub</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -id --name=registry -p 5000:5000 registry</span></span>
<span class="line"><span style="color:#e1e4e8;"># 3、打开浏览器 输入地址http://私有仓库服务器ip:5000/v2/_catalog，看到{&quot;repositories&quot;:[]} 表示私有仓库 搭建成功</span></span>
<span class="line"><span style="color:#e1e4e8;"># 4、修改daemon.json   </span></span>
<span class="line"><span style="color:#e1e4e8;">vim /etc/docker/daemon.json    </span></span>
<span class="line"><span style="color:#e1e4e8;"># 在上述文件中添加一个key，保存退出。此步用于让 docker 信任私有仓库地址；注意将私有仓库服务器ip修改为自己私有仓库服务器真实ip </span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;insecure-registries&quot;:[&quot;私有仓库服务器ip:5000&quot;]} </span></span>
<span class="line"><span style="color:#e1e4e8;"># 5、重启docker 服务 </span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl restart docker</span></span>
<span class="line"><span style="color:#e1e4e8;">docker start registry</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 1、拉取私有仓库镜像 Docker Registry</span></span>
<span class="line"><span style="color:#24292e;">docker pull registry</span></span>
<span class="line"><span style="color:#24292e;"># 2、启动私有仓库容器，相当于本地有个DockerHub</span></span>
<span class="line"><span style="color:#24292e;">docker run -id --name=registry -p 5000:5000 registry</span></span>
<span class="line"><span style="color:#24292e;"># 3、打开浏览器 输入地址http://私有仓库服务器ip:5000/v2/_catalog，看到{&quot;repositories&quot;:[]} 表示私有仓库 搭建成功</span></span>
<span class="line"><span style="color:#24292e;"># 4、修改daemon.json   </span></span>
<span class="line"><span style="color:#24292e;">vim /etc/docker/daemon.json    </span></span>
<span class="line"><span style="color:#24292e;"># 在上述文件中添加一个key，保存退出。此步用于让 docker 信任私有仓库地址；注意将私有仓库服务器ip修改为自己私有仓库服务器真实ip </span></span>
<span class="line"><span style="color:#24292e;">{&quot;insecure-registries&quot;:[&quot;私有仓库服务器ip:5000&quot;]} </span></span>
<span class="line"><span style="color:#24292e;"># 5、重启docker 服务 </span></span>
<span class="line"><span style="color:#24292e;">systemctl restart docker</span></span>
<span class="line"><span style="color:#24292e;">docker start registry</span></span></code></pre></div><p><strong>上传镜像到私有仓库</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 1、标记镜像为私有仓库的镜像     </span></span>
<span class="line"><span style="color:#e1e4e8;">docker tag centos:7 私有仓库服务器IP:5000/centos:7</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 2、上传标记的镜像     </span></span>
<span class="line"><span style="color:#e1e4e8;">docker push 私有仓库服务器IP:5000/centos:7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 1、标记镜像为私有仓库的镜像     </span></span>
<span class="line"><span style="color:#24292e;">docker tag centos:7 私有仓库服务器IP:5000/centos:7</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 2、上传标记的镜像     </span></span>
<span class="line"><span style="color:#24292e;">docker push 私有仓库服务器IP:5000/centos:7</span></span></code></pre></div><p><strong>从私有仓库拉取镜像</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#拉取镜像 </span></span>
<span class="line"><span style="color:#e1e4e8;">docker pull 私有仓库服务器ip:5000/centos:7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#拉取镜像 </span></span>
<span class="line"><span style="color:#24292e;">docker pull 私有仓库服务器ip:5000/centos:7</span></span></code></pre></div><h1 id="_6-dockerfile" tabindex="-1">6 Dockerfile <a class="header-anchor" href="#_6-dockerfile" aria-label="Permalink to &quot;6 Dockerfile&quot;">​</a></h1><h2 id="_1-概念" tabindex="-1">1 概念 <a class="header-anchor" href="#_1-概念" aria-label="Permalink to &quot;1 概念&quot;">​</a></h2><p>Dockerfile是用来构建Docker镜像的文本文件，是由一条条构建镜像所需的指令和参数构成的脚本。</p><p>Dockerfile内容基础知识</p><ul><li><p>每条保留字指令都必须为大写字母且后面要跟随至少一个参数</p></li><li><p>指令按照从上到下，顺序执行</p></li><li><p>#表示注释</p></li><li><p>每条指令都会创建一个新的镜像层并对镜像进行提交</p></li></ul><p>Docker执行Dockerfile的大致流程</p><ol><li>docker从基础镜像运行一个容器</li><li>执行一条指令并对容器作出修改</li><li>执行类似docker commit的操作提交一个新的镜像层</li><li>docker再基于刚提交的镜像运行一个新容器</li><li>执行dockerfile中的下一条指令直到所有指令都执行完成</li></ol><p><img src="`+t+`" alt="image-20221212230010384"></p><h2 id="_2-dockerfile常用关键字" tabindex="-1">2 Dockerfile常用关键字 <a class="header-anchor" href="#_2-dockerfile常用关键字" aria-label="Permalink to &quot;2 Dockerfile常用关键字&quot;">​</a></h2><p>从零开始来创建一个新的镜像。为此，我们需要创建一个Dockerfile文件，其中包含一组指令来告诉 Docker 如何构建我们的镜像。</p><p>示例1：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">FROM    centos:6.7</span></span>
<span class="line"><span style="color:#e1e4e8;">MAINTAINER      Fisher &quot;fisher@sudops.com&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">EXPOSE  80</span></span>
<span class="line"><span style="color:#e1e4e8;">CMD     /usr/sbin/sshd -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">FROM    centos:6.7</span></span>
<span class="line"><span style="color:#24292e;">MAINTAINER      Fisher &quot;fisher@sudops.com&quot;</span></span>
<span class="line"><span style="color:#24292e;">EXPOSE  80</span></span>
<span class="line"><span style="color:#24292e;">CMD     /usr/sbin/sshd -D</span></span></code></pre></div><p>示例2：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">FROM centos:7</span></span>
<span class="line"><span style="color:#e1e4e8;">MAINTAINER zzyy&lt;zzyybs@126.com&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">ENV MYPATH /usr/local</span></span>
<span class="line"><span style="color:#e1e4e8;">WORKDIR $MYPATH</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">RUN yum -y install vim</span></span>
<span class="line"><span style="color:#e1e4e8;">RUN yum -y install net-tools</span></span>
<span class="line"><span style="color:#e1e4e8;">RUN yum -y install glibc.i686</span></span>
<span class="line"><span style="color:#e1e4e8;">RUN mkdir /usr/local/java</span></span>
<span class="line"><span style="color:#e1e4e8;">ADD jdk-8u202-linux-x64.tar.gz /usr/local/java/    #安装包必须要和Dockerfile文件在同一位置</span></span>
<span class="line"><span style="color:#e1e4e8;">ENV JAVA_HOME /usr/local/java/jdk1.8.0_202A</span></span>
<span class="line"><span style="color:#e1e4e8;">ENV JRE_HOME $JAVA_HOME/jre</span></span>
<span class="line"><span style="color:#e1e4e8;">ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH</span></span>
<span class="line"><span style="color:#e1e4e8;">ENV PATH $JAVA_HOME/bin:$PATH</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">EXPOSE 80</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">CMD echo $MYPATH</span></span>
<span class="line"><span style="color:#e1e4e8;">CMD echo &quot;success--------------ok&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">CMD /bin/bash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">FROM centos:7</span></span>
<span class="line"><span style="color:#24292e;">MAINTAINER zzyy&lt;zzyybs@126.com&gt;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">ENV MYPATH /usr/local</span></span>
<span class="line"><span style="color:#24292e;">WORKDIR $MYPATH</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">RUN yum -y install vim</span></span>
<span class="line"><span style="color:#24292e;">RUN yum -y install net-tools</span></span>
<span class="line"><span style="color:#24292e;">RUN yum -y install glibc.i686</span></span>
<span class="line"><span style="color:#24292e;">RUN mkdir /usr/local/java</span></span>
<span class="line"><span style="color:#24292e;">ADD jdk-8u202-linux-x64.tar.gz /usr/local/java/    #安装包必须要和Dockerfile文件在同一位置</span></span>
<span class="line"><span style="color:#24292e;">ENV JAVA_HOME /usr/local/java/jdk1.8.0_202A</span></span>
<span class="line"><span style="color:#24292e;">ENV JRE_HOME $JAVA_HOME/jre</span></span>
<span class="line"><span style="color:#24292e;">ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH</span></span>
<span class="line"><span style="color:#24292e;">ENV PATH $JAVA_HOME/bin:$PATH</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">EXPOSE 80</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">CMD echo $MYPATH</span></span>
<span class="line"><span style="color:#24292e;">CMD echo &quot;success--------------ok&quot;</span></span>
<span class="line"><span style="color:#24292e;">CMD /bin/bash</span></span></code></pre></div><p>Dockerfile关键字</p><table><thead><tr><th>关键字</th><th>作用</th><th>备注</th></tr></thead><tbody><tr><td>FROM</td><td>指定父镜像</td><td>FROM centos:6.7</td></tr><tr><td>MAINTAINER</td><td>作者姓名和邮箱</td><td>MAINTAINER Fisher &quot;<a href="mailto:fisher@sudops.com" target="_blank" rel="noreferrer">fisher@sudops.com</a>&quot;</td></tr><tr><td>RUN</td><td>执行命令</td><td>RUN yum -y install vim</td></tr><tr><td>ENV</td><td>环境变量</td><td>ENV JAVA_HOME /usr/local/java/jdk1.8.0_171</td></tr><tr><td>WORKDIR</td><td>工作目录，指定容器内部的工作目录</td><td>WORKDIR /usr/local</td></tr><tr><td>COPY</td><td>复制文件</td><td></td></tr><tr><td>ADD</td><td>添加文件,会自动解压</td><td>ADD jdk-8u171-linux-x64.tar.gz /usr/local/java/</td></tr><tr><td>EXPOSE</td><td>暴露端口，定义容器运行的时候监听的端口</td><td>EXPOSE 80</td></tr><tr><td>CMD</td><td>容器启动命令</td><td>CMD /bin/bash</td></tr></tbody></table><h2 id="_3-案例" tabindex="-1">3 案例 <a class="header-anchor" href="#_3-案例" aria-label="Permalink to &quot;3 案例&quot;">​</a></h2><p>需求：自定义centos7镜像</p><ul><li>要求默认登陆路径为/usr</li><li>可以使用vim</li><li>安装jdk8 （准备好jdk包）</li></ul><p>步骤：</p><p>1、编辑文件： <code>vim centos_dockerfile</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">FROM centos:7</span></span>
<span class="line"><span style="color:#e1e4e8;">MAINTAINER xxx&lt;xxx@qq.com&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">WORKDIR /usr/local</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装vim</span></span>
<span class="line"><span style="color:#e1e4e8;">RUN yum install -y vim</span></span>
<span class="line"><span style="color:#e1e4e8;">#安装ifconfig命令查看网络IP</span></span>
<span class="line"><span style="color:#e1e4e8;">RUN yum -y install net-tools</span></span>
<span class="line"><span style="color:#e1e4e8;">#安装java8及lib库</span></span>
<span class="line"><span style="color:#e1e4e8;">RUN yum -y install glibc.i686</span></span>
<span class="line"><span style="color:#e1e4e8;">RUN mkdir /usr/local/java</span></span>
<span class="line"><span style="color:#e1e4e8;">#ADD是相对路径jar,把jdk-8u171-linux-x64.tar.gz添加到容器中,安装包必须要和Dockerfile文件在同一位置，ADD会自动解压</span></span>
<span class="line"><span style="color:#e1e4e8;">ADD jdk-8u171-linux-x64.tar.gz /usr/local/java/</span></span>
<span class="line"><span style="color:#e1e4e8;">#配置java环境变量</span></span>
<span class="line"><span style="color:#e1e4e8;">ENV JAVA_HOME /usr/local/java/jdk1.8.0_171</span></span>
<span class="line"><span style="color:#e1e4e8;">ENV JRE_HOME $JAVA_HOME/jre</span></span>
<span class="line"><span style="color:#e1e4e8;">ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH</span></span>
<span class="line"><span style="color:#e1e4e8;">ENV PATH $JAVA_HOME/bin:$PATH</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">CMD echo &quot;success--------------ok&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">CMD /bin/bash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">FROM centos:7</span></span>
<span class="line"><span style="color:#24292e;">MAINTAINER xxx&lt;xxx@qq.com&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">WORKDIR /usr/local</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 安装vim</span></span>
<span class="line"><span style="color:#24292e;">RUN yum install -y vim</span></span>
<span class="line"><span style="color:#24292e;">#安装ifconfig命令查看网络IP</span></span>
<span class="line"><span style="color:#24292e;">RUN yum -y install net-tools</span></span>
<span class="line"><span style="color:#24292e;">#安装java8及lib库</span></span>
<span class="line"><span style="color:#24292e;">RUN yum -y install glibc.i686</span></span>
<span class="line"><span style="color:#24292e;">RUN mkdir /usr/local/java</span></span>
<span class="line"><span style="color:#24292e;">#ADD是相对路径jar,把jdk-8u171-linux-x64.tar.gz添加到容器中,安装包必须要和Dockerfile文件在同一位置，ADD会自动解压</span></span>
<span class="line"><span style="color:#24292e;">ADD jdk-8u171-linux-x64.tar.gz /usr/local/java/</span></span>
<span class="line"><span style="color:#24292e;">#配置java环境变量</span></span>
<span class="line"><span style="color:#24292e;">ENV JAVA_HOME /usr/local/java/jdk1.8.0_171</span></span>
<span class="line"><span style="color:#24292e;">ENV JRE_HOME $JAVA_HOME/jre</span></span>
<span class="line"><span style="color:#24292e;">ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH</span></span>
<span class="line"><span style="color:#24292e;">ENV PATH $JAVA_HOME/bin:$PATH</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">CMD echo &quot;success--------------ok&quot;</span></span>
<span class="line"><span style="color:#24292e;">CMD /bin/bash</span></span></code></pre></div><p>2、使用dockerfile文件创建镜像：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 注意：最后有一个点</span></span>
<span class="line"><span style="color:#e1e4e8;">docker build -f ./centos_dockerfile -t my_centos:1 .</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 注意：最后有一个点</span></span>
<span class="line"><span style="color:#24292e;">docker build -f ./centos_dockerfile -t my_centos:1 .</span></span></code></pre></div><p>3、查看刚才的镜像：<code>docker images</code></p><h1 id="_7-docker网络" tabindex="-1">7 Docker网络 <a class="header-anchor" href="#_7-docker网络" aria-label="Permalink to &quot;7 Docker网络&quot;">​</a></h1><h2 id="_1-概念-1" tabindex="-1">1 概念 <a class="header-anchor" href="#_1-概念-1" aria-label="Permalink to &quot;1 概念&quot;">​</a></h2><blockquote><p>容器每次启动时，网络地址会变，所以要分配好网络。</p></blockquote><p>docker网络能干吗？</p><ul><li>容器间的互联和通信以及端口映射</li><li>容器IP变动时候可以通过服务名直接网络通信而不受到影响</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 查看docker网络模式的命令</span></span>
<span class="line"><span style="color:#e1e4e8;">docker network ls</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 查看docker网络模式的命令</span></span>
<span class="line"><span style="color:#24292e;">docker network ls</span></span></code></pre></div><p>网络模式简介</p><p><img src="`+r+'" alt="image-20221213221829300"></p><ul><li>bridge模式：为每一个容器分配、设置IP等，并将容器连接到docker0虚拟网桥，默认该模式。使用--network bridge指定，默认使用docker0</li><li>host模式：使用主机IP和端口。使用--network host指定</li><li>none模式：不进行任务网络设置。使用--network none指定</li><li>container模式：绑定别的容器，共享IP和端口。使用--network container:NAME或者容器ID指定</li></ul><h2 id="_2-bridge模式" tabindex="-1">2 bridge模式 <a class="header-anchor" href="#_2-bridge模式" aria-label="Permalink to &quot;2 bridge模式&quot;">​</a></h2><p>Docker 服务默认会创建一个 docker0 网桥（其上有一个 docker0 内部接口），该桥接网络的名称为docker0，它在内核层连通了其他的物理或虚拟网卡，这就将所有容器和本地主机都放到同一个物理网络。Docker 默认指定了 docker0 接口 的 IP 地址和子网掩码，让主机和容器之间可以通过网桥相互通信。</p><p>1 Docker使用Linux桥接，在宿主机虚拟一个Docker容器网桥(docker0)，Docker启动一个容器时会根据Docker网桥的网段分配给容器一个IP地址，称为Container-IP，同时Docker网桥是每个容器的默认网关。因为在同一宿主机内的容器都接入同一个网桥，这样容器之间就能够通过容器的Container-IP直接通信。</p><p>2 docker run 的时候，没有指定network的话默认使用的网桥模式就是bridge，使用的就是docker0。在宿主机ifconfig,就可以看到docker0和自己create的network(后面讲)eth0，eth1，eth2……代表网卡一，网卡二，网卡三……，lo代表127.0.0.1，即localhost，inet addr用来表示网卡的IP地址</p><p>3 网桥docker0创建一对对等虚拟设备接口一个叫veth，另一个叫eth0，成对匹配。</p><p>3.1 整个宿主机的网桥模式都是docker0，类似一个交换机有一堆接口，每个接口叫veth，在本地主机和容器内分别创建一个虚拟接口，并让他们彼此联通（这样一对接口叫veth pair）；</p><p>3.2 每个容器实例内部也有一块网卡，每个接口叫eth0；</p><p>3.3 docker0上面的每个veth匹配某个容器实例内部的eth0，两两配对，一一匹配。</p><p>通过上述，将宿主机上的所有容器都连接到这个内部网络上，两个容器在同一个网络下,会从这个网关下各自拿到分配的ip，此时两个容器的网络是互通的。</p><p><img src="'+i+'" alt="image-20221213224620709"></p><h2 id="_3-host模式" tabindex="-1">3 host模式 <a class="header-anchor" href="#_3-host模式" aria-label="Permalink to &quot;3 host模式&quot;">​</a></h2><p>直接使用宿主机的 IP 地址与外界进行通信，不再需要额外进行NAT 转换。</p><p>容器将不会获得一个独立的Network Namespace， 而是和宿主机共用一个Network Namespace。容器将不会虚拟出自己的网卡而是使用宿主机的IP和端口。</p><p><img src="'+y+'" alt="image-20221213225554962"></p><p>案例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">docker run -d -p 8083:8080 --network host --name c_mytomcat tomcat</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">docker run -d -p 8083:8080 --network host --name c_mytomcat tomcat</span></span></code></pre></div><p><img src="'+d+'" alt="image-20221213225719331"></p><p>问题：docke启动时总是遇见标题中的警告</p><p>原因：docker启动时指定--network=host或-net=host，如果还指定了-p映射端口，那这个时候就会有此警告，</p><p>并且通过-p设置的参数将不会起到任何作用，端口号会以主机端口号为主，重复时则递增。</p><p>解决：使用docker的其他网络模式，例如--network=bridge，这样就可以解决问题，或者直接无视。。。。O(∩_∩)O哈哈~</p><p>好处：外部可以访问宿主机IP，从而访问容器。</p><h2 id="_4-none模式" tabindex="-1">4 none模式 <a class="header-anchor" href="#_4-none模式" aria-label="Permalink to &quot;4 none模式&quot;">​</a></h2><p>在none模式下，并不为Docker容器进行任何网络配置。 也就是说，这个Docker容器没有网卡、IP、路由等信息，只有一个lo。需要我们自己为Docker容器添加网卡、配置IP等，否则没有网络。</p><h2 id="_5-container模式" tabindex="-1">5 container模式 <a class="header-anchor" href="#_5-container模式" aria-label="Permalink to &quot;5 container模式&quot;">​</a></h2><p>新建的容器和已经存在的一个容器共享一个网络ip配置而不是和宿主机共享。新创建的容器不会创建自己的网卡，配置自己的IP，而是和一个指定的容器共享IP、端口范围等。同样，两个容器除了网络方面，其他的如文件系统、进程列表等还是隔离的。</p><p><img src="'+k+`" alt="image-20221213230242541"></p><p>案例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Alpine Linux 是一款独立的、非商业的通用 Linux 发行版，专为追求安全性、简单性和资源效率的用户而设计。</span></span>
<span class="line"><span style="color:#e1e4e8;"># 镜像非常小巧，不到6M的大小，但是简单而安全，所以特别适合容器打包。</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -it --name alpine1  alpine /bin/sh</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -it --network container:alpine1 --name alpine2  alpine /bin/sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Alpine Linux 是一款独立的、非商业的通用 Linux 发行版，专为追求安全性、简单性和资源效率的用户而设计。</span></span>
<span class="line"><span style="color:#24292e;"># 镜像非常小巧，不到6M的大小，但是简单而安全，所以特别适合容器打包。</span></span>
<span class="line"><span style="color:#24292e;">docker run -it --name alpine1  alpine /bin/sh</span></span>
<span class="line"><span style="color:#24292e;">docker run -it --network container:alpine1 --name alpine2  alpine /bin/sh</span></span></code></pre></div><h2 id="_6-自定义网络" tabindex="-1">6 自定义网络 <a class="header-anchor" href="#_6-自定义网络" aria-label="Permalink to &quot;6 自定义网络&quot;">​</a></h2><p>案例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 打开两个终端，启动容器，互相ping</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -it -p 8083:8080 --name c_tomcat1 tomcat</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -it -p 8083:8080 --name c_tomcat2 tomcat</span></span>
<span class="line"><span style="color:#e1e4e8;">ping 172.17.0.2</span></span>
<span class="line"><span style="color:#e1e4e8;">ping 172.17.0.3</span></span>
<span class="line"><span style="color:#e1e4e8;"># 互相ping可以，但是ip是动态的。应该互相ping服务名，但是此时ping不通</span></span>
<span class="line"><span style="color:#e1e4e8;">ping c_tomcat1</span></span>
<span class="line"><span style="color:#e1e4e8;">ping c_tomcat2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 打开两个终端，启动容器，互相ping</span></span>
<span class="line"><span style="color:#24292e;">docker run -it -p 8083:8080 --name c_tomcat1 tomcat</span></span>
<span class="line"><span style="color:#24292e;">docker run -it -p 8083:8080 --name c_tomcat2 tomcat</span></span>
<span class="line"><span style="color:#24292e;">ping 172.17.0.2</span></span>
<span class="line"><span style="color:#24292e;">ping 172.17.0.3</span></span>
<span class="line"><span style="color:#24292e;"># 互相ping可以，但是ip是动态的。应该互相ping服务名，但是此时ping不通</span></span>
<span class="line"><span style="color:#24292e;">ping c_tomcat1</span></span>
<span class="line"><span style="color:#24292e;">ping c_tomcat2</span></span></code></pre></div><p>解决方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 先创建一个bridge模式的网络（自定义网络）</span></span>
<span class="line"><span style="color:#e1e4e8;">docker network create zzyy_network</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看</span></span>
<span class="line"><span style="color:#e1e4e8;">docker network ls</span></span>
<span class="line"><span style="color:#e1e4e8;"># 打开两个终端，互相ping服务名</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -it -p 8083:8080 --network zzyy_network --name c_tomcat1 tomcat</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -it -p 8083:8080 --network zzyy_network --name c_tomcat2 tomcat</span></span>
<span class="line"><span style="color:#e1e4e8;">ping c_tomcat1</span></span>
<span class="line"><span style="color:#e1e4e8;">ping c_tomcat2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 先创建一个bridge模式的网络（自定义网络）</span></span>
<span class="line"><span style="color:#24292e;">docker network create zzyy_network</span></span>
<span class="line"><span style="color:#24292e;"># 查看</span></span>
<span class="line"><span style="color:#24292e;">docker network ls</span></span>
<span class="line"><span style="color:#24292e;"># 打开两个终端，互相ping服务名</span></span>
<span class="line"><span style="color:#24292e;">docker run -it -p 8083:8080 --network zzyy_network --name c_tomcat1 tomcat</span></span>
<span class="line"><span style="color:#24292e;">docker run -it -p 8083:8080 --network zzyy_network --name c_tomcat2 tomcat</span></span>
<span class="line"><span style="color:#24292e;">ping c_tomcat1</span></span>
<span class="line"><span style="color:#24292e;">ping c_tomcat2</span></span></code></pre></div><p>问题结论</p><ul><li>自定义网络本身就维护好了主机名和ip的对应关系（ip和域名都能通）</li></ul><h2 id="_7-docker架构总结" tabindex="-1">7 Docker架构总结 <a class="header-anchor" href="#_7-docker架构总结" aria-label="Permalink to &quot;7 Docker架构总结&quot;">​</a></h2><p>从其架构和运行流程来看，Docker 是一个 C/S 模式的架构，后端是一个松耦合架构，众多模块各司其职。</p><p>Docker 运行的基本流程为：</p><p>1 用户是使用 Docker Client 与 Docker Daemon 建立通信，并发送请求给后者。</p><p>2 Docker Daemon 作为 Docker 架构中的主体部分，首先提供 Docker Server 的功能使其可以接受 Docker Client 的请求。</p><p>3 Docker Engine 执行 Docker 内部的一系列工作，每一项工作都是以一个 Job 的形式的存在。</p><p>4 Job 的运行过程中，当需要容器镜像时，则从 Docker Registry 中下载镜像，并通过镜像管理驱动 Graph driver将下载镜像以Graph的形式存储。</p><p>5 当需要为 Docker 创建网络环境时，通过网络管理驱动 Network driver 创建并配置 Docker 容器网络环境。</p><p>6 当需要限制 Docker 容器运行资源或执行用户指令等操作时，则通过 Execdriver 来完成。</p><p>7 Libcontainer是一项独立的容器管理包，Network driver以及Exec driver都是通过Libcontainer来实现具体对容器进行的操作。</p><p><img src="`+u+`" alt="image-20221213231757349"></p><h1 id="_8-docker服务编排" tabindex="-1">8 Docker服务编排 <a class="header-anchor" href="#_8-docker服务编排" aria-label="Permalink to &quot;8  Docker服务编排&quot;">​</a></h1><h2 id="_1-服务编排概念" tabindex="-1">1 服务编排概念 <a class="header-anchor" href="#_1-服务编排概念" aria-label="Permalink to &quot;1  服务编排概念&quot;">​</a></h2><p>Docker建议我们每一个容器中只运行一个服务,因为docker容器本身占用资源极少,所以最好是将每个服务单独的分割开来但是这样我们又面临了一个问题？</p><p>微服务架构的应用系统中一般包含若干个微服务，每个微服务一般都会部署多个实例，如果每个微服务都要手动启停，维护的工作量会很大。</p><ul><li>要从Dockerfile build image或者去dockerhub拉取image</li><li>要创建多个container</li><li>要管理这些container（启动停止删除）</li></ul><p>服务编排：按照一定的业务规则批量管理容器</p><p>Compose 是 Docker 公司推出的一个工具软件，可以管理多个 Docker 容器组成一个应用。你需要定义一个YAML 格式的配置文件docker-compose.yml，写好多个容器之间的调用关系。然后，只要一个命令，就能同时启动/关闭这些容器。</p><p>Docker Compose是一个编排多容器分布式部署的工具，提供命令集管理容器化应用的完整开发周期，包括服务构建、启动和停止。使用步骤：</p><ol><li>利用Dockerfile定义运行环境镜像；</li><li>使用docker-compose.yml定义组成应用的各服务；</li><li>运行docker-compose up启动应用。</li></ol><p>一个文件，两个要素：</p><ul><li>一个docker-compose.yml文件</li><li>服务（service）：一个个应用容器实例，比如订单微服务、库存微服务、mysql容器、nginx容器或者redis容器</li><li>工程（project）：由一组关联的应用容器组成的一个完整业务单元，在 docker-compose.yml 文件中定义。</li></ul><h2 id="_2-docker-compose安装" tabindex="-1">2 Docker Compose安装 <a class="header-anchor" href="#_2-docker-compose安装" aria-label="Permalink to &quot;2  Docker Compose安装&quot;">​</a></h2><blockquote><p>建议从官网看安装教程 <a href="https://docs.docker.com/compose/install/" target="_blank" rel="noreferrer">https://docs.docker.com/compose/install/</a></p></blockquote><p>安装Docker Compose</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Compose目前已经完全支持Linux、Mac OS和Windows，在我们安装Compose之前，需要先安装Docker。下面我 们以编译好的二进制包方式安装在Linux系统中。 </span></span>
<span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-L</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/docker/compose/releases/download/1.22.0/docker-compose-\`</span><span style="color:#B392F0;">uname</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">-</span><span style="color:#9ECBFF;">\`</span><span style="color:#B392F0;">uname</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#9ECBFF;">\`</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/bin/docker-compose</span></span>
<span class="line"><span style="color:#6A737D;"># 设置文件可执行权限 </span></span>
<span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">+x</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/bin/docker-compose</span></span>
<span class="line"><span style="color:#6A737D;"># 查看版本信息 </span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Compose目前已经完全支持Linux、Mac OS和Windows，在我们安装Compose之前，需要先安装Docker。下面我 们以编译好的二进制包方式安装在Linux系统中。 </span></span>
<span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-L</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/docker/compose/releases/download/1.22.0/docker-compose-\`</span><span style="color:#6F42C1;">uname</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-s</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">-</span><span style="color:#032F62;">\`</span><span style="color:#6F42C1;">uname</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-m</span><span style="color:#032F62;">\`</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">-o</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/bin/docker-compose</span></span>
<span class="line"><span style="color:#6A737D;"># 设置文件可执行权限 </span></span>
<span class="line"><span style="color:#6F42C1;">chmod</span><span style="color:#24292E;"> </span><span style="color:#032F62;">+x</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/bin/docker-compose</span></span>
<span class="line"><span style="color:#6A737D;"># 查看版本信息 </span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">version</span></span></code></pre></div><p>卸载Docker Compose</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 二进制包方式安装的，删除二进制文件即可</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/local/bin/docker-compose</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 二进制包方式安装的，删除二进制文件即可</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/local/bin/docker-compose</span></span></code></pre></div><h2 id="_3-案例-1" tabindex="-1">3 案例 <a class="header-anchor" href="#_3-案例-1" aria-label="Permalink to &quot;3  案例&quot;">​</a></h2><h3 id="不编排部署" tabindex="-1">不编排部署 <a class="header-anchor" href="#不编排部署" aria-label="Permalink to &quot;不编排部署&quot;">​</a></h3><p>1、前面章节有mysql镜像的使用方式，启动mysql。</p><p>2、创建spring-boot项目，能连接mysql数据库。</p><p>3、将spring-boot项目上传到服务器，编写docker file</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 基础镜像使用java</span></span>
<span class="line"><span style="color:#e1e4e8;">FROM java:8</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#类似于执行 linux指令</span></span>
<span class="line"><span style="color:#e1e4e8;">RUN mkdir /opt/app</span></span>
<span class="line"><span style="color:#e1e4e8;">#类似于linux copy指令</span></span>
<span class="line"><span style="color:#e1e4e8;">COPY SpringBootForDocker-1.0-SNAPSHOT.jar /opt/app/</span></span>
<span class="line"><span style="color:#e1e4e8;">#对外端口</span></span>
<span class="line"><span style="color:#e1e4e8;">EXPOSE 8080</span></span>
<span class="line"><span style="color:#e1e4e8;">#执行命令 java -jar /opt/app/demo-docker.jar</span></span>
<span class="line"><span style="color:#e1e4e8;">CMD [&quot;java&quot;, &quot;-jar&quot;, &quot;/opt/app/SpringBootForDocker-1.0-SNAPSHOT.jar&quot;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 基础镜像使用java</span></span>
<span class="line"><span style="color:#24292e;">FROM java:8</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#类似于执行 linux指令</span></span>
<span class="line"><span style="color:#24292e;">RUN mkdir /opt/app</span></span>
<span class="line"><span style="color:#24292e;">#类似于linux copy指令</span></span>
<span class="line"><span style="color:#24292e;">COPY SpringBootForDocker-1.0-SNAPSHOT.jar /opt/app/</span></span>
<span class="line"><span style="color:#24292e;">#对外端口</span></span>
<span class="line"><span style="color:#24292e;">EXPOSE 8080</span></span>
<span class="line"><span style="color:#24292e;">#执行命令 java -jar /opt/app/demo-docker.jar</span></span>
<span class="line"><span style="color:#24292e;">CMD [&quot;java&quot;, &quot;-jar&quot;, &quot;/opt/app/SpringBootForDocker-1.0-SNAPSHOT.jar&quot;]</span></span></code></pre></div><p>4、springboot项目制成镜像并启动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 制成镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker build -f spring_dockerfile -t springdemo:1 .</span></span>
<span class="line"><span style="color:#e1e4e8;"># 启动</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -d -p 8080:8080 --name springdemo springdemo:1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 制成镜像</span></span>
<span class="line"><span style="color:#24292e;">docker build -f spring_dockerfile -t springdemo:1 .</span></span>
<span class="line"><span style="color:#24292e;"># 启动</span></span>
<span class="line"><span style="color:#24292e;">docker run -d -p 8080:8080 --name springdemo springdemo:1</span></span></code></pre></div><h3 id="编排部署" tabindex="-1">编排部署 <a class="header-anchor" href="#编排部署" aria-label="Permalink to &quot;编排部署&quot;">​</a></h3><p>1、创建docker-compose目录</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/docker-compose</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/docker-compose</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/docker-compose</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/docker-compose</span></span></code></pre></div><p>2、编写 docker-compose.yml 文件</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">version:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;3&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">services:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">myapp:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">image:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">springdemo:1</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">container_name:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">springdemo</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ports:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;8080:8080&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">networks:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo_network</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">depends_on:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mysql:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">image:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql:5.7</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">container_name:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mysql</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">environment:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">MYSQL_ROOT_PASSWORD:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;123456&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">MYSQL_ALLOW_EMPTY_PASSWORD:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;no&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">MYSQL_DATABASE:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;test&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">MYSQL_USER:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;daedb&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">MYSQL_PASSWORD:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;daedb&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ports:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;3306:3306&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">volumes:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/root/docker/mysql/db:/var/lib/mysql</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/root/docker/mysql/conf/my.cnf:/etc/my.cnf</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/root/docker/mysql/init:/docker-entrypoint-initdb.d</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">networks:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">demo_network</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">command</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">--default-authentication-plugin=mysql_native_password</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 自定义网路名称</span></span>
<span class="line"><span style="color:#B392F0;">networks:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">demo_network:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">version:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;3&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">services:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">myapp:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">image:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">springdemo:1</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">container_name:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">springdemo</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ports:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;8080:8080&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">networks:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo_network</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">depends_on:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mysql:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">image:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql:5.7</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">container_name:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">environment:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">MYSQL_ROOT_PASSWORD:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;123456&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">MYSQL_ALLOW_EMPTY_PASSWORD:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;no&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">MYSQL_DATABASE:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;test&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">MYSQL_USER:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;daedb&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">MYSQL_PASSWORD:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;daedb&#39;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ports:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;3306:3306&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">volumes:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/root/docker/mysql/db:/var/lib/mysql</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/root/docker/mysql/conf/my.cnf:/etc/my.cnf</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/root/docker/mysql/init:/docker-entrypoint-initdb.d</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">networks:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">demo_network</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">command</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">--default-authentication-plugin=mysql_native_password</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 自定义网路名称</span></span>
<span class="line"><span style="color:#6F42C1;">networks:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">demo_network:</span></span></code></pre></div><p>3、springboot项目的mysql配置更换成容器示例的名称</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#    url: jdbc:mysql://192.168.221.101:3306/db01?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=true&amp;serverTimezone=UTC</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">url:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jdbc:mysql://mysql:3306/db01?useUnicode=</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">&amp;characterEncoding</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">utf-8</span><span style="color:#E1E4E8;">&amp;useSSL</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">&amp;serverTimezone</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">UTC</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#    url: jdbc:mysql://192.168.221.101:3306/db01?useUnicode=true&amp;characterEncoding=utf-8&amp;useSSL=true&amp;serverTimezone=UTC</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">url:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jdbc:mysql://mysql:3306/db01?useUnicode=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">&amp;characterEncoding</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">utf-8</span><span style="color:#24292E;">&amp;useSSL</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">&amp;serverTimezone</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">UTC</span></span></code></pre></div><p>4、打包项目，重新制成镜像springdemo:1</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">docker build -f spring_dockerfile -t springdemo:1 .</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">docker build -f spring_dockerfile -t springdemo:1 .</span></span></code></pre></div><p>5、启动</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 启动前先检查下是否有问题</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-q</span></span>
<span class="line"><span style="color:#6A737D;"># 启动服务</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">up</span></span>
<span class="line"><span style="color:#6A737D;"># 启动服务，并后台运行</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">up</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 启动前先检查下是否有问题</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-q</span></span>
<span class="line"><span style="color:#6A737D;"># 启动服务</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">up</span></span>
<span class="line"><span style="color:#6A737D;"># 启动服务，并后台运行</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">up</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span></span></code></pre></div><p>6、登录mysql容器，建表</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">docker exec -it mysql /bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;">mysql -uroot -p</span></span>
<span class="line"><span style="color:#e1e4e8;">create database db01;</span></span>
<span class="line"><span style="color:#e1e4e8;">use db01;</span></span>
<span class="line"><span style="color:#e1e4e8;">create table demo(id int, name varchar(20));</span></span>
<span class="line"><span style="color:#e1e4e8;">insret into demo values(1, &#39;tom&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">docker exec -it mysql /bin/bash</span></span>
<span class="line"><span style="color:#24292e;">mysql -uroot -p</span></span>
<span class="line"><span style="color:#24292e;">create database db01;</span></span>
<span class="line"><span style="color:#24292e;">use db01;</span></span>
<span class="line"><span style="color:#24292e;">create table demo(id int, name varchar(20));</span></span>
<span class="line"><span style="color:#24292e;">insret into demo values(1, &#39;tom&#39;);</span></span></code></pre></div><p>7、在浏览器中测试，服务关闭</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">down</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">down</span></span></code></pre></div><h2 id="_4-常用命令" tabindex="-1">4. 常用命令 <a class="header-anchor" href="#_4-常用命令" aria-label="Permalink to &quot;4. 常用命令&quot;">​</a></h2><p>以前的docker compose命令是 docker-compose xxx</p><p>现在的docker compose是docker的插件，所以命令是docker compose xxx</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">docker-compose -h                           # 查看帮助</span></span>
<span class="line"><span style="color:#e1e4e8;">docker-compose up                           # 启动所有docker-compose服务</span></span>
<span class="line"><span style="color:#e1e4e8;">docker-compose up -d                        # 启动所有docker-compose服务并后台运行</span></span>
<span class="line"><span style="color:#e1e4e8;">docker-compose down                         # 停止并删除容器、网络、卷、镜像。</span></span>
<span class="line"><span style="color:#e1e4e8;">docker-compose exec  yml里面的服务id          # 进入容器实例内部  docker-compose exec docker-compose.yml文件中写的服务id /bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;">docker-compose ps                      # 展示当前docker-compose编排过的运行的所有容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker-compose top                     # 展示当前docker-compose编排过的容器进程</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">docker-compose logs  yml里面的服务id     # 查看容器输出日志</span></span>
<span class="line"><span style="color:#e1e4e8;">dokcer-compose config     # 检查配置</span></span>
<span class="line"><span style="color:#e1e4e8;">dokcer-compose config -q  # 检查配置，有问题才有输出</span></span>
<span class="line"><span style="color:#e1e4e8;">docker-compose restart   # 重启服务</span></span>
<span class="line"><span style="color:#e1e4e8;">docker-compose start     # 启动服务</span></span>
<span class="line"><span style="color:#e1e4e8;">docker-compose stop      # 停止服务</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">docker-compose -h                           # 查看帮助</span></span>
<span class="line"><span style="color:#24292e;">docker-compose up                           # 启动所有docker-compose服务</span></span>
<span class="line"><span style="color:#24292e;">docker-compose up -d                        # 启动所有docker-compose服务并后台运行</span></span>
<span class="line"><span style="color:#24292e;">docker-compose down                         # 停止并删除容器、网络、卷、镜像。</span></span>
<span class="line"><span style="color:#24292e;">docker-compose exec  yml里面的服务id          # 进入容器实例内部  docker-compose exec docker-compose.yml文件中写的服务id /bin/bash</span></span>
<span class="line"><span style="color:#24292e;">docker-compose ps                      # 展示当前docker-compose编排过的运行的所有容器</span></span>
<span class="line"><span style="color:#24292e;">docker-compose top                     # 展示当前docker-compose编排过的容器进程</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">docker-compose logs  yml里面的服务id     # 查看容器输出日志</span></span>
<span class="line"><span style="color:#24292e;">dokcer-compose config     # 检查配置</span></span>
<span class="line"><span style="color:#24292e;">dokcer-compose config -q  # 检查配置，有问题才有输出</span></span>
<span class="line"><span style="color:#24292e;">docker-compose restart   # 重启服务</span></span>
<span class="line"><span style="color:#24292e;">docker-compose start     # 启动服务</span></span>
<span class="line"><span style="color:#24292e;">docker-compose stop      # 停止服务</span></span></code></pre></div><h1 id="_9-可视化工具" tabindex="-1">9 可视化工具 <a class="header-anchor" href="#_9-可视化工具" aria-label="Permalink to &quot;9 可视化工具&quot;">​</a></h1><p>介绍两个：</p><ul><li>轻量级：Portainer</li><li>重量级：CAdvisor监控收集数据+InfluxDB存储数据+Granfana展示图标 <ul><li>CAdvisor：容器资源监控工具，包括CUP、磁盘、网络、内存等。默认存储2分钟。</li><li>InfluxDB：开源分布式时序、事件和指标数据库，无需外部依赖。</li><li>Granfana：开源可视化平台，支持多种数据源：InfluxDB, MySQL, ES等。</li></ul></li></ul><p>其中CIG三剑客可以直接docker编排安装。略。</p>`,201),E=[h];function g(b,v,F,C,_,q){return n(),a("div",null,E)}const A=s(m,[["render",g]]);export{f as __pageData,A as default};
