import{_ as a,o as e,c as n,Q as s}from"./chunks/framework.2516552c.js";const p="/assets/image-20240123085004828.f22a278b.png",l="/assets/image-20240123085044186.dfdb123e.png",i="/assets/image-20240123090825542.b72836fd.png",o="/assets/image-20240123091839854.97eb6f64.png",t="/assets/pasted image 0.151cd65c.png",r="/assets/image-12-1705973510180.22107c23.png",c="/assets/image-20240123115313483.13b10928.png",h="/assets/image-20240123115550733.2e6ca787.png",d="/assets/image-20240123115859956.2e290b20.png",x=JSON.parse('{"title":"RAG流程","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Algorithm/23RAG/102提升RAG性能综述.md","filePath":"articles/Algorithm/23RAG/102提升RAG性能综述.md","lastUpdated":null}'),u={name:"articles/Algorithm/23RAG/102提升RAG性能综述.md"},g=s('<p><img src="'+p+'" alt="image-20240123085004828"></p><h1 id="rag流程" tabindex="-1">RAG流程 <a class="header-anchor" href="#rag流程" aria-label="Permalink to &quot;RAG流程&quot;">​</a></h1><p><img src="'+l+'" alt="image-20240123085044186"></p><h1 id="提升-清洗数据" tabindex="-1">提升-清洗数据 <a class="header-anchor" href="#提升-清洗数据" aria-label="Permalink to &quot;提升-清洗数据&quot;">​</a></h1><p>文档清洗：</p><ul><li>不冗余、不重复</li><li>主题集中、文件按逻辑分开。</li></ul><p>分档分割：</p><p>1、选择分块策略：长度分块、标题分块；</p><p>2、分块大小，扩充大小，检索数量：chunk_size，chunk_overlap，top_k。</p><h1 id="提升-检索" tabindex="-1">提升-检索 <a class="header-anchor" href="#提升-检索" aria-label="Permalink to &quot;提升-检索&quot;">​</a></h1><h2 id="检索方法" tabindex="-1">检索方法 <a class="header-anchor" href="#检索方法" aria-label="Permalink to &quot;检索方法&quot;">​</a></h2><blockquote><p><a href="https://aws.amazon.com/cn/blogs/china/practice-of-knowledge-question-answering-application-based-on-llm-knowledge-base-construction-part-1/" target="_blank" rel="noreferrer">基于大语言模型知识问答应用落地实践 – 知识库构建（上） | 亚马逊AWS官方博客 (amazon.com)</a></p><p><a href="https://zhuanlan.zhihu.com/p/654012116" target="_blank" rel="noreferrer">基于知识图谱的大模型检索增强实现策略：Graph RAG实现基本原理及优化思路 - 知乎 (zhihu.com)</a></p></blockquote><p>总结：</p><ul><li><p>语义召回：也就是倒排索引，首先通过切词器对文本进行切词，得到 Term 列表，然后根据 BM25 打分公式进行打分排序。</p></li><li><p>向量召回：也就是词向量嵌入，用Embedding模型将文本嵌入成向量，然后根据问题向量和文档向量的相似度（余弦相似度，欧氏距离）打分排序。</p></li><li><p>知识图谱召回：这种方式在图谱规模很大时其实是有提升空间。</p></li></ul><h2 id="资料1-rag-fusion" tabindex="-1">资料1：RAG-Fusion <a class="header-anchor" href="#资料1-rag-fusion" aria-label="Permalink to &quot;资料1：RAG-Fusion&quot;">​</a></h2><p><strong>工作流程：</strong></p><p>1、查询问题做相关性复制：通过LLM将用户的查询转换为相似但不同的查询；</p><p>2、并发检索：对原始查询及其新生成的同级查询执行并发的向量搜索。</p><p>3、智能重排：聚合和细化所有结果使用倒数排序融合(RRF)。</p><p><strong>流程图：</strong></p><p><img src="'+i+'" alt="image-20240123090825542"></p><p><strong>倒排数据融合(Reciprocal Rank Fusion)：</strong></p><p>是一种排序方法：整合多个排序信息，来产生一个更全面的、更准确的排序列表。计算公式如下：</p><p><img src="'+o+`" alt="image-20240123091839854"></p><p>举例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">排名列表1的排名和倒数：</span></span>
<span class="line"><span style="color:#e1e4e8;">项目A：1/1 = 1</span></span>
<span class="line"><span style="color:#e1e4e8;">项目B：1/2 = 0.5</span></span>
<span class="line"><span style="color:#e1e4e8;">项目C：1/3 ≈ 0.33</span></span>
<span class="line"><span style="color:#e1e4e8;">排名列表2的排名和倒数：</span></span>
<span class="line"><span style="color:#e1e4e8;">项目B：1/1 = 1</span></span>
<span class="line"><span style="color:#e1e4e8;">项目A：1/2 = 0.5</span></span>
<span class="line"><span style="color:#e1e4e8;">项目C：1/3 ≈ 0.33</span></span>
<span class="line"><span style="color:#e1e4e8;">然后，可以选择给排名列表不同的权重，例如，排名列表1的权重为0.7，排名列表2的权重为0.3。</span></span>
<span class="line"><span style="color:#e1e4e8;">计算加权倒数排名：</span></span>
<span class="line"><span style="color:#e1e4e8;">项目A：(0.7 * 1) + (0.3 * 0.5) ≈ 0.85</span></span>
<span class="line"><span style="color:#e1e4e8;">项目B：(0.7 * 0.5) + (0.3 * 1) ≈ 0.65</span></span>
<span class="line"><span style="color:#e1e4e8;">项目C：(0.7 * 0.33) + (0.3 * 0.33) ≈ 0.33</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">排名列表1的排名和倒数：</span></span>
<span class="line"><span style="color:#24292e;">项目A：1/1 = 1</span></span>
<span class="line"><span style="color:#24292e;">项目B：1/2 = 0.5</span></span>
<span class="line"><span style="color:#24292e;">项目C：1/3 ≈ 0.33</span></span>
<span class="line"><span style="color:#24292e;">排名列表2的排名和倒数：</span></span>
<span class="line"><span style="color:#24292e;">项目B：1/1 = 1</span></span>
<span class="line"><span style="color:#24292e;">项目A：1/2 = 0.5</span></span>
<span class="line"><span style="color:#24292e;">项目C：1/3 ≈ 0.33</span></span>
<span class="line"><span style="color:#24292e;">然后，可以选择给排名列表不同的权重，例如，排名列表1的权重为0.7，排名列表2的权重为0.3。</span></span>
<span class="line"><span style="color:#24292e;">计算加权倒数排名：</span></span>
<span class="line"><span style="color:#24292e;">项目A：(0.7 * 1) + (0.3 * 0.5) ≈ 0.85</span></span>
<span class="line"><span style="color:#24292e;">项目B：(0.7 * 0.5) + (0.3 * 1) ≈ 0.65</span></span>
<span class="line"><span style="color:#24292e;">项目C：(0.7 * 0.33) + (0.3 * 0.33) ≈ 0.33</span></span></code></pre></div><h2 id="资料2-openai-s-rag" tabindex="-1">资料2：OpenAI&#39;s RAG <a class="header-anchor" href="#资料2-openai-s-rag" aria-label="Permalink to &quot;资料2：OpenAI&#39;s RAG&quot;">​</a></h2><blockquote><p><a href="https://blog.langchain.dev/applying-openai-rag/" target="_blank" rel="noreferrer">https://blog.langchain.dev/applying-openai-rag/</a></p></blockquote><p>Open AI 为与他们合作的客户报告了一系列 RAG 实验。</p><p>45%：余弦相似度检索；</p><p>65%：HyDE检索，微调Embedding，Chunk分块；（打x表示最后没有应用）</p><p>85%：Reranking重拍，问题问题；</p><p>98%：提示词工程，工具使用（这里指路由），问题扩展。</p><p><img src="`+t+'" alt="img"></p><p>我们可以将这些方法分为几个 RAG 类别。下面的图表显示了其类别中的每个 RAG 实验并将它们放置在 RAG 堆栈中：</p><p><img src="'+r+'" alt="img"></p><h3 id="query-transformations" tabindex="-1">Query Transformations <a class="header-anchor" href="#query-transformations" aria-label="Permalink to &quot;Query Transformations&quot;">​</a></h3><p>1、Query expansion:针对给定的用户输入查询从不同角度生成多个查询。</p><p>2、HyDE(Hypothetical Document Embeddings，假设文档嵌入) : 为查询生成假设性文档，对它们进行嵌入，并在检索中使用它们。这个想法是，这些模拟文档可能与期望的源文档的相似度比问题本身更高。但是OpenAI最终并没有用。</p><h3 id="routing" tabindex="-1">Routing <a class="header-anchor" href="#routing" aria-label="Permalink to &quot;Routing&quot;">​</a></h3><p>OpenAI 演示报告称，他们需要在两个矢量存储和单个 SQL 数据库之间路由问题。</p><h3 id="query-construction" tabindex="-1">Query Construction <a class="header-anchor" href="#query-construction" aria-label="Permalink to &quot;Query Construction&quot;">​</a></h3><p>查询构造，即text2sql</p><h3 id="building-index" tabindex="-1">Building Index <a class="header-anchor" href="#building-index" aria-label="Permalink to &quot;Building Index&quot;">​</a></h3><p>1、OpenAI 报告称，仅通过在文档嵌入期间试验块大小、嵌入模型即可显着提高性能。因为这是索引构建的核心步骤。</p><p>2、embedding fine-tuning：虽然他们没有报告嵌入微调对性能的显着提升，但已经报告了良好的结果。虽然 OpenAI 指出这可能不建议作为“容易实现的目标”</p><h3 id="post-processing" tabindex="-1">Post-Processing <a class="header-anchor" href="#post-processing" aria-label="Permalink to &quot;Post-Processing&quot;">​</a></h3><p>OpenAI的两个方法：</p><p>1、Re-rank: 应用交叉编码器cross-encoder对结果重排。</p><p>2、Classification: OpenAI 根据内容对每个检索到的文档进行分类，然后根据分类选择不同的提示+相关资料。</p><p>其他方法：</p><p>1、MMR：为了平衡相关性和多样性，许多矢量商店提供最大边缘相关性搜索</p><p>2、聚类：一些方法使用了带有采样的嵌入文档的聚类，这在我们整合广泛来源的文档的情况下可能会有所帮助。</p><h2 id="资料3-three-indexing-methods" tabindex="-1">资料3：Three Indexing Methods <a class="header-anchor" href="#资料3-three-indexing-methods" aria-label="Permalink to &quot;资料3：Three Indexing Methods&quot;">​</a></h2><blockquote><p><a href="https://levelup.gitconnected.com/improve-rag-pipelines-with-these-3-indexing-methods-83317e972676" target="_blank" rel="noreferrer">Improve RAG Pipelines With These 3 Indexing Methods | by Ahmed Besbes | Level Up Coding (gitconnected.com)</a></p></blockquote><h3 id="按子部分索引" tabindex="-1">按子部分索引 <a class="header-anchor" href="#按子部分索引" aria-label="Permalink to &quot;按子部分索引&quot;">​</a></h3><p>chunk再拆分：</p><p>不直接对整个chunk做索引，而是将每个chunk再拆分成句子（更小的文本块）。对sentences做检索，返回chunk数据。</p><p><img src="'+c+'" alt="image-20240123115313483"></p><h3 id="文本块的假设性问题" tabindex="-1">文本块的假设性问题 <a class="header-anchor" href="#文本块的假设性问题" aria-label="Permalink to &quot;文本块的假设性问题&quot;">​</a></h3><p>让LLM生成文本块相关的假设性问题，将问题作为索引。</p><p><img src="'+h+'" alt="image-20240123115550733"></p><h3 id="文本块的摘要" tabindex="-1">文本块的摘要 <a class="header-anchor" href="#文本块的摘要" aria-label="Permalink to &quot;文本块的摘要&quot;">​</a></h3><p>和上面方法类似。使用文本块的摘要创建索引。</p><p><img src="'+d+'" alt="image-20240123115859956"></p><h2 id="资料4-llamaindex中的5种检索" tabindex="-1">资料4：LlamaIndex中的5种检索 <a class="header-anchor" href="#资料4-llamaindex中的5种检索" aria-label="Permalink to &quot;资料4：LlamaIndex中的5种检索&quot;">​</a></h2><p>1、Hybrid Fusion Retriever</p><p>混合融合检索：生成多个查询；向量+关键词检索；用Reciprocal Rank Fusion重排。</p><p>2、Query Rewriting Retriever</p><p>重写查询检索：生成多个查询；向量检索；用Reciprocal Rank Fusion重排。</p><p>3、Auto Merging Retriever</p><p>自动合并检索：对文档建立分层节点图（父节点+子节点），检索子节点，然后查看是否检索到足够多的叶子节点，如果超过阈值，则合并叶子节点成父节点。</p><p>4、Small-to-big Retrieval</p><p>从小块到大块检索：大chunk块再分割成小chunk块，检索小chunk块返回大chunk块。</p><p>5、Sentence Window Retrieval</p><p>句子窗口检索：对句子检索，返回句子+句子两侧数据（上下文）。</p><h1 id="提升-llm" tabindex="-1">提升-LLM <a class="header-anchor" href="#提升-llm" aria-label="Permalink to &quot;提升-LLM&quot;">​</a></h1><p>1、更改问题表述</p><p>2、迭代提示</p><h1 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h1><p>目前项目还需要改进的地方：</p><p>Indexing：</p><ul><li>向量嵌入+语义嵌入</li><li>假设性 摘要+问题（这个先不做，做好chunk就好）</li></ul><p>Retrieval：</p><ul><li>查询扩展</li><li>重排：重排要用RRF算法。</li></ul>',85),m=[g];function b(_,k,q,f,y,A){return e(),n("div",null,m)}const P=a(u,[["render",b]]);export{x as __pageData,P as default};
