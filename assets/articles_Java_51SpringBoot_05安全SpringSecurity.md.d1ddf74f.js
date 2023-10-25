import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.2516552c.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/51SpringBoot/05安全SpringSecurity.md","filePath":"articles/Java/51SpringBoot/05安全SpringSecurity.md","lastUpdated":1698198415000}'),p={name:"articles/Java/51SpringBoot/05安全SpringSecurity.md"},l=a(`<p>记住几个类：</p><ul><li><code>WebSecurityConfigurerAdapter</code>自定义Security策略</li><li><code>AuthenticationManagerBuilder</code>自定义认证策略</li><li><code>@EnableWebSecurity</code>开启Security模式</li></ul><p>Spring Security有两个目标</p><ul><li>认证<code>Authentication</code></li><li>授权<code>Authorization</code></li></ul><p>步骤：</p><p>1、引入依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>2、自定义配置类（我这里没成功，可能和登录路径有关系）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@EnableWebSecurity</span></span>
<span class="line"><span style="color:#e1e4e8;">public class SecurityConfig extends WebSecurityConfigurerAdapter {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 授权</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    protected void configure(HttpSecurity http) throws Exception {</span></span>
<span class="line"><span style="color:#e1e4e8;">        http.authorizeRequests()</span></span>
<span class="line"><span style="color:#e1e4e8;">                .antMatchers(&quot;/&quot;).permitAll() // 允许所有人</span></span>
<span class="line"><span style="color:#e1e4e8;">                .antMatchers(&quot;/blogManage/**&quot;).hasRole(&quot;vip&quot;); // 管理页需要有vip权限</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 没有权限调转登录页</span></span>
<span class="line"><span style="color:#e1e4e8;">         http.formLogin();</span></span>
<span class="line"><span style="color:#e1e4e8;">         http.logout().logoutUrl(&quot;/logout&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 认证</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    protected void configure(AuthenticationManagerBuilder auth) throws Exception {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 这些数据应该从数据库读取</span></span>
<span class="line"><span style="color:#e1e4e8;">        auth.inMemoryAuthentication().passwordEncoder(new BCryptPasswordEncoder()) // 密码加密</span></span>
<span class="line"><span style="color:#e1e4e8;">                .withUser(&quot;admin&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">                .password(new BCryptPasswordEncoder().encode(&quot;admin&quot;))</span></span>
<span class="line"><span style="color:#e1e4e8;">                .roles(&quot;vip&quot;, &quot;vip2&quot;); // 加角色</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@EnableWebSecurity</span></span>
<span class="line"><span style="color:#24292e;">public class SecurityConfig extends WebSecurityConfigurerAdapter {</span></span>
<span class="line"><span style="color:#24292e;">    // 授权</span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    protected void configure(HttpSecurity http) throws Exception {</span></span>
<span class="line"><span style="color:#24292e;">        http.authorizeRequests()</span></span>
<span class="line"><span style="color:#24292e;">                .antMatchers(&quot;/&quot;).permitAll() // 允许所有人</span></span>
<span class="line"><span style="color:#24292e;">                .antMatchers(&quot;/blogManage/**&quot;).hasRole(&quot;vip&quot;); // 管理页需要有vip权限</span></span>
<span class="line"><span style="color:#24292e;">        // 没有权限调转登录页</span></span>
<span class="line"><span style="color:#24292e;">         http.formLogin();</span></span>
<span class="line"><span style="color:#24292e;">         http.logout().logoutUrl(&quot;/logout&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 认证</span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    protected void configure(AuthenticationManagerBuilder auth) throws Exception {</span></span>
<span class="line"><span style="color:#24292e;">        // 这些数据应该从数据库读取</span></span>
<span class="line"><span style="color:#24292e;">        auth.inMemoryAuthentication().passwordEncoder(new BCryptPasswordEncoder()) // 密码加密</span></span>
<span class="line"><span style="color:#24292e;">                .withUser(&quot;admin&quot;)</span></span>
<span class="line"><span style="color:#24292e;">                .password(new BCryptPasswordEncoder().encode(&quot;admin&quot;))</span></span>
<span class="line"><span style="color:#24292e;">                .roles(&quot;vip&quot;, &quot;vip2&quot;); // 加角色</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>3、也可以想shiro一样在前端使用权限标签</p>`,10),t=[l];function o(c,r,i,u,d,y){return n(),e("div",null,t)}const q=s(p,[["render",o]]);export{h as __pageData,q as default};
