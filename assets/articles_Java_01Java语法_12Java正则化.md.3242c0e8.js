import{_ as a,o as e,c as l,Q as n,k as s}from"./chunks/framework.2516552c.js";const _=JSON.parse('{"title":"概念","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/01Java语法/12Java正则化.md","filePath":"articles/Java/01Java语法/12Java正则化.md","lastUpdated":1698198415000}'),t={name:"articles/Java/01Java语法/12Java正则化.md"},p=n(`<h1 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h1><p>正则表达式（<code>regex</code>）可以用来匹配、替换、分割字符串。</p><p>正则表达式由常用字符+特殊字符组成，称为模式Pattern。</p><p>示例1：典型用法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class RegexTest {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String content = &quot;Hello Word!&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 1. 创建一个表达式对象</span></span>
<span class="line"><span style="color:#e1e4e8;">        Pattern pattern = Pattern.compile(&quot;[a|e]+&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 2. 创建一个匹配对象，即，按照Pattern去匹配字符串。</span></span>
<span class="line"><span style="color:#e1e4e8;">        Matcher matcher = pattern.matcher(content);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 3. 开始循环匹配</span></span>
<span class="line"><span style="color:#e1e4e8;">        while (matcher.find()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(&quot;content has a or e: &quot; + matcher.group(0));</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class RegexTest {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        String content = &quot;Hello Word!&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        // 1. 创建一个表达式对象</span></span>
<span class="line"><span style="color:#24292e;">        Pattern pattern = Pattern.compile(&quot;[a|e]+&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        // 2. 创建一个匹配对象，即，按照Pattern去匹配字符串。</span></span>
<span class="line"><span style="color:#24292e;">        Matcher matcher = pattern.matcher(content);</span></span>
<span class="line"><span style="color:#24292e;">        // 3. 开始循环匹配</span></span>
<span class="line"><span style="color:#24292e;">        while (matcher.find()) {</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;content has a or e: &quot; + matcher.group(0));</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>示例2：字符串方法（实际用的是Pattern类的静态方法）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class RegexTest {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 匹配：手机号</span></span>
<span class="line"><span style="color:#e1e4e8;">        boolean matches = &quot;18820203030&quot;.matches(&quot;\\\\d{11}&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(matches);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 分割：按空格分割</span></span>
<span class="line"><span style="color:#e1e4e8;">        String[] split = &quot;Hello World&quot;.split(&quot;\\\\s&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(split.length);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 替换</span></span>
<span class="line"><span style="color:#e1e4e8;">        String s = &quot;password:1882141&quot;.replaceAll(&quot;\\\\d&quot;, &quot;*&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(s);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class RegexTest {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        // 匹配：手机号</span></span>
<span class="line"><span style="color:#24292e;">        boolean matches = &quot;18820203030&quot;.matches(&quot;\\\\d{11}&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(matches);</span></span>
<span class="line"><span style="color:#24292e;">        // 分割：按空格分割</span></span>
<span class="line"><span style="color:#24292e;">        String[] split = &quot;Hello World&quot;.split(&quot;\\\\s&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(split.length);</span></span>
<span class="line"><span style="color:#24292e;">        // 替换</span></span>
<span class="line"><span style="color:#24292e;">        String s = &quot;password:1882141&quot;.replaceAll(&quot;\\\\d&quot;, &quot;*&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(s);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h1 id="正则表达式的语法" tabindex="-1">正则表达式的语法 <a class="header-anchor" href="#正则表达式的语法" aria-label="Permalink to &quot;正则表达式的语法&quot;">​</a></h1><p>正则表达式支持的字符</p><table><thead><tr><th>字符</th><th>含义</th></tr></thead><tbody><tr><td>X</td><td>任何合法的字符</td></tr><tr><td>\\0mnn</td><td>八进制数 0mnn所表示的字符</td></tr><tr><td>\\xhh</td><td>十六进制数 0xhh所表示的字符</td></tr><tr><td>\\uhhhh</td><td>十六进制值 0xhhhh 所表示的 Unicode 字符</td></tr></tbody></table><p>特殊字符（转移字符）：</p>`,11),o=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"字符"),s("th",null,"含义")])]),s("tbody",null,[s("tr",null,[s("td",null,"."),s("td",null,"任意一个字符，除换行符外")]),s("tr",null,[s("td",null,"?"),s("td",null,"零次或一次")]),s("tr",null,[s("td",null,"^"),s("td",null,"开头 （在[]中表示非）")]),s("tr",null,[s("td",null,"$"),s("td",null,"结尾")]),s("tr",null,[s("td",null,"+"),s("td",null,"一次或多次")]),s("tr",null,[s("td",null,"*"),s("td",null,"零次或多次")]),s("tr",null,[s("td",{n:""}),s("td",null,"正好n次")]),s("tr",null,[s("td",{"n,":""}),s("td",null,"至少n次")]),s("tr",null,[s("td",{"n,m":""}),s("td",null,"至少n次，至多m次")]),s("tr",null,[s("td",null,"[]"),s("td",null,"表示[]中的任意一个字符")]),s("tr",null,[s("td",null,"-"),s("td",null,"在[]中使用，表示字符范围")]),s("tr",null,[s("td",null,"|"),s("td",null,"在[]中使用，表示或")]),s("tr",null,[s("td",null,"\\"),s("td",null,"表示后面一个字符是转移字符")]),s("tr",null,[s("td",null,"\\d"),s("td",null,"数字")]),s("tr",null,[s("td",null,"\\D"),s("td",null,"非数字")]),s("tr",null,[s("td",null,"\\w"),s("td",null,"单词")]),s("tr",null,[s("td",null,"\\W"),s("td",null,"非单词")]),s("tr",null,[s("td",null,"\\s"),s("td",null,"空格")]),s("tr",null,[s("td",null,"\\S"),s("td",null,"非空格")]),s("tr",null,[s("td",null,"\\f"),s("td",null,"换页符")]),s("tr",null,[s("td",null,"\\n"),s("td",null,"换行符")])])],-1),c=n(`<p>示例</p><table><thead><tr><th>正则表达式</th><th>含义</th></tr></thead><tbody><tr><td>[\\u4e00-\\u9fa5]</td><td>表示中文字符</td></tr><tr><td>^\\d{m,n}$</td><td>m-n位的数字</td></tr></tbody></table><h1 id="分组-matcher类" tabindex="-1">分组&amp;Matcher类 <a class="header-anchor" href="#分组-matcher类" aria-label="Permalink to &quot;分组&amp;Matcher类&quot;">​</a></h1><p>Matcher 类提供了几个常用方法：</p><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>find()</td><td>返回目标字符串中是否包含与 Pattern 匹配的子串</td></tr><tr><td>group()</td><td>返回上一次与 Pattern 匹配的子串</td></tr><tr><td>start()</td><td>返回上一次与 Pattern 匹配的子串在目标字符串中的开始位置</td></tr><tr><td>end()</td><td>返回上一次与 Pattern 匹配的子串在目标字符串中的结束位置加 1</td></tr><tr><td>lookingAt()</td><td>返回目标字符串前面部分与 Pattern 是否匹配</td></tr><tr><td>matches()</td><td>返回整个目标字符串与 Pattern 是否匹配</td></tr><tr><td>reset()</td><td>将现有的 Matcher 对象应用于一个新的字符序列。</td></tr></tbody></table><p>分组和Matcher类用法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class TestReg {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 按指定模式在字符串查找</span></span>
<span class="line"><span style="color:#e1e4e8;">        String line = &quot;phone:1889999&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        // () 表示分组，这里有两组</span></span>
<span class="line"><span style="color:#e1e4e8;">        // \\\\d+ 表示至少一个数字</span></span>
<span class="line"><span style="color:#e1e4e8;">        // ? 表示勉强模式，尽可能少的匹配</span></span>
<span class="line"><span style="color:#e1e4e8;">        String pattern = &quot;(\\\\d+?)(\\\\d+?)&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        // 创建 Pattern 对象</span></span>
<span class="line"><span style="color:#e1e4e8;">        Pattern r = Pattern.compile(pattern);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        // 现在创建 matcher 对象</span></span>
<span class="line"><span style="color:#e1e4e8;">        Matcher m = r.matcher(line);</span></span>
<span class="line"><span style="color:#e1e4e8;">        while (m.find( )) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(&quot;Found value: &quot; + m.group(0));</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(&quot;Found value: &quot; + m.group(1));</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(&quot;Found value: &quot; + m.group(2));</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 输出</span></span>
<span class="line"><span style="color:#e1e4e8;">// m.group(0)表示整个匹配到的字符串 m.group(i)表示第几个分组(i&gt;0)</span></span>
<span class="line"><span style="color:#e1e4e8;">Found value: 18</span></span>
<span class="line"><span style="color:#e1e4e8;">Found value: 1</span></span>
<span class="line"><span style="color:#e1e4e8;">Found value: 8</span></span>
<span class="line"><span style="color:#e1e4e8;">Found value: 89</span></span>
<span class="line"><span style="color:#e1e4e8;">Found value: 8</span></span>
<span class="line"><span style="color:#e1e4e8;">Found value: 9</span></span>
<span class="line"><span style="color:#e1e4e8;">Found value: 99</span></span>
<span class="line"><span style="color:#e1e4e8;">Found value: 9</span></span>
<span class="line"><span style="color:#e1e4e8;">Found value: 9</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class TestReg {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        // 按指定模式在字符串查找</span></span>
<span class="line"><span style="color:#24292e;">        String line = &quot;phone:1889999&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        // () 表示分组，这里有两组</span></span>
<span class="line"><span style="color:#24292e;">        // \\\\d+ 表示至少一个数字</span></span>
<span class="line"><span style="color:#24292e;">        // ? 表示勉强模式，尽可能少的匹配</span></span>
<span class="line"><span style="color:#24292e;">        String pattern = &quot;(\\\\d+?)(\\\\d+?)&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        // 创建 Pattern 对象</span></span>
<span class="line"><span style="color:#24292e;">        Pattern r = Pattern.compile(pattern);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        // 现在创建 matcher 对象</span></span>
<span class="line"><span style="color:#24292e;">        Matcher m = r.matcher(line);</span></span>
<span class="line"><span style="color:#24292e;">        while (m.find( )) {</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;Found value: &quot; + m.group(0));</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;Found value: &quot; + m.group(1));</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;Found value: &quot; + m.group(2));</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 输出</span></span>
<span class="line"><span style="color:#24292e;">// m.group(0)表示整个匹配到的字符串 m.group(i)表示第几个分组(i&gt;0)</span></span>
<span class="line"><span style="color:#24292e;">Found value: 18</span></span>
<span class="line"><span style="color:#24292e;">Found value: 1</span></span>
<span class="line"><span style="color:#24292e;">Found value: 8</span></span>
<span class="line"><span style="color:#24292e;">Found value: 89</span></span>
<span class="line"><span style="color:#24292e;">Found value: 8</span></span>
<span class="line"><span style="color:#24292e;">Found value: 9</span></span>
<span class="line"><span style="color:#24292e;">Found value: 99</span></span>
<span class="line"><span style="color:#24292e;">Found value: 9</span></span>
<span class="line"><span style="color:#24292e;">Found value: 9</span></span></code></pre></div><p>分组的反向引用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">String s = &quot;the quick brown fox jumps over the lazy dog.&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// $1表示分组1的内容</span></span>
<span class="line"><span style="color:#e1e4e8;">String r = s.replaceAll(&quot;\\\\s([a-z]{4})\\\\s&quot;, &quot; &lt;b&gt;$1&lt;/b&gt; &quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">System.out.println(r); </span></span>
<span class="line"><span style="color:#e1e4e8;">// 输出</span></span>
<span class="line"><span style="color:#e1e4e8;">// the quick brown fox jumps &lt;b&gt;over&lt;/b&gt; the &lt;b&gt;lazy&lt;/b&gt; dog.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">String s = &quot;the quick brown fox jumps over the lazy dog.&quot;;</span></span>
<span class="line"><span style="color:#24292e;">// $1表示分组1的内容</span></span>
<span class="line"><span style="color:#24292e;">String r = s.replaceAll(&quot;\\\\s([a-z]{4})\\\\s&quot;, &quot; &lt;b&gt;$1&lt;/b&gt; &quot;);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(r); </span></span>
<span class="line"><span style="color:#24292e;">// 输出</span></span>
<span class="line"><span style="color:#24292e;">// the quick brown fox jumps &lt;b&gt;over&lt;/b&gt; the &lt;b&gt;lazy&lt;/b&gt; dog.</span></span></code></pre></div><h1 id="匹配模式" tabindex="-1">匹配模式 <a class="header-anchor" href="#匹配模式" aria-label="Permalink to &quot;匹配模式&quot;">​</a></h1><p>当使用数量表示符<code>?+*</code>时，正则表达式有以下三种模式：</p><p>Greedy（贪婪模式）：默认。一直匹配下去，直到无法匹配为止。</p><p>Reluctant（勉强模式）：只会匹配最少的字符。用?作为后缀。</p><p>Possessive（占有模式）：目标只有Java支持。用+作为后缀。</p><p>举例：</p>`,15),r=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"贪婪模式"),s("th",null,"勉强模式"),s("th",null,"占用模式"),s("th",null,"含义")])]),s("tbody",null,[s("tr",null,[s("td",null,"X?"),s("td",null,"X??"),s("td",null,"X?+"),s("td",null,"零次或一次")]),s("tr",null,[s("td",null,"X*"),s("td",null,"X*?"),s("td",null,"X*+"),s("td",null,"零次或多次")]),s("tr",null,[s("td",null,"X+"),s("td",null,"X+?"),s("td",null,"X++"),s("td",null,"一次或多次")]),s("tr",null,[s("td",{"n,m":""},"X"),s("td",null,"X{n,m}?"),s("td",null,"X{n,m}+"),s("td",null,"最少n，最多m")])])],-1),i=n(`<p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">System.out.println(&quot;hello,java!&quot;.replaceFirst(&quot;\\\\w*&quot;, &quot;x&quot;)); # x,java!</span></span>
<span class="line"><span style="color:#e1e4e8;">System.out.println(&quot;hello,java!&quot;.replaceFirst(&quot;\\\\w*?&quot;, &quot;x&quot;)); # xhello,java!</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">因为下面是勉强模式，能按0次匹配上。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">System.out.println(&quot;hello,java!&quot;.replaceFirst(&quot;\\\\w*&quot;, &quot;x&quot;)); # x,java!</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(&quot;hello,java!&quot;.replaceFirst(&quot;\\\\w*?&quot;, &quot;x&quot;)); # xhello,java!</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">因为下面是勉强模式，能按0次匹配上。</span></span></code></pre></div><p>尽量用勉强模式，贪婪模式容易内存溢出！</p><h1 id="和" tabindex="-1">?:和?! <a class="header-anchor" href="#和" aria-label="Permalink to &quot;?:和?!&quot;">​</a></h1><p><code>(?:pattern)</code></p><p>非获取匹配，匹配pattern但不获取匹配结果，不进行存储供以后使用。这在使用或字符“(|)”来组合一个模式的各个部分是很有用。例如<code>“industr(?:y|ies)”</code>就是一个比<code>“industry|industries”</code>更简略的表达式。</p><p><code>(?=pattern)</code></p><p>非获取匹配，正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如，<code>“Windows(?=95|98|NT|2000)”</code>能匹配<code>“Windows2000”</code>中的<code>“Windows”</code>，但不能匹配<code>“Windows3.1”</code>中的<code>“Windows”</code>。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。</p><p><code>(?!pattern)</code></p><p>非获取匹配，正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如<code>“Windows(?!95|98|NT|2000)”</code>能匹配<code>“Windows3.1”</code>中的<code>“Windows”</code>，但不能匹配<code>“Windows2000”</code>中的<code>“Windows”</code>。</p><p><code>(?&lt;=pattern)</code></p><p>非获取匹配，反向肯定预查，与正向肯定预查类似，只是方向相反。例如，<code>“(?&lt;=95|98|NT|2000)Windows”</code>能匹配<code>“2000Windows”</code>中的<code>“Windows”</code>，但不能匹配<code>“3.1Windows”</code>中的<code>“Windows”</code>。</p><p><code>(?&lt;!pattern)</code></p><p>非获取匹配，反向否定预查，与正向否定预查类似，只是方向相反。例如<code>“(?&lt;!95|98|NT|2000)Windows”</code>能匹配<code>“3.1Windows”</code>中的<code>“Windows”</code>，但不能匹配<code>“2000Windows”</code>中的<code>“Windows”</code>。</p><p>JDK文档中的描述</p><table><thead><tr><th>Special constructs (non-capturing)</th><th></th></tr></thead><tbody><tr><td>(?:X)</td><td>X, as a non-capturing group</td></tr><tr><td>(?=X)</td><td>X, via zero-width positive look ahead</td></tr><tr><td>(?!X)</td><td>X, via zero-width negative look ahead</td></tr><tr><td>(?&lt;=X)</td><td>X, via zero-width positive look behind</td></tr><tr><td>(?&lt;!X)</td><td>X, via zero-width negative look behind</td></tr><tr><td>(?&gt;X)</td><td>X, as an independent, non-capturing group</td></tr></tbody></table><p>non-capturing group非捕获组：因为<code>()</code>表示组，但是在这里只匹配不存至组。</p><p>zero-with零宽度：断言前后不会改变匹配引擎的指针位置。</p><p>positive &amp; negative：匹配 &amp; 不匹配</p><p>look ahead &amp; look behind 前瞻和后顾：匹配引擎的前后，和常识中的文本前后正好相反，因为匹配指针一直往前走的。</p><p>示例1：<code>(?:X)</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">(?:b)b不可以匹配bc</span></span>
<span class="line"><span style="color:#e1e4e8;">(?:b)c可以匹配bc</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 因为(?:X)不可以回溯，不是零宽度</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">(?:b)b不可以匹配bc</span></span>
<span class="line"><span style="color:#24292e;">(?:b)c可以匹配bc</span></span>
<span class="line"><span style="color:#24292e;"> * 因为(?:X)不可以回溯，不是零宽度</span></span></code></pre></div><p>示例2：<code>(?=X)</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">a(?=b)c不能匹配abc，也不能匹配ac,ab，不能匹配任何字符串。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 因为a后面跟的是c，但又要预测a之后是b。</span></span>
<span class="line"><span style="color:#e1e4e8;">(?=b)b可以匹配b</span></span>
<span class="line"><span style="color:#e1e4e8;">(?=b)bc可以匹配bc</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 因为(?=b)前面没有字符，表示从任意位置都可以开始匹配。所以(?=X)一般放在后面</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">a(?=b)c不能匹配abc，也不能匹配ac,ab，不能匹配任何字符串。</span></span>
<span class="line"><span style="color:#24292e;"> * 因为a后面跟的是c，但又要预测a之后是b。</span></span>
<span class="line"><span style="color:#24292e;">(?=b)b可以匹配b</span></span>
<span class="line"><span style="color:#24292e;">(?=b)bc可以匹配bc</span></span>
<span class="line"><span style="color:#24292e;"> * 因为(?=b)前面没有字符，表示从任意位置都可以开始匹配。所以(?=X)一般放在后面</span></span></code></pre></div><p>示例3：<code>(?&lt;=X)</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">(?&lt;=b)c可以匹配bc，匹配结果是c</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">(?&lt;=b)c可以匹配bc，匹配结果是c</span></span></code></pre></div><p>示例4：<code>(?&gt;X)</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">(?&gt;b)b不能匹配bc</span></span>
<span class="line"><span style="color:#e1e4e8;">(?&gt;b)c可以匹配bc</span></span>
<span class="line"><span style="color:#e1e4e8;"> * (?&gt;X)预测其后是X，但是不进行字符位置回溯。有点类似于(?:X)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">(?&gt;b)b不能匹配bc</span></span>
<span class="line"><span style="color:#24292e;">(?&gt;b)c可以匹配bc</span></span>
<span class="line"><span style="color:#24292e;"> * (?&gt;X)预测其后是X，但是不进行字符位置回溯。有点类似于(?:X)</span></span></code></pre></div>`,28),d=[p,o,c,r,i];function u(y,h,g,b,v,q){return e(),l("div",null,d)}const k=a(t,[["render",u]]);export{_ as __pageData,k as default};
