import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.2516552c.js";const q=JSON.parse('{"title":"日志","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/51SpringBoot/11日志.md","filePath":"articles/Java/51SpringBoot/11日志.md","lastUpdated":1698198415000}'),l={name:"articles/Java/51SpringBoot/11日志.md"},p=a(`<h1 id="日志" tabindex="-1">日志 <a class="header-anchor" href="#日志" aria-label="Permalink to &quot;日志&quot;">​</a></h1><p>日志有两种，一种是滚动输出的定位bug用的；一种是存到DB的给系统管理员查看的，一般aop注解实现。</p><h1 id="日志插件" tabindex="-1">日志插件 <a class="header-anchor" href="#日志插件" aria-label="Permalink to &quot;日志插件&quot;">​</a></h1><h1 id="aop实现注解日志" tabindex="-1">AOP实现注解日志 <a class="header-anchor" href="#aop实现注解日志" aria-label="Permalink to &quot;AOP实现注解日志&quot;">​</a></h1><h2 id="aop" tabindex="-1">aop <a class="header-anchor" href="#aop" aria-label="Permalink to &quot;aop&quot;">​</a></h2><p>AOP是<strong>面向切面编程</strong>。把程序想象成一条一条管道连接起来的大管道，而AOP就是在管道和管道之间的过滤网，能够在不影响管道的情况下对管道中传输的数据进行记录、修改。</p><h2 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h2><p>1、添加依赖（前提是一个spring boot web项目）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!-- aop注解开发 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-boot-starter-aop&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!-- json工具 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;fastjson&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;version&gt;1.2.66&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!-- aop注解开发 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-aop&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- json工具 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;fastjson&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;1.2.66&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>2、操作日志注解类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import java.lang.annotation.ElementType;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.lang.annotation.Retention;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.lang.annotation.RetentionPolicy;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.lang.annotation.Target;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">@Target({ElementType.METHOD}) // AppLog注解用于的位置（类、方法、参数等）</span></span>
<span class="line"><span style="color:#e1e4e8;">@Retention(RetentionPolicy.RUNTIME) // 让AppLog生命周期在整个程序运行时</span></span>
<span class="line"><span style="color:#e1e4e8;">public @interface AppLog {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 模块名</span></span>
<span class="line"><span style="color:#e1e4e8;">    String module() default &quot;&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 操作类型</span></span>
<span class="line"><span style="color:#e1e4e8;">    String type() default &quot;&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 操作说明</span></span>
<span class="line"><span style="color:#e1e4e8;">    String desc() default &quot;&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import java.lang.annotation.ElementType;</span></span>
<span class="line"><span style="color:#24292e;">import java.lang.annotation.Retention;</span></span>
<span class="line"><span style="color:#24292e;">import java.lang.annotation.RetentionPolicy;</span></span>
<span class="line"><span style="color:#24292e;">import java.lang.annotation.Target;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">@Target({ElementType.METHOD}) // AppLog注解用于的位置（类、方法、参数等）</span></span>
<span class="line"><span style="color:#24292e;">@Retention(RetentionPolicy.RUNTIME) // 让AppLog生命周期在整个程序运行时</span></span>
<span class="line"><span style="color:#24292e;">public @interface AppLog {</span></span>
<span class="line"><span style="color:#24292e;">    // 模块名</span></span>
<span class="line"><span style="color:#24292e;">    String module() default &quot;&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 操作类型</span></span>
<span class="line"><span style="color:#24292e;">    String type() default &quot;&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 操作说明</span></span>
<span class="line"><span style="color:#24292e;">    String desc() default &quot;&quot;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>3、定义接口</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@RestController</span></span>
<span class="line"><span style="color:#e1e4e8;">@RequestMapping(&quot;/demo&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public class DemoController {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @PostMapping(&quot;/test&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    @AppLog(module = &quot;Demo&quot;, type = &quot;query&quot;, desc = &quot;test hello&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public String hello(@RequestBody String name) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // bug代码，测试bug日志</span></span>
<span class="line"><span style="color:#e1e4e8;">        /*Map map = new HashMap&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">        String sd = (String) map.get(&quot;sd&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        sd.split(&quot;,&quot;);*/</span></span>
<span class="line"><span style="color:#e1e4e8;">        return &quot;hello!&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@RestController</span></span>
<span class="line"><span style="color:#24292e;">@RequestMapping(&quot;/demo&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public class DemoController {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @PostMapping(&quot;/test&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    @AppLog(module = &quot;Demo&quot;, type = &quot;query&quot;, desc = &quot;test hello&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public String hello(@RequestBody String name) {</span></span>
<span class="line"><span style="color:#24292e;">        // bug代码，测试bug日志</span></span>
<span class="line"><span style="color:#24292e;">        /*Map map = new HashMap&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">        String sd = (String) map.get(&quot;sd&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        sd.split(&quot;,&quot;);*/</span></span>
<span class="line"><span style="color:#24292e;">        return &quot;hello!&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>4、切面类记录操作日志</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Aspect</span></span>
<span class="line"><span style="color:#e1e4e8;">@Component</span></span>
<span class="line"><span style="color:#e1e4e8;">public class AppLogAspect {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 第一种切入方式：在使用注解的位置切入代码（第二种是：模式匹配定义的包）</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Pointcut(&quot;@annotation(AppLog)&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void logPointCut() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Around(value = &quot;logPointCut()&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public Object aroundLog(ProceedingJoinPoint joinPoint) throws Throwable {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 获取RequestAttributes</span></span>
<span class="line"><span style="color:#e1e4e8;">        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 从获取RequestAttributes中获取HttpServletRequest的信息</span></span>
<span class="line"><span style="color:#e1e4e8;">        HttpServletRequest request = (HttpServletRequest) requestAttributes.resolveReference(RequestAttributes.REFERENCE_REQUEST);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 从切面织入点处通过反射机制获取织入点处的方法</span></span>
<span class="line"><span style="color:#e1e4e8;">        MethodSignature signature = (MethodSignature) joinPoint.getSignature();</span></span>
<span class="line"><span style="color:#e1e4e8;">        Method method = signature.getMethod();</span></span>
<span class="line"><span style="color:#e1e4e8;">        AppLog myLog = method.getAnnotation(AppLog.class);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 获取切入点所在的方法</span></span>
<span class="line"><span style="color:#e1e4e8;">        String className = joinPoint.getTarget().getClass().getName();</span></span>
<span class="line"><span style="color:#e1e4e8;">        String methodName = method.getName();</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 可以存的日志</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;=====================================================&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        long startTime = System.currentTimeMillis();</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;IP: &quot; + IPUtils.getIp(request));</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;URI: &quot; + request.getRequestURI());</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;Method: &quot; + className + &quot;.&quot; + methodName + &quot;()&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;Log: &quot; + JSONObject.toJSONString(myLog));</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;Args: &quot; + JSON.toJSONString(joinPoint.getArgs()));  // 这里需要对参数解析、脱敏，略。</span></span>
<span class="line"><span style="color:#e1e4e8;">        //安全框架使用的是spring security，通过该方法获得当前操作用户信息</span></span>
<span class="line"><span style="color:#e1e4e8;">        /*Authentication authentication = SecurityContextHolder.getContext().getAuthentication();</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (!(authentication instanceof AnonymousAuthenticationToken)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            Object principal = authentication.getPrincipal();</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (principal instanceof User) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                User u = (User) principal;</span></span>
<span class="line"><span style="color:#e1e4e8;">                adminLog.setUserName(u.getUsername());</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }*/</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 执行方法</span></span>
<span class="line"><span style="color:#e1e4e8;">        Object obj = joinPoint.proceed();</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 返回结果</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;Result: &quot; + JSON.toJSONString(obj));</span></span>
<span class="line"><span style="color:#e1e4e8;">        long endTime = System.currentTimeMillis();</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;Time Consuming: &quot; + (endTime - startTime) + &quot;ms&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        return obj;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 异常返回通知，用于拦截异常日志信息 连接点抛出异常后执行</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    @AfterThrowing(pointcut = &quot;logPointCut()&quot;, throwing = &quot;e&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void saveExceptionLog(JoinPoint joinPoint, Throwable e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;=====================================================&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        StringBuffer errorBuffer = new StringBuffer();</span></span>
<span class="line"><span style="color:#e1e4e8;">        errorBuffer.append(e.getClass().getName() + &quot;:&quot; + e.getMessage() + &quot;\\n\\t&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (StackTraceElement stet : e.getStackTrace()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            errorBuffer.append(stet + &quot;\\n&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(errorBuffer);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class IPUtils {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 获取IP地址</span></span>
<span class="line"><span style="color:#e1e4e8;">     * &lt;p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 使用Nginx等反向代理软件， 则不能通过request.getRemoteAddr()获取IP地址</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 如果使用了多级反向代理的话，X-Forwarded-For的值并不止一个，而是一串IP地址，X-Forwarded-For中第一个非unknown的有效IP字符串，则为真实IP地址</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static String getIp(HttpServletRequest request) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String ip = null;</span></span>
<span class="line"><span style="color:#e1e4e8;">        //X-Forwarded-For：Squid 服务代理</span></span>
<span class="line"><span style="color:#e1e4e8;">        String ipAddresses = request.getHeader(&quot;X-Forwarded-For&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        if (ipAddresses == null || ipAddresses.length() == 0 || &quot;unknown&quot;.equalsIgnoreCase(ipAddresses)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            //Proxy-Client-IP：apache 服务代理</span></span>
<span class="line"><span style="color:#e1e4e8;">            ipAddresses = request.getHeader(&quot;Proxy-Client-IP&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        if (ipAddresses == null || ipAddresses.length() == 0 || &quot;unknown&quot;.equalsIgnoreCase(ipAddresses)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            //WL-Proxy-Client-IP：weblogic 服务代理</span></span>
<span class="line"><span style="color:#e1e4e8;">            ipAddresses = request.getHeader(&quot;WL-Proxy-Client-IP&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        if (ipAddresses == null || ipAddresses.length() == 0 || &quot;unknown&quot;.equalsIgnoreCase(ipAddresses)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            //HTTP_CLIENT_IP：有些代理服务器</span></span>
<span class="line"><span style="color:#e1e4e8;">            ipAddresses = request.getHeader(&quot;HTTP_CLIENT_IP&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        if (ipAddresses == null || ipAddresses.length() == 0 || &quot;unknown&quot;.equalsIgnoreCase(ipAddresses)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            //X-Real-IP：nginx服务代理</span></span>
<span class="line"><span style="color:#e1e4e8;">            ipAddresses = request.getHeader(&quot;X-Real-IP&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        //有些网络通过多层代理，那么获取到的ip就会有多个，一般都是通过逗号（,）分割开来，并且第一个ip为客户端的真实IP</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (ipAddresses != null &amp;&amp; ipAddresses.length() != 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            ip = ipAddresses.split(&quot;,&quot;)[0];</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        //还是不能获取到，最后再通过request.getRemoteAddr();获取</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (ip == null || ip.length() == 0 || &quot;unknown&quot;.equalsIgnoreCase(ipAddresses)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            ip = request.getRemoteAddr();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        // ip配置</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (ip.equals(&quot;127.0.0.1&quot;) || ip.endsWith(&quot;0:0:0:0:0:0:1&quot;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 根据网卡取本机配置的IP</span></span>
<span class="line"><span style="color:#e1e4e8;">            ip = &quot;127.0.0.1&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        return ip;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Aspect</span></span>
<span class="line"><span style="color:#24292e;">@Component</span></span>
<span class="line"><span style="color:#24292e;">public class AppLogAspect {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 第一种切入方式：在使用注解的位置切入代码（第二种是：模式匹配定义的包）</span></span>
<span class="line"><span style="color:#24292e;">    @Pointcut(&quot;@annotation(AppLog)&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public void logPointCut() {</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Around(value = &quot;logPointCut()&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public Object aroundLog(ProceedingJoinPoint joinPoint) throws Throwable {</span></span>
<span class="line"><span style="color:#24292e;">        // 获取RequestAttributes</span></span>
<span class="line"><span style="color:#24292e;">        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();</span></span>
<span class="line"><span style="color:#24292e;">        // 从获取RequestAttributes中获取HttpServletRequest的信息</span></span>
<span class="line"><span style="color:#24292e;">        HttpServletRequest request = (HttpServletRequest) requestAttributes.resolveReference(RequestAttributes.REFERENCE_REQUEST);</span></span>
<span class="line"><span style="color:#24292e;">        // 从切面织入点处通过反射机制获取织入点处的方法</span></span>
<span class="line"><span style="color:#24292e;">        MethodSignature signature = (MethodSignature) joinPoint.getSignature();</span></span>
<span class="line"><span style="color:#24292e;">        Method method = signature.getMethod();</span></span>
<span class="line"><span style="color:#24292e;">        AppLog myLog = method.getAnnotation(AppLog.class);</span></span>
<span class="line"><span style="color:#24292e;">        // 获取切入点所在的方法</span></span>
<span class="line"><span style="color:#24292e;">        String className = joinPoint.getTarget().getClass().getName();</span></span>
<span class="line"><span style="color:#24292e;">        String methodName = method.getName();</span></span>
<span class="line"><span style="color:#24292e;">        // 可以存的日志</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;=====================================================&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        long startTime = System.currentTimeMillis();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;IP: &quot; + IPUtils.getIp(request));</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;URI: &quot; + request.getRequestURI());</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;Method: &quot; + className + &quot;.&quot; + methodName + &quot;()&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;Log: &quot; + JSONObject.toJSONString(myLog));</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;Args: &quot; + JSON.toJSONString(joinPoint.getArgs()));  // 这里需要对参数解析、脱敏，略。</span></span>
<span class="line"><span style="color:#24292e;">        //安全框架使用的是spring security，通过该方法获得当前操作用户信息</span></span>
<span class="line"><span style="color:#24292e;">        /*Authentication authentication = SecurityContextHolder.getContext().getAuthentication();</span></span>
<span class="line"><span style="color:#24292e;">        if (!(authentication instanceof AnonymousAuthenticationToken)) {</span></span>
<span class="line"><span style="color:#24292e;">            Object principal = authentication.getPrincipal();</span></span>
<span class="line"><span style="color:#24292e;">            if (principal instanceof User) {</span></span>
<span class="line"><span style="color:#24292e;">                User u = (User) principal;</span></span>
<span class="line"><span style="color:#24292e;">                adminLog.setUserName(u.getUsername());</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }*/</span></span>
<span class="line"><span style="color:#24292e;">        // 执行方法</span></span>
<span class="line"><span style="color:#24292e;">        Object obj = joinPoint.proceed();</span></span>
<span class="line"><span style="color:#24292e;">        // 返回结果</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;Result: &quot; + JSON.toJSONString(obj));</span></span>
<span class="line"><span style="color:#24292e;">        long endTime = System.currentTimeMillis();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;Time Consuming: &quot; + (endTime - startTime) + &quot;ms&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        return obj;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 异常返回通知，用于拦截异常日志信息 连接点抛出异常后执行</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    @AfterThrowing(pointcut = &quot;logPointCut()&quot;, throwing = &quot;e&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public void saveExceptionLog(JoinPoint joinPoint, Throwable e) {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;=====================================================&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        StringBuffer errorBuffer = new StringBuffer();</span></span>
<span class="line"><span style="color:#24292e;">        errorBuffer.append(e.getClass().getName() + &quot;:&quot; + e.getMessage() + &quot;\\n\\t&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        for (StackTraceElement stet : e.getStackTrace()) {</span></span>
<span class="line"><span style="color:#24292e;">            errorBuffer.append(stet + &quot;\\n&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(errorBuffer);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class IPUtils {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 获取IP地址</span></span>
<span class="line"><span style="color:#24292e;">     * &lt;p&gt;</span></span>
<span class="line"><span style="color:#24292e;">     * 使用Nginx等反向代理软件， 则不能通过request.getRemoteAddr()获取IP地址</span></span>
<span class="line"><span style="color:#24292e;">     * 如果使用了多级反向代理的话，X-Forwarded-For的值并不止一个，而是一串IP地址，X-Forwarded-For中第一个非unknown的有效IP字符串，则为真实IP地址</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public static String getIp(HttpServletRequest request) {</span></span>
<span class="line"><span style="color:#24292e;">        String ip = null;</span></span>
<span class="line"><span style="color:#24292e;">        //X-Forwarded-For：Squid 服务代理</span></span>
<span class="line"><span style="color:#24292e;">        String ipAddresses = request.getHeader(&quot;X-Forwarded-For&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        if (ipAddresses == null || ipAddresses.length() == 0 || &quot;unknown&quot;.equalsIgnoreCase(ipAddresses)) {</span></span>
<span class="line"><span style="color:#24292e;">            //Proxy-Client-IP：apache 服务代理</span></span>
<span class="line"><span style="color:#24292e;">            ipAddresses = request.getHeader(&quot;Proxy-Client-IP&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        if (ipAddresses == null || ipAddresses.length() == 0 || &quot;unknown&quot;.equalsIgnoreCase(ipAddresses)) {</span></span>
<span class="line"><span style="color:#24292e;">            //WL-Proxy-Client-IP：weblogic 服务代理</span></span>
<span class="line"><span style="color:#24292e;">            ipAddresses = request.getHeader(&quot;WL-Proxy-Client-IP&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        if (ipAddresses == null || ipAddresses.length() == 0 || &quot;unknown&quot;.equalsIgnoreCase(ipAddresses)) {</span></span>
<span class="line"><span style="color:#24292e;">            //HTTP_CLIENT_IP：有些代理服务器</span></span>
<span class="line"><span style="color:#24292e;">            ipAddresses = request.getHeader(&quot;HTTP_CLIENT_IP&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        if (ipAddresses == null || ipAddresses.length() == 0 || &quot;unknown&quot;.equalsIgnoreCase(ipAddresses)) {</span></span>
<span class="line"><span style="color:#24292e;">            //X-Real-IP：nginx服务代理</span></span>
<span class="line"><span style="color:#24292e;">            ipAddresses = request.getHeader(&quot;X-Real-IP&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        //有些网络通过多层代理，那么获取到的ip就会有多个，一般都是通过逗号（,）分割开来，并且第一个ip为客户端的真实IP</span></span>
<span class="line"><span style="color:#24292e;">        if (ipAddresses != null &amp;&amp; ipAddresses.length() != 0) {</span></span>
<span class="line"><span style="color:#24292e;">            ip = ipAddresses.split(&quot;,&quot;)[0];</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        //还是不能获取到，最后再通过request.getRemoteAddr();获取</span></span>
<span class="line"><span style="color:#24292e;">        if (ip == null || ip.length() == 0 || &quot;unknown&quot;.equalsIgnoreCase(ipAddresses)) {</span></span>
<span class="line"><span style="color:#24292e;">            ip = request.getRemoteAddr();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        // ip配置</span></span>
<span class="line"><span style="color:#24292e;">        if (ip.equals(&quot;127.0.0.1&quot;) || ip.endsWith(&quot;0:0:0:0:0:0:1&quot;)) {</span></span>
<span class="line"><span style="color:#24292e;">            // 根据网卡取本机配置的IP</span></span>
<span class="line"><span style="color:#24292e;">            ip = &quot;127.0.0.1&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return ip;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,15),t=[p];function o(c,i,r,u,y,d){return n(),e("div",null,t)}const m=s(l,[["render",o]]);export{q as __pageData,m as default};
