import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const h=JSON.parse('{"title":"/dev/null","description":"","frontmatter":{},"headers":[],"relativePath":"articles/全栈/Linux/03重要命令.md","filePath":"articles/全栈/Linux/03重要命令.md","lastUpdated":1698198415000}'),p={name:"articles/全栈/Linux/03重要命令.md"},l=e(`<h1 id="dev-null" tabindex="-1">/dev/null <a class="header-anchor" href="#dev-null" aria-label="Permalink to &quot;/dev/null&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">0 标准输入</span></span>
<span class="line"><span style="color:#e1e4e8;">1 标准输出</span></span>
<span class="line"><span style="color:#e1e4e8;">2 标准错误</span></span>
<span class="line"><span style="color:#e1e4e8;">/dev/null 数据无底洞</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">cat /etc/passwd 1&gt; a.txt  将标准输出重定向到a.txt中，1可以忽略</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /etc/poowdd 2&gt; a.txt  将标准错误重定向到a.txt中，因为文件不存在 命令错误</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /etc/passwd &amp;&gt; a.txt  将标准输出或错误重定向到a.txt中</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /etc/poowdd 2&gt;1   将标准错误重定向到1文件</span></span>
<span class="line"><span style="color:#e1e4e8;">cat /etc/poowdd 2&gt;&amp;1 将标准错误重定向到标准输出</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">0 标准输入</span></span>
<span class="line"><span style="color:#24292e;">1 标准输出</span></span>
<span class="line"><span style="color:#24292e;">2 标准错误</span></span>
<span class="line"><span style="color:#24292e;">/dev/null 数据无底洞</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">cat /etc/passwd 1&gt; a.txt  将标准输出重定向到a.txt中，1可以忽略</span></span>
<span class="line"><span style="color:#24292e;">cat /etc/poowdd 2&gt; a.txt  将标准错误重定向到a.txt中，因为文件不存在 命令错误</span></span>
<span class="line"><span style="color:#24292e;">cat /etc/passwd &amp;&gt; a.txt  将标准输出或错误重定向到a.txt中</span></span>
<span class="line"><span style="color:#24292e;">cat /etc/poowdd 2&gt;1   将标准错误重定向到1文件</span></span>
<span class="line"><span style="color:#24292e;">cat /etc/poowdd 2&gt;&amp;1 将标准错误重定向到标准输出</span></span></code></pre></div><h1 id="man-help" tabindex="-1">man\\help <a class="header-anchor" href="#man-help" aria-label="Permalink to &quot;man\\help&quot;">​</a></h1><p>linux命令的类型：</p><ul><li>内部命令：shell程序的一部分、常驻内存</li><li>外部命令：文件系统命令</li><li>即是内部命令、又是外部命令：例如pwd</li></ul><p>查看命令类型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">type pwd</span></span>
<span class="line"><span style="color:#e1e4e8;">type -a pwd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">type pwd</span></span>
<span class="line"><span style="color:#24292e;">type -a pwd</span></span></code></pre></div><p>help命令：只能查询linux内部命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">help cd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">help cd</span></span></code></pre></div><p>--help命令：只能查询linux外部命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mkdir --help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mkdir --help</span></span></code></pre></div><p>man命令：都可以，且内容更详细。man显示的内容是手册页，内容存储在磁盘上。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">man cd</span></span>
<span class="line"><span style="color:#e1e4e8;">man mkdir</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">man cd</span></span>
<span class="line"><span style="color:#24292e;">man mkdir</span></span></code></pre></div><h1 id="find-grep-sed-awk-split" tabindex="-1">find\\grep\\sed\\awk\\split <a class="header-anchor" href="#find-grep-sed-awk-split" aria-label="Permalink to &quot;find\\grep\\sed\\awk\\split&quot;">​</a></h1><p>查看文件内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">cat xxx  查看全部</span></span>
<span class="line"><span style="color:#e1e4e8;">cat -n xxx  加上行号</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">more xxx f前进一页 b后退一页 enter前进一行 q退出</span></span>
<span class="line"><span style="color:#e1e4e8;">less xxx more的升级版</span></span>
<span class="line"><span style="color:#e1e4e8;">less -n xxx 加上行号</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">cat xxx  查看全部</span></span>
<span class="line"><span style="color:#24292e;">cat -n xxx  加上行号</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">more xxx f前进一页 b后退一页 enter前进一行 q退出</span></span>
<span class="line"><span style="color:#24292e;">less xxx more的升级版</span></span>
<span class="line"><span style="color:#24292e;">less -n xxx 加上行号</span></span></code></pre></div><p><strong>grep</strong> 在文件中搜索字符串</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">grep &quot;xxx&quot; -rn ./  查找字符串xx，递归、显示行号</span></span>
<span class="line"><span style="color:#e1e4e8;">grep &quot;xxx&quot; -l  ./  -l表示以文件显示</span></span>
<span class="line"><span style="color:#e1e4e8;">grep &quot;xxx&quot; -w ./  -w表示单词，而不是包含xxx的字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">grep &quot;xxx&quot; -rnwi ./ | wc -l  查找包含单词的文件，并返回数量</span></span>
<span class="line"><span style="color:#e1e4e8;">grep &quot;xxx&quot; -B3 filename.txt  查找前三行</span></span>
<span class="line"><span style="color:#e1e4e8;">grep &quot;xxx&quot; -A3 filename.txt  查找后三行</span></span>
<span class="line"><span style="color:#e1e4e8;">grep &quot;xxx&quot; -C3 filename.txt  查找上下文</span></span>
<span class="line"><span style="color:#e1e4e8;">grep &quot;^$&quot; -v filename.txt  反选，去除空行</span></span>
<span class="line"><span style="color:#e1e4e8;">grep &quot;log$&quot; -v filename.txt  反选，去除以log结尾的字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">ifconfig | grep -E &quot;([0-9]{1,3}\\.){3}[0-9]{1,3}&quot;  -E表示扩展正则化，过滤ifconfig出的ip地址</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">grep &quot;xxx&quot; -rn ./  查找字符串xx，递归、显示行号</span></span>
<span class="line"><span style="color:#24292e;">grep &quot;xxx&quot; -l  ./  -l表示以文件显示</span></span>
<span class="line"><span style="color:#24292e;">grep &quot;xxx&quot; -w ./  -w表示单词，而不是包含xxx的字符串</span></span>
<span class="line"><span style="color:#24292e;">grep &quot;xxx&quot; -rnwi ./ | wc -l  查找包含单词的文件，并返回数量</span></span>
<span class="line"><span style="color:#24292e;">grep &quot;xxx&quot; -B3 filename.txt  查找前三行</span></span>
<span class="line"><span style="color:#24292e;">grep &quot;xxx&quot; -A3 filename.txt  查找后三行</span></span>
<span class="line"><span style="color:#24292e;">grep &quot;xxx&quot; -C3 filename.txt  查找上下文</span></span>
<span class="line"><span style="color:#24292e;">grep &quot;^$&quot; -v filename.txt  反选，去除空行</span></span>
<span class="line"><span style="color:#24292e;">grep &quot;log$&quot; -v filename.txt  反选，去除以log结尾的字符串</span></span>
<span class="line"><span style="color:#24292e;">ifconfig | grep -E &quot;([0-9]{1,3}\\.){3}[0-9]{1,3}&quot;  -E表示扩展正则化，过滤ifconfig出的ip地址</span></span></code></pre></div><p><strong>find</strong> 查找文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">find ./ -name &quot;ins*&quot;  查找文件名称是以ins开头的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">find ./ -name &quot;*.jpg&quot; 查找jpg图片</span></span>
<span class="line"><span style="color:#e1e4e8;">find ./ -name &quot;*.jpg&quot; -ctime -1  查找最近1天修改的jpg图片</span></span>
<span class="line"><span style="color:#e1e4e8;"> -size 1M 表示大于1M的文件</span></span>
<span class="line"><span style="color:#e1e4e8;"> -1   表示1天以内的文件</span></span>
<span class="line"><span style="color:#e1e4e8;"> +30   表示30天以前的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">find / -user test -ls  查找用户test的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">find / -user test -type d -ls 查找用户test的目录</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">find ./ -name &quot;ins*&quot;  查找文件名称是以ins开头的文件</span></span>
<span class="line"><span style="color:#24292e;">find ./ -name &quot;*.jpg&quot; 查找jpg图片</span></span>
<span class="line"><span style="color:#24292e;">find ./ -name &quot;*.jpg&quot; -ctime -1  查找最近1天修改的jpg图片</span></span>
<span class="line"><span style="color:#24292e;"> -size 1M 表示大于1M的文件</span></span>
<span class="line"><span style="color:#24292e;"> -1   表示1天以内的文件</span></span>
<span class="line"><span style="color:#24292e;"> +30   表示30天以前的文件</span></span>
<span class="line"><span style="color:#24292e;">find / -user test -ls  查找用户test的文件</span></span>
<span class="line"><span style="color:#24292e;">find / -user test -type d -ls 查找用户test的目录</span></span></code></pre></div><p><strong>paste</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">paste file1 file2  对行合并两个文件，用tab行对行连接</span></span>
<span class="line"><span style="color:#e1e4e8;">paste -d: file1 file2 对行合并两个文件，用：连接</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">paste file1 file2  对行合并两个文件，用tab行对行连接</span></span>
<span class="line"><span style="color:#24292e;">paste -d: file1 file2 对行合并两个文件，用：连接</span></span></code></pre></div><p><strong>sed</strong> 查找和替换</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sed -i s/xxx/yyy file.txt  将xxx替换成yyy,-i表示永久替换，不加表示仅用于查看</span></span>
<span class="line"><span style="color:#e1e4e8;">sed -i &#39;3i &quot;OK&quot;&#39; file.txt  将OK插入到第三行</span></span>
<span class="line"><span style="color:#e1e4e8;">sed -i &#39;3d&#39; file.txt   删除第3行</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sed -i s/xxx/yyy file.txt  将xxx替换成yyy,-i表示永久替换，不加表示仅用于查看</span></span>
<span class="line"><span style="color:#24292e;">sed -i &#39;3i &quot;OK&quot;&#39; file.txt  将OK插入到第三行</span></span>
<span class="line"><span style="color:#24292e;">sed -i &#39;3d&#39; file.txt   删除第3行</span></span></code></pre></div><p><strong>awk</strong></p><p>切割命令，默认是按空格切割，还可以用<code>-F:</code>指定用冒号切割</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">free -m  查看内存使用情况</span></span>
<span class="line"><span style="color:#e1e4e8;">free -m | awk &#39;{print $1 &quot;,&quot; $3}&#39; 查看内存第1列和第3列</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">free -m  查看内存使用情况</span></span>
<span class="line"><span style="color:#24292e;">free -m | awk &#39;{print $1 &quot;,&quot; $3}&#39; 查看内存第1列和第3列</span></span></code></pre></div><p><strong>split</strong> 文件分割</p><p>分割后，默认按xaa xab xac 等命名文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">split -l 100 test.txt  #按行数切割</span></span>
<span class="line"><span style="color:#e1e4e8;">split -100 test.txt    #按行数切割</span></span>
<span class="line"><span style="color:#e1e4e8;">split -b 10M test.txt  #按大小切割</span></span>
<span class="line"><span style="color:#e1e4e8;">split -b 10M -d test.txt #切割文件命名为数字 x00 x01 x02等</span></span>
<span class="line"><span style="color:#e1e4e8;">split -b 10M -d --additional-suffix=.split-txt test.txt #切割文件加后缀.split-txt</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">split -l 100 test.txt  #按行数切割</span></span>
<span class="line"><span style="color:#24292e;">split -100 test.txt    #按行数切割</span></span>
<span class="line"><span style="color:#24292e;">split -b 10M test.txt  #按大小切割</span></span>
<span class="line"><span style="color:#24292e;">split -b 10M -d test.txt #切割文件命名为数字 x00 x01 x02等</span></span>
<span class="line"><span style="color:#24292e;">split -b 10M -d --additional-suffix=.split-txt test.txt #切割文件加后缀.split-txt</span></span></code></pre></div><h1 id="ps-netstats" tabindex="-1">ps\\netstats <a class="header-anchor" href="#ps-netstats" aria-label="Permalink to &quot;ps\\netstats&quot;">​</a></h1><p>ps查看进程（process status）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Linux有许多发行版，ps命令语法各不相同，Linux采取了一个折中方法，即融合不同的风格：</span></span>
<span class="line"><span style="color:#e1e4e8;">    * BSD风格语法，选项没有短横线；</span></span>
<span class="line"><span style="color:#e1e4e8;">    * SYSV风格语法，选项必须有短横线；Linux标准命名格式。</span></span>
<span class="line"><span style="color:#e1e4e8;">    * GNU风格语法，选项必须有两个短横线。</span></span>
<span class="line"><span style="color:#e1e4e8;">ps命令的所有信息都是kernel生成，并通过/proc/目录输出给用户空间。在/proc/目录下，每个进程对应一个进程号命名的目录。每个进程目录下，有许多文件存储当进程的信息：</span></span>
<span class="line"><span style="color:#e1e4e8;"> * cwd是一个软链接，指向进程运行的目录</span></span>
<span class="line"><span style="color:#e1e4e8;"> * mem当前进程所占用的内存空间，由open\\read\\lsee等系统调用，不能被用户读取。</span></span>
<span class="line"><span style="color:#e1e4e8;">选项：</span></span>
<span class="line"><span style="color:#e1e4e8;">    a 显示一个终端的所有进程</span></span>
<span class="line"><span style="color:#e1e4e8;">    u 显示进程的归属用户及内存使用情况</span></span>
<span class="line"><span style="color:#e1e4e8;">    x 显示没有控制终端的进程（包含其他使用者的进程）</span></span>
<span class="line"><span style="color:#e1e4e8;">    -e 显示所有进程</span></span>
<span class="line"><span style="color:#e1e4e8;">    -l 更详细、完整信息</span></span>
<span class="line"><span style="color:#e1e4e8;">    -f 显示程序间关系</span></span>
<span class="line"><span style="color:#e1e4e8;">常用如下：</span></span>
<span class="line"><span style="color:#e1e4e8;">    ps aux 查看系统中所有进程、CUP、内存使用情况</span></span>
<span class="line"><span style="color:#e1e4e8;">    ps -ef 查看系统中所有进程、进程间关系</span></span>
<span class="line"><span style="color:#e1e4e8;">结合管道：</span></span>
<span class="line"><span style="color:#e1e4e8;">    ps -ef | more</span></span>
<span class="line"><span style="color:#e1e4e8;">    ps -ef | grep 8082</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Linux有许多发行版，ps命令语法各不相同，Linux采取了一个折中方法，即融合不同的风格：</span></span>
<span class="line"><span style="color:#24292e;">    * BSD风格语法，选项没有短横线；</span></span>
<span class="line"><span style="color:#24292e;">    * SYSV风格语法，选项必须有短横线；Linux标准命名格式。</span></span>
<span class="line"><span style="color:#24292e;">    * GNU风格语法，选项必须有两个短横线。</span></span>
<span class="line"><span style="color:#24292e;">ps命令的所有信息都是kernel生成，并通过/proc/目录输出给用户空间。在/proc/目录下，每个进程对应一个进程号命名的目录。每个进程目录下，有许多文件存储当进程的信息：</span></span>
<span class="line"><span style="color:#24292e;"> * cwd是一个软链接，指向进程运行的目录</span></span>
<span class="line"><span style="color:#24292e;"> * mem当前进程所占用的内存空间，由open\\read\\lsee等系统调用，不能被用户读取。</span></span>
<span class="line"><span style="color:#24292e;">选项：</span></span>
<span class="line"><span style="color:#24292e;">    a 显示一个终端的所有进程</span></span>
<span class="line"><span style="color:#24292e;">    u 显示进程的归属用户及内存使用情况</span></span>
<span class="line"><span style="color:#24292e;">    x 显示没有控制终端的进程（包含其他使用者的进程）</span></span>
<span class="line"><span style="color:#24292e;">    -e 显示所有进程</span></span>
<span class="line"><span style="color:#24292e;">    -l 更详细、完整信息</span></span>
<span class="line"><span style="color:#24292e;">    -f 显示程序间关系</span></span>
<span class="line"><span style="color:#24292e;">常用如下：</span></span>
<span class="line"><span style="color:#24292e;">    ps aux 查看系统中所有进程、CUP、内存使用情况</span></span>
<span class="line"><span style="color:#24292e;">    ps -ef 查看系统中所有进程、进程间关系</span></span>
<span class="line"><span style="color:#24292e;">结合管道：</span></span>
<span class="line"><span style="color:#24292e;">    ps -ef | more</span></span>
<span class="line"><span style="color:#24292e;">    ps -ef | grep 8082</span></span></code></pre></div><p>netstat显示网络相关信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">netstat命令可以用于确定网络上的流量，以及确定性能问题是否是网络堵塞引起的</span></span>
<span class="line"><span style="color:#e1e4e8;"> * sockers的状态</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 传输和丢弃的数据包数</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 每个接口的累积统计信息</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 路由及状态</span></span>
<span class="line"><span style="color:#e1e4e8;">选项：</span></span>
<span class="line"><span style="color:#e1e4e8;"> -n 显示IP</span></span>
<span class="line"><span style="color:#e1e4e8;"> -t 显示所有tcp协议的端口</span></span>
<span class="line"><span style="color:#e1e4e8;"> -n 显示所有udp协议的端口</span></span>
<span class="line"><span style="color:#e1e4e8;"> -l 显示所有监听的端口</span></span>
<span class="line"><span style="color:#e1e4e8;"> -p 显示与链接相关程序名和进程PID</span></span>
<span class="line"><span style="color:#e1e4e8;">常用命令：</span></span>
<span class="line"><span style="color:#e1e4e8;"> netstat -ntlp 查看当前所有tcp端口及相应进程</span></span>
<span class="line"><span style="color:#e1e4e8;"> netstat -ntlp | grep 80查看80端口使用情况</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">netstat命令可以用于确定网络上的流量，以及确定性能问题是否是网络堵塞引起的</span></span>
<span class="line"><span style="color:#24292e;"> * sockers的状态</span></span>
<span class="line"><span style="color:#24292e;"> * 传输和丢弃的数据包数</span></span>
<span class="line"><span style="color:#24292e;"> * 每个接口的累积统计信息</span></span>
<span class="line"><span style="color:#24292e;"> * 路由及状态</span></span>
<span class="line"><span style="color:#24292e;">选项：</span></span>
<span class="line"><span style="color:#24292e;"> -n 显示IP</span></span>
<span class="line"><span style="color:#24292e;"> -t 显示所有tcp协议的端口</span></span>
<span class="line"><span style="color:#24292e;"> -n 显示所有udp协议的端口</span></span>
<span class="line"><span style="color:#24292e;"> -l 显示所有监听的端口</span></span>
<span class="line"><span style="color:#24292e;"> -p 显示与链接相关程序名和进程PID</span></span>
<span class="line"><span style="color:#24292e;">常用命令：</span></span>
<span class="line"><span style="color:#24292e;"> netstat -ntlp 查看当前所有tcp端口及相应进程</span></span>
<span class="line"><span style="color:#24292e;"> netstat -ntlp | grep 80查看80端口使用情况</span></span></code></pre></div><p>根据端口找软件位置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">找软件位置</span></span>
<span class="line"><span style="color:#e1e4e8;">    whereis nginx</span></span>
<span class="line"><span style="color:#e1e4e8;">    locate nginx</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">根据端口找软件位置</span></span>
<span class="line"><span style="color:#e1e4e8;"> 1. 根据端口，找进程</span></span>
<span class="line"><span style="color:#e1e4e8;"> netstat -ntlp | grep 80</span></span>
<span class="line"><span style="color:#e1e4e8;"> 2. 根据进程号，找路径</span></span>
<span class="line"><span style="color:#e1e4e8;"> ll /proc/25189/cwd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">找软件位置</span></span>
<span class="line"><span style="color:#24292e;">    whereis nginx</span></span>
<span class="line"><span style="color:#24292e;">    locate nginx</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">根据端口找软件位置</span></span>
<span class="line"><span style="color:#24292e;"> 1. 根据端口，找进程</span></span>
<span class="line"><span style="color:#24292e;"> netstat -ntlp | grep 80</span></span>
<span class="line"><span style="color:#24292e;"> 2. 根据进程号，找路径</span></span>
<span class="line"><span style="color:#24292e;"> ll /proc/25189/cwd</span></span></code></pre></div><h1 id="nohup" tabindex="-1">nohup <a class="header-anchor" href="#nohup" aria-label="Permalink to &quot;nohup&quot;">​</a></h1><p>nohup全称 no hang up（不挂起），用于在系统后台不挂断的运行命令，默认会输出nohup.out文件到当前目录下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nohup java -jar test.jar &amp;</span></span>
<span class="line"><span style="color:#e1e4e8;">	* &amp; 表示让程序在后台执行</span></span>
<span class="line"><span style="color:#e1e4e8;">	* nohup 表示当前会话窗口关闭，任务继续运行（ssh窗口）</span></span>
<span class="line"><span style="color:#e1e4e8;">	* 当前目录下会有一个nohup.out文件，就是后台输出。	</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">nohup java -jar test.jar &gt; mylog.log 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span style="color:#e1e4e8;">	* 2&gt;&amp;1 表示将标准错误2 重定向到标准输出&amp;1</span></span>
<span class="line"><span style="color:#e1e4e8;">	* &gt; mylog.log 表示将标准输出重定向到mylog.log，这样就没有了nohup.out文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nohup java -jar test.jar &amp;</span></span>
<span class="line"><span style="color:#24292e;">	* &amp; 表示让程序在后台执行</span></span>
<span class="line"><span style="color:#24292e;">	* nohup 表示当前会话窗口关闭，任务继续运行（ssh窗口）</span></span>
<span class="line"><span style="color:#24292e;">	* 当前目录下会有一个nohup.out文件，就是后台输出。	</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">nohup java -jar test.jar &gt; mylog.log 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span style="color:#24292e;">	* 2&gt;&amp;1 表示将标准错误2 重定向到标准输出&amp;1</span></span>
<span class="line"><span style="color:#24292e;">	* &gt; mylog.log 表示将标准输出重定向到mylog.log，这样就没有了nohup.out文件</span></span></code></pre></div>`,40),t=[l];function o(c,i,r,d,y,u){return n(),a("div",null,t)}const x=s(p,[["render",o]]);export{h as __pageData,x as default};
