import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const f=JSON.parse('{"title":"1. python3字符串str","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/01python语法&工具/01python3语法.md","filePath":"articles/算法/01python语法&工具/01python3语法.md","lastUpdated":1698165534000}'),p={name:"articles/算法/01python语法&工具/01python3语法.md"},l=e(`<h1 id="_1-python3字符串str" tabindex="-1">1. python3字符串str <a class="header-anchor" href="#_1-python3字符串str" aria-label="Permalink to &quot;1. python3字符串str&quot;">​</a></h1><p>ASCII 英文编码 GB2312中文编码 Unicode 所有编码 utf-8：变长Unicode（英文1个字节，中文3个字节）</p><p>一般文本文件存储的是bytes（节省空间），而python3字符串用的是Unicode编码 所以，为了避免乱码应坚持使用utf-8编码对str和byters互相转换</p><p>字符串编码：&#39;hello, 中国&#39;.encode(&#39;utf-8&#39;) 字节流解码：b&#39;ABC&#39;.decode(&#39;utf-8&#39;, errors=&#39;ignore&#39;)忽略错误的字节，或者&quot;GBK&quot;</p><h1 id="_2-list-tuple-dict-set" tabindex="-1">2. list tuple dict set <a class="header-anchor" href="#_2-list-tuple-dict-set" aria-label="Permalink to &quot;2. list tuple dict set&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># list可以修改</span></span>
<span class="line"><span style="color:#e1e4e8;">list1 = [&#39;wang&#39;, 12]</span></span>
<span class="line"><span style="color:#e1e4e8;">list2 = []</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># tuple不能修改</span></span>
<span class="line"><span style="color:#e1e4e8;">tuple1 = (&#39;wang&#39;, &#39;li&#39;, &#39;zhang&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">tuple2 = ()     # 创建空的tuple</span></span>
<span class="line"><span style="color:#e1e4e8;">tuple3 = (1,)      # 创建1个元素的tuple</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># dict</span></span>
<span class="line"><span style="color:#e1e4e8;">dict1 = {&#39;Michael&#39;: 95, &#39;Bob&#39;: 75}</span></span>
<span class="line"><span style="color:#e1e4e8;">dict2 = {}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># set，没有重复值</span></span>
<span class="line"><span style="color:#e1e4e8;">set1 = set([1, 2])</span></span>
<span class="line"><span style="color:#e1e4e8;">set2 = set([1, 2, 3])</span></span>
<span class="line"><span style="color:#e1e4e8;">set3 = set()</span></span>
<span class="line"><span style="color:#e1e4e8;">print(set1 &amp; set2)     # 交集</span></span>
<span class="line"><span style="color:#e1e4e8;">print(set1 | set2)     # 并集</span></span>
<span class="line"><span style="color:#e1e4e8;">print(set1)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 再议不可变对象</span></span>
<span class="line"><span style="color:#e1e4e8;">a = [&#39;c&#39;, &#39;b&#39;, &#39;a&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">a.sort()</span></span>
<span class="line"><span style="color:#e1e4e8;">print(a)        # 发现a变了</span></span>
<span class="line"><span style="color:#e1e4e8;">a = &#39;abc&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">a.replace(&#39;a&#39;, &#39;A&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(a)        # 发现a没变</span></span>
<span class="line"><span style="color:#e1e4e8;"># 可变：列表、集合、字典</span></span>
<span class="line"><span style="color:#e1e4e8;"># 不可变：元组、字符串、整型、浮点型、布尔型</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># list可以修改</span></span>
<span class="line"><span style="color:#24292e;">list1 = [&#39;wang&#39;, 12]</span></span>
<span class="line"><span style="color:#24292e;">list2 = []</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># tuple不能修改</span></span>
<span class="line"><span style="color:#24292e;">tuple1 = (&#39;wang&#39;, &#39;li&#39;, &#39;zhang&#39;)</span></span>
<span class="line"><span style="color:#24292e;">tuple2 = ()     # 创建空的tuple</span></span>
<span class="line"><span style="color:#24292e;">tuple3 = (1,)      # 创建1个元素的tuple</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># dict</span></span>
<span class="line"><span style="color:#24292e;">dict1 = {&#39;Michael&#39;: 95, &#39;Bob&#39;: 75}</span></span>
<span class="line"><span style="color:#24292e;">dict2 = {}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># set，没有重复值</span></span>
<span class="line"><span style="color:#24292e;">set1 = set([1, 2])</span></span>
<span class="line"><span style="color:#24292e;">set2 = set([1, 2, 3])</span></span>
<span class="line"><span style="color:#24292e;">set3 = set()</span></span>
<span class="line"><span style="color:#24292e;">print(set1 &amp; set2)     # 交集</span></span>
<span class="line"><span style="color:#24292e;">print(set1 | set2)     # 并集</span></span>
<span class="line"><span style="color:#24292e;">print(set1)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 再议不可变对象</span></span>
<span class="line"><span style="color:#24292e;">a = [&#39;c&#39;, &#39;b&#39;, &#39;a&#39;]</span></span>
<span class="line"><span style="color:#24292e;">a.sort()</span></span>
<span class="line"><span style="color:#24292e;">print(a)        # 发现a变了</span></span>
<span class="line"><span style="color:#24292e;">a = &#39;abc&#39;</span></span>
<span class="line"><span style="color:#24292e;">a.replace(&#39;a&#39;, &#39;A&#39;)</span></span>
<span class="line"><span style="color:#24292e;">print(a)        # 发现a没变</span></span>
<span class="line"><span style="color:#24292e;"># 可变：列表、集合、字典</span></span>
<span class="line"><span style="color:#24292e;"># 不可变：元组、字符串、整型、浮点型、布尔型</span></span></code></pre></div><h1 id="_3-循环、迭代" tabindex="-1">3. 循环、迭代 <a class="header-anchor" href="#_3-循环、迭代" aria-label="Permalink to &quot;3. 循环、迭代&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 显示下标循环</span></span>
<span class="line"><span style="color:#e1e4e8;">list1 = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">for i, value in enumerate(list1):</span></span>
<span class="line"><span style="color:#e1e4e8;">    print(i, value)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 字典循环</span></span>
<span class="line"><span style="color:#e1e4e8;">dict1 = {&#39;x&#39;: 1, &#39;y&#39;: 2}</span></span>
<span class="line"><span style="color:#e1e4e8;">for key, value in dict1.items():</span></span>
<span class="line"><span style="color:#e1e4e8;">    print(key, value)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 生成器</span></span>
<span class="line"><span style="color:#e1e4e8;">def fib(max):</span></span>
<span class="line"><span style="color:#e1e4e8;">    n, a, b = 0, 0, 1</span></span>
<span class="line"><span style="color:#e1e4e8;">    while n &lt; max:</span></span>
<span class="line"><span style="color:#e1e4e8;">        yield b</span></span>
<span class="line"><span style="color:#e1e4e8;">        a, b = b, a+b</span></span>
<span class="line"><span style="color:#e1e4e8;">        n = n + 1</span></span>
<span class="line"><span style="color:#e1e4e8;"># 迭代器</span></span>
<span class="line"><span style="color:#e1e4e8;">for i in fib(5):</span></span>
<span class="line"><span style="color:#e1e4e8;">    print(i)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 显示下标循环</span></span>
<span class="line"><span style="color:#24292e;">list1 = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span></span>
<span class="line"><span style="color:#24292e;">for i, value in enumerate(list1):</span></span>
<span class="line"><span style="color:#24292e;">    print(i, value)</span></span>
<span class="line"><span style="color:#24292e;"># 字典循环</span></span>
<span class="line"><span style="color:#24292e;">dict1 = {&#39;x&#39;: 1, &#39;y&#39;: 2}</span></span>
<span class="line"><span style="color:#24292e;">for key, value in dict1.items():</span></span>
<span class="line"><span style="color:#24292e;">    print(key, value)</span></span>
<span class="line"><span style="color:#24292e;"># 生成器</span></span>
<span class="line"><span style="color:#24292e;">def fib(max):</span></span>
<span class="line"><span style="color:#24292e;">    n, a, b = 0, 0, 1</span></span>
<span class="line"><span style="color:#24292e;">    while n &lt; max:</span></span>
<span class="line"><span style="color:#24292e;">        yield b</span></span>
<span class="line"><span style="color:#24292e;">        a, b = b, a+b</span></span>
<span class="line"><span style="color:#24292e;">        n = n + 1</span></span>
<span class="line"><span style="color:#24292e;"># 迭代器</span></span>
<span class="line"><span style="color:#24292e;">for i in fib(5):</span></span>
<span class="line"><span style="color:#24292e;">    print(i)</span></span></code></pre></div><h1 id="_4-函数-map-reduce-filter-sortd-lambda" tabindex="-1">4. 函数 map reduce filter sortd lambda <a class="header-anchor" href="#_4-函数-map-reduce-filter-sortd-lambda" aria-label="Permalink to &quot;4. 函数 map reduce filter sortd lambda&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 高级函数</span></span>
<span class="line"><span style="color:#e1e4e8;"># map()</span></span>
<span class="line"><span style="color:#e1e4e8;">L = list(map(str, [1, 2, 3, 4]))       # 变成字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">print(L)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># reduce()</span></span>
<span class="line"><span style="color:#e1e4e8;">from functools import reduce</span></span>
<span class="line"><span style="color:#e1e4e8;">def add(x, y):</span></span>
<span class="line"><span style="color:#e1e4e8;">    return x + y</span></span>
<span class="line"><span style="color:#e1e4e8;">print(reduce(add, [1, 2, 3, 4]))</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># filter()</span></span>
<span class="line"><span style="color:#e1e4e8;">def is_odd(n):</span></span>
<span class="line"><span style="color:#e1e4e8;">    return n % 2 == 0</span></span>
<span class="line"><span style="color:#e1e4e8;">print(list(filter(is_odd, [1, 2, 3, 4])))</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># sortd()</span></span>
<span class="line"><span style="color:#e1e4e8;">print(sorted([1, 2, 4, -3], key=abs))</span></span>
<span class="line"><span style="color:#e1e4e8;">print(sorted([&#39;bob&#39;, &#39;Zoo&#39;], key=str.lower, reverse=True))</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 匿名函数</span></span>
<span class="line"><span style="color:#e1e4e8;">print(list(map(lambda x: x**2, [1, 2, 3, 4])))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 高级函数</span></span>
<span class="line"><span style="color:#24292e;"># map()</span></span>
<span class="line"><span style="color:#24292e;">L = list(map(str, [1, 2, 3, 4]))       # 变成字符串</span></span>
<span class="line"><span style="color:#24292e;">print(L)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># reduce()</span></span>
<span class="line"><span style="color:#24292e;">from functools import reduce</span></span>
<span class="line"><span style="color:#24292e;">def add(x, y):</span></span>
<span class="line"><span style="color:#24292e;">    return x + y</span></span>
<span class="line"><span style="color:#24292e;">print(reduce(add, [1, 2, 3, 4]))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># filter()</span></span>
<span class="line"><span style="color:#24292e;">def is_odd(n):</span></span>
<span class="line"><span style="color:#24292e;">    return n % 2 == 0</span></span>
<span class="line"><span style="color:#24292e;">print(list(filter(is_odd, [1, 2, 3, 4])))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># sortd()</span></span>
<span class="line"><span style="color:#24292e;">print(sorted([1, 2, 4, -3], key=abs))</span></span>
<span class="line"><span style="color:#24292e;">print(sorted([&#39;bob&#39;, &#39;Zoo&#39;], key=str.lower, reverse=True))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 匿名函数</span></span>
<span class="line"><span style="color:#24292e;">print(list(map(lambda x: x**2, [1, 2, 3, 4])))</span></span></code></pre></div><h1 id="_5-类封装" tabindex="-1">5. 类封装 <a class="header-anchor" href="#_5-类封装" aria-label="Permalink to &quot;5. 类封装&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 封装</span></span>
<span class="line"><span style="color:#e1e4e8;">class Student(object):</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __init__(self, name, age):</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.__name = name</span></span>
<span class="line"><span style="color:#e1e4e8;">        self._age = age</span></span>
<span class="line"><span style="color:#e1e4e8;">    def print_age(self):</span></span>
<span class="line"><span style="color:#e1e4e8;">        print(&#39;%s, %d&#39; % (self.__name, self._age))</span></span>
<span class="line"><span style="color:#e1e4e8;">    def get_age(self):</span></span>
<span class="line"><span style="color:#e1e4e8;">        return self.__age</span></span>
<span class="line"><span style="color:#e1e4e8;"># __name表示私有变量，外部不可直接访问</span></span>
<span class="line"><span style="color:#e1e4e8;"># _age提示是私有变量，外部最好不要直接访问</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 类属性</span></span>
<span class="line"><span style="color:#e1e4e8;">class Man(object):</span></span>
<span class="line"><span style="color:#e1e4e8;">    count = 0</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __init__(self, name):</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.__name = name</span></span>
<span class="line"><span style="color:#e1e4e8;">        Man.count += 1</span></span>
<span class="line"><span style="color:#e1e4e8;">man1 = Man(&#39;zhang&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">man2 = Man(&#39;wang&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(Man.count)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 封装</span></span>
<span class="line"><span style="color:#24292e;">class Student(object):</span></span>
<span class="line"><span style="color:#24292e;">    def __init__(self, name, age):</span></span>
<span class="line"><span style="color:#24292e;">        self.__name = name</span></span>
<span class="line"><span style="color:#24292e;">        self._age = age</span></span>
<span class="line"><span style="color:#24292e;">    def print_age(self):</span></span>
<span class="line"><span style="color:#24292e;">        print(&#39;%s, %d&#39; % (self.__name, self._age))</span></span>
<span class="line"><span style="color:#24292e;">    def get_age(self):</span></span>
<span class="line"><span style="color:#24292e;">        return self.__age</span></span>
<span class="line"><span style="color:#24292e;"># __name表示私有变量，外部不可直接访问</span></span>
<span class="line"><span style="color:#24292e;"># _age提示是私有变量，外部最好不要直接访问</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 类属性</span></span>
<span class="line"><span style="color:#24292e;">class Man(object):</span></span>
<span class="line"><span style="color:#24292e;">    count = 0</span></span>
<span class="line"><span style="color:#24292e;">    def __init__(self, name):</span></span>
<span class="line"><span style="color:#24292e;">        self.__name = name</span></span>
<span class="line"><span style="color:#24292e;">        Man.count += 1</span></span>
<span class="line"><span style="color:#24292e;">man1 = Man(&#39;zhang&#39;)</span></span>
<span class="line"><span style="color:#24292e;">man2 = Man(&#39;wang&#39;)</span></span>
<span class="line"><span style="color:#24292e;">print(Man.count)</span></span></code></pre></div><h1 id="文件路径os-path" tabindex="-1">文件路径os.path <a class="header-anchor" href="#文件路径os-path" aria-label="Permalink to &quot;文件路径os.path&quot;">​</a></h1><p>导入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import os</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import os</span></span></code></pre></div><p>文件路径</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 当前文件路径</span></span>
<span class="line"><span style="color:#e1e4e8;">os.path.dirname(__file__)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 当前文件所在目录&#39;/project/test&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">os.path.dirname(&#39;/project/test/test.py&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 上一层目录 &#39;/project&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">os.path.dirname(&#39;/project/test&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 目录+文件</span></span>
<span class="line"><span style="color:#e1e4e8;">os.path.join(file_dir, &quot;profile_instance.json&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 当前文件路径</span></span>
<span class="line"><span style="color:#24292e;">os.path.dirname(__file__)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 当前文件所在目录&#39;/project/test&#39;</span></span>
<span class="line"><span style="color:#24292e;">os.path.dirname(&#39;/project/test/test.py&#39;)</span></span>
<span class="line"><span style="color:#24292e;"># 上一层目录 &#39;/project&#39;</span></span>
<span class="line"><span style="color:#24292e;">os.path.dirname(&#39;/project/test&#39;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 目录+文件</span></span>
<span class="line"><span style="color:#24292e;">os.path.join(file_dir, &quot;profile_instance.json&quot;)</span></span></code></pre></div><p>遍历文件夹</p><pre><code>def recursive_listdir(path):
    files = os.listdir(path)
    for file in files:
        file_path = os.path.join(path, file)
    
        if os.path.isfile(file_path):
            print(file)
    
        elif os.path.isdir(file_path):
          recursive_listdir(file_path)
</code></pre><h1 id="读写json和jsonl" tabindex="-1">读写json和jsonl <a class="header-anchor" href="#读写json和jsonl" aria-label="Permalink to &quot;读写json和jsonl&quot;">​</a></h1><p>json和jsonl另种文件的区别：</p><ul><li>json与jsonl的区别在于jsonl没有list只有并行的dict之间用&quot;\\n&quot;分割，可以一次处理一条记录。可以用作日志文件或者其他。</li><li>json和jsonl导入的包不一样</li></ul><p><strong>json</strong></p><p>Python处理json文本文件主要是以下四个函数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">json.dumps	对数据进行编码,将python中的字典 转换为 字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">json.loads	对数据进行解码,将 字符串 转换为 python中的字典</span></span>
<span class="line"><span style="color:#e1e4e8;">json.dump	将dict数据写入json文件中</span></span>
<span class="line"><span style="color:#e1e4e8;">json.load	打开json文件，并把字符串转换为python的dict数据</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">json.dumps	对数据进行编码,将python中的字典 转换为 字符串</span></span>
<span class="line"><span style="color:#24292e;">json.loads	对数据进行解码,将 字符串 转换为 python中的字典</span></span>
<span class="line"><span style="color:#24292e;">json.dump	将dict数据写入json文件中</span></span>
<span class="line"><span style="color:#24292e;">json.load	打开json文件，并把字符串转换为python的dict数据</span></span></code></pre></div><p>读</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import json</span></span>
<span class="line"><span style="color:#e1e4e8;">with open(&#39;./xx.json&#39;, &#39;r&#39;, encoding=&#39;utf-8&#39;) as f:</span></span>
<span class="line"><span style="color:#e1e4e8;">    json_data = json.load(f)</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 如果是列表[]，则遍历列表</span></span>
<span class="line"><span style="color:#e1e4e8;">    for row in json_data:</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 如果是k,v, 则遍历k,v</span></span>
<span class="line"><span style="color:#e1e4e8;">        for k, v in row.items():</span></span>
<span class="line"><span style="color:#e1e4e8;">            print(k, v)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import json</span></span>
<span class="line"><span style="color:#24292e;">with open(&#39;./xx.json&#39;, &#39;r&#39;, encoding=&#39;utf-8&#39;) as f:</span></span>
<span class="line"><span style="color:#24292e;">    json_data = json.load(f)</span></span>
<span class="line"><span style="color:#24292e;">    # 如果是列表[]，则遍历列表</span></span>
<span class="line"><span style="color:#24292e;">    for row in json_data:</span></span>
<span class="line"><span style="color:#24292e;">        # 如果是k,v, 则遍历k,v</span></span>
<span class="line"><span style="color:#24292e;">        for k, v in row.items():</span></span>
<span class="line"><span style="color:#24292e;">            print(k, v)</span></span></code></pre></div><p>写</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">dict1 = {&#39;name&#39;: &#39;张三&#39;, &#39;age&#39;: 18, &#39;sex&#39;: &#39;男&#39;}</span></span>
<span class="line"><span style="color:#e1e4e8;">with open(&#39;./info.json&#39;,&#39;a&#39;,encoding=&#39;utf8&#39;) as fp:</span></span>
<span class="line"><span style="color:#e1e4e8;">	# ensure_ascii=False 因为默认ASCII编码，如果有中文就会乱码</span></span>
<span class="line"><span style="color:#e1e4e8;">	# indent=4 自动缩进是4</span></span>
<span class="line"><span style="color:#e1e4e8;">    json.dump(dict1, fp, ensure_ascii=False, indent=4)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 如果不带 ensure_ascii=False</span></span>
<span class="line"><span style="color:#e1e4e8;"># &#39;{&quot;name&quot;: &quot;\\\\u5f20\\\\u4e09&quot;}&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">dict1 = {&#39;name&#39;: &#39;张三&#39;, &#39;age&#39;: 18, &#39;sex&#39;: &#39;男&#39;}</span></span>
<span class="line"><span style="color:#24292e;">with open(&#39;./info.json&#39;,&#39;a&#39;,encoding=&#39;utf8&#39;) as fp:</span></span>
<span class="line"><span style="color:#24292e;">	# ensure_ascii=False 因为默认ASCII编码，如果有中文就会乱码</span></span>
<span class="line"><span style="color:#24292e;">	# indent=4 自动缩进是4</span></span>
<span class="line"><span style="color:#24292e;">    json.dump(dict1, fp, ensure_ascii=False, indent=4)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 如果不带 ensure_ascii=False</span></span>
<span class="line"><span style="color:#24292e;"># &#39;{&quot;name&quot;: &quot;\\\\u5f20\\\\u4e09&quot;}&#39;</span></span></code></pre></div><p><strong>jsonl</strong></p><p>读</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import jsonlines</span></span>
<span class="line"><span style="color:#e1e4e8;">with open(&quot;xxxx.jl&quot;, &quot;r+&quot;, encoding=&quot;utf8&quot;) as f:</span></span>
<span class="line"><span style="color:#e1e4e8;">    for item in jsonlines.Reader(f):</span></span>
<span class="line"><span style="color:#e1e4e8;">        print(item)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import jsonlines</span></span>
<span class="line"><span style="color:#24292e;">with open(&quot;xxxx.jl&quot;, &quot;r+&quot;, encoding=&quot;utf8&quot;) as f:</span></span>
<span class="line"><span style="color:#24292e;">    for item in jsonlines.Reader(f):</span></span>
<span class="line"><span style="color:#24292e;">        print(item)</span></span></code></pre></div><p>写</p><pre><code>import jsonline
with jsonlines.open(&#39;../output.jsonl&#39;, mode=&#39;a&#39;) as writer:
    writer.write(dict)
</code></pre><h1 id="assert" tabindex="-1">assert <a class="header-anchor" href="#assert" aria-label="Permalink to &quot;assert&quot;">​</a></h1><p>如果True，就继续执行程序；如果False，则输出后面语句</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">assert a &gt; 0, &quot;a超出范围&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">assert a &gt; 0, &quot;a超出范围&quot;</span></span></code></pre></div>`,37),o=[l];function t(c,i,r,y,d,u){return n(),a("div",null,o)}const g=s(p,[["render",t]]);export{f as __pageData,g as default};
