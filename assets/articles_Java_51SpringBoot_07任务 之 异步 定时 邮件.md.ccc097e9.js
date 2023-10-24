import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.2516552c.js";const h=JSON.parse('{"title":"异步任务","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/51SpringBoot/07任务 之 异步 定时 邮件.md","filePath":"articles/Java/51SpringBoot/07任务 之 异步 定时 邮件.md","lastUpdated":1698165159000}'),l={name:"articles/Java/51SpringBoot/07任务 之 异步 定时 邮件.md"},p=a(`<h1 id="异步任务" tabindex="-1">异步任务 <a class="header-anchor" href="#异步任务" aria-label="Permalink to &quot;异步任务&quot;">​</a></h1><p>如果有一个方法非常耗时，这时就需要用异步任务。</p><p>1、启动类开启异步任务，加上注解<code>@EnableAsync</code></p><p>2、定义一个异步方法，加上注解<code>@Async</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Service</span></span>
<span class="line"><span style="color:#e1e4e8;">public class AsyncService {</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Async</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void hello() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            Thread.sleep(3000);</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(&quot;thread 3000&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (InterruptedException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Service</span></span>
<span class="line"><span style="color:#24292e;">public class AsyncService {</span></span>
<span class="line"><span style="color:#24292e;">    @Async</span></span>
<span class="line"><span style="color:#24292e;">    public void hello() {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            Thread.sleep(3000);</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;thread 3000&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (InterruptedException e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>3、调用异步方法，访问接口时，直接返回，后台再慢慢处理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Controller</span></span>
<span class="line"><span style="color:#e1e4e8;">public class AsyncController {</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    private AsyncService asyncService;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @RequestMapping(&quot;/demo/async/hello&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    @ResponseBody</span></span>
<span class="line"><span style="color:#e1e4e8;">    public String hello() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        asyncService.hello();</span></span>
<span class="line"><span style="color:#e1e4e8;">        return &quot;ok&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Controller</span></span>
<span class="line"><span style="color:#24292e;">public class AsyncController {</span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private AsyncService asyncService;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @RequestMapping(&quot;/demo/async/hello&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    @ResponseBody</span></span>
<span class="line"><span style="color:#24292e;">    public String hello() {</span></span>
<span class="line"><span style="color:#24292e;">        asyncService.hello();</span></span>
<span class="line"><span style="color:#24292e;">        return &quot;ok&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h1 id="邮件任务" tabindex="-1">邮件任务 <a class="header-anchor" href="#邮件任务" aria-label="Permalink to &quot;邮件任务&quot;">​</a></h1><p>引用依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-boot-starter-mail&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-mail&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>配置（注意，邮箱开启smtp服务）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">spring:</span></span>
<span class="line"><span style="color:#e1e4e8;">  mail:</span></span>
<span class="line"><span style="color:#e1e4e8;">    username: mingriyingying@163.com</span></span>
<span class="line"><span style="color:#e1e4e8;">    password: CUFZUUVIRPQTSPSX</span></span>
<span class="line"><span style="color:#e1e4e8;">    host: smtp.163.com</span></span>
<span class="line"><span style="color:#e1e4e8;">#    properties:</span></span>
<span class="line"><span style="color:#e1e4e8;">#      &#39;mail.smtp.ssl.enable&#39;: &#39;true&#39;   #设置安全连接，qq才用</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">spring:</span></span>
<span class="line"><span style="color:#24292e;">  mail:</span></span>
<span class="line"><span style="color:#24292e;">    username: mingriyingying@163.com</span></span>
<span class="line"><span style="color:#24292e;">    password: CUFZUUVIRPQTSPSX</span></span>
<span class="line"><span style="color:#24292e;">    host: smtp.163.com</span></span>
<span class="line"><span style="color:#24292e;">#    properties:</span></span>
<span class="line"><span style="color:#24292e;">#      &#39;mail.smtp.ssl.enable&#39;: &#39;true&#39;   #设置安全连接，qq才用</span></span></code></pre></div><p>就可以用了（你也可以更加需要提取一个公用类）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@RunWith(SpringRunner.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">@SpringBootTest(classes = MainApp.class)</span></span>
<span class="line"><span style="color:#e1e4e8;">public class DemoTest {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Autowired</span></span>
<span class="line"><span style="color:#e1e4e8;">    private JavaMailSender mailSender;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Test</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void test01() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        SimpleMailMessage message = new SimpleMailMessage();</span></span>
<span class="line"><span style="color:#e1e4e8;">        message.setSubject(&quot;【测试】 第一次用&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        message.setText(&quot;谢谢你，我学会了&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        message.setFrom(&quot;mingriyingying@163.com&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        message.setTo(&quot;mingriyingying@163.com&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        mailSender.send(message);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 复杂邮件</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Test</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void test02() throws MessagingException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        MimeMessage mimeMessage = mailSender.createMimeMessage();</span></span>
<span class="line"><span style="color:#e1e4e8;">        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, &quot;utf-8&quot;);  // 附件</span></span>
<span class="line"><span style="color:#e1e4e8;">        helper.setSubject(&quot;【测试】 第二次&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        helper.setText(&quot;&lt;p style=&#39;color:red;&#39;&gt;你好，有机会再合作&lt;/p&gt;&quot;, true); // 解析html</span></span>
<span class="line"><span style="color:#e1e4e8;">        helper.addAttachment(&quot;1.jpg&quot;, new File(&quot;C:\\\\Users\\\\zjc\\\\Pictures\\\\test.jpg&quot;)); // 附件</span></span>
<span class="line"><span style="color:#e1e4e8;">        helper.setFrom(&quot;mingriyingying@163.com&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        helper.setTo(&quot;mingriyingying@163.com&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        mailSender.send(mimeMessage);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@RunWith(SpringRunner.class)</span></span>
<span class="line"><span style="color:#24292e;">@SpringBootTest(classes = MainApp.class)</span></span>
<span class="line"><span style="color:#24292e;">public class DemoTest {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Autowired</span></span>
<span class="line"><span style="color:#24292e;">    private JavaMailSender mailSender;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    public void test01() {</span></span>
<span class="line"><span style="color:#24292e;">        SimpleMailMessage message = new SimpleMailMessage();</span></span>
<span class="line"><span style="color:#24292e;">        message.setSubject(&quot;【测试】 第一次用&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        message.setText(&quot;谢谢你，我学会了&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        message.setFrom(&quot;mingriyingying@163.com&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        message.setTo(&quot;mingriyingying@163.com&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        mailSender.send(message);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 复杂邮件</span></span>
<span class="line"><span style="color:#24292e;">    @Test</span></span>
<span class="line"><span style="color:#24292e;">    public void test02() throws MessagingException {</span></span>
<span class="line"><span style="color:#24292e;">        MimeMessage mimeMessage = mailSender.createMimeMessage();</span></span>
<span class="line"><span style="color:#24292e;">        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, &quot;utf-8&quot;);  // 附件</span></span>
<span class="line"><span style="color:#24292e;">        helper.setSubject(&quot;【测试】 第二次&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        helper.setText(&quot;&lt;p style=&#39;color:red;&#39;&gt;你好，有机会再合作&lt;/p&gt;&quot;, true); // 解析html</span></span>
<span class="line"><span style="color:#24292e;">        helper.addAttachment(&quot;1.jpg&quot;, new File(&quot;C:\\\\Users\\\\zjc\\\\Pictures\\\\test.jpg&quot;)); // 附件</span></span>
<span class="line"><span style="color:#24292e;">        helper.setFrom(&quot;mingriyingying@163.com&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        helper.setTo(&quot;mingriyingying@163.com&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        mailSender.send(mimeMessage);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h1 id="定时任务" tabindex="-1">定时任务 <a class="header-anchor" href="#定时任务" aria-label="Permalink to &quot;定时任务&quot;">​</a></h1><p>步骤：</p><p>1、在启动类，加入注解<code>@EnableScheduling</code></p><p>2、用注解<code>@Scheduled(cron表达式)</code>将方法定义为定时任务</p><p>3、用cron表达式表示倒计时、定时等。</p><p>示例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Service</span></span>
<span class="line"><span style="color:#e1e4e8;">public class ScheduledService {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // cron表达式: 秒 分 时 日 月 周几</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Scheduled(cron=&quot;0 * * * * 0-7&quot;) // 每0秒出现就执行</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void hello() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;hello, 定时任务正在执行：&quot; + new Date().getTime());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Service</span></span>
<span class="line"><span style="color:#24292e;">public class ScheduledService {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // cron表达式: 秒 分 时 日 月 周几</span></span>
<span class="line"><span style="color:#24292e;">    @Scheduled(cron=&quot;0 * * * * 0-7&quot;) // 每0秒出现就执行</span></span>
<span class="line"><span style="color:#24292e;">    public void hello() {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;hello, 定时任务正在执行：&quot; + new Date().getTime());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>定时任务核心知识点</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">两个关键类（原理）</span></span>
<span class="line"><span style="color:#e1e4e8;">	TaskScheduler 任务调度者</span></span>
<span class="line"><span style="color:#e1e4e8;">	TaskExecutor  任务执行者</span></span>
<span class="line"><span style="color:#e1e4e8;">两个关键注解</span></span>
<span class="line"><span style="color:#e1e4e8;">    @EnableScheduling	开启定时任务的注解</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Scheduled			什么时候执行~</span></span>
<span class="line"><span style="color:#e1e4e8;">Cron表达式（使用）</span></span>
<span class="line"><span style="color:#e1e4e8;">	30 15 10 * * ? 每天10点15分30秒执行</span></span>
<span class="line"><span style="color:#e1e4e8;">	0 0/5 10,18 * * ? 每天10点和18点，每隔5分钟执行</span></span>
<span class="line"><span style="color:#e1e4e8;">	0 0 10 ? * 1-6	每周一至周六的10点执行</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">两个关键类（原理）</span></span>
<span class="line"><span style="color:#24292e;">	TaskScheduler 任务调度者</span></span>
<span class="line"><span style="color:#24292e;">	TaskExecutor  任务执行者</span></span>
<span class="line"><span style="color:#24292e;">两个关键注解</span></span>
<span class="line"><span style="color:#24292e;">    @EnableScheduling	开启定时任务的注解</span></span>
<span class="line"><span style="color:#24292e;">    @Scheduled			什么时候执行~</span></span>
<span class="line"><span style="color:#24292e;">Cron表达式（使用）</span></span>
<span class="line"><span style="color:#24292e;">	30 15 10 * * ? 每天10点15分30秒执行</span></span>
<span class="line"><span style="color:#24292e;">	0 0/5 10,18 * * ? 每天10点和18点，每隔5分钟执行</span></span>
<span class="line"><span style="color:#24292e;">	0 0 10 ? * 1-6	每周一至周六的10点执行</span></span></code></pre></div>`,23),o=[p];function c(t,i,r,y,d,u){return n(),e("div",null,o)}const m=s(l,[["render",c]]);export{h as __pageData,m as default};
