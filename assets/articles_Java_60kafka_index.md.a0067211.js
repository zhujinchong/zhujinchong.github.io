import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.2516552c.js";const p="/assets/image-20220419112416278.3fd35281.png",l="/assets/image-20220419112825848.db027837.png",o="/assets/image-20220419112842504.df136328.png",t="/assets/image-20220419114053411.e12d7450.png",c="/assets/image-20220419135750379.502bb49b.png",r="/assets/image-20220419140755085.332247fd.png",i="/assets/image-20220419200618664.2cc13b01.png",d="/assets/image-20220419142417751.e0fc4622.png",u="/assets/image-20220421180945522.f7206d1f.png",y="/assets/image-20220419145549615.aafce7fb.png",x=JSON.parse('{"title":"第一章 概述","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/60kafka/index.md","filePath":"articles/Java/60kafka/index.md","lastUpdated":1698165534000}'),g={name:"articles/Java/60kafka/index.md"},h=a('<h1 id="第一章-概述" tabindex="-1">第一章 概述 <a class="header-anchor" href="#第一章-概述" aria-label="Permalink to &quot;第一章 概述&quot;">​</a></h1><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><p>Kafka 是一个分布式的基于 <strong>发布/订阅模式</strong> 的 <strong>消息队列</strong>（Message Queue），主要应用于大数据实时处理领域。</p><h2 id="消息队列" tabindex="-1">消息队列 <a class="header-anchor" href="#消息队列" aria-label="Permalink to &quot;消息队列&quot;">​</a></h2><p><img src="'+p+'" alt="image-20220419112416278"></p><p>消息队列的有点：</p><p>1）解耦</p><p>允许你独立的扩展或修改两边的处理过程，只要确保它们遵守同样的接口约束。</p><p>2）可恢复性</p><p>系统的一部分组件失效时，不会影响到整个系统。消息队列降低了进程间的耦合度，所以即使一个处理消息的进程挂掉，加入队列中的消息仍然可以在系统恢复后被处理。</p><p>3）缓冲</p><p>有助于控制和优化数据流经过系统的速度，解决生产消息和消费消息的处理速度不一致的情况。</p><p>4）灵活性 &amp; 峰值处理能力</p><p>在访问量剧增的情况下，应用仍然需要继续发挥作用，但是这样的突发流量并不常见。如果为以能处理这类峰值访问为标准来投入资源随时待命无疑是巨大的浪费。使用消息队列能够使关键组件顶住突发的访问压力，而不会因为突发的超负荷的请求而完全崩溃。</p><p>5）异步通信</p><p>很多时候，用户不想也不需要立即处理消息。消息队列提供了异步处理机制，允许用户把一个消息放入队列，但并不立即处理它。想向列中放入多少消息就放多少，然后在需要的时候再去处理它们。</p><h2 id="消息队列的两种模式" tabindex="-1">消息队列的两种模式 <a class="header-anchor" href="#消息队列的两种模式" aria-label="Permalink to &quot;消息队列的两种模式&quot;">​</a></h2><p><strong>点对点模式</strong>（一对一，消费者主动拉取数据，消息收到后消息清除）</p><p><img src="'+l+'" alt="image-20220419112825848"></p><p><strong>发布/订阅模式</strong>（一对多，消费者消费数据之后不会清除消息）</p><p><img src="'+o+'" alt="image-20220419112842504"></p><h2 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h2><p><strong>kafka简单示意图</strong></p><p><img src="'+t+'" alt="image-20220419114053411"></p><p><strong>Broker</strong></p><p>一个kafka节点就是一个broker，一个或多个broker就是一个kafka集群</p><p><strong>Producer / Consumer</strong></p><p>Producer向Broker发送消息，数据会被不断追加到log 文件末端，且每条数据都有自己的 offset。 Consumer从Broker读取消息，并记录自己的offset+1，以方便下次从offset+1继续读取消息。</p><p><strong>Consumer Group</strong></p><p>每个Consuemr属于一个特定的Group，一条消息可以被不同的Group消费，但是一个Group中只能有一个Consumer消费该消息。</p><p>消费者组是逻辑上的概念，默认空字符串，需要consumer自己指定。</p><p><strong>Topic主题</strong></p><p>逻辑上的概念，发布到kafka的消息都需要指定一个topic；topic存放在一个或多个broker上。</p><p><strong>Partition分区</strong></p><p>逻辑/物理上的概念，一个Topic中的数据分割成一个或多个Partition，每个Partition内部消息都是有序的。</p><ul><li>每个partition对应一个log文件，生产者不断追加数据，每条数据都有自己的offset。</li><li>如果一个topic有多个partition，那么消费topic，不能保证数据的顺序。</li></ul><p>为什么要分区？</p><ul><li>方便在集群中扩展：每个 Partition 可以通过调整以适应它所在的机器，而一个 topic又可以有多个 Partition 组成，因此整个集群就可以适应任意大小的数据了；</li><li>可以提高并发：因为可以以 Partition 为单位读写了。</li></ul><p><img src="'+c+'" alt="image-20220419135750379"></p><p><img src="'+r+`" alt="image-20220419135750379"></p><p><strong>log日志文件</strong></p><p>数据实际存储的文件，log和partition一一对应，为了防止log过大，log建成了一个文件夹，里面是有序的logSegment文件。</p><p>log日志什么时候分割：</p><ul><li>.log文件达到1G（可以配置参数log.segment.bytes，默认1G）</li><li>.log过期，默认7天（log.roll.ms或者log.roll.hours，默认7天）</li><li>.index偏移量索引文件达到10M （index稀疏索引，log.index.size.max.bytes，默认10M）</li><li>.index偏移量索引文件里面存储的相对索引达到最大值Integer.MAX_VALUE</li></ul><p>topic数据如何存到partition（多个partition）：</p><ul><li>如果指定了partition，直接存；</li><li>如果未指定，但是指定了key，通过对key进行hash，选出一个partittion；</li><li>如果都未指定，轮询选择partition；</li></ul><p>Borker和Partition关系：</p><ul><li>如果有N个borker，某个topic有N个partition，那么broker和partition一对一。</li><li>如果有N+M个borker，某个topic有N个partition，那么多余的broker不存数据。</li><li>应该避免partition&gt;borker情况，否则一个borker存多个partition。</li></ul><p><strong>replication / Leader / Follower</strong></p><p>每个partition有多个副本（replicatioin），其中一个是Leader，其他是Follower。生产者和消费者只与leader交互，而follower只负责消息同步。</p><ul><li>所有请求通过leader，leader广播给follower。</li><li>如果leader挂掉，从follower中选一个新的leader。</li><li>如果follower挂掉，leader把这个follower从ISR列表中删除，重新创建一个。</li></ul><p><strong>AR / ISR / OSR</strong></p><p>所有副本统称为AR Assigned Replicas</p><p>与leader副本保持同步的副本统称为ISR In-Sync Replicas</p><p>和leader副本的不同步的副本统称为OSR Out-of-Sync Replicas</p><h2 id="kafka安装和运行" tabindex="-1">kafka安装和运行 <a class="header-anchor" href="#kafka安装和运行" aria-label="Permalink to &quot;kafka安装和运行&quot;">​</a></h2><h3 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h3><p>下载Linux版本，解压即可（依赖JDK1.8以上，所以需要安装好JDK1.8）</p><p>kafka用到了zookeeper，先启动Zookeeper，再启动kafka。</p><p>kafka2.8版本不再使用zookeeper，内嵌了一个算法/协议，实现zookeeper类似功能。</p><h3 id="启动zookeeper" tabindex="-1">启动Zookeeper <a class="header-anchor" href="#启动zookeeper" aria-label="Permalink to &quot;启动Zookeeper&quot;">​</a></h3><p><strong>单机：</strong></p><p>1、复制配置<code>cp conf/zoo_sample.cfg conf/zoo.cfg</code></p><p>2、修改配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 数据目录</span></span>
<span class="line"><span style="color:#e1e4e8;">dataDir=/tmp/zookeeper/data</span></span>
<span class="line"><span style="color:#e1e4e8;"># 日志目录</span></span>
<span class="line"><span style="color:#e1e4e8;">dataLogDir=/tmp/zookeeper/log</span></span>
<span class="line"><span style="color:#e1e4e8;"># 对外端口</span></span>
<span class="line"><span style="color:#e1e4e8;">clientPort=2181</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 数据目录</span></span>
<span class="line"><span style="color:#24292e;">dataDir=/tmp/zookeeper/data</span></span>
<span class="line"><span style="color:#24292e;"># 日志目录</span></span>
<span class="line"><span style="color:#24292e;">dataLogDir=/tmp/zookeeper/log</span></span>
<span class="line"><span style="color:#24292e;"># 对外端口</span></span>
<span class="line"><span style="color:#24292e;">clientPort=2181</span></span></code></pre></div><p>3、在数据目录下创建一个myid文件，并写入服务器的编号0。（myid文件里面只写一个0）</p><p>4、启动<code>sh bin/zkServer.sh start</code></p><p>5、查看启动状态<code>sh bin/zkServer.sh status</code></p><p><strong>集群：</strong></p><p>1、每个机器安装zookeeper，并修改myid编号、clientPort端口号、目录地址</p><p>2、在zoo.cfg中添加集群的编号、IP、端口</p><ul><li>第一个端口表示服务器与leader服务器交换信息的端口（和<code>clientPort</code>端口不是一个）</li><li>第二个端口表示选举leader时服务器互相通信的端口</li></ul><div class="language-# vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">#</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 单机模拟集群如下</span></span>
<span class="line"><span style="color:#e1e4e8;">server.0=192.168.0.11:2887:3887</span></span>
<span class="line"><span style="color:#e1e4e8;">server.1=192.168.0.11:2888:3888</span></span>
<span class="line"><span style="color:#e1e4e8;">server.2=192.168.0.11:2889:3889</span></span>
<span class="line"><span style="color:#e1e4e8;"># 正常的多机集群如下</span></span>
<span class="line"><span style="color:#e1e4e8;">server.0=192.168.0.11:2888:3888</span></span>
<span class="line"><span style="color:#e1e4e8;">server.1=192.168.0.12:2888:3888</span></span>
<span class="line"><span style="color:#e1e4e8;">server.2=192.168.0.13:2888:3888</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 单机模拟集群如下</span></span>
<span class="line"><span style="color:#24292e;">server.0=192.168.0.11:2887:3887</span></span>
<span class="line"><span style="color:#24292e;">server.1=192.168.0.11:2888:3888</span></span>
<span class="line"><span style="color:#24292e;">server.2=192.168.0.11:2889:3889</span></span>
<span class="line"><span style="color:#24292e;"># 正常的多机集群如下</span></span>
<span class="line"><span style="color:#24292e;">server.0=192.168.0.11:2888:3888</span></span>
<span class="line"><span style="color:#24292e;">server.1=192.168.0.12:2888:3888</span></span>
<span class="line"><span style="color:#24292e;">server.2=192.168.0.13:2888:3888</span></span></code></pre></div><h3 id="zookeeper启动错误" tabindex="-1">Zookeeper启动错误 <a class="header-anchor" href="#zookeeper启动错误" aria-label="Permalink to &quot;Zookeeper启动错误&quot;">​</a></h3><p>启动成功了，但是查看状态是<code>Error contacting service. It is probably not running.</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">- 查看bin下有没有zookeeper.out文件，里面有错误日志。</span></span>
<span class="line"><span style="color:#e1e4e8;">- 用命令启动（显示报错信息）sh zkServer.sh start-foreground</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">- 查看bin下有没有zookeeper.out文件，里面有错误日志。</span></span>
<span class="line"><span style="color:#24292e;">- 用命令启动（显示报错信息）sh zkServer.sh start-foreground</span></span></code></pre></div><p>报错：<code>AdminServerException: 8080端口占用</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">原因：zookeeper新版本内嵌了netty做控制台服务。</span></span>
<span class="line"><span style="color:#e1e4e8;">三种解决方法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	1. 在配置中修改端口admin.serverPort=xxxx</span></span>
<span class="line"><span style="color:#e1e4e8;">	2. 删除jetty</span></span>
<span class="line"><span style="color:#e1e4e8;">	3. 在启动脚本中停用该服务。添加&#39;-Dzookeeper.admin.enableServer=false&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">原因：zookeeper新版本内嵌了netty做控制台服务。</span></span>
<span class="line"><span style="color:#24292e;">三种解决方法：</span></span>
<span class="line"><span style="color:#24292e;">	1. 在配置中修改端口admin.serverPort=xxxx</span></span>
<span class="line"><span style="color:#24292e;">	2. 删除jetty</span></span>
<span class="line"><span style="color:#24292e;">	3. 在启动脚本中停用该服务。添加&#39;-Dzookeeper.admin.enableServer=false&#39;</span></span></code></pre></div><h3 id="启动kafka" tabindex="-1">启动Kafka <a class="header-anchor" href="#启动kafka" aria-label="Permalink to &quot;启动Kafka&quot;">​</a></h3><p>修改配置<code>vim conf/server.properties</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># broker编号</span></span>
<span class="line"><span style="color:#e1e4e8;">broker.id=0</span></span>
<span class="line"><span style="color:#e1e4e8;"># 对外端口</span></span>
<span class="line"><span style="color:#e1e4e8;"># advertised.listeners=PLAINTEXT://xxx.xxx.xxx.xxx:9092</span></span>
<span class="line"><span style="color:#e1e4e8;"># 当使用同一局域网时，用ip</span></span>
<span class="line"><span style="color:#e1e4e8;">listeners=PLAINTEST://192.168.41.213:9092</span></span>
<span class="line"><span style="color:#e1e4e8;"># 存放日志文件地址</span></span>
<span class="line"><span style="color:#e1e4e8;">log.dirs=/tmp/kafka-logs</span></span>
<span class="line"><span style="color:#e1e4e8;"># zookeeper集群地址，逗号分割</span></span>
<span class="line"><span style="color:#e1e4e8;">zookeeper.connect=localhost:2181</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># broker编号</span></span>
<span class="line"><span style="color:#24292e;">broker.id=0</span></span>
<span class="line"><span style="color:#24292e;"># 对外端口</span></span>
<span class="line"><span style="color:#24292e;"># advertised.listeners=PLAINTEXT://xxx.xxx.xxx.xxx:9092</span></span>
<span class="line"><span style="color:#24292e;"># 当使用同一局域网时，用ip</span></span>
<span class="line"><span style="color:#24292e;">listeners=PLAINTEST://192.168.41.213:9092</span></span>
<span class="line"><span style="color:#24292e;"># 存放日志文件地址</span></span>
<span class="line"><span style="color:#24292e;">log.dirs=/tmp/kafka-logs</span></span>
<span class="line"><span style="color:#24292e;"># zookeeper集群地址，逗号分割</span></span>
<span class="line"><span style="color:#24292e;">zookeeper.connect=localhost:2181</span></span></code></pre></div><p>启动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> sh bin/kafka-server-start.sh config/server.properties</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"> sh bin/kafka-server-start.sh config/server.properties</span></span></code></pre></div><p>查看是否启动成功</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 是否有kafka.Kafka</span></span>
<span class="line"><span style="color:#e1e4e8;">jps -l</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 是否有kafka.Kafka</span></span>
<span class="line"><span style="color:#24292e;">jps -l</span></span></code></pre></div><p>kafka集群只需要修改配置 id、对外端口、日志地址，其他不用变。</p><h2 id="发送和读取消息" tabindex="-1">发送和读取消息 <a class="header-anchor" href="#发送和读取消息" aria-label="Permalink to &quot;发送和读取消息&quot;">​</a></h2><p>创建一个叫<code>test</code>的topic</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sh bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sh bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test</span></span></code></pre></div><p>查看创建的topic列表</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sh kafka-topics.sh --zookeeper localhost:21811 --list				# 旧版</span></span>
<span class="line"><span style="color:#e1e4e8;">sh kafka-topics.sh --bootstrap-server 192.168.41.213:9000 --list	# 新版</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sh kafka-topics.sh --zookeeper localhost:21811 --list				# 旧版</span></span>
<span class="line"><span style="color:#24292e;">sh kafka-topics.sh --bootstrap-server 192.168.41.213:9000 --list	# 新版</span></span></code></pre></div><p>查看topic更多信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sh bin/kafka-topics.sh --zookeeper localhost:2181 --describe --topic test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sh bin/kafka-topics.sh --zookeeper localhost:2181 --describe --topic test</span></span></code></pre></div><p>启动produces控制台，在控制台发送消息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 启动produces控制台</span></span>
<span class="line"><span style="color:#e1e4e8;"># sh bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test</span></span>
<span class="line"><span style="color:#e1e4e8;">sh bin/kafka-console-producer.sh --broker-list 192.168.41.213:9092 --topic test</span></span>
<span class="line"><span style="color:#e1e4e8;"># 发送消息</span></span>
<span class="line"><span style="color:#e1e4e8;">This is a messageThis is another message</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 启动produces控制台</span></span>
<span class="line"><span style="color:#24292e;"># sh bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test</span></span>
<span class="line"><span style="color:#24292e;">sh bin/kafka-console-producer.sh --broker-list 192.168.41.213:9092 --topic test</span></span>
<span class="line"><span style="color:#24292e;"># 发送消息</span></span>
<span class="line"><span style="color:#24292e;">This is a messageThis is another message</span></span></code></pre></div><p>关闭发送控制台（<code>ctrl+c</code>），启动consumer控制台，读取消息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sh bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic test --from-beginning</span></span>
<span class="line"><span style="color:#e1e4e8;"># 版本不一样，下面命令也是</span></span>
<span class="line"><span style="color:#e1e4e8;"># sh bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning</span></span>
<span class="line"><span style="color:#e1e4e8;">sh bin/kafka-console-consumer.sh --bootstrap-server 192.168.41.213:9092 --topic test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sh bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic test --from-beginning</span></span>
<span class="line"><span style="color:#24292e;"># 版本不一样，下面命令也是</span></span>
<span class="line"><span style="color:#24292e;"># sh bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning</span></span>
<span class="line"><span style="color:#24292e;">sh bin/kafka-console-consumer.sh --bootstrap-server 192.168.41.213:9092 --topic test</span></span></code></pre></div><h2 id="参数总结" tabindex="-1">参数总结 <a class="header-anchor" href="#参数总结" aria-label="Permalink to &quot;参数总结&quot;">​</a></h2><p>server.properties中的参数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># zookeeper集群地址</span></span>
<span class="line"><span style="color:#e1e4e8;">zookeeper.connect=localhost:2181,localhost:2182</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># kafka集群内的broker的唯一标识，从0开始设置</span></span>
<span class="line"><span style="color:#e1e4e8;">broker.id=0</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 本机ip和端口，用于客户端连接（局域网内）</span></span>
<span class="line"><span style="color:#e1e4e8;">listeners=PLAINTEXT://192.168.41.213:9092</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 供外网客户端使用，即公网IP</span></span>
<span class="line"><span style="color:#e1e4e8;"># advertised.listeners=PLAINTEXT://xxx.xxx.xxx.xxx:9092</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 日志存放地址，优先级高于配置log.dir</span></span>
<span class="line"><span style="color:#e1e4e8;">log.dirs=/home/data/kafka-logs</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># broker所能接受的最大参数</span></span>
<span class="line"><span style="color:#e1e4e8;">message.max.bytes=1000012 # 默认越976.6KB</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># zookeeper集群地址</span></span>
<span class="line"><span style="color:#24292e;">zookeeper.connect=localhost:2181,localhost:2182</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># kafka集群内的broker的唯一标识，从0开始设置</span></span>
<span class="line"><span style="color:#24292e;">broker.id=0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 本机ip和端口，用于客户端连接（局域网内）</span></span>
<span class="line"><span style="color:#24292e;">listeners=PLAINTEXT://192.168.41.213:9092</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 供外网客户端使用，即公网IP</span></span>
<span class="line"><span style="color:#24292e;"># advertised.listeners=PLAINTEXT://xxx.xxx.xxx.xxx:9092</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 日志存放地址，优先级高于配置log.dir</span></span>
<span class="line"><span style="color:#24292e;">log.dirs=/home/data/kafka-logs</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># broker所能接受的最大参数</span></span>
<span class="line"><span style="color:#24292e;">message.max.bytes=1000012 # 默认越976.6KB</span></span></code></pre></div><h1 id="第二章-生产者" tabindex="-1">第二章 生产者 <a class="header-anchor" href="#第二章-生产者" aria-label="Permalink to &quot;第二章 生产者&quot;">​</a></h1><p>消息发送需要按顺序经过：拦截器、序列化器、分区器。</p><p>topic数据如何存到partition（多个partition），默认分区器这么做的：</p><ul><li>如果指定了partition，直接存；</li><li>如果未指定，但是指定了key，通过对key进行hash，选出一个partittion；</li><li>如果都未指定，轮询选择partition；</li></ul><p>生产者客户端有两个线程：主线程和Sender线程。</p><ul><li>主线程：由KafkaProducer创建消息，通过拦截器、序列化器、分区器后缓存到消息累加器RecordAccumulator中。 <ul><li>消息累加器为每个分区提供了一个双端队列<code>Deuqe&lt;ProducerBatch&gt;</code>。</li><li>ProducerBatch包含一个或多个ProducerRecord。</li></ul></li><li>Sender线程：从RecordAccumulator中获取消息并发送到Kafka。 <ul><li>该线程将消息处理为<code>&lt;Node, List&lt;ProducerBatch&gt;&gt;</code>的形式，Node表示集群节点。</li><li>进一步转化为<code>&lt;Node, Request&gt;</code>形式，向服务器发送。</li><li>消息以<code>Map&lt;NodeId, Deque&lt;Request&gt;&gt;</code>形式保存在InFlightRequests中缓存，防止消息发送失败。</li></ul></li></ul><p><img src="`+i+`" alt="image-20220419200618664"></p><p>生产者端参数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 副本同步</span></span>
<span class="line"><span style="color:#e1e4e8;">acks	# &quot;-1&quot;;&quot;0&quot;;&quot;1&quot;。 默认1，保证leader写入消息</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 重试次数</span></span>
<span class="line"><span style="color:#e1e4e8;">retries  # 默认0</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 重试之间的间隔时间</span></span>
<span class="line"><span style="color:#e1e4e8;">retry.backoff.ms	# 默认100</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 消息压缩格式，默认不会被压缩</span></span>
<span class="line"><span style="color:#e1e4e8;">compression.type</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 闲置时关闭连接，默认540000ms，9分钟</span></span>
<span class="line"><span style="color:#e1e4e8;">connections.max.idle.ms</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 消息延迟，默认0，增大可以提高吞吐量。</span></span>
<span class="line"><span style="color:#e1e4e8;">linger.ms</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 等待请求响应的最长时间，默认30000ms</span></span>
<span class="line"><span style="color:#e1e4e8;">request.timeout.ms</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 客户端消息最大值</span></span>
<span class="line"><span style="color:#e1e4e8;">max.request.size	# 默认1MB，和broker端参数message.max.bytes相关</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># RecordAccumulator消息累加器大小</span></span>
<span class="line"><span style="color:#e1e4e8;">buffer.memory=33554432B # 默认32MB</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># ProducerBatch的大小</span></span>
<span class="line"><span style="color:#e1e4e8;">batch.size</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 副本同步</span></span>
<span class="line"><span style="color:#24292e;">acks	# &quot;-1&quot;;&quot;0&quot;;&quot;1&quot;。 默认1，保证leader写入消息</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 重试次数</span></span>
<span class="line"><span style="color:#24292e;">retries  # 默认0</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 重试之间的间隔时间</span></span>
<span class="line"><span style="color:#24292e;">retry.backoff.ms	# 默认100</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 消息压缩格式，默认不会被压缩</span></span>
<span class="line"><span style="color:#24292e;">compression.type</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 闲置时关闭连接，默认540000ms，9分钟</span></span>
<span class="line"><span style="color:#24292e;">connections.max.idle.ms</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 消息延迟，默认0，增大可以提高吞吐量。</span></span>
<span class="line"><span style="color:#24292e;">linger.ms</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 等待请求响应的最长时间，默认30000ms</span></span>
<span class="line"><span style="color:#24292e;">request.timeout.ms</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 客户端消息最大值</span></span>
<span class="line"><span style="color:#24292e;">max.request.size	# 默认1MB，和broker端参数message.max.bytes相关</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># RecordAccumulator消息累加器大小</span></span>
<span class="line"><span style="color:#24292e;">buffer.memory=33554432B # 默认32MB</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># ProducerBatch的大小</span></span>
<span class="line"><span style="color:#24292e;">batch.size</span></span></code></pre></div><h1 id="第三章-消费者" tabindex="-1">第三章 消费者 <a class="header-anchor" href="#第三章-消费者" aria-label="Permalink to &quot;第三章 消费者&quot;">​</a></h1><h2 id="分区分配策略" tabindex="-1">分区分配策略 <a class="header-anchor" href="#分区分配策略" aria-label="Permalink to &quot;分区分配策略&quot;">​</a></h2><p>一个 consumer group 中有多个 consumer，一个 topic 有多个 partition，所以必然会涉及到 partition 的分配问题，即确定那个 partition 由哪个 consumer 来消费。</p><p>客户端参数partition.assignment.startegy</p><ul><li>RangeAssignor：先计算每个消费者被分到的分区个数，然后连续分配。</li><li>RoundRobinAssignor：轮询方式将分区依次分配给每个消费者。</li><li>StickyAssignor：第一，尽可能均匀；第二，分配分配要与上次分配保持相同；第三，第一条优先于第二条。</li></ul><p><img src="`+d+'" alt="image-20220419142417751"></p><h2 id="再均衡过程" tabindex="-1">再均衡过程 <a class="header-anchor" href="#再均衡过程" aria-label="Permalink to &quot;再均衡过程&quot;">​</a></h2><p>旧版Kafka 集群中有一个 broker 会被选举为 Controller （/controller节点），负责broker上下线、分区分配、leader选举等。消费者客户端、消费位移等信息存储在ZooKeeper，都依赖Watcher监听器。</p><p>每个消费者通过ZooKeeper监听器监听消费者组、kafka集群的状态，当发生再均衡时，该组内所有消费者都会同时进行再均衡，容易发生故障。</p><p><img src="'+u+`" alt="image-20220421180945522"></p><p>新版每个消费组的子集在服务端有一个GroupCoordinator管理消费者组，消费者客户端的ConsumerCoordinator负责与GroupCorrdinator交互。</p><p>新消费者加入，再均衡过程：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1. 消费者发送请求寻找GroupCoordinator，服务端找到该分区leader节点，leader节点扮演GroupCoordinator</span></span>
<span class="line"><span style="color:#e1e4e8;">2. 消费者向GroupCoordinator发送加入消费者组请求，GroupCoordinator选出消费者可用的分配策略，并返回给‘leader消费者’。（leader消费者按顺序选出的。）</span></span>
<span class="line"><span style="color:#e1e4e8;">3. leader消费者实施具体的分区分配方案，再发送请求给GroupCoordinator，GroupCoordinator发送给每个消费者</span></span>
<span class="line"><span style="color:#e1e4e8;">4. 消费者向GroupCoordinator定时发送心跳。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. 消费者发送请求寻找GroupCoordinator，服务端找到该分区leader节点，leader节点扮演GroupCoordinator</span></span>
<span class="line"><span style="color:#24292e;">2. 消费者向GroupCoordinator发送加入消费者组请求，GroupCoordinator选出消费者可用的分配策略，并返回给‘leader消费者’。（leader消费者按顺序选出的。）</span></span>
<span class="line"><span style="color:#24292e;">3. leader消费者实施具体的分区分配方案，再发送请求给GroupCoordinator，GroupCoordinator发送给每个消费者</span></span>
<span class="line"><span style="color:#24292e;">4. 消费者向GroupCoordinator定时发送心跳。</span></span></code></pre></div><p>参数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 心跳间隔</span></span>
<span class="line"><span style="color:#e1e4e8;">heartbeat.interval.ms=3000  # 默认3000， 这个值必须比session.timeout.ms小，一般是1/3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 消费者死亡时间</span></span>
<span class="line"><span style="color:#e1e4e8;">session.timeout.ms=xx   # 这个参数必须介于下面两个参数之间</span></span>
<span class="line"><span style="color:#e1e4e8;">group.min.session.timeout.ms=6000</span></span>
<span class="line"><span style="color:#e1e4e8;">group.max.session.timeout.ms=300000</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 心跳间隔</span></span>
<span class="line"><span style="color:#24292e;">heartbeat.interval.ms=3000  # 默认3000， 这个值必须比session.timeout.ms小，一般是1/3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 消费者死亡时间</span></span>
<span class="line"><span style="color:#24292e;">session.timeout.ms=xx   # 这个参数必须介于下面两个参数之间</span></span>
<span class="line"><span style="color:#24292e;">group.min.session.timeout.ms=6000</span></span>
<span class="line"><span style="color:#24292e;">group.max.session.timeout.ms=300000</span></span></code></pre></div><h2 id="consumer-offsets" tabindex="-1">__consumer_offsets <a class="header-anchor" href="#consumer-offsets" aria-label="Permalink to &quot;__consumer_offsets&quot;">​</a></h2><p>由于 consumer 在消费过程中可能会出现断电宕机等故障，consumer 恢复后，需要从故障前的位置的继续消费，所以 consumer 需要实时记录自己消费到了哪个 offset，以便故障恢复后继续消费。</p><ul><li>Kafka 0.9 版本之前，consumer 默认将 offset 保存在 Zookeeper 中</li><li>从 0.9 版本开始，consumer 默认将 offset 保存在 Kafka 一个内置的 topic 中，该 topic 为__consumer_offsets。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># __consumer_offsets主题分区数量</span></span>
<span class="line"><span style="color:#e1e4e8;">offsets.topic.replication.factor=50 # 默认50个</span></span>
<span class="line"><span style="color:#e1e4e8;"># 消费偏移量保留时间</span></span>
<span class="line"><span style="color:#e1e4e8;">offsets.retention.minutes=10080  # 默认7天， 2.0.0版本之后是1天</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># __consumer_offsets主题分区数量</span></span>
<span class="line"><span style="color:#24292e;">offsets.topic.replication.factor=50 # 默认50个</span></span>
<span class="line"><span style="color:#24292e;"># 消费偏移量保留时间</span></span>
<span class="line"><span style="color:#24292e;">offsets.retention.minutes=10080  # 默认7天， 2.0.0版本之后是1天</span></span></code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2><h2 id="消费者组" tabindex="-1">消费者组 <a class="header-anchor" href="#消费者组" aria-label="Permalink to &quot;消费者组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 查看消费者组</span></span>
<span class="line"><span style="color:#e1e4e8;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --list</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看某个消费者组详细信息</span></span>
<span class="line"><span style="color:#e1e4e8;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --describe --group console-consumer-90717</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看某个消费者组状态</span></span>
<span class="line"><span style="color:#e1e4e8;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --describe --group console-consumer-90717 --state</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看某个消费者组内的所有消费者</span></span>
<span class="line"><span style="color:#e1e4e8;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --describe --group console-consumer-90717 --members</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除消费者组</span></span>
<span class="line"><span style="color:#e1e4e8;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --delete --group console-consumer-90717</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 查看消费者组</span></span>
<span class="line"><span style="color:#24292e;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --list</span></span>
<span class="line"><span style="color:#24292e;"># 查看某个消费者组详细信息</span></span>
<span class="line"><span style="color:#24292e;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --describe --group console-consumer-90717</span></span>
<span class="line"><span style="color:#24292e;"># 查看某个消费者组状态</span></span>
<span class="line"><span style="color:#24292e;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --describe --group console-consumer-90717 --state</span></span>
<span class="line"><span style="color:#24292e;"># 查看某个消费者组内的所有消费者</span></span>
<span class="line"><span style="color:#24292e;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --describe --group console-consumer-90717 --members</span></span>
<span class="line"><span style="color:#24292e;"># 删除消费者组</span></span>
<span class="line"><span style="color:#24292e;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --delete --group console-consumer-90717</span></span></code></pre></div><p>消费者位移管理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 消费者组内的所有topic移到0</span></span>
<span class="line"><span style="color:#e1e4e8;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --group console-consumer-90717 --all-topics --reset-offsets --to-earliest --execute</span></span>
<span class="line"><span style="color:#e1e4e8;"># 指定分区移到最后</span></span>
<span class="line"><span style="color:#e1e4e8;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --group console-consumer-90717 --topic test:2 --reset-offsets --to-latest --execute</span></span>
<span class="line"><span style="color:#e1e4e8;"># 往前移动10个偏移量</span></span>
<span class="line"><span style="color:#e1e4e8;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --group console-consumer-90717 --topic test --reset-offsets --shift-by -10 --execute</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 消费者组内的所有topic移到0</span></span>
<span class="line"><span style="color:#24292e;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --group console-consumer-90717 --all-topics --reset-offsets --to-earliest --execute</span></span>
<span class="line"><span style="color:#24292e;"># 指定分区移到最后</span></span>
<span class="line"><span style="color:#24292e;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --group console-consumer-90717 --topic test:2 --reset-offsets --to-latest --execute</span></span>
<span class="line"><span style="color:#24292e;"># 往前移动10个偏移量</span></span>
<span class="line"><span style="color:#24292e;">sh kafka-consumer-groups.sh --bootstrap-server 192.168.41.213:9000 --group console-consumer-90717 --topic test --reset-offsets --shift-by -10 --execute</span></span></code></pre></div><h1 id="第四章-主题和分区" tabindex="-1">第四章 主题和分区 <a class="header-anchor" href="#第四章-主题和分区" aria-label="Permalink to &quot;第四章 主题和分区&quot;">​</a></h1><p>如果默认配置不变，那么当客户端第一次发送或订阅消息时，会自动创建，这样就不利于管理主题。</p><p>所以，可以设置<code>auto.create.topics.enale=false</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 是否自动创建topic，默认为true</span></span>
<span class="line"><span style="color:#e1e4e8;">auto.create.topics.enable=true</span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认分区数</span></span>
<span class="line"><span style="color:#e1e4e8;">num.partitions=1</span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认副本数</span></span>
<span class="line"><span style="color:#e1e4e8;">default.replication.factor=1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 是否自动创建topic，默认为true</span></span>
<span class="line"><span style="color:#24292e;">auto.create.topics.enable=true</span></span>
<span class="line"><span style="color:#24292e;"># 默认分区数</span></span>
<span class="line"><span style="color:#24292e;">num.partitions=1</span></span>
<span class="line"><span style="color:#24292e;"># 默认副本数</span></span>
<span class="line"><span style="color:#24292e;">default.replication.factor=1</span></span></code></pre></div><p>创建主题</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 命令</span></span>
<span class="line"><span style="color:#e1e4e8;">sh bin/kafka-topics.sh --zookeeper localhost:2181 --create --topic topic-1 --partitions 3 --replication-factor 2</span></span>
<span class="line"><span style="color:#e1e4e8;"># 命令replica-assignment也可以，定义分区和副本位置，注意副本不能在同一个节点上，如2:2</span></span>
<span class="line"><span style="color:#e1e4e8;">sh bin/kafka-topics.sh --zookeeper localhost:2181 --create --topic topics-1 --replica-assignment 2:0,0:1,1:2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 命令</span></span>
<span class="line"><span style="color:#24292e;">sh bin/kafka-topics.sh --zookeeper localhost:2181 --create --topic topic-1 --partitions 3 --replication-factor 2</span></span>
<span class="line"><span style="color:#24292e;"># 命令replica-assignment也可以，定义分区和副本位置，注意副本不能在同一个节点上，如2:2</span></span>
<span class="line"><span style="color:#24292e;">sh bin/kafka-topics.sh --zookeeper localhost:2181 --create --topic topics-1 --replica-assignment 2:0,0:1,1:2</span></span></code></pre></div><p>查看主题</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 查看所有</span></span>
<span class="line"><span style="color:#e1e4e8;">sh bin/kafka-topics.sh --zookeeper localhost:2181 -list</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看指定</span></span>
<span class="line"><span style="color:#e1e4e8;">sh bin/kafka-topics.sh --zookeeper localhost:21810 --describe --topic topic-1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 查看所有</span></span>
<span class="line"><span style="color:#24292e;">sh bin/kafka-topics.sh --zookeeper localhost:2181 -list</span></span>
<span class="line"><span style="color:#24292e;"># 查看指定</span></span>
<span class="line"><span style="color:#24292e;">sh bin/kafka-topics.sh --zookeeper localhost:21810 --describe --topic topic-1</span></span></code></pre></div><p>删除主题</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sh bin/kafka-topics.sh --zookeeper localhost:2181 --delete --topic topic-1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sh bin/kafka-topics.sh --zookeeper localhost:2181 --delete --topic topic-1</span></span></code></pre></div><h1 id="第五章-日志" tabindex="-1">第五章 日志 <a class="header-anchor" href="#第五章-日志" aria-label="Permalink to &quot;第五章 日志&quot;">​</a></h1><p>查看index内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sh bin/kafka-dump-log.sh --files kafka-logs/test1-0/00000000000000000000.index</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sh bin/kafka-dump-log.sh --files kafka-logs/test1-0/00000000000000000000.index</span></span></code></pre></div><p>日志清理方式：</p><ul><li>日志压缩：将重复的key删除，只保留最后一次的值。</li><li>日志删除</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 日志清理方式，默认delete</span></span>
<span class="line"><span style="color:#e1e4e8;">log.cleanup.policy=&#39;delete,compact&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"># 基于时间清理，默认7天</span></span>
<span class="line"><span style="color:#e1e4e8;">log.retention.hours</span></span>
<span class="line"><span style="color:#e1e4e8;">log.retention.minutes</span></span>
<span class="line"><span style="color:#e1e4e8;">log.retention.ms</span></span>
<span class="line"><span style="color:#e1e4e8;"># 基于日志大小清理，默认-1表示无穷大</span></span>
<span class="line"><span style="color:#e1e4e8;">log.retention.bytes</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#单个日志分段大小, 默认1GB</span></span>
<span class="line"><span style="color:#e1e4e8;">log.segment.bytes</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 日志都是稀疏的，可以通过参数配置</span></span>
<span class="line"><span style="color:#e1e4e8;">log.index.interval.bytes=4096 # 默认4kb</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 日志清理方式，默认delete</span></span>
<span class="line"><span style="color:#24292e;">log.cleanup.policy=&#39;delete,compact&#39;</span></span>
<span class="line"><span style="color:#24292e;"># 基于时间清理，默认7天</span></span>
<span class="line"><span style="color:#24292e;">log.retention.hours</span></span>
<span class="line"><span style="color:#24292e;">log.retention.minutes</span></span>
<span class="line"><span style="color:#24292e;">log.retention.ms</span></span>
<span class="line"><span style="color:#24292e;"># 基于日志大小清理，默认-1表示无穷大</span></span>
<span class="line"><span style="color:#24292e;">log.retention.bytes</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#单个日志分段大小, 默认1GB</span></span>
<span class="line"><span style="color:#24292e;">log.segment.bytes</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 日志都是稀疏的，可以通过参数配置</span></span>
<span class="line"><span style="color:#24292e;">log.index.interval.bytes=4096 # 默认4kb</span></span></code></pre></div><h1 id="第七章-可靠性" tabindex="-1">第七章 可靠性 <a class="header-anchor" href="#第七章-可靠性" aria-label="Permalink to &quot;第七章 可靠性&quot;">​</a></h1><h2 id="探究可靠性" tabindex="-1">探究可靠性 <a class="header-anchor" href="#探究可靠性" aria-label="Permalink to &quot;探究可靠性&quot;">​</a></h2><p>如何保证数据不丢失、数据不重复、数据一致。</p><p>kafka提供的三种可靠性级别：</p><table><thead><tr><th></th><th>延迟</th><th>丢失数据</th><th>重复数据</th></tr></thead><tbody><tr><td>acks=0</td><td>leader一接收到还没有写入磁盘就返回ack</td><td>返回ack，当 leader故障时</td><td>No</td></tr><tr><td>acks=1</td><td>leader 落盘成功后返回 ack</td><td>返回ack，当follower还未同步，leader发生故障</td><td>No</td></tr><tr><td>acks=-1</td><td>leader 和 follower 全部落盘成功后才返回 ack</td><td>No</td><td>follower同步，还未返回ack，leader发生故障</td></tr></tbody></table><p>如果保证数据一致：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">0.11.0.0版本之前，均认为HW和LEO可以保证数据一致性:</span></span>
<span class="line"><span style="color:#e1e4e8;">follower发生故障：被临时踢出ISR，待该follower恢复后，follower会将高于HW的部分截取掉，从HW开始向leader进行同步。</span></span>
<span class="line"><span style="color:#e1e4e8;">leader发生故障：会从ISR中选出一个新的leader。其余的follower会先将各自高于HW的部分截掉，然后从新的leader同步数据。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">0.11.0.0版本之前，均认为HW和LEO可以保证数据一致性:</span></span>
<span class="line"><span style="color:#24292e;">follower发生故障：被临时踢出ISR，待该follower恢复后，follower会将高于HW的部分截取掉，从HW开始向leader进行同步。</span></span>
<span class="line"><span style="color:#24292e;">leader发生故障：会从ISR中选出一个新的leader。其余的follower会先将各自高于HW的部分截掉，然后从新的leader同步数据。</span></span></code></pre></div><p><img src="`+y+`" alt="image-20220419145549615"></p><p>数据一致：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">特殊情况：</span></span>
<span class="line"><span style="color:#e1e4e8;">	A是Leader，B是follower。</span></span>
<span class="line"><span style="color:#e1e4e8;">        A有数据：m1,m2。	HW=2</span></span>
<span class="line"><span style="color:#e1e4e8;">        B有数据：m1。	HW=1</span></span>
<span class="line"><span style="color:#e1e4e8;">	AB同时挂掉，B先恢复成Leader。</span></span>
<span class="line"><span style="color:#e1e4e8;">		B有数据：m1。	HW=1</span></span>
<span class="line"><span style="color:#e1e4e8;">		B有数据：m1,m3。 HW=2</span></span>
<span class="line"><span style="color:#e1e4e8;">	A恢复成Follower。</span></span>
<span class="line"><span style="color:#e1e4e8;">		A有数据：m1,m2。	HW=2</span></span>
<span class="line"><span style="color:#e1e4e8;">		数据不一致！！！</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">0.11.0.0版本之后加入了Leader Epoch，表示Leader的纪元，即第几代Leader。</span></span>
<span class="line"><span style="color:#e1e4e8;">特殊情况分析：</span></span>
<span class="line"><span style="color:#e1e4e8;">	A是Leader，B是follower。此时Epoch=0。</span></span>
<span class="line"><span style="color:#e1e4e8;">        A有数据：m1,m2。	HW=2</span></span>
<span class="line"><span style="color:#e1e4e8;">        B有数据：m1。	HW=1</span></span>
<span class="line"><span style="color:#e1e4e8;">	AB同时挂掉。记录Epoch=0，HW=1。</span></span>
<span class="line"><span style="color:#e1e4e8;">	B先恢复成Leader，此时Epoch=1。</span></span>
<span class="line"><span style="color:#e1e4e8;">		B有数据：m1,m3。 HW=2</span></span>
<span class="line"><span style="color:#e1e4e8;">	A恢复成Follower。</span></span>
<span class="line"><span style="color:#e1e4e8;">		A有数据：m1,m2。	HW=2，A向B拉取消息epoch=0时HW=1，所以删除m2，拉取m3。</span></span>
<span class="line"><span style="color:#e1e4e8;">		A有数据：m1,m3。</span></span>
<span class="line"><span style="color:#e1e4e8;">		数据一致！！！</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">特殊情况：</span></span>
<span class="line"><span style="color:#24292e;">	A是Leader，B是follower。</span></span>
<span class="line"><span style="color:#24292e;">        A有数据：m1,m2。	HW=2</span></span>
<span class="line"><span style="color:#24292e;">        B有数据：m1。	HW=1</span></span>
<span class="line"><span style="color:#24292e;">	AB同时挂掉，B先恢复成Leader。</span></span>
<span class="line"><span style="color:#24292e;">		B有数据：m1。	HW=1</span></span>
<span class="line"><span style="color:#24292e;">		B有数据：m1,m3。 HW=2</span></span>
<span class="line"><span style="color:#24292e;">	A恢复成Follower。</span></span>
<span class="line"><span style="color:#24292e;">		A有数据：m1,m2。	HW=2</span></span>
<span class="line"><span style="color:#24292e;">		数据不一致！！！</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">0.11.0.0版本之后加入了Leader Epoch，表示Leader的纪元，即第几代Leader。</span></span>
<span class="line"><span style="color:#24292e;">特殊情况分析：</span></span>
<span class="line"><span style="color:#24292e;">	A是Leader，B是follower。此时Epoch=0。</span></span>
<span class="line"><span style="color:#24292e;">        A有数据：m1,m2。	HW=2</span></span>
<span class="line"><span style="color:#24292e;">        B有数据：m1。	HW=1</span></span>
<span class="line"><span style="color:#24292e;">	AB同时挂掉。记录Epoch=0，HW=1。</span></span>
<span class="line"><span style="color:#24292e;">	B先恢复成Leader，此时Epoch=1。</span></span>
<span class="line"><span style="color:#24292e;">		B有数据：m1,m3。 HW=2</span></span>
<span class="line"><span style="color:#24292e;">	A恢复成Follower。</span></span>
<span class="line"><span style="color:#24292e;">		A有数据：m1,m2。	HW=2，A向B拉取消息epoch=0时HW=1，所以删除m2，拉取m3。</span></span>
<span class="line"><span style="color:#24292e;">		A有数据：m1,m3。</span></span>
<span class="line"><span style="color:#24292e;">		数据一致！！！</span></span></code></pre></div><p>数据不重复</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">在 0.11 版本以前的 Kafka，对此是无能为力的，只能保证数据不丢失，再在下游消费者对数据做全局去重。对于多个下游应用的情况，每个都需要单独做全局去重，这就对性能造成了很大影响。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">0.11 版本的 Kafka，引入了一项重大特性：幂等性。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">开启幂等性的 Producer 在初始化的时候会被分配一个 PID，发往同一 Partition 的消息会附带 Sequence Number。而Broker 端会对&lt;PID, Partition, SeqNumber&gt;做缓存，当具有相同主键的消息提交时，Broker 只会持久化一条。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">开启幂等性：将 producer.properties 的参数中 enable.idompotence 设置为 true</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">但是 PID 重启就会变化，同时不同的 Partition 也具有不同主键，所以幂等性无法保证跨分区跨会话的 Exactly Once。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">怎么办？事务弥补跨分区问题。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">在 0.11 版本以前的 Kafka，对此是无能为力的，只能保证数据不丢失，再在下游消费者对数据做全局去重。对于多个下游应用的情况，每个都需要单独做全局去重，这就对性能造成了很大影响。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">0.11 版本的 Kafka，引入了一项重大特性：幂等性。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">开启幂等性的 Producer 在初始化的时候会被分配一个 PID，发往同一 Partition 的消息会附带 Sequence Number。而Broker 端会对&lt;PID, Partition, SeqNumber&gt;做缓存，当具有相同主键的消息提交时，Broker 只会持久化一条。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">开启幂等性：将 producer.properties 的参数中 enable.idompotence 设置为 true</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">但是 PID 重启就会变化，同时不同的 Partition 也具有不同主键，所以幂等性无法保证跨分区跨会话的 Exactly Once。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">怎么办？事务弥补跨分区问题。</span></span></code></pre></div><h2 id="事务" tabindex="-1">事务 <a class="header-anchor" href="#事务" aria-label="Permalink to &quot;事务&quot;">​</a></h2><p>消息中间件的消息传输保障有三个层级（分布式消息传递一致性语义的三种情况）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">at most once: 最多一次，可能丢失，不会重复</span></span>
<span class="line"><span style="color:#e1e4e8;">at least once: 最少一次，不会丢失，可能重复</span></span>
<span class="line"><span style="color:#e1e4e8;">exactly once: 仅有一次，不会丢失，不会重复</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">at most once: 最多一次，可能丢失，不会重复</span></span>
<span class="line"><span style="color:#24292e;">at least once: 最少一次，不会丢失，可能重复</span></span>
<span class="line"><span style="color:#24292e;">exactly once: 仅有一次，不会丢失，不会重复</span></span></code></pre></div><p>从0.11.0.0版本还引入事务，保证exactly once。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">开启事务：将 Producer 的参数中 transactional.id 设置一个唯一的ID </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Kafka 引入了一个新的组件 Transaction Coordinator，它管理全局唯一的 Transaction ID，并将 Producer获得的PID 和Transaction ID 绑定。Producer 就是通过和 Transaction Coordinator 交互获得 Transaction ID 对应的任务状态。Transaction Coordinator 还负责将事务所有写入 Kafka 的一个内部 Topic，这样即使整个服务重启，由于事务状态得到保存，进行中的事务状态可以得到恢复，从而继续进行。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">开启事务：将 Producer 的参数中 transactional.id 设置一个唯一的ID </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Kafka 引入了一个新的组件 Transaction Coordinator，它管理全局唯一的 Transaction ID，并将 Producer获得的PID 和Transaction ID 绑定。Producer 就是通过和 Transaction Coordinator 交互获得 Transaction ID 对应的任务状态。Transaction Coordinator 还负责将事务所有写入 Kafka 的一个内部 Topic，这样即使整个服务重启，由于事务状态得到保存，进行中的事务状态可以得到恢复，从而继续进行。</span></span></code></pre></div><h2 id="失效副本" tabindex="-1">失效副本 <a class="header-anchor" href="#失效副本" aria-label="Permalink to &quot;失效副本&quot;">​</a></h2><p>查看失效的副本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sh bin/kafka-topics.sh --zookeeper localhost:21811 --describe --topic test1 --under-replicated-partitions</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sh bin/kafka-topics.sh --zookeeper localhost:21811 --describe --topic test1 --under-replicated-partitions</span></span></code></pre></div><p>0.9.x版本之前，follower副本失效的参数是</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">replica.lag.max.messages=4000   # 默认值4000，即follower副本滞后leader副本的消息数量</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">replica.lag.max.messages=4000   # 默认值4000，即follower副本滞后leader副本的消息数量</span></span></code></pre></div><p>0.9.x版本之后，follower副本失效的参数是</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">replica.lag.time.max.ms=10000 # 默认值10000，即follower副本滞后leader副本的时间</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">replica.lag.time.max.ms=10000 # 默认值10000，即follower副本滞后leader副本的时间</span></span></code></pre></div><blockquote><p>follower副本追上leader副本，会更新该副本的lastCaughtUpTimeMs标识。kafka的副本管理器会启动一个定时任务，定时检查当前时间和lastCaughtUpTimeMs的差值。如果差值超过replica.lag.time.max.ms，则表示副本失效。</p><p>ISR-EXPIRATION定时任务会检查失效的副本，周期为replica.lag.time.max.ms的一半。将失效的副本记录到ZooKeeper。</p><p>然后由ZooKeeper的Watcher将新的元数据发送到broker。</p></blockquote><h2 id="消息可靠性-参数" tabindex="-1">消息可靠性-参数 <a class="header-anchor" href="#消息可靠性-参数" aria-label="Permalink to &quot;消息可靠性-参数&quot;">​</a></h2><p>服务器端</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">acks=-1		# 表示所有副本要同步</span></span>
<span class="line"><span style="color:#e1e4e8;">min.insync.replicas=2	# 表示ISR中至少要有2个副本，如果只有leader一个副本，那么就不可用</span></span>
<span class="line"><span style="color:#e1e4e8;">unclean.leader.election.enable=false  # 默认为false，表示只能从ISR中选取leader</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">acks=-1		# 表示所有副本要同步</span></span>
<span class="line"><span style="color:#24292e;">min.insync.replicas=2	# 表示ISR中至少要有2个副本，如果只有leader一个副本，那么就不可用</span></span>
<span class="line"><span style="color:#24292e;">unclean.leader.election.enable=false  # 默认为false，表示只能从ISR中选取leader</span></span></code></pre></div><p>客户端</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">retries=0  # 默认为0，表示不重试</span></span>
<span class="line"><span style="color:#e1e4e8;">retry.backoff.ms   # 重试时间间隔</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">retries=0  # 默认为0，表示不重试</span></span>
<span class="line"><span style="color:#24292e;">retry.backoff.ms   # 重试时间间隔</span></span></code></pre></div><p>消费者端</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">enable.auto.commit=true	# 默认true，自动提交偏移量。对于可靠性高的应用，宁可手动提交偏移量</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">enable.auto.commit=true	# 默认true，自动提交偏移量。对于可靠性高的应用，宁可手动提交偏移量</span></span></code></pre></div><h1 id="第八章-kafka应用" tabindex="-1">第八章 kafka应用 <a class="header-anchor" href="#第八章-kafka应用" aria-label="Permalink to &quot;第八章 kafka应用&quot;">​</a></h1><h2 id="kafka-connect" tabindex="-1">Kafka Connect <a class="header-anchor" href="#kafka-connect" aria-label="Permalink to &quot;Kafka Connect&quot;">​</a></h2><p>kafka connet是一个工具，可以将数据导入或导出，数据范围涵盖各种sql、nosql、文件、日志等。</p><p>kafka connet有两部分组成：Source和Sink。Source用于导入数据，Sink用于导出数据。</p><p>两个概念：Task和Worker</p><p>特性：</p><ul><li>通用</li><li>支持独立模式connect-standalone.sh和分布式模式connect-distributed.sh</li><li>REST接口</li><li>流式计算/批处理的集成</li></ul><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">修改配置config/connect-standalone.properties</span></span>
<span class="line"><span style="color:#e1e4e8;">	* kafka集群地址</span></span>
<span class="line"><span style="color:#e1e4e8;">	* 消息存储格式等</span></span>
<span class="line"><span style="color:#e1e4e8;">修改配置config/connect-file-source.properties</span></span>
<span class="line"><span style="color:#e1e4e8;">	* 数据源：文件路径、数据库路径</span></span>
<span class="line"><span style="color:#e1e4e8;">	* 文件\\数据库连接器(可以理解为第三方jar)，为了能读到数据</span></span>
<span class="line"><span style="color:#e1e4e8;">	* topic：数据存到topic</span></span>
<span class="line"><span style="color:#e1e4e8;">导入数据执行：</span></span>
<span class="line"><span style="color:#e1e4e8;">sh bin/connect-standalone.sh config/connect-standlone.properties config/connect-file-source.properties</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">修改配置config/connect-file-sink.properties</span></span>
<span class="line"><span style="color:#e1e4e8;">	* 数据导出地址：文件路径、数据库路径</span></span>
<span class="line"><span style="color:#e1e4e8;">	* 文件\\数据库连接器(可以理解为第三方jar)，为了能导出数据</span></span>
<span class="line"><span style="color:#e1e4e8;">	* topic：取数据topic</span></span>
<span class="line"><span style="color:#e1e4e8;">导出数据执行：</span></span>
<span class="line"><span style="color:#e1e4e8;">sh bin/connect-standalone.sh config/connect-standlone.properties config/connect-file-sink.properties</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">修改配置config/connect-standalone.properties</span></span>
<span class="line"><span style="color:#24292e;">	* kafka集群地址</span></span>
<span class="line"><span style="color:#24292e;">	* 消息存储格式等</span></span>
<span class="line"><span style="color:#24292e;">修改配置config/connect-file-source.properties</span></span>
<span class="line"><span style="color:#24292e;">	* 数据源：文件路径、数据库路径</span></span>
<span class="line"><span style="color:#24292e;">	* 文件\\数据库连接器(可以理解为第三方jar)，为了能读到数据</span></span>
<span class="line"><span style="color:#24292e;">	* topic：数据存到topic</span></span>
<span class="line"><span style="color:#24292e;">导入数据执行：</span></span>
<span class="line"><span style="color:#24292e;">sh bin/connect-standalone.sh config/connect-standlone.properties config/connect-file-source.properties</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">修改配置config/connect-file-sink.properties</span></span>
<span class="line"><span style="color:#24292e;">	* 数据导出地址：文件路径、数据库路径</span></span>
<span class="line"><span style="color:#24292e;">	* 文件\\数据库连接器(可以理解为第三方jar)，为了能导出数据</span></span>
<span class="line"><span style="color:#24292e;">	* topic：取数据topic</span></span>
<span class="line"><span style="color:#24292e;">导出数据执行：</span></span>
<span class="line"><span style="color:#24292e;">sh bin/connect-standalone.sh config/connect-standlone.properties config/connect-file-sink.properties</span></span></code></pre></div><h2 id="kafka-mirror-maker" tabindex="-1">Kafka Mirror Maker <a class="header-anchor" href="#kafka-mirror-maker" aria-label="Permalink to &quot;Kafka Mirror Maker&quot;">​</a></h2><p>Kafka Mirror Maker用于将一个Kafka集群迁移/复制到另一个Kafka集群。</p><p>示例：将cluster1中的主题topic-mirror数据同步到cluster2</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">创建两个配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">	# consumer.properties</span></span>
<span class="line"><span style="color:#e1e4e8;">	bootstrap.servers=cluster1:9092</span></span>
<span class="line"><span style="color:#e1e4e8;">	group.id=groupIdMirror</span></span>
<span class="line"><span style="color:#e1e4e8;">	client.id=sourceMirror</span></span>
<span class="line"><span style="color:#e1e4e8;">	# producer.properties</span></span>
<span class="line"><span style="color:#e1e4e8;">	bootstrap.servers=cluster2:9092</span></span>
<span class="line"><span style="color:#e1e4e8;">	client.id=sinkMirror</span></span>
<span class="line"><span style="color:#e1e4e8;">执行命令</span></span>
<span class="line"><span style="color:#e1e4e8;">sh kafka-mirror-maker.sh --consumer.config consumer.properties --producer.config producer.properties --whitelist &#39;topic-mirror&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">创建两个配置文件</span></span>
<span class="line"><span style="color:#24292e;">	# consumer.properties</span></span>
<span class="line"><span style="color:#24292e;">	bootstrap.servers=cluster1:9092</span></span>
<span class="line"><span style="color:#24292e;">	group.id=groupIdMirror</span></span>
<span class="line"><span style="color:#24292e;">	client.id=sourceMirror</span></span>
<span class="line"><span style="color:#24292e;">	# producer.properties</span></span>
<span class="line"><span style="color:#24292e;">	bootstrap.servers=cluster2:9092</span></span>
<span class="line"><span style="color:#24292e;">	client.id=sinkMirror</span></span>
<span class="line"><span style="color:#24292e;">执行命令</span></span>
<span class="line"><span style="color:#24292e;">sh kafka-mirror-maker.sh --consumer.config consumer.properties --producer.config producer.properties --whitelist &#39;topic-mirror&#39;</span></span></code></pre></div><p>注意事项：</p><ul><li>不能在一个集群中操作，否则会陷入无限循环</li><li>源集群的topic和目标集群的topic不可能完全相同，如分区、偏移量。最好重置源topic的消费偏移量为0。</li></ul><h2 id="kafka-streams" tabindex="-1">Kafka Streams <a class="header-anchor" href="#kafka-streams" aria-label="Permalink to &quot;Kafka Streams&quot;">​</a></h2><p>在0.10.x版本之前，kafka不具备数据处理的能力。在这之后，kafka streams是一个用于处理和分析数据的客户端库。它将存储在kafka中的数据进行处理和分析，然后将结果写回kafka或发送到外部系统。</p><p>示例：单词统计。kafka的代码中包含一个单词统计的示例程序：WordCountDemo</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">创建两个主题</span></span>
<span class="line"><span style="color:#e1e4e8;">	* streams-plaintext-input 用于接受单词</span></span>
<span class="line"><span style="color:#e1e4e8;">	* streams-wordcount-output 用于统计单词</span></span>
<span class="line"><span style="color:#e1e4e8;">启动主题streams-plaintext-input的生产者</span></span>
<span class="line"><span style="color:#e1e4e8;">启动主题streams-wordcount-output的消费者</span></span>
<span class="line"><span style="color:#e1e4e8;">启动程序sh kafka-run-class.sh org.apache.kafka.streams.examples.wordcount.WordCountDemo</span></span>
<span class="line"><span style="color:#e1e4e8;">往生产者输入单词，消费者就会显示单词统计信息</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">创建两个主题</span></span>
<span class="line"><span style="color:#24292e;">	* streams-plaintext-input 用于接受单词</span></span>
<span class="line"><span style="color:#24292e;">	* streams-wordcount-output 用于统计单词</span></span>
<span class="line"><span style="color:#24292e;">启动主题streams-plaintext-input的生产者</span></span>
<span class="line"><span style="color:#24292e;">启动主题streams-wordcount-output的消费者</span></span>
<span class="line"><span style="color:#24292e;">启动程序sh kafka-run-class.sh org.apache.kafka.streams.examples.wordcount.WordCountDemo</span></span>
<span class="line"><span style="color:#24292e;">往生产者输入单词，消费者就会显示单词统计信息</span></span></code></pre></div><p>kafka streams的开发方式：引入依赖，然后编写一个程序（略）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;groupId&gt;org.apache.kafka&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;artifactId&gt;kafka-streams&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;version&gt;2.0.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;groupId&gt;org.apache.kafka&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;artifactId&gt;kafka-streams&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;version&gt;2.0.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><h1 id="第九章-api" tabindex="-1">第九章 API <a class="header-anchor" href="#第九章-api" aria-label="Permalink to &quot;第九章 API&quot;">​</a></h1><h2 id="producer-api" tabindex="-1">Producer API <a class="header-anchor" href="#producer-api" aria-label="Permalink to &quot;Producer API&quot;">​</a></h2><h3 id="简单发送数据" tabindex="-1">简单发送数据 <a class="header-anchor" href="#简单发送数据" aria-label="Permalink to &quot;简单发送数据&quot;">​</a></h3><ul><li>KafkaProducer：需要创建一个生产者对象，用来发送数据</li><li>ProducerConfig：获取所需的一系列配置参数</li><li>ProducerRecord：每条数据都要封装成一个 ProducerRecord 对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class ProducerFastStart {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static final String brokerList = &quot;192.168.41.213:9000&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static final String topic = &quot;mytopic&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static Properties initConfig() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 必要参数</span></span>
<span class="line"><span style="color:#e1e4e8;">        Properties properties = new Properties();</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, brokerList);</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ProducerConfig.CLIENT_ID_CONFIG, &quot;producer.client.id.demo&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        // 非必要参数</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ProducerConfig.ACKS_CONFIG, &quot;-1&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ProducerConfig.BATCH_SIZE_CONFIG, 16384);</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ProducerConfig.LINGER_MS_CONFIG, 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ProducerConfig.BUFFER_MEMORY_CONFIG, 33554432);</span></span>
<span class="line"><span style="color:#e1e4e8;">        return properties;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) throws ExecutionException, InterruptedException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#e1e4e8;">        KafkaProducer&lt;String, String&gt; producer = new KafkaProducer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // new ProducerRecord是一个可以重载的方法，可以指定key，指定分区等</span></span>
<span class="line"><span style="color:#e1e4e8;">        ProducerRecord&lt;String, String&gt; record = new ProducerRecord&lt;&gt;(topic, &quot;haha kafka&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        producer.send(record);</span></span>
<span class="line"><span style="color:#e1e4e8;">        producer.close();;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class ProducerFastStart {</span></span>
<span class="line"><span style="color:#24292e;">    public static final String brokerList = &quot;192.168.41.213:9000&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    public static final String topic = &quot;mytopic&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static Properties initConfig() {</span></span>
<span class="line"><span style="color:#24292e;">        // 必要参数</span></span>
<span class="line"><span style="color:#24292e;">        Properties properties = new Properties();</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, brokerList);</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ProducerConfig.CLIENT_ID_CONFIG, &quot;producer.client.id.demo&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        // 非必要参数</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ProducerConfig.ACKS_CONFIG, &quot;-1&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ProducerConfig.BATCH_SIZE_CONFIG, 16384);</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ProducerConfig.LINGER_MS_CONFIG, 1);</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ProducerConfig.BUFFER_MEMORY_CONFIG, 33554432);</span></span>
<span class="line"><span style="color:#24292e;">        return properties;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) throws ExecutionException, InterruptedException {</span></span>
<span class="line"><span style="color:#24292e;">        Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#24292e;">        KafkaProducer&lt;String, String&gt; producer = new KafkaProducer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#24292e;">        // new ProducerRecord是一个可以重载的方法，可以指定key，指定分区等</span></span>
<span class="line"><span style="color:#24292e;">        ProducerRecord&lt;String, String&gt; record = new ProducerRecord&lt;&gt;(topic, &quot;haha kafka&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        producer.send(record);</span></span>
<span class="line"><span style="color:#24292e;">        producer.close();;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="回调函数" tabindex="-1">回调函数 <a class="header-anchor" href="#回调函数" aria-label="Permalink to &quot;回调函数&quot;">​</a></h3><p>上面的就是异步发送，只需要在 send 方法中加一个回调函数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public static void test2() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#e1e4e8;">    KafkaProducer&lt;String, String&gt; producer = new KafkaProducer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#e1e4e8;">    ProducerRecord&lt;String, String&gt; record = new ProducerRecord&lt;&gt;(topic, &quot;hello, kafka&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    producer.send(record, new Callback() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 回调函数 接受参数：RecordMetadata、Exception</span></span>
<span class="line"><span style="color:#e1e4e8;">        @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">        public void onCompletion(RecordMetadata recordMetadata, Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (e != null) { // null表示没有异常，发送成功</span></span>
<span class="line"><span style="color:#e1e4e8;">                e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    });</span></span>
<span class="line"><span style="color:#e1e4e8;">    producer.close();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public static void test2() {</span></span>
<span class="line"><span style="color:#24292e;">    Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#24292e;">    KafkaProducer&lt;String, String&gt; producer = new KafkaProducer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#24292e;">    ProducerRecord&lt;String, String&gt; record = new ProducerRecord&lt;&gt;(topic, &quot;hello, kafka&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    producer.send(record, new Callback() {</span></span>
<span class="line"><span style="color:#24292e;">        // 回调函数 接受参数：RecordMetadata、Exception</span></span>
<span class="line"><span style="color:#24292e;">        @Override</span></span>
<span class="line"><span style="color:#24292e;">        public void onCompletion(RecordMetadata recordMetadata, Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            if (e != null) { // null表示没有异常，发送成功</span></span>
<span class="line"><span style="color:#24292e;">                e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">    producer.close();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="同步发送" tabindex="-1">同步发送 <a class="header-anchor" href="#同步发送" aria-label="Permalink to &quot;同步发送&quot;">​</a></h3><p>由于 send 方法返回的是一个 Future 对象，根据 Futrue 对象的特点，我们也可以实现同步发送的效果，只需在调用 Future 对象的 get 方发即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public static void test1() throws ExecutionException, InterruptedException {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#e1e4e8;">    KafkaProducer&lt;String, String&gt; producer = new KafkaProducer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#e1e4e8;">    ProducerRecord&lt;String, String&gt; record = new ProducerRecord&lt;&gt;(topic, &quot;hello, kafka&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 同步发送：</span></span>
<span class="line"><span style="color:#e1e4e8;">    // send()方法本身是异步的</span></span>
<span class="line"><span style="color:#e1e4e8;">    Future&lt;RecordMetadata&gt; future = producer.send(record);</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 通过future.get()方法来阻塞等待kafka的响应，要么成功，要么异常。并且RecordMetadata对象包含了一些元数据信息。</span></span>
<span class="line"><span style="color:#e1e4e8;">    RecordMetadata recordMetadata = future.get();</span></span>
<span class="line"><span style="color:#e1e4e8;">    producer.close();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public static void test1() throws ExecutionException, InterruptedException {</span></span>
<span class="line"><span style="color:#24292e;">    Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#24292e;">    KafkaProducer&lt;String, String&gt; producer = new KafkaProducer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#24292e;">    ProducerRecord&lt;String, String&gt; record = new ProducerRecord&lt;&gt;(topic, &quot;hello, kafka&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    // 同步发送：</span></span>
<span class="line"><span style="color:#24292e;">    // send()方法本身是异步的</span></span>
<span class="line"><span style="color:#24292e;">    Future&lt;RecordMetadata&gt; future = producer.send(record);</span></span>
<span class="line"><span style="color:#24292e;">    // 通过future.get()方法来阻塞等待kafka的响应，要么成功，要么异常。并且RecordMetadata对象包含了一些元数据信息。</span></span>
<span class="line"><span style="color:#24292e;">    RecordMetadata recordMetadata = future.get();</span></span>
<span class="line"><span style="color:#24292e;">    producer.close();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="consumer-api" tabindex="-1">Consumer API <a class="header-anchor" href="#consumer-api" aria-label="Permalink to &quot;Consumer API&quot;">​</a></h2><h3 id="订阅主题-消费消息" tabindex="-1">订阅主题-消费消息 <a class="header-anchor" href="#订阅主题-消费消息" aria-label="Permalink to &quot;订阅主题-消费消息&quot;">​</a></h3><ul><li>KafkaConsumer：需要创建一个消费者对象，用来消费数据</li><li>ConsumerConfig：获取所需的一系列配置参数</li><li>ConsuemrRecord：每条数据都要封装成一个 ConsumerRecord</li><li><code>public Iterable&lt;ConsumerRecord&lt;K, V&gt;&gt; ConsumerRecords.records(String topic)</code>可以按照主题进行消费消息</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class ConsumerFastStart {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static final String brokerList = &quot;192.168.41.213:9000&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static final String topic = &quot;mytopic&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static final String groupId = &quot;group.demo&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static Properties initConfig() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 必要参数</span></span>
<span class="line"><span style="color:#e1e4e8;">        Properties properties = new Properties();</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, brokerList);</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ConsumerConfig.GROUP_ID_CONFIG, groupId);</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ConsumerConfig.CLIENT_ID_CONFIG, &quot;consumer.clent.id.demo&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        </span></span>
<span class="line"><span style="color:#e1e4e8;">        // 非必要参数</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, &quot;true&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        properties.put(ConsumerConfig.AUTO_COMMIT_INTERVAL_MS_CONFIG, &quot;1000&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        return properties;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#e1e4e8;">        KafkaConsumer&lt;String, String&gt; consumer = new KafkaConsumer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 只订阅主题:可以是List，也可以是正则化</span></span>
<span class="line"><span style="color:#e1e4e8;">        // consumer.subscribe(Pattern.compile(&quot;mytopic-.*&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">        List&lt;String&gt; topicList = Arrays.asList(&quot;mytopic&quot;, &quot;test1&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        consumer.subscribe(topicList);</span></span>
<span class="line"><span style="color:#e1e4e8;">        while (true) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            ConsumerRecords&lt;String, String&gt; records = consumer.poll(Duration.ofMillis(1000));</span></span>
<span class="line"><span style="color:#e1e4e8;">            for (String topic : topicList) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                for (ConsumerRecord&lt;String, String&gt; record : records.records(topic)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    System.out.printf(&quot;offset = %d, key = %s, value = %s%n&quot;, record.offset(), record.key(), record.key());</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class ConsumerFastStart {</span></span>
<span class="line"><span style="color:#24292e;">    public static final String brokerList = &quot;192.168.41.213:9000&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    public static final String topic = &quot;mytopic&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    public static final String groupId = &quot;group.demo&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static Properties initConfig() {</span></span>
<span class="line"><span style="color:#24292e;">        // 必要参数</span></span>
<span class="line"><span style="color:#24292e;">        Properties properties = new Properties();</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, brokerList);</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ConsumerConfig.GROUP_ID_CONFIG, groupId);</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ConsumerConfig.CLIENT_ID_CONFIG, &quot;consumer.clent.id.demo&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        </span></span>
<span class="line"><span style="color:#24292e;">        // 非必要参数</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, &quot;true&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        properties.put(ConsumerConfig.AUTO_COMMIT_INTERVAL_MS_CONFIG, &quot;1000&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        return properties;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#24292e;">        KafkaConsumer&lt;String, String&gt; consumer = new KafkaConsumer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#24292e;">        // 只订阅主题:可以是List，也可以是正则化</span></span>
<span class="line"><span style="color:#24292e;">        // consumer.subscribe(Pattern.compile(&quot;mytopic-.*&quot;));</span></span>
<span class="line"><span style="color:#24292e;">        List&lt;String&gt; topicList = Arrays.asList(&quot;mytopic&quot;, &quot;test1&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        consumer.subscribe(topicList);</span></span>
<span class="line"><span style="color:#24292e;">        while (true) {</span></span>
<span class="line"><span style="color:#24292e;">            ConsumerRecords&lt;String, String&gt; records = consumer.poll(Duration.ofMillis(1000));</span></span>
<span class="line"><span style="color:#24292e;">            for (String topic : topicList) {</span></span>
<span class="line"><span style="color:#24292e;">                for (ConsumerRecord&lt;String, String&gt; record : records.records(topic)) {</span></span>
<span class="line"><span style="color:#24292e;">                    System.out.printf(&quot;offset = %d, key = %s, value = %s%n&quot;, record.offset(), record.key(), record.key());</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="订阅分区-消费消息" tabindex="-1">订阅分区-消费消息 <a class="header-anchor" href="#订阅分区-消费消息" aria-label="Permalink to &quot;订阅分区-消费消息&quot;">​</a></h3><ul><li><code>public List&lt;ConsumerRecord&lt;K, V&gt;&gt; ConsumerRecords.records(TopicPartition partition)</code>可以按照分区进行消费消息</li></ul><blockquote><p>consumer.subscribe(Collection) consumer.subscribe(Patter) 订阅主题，并且具有自动再均衡功能</p><p>consumer.assign(Partitions) 订阅分区，不具备再均衡功能。</p><p>原因：再均衡需要实现ConsumerRebalanceListener方法，只有subscribe()有该参数类型，而assing()没有该参数类型。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public static void test2() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#e1e4e8;">    KafkaConsumer&lt;String, String&gt; consumer = new KafkaConsumer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    List&lt;TopicPartition&gt; partitions = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 先查询partitions</span></span>
<span class="line"><span style="color:#e1e4e8;">    List&lt;PartitionInfo&gt; partitionInfos = consumer.partitionsFor(topic);</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (partitionInfos != null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (PartitionInfo info : partitionInfos) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            partitions.add(new TopicPartition(info.topic(), info.partition()));</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 订阅分区</span></span>
<span class="line"><span style="color:#e1e4e8;">    consumer.assign(partitions);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    while (true) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ConsumerRecords&lt;String, String&gt; records = consumer.poll(Duration.ofMillis(1000));</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (TopicPartition tp : records.partitions()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            for (ConsumerRecord&lt;String, String&gt; record : records.records(tp)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                System.out.printf(&quot;offset = %d, key = %s, value = %s%n&quot;, record.offset(), record.key(), record.key());</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public static void test2() {</span></span>
<span class="line"><span style="color:#24292e;">    Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#24292e;">    KafkaConsumer&lt;String, String&gt; consumer = new KafkaConsumer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    List&lt;TopicPartition&gt; partitions = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">    // 先查询partitions</span></span>
<span class="line"><span style="color:#24292e;">    List&lt;PartitionInfo&gt; partitionInfos = consumer.partitionsFor(topic);</span></span>
<span class="line"><span style="color:#24292e;">    if (partitionInfos != null) {</span></span>
<span class="line"><span style="color:#24292e;">        for (PartitionInfo info : partitionInfos) {</span></span>
<span class="line"><span style="color:#24292e;">            partitions.add(new TopicPartition(info.topic(), info.partition()));</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    // 订阅分区</span></span>
<span class="line"><span style="color:#24292e;">    consumer.assign(partitions);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    while (true) {</span></span>
<span class="line"><span style="color:#24292e;">        ConsumerRecords&lt;String, String&gt; records = consumer.poll(Duration.ofMillis(1000));</span></span>
<span class="line"><span style="color:#24292e;">        for (TopicPartition tp : records.partitions()) {</span></span>
<span class="line"><span style="color:#24292e;">            for (ConsumerRecord&lt;String, String&gt; record : records.records(tp)) {</span></span>
<span class="line"><span style="color:#24292e;">                System.out.printf(&quot;offset = %d, key = %s, value = %s%n&quot;, record.offset(), record.key(), record.key());</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="手动提交消费位移" tabindex="-1">手动提交消费位移 <a class="header-anchor" href="#手动提交消费位移" aria-label="Permalink to &quot;手动提交消费位移&quot;">​</a></h3><p>手动提交 offset 的方法有两种：分别是 commitSync（同步提交）和 commitAsync（异步提交）。两者的相同点是，都会将<strong>本次 poll 的一批数据最高的偏移量</strong>提交；不同点是，commitSync 阻塞当前线程，一直到提交成功，并且会自动失败重试（由不可控因素导致，也会出现提交失败）；而 commitAsync 则没有失败重试机制，故有可能提交失败。</p><p>先要设置参数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">properties.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, &quot;false&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">properties.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, &quot;false&quot;);</span></span></code></pre></div><p>同步提交，代码如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 手动提交offset</span></span>
<span class="line"><span style="color:#e1e4e8;">public static void test3() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#e1e4e8;">    KafkaConsumer&lt;String, String&gt; consumer = new KafkaConsumer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 只订阅主题</span></span>
<span class="line"><span style="color:#e1e4e8;">    consumer.subscribe(Collections.singletonList(topic));</span></span>
<span class="line"><span style="color:#e1e4e8;">    while (true) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ConsumerRecords&lt;String, String&gt; records = consumer.poll(Duration.ofMillis(1000));</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (ConsumerRecord&lt;String, String&gt; record : records) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.printf(&quot;offset = %d, key = %s, value = %s%n&quot;, record.offset(), record.key(), record.key());</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        //同步提交，当前线程会阻塞直到 offset 提交成功</span></span>
<span class="line"><span style="color:#e1e4e8;">        // consumer.commitSync();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        //异步提交</span></span>
<span class="line"><span style="color:#e1e4e8;">        consumer.commitAsync(new OffsetCommitCallback() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">            public void onComplete(Map&lt;TopicPartition, OffsetAndMetadata&gt; offsets, Exception exception) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (exception != null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    System.err.println(&quot;Commit failed for&quot; + offsets);</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        });</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 手动提交offset</span></span>
<span class="line"><span style="color:#24292e;">public static void test3() {</span></span>
<span class="line"><span style="color:#24292e;">    Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#24292e;">    KafkaConsumer&lt;String, String&gt; consumer = new KafkaConsumer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#24292e;">    // 只订阅主题</span></span>
<span class="line"><span style="color:#24292e;">    consumer.subscribe(Collections.singletonList(topic));</span></span>
<span class="line"><span style="color:#24292e;">    while (true) {</span></span>
<span class="line"><span style="color:#24292e;">        ConsumerRecords&lt;String, String&gt; records = consumer.poll(Duration.ofMillis(1000));</span></span>
<span class="line"><span style="color:#24292e;">        for (ConsumerRecord&lt;String, String&gt; record : records) {</span></span>
<span class="line"><span style="color:#24292e;">            System.out.printf(&quot;offset = %d, key = %s, value = %s%n&quot;, record.offset(), record.key(), record.key());</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        //同步提交，当前线程会阻塞直到 offset 提交成功</span></span>
<span class="line"><span style="color:#24292e;">        // consumer.commitSync();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        //异步提交</span></span>
<span class="line"><span style="color:#24292e;">        consumer.commitAsync(new OffsetCommitCallback() {</span></span>
<span class="line"><span style="color:#24292e;">            @Override</span></span>
<span class="line"><span style="color:#24292e;">            public void onComplete(Map&lt;TopicPartition, OffsetAndMetadata&gt; offsets, Exception exception) {</span></span>
<span class="line"><span style="color:#24292e;">                if (exception != null) {</span></span>
<span class="line"><span style="color:#24292e;">                    System.err.println(&quot;Commit failed for&quot; + offsets);</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        });</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>还可以指定offset：（重点：offset+1）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">consumer.commitSync(Collections.singletonMap(topicPartition, new OffsetAndMetadata(record.offset() + 1)));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">consumer.commitSync(Collections.singletonMap(topicPartition, new OffsetAndMetadata(record.offset() + 1)));</span></span></code></pre></div><h3 id="指定消费位移" tabindex="-1">指定消费位移 <a class="header-anchor" href="#指定消费位移" aria-label="Permalink to &quot;指定消费位移&quot;">​</a></h3><p>消费者端有参数<code>auto.offset.reset</code>，默认是“latest”表示从分区末尾开始消费，还可以配置成<code>earliest</code>表示从头消费。</p><p>我们还可以通过<code>public void seek(TopicPartition partition, long offset)</code>方法指定消费位移。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public static void test5() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#e1e4e8;">    KafkaConsumer&lt;String, String&gt; consumer = new KafkaConsumer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#e1e4e8;">    consumer.subscribe(Arrays.asList(topic));</span></span>
<span class="line"><span style="color:#e1e4e8;">    Set&lt;TopicPartition&gt; partitionsSet = new HashSet&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 该循环可以保证，consumer分配到分区</span></span>
<span class="line"><span style="color:#e1e4e8;">    while (partitionsSet.size() == 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        consumer.poll(Duration.ofMillis(100));</span></span>
<span class="line"><span style="color:#e1e4e8;">        partitionsSet = consumer.assignment();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 示例1. 从10开始消费</span></span>
<span class="line"><span style="color:#e1e4e8;">    for (TopicPartition tp : partitionsSet) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        consumer.seek(tp, 10);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    while (true) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ConsumerRecords&lt;String, String&gt; records = consumer.poll(Duration.ofMillis(100));</span></span>
<span class="line"><span style="color:#e1e4e8;">        // consume</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public static void test5() {</span></span>
<span class="line"><span style="color:#24292e;">    Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#24292e;">    KafkaConsumer&lt;String, String&gt; consumer = new KafkaConsumer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#24292e;">    consumer.subscribe(Arrays.asList(topic));</span></span>
<span class="line"><span style="color:#24292e;">    Set&lt;TopicPartition&gt; partitionsSet = new HashSet&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">    // 该循环可以保证，consumer分配到分区</span></span>
<span class="line"><span style="color:#24292e;">    while (partitionsSet.size() == 0) {</span></span>
<span class="line"><span style="color:#24292e;">        consumer.poll(Duration.ofMillis(100));</span></span>
<span class="line"><span style="color:#24292e;">        partitionsSet = consumer.assignment();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    // 示例1. 从10开始消费</span></span>
<span class="line"><span style="color:#24292e;">    for (TopicPartition tp : partitionsSet) {</span></span>
<span class="line"><span style="color:#24292e;">        consumer.seek(tp, 10);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    while (true) {</span></span>
<span class="line"><span style="color:#24292e;">        ConsumerRecords&lt;String, String&gt; records = consumer.poll(Duration.ofMillis(100));</span></span>
<span class="line"><span style="color:#24292e;">        // consume</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>还可以时间戳索引到消费位移</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 示例2. 从昨天开始消费（时间戳）</span></span>
<span class="line"><span style="color:#e1e4e8;">Map&lt;TopicPartition, Long&gt; timestampToSearch = new HashMap&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">for (TopicPartition tp : partitionsSet) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    timestampToSearch.put(tp, System.currentTimeMillis() - 24 * 3600000);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Map&lt;TopicPartition, OffsetAndTimestamp&gt; offsets = consumer.offsetsForTimes(timestampToSearch);</span></span>
<span class="line"><span style="color:#e1e4e8;">for (TopicPartition tp : partitionsSet) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    OffsetAndTimestamp offsetAndTimestamp = offsets.get(tp);</span></span>
<span class="line"><span style="color:#e1e4e8;">    consumer.seek(tp, offsetAndTimestamp.offset());</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 示例2. 从昨天开始消费（时间戳）</span></span>
<span class="line"><span style="color:#24292e;">Map&lt;TopicPartition, Long&gt; timestampToSearch = new HashMap&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">for (TopicPartition tp : partitionsSet) {</span></span>
<span class="line"><span style="color:#24292e;">    timestampToSearch.put(tp, System.currentTimeMillis() - 24 * 3600000);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Map&lt;TopicPartition, OffsetAndTimestamp&gt; offsets = consumer.offsetsForTimes(timestampToSearch);</span></span>
<span class="line"><span style="color:#24292e;">for (TopicPartition tp : partitionsSet) {</span></span>
<span class="line"><span style="color:#24292e;">    OffsetAndTimestamp offsetAndTimestamp = offsets.get(tp);</span></span>
<span class="line"><span style="color:#24292e;">    consumer.seek(tp, offsetAndTimestamp.offset());</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="再均衡" tabindex="-1">再均衡 <a class="header-anchor" href="#再均衡" aria-label="Permalink to &quot;再均衡&quot;">​</a></h3><p>为了防止在均衡过程，打断消费者消费，导致不能提交消费位移。等等原因。需要在subscribe()写一个再均衡监听器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public static void test4() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Map&lt;TopicPartition, Long&gt; myOffset = new HashMap&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#e1e4e8;">    KafkaConsumer&lt;String, String&gt; consumer = new KafkaConsumer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#e1e4e8;">    consumer.subscribe(Arrays.asList(topic), new ConsumerRebalanceListener() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 该方法会在 Rebalance 之前， 消费者停止读消息之后被调用。</span></span>
<span class="line"><span style="color:#e1e4e8;">        @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">        public void onPartitionsRevoked(Collection&lt;TopicPartition&gt; collection) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // commitOffset是自定义方法</span></span>
<span class="line"><span style="color:#e1e4e8;">            commitOffset(myOffset);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 该方法会在 Rebalance 之后，消费者开始读消息之前被调用。</span></span>
<span class="line"><span style="color:#e1e4e8;">        @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">        public void onPartitionsAssigned(Collection&lt;TopicPartition&gt; partitions) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            myOffset.clear();</span></span>
<span class="line"><span style="color:#e1e4e8;">            for (TopicPartition partition : partitions) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                // 定位到最近提交的 offset 位置继续消费</span></span>
<span class="line"><span style="color:#e1e4e8;">                // getOffset是自定义方法</span></span>
<span class="line"><span style="color:#e1e4e8;">                consumer.seek(partition, getOffset(partition));</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    });</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    while (true) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ConsumerRecords&lt;String, String&gt; records = consumer.poll(Duration.ofMillis(1000));</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (ConsumerRecord&lt;String, String&gt; record : records) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.printf(&quot;offset = %d, key = %s, value = %s%n&quot;, record.offset(), record.key(), record.key());</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        // commitOffset是自定义方法</span></span>
<span class="line"><span style="color:#e1e4e8;">        commitOffset(myOffset);//异步提交</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public static void test4() {</span></span>
<span class="line"><span style="color:#24292e;">    Map&lt;TopicPartition, Long&gt; myOffset = new HashMap&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    Properties properties = initConfig();</span></span>
<span class="line"><span style="color:#24292e;">    KafkaConsumer&lt;String, String&gt; consumer = new KafkaConsumer&lt;&gt;(properties);</span></span>
<span class="line"><span style="color:#24292e;">    consumer.subscribe(Arrays.asList(topic), new ConsumerRebalanceListener() {</span></span>
<span class="line"><span style="color:#24292e;">        // 该方法会在 Rebalance 之前， 消费者停止读消息之后被调用。</span></span>
<span class="line"><span style="color:#24292e;">        @Override</span></span>
<span class="line"><span style="color:#24292e;">        public void onPartitionsRevoked(Collection&lt;TopicPartition&gt; collection) {</span></span>
<span class="line"><span style="color:#24292e;">            // commitOffset是自定义方法</span></span>
<span class="line"><span style="color:#24292e;">            commitOffset(myOffset);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        // 该方法会在 Rebalance 之后，消费者开始读消息之前被调用。</span></span>
<span class="line"><span style="color:#24292e;">        @Override</span></span>
<span class="line"><span style="color:#24292e;">        public void onPartitionsAssigned(Collection&lt;TopicPartition&gt; partitions) {</span></span>
<span class="line"><span style="color:#24292e;">            myOffset.clear();</span></span>
<span class="line"><span style="color:#24292e;">            for (TopicPartition partition : partitions) {</span></span>
<span class="line"><span style="color:#24292e;">                // 定位到最近提交的 offset 位置继续消费</span></span>
<span class="line"><span style="color:#24292e;">                // getOffset是自定义方法</span></span>
<span class="line"><span style="color:#24292e;">                consumer.seek(partition, getOffset(partition));</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    while (true) {</span></span>
<span class="line"><span style="color:#24292e;">        ConsumerRecords&lt;String, String&gt; records = consumer.poll(Duration.ofMillis(1000));</span></span>
<span class="line"><span style="color:#24292e;">        for (ConsumerRecord&lt;String, String&gt; record : records) {</span></span>
<span class="line"><span style="color:#24292e;">            System.out.printf(&quot;offset = %d, key = %s, value = %s%n&quot;, record.offset(), record.key(), record.key());</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        // commitOffset是自定义方法</span></span>
<span class="line"><span style="color:#24292e;">        commitOffset(myOffset);//异步提交</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,238),k=[h];function m(f,b,v,C,S,P){return e(),n("div",null,k)}const I=s(g,[["render",m]]);export{x as __pageData,I as default};
