import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.2516552c.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/53Arthus/index.md","filePath":"articles/Java/53Arthus/index.md","lastUpdated":1698165159000}'),p={name:"articles/Java/53Arthus/index.md"},l=n(`<p>启动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">注意事项：用启动项目的用户登录arthus</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">1. 先查看项目的进程号</span></span>
<span class="line"><span style="color:#e1e4e8;">netstat -ntlp | grep 8083</span></span>
<span class="line"><span style="color:#e1e4e8;">2. 启动</span></span>
<span class="line"><span style="color:#e1e4e8;">java -jar arthas-boot.jar</span></span>
<span class="line"><span style="color:#e1e4e8;">3. 输入进程编号并回车</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">注意事项：用启动项目的用户登录arthus</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">1. 先查看项目的进程号</span></span>
<span class="line"><span style="color:#24292e;">netstat -ntlp | grep 8083</span></span>
<span class="line"><span style="color:#24292e;">2. 启动</span></span>
<span class="line"><span style="color:#24292e;">java -jar arthas-boot.jar</span></span>
<span class="line"><span style="color:#24292e;">3. 输入进程编号并回车</span></span></code></pre></div><p>反编译、热加载</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">反编译</span></span>
<span class="line"><span style="color:#e1e4e8;">jad --source-only com.sinovatio.owls.business.ifs.target.service.IfsTargetInfoService &gt; /tmp/IfsTargetInfoService.java</span></span>
<span class="line"><span style="color:#e1e4e8;">查看hash值</span></span>
<span class="line"><span style="color:#e1e4e8;">sc -d com.sinovatio.owls.business.ifs.target.service.IfsTargetInfoService | grep classLoaderHash</span></span>
<span class="line"><span style="color:#e1e4e8;">重新编译</span></span>
<span class="line"><span style="color:#e1e4e8;">mc -c 574caa3f /tmp/IfsTargetInfoService.java -d /tmp</span></span>
<span class="line"><span style="color:#e1e4e8;">重新加载</span></span>
<span class="line"><span style="color:#e1e4e8;">redefine /tmp/com/sinovatio/owls/business/ifs/target/service/IfsTargetInfoService.class</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">反编译</span></span>
<span class="line"><span style="color:#24292e;">jad --source-only com.sinovatio.owls.business.ifs.target.service.IfsTargetInfoService &gt; /tmp/IfsTargetInfoService.java</span></span>
<span class="line"><span style="color:#24292e;">查看hash值</span></span>
<span class="line"><span style="color:#24292e;">sc -d com.sinovatio.owls.business.ifs.target.service.IfsTargetInfoService | grep classLoaderHash</span></span>
<span class="line"><span style="color:#24292e;">重新编译</span></span>
<span class="line"><span style="color:#24292e;">mc -c 574caa3f /tmp/IfsTargetInfoService.java -d /tmp</span></span>
<span class="line"><span style="color:#24292e;">重新加载</span></span>
<span class="line"><span style="color:#24292e;">redefine /tmp/com/sinovatio/owls/business/ifs/target/service/IfsTargetInfoService.class</span></span></code></pre></div><p>方法异常定位</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 耗时 + 执行异常</span></span>
<span class="line"><span style="color:#e1e4e8;">trace *.TargetManageService setToRedis</span></span>
<span class="line"><span style="color:#e1e4e8;">// 方法出参 入参</span></span>
<span class="line"><span style="color:#e1e4e8;">watch *.LinkAnalysisService queryBeforeToday &#39;{params[0].toString(),returnObj.toString()}&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 耗时 + 执行异常</span></span>
<span class="line"><span style="color:#24292e;">trace *.TargetManageService setToRedis</span></span>
<span class="line"><span style="color:#24292e;">// 方法出参 入参</span></span>
<span class="line"><span style="color:#24292e;">watch *.LinkAnalysisService queryBeforeToday &#39;{params[0].toString(),returnObj.toString()}&#39;</span></span></code></pre></div><p>线程定位</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">arthus线程定位：thread all</span></span>
<span class="line"><span style="color:#e1e4e8;">jdk命令行工具查看jvm内存：</span></span>
<span class="line"><span style="color:#e1e4e8;">jstat -gc 2764 250 20   // 每250毫秒查看2764进程的垃圾收集情况，查看20次。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">arthus线程定位：thread all</span></span>
<span class="line"><span style="color:#24292e;">jdk命令行工具查看jvm内存：</span></span>
<span class="line"><span style="color:#24292e;">jstat -gc 2764 250 20   // 每250毫秒查看2764进程的垃圾收集情况，查看20次。</span></span></code></pre></div>`,8),t=[l];function o(c,r,i,d,v,g){return a(),e("div",null,t)}const u=s(p,[["render",o]]);export{h as __pageData,u as default};
