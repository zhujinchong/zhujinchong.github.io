import{_ as e,o as t,c as a,Q as n}from"./chunks/framework.2516552c.js";const o="/assets/640-1573177460971.379d8c62.webp",i="/assets/640-1573177584130.946115f9.webp",s="/assets/image-20191108094755870.84174ade.png",r="/assets/640-1573177713134.53db8cb3.webp",c="/assets/image-20191108094949212.9de4bf6f.png",l="/assets/640-1573177853612.e317f2ff.webp",p="/assets/640-1573178270293.e634bcad.webp",d="/assets/640-1573178510529.84053386.webp",h="/assets/640-1573178717965.e7a483b8.webp",k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/12LLM/01seq2seq和Attention.md","filePath":"articles/算法/12LLM/01seq2seq和Attention.md","lastUpdated":null}'),m={name:"articles/算法/12LLM/01seq2seq和Attention.md"},_=n('<h3 id="seq2seq" tabindex="-1">seq2seq <a class="header-anchor" href="#seq2seq" aria-label="Permalink to &quot;seq2seq&quot;">​</a></h3><p><img src="'+o+'" alt="img"></p><p>为了让decoder能够更好地提取源序列的信息，Bahdanau在2014年提出了注意力机制Attention Mechanism，Luong在2015年对Bahdanau Attention进行了改进。这是两个最经典的注意力机制模型。两个Attention模型的本质思路是一样的，下文均以Luong Attention模型作为范例。</p><p>Bahdanau D ,Cho K , Bengio Y . Neural Machine Translation by Jointly Learning to Align andTranslate[J]. Computer Science, 2014.</p><p>Luong M T ,Pham H , Manning C D . Effective Approaches to Attention-based Neural MachineTranslation[J]. Computer Science, 2015.</p><h3 id="attention-mechanism" tabindex="-1">attention mechanism <a class="header-anchor" href="#attention-mechanism" aria-label="Permalink to &quot;attention mechanism&quot;">​</a></h3><p><img src="'+i+'" alt="img"></p><p><img src="'+s+'" alt="image-20191108094755870"></p><h3 id="attention五部曲" tabindex="-1">Attention五部曲 <a class="header-anchor" href="#attention五部曲" aria-label="Permalink to &quot;Attention五部曲&quot;">​</a></h3><h3 id="_3-1-执行encoder" tabindex="-1">3.1 执行encoder <a class="header-anchor" href="#_3-1-执行encoder" aria-label="Permalink to &quot;3.1 执行encoder&quot;">​</a></h3><p>计算输出h矩阵，和传入decoder的最后一个状态s向量。</p><p><img src="'+r+'" alt="img"></p><p><img src="'+c+'" alt="image-20191108094949212"></p><h3 id="_3-2-计算对齐系数a" tabindex="-1">3.2 计算对齐系数a <a class="header-anchor" href="#_3-2-计算对齐系数a" aria-label="Permalink to &quot;3.2 计算对齐系数a&quot;">​</a></h3><p><img src="'+l+'" alt="img"></p><p>对齐系数即相关系数，计算decoder每个输出和h矩阵之间的相关性。</p><p>h[step_len, dim_rnn]乘以decoder当前step的输出，再经过softmax归一化，即可得到当前的score.</p><h3 id="_3-3-计算上下文语义向量c" tabindex="-1">3.3 计算上下文语义向量c <a class="header-anchor" href="#_3-3-计算上下文语义向量c" aria-label="Permalink to &quot;3.3 计算上下文语义向量c&quot;">​</a></h3><p><img src="'+p+'" alt="img"></p><p>步骤2中得到的score，即对齐系数a作为权重，再乘以encoder的output矩阵，得到decoder当前step的上下文语义向量c。</p><h3 id="_3-4-更新decoder状态-输出" tabindex="-1">3.4 更新decoder状态/输出 <a class="header-anchor" href="#_3-4-更新decoder状态-输出" aria-label="Permalink to &quot;3.4 更新decoder状态/输出&quot;">​</a></h3><p><img src="'+d+'" alt="img"></p><p>BahdanauAttention 更新的是s 。</p><p>Luong Attention 更新的是h（图）。</p><h3 id="_3-5-计算输出预测词" tabindex="-1">3.5 计算输出预测词 <a class="header-anchor" href="#_3-5-计算输出预测词" aria-label="Permalink to &quot;3.5 计算输出预测词&quot;">​</a></h3><p><img src="'+h+'" alt="img"></p><p>做一个语义向量到目标词表的映射（如果attention用于分类模型，那就是做一个到各个分类的映射），然后再进行softmax就可以了 。</p><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><p>局部对齐：本文介绍的是Global Attention，还有Local Attention，只用部分step计算对齐系数</p><ol><li>Monotonicalignment (local-m)：简单粗暴的，直接按源序列和目标序列的step绝对值对齐。</li><li>Predictivealignment (local-p)：通过模型，学习计算出截断step的对齐中心。</li><li>Luong的论文里有提及，LocalAttention的效果优于Global Attention。</li></ol><p>其他改进：</p><ol><li>用于生成对齐向量a的分值score的计算方式。</li><li>h和s的更新公式 。</li><li>基本RNN的结构，包括替换门控单元、更改RNN层数、单向改双向等。</li></ol>',32),u=[_];function b(g,q,f,A,P,x){return t(),a("div",null,u)}const T=e(m,[["render",b]]);export{k as __pageData,T as default};
