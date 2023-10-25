import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.2516552c.js";const p="/assets/v2-5a97698192b2b03b89300699c4a75c25_1440w.878b6725.webp",l="/assets/v2-2ce4cce5d27b036cdd645d081698c26e_1440w.520cf966.webp",t="/assets/v2-ad290ed2657b75d6def229a429038616_r.1eb9cf16.jpg",o="/assets/v2-7a99800b5bd593ad128f9f0780a1a8a0_1440w.ccd35454.webp",b=JSON.parse('{"title":"参考","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/23LangChain/01LangChain入门.md","filePath":"articles/算法/23LangChain/01LangChain入门.md","lastUpdated":null}'),c={name:"articles/算法/23LangChain/01LangChain入门.md"},i=e(`<h1 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h1><p>入门代码示例，这篇文章非常好：</p><p>[LangChain快速入门级示例(chatglm+text2vec建立本地知识库) - 知乎 (zhihu.com)]</p><p><a href="https://zhuanlan.zhihu.com/p/630200571" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/630200571</a></p><p>一些列教程：概念+代码理解</p><p>[从零开始学LangChain（1）：介绍和入门 - 知乎 (zhihu.com)]</p><p><a href="https://zhuanlan.zhihu.com/p/627600539" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/627600539</a></p><p>LangChain和知识图谱、数据库的结合：</p><p><a href="https://blog.csdn.net/v_JULY_v/article/details/131552592" target="_blank" rel="noreferrer">https://blog.csdn.net/v_JULY_v/article/details/131552592</a></p><h1 id="langchain是什么" tabindex="-1">LangChain是什么？ <a class="header-anchor" href="#langchain是什么" aria-label="Permalink to &quot;LangChain是什么？&quot;">​</a></h1><p>LangChain创建于2022年10月，是围绕LLMs（大语言模型）建立的一个框架，LLMs使用机器学习算法和海量数据来分析和理解自然语言，GPT3.5、GPT4是LLMs最先进的代表，国内百度的文心一言、阿里的通义千问也属于LLMs。LangChain自身并不开发LLMs，它的核心理念是为各种LLMs实现通用的接口，把LLMs相关的组件“链接”在一起，简化LLMs应用的开发难度，方便开发者快速地开发复杂的LLMs应用。LangChain目前有两个语言的实现：python和nodejs。</p><p>接下来我们从两个方面全面的了解LangChain，一是LangChain组件的基础概念，二是LangChain常见的使用场景。</p><p>一个LangChain应用是通过很多个组件实现的，LangChain主要支持6种组件：</p><ul><li>Models：模型，各种类型的模型和模型集成，比如GPT-4</li><li>Prompts：提示，包括提示管理、提示优化和提示序列化</li><li>Memory：记忆，用来保存和模型交互时的上下文状态</li><li>Indexes：索引，用来结构化文档，以便和模型交互</li><li>Chains：链，一系列对各种组件的调用</li><li>Agents：代理，决定模型采取哪些行动，执行并且观察流程，直到完成为止</li></ul><p>使用场景：</p><ul><li>个人助手</li><li>基于文档的问答系统</li><li>聊天机器人</li><li>Tabular数据查询</li><li>API交互</li><li>信息提取</li><li>文档总结</li></ul><p>安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install langchain</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install langchain</span></span></code></pre></div><h1 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h1><h2 id="_1-模型models" tabindex="-1">1 模型Models <a class="header-anchor" href="#_1-模型models" aria-label="Permalink to &quot;1 模型Models&quot;">​</a></h2><p>LangChain支持的模型可以分为三类，它们的使用场景不同，输入和输出不同，开发者需要根据项目需要选择相应的类型。</p><h3 id="llms" tabindex="-1">LLMs <a class="header-anchor" href="#llms" aria-label="Permalink to &quot;LLMs&quot;">​</a></h3><p>langchain支持许多LLMs，如OpenAI</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from langchain.llms import OpenAI</span></span>
<span class="line"><span style="color:#e1e4e8;">llm = OpenAI(model_name=&quot;text-davinci-003&quot;, n=2, temperature=0.3)</span></span>
<span class="line"><span style="color:#e1e4e8;">llm(&quot;你好&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from langchain.llms import OpenAI</span></span>
<span class="line"><span style="color:#24292e;">llm = OpenAI(model_name=&quot;text-davinci-003&quot;, n=2, temperature=0.3)</span></span>
<span class="line"><span style="color:#24292e;">llm(&quot;你好&quot;)</span></span></code></pre></div><p>但是，我们一般用本地LLM，如ChatGLM2-6B</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from transformers import AutoTokenizer, AutoModel</span></span>
<span class="line"><span style="color:#e1e4e8;">class chatGLM():</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __init__(self, model_name) -&gt; None:</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.tokenizer = AutoTokenizer.from_pretrained(model_name, trust_remote_code=True)</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.model = AutoModel.from_pretrained(model_name, trust_remote_code=True).half().cuda().eval()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    def __call__(self, prompt) -&gt; Any:</span></span>
<span class="line"><span style="color:#e1e4e8;">        response, _ = self.model.chat(self.tokenizer , prompt) # 这里演示未使用流式接口. stream_chat()</span></span>
<span class="line"><span style="color:#e1e4e8;">        return response</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">llm =  chatGLM(model_name=&quot;THUDM/chatglm-6b&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">response = llm(&quot;你好&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from transformers import AutoTokenizer, AutoModel</span></span>
<span class="line"><span style="color:#24292e;">class chatGLM():</span></span>
<span class="line"><span style="color:#24292e;">    def __init__(self, model_name) -&gt; None:</span></span>
<span class="line"><span style="color:#24292e;">        self.tokenizer = AutoTokenizer.from_pretrained(model_name, trust_remote_code=True)</span></span>
<span class="line"><span style="color:#24292e;">        self.model = AutoModel.from_pretrained(model_name, trust_remote_code=True).half().cuda().eval()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    def __call__(self, prompt) -&gt; Any:</span></span>
<span class="line"><span style="color:#24292e;">        response, _ = self.model.chat(self.tokenizer , prompt) # 这里演示未使用流式接口. stream_chat()</span></span>
<span class="line"><span style="color:#24292e;">        return response</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">llm =  chatGLM(model_name=&quot;THUDM/chatglm-6b&quot;)</span></span>
<span class="line"><span style="color:#24292e;">response = llm(&quot;你好&quot;)</span></span></code></pre></div><h3 id="聊天模型" tabindex="-1">聊天模型 <a class="header-anchor" href="#聊天模型" aria-label="Permalink to &quot;聊天模型&quot;">​</a></h3><p>聊天模型基于LLMs，不同的是LLMs的输入输出是字符串，而聊天模型的输入输出是聊天消息。</p><p>聊天消息包含下面几种类型，使用时需要按照约定传入合适的值：</p><ul><li><strong>AIMessage</strong>：用来保存LLM的响应，以便在下次请求时把这些信息传回给LLM。</li><li><strong>HumanMessage</strong>：发送给LLMs的提示信息，比如“请写一个快速排序方法”</li><li><strong>SystemMessage</strong>：设置LLM模型的行为方式和目标。你可以在这里给出具体的指示，比如“作为一个代码专家”，或者“返回json格式”。</li><li><strong>ChatMessage</strong>：可以接收任意形式的值，但是在大多数时间，我们应该使用上面的三种类型</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from langchain.chat_models import ChatOpenAI</span></span>
<span class="line"><span style="color:#e1e4e8;">from langchain.schema import AIMessage, HumanMessage, SystemMessage</span></span>
<span class="line"><span style="color:#e1e4e8;">messages = [</span></span>
<span class="line"><span style="color:#e1e4e8;">        SystemMessage(content=&quot;返回json object，不要说明和解释信息&quot;),</span></span>
<span class="line"><span style="color:#e1e4e8;">        HumanMessage(content=&quot;告诉我model Y汽车的尺寸参数&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span>
<span class="line"><span style="color:#e1e4e8;">chat = ChatOpenAI(temperature=0)</span></span>
<span class="line"><span style="color:#e1e4e8;">chat(messages)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from langchain.chat_models import ChatOpenAI</span></span>
<span class="line"><span style="color:#24292e;">from langchain.schema import AIMessage, HumanMessage, SystemMessage</span></span>
<span class="line"><span style="color:#24292e;">messages = [</span></span>
<span class="line"><span style="color:#24292e;">        SystemMessage(content=&quot;返回json object，不要说明和解释信息&quot;),</span></span>
<span class="line"><span style="color:#24292e;">        HumanMessage(content=&quot;告诉我model Y汽车的尺寸参数&quot;)</span></span>
<span class="line"><span style="color:#24292e;">]</span></span>
<span class="line"><span style="color:#24292e;">chat = ChatOpenAI(temperature=0)</span></span>
<span class="line"><span style="color:#24292e;">chat(messages)</span></span></code></pre></div><h3 id="文本嵌入模型-text-embedding-model" tabindex="-1">文本嵌入模型（Text Embedding Model） <a class="header-anchor" href="#文本嵌入模型-text-embedding-model" aria-label="Permalink to &quot;文本嵌入模型（Text Embedding Model）&quot;">​</a></h3><p>文本嵌入模型可以为文本创建向量映射，这样就能在向量空间里去考虑文本，执行诸如语义搜索之类的操作，比如说寻找相似的文本片段。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from langchain.embeddings import OpenAIEmbeddings</span></span>
<span class="line"><span style="color:#e1e4e8;">embeddings = OpenAIEmbeddings()</span></span>
<span class="line"><span style="color:#e1e4e8;">query_result = embeddings.embed_query(&quot;你好&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">doc_result = embeddings.embed_documents([&quot;你好&quot;])</span></span>
<span class="line"><span style="color:#e1e4e8;"># [-0.009422866627573967, 0.004315766040235758, 0.00238...]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from langchain.embeddings import OpenAIEmbeddings</span></span>
<span class="line"><span style="color:#24292e;">embeddings = OpenAIEmbeddings()</span></span>
<span class="line"><span style="color:#24292e;">query_result = embeddings.embed_query(&quot;你好&quot;)</span></span>
<span class="line"><span style="color:#24292e;">doc_result = embeddings.embed_documents([&quot;你好&quot;])</span></span>
<span class="line"><span style="color:#24292e;"># [-0.009422866627573967, 0.004315766040235758, 0.00238...]</span></span></code></pre></div><p>在这段代码中我们使用了<code>embed_query</code>和<code>embed_documents</code>两个方法，它们最大的不同是embed_query接收一个字符串作为输入，而embed_documents可以接收一组字符串，一些模型自身划分了这两个方法，LangChain也保留了下来。</p><h2 id="_2-提示prompts" tabindex="-1">2 提示Prompts <a class="header-anchor" href="#_2-提示prompts" aria-label="Permalink to &quot;2 提示Prompts&quot;">​</a></h2><p>提示模板：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from langchain import PromptTemplate</span></span>
<span class="line"><span style="color:#e1e4e8;">template = &quot;我的邻居姓{lastname}，他生了个儿子，给他儿子起个名字&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">prompt = PromptTemplate(input_variables=[&quot;lastname&quot;], template=template)</span></span>
<span class="line"><span style="color:#e1e4e8;">prompt_text = prompt.format(lastname=&quot;王&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(prompt_text)</span></span>
<span class="line"><span style="color:#e1e4e8;"># # 我的邻居姓王，他生了个儿子，给他儿子起个名字</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from langchain import PromptTemplate</span></span>
<span class="line"><span style="color:#24292e;">template = &quot;我的邻居姓{lastname}，他生了个儿子，给他儿子起个名字&quot;</span></span>
<span class="line"><span style="color:#24292e;">prompt = PromptTemplate(input_variables=[&quot;lastname&quot;], template=template)</span></span>
<span class="line"><span style="color:#24292e;">prompt_text = prompt.format(lastname=&quot;王&quot;)</span></span>
<span class="line"><span style="color:#24292e;">print(prompt_text)</span></span>
<span class="line"><span style="color:#24292e;"># # 我的邻居姓王，他生了个儿子，给他儿子起个名字</span></span></code></pre></div><p>Few-Shot prompt：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from langchain import PromptTemplate, FewShotPromptTemplate</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">example_template = &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">单词: {word}</span></span>
<span class="line"><span style="color:#e1e4e8;">反义词: {antonym}\\\\n</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">example_prompt = PromptTemplate(input_variables=[&quot;word&quot;, &quot;antonym&quot;], template=example_template)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">examples = [</span></span>
<span class="line"><span style="color:#e1e4e8;">    {&quot;word&quot;: &quot;开心&quot;, &quot;antonym&quot;: &quot;难过&quot;},</span></span>
<span class="line"><span style="color:#e1e4e8;">    {&quot;word&quot;: &quot;高&quot;, &quot;antonym&quot;: &quot;矮&quot;},</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">few_shot_prompt = FewShotPromptTemplate(</span></span>
<span class="line"><span style="color:#e1e4e8;">    example_prompt=example_prompt,</span></span>
<span class="line"><span style="color:#e1e4e8;">    examples=examples,</span></span>
<span class="line"><span style="color:#e1e4e8;">    prefix=&quot;给出每个单词的反义词&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    suffix=&quot;单词: {input}\\\\n反义词:&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    input_variables=[&quot;input&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">    example_separator=&quot;\\\\n&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">prompt_text = few_shot_prompt.format(input=&quot;粗&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(prompt_text)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 给出每个单词的反义词</span></span>
<span class="line"><span style="color:#e1e4e8;"># 单词: 开心</span></span>
<span class="line"><span style="color:#e1e4e8;"># 反义词: 难过</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 单词: 高</span></span>
<span class="line"><span style="color:#e1e4e8;"># 反义词: 矮</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 单词: 粗</span></span>
<span class="line"><span style="color:#e1e4e8;"># 反义词:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from langchain import PromptTemplate, FewShotPromptTemplate</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">example_template = &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">单词: {word}</span></span>
<span class="line"><span style="color:#24292e;">反义词: {antonym}\\\\n</span></span>
<span class="line"><span style="color:#24292e;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">example_prompt = PromptTemplate(input_variables=[&quot;word&quot;, &quot;antonym&quot;], template=example_template)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">examples = [</span></span>
<span class="line"><span style="color:#24292e;">    {&quot;word&quot;: &quot;开心&quot;, &quot;antonym&quot;: &quot;难过&quot;},</span></span>
<span class="line"><span style="color:#24292e;">    {&quot;word&quot;: &quot;高&quot;, &quot;antonym&quot;: &quot;矮&quot;},</span></span>
<span class="line"><span style="color:#24292e;">]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">few_shot_prompt = FewShotPromptTemplate(</span></span>
<span class="line"><span style="color:#24292e;">    example_prompt=example_prompt,</span></span>
<span class="line"><span style="color:#24292e;">    examples=examples,</span></span>
<span class="line"><span style="color:#24292e;">    prefix=&quot;给出每个单词的反义词&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    suffix=&quot;单词: {input}\\\\n反义词:&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    input_variables=[&quot;input&quot;],</span></span>
<span class="line"><span style="color:#24292e;">    example_separator=&quot;\\\\n&quot;,</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">prompt_text = few_shot_prompt.format(input=&quot;粗&quot;)</span></span>
<span class="line"><span style="color:#24292e;">print(prompt_text)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 给出每个单词的反义词</span></span>
<span class="line"><span style="color:#24292e;"># 单词: 开心</span></span>
<span class="line"><span style="color:#24292e;"># 反义词: 难过</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 单词: 高</span></span>
<span class="line"><span style="color:#24292e;"># 反义词: 矮</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 单词: 粗</span></span>
<span class="line"><span style="color:#24292e;"># 反义词:</span></span></code></pre></div><h2 id="_3-链chains" tabindex="-1">3 链Chains <a class="header-anchor" href="#_3-链chains" aria-label="Permalink to &quot;3 链Chains&quot;">​</a></h2><p>Chains就是将Models和其他组件组合起来。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from langchain import PromptTemplate</span></span>
<span class="line"><span style="color:#e1e4e8;">from langchain.llms import OpenAI</span></span>
<span class="line"><span style="color:#e1e4e8;">from langchain.chains import LLMChain</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">template = &quot;我的邻居姓{lastname}，他生了个儿子，给他儿子起个名字&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">prompt = PromptTemplate(</span></span>
<span class="line"><span style="color:#e1e4e8;">    input_variables=[&quot;lastname&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">    template=template,</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;">llm = OpenAI(temperature=0.9)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">chain = LLMChain(llm=llm, prompt=prompt)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 执行链</span></span>
<span class="line"><span style="color:#e1e4e8;">print(chain.run(&quot;王&quot;))</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># # 可以叫王子，也可以叫小王或者小王子等等。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from langchain import PromptTemplate</span></span>
<span class="line"><span style="color:#24292e;">from langchain.llms import OpenAI</span></span>
<span class="line"><span style="color:#24292e;">from langchain.chains import LLMChain</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">template = &quot;我的邻居姓{lastname}，他生了个儿子，给他儿子起个名字&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">prompt = PromptTemplate(</span></span>
<span class="line"><span style="color:#24292e;">    input_variables=[&quot;lastname&quot;],</span></span>
<span class="line"><span style="color:#24292e;">    template=template,</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;">llm = OpenAI(temperature=0.9)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">chain = LLMChain(llm=llm, prompt=prompt)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 执行链</span></span>
<span class="line"><span style="color:#24292e;">print(chain.run(&quot;王&quot;))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># # 可以叫王子，也可以叫小王或者小王子等等。</span></span></code></pre></div><p>如果我们想把第一个模型的输出，作为第二个模型的输入，可以使用LangChain的<code>SimpleSequentialChain</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from langchain import PromptTemplate</span></span>
<span class="line"><span style="color:#e1e4e8;">from langchain.llms import OpenAI</span></span>
<span class="line"><span style="color:#e1e4e8;">from langchain.chains import LLMChain, SimpleSequentialChain</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">template = &quot;我的邻居姓{lastname}，他生了个儿子，给他儿子起个名字&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">prompt = PromptTemplate(</span></span>
<span class="line"><span style="color:#e1e4e8;">    input_variables=[&quot;lastname&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">    template=template,</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;">llm = OpenAI(temperature=0.9)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">chain = LLMChain(llm = llm, </span></span>
<span class="line"><span style="color:#e1e4e8;">                  prompt = prompt)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 创建第二条链</span></span>
<span class="line"><span style="color:#e1e4e8;">second_prompt = PromptTemplate(</span></span>
<span class="line"><span style="color:#e1e4e8;">    input_variables=[&quot;child_name&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">    template=&quot;邻居的儿子名字叫{child_name}，给他起一个小名&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">chain_two = LLMChain(llm=llm, prompt=second_prompt)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 链接两条链 </span></span>
<span class="line"><span style="color:#e1e4e8;">overall_chain = SimpleSequentialChain(chains=[chain, chain_two], verbose=True)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 执行链，只需要传入第一个参数</span></span>
<span class="line"><span style="color:#e1e4e8;">catchphrase = overall_chain.run(&quot;王&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from langchain import PromptTemplate</span></span>
<span class="line"><span style="color:#24292e;">from langchain.llms import OpenAI</span></span>
<span class="line"><span style="color:#24292e;">from langchain.chains import LLMChain, SimpleSequentialChain</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">template = &quot;我的邻居姓{lastname}，他生了个儿子，给他儿子起个名字&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">prompt = PromptTemplate(</span></span>
<span class="line"><span style="color:#24292e;">    input_variables=[&quot;lastname&quot;],</span></span>
<span class="line"><span style="color:#24292e;">    template=template,</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;">llm = OpenAI(temperature=0.9)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">chain = LLMChain(llm = llm, </span></span>
<span class="line"><span style="color:#24292e;">                  prompt = prompt)</span></span>
<span class="line"><span style="color:#24292e;"># 创建第二条链</span></span>
<span class="line"><span style="color:#24292e;">second_prompt = PromptTemplate(</span></span>
<span class="line"><span style="color:#24292e;">    input_variables=[&quot;child_name&quot;],</span></span>
<span class="line"><span style="color:#24292e;">    template=&quot;邻居的儿子名字叫{child_name}，给他起一个小名&quot;,</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">chain_two = LLMChain(llm=llm, prompt=second_prompt)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 链接两条链 </span></span>
<span class="line"><span style="color:#24292e;">overall_chain = SimpleSequentialChain(chains=[chain, chain_two], verbose=True)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 执行链，只需要传入第一个参数</span></span>
<span class="line"><span style="color:#24292e;">catchphrase = overall_chain.run(&quot;王&quot;)</span></span></code></pre></div><p>Chatglm对象不符合LLMChain类llm对象要求，模仿一下</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class DemoChain():</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __init__(self, llm, prompt) -&gt; None:</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.llm = llm</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.prompt = prompt</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    def run(self, query) -&gt; Any:</span></span>
<span class="line"><span style="color:#e1e4e8;">        prompt = self.prompt.format(concept=query)</span></span>
<span class="line"><span style="color:#e1e4e8;">        print(&quot;query=%s  -&gt;prompt=%s&quot;%(query, prompt))</span></span>
<span class="line"><span style="color:#e1e4e8;">        response = self.llm(prompt) </span></span>
<span class="line"><span style="color:#e1e4e8;">        return response</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">chain = DemoChain(llm=llm, prompt=promptTem)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(chain.run(query=&quot;天道酬勤&quot;))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class DemoChain():</span></span>
<span class="line"><span style="color:#24292e;">    def __init__(self, llm, prompt) -&gt; None:</span></span>
<span class="line"><span style="color:#24292e;">        self.llm = llm</span></span>
<span class="line"><span style="color:#24292e;">        self.prompt = prompt</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    def run(self, query) -&gt; Any:</span></span>
<span class="line"><span style="color:#24292e;">        prompt = self.prompt.format(concept=query)</span></span>
<span class="line"><span style="color:#24292e;">        print(&quot;query=%s  -&gt;prompt=%s&quot;%(query, prompt))</span></span>
<span class="line"><span style="color:#24292e;">        response = self.llm(prompt) </span></span>
<span class="line"><span style="color:#24292e;">        return response</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">chain = DemoChain(llm=llm, prompt=promptTem)</span></span>
<span class="line"><span style="color:#24292e;">print(chain.run(query=&quot;天道酬勤&quot;))</span></span></code></pre></div><h2 id="_4-代理agents" tabindex="-1">4 代理Agents <a class="header-anchor" href="#_4-代理agents" aria-label="Permalink to &quot;4 代理Agents&quot;">​</a></h2><p>尽管大语言模型非常强大，它们也有一些局限性，它们不能回答实时信息，它们没有上下文的概念，导致无法保存状态，它们处理数学逻辑问题仍然非常初级，我们只能借助于第三方的工具来完成这些需求，比如使用搜索引擎或者数据库，LangChain中代理的作用就是根据用户需求，来去访问这些工具。</p><p>我们先明确几个概念：</p><p>1、代理</p><ul><li>负责控制整段代码的逻辑和执行，代理暴露了一个接口，用来接收用户输入，并返回AgentAction或AgentFinish。</li><li>AgentAction决定使用哪个工具</li><li>AgentFinish意味着代理的工作完成了，返回给用户结果</li></ul><p>2、工具</p><ul><li>第三方服务的集成，比如谷歌、bing等等，后面有详细列表</li></ul><p>3、工具包</p><ul><li>一些集成好了代理包，比如<code>create_csv_agent</code> 可以使用模型解读csv文件</li></ul><p>4、代理执行器</p><ul><li>负责迭代运行代理的循环，直到满足停止的标准。</li></ul><p>明确了这些概念，我们看个使用代理的例子，假如我们在北京，想让大语言模型告诉我们明天穿什么衣服，由于大语言模型不知道明天的天气，我们借助于<code>serpapi</code> 来查询天气，并传递给模型，代码如下：（使用serpapi需要申请token和设置环境变量，略）</p><div class="language-python3 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python3</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from langchain.agents import load_tools</span></span>
<span class="line"><span style="color:#e1e4e8;">from langchain.agents import initialize_agent</span></span>
<span class="line"><span style="color:#e1e4e8;">from langchain.agents import AgentType</span></span>
<span class="line"><span style="color:#e1e4e8;">from langchain.llms import OpenAI</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">llm = OpenAI(temperature=0)</span></span>
<span class="line"><span style="color:#e1e4e8;">tools = load_tools([&quot;serpapi&quot;], llm=llm)</span></span>
<span class="line"><span style="color:#e1e4e8;">agent = initialize_agent(tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">agent.run(&quot;明天在北京穿什么衣服合适?&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from langchain.agents import load_tools</span></span>
<span class="line"><span style="color:#24292e;">from langchain.agents import initialize_agent</span></span>
<span class="line"><span style="color:#24292e;">from langchain.agents import AgentType</span></span>
<span class="line"><span style="color:#24292e;">from langchain.llms import OpenAI</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">llm = OpenAI(temperature=0)</span></span>
<span class="line"><span style="color:#24292e;">tools = load_tools([&quot;serpapi&quot;], llm=llm)</span></span>
<span class="line"><span style="color:#24292e;">agent = initialize_agent(tools, llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION, verbose=True)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">agent.run(&quot;明天在北京穿什么衣服合适?&quot;)</span></span></code></pre></div><h2 id="_5-记忆memory" tabindex="-1">5 记忆Memory <a class="header-anchor" href="#_5-记忆memory" aria-label="Permalink to &quot;5 记忆Memory&quot;">​</a></h2><p>大语言模型是无状态的，它并不保存上次交互的内容，chatGPT能够和人正常对话，因为它做了一层包装，把历史记录传回给了模型。</p><p>为了解决这个问题，LangChain提供了记忆组件。记忆有两种类型：短期和长期记忆。短期记忆一般指单一会话时传递数据，长期记忆则是处理多个会话时获取和更新信息。</p><p>短期记忆用<code>ChatMessageHistory</code> ：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from langchain.memory import ChatMessageHistory</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">history = ChatMessageHistory()</span></span>
<span class="line"><span style="color:#e1e4e8;">history.add_user_message(&quot;在吗？&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">history.add_ai_message(&quot;有什么事?&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">print(history.messages)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from langchain.memory import ChatMessageHistory</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">history = ChatMessageHistory()</span></span>
<span class="line"><span style="color:#24292e;">history.add_user_message(&quot;在吗？&quot;)</span></span>
<span class="line"><span style="color:#24292e;">history.add_ai_message(&quot;有什么事?&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">print(history.messages)</span></span></code></pre></div><p>长期记忆使用<code>messages_to_dict</code> 方法：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from langchain.memory import ChatMessageHistory</span></span>
<span class="line"><span style="color:#e1e4e8;">from langchain.schema import messages_from_dict, messages_to_dict</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">history = ChatMessageHistory()</span></span>
<span class="line"><span style="color:#e1e4e8;">history.add_user_message(&quot;hi!&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">history.add_ai_message(&quot;whats up?&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">dicts = messages_to_dict(history.messages)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(dicts)</span></span>
<span class="line"><span style="color:#e1e4e8;"># # [{&#39;type&#39;: &#39;human&#39;, &#39;data&#39;: {&#39;content&#39;: &#39;hi!&#39;, &#39;additional_kwargs&#39;: {}}},</span></span>
<span class="line"><span style="color:#e1e4e8;"># # {&#39;type&#39;: &#39;ai&#39;, &#39;data&#39;: {&#39;content&#39;: &#39;whats up?&#39;, &#39;additional_kwargs&#39;: {}}}]</span></span>
<span class="line"><span style="color:#e1e4e8;"># 读取历史消息</span></span>
<span class="line"><span style="color:#e1e4e8;">new_messages = messages_from_dict(dicts)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(new_messages)</span></span>
<span class="line"><span style="color:#e1e4e8;"># # [HumanMessage(content=&#39;hi!&#39;, additional_kwargs={}),</span></span>
<span class="line"><span style="color:#e1e4e8;"># # AIMessage(content=&#39;whats up?&#39;, additional_kwargs={})]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from langchain.memory import ChatMessageHistory</span></span>
<span class="line"><span style="color:#24292e;">from langchain.schema import messages_from_dict, messages_to_dict</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">history = ChatMessageHistory()</span></span>
<span class="line"><span style="color:#24292e;">history.add_user_message(&quot;hi!&quot;)</span></span>
<span class="line"><span style="color:#24292e;">history.add_ai_message(&quot;whats up?&quot;)</span></span>
<span class="line"><span style="color:#24292e;">dicts = messages_to_dict(history.messages)</span></span>
<span class="line"><span style="color:#24292e;">print(dicts)</span></span>
<span class="line"><span style="color:#24292e;"># # [{&#39;type&#39;: &#39;human&#39;, &#39;data&#39;: {&#39;content&#39;: &#39;hi!&#39;, &#39;additional_kwargs&#39;: {}}},</span></span>
<span class="line"><span style="color:#24292e;"># # {&#39;type&#39;: &#39;ai&#39;, &#39;data&#39;: {&#39;content&#39;: &#39;whats up?&#39;, &#39;additional_kwargs&#39;: {}}}]</span></span>
<span class="line"><span style="color:#24292e;"># 读取历史消息</span></span>
<span class="line"><span style="color:#24292e;">new_messages = messages_from_dict(dicts)</span></span>
<span class="line"><span style="color:#24292e;">print(new_messages)</span></span>
<span class="line"><span style="color:#24292e;"># # [HumanMessage(content=&#39;hi!&#39;, additional_kwargs={}),</span></span>
<span class="line"><span style="color:#24292e;"># # AIMessage(content=&#39;whats up?&#39;, additional_kwargs={})]</span></span></code></pre></div><h2 id="_6-索引indexes" tabindex="-1">6 索引Indexes <a class="header-anchor" href="#_6-索引indexes" aria-label="Permalink to &quot;6 索引Indexes&quot;">​</a></h2><p>索引组件为LangChain提供了文档处理的能力，包括文档加载、检索等等，这里的文档是广义的文档，不仅仅是txt、epub、pdf等文本类的内容，还包括email、区块链、telegram、Notion甚至是视频内容。</p><p>索引组件主要有以下四种类型：</p><ul><li>文档加载器</li><li>文本分割器</li><li>VectorStores</li><li>检索器</li></ul><h3 id="文档加载器" tabindex="-1">文档加载器 <a class="header-anchor" href="#文档加载器" aria-label="Permalink to &quot;文档加载器&quot;">​</a></h3><p>文档加载器主要基于<code>Unstructured</code> 包，<code>Unstructured</code> 是一个python包，可以把各种类型的文件转换成文本。文档加载器使用起来很简单，只需要引入相应的loader工具：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from langchain.document_loaders import TextLoader</span></span>
<span class="line"><span style="color:#e1e4e8;">loader = TextLoader(&#39;../state_of_the_union.txt&#39;, encoding=&#39;utf8&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">documents = loader.load()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from langchain.document_loaders import TextLoader</span></span>
<span class="line"><span style="color:#24292e;">loader = TextLoader(&#39;../state_of_the_union.txt&#39;, encoding=&#39;utf8&#39;)</span></span>
<span class="line"><span style="color:#24292e;">documents = loader.load()</span></span></code></pre></div><h3 id="文本分割器" tabindex="-1">文本分割器 <a class="header-anchor" href="#文本分割器" aria-label="Permalink to &quot;文本分割器&quot;">​</a></h3><p>由于模型对输入的字符长度有限制，我们在碰到很长的文本时，需要把文本分割成多个小的文本片段。</p><p>文本分割最简单的方式是按照字符长度进行分割，但是这会带来很多问题，比如说如果文本是一段代码，一个函数被分割到两段之后就成了没有意义的字符，所以整体的原则是把语义相关的文本片段放在一起。</p><p>LangChain中最基本的文本分割器是<code>CharacterTextSplitter</code> ，它按照指定的分隔符（默认“\\n\\n”）进行分割，并且考虑文本片段的最大长度。我们看个例子：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from langchain.text_splitter import CharacterTextSplitter</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 初始字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">state_of_the_union = &quot;...&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">text_splitter = CharacterTextSplitter(        </span></span>
<span class="line"><span style="color:#e1e4e8;">    separator = &quot;\\\\n\\\\n&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    chunk_size = 1000,</span></span>
<span class="line"><span style="color:#e1e4e8;">    chunk_overlap  = 200,</span></span>
<span class="line"><span style="color:#e1e4e8;">    length_function = len,</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">texts = text_splitter.create_documents([state_of_the_union])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from langchain.text_splitter import CharacterTextSplitter</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 初始字符串</span></span>
<span class="line"><span style="color:#24292e;">state_of_the_union = &quot;...&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">text_splitter = CharacterTextSplitter(        </span></span>
<span class="line"><span style="color:#24292e;">    separator = &quot;\\\\n\\\\n&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    chunk_size = 1000,</span></span>
<span class="line"><span style="color:#24292e;">    chunk_overlap  = 200,</span></span>
<span class="line"><span style="color:#24292e;">    length_function = len,</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">texts = text_splitter.create_documents([state_of_the_union])</span></span></code></pre></div><h3 id="向量存储库" tabindex="-1">向量存储库 <a class="header-anchor" href="#向量存储库" aria-label="Permalink to &quot;向量存储库&quot;">​</a></h3><p>VectorStores是一种特殊类型的数据库，它的作用是存储由嵌入创建的向量，提供相似查询等功能。</p><p><code>DeepLake</code> 和<code>Chroma</code> 都属于VectorStores，VectorStores的作用就是保存和检索向量，它们之间的区别也很明显，<code>DeepLake</code> 使用云服务器保存数据，而<code>Chroma</code> 则是完全的本地服务。</p><p><code>Chroma</code> 开源、轻量、性能良好，使用起来也很简单，只需使用pip安装chromadb即可。</p><p>我们使用其中一个<code>Chroma</code> 组件作为例子。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from langchain.embeddings.openai import OpenAIEmbeddings</span></span>
<span class="line"><span style="color:#e1e4e8;">from langchain.text_splitter import CharacterTextSplitter</span></span>
<span class="line"><span style="color:#e1e4e8;">from langchain.vectorstores import Chroma</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># pku.txt内容：&lt;https://www.pku.edu.cn/about.html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">with open(&#39;./pku.txt&#39;) as f:</span></span>
<span class="line"><span style="color:#e1e4e8;">    state_of_the_union = f.read()</span></span>
<span class="line"><span style="color:#e1e4e8;">text_splitter = CharacterTextSplitter(chunk_size=100, chunk_overlap=0)</span></span>
<span class="line"><span style="color:#e1e4e8;">texts = text_splitter.split_text(state_of_the_union)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">embeddings = OpenAIEmbeddings()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">docsearch = Chroma.from_texts(texts, embeddings)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">query = &quot;1937年北京大学发生了什么？&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">docs = docsearch.similarity_search(query)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(docs)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from langchain.embeddings.openai import OpenAIEmbeddings</span></span>
<span class="line"><span style="color:#24292e;">from langchain.text_splitter import CharacterTextSplitter</span></span>
<span class="line"><span style="color:#24292e;">from langchain.vectorstores import Chroma</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># pku.txt内容：&lt;https://www.pku.edu.cn/about.html&gt;</span></span>
<span class="line"><span style="color:#24292e;">with open(&#39;./pku.txt&#39;) as f:</span></span>
<span class="line"><span style="color:#24292e;">    state_of_the_union = f.read()</span></span>
<span class="line"><span style="color:#24292e;">text_splitter = CharacterTextSplitter(chunk_size=100, chunk_overlap=0)</span></span>
<span class="line"><span style="color:#24292e;">texts = text_splitter.split_text(state_of_the_union)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">embeddings = OpenAIEmbeddings()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">docsearch = Chroma.from_texts(texts, embeddings)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">query = &quot;1937年北京大学发生了什么？&quot;</span></span>
<span class="line"><span style="color:#24292e;">docs = docsearch.similarity_search(query)</span></span>
<span class="line"><span style="color:#24292e;">print(docs)</span></span></code></pre></div><h3 id="检索器" tabindex="-1">检索器 <a class="header-anchor" href="#检索器" aria-label="Permalink to &quot;检索器&quot;">​</a></h3><p>检索器是一种便于模型查询的存储数据的方式，LangChain约定检索器组件至少有一个方法<code>get_relevant_texts</code>，这个方法接收查询字符串，返回一组文档。</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from langchain.document_loaders import TextLoader</span></span>
<span class="line"><span style="color:#e1e4e8;">from langchain.text_splitter import CharacterTextSplitter</span></span>
<span class="line"><span style="color:#e1e4e8;">from langchain.vectorstores import FAISS</span></span>
<span class="line"><span style="color:#e1e4e8;">from langchain.embeddings import OpenAIEmbeddings</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">loader = TextLoader(&#39;../../../state_of_the_union.txt&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">documents = loader.load()</span></span>
<span class="line"><span style="color:#e1e4e8;">text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)</span></span>
<span class="line"><span style="color:#e1e4e8;">texts = text_splitter.split_documents(documents)</span></span>
<span class="line"><span style="color:#e1e4e8;">embeddings = OpenAIEmbeddings()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">db = FAISS.from_documents(texts, embeddings)</span></span>
<span class="line"><span style="color:#e1e4e8;">retriever = db.as_retriever()</span></span>
<span class="line"><span style="color:#e1e4e8;">docs = retriever.get_relevant_documents(&quot;what did he say about ketanji brown jackson&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from langchain.document_loaders import TextLoader</span></span>
<span class="line"><span style="color:#24292e;">from langchain.text_splitter import CharacterTextSplitter</span></span>
<span class="line"><span style="color:#24292e;">from langchain.vectorstores import FAISS</span></span>
<span class="line"><span style="color:#24292e;">from langchain.embeddings import OpenAIEmbeddings</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">loader = TextLoader(&#39;../../../state_of_the_union.txt&#39;)</span></span>
<span class="line"><span style="color:#24292e;">documents = loader.load()</span></span>
<span class="line"><span style="color:#24292e;">text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)</span></span>
<span class="line"><span style="color:#24292e;">texts = text_splitter.split_documents(documents)</span></span>
<span class="line"><span style="color:#24292e;">embeddings = OpenAIEmbeddings()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">db = FAISS.from_documents(texts, embeddings)</span></span>
<span class="line"><span style="color:#24292e;">retriever = db.as_retriever()</span></span>
<span class="line"><span style="color:#24292e;">docs = retriever.get_relevant_documents(&quot;what did he say about ketanji brown jackson&quot;)</span></span></code></pre></div><h2 id="_7-代理和链的区别" tabindex="-1">7 代理和链的区别 <a class="header-anchor" href="#_7-代理和链的区别" aria-label="Permalink to &quot;7 代理和链的区别&quot;">​</a></h2><p>代理组件和链组件的作用类似，它们都是用来调度业务流程，确定采取哪些行动以及按照何种顺序。不同的是链的执行流程是确定的，而代理则依赖于大语言模型来决定流程走向，比如我们之前写的询问北京明天应该穿什么衣服的例子。代理控制的行动，可以是任何支持输入输出的工具，比如搜索引擎、数据库，也可以是一个模型、一个链，甚至是另外一个代理。</p><p>我们通过数据流向看它们的区别：</p><p>简单应用：</p><p><img src="`+p+'" alt="img"></p><p>链应用：</p><p><img src="'+l+'" alt="img"></p><p>代理应用：</p><p><img src="'+t+'" alt="img"></p><h1 id="十分钟做一个产品客服" tabindex="-1">十分钟做一个产品客服 <a class="header-anchor" href="#十分钟做一个产品客服" aria-label="Permalink to &quot;十分钟做一个产品客服&quot;">​</a></h1><h2 id="流程图" tabindex="-1">流程图 <a class="header-anchor" href="#流程图" aria-label="Permalink to &quot;流程图&quot;">​</a></h2><p>在这个过程中，LangChain应用接收两个<strong>输入</strong>，一个是自定义知识库，一个是用户输入。自定义知识库经过<strong>分割</strong>、<strong>嵌入</strong>之后存储到向量存储库，向量存储库支持语义检索，根据用户输入从长文档里<strong>检索</strong>出文本片段，提示模板将文本片段和用户输入合并成<strong>提示</strong>，传递给大语言模型，大语言模型<strong>推理</strong>出结果，经过<strong>解析</strong>后，<strong>输出</strong>最终结果。</p><p><img src="'+o+`" alt="img"></p><p>用到的所有组件如下：</p><table><thead><tr><th>组件</th><th>类型</th><th>子类型</th></tr></thead><tbody><tr><td>TextLoader</td><td>索引组件</td><td>文本加载器</td></tr><tr><td>CharacterTextSplitter</td><td>索引组件</td><td>文本分割器</td></tr><tr><td>ConversationalRetrievalChain</td><td>链组件</td><td>对话链</td></tr><tr><td>ChatOpenAI</td><td>模型组件</td><td>LLM</td></tr><tr><td>OpenAIEmbeddings</td><td>模型组件</td><td>文本嵌入模型</td></tr><tr><td>Chroma</td><td>索引组件</td><td>向量存储库</td></tr></tbody></table><h2 id="安装环境" tabindex="-1">安装环境 <a class="header-anchor" href="#安装环境" aria-label="Permalink to &quot;安装环境&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">!pip install langchain</span></span>
<span class="line"><span style="color:#e1e4e8;">!pip install openai</span></span>
<span class="line"><span style="color:#e1e4e8;">!pip install chromadb</span></span>
<span class="line"><span style="color:#e1e4e8;">!pip install tiktoken</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">!pip install langchain</span></span>
<span class="line"><span style="color:#24292e;">!pip install openai</span></span>
<span class="line"><span style="color:#24292e;">!pip install chromadb</span></span>
<span class="line"><span style="color:#24292e;">!pip install tiktoken</span></span></code></pre></div><p>代码，略。</p>`,106),r=[i];function d(m,h,y,u,g,_){return a(),n("div",null,r)}const f=s(c,[["render",d]]);export{b as __pageData,f as default};
