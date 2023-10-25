import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.2516552c.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/01python语法&工具/03python常用库.md","filePath":"articles/算法/01python语法&工具/03python常用库.md","lastUpdated":null}'),p={name:"articles/算法/01python语法&工具/03python常用库.md"},l=n(`<p>Counter：计数器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from collections import Counter</span></span>
<span class="line"><span style="color:#e1e4e8;">s = &#39;programming&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">c = Counter(s)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from collections import Counter</span></span>
<span class="line"><span style="color:#24292e;">s = &#39;programming&#39;</span></span>
<span class="line"><span style="color:#24292e;">c = Counter(s)</span></span></code></pre></div><p>defaultdict：计数器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from collections import defaultdict</span></span>
<span class="line"><span style="color:#e1e4e8;">dic = defaultdict(int)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(dic[&#39;a&#39;])		# 输出0，不会出错</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from collections import defaultdict</span></span>
<span class="line"><span style="color:#24292e;">dic = defaultdict(int)</span></span>
<span class="line"><span style="color:#24292e;">print(dic[&#39;a&#39;])		# 输出0，不会出错</span></span></code></pre></div><p>deque：双向列表，适合用于队列和栈</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from collections import deque</span></span>
<span class="line"><span style="color:#e1e4e8;">q = deque([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;])</span></span>
<span class="line"><span style="color:#e1e4e8;">q.append(&#39;x&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">q.appendleft(&#39;0&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">q.pop()</span></span>
<span class="line"><span style="color:#e1e4e8;">q.popleft()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from collections import deque</span></span>
<span class="line"><span style="color:#24292e;">q = deque([&#39;a&#39;, &#39;b&#39;, &#39;c&#39;])</span></span>
<span class="line"><span style="color:#24292e;">q.append(&#39;x&#39;)</span></span>
<span class="line"><span style="color:#24292e;">q.appendleft(&#39;0&#39;)</span></span>
<span class="line"><span style="color:#24292e;">q.pop()</span></span>
<span class="line"><span style="color:#24292e;">q.popleft()</span></span></code></pre></div><p>heapq：小根堆</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import heapq</span></span>
<span class="line"><span style="color:#e1e4e8;">a = [1, 2, 3, 5, 4]</span></span>
<span class="line"><span style="color:#e1e4e8;">heapq.nlargest(3, a)</span></span>
<span class="line"><span style="color:#e1e4e8;">heapq.heappush(a, 10)</span></span>
<span class="line"><span style="color:#e1e4e8;">heapq.heappop(a)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import heapq</span></span>
<span class="line"><span style="color:#24292e;">a = [1, 2, 3, 5, 4]</span></span>
<span class="line"><span style="color:#24292e;">heapq.nlargest(3, a)</span></span>
<span class="line"><span style="color:#24292e;">heapq.heappush(a, 10)</span></span>
<span class="line"><span style="color:#24292e;">heapq.heappop(a)</span></span></code></pre></div>`,8),o=[l];function t(c,i,r,d,h,y){return a(),e("div",null,o)}const m=s(p,[["render",t]]);export{g as __pageData,m as default};
