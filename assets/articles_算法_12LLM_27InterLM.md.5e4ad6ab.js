import{_ as e,o as a,c as p,Q as r}from"./chunks/framework.2516552c.js";const u=JSON.parse('{"title":"简介","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/12LLM/27InterLM.md","filePath":"articles/算法/12LLM/27InterLM.md","lastUpdated":1698149129000}'),t={name:"articles/算法/12LLM/27InterLM.md"},n=r('<h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p>InternLM: A Multilingual Language Model with Progressively Enhanced Capabilities</p><p>机构：上海人工智能实验室、商汤科技</p><p>时间：2023.06</p><p>模型大小：104B</p><p>语料：1.6T的Token</p><p>语言：多语言模型，主要是中英双语，其他语言数据比例非常少</p><p>为了训练，开发了一个训练系统Uniscale-LLM，支持2000多GPU并行、高效、稳定。</p><p>为了可控，设计了训练模式：多阶段、渐进式训练。</p><p>上下文：2K (GPT-4是32K，所以和GPT4还有很大差距)</p><h1 id="模型开发" tabindex="-1">模型开发 <a class="header-anchor" href="#模型开发" aria-label="Permalink to &quot;模型开发&quot;">​</a></h1><h2 id="数据" tabindex="-1">数据 <a class="header-anchor" href="#数据" aria-label="Permalink to &quot;数据&quot;">​</a></h2><p>1.6T token</p><p>基于多语言语料库，采用BPE编码，词表长度65.5K，</p><p>我们开发了管道，过滤数据：</p><p>1、按语言分类</p><p>2、基于规则的过滤：过滤低质量数据</p><p>3、基于模型的过滤：使用黄金语料数据训练的模型，过滤低质量数据</p><p>4、去重</p><h2 id="训练" tabindex="-1">训练 <a class="header-anchor" href="#训练" aria-label="Permalink to &quot;训练&quot;">​</a></h2><p>为了训练，开发了一个训练系统Uniscale-LLM。</p><p>支持2000多GPU并行、高效、稳定。</p><p>支持：Data parallelism [24], Tensor parallelism [25], Pipeline parallelism [26] and Zero redundancy optimization</p><p>支持从检查点恢复，可以防止梯度爆炸、网络故障等问题</p><h2 id="模型设计" tabindex="-1">模型设计 <a class="header-anchor" href="#模型设计" aria-label="Permalink to &quot;模型设计&quot;">​</a></h2><p>模型和GPT相似：We adopt the transformer-based decoder-only architecture similar to the GPT series。</p><p>模型大小和训练数据要相称，所以模型104B，数据1.6T token</p><p>nlayers = 82</p><p>nheads = 80</p><p>head dimension dhead = 128</p><p>model dimension dmodel = 10240 = 128 * 80</p><h2 id="多阶段渐进式训练" tabindex="-1">多阶段渐进式训练 <a class="header-anchor" href="#多阶段渐进式训练" aria-label="Permalink to &quot;多阶段渐进式训练&quot;">​</a></h2><p>在我们的训练过程中，我们将整个过程分为多个阶段，每个阶段都有其通过控制不同比例的数据来定义优化目标。</p><p>为了确保有效的数据利用，我们确保在调整数据比率时不会对相同的数据进行重新采样。 此外，为了进一步提高训练效率，我们将不同长度的句子打包成固定长度的序列，使用特殊符号来描述不同的句子。</p><p>学习率：cosine学习率表设置的最大学习率在2e-4 and 4e-5，结束时降低到10%</p><p>优化器：AdamW，β1 值为 0.9，β2 值为 0.95。 权重衰减的范围在 0.01 到 0.1 之间波动。</p><p>此外，我们在所有阶段将梯度裁剪值和学习率预热比率分别保持为 1.0 和 0.025。</p><h2 id="对齐" tabindex="-1">对齐 <a class="header-anchor" href="#对齐" aria-label="Permalink to &quot;对齐&quot;">​</a></h2><p>按照InstructGPT主流流程进一步微调：</p><p>1、有监督微调SFT：</p><p>用500万指令数据，包括问答对和多轮对话。用self-instruct丰富了数据的多样性。</p><p>2、奖励模型训练：</p><p>我们训练了一个奖励模型，根据 3H 标准，即有用、无害、诚实/真实。 我们从在线对话中收集了用户提示，并由我们的团队构建了一组有毒提示。 然后，我们使用人类注释者和语言模型生成不同的响应，并注释偏好。 奖励模型从 SFT 模型初始化，最后一个投影层被新的全连接层替换。</p><p>3、RLHF</p><p>鉴于上面提出的奖励模型（RM），我们使用近端策略优化（PPO）[36]进一步微调SFT模型。 此阶段的目的是使模型响应与人类偏好保持一致。 根据经验，我们发现 RLHF 可以帮助降低输出的毒性。</p><h1 id="开源模型" tabindex="-1">开源模型 <a class="header-anchor" href="#开源模型" aria-label="Permalink to &quot;开源模型&quot;">​</a></h1><p><strong>InernLM-20B</strong></p><p>时间：2023.09.20</p><p>InternLM-20B 在超过 <strong>2.3T</strong> Tokens 包含高质量英文、中文和代码的数据上进行预训练，其中 Chat 版本还经过了 SFT 和 RLHF 训练，使其能够更好、更安全地满足用户的需求。</p><p>InternLM 20B 在模型结构上选择了深结构，InternLM-20B 的层数设定为60层，超过常规7B和13B模型所使用的32层或者40层。</p><p>支持16K上下文</p><p><strong>数据-OpenDataLab开源“书生·万卷”预训练语料</strong></p><p>书生·万卷是开源的多模态语料库，包含文本数据集、图文数据集、视频数据集三部分，数据总量超过2TB。</p><p>目前，书生·万卷1.0已被应用于书生·多模态、书生·浦语的训练，为模型性能提升起到重要作用。</p><p><strong>预训练-InternLM高效预训练框架</strong></p><p>除了大模型外，InternLM仓库也开源了预训练框架InternLM-Train。深度整合了Transformer模型算子，使训练效率得到提升，并提出了独特的Hybrid Zero技术，使训练过程中的通信效率显著提升，实现了高效率千卡并行，训练性能达行业领先水平。</p><p><strong>微调-InternLM全参数微调、XTuner轻量级微调</strong></p><p>InternLM支持对模型进行全参数微调，支持丰富的下游应用。同时，低成本大模型微调工具箱XTuner也在近期开源，支持多种大模型及LoRA、QLoRA等微调算法。</p><p>通过XTuner，最低仅需 8GB 显存即可对7B模型进行低成本微调，在24G显存的消费级显卡上就能完成20B模型的微调。</p><p><strong>部署-LMDeploy支持十亿到千亿参数语言模型的高效推理</strong></p><p>LMDeploy涵盖了大模型的全套轻量化、推理部署和服务解决方案，支持了从十亿到千亿级参数的高效模型推理，在吞吐量等性能上超过FasterTransformer、vLLM和Deepspeed等社区主流开源项目。</p><p><strong>评测-OpenCompass一站式、全方位大模型评测平台</strong></p><p>OpenCompass大模型评测平台构建了包含学科、语言、知识、理解、推理五大维度的评测体系，支持超过50个评测数据集和30万道评测题目，支持零样本、小样本及思维链评测，是目前最全面的开源评测平台。</p><p>自7月发布以来，受到学术界和产业界广泛关注，目前已为阿里巴巴、腾讯、清华大学等数十所企业及科研机构广泛应用于大模型研发。</p><p><strong>应用-Lagent轻量灵活的智能体框架</strong></p><p>书生·浦语团队同时开源了智能体框架，支持用户快速将一个大语言模型转变为多种类型的智能体，并提供典型工具为大语言模型赋能。</p><p>Lagent集合了ReAct、AutoGPT 及ReWoo等多种类型的智能体能力，支持智能体调用大语言模型进行规划推理和工具调用，并可在执行中及时进行反思和自我修正。</p><p>基于书生·浦语大模型，目前已经发展出更丰富的下游应用，将于近期陆续向学术及产业界分享。</p>',68),o=[n];function s(i,l,d,h,c,L){return a(),p("div",null,o)}const T=e(t,[["render",s]]);export{u as __pageData,T as default};
