import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.2516552c.js";const h=JSON.parse('{"title":"FreeMarker","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/51SpringBoot/01Freemarker模板.md","filePath":"articles/Java/51SpringBoot/01Freemarker模板.md","lastUpdated":1698165159000}'),l={name:"articles/Java/51SpringBoot/01Freemarker模板.md"},p=n(`<h1 id="freemarker" tabindex="-1">FreeMarker <a class="header-anchor" href="#freemarker" aria-label="Permalink to &quot;FreeMarker&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>FreeMarker是一个用Java语言编写的模板引擎，它基于模板来生成文本输出。FreeMarker与Web容器无关，即在Web运行时，它并不知道Servlet或HTTP。它不仅可以用作表现层的实现技术，而且还可以用于生成XML，JSP或Java 等。</p><h2 id="快速入门" tabindex="-1">快速入门 <a class="header-anchor" href="#快速入门" aria-label="Permalink to &quot;快速入门&quot;">​</a></h2><p>FreeMarker是一个模板引擎，要想使用，先导入Maven依赖：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;groupId&gt;freemarker&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;artifactId&gt;freemarker&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;version&gt;2.3.9&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;groupId&gt;freemarker&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;artifactId&gt;freemarker&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;version&gt;2.3.9&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>如果是SpringBoot，导入如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;artifactId&gt;spring-boot-starter-freemarker&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;artifactId&gt;spring-boot-starter-freemarker&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>配置文件如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 都是默认的不配也行</span></span>
<span class="line"><span style="color:#e1e4e8;"># 模板存放路径</span></span>
<span class="line"><span style="color:#e1e4e8;">freemarker.template-loader-path=classpath:/templates</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.freemarker.cache=false</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.freemarker.charset=UTF-8</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.freemarker.check-template-location=true</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.freemarker.content-type=text/html</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.freemarker.expose-request-attributes=true</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.freemarker.expose-session-attributes=true</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.freemarker.request-context-attribute=request</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.freemarker.suffix=.ftl</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 都是默认的不配也行</span></span>
<span class="line"><span style="color:#24292e;"># 模板存放路径</span></span>
<span class="line"><span style="color:#24292e;">freemarker.template-loader-path=classpath:/templates</span></span>
<span class="line"><span style="color:#24292e;">spring.freemarker.cache=false</span></span>
<span class="line"><span style="color:#24292e;">spring.freemarker.charset=UTF-8</span></span>
<span class="line"><span style="color:#24292e;">spring.freemarker.check-template-location=true</span></span>
<span class="line"><span style="color:#24292e;">spring.freemarker.content-type=text/html</span></span>
<span class="line"><span style="color:#24292e;">spring.freemarker.expose-request-attributes=true</span></span>
<span class="line"><span style="color:#24292e;">spring.freemarker.expose-session-attributes=true</span></span>
<span class="line"><span style="color:#24292e;">spring.freemarker.request-context-attribute=request</span></span>
<span class="line"><span style="color:#24292e;">spring.freemarker.suffix=.ftl</span></span></code></pre></div><p>首先在resources/templates下面编写hello.ftl页面</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;Hello&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;#list users as user&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        user &lt;br /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;#if user==&quot;Tom&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            hello: Tom! &lt;br /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;/#if&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/#list&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;Hello&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;#list users as user&gt;</span></span>
<span class="line"><span style="color:#24292e;">        user &lt;br /&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;#if user==&quot;Tom&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">            hello: Tom! &lt;br /&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;/#if&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/#list&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p>然后写一个controller（两种写法）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Controller</span></span>
<span class="line"><span style="color:#e1e4e8;">public class HelloController {</span></span>
<span class="line"><span style="color:#e1e4e8;">    @RequestMapping(&quot;/hello&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public String hello(Model model) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String[] users = {&quot;zhang&quot;, &quot;Tom&quot;, &quot;wang&quot;};</span></span>
<span class="line"><span style="color:#e1e4e8;">        model.addAttribute(&quot;users&quot;, users);</span></span>
<span class="line"><span style="color:#e1e4e8;">        return &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    @RequestMapping(&quot;/hello2&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public ModelAndView hello2(ModelAndView mv) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String[] users = {&quot;zhang&quot;, &quot;Tom&quot;, &quot;wang&quot;};</span></span>
<span class="line"><span style="color:#e1e4e8;">        mv.addObject(&quot;users&quot;, users);</span></span>
<span class="line"><span style="color:#e1e4e8;">        mv.setViewName(&quot;hello&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        return mv;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Controller</span></span>
<span class="line"><span style="color:#24292e;">public class HelloController {</span></span>
<span class="line"><span style="color:#24292e;">    @RequestMapping(&quot;/hello&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public String hello(Model model) {</span></span>
<span class="line"><span style="color:#24292e;">        String[] users = {&quot;zhang&quot;, &quot;Tom&quot;, &quot;wang&quot;};</span></span>
<span class="line"><span style="color:#24292e;">        model.addAttribute(&quot;users&quot;, users);</span></span>
<span class="line"><span style="color:#24292e;">        return &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    @RequestMapping(&quot;/hello2&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public ModelAndView hello2(ModelAndView mv) {</span></span>
<span class="line"><span style="color:#24292e;">        String[] users = {&quot;zhang&quot;, &quot;Tom&quot;, &quot;wang&quot;};</span></span>
<span class="line"><span style="color:#24292e;">        mv.addObject(&quot;users&quot;, users);</span></span>
<span class="line"><span style="color:#24292e;">        mv.setViewName(&quot;hello&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        return mv;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>这样就可以访问了。</p><h1 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h1><h2 id="常用语法" tabindex="-1">常用语法 <a class="header-anchor" href="#常用语法" aria-label="Permalink to &quot;常用语法&quot;">​</a></h2><p>FreeMarker里面的标签也叫指令（个人理解，看的资料不全）</p><p>FreeMarker标签前面都有一个#号；</p><p>FreeMarker注释也类似：<code>&lt;#-- 注释内容 --&gt;</code></p><p>变量取值：<code>\${变量名}</code></p><p>if指令： （这里变量名写不写大括号都可以）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;#if 变量名==&quot;xxx&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"> hello: Tom</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;#elseif 变量名==&quot;yyy&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"> hello: Cat</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;#else&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/#if&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;#if 变量名==&quot;xxx&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"> hello: Tom</span></span>
<span class="line"><span style="color:#24292e;">&lt;#elseif 变量名==&quot;yyy&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"> hello: Cat</span></span>
<span class="line"><span style="color:#24292e;">&lt;#else&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/#if&gt;</span></span></code></pre></div><p>list循环指令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;#list vars as var&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;"> \${var}...</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/#list&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;#list vars as var&gt; </span></span>
<span class="line"><span style="color:#24292e;"> \${var}...</span></span>
<span class="line"><span style="color:#24292e;">&lt;/#list&gt;</span></span></code></pre></div><p>assign指令：定义一个变量并给其赋值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;#assign username=&quot;Tom&quot;&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;#assign username=&quot;Tom&quot;&gt;</span></span></code></pre></div><p>include指令：模板嵌套</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;#include &quot;/footer.html&quot;&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;#include &quot;/footer.html&quot;&gt;</span></span></code></pre></div><h2 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h2><p>布尔类型，布尔类型不能直接输出，需要转换成字符串，有以下三种方式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;h1&gt;\${flag?c}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;h1&gt;\${flag?string}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;h1&gt;\${flag?string(&quot;对的&quot;,&quot;错的&quot;)}&lt;/h1&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;h1&gt;\${flag?c}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;h1&gt;\${flag?string}&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;h1&gt;\${flag?string(&quot;对的&quot;,&quot;错的&quot;)}&lt;/h1&gt;</span></span></code></pre></div><p>日期，也需要转成字符串（注意：controller需要传送一个Date对象）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\${time?date} 年月日</span></span>
<span class="line"><span style="color:#e1e4e8;">\${time?time} 时分秒</span></span>
<span class="line"><span style="color:#e1e4e8;">\${time?datetime} 年月日时分秒</span></span>
<span class="line"><span style="color:#e1e4e8;">\${time?string(&quot;yyyy-MM-dd HH:mm:ss&quot;)}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\${time?date} 年月日</span></span>
<span class="line"><span style="color:#24292e;">\${time?time} 时分秒</span></span>
<span class="line"><span style="color:#24292e;">\${time?datetime} 年月日时分秒</span></span>
<span class="line"><span style="color:#24292e;">\${time?string(&quot;yyyy-MM-dd HH:mm:ss&quot;)}</span></span></code></pre></div><p>数值型，也可以定义格式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\${salary}</span></span>
<span class="line"><span style="color:#e1e4e8;">\${salary?string[&quot;0.##&quot;]} &lt;#-- 保留两位小数 --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\${salary}</span></span>
<span class="line"><span style="color:#24292e;">\${salary?string[&quot;0.##&quot;]} &lt;#-- 保留两位小数 --&gt;</span></span></code></pre></div><p>字符串</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\${msg}</span></span>
<span class="line"><span style="color:#e1e4e8;">\${msg?substring(1,4)}  &lt;#--截取字符串--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">\${msg?trim?length} &lt;#--去除空字符，并计算长度--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">\${names?join(&quot;,&quot;)}  &lt;#--将数组连接成字符串--&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\${msg}</span></span>
<span class="line"><span style="color:#24292e;">\${msg?substring(1,4)}  &lt;#--截取字符串--&gt;</span></span>
<span class="line"><span style="color:#24292e;">\${msg?trim?length} &lt;#--去除空字符，并计算长度--&gt;</span></span>
<span class="line"><span style="color:#24292e;">\${names?join(&quot;,&quot;)}  &lt;#--将数组连接成字符串--&gt;</span></span></code></pre></div><p>Freemarker必须处理null值，两种方式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;#-- 如果为空，则输出默认字符串 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">\${msg!&quot;该值为空&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;#-- ??判断变量是否存在，如果存在true，否则false --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">\${(msg??)?string}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;#-- 如果为空，则输出默认字符串 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">\${msg!&quot;该值为空&quot;}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;#-- ??判断变量是否存在，如果存在true，否则false --&gt;</span></span>
<span class="line"><span style="color:#24292e;">\${(msg??)?string}</span></span></code></pre></div><p>map类型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;#list map?keys as key&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"> \${key}: \${map[key]}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;#list&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;#list map?keys as key&gt;</span></span>
<span class="line"><span style="color:#24292e;"> \${key}: \${map[key]}</span></span>
<span class="line"><span style="color:#24292e;">&lt;#list&gt;</span></span></code></pre></div><h2 id="常见指令" tabindex="-1">常见指令 <a class="header-anchor" href="#常见指令" aria-label="Permalink to &quot;常见指令&quot;">​</a></h2><p>list指令：循环</p><p>assign指令：创建变量，或修改变量值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;#assign msg=&quot;hello Tom&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;#assign num=2 names=[&quot;tom&quot;, &quot;cat&quot;]&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;#assign msg=&quot;hello Tom&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;#assign num=2 names=[&quot;tom&quot;, &quot;cat&quot;]&gt;</span></span></code></pre></div><p>macro指令：用来自定义指令。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;#-- 自定义指令 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;#macro address&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"> 江苏省南京市</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/#macro&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;#-- 使用指令 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;@address&gt;&lt;/@address&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;#-- 示例2：有参数 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;#macro findByIdAndName id name&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"> \${name},你的id是：\${id}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/#macro&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;@findByIdAndName id=&quot;12&quot; name=&quot;tom&quot;&gt;&lt;/@findByIdAndName&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;#-- 自定义指令 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;#macro address&gt;</span></span>
<span class="line"><span style="color:#24292e;"> 江苏省南京市</span></span>
<span class="line"><span style="color:#24292e;">&lt;/#macro&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;#-- 使用指令 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;@address&gt;&lt;/@address&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;#-- 示例2：有参数 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;#macro findByIdAndName id name&gt;</span></span>
<span class="line"><span style="color:#24292e;"> \${name},你的id是：\${id}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/#macro&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;@findByIdAndName id=&quot;12&quot; name=&quot;tom&quot;&gt;&lt;/@findByIdAndName&gt;</span></span></code></pre></div><p>import导入指令：可以引入一个库，然后使用引入的库中的指令。库里面的指令一般是自定义的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;#import &quot;库名.ftl&quot; as 库名&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;@库名.指令&gt; &lt;/@库名.指令&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;#import &quot;库名.ftl&quot; as 库名&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;@库名.指令&gt; &lt;/@库名.指令&gt;</span></span></code></pre></div><p>include包含指令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;#include &quot;test.ftl&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;#include &quot;test.html&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;#include &quot;test.txt&quot;&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;#include &quot;test.ftl&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;#include &quot;test.html&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;#include &quot;test.txt&quot;&gt;</span></span></code></pre></div>`,52),t=[p];function o(c,r,i,d,g,u){return e(),a("div",null,t)}const m=s(l,[["render",o]]);export{h as __pageData,m as default};
