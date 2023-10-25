import{_ as a,o as s,c as n,Q as p}from"./chunks/framework.2516552c.js";const b=JSON.parse('{"title":"1. 生成数组所需格式不同","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/01python语法&工具/02np.array()和np.mat()区别.md","filePath":"articles/算法/01python语法&工具/02np.array()和np.mat()区别.md","lastUpdated":null}'),e={name:"articles/算法/01python语法&工具/02np.array()和np.mat()区别.md"},l=p(`<p>参考 <a href="https://blog.csdn.net/Build_Tiger/article/details/79848808" target="_blank" rel="noreferrer">https://blog.csdn.net/Build_Tiger/article/details/79848808</a></p><h1 id="_1-生成数组所需格式不同" tabindex="-1">1. 生成数组所需格式不同 <a class="header-anchor" href="#_1-生成数组所需格式不同" aria-label="Permalink to &quot;1. 生成数组所需格式不同&quot;">​</a></h1><p>mat可以从字符串或列表中生成；</p><p>array只能从列表中生成</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">a = np.mat(&quot;1,2; 3,4&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">b = np.mat([[5, 6], [7, 8]])</span></span>
<span class="line"><span style="color:#e1e4e8;">print(a)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(b)</span></span>
<span class="line"><span style="color:#e1e4e8;">[[1 2]</span></span>
<span class="line"><span style="color:#e1e4e8;"> [3 4]]</span></span>
<span class="line"><span style="color:#e1e4e8;">[[5 6]</span></span>
<span class="line"><span style="color:#e1e4e8;"> [7 8]]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">a = np.mat(&quot;1,2; 3,4&quot;)</span></span>
<span class="line"><span style="color:#24292e;">b = np.mat([[5, 6], [7, 8]])</span></span>
<span class="line"><span style="color:#24292e;">print(a)</span></span>
<span class="line"><span style="color:#24292e;">print(b)</span></span>
<span class="line"><span style="color:#24292e;">[[1 2]</span></span>
<span class="line"><span style="color:#24292e;"> [3 4]]</span></span>
<span class="line"><span style="color:#24292e;">[[5 6]</span></span>
<span class="line"><span style="color:#24292e;"> [7 8]]</span></span></code></pre></div><h1 id="_2-生成的数组计算方式不同" tabindex="-1">2. 生成的数组计算方式不同 <a class="header-anchor" href="#_2-生成的数组计算方式不同" aria-label="Permalink to &quot;2. 生成的数组计算方式不同&quot;">​</a></h1><ol><li>array生成数组，用np.dot()表示矩阵乘积；（*）号或np.multiply()表示点乘</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">a = np.array([[1, 1], [1, 1]])</span></span>
<span class="line"><span style="color:#e1e4e8;">b = np.array([[2, 2], [2, 2]])</span></span>
<span class="line"><span style="color:#e1e4e8;">print(np.dot(a, b))</span></span>
<span class="line"><span style="color:#e1e4e8;">print(np.multiply(a, b))</span></span>
<span class="line"><span style="color:#e1e4e8;">print(a*b)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">a = np.array([[1, 1], [1, 1]])</span></span>
<span class="line"><span style="color:#24292e;">b = np.array([[2, 2], [2, 2]])</span></span>
<span class="line"><span style="color:#24292e;">print(np.dot(a, b))</span></span>
<span class="line"><span style="color:#24292e;">print(np.multiply(a, b))</span></span>
<span class="line"><span style="color:#24292e;">print(a*b)</span></span></code></pre></div><ol start="2"><li>mat生成数组，（*）和np.dot()相同，点乘只能用np.multiply()</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">a = np.mat([[1, 1], [1, 1]])</span></span>
<span class="line"><span style="color:#e1e4e8;">b = np.mat([[2, 2], [2, 2]])</span></span>
<span class="line"><span style="color:#e1e4e8;">print(np.dot(a, b))</span></span>
<span class="line"><span style="color:#e1e4e8;">print(np.multiply(a, b))</span></span>
<span class="line"><span style="color:#e1e4e8;">print(a*b)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">a = np.mat([[1, 1], [1, 1]])</span></span>
<span class="line"><span style="color:#24292e;">b = np.mat([[2, 2], [2, 2]])</span></span>
<span class="line"><span style="color:#24292e;">print(np.dot(a, b))</span></span>
<span class="line"><span style="color:#24292e;">print(np.multiply(a, b))</span></span>
<span class="line"><span style="color:#24292e;">print(a*b)</span></span></code></pre></div><p>end</p>`,11),t=[l];function o(c,r,i,d,y,_){return s(),n("div",null,t)}const u=a(e,[["render",o]]);export{b as __pageData,u as default};
