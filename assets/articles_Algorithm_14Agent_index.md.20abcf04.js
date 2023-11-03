import{_ as e,o as a,c as t,Q as n}from"./chunks/framework.2516552c.js";const d=JSON.parse('{"title":"引言","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Algorithm/14Agent/index.md","filePath":"articles/Algorithm/14Agent/index.md","lastUpdated":null}'),r={name:"articles/Algorithm/14Agent/index.md"},i=n('<h1 id="引言" tabindex="-1">引言 <a class="header-anchor" href="#引言" aria-label="Permalink to &quot;引言&quot;">​</a></h1><p>从今年 3 月 AutoGPT 推出后，Generative Agent、GPT-Engineer、BabyAGI 项目的爆发将 LLM 地叙事代入了新的阶段。Lillian 在自己的 Twitter 中也认为“This is probably just a new era”。</p><p>2023 年 6 月，OpenAI 的 Safety 团队负责人 Lilian Weng 发布了一篇 6000 字的博客介绍 AI Agent，并认为这将使 LLM 转为通用问题解决方案的途径之一。Lilian Weng 表示 AI Agent 主要由规划（Planning）、记忆（Memory）、工具使用（Tool Use）三个核心组件构成，其核心概念是使用 LLM 解决问题，让 LLM 学会使用工具，可以大扩展其能力。</p><p>1、规划（Planning）• 子目标和分解：AI Agents 能够将大型任务分解为较小的、可管理的子目标，以便高效的处理复杂任务；• 反思和细化：Agents 可以对过去的行为进行自我批评和反省，从错误中吸取经验教训，并为接下来的行动进行分析、总结和提炼，这种反思和细化可以帮助 Agents 提高自身的智能和适应性，从而提高最终结果的质量。</p><p>2、记忆 （Memory）• 短期记忆：所有上下文学习都是依赖模型的短期记忆能力进行的；• 长期记忆：这种设计使得 AI Agents 能够长期保存和调用无限信息的能力，一般通过外部载体存储和快速检索来实现。</p><p>3、工具使用（Tool use）• AI Agents 可以学习如何调用外部 API，以获取模型权重中缺少的额外信息，这些信息通常在预训练后很难更改，包括当前信息、代码执行能力、对专有信息源的访问等。</p><p>人大高瓴 AI 学院团队在 8 月发布综述论文《A Survey on Large Language Model based Autonomous Agents》，研究者基于以往研究总结了一项 Agent 设计架构，由分析模块、记忆模块、规划模块和动作模块组成。</p><p>① 分析模块：用于识别智能体是什么角色。在现有的工作中，有三种常用的策略来生成智能体配置文件：手工制作方法、LLM-generation 方法、数据集对齐方法。</p><p>② 记忆模块：用于记忆从环境中感知到的信息，并利用记录的记忆来促进智能体未来的动作。</p><p>③ 规划模块：用于将复杂任务分解为简单的子任务，然后由智能体逐一解决。论文介绍了两种规划模块：没有反馈的规划以及有反馈的规划。</p><p>④ 动作模块：用于将智能体的决策转化为具体的结果输出。它直接与环境交互，决定智能体完成任务的有效性。</p><p>复旦 FudanNLP 团队在 9 月发布综述论文《The Rise and Potential of Large Language ModelBased Agents: A Survey》，研究者所总结的 Agent 框架则是由控制端、感知端和行动端三部分组成。</p><p>① 控制端（Brain）：通常由 LLMs 构成，是智能代理的核心。它不仅可以存储记忆和知识，还承担着信息处理、决策等不可或缺的功能。它可以呈现推理和计划的过程，并很好地应对未知任务，反映出智能代理的泛化性和迁移性。</p><p>② 感知端（Perception）：将智能代理的感知空间从纯文本拓展到包括文本、视觉和听觉等多模态领域，使代理能够更有效地从周围环境中获取与利用信息。</p><p>③ 行动端（Action）：除了常规的文本输出，还赋予代理具身能力、使用工具的能力，使其能够更好地适应环境变化，通过反馈与环境交互，甚至能够塑造环境。</p><h1 id="几个重要的agent" tabindex="-1">几个重要的Agent <a class="header-anchor" href="#几个重要的agent" aria-label="Permalink to &quot;几个重要的Agent&quot;">​</a></h1><h2 id="autogpt" tabindex="-1">AutoGPT <a class="header-anchor" href="#autogpt" aria-label="Permalink to &quot;AutoGPT&quot;">​</a></h2><p>时间：2023.03</p><p>2023年3月，开发人员Significant Ggravitas在GitHub上发布了开源项目AutoGPT，它以GPT-4为驱动基础，允许AI自主行动，完全无需用户提示每个操作。给AutoGPT提出目标，它就能够自主去分解任务、执行操作、完成任务。作为GPT-4完全自主运行的最早示例之一，AutoGPT迅速走红于AI界，并带动了整个AIAgent领域的研究与发展，它也成为了GitHub排行榜4月增长趋势第一名。截至2023年8月15日，AutoGPT在GitHub上已经得到了超过14.7万颗star。</p><p>基于GPT-4的强大能力和AutoGPT带来的Agent热潮，开发者们很快便基于AutoGPT实现了很多有趣的应用案例，例如自动实现代码debug、自主根据财经网站信息进行投资挣钱、自主完成复杂网站建设、进行科技产品研究并生成报告等。</p><p>AutoGPT采用的是GPT-3.5和GPT-4的API，成本高；</p><p>正常使用中经常出现需要拆分出几十上百个step的任务，响应慢；</p><p>遇到GPT-4无法解决的step问题时，就会陷入死循环中。</p><h2 id="agentgpt" tabindex="-1">AgentGPT <a class="header-anchor" href="#agentgpt" aria-label="Permalink to &quot;AgentGPT&quot;">​</a></h2><p>AutoGPT的网页版本——AgentGPT，仅需给定大模型的API即可实现网页端的AIAgent。</p><h2 id="jarvis-hugginggpt" tabindex="-1"><strong>JARVIS</strong> / HuggingGPT <a class="header-anchor" href="#jarvis-hugginggpt" aria-label="Permalink to &quot;**JARVIS** / HuggingGPT&quot;">​</a></h2><p>将模型社区HuggingFace和ChatGPT连接在一起，形成了一个AIAgent。2023年4月，浙江大学和微软联合团队发布了HuggingGPT，它可以连接不同的AI模型，以解决用户提出的任务。HuggingGPT融合了HuggingFace中成百上千的模型和GPT，可以解决24种任务，包括文本分类、对象检测、语义分割、图像生成、问答、文本语音转换和文本视频转换。具体步骤分为四步：1)任务规划：使用ChatGPT来获取用户请求；2)模型选择：根据HuggingFace中的函数描述选择模型，并用选中的模型执行AI任务；3)任务执行：使用第2步选择的模型执行的任务，总结成回答返回给ChatGPT；4)回答生成：使用ChatGPT融合所有模型的推理，生成回答返回给用户</p><h2 id="babyagi" tabindex="-1">BabyAGI <a class="header-anchor" href="#babyagi" aria-label="Permalink to &quot;BabyAGI&quot;">​</a></h2><p>基于人工智能的任务管理系统。该系统使用OpenAI和Pinecone API来创建、优先排序和执行任务。该系统的主要思想是根据先前任务的结果和预定义的目标创建任务。</p><h1 id="其他agent" tabindex="-1">其他Agent <a class="header-anchor" href="#其他agent" aria-label="Permalink to &quot;其他Agent&quot;">​</a></h1><h2 id="qwen-agent" tabindex="-1">Qwen Agent <a class="header-anchor" href="#qwen-agent" aria-label="Permalink to &quot;Qwen Agent&quot;">​</a></h2><ul><li>与 Qwen 讨论当前网页或 PDF 文档。</li><li>快速理解多个web页面的内容，总结浏览内容，消除繁琐的写作任务。</li><li>支持插件集成，包括用于数学问题解决和数据可视化的代码解释器。</li><li>支持的文件包括（pdf和csv文件），基于csv文件可以做智能图表的问答。</li></ul><h2 id="lagent" tabindex="-1">Lagent <a class="header-anchor" href="#lagent" aria-label="Permalink to &quot;Lagent&quot;">​</a></h2><ul><li><strong>支持高性能推理.</strong> 我们现在支持了高性能推理 <a href="https://github.com/InternLM/lmdeploy/tree/main" target="_blank" rel="noreferrer">lmdeploy turbomind</a>.</li><li><strong>实现了多种类型的智能体，</strong> 我们支持了经典的 <a href="https://arxiv.org/abs/2210.03629" target="_blank" rel="noreferrer">ReAct</a>，<a href="https://github.com/Significant-Gravitas/Auto-GPT" target="_blank" rel="noreferrer">AutoGPT</a> 和 <a href="https://arxiv.org/abs/2305.18323" target="_blank" rel="noreferrer">ReWoo</a> 等智能体，这些智能体能够调用大语言模型进行多轮的推理和工具调用。</li><li><strong>框架简单易拓展.</strong> 框架的代码结构清晰且简单，只需要不到20行代码你就能够创造出一个你自己的智能体（agent）。同时我们支持了 Python 解释器、API 调用和搜索三类常用典型工具。</li><li><strong>灵活支持多个大语言模型.</strong> 我们提供了多种大语言模型支持，包括 InternLM、Llama-2 等开源模型和 GPT-4/3.5 等基于 API 的闭源模型。</li></ul><h1 id="智能体" tabindex="-1">智能体 <a class="header-anchor" href="#智能体" aria-label="Permalink to &quot;智能体&quot;">​</a></h1><p>ReAct</p><p>AutoGPT</p><p>ReWoo</p>',38),o=[i];function g(l,s,p,A,h,u){return a(),t("div",null,o)}const c=e(r,[["render",g]]);export{d as __pageData,c as default};
