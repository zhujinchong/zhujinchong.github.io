import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const T=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/12LLM/22mT0.md","filePath":"articles/算法/12LLM/22mT0.md","lastUpdated":null}'),t={name:"articles/算法/12LLM/22mT0.md"},p=e(`<p>论文：Crosslingual Generalization through Multitask Finetuning</p><p>机构：bigscience</p><p>时间：2022.11.03</p><p>arxiv: [<a href="https://arxiv.org/abs/2211.01786" target="_blank" rel="noreferrer">2211.01786] Crosslingual Generalization through Multitask Finetuning (arxiv.org)</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">通过多任务微调实现跨语言泛化</span></span>
<span class="line"><span style="color:#e1e4e8;">	定义</span></span>
<span class="line"><span style="color:#e1e4e8;">		MTF</span></span>
<span class="line"><span style="color:#e1e4e8;">			Multitask prompted finetuning，多任务提示微调</span></span>
<span class="line"><span style="color:#e1e4e8;">		代码</span></span>
<span class="line"><span style="color:#e1e4e8;">			https://github.com/bigscience-workshop/xmtf</span></span>
<span class="line"><span style="color:#e1e4e8;">		BLOOM模型</span></span>
<span class="line"><span style="color:#e1e4e8;">			类似GPT3， 只有解码器，拥有共70层，每层112个的注意力头（attention head），2048个token的序列长度，并采用了GeLU激活函数，最大版本是1760亿参数</span></span>
<span class="line"><span style="color:#e1e4e8;">			https://bigscience.huggingface.co/</span></span>
<span class="line"><span style="color:#e1e4e8;">			使用的是ROOTS语料库，涵盖46种自然语言和13种编程语言</span></span>
<span class="line"><span style="color:#e1e4e8;">		xP3数据集（图1）</span></span>
<span class="line"><span style="color:#e1e4e8;">			46种语言的监督数据集与英语和机器翻译的提示语组成的组合</span></span>
<span class="line"><span style="color:#e1e4e8;">			各种语言的数量（图2）</span></span>
<span class="line"><span style="color:#e1e4e8;">	模型</span></span>
<span class="line"><span style="color:#e1e4e8;">		版本</span></span>
<span class="line"><span style="color:#e1e4e8;">			BLOOMZ-P3 / mT0-P3</span></span>
<span class="line"><span style="color:#e1e4e8;">				纯英文的BLOOMZ-P3上微调</span></span>
<span class="line"><span style="color:#e1e4e8;">			 BLOOMZ / mT0</span></span>
<span class="line"><span style="color:#e1e4e8;">				在xP3上对模型进行了微调，多语言</span></span>
<span class="line"><span style="color:#e1e4e8;">			BLOOMZ-MT / mT0-MT</span></span>
<span class="line"><span style="color:#e1e4e8;">				在xP3mt上进行模型微调，多语言多任务</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">通过多任务微调实现跨语言泛化</span></span>
<span class="line"><span style="color:#24292e;">	定义</span></span>
<span class="line"><span style="color:#24292e;">		MTF</span></span>
<span class="line"><span style="color:#24292e;">			Multitask prompted finetuning，多任务提示微调</span></span>
<span class="line"><span style="color:#24292e;">		代码</span></span>
<span class="line"><span style="color:#24292e;">			https://github.com/bigscience-workshop/xmtf</span></span>
<span class="line"><span style="color:#24292e;">		BLOOM模型</span></span>
<span class="line"><span style="color:#24292e;">			类似GPT3， 只有解码器，拥有共70层，每层112个的注意力头（attention head），2048个token的序列长度，并采用了GeLU激活函数，最大版本是1760亿参数</span></span>
<span class="line"><span style="color:#24292e;">			https://bigscience.huggingface.co/</span></span>
<span class="line"><span style="color:#24292e;">			使用的是ROOTS语料库，涵盖46种自然语言和13种编程语言</span></span>
<span class="line"><span style="color:#24292e;">		xP3数据集（图1）</span></span>
<span class="line"><span style="color:#24292e;">			46种语言的监督数据集与英语和机器翻译的提示语组成的组合</span></span>
<span class="line"><span style="color:#24292e;">			各种语言的数量（图2）</span></span>
<span class="line"><span style="color:#24292e;">	模型</span></span>
<span class="line"><span style="color:#24292e;">		版本</span></span>
<span class="line"><span style="color:#24292e;">			BLOOMZ-P3 / mT0-P3</span></span>
<span class="line"><span style="color:#24292e;">				纯英文的BLOOMZ-P3上微调</span></span>
<span class="line"><span style="color:#24292e;">			 BLOOMZ / mT0</span></span>
<span class="line"><span style="color:#24292e;">				在xP3上对模型进行了微调，多语言</span></span>
<span class="line"><span style="color:#24292e;">			BLOOMZ-MT / mT0-MT</span></span>
<span class="line"><span style="color:#24292e;">				在xP3mt上进行模型微调，多语言多任务</span></span></code></pre></div><p>简介：本文研究跨语言的多任务微调。多任务提示微调 (MTF) 已被证明可以帮助大型语言模型在零样本场景中泛化到新任务，但到目前为止，对 MTF 的探索主要集中在英语数据和模型上。作者将 MTF 应用于预训练的多语言 BLOOM 和 mT5 模型系列，以生成称为 BLOOMZ 和 mT0 的微调变体。作者发现在带有英语提示的英语任务上微调大型多语言语言模型可以将任务泛化到仅出现在预训练语料库中的非英语语言。使用英语提示对多语言任务进行微调进一步提高了英语和非英语任务的性能，从而产生了各种最先进的零样本结果。作者还研究了多语言任务的微调，提示已从英语机器翻译以匹配每个数据集的语言。作者发现：对这些机器翻译的提示进行训练，可以提高使用各自语言编写的人工提示的性能。令人惊讶的是，作者发现模型能够以他们从未有意看到的语言对任务进行零样本泛化。作者推测这些模型正在学习更高级别的能力，这些能力与任务和语言无关。此外，作者介绍了 xP3--是 46 种语言的监督数据集的组合，带有英语和机器翻译的提示。</p>`,6),l=[p];function o(c,i,r,y,g,d){return n(),a("div",null,l)}const m=s(t,[["render",o]]);export{T as __pageData,m as default};
