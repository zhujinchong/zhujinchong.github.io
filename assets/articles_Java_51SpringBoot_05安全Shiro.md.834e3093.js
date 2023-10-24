import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const h=JSON.parse('{"title":"Shiro","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/51SpringBoot/05安全Shiro.md","filePath":"articles/Java/51SpringBoot/05安全Shiro.md","lastUpdated":1698165534000}'),l={name:"articles/Java/51SpringBoot/05安全Shiro.md"},p=e(`<h1 id="shiro" tabindex="-1">Shiro <a class="header-anchor" href="#shiro" aria-label="Permalink to &quot;Shiro&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>Apache Shiro 是一个强大灵活的开源安全框架，可以完全处理身份验证、授权、加密和会话管理。</p><p>Shiro功能包括：</p><ul><li><p>Authentication（认证）：用户身份识别，通常被称为用户“登录”</p></li><li><p>Authorization（授权）：访问控制。比如某个用户是否具有某个操作的使用权限。</p></li><li><p>Session Management（会话管理）：特定于用户的会话管理，甚至在非web 或 EJB 应用程序。</p></li><li><p>Cryptography（加密）：在对数据源使用加密算法加密的同时，保证易于使用。</p></li></ul><p>Shiro还增加其他的功能的支持：</p><ul><li><p>Web支持：Shiro 提供的 Web 支持 api ，可以很轻松的保护 Web 应用程序的安全。</p></li><li><p>缓存：缓存是 Apache Shiro 保证安全操作快速、高效的重要手段。</p></li><li><p>并发：Apache Shiro 支持多线程应用程序的并发特性。</p></li><li><p>等等</p></li></ul><p>注意：Shiro 不会去维护用户、维护权限，这些需要我们自己去设计/提供，然后通过相应的接口注入给 Shiro。</p><p>Shiro架构三个主要概念：</p><ul><li>Subject主体：当前用户，可以是一个人，也可以是第三方服务、守护进程帐户、时钟守护任务或者其它–当前和软件交互的任何事件。</li><li>Realms：由我们自己实现认证和授权的过程，然后交给SecurityManager。</li><li>SecurityManager：管理所有Subject，Realms。它是 Shiro 架构的核心，内部自动配置授权、认证等。</li></ul><p>Shiro架构中的其他概念：</p><ul><li>Principal身份：是subject进行身份认证的标识，必须唯一，如ID！一个Subject可以有多个身份，但必须有一个主身份。</li><li>credential：是只有Subject自己知道的安全信息，如密码等</li></ul><h2 id="快速入门" tabindex="-1">快速入门 <a class="header-anchor" href="#快速入门" aria-label="Permalink to &quot;快速入门&quot;">​</a></h2><p>导入依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.apache.shiro&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;shiro-core&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;version&gt;1.4.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.apache.shiro&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;shiro-core&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;1.4.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>自定义一个Realm类（在这里自定义认证、授权过程，然后交给SecurityManager）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class MyRealm extends AuthorizingRealm {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 授权过程</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String userName = (String) principalCollection.getPrimaryPrincipal();</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 一般是从数据库中获取角色和权限数据</span></span>
<span class="line"><span style="color:#e1e4e8;">        Set&lt;String&gt; roles = Set.of(&quot;admin&quot;, &quot;user&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        Set&lt;String&gt; permissions = Set.of(&quot;user:delete&quot;, &quot;user:add&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        //</span></span>
<span class="line"><span style="color:#e1e4e8;">        SimpleAuthorizationInfo simpleAuthorizationInfo = new SimpleAuthorizationInfo();</span></span>
<span class="line"><span style="color:#e1e4e8;">        simpleAuthorizationInfo.setStringPermissions(permissions);</span></span>
<span class="line"><span style="color:#e1e4e8;">        simpleAuthorizationInfo.setRoles(roles);</span></span>
<span class="line"><span style="color:#e1e4e8;">        return simpleAuthorizationInfo;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 认证过程</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 1.从主体传过来的认证信息中，获得用户名</span></span>
<span class="line"><span style="color:#e1e4e8;">        String userName = (String) authenticationToken.getPrincipal();</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 2.通过用户名到数据库中获取凭证</span></span>
<span class="line"><span style="color:#e1e4e8;">        String password = &quot;tom&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(userName, password, this.getName());</span></span>
<span class="line"><span style="color:#e1e4e8;">        return authenticationInfo;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class MyRealm extends AuthorizingRealm {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 授权过程</span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {</span></span>
<span class="line"><span style="color:#24292e;">        String userName = (String) principalCollection.getPrimaryPrincipal();</span></span>
<span class="line"><span style="color:#24292e;">        // 一般是从数据库中获取角色和权限数据</span></span>
<span class="line"><span style="color:#24292e;">        Set&lt;String&gt; roles = Set.of(&quot;admin&quot;, &quot;user&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        Set&lt;String&gt; permissions = Set.of(&quot;user:delete&quot;, &quot;user:add&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        //</span></span>
<span class="line"><span style="color:#24292e;">        SimpleAuthorizationInfo simpleAuthorizationInfo = new SimpleAuthorizationInfo();</span></span>
<span class="line"><span style="color:#24292e;">        simpleAuthorizationInfo.setStringPermissions(permissions);</span></span>
<span class="line"><span style="color:#24292e;">        simpleAuthorizationInfo.setRoles(roles);</span></span>
<span class="line"><span style="color:#24292e;">        return simpleAuthorizationInfo;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 认证过程</span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {</span></span>
<span class="line"><span style="color:#24292e;">        // 1.从主体传过来的认证信息中，获得用户名</span></span>
<span class="line"><span style="color:#24292e;">        String userName = (String) authenticationToken.getPrincipal();</span></span>
<span class="line"><span style="color:#24292e;">        // 2.通过用户名到数据库中获取凭证</span></span>
<span class="line"><span style="color:#24292e;">        String password = &quot;tom&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(userName, password, this.getName());</span></span>
<span class="line"><span style="color:#24292e;">        return authenticationInfo;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>模拟用户登录认证、是否具有角色和权限。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class TestAuthenticator {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 实现自己的 Realm 实例</span></span>
<span class="line"><span style="color:#e1e4e8;">        MyRealm myRealm = new MyRealm();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        // 构建SecurityManager环境（这段代码一般是在Config类中）</span></span>
<span class="line"><span style="color:#e1e4e8;">        DefaultSecurityManager defaultSecurityManager = new DefaultSecurityManager();</span></span>
<span class="line"><span style="color:#e1e4e8;">        defaultSecurityManager.setRealm(myRealm);</span></span>
<span class="line"><span style="color:#e1e4e8;">        SecurityUtils.setSecurityManager(defaultSecurityManager);</span></span>
<span class="line"><span style="color:#e1e4e8;">        </span></span>
<span class="line"><span style="color:#e1e4e8;">        // 获取当前Subject （这段代码一般实在Controller中）</span></span>
<span class="line"><span style="color:#e1e4e8;">        Subject subject = SecurityUtils.getSubject();</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 省略从前端获取用户名和密码步骤，直接进行token认证</span></span>
<span class="line"><span style="color:#e1e4e8;">        UsernamePasswordToken token = new UsernamePasswordToken(&quot;tom&quot;, &quot;tom&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 登录</span></span>
<span class="line"><span style="color:#e1e4e8;">        subject.login(token);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 判断用户是否认证成功</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;isAuthenticated:&quot; + subject.isAuthenticated()); // 输出true</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (subject.isAuthenticated()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 判断是否有角色权限</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(subject.hasRole(&quot;admin&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 判断是否有user.add权限</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(subject.isPermitted(&quot;user:add&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 登出</span></span>
<span class="line"><span style="color:#e1e4e8;">        subject.logout();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class TestAuthenticator {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        // 实现自己的 Realm 实例</span></span>
<span class="line"><span style="color:#24292e;">        MyRealm myRealm = new MyRealm();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        // 构建SecurityManager环境（这段代码一般是在Config类中）</span></span>
<span class="line"><span style="color:#24292e;">        DefaultSecurityManager defaultSecurityManager = new DefaultSecurityManager();</span></span>
<span class="line"><span style="color:#24292e;">        defaultSecurityManager.setRealm(myRealm);</span></span>
<span class="line"><span style="color:#24292e;">        SecurityUtils.setSecurityManager(defaultSecurityManager);</span></span>
<span class="line"><span style="color:#24292e;">        </span></span>
<span class="line"><span style="color:#24292e;">        // 获取当前Subject （这段代码一般实在Controller中）</span></span>
<span class="line"><span style="color:#24292e;">        Subject subject = SecurityUtils.getSubject();</span></span>
<span class="line"><span style="color:#24292e;">        // 省略从前端获取用户名和密码步骤，直接进行token认证</span></span>
<span class="line"><span style="color:#24292e;">        UsernamePasswordToken token = new UsernamePasswordToken(&quot;tom&quot;, &quot;tom&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        // 登录</span></span>
<span class="line"><span style="color:#24292e;">        subject.login(token);</span></span>
<span class="line"><span style="color:#24292e;">        // 判断用户是否认证成功</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;isAuthenticated:&quot; + subject.isAuthenticated()); // 输出true</span></span>
<span class="line"><span style="color:#24292e;">        if (subject.isAuthenticated()) {</span></span>
<span class="line"><span style="color:#24292e;">            // 判断是否有角色权限</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(subject.hasRole(&quot;admin&quot;));</span></span>
<span class="line"><span style="color:#24292e;">            // 判断是否有user.add权限</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(subject.isPermitted(&quot;user:add&quot;));</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        // 登出</span></span>
<span class="line"><span style="color:#24292e;">        subject.logout();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="授权方式" tabindex="-1">授权方式 <a class="header-anchor" href="#授权方式" aria-label="Permalink to &quot;授权方式&quot;">​</a></h2><p><strong>Shiro中的授权方式：</strong></p><ul><li><p>基于角色的访问控制Role-Based Access Control</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">if (subject.hasRole(&quot;admin&quot;)){ ... }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if (subject.hasRole(&quot;admin&quot;)){ ... }</span></span></code></pre></div></li><li><p>基于资源的访问控制Resource-Based Access Control</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">if (subject.isPermission(&quot;user:update:*&quot;)) { ... }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if (subject.isPermission(&quot;user:update:*&quot;)) { ... }</span></span></code></pre></div></li></ul><p>第一个<code>角色</code>很好理解，和用户是Many vs Many关系；</p><p>第二个里面有一个权限字符串，定义规则是：<code>资源标识符:操作:资源实例标识符</code>，意思是对哪个资源的哪个实例有什么操作。（可以使用*通配符）用户和权限也是多对多关系。</p><p>例如：</p><ul><li>用户创建权限：<code>user:create</code>或者<code>user:create:*</code></li><li>用户修改实例01的权限：<code>user:update:01</code></li><li>用户对实例01的所有权限：<code>user:*:01</code></li></ul><p><strong>实现方式</strong></p><p>编程式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">if (Subject.hasRole(&quot;admin&quot;)){ ... }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if (Subject.hasRole(&quot;admin&quot;)){ ... }</span></span></code></pre></div><p>注解式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@RequireRolse(&quot;admin&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public void hello() { ... }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@RequireRolse(&quot;admin&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public void hello() { ... }</span></span></code></pre></div><p>标签式（如JSP页面）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;shiro:hasRole name=&quot;admin&quot;&gt; ... &lt;/shiro:hasRole&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;shiro:hasRole name=&quot;admin&quot;&gt; ... &lt;/shiro:hasRole&gt;</span></span></code></pre></div><h2 id="springboot2整合" tabindex="-1">SpringBoot2整合 <a class="header-anchor" href="#springboot2整合" aria-label="Permalink to &quot;SpringBoot2整合&quot;">​</a></h2><p>引入依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!-- shiro --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.apache.shiro&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;shiro-spring&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;version&gt;1.4.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!-- shiro --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.apache.shiro&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;shiro-spring&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;1.4.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>或者</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;groupId&gt;org.apache.shiro&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;artifactId&gt;shiro-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;version&gt;1.5.3&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;groupId&gt;org.apache.shiro&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;artifactId&gt;shiro-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;version&gt;1.5.3&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>自定义一个MyRealm类，和上面一样。</p><p>创建一个ShiroConfig类，该类有三个操作</p><ul><li>拿到MyRealm，交给容器</li><li>配置一个SecutiryManage，装配好myRealm</li><li>配置一个ShiroFilter，装配好securityManage，定义过滤规则。Apache Shiro 的核心通过 Filter 来实现，就好像 SpringMvc 通过 DispachServlet 来主控制一样。 既然是使用 Filter 一般也就能猜到，是通过URL规则来进行过滤和权限校验，所以我们需要定义一系列关于URL的规则和访问权限。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Configuration</span></span>
<span class="line"><span style="color:#e1e4e8;">public class ShiroConfig {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 创建自定义Realm</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Bean</span></span>
<span class="line"><span style="color:#e1e4e8;">    public Realm realm() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return new MyRealm();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 创建安全管理器</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Bean()</span></span>
<span class="line"><span style="color:#e1e4e8;">    public DefaultWebSecurityManager getDefaultWebSecurityManager() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        DefaultWebSecurityManager defaultWebSecurityManager = new DefaultWebSecurityManager();</span></span>
<span class="line"><span style="color:#e1e4e8;">        defaultWebSecurityManager.setRealm(realm());</span></span>
<span class="line"><span style="color:#e1e4e8;">        return defaultWebSecurityManager;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 创建ShiroFilter</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Bean</span></span>
<span class="line"><span style="color:#e1e4e8;">    public ShiroFilterFactoryBean getShiroFilterFactoryBean() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();</span></span>
<span class="line"><span style="color:#e1e4e8;">        shiroFilterFactoryBean.setSecurityManager(getDefaultWebSecurityManager());</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        // 默认认证界面</span></span>
<span class="line"><span style="color:#e1e4e8;">        shiroFilterFactoryBean.setLoginUrl(&quot;/login&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        shiroFilterFactoryBean.setUnauthorizedUrl(&quot;/403&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 拦截器</span></span>
<span class="line"><span style="color:#e1e4e8;">        Map&lt;String, String&gt; filterChainDefinitionMap = new LinkedHashMap&lt;String, String&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 配置不会被拦截的链接 顺序判断</span></span>
<span class="line"><span style="color:#e1e4e8;">        filterChainDefinitionMap.put(&quot;/static/**&quot;, &quot;anon&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        filterChainDefinitionMap.put(&quot;/index&quot;, &quot;anon&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        filterChainDefinitionMap.put(&quot;/logout&quot;, &quot;anon&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        filterChainDefinitionMap.put(&quot;/doLogin&quot;, &quot;anon&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        filterChainDefinitionMap.put(&quot;/register&quot;, &quot;anon&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        filterChainDefinitionMap.put(&quot;/doRegister&quot;, &quot;anon&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">		// 都需要身份认证，否则去登录</span></span>
<span class="line"><span style="color:#e1e4e8;">        filterChainDefinitionMap.put(&quot;/**&quot;, &quot;authc&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        shiroFilterFactoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap);</span></span>
<span class="line"><span style="color:#e1e4e8;">        return shiroFilterFactoryBean;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Configuration</span></span>
<span class="line"><span style="color:#24292e;">public class ShiroConfig {</span></span>
<span class="line"><span style="color:#24292e;">    // 创建自定义Realm</span></span>
<span class="line"><span style="color:#24292e;">    @Bean</span></span>
<span class="line"><span style="color:#24292e;">    public Realm realm() {</span></span>
<span class="line"><span style="color:#24292e;">        return new MyRealm();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 创建安全管理器</span></span>
<span class="line"><span style="color:#24292e;">    @Bean()</span></span>
<span class="line"><span style="color:#24292e;">    public DefaultWebSecurityManager getDefaultWebSecurityManager() {</span></span>
<span class="line"><span style="color:#24292e;">        DefaultWebSecurityManager defaultWebSecurityManager = new DefaultWebSecurityManager();</span></span>
<span class="line"><span style="color:#24292e;">        defaultWebSecurityManager.setRealm(realm());</span></span>
<span class="line"><span style="color:#24292e;">        return defaultWebSecurityManager;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 创建ShiroFilter</span></span>
<span class="line"><span style="color:#24292e;">    @Bean</span></span>
<span class="line"><span style="color:#24292e;">    public ShiroFilterFactoryBean getShiroFilterFactoryBean() {</span></span>
<span class="line"><span style="color:#24292e;">        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();</span></span>
<span class="line"><span style="color:#24292e;">        shiroFilterFactoryBean.setSecurityManager(getDefaultWebSecurityManager());</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        // 默认认证界面</span></span>
<span class="line"><span style="color:#24292e;">        shiroFilterFactoryBean.setLoginUrl(&quot;/login&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        shiroFilterFactoryBean.setUnauthorizedUrl(&quot;/403&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        // 拦截器</span></span>
<span class="line"><span style="color:#24292e;">        Map&lt;String, String&gt; filterChainDefinitionMap = new LinkedHashMap&lt;String, String&gt;();</span></span>
<span class="line"><span style="color:#24292e;">        // 配置不会被拦截的链接 顺序判断</span></span>
<span class="line"><span style="color:#24292e;">        filterChainDefinitionMap.put(&quot;/static/**&quot;, &quot;anon&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        filterChainDefinitionMap.put(&quot;/index&quot;, &quot;anon&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        filterChainDefinitionMap.put(&quot;/logout&quot;, &quot;anon&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        filterChainDefinitionMap.put(&quot;/doLogin&quot;, &quot;anon&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        filterChainDefinitionMap.put(&quot;/register&quot;, &quot;anon&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        filterChainDefinitionMap.put(&quot;/doRegister&quot;, &quot;anon&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">		// 都需要身份认证，否则去登录</span></span>
<span class="line"><span style="color:#24292e;">        filterChainDefinitionMap.put(&quot;/**&quot;, &quot;authc&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        shiroFilterFactoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap);</span></span>
<span class="line"><span style="color:#24292e;">        return shiroFilterFactoryBean;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>拦截器分类</strong></p><p>anon表示可以匿名访问</p><p>authc表示需要登录才能访问资源</p><p>perms表示需要验证用户是否拥有资源权限</p><p>roles表示需要验证用户是否用于资源角色</p><p>等等</p><h2 id="md5加密" tabindex="-1">MD5加密 <a class="header-anchor" href="#md5加密" aria-label="Permalink to &quot;MD5加密&quot;">​</a></h2><p>在自定义Realm的doGetAuthenticationInfo方法中，取到数据库中的密码，传给SecurityManager</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 1.从主体传过来的认证信息中，获得用户名</span></span>
<span class="line"><span style="color:#e1e4e8;">String username = (String) authenticationToken.getPrincipal();</span></span>
<span class="line"><span style="color:#e1e4e8;">// 2.通过用户名到数据库中获取凭证</span></span>
<span class="line"><span style="color:#e1e4e8;">User user = userMapper.findByUsername(username);</span></span>
<span class="line"><span style="color:#e1e4e8;">if (ObjectUtils.isEmpty(user)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return null;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(</span></span>
<span class="line"><span style="color:#e1e4e8;">        username, // 用户名</span></span>
<span class="line"><span style="color:#e1e4e8;">        user.getPassword(),  // 密码</span></span>
<span class="line"><span style="color:#e1e4e8;">        ByteSource.Util.bytes(username),  // 加密的盐，这里使用的是用户名</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.getName());        // 自定义realm的类名</span></span>
<span class="line"><span style="color:#e1e4e8;">return authenticationInfo;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 1.从主体传过来的认证信息中，获得用户名</span></span>
<span class="line"><span style="color:#24292e;">String username = (String) authenticationToken.getPrincipal();</span></span>
<span class="line"><span style="color:#24292e;">// 2.通过用户名到数据库中获取凭证</span></span>
<span class="line"><span style="color:#24292e;">User user = userMapper.findByUsername(username);</span></span>
<span class="line"><span style="color:#24292e;">if (ObjectUtils.isEmpty(user)) {</span></span>
<span class="line"><span style="color:#24292e;">    return null;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(</span></span>
<span class="line"><span style="color:#24292e;">        username, // 用户名</span></span>
<span class="line"><span style="color:#24292e;">        user.getPassword(),  // 密码</span></span>
<span class="line"><span style="color:#24292e;">        ByteSource.Util.bytes(username),  // 加密的盐，这里使用的是用户名</span></span>
<span class="line"><span style="color:#24292e;">        this.getName());        // 自定义realm的类名</span></span>
<span class="line"><span style="color:#24292e;">return authenticationInfo;</span></span></code></pre></div><p>然后在自定义的ShiroConfig中添加一个Bean</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Bean(&quot;hashedCredentialsMatcher&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public HashedCredentialsMatcher hashedCredentialsMatcher() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    HashedCredentialsMatcher credentialsMatcher = new HashedCredentialsMatcher();</span></span>
<span class="line"><span style="color:#e1e4e8;">    //指定加密方式为MD5</span></span>
<span class="line"><span style="color:#e1e4e8;">    credentialsMatcher.setHashAlgorithmName(&quot;MD5&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    //加密次数</span></span>
<span class="line"><span style="color:#e1e4e8;">    credentialsMatcher.setHashIterations(10);</span></span>
<span class="line"><span style="color:#e1e4e8;">    credentialsMatcher.setStoredCredentialsHexEncoded(true);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return credentialsMatcher;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Bean(&quot;hashedCredentialsMatcher&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public HashedCredentialsMatcher hashedCredentialsMatcher() {</span></span>
<span class="line"><span style="color:#24292e;">    HashedCredentialsMatcher credentialsMatcher = new HashedCredentialsMatcher();</span></span>
<span class="line"><span style="color:#24292e;">    //指定加密方式为MD5</span></span>
<span class="line"><span style="color:#24292e;">    credentialsMatcher.setHashAlgorithmName(&quot;MD5&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    //加密次数</span></span>
<span class="line"><span style="color:#24292e;">    credentialsMatcher.setHashIterations(10);</span></span>
<span class="line"><span style="color:#24292e;">    credentialsMatcher.setStoredCredentialsHexEncoded(true);</span></span>
<span class="line"><span style="color:#24292e;">    return credentialsMatcher;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="redis缓存" tabindex="-1">Redis缓存 <a class="header-anchor" href="#redis缓存" aria-label="Permalink to &quot;Redis缓存&quot;">​</a></h2><p>引入依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!-- redis --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!-- redis --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>本地启动redis服务器</p><p>项目的配置文件中添加：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># redis默认端口</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.redis.port=6379</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.redis.host=localhost</span></span>
<span class="line"><span style="color:#e1e4e8;"># redis中有0-15号库，用0就可以</span></span>
<span class="line"><span style="color:#e1e4e8;">spring.redis.database=0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># redis默认端口</span></span>
<span class="line"><span style="color:#24292e;">spring.redis.port=6379</span></span>
<span class="line"><span style="color:#24292e;">spring.redis.host=localhost</span></span>
<span class="line"><span style="color:#24292e;"># redis中有0-15号库，用0就可以</span></span>
<span class="line"><span style="color:#24292e;">spring.redis.database=0</span></span></code></pre></div><p>自定义一个RedisCacheManager类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span></code></pre></div><p>在自定义Shiro配置类ShiroConfig中的MyRealm方法中设置RedisCacheManager</p><h2 id="freemarker使用shiro" tabindex="-1">FreeMarker使用shiro <a class="header-anchor" href="#freemarker使用shiro" aria-label="Permalink to &quot;FreeMarker使用shiro&quot;">​</a></h2><p>freemaker默认情况下是不能使用shiro标签进行权限控制的。还好已经由大神James Gregory将此问题解决，并将源码发布到了GitHub上面了。GitHub上项目地址：<a href="https://github.com/jagregory/shiro-freemarker-tags" target="_blank" rel="noreferrer">https://github.com/jagregory/shiro-freemarker-tags</a></p><p>这个项目实质上就是实现了一套freemaker的自定义标签，所我们需要在freemarker的配置文件中添加自定义shiro标签。</p><p>1、导包</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!-- freemarker支持shiro标签的第三方类库 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;groupId&gt;net.mingsoft&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;artifactId&gt;shiro-freemarker-tags&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;version&gt;0.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;exclusions&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;artifactId&gt;fastjson&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;groupId&gt;org.apache.shiro&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;artifactId&gt;shiro-all&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/exclusions&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!-- freemarker支持shiro标签的第三方类库 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;groupId&gt;net.mingsoft&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;artifactId&gt;shiro-freemarker-tags&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;version&gt;0.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;exclusions&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;artifactId&gt;fastjson&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;groupId&gt;org.apache.shiro&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;artifactId&gt;shiro-all&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/exclusion&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/exclusions&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>2、在freemaker配置文件中添加自定义shiro标签</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Configuration</span></span>
<span class="line"><span style="color:#e1e4e8;">public class FreemarkerConfig {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Bean</span></span>
<span class="line"><span style="color:#e1e4e8;">    public FreeMarkerConfigurer freeMarkerConfigurer(FreeMarkerProperties freeMarkerProperties) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        FreeMarkerConfigurer configurer = new FreeMarkerConfigurer();</span></span>
<span class="line"><span style="color:#e1e4e8;">        configurer.setTemplateLoaderPaths(freeMarkerProperties.getTemplateLoaderPath()); //模板加载路径默认 &quot;classpath:/templates/&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        configurer.setDefaultEncoding(&quot;utf-8&quot;);//设置页面默认编码（不设置页面中文乱码）</span></span>
<span class="line"><span style="color:#e1e4e8;">        Map&lt;String,Object&gt; variables=new HashMap&lt;String,Object&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">        variables.put(&quot;shiro&quot;, new ShiroTags());</span></span>
<span class="line"><span style="color:#e1e4e8;">        configurer.setFreemarkerVariables(variables);//添加shiro自定义标签</span></span>
<span class="line"><span style="color:#e1e4e8;">        return configurer;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Configuration</span></span>
<span class="line"><span style="color:#24292e;">public class FreemarkerConfig {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Bean</span></span>
<span class="line"><span style="color:#24292e;">    public FreeMarkerConfigurer freeMarkerConfigurer(FreeMarkerProperties freeMarkerProperties) {</span></span>
<span class="line"><span style="color:#24292e;">        FreeMarkerConfigurer configurer = new FreeMarkerConfigurer();</span></span>
<span class="line"><span style="color:#24292e;">        configurer.setTemplateLoaderPaths(freeMarkerProperties.getTemplateLoaderPath()); //模板加载路径默认 &quot;classpath:/templates/&quot;</span></span>
<span class="line"><span style="color:#24292e;">        configurer.setDefaultEncoding(&quot;utf-8&quot;);//设置页面默认编码（不设置页面中文乱码）</span></span>
<span class="line"><span style="color:#24292e;">        Map&lt;String,Object&gt; variables=new HashMap&lt;String,Object&gt;();</span></span>
<span class="line"><span style="color:#24292e;">        variables.put(&quot;shiro&quot;, new ShiroTags());</span></span>
<span class="line"><span style="color:#24292e;">        configurer.setFreemarkerVariables(variables);//添加shiro自定义标签</span></span>
<span class="line"><span style="color:#24292e;">        return configurer;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>3、页面使用shiro相关标签</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;@shiro.guest&gt;  </span></span>
<span class="line"><span style="color:#e1e4e8;"> 游客访问 &lt;a href = &quot;login.jsp&quot;&gt;&lt;/ a&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/@shiro.guest&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">user 标签：用户已经通过认证\\记住我 登录后显示响应的内容</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;@shiro.user&gt;  </span></span>
<span class="line"><span style="color:#e1e4e8;"> 欢迎[&lt;@shiro.principal/&gt;]登录，&lt; a href=&quot;/logout.html&quot;&gt;退出&lt;/ a&gt;  </span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/@shiro.user&gt;    </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">authenticated标签：用户身份验证通过，即 Subjec.login 登录成功 不是记住我登录的</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;@shiro.authenticated&gt;  </span></span>
<span class="line"><span style="color:#e1e4e8;">    用户[&lt;@shiro.principal/&gt;]已身份验证通过  </span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/@shiro.authenticated&gt;   </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">notAuthenticated标签：用户未进行身份验证，即没有调用Subject.login进行登录,包括&quot;记住我&quot;也属于未进行身份验证</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;@shiro.notAuthenticated&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    当前身份未认证（包括记住我登录的）</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/@shiro.notAuthenticated&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">principal 标签：显示用户身份信息，默认调用Subjec.getPrincipal()获取，即Primary Principal</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;@shiro.principal property=&quot;username&quot;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">hasRole标签：如果当前Subject有角色将显示body体内的内容</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;@shiro.hasRole name=&quot;admin&quot;&gt;  </span></span>
<span class="line"><span style="color:#e1e4e8;">    用户[&lt;@shiro.principal/&gt;]拥有角色admin&lt;br/&gt;  </span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/@shiro.hasRole&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">hasAnyRoles标签：如果Subject有任意一个角色(或的关系)将显示body体里的内容</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;@shiro.hasAnyRoles name=&quot;admin,user,member&quot;&gt;  </span></span>
<span class="line"><span style="color:#e1e4e8;"> 用户[&lt;@shiro.principal/&gt;]拥有角色admin或user或member&lt;br/&gt;  </span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/@shiro.hasAnyRoles&gt;   </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">lacksRole:如果当前 Subjec没有角色将显示body体内的内容</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;@shiro.lacksRole name=&quot;admin&quot;&gt;  </span></span>
<span class="line"><span style="color:#e1e4e8;"> 用户[&lt;@shiro.principal/&gt;]不拥有admin角色</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/@shiro.lacksRole&gt;   </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">hashPermission:如果当前Subject有权限将显示body体内容</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;@shiro.hasPermission name=&quot;user:add&quot;&gt;  </span></span>
<span class="line"><span style="color:#e1e4e8;">    用户[&lt;@shiro.principal/&gt;]拥有user:add权限</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/@shiro.hasPermission&gt;   </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">lacksPermission:如果当前Subject没有权限将显示body体内容</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;@shiro.lacksPermission name=&quot;user:add&quot;&gt;  </span></span>
<span class="line"><span style="color:#e1e4e8;">    用户[&lt;@shiro.principal/&gt;]不拥有user:add权限</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/@shiro.lacksPermission&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;@shiro.guest&gt;  </span></span>
<span class="line"><span style="color:#24292e;"> 游客访问 &lt;a href = &quot;login.jsp&quot;&gt;&lt;/ a&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/@shiro.guest&gt; </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">user 标签：用户已经通过认证\\记住我 登录后显示响应的内容</span></span>
<span class="line"><span style="color:#24292e;">&lt;@shiro.user&gt;  </span></span>
<span class="line"><span style="color:#24292e;"> 欢迎[&lt;@shiro.principal/&gt;]登录，&lt; a href=&quot;/logout.html&quot;&gt;退出&lt;/ a&gt;  </span></span>
<span class="line"><span style="color:#24292e;">&lt;/@shiro.user&gt;    </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">authenticated标签：用户身份验证通过，即 Subjec.login 登录成功 不是记住我登录的</span></span>
<span class="line"><span style="color:#24292e;">&lt;@shiro.authenticated&gt;  </span></span>
<span class="line"><span style="color:#24292e;">    用户[&lt;@shiro.principal/&gt;]已身份验证通过  </span></span>
<span class="line"><span style="color:#24292e;">&lt;/@shiro.authenticated&gt;   </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">notAuthenticated标签：用户未进行身份验证，即没有调用Subject.login进行登录,包括&quot;记住我&quot;也属于未进行身份验证</span></span>
<span class="line"><span style="color:#24292e;">&lt;@shiro.notAuthenticated&gt;</span></span>
<span class="line"><span style="color:#24292e;">    当前身份未认证（包括记住我登录的）</span></span>
<span class="line"><span style="color:#24292e;">&lt;/@shiro.notAuthenticated&gt; </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">principal 标签：显示用户身份信息，默认调用Subjec.getPrincipal()获取，即Primary Principal</span></span>
<span class="line"><span style="color:#24292e;">&lt;@shiro.principal property=&quot;username&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">hasRole标签：如果当前Subject有角色将显示body体内的内容</span></span>
<span class="line"><span style="color:#24292e;">&lt;@shiro.hasRole name=&quot;admin&quot;&gt;  </span></span>
<span class="line"><span style="color:#24292e;">    用户[&lt;@shiro.principal/&gt;]拥有角色admin&lt;br/&gt;  </span></span>
<span class="line"><span style="color:#24292e;">&lt;/@shiro.hasRole&gt; </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">hasAnyRoles标签：如果Subject有任意一个角色(或的关系)将显示body体里的内容</span></span>
<span class="line"><span style="color:#24292e;">&lt;@shiro.hasAnyRoles name=&quot;admin,user,member&quot;&gt;  </span></span>
<span class="line"><span style="color:#24292e;"> 用户[&lt;@shiro.principal/&gt;]拥有角色admin或user或member&lt;br/&gt;  </span></span>
<span class="line"><span style="color:#24292e;">&lt;/@shiro.hasAnyRoles&gt;   </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">lacksRole:如果当前 Subjec没有角色将显示body体内的内容</span></span>
<span class="line"><span style="color:#24292e;">&lt;@shiro.lacksRole name=&quot;admin&quot;&gt;  </span></span>
<span class="line"><span style="color:#24292e;"> 用户[&lt;@shiro.principal/&gt;]不拥有admin角色</span></span>
<span class="line"><span style="color:#24292e;">&lt;/@shiro.lacksRole&gt;   </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">hashPermission:如果当前Subject有权限将显示body体内容</span></span>
<span class="line"><span style="color:#24292e;">&lt;@shiro.hasPermission name=&quot;user:add&quot;&gt;  </span></span>
<span class="line"><span style="color:#24292e;">    用户[&lt;@shiro.principal/&gt;]拥有user:add权限</span></span>
<span class="line"><span style="color:#24292e;">&lt;/@shiro.hasPermission&gt;   </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">lacksPermission:如果当前Subject没有权限将显示body体内容</span></span>
<span class="line"><span style="color:#24292e;">&lt;@shiro.lacksPermission name=&quot;user:add&quot;&gt;  </span></span>
<span class="line"><span style="color:#24292e;">    用户[&lt;@shiro.principal/&gt;]不拥有user:add权限</span></span>
<span class="line"><span style="color:#24292e;">&lt;/@shiro.lacksPermission&gt;</span></span></code></pre></div>`,71),t=[p];function o(i,r,c,u,y,d){return n(),a("div",null,t)}const m=s(l,[["render",o]]);export{h as __pageData,m as default};
