import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.2516552c.js";const l="/assets/image-20210326211258056.9252b3e2.png",q=JSON.parse('{"title":"1  redis概述","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/65redis/01redis基础.md","filePath":"articles/Java/65redis/01redis基础.md","lastUpdated":1698198415000}'),p={name:"articles/Java/65redis/01redis基础.md"},o=a(`<h1 id="_1-redis概述" tabindex="-1">1 redis概述 <a class="header-anchor" href="#_1-redis概述" aria-label="Permalink to &quot;1  redis概述&quot;">​</a></h1><p>redis是NOSQL系列的非关系型数据库；NOSQL表示not only sql，就是非关系型数据库。</p><p>非关系型数据库：</p><ul><li>存储的是key和value形式(redis)，还有文档形式(MongoDB)，等等。数据之间没有关系。</li><li>数据存储在内存中，提高检索效率（redis做缓存）</li></ul><p>redis应用场景：</p><ul><li>缓存（商品、新闻）</li><li>任务队列（车票、抢购）</li><li>排行榜</li><li>等等</li></ul><p>redis的数据结构：redis存储的是键值对，其中key都是字符串，value有5中不同的数据结构</p><ul><li>字符串类型 string</li><li>哈希类型 hash：</li><li>列表类型 list</li><li>集合类型 set</li><li>有序集合类型 sortedset</li></ul><h1 id="_2-redis安装" tabindex="-1">2 redis安装 <a class="header-anchor" href="#_2-redis安装" aria-label="Permalink to &quot;2  redis安装&quot;">​</a></h1><p>下载从redis官方，或者redis中文网；解压后可以直接使用，其中的文件有：</p><ul><li>redis.windows.conf 配置文件</li><li>redis-server.exe 服务器端</li><li>redis-cli.exe 客户端（先打开服务器端，再打开客户端 自动连接）</li></ul><h1 id="_3-redis命令" tabindex="-1">3 redis命令 <a class="header-anchor" href="#_3-redis命令" aria-label="Permalink to &quot;3  redis命令&quot;">​</a></h1><ol><li><p>字符串</p><ul><li>存储<code>set key value</code></li><li>获取<code>get key</code></li><li>删除<code>del key</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">set username zhangsan</span></span>
<span class="line"><span style="color:#e1e4e8;">get username</span></span>
<span class="line"><span style="color:#e1e4e8;">del username</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">set username zhangsan</span></span>
<span class="line"><span style="color:#24292e;">get username</span></span>
<span class="line"><span style="color:#24292e;">del username</span></span></code></pre></div></li><li><p>哈希类型 (field和value相当于哈希的键值对，可以存储多个)</p><ul><li>存储<code>hset key field value</code></li><li>获取<code>hget key field</code></li><li>获取所有<code>hgetall key</code></li><li>删除<code>hdel key field</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">hset id1 username zhangsan</span></span>
<span class="line"><span style="color:#e1e4e8;">hset id1 age 23</span></span>
<span class="line"><span style="color:#e1e4e8;">hget id1 username</span></span>
<span class="line"><span style="color:#e1e4e8;">hdel id1 age</span></span>
<span class="line"><span style="color:#e1e4e8;">hdel id1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">hset id1 username zhangsan</span></span>
<span class="line"><span style="color:#24292e;">hset id1 age 23</span></span>
<span class="line"><span style="color:#24292e;">hget id1 username</span></span>
<span class="line"><span style="color:#24292e;">hdel id1 age</span></span>
<span class="line"><span style="color:#24292e;">hdel id1</span></span></code></pre></div></li><li><p>列表类型（可以从左边或右边添加）</p><ul><li>添加<code>lpush key value</code> 或者<code>rpush key value</code></li><li>获取<code>lrange key start end</code> ，如<code>lrange mylist 0 -1</code>表示获取所有元素</li><li>删除<code>lpop key</code>或者<code>rpop key</code></li></ul></li><li><p>集合类型</p><ul><li>存储<code>sadd key vlaue</code></li><li>获取<code>smembers key</code></li><li>删除<code>srem key value</code></li></ul></li><li><p>有序集合</p><ul><li>存储<code>zadd key score value</code> 按照score排序</li><li>获取<code>zrange key start end</code></li><li>删除<code>zrem key value</code></li></ul></li></ol><p>通用命令</p><ol><li><code>keys *</code> 查询所有键</li><li><code>type key</code>获取键的类型</li><li><code>del key</code>删除键值对</li></ol><h1 id="_4-redis持久化" tabindex="-1">4 redis持久化 <a class="header-anchor" href="#_4-redis持久化" aria-label="Permalink to &quot;4  redis持久化&quot;">​</a></h1><p>redis是一个内存数据库，当redis服务重启，数据会丢失，因此可以将数据保存到硬盘，叫持久化。但是不能保证绝对安全，因为持久化是按时间等设置的。</p><p>持久化机制：</p><ol><li>RDB：默认方式，不需要进行配置，默认就使用这种机制（产生一个rdb文件） <ul><li>使用方式：在一定的间隔时间内，检测key的变化情况，然后持久化数据 <ul><li>打开redis.windows.conf文件，</li><li>修改/添加 save 900 1（表示如果1个key发生改变，900秒持久一次）</li><li>用命令启动redis：<code>redis-server.exe redis.windows.conf</code></li></ul></li></ul></li><li>AOF：日志记录的方式，可以记录每一条命令的操作，可以每次命令操作后，持久化数据，产生一个aof文件。对性能有影响，使用方式： <ul><li>修改配置文件<code>redis.windows.conf</code>，将<code>appendonly no</code>改成<code>appendonly yes</code></li><li>修改<code>appendfsync</code><ul><li><code>appendfsync everysec</code> 默认，每秒持久化一次</li><li><code>appendfsync always</code> 每一次操作都进行持久化</li><li><code>appendfsync no</code> 不持久化</li></ul></li><li>用命令启动redis：<code>redis-server.exe redis.windows.conf</code></li></ul></li></ol><h1 id="_5-java的jedis工具" tabindex="-1">5 Java的Jedis工具 <a class="header-anchor" href="#_5-java的jedis工具" aria-label="Permalink to &quot;5  Java的Jedis工具&quot;">​</a></h1><p>Jedis：一款java操作redis数据库的工具。</p><p>使用步骤：</p><ol><li>启动redis</li><li>导入jedis的jar包（2个）</li><li>获取连接 <code>Jedis jedis = new Jedis(&quot;localhost&quot;, 6379);</code> （指定IP和端口）</li><li>操作 <code>jedis.set(&quot;username&quot;, &quot;zhangsan&quot;);</code> （和命令操作差不多）</li><li>关闭连接 <code>jedis.close();</code></li></ol><p><strong>jdis操作</strong></p><ul><li>字符串：<code>jedis.set(&quot;x&quot;, &quot;xx&quot;)</code> 和 <code>jedis.get(&quot;x&quot;)</code></li><li>哈希：<code>jedis.hset(&quot;user&quot;, &quot;name&quot;, &quot;tom&quot;)</code>和<code>Map&lt;,&gt; jedis.hgetAll(&quot;user&quot;)</code></li><li>列表：<code>jedis.lpush(&quot;mylist&quot;, &quot;b&quot;, &quot;b&quot;, &quot;b&quot;)</code> 和 <code>List&lt;&gt; jedis.lrange(&quot;mylist&quot;, 0, -1)</code></li><li>集合：<code>jedis.sadd(&quot;myset&quot;, &quot;java&quot;, &quot;php&quot;, &quot;c&quot;)</code>和<code>Set&lt;&gt; jedis.smembers(&quot;myset&quot;)</code></li><li>有序集合：<code>jedis.zadd(&quot;myset&quot;, 3, &quot;java&quot;, 2, &quot;php&quot;, 5, &quot;c&quot;)</code> 和 <code>jedis.zrange(myset, 0, -1)</code></li><li>特殊操作：存储过期时间，存储一段时间自己消失，如手机验证码： <ul><li><code>jedis.setex(&quot;activecode&quot;, 20, &quot;asdf&quot;)</code> （存储20秒，键值对为activecode:asdf）</li></ul></li></ul><p><strong>jedis连接池</strong></p><p>jedis自带连接池，作用和jdcb连接池一样，使用：</p><ol><li><p>创建连接池对象<code>JedisPool jdisPool = new JedisPool(&quot;localhost&quot;, 6379);</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 连接池创建时，可以指定配置参数</span></span>
<span class="line"><span style="color:#e1e4e8;">JedisPoolConfig config = new JedisPoolConfig();</span></span>
<span class="line"><span style="color:#e1e4e8;">config.setMaxTotal(50); // 最大连接</span></span>
<span class="line"><span style="color:#e1e4e8;">config.setMaxIdle(10); // 最大空闲连接</span></span>
<span class="line"><span style="color:#e1e4e8;">JedisPool jedisPool = new JedisPool(config, &quot;localhost&quot;, 6379);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 连接池创建时，可以指定配置参数</span></span>
<span class="line"><span style="color:#24292e;">JedisPoolConfig config = new JedisPoolConfig();</span></span>
<span class="line"><span style="color:#24292e;">config.setMaxTotal(50); // 最大连接</span></span>
<span class="line"><span style="color:#24292e;">config.setMaxIdle(10); // 最大空闲连接</span></span>
<span class="line"><span style="color:#24292e;">JedisPool jedisPool = new JedisPool(config, &quot;localhost&quot;, 6379);</span></span></code></pre></div></li><li><p>调用方法，获取jedis连接<code>Jedis jedis = jedisPool.getResource();</code></p></li><li><p>操作</p></li><li><p>关闭连接<code>jedis.close();</code> （归还到连接池中）</p></li><li><p>关闭连接池</p></li></ol><p><strong>jedis工具类</strong></p><p>把配置存在一个配置文件，然后把连接池、创建连接对象等操作放在工具类里面。步骤如下：</p><ol><li><p>将配置文件<code>jedis.properties</code>放在src目录下，修改配置文件。</p></li><li><p>创建JedisPoolUtils工具类，代码如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class JedisPoolUtils {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private static JedisPool jedisPool;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    static {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 读取配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">        InputStream is = JedisPoolUtils.class.getClassLoader().getResourceAsStream(&quot;jedis.properties&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        Properties pro = new Properties();</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            pro.load(is);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (IOException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 创建配置对象</span></span>
<span class="line"><span style="color:#e1e4e8;">        JedisPoolConfig config = new JedisPoolConfig();</span></span>
<span class="line"><span style="color:#e1e4e8;">        config.setMaxTotal(Integer.parseInt(pro.getProperty(&quot;maxTotal&quot;)));</span></span>
<span class="line"><span style="color:#e1e4e8;">        config.setMaxIdle(Integer.parseInt(pro.getProperty(&quot;maxIdle&quot;)));</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 初始化连接池</span></span>
<span class="line"><span style="color:#e1e4e8;">        jedisPool = new JedisPool(config, pro.getProperty(&quot;host&quot;), Integer.parseInt(pro.getProperty(&quot;port&quot;)));</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static Jedis getJedis() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return jedisPool.getResource();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void close(Jedis jedis) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        jedis.close();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class JedisPoolUtils {</span></span>
<span class="line"><span style="color:#24292e;">    private static JedisPool jedisPool;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    static {</span></span>
<span class="line"><span style="color:#24292e;">        // 读取配置文件</span></span>
<span class="line"><span style="color:#24292e;">        InputStream is = JedisPoolUtils.class.getClassLoader().getResourceAsStream(&quot;jedis.properties&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        Properties pro = new Properties();</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            pro.load(is);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (IOException e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        // 创建配置对象</span></span>
<span class="line"><span style="color:#24292e;">        JedisPoolConfig config = new JedisPoolConfig();</span></span>
<span class="line"><span style="color:#24292e;">        config.setMaxTotal(Integer.parseInt(pro.getProperty(&quot;maxTotal&quot;)));</span></span>
<span class="line"><span style="color:#24292e;">        config.setMaxIdle(Integer.parseInt(pro.getProperty(&quot;maxIdle&quot;)));</span></span>
<span class="line"><span style="color:#24292e;">        // 初始化连接池</span></span>
<span class="line"><span style="color:#24292e;">        jedisPool = new JedisPool(config, pro.getProperty(&quot;host&quot;), Integer.parseInt(pro.getProperty(&quot;port&quot;)));</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static Jedis getJedis() {</span></span>
<span class="line"><span style="color:#24292e;">        return jedisPool.getResource();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void close(Jedis jedis) {</span></span>
<span class="line"><span style="color:#24292e;">        jedis.close();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></li></ol><h1 id="_6-案例-下拉框省份" tabindex="-1">6 案例：下拉框省份 <a class="header-anchor" href="#_6-案例-下拉框省份" aria-label="Permalink to &quot;6  案例：下拉框省份&quot;">​</a></h1><p>技术ajax+redis+servlet+mysql+druid</p><ol><li><p>创建Java EE web项目/模块</p></li><li><p>创建province表</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">CREATE DATABASE IF NOT EXISTS db1;</span></span>
<span class="line"><span style="color:#e1e4e8;">USE db1;</span></span>
<span class="line"><span style="color:#e1e4e8;">DROP TABLE IF EXISTS province;</span></span>
<span class="line"><span style="color:#e1e4e8;">CREATE TABLE province(</span></span>
<span class="line"><span style="color:#e1e4e8;">	id INT PRIMARY KEY AUTO_INCREMENT,</span></span>
<span class="line"><span style="color:#e1e4e8;">	NAME VARCHAR(30) NOT NULL</span></span>
<span class="line"><span style="color:#e1e4e8;">);</span></span>
<span class="line"><span style="color:#e1e4e8;">INSERT INTO province VALUES(NULL,&#39;北京&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">(NULL,&#39;上海&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">(NULL,&#39;广州&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">(NULL,&#39;陕西&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">CREATE DATABASE IF NOT EXISTS db1;</span></span>
<span class="line"><span style="color:#24292e;">USE db1;</span></span>
<span class="line"><span style="color:#24292e;">DROP TABLE IF EXISTS province;</span></span>
<span class="line"><span style="color:#24292e;">CREATE TABLE province(</span></span>
<span class="line"><span style="color:#24292e;">	id INT PRIMARY KEY AUTO_INCREMENT,</span></span>
<span class="line"><span style="color:#24292e;">	NAME VARCHAR(30) NOT NULL</span></span>
<span class="line"><span style="color:#24292e;">);</span></span>
<span class="line"><span style="color:#24292e;">INSERT INTO province VALUES(NULL,&#39;北京&#39;),</span></span>
<span class="line"><span style="color:#24292e;">(NULL,&#39;上海&#39;),</span></span>
<span class="line"><span style="color:#24292e;">(NULL,&#39;广州&#39;),</span></span>
<span class="line"><span style="color:#24292e;">(NULL,&#39;陕西&#39;);</span></span></code></pre></div></li><li><p>导入jar包：mysql包，druid包，jdbcTempalte包，jedis包，jackson包</p></li><li><p>导入jquery.js，导入druid.properties，导入jedis.propertis</p></li><li><p>导入JDBCUtils工具类，导入JedisPollUtils工具类</p></li><li><p>编写Province类（JavaBean）</p><p><img src="`+l+`" alt="image-20210326211258056"></p></li><li><p>编写ProvinceDao类</p><ul><li>从数据库中得到Province，并返回</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class ProvinceDao {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private JdbcTemplate jdbcTemplate = new JdbcTemplate(JDBCUtils.getDataSource());</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public List&lt;Province&gt; findAll() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String sql = &quot;select * from province&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        List&lt;Province&gt; list = jdbcTemplate.query(sql, new BeanPropertyRowMapper&lt;Province&gt;(Province.class));</span></span>
<span class="line"><span style="color:#e1e4e8;">        return list;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class ProvinceDao {</span></span>
<span class="line"><span style="color:#24292e;">    private JdbcTemplate jdbcTemplate = new JdbcTemplate(JDBCUtils.getDataSource());</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public List&lt;Province&gt; findAll() {</span></span>
<span class="line"><span style="color:#24292e;">        String sql = &quot;select * from province&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        List&lt;Province&gt; list = jdbcTemplate.query(sql, new BeanPropertyRowMapper&lt;Province&gt;(Province.class));</span></span>
<span class="line"><span style="color:#24292e;">        return list;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></li><li><p>编写FindProvinceServlet：（主要是doPost/doGet方法中的内容）</p><ul><li>将json格式的province返回浏览器</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ProvinceDao provinceDao = new ProvinceDao();</span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;Province&gt; list = provinceDao.findAll();</span></span>
<span class="line"><span style="color:#e1e4e8;">String json = new ObjectMapper().writeValueAsString(list);</span></span>
<span class="line"><span style="color:#e1e4e8;">//  String json = provinceDao.findAll2();</span></span>
<span class="line"><span style="color:#e1e4e8;">System.out.println(json);</span></span>
<span class="line"><span style="color:#e1e4e8;">resp.setContentType(&quot;text/html;charset=utf-8&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ProvinceDao provinceDao = new ProvinceDao();</span></span>
<span class="line"><span style="color:#24292e;">List&lt;Province&gt; list = provinceDao.findAll();</span></span>
<span class="line"><span style="color:#24292e;">String json = new ObjectMapper().writeValueAsString(list);</span></span>
<span class="line"><span style="color:#24292e;">//  String json = provinceDao.findAll2();</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(json);</span></span>
<span class="line"><span style="color:#24292e;">resp.setContentType(&quot;text/html;charset=utf-8&quot;);</span></span></code></pre></div></li><li><p>html代码：</p><ul><li>下拉框使用ajax技术(js代码)：当单击下拉框时，从findProvinceServlet中查找所有省份</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;注册&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;js/jquery-2.1.0.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        // ajax</span></span>
<span class="line"><span style="color:#e1e4e8;">        $(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">            $(&quot;#province&quot;).click(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">                var username = $(this).val();</span></span>
<span class="line"><span style="color:#e1e4e8;">                $.get(&quot;findProvinceServlet&quot;, {}, function (data) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    // 期望服务器回应数据格式 [{&quot;id&quot;: 1, &quot;name&quot;: &quot;北京&quot;},,,]</span></span>
<span class="line"><span style="color:#e1e4e8;">                    var province = $(&quot;#province&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    $(data).each(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        var option = &quot;&lt;option name=&#39;&quot; + this.id + &quot;&#39;&gt;&quot; + this.name + &quot;&lt;/option&gt;&gt;&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        province.append(option);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    });</span></span>
<span class="line"><span style="color:#e1e4e8;">                }, &quot;json&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">            });</span></span>
<span class="line"><span style="color:#e1e4e8;">        });</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;form&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;select id=&quot;province&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;option&gt;--请选择省份--&lt;/option&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/select&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/form&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;注册&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;js/jquery-2.1.0.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">        // ajax</span></span>
<span class="line"><span style="color:#24292e;">        $(function () {</span></span>
<span class="line"><span style="color:#24292e;">            $(&quot;#province&quot;).click(function () {</span></span>
<span class="line"><span style="color:#24292e;">                var username = $(this).val();</span></span>
<span class="line"><span style="color:#24292e;">                $.get(&quot;findProvinceServlet&quot;, {}, function (data) {</span></span>
<span class="line"><span style="color:#24292e;">                    // 期望服务器回应数据格式 [{&quot;id&quot;: 1, &quot;name&quot;: &quot;北京&quot;},,,]</span></span>
<span class="line"><span style="color:#24292e;">                    var province = $(&quot;#province&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                    $(data).each(function () {</span></span>
<span class="line"><span style="color:#24292e;">                        var option = &quot;&lt;option name=&#39;&quot; + this.id + &quot;&#39;&gt;&quot; + this.name + &quot;&lt;/option&gt;&gt;&quot;;</span></span>
<span class="line"><span style="color:#24292e;">                        province.append(option);</span></span>
<span class="line"><span style="color:#24292e;">                    });</span></span>
<span class="line"><span style="color:#24292e;">                }, &quot;json&quot;);</span></span>
<span class="line"><span style="color:#24292e;">            });</span></span>
<span class="line"><span style="color:#24292e;">        });</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;form&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;select id=&quot;province&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;option&gt;--请选择省份--&lt;/option&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/select&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/form&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div></li></ol><p>上面已经完成了ajax技术和mysql数据库之间的操作，现在可以加入redis数据库优化：</p><ol><li><p>启动redis</p></li><li><p>在ProvinceDao类中在添加一种方法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public String findAll2() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Jedis jedis = JedisPoolUtils.getJedis();</span></span>
<span class="line"><span style="color:#e1e4e8;">    String province = jedis.get(&quot;province&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    // redis没有数据, 找数据 并存起来</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (province == null || province.length() == 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        List&lt;Province&gt; all = findAll();</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;查数据库..............&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        ObjectMapper mapper = new ObjectMapper();</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            province = mapper.writeValueAsString(all);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (JsonProcessingException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        jedis.set(&quot;province&quot;, province);</span></span>
<span class="line"><span style="color:#e1e4e8;">        jedis.close();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    System.out.println(&quot;查缓存。。。。。。。。。。。。。&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return province;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public String findAll2() {</span></span>
<span class="line"><span style="color:#24292e;">    Jedis jedis = JedisPoolUtils.getJedis();</span></span>
<span class="line"><span style="color:#24292e;">    String province = jedis.get(&quot;province&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    // redis没有数据, 找数据 并存起来</span></span>
<span class="line"><span style="color:#24292e;">    if (province == null || province.length() == 0) {</span></span>
<span class="line"><span style="color:#24292e;">        List&lt;Province&gt; all = findAll();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;查数据库..............&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        ObjectMapper mapper = new ObjectMapper();</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            province = mapper.writeValueAsString(all);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (JsonProcessingException e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        jedis.set(&quot;province&quot;, province);</span></span>
<span class="line"><span style="color:#24292e;">        jedis.close();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    System.out.println(&quot;查缓存。。。。。。。。。。。。。&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    return province;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></li><li><p>在FindProvinceServlet类中，list从findAll2()方法中获取：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// List&lt;Province&gt; list = provinceDao.findAll();</span></span>
<span class="line"><span style="color:#e1e4e8;">// String json = new ObjectMapper().writeValueAsString(list);</span></span>
<span class="line"><span style="color:#e1e4e8;">String json = provinceDao.findAll2();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// List&lt;Province&gt; list = provinceDao.findAll();</span></span>
<span class="line"><span style="color:#24292e;">// String json = new ObjectMapper().writeValueAsString(list);</span></span>
<span class="line"><span style="color:#24292e;">String json = provinceDao.findAll2();</span></span></code></pre></div></li></ol>`,36),t=[o];function i(c,r,d,u,y,g){return e(),n("div",null,t)}const h=s(p,[["render",i]]);export{q as __pageData,h as default};
