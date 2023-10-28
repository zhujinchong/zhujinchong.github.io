import{_ as e,o as a,c as t,Q as r}from"./chunks/framework.2516552c.js";const P=JSON.parse('{"title":"几个重要的Agent","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Agent/介绍/index.md","filePath":"articles/Agent/介绍/index.md","lastUpdated":null}'),n={name:"articles/Agent/介绍/index.md"},o=r('<p>参考资料：</p><p><a href="https://www.hangyan.co/reports/3178415128668276031" target="_blank" rel="noreferrer">计算机行业深度报告：AI Agent：基于大模型的自主智能体，在探索AGI的道路上前进 - 行业研究报告 - 小牛行研 (hangyan.co)</a></p><p><a href="https://new.qq.com/rain/a/20230917A03I4H00" target="_blank" rel="noreferrer">复旦NLP团队发布80页大模型Agent综述，一文纵览AI智能体的现状与未来_腾讯新闻 (qq.com)</a></p><p><a href="https://zhuanlan.zhihu.com/p/656676717" target="_blank" rel="noreferrer">《综述：全新大语言模型驱动的Agent》——4.5万字详细解读复旦NLP和米哈游最新Agent Survey - 知乎 (zhihu.com)</a></p><p><a href="https://zhuanlan.zhihu.com/p/661790669" target="_blank" rel="noreferrer">整理了52篇大模型Agent最新论文，覆盖构建、应用、评估三个方面 - 知乎 (zhihu.com)</a></p><p><a href="https://zhuanlan.zhihu.com/p/628591165" target="_blank" rel="noreferrer">介绍最具代表性的17个Agent AI 产品 - 知乎 (zhihu.com)</a></p><h1 id="几个重要的agent" tabindex="-1">几个重要的Agent <a class="header-anchor" href="#几个重要的agent" aria-label="Permalink to &quot;几个重要的Agent&quot;">​</a></h1><h2 id="autogpt" tabindex="-1">AutoGPT <a class="header-anchor" href="#autogpt" aria-label="Permalink to &quot;AutoGPT&quot;">​</a></h2><p>时间：2023.03</p><p>2023年3月，开发人员Significant Ggravitas在GitHub上发布了开源项目AutoGPT，它以GPT-4为驱动基础，允许AI自主行动，完全无需用户提示每个操作。给AutoGPT提出目标，它就能够自主去分解任务、执行操作、完成任务。作为GPT-4完全自主运行的最早示例之一，AutoGPT迅速走红于AI界，并带动了整个AIAgent领域的研究与发展，它也成为了GitHub排行榜4月增长趋势第一名。截至2023年8月15日，AutoGPT在GitHub上已经得到了超过14.7万颗star。</p><p>基于GPT-4的强大能力和AutoGPT带来的Agent热潮，开发者们很快便基于AutoGPT实现了很多有趣的应用案例，例如自动实现代码debug、自主根据财经网站信息进行投资挣钱、自主完成复杂网站建设、进行科技产品研究并生成报告等。</p><p>AutoGPT采用的是GPT-3.5和GPT-4的API，成本高；</p><p>正常使用中经常出现需要拆分出几十上百个step的任务，响应慢；</p><p>遇到GPT-4无法解决的step问题时，就会陷入死循环中。</p><h2 id="agentgpt" tabindex="-1">AgentGPT <a class="header-anchor" href="#agentgpt" aria-label="Permalink to &quot;AgentGPT&quot;">​</a></h2><p>AutoGPT的网页版本——AgentGPT，仅需给定大模型的API即可实现网页端的AIAgent。</p><h2 id="jarvis-hugginggpt" tabindex="-1"><strong>JARVIS</strong> / HuggingGPT <a class="header-anchor" href="#jarvis-hugginggpt" aria-label="Permalink to &quot;**JARVIS** / HuggingGPT&quot;">​</a></h2><p>将模型社区HuggingFace和ChatGPT连接在一起，形成了一个AIAgent。2023年4月，浙江大学和微软联合团队发布了HuggingGPT，它可以连接不同的AI模型，以解决用户提出的任务。HuggingGPT融合了HuggingFace中成百上千的模型和GPT，可以解决24种任务，包括文本分类、对象检测、语义分割、图像生成、问答、文本语音转换和文本视频转换。具体步骤分为四步：1)任务规划：使用ChatGPT来获取用户请求；2)模型选择：根据HuggingFace中的函数描述选择模型，并用选中的模型执行AI任务；3)任务执行：使用第2步选择的模型执行的任务，总结成回答返回给ChatGPT；4)回答生成：使用ChatGPT融合所有模型的推理，生成回答返回给用户</p><h2 id="babyagi" tabindex="-1">BabyAGI <a class="header-anchor" href="#babyagi" aria-label="Permalink to &quot;BabyAGI&quot;">​</a></h2><p>基于人工智能的任务管理系统。该系统使用OpenAI和Pinecone API来创建、优先排序和执行任务。该系统的主要思想是根据先前任务的结果和预定义的目标创建任务。</p><h1 id="其他agent" tabindex="-1">其他Agent <a class="header-anchor" href="#其他agent" aria-label="Permalink to &quot;其他Agent&quot;">​</a></h1><h2 id="qwen-agent" tabindex="-1">Qwen Agent <a class="header-anchor" href="#qwen-agent" aria-label="Permalink to &quot;Qwen Agent&quot;">​</a></h2><ul><li>与 Qwen 讨论当前网页或 PDF 文档。</li><li>快速理解多个web页面的内容，总结浏览内容，消除繁琐的写作任务。</li><li>支持插件集成，包括用于数学问题解决和数据可视化的代码解释器。</li><li>支持的文件包括（pdf和csv文件），基于csv文件可以做智能图表的问答。</li></ul><h2 id="lagent" tabindex="-1">Lagent <a class="header-anchor" href="#lagent" aria-label="Permalink to &quot;Lagent&quot;">​</a></h2><ul><li><strong>支持高性能推理.</strong> 我们现在支持了高性能推理 <a href="https://github.com/InternLM/lmdeploy/tree/main" target="_blank" rel="noreferrer">lmdeploy turbomind</a>.</li><li><strong>实现了多种类型的智能体，</strong> 我们支持了经典的 <a href="https://arxiv.org/abs/2210.03629" target="_blank" rel="noreferrer">ReAct</a>，<a href="https://github.com/Significant-Gravitas/Auto-GPT" target="_blank" rel="noreferrer">AutoGPT</a> 和 <a href="https://arxiv.org/abs/2305.18323" target="_blank" rel="noreferrer">ReWoo</a> 等智能体，这些智能体能够调用大语言模型进行多轮的推理和工具调用。</li><li><strong>框架简单易拓展.</strong> 框架的代码结构清晰且简单，只需要不到20行代码你就能够创造出一个你自己的智能体（agent）。同时我们支持了 Python 解释器、API 调用和搜索三类常用典型工具。</li><li><strong>灵活支持多个大语言模型.</strong> 我们提供了多种大语言模型支持，包括 InternLM、Llama-2 等开源模型和 GPT-4/3.5 等基于 API 的闭源模型。</li></ul>',25),i=[o];function g(l,h,s,p,u,A){return a(),t("div",null,i)}const d=e(n,[["render",g]]);export{P as __pageData,d as default};
