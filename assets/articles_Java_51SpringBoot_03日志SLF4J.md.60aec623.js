import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const q=JSON.parse('{"title":"SLF4J+logback","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/51SpringBoot/03日志SLF4J.md","filePath":"articles/Java/51SpringBoot/03日志SLF4J.md","lastUpdated":1698198415000}'),l={name:"articles/Java/51SpringBoot/03日志SLF4J.md"},t=e(`<h1 id="slf4j-logback" tabindex="-1">SLF4J+logback <a class="header-anchor" href="#slf4j-logback" aria-label="Permalink to &quot;SLF4J+logback&quot;">​</a></h1><h2 id="日志简介" tabindex="-1">日志简介 <a class="header-anchor" href="#日志简介" aria-label="Permalink to &quot;日志简介&quot;">​</a></h2><p>Java标准库提供了 java.util.logging 来实现日志功能，但是管理不方便。</p><p>Commons Logging是一个第三方日志库，它是由Apache创建的日志模块。它的特色是，它可以挂接不同的日志系统，并通过配置文件指定挂接的日志系统。默 认情况下，Commons Loggin自动搜索并使用Log4j（Log4j是另一个流行的日志系统），如果没有找 到Log4j，再使用JDK Logging。</p><p>Commons Logging和Log4j这一对好基友，它们一个负责充当日志API，一个负责实现日 志底层，搭配使用非常便于开发。</p><p>因为他们不开源，所以有人实现了SLF4J接口，有人实现了logback日志系统。</p><p>并且SpringBoot2自带，且默认使用他们。</p><h2 id="快速入门" tabindex="-1">快速入门 <a class="header-anchor" href="#快速入门" aria-label="Permalink to &quot;快速入门&quot;">​</a></h2><p>在resources中新建文件logback-spring.xml，此名称springboot会自动识别加载。</p><p>logback-spring.xml内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!--日志配置 参考 https://zhuanlan.zhihu.com/p/339741978 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;configuration&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!--直接定义属性--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!--log文件位置--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;property name=&quot;logFile&quot; value=&quot;logs/mutest&quot;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;property name=&quot;maxFileSize&quot; value=&quot;30MB&quot;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!--控制台日志--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;appender name=&quot;STDOUT&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;pattern&gt;%d [%thread] %-5level %logger{50} -[%file:%line]- %msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;charset&gt;UTF-8&lt;/charset&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/appender&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!--滚动文件日志：先将日志记录到指定文件，当符合某个条件时，将日志记录到其他文件。--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;appender name=&quot;fileLog&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;file&gt;\${logFile}.log&lt;/file&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;!--日志输出格式--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;pattern&gt;%d [%thread] %-5level -[%file:%line]- %msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;charset&gt;UTF-8&lt;/charset&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;!--每天生成一个新的活动日志文件，旧的日志归档，后缀名为2019.08.12这种格式--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;fileNamePattern&gt;\${logFile}.%d{yyyy-MM-dd}.%i.log&lt;/fileNamePattern&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;!--活动日志文件最大值，超过这个值将产生新日志文件--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;maxFileSize&gt;\${maxFileSize}&lt;/maxFileSize&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;!--只保留最近3天的日志--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;maxHistory&gt;3&lt;/maxHistory&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;!--用来指定日志文件的上限大小，那么到了这个值，就会删除旧的日志--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            &lt;totalSizeCap&gt;200MB&lt;/totalSizeCap&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/rollingPolicy&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/appender&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!--日志输出级别，默认是debug--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;root level=&quot;info&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/root&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/configuration&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;?xml version=&#39;1.0&#39; encoding=&#39;UTF-8&#39;?&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--日志配置 参考 https://zhuanlan.zhihu.com/p/339741978 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;configuration&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--直接定义属性--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--log文件位置--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;property name=&quot;logFile&quot; value=&quot;logs/mutest&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;property name=&quot;maxFileSize&quot; value=&quot;30MB&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--控制台日志--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;appender name=&quot;STDOUT&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;pattern&gt;%d [%thread] %-5level %logger{50} -[%file:%line]- %msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;charset&gt;UTF-8&lt;/charset&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/appender&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--滚动文件日志：先将日志记录到指定文件，当符合某个条件时，将日志记录到其他文件。--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;appender name=&quot;fileLog&quot; class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;file&gt;\${logFile}.log&lt;/file&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;!--日志输出格式--&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;pattern&gt;%d [%thread] %-5level -[%file:%line]- %msg%n&lt;/pattern&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;charset&gt;UTF-8&lt;/charset&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/encoder&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;!--每天生成一个新的活动日志文件，旧的日志归档，后缀名为2019.08.12这种格式--&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;fileNamePattern&gt;\${logFile}.%d{yyyy-MM-dd}.%i.log&lt;/fileNamePattern&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;!--活动日志文件最大值，超过这个值将产生新日志文件--&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;maxFileSize&gt;\${maxFileSize}&lt;/maxFileSize&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;!--只保留最近3天的日志--&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;maxHistory&gt;3&lt;/maxHistory&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;!--用来指定日志文件的上限大小，那么到了这个值，就会删除旧的日志--&gt;</span></span>
<span class="line"><span style="color:#24292e;">            &lt;totalSizeCap&gt;200MB&lt;/totalSizeCap&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/rollingPolicy&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/appender&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;!--日志输出级别，默认是debug--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;root level=&quot;info&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/root&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/configuration&gt;</span></span></code></pre></div><p>测试：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@GetMapping(&quot;/log&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">@ResponseBody</span></span>
<span class="line"><span style="color:#e1e4e8;">public String logTest() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    String name = &quot;tom&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    int age = 18;</span></span>
<span class="line"><span style="color:#e1e4e8;">    logger.info(&quot;logTest, name:{}, age{}&quot;, name, age);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@GetMapping(&quot;/log&quot;)</span></span>
<span class="line"><span style="color:#24292e;">@ResponseBody</span></span>
<span class="line"><span style="color:#24292e;">public String logTest() {</span></span>
<span class="line"><span style="color:#24292e;">    String name = &quot;tom&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    int age = 18;</span></span>
<span class="line"><span style="color:#24292e;">    logger.info(&quot;logTest, name:{}, age{}&quot;, name, age);</span></span>
<span class="line"><span style="color:#24292e;">    return &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="配置文件详解" tabindex="-1">配置文件详解 <a class="header-anchor" href="#配置文件详解" aria-label="Permalink to &quot;配置文件详解&quot;">​</a></h2>`,14),p=[t];function o(c,i,r,g,y,u){return n(),a("div",null,p)}const h=s(l,[["render",o]]);export{q as __pageData,h as default};
