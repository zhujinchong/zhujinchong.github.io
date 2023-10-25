import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.2516552c.js";const g=JSON.parse('{"title":"Shell脚本","description":"","frontmatter":{},"headers":[],"relativePath":"articles/全栈/Linux/02Shell脚本.md","filePath":"articles/全栈/Linux/02Shell脚本.md","lastUpdated":1698198415000}'),p={name:"articles/全栈/Linux/02Shell脚本.md"},l=e(`<h1 id="shell脚本" tabindex="-1">Shell脚本 <a class="header-anchor" href="#shell脚本" aria-label="Permalink to &quot;Shell脚本&quot;">​</a></h1><p>shell 脚本设计内容：</p><p>引号、变量、运算符、各种括号、输出、流程控制、输出输入重定向、sed命令、grep命令、正则</p><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><p>变量名：字母、下划线</p><p>赋值=前后不能有空格</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">PRICE=10</span></span>
<span class="line"><span style="color:#e1e4e8;">echo  $PRICE</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;this price is \${PRICE}rmb&quot; #使用花括号避免和其他文字混淆</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">PRICE=10</span></span>
<span class="line"><span style="color:#24292e;">echo  $PRICE</span></span>
<span class="line"><span style="color:#24292e;">echo &quot;this price is \${PRICE}rmb&quot; #使用花括号避免和其他文字混淆</span></span></code></pre></div><p>变量默认都是字符串</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">PRICE=10</span></span>
<span class="line"><span style="color:#e1e4e8;">PRICE=$PRICE+1</span></span>
<span class="line"><span style="color:#e1e4e8;">echo $PRICE # 输出101</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">PRICE=10</span></span>
<span class="line"><span style="color:#24292e;">PRICE=$PRICE+1</span></span>
<span class="line"><span style="color:#24292e;">echo $PRICE # 输出101</span></span></code></pre></div><p>此时需要中括号 或者 bash支持的方式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">echo $[$PRICE+1]</span></span>
<span class="line"><span style="color:#e1e4e8;">PRICE=\`expr $PRICE + 1\` # bash支持，expr表示整数运算</span></span>
<span class="line"><span style="color:#e1e4e8;">let &quot;PRICE+=1&quot;   # bash支持，let表示数学运算</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">echo $[$PRICE+1]</span></span>
<span class="line"><span style="color:#24292e;">PRICE=\`expr $PRICE + 1\` # bash支持，expr表示整数运算</span></span>
<span class="line"><span style="color:#24292e;">let &quot;PRICE+=1&quot;   # bash支持，let表示数学运算</span></span></code></pre></div><h2 id="三种引号的含义" tabindex="-1">三种引号的含义 <a class="header-anchor" href="#三种引号的含义" aria-label="Permalink to &quot;三种引号的含义&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">反斜杠（\\）：使反斜杠后面的一个变量变为单纯的字符串。</span></span>
<span class="line"><span style="color:#e1e4e8;">单引号（&#39;&#39;）：转义其中所有的变量为单纯的字符串。</span></span>
<span class="line"><span style="color:#e1e4e8;">双引号（&quot;&quot;）：保留其中的变量属性，不进行转义处理。</span></span>
<span class="line"><span style="color:#e1e4e8;">反引号（\`\`）：把其中的命令执行后返回结果。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">echo \`pwd\` 输出执行命令的结果</span></span>
<span class="line"><span style="color:#e1e4e8;">PRICE=5  定义变量</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &#39;$PRICE&#39;   输出当前字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;$PRICE&quot; 输出变量值</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;\\$$PRICE&quot; 输出$5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">反斜杠（\\）：使反斜杠后面的一个变量变为单纯的字符串。</span></span>
<span class="line"><span style="color:#24292e;">单引号（&#39;&#39;）：转义其中所有的变量为单纯的字符串。</span></span>
<span class="line"><span style="color:#24292e;">双引号（&quot;&quot;）：保留其中的变量属性，不进行转义处理。</span></span>
<span class="line"><span style="color:#24292e;">反引号（\`\`）：把其中的命令执行后返回结果。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">echo \`pwd\` 输出执行命令的结果</span></span>
<span class="line"><span style="color:#24292e;">PRICE=5  定义变量</span></span>
<span class="line"><span style="color:#24292e;">echo &#39;$PRICE&#39;   输出当前字符串</span></span>
<span class="line"><span style="color:#24292e;">echo &quot;$PRICE&quot; 输出变量值</span></span>
<span class="line"><span style="color:#24292e;">echo &quot;\\$$PRICE&quot; 输出$5</span></span></code></pre></div><h2 id="第一个脚本-流程控制语句" tabindex="-1">第一个脚本&amp;流程控制语句 <a class="header-anchor" href="#第一个脚本-流程控制语句" aria-label="Permalink to &quot;第一个脚本&amp;流程控制语句&quot;">​</a></h2><p><strong>第一个脚本</strong></p><p>编写一个example.sh文件，如下：（第一行表示脚本编译器的位置）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;">pwd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/bin/bash</span></span>
<span class="line"><span style="color:#24292e;">pwd</span></span></code></pre></div><p>然后执行<code>bash example.sh</code>或者<code>./example.sh</code>，通常后者需要root分配权限</p><p><strong>接受用户的参数</strong></p><p>首先编写example.sh文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;当前脚本名称为$0&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;总共有$#个参数，分别是$*。&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;第1个参数为$1，第3个为$3。&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/bin/bash</span></span>
<span class="line"><span style="color:#24292e;">echo &quot;当前脚本名称为$0&quot;</span></span>
<span class="line"><span style="color:#24292e;">echo &quot;总共有$#个参数，分别是$*。&quot;</span></span>
<span class="line"><span style="color:#24292e;">echo &quot;第1个参数为$1，第3个为$3。&quot;</span></span></code></pre></div><p>执行命令<code>bash example.sh one two three</code>，后面三个表示参数。</p><p><strong>条件测试语句</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">语法格式：[ 测试条件 ]，注意前后必须有空格</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">语法格式：[ 测试条件 ]，注意前后必须有空格</span></span></code></pre></div><ul><li>文件测试语句；<code>[ -e example.sh ]</code> 判断文件是否存在，该语句返回真或假，但是没有输出</li><li>逻辑测试语句；<code>[ -e example.sh ] &amp;&amp; echo &quot;Exist&quot;</code> 前面若为真，则输出</li><li>整数值比较语句；<code>[ 10 -eq 10 ]</code></li><li>字符串比较语句。<code>[ $SHELL = &quot;/bin/bash&quot; ] &amp;&amp; echo &quot;true&quot;</code></li></ul><p>**if条件测试语句 **</p><p>编写example.sh文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;">DIR=&quot;./test_hehe&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">if [ ! -e $DIR ] </span></span>
<span class="line"><span style="color:#e1e4e8;">then</span></span>
<span class="line"><span style="color:#e1e4e8;"> mkdir -p $DIR</span></span>
<span class="line"><span style="color:#e1e4e8;">fi</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/bin/bash</span></span>
<span class="line"><span style="color:#24292e;">DIR=&quot;./test_hehe&quot;</span></span>
<span class="line"><span style="color:#24292e;">if [ ! -e $DIR ] </span></span>
<span class="line"><span style="color:#24292e;">then</span></span>
<span class="line"><span style="color:#24292e;"> mkdir -p $DIR</span></span>
<span class="line"><span style="color:#24292e;">fi</span></span></code></pre></div><p><strong>while条件循环</strong></p><p>编写example.sh文件，猜数字游戏，用read读取用户输入数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">while true</span></span>
<span class="line"><span style="color:#e1e4e8;">do</span></span>
<span class="line"><span style="color:#e1e4e8;">read -p &quot;请输入数字：&quot; INT</span></span>
<span class="line"><span style="color:#e1e4e8;">if [ &quot;$INT&quot; -eq &quot;$PRICE&quot; ] ; then</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;恭喜你答对了！&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">exit 0</span></span>
<span class="line"><span style="color:#e1e4e8;">elif [ &quot;$INT&quot; -gt &quot;$PRICE&quot; ] ; then</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;太高了！&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">else</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;太低了！&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">fi</span></span>
<span class="line"><span style="color:#e1e4e8;">done</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">while true</span></span>
<span class="line"><span style="color:#24292e;">do</span></span>
<span class="line"><span style="color:#24292e;">read -p &quot;请输入数字：&quot; INT</span></span>
<span class="line"><span style="color:#24292e;">if [ &quot;$INT&quot; -eq &quot;$PRICE&quot; ] ; then</span></span>
<span class="line"><span style="color:#24292e;">echo &quot;恭喜你答对了！&quot;</span></span>
<span class="line"><span style="color:#24292e;">exit 0</span></span>
<span class="line"><span style="color:#24292e;">elif [ &quot;$INT&quot; -gt &quot;$PRICE&quot; ] ; then</span></span>
<span class="line"><span style="color:#24292e;">echo &quot;太高了！&quot;</span></span>
<span class="line"><span style="color:#24292e;">else</span></span>
<span class="line"><span style="color:#24292e;">echo &quot;太低了！&quot;</span></span>
<span class="line"><span style="color:#24292e;">fi</span></span>
<span class="line"><span style="color:#24292e;">done</span></span></code></pre></div><p><strong>for条件循环</strong></p><p><code>&amp;&gt;</code> 表示输出或错误重定向</p><p><code>$?</code> 表示上一条命令的执行结果</p><p><code>ping -C 3 -i 0.2 -W 3 www.xxx.com</code>，其中-C表示次数，-i表示间隔，-W表示等待超时时间</p><p><code>/dev/null</code> 被称为linux黑洞的文件，接受的数据相当于删除了数据</p><p>下面写一个测试主机是否在线的脚本。</p><p>先写一个ipadds.txt文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">192.168.10.10</span></span>
<span class="line"><span style="color:#e1e4e8;">192.168.10.11</span></span>
<span class="line"><span style="color:#e1e4e8;">192.168.10.12</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">192.168.10.10</span></span>
<span class="line"><span style="color:#24292e;">192.168.10.11</span></span>
<span class="line"><span style="color:#24292e;">192.168.10.12</span></span></code></pre></div><p>然后写一个脚本example.txt，并执行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;">HOSTS=$(cat ./ipadds.txt)</span></span>
<span class="line"><span style="color:#e1e4e8;">for IP in $HOSTS</span></span>
<span class="line"><span style="color:#e1e4e8;">do</span></span>
<span class="line"><span style="color:#e1e4e8;">ping -c 3 $IP &amp;&gt; /dev/null</span></span>
<span class="line"><span style="color:#e1e4e8;">if [ $? -eq 0 ] ; then</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;Host $IP is On-line.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">else</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;Host $IP is Off-line.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">fi</span></span>
<span class="line"><span style="color:#e1e4e8;">done</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/bin/bash</span></span>
<span class="line"><span style="color:#24292e;">HOSTS=$(cat ./ipadds.txt)</span></span>
<span class="line"><span style="color:#24292e;">for IP in $HOSTS</span></span>
<span class="line"><span style="color:#24292e;">do</span></span>
<span class="line"><span style="color:#24292e;">ping -c 3 $IP &amp;&gt; /dev/null</span></span>
<span class="line"><span style="color:#24292e;">if [ $? -eq 0 ] ; then</span></span>
<span class="line"><span style="color:#24292e;">echo &quot;Host $IP is On-line.&quot;</span></span>
<span class="line"><span style="color:#24292e;">else</span></span>
<span class="line"><span style="color:#24292e;">echo &quot;Host $IP is Off-line.&quot;</span></span>
<span class="line"><span style="color:#24292e;">fi</span></span>
<span class="line"><span style="color:#24292e;">done</span></span></code></pre></div><p><strong>case条件测试语句</strong></p><p>判断输入的是什么类型的数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;">read -p &quot;请输入一个字符：&quot; KEY</span></span>
<span class="line"><span style="color:#e1e4e8;">case &quot;$KEY&quot; in</span></span>
<span class="line"><span style="color:#e1e4e8;">[a-z]|[A-Z])</span></span>
<span class="line"><span style="color:#e1e4e8;"> echo &quot;字母&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">;;</span></span>
<span class="line"><span style="color:#e1e4e8;">[0-9])</span></span>
<span class="line"><span style="color:#e1e4e8;"> echo &quot;数字&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">;;</span></span>
<span class="line"><span style="color:#e1e4e8;">*)</span></span>
<span class="line"><span style="color:#e1e4e8;"> echo &quot;其他&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">esac</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/bin/bash</span></span>
<span class="line"><span style="color:#24292e;">read -p &quot;请输入一个字符：&quot; KEY</span></span>
<span class="line"><span style="color:#24292e;">case &quot;$KEY&quot; in</span></span>
<span class="line"><span style="color:#24292e;">[a-z]|[A-Z])</span></span>
<span class="line"><span style="color:#24292e;"> echo &quot;字母&quot;</span></span>
<span class="line"><span style="color:#24292e;">;;</span></span>
<span class="line"><span style="color:#24292e;">[0-9])</span></span>
<span class="line"><span style="color:#24292e;"> echo &quot;数字&quot;</span></span>
<span class="line"><span style="color:#24292e;">;;</span></span>
<span class="line"><span style="color:#24292e;">*)</span></span>
<span class="line"><span style="color:#24292e;"> echo &quot;其他&quot;</span></span>
<span class="line"><span style="color:#24292e;">esac</span></span></code></pre></div><h2 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">arr=(&quot;aba&quot; &quot;def&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">arr[3]=&quot;hehe&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">echo \${arr[0]} # 输出第一个元素</span></span>
<span class="line"><span style="color:#e1e4e8;">echo \${arr[@]} # 输出所有元素</span></span>
<span class="line"><span style="color:#e1e4e8;">echo \${#arr[0]} # 第一个元素长度</span></span>
<span class="line"><span style="color:#e1e4e8;">echo \${#arr[@]} # 数组长度</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">arr=(&quot;aba&quot; &quot;def&quot;)</span></span>
<span class="line"><span style="color:#24292e;">arr[3]=&quot;hehe&quot;</span></span>
<span class="line"><span style="color:#24292e;">echo \${arr[0]} # 输出第一个元素</span></span>
<span class="line"><span style="color:#24292e;">echo \${arr[@]} # 输出所有元素</span></span>
<span class="line"><span style="color:#24292e;">echo \${#arr[0]} # 第一个元素长度</span></span>
<span class="line"><span style="color:#24292e;">echo \${#arr[@]} # 数组长度</span></span></code></pre></div><h2 id="计算数值的四种方式" tabindex="-1">计算数值的四种方式 <a class="header-anchor" href="#计算数值的四种方式" aria-label="Permalink to &quot;计算数值的四种方式&quot;">​</a></h2><p>let几乎支持所有的运算符</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">price=1</span></span>
<span class="line"><span style="color:#e1e4e8;">let &quot;price+=1&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">echo $price</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">price=1</span></span>
<span class="line"><span style="color:#24292e;">let &quot;price+=1&quot;</span></span>
<span class="line"><span style="color:#24292e;">echo $price</span></span></code></pre></div><p>(())的使用方法和let完全相同</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">price=1</span></span>
<span class="line"><span style="color:#e1e4e8;">((price+=1))</span></span>
<span class="line"><span style="color:#e1e4e8;">echo $price</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">price=1</span></span>
<span class="line"><span style="color:#24292e;">((price+=1))</span></span>
<span class="line"><span style="color:#24292e;">echo $price</span></span></code></pre></div><p>$[]将中括号内的表达式作为数学运算</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">price=1</span></span>
<span class="line"><span style="color:#e1e4e8;">price=$[$price+1]</span></span>
<span class="line"><span style="color:#e1e4e8;">echo $price</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">price=1</span></span>
<span class="line"><span style="color:#24292e;">price=$[$price+1]</span></span>
<span class="line"><span style="color:#24292e;">echo $price</span></span></code></pre></div><p>expr</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">price=1</span></span>
<span class="line"><span style="color:#e1e4e8;">price=\`expr $price + 1\`</span></span>
<span class="line"><span style="color:#e1e4e8;">echo $price</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">price=1</span></span>
<span class="line"><span style="color:#24292e;">price=\`expr $price + 1\`</span></span>
<span class="line"><span style="color:#24292e;">echo $price</span></span></code></pre></div><p>浮点数计算也有命令，先不介绍</p><h2 id="if的条件" tabindex="-1">if的条件 <a class="header-anchor" href="#if的条件" aria-label="Permalink to &quot;if的条件&quot;">​</a></h2><p>字符串判断</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[ -n string ] 如果长度不为0为真</span></span>
<span class="line"><span style="color:#e1e4e8;">[ -z string ] 如果长度为0为真</span></span>
<span class="line"><span style="color:#e1e4e8;">[ &quot;$a&quot; = &quot;$b&quot; ] 判断两个变量是否相等</span></span>
<span class="line"><span style="color:#e1e4e8;">[ &quot;$a&quot; != &quot;$b&quot; ] 判断两个变量是否不相等</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[ -n string ] 如果长度不为0为真</span></span>
<span class="line"><span style="color:#24292e;">[ -z string ] 如果长度为0为真</span></span>
<span class="line"><span style="color:#24292e;">[ &quot;$a&quot; = &quot;$b&quot; ] 判断两个变量是否相等</span></span>
<span class="line"><span style="color:#24292e;">[ &quot;$a&quot; != &quot;$b&quot; ] 判断两个变量是否不相等</span></span></code></pre></div><p>数值判断</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[ $a -eq 15 ] 相等</span></span>
<span class="line"><span style="color:#e1e4e8;">[ $a -ne 15 ] 不相等</span></span>
<span class="line"><span style="color:#e1e4e8;">-gt 大于</span></span>
<span class="line"><span style="color:#e1e4e8;">-lt 小于</span></span>
<span class="line"><span style="color:#e1e4e8;">-ge 大于等于</span></span>
<span class="line"><span style="color:#e1e4e8;">-le 小于等于</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[ $a -eq 15 ] 相等</span></span>
<span class="line"><span style="color:#24292e;">[ $a -ne 15 ] 不相等</span></span>
<span class="line"><span style="color:#24292e;">-gt 大于</span></span>
<span class="line"><span style="color:#24292e;">-lt 小于</span></span>
<span class="line"><span style="color:#24292e;">-ge 大于等于</span></span>
<span class="line"><span style="color:#24292e;">-le 小于等于</span></span></code></pre></div><p>测试文件状态</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[ -f &quot;file_name&quot; ] 判断是否是一个文件</span></span>
<span class="line"><span style="color:#e1e4e8;">[ -r &quot;file_name&quot; ] 判断文件是否可读</span></span>
<span class="line"><span style="color:#e1e4e8;">-a 文件存在</span></span>
<span class="line"><span style="color:#e1e4e8;">-d 文件存在并且是目录</span></span>
<span class="line"><span style="color:#e1e4e8;">-f 文件存在并且是文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[ -f &quot;file_name&quot; ] 判断是否是一个文件</span></span>
<span class="line"><span style="color:#24292e;">[ -r &quot;file_name&quot; ] 判断文件是否可读</span></span>
<span class="line"><span style="color:#24292e;">-a 文件存在</span></span>
<span class="line"><span style="color:#24292e;">-d 文件存在并且是目录</span></span>
<span class="line"><span style="color:#24292e;">-f 文件存在并且是文件</span></span></code></pre></div><p>逻辑判断</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[ ! 表达式 ]</span></span>
<span class="line"><span style="color:#e1e4e8;">[ ! 表达式 -a 表达式 ]</span></span>
<span class="line"><span style="color:#e1e4e8;">[ ! 表达式 -o 表达式 ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[ ! 表达式 ]</span></span>
<span class="line"><span style="color:#24292e;">[ ! 表达式 -a 表达式 ]</span></span>
<span class="line"><span style="color:#24292e;">[ ! 表达式 -o 表达式 ]</span></span></code></pre></div><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><ol><li>函数返回值，可以显示增加return语句，return要返回数值；</li><li>返回返回值用，$?来获得；</li><li>函数可以加function，也可以不加</li><li>函数参数和shell一样。</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function hello(){</span></span>
<span class="line"><span style="color:#e1e4e8;">    echo &quot;haha&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    echo &quot;参数：$*&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">hello &quot;Zhangsan&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;hello: $?&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/bin/bash</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function hello(){</span></span>
<span class="line"><span style="color:#24292e;">    echo &quot;haha&quot;</span></span>
<span class="line"><span style="color:#24292e;">    echo &quot;参数：$*&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">hello &quot;Zhangsan&quot;</span></span>
<span class="line"><span style="color:#24292e;">echo &quot;hello: $?&quot;</span></span></code></pre></div><h1 id="shell常用的unix命令" tabindex="-1">Shell常用的Unix命令 <a class="header-anchor" href="#shell常用的unix命令" aria-label="Permalink to &quot;Shell常用的Unix命令&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">wc -l file 计算文件行数</span></span>
<span class="line"><span style="color:#e1e4e8;">wc -w file 计算文件单词数</span></span>
<span class="line"><span style="color:#e1e4e8;">wc -c file 计算文件中的字符数</span></span>
<span class="line"><span style="color:#e1e4e8;">cut -b5-10 file 输出每行第5-10个字符</span></span>
<span class="line"><span style="color:#e1e4e8;">sort file 对文件中的行进行排序</span></span>
<span class="line"><span style="color:#e1e4e8;">uniq  删除文本文件中重复出现的行列</span></span>
<span class="line"><span style="color:#e1e4e8;"> -u 只显示不重复的行</span></span>
<span class="line"><span style="color:#e1e4e8;"> -d 只显示重复的行</span></span>
<span class="line"><span style="color:#e1e4e8;"> -c 统计重复/不重复的行的数量</span></span>
<span class="line"><span style="color:#e1e4e8;">tee outfile 将数据输出到标准输出设备和文件</span></span>
<span class="line"><span style="color:#e1e4e8;">basename file 文件名（没有路径）</span></span>
<span class="line"><span style="color:#e1e4e8;">dirname file 文件路径（没有文件名）</span></span>
<span class="line"><span style="color:#e1e4e8;">find 查找文件</span></span>
<span class="line"><span style="color:#e1e4e8;">grep &#39;zhangsan&#39; file 在文件中搜索字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">sed 对数据查找和替换</span></span>
<span class="line"><span style="color:#e1e4e8;">awk 把文件分成列</span></span>
<span class="line"><span style="color:#e1e4e8;">split  对文件分割（分成小份）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">wc -l file 计算文件行数</span></span>
<span class="line"><span style="color:#24292e;">wc -w file 计算文件单词数</span></span>
<span class="line"><span style="color:#24292e;">wc -c file 计算文件中的字符数</span></span>
<span class="line"><span style="color:#24292e;">cut -b5-10 file 输出每行第5-10个字符</span></span>
<span class="line"><span style="color:#24292e;">sort file 对文件中的行进行排序</span></span>
<span class="line"><span style="color:#24292e;">uniq  删除文本文件中重复出现的行列</span></span>
<span class="line"><span style="color:#24292e;"> -u 只显示不重复的行</span></span>
<span class="line"><span style="color:#24292e;"> -d 只显示重复的行</span></span>
<span class="line"><span style="color:#24292e;"> -c 统计重复/不重复的行的数量</span></span>
<span class="line"><span style="color:#24292e;">tee outfile 将数据输出到标准输出设备和文件</span></span>
<span class="line"><span style="color:#24292e;">basename file 文件名（没有路径）</span></span>
<span class="line"><span style="color:#24292e;">dirname file 文件路径（没有文件名）</span></span>
<span class="line"><span style="color:#24292e;">find 查找文件</span></span>
<span class="line"><span style="color:#24292e;">grep &#39;zhangsan&#39; file 在文件中搜索字符串</span></span>
<span class="line"><span style="color:#24292e;">sed 对数据查找和替换</span></span>
<span class="line"><span style="color:#24292e;">awk 把文件分成列</span></span>
<span class="line"><span style="color:#24292e;">split  对文件分割（分成小份）</span></span></code></pre></div>`,70),o=[l];function c(t,i,r,d,h,u){return a(),n("div",null,o)}const q=s(p,[["render",c]]);export{g as __pageData,q as default};
