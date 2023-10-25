import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.2516552c.js";const l="/assets/image-20230402210830436.e83c1e62.png",p="/assets/image-20230402221950551.094348d7.png",o="/assets/image-20230402222204453.e4ff26f8.png",t="/assets/image-20230402224300568.014917ba.png",c="/assets/image-20230402223714359.c74c07d6.png",i="/assets/image-20230416162001331.a8ec3a8f.png",r="/assets/image-20230416162154911.32453fbe.png",d="/assets/image-20230502122130989.56268fac.png",y="/assets/image-20230502122331001.1014ce20.png",u="/assets/image-20230507115804279.c5f61e6c.png",m="/assets/image-20230507121339745.c1611095.png",g="/assets/image-20230507144534131.32d66114.png",b="/assets/image-20230510230350154.2a8ca461.png",h="/assets/image-20230510225433462.ab18cad0.png",k="/assets/image-20230510231607572.fa597ae3.png",N=JSON.parse('{"title":"1  组件说明","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Ops/k8s/k8s教程.md","filePath":"articles/Ops/k8s/k8s教程.md","lastUpdated":null}'),P={name:"articles/Ops/k8s/k8s教程.md"},v=a('<h1 id="_1-组件说明" tabindex="-1">1 组件说明 <a class="header-anchor" href="#_1-组件说明" aria-label="Permalink to &quot;1  组件说明&quot;">​</a></h1><p><img src="'+l+'" alt="image-20230402210830436"></p><p>APISERVER: 所有服务访问的统一入口</p><p>ControllerManager: 维护副本期望数目</p><p>Secheduller: 调度任务，选择合适的节点进行分配</p><p>ETCD: 键值对数据库，存储k8s集群所有重要信息，可持久化</p><p>Kubelet: 直接和容器引擎交互，实现容器的生命周期的管理</p><p>Kube-proxy: 负责写入规则至IPTables、IPVS实现服务映射访问</p><p>pod: 管理容器的最小部署单元。</p><p>其他重要组件：</p><p>CoreDNS: 可以为集群中的SVC（service）创建一个域名IP的对应关系解析</p><p>Dashboard: 给k8s集群提供一个B/S结构的访问体系</p><p>INGRESS Controller: 官方只能实现四层代理，Ingress可以实现七层代理</p><p>Federation: 提供一个可以跨集群中心多k8s统一管理功能</p><p>Prometheus: 提供k8s集群的监控能力</p><p>ELK: 提供k8s集群日志统一分析接入平台。</p><h1 id="_2-基本概念" tabindex="-1">2 基本概念 <a class="header-anchor" href="#_2-基本概念" aria-label="Permalink to &quot;2 基本概念&quot;">​</a></h1><blockquote><p>这章对概念有个基本认识，不要求完全理解。后面慢慢理解。</p></blockquote><h2 id="pod" tabindex="-1">pod <a class="header-anchor" href="#pod" aria-label="Permalink to &quot;pod&quot;">​</a></h2><p>概念：</p><ul><li>pod是最小部署单元，是一组容器的集合，这些容器共享资源，同生共死。</li></ul><p>分类：</p><ul><li>自主式Pod：灭亡后不会重启，没人管。</li><li>控制管理器的Pod：可以通过controller（控制器/管理器）来管理。</li></ul><h2 id="controller" tabindex="-1">controller <a class="header-anchor" href="#controller" aria-label="Permalink to &quot;controller&quot;">​</a></h2><p>概念：</p><ul><li>controller是在集群上管理和运行应用的。</li><li>Pod是通过Controller实现应用的运维，比如伸缩、滚动升级等</li></ul><blockquote><p>个人理解：我一开始不理解controller和pod关系，可以简单认为controller是一个更高级的pod。controller相较于pod有更多的功能。</p></blockquote><p>controller分类：</p><ul><li>ReplicationController &amp; ReplicaSet &amp; Deployment</li><li>StatefullSet</li><li>DaemonSet</li><li>Job，Corn job</li></ul><p>ReplicationController 用来确保容器应用的副本数始终保持在用户定义的副本数，即如果有容器异常退出，会自动创建新的 Pod 来替代；而如果异常多出来的容器也会自动回收。在新版本的 Kubernetes 中建议使用 ReplicaSet 来取代 ReplicationController</p><p>ReplicaSet 跟 ReplicationController 没有本质的不同，只是名字不一样，并且ReplicaSet 支持集合式的 selector。虽然 ReplicaSet 可以独立使用，但一般还是建议使用 Deployment 来自动管理ReplicaSet ，这样就无需担心跟其他机制的不兼容问题（比如 ReplicaSet 不支持rolling-update 但 Deployment 支持）</p><p>Deployment 为 Pod 和 ReplicaSet 提供了一个声明式定义 (declarative) 方法，用来替代以前的 ReplicationController 来方便的管理应用。Deployment不创建pod，而是通过RS管理pod。典型的应用场景包括：</p><ul><li>定义 Deployment 来创建 Pod 和 ReplicaSet</li><li>滚动升级和回滚应用</li><li>扩容和缩容</li><li>暂停和继续 Deployment</li></ul><blockquote><p>Horizontal Pod Autoscaling （水平自动扩展pod）仅适用于 Deployment 和 ReplicaSet ，在 V1 版本中仅支持根据 Pod的 CPU 利用率扩缩容，在 v1alpha 版本中，支持根据内存和用户自定义的 metric 扩缩容。</p></blockquote><p><img src="'+p+'" alt="image-20230402221950551"></p><p>StatefulSet 是为了解决有状态服务的问题（对应 Deployments 和 ReplicaSets 是为无状态服务而设计），其应用场景包括：</p><ul><li>稳定的持久化存储，即 Pod 重新调度后还是能访问到相同的持久化数据，基于 PVC 来实现</li><li>稳定的网络标志，即 Pod 重新调度后其 PodName 和 HostName 不变，基于 Headless Service（即没有 Cluster IP 的 Service ）来实现</li><li>有序部署，有序扩展，即 Pod 是有顺序的，在部署或者扩展的时候要依据定义的顺序依次依次进行（即从 0 到 N-1，在下一个 Pod 运行之前所有之前的 Pod 必须都是 Running 和 Ready 状态），基于 init containers 来实现</li><li>有序收缩，有序删除（即从 N-1 到 0）</li></ul><p>DaemonSet 确保全部（或者一些）Node 上运行一个 Pod 的副本。当有 Node 加入集群时，也会为他们新增一个 Pod 。当有 Node 从集群移除时，这些 Pod 也会被回收。删除 DaemonSet 将会删除它创建的所有 Pod。使用 DaemonSet 的一些典型用法：</p><ul><li>运行集群存储 daemon，例如在每个 Node 上运行 glusterd、ceph。</li><li>在每个 Node 上运行日志收集 daemon，例如fluentd、logstash。</li><li>在每个 Node 上运行监控 daemon，例如 Prometheus Node Exporter</li></ul><p>Job 负责批处理任务，即仅执行一次的任务，它保证批处理任务的一个或多个 Pod 成功结束。</p><p>Cron Job 管理基于时间的 Job，即：</p><ul><li>在给定时间点只运行一次</li><li>周期性地在给定时间点运行</li></ul><h2 id="service" tabindex="-1">service <a class="header-anchor" href="#service" aria-label="Permalink to &quot;service&quot;">​</a></h2><p>通过创建 Service,可以为一组具有相同功能的容器应用提供一个统一的入口地址，并且将请求负载分发到后端的各个容器应用上。</p><p><img src="'+o+'" alt="image-20230402222204453"></p><h2 id="网络通信方式" tabindex="-1">网络通信方式 <a class="header-anchor" href="#网络通信方式" aria-label="Permalink to &quot;网络通信方式&quot;">​</a></h2><p>常见通信：</p><ul><li>一个Pod中的各个容器通信：共享一个网络空间，共享一个Linux协议栈</li><li>Pod1至Pod2在同一台机器：通过Docker网桥通信</li><li>Pod1至Pod2不在一台机器：Overlay Network（覆盖网络，下面将）</li><li>Pod和Service之间的通信：负载均衡实现</li></ul><p><img src="'+t+'" alt="image-20230402224300568"></p><p>为什么需要覆盖网络？</p><p>Kubernetes 的网络模型假定了所有 Pod 都在一个可以直接连通的扁平的网络空间中，这在GCE（Google Compute Engine）里面是现成的网络模型，Kubernetes 假定这个网络已经存在。而在私有云里搭建 Kubernetes 集群，就不能假定这个网络已经存在了。我们需要自己实现这个网络假设，将不同节点上的 Docker 容器之间的互相访问先打通，然后运行 Kubernetes。</p><p>Flannel:</p><p>Flannel 是 CoreOS 团队针对 Kubernetes 设计的一个网络规划服务，简单来说，它的功能是让集群中的不同节点主机创建的 Docker 容器都具有全集群唯一的虚拟IP地址。而且它还能在这些 IP 地址之间建立一个覆盖网络（Overlay Network），通过这个覆盖网络，将数据包原封不动地传递到目标容器内。</p><p>etcd之flannel提供说明：</p><ul><li>存储管理 Flannel 可分配的 IP 地址段资源</li><li>监控 ETCD 中每个 Pod 的实际地址，并在内存中建立维护 Pod 节点路由表</li></ul><p><img src="'+c+'" alt="image-20230402223714359"></p><p>ETCD 之 Flannel 提供说明：</p><ul><li>存储管理 Flannel 可分配的 IP 地址段资源</li><li>监控 ETCD 中每个 Pod 的实际地址，并在内存中建立维护 Pod 节点路由表</li></ul><p>不同情况下网络通信方式：</p><ul><li>同一个 Pod 内部通讯：同一个 Pod 共享同一个网络命名空间，共享同一个 Linux 协议栈</li><li>Pod1 至 Pod2： <ul><li>Pod1 与 Pod2 不在同一台主机，Pod的地址是与docker0在同一个网段的，但docker0网段与宿主机网卡是两个完全不同的IP网段，并且不同Node之间的通信只能通过宿主机的物理网卡进行。将Pod的IP和所在Node的IP关联起来，通过这个关联让Pod可以互相访问</li><li>Pod1 与 Pod2 在同一台机器，由 Docker0 网桥直接转发请求至 Pod2，不需要经过 Flannel演示</li></ul></li><li>Pod 至 Service 的网络：目前基于性能考虑，全部为 iptables 维护和转发</li><li>Pod 到外网：Pod 向外网发送请求，查找路由表, 转发数据包到宿主机的网卡，宿主网卡完成路由选择后，iptables执行Masquerade，把源 IP 更改为宿主网卡的 IP，然后向外网服务器发送请求</li><li>外网访问 Pod：Service</li></ul><h1 id="_3-集群搭建" tabindex="-1">3 集群搭建 <a class="header-anchor" href="#_3-集群搭建" aria-label="Permalink to &quot;3 集群搭建&quot;">​</a></h1><h1 id="_4-资源清单" tabindex="-1">4 资源清单 <a class="header-anchor" href="#_4-资源清单" aria-label="Permalink to &quot;4 资源清单&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>在 k8s 中，一般使用 yaml 格式的文件来创建符合我们预期期望的 pod ，这样的 yaml 文件我们一般称为资源清单</p><h2 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h2><blockquote><p>K8s 中所有的内容都抽象为资源，资源实例化之后，叫做对象</p></blockquote><p>集群资源级别分类</p><ul><li>名称空间级别</li><li>集群级别</li><li>元数据型</li></ul><p>名称空间级别：</p><ul><li>工作负载型资源( workload )：Pod、ReplicaSet、Deployment、StatefulSet、DaemonSet、Job、CronJob ( ReplicationController 在 v1.11 版本被废弃 )</li><li>服务发现及负载均衡型资源( ServiceDiscovery LoadBalance )：Service、Ingress、...</li><li>配置与存储型资源：Volume( 存储卷 )、CSI( 容器存储接口,可以扩展各种各样的第三方存储卷 )特殊类型的存储卷：ConfigMap( 当配置中心来使用的资源类型 )、Secret(保存敏感数据)、DownwardAPI(把外部环境中的信息输出给容器)</li></ul><p>集群级资源：Namespace、Node、Role、ClusterRole、RoleBinding、ClusterRoleBinding</p><p>元数据型资源：HPA、PodTemplate、LimitRange</p><h2 id="资源清单详解" tabindex="-1">资源清单详解 <a class="header-anchor" href="#资源清单详解" aria-label="Permalink to &quot;资源清单详解&quot;">​</a></h2><p>略（在后面代码中，逐渐学习）</p><p><img src="'+i+'" alt="image-20230416162001331"></p><h1 id="_5-pod" tabindex="-1">5 Pod <a class="header-anchor" href="#_5-pod" aria-label="Permalink to &quot;5 Pod&quot;">​</a></h1><h2 id="概念-1" tabindex="-1">概念 <a class="header-anchor" href="#概念-1" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>概念：</p><ul><li>pod是最小部署单元，是一组容器的集合，这些容器共享资源，同生共死。</li></ul><p>分类：</p><ul><li>自主式Pod：灭亡后不会重启，没人管。</li><li>控制管理器的Pod：可以通过controller（控制器/管理器）来管理。</li></ul><blockquote><p>个人理解：&quot;控制管理器的Pod&quot;就是指Controller，因为controller是一个更高级的pod</p></blockquote><p>本章主要用自主式Pod，讲解Pod的生命周期</p><h2 id="pod的生命周期" tabindex="-1">Pod的生命周期 <a class="header-anchor" href="#pod的生命周期" aria-label="Permalink to &quot;Pod的生命周期&quot;">​</a></h2><p><img src="'+r+`" alt="image-20230416162154911"></p><p>mainC: 可以看作主程序</p><p>initC：是一个用于初始化pod的容器</p><p>readness和liveness: 用于检测程序状态等</p><p>start和stop: 启动和结束做一些工作。</p><h2 id="init容器" tabindex="-1">init容器 <a class="header-anchor" href="#init容器" aria-label="Permalink to &quot;init容器&quot;">​</a></h2><p><strong>init容器讲解：</strong></p><p>Pod 能够具有多个容器，应用运行在容器里面，但是它也可能有一个或多个先于应用容器启动的 Init容器</p><p>Init 容器与普通的容器非常像，除了如下两点：</p><ul><li>Init 容器总是运行到成功完成为止</li><li>每个 Init 容器都必须在下一个 Init 容器启动之前成功完成</li></ul><p>如果 Pod 的 Init 容器失败，Kubernetes 会不断地重启该 Pod，直到 Init 容器成功为止。然而，如果 Pod 对应的 restartPolicy 为 Never，它不会重新启动</p><p>因为 Init 容器具有与应用程序容器分离的单独镜像，所以它们的启动相关代码具有如下优势：</p><ul><li>它们可以包含并运行实用工具，但是出于安全考虑，是不建议在应用程序容器镜像中包含这些实用工具的</li><li>它们可以包含使用工具和定制化代码来安装，但是不能出现在应用程序镜像中。例如，创建镜像没必要 FROM 另一个镜像，只需要在安装过程中使用类似 sed、awk、python 或 dig这样的工具。</li><li>应用程序镜像可以分离出创建和部署的角色，而没有必要联合它们构建一个单独的镜像。</li><li>Init 容器使用 Linux Namespace，所以相对应用程序容器来说具有不同的文件系统视图。因此，它们能够具有访问 Secret 的权限，而应用程序容器则不能。</li></ul><p>特殊说明</p><ul><li>在 Pod 启动过程中，Init 容器会按顺序在网络和数据卷初始化之后启动。每个容器必须在下一个容器启动之前成功退出</li><li>如果由于运行时或失败退出，将导致容器启动失败，它会根据 Pod 的 restartPolicy 指定的策略进行重试。然而，如果 Pod 的 restartPolicy 设置为 Always，Init 容器失败时会使用RestartPolicy 策略</li><li>在所有的 Init 容器没有成功之前，Pod 将不会变成 Ready 状态。Init 容器的端口将不会在Service 中进行聚集。正在初始化中的 Pod 处于 Pending 状态，但应该会将 Initializing 状态设置为 true</li><li>如果 Pod 重启，所有 Init 容器必须重新执行</li><li>对 Init 容器 spec 的修改被限制在容器 image 字段，修改其他字段都不会生效。更改 Init容器的 image 字段，等价于重启该 Pod</li><li>Init 容器具有应用容器的所有字段。除了 readinessProbe，因为 Init 容器无法定义不同于完成（completion）的就绪（readiness）之外的其他状态。这会在验证过程中强制执行</li><li>在 Pod 中的每个 app 和 Init 容器的名称必须唯一；与任何其它容器共享同一个名称，会在验证时抛出错误</li></ul><p><strong>init容器代码示例：</strong></p><blockquote><p>步骤说明：</p><p>1、创建了一个Pod叫myapp-pod，它包含三个容器。一个叫myapp-container，还有两个init容器。这两个init容器没有启动成功，所以该pod也不能启动成功。</p><p>2、创建两个Service，当两个Service启动成功后，Pod才启动成功。</p></blockquote><p>1、创建了一个Pod叫myapp-pod，它包含三个容器。一个叫myapp-container，还有两个init容器。这两个init容器没有启动成功，所以该pod也不能启动成功。</p><p>创建文件ini-pod.yaml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">apiVersion: v1</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: Pod</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: myapp-pod</span></span>
<span class="line"><span style="color:#e1e4e8;">  labels:</span></span>
<span class="line"><span style="color:#e1e4e8;">    app: myapp</span></span>
<span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">  containers:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - name: myapp-container</span></span>
<span class="line"><span style="color:#e1e4e8;">    image: busybox</span></span>
<span class="line"><span style="color:#e1e4e8;">    command: [&#39;sh&#39;, &#39;-c&#39;, &#39;echo The app is running! &amp;&amp; sleep 3600&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">  initContainers:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - name: init-myservice</span></span>
<span class="line"><span style="color:#e1e4e8;">    image: busybox</span></span>
<span class="line"><span style="color:#e1e4e8;">    command: [&#39;sh&#39;, &#39;-c&#39;, &#39;until nslookup myservice; do echo waiting for myservice; sleep 2; done;&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">  - name: init-mydb</span></span>
<span class="line"><span style="color:#e1e4e8;">    image: busybox</span></span>
<span class="line"><span style="color:#e1e4e8;">    command: [&#39;sh&#39;, &#39;-c&#39;, &#39;until nslookup mydb; do echo waiting for mydb; sleep 2; done;&#39;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">apiVersion: v1</span></span>
<span class="line"><span style="color:#24292e;">kind: Pod</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: myapp-pod</span></span>
<span class="line"><span style="color:#24292e;">  labels:</span></span>
<span class="line"><span style="color:#24292e;">    app: myapp</span></span>
<span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;">  containers:</span></span>
<span class="line"><span style="color:#24292e;">  - name: myapp-container</span></span>
<span class="line"><span style="color:#24292e;">    image: busybox</span></span>
<span class="line"><span style="color:#24292e;">    command: [&#39;sh&#39;, &#39;-c&#39;, &#39;echo The app is running! &amp;&amp; sleep 3600&#39;]</span></span>
<span class="line"><span style="color:#24292e;">  initContainers:</span></span>
<span class="line"><span style="color:#24292e;">  - name: init-myservice</span></span>
<span class="line"><span style="color:#24292e;">    image: busybox</span></span>
<span class="line"><span style="color:#24292e;">    command: [&#39;sh&#39;, &#39;-c&#39;, &#39;until nslookup myservice; do echo waiting for myservice; sleep 2; done;&#39;]</span></span>
<span class="line"><span style="color:#24292e;">  - name: init-mydb</span></span>
<span class="line"><span style="color:#24292e;">    image: busybox</span></span>
<span class="line"><span style="color:#24292e;">    command: [&#39;sh&#39;, &#39;-c&#39;, &#39;until nslookup mydb; do echo waiting for mydb; sleep 2; done;&#39;]</span></span></code></pre></div><p>命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">kubectl create -f ini-pod.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod		# 发现init状态为0/2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">kubectl create -f ini-pod.yaml</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod		# 发现init状态为0/2</span></span></code></pre></div><p><img src="`+d+`" alt="image-20230502122130989"></p><p>2、创建两个Service，当两个Service启动成功后，Pod才启动成功。</p><p>创建文件myservice.yaml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">kind: Service</span></span>
<span class="line"><span style="color:#e1e4e8;">apiVersion: v1</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: myservice</span></span>
<span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">  ports:</span></span>
<span class="line"><span style="color:#e1e4e8;">    - protocol: TCP</span></span>
<span class="line"><span style="color:#e1e4e8;">      port: 80</span></span>
<span class="line"><span style="color:#e1e4e8;">      targetPort: 9376</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">kind: Service</span></span>
<span class="line"><span style="color:#24292e;">apiVersion: v1</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: myservice</span></span>
<span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;">  ports:</span></span>
<span class="line"><span style="color:#24292e;">    - protocol: TCP</span></span>
<span class="line"><span style="color:#24292e;">      port: 80</span></span>
<span class="line"><span style="color:#24292e;">      targetPort: 9376</span></span></code></pre></div><p>命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">kubectl create -f myservice.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod					# 发现init状态为1/2 (需要等一会)</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get svc					# svc中有一个myservice服务</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod -n kube-system	# coredns是K8s为 myservice维护的IP地址</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">kubectl create -f myservice.yaml</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod					# 发现init状态为1/2 (需要等一会)</span></span>
<span class="line"><span style="color:#24292e;">kubectl get svc					# svc中有一个myservice服务</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod -n kube-system	# coredns是K8s为 myservice维护的IP地址</span></span></code></pre></div><p><img src="`+y+`" alt="image-20230502122331001"></p><p>创建文件 mydb.yaml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">kind: Service</span></span>
<span class="line"><span style="color:#e1e4e8;">apiVersion: v1</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: mydb</span></span>
<span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">  ports:</span></span>
<span class="line"><span style="color:#e1e4e8;">    - protocol: TCP</span></span>
<span class="line"><span style="color:#e1e4e8;">	  port: 80</span></span>
<span class="line"><span style="color:#e1e4e8;">	  targetPort: 9377</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">kind: Service</span></span>
<span class="line"><span style="color:#24292e;">apiVersion: v1</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: mydb</span></span>
<span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;">  ports:</span></span>
<span class="line"><span style="color:#24292e;">    - protocol: TCP</span></span>
<span class="line"><span style="color:#24292e;">	  port: 80</span></span>
<span class="line"><span style="color:#24292e;">	  targetPort: 9377</span></span></code></pre></div><p>命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">kubectl create -f mydb.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod					# 发现init状态为2/2 (需要等一会)</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get svc					# svc中有一个mydb服务</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 最后把pod和svc删除</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl delete pod --all</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl delete svc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">kubectl create -f mydb.yaml</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod					# 发现init状态为2/2 (需要等一会)</span></span>
<span class="line"><span style="color:#24292e;">kubectl get svc					# svc中有一个mydb服务</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 最后把pod和svc删除</span></span>
<span class="line"><span style="color:#24292e;">kubectl delete pod --all</span></span>
<span class="line"><span style="color:#24292e;">kubectl delete svc</span></span></code></pre></div><h2 id="探针" tabindex="-1">探针 <a class="header-anchor" href="#探针" aria-label="Permalink to &quot;探针&quot;">​</a></h2><p><strong>init容器的问题：</strong></p><ul><li>init容器适合做系统初始化，不适合用于检测其它容器是否存活等状态。</li><li>检测容器状态，应该用探针。</li></ul><p><strong>探针详解：</strong></p><p>探针是由 kubelet 对容器执行的定期诊断。要执行诊断，kubelet 调用由容器实现的 Handler。有三种类型的处理程序：</p><ul><li>ExecAction：在容器内执行指定命令。如果命令退出时返回码为 0 则认为诊断成功。</li><li>TCPSocketAction：对指定端口上的容器的 IP 地址进行 TCP 检查。如果端口打开，则诊断被认为是成功的。</li><li>HTTPGetAction：对指定的端口和路径上的容器的 IP 地址执行 HTTP Get 请求。如果响应的状态码大于等于200 且小于 400，则诊断被认为是成功的</li></ul><p>每次探测都将获得以下三种结果之一：</p><ul><li>成功：容器通过了诊断。</li><li>失败：容器未通过诊断。</li><li>未知：诊断失败，因此不会采取任何行动</li></ul><p>探测方式：</p><ul><li>livenessProbe：指示容器是否正在运行。如果存活探测失败，则 kubelet 会杀死容器，并且容器将受到其 重启策略 的影响。如果容器不提供存活探针，则默认状态为 Success</li><li>readinessProbe：指示容器是否准备好服务请求。如果就绪探测失败，端点控制器将从与 Pod 匹配的所有 Service 的端点中删除该 Pod 的 IP 地址。初始延迟之前的就绪状态默认为 Failure。如果容器不提供就绪探针，则默认状态为 Success</li></ul><h2 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h2><p><strong>探针检测示例1：就绪探测</strong></p><p>创建read.yaml</p><blockquote><p>说明：创建pod；创建容器；readinessProbe探针检测：在容器初始化1s后，对端口和路径上执行HTTP GET请求，周期是3s.</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">apiVersion: v1</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: Pod</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: readiness-httpget-pod</span></span>
<span class="line"><span style="color:#e1e4e8;">  namespace: default</span></span>
<span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">  containers:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - name: readiness-httpget-container</span></span>
<span class="line"><span style="color:#e1e4e8;">    image: busybox:1.36</span></span>
<span class="line"><span style="color:#e1e4e8;">    imagePullPolicy: IfNotPresent</span></span>
<span class="line"><span style="color:#e1e4e8;">    readinessProbe:</span></span>
<span class="line"><span style="color:#e1e4e8;">      httpGet:</span></span>
<span class="line"><span style="color:#e1e4e8;">        port: 80</span></span>
<span class="line"><span style="color:#e1e4e8;">        path: /index1.html</span></span>
<span class="line"><span style="color:#e1e4e8;">      initialDelaySeconds: 1</span></span>
<span class="line"><span style="color:#e1e4e8;">      periodSeconds: 3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">apiVersion: v1</span></span>
<span class="line"><span style="color:#24292e;">kind: Pod</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: readiness-httpget-pod</span></span>
<span class="line"><span style="color:#24292e;">  namespace: default</span></span>
<span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;">  containers:</span></span>
<span class="line"><span style="color:#24292e;">  - name: readiness-httpget-container</span></span>
<span class="line"><span style="color:#24292e;">    image: busybox:1.36</span></span>
<span class="line"><span style="color:#24292e;">    imagePullPolicy: IfNotPresent</span></span>
<span class="line"><span style="color:#24292e;">    readinessProbe:</span></span>
<span class="line"><span style="color:#24292e;">      httpGet:</span></span>
<span class="line"><span style="color:#24292e;">        port: 80</span></span>
<span class="line"><span style="color:#24292e;">        path: /index1.html</span></span>
<span class="line"><span style="color:#24292e;">      initialDelaySeconds: 1</span></span>
<span class="line"><span style="color:#24292e;">      periodSeconds: 3</span></span></code></pre></div><p>命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">kubectl create -f read.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod		# 发现readiness-httpget-pod没有启动成功</span></span>
<span class="line"><span style="color:#e1e4e8;"># 上面pod状态如果是Running，则可以执行以下命令</span></span>
<span class="line"><span style="color:#e1e4e8;"># 上面pod状态如果是CrashLoopBackOff，则不可以执行（因为容器没启动成功）</span></span>
<span class="line"><span style="color:#e1e4e8;"># 含义：运行Pod,进入容器，并创建一个终端交互窗口（类似于docker命令）</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl exec readiness-httpget-pod -c readiness-httpget-container -it -- /bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除pod</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl delte pod readiness-httpget-pod</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">kubectl create -f read.yaml</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod		# 发现readiness-httpget-pod没有启动成功</span></span>
<span class="line"><span style="color:#24292e;"># 上面pod状态如果是Running，则可以执行以下命令</span></span>
<span class="line"><span style="color:#24292e;"># 上面pod状态如果是CrashLoopBackOff，则不可以执行（因为容器没启动成功）</span></span>
<span class="line"><span style="color:#24292e;"># 含义：运行Pod,进入容器，并创建一个终端交互窗口（类似于docker命令）</span></span>
<span class="line"><span style="color:#24292e;">kubectl exec readiness-httpget-pod -c readiness-httpget-container -it -- /bin/bash</span></span>
<span class="line"><span style="color:#24292e;"># 删除pod</span></span>
<span class="line"><span style="color:#24292e;">kubectl delte pod readiness-httpget-pod</span></span></code></pre></div><p><img src="`+u+`" alt="image-20230507115804279"></p><p><strong>探针检测示例2：存活探测</strong></p><p>创建live.yaml</p><blockquote><p>说明：探针检测容器是否有文件，如果没有重启。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">apiVersion: v1</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: Pod</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: liveness-exec-pod</span></span>
<span class="line"><span style="color:#e1e4e8;">  namespace: default</span></span>
<span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">  containers:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - name: liveness-exec-container</span></span>
<span class="line"><span style="color:#e1e4e8;">    image: busybox:1.36</span></span>
<span class="line"><span style="color:#e1e4e8;">    imagePullPolicy: IfNotPresent</span></span>
<span class="line"><span style="color:#e1e4e8;">    command: [&quot;/bin/sh&quot;, &quot;-c&quot;, &quot;touch /tmp/live; sleep 60; rm -rf /tmp/live; sleep 3600&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">    livenessProbe:</span></span>
<span class="line"><span style="color:#e1e4e8;">      exec:</span></span>
<span class="line"><span style="color:#e1e4e8;">        command: [&quot;test&quot;, &quot;-e&quot;, &quot;/tmp/live&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">      initialDelaySeconds: 1</span></span>
<span class="line"><span style="color:#e1e4e8;">      periodSeconds: 3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">apiVersion: v1</span></span>
<span class="line"><span style="color:#24292e;">kind: Pod</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: liveness-exec-pod</span></span>
<span class="line"><span style="color:#24292e;">  namespace: default</span></span>
<span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;">  containers:</span></span>
<span class="line"><span style="color:#24292e;">  - name: liveness-exec-container</span></span>
<span class="line"><span style="color:#24292e;">    image: busybox:1.36</span></span>
<span class="line"><span style="color:#24292e;">    imagePullPolicy: IfNotPresent</span></span>
<span class="line"><span style="color:#24292e;">    command: [&quot;/bin/sh&quot;, &quot;-c&quot;, &quot;touch /tmp/live; sleep 60; rm -rf /tmp/live; sleep 3600&quot;]</span></span>
<span class="line"><span style="color:#24292e;">    livenessProbe:</span></span>
<span class="line"><span style="color:#24292e;">      exec:</span></span>
<span class="line"><span style="color:#24292e;">        command: [&quot;test&quot;, &quot;-e&quot;, &quot;/tmp/live&quot;]</span></span>
<span class="line"><span style="color:#24292e;">      initialDelaySeconds: 1</span></span>
<span class="line"><span style="color:#24292e;">      periodSeconds: 3</span></span></code></pre></div><p>命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">kubectl create -f live.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod  # 过一会，发现pod重新启动了，因为探针检测到文件不存在</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl delete pod liveness-exec-pod</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">kubectl create -f live.yaml</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod  # 过一会，发现pod重新启动了，因为探针检测到文件不存在</span></span>
<span class="line"><span style="color:#24292e;">kubectl delete pod liveness-exec-pod</span></span></code></pre></div><p><img src="`+m+`" alt="image-20230507121339745"></p><p><strong>代码示例：postStart &amp; preStop</strong></p><blockquote><p>示例说明：</p><p>postStart 和 preStop是Pod生命周期的一部分。当容器启动成功后postStart，输出Hello；当容器停止前preStop，输出Hello。</p></blockquote><p>创建文件post.yaml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">apiVersion: v1</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: Pod</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: lifecycle-demo</span></span>
<span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">  containers:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - name: lifecycle-demo-container</span></span>
<span class="line"><span style="color:#e1e4e8;">    image: nginx</span></span>
<span class="line"><span style="color:#e1e4e8;">    imagePullPolicy: IfNotPresent</span></span>
<span class="line"><span style="color:#e1e4e8;">    lifecycle:</span></span>
<span class="line"><span style="color:#e1e4e8;">      postStart:</span></span>
<span class="line"><span style="color:#e1e4e8;">        exec:</span></span>
<span class="line"><span style="color:#e1e4e8;">          command: [&quot;/bin/sh&quot;, &quot;-c&quot;, &quot;echo Hello from the postStart handler &gt; /test.txt&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">      preStop:</span></span>
<span class="line"><span style="color:#e1e4e8;">        exec:</span></span>
<span class="line"><span style="color:#e1e4e8;">          command: [&quot;/bin/sh&quot;, &quot;-c&quot;, &quot;echo Hello from the preStop handler &gt; /test.txt&quot;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">apiVersion: v1</span></span>
<span class="line"><span style="color:#24292e;">kind: Pod</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: lifecycle-demo</span></span>
<span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;">  containers:</span></span>
<span class="line"><span style="color:#24292e;">  - name: lifecycle-demo-container</span></span>
<span class="line"><span style="color:#24292e;">    image: nginx</span></span>
<span class="line"><span style="color:#24292e;">    imagePullPolicy: IfNotPresent</span></span>
<span class="line"><span style="color:#24292e;">    lifecycle:</span></span>
<span class="line"><span style="color:#24292e;">      postStart:</span></span>
<span class="line"><span style="color:#24292e;">        exec:</span></span>
<span class="line"><span style="color:#24292e;">          command: [&quot;/bin/sh&quot;, &quot;-c&quot;, &quot;echo Hello from the postStart handler &gt; /test.txt&quot;]</span></span>
<span class="line"><span style="color:#24292e;">      preStop:</span></span>
<span class="line"><span style="color:#24292e;">        exec:</span></span>
<span class="line"><span style="color:#24292e;">          command: [&quot;/bin/sh&quot;, &quot;-c&quot;, &quot;echo Hello from the preStop handler &gt; /test.txt&quot;]</span></span></code></pre></div><p>命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">kubectl create -f post.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl exec lifecycle-demo -it -- /bin/sh # pod中只有一个容器，可以省略 -c xxx-container</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">kubectl create -f post.yaml</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod</span></span>
<span class="line"><span style="color:#24292e;">kubectl exec lifecycle-demo -it -- /bin/sh # pod中只有一个容器，可以省略 -c xxx-container</span></span></code></pre></div><p><img src="`+g+'" alt="image-20230507144534131"></p><h1 id="_6-controller" tabindex="-1">6 Controller <a class="header-anchor" href="#_6-controller" aria-label="Permalink to &quot;6 Controller&quot;">​</a></h1><h2 id="控制器详解" tabindex="-1">控制器详解 <a class="header-anchor" href="#控制器详解" aria-label="Permalink to &quot;控制器详解&quot;">​</a></h2><p><strong>是什么？</strong></p><p>Kubernetes中内建了很多controller（控制器），这些相当于一个状态机，用来控制Pod的具体状态和行为</p><p><strong>控制器的类型有：</strong></p><ul><li>ReplicationController和ReplicaSet</li><li>Deployment</li><li>DaemonSet</li><li>StateFulSet</li><li>Job/CronJob</li><li>Horizontal Pod Autoscaling</li></ul><p><strong>ReplicationController和ReplicaSet</strong></p><p>ReplicationController（RC）用来确保容器应用的副本数始终保持在用户定义的副本数，即如果有容器异常退出，会自动创建新的Pod来替代；而如果异常多出来的容器也会自动回收；</p><p>在新版本的Kubernetes中建议使用ReplicaSet来取代ReplicationController。ReplicaSet跟ReplicationController没有本质的不同，只是名字不一样，并且ReplicaSet支持集合式的selector；</p><p><strong>Deployment</strong></p><p>Deployment为Pod和ReplicaSet提供了一个声明式定义(declarative)方法，用来替代以前的ReplicationController来方便的管理应用。Deployment不直接创建pod，而是通过管理RS实现对pod的控制。典型的应用场景包括：</p><ul><li>定义Deployment来创建Pod和ReplicaSet</li><li>滚动升级和回滚应用</li><li>扩容和缩容</li><li>暂停和继续Deployment</li></ul><p><img src="'+b+`" alt="image-20230510230350154"></p><blockquote><p>声明式定义：定义想要的结果，具体过程计算机执行。具体命令如：apply</p><p>命令式定义：定义具体过程。具体命令如：create</p></blockquote><p><strong>DaemonSet</strong></p><p>DaemonSet确保全部（或者一些）Node上运行一个Pod的副本。当有Node加入集群时，也会为他们新增一个Pod。当有Node从集群移除时，这些Pod也会被回收。删除DaemonSet将会删除它创建的所有Pod</p><p>使用DaemonSet的一些典型用法：</p><ul><li>运行集群存储daemon，例如在每个Node上运行glusterd、ceph</li><li>在每个Node上运行日志收集daemon，例如fluentd、logstash</li><li>在每个Node上运行监控daemon，例如Prometheus Node Exporter、collectd、Datadog代理、New Relic代理，或Gangliagmond</li></ul><p><strong>Job</strong></p><p>Job负责批处理任务，即仅执行一次的任务，它保证批处理任务的一个或多个Pod成功结束</p><p><strong>CronJob</strong></p><p>Cron Job管理基于时间的Job，即：</p><ul><li>在给定时间点只运行一次</li><li>周期性地在给定时间点运行</li></ul><p><strong>StatefulSet</strong></p><p>StatefulSet作为Controller为Pod提供唯一的标识。它可以保证部署和scale的顺序。</p><p>StatefulSet是为了解决有状态服务的问题（对应Deployments和ReplicaSets是为无状态服务而设计），其应用场景包括：</p><ul><li>稳定的持久化存储，即Pod重新调度后还是能访问到相同的持久化数据，基于PVC来实现。</li><li>稳定的网络标志，即Pod重新调度后其PodName和HostName不变，基于Headless Service（即没有Cluster IP的Service）来实现。</li><li>有序部署，有序扩展，即Pod是有顺序的，在部署或者扩展的时候要依据定义的顺序依次依次进行（即从0到N-1，在下一个Pod运行之前所有之前的Pod必须都是Running和Ready状态），基于init containers来实现。</li><li>有序收缩，有序删除（即从N-1到0）</li></ul><p><strong>Horizontal Pod Autoscaling</strong></p><p>应用的资源使用率通常都有高峰和低谷的时候，如何削峰填谷，提高集群的整体资源利用率，让service中的Pod个数自动调整呢？这就有赖于Horizontal Pod Autoscaling了，顾名思义，使Pod水平自动缩放</p><h2 id="示例1-rs" tabindex="-1">示例1：RS <a class="header-anchor" href="#示例1-rs" aria-label="Permalink to &quot;示例1：RS&quot;">​</a></h2><blockquote><p>示例说明：</p><p>1、创建一个RS，叫frontend；定义RS的副本3，标签tier:frontend；标签可以绑定pod，该标签对应的pod中包含一个容器myapp。</p><p>2、修改标签；删除pod等操作，并不会改变副本为3，说明RS具备管理pod副本的功能。</p></blockquote><p>创建文件rs.yaml</p><p>资源文件解释：</p><ul><li><p>fronttend是前端项目的意思。</p></li><li><p>标签：将控制器和pod关联起来</p></li><li><p>template和pod定义类似，说明controller包含pod</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">apiVersion: apps/v1</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: ReplicaSet</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: frontend</span></span>
<span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">  replicas: 3</span></span>
<span class="line"><span style="color:#e1e4e8;">  selector:</span></span>
<span class="line"><span style="color:#e1e4e8;">    matchLabels:</span></span>
<span class="line"><span style="color:#e1e4e8;">      tier: frontend</span></span>
<span class="line"><span style="color:#e1e4e8;">  template:</span></span>
<span class="line"><span style="color:#e1e4e8;">    metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">      labels:</span></span>
<span class="line"><span style="color:#e1e4e8;">        tier: frontend</span></span>
<span class="line"><span style="color:#e1e4e8;">    spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">      containers:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: myapp</span></span>
<span class="line"><span style="color:#e1e4e8;">        image: nginx</span></span>
<span class="line"><span style="color:#e1e4e8;">        env:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - name: GET_HOSTS_FROM</span></span>
<span class="line"><span style="color:#e1e4e8;">          value: dns</span></span>
<span class="line"><span style="color:#e1e4e8;">        ports:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - containerPort: 80</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">apiVersion: apps/v1</span></span>
<span class="line"><span style="color:#24292e;">kind: ReplicaSet</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: frontend</span></span>
<span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;">  replicas: 3</span></span>
<span class="line"><span style="color:#24292e;">  selector:</span></span>
<span class="line"><span style="color:#24292e;">    matchLabels:</span></span>
<span class="line"><span style="color:#24292e;">      tier: frontend</span></span>
<span class="line"><span style="color:#24292e;">  template:</span></span>
<span class="line"><span style="color:#24292e;">    metadata:</span></span>
<span class="line"><span style="color:#24292e;">      labels:</span></span>
<span class="line"><span style="color:#24292e;">        tier: frontend</span></span>
<span class="line"><span style="color:#24292e;">    spec:</span></span>
<span class="line"><span style="color:#24292e;">      containers:</span></span>
<span class="line"><span style="color:#24292e;">      - name: myapp</span></span>
<span class="line"><span style="color:#24292e;">        image: nginx</span></span>
<span class="line"><span style="color:#24292e;">        env:</span></span>
<span class="line"><span style="color:#24292e;">        - name: GET_HOSTS_FROM</span></span>
<span class="line"><span style="color:#24292e;">          value: dns</span></span>
<span class="line"><span style="color:#24292e;">        ports:</span></span>
<span class="line"><span style="color:#24292e;">        - containerPort: 80</span></span></code></pre></div><p>命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">kubectl create -f rs.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod				# 发现三个frontend的pod</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl delete pod --all	# 删除</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod				# 虽然删除了，但是还存在，说明rs在自动创建</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod </span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod --show-labels		# 修改其中一个pod的label</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl label pod frontend-9lrhk tier=frontend1 --overwrite=true</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod --show-labels		# 发现有四个pod，说明rs和pod通过标签关联</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">kbuectl delete pod rs --all	# 删除rs （3个）</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl delete pod --all 	# 删除pod （1个）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">kubectl create -f rs.yaml</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod				# 发现三个frontend的pod</span></span>
<span class="line"><span style="color:#24292e;">kubectl delete pod --all	# 删除</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod				# 虽然删除了，但是还存在，说明rs在自动创建</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod </span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod --show-labels		# 修改其中一个pod的label</span></span>
<span class="line"><span style="color:#24292e;">kubectl label pod frontend-9lrhk tier=frontend1 --overwrite=true</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod --show-labels		# 发现有四个pod，说明rs和pod通过标签关联</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">kbuectl delete pod rs --all	# 删除rs （3个）</span></span>
<span class="line"><span style="color:#24292e;">kubectl delete pod --all 	# 删除pod （1个）</span></span></code></pre></div><p><img src="`+h+`" alt="image-20230510225433462"></p><h2 id="示例2-deployment" tabindex="-1">示例2：Deployment <a class="header-anchor" href="#示例2-deployment" aria-label="Permalink to &quot;示例2：Deployment&quot;">​</a></h2><blockquote><p>示例说明：</p><p>1、创建deployment，叫nginx-deployment；通过标签app:nginx关联pod；pod有容器mynginx；</p></blockquote><p>创建文件deployment.yaml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">apiVersion: apps/v1</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: Deployment</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: nginx-deployment</span></span>
<span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">  replicas: 3</span></span>
<span class="line"><span style="color:#e1e4e8;">  selector:</span></span>
<span class="line"><span style="color:#e1e4e8;">    matchLabels:</span></span>
<span class="line"><span style="color:#e1e4e8;">      app: nginx</span></span>
<span class="line"><span style="color:#e1e4e8;">  template:</span></span>
<span class="line"><span style="color:#e1e4e8;">    metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">      labels:</span></span>
<span class="line"><span style="color:#e1e4e8;">        app: nginx</span></span>
<span class="line"><span style="color:#e1e4e8;">    spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">      containers:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: mynginx</span></span>
<span class="line"><span style="color:#e1e4e8;">        image: nginx</span></span>
<span class="line"><span style="color:#e1e4e8;">        ports:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - containerPort: 80</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">apiVersion: apps/v1</span></span>
<span class="line"><span style="color:#24292e;">kind: Deployment</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: nginx-deployment</span></span>
<span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;">  replicas: 3</span></span>
<span class="line"><span style="color:#24292e;">  selector:</span></span>
<span class="line"><span style="color:#24292e;">    matchLabels:</span></span>
<span class="line"><span style="color:#24292e;">      app: nginx</span></span>
<span class="line"><span style="color:#24292e;">  template:</span></span>
<span class="line"><span style="color:#24292e;">    metadata:</span></span>
<span class="line"><span style="color:#24292e;">      labels:</span></span>
<span class="line"><span style="color:#24292e;">        app: nginx</span></span>
<span class="line"><span style="color:#24292e;">    spec:</span></span>
<span class="line"><span style="color:#24292e;">      containers:</span></span>
<span class="line"><span style="color:#24292e;">      - name: mynginx</span></span>
<span class="line"><span style="color:#24292e;">        image: nginx</span></span>
<span class="line"><span style="color:#24292e;">        ports:</span></span>
<span class="line"><span style="color:#24292e;">        - containerPort: 80</span></span></code></pre></div><p>命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">kubectl apply -f deployment.yaml --record		# apply是声明式命令; record记录历史</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get deployment</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get rs</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 扩容：扩容不会改变rs</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl scale deployment nginx-deployment --replicas 5</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get rs</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get pod</span></span>
<span class="line"><span style="color:#e1e4e8;"># 更新镜像：会改变rs（重新建一个rs）</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl set image deployment/nginx-deployment mynginx=nginx:1.9.1</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl get rs -o wide</span></span>
<span class="line"><span style="color:#e1e4e8;"># 回退</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl rollout undo deployment/nginx-deployment</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看历史（创建时有record,才会有历史）</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl rollout history deployment/nginx-deployment</span></span>
<span class="line"><span style="color:#e1e4e8;"># 回退到指定版本</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl rollout undo deployment/nginx-deployment --to-revision=2</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看是否回滚成功</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl rollout status deployment/nginx-deployment</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">kubectl apply -f deployment.yaml --record		# apply是声明式命令; record记录历史</span></span>
<span class="line"><span style="color:#24292e;">kubectl get deployment</span></span>
<span class="line"><span style="color:#24292e;">kubectl get rs</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 扩容：扩容不会改变rs</span></span>
<span class="line"><span style="color:#24292e;">kubectl scale deployment nginx-deployment --replicas 5</span></span>
<span class="line"><span style="color:#24292e;">kubectl get rs</span></span>
<span class="line"><span style="color:#24292e;">kubectl get pod</span></span>
<span class="line"><span style="color:#24292e;"># 更新镜像：会改变rs（重新建一个rs）</span></span>
<span class="line"><span style="color:#24292e;">kubectl set image deployment/nginx-deployment mynginx=nginx:1.9.1</span></span>
<span class="line"><span style="color:#24292e;">kubectl get rs -o wide</span></span>
<span class="line"><span style="color:#24292e;"># 回退</span></span>
<span class="line"><span style="color:#24292e;">kubectl rollout undo deployment/nginx-deployment</span></span>
<span class="line"><span style="color:#24292e;"># 查看历史（创建时有record,才会有历史）</span></span>
<span class="line"><span style="color:#24292e;">kubectl rollout history deployment/nginx-deployment</span></span>
<span class="line"><span style="color:#24292e;"># 回退到指定版本</span></span>
<span class="line"><span style="color:#24292e;">kubectl rollout undo deployment/nginx-deployment --to-revision=2</span></span>
<span class="line"><span style="color:#24292e;"># 查看是否回滚成功</span></span>
<span class="line"><span style="color:#24292e;">kubectl rollout status deployment/nginx-deployment</span></span></code></pre></div><p><img src="`+k+'" alt="image-20230510231607572"></p><h2 id="示例3-daemonset" tabindex="-1">示例3：DaemonSet <a class="header-anchor" href="#示例3-daemonset" aria-label="Permalink to &quot;示例3：DaemonSet&quot;">​</a></h2><hr><p>7 Service</p><p>8 存储</p><p>9 集群调度</p><p>10 认证&amp;安全</p><p>11 Helm</p><p>12 高可用集群搭建</p>',202),S=[v];function q(f,x,C,_,R,I){return e(),n("div",null,S)}const T=s(P,[["render",q]]);export{N as __pageData,T as default};
