import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.2516552c.js";const l="/assets/20200521130157770.7f28592f.png",p="/assets/image-20220105231145429.60a8bf29.png",t="/assets/image-20220615234112076.8d387008.png",o="/assets/image-20220616231044687.a5e54284.png",c="/assets/image-20220616224025374.e1a0eb56.png",r="/assets/image-20220616225958519.f39e22a6.png",i="/assets/image-20220616224236082.89406f86.png",d="/assets/image-20220616230657967.6c81e3de.png",g="/assets/image-20220616231454858.7267e8ae.png",y="/assets/image-20220616231815467.e46a61f9.png",u="/assets/image-20220616232453789.0dc28a0d.png",h="/assets/image-20220616234340895.eea08762.png",v="/assets/image-20220616234434665.5976f144.png",b="/assets/image-20220617000111209.4784ae5b.png",m="/assets/image-20220617005336408.94b7579a.png",k="/assets/image-20220629231109515.97a928e9.png",f="/assets/image-20220630230914324.e222e595.png",q="/assets/image-20220703154027826.a9c05032.png",I="/assets/image-20220703162120976.46dbcfaf.png",C="/assets/image-20220703175932628.ffcfe550.png",x="/assets/image-20220703213743832.a58f9688.png",S="/assets/image-20220703215544820.3801873f.png",P="/assets/image-20220703222124490.2311b84a.png",N=JSON.parse('{"title":"SpringCloud","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/52SpringCloud/index.md","filePath":"articles/Java/52SpringCloud/index.md","lastUpdated":null}'),_={name:"articles/Java/52SpringCloud/index.md"},L=a(`<h1 id="springcloud" tabindex="-1">SpringCloud <a class="header-anchor" href="#springcloud" aria-label="Permalink to &quot;SpringCloud&quot;">​</a></h1><h1 id="_1-概念" tabindex="-1">1 概念 <a class="header-anchor" href="#_1-概念" aria-label="Permalink to &quot;1  概念&quot;">​</a></h1><p>分布式架构会遇到的四个核心问题：</p><ol><li>这么多服务，客户端如何去访问</li><li>这么多服务，服务之间如何通信</li><li>这么多服务，如何治理</li><li>服务挂了，怎么办</li></ol><p>SpringCloud是一套生态，就是解决分布式遇到的问题。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1、Spring Cloud NetFlix，出了一套解决方案，但是2018年底，NetFlix宣布无限期停止维护。</span></span>
<span class="line"><span style="color:#e1e4e8;">	1. Api网关，zuul组件，解决访问。微服务网关、提供动态路由、访问过滤等服务。</span></span>
<span class="line"><span style="color:#e1e4e8;">	2. 基于Http的Feign组件，解决通信，同步并阻塞</span></span>
<span class="line"><span style="color:#e1e4e8;">	3. Eureka，服务注册发现，解决治理</span></span>
<span class="line"><span style="color:#e1e4e8;">	4. Hystrix，熔断机制，解决故障</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">2、Apache Dubbo Zookeeper，第二套解决方案</span></span>
<span class="line"><span style="color:#e1e4e8;">	* API 没有，自己实现，或者找第三方组件</span></span>
<span class="line"><span style="color:#e1e4e8;">	* Dubbo，RPC通信框架，解决通信</span></span>
<span class="line"><span style="color:#e1e4e8;">	* Zookeeper，服务注册与发现，解决治理</span></span>
<span class="line"><span style="color:#e1e4e8;">	* 熔断，没有，借助了Hystrix</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">3、SpringCloud Alibaba一站式解决方案</span></span>
<span class="line"><span style="color:#e1e4e8;">	* Dubbo: RPC框架，以及客户端访问等，负载均衡等。</span></span>
<span class="line"><span style="color:#e1e4e8;">	* Nacos: 类似注册中心。</span></span>
<span class="line"><span style="color:#e1e4e8;">	* Sentinal: 流量控制，服务熔断等</span></span>
<span class="line"><span style="color:#e1e4e8;">	* RocketMQ: 分布式消息系统</span></span>
<span class="line"><span style="color:#e1e4e8;">	* Seata: 分布式事务</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">4、Server Mesh 下一代微服务标准</span></span>
<span class="line"><span style="color:#e1e4e8;">	代表方案istio</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1、Spring Cloud NetFlix，出了一套解决方案，但是2018年底，NetFlix宣布无限期停止维护。</span></span>
<span class="line"><span style="color:#24292e;">	1. Api网关，zuul组件，解决访问。微服务网关、提供动态路由、访问过滤等服务。</span></span>
<span class="line"><span style="color:#24292e;">	2. 基于Http的Feign组件，解决通信，同步并阻塞</span></span>
<span class="line"><span style="color:#24292e;">	3. Eureka，服务注册发现，解决治理</span></span>
<span class="line"><span style="color:#24292e;">	4. Hystrix，熔断机制，解决故障</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">2、Apache Dubbo Zookeeper，第二套解决方案</span></span>
<span class="line"><span style="color:#24292e;">	* API 没有，自己实现，或者找第三方组件</span></span>
<span class="line"><span style="color:#24292e;">	* Dubbo，RPC通信框架，解决通信</span></span>
<span class="line"><span style="color:#24292e;">	* Zookeeper，服务注册与发现，解决治理</span></span>
<span class="line"><span style="color:#24292e;">	* 熔断，没有，借助了Hystrix</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">3、SpringCloud Alibaba一站式解决方案</span></span>
<span class="line"><span style="color:#24292e;">	* Dubbo: RPC框架，以及客户端访问等，负载均衡等。</span></span>
<span class="line"><span style="color:#24292e;">	* Nacos: 类似注册中心。</span></span>
<span class="line"><span style="color:#24292e;">	* Sentinal: 流量控制，服务熔断等</span></span>
<span class="line"><span style="color:#24292e;">	* RocketMQ: 分布式消息系统</span></span>
<span class="line"><span style="color:#24292e;">	* Seata: 分布式事务</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">4、Server Mesh 下一代微服务标准</span></span>
<span class="line"><span style="color:#24292e;">	代表方案istio</span></span></code></pre></div><p>SpringCloud和SpringBoot关系</p><ul><li>SpringBoot专注于快速开发单个微服务，就是jar包</li><li>SpringCloud关注全局的微服务协调治理框架，将SpringBoot开发的一个个微服务整合并管理起来，为微服务之间提供：管理配置，服务发现，断路器，路由，微代理，事件总线，全局锁，决策竞选，分布式会话等集成服务。</li></ul><h1 id="_2-eureka服务注册中心" tabindex="-1">2 Eureka服务注册中心 <a class="header-anchor" href="#_2-eureka服务注册中心" aria-label="Permalink to &quot;2  Eureka服务注册中心&quot;">​</a></h1><h3 id="_2-1-原理" tabindex="-1">2.1 原理 <a class="header-anchor" href="#_2-1-原理" aria-label="Permalink to &quot;2.1  原理&quot;">​</a></h3><p>认识：</p><ul><li><p>Netflix在涉及Eureka时，遵循的就是API原则.</p></li><li><p>Eureka是Netflix的有个子模块，也是核心模块之一。Eureka是基于REST的服务，用于定位服务，以实现云端中间件层服务发现和故障转移，服务注册与发现对于微服务来说是非常重要的，有了服务注册与发现，只需要使用服务的标识符，就可以访问到服务，而不需要修改服务调用的配置文件了，功能类似于Dubbo的注册中心，比如Zookeeper.</p></li><li><p>Springcloud 封装了Netflix公司开发的Eureka模块来实现服务注册与发现 (对比Zookeeper).</p></li><li><p>Eureka采用了C-S的架构设计，EurekaServer作为服务注册功能的服务器，他是服务注册中心.</p></li><li><p>而系统中的其他微服务，使用Eureka的客户端连接到EurekaServer并维持心跳连接。这样系统的维护人员就可以通过EurekaServer来监控系统中各个微服务是否正常运行，Springcloud 的一些其他模块 (比如Zuul) 就可以通过EurekaServer来发现系统中的其他微服务，并执行相关的逻辑.</p></li></ul><p><img src="`+l+`" alt="在这里插入图片描述"></p><ul><li>Eureka 包含两个组件：<strong>Eureka Server</strong> 和 <strong>Eureka Client</strong>.</li><li>Eureka Server 提供服务注册，各个节点启动后，回在EurekaServer中进行注册，这样Eureka Server中的服务注册表中将会储存所有课用服务节点的信息，服务节点的信息可以在界面中直观的看到.</li><li>Eureka Client 是一个Java客户端，用于简化EurekaServer的交互，客户端同时也具备一个内置的，使用轮询负载算法的负载均衡器。在应用启动后，将会向EurekaServer发送心跳 (默认周期为30秒) 。如果Eureka Server在多个心跳周期内没有接收到某个节点的心跳，EurekaServer将会从服务注册表中把这个服务节点移除掉 (默认周期为90s).</li><li>上图中，Eureka Server就是注册中心；服务提供者和服务消费者就是Eureka Client；提供者将自己ip和端口注册到注册中心；消费者就可以从注册中心获取并调用。</li></ul><p>三大角色：</p><ul><li>Eureka Server：提供服务的注册与发现。和Zookeeper一样</li><li>Server Provider：将自身服务注册到Eureka</li><li>Server Consumer：从Eureka中获取注册服务列表，找到服务提供者。</li></ul><h3 id="_2-2-代码" tabindex="-1">2.2 代码 <a class="header-anchor" href="#_2-2-代码" aria-label="Permalink to &quot;2.2  代码&quot;">​</a></h3><h4 id="eureka-server代码" tabindex="-1">Eureka Server代码 <a class="header-anchor" href="#eureka-server代码" aria-label="Permalink to &quot;Eureka Server代码&quot;">​</a></h4><p>创建一个空的Maven项目, 引入依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">	&lt;parent&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;version&gt;2.3.12.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/parent&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!-- 打包方式 pom --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;packaging&gt;pom&lt;/packaging&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;properties&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;maven.compiler.source&gt;11&lt;/maven.compiler.source&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;maven.compiler.target&gt;11&lt;/maven.compiler.target&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;spring-cloud.version&gt;Hoxton.SR12&lt;/spring-cloud.version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/properties&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;dependencyManagement&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;!--SpringCloud--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;artifactId&gt;spring-cloud-dependencies&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;version&gt;\${spring-cloud.version}&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;type&gt;pom&lt;/type&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;scope&gt;import&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;!--数据库--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;version&gt;5.1.28&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;artifactId&gt;druid-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;version&gt;1.1.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;version&gt;2.0.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/dependencies&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/dependencyManagement&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">	&lt;parent&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;version&gt;2.3.12.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/parent&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;!-- 打包方式 pom --&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;packaging&gt;pom&lt;/packaging&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;properties&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;maven.compiler.source&gt;11&lt;/maven.compiler.source&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;maven.compiler.target&gt;11&lt;/maven.compiler.target&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        &lt;spring-cloud.version&gt;Hoxton.SR12&lt;/spring-cloud.version&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/properties&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependencyManagement&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;!--SpringCloud--&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;artifactId&gt;spring-cloud-dependencies&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;version&gt;\${spring-cloud.version}&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;type&gt;pom&lt;/type&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;scope&gt;import&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;!--数据库--&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;version&gt;5.1.28&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;artifactId&gt;druid-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;version&gt;1.1.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;version&gt;2.0.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/dependencies&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependencyManagement&gt;</span></span></code></pre></div><p>创建一个子模块<code>springcloud-eureka-server</code> 引入依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-server&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;exclusions&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;groupId&gt;org.junit.vintage&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;artifactId&gt;junit-vintage-engine&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/exclusions&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependencies&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-server&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;exclusions&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;groupId&gt;org.junit.vintage&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;artifactId&gt;junit-vintage-engine&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/exclusions&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependencies&gt;</span></span></code></pre></div><p>写配置（单节点）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server:</span></span>
<span class="line"><span style="color:#e1e4e8;">  port: 8761</span></span>
<span class="line"><span style="color:#e1e4e8;">spring:</span></span>
<span class="line"><span style="color:#e1e4e8;">  application:</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: eureka-server</span></span>
<span class="line"><span style="color:#e1e4e8;">eureka:</span></span>
<span class="line"><span style="color:#e1e4e8;">  instance:</span></span>
<span class="line"><span style="color:#e1e4e8;">    hostname: localhost</span></span>
<span class="line"><span style="color:#e1e4e8;">  client:</span></span>
<span class="line"><span style="color:#e1e4e8;">    registerWithEureka: false   # 是否将自己注册到注册中心，false, 我自己就是注册中心</span></span>
<span class="line"><span style="color:#e1e4e8;">    fetchRegistry: false        # 是否从注册中心获取服务注册信息，client才用</span></span>
<span class="line"><span style="color:#e1e4e8;">    serviceUrl:</span></span>
<span class="line"><span style="color:#e1e4e8;">      defaultZone: http://localhost:8761/eureka/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">server:</span></span>
<span class="line"><span style="color:#24292e;">  port: 8761</span></span>
<span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">  application:</span></span>
<span class="line"><span style="color:#24292e;">    name: eureka-server</span></span>
<span class="line"><span style="color:#24292e;">eureka:</span></span>
<span class="line"><span style="color:#24292e;">  instance:</span></span>
<span class="line"><span style="color:#24292e;">    hostname: localhost</span></span>
<span class="line"><span style="color:#24292e;">  client:</span></span>
<span class="line"><span style="color:#24292e;">    registerWithEureka: false   # 是否将自己注册到注册中心，false, 我自己就是注册中心</span></span>
<span class="line"><span style="color:#24292e;">    fetchRegistry: false        # 是否从注册中心获取服务注册信息，client才用</span></span>
<span class="line"><span style="color:#24292e;">    serviceUrl:</span></span>
<span class="line"><span style="color:#24292e;">      defaultZone: http://localhost:8761/eureka/</span></span></code></pre></div><p>配置（两个节点）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server:</span></span>
<span class="line"><span style="color:#e1e4e8;">  port: 8761</span></span>
<span class="line"><span style="color:#e1e4e8;">spring:</span></span>
<span class="line"><span style="color:#e1e4e8;">  application:</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: eureka-server</span></span>
<span class="line"><span style="color:#e1e4e8;">eureka:</span></span>
<span class="line"><span style="color:#e1e4e8;">  instance:</span></span>
<span class="line"><span style="color:#e1e4e8;">    hostname: eureka01</span></span>
<span class="line"><span style="color:#e1e4e8;">    prefer-ip-address: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    instance-id: \${spring.cloud.client.ip-address}:\${server.port}</span></span>
<span class="line"><span style="color:#e1e4e8;">  client:</span></span>
<span class="line"><span style="color:#e1e4e8;">    serviceUrl:</span></span>
<span class="line"><span style="color:#e1e4e8;">      defaultZone: http://localhost:8762/eureka/     # 写另一个节点的地址</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">server:</span></span>
<span class="line"><span style="color:#24292e;">  port: 8761</span></span>
<span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">  application:</span></span>
<span class="line"><span style="color:#24292e;">    name: eureka-server</span></span>
<span class="line"><span style="color:#24292e;">eureka:</span></span>
<span class="line"><span style="color:#24292e;">  instance:</span></span>
<span class="line"><span style="color:#24292e;">    hostname: eureka01</span></span>
<span class="line"><span style="color:#24292e;">    prefer-ip-address: true</span></span>
<span class="line"><span style="color:#24292e;">    instance-id: \${spring.cloud.client.ip-address}:\${server.port}</span></span>
<span class="line"><span style="color:#24292e;">  client:</span></span>
<span class="line"><span style="color:#24292e;">    serviceUrl:</span></span>
<span class="line"><span style="color:#24292e;">      defaultZone: http://localhost:8762/eureka/     # 写另一个节点的地址</span></span></code></pre></div><p>写启动类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#e1e4e8;">@EnableEurekaServer</span></span>
<span class="line"><span style="color:#e1e4e8;">public class EurekaServerApp {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        SpringApplication.run(EurekaServerApp.class, args);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#24292e;">@EnableEurekaServer</span></span>
<span class="line"><span style="color:#24292e;">public class EurekaServerApp {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        SpringApplication.run(EurekaServerApp.class, args);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>启动，并访问<code>localhost:8761</code>就能看到注册中心</p><h4 id="provider代码" tabindex="-1">Provider代码 <a class="header-anchor" href="#provider代码" aria-label="Permalink to &quot;Provider代码&quot;">​</a></h4><p>创建两个模块，分别是生产者和消费者</p><p>依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;artifactId&gt;lombok&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;scope&gt;provided&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependencies&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;artifactId&gt;lombok&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;scope&gt;provided&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependencies&gt;</span></span></code></pre></div><p>配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server:</span></span>
<span class="line"><span style="color:#e1e4e8;">  port: 8001</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">spring:</span></span>
<span class="line"><span style="color:#e1e4e8;">  application:</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: service-provider</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">eureka:</span></span>
<span class="line"><span style="color:#e1e4e8;">  instance:</span></span>
<span class="line"><span style="color:#e1e4e8;">    prefer-ip-address: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    instance-id: \${spring.cloud.client.ip-address}:\${server.port}</span></span>
<span class="line"><span style="color:#e1e4e8;">  client:</span></span>
<span class="line"><span style="color:#e1e4e8;">    serviceUrl:</span></span>
<span class="line"><span style="color:#e1e4e8;">      defaultZone: http://localhost:8761/eureka/,http://localhost:8762/eureka/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">server:</span></span>
<span class="line"><span style="color:#24292e;">  port: 8001</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">  application:</span></span>
<span class="line"><span style="color:#24292e;">    name: service-provider</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">eureka:</span></span>
<span class="line"><span style="color:#24292e;">  instance:</span></span>
<span class="line"><span style="color:#24292e;">    prefer-ip-address: true</span></span>
<span class="line"><span style="color:#24292e;">    instance-id: \${spring.cloud.client.ip-address}:\${server.port}</span></span>
<span class="line"><span style="color:#24292e;">  client:</span></span>
<span class="line"><span style="color:#24292e;">    serviceUrl:</span></span>
<span class="line"><span style="color:#24292e;">      defaultZone: http://localhost:8761/eureka/,http://localhost:8762/eureka/</span></span></code></pre></div><p>其实就是一个Spring Boot工程，提供了对外的接口</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@RestController</span></span>
<span class="line"><span style="color:#e1e4e8;">@RequestMapping(&quot;/product&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public class ProductController {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    private ProductService productService;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @GetMapping(&quot;/list&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public List&lt;Product&gt; selectProductList() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return productService.selectProductList();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@RestController</span></span>
<span class="line"><span style="color:#24292e;">@RequestMapping(&quot;/product&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public class ProductController {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private ProductService productService;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @GetMapping(&quot;/list&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public List&lt;Product&gt; selectProductList() {</span></span>
<span class="line"><span style="color:#24292e;">        return productService.selectProductList();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>启动类，启动类还默认开启了Eureka</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#e1e4e8;">//@EnableEurekaClient  默认开启</span></span>
<span class="line"><span style="color:#e1e4e8;">public class ProviderApp {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        SpringApplication.run(ProviderApp.class, args);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#24292e;">//@EnableEurekaClient  默认开启</span></span>
<span class="line"><span style="color:#24292e;">public class ProviderApp {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        SpringApplication.run(ProviderApp.class, args);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="consumer代码" tabindex="-1">Consumer代码 <a class="header-anchor" href="#consumer代码" aria-label="Permalink to &quot;Consumer代码&quot;">​</a></h4><p>依赖和Provider一样</p><p>配置如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server:</span></span>
<span class="line"><span style="color:#e1e4e8;">  port: 9001</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">spring:</span></span>
<span class="line"><span style="color:#e1e4e8;">  application:</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: service-consumer</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">eureka:</span></span>
<span class="line"><span style="color:#e1e4e8;">  instance:</span></span>
<span class="line"><span style="color:#e1e4e8;">    prefer-ip-address: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    instance-id: \${spring.cloud.client.ip-address}:\${server.port}</span></span>
<span class="line"><span style="color:#e1e4e8;">  client:</span></span>
<span class="line"><span style="color:#e1e4e8;">    serviceUrl:</span></span>
<span class="line"><span style="color:#e1e4e8;">      defaultZone: http://localhost:8761/eureka/,http://localhost:8762/eureka/</span></span>
<span class="line"><span style="color:#e1e4e8;">    registry-fetch-interval-seconds: 10</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">server:</span></span>
<span class="line"><span style="color:#24292e;">  port: 9001</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">  application:</span></span>
<span class="line"><span style="color:#24292e;">    name: service-consumer</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">eureka:</span></span>
<span class="line"><span style="color:#24292e;">  instance:</span></span>
<span class="line"><span style="color:#24292e;">    prefer-ip-address: true</span></span>
<span class="line"><span style="color:#24292e;">    instance-id: \${spring.cloud.client.ip-address}:\${server.port}</span></span>
<span class="line"><span style="color:#24292e;">  client:</span></span>
<span class="line"><span style="color:#24292e;">    serviceUrl:</span></span>
<span class="line"><span style="color:#24292e;">      defaultZone: http://localhost:8761/eureka/,http://localhost:8762/eureka/</span></span>
<span class="line"><span style="color:#24292e;">    registry-fetch-interval-seconds: 10</span></span></code></pre></div><p>启动类如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#e1e4e8;">public class ConsumerApp {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        SpringApplication.run(ConsumerApp.class, args);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	// RestTemplate是Restful风格http传输模板</span></span>
<span class="line"><span style="color:#e1e4e8;">	// @LoadBalanced是一个注解，这样就可以用生产者接口</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Bean</span></span>
<span class="line"><span style="color:#e1e4e8;">    @LoadBalanced</span></span>
<span class="line"><span style="color:#e1e4e8;">    public RestTemplate restTemplate() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return new RestTemplate();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#24292e;">public class ConsumerApp {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        SpringApplication.run(ConsumerApp.class, args);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	// RestTemplate是Restful风格http传输模板</span></span>
<span class="line"><span style="color:#24292e;">	// @LoadBalanced是一个注解，这样就可以用生产者接口</span></span>
<span class="line"><span style="color:#24292e;">    @Bean</span></span>
<span class="line"><span style="color:#24292e;">    @LoadBalanced</span></span>
<span class="line"><span style="color:#24292e;">    public RestTemplate restTemplate() {</span></span>
<span class="line"><span style="color:#24292e;">        return new RestTemplate();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>消费者核心代码如下:</p><p>消费着调用生产者接口有三种方式（分别对应代码中的三个方法）：</p><ul><li><code>EurekaClient</code>类</li><li><code>LoadBalancerClient</code>类</li><li><code>@LoadBalanced</code>注解</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Service</span></span>
<span class="line"><span style="color:#e1e4e8;">public class OrderService {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // Restful风格的http模板</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    private RestTemplate restTemplate;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 发现服务列表</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    private EurekaClient discoveryClient;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 通过Ribbon负载均衡，调用服务</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    private LoadBalancerClient loadBalancerClient;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    Order selectOrderById(Integer id) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return new Order(id, &quot;order-001&quot;, &quot;南京江宁&quot;, 1020D, selectProductListByLoadBalancerAnnotation());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private List&lt;Product&gt; selectProductListByDiscoveryClient() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        InstanceInfo nextServerFromEureka = discoveryClient.getNextServerFromEureka(&quot;service-provider&quot;, false);</span></span>
<span class="line"><span style="color:#e1e4e8;">        StringBuffer sb = new StringBuffer();</span></span>
<span class="line"><span style="color:#e1e4e8;">        sb.append(&quot;http://&quot; + nextServerFromEureka.getHostName() + &quot;:&quot; + nextServerFromEureka.getPort() + &quot;/product/list&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        ResponseEntity&lt;List&lt;Product&gt;&gt; response = restTemplate.exchange(</span></span>
<span class="line"><span style="color:#e1e4e8;">                sb.toString(),</span></span>
<span class="line"><span style="color:#e1e4e8;">                HttpMethod.GET,</span></span>
<span class="line"><span style="color:#e1e4e8;">                null,</span></span>
<span class="line"><span style="color:#e1e4e8;">                new ParameterizedTypeReference&lt;List&lt;Product&gt;&gt;() {</span></span>
<span class="line"><span style="color:#e1e4e8;">                });</span></span>
<span class="line"><span style="color:#e1e4e8;">        return response.getBody();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private List&lt;Product&gt; selectProductListByLoadBalancerClient() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ServiceInstance choose = loadBalancerClient.choose(&quot;service-provider&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        StringBuffer sb = new StringBuffer();</span></span>
<span class="line"><span style="color:#e1e4e8;">        sb.append(&quot;http://&quot; + choose.getHost() + &quot;:&quot; + choose.getPort() + &quot;/product/list&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        ResponseEntity&lt;List&lt;Product&gt;&gt; response = restTemplate.exchange(</span></span>
<span class="line"><span style="color:#e1e4e8;">                sb.toString(),</span></span>
<span class="line"><span style="color:#e1e4e8;">                HttpMethod.GET,</span></span>
<span class="line"><span style="color:#e1e4e8;">                null,</span></span>
<span class="line"><span style="color:#e1e4e8;">                new ParameterizedTypeReference&lt;List&lt;Product&gt;&gt;() {</span></span>
<span class="line"><span style="color:#e1e4e8;">                });</span></span>
<span class="line"><span style="color:#e1e4e8;">        return response.getBody();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private List&lt;Product&gt; selectProductListByLoadBalancerAnnotation() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ServiceInstance choose = loadBalancerClient.choose(&quot;service-provider&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        StringBuffer sb = new StringBuffer();</span></span>
<span class="line"><span style="color:#e1e4e8;">        sb.append(&quot;http://&quot; + choose.getHost() + &quot;:&quot; + choose.getPort() + &quot;/product/list&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        ResponseEntity&lt;List&lt;Product&gt;&gt; response = restTemplate.exchange(</span></span>
<span class="line"><span style="color:#e1e4e8;">                &quot;http://service-provider/product/list&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                HttpMethod.GET,</span></span>
<span class="line"><span style="color:#e1e4e8;">                null,</span></span>
<span class="line"><span style="color:#e1e4e8;">                new ParameterizedTypeReference&lt;List&lt;Product&gt;&gt;() {</span></span>
<span class="line"><span style="color:#e1e4e8;">                });</span></span>
<span class="line"><span style="color:#e1e4e8;">        return response.getBody();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Service</span></span>
<span class="line"><span style="color:#24292e;">public class OrderService {</span></span>
<span class="line"><span style="color:#24292e;">    // Restful风格的http模板</span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private RestTemplate restTemplate;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 发现服务列表</span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private EurekaClient discoveryClient;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 通过Ribbon负载均衡，调用服务</span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private LoadBalancerClient loadBalancerClient;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    Order selectOrderById(Integer id) {</span></span>
<span class="line"><span style="color:#24292e;">        return new Order(id, &quot;order-001&quot;, &quot;南京江宁&quot;, 1020D, selectProductListByLoadBalancerAnnotation());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private List&lt;Product&gt; selectProductListByDiscoveryClient() {</span></span>
<span class="line"><span style="color:#24292e;">        InstanceInfo nextServerFromEureka = discoveryClient.getNextServerFromEureka(&quot;service-provider&quot;, false);</span></span>
<span class="line"><span style="color:#24292e;">        StringBuffer sb = new StringBuffer();</span></span>
<span class="line"><span style="color:#24292e;">        sb.append(&quot;http://&quot; + nextServerFromEureka.getHostName() + &quot;:&quot; + nextServerFromEureka.getPort() + &quot;/product/list&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        ResponseEntity&lt;List&lt;Product&gt;&gt; response = restTemplate.exchange(</span></span>
<span class="line"><span style="color:#24292e;">                sb.toString(),</span></span>
<span class="line"><span style="color:#24292e;">                HttpMethod.GET,</span></span>
<span class="line"><span style="color:#24292e;">                null,</span></span>
<span class="line"><span style="color:#24292e;">                new ParameterizedTypeReference&lt;List&lt;Product&gt;&gt;() {</span></span>
<span class="line"><span style="color:#24292e;">                });</span></span>
<span class="line"><span style="color:#24292e;">        return response.getBody();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private List&lt;Product&gt; selectProductListByLoadBalancerClient() {</span></span>
<span class="line"><span style="color:#24292e;">        ServiceInstance choose = loadBalancerClient.choose(&quot;service-provider&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        StringBuffer sb = new StringBuffer();</span></span>
<span class="line"><span style="color:#24292e;">        sb.append(&quot;http://&quot; + choose.getHost() + &quot;:&quot; + choose.getPort() + &quot;/product/list&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        ResponseEntity&lt;List&lt;Product&gt;&gt; response = restTemplate.exchange(</span></span>
<span class="line"><span style="color:#24292e;">                sb.toString(),</span></span>
<span class="line"><span style="color:#24292e;">                HttpMethod.GET,</span></span>
<span class="line"><span style="color:#24292e;">                null,</span></span>
<span class="line"><span style="color:#24292e;">                new ParameterizedTypeReference&lt;List&lt;Product&gt;&gt;() {</span></span>
<span class="line"><span style="color:#24292e;">                });</span></span>
<span class="line"><span style="color:#24292e;">        return response.getBody();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private List&lt;Product&gt; selectProductListByLoadBalancerAnnotation() {</span></span>
<span class="line"><span style="color:#24292e;">        ServiceInstance choose = loadBalancerClient.choose(&quot;service-provider&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        StringBuffer sb = new StringBuffer();</span></span>
<span class="line"><span style="color:#24292e;">        sb.append(&quot;http://&quot; + choose.getHost() + &quot;:&quot; + choose.getPort() + &quot;/product/list&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        ResponseEntity&lt;List&lt;Product&gt;&gt; response = restTemplate.exchange(</span></span>
<span class="line"><span style="color:#24292e;">                &quot;http://service-provider/product/list&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                HttpMethod.GET,</span></span>
<span class="line"><span style="color:#24292e;">                null,</span></span>
<span class="line"><span style="color:#24292e;">                new ParameterizedTypeReference&lt;List&lt;Product&gt;&gt;() {</span></span>
<span class="line"><span style="color:#24292e;">                });</span></span>
<span class="line"><span style="color:#24292e;">        return response.getBody();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_2-3-cap原则" tabindex="-1">2.3 CAP原则 <a class="header-anchor" href="#_2-3-cap原则" aria-label="Permalink to &quot;2.3 CAP原则&quot;">​</a></h3><p>CAP是指分布式系统的三个性质：</p><p>C表示一致性：数据一致。</p><p>A表示可用性：在集群中一部分节点故障后，集群整体是否还能响应客户端的读写请求。</p><p>P表示分区容错性：数据分区。</p><p>三者只能满足其二：</p><p>CA：数据一致，且快速响应，但是不能分区，一般大型系统不用（不符合分布式）。</p><p>CP：数据一直，且分区。对应银行等对数据严格要求的系统。</p><p>AP：快速响应，且分区。电商平台，前端显示有货，在订单提交后 再校验是否还有货。</p><h1 id="_3-ribbon负载均衡" tabindex="-1">3 Ribbon负载均衡 <a class="header-anchor" href="#_3-ribbon负载均衡" aria-label="Permalink to &quot;3 Ribbon负载均衡&quot;">​</a></h1><h3 id="_3-1-概念" tabindex="-1">3.1 概念 <a class="header-anchor" href="#_3-1-概念" aria-label="Permalink to &quot;3.1  概念&quot;">​</a></h3><p>Ribbon提供了一套微服务的负载均衡方案。</p><p>Ribbon是一个基于HTTP和TCP的客户端负载均衡工具。</p><p>Ribbon不像服务注册中心、配置中心、网关那样独立部署，但是它几乎存在每个Spring Cloud微服务中。</p><p>Ribbon提供了多种负载均衡算法，如轮询、随机，甚至自定义。</p><p>两大类负载均衡方案：</p><ul><li>集中式：由硬件或软件将访问通过某种策略转发至provider，如Nginx</li><li>进程内/客户端：将负载均衡逻辑集成到consumer，从服务注册中心获知可用地址，然后选择出一个合适的provider，如Ribbon，Ribbon是一个类库，从注册中心获取provider。</li></ul><p>Ribbon负载均衡策略：</p><ul><li>默认的轮询：<code>RibbonRobinRule</code></li><li>权重轮询：<code>WeightedResponseTimeRule</code> ，最开始是轮询，然后响应时间作为权重。</li><li>随机：<code>RandomRule</code>。</li><li>最少并发策略：<code>BestAvailableRule</code>，选择访问并发数量最少的。</li></ul><h3 id="_3-2-策略设置" tabindex="-1">3.2 策略设置 <a class="header-anchor" href="#_3-2-策略设置" aria-label="Permalink to &quot;3.2 策略设置&quot;">​</a></h3><p>1、全局</p><p>在启动类或者配置类中注册负载均衡对象，所有服务均使用该策略</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Bean</span></span>
<span class="line"><span style="color:#e1e4e8;">public RandomRule randomRule() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return new RandomRule();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Bean</span></span>
<span class="line"><span style="color:#24292e;">public RandomRule randomRule() {</span></span>
<span class="line"><span style="color:#24292e;">    return new RandomRule();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>2、局部</p><p>修改配置文件指定服务的负载均衡策略。</p><p>注意：&#39;service-provider&#39;是服务的名称。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">service-provier:  // 注意：&#39;service-provider&#39;是provider的spring.application.name</span></span>
<span class="line"><span style="color:#e1e4e8;">  ribbon:</span></span>
<span class="line"><span style="color:#e1e4e8;">    NFLoadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">service-provier:  // 注意：&#39;service-provider&#39;是provider的spring.application.name</span></span>
<span class="line"><span style="color:#24292e;">  ribbon:</span></span>
<span class="line"><span style="color:#24292e;">    NFLoadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule</span></span></code></pre></div><h3 id="_3-3-点对点直连" tabindex="-1">3.3 点对点直连 <a class="header-anchor" href="#_3-3-点对点直连" aria-label="Permalink to &quot;3.3 点对点直连&quot;">​</a></h3><p>点对点直连：consumer跳过注册中心直接请求provider。（一般用于测试阶段）</p><p>consumer依赖：去掉eureka 添加ribbon</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!--&lt;dependency&gt;--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!--    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!--    &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt;--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!--&lt;/dependency&gt;--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-cloud-starter-netflix-ribbon&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!--&lt;dependency&gt;--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--    &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt;--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--&lt;/dependency&gt;--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-cloud-starter-netflix-ribbon&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>consumer配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">service-provider:</span></span>
<span class="line"><span style="color:#e1e4e8;">  ribbon:</span></span>
<span class="line"><span style="color:#e1e4e8;">    # ribbon负载均衡策略</span></span>
<span class="line"><span style="color:#e1e4e8;">    NFLoadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 服务地址</span></span>
<span class="line"><span style="color:#e1e4e8;">    listOfServers: http://localhost:8001,http://localhost:8002</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ribbon:</span></span>
<span class="line"><span style="color:#e1e4e8;">  eureka:</span></span>
<span class="line"><span style="color:#e1e4e8;">    enabled: false # 关闭eureka 实现点对点直连</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">service-provider:</span></span>
<span class="line"><span style="color:#24292e;">  ribbon:</span></span>
<span class="line"><span style="color:#24292e;">    # ribbon负载均衡策略</span></span>
<span class="line"><span style="color:#24292e;">    NFLoadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule</span></span>
<span class="line"><span style="color:#24292e;">    # 服务地址</span></span>
<span class="line"><span style="color:#24292e;">    listOfServers: http://localhost:8001,http://localhost:8002</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ribbon:</span></span>
<span class="line"><span style="color:#24292e;">  eureka:</span></span>
<span class="line"><span style="color:#24292e;">    enabled: false # 关闭eureka 实现点对点直连</span></span></code></pre></div><p>随后，关闭注册中心，只打开provider，然后打开consumer测试，可直接连接。</p><h1 id="_4-consul服务注册中心" tabindex="-1">4 Consul服务注册中心 <a class="header-anchor" href="#_4-consul服务注册中心" aria-label="Permalink to &quot;4 Consul服务注册中心&quot;">​</a></h1><h3 id="_4-1-常见注册中心" tabindex="-1">4.1 常见注册中心 <a class="header-anchor" href="#_4-1-常见注册中心" aria-label="Permalink to &quot;4.1 常见注册中心&quot;">​</a></h3><p>虽然eureka2.0停止开发，但是目前国内大部分都是eureka1.x，并且官方也在积极维护。</p><p>学习多个注册中心，避免技术局限。</p><p>常见注册中心：</p><ul><li>Netflix Eureka</li><li>Alibaba Nacos</li><li>HashiCorp Consul</li><li>Apache ZooKeeper</li></ul><h3 id="_4-2-consul介绍" tabindex="-1">4.2 Consul介绍 <a class="header-anchor" href="#_4-2-consul介绍" aria-label="Permalink to &quot;4.2 Consul介绍&quot;">​</a></h3><p>consul是开源的，consul一站式，内置了许多方案，并且使用方便，不依赖其他工具。</p><p>consul用Go语言编写，具有天然可移植性，安装包仅包含一个可执行文件，方便部署。</p><p>（Go语言写并发优于Java）</p><h3 id="_4-3-概念和原理" tabindex="-1">4.3 概念和原理 <a class="header-anchor" href="#_4-3-概念和原理" aria-label="Permalink to &quot;4.3  概念和原理&quot;">​</a></h3><p>consul工作原理：（和Eureka类似）</p><ul><li>health是检查健康状态（是否可用）</li></ul><p><img src="`+p+`" alt="image-20220105231145429"></p><h3 id="_4-4-安装单节点" tabindex="-1">4.4 安装单节点 <a class="header-anchor" href="#_4-4-安装单节点" aria-label="Permalink to &quot;4.4 安装单节点&quot;">​</a></h3><p><strong>单节点</strong></p><p>直接从官网下载win版。解压压缩包，只有一个consul.exe文件。到当前目录，打开cmd命令窗口启动。启动命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">consul agent -dev -client=0.0.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># -dev 表示开发者模式运行，还有-server表示服务模式运行</span></span>
<span class="line"><span style="color:#e1e4e8;"># -client=0.0.0.0表示可以使用该注册中心的ip，现在0.0.0.0表示放弃其他ip</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">consul agent -dev -client=0.0.0.0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># -dev 表示开发者模式运行，还有-server表示服务模式运行</span></span>
<span class="line"><span style="color:#24292e;"># -client=0.0.0.0表示可以使用该注册中心的ip，现在0.0.0.0表示放弃其他ip</span></span></code></pre></div><p>此外还可以写一个bat脚本，方便运行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">consul agent -dev -client=0.0.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">pause</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">consul agent -dev -client=0.0.0.0</span></span>
<span class="line"><span style="color:#24292e;">pause</span></span></code></pre></div><p>启动后访问<code>localhost:8500</code> 就可以看到注册中心</p><h3 id="_4-4-代码案例" tabindex="-1">4.4 代码案例 <a class="header-anchor" href="#_4-4-代码案例" aria-label="Permalink to &quot;4.4 代码案例&quot;">​</a></h3><p>1、新建一个空的maven项目，引入spring cloud依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;parent&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;version&gt;2.3.12.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/parent&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!-- 打包方式 pom --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;packaging&gt;pom&lt;/packaging&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;properties&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;maven.compiler.source&gt;11&lt;/maven.compiler.source&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;maven.compiler.target&gt;11&lt;/maven.compiler.target&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/properties&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependencyManagement&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;artifactId&gt;spring-cloud-dependencies&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;version&gt;Hoxton.SR12&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;type&gt;pom&lt;/type&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;scope&gt;import&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/dependencies&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependencyManagement&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;parent&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;2.3.12.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/parent&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- 打包方式 pom --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;packaging&gt;pom&lt;/packaging&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;properties&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;maven.compiler.source&gt;11&lt;/maven.compiler.source&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;maven.compiler.target&gt;11&lt;/maven.compiler.target&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/properties&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;dependencyManagement&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;artifactId&gt;spring-cloud-dependencies&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;version&gt;Hoxton.SR12&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;type&gt;pom&lt;/type&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;scope&gt;import&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependencies&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependencyManagement&gt;</span></span></code></pre></div><p>2、创建子模块provider，</p><p>依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;artifactId&gt;spring-cloud-starter-consul-discovery&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;artifactId&gt;lombok&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;scope&gt;provided&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;exclusions&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;groupId&gt;org.junit.vintage&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">                &lt;artifactId&gt;junit-vintage-engine&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/exclusions&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependencies&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;artifactId&gt;spring-cloud-starter-consul-discovery&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;artifactId&gt;lombok&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;scope&gt;provided&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;exclusions&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;groupId&gt;org.junit.vintage&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">                &lt;artifactId&gt;junit-vintage-engine&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/exclusions&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependencies&gt;</span></span></code></pre></div><p>子模块provider 配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server:</span></span>
<span class="line"><span style="color:#e1e4e8;">  port: 8003 # 端口</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">spring:</span></span>
<span class="line"><span style="color:#e1e4e8;">  application:</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: service-consumer # 应用名称</span></span>
<span class="line"><span style="color:#e1e4e8;">  cloud:</span></span>
<span class="line"><span style="color:#e1e4e8;">    consul:</span></span>
<span class="line"><span style="color:#e1e4e8;">      host: localhost   # 注册中心地址</span></span>
<span class="line"><span style="color:#e1e4e8;">      port: 8500</span></span>
<span class="line"><span style="color:#e1e4e8;">      discovery:</span></span>
<span class="line"><span style="color:#e1e4e8;">        register: false                                # 是否注册自己</span></span>
<span class="line"><span style="color:#e1e4e8;">        instance-id: \${spring.application.name}-01    # 注册实例id（必须唯一）</span></span>
<span class="line"><span style="color:#e1e4e8;">        service-name: \${spring.application.name}      # 服务名称</span></span>
<span class="line"><span style="color:#e1e4e8;">        port: \${server.port}                          # 服务端口</span></span>
<span class="line"><span style="color:#e1e4e8;">        prefer-ip-address: true                       # 是否使用ip注册</span></span>
<span class="line"><span style="color:#e1e4e8;">        ip-address: \${spring.cloud.client.ip-address} # 服务请求ip</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">server:</span></span>
<span class="line"><span style="color:#24292e;">  port: 8003 # 端口</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">  application:</span></span>
<span class="line"><span style="color:#24292e;">    name: service-consumer # 应用名称</span></span>
<span class="line"><span style="color:#24292e;">  cloud:</span></span>
<span class="line"><span style="color:#24292e;">    consul:</span></span>
<span class="line"><span style="color:#24292e;">      host: localhost   # 注册中心地址</span></span>
<span class="line"><span style="color:#24292e;">      port: 8500</span></span>
<span class="line"><span style="color:#24292e;">      discovery:</span></span>
<span class="line"><span style="color:#24292e;">        register: false                                # 是否注册自己</span></span>
<span class="line"><span style="color:#24292e;">        instance-id: \${spring.application.name}-01    # 注册实例id（必须唯一）</span></span>
<span class="line"><span style="color:#24292e;">        service-name: \${spring.application.name}      # 服务名称</span></span>
<span class="line"><span style="color:#24292e;">        port: \${server.port}                          # 服务端口</span></span>
<span class="line"><span style="color:#24292e;">        prefer-ip-address: true                       # 是否使用ip注册</span></span>
<span class="line"><span style="color:#24292e;">        ip-address: \${spring.cloud.client.ip-address} # 服务请求ip</span></span></code></pre></div><p>子模块provider 启动类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#e1e4e8;">public class AppProvider01 {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        SpringApplication.run(AppProvider01.class, args);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#24292e;">public class AppProvider01 {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        SpringApplication.run(AppProvider01.class, args);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>子模块provider的contoller</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@RestController</span></span>
<span class="line"><span style="color:#e1e4e8;">@RequestMapping(&quot;/product&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public class ProductController {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    private ProductService productService;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @GetMapping(&quot;/list&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public List&lt;Product&gt; selectProductList() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    	// 造一些假的数据</span></span>
<span class="line"><span style="color:#e1e4e8;">        return productService.selectProductList();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@RestController</span></span>
<span class="line"><span style="color:#24292e;">@RequestMapping(&quot;/product&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public class ProductController {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private ProductService productService;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @GetMapping(&quot;/list&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public List&lt;Product&gt; selectProductList() {</span></span>
<span class="line"><span style="color:#24292e;">    	// 造一些假的数据</span></span>
<span class="line"><span style="color:#24292e;">        return productService.selectProductList();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>注意：provider和consumer都有实体类Product自己定义</p><p>3、创建消费者consumer</p><p>依赖和provider一样</p><p>配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server:</span></span>
<span class="line"><span style="color:#e1e4e8;">  port: 8003 # 端口</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">spring:</span></span>
<span class="line"><span style="color:#e1e4e8;">  application:</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: service-consumer # 应用名称</span></span>
<span class="line"><span style="color:#e1e4e8;">  cloud:</span></span>
<span class="line"><span style="color:#e1e4e8;">    consul:</span></span>
<span class="line"><span style="color:#e1e4e8;">      host: localhost   # 注册中心地址</span></span>
<span class="line"><span style="color:#e1e4e8;">      port: 8500</span></span>
<span class="line"><span style="color:#e1e4e8;">      discovery:</span></span>
<span class="line"><span style="color:#e1e4e8;">        register: false                                # 是否注册自己</span></span>
<span class="line"><span style="color:#e1e4e8;">        instance-id: \${spring.application.name}-01    # 注册实例id（必须唯一）</span></span>
<span class="line"><span style="color:#e1e4e8;">        service-name: \${spring.application.name}      # 服务名称</span></span>
<span class="line"><span style="color:#e1e4e8;">        port: \${server.port}                          # 服务端口</span></span>
<span class="line"><span style="color:#e1e4e8;">        prefer-ip-address: true                       # 是否使用ip注册</span></span>
<span class="line"><span style="color:#e1e4e8;">        ip-address: \${spring.cloud.client.ip-address} # 服务请求ip</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">server:</span></span>
<span class="line"><span style="color:#24292e;">  port: 8003 # 端口</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">  application:</span></span>
<span class="line"><span style="color:#24292e;">    name: service-consumer # 应用名称</span></span>
<span class="line"><span style="color:#24292e;">  cloud:</span></span>
<span class="line"><span style="color:#24292e;">    consul:</span></span>
<span class="line"><span style="color:#24292e;">      host: localhost   # 注册中心地址</span></span>
<span class="line"><span style="color:#24292e;">      port: 8500</span></span>
<span class="line"><span style="color:#24292e;">      discovery:</span></span>
<span class="line"><span style="color:#24292e;">        register: false                                # 是否注册自己</span></span>
<span class="line"><span style="color:#24292e;">        instance-id: \${spring.application.name}-01    # 注册实例id（必须唯一）</span></span>
<span class="line"><span style="color:#24292e;">        service-name: \${spring.application.name}      # 服务名称</span></span>
<span class="line"><span style="color:#24292e;">        port: \${server.port}                          # 服务端口</span></span>
<span class="line"><span style="color:#24292e;">        prefer-ip-address: true                       # 是否使用ip注册</span></span>
<span class="line"><span style="color:#24292e;">        ip-address: \${spring.cloud.client.ip-address} # 服务请求ip</span></span></code></pre></div><p>启动类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#e1e4e8;">public class AppConsumer01 {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        SpringApplication.run(AppConsumer01.class, args);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // RestTemplate可以使用该模板访问Restful风格接口</span></span>
<span class="line"><span style="color:#e1e4e8;">    // @LoadBalanced是Ribbon的负载均衡注解</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Bean</span></span>
<span class="line"><span style="color:#e1e4e8;">    @LoadBalanced</span></span>
<span class="line"><span style="color:#e1e4e8;">    public RestTemplate restTemplate() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return new RestTemplate();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#24292e;">public class AppConsumer01 {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        SpringApplication.run(AppConsumer01.class, args);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // RestTemplate可以使用该模板访问Restful风格接口</span></span>
<span class="line"><span style="color:#24292e;">    // @LoadBalanced是Ribbon的负载均衡注解</span></span>
<span class="line"><span style="color:#24292e;">    @Bean</span></span>
<span class="line"><span style="color:#24292e;">    @LoadBalanced</span></span>
<span class="line"><span style="color:#24292e;">    public RestTemplate restTemplate() {</span></span>
<span class="line"><span style="color:#24292e;">        return new RestTemplate();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>编写一个controller供前端访问</p><p>service这么写：（controller略）</p><p>注意：service用到了一个Order实体类，自己定义，或者直接返回Product</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Service</span></span>
<span class="line"><span style="color:#e1e4e8;">public class OrderService {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    private RestTemplate restTemplate;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    Order selectOrderById(Integer id) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return new Order(id, &quot;order-001&quot;, &quot;南京江宁&quot;, 1020D, selectProductListByLoadBalancerAnnotation());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 最主要的是这段代码</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 使用restTemplate从provider取数据</span></span>
<span class="line"><span style="color:#e1e4e8;">    private List&lt;Product&gt; selectProductListByLoadBalancerAnnotation() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ResponseEntity&lt;List&lt;Product&gt;&gt; response = restTemplate.exchange(</span></span>
<span class="line"><span style="color:#e1e4e8;">                &quot;http://service-provider/product/list&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                HttpMethod.GET,</span></span>
<span class="line"><span style="color:#e1e4e8;">                null,</span></span>
<span class="line"><span style="color:#e1e4e8;">                new ParameterizedTypeReference&lt;List&lt;Product&gt;&gt;() {</span></span>
<span class="line"><span style="color:#e1e4e8;">                });</span></span>
<span class="line"><span style="color:#e1e4e8;">        return response.getBody();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Service</span></span>
<span class="line"><span style="color:#24292e;">public class OrderService {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private RestTemplate restTemplate;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    Order selectOrderById(Integer id) {</span></span>
<span class="line"><span style="color:#24292e;">        return new Order(id, &quot;order-001&quot;, &quot;南京江宁&quot;, 1020D, selectProductListByLoadBalancerAnnotation());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 最主要的是这段代码</span></span>
<span class="line"><span style="color:#24292e;">    // 使用restTemplate从provider取数据</span></span>
<span class="line"><span style="color:#24292e;">    private List&lt;Product&gt; selectProductListByLoadBalancerAnnotation() {</span></span>
<span class="line"><span style="color:#24292e;">        ResponseEntity&lt;List&lt;Product&gt;&gt; response = restTemplate.exchange(</span></span>
<span class="line"><span style="color:#24292e;">                &quot;http://service-provider/product/list&quot;,</span></span>
<span class="line"><span style="color:#24292e;">                HttpMethod.GET,</span></span>
<span class="line"><span style="color:#24292e;">                null,</span></span>
<span class="line"><span style="color:#24292e;">                new ParameterizedTypeReference&lt;List&lt;Product&gt;&gt;() {</span></span>
<span class="line"><span style="color:#24292e;">                });</span></span>
<span class="line"><span style="color:#24292e;">        return response.getBody();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_4-5-集群" tabindex="-1">4.5 集群 <a class="header-anchor" href="#_4-5-集群" aria-label="Permalink to &quot;4.5 集群&quot;">​</a></h3><p>上面都是用<code>-dev</code>开发模式启动的consul。</p><p>consul还有server和client模式。</p><p>server模式就是集群环境，集群推荐3-5个server，更多server之间通信开销更大。</p><p>client模式是无状态的代理功能，将请求转发给server处理。一个client一般对应一个微服务节点。</p><h5 id="集群环境准备" tabindex="-1">集群环境准备 <a class="header-anchor" href="#集群环境准备" aria-label="Permalink to &quot;集群环境准备&quot;">​</a></h5><p>三台Linux服务器建立三个Server；本机win10作为client端。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Linux安装consol并启动：</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 将zip包放到linux</span></span>
<span class="line"><span style="color:#e1e4e8;">mkdir /usr/local/consul</span></span>
<span class="line"><span style="color:#e1e4e8;">unzip xxx.zip -d /usr/local/consul/			# 解压</span></span>
<span class="line"><span style="color:#e1e4e8;">mkdir /usr/local/consul/data     			# 存放consul数据</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 进入目录consul，启动三个节点consul</span></span>
<span class="line"><span style="color:#e1e4e8;">./consul agent -server -bind=192.168.10.101 -client=0.0.0.0 -ui -bootstrap-expect=3 -data-dir=/usr/local/consul/data/ -node=server-01</span></span>
<span class="line"><span style="color:#e1e4e8;">./consul agent -server -bind=192.168.10.102 -client=0.0.0.0 -ui -bootstrap-expect=3 -data-dir=/usr/local/consul/data/ -node=server-02</span></span>
<span class="line"><span style="color:#e1e4e8;">./consul agent -server -bind=192.168.10.103 -client=0.0.0.0 -ui -bootstrap-expect=3 -data-dir=/usr/local/consul/data/ -node=server-03</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 虽然开启了，但是没有关联，现在将101当主节点，其他两台机器、以及客户端通过命令加入101</span></span>
<span class="line"><span style="color:#e1e4e8;">./consul join 192.168.10.101</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">win10客户端启动命令：(cmd窗口)</span></span>
<span class="line"><span style="color:#e1e4e8;">consul agent -client=0.0.0.0 -bind=192.168.10.1 -data-dir=D:\\consul\\data -node=client-01</span></span>
<span class="line"><span style="color:#e1e4e8;">consul join 192.168.10.101  (另外打开一个cmd窗口并输入加入101节点命令)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Linux安装consol并启动：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 将zip包放到linux</span></span>
<span class="line"><span style="color:#24292e;">mkdir /usr/local/consul</span></span>
<span class="line"><span style="color:#24292e;">unzip xxx.zip -d /usr/local/consul/			# 解压</span></span>
<span class="line"><span style="color:#24292e;">mkdir /usr/local/consul/data     			# 存放consul数据</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 进入目录consul，启动三个节点consul</span></span>
<span class="line"><span style="color:#24292e;">./consul agent -server -bind=192.168.10.101 -client=0.0.0.0 -ui -bootstrap-expect=3 -data-dir=/usr/local/consul/data/ -node=server-01</span></span>
<span class="line"><span style="color:#24292e;">./consul agent -server -bind=192.168.10.102 -client=0.0.0.0 -ui -bootstrap-expect=3 -data-dir=/usr/local/consul/data/ -node=server-02</span></span>
<span class="line"><span style="color:#24292e;">./consul agent -server -bind=192.168.10.103 -client=0.0.0.0 -ui -bootstrap-expect=3 -data-dir=/usr/local/consul/data/ -node=server-03</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 虽然开启了，但是没有关联，现在将101当主节点，其他两台机器、以及客户端通过命令加入101</span></span>
<span class="line"><span style="color:#24292e;">./consul join 192.168.10.101</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">win10客户端启动命令：(cmd窗口)</span></span>
<span class="line"><span style="color:#24292e;">consul agent -client=0.0.0.0 -bind=192.168.10.1 -data-dir=D:\\consul\\data -node=client-01</span></span>
<span class="line"><span style="color:#24292e;">consul join 192.168.10.101  (另外打开一个cmd窗口并输入加入101节点命令)</span></span></code></pre></div><p>通过前端<code>l92.168.10.101:8500</code>可以查看各节点</p><h5 id="测试代码" tabindex="-1">测试代码 <a class="header-anchor" href="#测试代码" aria-label="Permalink to &quot;测试代码&quot;">​</a></h5><p>创建两个provider，和前面代码都一样，配置也不用变（端口要变）！因为本机有client模式启动的consul。</p><p>创建一个consumer，和前面代码一样。</p><p>启动并访问consumer接口。</p><h1 id="_5-feign" tabindex="-1">5 Feign <a class="header-anchor" href="#_5-feign" aria-label="Permalink to &quot;5 Feign&quot;">​</a></h1><h3 id="_5-1-概念" tabindex="-1">5.1 概念 <a class="header-anchor" href="#_5-1-概念" aria-label="Permalink to &quot;5.1  概念&quot;">​</a></h3><p>Feign是Spring Cloud Netflix组件中的一个轻量级的Restful的HTTP服务客户端。封装了Ribbon和RestTemplate，实现了WebService的面向接口编程，进一步降低了代码的耦合度。</p><p>Feign本身并不支持Spring MVC注解，它有一套自己的注解，为了方便使用，Spring Cloud孵化了OpenFeign。</p><p>Feign是一种声明式的、模板化的HTTP客户端（仅在Consumer中使用）</p><p>Feign的使用：使用Feign的注解定义接口，调用这个接口，就可以调用服务注册中心的服务。</p><h3 id="_5-2-入门案例" tabindex="-1">5.2 入门案例 <a class="header-anchor" href="#_5-2-入门案例" aria-label="Permalink to &quot;5.2 入门案例&quot;">​</a></h3><p>首先，创建一个Spring Cloud工程，里面几个模块：eureka-server; provider; consumer，和Eureka服务注册中心代码一样。消费者模块可以用Feign简化代码（消费者模块仍然是Eureka的消费者）。</p><p>1、给消费者添加Feign依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>2、创建service接口，添加<code>@FeignClient</code>注解声明需要调用的服务（关键代码！！注意是一个接口）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 声明微服务名称</span></span>
<span class="line"><span style="color:#e1e4e8;">@FeignClient(&quot;service-provider&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public interface ProductService {</span></span>
<span class="line"><span style="color:#e1e4e8;">	// 远程接口</span></span>
<span class="line"><span style="color:#e1e4e8;">    @GetMapping(&quot;/product/list&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    List&lt;Product&gt; selectProductList();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 声明微服务名称</span></span>
<span class="line"><span style="color:#24292e;">@FeignClient(&quot;service-provider&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public interface ProductService {</span></span>
<span class="line"><span style="color:#24292e;">	// 远程接口</span></span>
<span class="line"><span style="color:#24292e;">    @GetMapping(&quot;/product/list&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    List&lt;Product&gt; selectProductList();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>3、通过<code>@Autowird</code>就可以使用消费者接口了 （调用接口）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Service</span></span>
<span class="line"><span style="color:#e1e4e8;">public class OrderService {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    private ProductService productService;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    Order selectOrderById(Integer id) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return new Order(id, &quot;order-001&quot;, &quot;南京江宁&quot;, 1020D, productService.selectProductList());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Service</span></span>
<span class="line"><span style="color:#24292e;">public class OrderService {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private ProductService productService;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    Order selectOrderById(Integer id) {</span></span>
<span class="line"><span style="color:#24292e;">        return new Order(id, &quot;order-001&quot;, &quot;南京江宁&quot;, 1020D, productService.selectProductList());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>4、定义消费者controller（略，代码不变）</p><p>5、启动类添加<code>@EnableFeignClients</code>注解激活Feign组件。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#e1e4e8;">@EnableFeignClients</span></span>
<span class="line"><span style="color:#e1e4e8;">public class ConsumerApp02 {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        SpringApplication.run(ConsumerApp02.class, args);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#24292e;">@EnableFeignClients</span></span>
<span class="line"><span style="color:#24292e;">public class ConsumerApp02 {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        SpringApplication.run(ConsumerApp02.class, args);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_5-3-feign负载均衡" tabindex="-1">5.3 Feign负载均衡 <a class="header-anchor" href="#_5-3-feign负载均衡" aria-label="Permalink to &quot;5.3  Feign负载均衡&quot;">​</a></h3><p>Feign封装了Ribbon，所以负载均衡配置和Ribbon一样。</p><p><strong>全局负载均衡策略</strong></p><p>在启动类或者配置类中注入负载均衡对象，所有请求均使用该策略。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Bean</span></span>
<span class="line"><span style="color:#e1e4e8;">public RandomRule randomRule() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return new RandomRule();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Bean</span></span>
<span class="line"><span style="color:#24292e;">public RandomRule randomRule() {</span></span>
<span class="line"><span style="color:#24292e;">    return new RandomRule();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>局部负载均衡策略</strong></p><p>修改配置文件，指定服务的负载均衡策略。<code>服务名称.ribbon.NFLoadBalancerRuleClassName: com.xxx</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">service-provider:</span></span>
<span class="line"><span style="color:#e1e4e8;">  ribbon:</span></span>
<span class="line"><span style="color:#e1e4e8;">    NFLoadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">service-provider:</span></span>
<span class="line"><span style="color:#24292e;">  ribbon:</span></span>
<span class="line"><span style="color:#24292e;">    NFLoadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule</span></span></code></pre></div><h3 id="_5-4-feign性能调优" tabindex="-1">5.4 Feign性能调优 <a class="header-anchor" href="#_5-4-feign性能调优" aria-label="Permalink to &quot;5.4 Feign性能调优&quot;">​</a></h3><h4 id="_1-gzip压缩" tabindex="-1">1. Gzip压缩 <a class="header-anchor" href="#_1-gzip压缩" aria-label="Permalink to &quot;1. Gzip压缩&quot;">​</a></h4><p>gzip: 是一种压缩的数据格式。网络数据经过压缩可以降低网络传输的字节数，加快网页加载速度。</p><blockquote><p>客户端请求头带有<code>Accept-Encoding:gzip</code>，服务器就会将响应报文压缩，并在响应头携带<code>Content-Encoding:gzip</code>消息头，表示响应报文是根据该格式进行压缩的，客户端接受后就会按格式解压。</p></blockquote><p><strong>局部设置</strong></p><p>局部表示在Consumer和Provider之间进行压缩。全局表示浏览器、Consumer和Provider三者之间均压缩。</p><p>在消费者中配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">feign:</span></span>
<span class="line"><span style="color:#e1e4e8;">  compression:</span></span>
<span class="line"><span style="color:#e1e4e8;">    request:</span></span>
<span class="line"><span style="color:#e1e4e8;">      mime-types: text/xml,application/xml,application/json  # 配置压缩支持的 MIME TYPE</span></span>
<span class="line"><span style="color:#e1e4e8;">      min-request-size: 512   # 配置压缩数据的最小阈值，默认2048</span></span>
<span class="line"><span style="color:#e1e4e8;">      enabled: true           # 请求是否开启压缩</span></span>
<span class="line"><span style="color:#e1e4e8;">    response:</span></span>
<span class="line"><span style="color:#e1e4e8;">      enabled: true           # 响应是否开启压缩</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">feign:</span></span>
<span class="line"><span style="color:#24292e;">  compression:</span></span>
<span class="line"><span style="color:#24292e;">    request:</span></span>
<span class="line"><span style="color:#24292e;">      mime-types: text/xml,application/xml,application/json  # 配置压缩支持的 MIME TYPE</span></span>
<span class="line"><span style="color:#24292e;">      min-request-size: 512   # 配置压缩数据的最小阈值，默认2048</span></span>
<span class="line"><span style="color:#24292e;">      enabled: true           # 请求是否开启压缩</span></span>
<span class="line"><span style="color:#24292e;">    response:</span></span>
<span class="line"><span style="color:#24292e;">      enabled: true           # 响应是否开启压缩</span></span></code></pre></div><p><strong>全局设置</strong></p><p>在消费者中配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server:</span></span>
<span class="line"><span style="color:#e1e4e8;">  port: 9002</span></span>
<span class="line"><span style="color:#e1e4e8;">  compression:</span></span>
<span class="line"><span style="color:#e1e4e8;">    enabled: true   # 开启全局</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">server:</span></span>
<span class="line"><span style="color:#24292e;">  port: 9002</span></span>
<span class="line"><span style="color:#24292e;">  compression:</span></span>
<span class="line"><span style="color:#24292e;">    enabled: true   # 开启全局</span></span></code></pre></div><h4 id="_2-http连接池" tabindex="-1">2. HTTP连接池 <a class="header-anchor" href="#_2-http连接池" aria-label="Permalink to &quot;2. HTTP连接池&quot;">​</a></h4><p>采用http连接池，可以节约大量的3次握手4此挥手，这样能大大提升吞吐量。</p><p>Feign的HTTP客户端支持3中框架：</p><ul><li>HttpURLConnection是JDK自带的（默认），并不支持连接池</li><li>HttpClient封装了HTTP请求头，参数，内容体，响应等等；不仅客户端发送HTTP请求变得容易，另外也支持连接池。</li><li>OkHttp</li></ul><p>1、在consumer中添加两个依赖，因为Spring Cloud版本默认集成了apache httpclient依赖，所以只需要添加一个依赖：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;groupId&gt;io.github.openfeign&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;artifactId&gt;feign-httpclient&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;version&gt;10.7.4&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!--下面这个依赖项目中已经有了--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;groupId&gt;org.apache.httpcomponents&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;artifactId&gt;httpclient&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;version&gt;4.5.11&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;groupId&gt;io.github.openfeign&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;artifactId&gt;feign-httpclient&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;version&gt;10.7.4&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--下面这个依赖项目中已经有了--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;groupId&gt;org.apache.httpcomponents&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;artifactId&gt;httpclient&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;version&gt;4.5.11&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>2、在consumer中配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">feign:</span></span>
<span class="line"><span style="color:#e1e4e8;">  httpclient:</span></span>
<span class="line"><span style="color:#e1e4e8;">    enabled: true   # 开启httpclient</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">feign:</span></span>
<span class="line"><span style="color:#24292e;">  httpclient:</span></span>
<span class="line"><span style="color:#24292e;">    enabled: true   # 开启httpclient</span></span></code></pre></div><p>3、在Consumer中，此时已经使用了连接池</p><p>Post请求不用变（一般用<code>@RequestBody() Xxx xx</code>接受参数）；</p><p>GET请求也可以向Post一样接受参数。</p><h4 id="_3-状态查看" tabindex="-1">3. 状态查看 <a class="header-anchor" href="#_3-状态查看" aria-label="Permalink to &quot;3. 状态查看&quot;">​</a></h4><p>浏览器发起请求，可以通过F12查看请求和响应信息。微服务之间的调用链路、状态和耗时等信息，我们需要配置日志的方式进行查看。</p><p>1、在Consumer配置日志logback.xml（和平常日志配置一样）</p><p>2、全局配置：在Consumer启动类中注入Feign的Logger对象</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/*</span></span>
<span class="line"><span style="color:#e1e4e8;">    NONE: 默认，不记录</span></span>
<span class="line"><span style="color:#e1e4e8;">    BASIC: 记录请求方法、请求URL、状态码和用时</span></span>
<span class="line"><span style="color:#e1e4e8;">    HEADERS: 在BASIC基础上再记录一些常用信息</span></span>
<span class="line"><span style="color:#e1e4e8;">    FULL: 记录请求和响应的所有信息</span></span>
<span class="line"><span style="color:#e1e4e8;"> */</span></span>
<span class="line"><span style="color:#e1e4e8;">@Bean</span></span>
<span class="line"><span style="color:#e1e4e8;">public Logger.Level getLog() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return Logger.Level.FULL;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/*</span></span>
<span class="line"><span style="color:#24292e;">    NONE: 默认，不记录</span></span>
<span class="line"><span style="color:#24292e;">    BASIC: 记录请求方法、请求URL、状态码和用时</span></span>
<span class="line"><span style="color:#24292e;">    HEADERS: 在BASIC基础上再记录一些常用信息</span></span>
<span class="line"><span style="color:#24292e;">    FULL: 记录请求和响应的所有信息</span></span>
<span class="line"><span style="color:#24292e;"> */</span></span>
<span class="line"><span style="color:#24292e;">@Bean</span></span>
<span class="line"><span style="color:#24292e;">public Logger.Level getLog() {</span></span>
<span class="line"><span style="color:#24292e;">    return Logger.Level.FULL;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>3、局部配置：配置Consumer的配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">feign:</span></span>
<span class="line"><span style="color:#e1e4e8;">  client:</span></span>
<span class="line"><span style="color:#e1e4e8;">    config:</span></span>
<span class="line"><span style="color:#e1e4e8;">      service-provider:  # &quot;service-provider&quot;是调用的服务的名称</span></span>
<span class="line"><span style="color:#e1e4e8;">        loggerLevel: FULL</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">feign:</span></span>
<span class="line"><span style="color:#24292e;">  client:</span></span>
<span class="line"><span style="color:#24292e;">    config:</span></span>
<span class="line"><span style="color:#24292e;">      service-provider:  # &quot;service-provider&quot;是调用的服务的名称</span></span>
<span class="line"><span style="color:#24292e;">        loggerLevel: FULL</span></span></code></pre></div><h4 id="_4-请求超时" tabindex="-1">4. 请求超时 <a class="header-anchor" href="#_4-请求超时" aria-label="Permalink to &quot;4. 请求超时&quot;">​</a></h4><p>Feign负载均衡底层是Ribbon，所以请求超时配置的是Ribbon。默认情况下是1s。</p><p>全局配置：在consumer中配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ribbon:</span></span>
<span class="line"><span style="color:#e1e4e8;">  ConnectTimeout: 5000	# 请求连接的超时时间 默认是1s</span></span>
<span class="line"><span style="color:#e1e4e8;">  ReadTimeout: 5000		# 请求处理的超时时间</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ribbon:</span></span>
<span class="line"><span style="color:#24292e;">  ConnectTimeout: 5000	# 请求连接的超时时间 默认是1s</span></span>
<span class="line"><span style="color:#24292e;">  ReadTimeout: 5000		# 请求处理的超时时间</span></span></code></pre></div><p>局部配置：根据服务的压力大小配置不同的时间</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">service-provider:	# 服务名称</span></span>
<span class="line"><span style="color:#e1e4e8;">  ribbon:</span></span>
<span class="line"><span style="color:#e1e4e8;">    OkToRetryOnAllOperations: true  # 对所有请求进行重试</span></span>
<span class="line"><span style="color:#e1e4e8;">    MaxAutoRetries: 2               # 对当前实例的重试次数</span></span>
<span class="line"><span style="color:#e1e4e8;">    MaxAutoRetriesNextServer: 0     # 对切换实例的重试次数</span></span>
<span class="line"><span style="color:#e1e4e8;">    ConnectTimeout: 3000            # 请求连接超时时间</span></span>
<span class="line"><span style="color:#e1e4e8;">    ReadTimeout: 3000               # 请求处理超时时间</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">service-provider:	# 服务名称</span></span>
<span class="line"><span style="color:#24292e;">  ribbon:</span></span>
<span class="line"><span style="color:#24292e;">    OkToRetryOnAllOperations: true  # 对所有请求进行重试</span></span>
<span class="line"><span style="color:#24292e;">    MaxAutoRetries: 2               # 对当前实例的重试次数</span></span>
<span class="line"><span style="color:#24292e;">    MaxAutoRetriesNextServer: 0     # 对切换实例的重试次数</span></span>
<span class="line"><span style="color:#24292e;">    ConnectTimeout: 3000            # 请求连接超时时间</span></span>
<span class="line"><span style="color:#24292e;">    ReadTimeout: 3000               # 请求处理超时时间</span></span></code></pre></div><h1 id="_6-hystrix服务容错" tabindex="-1">6 Hystrix服务容错 <a class="header-anchor" href="#_6-hystrix服务容错" aria-label="Permalink to &quot;6 Hystrix服务容错&quot;">​</a></h1><h3 id="_6-1-概念" tabindex="-1">6.1 概念 <a class="header-anchor" href="#_6-1-概念" aria-label="Permalink to &quot;6.1 概念&quot;">​</a></h3><p><strong>什么是Hystrix</strong></p><p>Hystrix源于Netflix团队。在分布式环境中，服务请求失败会导致雪崩效应。Hystrix是一个库，可以添加等待时间容限和容错逻辑来帮助您控制这些服务之间的交互。Hystrix通过隔离服务之间的访问点，停止服务之间的级联故障并提供后被选项来实现此目的，从而提高系统稳定性。</p><p><strong>雪崩效应</strong></p><p>服务和服务之间的依赖性，故障会传播，造成连锁反应。一个服务不可用，导致一系列服务不可用，这就是雪崩效应。造成雪崩原因有三点：</p><ul><li>服务提供者不可用（硬件故障、程序Bug、缓存击穿、用户大量请求等）</li><li>重试加大流量（用户重试，阻塞）</li><li>服务消费者不可用（同步等待造成的资源耗尽）。</li></ul><p><strong>解决方案</strong></p><ul><li>请求缓存：支持一个请求与返回结果做缓存处理；</li><li>请求合并：将相同的请求进行合并，然后调用批处理接口；</li><li>服务隔离：限制调用分布式服务的资源，某一个服务不可用，不影响其他服务；</li><li>服务熔断：牺牲局部服务，保全整体系统稳定性；（停止使用该接口）</li><li>服务降级：服务熔断后，客户端调用本地方法返回缺省值。（通常配合服务熔断、服务隔离等一起使用）</li></ul><h3 id="_6-2-环境" tabindex="-1">6.2 环境 <a class="header-anchor" href="#_6-2-环境" aria-label="Permalink to &quot;6.2 环境&quot;">​</a></h3><p>和Eureka环境一样。两个Eureka Server, 一个生产者，一个消费者。</p><h3 id="_6-3-模拟高并发环境" tabindex="-1">6.3 模拟高并发环境 <a class="header-anchor" href="#_6-3-模拟高并发环境" aria-label="Permalink to &quot;6.3 模拟高并发环境&quot;">​</a></h3><p>从官网下载apache jmeter</p><p>修改bin/jmeter.properties</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 教程使用版本5.2.1</span></span>
<span class="line"><span style="color:#e1e4e8;"># 语言</span></span>
<span class="line"><span style="color:#e1e4e8;">language=zh_CN</span></span>
<span class="line"><span style="color:#e1e4e8;"># 编码</span></span>
<span class="line"><span style="color:#e1e4e8;">sampleresult.default.encoding=UTF-8</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 教程使用版本5.2.1</span></span>
<span class="line"><span style="color:#24292e;"># 语言</span></span>
<span class="line"><span style="color:#24292e;">language=zh_CN</span></span>
<span class="line"><span style="color:#24292e;"># 编码</span></span>
<span class="line"><span style="color:#24292e;">sampleresult.default.encoding=UTF-8</span></span></code></pre></div><p>点击 jmeter.bat启动，是一个窗口。可以添加多个线程、多个请求、同时访问某个端口。</p><h3 id="_6-4-请求缓存" tabindex="-1">6.4 请求缓存 <a class="header-anchor" href="#_6-4-请求缓存" aria-label="Permalink to &quot;6.4 请求缓存&quot;">​</a></h3><p>Hystrix自带缓存的缺点：</p><ul><li>本地缓存，集群不能同步</li><li>不支持第三方缓存容器，如Redis</li></ul><p>本文使用Spring的缓存集成Redis的方案。</p><p>在消费者客户端添加依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.apache.commons&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;commons-pool2&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.apache.commons&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;commons-pool2&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>application.properties配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">spring:</span></span>
<span class="line"><span style="color:#e1e4e8;">  application:</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: service-consumer</span></span>
<span class="line"><span style="color:#e1e4e8;">  redis:</span></span>
<span class="line"><span style="color:#e1e4e8;">    timeout: 10000 # 连接超时时间</span></span>
<span class="line"><span style="color:#e1e4e8;">    host: 192.168.0.111 # 本地的redis要启动</span></span>
<span class="line"><span style="color:#e1e4e8;">    port: 6379</span></span>
<span class="line"><span style="color:#e1e4e8;">    database: 0</span></span>
<span class="line"><span style="color:#e1e4e8;">    lettuce:</span></span>
<span class="line"><span style="color:#e1e4e8;">      pool:</span></span>
<span class="line"><span style="color:#e1e4e8;">        max-active: 1024 # </span></span>
<span class="line"><span style="color:#e1e4e8;">        max-wait: 10000 # 最大连接阻塞等待时间</span></span>
<span class="line"><span style="color:#e1e4e8;">        max-idle: 200 # 最大空闲连接</span></span>
<span class="line"><span style="color:#e1e4e8;">        min-idle: 5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">  application:</span></span>
<span class="line"><span style="color:#24292e;">    name: service-consumer</span></span>
<span class="line"><span style="color:#24292e;">  redis:</span></span>
<span class="line"><span style="color:#24292e;">    timeout: 10000 # 连接超时时间</span></span>
<span class="line"><span style="color:#24292e;">    host: 192.168.0.111 # 本地的redis要启动</span></span>
<span class="line"><span style="color:#24292e;">    port: 6379</span></span>
<span class="line"><span style="color:#24292e;">    database: 0</span></span>
<span class="line"><span style="color:#24292e;">    lettuce:</span></span>
<span class="line"><span style="color:#24292e;">      pool:</span></span>
<span class="line"><span style="color:#24292e;">        max-active: 1024 # </span></span>
<span class="line"><span style="color:#24292e;">        max-wait: 10000 # 最大连接阻塞等待时间</span></span>
<span class="line"><span style="color:#24292e;">        max-idle: 200 # 最大空闲连接</span></span>
<span class="line"><span style="color:#24292e;">        min-idle: 5</span></span></code></pre></div><p>启动类添加注解</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 开启缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">@EnableCaching</span></span>
<span class="line"><span style="color:#e1e4e8;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#e1e4e8;">@EnableFeignClients</span></span>
<span class="line"><span style="color:#e1e4e8;">public class ConsumerApp1 {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        SpringApplication.run(ConsumerApp1.class, args);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 开启缓存</span></span>
<span class="line"><span style="color:#24292e;">@EnableCaching</span></span>
<span class="line"><span style="color:#24292e;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#24292e;">@EnableFeignClients</span></span>
<span class="line"><span style="color:#24292e;">public class ConsumerApp1 {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        SpringApplication.run(ConsumerApp1.class, args);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>ProductService接口中添加缓存注解</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@FeignClient(&quot;service-provider&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public interface ProductService {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Cacheable(cacheNames = &quot;orderService:product:list&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    @GetMapping(&quot;/product/list&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    List&lt;Product&gt; selectProductList();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Cacheable(cacheNames = &quot;orderService:product:single&quot;, key = &quot;#id&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    @GetMapping(&quot;/product/{id}&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    List&lt;Product&gt; selectProduct(@PathVariable(&quot;id&quot;) Integer id);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@FeignClient(&quot;service-provider&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public interface ProductService {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Cacheable(cacheNames = &quot;orderService:product:list&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    @GetMapping(&quot;/product/list&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    List&lt;Product&gt; selectProductList();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Cacheable(cacheNames = &quot;orderService:product:single&quot;, key = &quot;#id&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    @GetMapping(&quot;/product/{id}&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    List&lt;Product&gt; selectProduct(@PathVariable(&quot;id&quot;) Integer id);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>启动各个项目，方可实现缓存。此时再打开Jmeter，高并发测试。</p><h3 id="_6-5-请求合并" tabindex="-1">6.5 请求合并 <a class="header-anchor" href="#_6-5-请求合并" aria-label="Permalink to &quot;6.5 请求合并&quot;">​</a></h3><p>线程池的资源也是有限的。在高并发情况下，通信次数增加，大量的线程处于等待状态，进而响应延迟。为了解决该问题，Hystrix将请求合并。</p><p>请求合并的缺点：</p><p>本来一个请求5ms搞定，如果此时使用了请求合并，还要等待10ms等待其他请求。但是，这点时间还是微不足道的。</p><p><img src="`+t+`" alt="image-20230320232050611"></p><p>导入依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>在消费者的业务逻辑OrderService中添加</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 支持请求合并的注解</span></span>
<span class="line"><span style="color:#e1e4e8;">@HystrixCommand</span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;Order&gt; selectOrderByIdList(List&lt;Integer&gt; ids) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    System.out.println(&quot;---------orderService: selectOrderByIdList----------------&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    List&lt;Order&gt; orders = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">    for (Integer id : ids) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Order order = selectOrderById(id);</span></span>
<span class="line"><span style="color:#e1e4e8;">        orders.add(order);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return orders;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">@HystrixCollapser(batchMethod = &quot;selectOrderByIdList&quot;,     // 合并请求去调用该方法</span></span>
<span class="line"><span style="color:#e1e4e8;">        scope = com.netflix.hystrix.HystrixCollapser.Scope.GLOBAL,</span></span>
<span class="line"><span style="color:#e1e4e8;">        collapserProperties = {</span></span>
<span class="line"><span style="color:#e1e4e8;">        		// 合并最大时间5000ms，（为了让效果明显）</span></span>
<span class="line"><span style="color:#e1e4e8;">                @HystrixProperty(name = &quot;timerDelayInMilliseconds&quot;, value = &quot;5000&quot;),</span></span>
<span class="line"><span style="color:#e1e4e8;">                // 合并最大数量</span></span>
<span class="line"><span style="color:#e1e4e8;">                @HystrixProperty(name = &quot;maxRequestsInBatch&quot;, value = &quot;200&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        })</span></span>
<span class="line"><span style="color:#e1e4e8;">// 调用这个方法，这个方法不执行。实际去执行selectOrderByIdList。</span></span>
<span class="line"><span style="color:#e1e4e8;">public Order selectOrderListByMergeRequest(Integer id) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    System.out.println(&quot;---------orderService: selectOrderListByMergeRequest----------&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return null;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 支持请求合并的注解</span></span>
<span class="line"><span style="color:#24292e;">@HystrixCommand</span></span>
<span class="line"><span style="color:#24292e;">List&lt;Order&gt; selectOrderByIdList(List&lt;Integer&gt; ids) {</span></span>
<span class="line"><span style="color:#24292e;">    System.out.println(&quot;---------orderService: selectOrderByIdList----------------&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    List&lt;Order&gt; orders = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">    for (Integer id : ids) {</span></span>
<span class="line"><span style="color:#24292e;">        Order order = selectOrderById(id);</span></span>
<span class="line"><span style="color:#24292e;">        orders.add(order);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return orders;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">@HystrixCollapser(batchMethod = &quot;selectOrderByIdList&quot;,     // 合并请求去调用该方法</span></span>
<span class="line"><span style="color:#24292e;">        scope = com.netflix.hystrix.HystrixCollapser.Scope.GLOBAL,</span></span>
<span class="line"><span style="color:#24292e;">        collapserProperties = {</span></span>
<span class="line"><span style="color:#24292e;">        		// 合并最大时间5000ms，（为了让效果明显）</span></span>
<span class="line"><span style="color:#24292e;">                @HystrixProperty(name = &quot;timerDelayInMilliseconds&quot;, value = &quot;5000&quot;),</span></span>
<span class="line"><span style="color:#24292e;">                // 合并最大数量</span></span>
<span class="line"><span style="color:#24292e;">                @HystrixProperty(name = &quot;maxRequestsInBatch&quot;, value = &quot;200&quot;)</span></span>
<span class="line"><span style="color:#24292e;">        })</span></span>
<span class="line"><span style="color:#24292e;">// 调用这个方法，这个方法不执行。实际去执行selectOrderByIdList。</span></span>
<span class="line"><span style="color:#24292e;">public Order selectOrderListByMergeRequest(Integer id) {</span></span>
<span class="line"><span style="color:#24292e;">    System.out.println(&quot;---------orderService: selectOrderListByMergeRequest----------&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    return null;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>在Controller层调用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@GetMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public Order selectOrderById(@PathVariable(&quot;id&quot;) Integer id) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return orderService.selectOrderListByMergeRequest(id);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@GetMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public Order selectOrderById(@PathVariable(&quot;id&quot;) Integer id) {</span></span>
<span class="line"><span style="color:#24292e;">    return orderService.selectOrderListByMergeRequest(id);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>在启动类添加注解</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@EnableHystrix</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@EnableHystrix</span></span></code></pre></div><p>启动，在前端打开两个页面，同时刷新。在5s过后返回结果。并且后端显示，只走selectOrderByIdList方法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">http://localhost:9001/order/2</span></span>
<span class="line"><span style="color:#e1e4e8;">http://localhost:9001/order/1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">http://localhost:9001/order/2</span></span>
<span class="line"><span style="color:#24292e;">http://localhost:9001/order/1</span></span></code></pre></div><h3 id="_6-6-服务隔离" tabindex="-1">6.6 服务隔离 <a class="header-anchor" href="#_6-6-服务隔离" aria-label="Permalink to &quot;6.6 服务隔离&quot;">​</a></h3><p>线程都运行在<code>ThreadPool</code>中，当资源被耗尽时，可能会引发雪崩。</p><p><img src="`+o+'" alt="image-20220616231044687"></p><h4 id="_1-线程池隔离" tabindex="-1">1. 线程池隔离 <a class="header-anchor" href="#_1-线程池隔离" aria-label="Permalink to &quot;1. 线程池隔离&quot;">​</a></h4><p>线程不多时，可以使用线程池隔离；多时，用信号量隔离。</p><p>请求并发大，耗时长，用线程池隔离；请求并发大，耗时短，响应快，用信号量隔离。</p><p><img src="'+c+'" alt="image-20220616224025374"></p><p>代码：就是在Service方法上面添加注解。</p><p><img src="'+r+'" alt="image-20220616225958519"></p><h4 id="_2-信号量隔离" tabindex="-1">2. 信号量隔离 <a class="header-anchor" href="#_2-信号量隔离" aria-label="Permalink to &quot;2. 信号量隔离&quot;">​</a></h4><p>信号量数量有限，每个请求都需要拿到一个信号量，如果拿不到，请求阻塞。所以，该方法无法对访问做超时，即不支持异步。信号量隔离不用于网络请求（易阻塞），通常用于本地资源处理。（线程池隔离，是异步处理。）</p><p><img src="'+i+'" alt="image-20220616224236082"></p><p>代码：在方法上加注解</p><p><img src="'+d+'" alt="image-20220616230657967"></p><h3 id="_6-7-服务熔断" tabindex="-1">6.7 服务熔断 <a class="header-anchor" href="#_6-7-服务熔断" aria-label="Permalink to &quot;6.7 服务熔断&quot;">​</a></h3><p>服务熔断，也称过载保护，是为了防止整个系统故障。</p><p><img src="'+g+'" alt="image-20220616231454858"></p><p>代码：也是在业务层添加注解</p><p><img src="'+y+'" alt="image-20220616231815467"></p><h3 id="_6-8-服务降级" tabindex="-1">6.8 服务降级 <a class="header-anchor" href="#_6-8-服务降级" aria-label="Permalink to &quot;6.8 服务降级&quot;">​</a></h3><p>服务降级：返回缺省值</p><p>触发条件：</p><ul><li>方法抛出非<code>HystrixBadRequestException</code>异常；</li><li>方法调用超时；</li><li>熔断器开启拦截调用；</li><li>线程池/队列/信号量跑满。</li></ul><p>代码：</p><p><img src="'+u+`" alt="image-20220616232453789"></p><h3 id="_6-9-feign雪崩处理" tabindex="-1">6.9 Feign雪崩处理 <a class="header-anchor" href="#_6-9-feign雪崩处理" aria-label="Permalink to &quot;6.9 Feign雪崩处理&quot;">​</a></h3><p>创建一个OpenFeign的消费者客户端（已经包含了Hystrix依赖）。</p><p>需要在application.properties配置文件中开启Hystrix</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">feign:</span></span>
<span class="line"><span style="color:#e1e4e8;">  hystrix:</span></span>
<span class="line"><span style="color:#e1e4e8;">    enabled: true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">feign:</span></span>
<span class="line"><span style="color:#24292e;">  hystrix:</span></span>
<span class="line"><span style="color:#24292e;">    enabled: true</span></span></code></pre></div><p>在业务层，添加服务降级类</p><p><img src="`+h+'" alt="image-20220616234340895"></p><p>编写服务降级类（实现ProductService接口）</p><p><img src="'+v+`" alt="image-20220616234434665"></p><p>关闭生产者，前端访问。</p><h3 id="_6-9-feign服务异常信息捕获" tabindex="-1">6.9 Feign服务异常信息捕获 <a class="header-anchor" href="#_6-9-feign服务异常信息捕获" aria-label="Permalink to &quot;6.9 Feign服务异常信息捕获&quot;">​</a></h3><p>将上面的ProductServiceFallBack类替换成以下代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Component</span></span>
<span class="line"><span style="color:#e1e4e8;">public class ProductServiceFallBackFactory implements FallbackFactory&lt;ProductService&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    Logger logger = LoggerFactory.getLogger(ProductServiceFallBackFactory.class);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    public ProductService create(Throwable throwable) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return new ProductService() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">            public List&lt;Product&gt; selectProductList() {</span></span>
<span class="line"><span style="color:#e1e4e8;">                logger.error(&quot;xxx&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                return Arrays.asList(</span></span>
<span class="line"><span style="color:#e1e4e8;">                        new Product(1, &quot;托底数据&quot;, 1, 100.0),</span></span>
<span class="line"><span style="color:#e1e4e8;">                        new Product(2, &quot;托底数据&quot;, 1, 100.0),</span></span>
<span class="line"><span style="color:#e1e4e8;">                        new Product(3, &quot;托底数据&quot;, 1, 100.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">                );</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">            public List&lt;Product&gt; selectProduct(Integer id) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                logger.error(&quot;xxx&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                return Arrays.asList(</span></span>
<span class="line"><span style="color:#e1e4e8;">                        new Product(id, &quot;托底数据&quot;, 1, 100.0)</span></span>
<span class="line"><span style="color:#e1e4e8;">                );</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        };</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Component</span></span>
<span class="line"><span style="color:#24292e;">public class ProductServiceFallBackFactory implements FallbackFactory&lt;ProductService&gt; {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    Logger logger = LoggerFactory.getLogger(ProductServiceFallBackFactory.class);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public ProductService create(Throwable throwable) {</span></span>
<span class="line"><span style="color:#24292e;">        return new ProductService() {</span></span>
<span class="line"><span style="color:#24292e;">            @Override</span></span>
<span class="line"><span style="color:#24292e;">            public List&lt;Product&gt; selectProductList() {</span></span>
<span class="line"><span style="color:#24292e;">                logger.error(&quot;xxx&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                return Arrays.asList(</span></span>
<span class="line"><span style="color:#24292e;">                        new Product(1, &quot;托底数据&quot;, 1, 100.0),</span></span>
<span class="line"><span style="color:#24292e;">                        new Product(2, &quot;托底数据&quot;, 1, 100.0),</span></span>
<span class="line"><span style="color:#24292e;">                        new Product(3, &quot;托底数据&quot;, 1, 100.0)</span></span>
<span class="line"><span style="color:#24292e;">                );</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            @Override</span></span>
<span class="line"><span style="color:#24292e;">            public List&lt;Product&gt; selectProduct(Integer id) {</span></span>
<span class="line"><span style="color:#24292e;">                logger.error(&quot;xxx&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                return Arrays.asList(</span></span>
<span class="line"><span style="color:#24292e;">                        new Product(id, &quot;托底数据&quot;, 1, 100.0)</span></span>
<span class="line"><span style="color:#24292e;">                );</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        };</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>将注解改成：</p><p><img src="`+b+`" alt="image-20220617000111209"></p><h1 id="_7-hystrix服务监控" tabindex="-1">7. Hystrix服务监控 <a class="header-anchor" href="#_7-hystrix服务监控" aria-label="Permalink to &quot;7. Hystrix服务监控&quot;">​</a></h1><p>actuator是spring boot监控平台，但是全是数据，不方便看。</p><p>dashboard有图表，但是只是一个链接、节点的数据，只能打开一张表。</p><p>turbine可以同时查看多个图表。</p><h3 id="_7-1-actuator" tabindex="-1">7.1 Actuator <a class="header-anchor" href="#_7-1-actuator" aria-label="Permalink to &quot;7.1 Actuator&quot;">​</a></h3><p>（本文测试不能用）</p><p>在需要开启数据监控的项目中添加Actuator依赖（本项目在消费者中添加）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>在配置文件中开启hystrix.stream端点。如果希望所有端点暴露，配置为</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 度量指标监控与健康姜茶</span></span>
<span class="line"><span style="color:#e1e4e8;">management:</span></span>
<span class="line"><span style="color:#e1e4e8;">  endpoints:</span></span>
<span class="line"><span style="color:#e1e4e8;">    web:</span></span>
<span class="line"><span style="color:#e1e4e8;">      exposure:</span></span>
<span class="line"><span style="color:#e1e4e8;">        include: hystrix.stream</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 度量指标监控与健康姜茶</span></span>
<span class="line"><span style="color:#24292e;">management:</span></span>
<span class="line"><span style="color:#24292e;">  endpoints:</span></span>
<span class="line"><span style="color:#24292e;">    web:</span></span>
<span class="line"><span style="color:#24292e;">      exposure:</span></span>
<span class="line"><span style="color:#24292e;">        include: hystrix.stream</span></span></code></pre></div><p>前端访问（实际测试不能用，还有其他问题）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">http://localhost:9001/actuator</span></span>
<span class="line"><span style="color:#e1e4e8;">http://localhost:9001/actuator/hystrix.stream</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">http://localhost:9001/actuator</span></span>
<span class="line"><span style="color:#24292e;">http://localhost:9001/actuator/hystrix.stream</span></span></code></pre></div><h3 id="_7-2-监控中心dashboard" tabindex="-1">7.2 监控中心DashBoard <a class="header-anchor" href="#_7-2-监控中心dashboard" aria-label="Permalink to &quot;7.2 监控中心DashBoard&quot;">​</a></h3><p>Hystrix提供了一套可视化系统Hystrix-DashBoard。</p><p>(本文测试不能用)</p><p>添加依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix-dashboard&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix-dashboard&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>启动类添加注解</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@EnableHystrixDashBoard</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@EnableHystrixDashBoard</span></span></code></pre></div><p>前端访问（或者点击控制台链接）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">localhost:9001/hystrix</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">localhost:9001/hystrix</span></span></code></pre></div><h3 id="_7-3-聚合监控-turbine" tabindex="-1">7.3 聚合监控 Turbine <a class="header-anchor" href="#_7-3-聚合监控-turbine" aria-label="Permalink to &quot;7.3 聚合监控 Turbine&quot;">​</a></h3><p>（因为前面两个没成功，这里具体操作略）</p><p><img src="`+m+'" alt="image-20220617005336408"></p><h1 id="_8-sentinel服务哨兵" tabindex="-1">8. Sentinel服务哨兵 <a class="header-anchor" href="#_8-sentinel服务哨兵" aria-label="Permalink to &quot;8. Sentinel服务哨兵&quot;">​</a></h1><p>Netflix许多产品（Hystrix）不再更新，我们要考虑可替代产品。Alibaba Sentinel是一款高性能、轻量级的流量控制、熔断降级产品。</p><p>Sentinel分为两部分：</p><ul><li>核心库（Java客户端）不依赖任何框架，能使运行于Java7及以上的所有运行时环境，同时对Dubbo / Spring Cloud等框架也有较好的支持。</li><li>控制台（Dashboard）基于Spring Boot开发，打包后可以执行运行。主要负责管理推送规则、监控、集群限流分配管理、机器发现等。</li></ul><p>Hystrix和Sentinel:</p><p>Hystrix的关注点在于隔离和熔断为主的容错机制，并可提供fallback机制。</p><p>Sentinel：多样化的流量控制、熔断降级、系统负载保护、实时监控和控制台。</p><p><img src="'+k+`" alt="image-20220629231109515"></p><h3 id="_8-1-sentinel控制台" tabindex="-1">8.1 Sentinel控制台 <a class="header-anchor" href="#_8-1-sentinel控制台" aria-label="Permalink to &quot;8.1 Sentinel控制台&quot;">​</a></h3><p>从官网下载sentinel控制台</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">https://github.com/alibaba/Sentinel/wiki/%E6%8E%A7%E5%88%B6%E5%8F%B0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">https://github.com/alibaba/Sentinel/wiki/%E6%8E%A7%E5%88%B6%E5%8F%B0</span></span></code></pre></div><p>启动命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">java -Dserver.port=8080 -Dcsp.sentinel.dashboard.server=localhost:8080 -Dproject.name=sentinel-dashboard -jar sentinel-dashboard.jar</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">java -Dserver.port=8080 -Dcsp.sentinel.dashboard.server=localhost:8080 -Dproject.name=sentinel-dashboard -jar sentinel-dashboard.jar</span></span></code></pre></div><p>从 Sentinel 1.6.0 起，Sentinel 控制台引入基本的<strong>登录</strong>功能，默认用户名和密码都是 <code>sentinel</code>。</p><p>为了方便启动，编写一个启动脚本：<code>run.bat</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">java -Dserver.port=8080 -Dcsp.sentinel.dashboard.server=localhost:8080 -Dproject.name=sentinel-dashboard -jar sentinel-dashboard-1.8.4.jar</span></span>
<span class="line"><span style="color:#e1e4e8;">pause</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">java -Dserver.port=8080 -Dcsp.sentinel.dashboard.server=localhost:8080 -Dproject.name=sentinel-dashboard -jar sentinel-dashboard-1.8.4.jar</span></span>
<span class="line"><span style="color:#24292e;">pause</span></span></code></pre></div><h3 id="_8-2-环境准备" tabindex="-1">8.2 环境准备 <a class="header-anchor" href="#_8-2-环境准备" aria-label="Permalink to &quot;8.2 环境准备&quot;">​</a></h3><p>eureka注册中心2个（集群）</p><p>provider生产者一个</p><p>consumer消费者一个（基于Feign）</p><h3 id="_8-3-客户端接入控制台" tabindex="-1">8.3 客户端接入控制台 <a class="header-anchor" href="#_8-3-客户端接入控制台" aria-label="Permalink to &quot;8.3 客户端接入控制台&quot;">​</a></h3><p>控制台启动，客户端需要按照以下步骤接入到控制台：</p><ol><li>添加依赖和配置</li><li>定义资源。资源是指java服务、java接口、java方法等</li><li>定义规则</li></ol><h4 id="添加依赖和配置" tabindex="-1">添加依赖和配置 <a class="header-anchor" href="#添加依赖和配置" aria-label="Permalink to &quot;添加依赖和配置&quot;">​</a></h4><p>父工程添加依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-cloud-alibaba-dependencies&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;version&gt;2021.0.1.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;type&gt;pom&lt;/type&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;scope&gt;import&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-cloud-alibaba-dependencies&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;2021.0.1.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;type&gt;pom&lt;/type&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;scope&gt;import&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>子工程（Consumer）添加依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-cloud-starter-alibaba-sentinel&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-cloud-starter-alibaba-sentinel&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>子工程添加配置application.yaml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">spring:</span></span>
<span class="line"><span style="color:#e1e4e8;">  application:</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: service-consumer</span></span>
<span class="line"><span style="color:#e1e4e8;">  cloud:</span></span>
<span class="line"><span style="color:#e1e4e8;">    sentinel:</span></span>
<span class="line"><span style="color:#e1e4e8;">      transport:</span></span>
<span class="line"><span style="color:#e1e4e8;">        port: 8719</span></span>
<span class="line"><span style="color:#e1e4e8;">        dashboard: localhost:8080</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">  application:</span></span>
<span class="line"><span style="color:#24292e;">    name: service-consumer</span></span>
<span class="line"><span style="color:#24292e;">  cloud:</span></span>
<span class="line"><span style="color:#24292e;">    sentinel:</span></span>
<span class="line"><span style="color:#24292e;">      transport:</span></span>
<span class="line"><span style="color:#24292e;">        port: 8719</span></span>
<span class="line"><span style="color:#24292e;">        dashboard: localhost:8080</span></span></code></pre></div><p>启动项目，启动sentinel，多发送几次请求，刷新sentinel，可以看到许多信息。</p><h4 id="定义资源" tabindex="-1">定义资源 <a class="header-anchor" href="#定义资源" aria-label="Permalink to &quot;定义资源&quot;">​</a></h4><p>Sentinel提供了<code>@SentinelResource</code>注解用于定义资源。</p><p>在接口上定义资源</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@GetMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">@SentinelResource(value = &quot;getOrderById&quot;,                   // 资源名称</span></span>
<span class="line"><span style="color:#e1e4e8;">                blockHandler = &quot;getOrderByIdBlockHandler&quot;,  // 流量控制</span></span>
<span class="line"><span style="color:#e1e4e8;">                fallback = &quot;getOrderByIdFallback&quot;)          // 熔断降级</span></span>
<span class="line"><span style="color:#e1e4e8;">public Order selectOrderById(@PathVariable(&quot;id&quot;) Integer id) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return orderService.selectOrderById(id);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 服务流量控制处理</span></span>
<span class="line"><span style="color:#e1e4e8;">public Order getOrderByIdBlockHandler(Integer id, BlockException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">    return new Order();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 服务熔断降级处理</span></span>
<span class="line"><span style="color:#e1e4e8;">public Order getOrderByIdFallback(Integer id, Throwable throwable) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    System.out.println(&quot;order/{id}方法异常：&quot; + throwable);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return new Order();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@GetMapping(&quot;/{id}&quot;)</span></span>
<span class="line"><span style="color:#24292e;">@SentinelResource(value = &quot;getOrderById&quot;,                   // 资源名称</span></span>
<span class="line"><span style="color:#24292e;">                blockHandler = &quot;getOrderByIdBlockHandler&quot;,  // 流量控制</span></span>
<span class="line"><span style="color:#24292e;">                fallback = &quot;getOrderByIdFallback&quot;)          // 熔断降级</span></span>
<span class="line"><span style="color:#24292e;">public Order selectOrderById(@PathVariable(&quot;id&quot;) Integer id) {</span></span>
<span class="line"><span style="color:#24292e;">    return orderService.selectOrderById(id);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 服务流量控制处理</span></span>
<span class="line"><span style="color:#24292e;">public Order getOrderByIdBlockHandler(Integer id, BlockException e) {</span></span>
<span class="line"><span style="color:#24292e;">    e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">    return new Order();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 服务熔断降级处理</span></span>
<span class="line"><span style="color:#24292e;">public Order getOrderByIdFallback(Integer id, Throwable throwable) {</span></span>
<span class="line"><span style="color:#24292e;">    System.out.println(&quot;order/{id}方法异常：&quot; + throwable);</span></span>
<span class="line"><span style="color:#24292e;">    return new Order();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="定义规则" tabindex="-1">定义规则 <a class="header-anchor" href="#定义规则" aria-label="Permalink to &quot;定义规则&quot;">​</a></h4><p>sentinel的所有规则都可以在内容态中动态地查询及修改，修改之后立即生效。同时，Sentinel也支持自定义规则。</p><p>sentinel支持以下几种规则：<strong>流量控制规则</strong>、<strong>熔断降级规则</strong>、<strong>系统保护规则</strong>、<strong>来源访问控制规则</strong> 和 <strong>热点参数规则</strong>。</p><p><strong>流量控制规则：</strong></p><p><img src="`+f+`" alt="image-20220630230914324"></p><p><strong>熔断降级规则：</strong></p><p>在代码里面写一个错误的代码，然后配置熔断降级规则，就可以了。</p><h4 id="文件配置规则" tabindex="-1">文件配置规则 <a class="header-anchor" href="#文件配置规则" aria-label="Permalink to &quot;文件配置规则&quot;">​</a></h4><p>动态规则扩展：以上规则存在内存中，重启会失效。SentinelProperties内部提供了TreeMap类型的datasource属性用于配置数据源信息，支持：文件配置规则、Nacos配置规则、Zookeeper配置规则、Apollo配置规则、Redis配置规则。</p><p>文件配置规则：</p><p>在application.yaml中配置如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">spring:</span></span>
<span class="line"><span style="color:#e1e4e8;">  application:</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: service-consumer</span></span>
<span class="line"><span style="color:#e1e4e8;">  cloud:</span></span>
<span class="line"><span style="color:#e1e4e8;">    sentinel:</span></span>
<span class="line"><span style="color:#e1e4e8;">      transport:</span></span>
<span class="line"><span style="color:#e1e4e8;">        port: 8719</span></span>
<span class="line"><span style="color:#e1e4e8;">        dashboard: localhost:8080</span></span>
<span class="line"><span style="color:#e1e4e8;">      datasource:</span></span>
<span class="line"><span style="color:#e1e4e8;">        ds1:</span></span>
<span class="line"><span style="color:#e1e4e8;">          file:</span></span>
<span class="line"><span style="color:#e1e4e8;">            file: classpath:flowRule.json</span></span>
<span class="line"><span style="color:#e1e4e8;">            data-type: json</span></span>
<span class="line"><span style="color:#e1e4e8;">            rule-type: flow</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">  application:</span></span>
<span class="line"><span style="color:#24292e;">    name: service-consumer</span></span>
<span class="line"><span style="color:#24292e;">  cloud:</span></span>
<span class="line"><span style="color:#24292e;">    sentinel:</span></span>
<span class="line"><span style="color:#24292e;">      transport:</span></span>
<span class="line"><span style="color:#24292e;">        port: 8719</span></span>
<span class="line"><span style="color:#24292e;">        dashboard: localhost:8080</span></span>
<span class="line"><span style="color:#24292e;">      datasource:</span></span>
<span class="line"><span style="color:#24292e;">        ds1:</span></span>
<span class="line"><span style="color:#24292e;">          file:</span></span>
<span class="line"><span style="color:#24292e;">            file: classpath:flowRule.json</span></span>
<span class="line"><span style="color:#24292e;">            data-type: json</span></span>
<span class="line"><span style="color:#24292e;">            rule-type: flow</span></span></code></pre></div><p>在resource下新建flowRule.json</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;resource&quot;: &quot;getOrderById&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;count&quot;: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;grade&quot;: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;limitApp&quot;: &quot;default&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;strategy&quot;: 0,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;controlBehavior&quot;: 0</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;resource&quot;: &quot;getOrderById&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;count&quot;: 1,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;grade&quot;: 1,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;limitApp&quot;: &quot;default&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;strategy&quot;: 0,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;controlBehavior&quot;: 0</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">]</span></span></code></pre></div><p>重启项目，快速发几次请求，发现有流量控制，并且在sentinel控制台有流量控制规则。</p><h3 id="_8-4-对openfeign的支持" tabindex="-1">8.4 对OpenFeign的支持 <a class="header-anchor" href="#_8-4-对openfeign的支持" aria-label="Permalink to &quot;8.4 对OpenFeign的支持&quot;">​</a></h3><blockquote><p>这一节代码没有调试通，但不影响学习</p></blockquote><p>在调用其他服务/接口时，常用到RestTemplate或者OpenFeign，Sentinel对这两者均支持。</p><p>不管是Hystrix还是Sentinel，代码都差不多，只要修改依赖和配置即可。</p><p>依赖、配置略（和上面代码一样）</p><p>新配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">feign:</span></span>
<span class="line"><span style="color:#e1e4e8;">  sentinel:</span></span>
<span class="line"><span style="color:#e1e4e8;">    enabled: true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">feign:</span></span>
<span class="line"><span style="color:#24292e;">  sentinel:</span></span>
<span class="line"><span style="color:#24292e;">    enabled: true</span></span></code></pre></div><p>添加类ProductServiceFallbackFactory</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class ProductServiceFallbackFactory implements FallbackFactory&lt;ProductService&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Logger logger = LoggerFactory.getLogger(ProductServiceFallbackFactory.class);</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    public ProductService create(Throwable throwable) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return new ProductService() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">            public List&lt;Product&gt; selectProductList() {</span></span>
<span class="line"><span style="color:#e1e4e8;">                logger.error(&quot;服务异常&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                return Arrays.asList(new Product());</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">            public List&lt;Product&gt; selectProduct(Integer id) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                logger.error(&quot;服务异常&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                return Arrays.asList(new Product());</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        };</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class ProductServiceFallbackFactory implements FallbackFactory&lt;ProductService&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    Logger logger = LoggerFactory.getLogger(ProductServiceFallbackFactory.class);</span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public ProductService create(Throwable throwable) {</span></span>
<span class="line"><span style="color:#24292e;">        return new ProductService() {</span></span>
<span class="line"><span style="color:#24292e;">            @Override</span></span>
<span class="line"><span style="color:#24292e;">            public List&lt;Product&gt; selectProductList() {</span></span>
<span class="line"><span style="color:#24292e;">                logger.error(&quot;服务异常&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                return Arrays.asList(new Product());</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            @Override</span></span>
<span class="line"><span style="color:#24292e;">            public List&lt;Product&gt; selectProduct(Integer id) {</span></span>
<span class="line"><span style="color:#24292e;">                logger.error(&quot;服务异常&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                return Arrays.asList(new Product());</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        };</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>在ProductService上添加注解</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@FeignClient(value = &quot;service-provider&quot;, fallbackFactory = ProductServiceFallbackFactory.class)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@FeignClient(value = &quot;service-provider&quot;, fallbackFactory = ProductServiceFallbackFactory.class)</span></span></code></pre></div><p>启动项目，当发生熔断时，会进入自定义的方法中。</p><h1 id="_9-zuul网关" tabindex="-1">9. Zuul网关 <a class="header-anchor" href="#_9-zuul网关" aria-label="Permalink to &quot;9. Zuul网关&quot;">​</a></h1><p><img src="`+q+'" alt="image-20220703154027826"></p><p>网关应当具备以下功能：</p><p>性能：API高可用，负载均衡，容错机制。</p><p>安全：权限身份认证、后端签名、黑名单。</p><p>日志：日志记录，保证全链路追踪。</p><p>缓存：数据缓存。</p><p>监控：性能监控。</p><p>限流：流量控制，错峰流控。</p><p>灰度：线上灰度部署，减小风险。</p><p>路由：动态路由规则。</p><p><img src="'+I+`" alt="image-20220703162120976"></p><h3 id="_9-1-常用网关解决方案" tabindex="-1">9.1 常用网关解决方案 <a class="header-anchor" href="#_9-1-常用网关解决方案" aria-label="Permalink to &quot;9.1 常用网关解决方案&quot;">​</a></h3><p><strong>Nginx+Lua</strong></p><p>Nginx一方面可以做反向代理，另外一方面可以做静态资源服务器。</p><p>Nginx是C语言开发。Zuul是Java语言开发。</p><p>Nginx服务器端实现负载均衡。Zuul是靠Ribbon+Eureka本地负载均衡。</p><p>Nginx可以整合一些脚本语言（Nginx+Lua）。Zuul不可以。</p><p>Nginx是一个高性能的HTTP和反向代理服务器，也是一个IMAP/POP3/SMIP服务器。Zuul是Spring Cloud Netflix中的开源的一个应用，相当于所有应用程序后端的所有请求的前门。</p><blockquote><p>Nginx适合做门户网关，整个全局的网关，处于最外层。</p><p>Zuul属于业务网关，主要来应对不同的客户端提供服务，聚合业务。</p><p>Zuul可以实现熔断、重试等功能，Nginx不具备。</p></blockquote><p><strong>Kong</strong></p><p>本身基于Nginx+lua的。</p><p>优点：提供了大量插件来扩展应用。</p><p>缺点：商业付费；没办法整合Spring Could。</p><p><strong>Traefik</strong></p><p>HTTP反向代理、负载均衡工具。支持多种后台来自动化、动态的应用它的配置文件设置。</p><p>相对Spring Cloud，更适合Kubernetes.</p><p><strong>Spring Cloud Netflix Zuul</strong></p><p>结合Spring Cloud提供的服务治理体系，可以做到请求转发、根据配置后者默认路由规则进行路由和负载均衡，无缝集成Hystrix。</p><p>缺点：Zuul1.0版本是基于单线程的接受请求和转发处理，是阻塞IO，不支持长连接。（2.0支持异步）</p><p>目前来看用的比较少，因为Spring Cloud推出了自己的Spring Cloud Gateway。</p><p><strong>Spring Cloud Gateway</strong></p><p>目标是替代Zuul，支持异步。</p><h3 id="_9-2-环境准备" tabindex="-1">9.2 环境准备 <a class="header-anchor" href="#_9-2-环境准备" aria-label="Permalink to &quot;9.2 环境准备&quot;">​</a></h3><p>两个eureka注册中心</p><p>一个producer-service</p><p>一个consumer-service</p><h3 id="_9-3-zuul实现api网关" tabindex="-1">9.3 Zuul实现API网关 <a class="header-anchor" href="#_9-3-zuul实现api网关" aria-label="Permalink to &quot;9.3 Zuul实现API网关&quot;">​</a></h3><h4 id="创建子模块" tabindex="-1">创建子模块 <a class="header-anchor" href="#创建子模块" aria-label="Permalink to &quot;创建子模块&quot;">​</a></h4><p>创建一个子模块<code>Gateway-zuul-9100</code></p><p>添加依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-cloud-starter-netflix-zuul&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-cloud-starter-netflix-zuul&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>添加配置application.properties</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server.port=9100</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.application.name=gateway-zuul-9100</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">server.port=9100</span></span>
<span class="line"><span style="color:#24292e;">spring.application.name=gateway-zuul-9100</span></span></code></pre></div><p>添加启动类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#e1e4e8;">@EnableZuulProxy</span></span>
<span class="line"><span style="color:#e1e4e8;">public class GatewayZuul1 {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        SpringApplication.run(GatewayZuul1.class, args);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#24292e;">@EnableZuulProxy</span></span>
<span class="line"><span style="color:#24292e;">public class GatewayZuul1 {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        SpringApplication.run(GatewayZuul1.class, args);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="配置路由规则" tabindex="-1">配置路由规则 <a class="header-anchor" href="#配置路由规则" aria-label="Permalink to &quot;配置路由规则&quot;">​</a></h4><p>配置路由规则（application.properties）</p><p><strong>1. URL路由</strong></p><ul><li><code>?</code> 表示任意单个字符</li><li><code>*</code> 表示任意字符，不包括子路径</li><li><code>**</code> 表示任务字符，包括所有子路径</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># service-consumer是实际微服务名称</span></span>
<span class="line"><span style="color:#e1e4e8;">zuul.routes.service-consumer.path=/consumer/**          # 请求映射路径</span></span>
<span class="line"><span style="color:#e1e4e8;">zuul.routes.service-consumer.url=http://localhost:9001  # 实际微服务地址</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># service-consumer是实际微服务名称</span></span>
<span class="line"><span style="color:#24292e;">zuul.routes.service-consumer.path=/consumer/**          # 请求映射路径</span></span>
<span class="line"><span style="color:#24292e;">zuul.routes.service-consumer.url=http://localhost:9001  # 实际微服务地址</span></span></code></pre></div><p>在浏览器中访问<code>localhost:9100/consumer/order/1</code>，可以访问到微服务。</p><p><strong>2 服务名称路由</strong></p><p>如果项目中有许多微服务，url路由不方便（需要记录每个微服务ip和port）</p><p>Zuul支持与Eureka整合，根据serviceId自动从注册中心获取服务地址并转发请求。</p><p>添加Eureka Client依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>添加配置：eureka地址、服务名称路由</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">zuul:</span></span>
<span class="line"><span style="color:#e1e4e8;">  routes:</span></span>
<span class="line"><span style="color:#e1e4e8;">    service-consumer:</span></span>
<span class="line"><span style="color:#e1e4e8;">      path: /consumer/**          # 请求映射路径</span></span>
<span class="line"><span style="color:#e1e4e8;">      serviceId: service-consumer  # 服务名称路由</span></span>
<span class="line"><span style="color:#e1e4e8;">eureka:</span></span>
<span class="line"><span style="color:#e1e4e8;">  instance:</span></span>
<span class="line"><span style="color:#e1e4e8;">    prefer-ip-address: true   # 使用ip地址注册</span></span>
<span class="line"><span style="color:#e1e4e8;">    instance-id: \${spring.cloud.client.ip-address}:\${server.port}</span></span>
<span class="line"><span style="color:#e1e4e8;">  client:</span></span>
<span class="line"><span style="color:#e1e4e8;">    serviceUrl:              # 注册中心集群地址</span></span>
<span class="line"><span style="color:#e1e4e8;">      defaultZone: http://localhost:8761/eureka/,http://localhost:8762/eureka/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">zuul:</span></span>
<span class="line"><span style="color:#24292e;">  routes:</span></span>
<span class="line"><span style="color:#24292e;">    service-consumer:</span></span>
<span class="line"><span style="color:#24292e;">      path: /consumer/**          # 请求映射路径</span></span>
<span class="line"><span style="color:#24292e;">      serviceId: service-consumer  # 服务名称路由</span></span>
<span class="line"><span style="color:#24292e;">eureka:</span></span>
<span class="line"><span style="color:#24292e;">  instance:</span></span>
<span class="line"><span style="color:#24292e;">    prefer-ip-address: true   # 使用ip地址注册</span></span>
<span class="line"><span style="color:#24292e;">    instance-id: \${spring.cloud.client.ip-address}:\${server.port}</span></span>
<span class="line"><span style="color:#24292e;">  client:</span></span>
<span class="line"><span style="color:#24292e;">    serviceUrl:              # 注册中心集群地址</span></span>
<span class="line"><span style="color:#24292e;">      defaultZone: http://localhost:8761/eureka/,http://localhost:8762/eureka/</span></span></code></pre></div><p><strong>3 简化路由规则（默认）</strong></p><p>只需要配置path对应微服务名称即可。会自动从eureka中注册的服务映射。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">zuul:</span></span>
<span class="line"><span style="color:#e1e4e8;">  routes:</span></span>
<span class="line"><span style="color:#e1e4e8;">    service-consumer:</span></span>
<span class="line"><span style="color:#e1e4e8;">      path: /service-consumer/**          # 请求映射路径</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">zuul:</span></span>
<span class="line"><span style="color:#24292e;">  routes:</span></span>
<span class="line"><span style="color:#24292e;">    service-consumer:</span></span>
<span class="line"><span style="color:#24292e;">      path: /service-consumer/**          # 请求映射路径</span></span></code></pre></div><p>浏览器访问<code>localhost:/9100/service-consumer/order/1</code></p><h4 id="路由排除" tabindex="-1">路由排除 <a class="header-anchor" href="#路由排除" aria-label="Permalink to &quot;路由排除&quot;">​</a></h4><p>URL路由排除</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">zuul:</span></span>
<span class="line"><span style="color:#e1e4e8;">  routes:</span></span>
<span class="line"><span style="color:#e1e4e8;">    ignored-patterns: /**/order/**        # 排除所有包含order的请求</span></span>
<span class="line"><span style="color:#e1e4e8;">    service-consumer:</span></span>
<span class="line"><span style="color:#e1e4e8;">      path: /service-consumer/**          # 请求映射路径</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">zuul:</span></span>
<span class="line"><span style="color:#24292e;">  routes:</span></span>
<span class="line"><span style="color:#24292e;">    ignored-patterns: /**/order/**        # 排除所有包含order的请求</span></span>
<span class="line"><span style="color:#24292e;">    service-consumer:</span></span>
<span class="line"><span style="color:#24292e;">      path: /service-consumer/**          # 请求映射路径</span></span></code></pre></div><p>服务名称排除</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">zuul:</span></span>
<span class="line"><span style="color:#e1e4e8;">  routes:</span></span>
<span class="line"><span style="color:#e1e4e8;">    ignored-services: service-provider        # 多个用，号</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">zuul:</span></span>
<span class="line"><span style="color:#24292e;">  routes:</span></span>
<span class="line"><span style="color:#24292e;">    ignored-services: service-provider        # 多个用，号</span></span></code></pre></div><h4 id="路由前缀" tabindex="-1">路由前缀 <a class="header-anchor" href="#路由前缀" aria-label="Permalink to &quot;路由前缀&quot;">​</a></h4><p>在所有访问前加上前缀<code>localhost:/9100/api/service-consumer/order/1</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">zuul:</span></span>
<span class="line"><span style="color:#e1e4e8;">  prefix: /api</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">zuul:</span></span>
<span class="line"><span style="color:#24292e;">  prefix: /api</span></span></code></pre></div><h3 id="_9-4-网关过滤器" tabindex="-1">9.4 网关过滤器 <a class="header-anchor" href="#_9-4-网关过滤器" aria-label="Permalink to &quot;9.4 网关过滤器&quot;">​</a></h3><p>Zuul包含路由和过滤两个核心功能。实际上路由也是通过过滤完成。</p><p>过滤器类型：pre、routing、post、error 共四个类型。</p><p>pre: 身份认证、选路由、请求日志；</p><p>routing: 转发</p><p>post: 对响应添加HTTP头、收集统计和度量指标、将响应以流的方式返回。</p><p>error：上述阶段出错。</p><p><img src="`+C+`" alt="image-20220703175932628"></p><p>实现过滤器必须实现四个方法：过滤器类型、执行顺序、判断条件、动作。</p><p>实现一个简单的输出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Component</span></span>
<span class="line"><span style="color:#e1e4e8;">public class CustomFilter extends ZuulFilter {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    public String filterType() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return &quot;pre&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    public int filterOrder() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean shouldFilter() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    public Object run() throws ZuulException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        RequestContext rc = RequestContext.getCurrentContext();</span></span>
<span class="line"><span style="color:#e1e4e8;">        HttpServletRequest request = rc.getRequest();</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(request.getMethod());</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(request.getRequestURL().toString());</span></span>
<span class="line"><span style="color:#e1e4e8;">        return null;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Component</span></span>
<span class="line"><span style="color:#24292e;">public class CustomFilter extends ZuulFilter {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public String filterType() {</span></span>
<span class="line"><span style="color:#24292e;">        return &quot;pre&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public int filterOrder() {</span></span>
<span class="line"><span style="color:#24292e;">        return 0;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public boolean shouldFilter() {</span></span>
<span class="line"><span style="color:#24292e;">        return true;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public Object run() throws ZuulException {</span></span>
<span class="line"><span style="color:#24292e;">        RequestContext rc = RequestContext.getCurrentContext();</span></span>
<span class="line"><span style="color:#24292e;">        HttpServletRequest request = rc.getRequest();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(request.getMethod());</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(request.getRequestURL().toString());</span></span>
<span class="line"><span style="color:#24292e;">        return null;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_9-5-zuul和hystrix无缝整合" tabindex="-1">9.5 Zuul和Hystrix无缝整合 <a class="header-anchor" href="#_9-5-zuul和hystrix无缝整合" aria-label="Permalink to &quot;9.5 Zuul和Hystrix无缝整合&quot;">​</a></h3><p>Zuul的依赖包含Hystrix依赖，但是没有提供监控面板的界面提示，需要添加dashboard依赖。</p><p>这一章依赖有问题，没成功。和Hystrix服务监控那一章估计是同样的问题。</p><p><strong>zuul可以做什么：</strong></p><ul><li>网关监控</li><li>网关熔断：发生错误时，返回特定内容。（定义一个FallBack类，返回指定的错误内容）</li><li>网关限流：如微博热点等，防止突然请求过过。</li><li>网关调优：</li></ul><p><strong>限流算法：</strong></p><p>计数器算法：如果counter在1分钟内限制100次访问。</p><p>漏桶算法：桶里水的流出速度是不变的，桶大小是不变的，流入速度不管，流入过多，则丢弃；</p><p>令牌桶算法：对漏桶算法的改进。漏桶是保护他人，令牌桶是保护自己。</p><p><img src="`+x+'" alt="image-20220703213743832"></p><h3 id="_9-6-zuul和sentinel整合" tabindex="-1">9.6 Zuul和Sentinel整合 <a class="header-anchor" href="#_9-6-zuul和sentinel整合" aria-label="Permalink to &quot;9.6 Zuul和Sentinel整合&quot;">​</a></h3><p>具体操作去看Sentinel官网吧，实际实现时，代码也有点问题。</p><p><img src="'+S+'" alt="image-20220703215544820"></p><h3 id="_9-7-高可用网关" tabindex="-1">9.7 高可用网关 <a class="header-anchor" href="#_9-7-高可用网关" aria-label="Permalink to &quot;9.7 高可用网关&quot;">​</a></h3><p>业内通常用多少个9来衡量网站的可用性，例如qq是4个9，表示一年99.99%的时间是可用的，一年最多53分钟不可用。</p><p>2个9表示基本可用，3个9表示高可用，4个9是拥有自动恢复能力的高可用。</p><p>实现高可用的手段是<strong>数据的冗余备份</strong>和<strong>服务的失效转移</strong>，具体怎么做？在网关里主要有以下几个方面：</p><ul><li>集群部署</li><li>负载均衡</li><li>健康检查</li><li>节点自动重启</li><li>熔断</li><li>服务降级</li><li>接口重试</li></ul><p>Nginx+网关实现高可用网关：</p><p>一个请求过来，先经过Nginx负载，到达网关（网关集群）。网关再负载到后端，如果有问题，网关会进行重试；如果重试多次仍失败，可以熔断、服务降级。</p><p><img src="'+P+'" alt="image-20220703222124490"></p><h1 id="_10-gateway网关" tabindex="-1">10. Gateway网关 <a class="header-anchor" href="#_10-gateway网关" aria-label="Permalink to &quot;10. Gateway网关&quot;">​</a></h1><p>Spring Cloud Netflix Zuul1.0版本是阻塞的，不支持长连接。虽然2.0支持了。但是Spring Cloud已经集成了Spring Cloud Gateway。</p><h3 id="_10-1-gateway核心概念" tabindex="-1">10.1 Gateway核心概念 <a class="header-anchor" href="#_10-1-gateway核心概念" aria-label="Permalink to &quot;10.1 Gateway核心概念&quot;">​</a></h3><p>路由：包括ID URI predicates filters</p><p>Predicates断言：如果请求路径能够配置得上，那么断言为真，然后开始路由，路由到URI。</p><h3 id="_10-2-创建网关服务" tabindex="-1">10.2 创建网关服务 <a class="header-anchor" href="#_10-2-创建网关服务" aria-label="Permalink to &quot;10.2 创建网关服务&quot;">​</a></h3><p>创建子模块并引入依赖</p><p>创建启动类</p><p>添加配置</p>',481),R=[L];function B(w,A,E,O,F,T){return n(),e("div",null,R)}const M=s(_,[["render",B]]);export{N as __pageData,M as default};
