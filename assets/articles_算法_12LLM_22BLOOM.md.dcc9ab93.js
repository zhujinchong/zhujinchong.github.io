import{_ as e,o as a,c as o,Q as t}from"./chunks/framework.2516552c.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/12LLM/22BLOOM.md","filePath":"articles/算法/12LLM/22BLOOM.md","lastUpdated":null}'),r={name:"articles/算法/12LLM/22BLOOM.md"},n=t('<p>论文：BLOOM: A 176B-Parameter Open-Access Multilingual Language Model</p><p>时间：2022.11.09</p><p>机构：BigScience</p><p>arxiv: [<a href="https://arxiv.org/abs/2211.05100" target="_blank" rel="noreferrer">2211.05100] BLOOM: A 176B-Parameter Open-Access Multilingual Language Model (arxiv.org)</a></p><h2 id="一、简介" tabindex="-1"><strong>一、简介</strong> <a class="header-anchor" href="#一、简介" aria-label="Permalink to &quot;**一、简介**&quot;">​</a></h2><p>预训练语言模型已经成为了现代自然语言处理pipeline中的基石，因为其在少量的标注数据上产生更好的结果。随着ELMo、ULMFiT、GPT和BERT的开发，使用预训练模型在下游任务上微调的范式被广泛使用。随后发现预训练语言模型在没有任何额外训练的情况下任务能执行有用的任务，进一步证明了其实用性。此外，根据经验观察，语言模型的性能随着模型的增大而增加(有时是可预测的，有时是突然的)，这也导致了模型规模越来越多的趋势。抛开环境的问题，训练大语言模型(LLM)的代价仅有资源丰富的组织可以负担的起。此外，直至最终，大多数LLM都没有公开发布。因此，大多数的研究社区都被排除在LLM的开发之外。这在不公开发布导致的具体后果：例如，大多数LLM主要是在英文文本上训练的。</p><p>为了解决这些问题，我们提出了BigScience Large Open-science Open-access Multilingual Language Model(BLOOM)。BLOOM是在46种自然语言和13种编程语言上训练的1760亿参数语言模型，其是由数百名研究人员合作开发和发布的。训练BLOOM的计算力是由来自于法国公共拨款的GENCI和IDRIS，利用了IDRIS的Jean Zay超级计算机。为了构建BLOOM，对于每个组件进行了详细的设计，包括训练数据、模型架构和训练目标、以及分布式学习的工程策略。我们也执行了模型容量的分析。我们的总体目标不仅是公开发布一个能够和近期开发的系统相媲美的大规模多语言的语言模型，而且还记录其开发中的协调过程。</p><h2 id="二、bloom" tabindex="-1">二、BLOOM <a class="header-anchor" href="#二、bloom" aria-label="Permalink to &quot;二、BLOOM&quot;">​</a></h2><h3 id="_1-训练数据" tabindex="-1">1. 训练数据 <a class="header-anchor" href="#_1-训练数据" aria-label="Permalink to &quot;1. 训练数据&quot;">​</a></h3><p>BLOOM是在一个称为ROOTS的语料上训练的，其是一个由498个Hugging Face数据集组成的语料。共计1.61TB的文本，包含46种自然语言和13种编程语言。上图3展示了该数据集的高层概览，上表1则详细列出了每种语言及其语属、语系和宏观区域。除了产生了语料库之外，该过程也带来了许多组织和技术工具的开发和发布。</p><h3 id="_2-模型架构" tabindex="-1"><strong>2. 模型架构</strong> <a class="header-anchor" href="#_2-模型架构" aria-label="Permalink to &quot;**2. 模型架构**&quot;">​</a></h3><p>虽然大多数现代语言模型都是基于Transformer架构，但是架构实现之间存在着显著的不同。显然，原始的Transformer是基于encoder-decoder架构的，许多流行的模型仅选择encoder-only或者decoder-only方法。当前，所有超过100B参数的state-of-the-art模型都是decoder-only模型。这与Raffel等人的发现相反，在迁移学习方面encoder-decoder模型显著优于decoder-only模型。</p><p>在我们工作之前，文献缺乏不同架构和预训练目标的系统性评估zero-shot泛化能力。我们在<code>Wang et al.(2022a)</code>等人的工作中探索了这个问题，其探索了encoder-decoder和decoder-only架构以及与causal、prefix和masked language modeling预训练模型的相互作用。我们的结果显示，经过预训练之后，causal decoder-only模型的表现最好，验证了state-of-the-art LLM的选择。</p><h3 id="_3-tokenization" tabindex="-1"><strong>3. Tokenization</strong> <a class="header-anchor" href="#_3-tokenization" aria-label="Permalink to &quot;**3. Tokenization**&quot;">​</a></h3><p>tokenizer的设计选择通常被忽略，倾向于&quot;默认&quot;设置。举例来说，OPT和GPT-3都使用GPT-2的tokenizer，训练用于English。由于BLOOM训练数据的多样性本质，需要谨慎的设计选择来确保tokenizer以无损的方式来编码句子。</p><h3 id="_4-工程" tabindex="-1"><strong>4. 工程</strong> <a class="header-anchor" href="#_4-工程" aria-label="Permalink to &quot;**4. 工程**&quot;">​</a></h3><p>模型在Jean Zay上训练，其是由法国政府资助的超级计算机，归属于GENCI所有，由法国国家科学研究中心(CNRS)的国家计算中心IDRIS运行。训练BLOOM花费了3.5个月才完成，并消耗了1082990计算小时。在48个节点上进行训练，每个有8 NVIDIA A100 80GB GPUs(总共384个GPUs)；由于在训练过程中硬件可能损坏，我们也保留了4个备用节点。这些节点装备了2x AMD EPYC 7543 32-Core CPUs和512 GB的RAM，而存储采用混合全闪存和硬盘驱动的SpectrumScale(GPFS)并行文件系统。</p><p>BLOOM使用Megatron-DeepSpeed训练，一个用于大规模分布式训练的框架。其由两部分组成：Megatron-LM提供Transformer实现、张量并行和数据加载原语，而DeepSpeed提供ZeRO优化器、模型流水线、通过分布式训练组件。这个框架允许我们使用3D并行来高效训练---融合了三种互补的分布式深度学习方法。</p><h3 id="_5-训练" tabindex="-1"><strong>5. 训练</strong> <a class="header-anchor" href="#_5-训练" aria-label="Permalink to &quot;**5. 训练**&quot;">​</a></h3><ul><li>预训练模型 我们使用上表3中详细描述的超参数来训练BLOOM的6个尺寸变体。架构和超参数来自于我们的实验结果(Le Scao et al.)和先前的训练大语言模型(Brown et al.)。非176B模型的深度和宽度大致遵循先前的文献(Brown et al.)，偏离的3B和7.1B只是为了更容易适合我们训练设置。由于更大的多语言词表，BLOOM的embedding参数尺寸更大。在开发104B参数模型的过程中，我们使用了不同的Adam � 参数、权重衰减和梯度裁剪来对目标稳定性进行实验，但没有发现其有帮助。对于所有模型，我们在410B tokens使用cosine学习率衰减调度，在计算允许的情况下，将其作为训练长度的上限，并对375M tokens进行warmup。我们使用权重衰减、梯度裁剪，不使用dropout。ROOTS数据集包含341B tokens的文本。然而，基于训练期间发布的修订scaling laws，我们决定在重复数据上对大模型进行额外25B tokens的训练。由于warmup tokens + decay tokens大于总的token数量，所以学习率衰减始终未达到终点。</li><li>多任务微调 微调的BLOOMZ模型维持了与BLOOM模型相同架构超参数。微调的超参数大致基于T0和FLAN。学习率则是将对应预训练模型的最小学习率加倍，然后再四舍五入。对于较小的变体，全局batch size乘以4来增加吞吐量。模型在13B tokens上进行微调，最优checkpoint根据独立的验证集选择。经过1-6B tokens微调后，性能趋于平稳。</li><li>对比微调 我们还使用了SGPT Bi-Encoder方案对1.3B和7.1B参数的BLOOM模型进行对比微调，以训练产生高质量文本嵌入的模型。我们创建了用于多语言信息检索的SGPT-BLOOM-1.7B-msmarco，以及用于多语言语义相似度的SGPT-BLOOM-1.7B-nli。然而，近期的基准测试发现，这种模型也能够推广到各种其他的嵌入任务，例如bitext挖掘、重排或者下游分类的特征抽取。</li></ul><h2 id="三、评估" tabindex="-1"><strong>三、评估</strong> <a class="header-anchor" href="#三、评估" aria-label="Permalink to &quot;**三、评估**&quot;">​</a></h2><p>评估主要专注在zero-shot和few-shot设置。我们的目标是呈现出BLOOM与现有LLMs相比的准确图景。由于这些模型的规模，基于prompt的方法和few-shot &quot;in-context learning&quot;要比微调更加常见。</p><h3 id="baseline模型" tabindex="-1"><strong>Baseline模型</strong> <a class="header-anchor" href="#baseline模型" aria-label="Permalink to &quot;**Baseline模型**&quot;">​</a></h3><ul><li>mGPT：在60种语言上训练的GPT风格的模型；</li><li>GPT-Neo、GPT-J-6B、GPT-NeoX：在Pile上训练的GPT风格模型族；</li><li>T0：在P3数据集上经过多任务promoted微调的T5变体；</li><li>OPT：一个GPT风格模型，在混合数据集上训练；</li><li>XGLM：在CC100变体上训练的GPT风格多语言模型；</li><li>M2M：在Wikipedia和mC4上使用masked和causal目标函数训练的encoder-decoder模型；</li><li>mTk-Instruct：在Super-NaturalInstructions数据集上进行多任务prompted微调的T5变体；</li><li>Codex：在来自GitHub的代码上微调的GPT模型；</li><li>GPT-fr：在法语文本上训练的GPT风格模型；</li></ul><h2 id="五、总结" tabindex="-1">五、总结 <a class="header-anchor" href="#五、总结" aria-label="Permalink to &quot;五、总结&quot;">​</a></h2><p>在这项工作中，我们提出了BLOOM，一个176B参数的开放性多语种语言模型。BLOOM由BigScience创建，由数百名研究人员合作完成，并在法国政府资助的Jean Zay超级计算机上训练了3个半月。在本文中，我们记录了BLOOM的发展过程，从其训练数据集ROOTS的创建到其架构和tokenizer的设计。我们还讨论了BLOOM和其他大型语言模型的评估结果，发现它具有竞争性的性能，在多任务微调后，性能有所提高。</p><p>我们希望，一个强大的多语种语言模型的发布能够为大型语言模型开启新的应用和研究方向。此外，我们希望记录我们的经验能够帮助机器学习研究界组织类似于BigScience的新的大规模合作项目。这种组织形式除了能够实现任何单个研究小组都不可能实现的结果外，还能让更多的BigScience研讨会具有不同背景的人分享他们的想法并参与该领域的重大进展的发展。</p>',27),i=[n];function l(s,c,d,O,h,p){return a(),o("div",null,i)}const L=e(r,[["render",l]]);export{u as __pageData,L as default};
