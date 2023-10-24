import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const m=JSON.parse('{"title":"Spring Data Redis","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/51SpringBoot/04缓存Redis.md","filePath":"articles/Java/51SpringBoot/04缓存Redis.md","lastUpdated":1698149129000}'),l={name:"articles/Java/51SpringBoot/04缓存Redis.md"},p=e(`<h1 id="spring-data-redis" tabindex="-1">Spring Data Redis <a class="header-anchor" href="#spring-data-redis" aria-label="Permalink to &quot;Spring Data Redis&quot;">​</a></h1><h2 id="快速入门" tabindex="-1">快速入门 <a class="header-anchor" href="#快速入门" aria-label="Permalink to &quot;快速入门&quot;">​</a></h2><p>引入依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!-- redis 缓存 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!-- 当springboot版本是1.4.0以前，用spring-boot-starter-redis</span></span>
<span class="line"><span style="color:#e1e4e8;">  当springboot版本是1.5.0以后，用spring-boot-starter-data-redis</span></span>
<span class="line"><span style="color:#e1e4e8;">  当springboot版本是1.4-1.5之间，用这两个都可以，是一样的</span></span>
<span class="line"><span style="color:#e1e4e8;">--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!-- springboot2.0.0集成redis，需要common-pool2 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;groupId&gt;org.apache.commons&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;artifactId&gt;commons-pool2&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!-- spring-boot-starter-web 等 --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!-- redis 缓存 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- 当springboot版本是1.4.0以前，用spring-boot-starter-redis</span></span>
<span class="line"><span style="color:#24292e;">  当springboot版本是1.5.0以后，用spring-boot-starter-data-redis</span></span>
<span class="line"><span style="color:#24292e;">  当springboot版本是1.4-1.5之间，用这两个都可以，是一样的</span></span>
<span class="line"><span style="color:#24292e;">--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- springboot2.0.0集成redis，需要common-pool2 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;groupId&gt;org.apache.commons&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;artifactId&gt;commons-pool2&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- spring-boot-starter-web 等 --&gt;</span></span></code></pre></div><p>配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">spring.redis.host=localhost</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.redis.port=7001</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.redis.database=0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spring.redis.host=localhost</span></span>
<span class="line"><span style="color:#24292e;">spring.redis.port=7001</span></span>
<span class="line"><span style="color:#24292e;">spring.redis.database=0</span></span></code></pre></div><p>然后就可以用了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Controller</span></span>
<span class="line"><span style="color:#e1e4e8;">public class RedisController {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    RedisTemplate redisTemplate;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @GetMapping(&quot;/redis/hello&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void redisHello() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        redisTemplate.setKeySerializer(new StringRedisSerializer());</span></span>
<span class="line"><span style="color:#e1e4e8;">        ValueOperations ops = redisTemplate.opsForValue();</span></span>
<span class="line"><span style="color:#e1e4e8;">        ops.set(&quot;test_k1&quot;, &quot;test_v1&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        Object k1 = ops.get(&quot;test_k1&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(k1);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Controller</span></span>
<span class="line"><span style="color:#24292e;">public class RedisController {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    RedisTemplate redisTemplate;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @GetMapping(&quot;/redis/hello&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public void redisHello() {</span></span>
<span class="line"><span style="color:#24292e;">        redisTemplate.setKeySerializer(new StringRedisSerializer());</span></span>
<span class="line"><span style="color:#24292e;">        ValueOperations ops = redisTemplate.opsForValue();</span></span>
<span class="line"><span style="color:#24292e;">        ops.set(&quot;test_k1&quot;, &quot;test_v1&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        Object k1 = ops.get(&quot;test_k1&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(k1);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h1 id="spring-cache-redis" tabindex="-1">Spring Cache Redis <a class="header-anchor" href="#spring-cache-redis" aria-label="Permalink to &quot;Spring Cache Redis&quot;">​</a></h1><h2 id="快速入门-1" tabindex="-1">快速入门 <a class="header-anchor" href="#快速入门-1" aria-label="Permalink to &quot;快速入门&quot;">​</a></h2><p>依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-boot-starter-cache&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!-- redis --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!-- springboot2.0.0集成redis，需要common-pool2连接池 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;groupId&gt;org.apache.commons&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;artifactId&gt;commons-pool2&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!-- hutools工具转json --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;cn.hutool&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;hutool-all&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;version&gt;5.4.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-cache&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- redis --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- springboot2.0.0集成redis，需要common-pool2连接池 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;groupId&gt;org.apache.commons&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;artifactId&gt;commons-pool2&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- hutools工具转json --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;cn.hutool&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;hutool-all&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;5.4.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>单机redis配置同上，如果是集群，需要配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># redis集群</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.redis.cluster.nodes=192.168.41.213:7000,192.168.41.213:7001,192.168.41.213:7002,192.168.41.213:7003,192.168.41.213:7004,192.168.41.213:7005</span></span>
<span class="line"><span style="color:#e1e4e8;"># 其他配置等</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># redis集群</span></span>
<span class="line"><span style="color:#24292e;">spring.redis.cluster.nodes=192.168.41.213:7000,192.168.41.213:7001,192.168.41.213:7002,192.168.41.213:7003,192.168.41.213:7004,192.168.41.213:7005</span></span>
<span class="line"><span style="color:#24292e;"># 其他配置等</span></span></code></pre></div><p>在启动类MainApp上添加注解</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@EnableCaching</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@EnableCaching</span></span></code></pre></div><p>尝试如下正常，但是如果是对象，存在序列化问题，所以要自定义一个RedisTemplate模板。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Controller</span></span>
<span class="line"><span style="color:#e1e4e8;">public class RedisController {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    RedisTemplate redisTemplate;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @GetMapping(&quot;/redis/hello&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void redisHello() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        redisTemplate.setKeySerializer(new StringRedisSerializer());</span></span>
<span class="line"><span style="color:#e1e4e8;">        ValueOperations ops = redisTemplate.opsForValue();</span></span>
<span class="line"><span style="color:#e1e4e8;">        ops.set(&quot;test_k1&quot;, &quot;test_v1&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        Object k1 = ops.get(&quot;test_k1&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(k1);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Controller</span></span>
<span class="line"><span style="color:#24292e;">public class RedisController {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    RedisTemplate redisTemplate;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @GetMapping(&quot;/redis/hello&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public void redisHello() {</span></span>
<span class="line"><span style="color:#24292e;">        redisTemplate.setKeySerializer(new StringRedisSerializer());</span></span>
<span class="line"><span style="color:#24292e;">        ValueOperations ops = redisTemplate.opsForValue();</span></span>
<span class="line"><span style="color:#24292e;">        ops.set(&quot;test_k1&quot;, &quot;test_v1&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        Object k1 = ops.get(&quot;test_k1&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(k1);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="自定义redistemplate" tabindex="-1">自定义RedisTemplate <a class="header-anchor" href="#自定义redistemplate" aria-label="Permalink to &quot;自定义RedisTemplate&quot;">​</a></h2><p>Spring Boot 自动帮我们在容器中生成了一个RedisTemplate和一个StringRedisTemplate。但是，这个RedisTemplate的泛型是&lt;Object,Object&gt;。这样在写代码就很不方便，要写好多类型转换的代码。</p><p>因此自定义一个模板，覆盖默认的模板（默认使用jdk序列化）。</p><p>自建一个RedisConfig类（使用Json序列化）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Configuration</span></span>
<span class="line"><span style="color:#e1e4e8;">public class RedisConfig {</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    @Bean</span></span>
<span class="line"><span style="color:#e1e4e8;">    @SuppressWarnings(&quot;all&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public RedisTemplate&lt;String, Object&gt; redisTemplate(RedisConnectionFactory factory) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 为开发方便，一般直接使用 &lt;String, Object&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        RedisTemplate&lt;String, Object&gt; template = new RedisTemplate&lt;String, Object&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">        template.setConnectionFactory(factory);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        // Json序列化配置</span></span>
<span class="line"><span style="color:#e1e4e8;">        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);</span></span>
<span class="line"><span style="color:#e1e4e8;">        ObjectMapper om = new ObjectMapper();</span></span>
<span class="line"><span style="color:#e1e4e8;">        om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);</span></span>
<span class="line"><span style="color:#e1e4e8;">        om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);</span></span>
<span class="line"><span style="color:#e1e4e8;">        jackson2JsonRedisSerializer.setObjectMapper(om);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        // String 的序列化</span></span>
<span class="line"><span style="color:#e1e4e8;">        StringRedisSerializer stringRedisSerializer = new StringRedisSerializer();</span></span>
<span class="line"><span style="color:#e1e4e8;">        // key采用String的序列化方式</span></span>
<span class="line"><span style="color:#e1e4e8;">        template.setKeySerializer(stringRedisSerializer);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // hash的key也采用String的序列化方式</span></span>
<span class="line"><span style="color:#e1e4e8;">        template.setHashKeySerializer(stringRedisSerializer);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // value序列化方式采用jackson</span></span>
<span class="line"><span style="color:#e1e4e8;">        template.setValueSerializer(jackson2JsonRedisSerializer);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // hash的value序列化方式采用jackson</span></span>
<span class="line"><span style="color:#e1e4e8;">        template.setHashValueSerializer(jackson2JsonRedisSerializer);</span></span>
<span class="line"><span style="color:#e1e4e8;">        template.afterPropertiesSet();</span></span>
<span class="line"><span style="color:#e1e4e8;">        return template;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Configuration</span></span>
<span class="line"><span style="color:#24292e;">public class RedisConfig {</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    @Bean</span></span>
<span class="line"><span style="color:#24292e;">    @SuppressWarnings(&quot;all&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public RedisTemplate&lt;String, Object&gt; redisTemplate(RedisConnectionFactory factory) {</span></span>
<span class="line"><span style="color:#24292e;">        // 为开发方便，一般直接使用 &lt;String, Object&gt;</span></span>
<span class="line"><span style="color:#24292e;">        RedisTemplate&lt;String, Object&gt; template = new RedisTemplate&lt;String, Object&gt;();</span></span>
<span class="line"><span style="color:#24292e;">        template.setConnectionFactory(factory);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        // Json序列化配置</span></span>
<span class="line"><span style="color:#24292e;">        Jackson2JsonRedisSerializer jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer(Object.class);</span></span>
<span class="line"><span style="color:#24292e;">        ObjectMapper om = new ObjectMapper();</span></span>
<span class="line"><span style="color:#24292e;">        om.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);</span></span>
<span class="line"><span style="color:#24292e;">        om.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);</span></span>
<span class="line"><span style="color:#24292e;">        jackson2JsonRedisSerializer.setObjectMapper(om);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        // String 的序列化</span></span>
<span class="line"><span style="color:#24292e;">        StringRedisSerializer stringRedisSerializer = new StringRedisSerializer();</span></span>
<span class="line"><span style="color:#24292e;">        // key采用String的序列化方式</span></span>
<span class="line"><span style="color:#24292e;">        template.setKeySerializer(stringRedisSerializer);</span></span>
<span class="line"><span style="color:#24292e;">        // hash的key也采用String的序列化方式</span></span>
<span class="line"><span style="color:#24292e;">        template.setHashKeySerializer(stringRedisSerializer);</span></span>
<span class="line"><span style="color:#24292e;">        // value序列化方式采用jackson</span></span>
<span class="line"><span style="color:#24292e;">        template.setValueSerializer(jackson2JsonRedisSerializer);</span></span>
<span class="line"><span style="color:#24292e;">        // hash的value序列化方式采用jackson</span></span>
<span class="line"><span style="color:#24292e;">        template.setHashValueSerializer(jackson2JsonRedisSerializer);</span></span>
<span class="line"><span style="color:#24292e;">        template.afterPropertiesSet();</span></span>
<span class="line"><span style="color:#24292e;">        return template;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>测试成功</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">RedisTemplate redisTemplate;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">@Test</span></span>
<span class="line"><span style="color:#e1e4e8;">public void redisTest() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    User user = new User();</span></span>
<span class="line"><span style="color:#e1e4e8;">    user.setUsername(&quot;tom&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    redisTemplate.opsForValue().set(&quot;user-01&quot;, user);</span></span>
<span class="line"><span style="color:#e1e4e8;">    System.out.println(redisTemplate.opsForValue().get(&quot;user-01&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Autowired</span></span>
<span class="line"><span style="color:#24292e;">RedisTemplate redisTemplate;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">@Test</span></span>
<span class="line"><span style="color:#24292e;">public void redisTest() {</span></span>
<span class="line"><span style="color:#24292e;">    User user = new User();</span></span>
<span class="line"><span style="color:#24292e;">    user.setUsername(&quot;tom&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    redisTemplate.opsForValue().set(&quot;user-01&quot;, user);</span></span>
<span class="line"><span style="color:#24292e;">    System.out.println(redisTemplate.opsForValue().get(&quot;user-01&quot;));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="自定义工具类" tabindex="-1">自定义工具类 <a class="header-anchor" href="#自定义工具类" aria-label="Permalink to &quot;自定义工具类&quot;">​</a></h2><p>redisTemplate.opsForValue().xxxxx很麻烦，所以自定义工具类RedisUtils</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">package com.sinovatio.redis;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.springframework.data.redis.core.RedisTemplate;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.springframework.stereotype.Component;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.springframework.util.CollectionUtils;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.List;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.Map;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.Set;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.concurrent.TimeUnit;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * redis 工具类</span></span>
<span class="line"><span style="color:#e1e4e8;"> *</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @author simon</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @date 2018-11-28 10:35</span></span>
<span class="line"><span style="color:#e1e4e8;"> **/</span></span>
<span class="line"><span style="color:#e1e4e8;">@Component</span></span>
<span class="line"><span style="color:#e1e4e8;">public class RedisUtils {</span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 注入redisTemplate bean</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    private RedisTemplate&lt;String, Object&gt; redisTemplate;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 指定缓存失效时间</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key  键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param time 时间(秒)</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean expire(String key, long time) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (time &gt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                redisTemplate.expire(key, time, TimeUnit.SECONDS);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 根据key获取过期时间</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key 键 不能为null</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return 时间(秒) 返回0代表为永久有效</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public long getExpire(String key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return redisTemplate.getExpire(key, TimeUnit.SECONDS);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 判断key是否存在</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key 键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return true 存在 false不存在</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean hasKey(String key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return redisTemplate.hasKey(key);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 删除缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key 可以传一个值 或多个</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void del(String... key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (key != null &amp;&amp; key.length &gt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (key.length == 1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                redisTemplate.delete(key[0]);</span></span>
<span class="line"><span style="color:#e1e4e8;">            } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">                redisTemplate.delete(CollectionUtils.arrayToList(key));</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    // ============================String(字符串)=============================</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 普通缓存获取</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key 键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return 值</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public Object get(String key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return key == null ? null : redisTemplate.opsForValue().get(key);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 普通缓存放入</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param value 值</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return true成功 false失败</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean set(String key, Object value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            redisTemplate.opsForValue().set(key, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">            return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 普通缓存放入并设置时间</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param value 值</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param time  时间(秒) time要大于0 如果time小于等于0 将设置无限期</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return true成功 false 失败</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean set(String key, Object value, long time) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (time &gt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                redisTemplate.opsForValue().set(key, value, time, TimeUnit.SECONDS);</span></span>
<span class="line"><span style="color:#e1e4e8;">            } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">                set(key, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 递增</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param delta 要增加几(大于0)</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public long incr(String key, long delta) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (delta &lt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            throw new RuntimeException(&quot;递增因子必须大于0&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        return redisTemplate.opsForValue().increment(key, delta);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 递减</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param delta 要减少几(小于0)</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public long decr(String key, long delta) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (delta &lt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            throw new RuntimeException(&quot;递减因子必须大于0&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        return redisTemplate.opsForValue().increment(key, -delta);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    // ================================Hash(哈希)=================================</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * HashGet</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key  键 不能为null</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param item 项 不能为null</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return 值</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public Object hget(String key, String item) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return redisTemplate.opsForHash().get(key, item);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 获取hashKey对应的所有键值</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key 键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return 对应的多个键值</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public Map&lt;Object, Object&gt; hmget(String key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return redisTemplate.opsForHash().entries(key);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * HashSet</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key 键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param map 对应多个键值</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return true 成功 false 失败</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean hmset(String key, Map&lt;String, Object&gt; map) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            redisTemplate.opsForHash().putAll(key, map);</span></span>
<span class="line"><span style="color:#e1e4e8;">            return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * HashSet 并设置时间</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key  键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param map  对应多个键值</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param time 时间(秒)</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return true成功 false失败</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean hmset(String key, Map&lt;String, Object&gt; map, long time) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            redisTemplate.opsForHash().putAll(key, map);</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (time &gt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                expire(key, time);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 向一张hash表中放入数据,如果不存在将创建</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param item  项</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param value 值</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return true 成功 false失败</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean hset(String key, String item, Object value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            redisTemplate.opsForHash().put(key, item, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">            return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 向一张hash表中放入数据,如果不存在将创建</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param item  项</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param value 值</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param time  时间(秒) 注意:如果已存在的hash表有时间,这里将会替换原有的时间</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return true 成功 false失败</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean hset(String key, String item, Object value, long time) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            redisTemplate.opsForHash().put(key, item, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (time &gt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                expire(key, time);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 删除hash表中的值</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key  键 不能为null</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param item 项 可以使多个 不能为null</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void hdel(String key, Object... item) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        redisTemplate.opsForHash().delete(key, item);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 判断hash表中是否有该项的值</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key  键 不能为null</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param item 项 不能为null</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return true 存在 false不存在</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean hHasKey(String key, String item) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return redisTemplate.opsForHash().hasKey(key, item);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * hash递增 如果不存在,就会创建一个 并把新增后的值返回</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key  键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param item 项</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param by   要增加几(大于0)</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public double hincr(String key, String item, double by) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return redisTemplate.opsForHash().increment(key, item, by);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * hash递减</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key  键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param item 项</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param by   要减少记(小于0)</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public double hdecr(String key, String item, double by) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return redisTemplate.opsForHash().increment(key, item, -by);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    // ============================Set(集合)=============================</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 根据key获取Set中的所有值</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key 键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public Set&lt;Object&gt; sGet(String key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return redisTemplate.opsForSet().members(key);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return null;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 根据value从一个set中查询,是否存在</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param value 值</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return true 存在 false不存在</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean sHasKey(String key, Object value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return redisTemplate.opsForSet().isMember(key, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 将数据放入set缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key    键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param values 值 可以是多个</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return 成功个数</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public long sSet(String key, Object... values) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return redisTemplate.opsForSet().add(key, values);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 将set数据放入缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key    键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param time   时间(秒)</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param values 值 可以是多个</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return 成功个数</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public long sSetAndTime(String key, long time, Object... values) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            Long count = redisTemplate.opsForSet().add(key, values);</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (time &gt; 0)</span></span>
<span class="line"><span style="color:#e1e4e8;">                expire(key, time);</span></span>
<span class="line"><span style="color:#e1e4e8;">            return count;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 获取set缓存的长度</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key 键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public long sGetSetSize(String key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return redisTemplate.opsForSet().size(key);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 移除值为value的</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key    键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param values 值 可以是多个</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return 移除的个数</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public long setRemove(String key, Object... values) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            Long count = redisTemplate.opsForSet().remove(key, values);</span></span>
<span class="line"><span style="color:#e1e4e8;">            return count;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    // ===============================List(列表)=================================</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 获取list缓存的内容</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param start 开始</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param end   结束 0 到 -1代表所有值</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public List&lt;Object&gt; lGet(String key, long start, long end) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return redisTemplate.opsForList().range(key, start, end);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return null;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 获取list缓存的长度</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key 键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public long lGetListSize(String key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return redisTemplate.opsForList().size(key);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 通过索引 获取list中的值</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param index 索引 index&gt;=0时， 0 表头，1 第二个元素，依次类推；index&lt;0时，-1，表尾，-2倒数第二个元素，依次类推</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public Object lGetIndex(String key, long index) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return redisTemplate.opsForList().index(key, index);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return null;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 将list放入缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param value 值</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean lSet(String key, Object value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            redisTemplate.opsForList().rightPush(key, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">            return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 将list放入缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param value 值</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param time  时间(秒)</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean lSet(String key, Object value, long time) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            redisTemplate.opsForList().rightPush(key, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (time &gt; 0)</span></span>
<span class="line"><span style="color:#e1e4e8;">                expire(key, time);</span></span>
<span class="line"><span style="color:#e1e4e8;">            return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 将list放入缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param value 值</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean lSet(String key, List&lt;Object&gt; value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            redisTemplate.opsForList().rightPushAll(key, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">            return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 将list放入缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param value 值</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param time  时间(秒)</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean lSet(String key, List&lt;Object&gt; value, long time) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            redisTemplate.opsForList().rightPushAll(key, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (time &gt; 0)</span></span>
<span class="line"><span style="color:#e1e4e8;">                expire(key, time);</span></span>
<span class="line"><span style="color:#e1e4e8;">            return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 根据索引修改list中的某条数据</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param index 索引</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param value 值</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean lUpdateIndex(String key, long index, Object value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            redisTemplate.opsForList().set(key, index, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">            return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 移除N个值为value</span></span>
<span class="line"><span style="color:#e1e4e8;">     *</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param key   键</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param count 移除多少个</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @param value 值</span></span>
<span class="line"><span style="color:#e1e4e8;">     * @return 移除的个数</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public long lRemove(String key, long count, Object value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            Long remove = redisTemplate.opsForList().remove(key, count, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">            return remove;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">package com.sinovatio.redis;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span style="color:#24292e;">import org.springframework.data.redis.core.RedisTemplate;</span></span>
<span class="line"><span style="color:#24292e;">import org.springframework.stereotype.Component;</span></span>
<span class="line"><span style="color:#24292e;">import org.springframework.util.CollectionUtils;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import java.util.List;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.Map;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.Set;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.concurrent.TimeUnit;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * redis 工具类</span></span>
<span class="line"><span style="color:#24292e;"> *</span></span>
<span class="line"><span style="color:#24292e;"> * @author simon</span></span>
<span class="line"><span style="color:#24292e;"> * @date 2018-11-28 10:35</span></span>
<span class="line"><span style="color:#24292e;"> **/</span></span>
<span class="line"><span style="color:#24292e;">@Component</span></span>
<span class="line"><span style="color:#24292e;">public class RedisUtils {</span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 注入redisTemplate bean</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private RedisTemplate&lt;String, Object&gt; redisTemplate;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 指定缓存失效时间</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key  键</span></span>
<span class="line"><span style="color:#24292e;">     * @param time 时间(秒)</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean expire(String key, long time) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            if (time &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">                redisTemplate.expire(key, time, TimeUnit.SECONDS);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            return true;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 根据key获取过期时间</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key 键 不能为null</span></span>
<span class="line"><span style="color:#24292e;">     * @return 时间(秒) 返回0代表为永久有效</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public long getExpire(String key) {</span></span>
<span class="line"><span style="color:#24292e;">        return redisTemplate.getExpire(key, TimeUnit.SECONDS);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 判断key是否存在</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key 键</span></span>
<span class="line"><span style="color:#24292e;">     * @return true 存在 false不存在</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean hasKey(String key) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            return redisTemplate.hasKey(key);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 删除缓存</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key 可以传一个值 或多个</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public void del(String... key) {</span></span>
<span class="line"><span style="color:#24292e;">        if (key != null &amp;&amp; key.length &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">            if (key.length == 1) {</span></span>
<span class="line"><span style="color:#24292e;">                redisTemplate.delete(key[0]);</span></span>
<span class="line"><span style="color:#24292e;">            } else {</span></span>
<span class="line"><span style="color:#24292e;">                redisTemplate.delete(CollectionUtils.arrayToList(key));</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    // ============================String(字符串)=============================</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 普通缓存获取</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key 键</span></span>
<span class="line"><span style="color:#24292e;">     * @return 值</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public Object get(String key) {</span></span>
<span class="line"><span style="color:#24292e;">        return key == null ? null : redisTemplate.opsForValue().get(key);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 普通缓存放入</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param value 值</span></span>
<span class="line"><span style="color:#24292e;">     * @return true成功 false失败</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean set(String key, Object value) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            redisTemplate.opsForValue().set(key, value);</span></span>
<span class="line"><span style="color:#24292e;">            return true;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 普通缓存放入并设置时间</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param value 值</span></span>
<span class="line"><span style="color:#24292e;">     * @param time  时间(秒) time要大于0 如果time小于等于0 将设置无限期</span></span>
<span class="line"><span style="color:#24292e;">     * @return true成功 false 失败</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean set(String key, Object value, long time) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            if (time &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">                redisTemplate.opsForValue().set(key, value, time, TimeUnit.SECONDS);</span></span>
<span class="line"><span style="color:#24292e;">            } else {</span></span>
<span class="line"><span style="color:#24292e;">                set(key, value);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            return true;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 递增</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param delta 要增加几(大于0)</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public long incr(String key, long delta) {</span></span>
<span class="line"><span style="color:#24292e;">        if (delta &lt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">            throw new RuntimeException(&quot;递增因子必须大于0&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return redisTemplate.opsForValue().increment(key, delta);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 递减</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param delta 要减少几(小于0)</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public long decr(String key, long delta) {</span></span>
<span class="line"><span style="color:#24292e;">        if (delta &lt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">            throw new RuntimeException(&quot;递减因子必须大于0&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return redisTemplate.opsForValue().increment(key, -delta);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    // ================================Hash(哈希)=================================</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * HashGet</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key  键 不能为null</span></span>
<span class="line"><span style="color:#24292e;">     * @param item 项 不能为null</span></span>
<span class="line"><span style="color:#24292e;">     * @return 值</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public Object hget(String key, String item) {</span></span>
<span class="line"><span style="color:#24292e;">        return redisTemplate.opsForHash().get(key, item);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 获取hashKey对应的所有键值</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key 键</span></span>
<span class="line"><span style="color:#24292e;">     * @return 对应的多个键值</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public Map&lt;Object, Object&gt; hmget(String key) {</span></span>
<span class="line"><span style="color:#24292e;">        return redisTemplate.opsForHash().entries(key);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * HashSet</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key 键</span></span>
<span class="line"><span style="color:#24292e;">     * @param map 对应多个键值</span></span>
<span class="line"><span style="color:#24292e;">     * @return true 成功 false 失败</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean hmset(String key, Map&lt;String, Object&gt; map) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            redisTemplate.opsForHash().putAll(key, map);</span></span>
<span class="line"><span style="color:#24292e;">            return true;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * HashSet 并设置时间</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key  键</span></span>
<span class="line"><span style="color:#24292e;">     * @param map  对应多个键值</span></span>
<span class="line"><span style="color:#24292e;">     * @param time 时间(秒)</span></span>
<span class="line"><span style="color:#24292e;">     * @return true成功 false失败</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean hmset(String key, Map&lt;String, Object&gt; map, long time) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            redisTemplate.opsForHash().putAll(key, map);</span></span>
<span class="line"><span style="color:#24292e;">            if (time &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">                expire(key, time);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            return true;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 向一张hash表中放入数据,如果不存在将创建</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param item  项</span></span>
<span class="line"><span style="color:#24292e;">     * @param value 值</span></span>
<span class="line"><span style="color:#24292e;">     * @return true 成功 false失败</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean hset(String key, String item, Object value) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            redisTemplate.opsForHash().put(key, item, value);</span></span>
<span class="line"><span style="color:#24292e;">            return true;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 向一张hash表中放入数据,如果不存在将创建</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param item  项</span></span>
<span class="line"><span style="color:#24292e;">     * @param value 值</span></span>
<span class="line"><span style="color:#24292e;">     * @param time  时间(秒) 注意:如果已存在的hash表有时间,这里将会替换原有的时间</span></span>
<span class="line"><span style="color:#24292e;">     * @return true 成功 false失败</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean hset(String key, String item, Object value, long time) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            redisTemplate.opsForHash().put(key, item, value);</span></span>
<span class="line"><span style="color:#24292e;">            if (time &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">                expire(key, time);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            return true;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 删除hash表中的值</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key  键 不能为null</span></span>
<span class="line"><span style="color:#24292e;">     * @param item 项 可以使多个 不能为null</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public void hdel(String key, Object... item) {</span></span>
<span class="line"><span style="color:#24292e;">        redisTemplate.opsForHash().delete(key, item);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 判断hash表中是否有该项的值</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key  键 不能为null</span></span>
<span class="line"><span style="color:#24292e;">     * @param item 项 不能为null</span></span>
<span class="line"><span style="color:#24292e;">     * @return true 存在 false不存在</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean hHasKey(String key, String item) {</span></span>
<span class="line"><span style="color:#24292e;">        return redisTemplate.opsForHash().hasKey(key, item);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * hash递增 如果不存在,就会创建一个 并把新增后的值返回</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key  键</span></span>
<span class="line"><span style="color:#24292e;">     * @param item 项</span></span>
<span class="line"><span style="color:#24292e;">     * @param by   要增加几(大于0)</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public double hincr(String key, String item, double by) {</span></span>
<span class="line"><span style="color:#24292e;">        return redisTemplate.opsForHash().increment(key, item, by);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * hash递减</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key  键</span></span>
<span class="line"><span style="color:#24292e;">     * @param item 项</span></span>
<span class="line"><span style="color:#24292e;">     * @param by   要减少记(小于0)</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public double hdecr(String key, String item, double by) {</span></span>
<span class="line"><span style="color:#24292e;">        return redisTemplate.opsForHash().increment(key, item, -by);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    // ============================Set(集合)=============================</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 根据key获取Set中的所有值</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key 键</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public Set&lt;Object&gt; sGet(String key) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            return redisTemplate.opsForSet().members(key);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return null;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 根据value从一个set中查询,是否存在</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param value 值</span></span>
<span class="line"><span style="color:#24292e;">     * @return true 存在 false不存在</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean sHasKey(String key, Object value) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            return redisTemplate.opsForSet().isMember(key, value);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 将数据放入set缓存</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key    键</span></span>
<span class="line"><span style="color:#24292e;">     * @param values 值 可以是多个</span></span>
<span class="line"><span style="color:#24292e;">     * @return 成功个数</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public long sSet(String key, Object... values) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            return redisTemplate.opsForSet().add(key, values);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return 0;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 将set数据放入缓存</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key    键</span></span>
<span class="line"><span style="color:#24292e;">     * @param time   时间(秒)</span></span>
<span class="line"><span style="color:#24292e;">     * @param values 值 可以是多个</span></span>
<span class="line"><span style="color:#24292e;">     * @return 成功个数</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public long sSetAndTime(String key, long time, Object... values) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            Long count = redisTemplate.opsForSet().add(key, values);</span></span>
<span class="line"><span style="color:#24292e;">            if (time &gt; 0)</span></span>
<span class="line"><span style="color:#24292e;">                expire(key, time);</span></span>
<span class="line"><span style="color:#24292e;">            return count;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return 0;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 获取set缓存的长度</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key 键</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public long sGetSetSize(String key) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            return redisTemplate.opsForSet().size(key);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return 0;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 移除值为value的</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key    键</span></span>
<span class="line"><span style="color:#24292e;">     * @param values 值 可以是多个</span></span>
<span class="line"><span style="color:#24292e;">     * @return 移除的个数</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public long setRemove(String key, Object... values) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            Long count = redisTemplate.opsForSet().remove(key, values);</span></span>
<span class="line"><span style="color:#24292e;">            return count;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return 0;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    // ===============================List(列表)=================================</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 获取list缓存的内容</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param start 开始</span></span>
<span class="line"><span style="color:#24292e;">     * @param end   结束 0 到 -1代表所有值</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public List&lt;Object&gt; lGet(String key, long start, long end) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            return redisTemplate.opsForList().range(key, start, end);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return null;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 获取list缓存的长度</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key 键</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public long lGetListSize(String key) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            return redisTemplate.opsForList().size(key);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return 0;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 通过索引 获取list中的值</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param index 索引 index&gt;=0时， 0 表头，1 第二个元素，依次类推；index&lt;0时，-1，表尾，-2倒数第二个元素，依次类推</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public Object lGetIndex(String key, long index) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            return redisTemplate.opsForList().index(key, index);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return null;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 将list放入缓存</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param value 值</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean lSet(String key, Object value) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            redisTemplate.opsForList().rightPush(key, value);</span></span>
<span class="line"><span style="color:#24292e;">            return true;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 将list放入缓存</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param value 值</span></span>
<span class="line"><span style="color:#24292e;">     * @param time  时间(秒)</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean lSet(String key, Object value, long time) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            redisTemplate.opsForList().rightPush(key, value);</span></span>
<span class="line"><span style="color:#24292e;">            if (time &gt; 0)</span></span>
<span class="line"><span style="color:#24292e;">                expire(key, time);</span></span>
<span class="line"><span style="color:#24292e;">            return true;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 将list放入缓存</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param value 值</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean lSet(String key, List&lt;Object&gt; value) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            redisTemplate.opsForList().rightPushAll(key, value);</span></span>
<span class="line"><span style="color:#24292e;">            return true;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 将list放入缓存</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param value 值</span></span>
<span class="line"><span style="color:#24292e;">     * @param time  时间(秒)</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean lSet(String key, List&lt;Object&gt; value, long time) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            redisTemplate.opsForList().rightPushAll(key, value);</span></span>
<span class="line"><span style="color:#24292e;">            if (time &gt; 0)</span></span>
<span class="line"><span style="color:#24292e;">                expire(key, time);</span></span>
<span class="line"><span style="color:#24292e;">            return true;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 根据索引修改list中的某条数据</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param index 索引</span></span>
<span class="line"><span style="color:#24292e;">     * @param value 值</span></span>
<span class="line"><span style="color:#24292e;">     * @return</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public boolean lUpdateIndex(String key, long index, Object value) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            redisTemplate.opsForList().set(key, index, value);</span></span>
<span class="line"><span style="color:#24292e;">            return true;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 移除N个值为value</span></span>
<span class="line"><span style="color:#24292e;">     *</span></span>
<span class="line"><span style="color:#24292e;">     * @param key   键</span></span>
<span class="line"><span style="color:#24292e;">     * @param count 移除多少个</span></span>
<span class="line"><span style="color:#24292e;">     * @param value 值</span></span>
<span class="line"><span style="color:#24292e;">     * @return 移除的个数</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public long lRemove(String key, long count, Object value) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            Long remove = redisTemplate.opsForList().remove(key, count, value);</span></span>
<span class="line"><span style="color:#24292e;">            return remove;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return 0;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="使用jedis" tabindex="-1">使用Jedis <a class="header-anchor" href="#使用jedis" aria-label="Permalink to &quot;使用Jedis&quot;">​</a></h2><p>依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;exclusions&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;groupId&gt;io.lettuce&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;artifactId&gt;lettuce-core&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/exclusions&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;redis.clients&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;jedis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;version&gt;2.9.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;exclusions&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;groupId&gt;io.lettuce&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;artifactId&gt;lettuce-core&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/exclusions&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;redis.clients&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;jedis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;2.9.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>因为在 springoot 2.x版本中，默认采用的是 Lettuce实现的，所以无法初始化出 Jedis的连接对象 <code>JedisConnectionFactory</code>，所以我们需要手动配置并注入：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Configuration</span></span>
<span class="line"><span style="color:#e1e4e8;">public class RedisConfig {</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Bean</span></span>
<span class="line"><span style="color:#e1e4e8;">    JedisConnectionFactory jedisConnectionFactory() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        JedisConnectionFactory factory = new JedisConnectionFactory();</span></span>
<span class="line"><span style="color:#e1e4e8;">        return factory;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Configuration</span></span>
<span class="line"><span style="color:#24292e;">public class RedisConfig {</span></span>
<span class="line"><span style="color:#24292e;">    @Bean</span></span>
<span class="line"><span style="color:#24292e;">    JedisConnectionFactory jedisConnectionFactory() {</span></span>
<span class="line"><span style="color:#24292e;">        JedisConnectionFactory factory = new JedisConnectionFactory();</span></span>
<span class="line"><span style="color:#24292e;">        return factory;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>SpringBoot Cache实现了JSR规范，方便了缓存管理，有几个概念如下：</p><p>Cache：缓存接口，定义缓存操作。如RedisCache、EhCacheCache</p><p>CacheManger：缓存管理器，管理各种缓存组件。</p><p>@Cacheable：能够根据方法的请求参数对其结果进行缓存。</p><p>@CacheEvict：清空缓存</p><p>@CachePut：更新缓存</p><p>@EnableCaching：开启基于注解的缓存</p><p>keyGenerator：缓存数据时key生成策略</p><p>serialize：缓存数据时value序列化策略</p>`,43),o=[p];function c(t,r,i,y,u,d){return n(),a("div",null,o)}const k=s(l,[["render",c]]);export{m as __pageData,k as default};
