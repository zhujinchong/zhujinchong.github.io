import{_ as e,o as t,c as p,Q as r}from"./chunks/framework.2516552c.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/22模型训练和微调/04DeepSeepd RLHF.md","filePath":"articles/算法/22模型训练和微调/04DeepSeepd RLHF.md","lastUpdated":1698149129000}'),n={name:"articles/算法/22模型训练和微调/04DeepSeepd RLHF.md"},a=r('<p>ChatGPT模型的训练是基于InstructGPT论文中的RLHF方式。这与常见的大语言模型的预训练和微调截然不同。这使得现有深度学习系统在训练类ChatGPT模型时存在种种局限。</p><p>为了让ChatGPT类型的模型更容易被普通数据科学家和研究者使用，并使RLHF训练真正普及到AI社区，DeepSpeed-Chat应运而生。</p><h2 id="deepspeed-chat-核心功能" tabindex="-1">DeepSpeed Chat 核心功能 <a class="header-anchor" href="#deepspeed-chat-核心功能" aria-label="Permalink to &quot;DeepSpeed Chat 核心功能&quot;">​</a></h2><p>DeepSpeed Chat具有以下三大核心功能：</p><ul><li><strong>简化 ChatGPT 类型模型的训练和强化推理体验</strong>：只需一个脚本即可实现多个训练步骤，包括使用 Huggingface 预训练的模型、使用 DeepSpeed-RLHF 系统运行 InstructGPT 训练的所有三个步骤、甚至生成你自己的类ChatGPT模型。此外，还提供了一个易于使用的推理API，用于用户在模型训练后进行对话式交互测试。</li><li><strong>DeepSpeed RLHF 模块</strong>：DeepSpeed RLHF 复刻了 InstructGPT 论文中的训练模式，并确保包括监督微调（SFT），奖励模型微调和基于人类反馈的强化学习（RLHF）在内的三个步骤并与其一一对应。此外，还提供了数据抽象和混合功能，以支持用户使用多个不同来源的数据源进行训练。</li><li><strong>DeepSpeed RLHF 系统</strong>：将 DeepSpeed 的训练（training engine）和推理能力（inference engine) 整合到一个统一的混合引擎（DeepSpeed Hybrid Engine / DeepSpeed-HE）中用于 RLHF 训练。DeepSpeed-HE 能够在 RLHF 中无缝地在推理和训练模式之间切换，使其能够利用来自 DeepSpeed-Inference 的各种优化，如张量并行计算和高性能CUDA算子进行语言生成，同时对训练部分还能从 ZeRO 和 LoRA-based 内存优化策略中受益。DeepSpeed-HE 还能够自动在 RLHF 的不同阶段进行<strong>智能的内存管理和数据缓存</strong>。</li></ul><h2 id="deepspeed-rlhf-系统的优势" tabindex="-1">DeepSpeed RLHF 系统的优势 <a class="header-anchor" href="#deepspeed-rlhf-系统的优势" aria-label="Permalink to &quot;DeepSpeed RLHF 系统的优势&quot;">​</a></h2><p>DeepSpeed-RLHF 系统在大规模训练中具有无与伦比的效率使复杂的 RLHF 训练变得快速、经济并且易于大规模推广。</p><p><strong>高效性和经济性</strong>：DeepSpeed-HE 比现有系统快 15 倍以上，使 RLHF 训练快速且经济实惠。例如，DeepSpeed-HE 在 Azure 云上只需 9 小时即可训练一个 OPT-13B模型，只需 18 小时即可训练一个 OPT-30B模型。这两种训练分别花费不到 300 美元和 600 美元。下表展示了单节点 8 卡A100的训练时长及预估的 Azure 费用。</p><table><thead><tr><th style="text-align:left;">GPUs</th><th style="text-align:center;">OPT-6.7B</th><th style="text-align:center;">OPT-13B</th><th style="text-align:center;">OPT-30B</th><th style="text-align:center;">OPT-66B</th></tr></thead><tbody><tr><td style="text-align:left;">8x A100-40GB</td><td style="text-align:center;">5.7 hours</td><td style="text-align:center;">10.8 hours</td><td style="text-align:center;">1.85 days</td><td style="text-align:center;">NA</td></tr><tr><td style="text-align:left;">8x A100-80GB</td><td style="text-align:center;">4.1 hours ($132)</td><td style="text-align:center;">9 hours ($290)</td><td style="text-align:center;">18 hours ($580)</td><td style="text-align:center;">2.1 days ($1620)</td></tr></tbody></table><p><strong>极好的扩展性</strong>：DeepSpeed-HE 能够支持训练拥有数千亿参数的模型，并在多节点多 GPU 系统上展现出极好的扩展性。因此，即使是一个拥有 130 亿参数的模型，也只需 1.25 小时就能完成训练。而对于庞大的 拥有1750 亿参数的模型，使用 DeepSpeed-HE 进行训练也只需不到一天的时间。下表展示了多节点 64 卡 A100-80GB 的训练时长及预估的 Azure 费用。</p><p><strong>实现 RLHF 训练的普及化</strong>：仅凭单个 GPU，DeepSpeed-HE 就能支持训练超过 130 亿参数的模型。这使得那些无法使用多 GPU 系统的数据科学家和研究者不仅能够轻松创建轻量级的 RLHF 模型，还能创建大型且功能强大的模型以应对不同的使用场景。下表展示了 DeepSpeed-HE 在不同的 GPU 单卡上支持的最大模型。</p><h2 id="deepspeed-chat-完整的-rlhf-训练流程" tabindex="-1">DeepSpeed Chat 完整的 RLHF 训练流程 <a class="header-anchor" href="#deepspeed-chat-完整的-rlhf-训练流程" aria-label="Permalink to &quot;DeepSpeed Chat 完整的 RLHF 训练流程&quot;">​</a></h2><p>为了实现无缝的训练体验，遵循 InstructGPT 论文的方法，DeepSpeed-Chat 中整合了一个端到端的训练流程。下图展示了 DeepSpeed-Chat 的 RLHF 训练流程，并包含了一些可选择的功能。</p><p>流程包括三个主要阶段：</p><ul><li><strong>第一阶段：监督微调（SFT）</strong> —— 使用精选的人类回答来微调预训练的语言模型以应对各种查询（query）；</li><li><strong>第二阶段：奖励模型微调</strong> —— 使用一个包含人类对同一查询（query）的多个答案打分的数据集来训练一个独立的（通常比 SFT 小的）奖励模型（RW）；</li><li><strong>第三阶段：RLHF 训练</strong> —— 利用 Proximal Policy Optimization（PPO）算法，根据 RW 模型的奖励反馈进一步微调 SFT 模型。</li></ul><p>在第三阶段中，还提供了两个额外的功能，以帮助提高模型质量：</p><ul><li><strong>指数移动平均（EMA）</strong> —— 可以选择基于 EMA 的检查点进行最终评估</li><li><strong>混合训练</strong> —— 将预训练目标（即下一个单词预测）与 PPO 目标混合，以防止在像 SQuAD2.0 这样的公开基准测试中的性能损失</li></ul><p>这两个训练功能(EMA 和混合训练)常常被其他的开源框架所忽略，因为它们并不会妨碍训练的进行。然而，根据 InstructGPT 描述，<strong>EMA 通常比传统的最终训练模型提供更好的响应质量</strong>，而<strong>混合训练可以帮助模型保持预训练基准解决能力</strong>。因此，DeepSpeed Chat为用户提供这些功能，以便充分获得 InstructGPT 中描述的训练体验，并争取更高的模型质量。</p><p>除了与 InstructGPT 论文高度一致外，DeepSpeed Chat还提供了一项方便的功能，以支持研究人员和从业者使用多个数据资源训练他们自己的 RLHF 模型：</p><ul><li><strong>数据抽象和混合能力</strong>：DeepSpeed-Chat 能够使用多个不同来源的数据集训练模型以获得更好的模型质量。它配备了（1）<strong>一个抽象数据集层</strong>，以统一不同数据集的格式；以及（2）<strong>数据拆分/混合功能</strong>，以便多个数据集在 3 个训练阶段中被适当地混合然后拆分。</li></ul>',20),s=[a];function d(l,o,i,h,g,c){return t(),p("div",null,s)}const D=e(n,[["render",d]]);export{u as __pageData,D as default};
