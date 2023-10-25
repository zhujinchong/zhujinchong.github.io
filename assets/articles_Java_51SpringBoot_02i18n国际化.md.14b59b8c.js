import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.2516552c.js";const h=JSON.parse('{"title":"i18n简介","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/51SpringBoot/02i18n国际化.md","filePath":"articles/Java/51SpringBoot/02i18n国际化.md","lastUpdated":null}'),l={name:"articles/Java/51SpringBoot/02i18n国际化.md"},p=n(`<h1 id="i18n简介" tabindex="-1">i18n简介 <a class="header-anchor" href="#i18n简介" aria-label="Permalink to &quot;i18n简介&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>internationalization的i-n之间有18个单词，所以国际化也叫i18n。</p><p>Java作为跨平台语言，就给我们提供了一个工具类ResourceBundle实现国际化，核心思想是对不同的语言提供不同的资源文件。</p><p>可以是实现的功能：</p><ul><li>系统页面文字、前端交互信息、后台交互信息都能进行多语言切换；</li><li>手动进行系统语言切换；</li><li>系统根据浏览器的默认语言设置进行语言切换。</li></ul><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><p>在Spring中，国际化主要通过<code>ResourceBundleMessageSource</code>这个类实现。</p><p>在SpringBoot通过<code>MessageSourceAutoConfiguration</code>为我们配置好了管理国际化资源文件的组件。</p><p>打开源码<code>org.springframework.boot.autoconfigure.context.MessageSourceAutoConfiguration</code></p><p>1\\里面规定了它的配置前缀</p><pre><code>@Bean
@ConfigurationProperties(
 prefix = &quot;spring.messages&quot;
)
</code></pre><p>2\\里面有一个方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Bean</span></span>
<span class="line"><span style="color:#e1e4e8;">public MessageSource messageSource() {</span></span>
<span class="line"><span style="color:#e1e4e8;"> MessageSourceProperties properties = this.messageSourceProperties();</span></span>
<span class="line"><span style="color:#e1e4e8;"> ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();</span></span>
<span class="line"><span style="color:#e1e4e8;"> if (StringUtils.hasText(properties.getBasename())) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            messageSource.setBasenames(StringUtils.</span></span>
<span class="line"><span style="color:#e1e4e8;">            commaDelimitedListToStringArray(StringUtils.</span></span>
<span class="line"><span style="color:#e1e4e8;">            trimAllWhitespace(properties.getBasename())));</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"> ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Bean</span></span>
<span class="line"><span style="color:#24292e;">public MessageSource messageSource() {</span></span>
<span class="line"><span style="color:#24292e;"> MessageSourceProperties properties = this.messageSourceProperties();</span></span>
<span class="line"><span style="color:#24292e;"> ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();</span></span>
<span class="line"><span style="color:#24292e;"> if (StringUtils.hasText(properties.getBasename())) {</span></span>
<span class="line"><span style="color:#24292e;">            messageSource.setBasenames(StringUtils.</span></span>
<span class="line"><span style="color:#24292e;">            commaDelimitedListToStringArray(StringUtils.</span></span>
<span class="line"><span style="color:#24292e;">            trimAllWhitespace(properties.getBasename())));</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"> ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>3\\打开MessageSourceProperies，这里<code>basename</code>是它的属性，默认值是messages，路径就是resource根路径。</p><ul><li>所以，我们可以在resource下面存放国际化资源文件，并且名称为messages.properties.</li><li>所以，如果想要换个路径可以在配置文件中写<code>spring.messages.basename=xxx</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class MessageSourceProperties {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private String basename = &quot;messages&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    private Charset encoding;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public MessageSourceProperties() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.encoding = StandardCharsets.UTF_8;</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.fallbackToSystemLocale = true;</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.alwaysUseMessageFormat = false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.useCodeAsDefaultMessage = false;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class MessageSourceProperties {</span></span>
<span class="line"><span style="color:#24292e;">    private String basename = &quot;messages&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    private Charset encoding;</span></span>
<span class="line"><span style="color:#24292e;">    ...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public MessageSourceProperties() {</span></span>
<span class="line"><span style="color:#24292e;">        this.encoding = StandardCharsets.UTF_8;</span></span>
<span class="line"><span style="color:#24292e;">        this.fallbackToSystemLocale = true;</span></span>
<span class="line"><span style="color:#24292e;">        this.alwaysUseMessageFormat = false;</span></span>
<span class="line"><span style="color:#24292e;">        this.useCodeAsDefaultMessage = false;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>4\\接着看，国际化支持主要是通过<code>ResourceBundleMessageSource</code>，这里对它做出实例化操作。如果没有配置，默认<code>messages</code>作为文件名。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();</span></span>
<span class="line"><span style="color:#e1e4e8;">if (StringUtils.hasText(properties.getBasename())) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        messageSource.setBasenames(StringUtils.</span></span>
<span class="line"><span style="color:#e1e4e8;">        commaDelimitedListToStringArray(StringUtils.</span></span>
<span class="line"><span style="color:#e1e4e8;">        trimAllWhitespace(properties.getBasename())));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();</span></span>
<span class="line"><span style="color:#24292e;">if (StringUtils.hasText(properties.getBasename())) {</span></span>
<span class="line"><span style="color:#24292e;">        messageSource.setBasenames(StringUtils.</span></span>
<span class="line"><span style="color:#24292e;">        commaDelimitedListToStringArray(StringUtils.</span></span>
<span class="line"><span style="color:#24292e;">        trimAllWhitespace(properties.getBasename())));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_1-适配浏览器语言" tabindex="-1">1. 适配浏览器语言 <a class="header-anchor" href="#_1-适配浏览器语言" aria-label="Permalink to &quot;1. 适配浏览器语言&quot;">​</a></h2><p>1、修改IDEA的编码方式：file-&gt;setting-&gt;edit-&gt;file encodings 修改三个位置（这一步可有可无）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1. global encoding: UTF-8 （默认）</span></span>
<span class="line"><span style="color:#e1e4e8;">2. project encoding: UTF-8</span></span>
<span class="line"><span style="color:#e1e4e8;">3. properties files: UTF-8</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. global encoding: UTF-8 （默认）</span></span>
<span class="line"><span style="color:#24292e;">2. project encoding: UTF-8</span></span>
<span class="line"><span style="color:#24292e;">3. properties files: UTF-8</span></span></code></pre></div><p>2、在resource建立目录i18n</p><p>3、在i18n目录右键新建三个Resource Bundle文件（其实是个properties文件），建立完成后，会自动被绑定在一起。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">messages.properties</span></span>
<span class="line"><span style="color:#e1e4e8;">messages_en_US.properties</span></span>
<span class="line"><span style="color:#e1e4e8;">messages_zh_CN.properties</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">messages.properties</span></span>
<span class="line"><span style="color:#24292e;">messages_en_US.properties</span></span>
<span class="line"><span style="color:#24292e;">messages_zh_CN.properties</span></span></code></pre></div><p>messages.properties和messages_zh_CN.properties内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">username=哈哈</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">username=哈哈</span></span></code></pre></div><p>messages_en_US.properties内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">username=haha</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">username=haha</span></span></code></pre></div><p>4、application.properties配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">## i18n配置</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.messages.basename=i18n.messages</span></span>
<span class="line"><span style="color:#e1e4e8;"># true=如果在messages中找不到key也不会报错</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.messages.use-code-as-default-message=true</span></span>
<span class="line"><span style="color:#e1e4e8;"># 如果UTF-8需要将中文转成UTF-8编码（我自己认为的）</span></span>
<span class="line"><span style="color:#e1e4e8;"># spring.messages.encoding=UTF-8</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">## i18n配置</span></span>
<span class="line"><span style="color:#24292e;">spring.messages.basename=i18n.messages</span></span>
<span class="line"><span style="color:#24292e;"># true=如果在messages中找不到key也不会报错</span></span>
<span class="line"><span style="color:#24292e;">spring.messages.use-code-as-default-message=true</span></span>
<span class="line"><span style="color:#24292e;"># 如果UTF-8需要将中文转成UTF-8编码（我自己认为的）</span></span>
<span class="line"><span style="color:#24292e;"># spring.messages.encoding=UTF-8</span></span></code></pre></div><p>5、导入freemarker依赖，配置freemarker存放路径等，然后写一个hello.ftl页面。</p><ul><li>这里应注意，引入了spring.ftl，用于获取资源文件中的文字</li><li>这里的两个a标签暂时没用，因为该实验只能适配浏览器语言</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;#import &quot;/spring.ftl&quot; as spring/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;Hello&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;label&gt;&lt;@spring.message  &#39;username&#39;/&gt;&lt;/label&gt; &lt;br /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt; a href=&quot; &quot;&gt;中文&lt;/ a&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt; a href=&quot;/test?l=en_US&quot;&gt;English&lt;/ a&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;#import &quot;/spring.ftl&quot; as spring/&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;Hello&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;label&gt;&lt;@spring.message  &#39;username&#39;/&gt;&lt;/label&gt; &lt;br /&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt; a href=&quot; &quot;&gt;中文&lt;/ a&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt; a href=&quot;/test?l=en_US&quot;&gt;English&lt;/ a&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p>6、编写controller</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Controller</span></span>
<span class="line"><span style="color:#e1e4e8;">public class HelloController {</span></span>
<span class="line"><span style="color:#e1e4e8;">    @RequestMapping(&quot;/test&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public String hello() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Controller</span></span>
<span class="line"><span style="color:#24292e;">public class HelloController {</span></span>
<span class="line"><span style="color:#24292e;">    @RequestMapping(&quot;/test&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public String hello() {</span></span>
<span class="line"><span style="color:#24292e;">        return &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>7、启动项目，访问<code>localhost:8080/test</code> ，此时应该显示的。</p><p>8、chrome浏览器设置-&gt;高级设置-&gt;语言-&gt;选择英文/美国，重启再次访问即可显示英文。</p><h2 id="_2-手动选择语言" tabindex="-1">2. 手动选择语言 <a class="header-anchor" href="#_2-手动选择语言" aria-label="Permalink to &quot;2. 手动选择语言&quot;">​</a></h2><p>国际化语言切换主要是因为有一个区域信息解析器LocaleResolver在起作用，打开配置文件</p><p><code>org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration</code></p><p>找到</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Bean</span></span>
<span class="line"><span style="color:#e1e4e8;">@ConditionalOnMissingBean</span></span>
<span class="line"><span style="color:#e1e4e8;">@ConditionalOnProperty(</span></span>
<span class="line"><span style="color:#e1e4e8;"> prefix = &quot;spring.mvc&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"> name = {&quot;locale&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;">public LocaleResolver localeResolver() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (this.mvcProperties.getLocaleResolver() == org.springframework.boot.autoconfigure.</span></span>
<span class="line"><span style="color:#e1e4e8;">    web.servlet.WebMvcProperties.LocaleResolver.FIXED) {</span></span>
<span class="line"><span style="color:#e1e4e8;">     return new FixedLocaleResolver(this.mvcProperties.getLocale());</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">     AcceptHeaderLocaleResolver localeResolver = new AcceptHeaderLocaleResolver();</span></span>
<span class="line"><span style="color:#e1e4e8;">     localeResolver.setDefaultLocale(this.mvcProperties.getLocale());</span></span>
<span class="line"><span style="color:#e1e4e8;">     return localeResolver;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Bean</span></span>
<span class="line"><span style="color:#24292e;">@ConditionalOnMissingBean</span></span>
<span class="line"><span style="color:#24292e;">@ConditionalOnProperty(</span></span>
<span class="line"><span style="color:#24292e;"> prefix = &quot;spring.mvc&quot;,</span></span>
<span class="line"><span style="color:#24292e;"> name = {&quot;locale&quot;}</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;">public LocaleResolver localeResolver() {</span></span>
<span class="line"><span style="color:#24292e;">    if (this.mvcProperties.getLocaleResolver() == org.springframework.boot.autoconfigure.</span></span>
<span class="line"><span style="color:#24292e;">    web.servlet.WebMvcProperties.LocaleResolver.FIXED) {</span></span>
<span class="line"><span style="color:#24292e;">     return new FixedLocaleResolver(this.mvcProperties.getLocale());</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">     AcceptHeaderLocaleResolver localeResolver = new AcceptHeaderLocaleResolver();</span></span>
<span class="line"><span style="color:#24292e;">     localeResolver.setDefaultLocale(this.mvcProperties.getLocale());</span></span>
<span class="line"><span style="color:#24292e;">     return localeResolver;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>可以看到，当容器中没有LocaleResolver组件的时候，上述方法创建一个并注册到容器。查看<code>AcceptHeaderLocaleResolver</code>，找到</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> public Locale resolveLocale(HttpServletRequest request) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Locale defaultLocale = this.getDefaultLocale();</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (defaultLocale != null &amp;&amp; request.getHeader(&quot;Accept-Language&quot;) == null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return defaultLocale;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            Locale requestLocale = request.getLocale();</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (this.isSupportedLocale(requestLocale)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                return requestLocale;</span></span>
<span class="line"><span style="color:#e1e4e8;">            } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">                Locale supportedLocale = this.findSupportedLocale(request);</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (supportedLocale != null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    return supportedLocale;</span></span>
<span class="line"><span style="color:#e1e4e8;">                } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    return defaultLocale != null ? defaultLocale : requestLocale;</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"> public Locale resolveLocale(HttpServletRequest request) {</span></span>
<span class="line"><span style="color:#24292e;">        Locale defaultLocale = this.getDefaultLocale();</span></span>
<span class="line"><span style="color:#24292e;">        if (defaultLocale != null &amp;&amp; request.getHeader(&quot;Accept-Language&quot;) == null) {</span></span>
<span class="line"><span style="color:#24292e;">            return defaultLocale;</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            Locale requestLocale = request.getLocale();</span></span>
<span class="line"><span style="color:#24292e;">            if (this.isSupportedLocale(requestLocale)) {</span></span>
<span class="line"><span style="color:#24292e;">                return requestLocale;</span></span>
<span class="line"><span style="color:#24292e;">            } else {</span></span>
<span class="line"><span style="color:#24292e;">                Locale supportedLocale = this.findSupportedLocale(request);</span></span>
<span class="line"><span style="color:#24292e;">                if (supportedLocale != null) {</span></span>
<span class="line"><span style="color:#24292e;">                    return supportedLocale;</span></span>
<span class="line"><span style="color:#24292e;">                } else {</span></span>
<span class="line"><span style="color:#24292e;">                    return defaultLocale != null ? defaultLocale : requestLocale;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div><p>可以看出，它是根据HttpServletRequest中的Locale属性来判断启动哪个语言文件的。</p><p>因此，我们可以自定义一个区域信息解析器LocaleResolver来代替默认的解析器.</p><p><strong>编码实现</strong></p><ul><li>SpringBoot2.0.4中已经不推荐使用<code>WebMvcConfigurerAdapter</code></li><li>配置好后，就可以在链接中加入参数，进行语言控制。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Configuration</span></span>
<span class="line"><span style="color:#e1e4e8;">public class MyMvcConfig implements WebMvcConfigurer {</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Bean</span></span>
<span class="line"><span style="color:#e1e4e8;">    public LocaleResolver localeResolver() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return new MyLocalResolver();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    protected static class MyLocalResolver implements LocaleResolver{</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">        public Locale resolveLocale(HttpServletRequest httpServletRequest) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            String l = httpServletRequest.getParameter(&quot;l&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">            Locale aDefault = Locale.getDefault();</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (!StringUtils.isEmpty(l)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                String[] split = l.split(&quot;_&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                // 第一个是语言代码，第二是国家代码</span></span>
<span class="line"><span style="color:#e1e4e8;">                aDefault = new Locale(split[0], split[1]);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            return aDefault;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">        public void setLocale(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Locale locale) {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Configuration</span></span>
<span class="line"><span style="color:#24292e;">public class MyMvcConfig implements WebMvcConfigurer {</span></span>
<span class="line"><span style="color:#24292e;">    @Bean</span></span>
<span class="line"><span style="color:#24292e;">    public LocaleResolver localeResolver() {</span></span>
<span class="line"><span style="color:#24292e;">        return new MyLocalResolver();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    protected static class MyLocalResolver implements LocaleResolver{</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        @Override</span></span>
<span class="line"><span style="color:#24292e;">        public Locale resolveLocale(HttpServletRequest httpServletRequest) {</span></span>
<span class="line"><span style="color:#24292e;">            String l = httpServletRequest.getParameter(&quot;l&quot;);</span></span>
<span class="line"><span style="color:#24292e;">            Locale aDefault = Locale.getDefault();</span></span>
<span class="line"><span style="color:#24292e;">            if (!StringUtils.isEmpty(l)) {</span></span>
<span class="line"><span style="color:#24292e;">                String[] split = l.split(&quot;_&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                // 第一个是语言代码，第二是国家代码</span></span>
<span class="line"><span style="color:#24292e;">                aDefault = new Locale(split[0], split[1]);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            return aDefault;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        @Override</span></span>
<span class="line"><span style="color:#24292e;">        public void setLocale(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Locale locale) {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_3-后台获取i18n数据" tabindex="-1">3. 后台获取i18n数据 <a class="header-anchor" href="#_3-后台获取i18n数据" aria-label="Permalink to &quot;3. 后台获取i18n数据&quot;">​</a></h2><p>可能参数不一样，所以自定义一个工具类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Component</span></span>
<span class="line"><span style="color:#e1e4e8;">public class MessageUtil {</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    private MessageSource messageSource;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public String getMessage(String key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return messageSource.getMessage(key, null, LocaleContextHolder.getLocale());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    public String getMessage(String key, String[] params) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return messageSource.getMessage(key, params, LocaleContextHolder.getLocale());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public String getMessage(String key, String[] params, String defaultValue) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return messageSource.getMessage(key, params, defaultValue, LocaleContextHolder.getLocale());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Component</span></span>
<span class="line"><span style="color:#24292e;">public class MessageUtil {</span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private MessageSource messageSource;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public String getMessage(String key) {</span></span>
<span class="line"><span style="color:#24292e;">        return messageSource.getMessage(key, null, LocaleContextHolder.getLocale());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    public String getMessage(String key, String[] params) {</span></span>
<span class="line"><span style="color:#24292e;">        return messageSource.getMessage(key, params, LocaleContextHolder.getLocale());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public String getMessage(String key, String[] params, String defaultValue) {</span></span>
<span class="line"><span style="color:#24292e;">        return messageSource.getMessage(key, params, defaultValue, LocaleContextHolder.getLocale());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>控制器使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Controller</span></span>
<span class="line"><span style="color:#e1e4e8;">public class InterController {</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    MessageUtil messageUtil;</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    @GetMapping(&quot;inter_show&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public String show(Model model) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String username = messageUtil.getMessage(&quot;username&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        model.addAttribute(&quot;username&quot;, username);</span></span>
<span class="line"><span style="color:#e1e4e8;">        return &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Controller</span></span>
<span class="line"><span style="color:#24292e;">public class InterController {</span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    MessageUtil messageUtil;</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    @GetMapping(&quot;inter_show&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public String show(Model model) {</span></span>
<span class="line"><span style="color:#24292e;">        String username = messageUtil.getMessage(&quot;username&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        model.addAttribute(&quot;username&quot;, username);</span></span>
<span class="line"><span style="color:#24292e;">        return &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,55),o=[p];function t(c,r,i,u,g,y){return e(),a("div",null,o)}const m=s(l,[["render",t]]);export{h as __pageData,m as default};
