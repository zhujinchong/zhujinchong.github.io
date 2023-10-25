import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const _=JSON.parse('{"title":"方案1：复制大模型","description":"","frontmatter":{},"headers":[],"relativePath":"articles/blog/Huggingface教程/01指令.md","filePath":"articles/blog/Huggingface教程/01指令.md","lastUpdated":null}'),l={name:"articles/blog/Huggingface教程/01指令.md"},p=e(`<h1 id="方案1-复制大模型" tabindex="-1">方案1：复制大模型 <a class="header-anchor" href="#方案1-复制大模型" aria-label="Permalink to &quot;方案1：复制大模型&quot;">​</a></h1><p>1、构造提示词，生成问题。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#01 你是一个问答对数据集处理专家。</span></span>
<span class="line"><span style="color:#e1e4e8;">#02 你的任务是根据我给出的内容，生成适合作为问答对数据集的问题。</span></span>
<span class="line"><span style="color:#e1e4e8;">#03 问题要尽量短，不要太长。</span></span>
<span class="line"><span style="color:#e1e4e8;">#04 一句话中只能有一个问题。</span></span>
<span class="line"><span style="color:#e1e4e8;">#05 生成的问题必须宏观、价值，不要生成特别细节的问题。</span></span>
<span class="line"><span style="color:#e1e4e8;">#06 生成问题示例：</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">权益型基金的特点有哪些方面？</span></span>
<span class="line"><span style="color:#e1e4e8;">介绍一下卡兹克。</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">#07 以下是我给出的内容：</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">{{此处替换成你的内容}}</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;&quot;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#01 你是一个问答对数据集处理专家。</span></span>
<span class="line"><span style="color:#24292e;">#02 你的任务是根据我给出的内容，生成适合作为问答对数据集的问题。</span></span>
<span class="line"><span style="color:#24292e;">#03 问题要尽量短，不要太长。</span></span>
<span class="line"><span style="color:#24292e;">#04 一句话中只能有一个问题。</span></span>
<span class="line"><span style="color:#24292e;">#05 生成的问题必须宏观、价值，不要生成特别细节的问题。</span></span>
<span class="line"><span style="color:#24292e;">#06 生成问题示例：</span></span>
<span class="line"><span style="color:#24292e;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">权益型基金的特点有哪些方面？</span></span>
<span class="line"><span style="color:#24292e;">介绍一下卡兹克。</span></span>
<span class="line"><span style="color:#24292e;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">#07 以下是我给出的内容：</span></span>
<span class="line"><span style="color:#24292e;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">{{此处替换成你的内容}}</span></span>
<span class="line"><span style="color:#24292e;">&quot;&quot;&quot;</span></span></code></pre></div><p>2、构造提示词，生成答案</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#01 你是一个问答对数据集处理专家。</span></span>
<span class="line"><span style="color:#e1e4e8;">#02 你的任务是根据我的问题和我给出的内容，生成对应的问答对。</span></span>
<span class="line"><span style="color:#e1e4e8;">#03 答案要全面，多使用我的信息，内容要更丰富。</span></span>
<span class="line"><span style="color:#e1e4e8;">#04 你必须根据我的问答对示例格式来生成：</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;content&quot;: &quot;基金分类有哪些&quot;, &quot;summary&quot;: &quot;根据不同标准，可以将证券投资基金划分为不同的种类：（1）根据基金单位是否可增加或赎回，可分为开放式基金和封闭式基金。开放式基金不上市交易（这要看情况），通过银行、券商、基金公司申购和赎回，基金规模不固定；封闭式基金有固定的存续期，一般在证券交易场所上市交易，投资者通过二级市场买卖基金单位。（2）根据组织形态的不同，可分为公司型基金和契约型基金。基金通过发行基金股份成立投资基金公司的形式设立，通常称为公司型基金；由基金管理人、基金托管人和投资人三方通过基金契约设立，通常称为契约型基金。我国的证券投资基金均为契约型基金。（3）根据投资风险与收益的不同，可分为成长型、收入型和平衡型基金。（4）根据投资对象的不同，可分为股票基金、债券基金、货币基金和混合型基金四大类。&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;">{&quot;content&quot;: &quot;基金是什么&quot;, &quot;summary&quot;: &quot;基金，英文是fund，广义是指为了某种目的而设立的具有一定数量的资金。主要包括公积金、信托投资基金、保险基金、退休基金，各种基金会的基金。从会计角度透析，基金是一个狭义的概念，意指具有特定目的和用途的资金。我们提到的基金主要是指证券投资基金。&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;">#05 我的问题如下：</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">{{此处替换成你上一步生成的问题}}</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">#06 我的内容如下：</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">{{此处替换成你的内容}}</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;&quot;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#01 你是一个问答对数据集处理专家。</span></span>
<span class="line"><span style="color:#24292e;">#02 你的任务是根据我的问题和我给出的内容，生成对应的问答对。</span></span>
<span class="line"><span style="color:#24292e;">#03 答案要全面，多使用我的信息，内容要更丰富。</span></span>
<span class="line"><span style="color:#24292e;">#04 你必须根据我的问答对示例格式来生成：</span></span>
<span class="line"><span style="color:#24292e;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">{&quot;content&quot;: &quot;基金分类有哪些&quot;, &quot;summary&quot;: &quot;根据不同标准，可以将证券投资基金划分为不同的种类：（1）根据基金单位是否可增加或赎回，可分为开放式基金和封闭式基金。开放式基金不上市交易（这要看情况），通过银行、券商、基金公司申购和赎回，基金规模不固定；封闭式基金有固定的存续期，一般在证券交易场所上市交易，投资者通过二级市场买卖基金单位。（2）根据组织形态的不同，可分为公司型基金和契约型基金。基金通过发行基金股份成立投资基金公司的形式设立，通常称为公司型基金；由基金管理人、基金托管人和投资人三方通过基金契约设立，通常称为契约型基金。我国的证券投资基金均为契约型基金。（3）根据投资风险与收益的不同，可分为成长型、收入型和平衡型基金。（4）根据投资对象的不同，可分为股票基金、债券基金、货币基金和混合型基金四大类。&quot;}</span></span>
<span class="line"><span style="color:#24292e;">{&quot;content&quot;: &quot;基金是什么&quot;, &quot;summary&quot;: &quot;基金，英文是fund，广义是指为了某种目的而设立的具有一定数量的资金。主要包括公积金、信托投资基金、保险基金、退休基金，各种基金会的基金。从会计角度透析，基金是一个狭义的概念，意指具有特定目的和用途的资金。我们提到的基金主要是指证券投资基金。&quot;}</span></span>
<span class="line"><span style="color:#24292e;">#05 我的问题如下：</span></span>
<span class="line"><span style="color:#24292e;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">{{此处替换成你上一步生成的问题}}</span></span>
<span class="line"><span style="color:#24292e;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">#06 我的内容如下：</span></span>
<span class="line"><span style="color:#24292e;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">{{此处替换成你的内容}}</span></span>
<span class="line"><span style="color:#24292e;">&quot;&quot;&quot;</span></span></code></pre></div>`,5),o=[p];function t(c,u,i,r,q,y){return n(),a("div",null,o)}const g=s(l,[["render",t]]);export{_ as __pageData,g as default};
