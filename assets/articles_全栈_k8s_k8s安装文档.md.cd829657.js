import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const l="/assets/image-20230322225759347.d180bb70.png",p="/assets/image-20230322225904124.499c9026.png",o="/assets/image-20230322231006950.1662fec4.png",g=JSON.parse('{"title":"使用kubeadm快速部署集群","description":"","frontmatter":{},"headers":[],"relativePath":"articles/全栈/k8s/k8s安装文档.md","filePath":"articles/全栈/k8s/k8s安装文档.md","lastUpdated":1698165534000}'),c={name:"articles/全栈/k8s/k8s安装文档.md"},t=e(`<h1 id="使用kubeadm快速部署集群" tabindex="-1">使用kubeadm快速部署集群 <a class="header-anchor" href="#使用kubeadm快速部署集群" aria-label="Permalink to &quot;使用kubeadm快速部署集群&quot;">​</a></h1><p>kubeadm是官方社区推出的一个用于快速部署kubernetes集群的工具。</p><p>这个工具能通过两条指令完成一个kubernetes集群的部署：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 创建一个 Master 节点</span></span>
<span class="line"><span style="color:#e1e4e8;">$ kubeadm init</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 将一个 Node 节点加入到当前集群中</span></span>
<span class="line"><span style="color:#e1e4e8;">$ kubeadm join &lt;Master节点的IP和端口 &gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 创建一个 Master 节点</span></span>
<span class="line"><span style="color:#24292e;">$ kubeadm init</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 将一个 Node 节点加入到当前集群中</span></span>
<span class="line"><span style="color:#24292e;">$ kubeadm join &lt;Master节点的IP和端口 &gt;</span></span></code></pre></div><h2 id="_1-安装要求" tabindex="-1">1. 安装要求 <a class="header-anchor" href="#_1-安装要求" aria-label="Permalink to &quot;1. 安装要求&quot;">​</a></h2><p>在开始之前，部署Kubernetes集群机器需要满足以下几个条件：</p><ul><li>一台或多台机器，操作系统 CentOS7.x-86_x64</li><li>硬件配置：2GB或更多RAM，2个CPU或更多CPU，硬盘30GB或更多</li><li>可以访问外网，需要拉取镜像，如果服务器不能上网，需要提前下载镜像并导入节点</li><li>禁止swap分区</li></ul><h2 id="_2-准备环境" tabindex="-1">2. 准备环境 <a class="header-anchor" href="#_2-准备环境" aria-label="Permalink to &quot;2. 准备环境&quot;">​</a></h2><table><thead><tr><th>角色</th><th>IP</th></tr></thead><tbody><tr><td>k8s-master</td><td>192.168.221.101</td></tr><tr><td>k8s-node1</td><td>192.168.221.102</td></tr><tr><td>k8s-node2</td><td>192.168.221.103</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 关闭防火墙</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl stop firewalld</span></span>
<span class="line"><span style="color:#e1e4e8;"># k8smaster</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl disable firewalld</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看防火墙状态</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl status firewalld</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 关闭selinux</span></span>
<span class="line"><span style="color:#e1e4e8;"># 临时</span></span>
<span class="line"><span style="color:#e1e4e8;">setenforce 0 </span></span>
<span class="line"><span style="color:#e1e4e8;"># 永久 (修改文件SELINUX=disabled)</span></span>
<span class="line"><span style="color:#e1e4e8;">sed -i &#39;s/enforcing/disabled/&#39; /etc/selinux/config</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 关闭swap</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看swap状态</span></span>
<span class="line"><span style="color:#e1e4e8;">free -g</span></span>
<span class="line"><span style="color:#e1e4e8;"># 临时</span></span>
<span class="line"><span style="color:#e1e4e8;">swapoff -a</span></span>
<span class="line"><span style="color:#e1e4e8;"># 永久 (将/dev/mapper/centos-swap行注释掉)</span></span>
<span class="line"><span style="color:#e1e4e8;">sed -ri &#39;s/.*swap.*/#&amp;/&#39; /etc/fstab</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 根据规划设置主机名</span></span>
<span class="line"><span style="color:#e1e4e8;">hostnamectl set-hostname k8smaster</span></span>
<span class="line"><span style="color:#e1e4e8;">hostnamectl set-hostname k8snode1</span></span>
<span class="line"><span style="color:#e1e4e8;">hostnamectl set-hostname k8snode2</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看hostname</span></span>
<span class="line"><span style="color:#e1e4e8;">hostname</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 在master添加hosts</span></span>
<span class="line"><span style="color:#e1e4e8;">cat &gt;&gt; /etc/hosts &lt;&lt; EOF</span></span>
<span class="line"><span style="color:#e1e4e8;">192.168.221.101 k8smaster</span></span>
<span class="line"><span style="color:#e1e4e8;">192.168.221.102 k8snode1</span></span>
<span class="line"><span style="color:#e1e4e8;">192.168.221.103 k8snode2</span></span>
<span class="line"><span style="color:#e1e4e8;">EOF</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 将桥接的IPv4流量传递到iptables的链</span></span>
<span class="line"><span style="color:#e1e4e8;">cat &gt; /etc/sysctl.d/k8s.conf &lt;&lt; EOF</span></span>
<span class="line"><span style="color:#e1e4e8;">net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"><span style="color:#e1e4e8;">net.bridge.bridge-nf-call-iptables = 1</span></span>
<span class="line"><span style="color:#e1e4e8;">EOF</span></span>
<span class="line"><span style="color:#e1e4e8;"># 生效</span></span>
<span class="line"><span style="color:#e1e4e8;">sysctl --system</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 时间同步</span></span>
<span class="line"><span style="color:#e1e4e8;">yum install ntpdate -y</span></span>
<span class="line"><span style="color:#e1e4e8;">ntpdate time.windows.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 关闭防火墙</span></span>
<span class="line"><span style="color:#24292e;">systemctl stop firewalld</span></span>
<span class="line"><span style="color:#24292e;"># k8smaster</span></span>
<span class="line"><span style="color:#24292e;">systemctl disable firewalld</span></span>
<span class="line"><span style="color:#24292e;"># 查看防火墙状态</span></span>
<span class="line"><span style="color:#24292e;">systemctl status firewalld</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 关闭selinux</span></span>
<span class="line"><span style="color:#24292e;"># 临时</span></span>
<span class="line"><span style="color:#24292e;">setenforce 0 </span></span>
<span class="line"><span style="color:#24292e;"># 永久 (修改文件SELINUX=disabled)</span></span>
<span class="line"><span style="color:#24292e;">sed -i &#39;s/enforcing/disabled/&#39; /etc/selinux/config</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 关闭swap</span></span>
<span class="line"><span style="color:#24292e;"># 查看swap状态</span></span>
<span class="line"><span style="color:#24292e;">free -g</span></span>
<span class="line"><span style="color:#24292e;"># 临时</span></span>
<span class="line"><span style="color:#24292e;">swapoff -a</span></span>
<span class="line"><span style="color:#24292e;"># 永久 (将/dev/mapper/centos-swap行注释掉)</span></span>
<span class="line"><span style="color:#24292e;">sed -ri &#39;s/.*swap.*/#&amp;/&#39; /etc/fstab</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 根据规划设置主机名</span></span>
<span class="line"><span style="color:#24292e;">hostnamectl set-hostname k8smaster</span></span>
<span class="line"><span style="color:#24292e;">hostnamectl set-hostname k8snode1</span></span>
<span class="line"><span style="color:#24292e;">hostnamectl set-hostname k8snode2</span></span>
<span class="line"><span style="color:#24292e;"># 查看hostname</span></span>
<span class="line"><span style="color:#24292e;">hostname</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 在master添加hosts</span></span>
<span class="line"><span style="color:#24292e;">cat &gt;&gt; /etc/hosts &lt;&lt; EOF</span></span>
<span class="line"><span style="color:#24292e;">192.168.221.101 k8smaster</span></span>
<span class="line"><span style="color:#24292e;">192.168.221.102 k8snode1</span></span>
<span class="line"><span style="color:#24292e;">192.168.221.103 k8snode2</span></span>
<span class="line"><span style="color:#24292e;">EOF</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 将桥接的IPv4流量传递到iptables的链</span></span>
<span class="line"><span style="color:#24292e;">cat &gt; /etc/sysctl.d/k8s.conf &lt;&lt; EOF</span></span>
<span class="line"><span style="color:#24292e;">net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"><span style="color:#24292e;">net.bridge.bridge-nf-call-iptables = 1</span></span>
<span class="line"><span style="color:#24292e;">EOF</span></span>
<span class="line"><span style="color:#24292e;"># 生效</span></span>
<span class="line"><span style="color:#24292e;">sysctl --system</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 时间同步</span></span>
<span class="line"><span style="color:#24292e;">yum install ntpdate -y</span></span>
<span class="line"><span style="color:#24292e;">ntpdate time.windows.com</span></span></code></pre></div><h2 id="_3-1-安装docker" tabindex="-1">3.1 安装Docker <a class="header-anchor" href="#_3-1-安装docker" aria-label="Permalink to &quot;3.1 安装Docker&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 1、安装yum-utils，是为了使用yum-config-manager命令</span></span>
<span class="line"><span style="color:#e1e4e8;">yum install yum-utils</span></span>
<span class="line"><span style="color:#e1e4e8;"># 2、通过 yum-config-manager 设置镜像仓库地址阿里云 </span></span>
<span class="line"><span style="color:#e1e4e8;">yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 3、安装</span></span>
<span class="line"><span style="color:#e1e4e8;"># docker-ce : docker 引擎，社区版</span></span>
<span class="line"><span style="color:#e1e4e8;"># docker-ce-cli : docker 引擎的命令行界面，社区版</span></span>
<span class="line"><span style="color:#e1e4e8;"># containerd.io : 守护进程 containerd。 它在 docker 包上独立工作，并且是 docker 包所必需的。</span></span>
<span class="line"><span style="color:#e1e4e8;"># docker-compose-plugin： docker编排插件，后面用</span></span>
<span class="line"><span style="color:#e1e4e8;">yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 4、查看docker版本，验证是否验证成功</span></span>
<span class="line"><span style="color:#e1e4e8;">docker -v</span></span>
<span class="line"><span style="color:#e1e4e8;"># 如果失败，看是否关闭了防火墙</span></span>
<span class="line"><span style="color:#e1e4e8;"># 关闭</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl stop firewalld</span></span>
<span class="line"><span style="color:#e1e4e8;"># 禁止开机启动防火墙</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl disable firewalld</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 5、根据需要，设置开机自动启动</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl enable docker</span></span>
<span class="line"><span style="color:#e1e4e8;"># 6、启动 关闭 重启docker</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl start docker</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl stop docker</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl restart docker</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 7、配置镜像加速，因为国内从docker hub官方仓库下载较慢</span></span>
<span class="line"><span style="color:#e1e4e8;">* 镜像从Docker Hub下载。</span></span>
<span class="line"><span style="color:#e1e4e8;">* 国内从Docker Hub获取镜像时会遇到困难，所以必须配置加速器。</span></span>
<span class="line"><span style="color:#e1e4e8;">* 阿里镜像加速器、免费、参考官方：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 1、安装yum-utils，是为了使用yum-config-manager命令</span></span>
<span class="line"><span style="color:#24292e;">yum install yum-utils</span></span>
<span class="line"><span style="color:#24292e;"># 2、通过 yum-config-manager 设置镜像仓库地址阿里云 </span></span>
<span class="line"><span style="color:#24292e;">yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 3、安装</span></span>
<span class="line"><span style="color:#24292e;"># docker-ce : docker 引擎，社区版</span></span>
<span class="line"><span style="color:#24292e;"># docker-ce-cli : docker 引擎的命令行界面，社区版</span></span>
<span class="line"><span style="color:#24292e;"># containerd.io : 守护进程 containerd。 它在 docker 包上独立工作，并且是 docker 包所必需的。</span></span>
<span class="line"><span style="color:#24292e;"># docker-compose-plugin： docker编排插件，后面用</span></span>
<span class="line"><span style="color:#24292e;">yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 4、查看docker版本，验证是否验证成功</span></span>
<span class="line"><span style="color:#24292e;">docker -v</span></span>
<span class="line"><span style="color:#24292e;"># 如果失败，看是否关闭了防火墙</span></span>
<span class="line"><span style="color:#24292e;"># 关闭</span></span>
<span class="line"><span style="color:#24292e;">systemctl stop firewalld</span></span>
<span class="line"><span style="color:#24292e;"># 禁止开机启动防火墙</span></span>
<span class="line"><span style="color:#24292e;">systemctl disable firewalld</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 5、根据需要，设置开机自动启动</span></span>
<span class="line"><span style="color:#24292e;">systemctl enable docker</span></span>
<span class="line"><span style="color:#24292e;"># 6、启动 关闭 重启docker</span></span>
<span class="line"><span style="color:#24292e;">systemctl start docker</span></span>
<span class="line"><span style="color:#24292e;">systemctl stop docker</span></span>
<span class="line"><span style="color:#24292e;">systemctl restart docker</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 7、配置镜像加速，因为国内从docker hub官方仓库下载较慢</span></span>
<span class="line"><span style="color:#24292e;">* 镜像从Docker Hub下载。</span></span>
<span class="line"><span style="color:#24292e;">* 国内从Docker Hub获取镜像时会遇到困难，所以必须配置加速器。</span></span>
<span class="line"><span style="color:#24292e;">* 阿里镜像加速器、免费、参考官方：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors</span></span></code></pre></div><p>这是我个人的加速器：（提示Docker客户端要大于1.10.0）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sudo mkdir -p /etc/docker</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;registry-mirrors&quot;: [&quot;https://371h9tpb.mirror.aliyuncs.com&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">EOF</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo systemctl daemon-reload</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo systemctl restart docker</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sudo mkdir -p /etc/docker</span></span>
<span class="line"><span style="color:#24292e;">sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;registry-mirrors&quot;: [&quot;https://371h9tpb.mirror.aliyuncs.com&quot;]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">EOF</span></span>
<span class="line"><span style="color:#24292e;">sudo systemctl daemon-reload</span></span>
<span class="line"><span style="color:#24292e;">sudo systemctl restart docker</span></span></code></pre></div><h2 id="_3-2-安装k8s" tabindex="-1">3.2 安装k8s <a class="header-anchor" href="#_3-2-安装k8s" aria-label="Permalink to &quot;3.2 安装k8s&quot;">​</a></h2><p>添加阿里云YUM软件源</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">cat &gt; /etc/yum.repos.d/kubernetes.repo &lt;&lt; EOF</span></span>
<span class="line"><span style="color:#e1e4e8;">[kubernetes]</span></span>
<span class="line"><span style="color:#e1e4e8;">name=Kubernetes</span></span>
<span class="line"><span style="color:#e1e4e8;">baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64</span></span>
<span class="line"><span style="color:#e1e4e8;">enabled=1</span></span>
<span class="line"><span style="color:#e1e4e8;">gpgcheck=0</span></span>
<span class="line"><span style="color:#e1e4e8;">repo_gpgcheck=0</span></span>
<span class="line"><span style="color:#e1e4e8;">gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg</span></span>
<span class="line"><span style="color:#e1e4e8;">EOF</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">cat &gt; /etc/yum.repos.d/kubernetes.repo &lt;&lt; EOF</span></span>
<span class="line"><span style="color:#24292e;">[kubernetes]</span></span>
<span class="line"><span style="color:#24292e;">name=Kubernetes</span></span>
<span class="line"><span style="color:#24292e;">baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64</span></span>
<span class="line"><span style="color:#24292e;">enabled=1</span></span>
<span class="line"><span style="color:#24292e;">gpgcheck=0</span></span>
<span class="line"><span style="color:#24292e;">repo_gpgcheck=0</span></span>
<span class="line"><span style="color:#24292e;">gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg</span></span>
<span class="line"><span style="color:#24292e;">EOF</span></span></code></pre></div><p>由于版本更新频繁，这里指定版本号部署：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yum install -y kubelet-1.18.0 kubeadm-1.18.0 kubectl-1.18.0</span></span>
<span class="line"><span style="color:#e1e4e8;"># 设置开机启动</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl enable kubelet</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yum install -y kubelet-1.18.0 kubeadm-1.18.0 kubectl-1.18.0</span></span>
<span class="line"><span style="color:#24292e;"># 设置开机启动</span></span>
<span class="line"><span style="color:#24292e;">systemctl enable kubelet</span></span></code></pre></div><p>我安装提示：No package ... availabel</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 先执行下面命令。再添加阿里源，再安装成功了。</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo yum install epel-release</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 先执行下面命令。再添加阿里源，再安装成功了。</span></span>
<span class="line"><span style="color:#24292e;">sudo yum install epel-release</span></span></code></pre></div><h2 id="_4-1-部署kubernetes-master" tabindex="-1">4.1 部署Kubernetes Master <a class="header-anchor" href="#_4-1-部署kubernetes-master" aria-label="Permalink to &quot;4.1 部署Kubernetes Master&quot;">​</a></h2><p>在192.168.31.61（Master）执行。把命令复制到记事本，去掉斜杠。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 参数说明</span></span>
<span class="line"><span style="color:#e1e4e8;"># 第一行：本机IP</span></span>
<span class="line"><span style="color:#e1e4e8;"># 第二行：镜像源</span></span>
<span class="line"><span style="color:#e1e4e8;"># 第三行：版本</span></span>
<span class="line"><span style="color:#e1e4e8;"># 第四行、第五行：自己连接设置的IP，只要不冲突就行</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">kubeadm init \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  --apiserver-advertise-address=192.168.44.146 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  --image-repository registry.aliyuncs.com/google_containers \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  --kubernetes-version v1.18.0 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  --service-cidr=10.96.0.0/12 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">  --pod-network-cidr=10.244.0.0/16</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 参数说明</span></span>
<span class="line"><span style="color:#24292e;"># 第一行：本机IP</span></span>
<span class="line"><span style="color:#24292e;"># 第二行：镜像源</span></span>
<span class="line"><span style="color:#24292e;"># 第三行：版本</span></span>
<span class="line"><span style="color:#24292e;"># 第四行、第五行：自己连接设置的IP，只要不冲突就行</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">kubeadm init \\</span></span>
<span class="line"><span style="color:#24292e;">  --apiserver-advertise-address=192.168.44.146 \\</span></span>
<span class="line"><span style="color:#24292e;">  --image-repository registry.aliyuncs.com/google_containers \\</span></span>
<span class="line"><span style="color:#24292e;">  --kubernetes-version v1.18.0 \\</span></span>
<span class="line"><span style="color:#24292e;">  --service-cidr=10.96.0.0/12 \\</span></span>
<span class="line"><span style="color:#24292e;">  --pod-network-cidr=10.244.0.0/16</span></span></code></pre></div><p>上面命令会下载master节点需要的工具的docker镜像。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 查看镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker images</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 查看镜像</span></span>
<span class="line"><span style="color:#24292e;">docker images</span></span></code></pre></div><p><img src="`+l+'" alt="image-20230322225759347"></p><p>但是在下载过程中，由于默认拉取镜像地址k8s.gcr.io国内无法访问，会给你提示，你需要按提示完成接下来的步骤</p><p><img src="'+p+`" alt="image-20230322225904124"></p><p>根据提示做：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 第一个提示</span></span>
<span class="line"><span style="color:#6A737D;"># 为了启动你的集群，你需要运行下面命令</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.kube</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/kubernetes/admin.conf</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.kube/config</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">chown</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">$(</span><span style="color:#B392F0;">id</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#9ECBFF;">):$(</span><span style="color:#B392F0;">id</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#9ECBFF;">)</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/.kube/config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 第二个提示（这里不用做，需要在node节点做）</span></span>
<span class="line"><span style="color:#6A737D;"># 你可以运行下面命令，将working节点加入集群</span></span>
<span class="line"><span style="color:#B392F0;">kubeadm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">join</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">192.168</span><span style="color:#9ECBFF;">.221.101:6443</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--token</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">j5rgxs.fuxcb1igbulnnrfd</span><span style="color:#E1E4E8;">     </span><span style="color:#79B8FF;">--discovery-token-ca-cert-hash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sha256:a4add9b58803a06bc8a5f145fb9b147e3da6c0a86bdc2dc60773c74501161d78</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看k8s集群节点</span></span>
<span class="line"><span style="color:#B392F0;">kubectl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nodes</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 第一个提示</span></span>
<span class="line"><span style="color:#6A737D;"># 为了启动你的集群，你需要运行下面命令</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.kube</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cp</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/kubernetes/admin.conf</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.kube/config</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">chown</span><span style="color:#24292E;"> </span><span style="color:#032F62;">$(</span><span style="color:#6F42C1;">id</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-u</span><span style="color:#032F62;">):$(</span><span style="color:#6F42C1;">id</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-g</span><span style="color:#032F62;">)</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/.kube/config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 第二个提示（这里不用做，需要在node节点做）</span></span>
<span class="line"><span style="color:#6A737D;"># 你可以运行下面命令，将working节点加入集群</span></span>
<span class="line"><span style="color:#6F42C1;">kubeadm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">join</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">192.168</span><span style="color:#032F62;">.221.101:6443</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--token</span><span style="color:#24292E;"> </span><span style="color:#032F62;">j5rgxs.fuxcb1igbulnnrfd</span><span style="color:#24292E;">     </span><span style="color:#005CC5;">--discovery-token-ca-cert-hash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sha256:a4add9b58803a06bc8a5f145fb9b147e3da6c0a86bdc2dc60773c74501161d78</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 查看k8s集群节点</span></span>
<span class="line"><span style="color:#6F42C1;">kubectl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">get</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nodes</span></span></code></pre></div><h2 id="_4-2-加入kubernetes-node" tabindex="-1">4.2 加入Kubernetes Node <a class="header-anchor" href="#_4-2-加入kubernetes-node" aria-label="Permalink to &quot;4.2 加入Kubernetes Node&quot;">​</a></h2><p>在Node执行。</p><p>向集群添加新节点，执行master节点输出的kubeadm join命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">kubeadm join 192.168.221.101:6443 --token j5rgxs.fuxcb1igbulnnrfd     --discovery-token-ca-cert-hash sha256:a4add9b58803a06bc8a5f145fb9b147e3da6c0a86bdc2dc60773c74501161d78</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">kubeadm join 192.168.221.101:6443 --token j5rgxs.fuxcb1igbulnnrfd     --discovery-token-ca-cert-hash sha256:a4add9b58803a06bc8a5f145fb9b147e3da6c0a86bdc2dc60773c74501161d78</span></span></code></pre></div><p>默认token有效期为24小时，当过期之后，该token就不可用了。这时就需要重新创建token，操作如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 1. 主节点创建token</span></span>
<span class="line"><span style="color:#e1e4e8;">kubeadm token create --print-join-command</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 2. 节点</span></span>
<span class="line"><span style="color:#e1e4e8;">kubeadm reset</span></span>
<span class="line"><span style="color:#e1e4e8;"># 修改ip (如果下面输出是0就需要修改)</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /proc/sys/net/ipv4/ip_forward</span></span>
<span class="line"><span style="color:#e1e4e8;">sysctl -w net.ipv4.ip_forward=1</span></span>
<span class="line"><span style="color:#e1e4e8;"># 重新加入</span></span>
<span class="line"><span style="color:#e1e4e8;">kubeadm join 192.168.221.101:6443 --token j5rgxs.fuxcb1igbulnnrfd     --discovery-token-ca-cert-hash sha256:a4add9b58803a06bc8a5f145fb9b147e3da6c0a86bdc2dc60773c74501161d78</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 1. 主节点创建token</span></span>
<span class="line"><span style="color:#24292e;">kubeadm token create --print-join-command</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 2. 节点</span></span>
<span class="line"><span style="color:#24292e;">kubeadm reset</span></span>
<span class="line"><span style="color:#24292e;"># 修改ip (如果下面输出是0就需要修改)</span></span>
<span class="line"><span style="color:#24292e;">cat /proc/sys/net/ipv4/ip_forward</span></span>
<span class="line"><span style="color:#24292e;">sysctl -w net.ipv4.ip_forward=1</span></span>
<span class="line"><span style="color:#24292e;"># 重新加入</span></span>
<span class="line"><span style="color:#24292e;">kubeadm join 192.168.221.101:6443 --token j5rgxs.fuxcb1igbulnnrfd     --discovery-token-ca-cert-hash sha256:a4add9b58803a06bc8a5f145fb9b147e3da6c0a86bdc2dc60773c74501161d78</span></span></code></pre></div><h2 id="_5-部署cni网络插件" tabindex="-1">5. 部署CNI网络插件 <a class="header-anchor" href="#_5-部署cni网络插件" aria-label="Permalink to &quot;5. 部署CNI网络插件&quot;">​</a></h2><p>查看节点信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">kubectl get nodes</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">kubectl get nodes</span></span></code></pre></div><p><img src="`+o+`" alt="image-20230322231006950"></p><p>其中STATUS不太正确，需要部署CNI网络插件：</p><ul><li>cni是<code>容器网络接口</code>,作用是<code>实现容器跨主机网络通信</code>。主要有：flannel简单易用；calico复杂灵活；等。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 在mater执行（因为是国外的，基本下载不了）</span></span>
<span class="line"><span style="color:#e1e4e8;"># 下载flannel插件的yml</span></span>
<span class="line"><span style="color:#e1e4e8;"># wget https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml</span></span>
<span class="line"><span style="color:#e1e4e8;"># 修改kube-flannel.yml中的镜像仓库地址为国内源</span></span>
<span class="line"><span style="color:#e1e4e8;"># sed -i &#39;s/quay.io/quay-mirror.qiniu.com/g&#39; kube-flannel.yml</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 看附录文件，直接copy进去</span></span>
<span class="line"><span style="color:#e1e4e8;">vim kube-flannel.yml</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装网络插件</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl apply -f kube-flannel.yml</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看k8s集群节点信息</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get nodes</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 在mater执行（因为是国外的，基本下载不了）</span></span>
<span class="line"><span style="color:#24292e;"># 下载flannel插件的yml</span></span>
<span class="line"><span style="color:#24292e;"># wget https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml</span></span>
<span class="line"><span style="color:#24292e;"># 修改kube-flannel.yml中的镜像仓库地址为国内源</span></span>
<span class="line"><span style="color:#24292e;"># sed -i &#39;s/quay.io/quay-mirror.qiniu.com/g&#39; kube-flannel.yml</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 看附录文件，直接copy进去</span></span>
<span class="line"><span style="color:#24292e;">vim kube-flannel.yml</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 安装网络插件</span></span>
<span class="line"><span style="color:#24292e;">kubectl apply -f kube-flannel.yml</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看k8s集群节点信息</span></span>
<span class="line"><span style="color:#24292e;">kubectl get nodes</span></span></code></pre></div><h2 id="_6-测试kubernetes集群" tabindex="-1">6. 测试kubernetes集群 <a class="header-anchor" href="#_6-测试kubernetes集群" aria-label="Permalink to &quot;6. 测试kubernetes集群&quot;">​</a></h2><p>在Kubernetes集群中创建一个pod，验证是否正常运行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 安装nginx镜像</span></span>
<span class="line"><span style="color:#e1e4e8;"># 创建一个deployment类型的资源,它的名字就叫nginx,镜像就是nginx</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl create deployment nginx --image=nginx</span></span>
<span class="line"><span style="color:#e1e4e8;"># 暴露80端口</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl expose deployment nginx --port=80 --type=NodePort</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看对外端口（第二个端口）</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod,svc</span></span>
<span class="line"><span style="color:#e1e4e8;"># 浏览器访问 http://NodeIP:Port</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 安装nginx镜像</span></span>
<span class="line"><span style="color:#24292e;"># 创建一个deployment类型的资源,它的名字就叫nginx,镜像就是nginx</span></span>
<span class="line"><span style="color:#24292e;">kubectl create deployment nginx --image=nginx</span></span>
<span class="line"><span style="color:#24292e;"># 暴露80端口</span></span>
<span class="line"><span style="color:#24292e;">kubectl expose deployment nginx --port=80 --type=NodePort</span></span>
<span class="line"><span style="color:#24292e;"># 查看对外端口（第二个端口）</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod,svc</span></span>
<span class="line"><span style="color:#24292e;"># 浏览器访问 http://NodeIP:Port</span></span></code></pre></div><h1 id="附录" tabindex="-1">附录 <a class="header-anchor" href="#附录" aria-label="Permalink to &quot;附录&quot;">​</a></h1><h2 id="kube-flannel-yml" tabindex="-1">kube-flannel.yml <a class="header-anchor" href="#kube-flannel-yml" aria-label="Permalink to &quot;kube-flannel.yml&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">apiVersion: policy/v1beta1</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: PodSecurityPolicy</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: psp.flannel.unprivileged</span></span>
<span class="line"><span style="color:#e1e4e8;">  annotations:</span></span>
<span class="line"><span style="color:#e1e4e8;">    seccomp.security.alpha.kubernetes.io/allowedProfileNames: docker/default</span></span>
<span class="line"><span style="color:#e1e4e8;">    seccomp.security.alpha.kubernetes.io/defaultProfileName: docker/default</span></span>
<span class="line"><span style="color:#e1e4e8;">    apparmor.security.beta.kubernetes.io/allowedProfileNames: runtime/default</span></span>
<span class="line"><span style="color:#e1e4e8;">    apparmor.security.beta.kubernetes.io/defaultProfileName: runtime/default</span></span>
<span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">  privileged: false</span></span>
<span class="line"><span style="color:#e1e4e8;">  volumes:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - configMap</span></span>
<span class="line"><span style="color:#e1e4e8;">  - secret</span></span>
<span class="line"><span style="color:#e1e4e8;">  - emptyDir</span></span>
<span class="line"><span style="color:#e1e4e8;">  - hostPath</span></span>
<span class="line"><span style="color:#e1e4e8;">  allowedHostPaths:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - pathPrefix: &quot;/etc/cni/net.d&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  - pathPrefix: &quot;/etc/kube-flannel&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  - pathPrefix: &quot;/run/flannel&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  readOnlyRootFilesystem: false</span></span>
<span class="line"><span style="color:#e1e4e8;">  # Users and groups</span></span>
<span class="line"><span style="color:#e1e4e8;">  runAsUser:</span></span>
<span class="line"><span style="color:#e1e4e8;">    rule: RunAsAny</span></span>
<span class="line"><span style="color:#e1e4e8;">  supplementalGroups:</span></span>
<span class="line"><span style="color:#e1e4e8;">    rule: RunAsAny</span></span>
<span class="line"><span style="color:#e1e4e8;">  fsGroup:</span></span>
<span class="line"><span style="color:#e1e4e8;">    rule: RunAsAny</span></span>
<span class="line"><span style="color:#e1e4e8;">  # Privilege Escalation</span></span>
<span class="line"><span style="color:#e1e4e8;">  allowPrivilegeEscalation: false</span></span>
<span class="line"><span style="color:#e1e4e8;">  defaultAllowPrivilegeEscalation: false</span></span>
<span class="line"><span style="color:#e1e4e8;">  # Capabilities</span></span>
<span class="line"><span style="color:#e1e4e8;">  allowedCapabilities: [&#39;NET_ADMIN&#39;, &#39;NET_RAW&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">  defaultAddCapabilities: []</span></span>
<span class="line"><span style="color:#e1e4e8;">  requiredDropCapabilities: []</span></span>
<span class="line"><span style="color:#e1e4e8;">  # Host namespaces</span></span>
<span class="line"><span style="color:#e1e4e8;">  hostPID: false</span></span>
<span class="line"><span style="color:#e1e4e8;">  hostIPC: false</span></span>
<span class="line"><span style="color:#e1e4e8;">  hostNetwork: true</span></span>
<span class="line"><span style="color:#e1e4e8;">  hostPorts:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - min: 0</span></span>
<span class="line"><span style="color:#e1e4e8;">    max: 65535</span></span>
<span class="line"><span style="color:#e1e4e8;">  # SELinux</span></span>
<span class="line"><span style="color:#e1e4e8;">  seLinux:</span></span>
<span class="line"><span style="color:#e1e4e8;">    # SELinux is unused in CaaSP</span></span>
<span class="line"><span style="color:#e1e4e8;">    rule: &#39;RunAsAny&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: ClusterRole</span></span>
<span class="line"><span style="color:#e1e4e8;">apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">rules:</span></span>
<span class="line"><span style="color:#e1e4e8;">- apiGroups: [&#39;extensions&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">  resources: [&#39;podsecuritypolicies&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">  verbs: [&#39;use&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">  resourceNames: [&#39;psp.flannel.unprivileged&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">- apiGroups:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - &quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  resources:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - pods</span></span>
<span class="line"><span style="color:#e1e4e8;">  verbs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - get</span></span>
<span class="line"><span style="color:#e1e4e8;">- apiGroups:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - &quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  resources:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - nodes</span></span>
<span class="line"><span style="color:#e1e4e8;">  verbs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - list</span></span>
<span class="line"><span style="color:#e1e4e8;">  - watch</span></span>
<span class="line"><span style="color:#e1e4e8;">- apiGroups:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - &quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  resources:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - nodes/status</span></span>
<span class="line"><span style="color:#e1e4e8;">  verbs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - patch</span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: ClusterRoleBinding</span></span>
<span class="line"><span style="color:#e1e4e8;">apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">roleRef:</span></span>
<span class="line"><span style="color:#e1e4e8;">  apiGroup: rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#e1e4e8;">  kind: ClusterRole</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">subjects:</span></span>
<span class="line"><span style="color:#e1e4e8;">- kind: ServiceAccount</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">  namespace: kube-system</span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">apiVersion: v1</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: ServiceAccount</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">  namespace: kube-system</span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: ConfigMap</span></span>
<span class="line"><span style="color:#e1e4e8;">apiVersion: v1</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: kube-flannel-cfg</span></span>
<span class="line"><span style="color:#e1e4e8;">  namespace: kube-system</span></span>
<span class="line"><span style="color:#e1e4e8;">  labels:</span></span>
<span class="line"><span style="color:#e1e4e8;">    tier: node</span></span>
<span class="line"><span style="color:#e1e4e8;">    app: flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">data:</span></span>
<span class="line"><span style="color:#e1e4e8;">  cni-conf.json: |</span></span>
<span class="line"><span style="color:#e1e4e8;">    {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;name&quot;: &quot;cbr0&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;cniVersion&quot;: &quot;0.3.1&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;plugins&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;type&quot;: &quot;flannel&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;delegate&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;hairpinMode&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;isDefaultGateway&quot;: true</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">        {</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;type&quot;: &quot;portmap&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">          &quot;capabilities&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            &quot;portMappings&quot;: true</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      ]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  net-conf.json: |</span></span>
<span class="line"><span style="color:#e1e4e8;">    {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;Network&quot;: &quot;10.244.0.0/16&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;Backend&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;Type&quot;: &quot;vxlan&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">apiVersion: apps/v1</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: DaemonSet</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: kube-flannel-ds</span></span>
<span class="line"><span style="color:#e1e4e8;">  namespace: kube-system</span></span>
<span class="line"><span style="color:#e1e4e8;">  labels:</span></span>
<span class="line"><span style="color:#e1e4e8;">    tier: node</span></span>
<span class="line"><span style="color:#e1e4e8;">    app: flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">  selector:</span></span>
<span class="line"><span style="color:#e1e4e8;">    matchLabels:</span></span>
<span class="line"><span style="color:#e1e4e8;">      app: flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">  template:</span></span>
<span class="line"><span style="color:#e1e4e8;">    metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">      labels:</span></span>
<span class="line"><span style="color:#e1e4e8;">        tier: node</span></span>
<span class="line"><span style="color:#e1e4e8;">        app: flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">    spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">      affinity:</span></span>
<span class="line"><span style="color:#e1e4e8;">        nodeAffinity:</span></span>
<span class="line"><span style="color:#e1e4e8;">          requiredDuringSchedulingIgnoredDuringExecution:</span></span>
<span class="line"><span style="color:#e1e4e8;">            nodeSelectorTerms:</span></span>
<span class="line"><span style="color:#e1e4e8;">            - matchExpressions:</span></span>
<span class="line"><span style="color:#e1e4e8;">              - key: kubernetes.io/os</span></span>
<span class="line"><span style="color:#e1e4e8;">                operator: In</span></span>
<span class="line"><span style="color:#e1e4e8;">                values:</span></span>
<span class="line"><span style="color:#e1e4e8;">                - linux</span></span>
<span class="line"><span style="color:#e1e4e8;">      hostNetwork: true</span></span>
<span class="line"><span style="color:#e1e4e8;">      priorityClassName: system-node-critical</span></span>
<span class="line"><span style="color:#e1e4e8;">      tolerations:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - operator: Exists</span></span>
<span class="line"><span style="color:#e1e4e8;">        effect: NoSchedule</span></span>
<span class="line"><span style="color:#e1e4e8;">      serviceAccountName: flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">      initContainers:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: install-cni-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">        image: rancher/mirrored-flannelcni-flannel-cni-plugin:v1.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">        command:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - cp</span></span>
<span class="line"><span style="color:#e1e4e8;">        args:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - -f</span></span>
<span class="line"><span style="color:#e1e4e8;">        - /flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">        - /opt/cni/bin/flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">        volumeMounts:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - name: cni-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">          mountPath: /opt/cni/bin</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: install-cni</span></span>
<span class="line"><span style="color:#e1e4e8;">        image: quay.io/coreos/flannel:v0.15.1</span></span>
<span class="line"><span style="color:#e1e4e8;">        command:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - cp</span></span>
<span class="line"><span style="color:#e1e4e8;">        args:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - -f</span></span>
<span class="line"><span style="color:#e1e4e8;">        - /etc/kube-flannel/cni-conf.json</span></span>
<span class="line"><span style="color:#e1e4e8;">        - /etc/cni/net.d/10-flannel.conflist</span></span>
<span class="line"><span style="color:#e1e4e8;">        volumeMounts:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - name: cni</span></span>
<span class="line"><span style="color:#e1e4e8;">          mountPath: /etc/cni/net.d</span></span>
<span class="line"><span style="color:#e1e4e8;">        - name: flannel-cfg</span></span>
<span class="line"><span style="color:#e1e4e8;">          mountPath: /etc/kube-flannel/</span></span>
<span class="line"><span style="color:#e1e4e8;">      containers:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: kube-flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">        image: quay.io/coreos/flannel:v0.15.1</span></span>
<span class="line"><span style="color:#e1e4e8;">        command:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - /opt/bin/flanneld</span></span>
<span class="line"><span style="color:#e1e4e8;">        args:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - --ip-masq</span></span>
<span class="line"><span style="color:#e1e4e8;">        - --kube-subnet-mgr</span></span>
<span class="line"><span style="color:#e1e4e8;">        resources:</span></span>
<span class="line"><span style="color:#e1e4e8;">          requests:</span></span>
<span class="line"><span style="color:#e1e4e8;">            cpu: &quot;100m&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">            memory: &quot;50Mi&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">          limits:</span></span>
<span class="line"><span style="color:#e1e4e8;">            cpu: &quot;100m&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">            memory: &quot;50Mi&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        securityContext:</span></span>
<span class="line"><span style="color:#e1e4e8;">          privileged: false</span></span>
<span class="line"><span style="color:#e1e4e8;">          capabilities:</span></span>
<span class="line"><span style="color:#e1e4e8;">            add: [&quot;NET_ADMIN&quot;, &quot;NET_RAW&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">        env:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - name: POD_NAME</span></span>
<span class="line"><span style="color:#e1e4e8;">          valueFrom:</span></span>
<span class="line"><span style="color:#e1e4e8;">            fieldRef:</span></span>
<span class="line"><span style="color:#e1e4e8;">              fieldPath: metadata.name</span></span>
<span class="line"><span style="color:#e1e4e8;">        - name: POD_NAMESPACE</span></span>
<span class="line"><span style="color:#e1e4e8;">          valueFrom:</span></span>
<span class="line"><span style="color:#e1e4e8;">            fieldRef:</span></span>
<span class="line"><span style="color:#e1e4e8;">              fieldPath: metadata.namespace</span></span>
<span class="line"><span style="color:#e1e4e8;">        volumeMounts:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - name: run</span></span>
<span class="line"><span style="color:#e1e4e8;">          mountPath: /run/flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">        - name: flannel-cfg</span></span>
<span class="line"><span style="color:#e1e4e8;">          mountPath: /etc/kube-flannel/</span></span>
<span class="line"><span style="color:#e1e4e8;">      volumes:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: run</span></span>
<span class="line"><span style="color:#e1e4e8;">        hostPath:</span></span>
<span class="line"><span style="color:#e1e4e8;">          path: /run/flannel</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: cni-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">        hostPath:</span></span>
<span class="line"><span style="color:#e1e4e8;">          path: /opt/cni/bin</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: cni</span></span>
<span class="line"><span style="color:#e1e4e8;">        hostPath:</span></span>
<span class="line"><span style="color:#e1e4e8;">          path: /etc/cni/net.d</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: flannel-cfg</span></span>
<span class="line"><span style="color:#e1e4e8;">        configMap:</span></span>
<span class="line"><span style="color:#e1e4e8;">          name: kube-flannel-cfg</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">apiVersion: policy/v1beta1</span></span>
<span class="line"><span style="color:#24292e;">kind: PodSecurityPolicy</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: psp.flannel.unprivileged</span></span>
<span class="line"><span style="color:#24292e;">  annotations:</span></span>
<span class="line"><span style="color:#24292e;">    seccomp.security.alpha.kubernetes.io/allowedProfileNames: docker/default</span></span>
<span class="line"><span style="color:#24292e;">    seccomp.security.alpha.kubernetes.io/defaultProfileName: docker/default</span></span>
<span class="line"><span style="color:#24292e;">    apparmor.security.beta.kubernetes.io/allowedProfileNames: runtime/default</span></span>
<span class="line"><span style="color:#24292e;">    apparmor.security.beta.kubernetes.io/defaultProfileName: runtime/default</span></span>
<span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;">  privileged: false</span></span>
<span class="line"><span style="color:#24292e;">  volumes:</span></span>
<span class="line"><span style="color:#24292e;">  - configMap</span></span>
<span class="line"><span style="color:#24292e;">  - secret</span></span>
<span class="line"><span style="color:#24292e;">  - emptyDir</span></span>
<span class="line"><span style="color:#24292e;">  - hostPath</span></span>
<span class="line"><span style="color:#24292e;">  allowedHostPaths:</span></span>
<span class="line"><span style="color:#24292e;">  - pathPrefix: &quot;/etc/cni/net.d&quot;</span></span>
<span class="line"><span style="color:#24292e;">  - pathPrefix: &quot;/etc/kube-flannel&quot;</span></span>
<span class="line"><span style="color:#24292e;">  - pathPrefix: &quot;/run/flannel&quot;</span></span>
<span class="line"><span style="color:#24292e;">  readOnlyRootFilesystem: false</span></span>
<span class="line"><span style="color:#24292e;">  # Users and groups</span></span>
<span class="line"><span style="color:#24292e;">  runAsUser:</span></span>
<span class="line"><span style="color:#24292e;">    rule: RunAsAny</span></span>
<span class="line"><span style="color:#24292e;">  supplementalGroups:</span></span>
<span class="line"><span style="color:#24292e;">    rule: RunAsAny</span></span>
<span class="line"><span style="color:#24292e;">  fsGroup:</span></span>
<span class="line"><span style="color:#24292e;">    rule: RunAsAny</span></span>
<span class="line"><span style="color:#24292e;">  # Privilege Escalation</span></span>
<span class="line"><span style="color:#24292e;">  allowPrivilegeEscalation: false</span></span>
<span class="line"><span style="color:#24292e;">  defaultAllowPrivilegeEscalation: false</span></span>
<span class="line"><span style="color:#24292e;">  # Capabilities</span></span>
<span class="line"><span style="color:#24292e;">  allowedCapabilities: [&#39;NET_ADMIN&#39;, &#39;NET_RAW&#39;]</span></span>
<span class="line"><span style="color:#24292e;">  defaultAddCapabilities: []</span></span>
<span class="line"><span style="color:#24292e;">  requiredDropCapabilities: []</span></span>
<span class="line"><span style="color:#24292e;">  # Host namespaces</span></span>
<span class="line"><span style="color:#24292e;">  hostPID: false</span></span>
<span class="line"><span style="color:#24292e;">  hostIPC: false</span></span>
<span class="line"><span style="color:#24292e;">  hostNetwork: true</span></span>
<span class="line"><span style="color:#24292e;">  hostPorts:</span></span>
<span class="line"><span style="color:#24292e;">  - min: 0</span></span>
<span class="line"><span style="color:#24292e;">    max: 65535</span></span>
<span class="line"><span style="color:#24292e;">  # SELinux</span></span>
<span class="line"><span style="color:#24292e;">  seLinux:</span></span>
<span class="line"><span style="color:#24292e;">    # SELinux is unused in CaaSP</span></span>
<span class="line"><span style="color:#24292e;">    rule: &#39;RunAsAny&#39;</span></span>
<span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">kind: ClusterRole</span></span>
<span class="line"><span style="color:#24292e;">apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: flannel</span></span>
<span class="line"><span style="color:#24292e;">rules:</span></span>
<span class="line"><span style="color:#24292e;">- apiGroups: [&#39;extensions&#39;]</span></span>
<span class="line"><span style="color:#24292e;">  resources: [&#39;podsecuritypolicies&#39;]</span></span>
<span class="line"><span style="color:#24292e;">  verbs: [&#39;use&#39;]</span></span>
<span class="line"><span style="color:#24292e;">  resourceNames: [&#39;psp.flannel.unprivileged&#39;]</span></span>
<span class="line"><span style="color:#24292e;">- apiGroups:</span></span>
<span class="line"><span style="color:#24292e;">  - &quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">  resources:</span></span>
<span class="line"><span style="color:#24292e;">  - pods</span></span>
<span class="line"><span style="color:#24292e;">  verbs:</span></span>
<span class="line"><span style="color:#24292e;">  - get</span></span>
<span class="line"><span style="color:#24292e;">- apiGroups:</span></span>
<span class="line"><span style="color:#24292e;">  - &quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">  resources:</span></span>
<span class="line"><span style="color:#24292e;">  - nodes</span></span>
<span class="line"><span style="color:#24292e;">  verbs:</span></span>
<span class="line"><span style="color:#24292e;">  - list</span></span>
<span class="line"><span style="color:#24292e;">  - watch</span></span>
<span class="line"><span style="color:#24292e;">- apiGroups:</span></span>
<span class="line"><span style="color:#24292e;">  - &quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">  resources:</span></span>
<span class="line"><span style="color:#24292e;">  - nodes/status</span></span>
<span class="line"><span style="color:#24292e;">  verbs:</span></span>
<span class="line"><span style="color:#24292e;">  - patch</span></span>
<span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">kind: ClusterRoleBinding</span></span>
<span class="line"><span style="color:#24292e;">apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: flannel</span></span>
<span class="line"><span style="color:#24292e;">roleRef:</span></span>
<span class="line"><span style="color:#24292e;">  apiGroup: rbac.authorization.k8s.io</span></span>
<span class="line"><span style="color:#24292e;">  kind: ClusterRole</span></span>
<span class="line"><span style="color:#24292e;">  name: flannel</span></span>
<span class="line"><span style="color:#24292e;">subjects:</span></span>
<span class="line"><span style="color:#24292e;">- kind: ServiceAccount</span></span>
<span class="line"><span style="color:#24292e;">  name: flannel</span></span>
<span class="line"><span style="color:#24292e;">  namespace: kube-system</span></span>
<span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">apiVersion: v1</span></span>
<span class="line"><span style="color:#24292e;">kind: ServiceAccount</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: flannel</span></span>
<span class="line"><span style="color:#24292e;">  namespace: kube-system</span></span>
<span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">kind: ConfigMap</span></span>
<span class="line"><span style="color:#24292e;">apiVersion: v1</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: kube-flannel-cfg</span></span>
<span class="line"><span style="color:#24292e;">  namespace: kube-system</span></span>
<span class="line"><span style="color:#24292e;">  labels:</span></span>
<span class="line"><span style="color:#24292e;">    tier: node</span></span>
<span class="line"><span style="color:#24292e;">    app: flannel</span></span>
<span class="line"><span style="color:#24292e;">data:</span></span>
<span class="line"><span style="color:#24292e;">  cni-conf.json: |</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;name&quot;: &quot;cbr0&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;cniVersion&quot;: &quot;0.3.1&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;plugins&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;type&quot;: &quot;flannel&quot;,</span></span>
<span class="line"><span style="color:#24292e;">          &quot;delegate&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;hairpinMode&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">            &quot;isDefaultGateway&quot;: true</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        {</span></span>
<span class="line"><span style="color:#24292e;">          &quot;type&quot;: &quot;portmap&quot;,</span></span>
<span class="line"><span style="color:#24292e;">          &quot;capabilities&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">            &quot;portMappings&quot;: true</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      ]</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  net-conf.json: |</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;Network&quot;: &quot;10.244.0.0/16&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;Backend&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;Type&quot;: &quot;vxlan&quot;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">apiVersion: apps/v1</span></span>
<span class="line"><span style="color:#24292e;">kind: DaemonSet</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: kube-flannel-ds</span></span>
<span class="line"><span style="color:#24292e;">  namespace: kube-system</span></span>
<span class="line"><span style="color:#24292e;">  labels:</span></span>
<span class="line"><span style="color:#24292e;">    tier: node</span></span>
<span class="line"><span style="color:#24292e;">    app: flannel</span></span>
<span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;">  selector:</span></span>
<span class="line"><span style="color:#24292e;">    matchLabels:</span></span>
<span class="line"><span style="color:#24292e;">      app: flannel</span></span>
<span class="line"><span style="color:#24292e;">  template:</span></span>
<span class="line"><span style="color:#24292e;">    metadata:</span></span>
<span class="line"><span style="color:#24292e;">      labels:</span></span>
<span class="line"><span style="color:#24292e;">        tier: node</span></span>
<span class="line"><span style="color:#24292e;">        app: flannel</span></span>
<span class="line"><span style="color:#24292e;">    spec:</span></span>
<span class="line"><span style="color:#24292e;">      affinity:</span></span>
<span class="line"><span style="color:#24292e;">        nodeAffinity:</span></span>
<span class="line"><span style="color:#24292e;">          requiredDuringSchedulingIgnoredDuringExecution:</span></span>
<span class="line"><span style="color:#24292e;">            nodeSelectorTerms:</span></span>
<span class="line"><span style="color:#24292e;">            - matchExpressions:</span></span>
<span class="line"><span style="color:#24292e;">              - key: kubernetes.io/os</span></span>
<span class="line"><span style="color:#24292e;">                operator: In</span></span>
<span class="line"><span style="color:#24292e;">                values:</span></span>
<span class="line"><span style="color:#24292e;">                - linux</span></span>
<span class="line"><span style="color:#24292e;">      hostNetwork: true</span></span>
<span class="line"><span style="color:#24292e;">      priorityClassName: system-node-critical</span></span>
<span class="line"><span style="color:#24292e;">      tolerations:</span></span>
<span class="line"><span style="color:#24292e;">      - operator: Exists</span></span>
<span class="line"><span style="color:#24292e;">        effect: NoSchedule</span></span>
<span class="line"><span style="color:#24292e;">      serviceAccountName: flannel</span></span>
<span class="line"><span style="color:#24292e;">      initContainers:</span></span>
<span class="line"><span style="color:#24292e;">      - name: install-cni-plugin</span></span>
<span class="line"><span style="color:#24292e;">        image: rancher/mirrored-flannelcni-flannel-cni-plugin:v1.0.0</span></span>
<span class="line"><span style="color:#24292e;">        command:</span></span>
<span class="line"><span style="color:#24292e;">        - cp</span></span>
<span class="line"><span style="color:#24292e;">        args:</span></span>
<span class="line"><span style="color:#24292e;">        - -f</span></span>
<span class="line"><span style="color:#24292e;">        - /flannel</span></span>
<span class="line"><span style="color:#24292e;">        - /opt/cni/bin/flannel</span></span>
<span class="line"><span style="color:#24292e;">        volumeMounts:</span></span>
<span class="line"><span style="color:#24292e;">        - name: cni-plugin</span></span>
<span class="line"><span style="color:#24292e;">          mountPath: /opt/cni/bin</span></span>
<span class="line"><span style="color:#24292e;">      - name: install-cni</span></span>
<span class="line"><span style="color:#24292e;">        image: quay.io/coreos/flannel:v0.15.1</span></span>
<span class="line"><span style="color:#24292e;">        command:</span></span>
<span class="line"><span style="color:#24292e;">        - cp</span></span>
<span class="line"><span style="color:#24292e;">        args:</span></span>
<span class="line"><span style="color:#24292e;">        - -f</span></span>
<span class="line"><span style="color:#24292e;">        - /etc/kube-flannel/cni-conf.json</span></span>
<span class="line"><span style="color:#24292e;">        - /etc/cni/net.d/10-flannel.conflist</span></span>
<span class="line"><span style="color:#24292e;">        volumeMounts:</span></span>
<span class="line"><span style="color:#24292e;">        - name: cni</span></span>
<span class="line"><span style="color:#24292e;">          mountPath: /etc/cni/net.d</span></span>
<span class="line"><span style="color:#24292e;">        - name: flannel-cfg</span></span>
<span class="line"><span style="color:#24292e;">          mountPath: /etc/kube-flannel/</span></span>
<span class="line"><span style="color:#24292e;">      containers:</span></span>
<span class="line"><span style="color:#24292e;">      - name: kube-flannel</span></span>
<span class="line"><span style="color:#24292e;">        image: quay.io/coreos/flannel:v0.15.1</span></span>
<span class="line"><span style="color:#24292e;">        command:</span></span>
<span class="line"><span style="color:#24292e;">        - /opt/bin/flanneld</span></span>
<span class="line"><span style="color:#24292e;">        args:</span></span>
<span class="line"><span style="color:#24292e;">        - --ip-masq</span></span>
<span class="line"><span style="color:#24292e;">        - --kube-subnet-mgr</span></span>
<span class="line"><span style="color:#24292e;">        resources:</span></span>
<span class="line"><span style="color:#24292e;">          requests:</span></span>
<span class="line"><span style="color:#24292e;">            cpu: &quot;100m&quot;</span></span>
<span class="line"><span style="color:#24292e;">            memory: &quot;50Mi&quot;</span></span>
<span class="line"><span style="color:#24292e;">          limits:</span></span>
<span class="line"><span style="color:#24292e;">            cpu: &quot;100m&quot;</span></span>
<span class="line"><span style="color:#24292e;">            memory: &quot;50Mi&quot;</span></span>
<span class="line"><span style="color:#24292e;">        securityContext:</span></span>
<span class="line"><span style="color:#24292e;">          privileged: false</span></span>
<span class="line"><span style="color:#24292e;">          capabilities:</span></span>
<span class="line"><span style="color:#24292e;">            add: [&quot;NET_ADMIN&quot;, &quot;NET_RAW&quot;]</span></span>
<span class="line"><span style="color:#24292e;">        env:</span></span>
<span class="line"><span style="color:#24292e;">        - name: POD_NAME</span></span>
<span class="line"><span style="color:#24292e;">          valueFrom:</span></span>
<span class="line"><span style="color:#24292e;">            fieldRef:</span></span>
<span class="line"><span style="color:#24292e;">              fieldPath: metadata.name</span></span>
<span class="line"><span style="color:#24292e;">        - name: POD_NAMESPACE</span></span>
<span class="line"><span style="color:#24292e;">          valueFrom:</span></span>
<span class="line"><span style="color:#24292e;">            fieldRef:</span></span>
<span class="line"><span style="color:#24292e;">              fieldPath: metadata.namespace</span></span>
<span class="line"><span style="color:#24292e;">        volumeMounts:</span></span>
<span class="line"><span style="color:#24292e;">        - name: run</span></span>
<span class="line"><span style="color:#24292e;">          mountPath: /run/flannel</span></span>
<span class="line"><span style="color:#24292e;">        - name: flannel-cfg</span></span>
<span class="line"><span style="color:#24292e;">          mountPath: /etc/kube-flannel/</span></span>
<span class="line"><span style="color:#24292e;">      volumes:</span></span>
<span class="line"><span style="color:#24292e;">      - name: run</span></span>
<span class="line"><span style="color:#24292e;">        hostPath:</span></span>
<span class="line"><span style="color:#24292e;">          path: /run/flannel</span></span>
<span class="line"><span style="color:#24292e;">      - name: cni-plugin</span></span>
<span class="line"><span style="color:#24292e;">        hostPath:</span></span>
<span class="line"><span style="color:#24292e;">          path: /opt/cni/bin</span></span>
<span class="line"><span style="color:#24292e;">      - name: cni</span></span>
<span class="line"><span style="color:#24292e;">        hostPath:</span></span>
<span class="line"><span style="color:#24292e;">          path: /etc/cni/net.d</span></span>
<span class="line"><span style="color:#24292e;">      - name: flannel-cfg</span></span>
<span class="line"><span style="color:#24292e;">        configMap:</span></span>
<span class="line"><span style="color:#24292e;">          name: kube-flannel-cfg</span></span></code></pre></div>`,50),r=[t];function i(y,u,d,m,k,b){return n(),a("div",null,r)}const f=s(c,[["render",i]]);export{g as __pageData,f as default};
