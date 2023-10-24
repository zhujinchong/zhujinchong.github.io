import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.2516552c.js";const h=JSON.parse('{"title":"1  快速入门","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/51SpringBoot/00SpringBoot.md","filePath":"articles/Java/51SpringBoot/00SpringBoot.md","lastUpdated":1698165159000}'),p={name:"articles/Java/51SpringBoot/00SpringBoot.md"},l=e(`<h1 id="_1-快速入门" tabindex="-1">1 快速入门 <a class="header-anchor" href="#_1-快速入门" aria-label="Permalink to &quot;1  快速入门&quot;">​</a></h1><p>1、新建一个maven项目（有MySql数据库）</p><p>2、在pom.xml中导入依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">	&lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;!-- javaWeb mybatis druid mysql Junit5 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;version&gt;2.0.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;artifactId&gt;druid-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;version&gt;1.1.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;version&gt;5.1.28&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;!-- freemarker模板 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;artifactId&gt;spring-boot-starter-freemarker&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;!-- 热部署：Ctrl+F9 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;optional&gt;true&lt;/optional&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/dependencies&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">	&lt;dependencies&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;!-- javaWeb mybatis druid mysql Junit5 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;groupId&gt;org.mybatis.spring.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;artifactId&gt;mybatis-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;version&gt;2.0.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;artifactId&gt;druid-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;version&gt;1.1.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;groupId&gt;mysql&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;version&gt;5.1.28&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;!-- freemarker模板 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;artifactId&gt;spring-boot-starter-freemarker&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;!-- 热部署：Ctrl+F9 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;optional&gt;true&lt;/optional&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/dependencies&gt;</span></span></code></pre></div><p>以及</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;parent&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;version&gt;2.0.0.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/parent&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;parent&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;2.0.0.RELEASE&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/parent&gt;</span></span></code></pre></div><p>3、在resources下面修改/新建配置文件application.properties</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 端口（默认）</span></span>
<span class="line"><span style="color:#e1e4e8;">server.port=8080</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># mysql</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.datasource.url=jdbc:mysql:///test?useUnicode=true&amp;characterEncoding=utf-8</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.datasource.username=root</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.datasource.password=root</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.datasource.type=com.alibaba.druid.pool.DruidDataSource</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># mybatis 这里的classpath就是resources目录</span></span>
<span class="line"><span style="color:#e1e4e8;">mybatis.mapper-locations=classpath:mapper/*.xml</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># freemarker（默认）</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.freemarker.cache=false</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.freemarker.charset=UTF-8</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.freemarker.template-loader-path=classpath:/templates/</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.freemarker.suffix=.ftl</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 端口（默认）</span></span>
<span class="line"><span style="color:#24292e;">server.port=8080</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># mysql</span></span>
<span class="line"><span style="color:#24292e;">spring.datasource.url=jdbc:mysql:///test?useUnicode=true&amp;characterEncoding=utf-8</span></span>
<span class="line"><span style="color:#24292e;">spring.datasource.username=root</span></span>
<span class="line"><span style="color:#24292e;">spring.datasource.password=root</span></span>
<span class="line"><span style="color:#24292e;">spring.datasource.type=com.alibaba.druid.pool.DruidDataSource</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># mybatis 这里的classpath就是resources目录</span></span>
<span class="line"><span style="color:#24292e;">mybatis.mapper-locations=classpath:mapper/*.xml</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># freemarker（默认）</span></span>
<span class="line"><span style="color:#24292e;">spring.freemarker.cache=false</span></span>
<span class="line"><span style="color:#24292e;">spring.freemarker.charset=UTF-8</span></span>
<span class="line"><span style="color:#24292e;">spring.freemarker.template-loader-path=classpath:/templates/</span></span>
<span class="line"><span style="color:#24292e;">spring.freemarker.suffix=.ftl</span></span></code></pre></div><p>4、新建com/MainApp.java启动类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#e1e4e8;">public class MainApp {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        SpringApplication.run(MainApp.class, args);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#24292e;">public class MainApp {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        SpringApplication.run(MainApp.class, args);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>5、新建com/demo/DemoController.java业务类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Controller</span></span>
<span class="line"><span style="color:#e1e4e8;">@RequestMapping(&quot;/demo&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public class DemoController {</span></span>
<span class="line"><span style="color:#e1e4e8;">    @GetMapping(&quot;/hello&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    @ResponseBody</span></span>
<span class="line"><span style="color:#e1e4e8;">    public String hello() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return &quot;hello world&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Controller</span></span>
<span class="line"><span style="color:#24292e;">@RequestMapping(&quot;/demo&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public class DemoController {</span></span>
<span class="line"><span style="color:#24292e;">    @GetMapping(&quot;/hello&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    @ResponseBody</span></span>
<span class="line"><span style="color:#24292e;">    public String hello() {</span></span>
<span class="line"><span style="color:#24292e;">        return &quot;hello world&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>6、启动启动类，在浏览器访问<code>localhost:8080/demo/hello</code></p><h1 id="_2-配置文件" tabindex="-1">2 配置文件 <a class="header-anchor" href="#_2-配置文件" aria-label="Permalink to &quot;2  配置文件&quot;">​</a></h1><h2 id="配置文件位置" tabindex="-1">配置文件位置 <a class="header-anchor" href="#配置文件位置" aria-label="Permalink to &quot;配置文件位置&quot;">​</a></h2><p>配置文件位置（按优先级排序）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1. ./config/	项目根目录下的config目录下</span></span>
<span class="line"><span style="color:#e1e4e8;">2. ./			项目根目录下</span></span>
<span class="line"><span style="color:#e1e4e8;">3. classpath:/config/	即项目的resources目录下的config下</span></span>
<span class="line"><span style="color:#e1e4e8;">4. classpath:/			即项目的resources下</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. ./config/	项目根目录下的config目录下</span></span>
<span class="line"><span style="color:#24292e;">2. ./			项目根目录下</span></span>
<span class="line"><span style="color:#24292e;">3. classpath:/config/	即项目的resources目录下的config下</span></span>
<span class="line"><span style="color:#24292e;">4. classpath:/			即项目的resources下</span></span></code></pre></div><h2 id="properties赋值" tabindex="-1">properties赋值 <a class="header-anchor" href="#properties赋值" aria-label="Permalink to &quot;properties赋值&quot;">​</a></h2><p>这里有一个配置文件<code>person.properties</code>，现在要赋值给属性。</p><p>这样看起来有些麻烦</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Component</span></span>
<span class="line"><span style="color:#e1e4e8;">@PropertySource(value = &quot;person.properties&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public class Person {</span></span>
<span class="line"><span style="color:#e1e4e8;">	// Value里面其实是SpEL,即Spring的表达式语言</span></span>
<span class="line"><span style="color:#e1e4e8;">	@Value(&quot;\${name}&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    private String name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Value(&quot;\${age}&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    private Integer age;</span></span>
<span class="line"><span style="color:#e1e4e8;">    Getter/Setter</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Component</span></span>
<span class="line"><span style="color:#24292e;">@PropertySource(value = &quot;person.properties&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public class Person {</span></span>
<span class="line"><span style="color:#24292e;">	// Value里面其实是SpEL,即Spring的表达式语言</span></span>
<span class="line"><span style="color:#24292e;">	@Value(&quot;\${name}&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    private String name;</span></span>
<span class="line"><span style="color:#24292e;">    @Value(&quot;\${age}&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    private Integer age;</span></span>
<span class="line"><span style="color:#24292e;">    Getter/Setter</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="yaml语法" tabindex="-1">yaml语法 <a class="header-anchor" href="#yaml语法" aria-label="Permalink to &quot;yaml语法&quot;">​</a></h2><p>基本语法：</p><ul><li>大小写敏感</li><li>缩进表示层级（缩进只允许用tab，不许用空格）</li><li>缩进空格数不重要，只要层级对其即可</li><li>#表示注释</li></ul><p>支持的数据类型：</p><ul><li>数值、字符串</li><li>数组</li><li>对象：键值对的集合</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 层级</span></span>
<span class="line"><span style="color:#e1e4e8;">key1:</span></span>
<span class="line"><span style="color:#e1e4e8;">	child-key1: value1</span></span>
<span class="line"><span style="color:#e1e4e8;"># 数组</span></span>
<span class="line"><span style="color:#e1e4e8;">myList: [value1, value2, value3]</span></span>
<span class="line"><span style="color:#e1e4e8;"># 复杂的对象</span></span>
<span class="line"><span style="color:#e1e4e8;">myObj:</span></span>
<span class="line"><span style="color:#e1e4e8;">	-</span></span>
<span class="line"><span style="color:#e1e4e8;">		id: 1</span></span>
<span class="line"><span style="color:#e1e4e8;">		name: xx</span></span>
<span class="line"><span style="color:#e1e4e8;">    -</span></span>
<span class="line"><span style="color:#e1e4e8;">    	id: 2</span></span>
<span class="line"><span style="color:#e1e4e8;">    	name: yy</span></span>
<span class="line"><span style="color:#e1e4e8;"># 布尔大写 小写 都可以</span></span>
<span class="line"><span style="color:#e1e4e8;">booleanKey: true</span></span>
<span class="line"><span style="color:#e1e4e8;"># 字符串单引号 双引号 没有引号 都可以</span></span>
<span class="line"><span style="color:#e1e4e8;">stringkey: &#39;hello world&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"># 日期必须使用ISO 8601格式 &#39;yyyy-MM-dd&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">dateKey: 2018-02-17</span></span>
<span class="line"><span style="color:#e1e4e8;"># 时间使用ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区</span></span>
<span class="line"><span style="color:#e1e4e8;">dateTime: 2018-02-17T15:02:31+08:00</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 层级</span></span>
<span class="line"><span style="color:#24292e;">key1:</span></span>
<span class="line"><span style="color:#24292e;">	child-key1: value1</span></span>
<span class="line"><span style="color:#24292e;"># 数组</span></span>
<span class="line"><span style="color:#24292e;">myList: [value1, value2, value3]</span></span>
<span class="line"><span style="color:#24292e;"># 复杂的对象</span></span>
<span class="line"><span style="color:#24292e;">myObj:</span></span>
<span class="line"><span style="color:#24292e;">	-</span></span>
<span class="line"><span style="color:#24292e;">		id: 1</span></span>
<span class="line"><span style="color:#24292e;">		name: xx</span></span>
<span class="line"><span style="color:#24292e;">    -</span></span>
<span class="line"><span style="color:#24292e;">    	id: 2</span></span>
<span class="line"><span style="color:#24292e;">    	name: yy</span></span>
<span class="line"><span style="color:#24292e;"># 布尔大写 小写 都可以</span></span>
<span class="line"><span style="color:#24292e;">booleanKey: true</span></span>
<span class="line"><span style="color:#24292e;"># 字符串单引号 双引号 没有引号 都可以</span></span>
<span class="line"><span style="color:#24292e;">stringkey: &#39;hello world&#39;</span></span>
<span class="line"><span style="color:#24292e;"># 日期必须使用ISO 8601格式 &#39;yyyy-MM-dd&#39;</span></span>
<span class="line"><span style="color:#24292e;">dateKey: 2018-02-17</span></span>
<span class="line"><span style="color:#24292e;"># 时间使用ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区</span></span>
<span class="line"><span style="color:#24292e;">dateTime: 2018-02-17T15:02:31+08:00</span></span></code></pre></div><h2 id="yaml赋值" tabindex="-1">yaml赋值 <a class="header-anchor" href="#yaml赋值" aria-label="Permalink to &quot;yaml赋值&quot;">​</a></h2><p>配置文件有：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">person:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: zhangsan</span></span>
<span class="line"><span style="color:#e1e4e8;">  age: 18</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">person:</span></span>
<span class="line"><span style="color:#24292e;">  name: zhangsan</span></span>
<span class="line"><span style="color:#24292e;">  age: 18</span></span></code></pre></div><p>之前给属性赋值是通过注解<code>@Value</code></p><p>现在可以：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 只有组件在这个容器中，才可以使用ConfigurationProperties注解</span></span>
<span class="line"><span style="color:#e1e4e8;">@Component</span></span>
<span class="line"><span style="color:#e1e4e8;">@ConfigurationProperties(prefix = &quot;person&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public class Person {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private String name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    private Integer age;</span></span>
<span class="line"><span style="color:#e1e4e8;">    Getter/Setter</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 只有组件在这个容器中，才可以使用ConfigurationProperties注解</span></span>
<span class="line"><span style="color:#24292e;">@Component</span></span>
<span class="line"><span style="color:#24292e;">@ConfigurationProperties(prefix = &quot;person&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public class Person {</span></span>
<span class="line"><span style="color:#24292e;">    private String name;</span></span>
<span class="line"><span style="color:#24292e;">    private Integer age;</span></span>
<span class="line"><span style="color:#24292e;">    Getter/Setter</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>然后验证：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">private Person person;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">@GetMapping(&quot;/person&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">@ResponseBody</span></span>
<span class="line"><span style="color:#e1e4e8;">public Person person() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return person;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Autowired</span></span>
<span class="line"><span style="color:#24292e;">private Person person;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">@GetMapping(&quot;/person&quot;)</span></span>
<span class="line"><span style="color:#24292e;">@ResponseBody</span></span>
<span class="line"><span style="color:#24292e;">public Person person() {</span></span>
<span class="line"><span style="color:#24292e;">    return person;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="yaml扩展" tabindex="-1">yaml扩展 <a class="header-anchor" href="#yaml扩展" aria-label="Permalink to &quot;yaml扩展&quot;">​</a></h2><p>yaml支持复杂对象、SpEL、松散绑定、JSR303数据校验</p><p>SpEL：spring表达式语言，如<code>random</code>可以赋值随机数。</p><p>松散绑定:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">如果配置里是first-name:xxx</span></span>
<span class="line"><span style="color:#e1e4e8;">属性名是firstName也可以识别</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">如果配置里是first-name:xxx</span></span>
<span class="line"><span style="color:#24292e;">属性名是firstName也可以识别</span></span></code></pre></div><h2 id="jsr303数据校验" tabindex="-1">JSR303数据校验 <a class="header-anchor" href="#jsr303数据校验" aria-label="Permalink to &quot;JSR303数据校验&quot;">​</a></h2><p>如果配置是person.email: <a href="mailto:xx@mail.com" target="_blank" rel="noreferrer">xx@mail.com</a> 此时，可以校验配置文件的数据的格式, 如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Component</span></span>
<span class="line"><span style="color:#e1e4e8;">@ConfigurationProperties(perefix = &quot;person&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">@Validated // 数据校验</span></span>
<span class="line"><span style="color:#e1e4e8;">public class Person {</span></span>
<span class="line"><span style="color:#e1e4e8;">	@Email</span></span>
<span class="line"><span style="color:#e1e4e8;">	private String email;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Component</span></span>
<span class="line"><span style="color:#24292e;">@ConfigurationProperties(perefix = &quot;person&quot;)</span></span>
<span class="line"><span style="color:#24292e;">@Validated // 数据校验</span></span>
<span class="line"><span style="color:#24292e;">public class Person {</span></span>
<span class="line"><span style="color:#24292e;">	@Email</span></span>
<span class="line"><span style="color:#24292e;">	private String email;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>这里有许多注解及参数，不讲。</p><h2 id="多环境配置" tabindex="-1">多环境配置 <a class="header-anchor" href="#多环境配置" aria-label="Permalink to &quot;多环境配置&quot;">​</a></h2><p>一般需要开发环境、测试环境，现有三个配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">appllication.properties</span></span>
<span class="line"><span style="color:#e1e4e8;">application-dev.properties</span></span>
<span class="line"><span style="color:#e1e4e8;">application-test.properties</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">appllication.properties</span></span>
<span class="line"><span style="color:#24292e;">application-dev.properties</span></span>
<span class="line"><span style="color:#24292e;">application-test.properties</span></span></code></pre></div><p>我们可以在application.properties中配置使用哪个配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 只需要配置文件-后面的字符即可激活</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.profiles.active=dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 只需要配置文件-后面的字符即可激活</span></span>
<span class="line"><span style="color:#24292e;">spring.profiles.active=dev</span></span></code></pre></div><p>如果是yaml文件，各个环境配置可以写在一个文件里面，用-分割</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server:</span></span>
<span class="line"><span style="color:#e1e4e8;">	port: 8081</span></span>
<span class="line"><span style="color:#e1e4e8;">spring:</span></span>
<span class="line"><span style="color:#e1e4e8;">	profiles:</span></span>
<span class="line"><span style="color:#e1e4e8;">		active: dev</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">spring:</span></span>
<span class="line"><span style="color:#e1e4e8;">	profiles: dev</span></span>
<span class="line"><span style="color:#e1e4e8;">server:</span></span>
<span class="line"><span style="color:#e1e4e8;">	port: 8082</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">spring:</span></span>
<span class="line"><span style="color:#e1e4e8;">	profiles: test</span></span>
<span class="line"><span style="color:#e1e4e8;">server:</span></span>
<span class="line"><span style="color:#e1e4e8;">	port: 8083</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">server:</span></span>
<span class="line"><span style="color:#24292e;">	port: 8081</span></span>
<span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">	profiles:</span></span>
<span class="line"><span style="color:#24292e;">		active: dev</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">	profiles: dev</span></span>
<span class="line"><span style="color:#24292e;">server:</span></span>
<span class="line"><span style="color:#24292e;">	port: 8082</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">	profiles: test</span></span>
<span class="line"><span style="color:#24292e;">server:</span></span>
<span class="line"><span style="color:#24292e;">	port: 8083</span></span></code></pre></div><h1 id="_3-自动配置原理" tabindex="-1">3 自动配置原理 <a class="header-anchor" href="#_3-自动配置原理" aria-label="Permalink to &quot;3  自动配置原理&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1. SpringBoot启动会加载大量的自动配置类</span></span>
<span class="line"><span style="color:#e1e4e8;">2. 自动配置类，会自动配置用到的组件</span></span>
<span class="line"><span style="color:#e1e4e8;">3. 自动配置类，会从properties类中获取某些属性（默认属性、或读配置文件等）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">所以，我们一般先引入依赖（自动配置类生效），在配置文件中添加配置，或者自定义某个配置类。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. SpringBoot启动会加载大量的自动配置类</span></span>
<span class="line"><span style="color:#24292e;">2. 自动配置类，会自动配置用到的组件</span></span>
<span class="line"><span style="color:#24292e;">3. 自动配置类，会从properties类中获取某些属性（默认属性、或读配置文件等）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">所以，我们一般先引入依赖（自动配置类生效），在配置文件中添加配置，或者自定义某个配置类。</span></span></code></pre></div><p>自动配置类一般为：<code>xxxAutoConfiguration</code></p><p>其获取的属性一般在：<code>xxxProperties</code>中，所以可以根据此类，在配置文件修改配置。</p><h1 id="_4-web开发" tabindex="-1">4 web开发 <a class="header-anchor" href="#_4-web开发" aria-label="Permalink to &quot;4  web开发&quot;">​</a></h1><h2 id="静态资源位置" tabindex="-1">静态资源位置 <a class="header-anchor" href="#静态资源位置" aria-label="Permalink to &quot;静态资源位置&quot;">​</a></h2><p>web的自动配置类是<code>WebMvcAutoConfiguration</code></p><p>该类的方法<code>addResourceHandlers</code>，该方法在加载静态资源顺序：（按优先级）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/webjars/**						(这里需要通过localhost:8080/webjars/访问)</span></span>
<span class="line"><span style="color:#e1e4e8;">classpath:/META-INF/resources/  (这里的classpath就是项目的resouces目录)</span></span>
<span class="line"><span style="color:#e1e4e8;">classpath:/resources/</span></span>
<span class="line"><span style="color:#e1e4e8;">classpath:/static/</span></span>
<span class="line"><span style="color:#e1e4e8;">classpath:/public/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/webjars/**						(这里需要通过localhost:8080/webjars/访问)</span></span>
<span class="line"><span style="color:#24292e;">classpath:/META-INF/resources/  (这里的classpath就是项目的resouces目录)</span></span>
<span class="line"><span style="color:#24292e;">classpath:/resources/</span></span>
<span class="line"><span style="color:#24292e;">classpath:/static/</span></span>
<span class="line"><span style="color:#24292e;">classpath:/public/</span></span></code></pre></div><p>当然，还可以在配置文件中添加静态资源位置（一般不同）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">spring.mvc.static-path-pattern=classpath:/static/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spring.mvc.static-path-pattern=classpath:/static/</span></span></code></pre></div><h2 id="首页和图标" tabindex="-1">首页和图标 <a class="header-anchor" href="#首页和图标" aria-label="Permalink to &quot;首页和图标&quot;">​</a></h2><p>首页：在上述静态资源位置放入index.html即可，或者通过Controller返回。</p><p>图标（网页Title处）：首先关闭默认图标，然后将<code>favicon.ico</code>和index放一块即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">spring.mvc.favicon.enabled=false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spring.mvc.favicon.enabled=false</span></span></code></pre></div><h2 id="模板引擎" tabindex="-1">模板引擎 <a class="header-anchor" href="#模板引擎" aria-label="Permalink to &quot;模板引擎&quot;">​</a></h2><p>jsp是一个模板引擎，但是不方便。此外还有freemarker和Thymeleaf，想使用模板，先引入依赖。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-boot-starter-freemarker&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-freemarker&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>首先在<code>classpath:/templates/</code>目录下创建一个<code>index.ftl</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;Hello&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;h1&gt;\${name}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;Hello&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;h1&gt;\${name}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p>然后创建接口</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@GetMapping(&quot;/index&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public String index(Model model) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    model.addAttribute(&quot;name&quot;, &quot;zhangsan&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return &quot;index&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@GetMapping(&quot;/index&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public String index(Model model) {</span></span>
<span class="line"><span style="color:#24292e;">    model.addAttribute(&quot;name&quot;, &quot;zhangsan&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    return &quot;index&quot;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>就可以用了</p><h1 id="_5-拦截器" tabindex="-1">5 拦截器 <a class="header-anchor" href="#_5-拦截器" aria-label="Permalink to &quot;5  拦截器&quot;">​</a></h1><p>拦截所有页面、不包括静态资源、实现使用登录拦截。</p><p>1、定义登录，并设置session</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@PostMapping(&quot;/doLogin&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public String userLogin(String username, String password, Model model, HttpSession session) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    User user = userService.getUserByUserName(username);</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (user != null &amp;&amp; user.getPassWord().equals(password)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        session.setAttribute(&quot;loginUser&quot;, user);</span></span>
<span class="line"><span style="color:#e1e4e8;">        return &quot;/index&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">        model.addAttribute(&quot;msg&quot;, &quot;用户名或密码错误&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        return &quot;/login&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@PostMapping(&quot;/doLogin&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public String userLogin(String username, String password, Model model, HttpSession session) {</span></span>
<span class="line"><span style="color:#24292e;">    User user = userService.getUserByUserName(username);</span></span>
<span class="line"><span style="color:#24292e;">    if (user != null &amp;&amp; user.getPassWord().equals(password)) {</span></span>
<span class="line"><span style="color:#24292e;">        session.setAttribute(&quot;loginUser&quot;, user);</span></span>
<span class="line"><span style="color:#24292e;">        return &quot;/index&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">        model.addAttribute(&quot;msg&quot;, &quot;用户名或密码错误&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        return &quot;/login&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>2、定义拦截器，并判断session。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class LoginHandlerInterceptor implements HandlerInterceptor {</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {</span></span>
<span class="line"><span style="color:#e1e4e8;">        User loginUser = (User) request.getSession().getAttribute(&quot;loginUser&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (loginUser == null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            request.setAttribute(&quot;unLogin&quot;, true);</span></span>
<span class="line"><span style="color:#e1e4e8;">            request.getRequestDispatcher(&quot;/login&quot;).forward(request, response);</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class LoginHandlerInterceptor implements HandlerInterceptor {</span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {</span></span>
<span class="line"><span style="color:#24292e;">        User loginUser = (User) request.getSession().getAttribute(&quot;loginUser&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        if (loginUser == null) {</span></span>
<span class="line"><span style="color:#24292e;">            request.setAttribute(&quot;unLogin&quot;, true);</span></span>
<span class="line"><span style="color:#24292e;">            request.getRequestDispatcher(&quot;/login&quot;).forward(request, response);</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            return true;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>3、定义WebMvcConfig，并将拦截器注册到Mvc中</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Configuration</span></span>
<span class="line"><span style="color:#e1e4e8;">public class MyWebMvcConfig implements WebMvcConfigurer {</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void addInterceptors(InterceptorRegistry registry) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        registry.addInterceptor(new LoginHandlerInterceptor())</span></span>
<span class="line"><span style="color:#e1e4e8;">                .addPathPatterns(&quot;/**&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">                .excludePathPatterns(&quot;/&quot;, &quot;/index&quot;, &quot;/login&quot;, &quot;/register&quot;, &quot;/doLogin&quot;, &quot;/bootstrap/**&quot;, &quot;/img/**&quot;, &quot;/common/**&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Configuration</span></span>
<span class="line"><span style="color:#24292e;">public class MyWebMvcConfig implements WebMvcConfigurer {</span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public void addInterceptors(InterceptorRegistry registry) {</span></span>
<span class="line"><span style="color:#24292e;">        registry.addInterceptor(new LoginHandlerInterceptor())</span></span>
<span class="line"><span style="color:#24292e;">                .addPathPatterns(&quot;/**&quot;)</span></span>
<span class="line"><span style="color:#24292e;">                .excludePathPatterns(&quot;/&quot;, &quot;/index&quot;, &quot;/login&quot;, &quot;/register&quot;, &quot;/doLogin&quot;, &quot;/bootstrap/**&quot;, &quot;/img/**&quot;, &quot;/common/**&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>4、前端页面判断freemarker</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;#if (unLogin??)&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;a href=&quot;xx&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;#else&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;a href=&quot;yy&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;#/if&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;#if (unLogin??)&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;a href=&quot;xx&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;#else&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;a href=&quot;yy&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;#/if&gt;</span></span></code></pre></div><h1 id="_6-整合mybatis" tabindex="-1">6 整合mybatis <a class="header-anchor" href="#_6-整合mybatis" aria-label="Permalink to &quot;6  整合mybatis&quot;">​</a></h1><p>整合数据库、连接池、mybatis，使用<code>快速入门</code>的依赖。</p><p>1、重写dao，改成xxMapper接口</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Mapper</span></span>
<span class="line"><span style="color:#e1e4e8;">@Repository</span></span>
<span class="line"><span style="color:#e1e4e8;">public interface UserMapper {</span></span>
<span class="line"><span style="color:#e1e4e8;">    Integer addUser(User user);</span></span>
<span class="line"><span style="color:#e1e4e8;">    Integer updateUser(User user);</span></span>
<span class="line"><span style="color:#e1e4e8;">    Integer deleteUserById(@Param(&quot;id&quot;) Integer id);</span></span>
<span class="line"><span style="color:#e1e4e8;">    User getUserByUserName(@Param(&quot;username&quot;) String userName);</span></span>
<span class="line"><span style="color:#e1e4e8;">    List&lt;User&gt; getUserList();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Mapper</span></span>
<span class="line"><span style="color:#24292e;">@Repository</span></span>
<span class="line"><span style="color:#24292e;">public interface UserMapper {</span></span>
<span class="line"><span style="color:#24292e;">    Integer addUser(User user);</span></span>
<span class="line"><span style="color:#24292e;">    Integer updateUser(User user);</span></span>
<span class="line"><span style="color:#24292e;">    Integer deleteUserById(@Param(&quot;id&quot;) Integer id);</span></span>
<span class="line"><span style="color:#24292e;">    User getUserByUserName(@Param(&quot;username&quot;) String userName);</span></span>
<span class="line"><span style="color:#24292e;">    List&lt;User&gt; getUserList();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>2、在配置文件中添加mapper.xml，地址一般写为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mybatis.mapper-locations=classpath:mapper/*.xml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mybatis.mapper-locations=classpath:mapper/*.xml</span></span></code></pre></div><p>3、在mapper中新建xx.xml文件，写sql语句</p><div class="language-\\ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">\\</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE mapper</span></span>
<span class="line"><span style="color:#e1e4e8;">        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;mapper namespace=&quot;com.yly.manage.mapper.CategoryMapper&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;select id=&quot;getCategoryList&quot; resultType=&quot;com.yly.manage.pojo.Category&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        select * from category</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/select&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;insert id=&quot;addCategory&quot; parameterType=&quot;com.yly.manage.pojo.Category&quot; useGeneratedKeys=&quot;true&quot; keyProperty=&quot;id&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        insert into category (name,ref_id)</span></span>
<span class="line"><span style="color:#e1e4e8;">        values (#{name},#{ref_id})</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/insert&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;delete id=&quot;deleteCategoryById&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        delete from category where id = #{id};</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/delete&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/mapper&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!DOCTYPE mapper</span></span>
<span class="line"><span style="color:#24292e;">        PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span></span>
<span class="line"><span style="color:#24292e;">        &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;mapper namespace=&quot;com.yly.manage.mapper.CategoryMapper&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;select id=&quot;getCategoryList&quot; resultType=&quot;com.yly.manage.pojo.Category&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        select * from category</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/select&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;insert id=&quot;addCategory&quot; parameterType=&quot;com.yly.manage.pojo.Category&quot; useGeneratedKeys=&quot;true&quot; keyProperty=&quot;id&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        insert into category (name,ref_id)</span></span>
<span class="line"><span style="color:#24292e;">        values (#{name},#{ref_id})</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/insert&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;delete id=&quot;deleteCategoryById&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        delete from category where id = #{id};</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/delete&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/mapper&gt;</span></span></code></pre></div><h1 id="_7-测试" tabindex="-1">7 测试 <a class="header-anchor" href="#_7-测试" aria-label="Permalink to &quot;7  测试&quot;">​</a></h1><p>引入测试依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;scope&gt;test&lt;/scope&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>测试文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@RunWith(SpringRunner.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">@SpringBootTest(classes = MainApp.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">public class DemoTest {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    private TestService testService;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Test</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void test01() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        //</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@RunWith(SpringRunner.class)</span></span>
<span class="line"><span style="color:#24292e;">@SpringBootTest(classes = MainApp.class)</span></span>
<span class="line"><span style="color:#24292e;">public class DemoTest {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private TestService testService;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    public void test01() {</span></span>
<span class="line"><span style="color:#24292e;">        //</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,97),t=[l];function o(c,r,i,d,y,g){return a(),n("div",null,t)}const m=s(p,[["render",o]]);export{h as __pageData,m as default};
