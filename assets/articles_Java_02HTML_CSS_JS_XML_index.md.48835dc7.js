import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.2516552c.js";const e="/assets/image-20210326192727486.4f9a6e5b.png",p="/assets/image-20210326192925599.b850cc68.png",h=JSON.parse('{"title":"HTML","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/02HTML+CSS+JS+XML/index.md","filePath":"articles/Java/02HTML+CSS+JS+XML/index.md","lastUpdated":1698149129000}'),t={name:"articles/Java/02HTML+CSS+JS+XML/index.md"},o=l(`<h1 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to &quot;HTML&quot;">​</a></h1><p>因为早期HTML在各个浏览器之间不互相兼容，导致HTML编码规则混乱，违背了HTML发明的初衷，因此需要一个中立的组织来制定和维护统一的国际化Web开发标准，确保多个浏览器都兼容，由此**万维网联盟（World wide Web Consortium）**诞生了。</p><p>W3C不是某一个标准，而是一系列标准集合。 一个网页主要分为三部分组成，即结构（Structure）、表现（Presentation）和行为（Behavior）。它们对应三种技术，即HTML、CSS、JavaScript。</p><h2 id="基本文档" tabindex="-1">基本文档 <a class="header-anchor" href="#基本文档" aria-label="Permalink to &quot;基本文档&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;  &lt;!--这里其实是HTML5的声明--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;  &lt;!--这里其实是HTML5的声明--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;title&gt;&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><h2 id="文本格式化" tabindex="-1">文本格式化 <a class="header-anchor" href="#文本格式化" aria-label="Permalink to &quot;文本格式化&quot;">​</a></h2><ol><li>注释 <code>&lt;!-- 注释 --&gt;</code></li><li>换行<code>&lt;br&gt;</code></li><li>标题<code>&lt;h1&gt;&lt;/h1&gt;</code></li><li>段落 <code>&lt;p&gt;&lt;/p&gt;</code></li><li>分割线<code>&lt;hr&gt;</code> ，属性：color width size align</li><li>加粗<code>&lt;b&gt;&lt;/b&gt;</code></li><li>斜体<code>&lt;i&gt;&lt;/i&gt;</code></li><li>字体<code>&lt;font&gt;&lt;/font&gt;</code> ，属性：color size face</li><li>居中<code>&lt;center&gt;&lt;/center&gt;</code></li></ol><p>注意，HTML5不建议使用标签属性，建议使用css设置。属性值单双引号都可以。</p><p>属性color的表示：</p><ol><li>英文：red green blue</li><li><code>rgb(0, 0, 255)</code></li><li>十六进制<code>#0000FF</code></li></ol><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>标签：<code>&lt;img src=&quot;./image/test.jpg&quot;&gt;</code></p><p>属性：</p><ol><li>align width height</li><li>alt=&quot;xxx&quot;, 提示信息，如图片加载失败</li></ol><h2 id="列表" tabindex="-1">列表 <a class="header-anchor" href="#列表" aria-label="Permalink to &quot;列表&quot;">​</a></h2><p>标签：</p><ol><li>有序<code>&lt;ol&gt; &lt;li&gt;&lt;/li&gt; &lt;/ol&gt;</code></li><li>无序<code>&lt;ul&gt; &lt;li&gt;&lt;/li&gt; &lt;/ul&gt;</code></li></ol><p>列表属性：</p><ol><li>有序type（序号）：1 A a I i</li><li>无序type（形状）: disc square circle</li></ol><h2 id="超链接" tabindex="-1">超链接 <a class="header-anchor" href="#超链接" aria-label="Permalink to &quot;超链接&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">普通的链接：&lt;a href=&quot;http://www.example.com/&quot; target=&quot;_blank&quot;&gt;链接文本&lt;/a&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">图像链接： &lt;a href=&quot;http://www.example.com/&quot;&gt;&lt;img src=&quot;URL&quot; alt=&quot;替换文本&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">邮件链接： &lt;a href=&quot;mailto:webmaster@example.com&quot;&gt;发送e-mail&lt;/a&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">书签：&lt;a id=&quot;tips&quot;&gt;提示部分&lt;/a&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	 &lt;a href=&quot;#tips&quot;&gt;跳到提示部分&lt;/a&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">普通的链接：&lt;a href=&quot;http://www.example.com/&quot; target=&quot;_blank&quot;&gt;链接文本&lt;/a&gt;</span></span>
<span class="line"><span style="color:#24292e;">图像链接： &lt;a href=&quot;http://www.example.com/&quot;&gt;&lt;img src=&quot;URL&quot; alt=&quot;替换文本&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span style="color:#24292e;">邮件链接： &lt;a href=&quot;mailto:webmaster@example.com&quot;&gt;发送e-mail&lt;/a&gt;</span></span>
<span class="line"><span style="color:#24292e;">书签：&lt;a id=&quot;tips&quot;&gt;提示部分&lt;/a&gt;</span></span>
<span class="line"><span style="color:#24292e;">	 &lt;a href=&quot;#tips&quot;&gt;跳到提示部分&lt;/a&gt;</span></span></code></pre></div><p>属性：</p><ol><li>target打开位置：_self当前标签打开 _blank空白标签打开</li></ol><h2 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-label="Permalink to &quot;表格&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;table border=&quot;1&quot; cellspacing=&quot;0&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;caption&gt;信息表&lt;/caption&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;th&gt;ID&lt;/th&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;th&gt;姓名&lt;/th&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;th&gt;年龄&lt;/th&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;1&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;张三&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;28&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/table&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;table border=&quot;1&quot; cellspacing=&quot;0&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;caption&gt;信息表&lt;/caption&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;th&gt;ID&lt;/th&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;th&gt;姓名&lt;/th&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;th&gt;年龄&lt;/th&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;1&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;张三&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;28&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/table&gt;</span></span></code></pre></div><p>表格属性：width border cellpadding cellspacing bgcolor align</p><p>HTML5新增（没有格式）：</p><ul><li><code>&lt;thead&gt;</code> 表格头</li><li><code>&lt;tbody&gt;</code> 表格体</li><li><code>&lt;tfoot&gt;</code> 表格尾</li></ul><p>行属性：bgcolor align</p><p>单元格属性：colspan合并列 rowspan合并行</p><h2 id="表单" tabindex="-1">表单 <a class="header-anchor" href="#表单" aria-label="Permalink to &quot;表单&quot;">​</a></h2><p>method有get和post两种</p><ul><li>get显示密码，参数长度受限，封装在请求行中。</li><li>post不会显示，参数长度不限制，会封装在请求体内。</li></ul><p>标签：</p><ul><li>input：通过type属性改变样式（text，password，radio，checkbox，file，date）</li><li>select: 下拉列表</li><li>textarea: 文本域</li></ul><p><code>&lt;label for=&quot;name&quot;&gt;&lt;/label&gt;</code>标签中的for属性需要后面的有一个id属性，说明标签对应的选项。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;form action=&quot;#&quot; method=&quot;get&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;label for=&quot;username&quot;&gt;昵称：&lt;/label&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;input type=&quot;text&quot; name=&quot;username&quot; placeholder=&quot;请输入用户名&quot; id=&quot;username&quot;&gt;  &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;label for=&quot;password&quot;&gt;密码：&lt;/label&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;input type=&quot;password&quot; name=&quot;password&quot; id=&quot;password&quot;&gt;  &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">性别：&lt;input type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;male&quot; checked&gt; 男</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;input type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;female&quot;&gt; 女 &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">爱好：&lt;input type=&quot;checkbox&quot; name=&quot;hobby&quot; value=&quot;read&quot;&gt; 读书</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;input type=&quot;checkbox&quot; name=&quot;hobby&quot; value=&quot;java&quot; checked&gt; Java &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">图片：&lt;input type=&quot;file&quot; name=&quot;file&quot;&gt; &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">生日：&lt;input type=&quot;date&quot; name=&quot;birth&quot;&gt; &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!--下拉列表--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">地区：</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;select name=&quot;city&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;option selected&gt; --请选择--&lt;/option&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;option value=&quot;1&quot;&gt;北京&lt;/option&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;option value=&quot;2&quot;&gt;南京&lt;/option&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/select&gt; &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">备注：&lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;textarea cols=&quot;20&quot; rows=&quot;3&quot;&gt; &lt;/textarea&gt; &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!--隐藏域--&gt; &lt;input type=&quot;hidden&quot; name=&quot;id&quot; value=&quot;aaa&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!--一般提交按钮--&gt; &lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt; &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!--图片提交按钮--&gt; &lt;input type=&quot;image&quot; src=&quot;image/icon_1.jpg&quot;&gt; &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/form&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;form action=&quot;#&quot; method=&quot;get&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;label for=&quot;username&quot;&gt;昵称：&lt;/label&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;input type=&quot;text&quot; name=&quot;username&quot; placeholder=&quot;请输入用户名&quot; id=&quot;username&quot;&gt;  &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;label for=&quot;password&quot;&gt;密码：&lt;/label&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;input type=&quot;password&quot; name=&quot;password&quot; id=&quot;password&quot;&gt;  &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">性别：&lt;input type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;male&quot; checked&gt; 男</span></span>
<span class="line"><span style="color:#24292e;">     &lt;input type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;female&quot;&gt; 女 &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">爱好：&lt;input type=&quot;checkbox&quot; name=&quot;hobby&quot; value=&quot;read&quot;&gt; 读书</span></span>
<span class="line"><span style="color:#24292e;">     &lt;input type=&quot;checkbox&quot; name=&quot;hobby&quot; value=&quot;java&quot; checked&gt; Java &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">图片：&lt;input type=&quot;file&quot; name=&quot;file&quot;&gt; &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">生日：&lt;input type=&quot;date&quot; name=&quot;birth&quot;&gt; &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--下拉列表--&gt;</span></span>
<span class="line"><span style="color:#24292e;">地区：</span></span>
<span class="line"><span style="color:#24292e;">&lt;select name=&quot;city&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;option selected&gt; --请选择--&lt;/option&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;option value=&quot;1&quot;&gt;北京&lt;/option&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;option value=&quot;2&quot;&gt;南京&lt;/option&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/select&gt; &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">备注：&lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;textarea cols=&quot;20&quot; rows=&quot;3&quot;&gt; &lt;/textarea&gt; &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--隐藏域--&gt; &lt;input type=&quot;hidden&quot; name=&quot;id&quot; value=&quot;aaa&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;!--一般提交按钮--&gt; &lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt; &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--图片提交按钮--&gt; &lt;input type=&quot;image&quot; src=&quot;image/icon_1.jpg&quot;&gt; &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/form&gt;</span></span></code></pre></div><h2 id="块" tabindex="-1">块 <a class="header-anchor" href="#块" aria-label="Permalink to &quot;块&quot;">​</a></h2><p>标签：</p><ol><li><code>&lt;dev&gt;&lt;/dev&gt;</code>占一行，块级别</li><li><code>&lt;span&gt;&lt;/span&gt;</code> 行内标签</li></ol><h2 id="字符实体" tabindex="-1">字符实体 <a class="header-anchor" href="#字符实体" aria-label="Permalink to &quot;字符实体&quot;">​</a></h2><p>比如大于号，小于号，在HTML中不能用，必须将这些字符转换为字符实体</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;		&amp;lt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;		&amp;gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&amp;		&amp;amp;</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;		&amp;quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;		&amp;lt;</span></span>
<span class="line"><span style="color:#24292e;">&gt;		&amp;gt;</span></span>
<span class="line"><span style="color:#24292e;">&amp;		&amp;amp;</span></span>
<span class="line"><span style="color:#24292e;">&quot;		&amp;quot;</span></span></code></pre></div><h2 id="js脚本" tabindex="-1">js脚本 <a class="header-anchor" href="#js脚本" aria-label="Permalink to &quot;js脚本&quot;">​</a></h2><p>一般方法body最后，先显示界面，最后再加载脚本。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(&quot;Hello World!&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt; </span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">document.write(&quot;Hello World!&quot;)</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt; </span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><h1 id="xhtml" tabindex="-1">XHTML <a class="header-anchor" href="#xhtml" aria-label="Permalink to &quot;XHTML&quot;">​</a></h1><ul><li>XHTML 是以 XML 格式编写的 HTML；</li><li>XHTML 与 HTML 4.01 几乎是相同的；</li><li>XHTML 是更严格更纯净的 HTML 版本；</li><li>XHTML 是2001年1月发布的 W3C 推荐标准。</li></ul><p>XHTML与HTML区别：</p><ul><li>必须声明<code>&lt;!DOCTYPE...&gt;</code></li><li>必须有标签<code>&lt;html&gt;、&lt;head&gt;、&lt;title&gt;、&lt;body&gt;</code></li><li>标签必须闭合<code>&lt;p&gt;段落&lt;/p&gt;</code>，<code>分行 &lt;br /&gt;</code></li><li>元素必须小写，属性必须引号包围</li></ul><h1 id="html5" tabindex="-1">HTML5 <a class="header-anchor" href="#html5" aria-label="Permalink to &quot;HTML5&quot;">​</a></h1><p>WHATWG 致力于 web 表单和应用程序，而 W3C 专注于 XHTML 2.0。在 2006 年，双方决定进行合作，来创建一个新版本的 HTML。</p><p>HTML5规范于2014年10月29日由万维网联盟正式宣布。</p><p>HTML5 中的一些有趣的新特性：</p><ul><li>用于绘画的 canvas 元素</li><li>用于媒介回放的 video 和 audio 元素</li><li>对本地离线存储的更好的支持</li><li>新的特殊内容元素，比如 article、footer、header、nav、section</li><li>新的表单控件，比如 calendar、date、time、email、url、search</li></ul><h1 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h1><h2 id="css使用方式" tabindex="-1">CSS使用方式 <a class="header-anchor" href="#css使用方式" aria-label="Permalink to &quot;CSS使用方式&quot;">​</a></h2><p>Cascading style sheets层叠样式表</p><p>使用方式：</p><ol><li>内联样式：定义在标签内<code>&lt;div style=&quot;color:red;&quot;&gt;&lt;/div&gt;</code></li><li>内部样式：定义在head内，在<code>&lt;style&gt; div{...} &lt;/style&gt;</code>定义</li><li>外部样式： <ul><li>外部定义一个<code>.css</code>文件，里面是<code>div{...}</code>等内容；</li><li>页面用<code>&lt;link rel=&quot;stylesheet&quot; href=&quot;css/xx.css&quot;&gt;</code>引用</li></ul></li></ol><h2 id="css定义" tabindex="-1">CSS定义 <a class="header-anchor" href="#css定义" aria-label="Permalink to &quot;CSS定义&quot;">​</a></h2><p>语法：</p><ol><li>css定义格式：<code>选择器{属性名:属性值;...}</code></li><li>选择器：基本选择器，扩展选择器</li><li>属性：有许多，下一章讲</li></ol><p>基本选择器：</p><ul><li>元素选择器：等级最低</li><li>类选择器<code>class=&quot;xxx&quot;</code>：等级中间，设置具有同样属性的内容，可以共用。</li><li>id选择器<code>id=&quot;xxx&quot;</code>：等级最高，设置特定标签的内容，单独使用。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;Test&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        #div1{color: red;}</span></span>
<span class="line"><span style="color:#e1e4e8;">        div{color: green;}</span></span>
<span class="line"><span style="color:#e1e4e8;">        .cls1{color: blue;}</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div id=&quot;div1&quot;&gt;Hello&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div&gt;Word&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div class=&quot;cls1&quot;&gt;haha&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;Test&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">        #div1{color: red;}</span></span>
<span class="line"><span style="color:#24292e;">        div{color: green;}</span></span>
<span class="line"><span style="color:#24292e;">        .cls1{color: blue;}</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div id=&quot;div1&quot;&gt;Hello&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div&gt;Word&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div class=&quot;cls1&quot;&gt;haha&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p>扩展选择器：</p><ol><li>选择所有元素：<code>*{}</code>；</li><li>并集选择器：<code>选择器1,选择器2{}</code>；</li><li>子选择器：<code>选择器1 选择器2{}</code>；</li><li>父选择器：<code>选择器1&gt;选择器2{}</code> ；</li><li>属性选择器：<code>元素名称[属性名=&quot;属性值&quot;]{}</code>；</li><li>伪类选择器：<code>元素:状态{}</code>， 比如<code>a:link{color:red;}</code>；</li></ol><h2 id="css属性" tabindex="-1">CSS属性 <a class="header-anchor" href="#css属性" aria-label="Permalink to &quot;CSS属性&quot;">​</a></h2><p>文本</p><ol><li><code>font-size: 20px;</code></li><li><code>color: red;</code></li><li><code>text-align: left;</code></li><li><code>line-height: 15px;</code></li></ol><p>背景: <code>background: url(&quot;image/logo.jpg&quot;) no-repeat center;</code></p><p>边框: <code>border: 1px solid green;</code></p><p>尺寸: <code>width: 200px; height: 100px;</code></p><p>盒子模型</p><ol><li>外边距<code>margin: 50px 50px;</code></li><li>内边距<code>padding: 50px 50px;</code>默认情况下，内边距会影响盒子大小</li><li>float：<code>float:left;</code></li></ol><h1 id="_1-javascript" tabindex="-1">1 JavaScript <a class="header-anchor" href="#_1-javascript" aria-label="Permalink to &quot;1  JavaScript&quot;">​</a></h1><p>JavaScript由于历史的演变，其内容包括：</p><ul><li>ECMAScript：所有客户端语言的标准（比如SQL）</li><li>JavaScript：自己特有的东西，包括： <ul><li>BOM浏览器对象模型，如弹窗、窗口缩放等</li><li>DOM文档对象模型，控制页面显示的内容</li></ul></li></ul><p>JavaScript是弱类型语言，定义变量不需要指定类型，如<code>var a = &quot;123&quot;;</code></p><h2 id="_1-1-ecmascript" tabindex="-1">1.1 ECMAScript <a class="header-anchor" href="#_1-1-ecmascript" aria-label="Permalink to &quot;1.1  ECMAScript&quot;">​</a></h2><p>基本语法：基本类型、运算、流程控制语句。（和java很像）</p><p>基本对象：除了基本类型，其余都是对象，如：</p><ul><li>函数对象：<code>var fun1 = function(){...}</code></li><li>数组对象：<code>var arr = [1, 2, &quot;hello&quot;];</code></li><li>正则化</li><li>其他常用：<code>int a = parseInt(str);</code>字符串转数字</li></ul><h3 id="基本语法" tabindex="-1">基本语法 <a class="header-anchor" href="#基本语法" aria-label="Permalink to &quot;基本语法&quot;">​</a></h3><ol><li><p>与html结合方式</p><ul><li>内部结合：任意位置<code>&lt;script&gt;alert(&quot;hello world&quot;);&lt;/script&gt;</code></li><li>外部结合：<code>&lt;script src=&quot;js/a.js&quot;&gt;&lt;/script&gt;</code></li></ul></li><li><p>注释</p><ul><li>单行 //</li><li>多行 /* */</li></ul></li><li><p>数据类型</p><ul><li>原始数据类型（基本数据类型） <ul><li>number：数字（整数、小时、NaN）</li><li>string：字符串，单引号双引号都可以</li><li>boolean：true和false</li><li>null：一个对象为空的占位符</li><li>undefined：如果一个变量未初始化，默认为undefined类型</li></ul></li><li>引用数据类型（对象）</li></ul></li><li><p>变量</p><ul><li>js是如类型型语言，定义为：<code>var a = 12; alert(a);</code></li></ul></li><li><p>运算符</p><ul><li>一元运算符：++，--，+(正号，数据类型转换string转int)，-(负号)</li><li>算数运算符：+ - * / %</li><li>复制运算符：=, +=, -=</li><li>比较运算符：&gt;, &lt;, &gt;=, &lt;=, ==（先转化成相同类型）, ===(全等于，先比较类型，再比较值)</li><li>逻辑运算符：&amp;&amp;, ||, !</li><li>三元运算符：？:</li></ul></li><li><p>流程控制语句</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">var a = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">switch(a){</span></span>
<span class="line"><span style="color:#e1e4e8;">    case 1: alert(&quot;number&quot;); break;</span></span>
<span class="line"><span style="color:#e1e4e8;">    case &quot;abc&quot;: alert(&quot;string&quot;); break;</span></span>
<span class="line"><span style="color:#e1e4e8;">    case undefines: alert(&quot;undefined&quot;); break;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">var b = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">while(b&lt;=100){b++;}</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(b + &quot;&lt;br&gt;&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">for(var i=1; i&lt;=100; i++){b++;}</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(b);</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">var a = 1;</span></span>
<span class="line"><span style="color:#24292e;">switch(a){</span></span>
<span class="line"><span style="color:#24292e;">    case 1: alert(&quot;number&quot;); break;</span></span>
<span class="line"><span style="color:#24292e;">    case &quot;abc&quot;: alert(&quot;string&quot;); break;</span></span>
<span class="line"><span style="color:#24292e;">    case undefines: alert(&quot;undefined&quot;); break;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">var b = 1;</span></span>
<span class="line"><span style="color:#24292e;">while(b&lt;=100){b++;}</span></span>
<span class="line"><span style="color:#24292e;">document.write(b + &quot;&lt;br&gt;&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">for(var i=1; i&lt;=100; i++){b++;}</span></span>
<span class="line"><span style="color:#24292e;">document.write(b);</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div></li></ol><h3 id="基本对象" tabindex="-1">基本对象 <a class="header-anchor" href="#基本对象" aria-label="Permalink to &quot;基本对象&quot;">​</a></h3><p>在js里面方法（函数）也是对象。</p><p>Function对象：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 方法1</span></span>
<span class="line"><span style="color:#e1e4e8;">function add(a, b) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return a+b;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">var a = add(1, 2);</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(a);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 方法2</span></span>
<span class="line"><span style="color:#e1e4e8;">function addAll(){</span></span>
<span class="line"><span style="color:#e1e4e8;">    var sum = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    for (var i=0; i&lt; arguments.length; i++){</span></span>
<span class="line"><span style="color:#e1e4e8;">        sum += arguments[i];</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return sum;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(addAll(1, 2, 3, 4));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 方法1</span></span>
<span class="line"><span style="color:#24292e;">function add(a, b) {</span></span>
<span class="line"><span style="color:#24292e;">    return a+b;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">var a = add(1, 2);</span></span>
<span class="line"><span style="color:#24292e;">document.write(a);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 方法2</span></span>
<span class="line"><span style="color:#24292e;">function addAll(){</span></span>
<span class="line"><span style="color:#24292e;">    var sum = 0;</span></span>
<span class="line"><span style="color:#24292e;">    for (var i=0; i&lt; arguments.length; i++){</span></span>
<span class="line"><span style="color:#24292e;">        sum += arguments[i];</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return sum;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">document.write(addAll(1, 2, 3, 4));</span></span></code></pre></div><p>Array：（数组中类型可变，数组长度可变）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var arr = [1, 2, 3];</span></span>
<span class="line"><span style="color:#e1e4e8;">var arr2 = new Array([1, &quot;abc&quot;, true]);</span></span>
<span class="line"><span style="color:#e1e4e8;">var arr3 = new Array(10); // 长度</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(arr3.length + &quot;&lt;br&gt;&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(arr3.join() + &quot;&lt;br&gt;&quot;); // 拼接成字符串</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var arr = [1, 2, 3];</span></span>
<span class="line"><span style="color:#24292e;">var arr2 = new Array([1, &quot;abc&quot;, true]);</span></span>
<span class="line"><span style="color:#24292e;">var arr3 = new Array(10); // 长度</span></span>
<span class="line"><span style="color:#24292e;">document.write(arr3.length + &quot;&lt;br&gt;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">document.write(arr3.join() + &quot;&lt;br&gt;&quot;); // 拼接成字符串</span></span></code></pre></div><p>Date：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var date = new Date();</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(date.toLocaleString()); // 和当前电脑格式一致</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var date = new Date();</span></span>
<span class="line"><span style="color:#24292e;">document.write(date.toLocaleString()); // 和当前电脑格式一致</span></span></code></pre></div><p>RegExp正则表达式:</p><ol><li>单个字符 <ul><li><code>[ab]</code> a或者b</li><li><code>[a-zA-Z]</code> a-Z其中一个字符</li><li><code>\\d</code> 单个数字</li><li><code>\\w</code> 单个字母</li></ul></li><li>量词 <ul><li><code>?</code> 0次或1次</li><li><code>*</code> 0次或多次</li><li><code>+</code> 1次或多次</li><li><code>{m,n}</code> m,n次</li></ul></li><li>开始结束：<code>^$</code></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// var reg = new RegExp(&quot;^\\\\w{6,12}$&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">var reg = /^\\w{6,12}$/;</span></span>
<span class="line"><span style="color:#e1e4e8;">var username = &quot;zhangsan&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">var flag = reg.test(username);</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(flag);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// var reg = new RegExp(&quot;^\\\\w{6,12}$&quot;);</span></span>
<span class="line"><span style="color:#24292e;">var reg = /^\\w{6,12}$/;</span></span>
<span class="line"><span style="color:#24292e;">var username = &quot;zhangsan&quot;;</span></span>
<span class="line"><span style="color:#24292e;">var flag = reg.test(username);</span></span>
<span class="line"><span style="color:#24292e;">document.write(flag);</span></span></code></pre></div><p>Global：全局对象，Global封装的方法不需要创建就可以直接调用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// encodeURI编码：将字符编码成16进制</span></span>
<span class="line"><span style="color:#e1e4e8;">var str = &quot;百度知道&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">var url = encodeURI(str);</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(url + &quot;&lt;br&gt;&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">var s = decodeURI(url) + &quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(s);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// encodeURIComponent：可以编码更多的字符，比如（/ ?等）</span></span>
<span class="line"><span style="color:#e1e4e8;">var str = &quot;百度知道&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">var url = encodeURIComponent(str);</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(url + &quot;&lt;br&gt;&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">var s = decodeURIComponent(url) + &quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(s);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// parseInt(): 字符串转数字</span></span>
<span class="line"><span style="color:#e1e4e8;">var str = &quot;123sa456&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">document.write(parseInt(str) + &quot;&lt;br&gt;&quot;);  // 输出123 </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// eval(): 将js字符串转成脚本执行</span></span>
<span class="line"><span style="color:#e1e4e8;">var jscode = &quot;alert(123)&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">eval(jscode);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// encodeURI编码：将字符编码成16进制</span></span>
<span class="line"><span style="color:#24292e;">var str = &quot;百度知道&quot;;</span></span>
<span class="line"><span style="color:#24292e;">var url = encodeURI(str);</span></span>
<span class="line"><span style="color:#24292e;">document.write(url + &quot;&lt;br&gt;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">var s = decodeURI(url) + &quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span style="color:#24292e;">document.write(s);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// encodeURIComponent：可以编码更多的字符，比如（/ ?等）</span></span>
<span class="line"><span style="color:#24292e;">var str = &quot;百度知道&quot;;</span></span>
<span class="line"><span style="color:#24292e;">var url = encodeURIComponent(str);</span></span>
<span class="line"><span style="color:#24292e;">document.write(url + &quot;&lt;br&gt;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">var s = decodeURIComponent(url) + &quot;&lt;br&gt;&quot;;</span></span>
<span class="line"><span style="color:#24292e;">document.write(s);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// parseInt(): 字符串转数字</span></span>
<span class="line"><span style="color:#24292e;">var str = &quot;123sa456&quot;;</span></span>
<span class="line"><span style="color:#24292e;">document.write(parseInt(str) + &quot;&lt;br&gt;&quot;);  // 输出123 </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// eval(): 将js字符串转成脚本执行</span></span>
<span class="line"><span style="color:#24292e;">var jscode = &quot;alert(123)&quot;;</span></span>
<span class="line"><span style="color:#24292e;">eval(jscode);</span></span></code></pre></div><p>其他：Math/Boolean/Number/String等等</p><h2 id="_1-2-bom" tabindex="-1">1.2 BOM <a class="header-anchor" href="#_1-2-bom" aria-label="Permalink to &quot;1.2  BOM&quot;">​</a></h2><p>浏览器对象模型，包括：</p><ol><li>Window窗口对象</li><li>Location地址栏对象：<code>window.location</code></li><li>History历史记录对象：<code>window.history</code></li><li>Navigator浏览器对象（浏览器版本等，不学）</li><li>Screen显示器屏幕对象（显示器大小型号等，不学）</li></ol><h3 id="window" tabindex="-1">Window <a class="header-anchor" href="#window" aria-label="Permalink to &quot;Window&quot;">​</a></h3><p>不用创建，省略window，直接使用，如：<code>window.alert(&quot;hello&quot;);</code></p><p>常用方法有3类：</p><p>与弹出框有关的方法：alert()警告 confirm()确认 prompt()输入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var flag = confirm(&quot;确认删除？&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">if (!flag) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    alert(&quot;已删除&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">var str = prompt(&quot;请输入字符串&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">alert(str);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var flag = confirm(&quot;确认删除？&quot;);</span></span>
<span class="line"><span style="color:#24292e;">if (!flag) {</span></span>
<span class="line"><span style="color:#24292e;">    alert(&quot;已删除&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">var str = prompt(&quot;请输入字符串&quot;);</span></span>
<span class="line"><span style="color:#24292e;">alert(str);</span></span></code></pre></div><p>与打开关闭有关的方法：open() close()</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var newWin = open(&quot;http://www.baidu.com&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">newWin.close();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var newWin = open(&quot;http://www.baidu.com&quot;);</span></span>
<span class="line"><span style="color:#24292e;">newWin.close();</span></span></code></pre></div><p>与定时器有关的方法：setTimeout() clearTimeout() setInterval() clearInterval</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function fun1() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    alert(&quot;倒计时结束&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// 一次性定时器</span></span>
<span class="line"><span style="color:#e1e4e8;">var id1 = setTimeout(fun1, 2000);</span></span>
<span class="line"><span style="color:#e1e4e8;">clearTimeout(id1);</span></span>
<span class="line"><span style="color:#e1e4e8;">// 循环定时器</span></span>
<span class="line"><span style="color:#e1e4e8;">setInterval(fun1, 2000);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function fun1() {</span></span>
<span class="line"><span style="color:#24292e;">    alert(&quot;倒计时结束&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// 一次性定时器</span></span>
<span class="line"><span style="color:#24292e;">var id1 = setTimeout(fun1, 2000);</span></span>
<span class="line"><span style="color:#24292e;">clearTimeout(id1);</span></span>
<span class="line"><span style="color:#24292e;">// 循环定时器</span></span>
<span class="line"><span style="color:#24292e;">setInterval(fun1, 2000);</span></span></code></pre></div><h3 id="location" tabindex="-1">Location <a class="header-anchor" href="#location" aria-label="Permalink to &quot;Location&quot;">​</a></h3><p>地址栏对象：</p><ol><li>常用方法有：重新加载页面<code>location.reload();</code></li><li>常用属性有：网站地址：<code>location.href(&quot;http://www.baidu.com&quot;);</code></li></ol><h2 id="_1-3-dom" tabindex="-1">1.3 DOM <a class="header-anchor" href="#_1-3-dom" aria-label="Permalink to &quot;1.3  DOM&quot;">​</a></h2><p>文档对象模型：将标记语言各个部分封装成对象，使用这些对象，对文档进行增删改查。</p><p>W3C DOM标准被分成三个不同的部分：</p><ol><li><p>核心 DOM：针对标记语言的标准模型</p><ul><li>Document文档对象</li><li>Element元素对象</li><li>Attribute属性对象</li><li>Text文本对象</li><li>Comment注释对象</li><li>Node节点对象（上面几个的父对象）</li></ul></li><li><p>XML DOM：针对XML文档的标准模型</p></li><li><p>HTML DOM：针对HTML文档的标准模型</p></li></ol><h3 id="核心dom" tabindex="-1">核心DOM <a class="header-anchor" href="#核心dom" aria-label="Permalink to &quot;核心DOM&quot;">​</a></h3><p><strong>Document</strong></p><ul><li>获取元素：<code>var btn = document.getElementById(&quot;btn&quot;);</code></li><li>获取元素的值：<code>var age = document.getElementById(&quot;age&quot;).value;</code></li><li>创建元素：<code>var table = document.createElement(&quot;table&quot;);</code></li></ul><p><strong>Node</strong>：节点对象可以是元素、属性、文本等。</p><ul><li>常用增删改查方法：(获取父元素，对子元素增删改查) <ul><li>appendChild()</li><li>removeChild()</li><li>replaceChild()</li></ul></li><li>常用属性： <ul><li>parentNode：获取父节点</li></ul></li></ul><h3 id="html-dom" tabindex="-1">HTML DOM <a class="header-anchor" href="#html-dom" aria-label="Permalink to &quot;HTML DOM&quot;">​</a></h3><p>HTML DOM：针对HTML文档的标准模型，主要有：</p><ul><li>标签体的设置和获取：<code>div1.innerHTML(&quot;Hello &lt;br&gt;&quot;)</code></li><li>使用html元素对象的属性：<code>img.src=&quot;aaa.jpg&quot;;</code></li><li>控制样式： <ul><li><code>div1.style.border = &quot;1px solid red;&quot;</code></li><li><code>div1.className = &#39;d1&#39;;</code> 赋值一个定义好的CSS样式</li></ul></li></ul><h3 id="event-事件" tabindex="-1">Event 事件 <a class="header-anchor" href="#event-事件" aria-label="Permalink to &quot;Event 事件&quot;">​</a></h3><p>Event属于HTML DOM。</p><p>概念：某些组件的执行，触发了某些代码的执行。</p><p>简单使用：（赋值一个方法）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 执行代码没有参数</span></span>
<span class="line"><span style="color:#e1e4e8;">document.getElementById(&quot;btn&quot;).onclick = function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    alert(&quot;hello&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// 执行代码有事件参数</span></span>
<span class="line"><span style="color:#e1e4e8;">document.getElementById(&quot;name&quot;).onkeydown = function (event) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    alert(event.keyCode);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 执行代码没有参数</span></span>
<span class="line"><span style="color:#24292e;">document.getElementById(&quot;btn&quot;).onclick = function () {</span></span>
<span class="line"><span style="color:#24292e;">    alert(&quot;hello&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// 执行代码有事件参数</span></span>
<span class="line"><span style="color:#24292e;">document.getElementById(&quot;name&quot;).onkeydown = function (event) {</span></span>
<span class="line"><span style="color:#24292e;">    alert(event.keyCode);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>常见事件：</p><ol><li>点击： <ul><li>onclick</li><li>ondbclick</li></ul></li><li>焦点： <ul><li>onblur失去焦点：常用于表单校验</li><li>onfocus获得焦点</li></ul></li><li>加载：onload <code>window.onload = function(){...}</code></li><li>鼠标事件 <ul><li>onmousedown鼠标按下</li><li>onmouseup松开</li><li>onmousemove移动</li><li>onmouseover覆盖</li><li>onmouseout移开</li></ul></li><li>键盘事件 <ul><li>onkeydown键盘按下</li><li>onkeyup松开</li><li>onkeypress按下并松开</li></ul></li><li>选中和改变 <ul><li>onchange域的内容发生改变</li><li>onselect文本被选中</li></ul></li><li>表单事件 <ul><li>onsubmit提交表单（可以阻止表单提交）</li><li>onreset重置</li></ul></li></ol><h2 id="_1-4-案例" tabindex="-1">1.4 案例 <a class="header-anchor" href="#_1-4-案例" aria-label="Permalink to &quot;1.4  案例&quot;">​</a></h2><h3 id="轮播" tabindex="-1">轮播 <a class="header-anchor" href="#轮播" aria-label="Permalink to &quot;轮播&quot;">​</a></h3><p>知识点：</p><ul><li>BOM中setInterval()设置倒计时。</li><li>DOM中getElementById()获取元素，并修改属性。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var i = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">var imgs = [&quot;img/banner_1.jpg&quot;, &quot;img/banner_2.jpg&quot;];</span></span>
<span class="line"><span style="color:#e1e4e8;">function fun1() {</span></span>
<span class="line"><span style="color:#e1e4e8;">	var cur = document.getElementById(&quot;banner&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">	if(i==1){ i=0; }else{ i=1; }</span></span>
<span class="line"><span style="color:#e1e4e8;">	cur.src = imgs[i];</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">setInterval(fun1, 3000);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var i = 0;</span></span>
<span class="line"><span style="color:#24292e;">var imgs = [&quot;img/banner_1.jpg&quot;, &quot;img/banner_2.jpg&quot;];</span></span>
<span class="line"><span style="color:#24292e;">function fun1() {</span></span>
<span class="line"><span style="color:#24292e;">	var cur = document.getElementById(&quot;banner&quot;);</span></span>
<span class="line"><span style="color:#24292e;">	if(i==1){ i=0; }else{ i=1; }</span></span>
<span class="line"><span style="color:#24292e;">	cur.src = imgs[i];</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">setInterval(fun1, 3000);</span></span></code></pre></div><h3 id="跳转到首页" tabindex="-1">跳转到首页 <a class="header-anchor" href="#跳转到首页" aria-label="Permalink to &quot;跳转到首页&quot;">​</a></h3><p>知识点：</p><ul><li>BOM中setInterval()设置倒计时</li><li>BOM中location地址栏</li><li>BOM中getElementById()获取元素，并修改内容。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;span id=&quot;time&quot; style=&quot;color: red;&quot;&gt;5&lt;/span&gt;秒后，自动跳转...</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    var i = 5;</span></span>
<span class="line"><span style="color:#e1e4e8;">    function fun1() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        i -= 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        var cur = document.getElementById(&quot;time&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        cur.innerText = i;</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (i==0){</span></span>
<span class="line"><span style="color:#e1e4e8;">            location.href = &quot;http://www.baidu.com&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    window.setInterval(fun1, 1000);</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;span id=&quot;time&quot; style=&quot;color: red;&quot;&gt;5&lt;/span&gt;秒后，自动跳转...</span></span>
<span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    var i = 5;</span></span>
<span class="line"><span style="color:#24292e;">    function fun1() {</span></span>
<span class="line"><span style="color:#24292e;">        i -= 1;</span></span>
<span class="line"><span style="color:#24292e;">        var cur = document.getElementById(&quot;time&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        cur.innerText = i;</span></span>
<span class="line"><span style="color:#24292e;">        if (i==0){</span></span>
<span class="line"><span style="color:#24292e;">            location.href = &quot;http://www.baidu.com&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    window.setInterval(fun1, 1000);</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><h3 id="动态表格" tabindex="-1">动态表格 <a class="header-anchor" href="#动态表格" aria-label="Permalink to &quot;动态表格&quot;">​</a></h3><ul><li>HTML DOM中的事件</li><li>HTML DOM控制样式</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div align=&quot;center&quot;&gt;&lt;table border=&quot;1&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;caption&gt;学生信息&lt;/caption&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;th&gt;&lt;input type=&quot;checkbox&quot; name=&quot;cbox&quot; id=&quot;firstCbox&quot;&gt;&lt;/th&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;th&gt;ID&lt;/th&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;th&gt;Name&lt;/th&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;th&gt;Age&lt;/th&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;th&gt;Option&lt;/th&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;&lt;input type=&quot;checkbox&quot; name=&quot;cbox&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;1&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;张三&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;18&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;删除&lt;/a&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;&lt;input type=&quot;checkbox&quot; name=&quot;cbox&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;2&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;李四&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;20&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;td&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;删除&lt;/a&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/table&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    document.getElementById(&quot;firstCbox&quot;).onclick = function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">        var cboxs = document.getElementsByName(&quot;cbox&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (var i=0; i&lt;cboxs.length; i++){</span></span>
<span class="line"><span style="color:#e1e4e8;">            cboxs[i].checked = this.checked;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    var trs = document.getElementsByTagName(&quot;tr&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    for (var i=0; i&lt;trs.length; i++){</span></span>
<span class="line"><span style="color:#e1e4e8;">        trs[i].onmouseover = function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.style.backgroundColor = &quot;pink&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        trs[i].onmouseout = function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.style.backgroundColor = &quot;white&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div align=&quot;center&quot;&gt;&lt;table border=&quot;1&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;caption&gt;学生信息&lt;/caption&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;th&gt;&lt;input type=&quot;checkbox&quot; name=&quot;cbox&quot; id=&quot;firstCbox&quot;&gt;&lt;/th&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;th&gt;ID&lt;/th&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;th&gt;Name&lt;/th&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;th&gt;Age&lt;/th&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;th&gt;Option&lt;/th&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;&lt;input type=&quot;checkbox&quot; name=&quot;cbox&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;1&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;张三&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;18&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;删除&lt;/a&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;tr&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;&lt;input type=&quot;checkbox&quot; name=&quot;cbox&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;2&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;李四&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;20&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;td&gt;&lt;a href=&quot;javascript:void(0);&quot;&gt;删除&lt;/a&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/tr&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/table&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    document.getElementById(&quot;firstCbox&quot;).onclick = function () {</span></span>
<span class="line"><span style="color:#24292e;">        var cboxs = document.getElementsByName(&quot;cbox&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        for (var i=0; i&lt;cboxs.length; i++){</span></span>
<span class="line"><span style="color:#24292e;">            cboxs[i].checked = this.checked;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    var trs = document.getElementsByTagName(&quot;tr&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    for (var i=0; i&lt;trs.length; i++){</span></span>
<span class="line"><span style="color:#24292e;">        trs[i].onmouseover = function () {</span></span>
<span class="line"><span style="color:#24292e;">            this.style.backgroundColor = &quot;pink&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        trs[i].onmouseout = function () {</span></span>
<span class="line"><span style="color:#24292e;">            this.style.backgroundColor = &quot;white&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><h1 id="_2-jquery" tabindex="-1">2 JQuery <a class="header-anchor" href="#_2-jquery" aria-label="Permalink to &quot;2  JQuery&quot;">​</a></h1><p>JQuery是JavaScript框架，简化js开发。使用JQuery需要引入JQuery文件:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script src=&quot;jquery-1.10.2.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script src=&quot;jquery-1.10.2.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span></code></pre></div><p>也可以使用CDN引用：</p><blockquote><p>许多用户在访问其他站点时，已经从百度、又拍云、新浪、谷歌或微软加载过 jQuery。所以结果是，当他们访问您的站点时，会从缓存中加载 jQuery，这样可以减少加载时间。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">百度：https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js</span></span>
<span class="line"><span style="color:#e1e4e8;">新浪：https://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js</span></span>
<span class="line"><span style="color:#e1e4e8;">微软：https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">百度：https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js</span></span>
<span class="line"><span style="color:#24292e;">新浪：https://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js</span></span>
<span class="line"><span style="color:#24292e;">微软：https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js</span></span></code></pre></div><h2 id="_2-1-jquery与js区别" tabindex="-1">2.1 JQuery与JS区别 <a class="header-anchor" href="#_2-1-jquery与js区别" aria-label="Permalink to &quot;2.1  JQuery与JS区别&quot;">​</a></h2><p><strong>jquery和js区别与联系</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// js获取元素</span></span>
<span class="line"><span style="color:#e1e4e8;">var divs1 = document.getElementsByTagName(&quot;div&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">// 修改元素内容</span></span>
<span class="line"><span style="color:#e1e4e8;">for (var i=0; i&lt;divs.length; i++){</span></span>
<span class="line"><span style="color:#e1e4e8;">    divs1[i].innerHTML = &quot;xxx&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// jquery获取元素</span></span>
<span class="line"><span style="color:#e1e4e8;">var $divs2 = $(&quot;div&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">// jquery修改元素内容</span></span>
<span class="line"><span style="color:#e1e4e8;">$divs2.html(&quot;xxx&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// js对象转化为jquery对象</span></span>
<span class="line"><span style="color:#e1e4e8;">div3 = $(divs1[0])</span></span>
<span class="line"><span style="color:#e1e4e8;">// jquery对象转化为js对象</span></span>
<span class="line"><span style="color:#e1e4e8;">$div2[0].innerHTML(&quot;xxx&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// js获取元素</span></span>
<span class="line"><span style="color:#24292e;">var divs1 = document.getElementsByTagName(&quot;div&quot;);</span></span>
<span class="line"><span style="color:#24292e;">// 修改元素内容</span></span>
<span class="line"><span style="color:#24292e;">for (var i=0; i&lt;divs.length; i++){</span></span>
<span class="line"><span style="color:#24292e;">    divs1[i].innerHTML = &quot;xxx&quot;;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// jquery获取元素</span></span>
<span class="line"><span style="color:#24292e;">var $divs2 = $(&quot;div&quot;);</span></span>
<span class="line"><span style="color:#24292e;">// jquery修改元素内容</span></span>
<span class="line"><span style="color:#24292e;">$divs2.html(&quot;xxx&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// js对象转化为jquery对象</span></span>
<span class="line"><span style="color:#24292e;">div3 = $(divs1[0])</span></span>
<span class="line"><span style="color:#24292e;">// jquery对象转化为js对象</span></span>
<span class="line"><span style="color:#24292e;">$div2[0].innerHTML(&quot;xxx&quot;);</span></span></code></pre></div><p><strong>入口函数</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">// jquery入口函数：DOM文档加载完成之后执行该函数</span></span>
<span class="line"><span style="color:#e1e4e8;">$(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">// js写法</span></span>
<span class="line"><span style="color:#e1e4e8;">// window.onload = function(){}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">// jquery入口函数：DOM文档加载完成之后执行该函数</span></span>
<span class="line"><span style="color:#24292e;">$(function () {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">// js写法</span></span>
<span class="line"><span style="color:#24292e;">// window.onload = function(){}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><p>jquery入口函数和js区别：</p><ul><li>jquery可以定义多次，js的window.onload只能写一次；</li></ul><p><strong>事件</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;input type=&quot;button&quot; value=&quot;单击我&quot; id=&quot;b1&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">// jquery单击事件</span></span>
<span class="line"><span style="color:#e1e4e8;">$(&quot;#b1&quot;).click(function(){</span></span>
<span class="line"><span style="color:#e1e4e8;">    alert(&quot;abc&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">// js单击事件</span></span>
<span class="line"><span style="color:#e1e4e8;">document.getElementById(&quot;#b1&quot;).onclick = function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    alert(&quot;hello&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;input type=&quot;button&quot; value=&quot;单击我&quot; id=&quot;b1&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">// jquery单击事件</span></span>
<span class="line"><span style="color:#24292e;">$(&quot;#b1&quot;).click(function(){</span></span>
<span class="line"><span style="color:#24292e;">    alert(&quot;abc&quot;);</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">// js单击事件</span></span>
<span class="line"><span style="color:#24292e;">document.getElementById(&quot;#b1&quot;).onclick = function () {</span></span>
<span class="line"><span style="color:#24292e;">    alert(&quot;hello&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><p><strong>样式控制</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$(&quot;div1&quot;).css(&quot;backgroundColor&quot;, &quot;red&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">document.getElementById(&quot;div1&quot;).style.backgroundColor = &quot;red&quot;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$(&quot;div1&quot;).css(&quot;backgroundColor&quot;, &quot;red&quot;);</span></span>
<span class="line"><span style="color:#24292e;">document.getElementById(&quot;div1&quot;).style.backgroundColor = &quot;red&quot;;</span></span></code></pre></div><h2 id="_2-2-jquery选择器" tabindex="-1">2.2 JQuery选择器 <a class="header-anchor" href="#_2-2-jquery选择器" aria-label="Permalink to &quot;2.2  JQuery选择器&quot;">​</a></h2><p>选择器：筛选具有相似特征的元素（标签）</p><h3 id="基本选择器" tabindex="-1">基本选择器 <a class="header-anchor" href="#基本选择器" aria-label="Permalink to &quot;基本选择器&quot;">​</a></h3><p>标签选择器：$(&quot;html标签&quot;)</p><p>id选择器：$(&quot;#id的值&quot;)</p><p>类选择器：$(&quot;.class的值&quot;)</p><p>多个选择器：$(&quot;选择器1,选择器2,,,&quot;)</p><h3 id="层级选择器" tabindex="-1">层级选择器 <a class="header-anchor" href="#层级选择器" aria-label="Permalink to &quot;层级选择器&quot;">​</a></h3><p>后代选择器：$(&quot;标签1 标签2&quot;) 标签1的所有后代所有标签2都会被选中</p><p>子选择器：$(&quot;标签1 &gt; 标签2&quot;) 标签1的子元素标签2才会被选中</p><h3 id="属性选择器" tabindex="-1">属性选择器 <a class="header-anchor" href="#属性选择器" aria-label="Permalink to &quot;属性选择器&quot;">​</a></h3><p>属性名称选择器：$(&quot;标签[属性名]&quot;)</p><p>属性选择器：$(&quot;标签[属性名=&#39;值&#39;]&quot;)</p><p>多个属性选择器：$(&quot;标签[属性名=&#39;值&#39;] [属性名=&#39;值&#39;] ...&quot;)</p><p>不等于：$(&quot;标签[属性名!=&#39;值&#39;]&quot;)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div id=&quot;one&quot; title=&quot;test&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  这是一个div，我是内容。</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	$(&quot;div[title=&#39;test&#39;]&quot;).css(&quot;backgroundColor&quot;, &quot;red&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div id=&quot;one&quot; title=&quot;test&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  这是一个div，我是内容。</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">	$(&quot;div[title=&#39;test&#39;]&quot;).css(&quot;backgroundColor&quot;, &quot;red&quot;);</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><h3 id="过滤选择器" tabindex="-1">过滤选择器 <a class="header-anchor" href="#过滤选择器" aria-label="Permalink to &quot;过滤选择器&quot;">​</a></h3><p>首元素选择器：$(&quot;标签:first&quot;) 选择第一个标签</p><p>尾元素选择器：$(&quot;标签:last&quot;)</p><p>非元素选择器：$(&quot;标签:not(内容)&quot;) 选择指定标签，并且不是指定内容的元素</p><p>偶数选择器：$(&quot;标签:event&quot;) 选择指定，并且索引为偶数的标签</p><p>奇数选择器：$(&quot;标签:odd&quot;)</p><p>等于索引选择器：$(&quot;标签:eq(index)&quot;)</p><p>大于索引选择器：$(&quot;标签:gt(index)&quot;)</p><p>小于索引选择器：$(&quot;标签:lt(index)&quot;)</p><p>标题选择器：$(&quot;:header&quot;) 选择所有标题h1-h6</p><h3 id="表单过滤选择器" tabindex="-1">表单过滤选择器 <a class="header-anchor" href="#表单过滤选择器" aria-label="Permalink to &quot;表单过滤选择器&quot;">​</a></h3><p>可用元素选择器：$(&quot;标签:enabled&quot;)</p><p>不可用元素选择器：$(&quot;标签:disabled&quot;)</p><p>选中选择器：$(&quot;标签:checked&quot;) 获得单选/复选框中选中的元素</p><p>选中选择器：$(&quot;标签:selected&quot;) 获得下拉列表中选中的元素</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 可用元素选择器</span></span>
<span class="line"><span style="color:#e1e4e8;">$(&quot;input[type=&#39;text&#39;]:enabled&quot;).val(&quot;aaa&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">// 选中元素选择器(复选框)</span></span>
<span class="line"><span style="color:#e1e4e8;">alert($(&quot;input[type=&#39;checkbox&#39;]:checked&quot;).length);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 可用元素选择器</span></span>
<span class="line"><span style="color:#24292e;">$(&quot;input[type=&#39;text&#39;]:enabled&quot;).val(&quot;aaa&quot;);</span></span>
<span class="line"><span style="color:#24292e;">// 选中元素选择器(复选框)</span></span>
<span class="line"><span style="color:#24292e;">alert($(&quot;input[type=&#39;checkbox&#39;]:checked&quot;).length);</span></span></code></pre></div><h2 id="_2-3-jquery的dom操作" tabindex="-1">2.3 JQuery的DOM操作 <a class="header-anchor" href="#_2-3-jquery的dom操作" aria-label="Permalink to &quot;2.3  JQuery的DOM操作&quot;">​</a></h2><h3 id="内容操作" tabindex="-1">内容操作 <a class="header-anchor" href="#内容操作" aria-label="Permalink to &quot;内容操作&quot;">​</a></h3><p>都是方法，有三个：</p><ol><li>html() 获取、设置元素内容</li><li>text() 获取、设置元素的纯文本内容</li><li>val() 获取、设置元素的value属性值</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 获取内容</span></span>
<span class="line"><span style="color:#e1e4e8;">alert($(&quot;#test&quot;).html());</span></span>
<span class="line"><span style="color:#e1e4e8;">// 设置内容</span></span>
<span class="line"><span style="color:#e1e4e8;">$(&quot;#btn1&quot;).click(function(){</span></span>
<span class="line"><span style="color:#e1e4e8;">    $(&quot;#test&quot;).html(&quot;Hello world!&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 获取内容</span></span>
<span class="line"><span style="color:#24292e;">alert($(&quot;#test&quot;).html());</span></span>
<span class="line"><span style="color:#24292e;">// 设置内容</span></span>
<span class="line"><span style="color:#24292e;">$(&quot;#btn1&quot;).click(function(){</span></span>
<span class="line"><span style="color:#24292e;">    $(&quot;#test&quot;).html(&quot;Hello world!&quot;);</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><h3 id="属性操作" tabindex="-1">属性操作 <a class="header-anchor" href="#属性操作" aria-label="Permalink to &quot;属性操作&quot;">​</a></h3><p>通用属性操作：</p><ul><li>attr()：获取、设置元素的属性</li><li>removeAttr()</li><li>prop()：获取、设置元素的属性</li><li>removeProp()</li></ul><p>attr和prop区别：</p><ul><li>如果操作的元素的固有属性，用prop；自定义的，建议使用attr</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var name = $(&quot;#bj&quot;).attr(&quot;name&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">$(&quot;#bj&quot;).attr(&quot;name&quot;, &quot;北京&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var name = $(&quot;#bj&quot;).attr(&quot;name&quot;);</span></span>
<span class="line"><span style="color:#24292e;">$(&quot;#bj&quot;).attr(&quot;name&quot;, &quot;北京&quot;);</span></span></code></pre></div><p>对class属性操作：</p><ul><li>addClass()：添加class</li><li>removeClass()：删除class</li><li>toggleClass(&quot;one&quot;)：如果存在class=&quot;one&quot;就删除，如果不存在就添加</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$(&quot;#bg&quot;).addClass(&quot;mycolor&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$(&quot;#bg&quot;).addClass(&quot;mycolor&quot;);</span></span></code></pre></div><h3 id="crud操作" tabindex="-1">CRUD操作 <a class="header-anchor" href="#crud操作" aria-label="Permalink to &quot;CRUD操作&quot;">​</a></h3><p>（这里的对象就是标签(元素)/内容）</p><p>添加</p><ul><li>对象1.append(对象2)：将对象2添加到对象1末尾；</li><li>对象1.appendTo(对象2)：将对象1添加到对象2末尾；</li><li>对象1.prepend(对象2)：将对象2添加到对象1开头；</li><li>对象1.prependTo对象2)：将对象1添加到对象2开头；</li><li>对象1.after(对象2)：将对象2添加到对象1后面，是兄弟；</li><li>对象1.before(对象2)：将对象2添加到对象1前面，是兄弟；</li><li>对象1.insertAfter(对象2)：将对象2添加到对象1后面，是兄弟；</li><li>对象1.insertBefore(对象2)：将对象2添加到对象1前面，是兄弟；</li></ul><p>删除</p><ul><li>对象.remove()：将对象删除；</li><li>对象.empty()：将对象后代清空，但保留当前元素；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$(&quot;#city1&quot;).after(&quot;在后面添加文本&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">$(&quot;#city1&quot;).remove();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$(&quot;#city1&quot;).after(&quot;在后面添加文本&quot;);</span></span>
<span class="line"><span style="color:#24292e;">$(&quot;#city1&quot;).remove();</span></span></code></pre></div><h2 id="_2-4-动画" tabindex="-1">2.4 动画 <a class="header-anchor" href="#_2-4-动画" aria-label="Permalink to &quot;2.4  动画&quot;">​</a></h2><p>三种方式显示/隐藏/切换元素：（切换：如果实现，则变为隐藏；如果隐藏，则显示）</p><ol><li>默认方式 <ul><li>show([speed], [easing], [fn])</li><li>hide([speed], [easing], [fn])</li><li>toggle([speed], [easing], [fn])</li></ul></li><li>滑动方式 <ul><li>slideDown([speed], [easing], [fn])</li><li>slideUp([speed], [easing], [fn])</li><li>slideToggle([speed], [easing], [fn])</li></ul></li><li>淡入淡出方式 <ul><li>fadeIn([speed], [easing], [fn])</li><li>fadeOut([speed], [easing], [fn])</li><li>fadeToggle([speed], [easing], [fn])</li></ul></li></ol><p>参数说明：</p><ul><li>speed: 速度，有三个预定义值（slow, normal, fast）；还可以设置为毫秒值。</li><li>easing: 切换效果，默认swing(先慢中间快最后慢)，可用参数linear(匀速)</li><li>fn: 动画完成后的执行函数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function showClick(){</span></span>
<span class="line"><span style="color:#e1e4e8;">	$(&quot;#test&quot;).show(&quot;slow&quot;, &quot;swing&quot;, function(){</span></span>
<span class="line"><span style="color:#e1e4e8;">		alert(&quot;显示动画&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">	});</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function hideClick(){</span></span>
<span class="line"><span style="color:#e1e4e8;">	$(&quot;#test&quot;).hide(&quot;slow&quot;, &quot;swing&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function showClick(){</span></span>
<span class="line"><span style="color:#24292e;">	$(&quot;#test&quot;).show(&quot;slow&quot;, &quot;swing&quot;, function(){</span></span>
<span class="line"><span style="color:#24292e;">		alert(&quot;显示动画&quot;);</span></span>
<span class="line"><span style="color:#24292e;">	});</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function hideClick(){</span></span>
<span class="line"><span style="color:#24292e;">	$(&quot;#test&quot;).hide(&quot;slow&quot;, &quot;swing&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_2-5-遍历" tabindex="-1">2.5 遍历 <a class="header-anchor" href="#_2-5-遍历" aria-label="Permalink to &quot;2.5  遍历&quot;">​</a></h2><p>既可以使用js的方式（类似于Java），也有自己特有的方式：</p><ol><li>对象.each(callback)</li><li>$.each(object, [callback])</li><li>for..of （jquery3.0版本才支持）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// id=city下面的li列表---------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">var citys = $(&quot;#city li&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">// js方式</span></span>
<span class="line"><span style="color:#e1e4e8;">for (var i=0;i&lt;citys.length; i++){ </span></span>
<span class="line"><span style="color:#e1e4e8;">	alter(citys[i].innerHTML); </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// 对象.each------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">citys.each(fucntion(){</span></span>
<span class="line"><span style="color:#e1e4e8;">	alert(this.innerHTML);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">citys.each(fucntion(index, element){</span></span>
<span class="line"><span style="color:#e1e4e8;">	alert(index+&quot;: &quot;+element.innerHTML);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">// $.each--------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">$.each(citys, function(){</span></span>
<span class="line"><span style="color:#e1e4e8;">	alert(this.innerHTML);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">// for..of-------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">for(city of citys){</span></span>
<span class="line"><span style="color:#e1e4e8;">	alter(city.innerHTML);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// id=city下面的li列表---------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">var citys = $(&quot;#city li&quot;);</span></span>
<span class="line"><span style="color:#24292e;">// js方式</span></span>
<span class="line"><span style="color:#24292e;">for (var i=0;i&lt;citys.length; i++){ </span></span>
<span class="line"><span style="color:#24292e;">	alter(citys[i].innerHTML); </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// 对象.each------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">citys.each(fucntion(){</span></span>
<span class="line"><span style="color:#24292e;">	alert(this.innerHTML);</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">citys.each(fucntion(index, element){</span></span>
<span class="line"><span style="color:#24292e;">	alert(index+&quot;: &quot;+element.innerHTML);</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">// $.each--------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">$.each(citys, function(){</span></span>
<span class="line"><span style="color:#24292e;">	alert(this.innerHTML);</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">// for..of-------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">for(city of citys){</span></span>
<span class="line"><span style="color:#24292e;">	alter(city.innerHTML);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_2-6-事件绑定" tabindex="-1">2.6 事件绑定 <a class="header-anchor" href="#_2-6-事件绑定" aria-label="Permalink to &quot;2.6  事件绑定&quot;">​</a></h2><p>三种方式：</p><ol><li>jquery标准的绑定方式： <ul><li>jq对象.事件方法(回调函数)；</li></ul></li><li>on绑定方式/off接触绑定 <ul><li>jq对象.on(&quot;事件名称&quot;, 回调函数);</li><li>jq对象.off(&quot;事件名称&quot;);</li></ul></li><li>事件切换：toggle (1.8之后的高版本不能使用，如果要用，需要使用jquery-migrate-1.0.0.js) <ul><li>jq对象.toggle(fn1, fn2);</li></ul></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 第一种-----------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">$(&quot;#btn&quot;).click(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    alert(&quot;我被点击了...&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">// 第二种-----------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">$(&quot;#btn&quot;).on(&quot;click&quot;, function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    alert(&quot;我被点击了...&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">// 第三种-----------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">$(&quot;#btn&quot;).toggle(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    $(&quot;#div1&quot;).css(&quot;backgourdColor&quot;, &quot;red&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}, function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    $(&quot;#div1&quot;).css(&quot;backgourdColor&quot;, &quot;blue&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 第一种-----------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">$(&quot;#btn&quot;).click(function () {</span></span>
<span class="line"><span style="color:#24292e;">    alert(&quot;我被点击了...&quot;);</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">// 第二种-----------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">$(&quot;#btn&quot;).on(&quot;click&quot;, function () {</span></span>
<span class="line"><span style="color:#24292e;">    alert(&quot;我被点击了...&quot;);</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">// 第三种-----------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">$(&quot;#btn&quot;).toggle(function () {</span></span>
<span class="line"><span style="color:#24292e;">    $(&quot;#div1&quot;).css(&quot;backgourdColor&quot;, &quot;red&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}, function () {</span></span>
<span class="line"><span style="color:#24292e;">    $(&quot;#div1&quot;).css(&quot;backgourdColor&quot;, &quot;blue&quot;);</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><h2 id="_2-7-插件" tabindex="-1">2.7 插件 <a class="header-anchor" href="#_2-7-插件" aria-label="Permalink to &quot;2.7  插件&quot;">​</a></h2><p>插件：增强jquery的功能</p><p>实现方式：</p><ol><li><code>$.fn.extend(object)</code> 增强通过jquery获取的对象的功能，如 <code>$(&quot;#div1&quot;)</code></li><li><code>$.extend(object)</code> 增强jquery对象本身的功能，jquery本身就是<code>$</code>符号</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 定义插件</span></span>
<span class="line"><span style="color:#e1e4e8;">    $.fn.extend({</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 定义了一个check方法，所有的jq对象都可以调用</span></span>
<span class="line"><span style="color:#e1e4e8;">        check: function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">            alert(&quot;执行check方法&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">        test: function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">            alert(&quot;执行uncheck方法&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    });</span></span>
<span class="line"><span style="color:#e1e4e8;">    $.extend({</span></span>
<span class="line"><span style="color:#e1e4e8;">       test2: function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">           alert(&quot;执行test2方法&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">       }</span></span>
<span class="line"><span style="color:#e1e4e8;">    });</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 使用插件中的方法</span></span>
<span class="line"><span style="color:#e1e4e8;">    $(&quot;#btn1&quot;).check();</span></span>
<span class="line"><span style="color:#e1e4e8;">    $(&quot;#btn2&quot;).test();</span></span>
<span class="line"><span style="color:#e1e4e8;">    $.test2();</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    // 定义插件</span></span>
<span class="line"><span style="color:#24292e;">    $.fn.extend({</span></span>
<span class="line"><span style="color:#24292e;">        // 定义了一个check方法，所有的jq对象都可以调用</span></span>
<span class="line"><span style="color:#24292e;">        check: function () {</span></span>
<span class="line"><span style="color:#24292e;">            alert(&quot;执行check方法&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        test: function () {</span></span>
<span class="line"><span style="color:#24292e;">            alert(&quot;执行uncheck方法&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">    $.extend({</span></span>
<span class="line"><span style="color:#24292e;">       test2: function () {</span></span>
<span class="line"><span style="color:#24292e;">           alert(&quot;执行test2方法&quot;);</span></span>
<span class="line"><span style="color:#24292e;">       }</span></span>
<span class="line"><span style="color:#24292e;">    });</span></span>
<span class="line"><span style="color:#24292e;">    // 使用插件中的方法</span></span>
<span class="line"><span style="color:#24292e;">    $(&quot;#btn1&quot;).check();</span></span>
<span class="line"><span style="color:#24292e;">    $(&quot;#btn2&quot;).test();</span></span>
<span class="line"><span style="color:#24292e;">    $.test2();</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><h1 id="_3-ajax" tabindex="-1">3 AJAX <a class="header-anchor" href="#_3-ajax" aria-label="Permalink to &quot;3  AJAX&quot;">​</a></h1><h2 id="_3-1-原理" tabindex="-1">3.1 原理 <a class="header-anchor" href="#_3-1-原理" aria-label="Permalink to &quot;3.1  原理&quot;">​</a></h2><p>概念：A Synchronous JavaScript And XML，异步的JavaScirpt和XML</p><ul><li><p>同步：客服端发送请求后，必须等待服务器的响应，再做其他事情；</p></li><li><p>异步：客服端发送请求后，不用等待服务器的响应，可以去做别的事情。</p></li></ul><p>AJAX</p><ul><li><p>不是新的编程语言，而是一种使用现有标准的新方法。</p></li><li><p>不用重新加载整个html页面，就可以与服务器交换数据，并更新部分网页的技术。</p></li></ul><p>原理/流程：</p><ul><li>编写ajax代码（js代码：创建XMLHttpRequest对象；发送XHR；处理接受响应数据；）</li><li>浏览器发送请求（转给上面的js代码），服务器处理并响应（js接收响应）</li><li>使用js处理被返回的数据，更新部分网页。</li></ul><p>实现方式：</p><ol><li>原生js方式（不推荐，需要的时候自己百度吧）</li><li>jquery方式（推荐，有三种） <ul><li><code>$.ajax()</code></li><li><code>$.get()</code></li><li><code>$.post()</code></li></ul></li></ol><h2 id="_3-2-代码实现ajax" tabindex="-1">3.2 代码实现ajax <a class="header-anchor" href="#_3-2-代码实现ajax" aria-label="Permalink to &quot;3.2  代码实现ajax&quot;">​</a></h2><p><strong>$.ajax()实现</strong></p><p>html代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;input type=&quot;button&quot; id=&quot;btn&quot; value=&quot;hahasfasdf&quot; onclick=&quot;fun();&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    function fun() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 发送异步请求</span></span>
<span class="line"><span style="color:#e1e4e8;">        $.ajax({</span></span>
<span class="line"><span style="color:#e1e4e8;">            url: &quot;ajaxServlet&quot;, // 请求路径</span></span>
<span class="line"><span style="color:#e1e4e8;">            type: &quot;POST&quot;, // 请求方式，默认GET</span></span>
<span class="line"><span style="color:#e1e4e8;">            data: {&quot;username&quot;:&quot;jack&quot;, &quot;age&quot;:23},</span></span>
<span class="line"><span style="color:#e1e4e8;">            success: function (data) { // 响应成功后的回调函数</span></span>
<span class="line"><span style="color:#e1e4e8;">                alert(data);</span></span>
<span class="line"><span style="color:#e1e4e8;">            },</span></span>
<span class="line"><span style="color:#e1e4e8;">            error: function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">                alert(&quot;出错啦&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">            },</span></span>
<span class="line"><span style="color:#e1e4e8;">            dataType: &quot;text&quot;, // 设置响应数据格式，建议用json</span></span>
<span class="line"><span style="color:#e1e4e8;">        });</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;input type=&quot;button&quot; id=&quot;btn&quot; value=&quot;hahasfasdf&quot; onclick=&quot;fun();&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    function fun() {</span></span>
<span class="line"><span style="color:#24292e;">        // 发送异步请求</span></span>
<span class="line"><span style="color:#24292e;">        $.ajax({</span></span>
<span class="line"><span style="color:#24292e;">            url: &quot;ajaxServlet&quot;, // 请求路径</span></span>
<span class="line"><span style="color:#24292e;">            type: &quot;POST&quot;, // 请求方式，默认GET</span></span>
<span class="line"><span style="color:#24292e;">            data: {&quot;username&quot;:&quot;jack&quot;, &quot;age&quot;:23},</span></span>
<span class="line"><span style="color:#24292e;">            success: function (data) { // 响应成功后的回调函数</span></span>
<span class="line"><span style="color:#24292e;">                alert(data);</span></span>
<span class="line"><span style="color:#24292e;">            },</span></span>
<span class="line"><span style="color:#24292e;">            error: function () {</span></span>
<span class="line"><span style="color:#24292e;">                alert(&quot;出错啦&quot;)</span></span>
<span class="line"><span style="color:#24292e;">            },</span></span>
<span class="line"><span style="color:#24292e;">            dataType: &quot;text&quot;, // 设置响应数据格式，建议用json</span></span>
<span class="line"><span style="color:#24292e;">        });</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><p>ajaxServlet代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">String username = req.getParameter(&quot;username&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">System.out.println(username);</span></span>
<span class="line"><span style="color:#e1e4e8;">resp.getWriter().write(&quot;hello: &quot; + username);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">String username = req.getParameter(&quot;username&quot;);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(username);</span></span>
<span class="line"><span style="color:#24292e;">resp.getWriter().write(&quot;hello: &quot; + username);</span></span></code></pre></div><h2 id="_3-3-代码实现get" tabindex="-1">3.3 代码实现get <a class="header-anchor" href="#_3-3-代码实现get" aria-label="Permalink to &quot;3.3  代码实现get&quot;">​</a></h2><p><code>$.get和$.post</code>参数形式一样</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$.get(&quot;ajaxServlet&quot;, {username: &quot;tom&quot;}, function(data){alert(data);}, &quot;text&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$.get(&quot;ajaxServlet&quot;, {username: &quot;tom&quot;}, function(data){alert(data);}, &quot;text&quot;);</span></span></code></pre></div><h1 id="_4-json" tabindex="-1">4 JSON <a class="header-anchor" href="#_4-json" aria-label="Permalink to &quot;4  JSON&quot;">​</a></h1><h2 id="_4-1-json语法" tabindex="-1">4.1 json语法 <a class="header-anchor" href="#_4-1-json语法" aria-label="Permalink to &quot;4.1  json语法&quot;">​</a></h2><p>概念：JavaScript Object Notation，JavaScript对象表示法，是一门语法。</p><p>用处：json多用于存储和交换文本信息，比xml更小，更快，更易解析。</p><p>语法规则：</p><ul><li><p>json由键值对构成，键用引号引起来（单双都可以），也可以不用；</p></li><li><p>json值的类型：数字，字符串，布尔值，数组，对象（花括号嵌套）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    var person = {&quot;name&quot;:&quot;张三&quot;,&quot;age&quot;:18,&quot;gender&quot;:true}</span></span>
<span class="line"><span style="color:#e1e4e8;">    var persons = [{&quot;name&quot;:&quot;aaa&quot;,&quot;age&quot;:18}, {&quot;name&quot;:&quot;bbb&quot;,&quot;age&quot;:20}]</span></span>
<span class="line"><span style="color:#e1e4e8;">    var arr = {&quot;arr&quot;:[11,22,33,44,55]}</span></span>
<span class="line"><span style="color:#e1e4e8;">    alert(person.name);</span></span>
<span class="line"><span style="color:#e1e4e8;">    alert(person[&quot;name&quot;]);</span></span>
<span class="line"><span style="color:#e1e4e8;">    alert(persons[0].name);</span></span>
<span class="line"><span style="color:#e1e4e8;">    alert(arr.arr[2]);</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 遍历</span></span>
<span class="line"><span style="color:#e1e4e8;">    for (var key in person){</span></span>
<span class="line"><span style="color:#e1e4e8;">        alert(key + &quot;: &quot; + person[key]);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    // js原生形式</span></span>
<span class="line"><span style="color:#e1e4e8;">    for (var i=0; i&lt;persons.length;  i++){</span></span>
<span class="line"><span style="color:#e1e4e8;">    	var person = persons[i];</span></span>
<span class="line"><span style="color:#e1e4e8;">    	alert(person);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    var person = {&quot;name&quot;:&quot;张三&quot;,&quot;age&quot;:18,&quot;gender&quot;:true}</span></span>
<span class="line"><span style="color:#24292e;">    var persons = [{&quot;name&quot;:&quot;aaa&quot;,&quot;age&quot;:18}, {&quot;name&quot;:&quot;bbb&quot;,&quot;age&quot;:20}]</span></span>
<span class="line"><span style="color:#24292e;">    var arr = {&quot;arr&quot;:[11,22,33,44,55]}</span></span>
<span class="line"><span style="color:#24292e;">    alert(person.name);</span></span>
<span class="line"><span style="color:#24292e;">    alert(person[&quot;name&quot;]);</span></span>
<span class="line"><span style="color:#24292e;">    alert(persons[0].name);</span></span>
<span class="line"><span style="color:#24292e;">    alert(arr.arr[2]);</span></span>
<span class="line"><span style="color:#24292e;">    // 遍历</span></span>
<span class="line"><span style="color:#24292e;">    for (var key in person){</span></span>
<span class="line"><span style="color:#24292e;">        alert(key + &quot;: &quot; + person[key]);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    // js原生形式</span></span>
<span class="line"><span style="color:#24292e;">    for (var i=0; i&lt;persons.length;  i++){</span></span>
<span class="line"><span style="color:#24292e;">    	var person = persons[i];</span></span>
<span class="line"><span style="color:#24292e;">    	alert(person);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div></li></ul><h2 id="_4-2-json解析器" tabindex="-1">4.2 json解析器 <a class="header-anchor" href="#_4-2-json解析器" aria-label="Permalink to &quot;4.2  json解析器&quot;">​</a></h2><p>常见的json解析器有：</p><ul><li>jsonlib：官方提供</li><li>Gson：谷歌提供</li><li>fastjson：阿里巴巴提供</li><li>jackson：springMVC框架内置</li></ul><p><strong>java对象转json</strong></p><ol><li>导入jackson的jar包（3个）</li><li>创建Jackson核心对象ObjectMapper</li><li>调用ObjectMapper的方法进行转换</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Person person = new Person(&quot;张三&quot;, 23, &quot;男&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">ObjectMapper mapper = new ObjectMapper();</span></span>
<span class="line"><span style="color:#e1e4e8;">// 第一种方法, 将Json格式保存到流/文件中</span></span>
<span class="line"><span style="color:#e1e4e8;">mapper.writeValue(new File(&quot;f://a.txt&quot;), person);</span></span>
<span class="line"><span style="color:#e1e4e8;">mapper.writeValue(new Writer(&quot;f://a.txt&quot;), person);</span></span>
<span class="line"><span style="color:#e1e4e8;">mapper.writeValue(new OutputStream(&quot;f://a.txt&quot;), person);</span></span>
<span class="line"><span style="color:#e1e4e8;">// 第二种方法，转化为Json字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">String json = mapper.writeValueAsString(person);</span></span>
<span class="line"><span style="color:#e1e4e8;">System.out.println(json);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Person person = new Person(&quot;张三&quot;, 23, &quot;男&quot;);</span></span>
<span class="line"><span style="color:#24292e;">ObjectMapper mapper = new ObjectMapper();</span></span>
<span class="line"><span style="color:#24292e;">// 第一种方法, 将Json格式保存到流/文件中</span></span>
<span class="line"><span style="color:#24292e;">mapper.writeValue(new File(&quot;f://a.txt&quot;), person);</span></span>
<span class="line"><span style="color:#24292e;">mapper.writeValue(new Writer(&quot;f://a.txt&quot;), person);</span></span>
<span class="line"><span style="color:#24292e;">mapper.writeValue(new OutputStream(&quot;f://a.txt&quot;), person);</span></span>
<span class="line"><span style="color:#24292e;">// 第二种方法，转化为Json字符串</span></span>
<span class="line"><span style="color:#24292e;">String json = mapper.writeValueAsString(person);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(json);</span></span></code></pre></div><p>其他：</p><ol><li><p>注解</p><ul><li><p><code>@JsonIgnore</code> 排除属性（在java类定义的地方、需要排除属性的上面）</p></li><li><p><code>@JsonFormat(pattern=&quot;&quot;)</code> 属性格式化，</p><p>例如日期格式<code>@JsonFormat(pattern=&quot;yyyy-MM-dd&quot;)</code></p></li></ul></li><li><p>复杂格式：可以转<code>List&lt;Object&gt;</code> ,<code>Map&lt;String, String&gt;</code>，代码和上面一样</p></li></ol><p><strong>json转java对象</strong></p><p>用的比较少，了解即可。代码和上面一样，但是用到的方法是：</p><ul><li><code>readValue(json数据, Class)</code></li></ul><h1 id="_5-案例-检验用户名是否存在" tabindex="-1">5 案例：检验用户名是否存在 <a class="header-anchor" href="#_5-案例-检验用户名是否存在" aria-label="Permalink to &quot;5 案例：检验用户名是否存在&quot;">​</a></h1><p>用户注册案例：当输入用户名后立刻检验用户名是否存在（不和数据库连）</p><p>技术：AJAX+Json+Servlet</p><p>代码：(Tomcat已集成在IDEA中)</p><ol><li><p>创建JavaEE的Web项目/模块</p><p><img src="`+e+'" alt="image-20210326192727486"></p></li><li><p>导json的jar包（3个，在web/WEB-INF/lib中，记得右键lib-&gt;Add as Libraray）</p></li><li><p>导入jqery.js</p><p><img src="'+p+`" alt="image-20210326192925599"></p></li><li><p>编写index.html，里面用ajax技术向servlet异步传json数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;注册&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;js/jquery-2.1.0.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        // ajax</span></span>
<span class="line"><span style="color:#e1e4e8;">        $(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">            $(&quot;#username&quot;).blur(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">                var username = $(this).val();</span></span>
<span class="line"><span style="color:#e1e4e8;">                $.get(&quot;findUserServlet&quot;, {username: username}, function (data) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    // 期望服务器回应数据格式 {&quot;userExist&quot;: true}</span></span>
<span class="line"><span style="color:#e1e4e8;">                    var span = $(&quot;#s_username&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    if (data.userExist) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        span.css(&quot;color&quot;, &quot;red&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                        span.html(&quot;用户名存在&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        span.css(&quot;color&quot;, &quot;green&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                        span.html(&quot;用户名正确&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                }, &quot;json&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">            });</span></span>
<span class="line"><span style="color:#e1e4e8;">        });</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;form&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    注册页面：&lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    用户名：&lt;input type=&quot;text&quot; name=&quot;username&quot; id=&quot;username&quot;&gt; &lt;span id=&quot;s_username&quot;&gt;&lt;/span&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    密码：&lt;input type=&quot;password&quot; name=&quot;password&quot;&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;input type=&quot;submit&quot; name=&quot;注册&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/form&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;注册&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;js/jquery-2.1.0.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">        // ajax</span></span>
<span class="line"><span style="color:#24292e;">        $(function () {</span></span>
<span class="line"><span style="color:#24292e;">            $(&quot;#username&quot;).blur(function () {</span></span>
<span class="line"><span style="color:#24292e;">                var username = $(this).val();</span></span>
<span class="line"><span style="color:#24292e;">                $.get(&quot;findUserServlet&quot;, {username: username}, function (data) {</span></span>
<span class="line"><span style="color:#24292e;">                    // 期望服务器回应数据格式 {&quot;userExist&quot;: true}</span></span>
<span class="line"><span style="color:#24292e;">                    var span = $(&quot;#s_username&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                    if (data.userExist) {</span></span>
<span class="line"><span style="color:#24292e;">                        span.css(&quot;color&quot;, &quot;red&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                        span.html(&quot;用户名存在&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                    } else {</span></span>
<span class="line"><span style="color:#24292e;">                        span.css(&quot;color&quot;, &quot;green&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                        span.html(&quot;用户名正确&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                }, &quot;json&quot;);</span></span>
<span class="line"><span style="color:#24292e;">            });</span></span>
<span class="line"><span style="color:#24292e;">        });</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;form&gt;</span></span>
<span class="line"><span style="color:#24292e;">    注册页面：&lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">    用户名：&lt;input type=&quot;text&quot; name=&quot;username&quot; id=&quot;username&quot;&gt; &lt;span id=&quot;s_username&quot;&gt;&lt;/span&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">    密码：&lt;input type=&quot;password&quot; name=&quot;password&quot;&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;input type=&quot;submit&quot; name=&quot;注册&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/form&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div></li><li><p>写FindUserServlet</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@WebServlet(&quot;/findUserServlet&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public class FindUserServlet extends HttpServlet {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.doPost(req, resp);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        resp.setContentType(&quot;text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        String username = req.getParameter(&quot;username&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        HashMap&lt;String, Object&gt; map = new HashMap&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (&quot;tom&quot;.equals(username)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            map.put(&quot;userExist&quot;, true);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            map.put(&quot;userExist&quot;, false);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        // map转json</span></span>
<span class="line"><span style="color:#e1e4e8;">        new ObjectMapper().writeValue(resp.getWriter(), map);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@WebServlet(&quot;/findUserServlet&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public class FindUserServlet extends HttpServlet {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {</span></span>
<span class="line"><span style="color:#24292e;">        this.doPost(req, resp);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {</span></span>
<span class="line"><span style="color:#24292e;">        resp.setContentType(&quot;text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        String username = req.getParameter(&quot;username&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        HashMap&lt;String, Object&gt; map = new HashMap&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">        if (&quot;tom&quot;.equals(username)) {</span></span>
<span class="line"><span style="color:#24292e;">            map.put(&quot;userExist&quot;, true);</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            map.put(&quot;userExist&quot;, false);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        // map转json</span></span>
<span class="line"><span style="color:#24292e;">        new ObjectMapper().writeValue(resp.getWriter(), map);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></li><li><p>启动，在网页中输入tom，将光标移开，就会有效果。</p></li></ol><h1 id="xml" tabindex="-1">XML <a class="header-anchor" href="#xml" aria-label="Permalink to &quot;XML&quot;">​</a></h1><p>Extensible Markup Language可扩展标记语言，标签都是自定义的。早在1998年，W3C就发布了XML1.0规范，使用它来简化Internet的文档信息传输。</p><p>properties可以存储配置文件，但是里面内容不能重复；</p><p>xml可以存储数据，做配置文件，也可以在网络中传输。</p><p>xml和HTML区别：</p><ol><li>xml标签自定义，且语法严格；</li><li>xml存储数据 ；html传输数据。</li></ol><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><ol><li>xml第一行必须定义文档声明</li><li>xml文档有且仅有一个根标签</li><li>属性值必须使用引号，单双都可以</li><li>标签必须正确关闭，要么一对<code>&lt;user&gt;&lt;/user&gt;</code>，要么自闭和<code>&lt;user/&gt;</code></li><li>区分大小写</li><li>标签：自定义，且不能以xml开头。</li><li>属性：如果属性为id，那么属性值唯一；尽量避免属性；</li><li>文本，两种方式 <ul><li>特殊字符需要转义，如<code>&lt;</code>必须用<code>&amp;lt;</code>表示；</li><li>文本原样展示：<code>&lt;![CDATA[ 数据 ]]&gt;</code></li></ul></li></ol><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;?</span><span style="color:#85E89D;">xml</span><span style="color:#B392F0;"> version</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#B392F0;"> encoding</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;"> ?&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#F97583;">DOCTYPE</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">students</span><span style="color:#E1E4E8;"> SYSTEM &quot;student.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">students</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">student</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">number</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;id_01&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;tom&lt;/</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">age</span><span style="color:#E1E4E8;">&gt;18&lt;/</span><span style="color:#85E89D;">age</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">sex</span><span style="color:#E1E4E8;">&gt;male&lt;/</span><span style="color:#85E89D;">sex</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/</span><span style="color:#85E89D;">student</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">students</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;?</span><span style="color:#22863A;">xml</span><span style="color:#6F42C1;"> version</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#6F42C1;"> encoding</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;"> ?&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;!</span><span style="color:#D73A49;">DOCTYPE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">students</span><span style="color:#24292E;"> SYSTEM &quot;student.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">students</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">student</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">number</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;id_01&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;tom&lt;/</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">age</span><span style="color:#24292E;">&gt;18&lt;/</span><span style="color:#22863A;">age</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">sex</span><span style="color:#24292E;">&gt;male&lt;/</span><span style="color:#22863A;">sex</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">student</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">students</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>文档结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1. 首行必须是文档声明，有三个属性</span></span>
<span class="line"><span style="color:#e1e4e8;">   version=&#39;1.0&#39;：版本号，主流1.0版本，必须写，</span></span>
<span class="line"><span style="color:#e1e4e8;">   encoding=&#39;utf-8&#39;：编码方式，默认ISO-8859-1\`</span></span>
<span class="line"><span style="color:#e1e4e8;">   standalone=yes/no：是否是独立文件，一般不用。</span></span>
<span class="line"><span style="color:#e1e4e8;">2. 第二行&lt;!DOCTYPE books SYSTEM &quot;book.dtd&quot;&gt;声明的是文档定义类型（DTD约束），是可选的。 </span></span>
<span class="line"><span style="color:#e1e4e8;">3. 可以添加指令，为了结合css（了解即可，一般不用）</span></span>
<span class="line"><span style="color:#e1e4e8;">   &lt;?xml-stylesheet type=&#39;text/css&#39; href=&#39;a.css&#39;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">4. xml标签和内容</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. 首行必须是文档声明，有三个属性</span></span>
<span class="line"><span style="color:#24292e;">   version=&#39;1.0&#39;：版本号，主流1.0版本，必须写，</span></span>
<span class="line"><span style="color:#24292e;">   encoding=&#39;utf-8&#39;：编码方式，默认ISO-8859-1\`</span></span>
<span class="line"><span style="color:#24292e;">   standalone=yes/no：是否是独立文件，一般不用。</span></span>
<span class="line"><span style="color:#24292e;">2. 第二行&lt;!DOCTYPE books SYSTEM &quot;book.dtd&quot;&gt;声明的是文档定义类型（DTD约束），是可选的。 </span></span>
<span class="line"><span style="color:#24292e;">3. 可以添加指令，为了结合css（了解即可，一般不用）</span></span>
<span class="line"><span style="color:#24292e;">   &lt;?xml-stylesheet type=&#39;text/css&#39; href=&#39;a.css&#39;&gt;</span></span>
<span class="line"><span style="color:#24292e;">4. xml标签和内容</span></span></code></pre></div><p>XML是一个技术体系，除了我们经常用到的XML文档本身外，XML还支持：</p><ul><li>DTD和XSD：验证XML结构和数据是否有效；</li><li>Namespace：XML节点和属性的名字空间；</li><li>XSLT：把XML转化为另一种文本；</li><li>XPath：一种XML节点查询语言；</li><li>等等</li></ul><h2 id="dtd约束" tabindex="-1">DTD约束 <a class="header-anchor" href="#dtd约束" aria-label="Permalink to &quot;DTD约束&quot;">​</a></h2><p>框架解析xml文件；程序员编写xml文件，但是不能随意编写，否则框架不能解析。</p><p>因此，框架提供了xml文档的书写规则，叫xml约束文档。约束规则是人写的，程序员需要读懂xml约束文档，才能编写相应XML文档。</p><p>约束文档有两种类型：</p><ol><li>DTD：一种简单的约束文档</li><li>Schema：一种复杂的约束文档</li></ol><p>DTD约束文档定义的方式：</p><ol><li><p>定义在XML文档内部，将约束规则定义在xml文档中（一般不用，导致xml文档累赘，且不通用）</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;?</span><span style="color:#85E89D;">xml</span><span style="color:#B392F0;"> version</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#B392F0;"> encoding</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;"> ?&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#F97583;">DOCTYPE</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">students</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;!ELEMENT students (student*) &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;!ELEMENT student (name,age,sex)&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;!ELEMENT name (#PCDATA)&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;!ELEMENT age (#PCDATA)&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;!ELEMENT sex (#PCDATA)&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;!ATTLIST student number ID #REQUIRED&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		]&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">students</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">student</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">number</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;s001&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;tom&lt;/</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">age</span><span style="color:#E1E4E8;">&gt;18&lt;/</span><span style="color:#85E89D;">age</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">sex</span><span style="color:#E1E4E8;">&gt;male&lt;/</span><span style="color:#85E89D;">sex</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/</span><span style="color:#85E89D;">student</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">students</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;?</span><span style="color:#22863A;">xml</span><span style="color:#6F42C1;"> version</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#6F42C1;"> encoding</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;"> ?&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;!</span><span style="color:#D73A49;">DOCTYPE</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">students</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">		&lt;!ELEMENT students (student*) &gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;!ELEMENT student (name,age,sex)&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;!ELEMENT name (#PCDATA)&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;!ELEMENT age (#PCDATA)&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;!ELEMENT sex (#PCDATA)&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;!ATTLIST student number ID #REQUIRED&gt;</span></span>
<span class="line"><span style="color:#24292E;">		]&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">students</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">student</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">number</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;s001&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;tom&lt;/</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">age</span><span style="color:#24292E;">&gt;18&lt;/</span><span style="color:#22863A;">age</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">sex</span><span style="color:#24292E;">&gt;male&lt;/</span><span style="color:#22863A;">sex</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">student</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">students</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></li><li><p>外部重新建立一个dtd文件，将约束规则定义在外部dtd文件中（如下面<code>student.dtd</code>）</p><div class="language-xml-dtd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml-dtd</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!ELEMENT students (student*) &gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!ELEMENT student (name,age,sex)&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!ELEMENT name (#PCDATA)&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!ELEMENT age (#PCDATA)&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!ELEMENT sex (#PCDATA)&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!ATTLIST student number ID #REQUIRED&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!ELEMENT students (student*) &gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!ELEMENT student (name,age,sex)&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!ELEMENT name (#PCDATA)&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!ELEMENT age (#PCDATA)&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!ELEMENT sex (#PCDATA)&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!ATTLIST student number ID #REQUIRED&gt;</span></span></code></pre></div></li></ol><p>外部定义的DTD文件，如何在XML文档中使用呢？需要在xml文档中声明（一般是第二行）：</p><ul><li>如果是本地dtd文档，xml中声明：<code>&lt;!DOCTYPE 根标签名 SYSTEM &quot;xxx.dtd文件位置&quot;&gt;</code></li><li>如果是网络dtd文档，xml中声明：<code>&lt;!DOCTYPE 根标签名 PUBLIC &quot;dtd文件名&quot; &quot;dtd文件URL&quot;&gt;</code></li></ul><h2 id="schema约束" tabindex="-1">Schema约束 <a class="header-anchor" href="#schema约束" aria-label="Permalink to &quot;Schema约束&quot;">​</a></h2><p>Schema约束（<code>xxx.xsd</code>）：</p><ol><li>约束可以自定义</li><li>约束引入内容较多，复制即可。</li></ol><p>如<code>student.xsd</code>（能看懂就行）</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;?</span><span style="color:#85E89D;">xml</span><span style="color:#B392F0;"> version</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">xsd:schema</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xmlns</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.itcast.cn/xml&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">xmlns:xsd</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.w3.org/2001/XMLSchema&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">targetNamespace</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.itcast.cn/xml&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">elementFormDefault</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;qualified&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">xsd:element</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;students&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;studentsType&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">xsd:complexType</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;studentsType&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">xsd:sequence</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">xsd:element</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;student&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;studentType&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">minOccurs</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">maxOccurs</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;unbounded&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">xsd:sequence</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">xsd:complexType</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">xsd:complexType</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;studentType&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">xsd:sequence</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">xsd:element</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;xsd:string&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">xsd:element</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;age&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ageType&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">xsd:element</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sex&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sexType&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">xsd:sequence</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">xsd:attribute</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;number&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;numberType&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;required&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">xsd:complexType</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">xsd:simpleType</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sexType&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">xsd:restriction</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">base</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;xsd:string&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">xsd:enumeration</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;male&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">xsd:enumeration</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;female&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">xsd:restriction</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">xsd:simpleType</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">xsd:simpleType</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ageType&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">xsd:restriction</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">base</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;xsd:integer&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">xsd:minInclusive</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">xsd:maxInclusive</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;256&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">xsd:restriction</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">xsd:simpleType</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">xsd:simpleType</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;numberType&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">xsd:restriction</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">base</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;xsd:string&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">xsd:pattern</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;heima_\\d{4}&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">xsd:restriction</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">xsd:simpleType</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">xsd:schema</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;?</span><span style="color:#22863A;">xml</span><span style="color:#6F42C1;"> version</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#24292E;">?&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">xsd:schema</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xmlns</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.itcast.cn/xml&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">xmlns:xsd</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.w3.org/2001/XMLSchema&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">targetNamespace</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.itcast.cn/xml&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">elementFormDefault</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;qualified&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">xsd:element</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;students&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;studentsType&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">xsd:complexType</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;studentsType&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">xsd:sequence</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">xsd:element</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;student&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;studentType&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">minOccurs</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">maxOccurs</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;unbounded&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">xsd:sequence</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">xsd:complexType</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">xsd:complexType</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;studentType&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">xsd:sequence</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">xsd:element</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;xsd:string&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">xsd:element</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;age&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ageType&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">xsd:element</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sex&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sexType&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">xsd:sequence</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">xsd:attribute</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;number&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;numberType&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;required&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">xsd:complexType</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">xsd:simpleType</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sexType&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">xsd:restriction</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">base</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;xsd:string&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">xsd:enumeration</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;male&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">xsd:enumeration</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;female&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">xsd:restriction</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">xsd:simpleType</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">xsd:simpleType</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ageType&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">xsd:restriction</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">base</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;xsd:integer&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">xsd:minInclusive</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">xsd:maxInclusive</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;256&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">xsd:restriction</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">xsd:simpleType</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">xsd:simpleType</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;numberType&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">xsd:restriction</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">base</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;xsd:string&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">xsd:pattern</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;heima_\\d{4}&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">xsd:restriction</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">xsd:simpleType</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">xsd:schema</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>相应的<code>student.xml</code>如下：</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;?</span><span style="color:#85E89D;">xml</span><span style="color:#B392F0;"> version</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#B392F0;"> encoding</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;"> ?&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="color:#6A737D;">在XML中引入Schema约束如下：</span></span>
<span class="line"><span style="color:#6A737D;">	1.填写xml文档的根元素</span></span>
<span class="line"><span style="color:#6A737D;">	2.引入xsi前缀.  xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="color:#6A737D;">	3.引入xsd文件命名空间.  xsi:schemaLocation=&quot;http://www.itcast.cn/xml  student.xsd&quot;</span></span>
<span class="line"><span style="color:#6A737D;">	4.为每一个xsd约束声明一个前缀,作为标识  xmlns=&quot;http://www.itcast.cn/xml&quot;</span></span>
<span class="line"><span style="color:#6A737D;"> --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> &lt;</span><span style="color:#85E89D;">students</span><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">xmlns:xsi</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">xsi:schemaLocation</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.itcast.cn/xml  student.xsd&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">xmlns</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.itcast.cn/xml&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> 	&lt;</span><span style="color:#85E89D;">student</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">number</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;heima_0001&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> 		&lt;</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;tom&lt;/</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> 		&lt;</span><span style="color:#85E89D;">age</span><span style="color:#E1E4E8;">&gt;18&lt;/</span><span style="color:#85E89D;">age</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> 		&lt;</span><span style="color:#85E89D;">sex</span><span style="color:#E1E4E8;">&gt;male&lt;/</span><span style="color:#85E89D;">sex</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> 	&lt;/</span><span style="color:#85E89D;">student</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> &lt;/</span><span style="color:#85E89D;">students</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;?</span><span style="color:#22863A;">xml</span><span style="color:#6F42C1;"> version</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#6F42C1;"> encoding</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;"> ?&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="color:#6A737D;">在XML中引入Schema约束如下：</span></span>
<span class="line"><span style="color:#6A737D;">	1.填写xml文档的根元素</span></span>
<span class="line"><span style="color:#6A737D;">	2.引入xsi前缀.  xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="color:#6A737D;">	3.引入xsd文件命名空间.  xsi:schemaLocation=&quot;http://www.itcast.cn/xml  student.xsd&quot;</span></span>
<span class="line"><span style="color:#6A737D;">	4.为每一个xsd约束声明一个前缀,作为标识  xmlns=&quot;http://www.itcast.cn/xml&quot;</span></span>
<span class="line"><span style="color:#6A737D;"> --&gt;</span></span>
<span class="line"><span style="color:#24292E;"> &lt;</span><span style="color:#22863A;">students</span><span style="color:#24292E;">	</span><span style="color:#6F42C1;">xmlns:xsi</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">xsi:schemaLocation</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.itcast.cn/xml  student.xsd&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">xmlns</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.itcast.cn/xml&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;"> 	&lt;</span><span style="color:#22863A;">student</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">number</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;heima_0001&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;"> 		&lt;</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;tom&lt;/</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;"> 		&lt;</span><span style="color:#22863A;">age</span><span style="color:#24292E;">&gt;18&lt;/</span><span style="color:#22863A;">age</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;"> 		&lt;</span><span style="color:#22863A;">sex</span><span style="color:#24292E;">&gt;male&lt;/</span><span style="color:#22863A;">sex</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;"> 	&lt;/</span><span style="color:#22863A;">student</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;"> &lt;/</span><span style="color:#22863A;">students</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>文档中的约束，如：<code>xmlns:aaa=&quot;xxxxxxx&quot;</code>，</p><ul><li><code>xmlns</code>表示<strong>定义前缀</strong></li><li><code>xsi</code>是前缀，它可以引入命名空间<code>schemaLocation</code>，用来添加外部<code>Schema</code>约束文档</li><li><code>aaa</code>表示是前缀，用来代替<code>xxxxxx</code>。</li></ul><p>如下面<code>application_mvc.xml</code>文档：</p><ul><li>命名空间<code>schemaLocation</code>引入三个约束文档</li><li><code>xmlns</code>又定义了四个前缀 <ul><li><code>xmlns:xsixsi</code>是为了引入命名空间<code>schemaLocation</code></li><li><code>xmlns</code>是空前缀，如标签<code>bean</code></li><li><code>xmlns:context</code>前缀，其定义标签如<code>context:annotation-config</code></li><li><code>xmlns:mvc</code>前缀，其定义标签如<code>mvc:annotation-driven</code></li></ul></li></ul><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;?</span><span style="color:#85E89D;">xml</span><span style="color:#B392F0;"> version</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#B392F0;"> encoding</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">beans</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">xmlns:xsi</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">xsi:schemaLocation</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#9ECBFF;">        http://www.springframework.org/schema/beans</span></span>
<span class="line"><span style="color:#9ECBFF;">        http://www.springframework.org/schema/beans/spring-beans.xsd</span></span>
<span class="line"><span style="color:#9ECBFF;">        http://www.springframework.org/schema/context </span></span>
<span class="line"><span style="color:#9ECBFF;">        http://www.springframework.org/schema/context/spring-context.xsd</span></span>
<span class="line"><span style="color:#9ECBFF;">        http://www.springframework.org/schema/mvc</span></span>
<span class="line"><span style="color:#9ECBFF;">        http://www.springframework.org/schema/mvc/spring-mvc.xsd&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">xmlns</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.springframework.org/schema/beans&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">xmlns:context</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.springframework.org/schema/context&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">xmlns:mvc</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://www.springframework.org/schema/mvc&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">context:annotation-config</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">mvc:annotation-driven</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">bean</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;multipartResolver&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;org.springframework.web.multipart.commons.CommonsMultipartResolver&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">property</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;maxUploadSize&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;209715200&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">property</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;defaultEncoding&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">bean</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">beans</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;?</span><span style="color:#22863A;">xml</span><span style="color:#6F42C1;"> version</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#6F42C1;"> encoding</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">?&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">beans</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">xmlns:xsi</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">xsi:schemaLocation</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#032F62;">        http://www.springframework.org/schema/beans</span></span>
<span class="line"><span style="color:#032F62;">        http://www.springframework.org/schema/beans/spring-beans.xsd</span></span>
<span class="line"><span style="color:#032F62;">        http://www.springframework.org/schema/context </span></span>
<span class="line"><span style="color:#032F62;">        http://www.springframework.org/schema/context/spring-context.xsd</span></span>
<span class="line"><span style="color:#032F62;">        http://www.springframework.org/schema/mvc</span></span>
<span class="line"><span style="color:#032F62;">        http://www.springframework.org/schema/mvc/spring-mvc.xsd&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">xmlns</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.springframework.org/schema/beans&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">xmlns:context</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.springframework.org/schema/context&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">xmlns:mvc</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://www.springframework.org/schema/mvc&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">context:annotation-config</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">mvc:annotation-driven</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">bean</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;multipartResolver&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;org.springframework.web.multipart.commons.CommonsMultipartResolver&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">property</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;maxUploadSize&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;209715200&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">property</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;defaultEncoding&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">bean</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">beans</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h1 id="xml解析" tabindex="-1">XML解析 <a class="header-anchor" href="#xml解析" aria-label="Permalink to &quot;XML解析&quot;">​</a></h1><p>操作xml文档：</p><ol><li>解析（读取）</li><li>写入：将内存中的数据保存到xml文档中。（持久化存储，用的不多，略）</li></ol><p>解析xml的两种方式：</p><ol><li>DOM：将xml一次性加载到内存，形成DOM树（多应用于服务器端） <ul><li>优点：操作方便、可以增删改查</li><li>缺点：占内存</li></ul></li><li>SAX：逐行读取，基于事件驱动。（多应用于移动端） <ul><li>优点：不占内存</li><li>缺点：只能读取，不能增删改</li></ul></li></ol><p>xml常见的解析器：</p><ol><li>JAXP: sun公司提供的解析器，支持DOM和SAX两种思想。（不好用）</li><li>DOM4J: 一款优秀的解析器。</li><li>Jsoup: 基于Java的HTML解析器，DOM方式。</li><li>PULL: 安卓内置解析器，SAX方式</li></ol><h2 id="jsoup解析器" tabindex="-1">Jsoup解析器 <a class="header-anchor" href="#jsoup解析器" aria-label="Permalink to &quot;Jsoup解析器&quot;">​</a></h2><p>Jsoup使用：</p><ol><li>导入jar包<code>jsoup-1.11.2.jar</code>，并且有一个<code>student.xml</code>文档</li><li>获取 Document对象（表示整个文档）</li><li>获取对应的标签</li><li>获取数据</li></ol><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">JsoupDemo</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">String</span><span style="color:#E1E4E8;">[] </span><span style="color:#FFAB70;">args</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">throws</span><span style="color:#E1E4E8;"> IOException {</span></span>
<span class="line"><span style="color:#E1E4E8;">        String path </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> JsoupDemo.class.</span><span style="color:#B392F0;">getClassLoader</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getResource</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;student.xml&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">getPath</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 获取DOM树</span></span>
<span class="line"><span style="color:#E1E4E8;">        Document doc1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Jsoup.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">File</span><span style="color:#E1E4E8;">(path), </span><span style="color:#9ECBFF;">&quot;utf-8&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 获取元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        Elements elements </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> doc1.</span><span style="color:#B392F0;">getElementsByTag</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        Element element </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> elements.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 获取数据</span></span>
<span class="line"><span style="color:#E1E4E8;">        String name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">text</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        System.out.</span><span style="color:#B392F0;">println</span><span style="color:#E1E4E8;">(name);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">JsoupDemo</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">String</span><span style="color:#24292E;">[] </span><span style="color:#E36209;">args</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">throws</span><span style="color:#24292E;"> IOException {</span></span>
<span class="line"><span style="color:#24292E;">        String path </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> JsoupDemo.class.</span><span style="color:#6F42C1;">getClassLoader</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getResource</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;student.xml&quot;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">getPath</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 获取DOM树</span></span>
<span class="line"><span style="color:#24292E;">        Document doc1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Jsoup.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">File</span><span style="color:#24292E;">(path), </span><span style="color:#032F62;">&quot;utf-8&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 获取元素</span></span>
<span class="line"><span style="color:#24292E;">        Elements elements </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> doc1.</span><span style="color:#6F42C1;">getElementsByTag</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        Element element </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> elements.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 获取数据</span></span>
<span class="line"><span style="color:#24292E;">        String name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">text</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(name);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Jsoup工具类，返回Document对象</p><ul><li><code>Jsoup.parse(new File(path), &quot;utf-8&quot;)</code> 解析xml或html</li><li><code>Jsoup.parse(String html);</code> 解析字符串，字符串html内容</li><li><code>Jsoup.parse(new URL(&quot;..&quot;), 10000);</code> 在时间内解析网络中的html的内容。</li></ul><p>Document文档对象</p><ul><li><code>getElemeentsByTag(TagName);</code> 根据标签名获取元素集合</li><li><code>getElementsByAttribute(key);</code>根据属性名获取元素集合</li><li><code>getElementByAttributeValue(key, value);</code>根据属性名和值获取元素</li></ul><p>Elements继承于ArrayList，里面存储的都是Element。</p><p>Element对象</p><ol><li>获取子元素对象，和上面Document中的方法一样</li><li>获取属性值：<code>String attr(key);</code> 根据属性名称获取属性值</li><li>获取文本内容：<code>String text();</code> 获取文本内容</li><li>获取文本内容：<code>String html();</code> 获取标签体所有内容</li></ol><p>Node对象，是Document和Element的父类</p><h2 id="xpath解析器" tabindex="-1">XPath解析器 <a class="header-anchor" href="#xpath解析器" aria-label="Permalink to &quot;XPath解析器&quot;">​</a></h2><p>上面Jsoup查询较慢，还有快速查询方式：</p><ol><li>selector: 选择器，参数有多种形式： <ul><li><code>Elements e1 = select(&quot;name&quot;);</code></li><li><code>Elements e2 = select(&quot;student[number=\\&#39;2020_01\\&#39;]&quot;);</code></li><li><code>Elements e3 = select(&quot;student[number=\\&#39;2020_01\\&#39;] &gt; name&quot;); </code></li></ul></li><li>XPath：专门用来查xml中的位置的语言 <ul><li>先导入jar包<code>JsoupXpath-0.3.2.jar</code></li><li>从Jsoup.parse(path)获取Document对象</li><li>将Document转为xpath的xDocument对象<code>new JXDocument(doc1);</code></li><li>结合xpath语法查询 <ul><li><code>jxDoc.selN(&quot;//student&quot;);</code> 查询所有student标签</li><li><code>jxDoc.selN(&quot;//student/name&quot;);</code> 查询所有student标签下name标签</li><li><code>jxDoc.selN(&quot;//student/name[@id]&quot;);</code> 查询所有student标签下带有id属性的name标签</li><li><code>jxDoc.selN(&quot;//student/name[@id=&#39;qq&#39;]&quot;);</code> 查询所有student标签下带有id属性的name标签，并且id属性值为qq</li></ul></li></ul></li></ol>`,332),c=[o];function r(i,u,y,d,q,E){return n(),a("div",null,c)}const m=s(t,[["render",r]]);export{h as __pageData,m as default};
