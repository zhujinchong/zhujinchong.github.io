import{_ as l,o as s,c as e,k as a,Q as t}from"./chunks/framework.2516552c.js";const n="/assets/v2-6d18fd84363055c3668ba4be280d0eb5_1440w.23b78429.webp",o="/assets/image-20230926120704720.b6978c50.png",r="/assets/image-20230926120735694.cf28daaa.png",p="/assets/image-20230811190103046.c3a30dfe.png",Q="/assets/v2-9f1c595e549174bcb759252369d16ada_1440w.a5cbfeb9.webp",T="/assets/v2-4ac483f897898875d424584421a7bd8f_1440w.c02a055b.webp",i="/assets/v2-150a5cb6d0d37137f3408d4a498e4696_1440w.88b52e7c.webp",c="/assets/v2-3f1115a021c4201c79a5c596a8eac0ec_720w.42a8614c.webp",d="/assets/v2-1520514ff5f2c6ea2a0def6ace10bb42_1440w.974eef6a.webp",h="/assets/v2-7fe03ee3904784d2a050e112c88cfa5b_1440w.01c642df.webp",m="/assets/v2-a7a7b4ad7ce1018183e1b8eb654f3f91_1440w.5b0a46b7.webp",g="/assets/v2-c1bb7716076d16d8c42fa37030f7be89_1440w.540822da.webp",u="/assets/v2-321500705cfbef51245d9479292c0016_1440w.babb7926.webp",y="/assets/v2-405930a9ad6ecf1993760190ef6d964e_1440w.d25d6ee0.webp",f="/assets/b6f0c8d76c594858a328246c2aebe9ef.4f3a0aec.png",E="/assets/image-20230926133909560.60cd5683.png",L="/assets/640-1693022173878.d4258eb0.png",v=JSON.parse('{"title":"模型相关数据","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/12LLM/26LLaMA2中的技术.md","filePath":"articles/算法/12LLM/26LLaMA2中的技术.md","lastUpdated":null}'),b={name:"articles/算法/12LLM/26LLaMA2中的技术.md"},H=t('<h1 id="模型相关数据" tabindex="-1">模型相关数据 <a class="header-anchor" href="#模型相关数据" aria-label="Permalink to &quot;模型相关数据&quot;">​</a></h1><h2 id="分词" tabindex="-1">分词 <a class="header-anchor" href="#分词" aria-label="Permalink to &quot;分词&quot;">​</a></h2><p>我们使用与Llama 1相同的分词器；它采用了一个字节对编码（bytepair encoding，BPE）算法（Sennrich等，2016），使用来自SentencePiece（Kudo和Richardson，2018）的实现。与Llama 1一样，我们将所有数字（number）拆分为单个数字（digit），并使用字节来分解未知的UTF-8字符。总词汇量为32k个Token。</p><h2 id="超参数" tabindex="-1">超参数 <a class="header-anchor" href="#超参数" aria-label="Permalink to &quot;超参数&quot;">​</a></h2><p>我们使用AdamW优化器（Loshchilov和Hutter，2017）进行训练，其中β1 = 0.9，β2 = 0.95，eps = 10e−5。我们使用余弦学习率计划（cosine learning rate schedule），2000步warmup，并将最终学习率衰减到峰值学习率的10％。我们使用0.1的权重衰减（weight decay）和1.0的梯度裁剪（gradient clipping）。图3显示了使用这些超参数的Llama 2的训练损失。</p><p>学习率：70B和34B是 1.5e-5, 7B和13B是3e-5</p><h2 id="硬件和时间" tabindex="-1">硬件和时间 <a class="header-anchor" href="#硬件和时间" aria-label="Permalink to &quot;硬件和时间&quot;">​</a></h2><p>论文中没准确说明，只是说70B模型训练GPU Hours是1720320 ，显卡是A100s</p><p>推测：1720320 / 24小时 / 2000张GPU = 35天</p><h2 id="训练数据" tabindex="-1">训练数据 <a class="header-anchor" href="#训练数据" aria-label="Permalink to &quot;训练数据&quot;">​</a></h2><p>比LLama1多40%。7B,13B,70B都是用了2T的Token。上下文4K。</p><h2 id="模型架构" tabindex="-1">模型架构 <a class="header-anchor" href="#模型架构" aria-label="Permalink to &quot;模型架构&quot;">​</a></h2><p>使用RMSNorm进行预归一化（Zhang和Sennrich，2019）</p><p>使用SwiGLU激活函数（Shazeer，2020）</p><p>旋转位置嵌入（rotary positional embeddings，RoPE，Su等，2022）</p><p>增加的上下文长度扩展到4K</p><p>grouped-query attention（GQA）</p><h2 id="sft" tabindex="-1">SFT <a class="header-anchor" href="#sft" aria-label="Permalink to &quot;SFT&quot;">​</a></h2><ul><li>人工标注的27540个问答对。</li></ul><ul><li>余弦学习率，初始学习率为 2×10-5，权重衰减为 0.1，批量大小为 64，序列长度为 4096 个标记。</li><li>对于微调过程，每个样本由一个提示（prompt）和一个答案（answer）组成。为了确保模型的序列长度得到正确填充，将训练集中的所有提示和答案连接在一起。使用一个特殊的 token 将提示和答案分隔开。</li><li>采用自回归目标（autoregressive objective）并将用户提示中的标记损失设为零，因此我们只在答案标记上进行反向传播。最后，我们对模型进行2个 epoch 的微调。</li></ul><h2 id="rlhf" tabindex="-1">RLHF <a class="header-anchor" href="#rlhf" aria-label="Permalink to &quot;RLHF&quot;">​</a></h2><h3 id="rlhf模型训练" tabindex="-1">RLHF模型训练 <a class="header-anchor" href="#rlhf模型训练" aria-label="Permalink to &quot;RLHF模型训练&quot;">​</a></h3><p>收集了140万二元比较数据。</p><ul><li>偏好程度：明显更好、更好、稍好、不确定。二元排序标签只有（选择，拒绝），我们的偏好被分成四个等级，因此可以更好训练奖励模型。</li><li>安全性标签：1)首选回复安全，而另一个回复不安全；2)两个回复都安全；3)两个回复都不安全</li></ul><p>单独训练了两个模型（后面说为什么）：</p><ul><li>Helpfulness RM最终在所有Meta Helpfulness数据上进行训练，与从Meta Safety和开源数据集中均匀采样的剩余数据相结合。</li><li>Safety RM在所有Meta Safety和Anthropic Harmless数据上进行训练，与Meta Helpfulness和开源Helpfulness数据以90/10的比例混合。</li></ul><p>训练细节：</p><ul><li>训练一个 epoch</li><li>使用和基础模型相同的训练超参数</li><li>70b模型使用5e-6的学习率，其他的使用1e-5学习率</li><li>3% 的 warmup</li><li>每个 batch 有 512 pairs 数据</li></ul><h3 id="rlhf迭代微调" tabindex="-1">RLHF迭代微调 <a class="header-anchor" href="#rlhf迭代微调" aria-label="Permalink to &quot;RLHF迭代微调&quot;">​</a></h3><p>尝试了两种 RLHF 微调算法:</p><ul><li><p>PPO:</p></li><li><p>拒绝采样：通过从模型中采样K个输出并选择最佳候选者，使用奖励进行重新排序，进一步使用选定的输出进行梯度更新。这种方法将获得最高奖励分数的样本视为新的标准，然后在这个新的排名样本集上进行模型的微调，加强奖励。</p></li></ul><p>对于所有的模型，我们使用AdamW优化器，其中 �1=0.9,�2=0.95,���=10−5 ，我们使用0.1的权重衰减，1.0的梯度剪裁，以及 10−6 的恒定学习率。对于每个PPO迭代，我们使用512的批量大小，0.2的PPO剪裁阈值，64的小批量大小，并在每个小批量中进行一次梯度步骤。对于7B和13B模型，我们设置β = 0.01（KL惩罚），对于34B和70B模型，我们设置β = 0.005。我们对所有模型进行200到400次迭代的训练，并使用保留的提示进行早停。每次70B模型的PPO迭代平均需要约330秒。为了使用大批量快速训练，我们使用FSDP。这在使用 �(1) 的前向或后向传递时非常有效，但在生成过程中会导致大幅度的减速（约20倍），即使使用大批量大小和KV缓存也是如此。我们通过在生成之前将模型权重合并到每个节点上，然后在生成后释放内存，恢复其余的训练循环来缓解这个问题。</p><h2 id="gatt" tabindex="-1">GAtt <a class="header-anchor" href="#gatt" aria-label="Permalink to &quot;GAtt&quot;">​</a></h2><p>解决多轮对话遗忘的问题，我们提出Ghost Attention：</p><ul><li>假设我们可以访问两个人之间的多轮对话数据集（例如，用户和助手之间的对话），其中包含一系列消息 [u1, a1, ..., un, an]，其中 un 和 an 分别对应第 n 轮对话的用户和助手消息。然后，我们定义一个指令（inst），在整个对话过程中应该被遵守。例如，指令可以是&quot;扮演&quot;某个角色。然后，我们将这个指令合成地连接到对话中所有的用户消息上</li><li>接下来，我们可以使用最新的RLHF模型从这个合成数据中进行采样。现在我们有了一个上下文对话和用于微调模型的样本，这个过程类似于拒绝抽样。然而，我们并不是在所有上下文对话回合中都加入指令，而是只在<strong>第一个回合中加入</strong>，这样会导致一个训练时的问题，即系统消息（即最后一轮之前的所有中间助手消息）与我们的样本不匹配。为了解决这个问题，以免影响训练，我们简单地将之前回合中的所有标记的损失设置为0，包括助手消息</li><li>对于训练指令，我们创建了一些合成的限制供采样，例如兴趣爱好（&quot;您喜欢（），例如网球&quot;），语言（&quot;说()，例如法语&quot;），或者公众人物（&quot;扮演()，例如拿破仑&quot;）。为了获得兴趣爱好和公众人物的列表，我们让Llama 2-Chat来生成，避免了指令与模型知识不匹配的问题（例如，让模型扮演它在训练中没有遇到过的角色）。为了使指令更加复杂和多样化，我们通过随机组合上述限制来构造最终的指令。在构造用于训练数据的最终系统消息时，我们还会将一半的原始指令修改为更简洁的形式，例如&quot;Always act as Napoleon from now&quot;会变为&quot;Figure: Napoleon&quot;。这些步骤生成了一个 SFT 数据集，用于微调Llama 2-Chat。</li></ul><h1 id="模型架构详解" tabindex="-1">模型架构详解 <a class="header-anchor" href="#模型架构详解" aria-label="Permalink to &quot;模型架构详解&quot;">​</a></h1><p>decoder-only结构</p><p><img src="'+n+'" alt="img"></p><p>模型特点：</p><ul><li>RMSNorm - 传统结构 Norm 放在 Att 后，这里将 Norm 前置</li><li>RoPE 编码 - 更换了 Position Embedding 的编码方式</li><li>MLP 层更新 - 增加了 UP 和 Donw 的线性层并使用 SiLU 激活</li><li>LLaMA-1 相比，其增加了一倍 Context Length 达到 4096</li></ul><h2 id="rmsnorm" tabindex="-1">RMSNorm <a class="header-anchor" href="#rmsnorm" aria-label="Permalink to &quot;RMSNorm&quot;">​</a></h2><p>这是在BERT、GPT等模型中广泛使用的LayerNorm：</p><p><img src="'+o+'" alt="image-20230926120704720"></p><p><a href="https://link.zhihu.com/?target=https%3A//arxiv.org/pdf/1910.07467.pdf" target="_blank" rel="noreferrer">RMSNorm</a>(root mean square)发现LayerNorm的中心偏移没什么用(减去均值等操作)。将其去掉之后，效果几乎不变，但是速度提升了40%。最终公式为：</p><p><img src="'+r+'" alt="image-20230926120735694"></p><p>注意除了没有减均值，加偏置以外，分母上求的RMS而不是方差。</p><p>LLaMA在 Attention Layer和MLP的输入上使用了RMSNorm，相比在输出上使用，训练会更加稳定。</p><h2 id="rope" tabindex="-1">RoPE <a class="header-anchor" href="#rope" aria-label="Permalink to &quot;RoPE&quot;">​</a></h2><p><a href="https://blog.csdn.net/weixin_44826203/article/details/129255185" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_44826203/article/details/129255185</a></p><h2 id="swiglu" tabindex="-1">SwiGLU <a class="header-anchor" href="#swiglu" aria-label="Permalink to &quot;SwiGLU&quot;">​</a></h2><h3 id="swish函数" tabindex="-1">Swish函数 <a class="header-anchor" href="#swish函数" aria-label="Permalink to &quot;Swish函数&quot;">​</a></h3><p><img src="'+p+'" alt="image-20230811190103046"></p><p>Swish函数可以看做是介于线性函数与ReLU函数之间的平滑函数，其中贝塔是常数或者可训练参数。</p><p><img src="'+Q+'" alt="img"></p><h3 id="gelu激活函数" tabindex="-1">GELU激活函数 <a class="header-anchor" href="#gelu激活函数" aria-label="Permalink to &quot;GELU激活函数&quot;">​</a></h3><p>GELU（高斯误差线性单元）是一个非初等函数形式的激活函数，是ReLU的变种。由16年论文 <a href="https://link.zhihu.com/?target=https%3A//arxiv.org/abs/1606.08415" target="_blank" rel="noreferrer">Gaussian Error Linear Units (GELUs)</a> 提出，随后被GPT-2、BERT、RoBERTa、ALBERT 等NLP模型所采用。论文中不仅提出了GELU的精确形式，还给出了两个初等函数的近似形式。函数曲线如下：</p><p><img src="'+T+'" alt="img"></p><p>ReLU及其变种与Dropout从两个独立的方面来决定网络的输出，有没有什么比较中庸的方法把两者合二为一呢？在网络正则化方面，Dropout将神经单元输出随机置0（乘0），Zoneout将RNN的单元随机跳过（乘1）。两者均是将输出乘上了服从伯努利分布的随机变量m ~ Bernoulli(p)，其中p是指定的确定的参数，表示取1的概率。</p><p>然而激活函数由于在训练和测试时使用方式完全相同，所以是需要有确定性的输出，不能直接对输入x乘随机变量m，这点与Dropout不同（Dropout在测试时并不随机置0）。由于概率分布的数学期望是确定值，因此可以改为求输出的期望：E[mx]=xE[m]，即对输入乘上伯努利分布的期望值p=E[m]。</p><p>论文中希望p能够随着输入x的不同而不同，在x较小时以较大概率将其置0。 由于神经元的输入通常服从正态分布，尤其是在加入了Batch Normalization的网络中，<strong>因此令p等于正态分布的累积分布函数即可满足</strong></p><p>正态分布的累积分布函数曲线与sigmoid曲线相似。</p><p>GELU公式如下：其中erf是高斯误差函数，具体公式就不详细说了。</p>',62),_={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},w={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.308ex"},xmlns:"http://www.w3.org/2000/svg",width:"39.812ex",height:"5.344ex",role:"img",focusable:"false",viewBox:"0 -1342 17597.1 2362","aria-hidden":"true"},x=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D454" d="M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(477,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(866,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1438,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2104.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3160.6,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(3732.6,0)"><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(4513.3,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(5569.1,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(6141.1,0)"><path data-c="3A6" d="M312 622Q310 623 307 625T303 629T297 631T286 634T270 635T246 636T211 637H184V683H196Q220 680 361 680T526 683H538V637H511Q468 637 447 635T422 631T411 622V533L425 531Q525 519 595 466T665 342Q665 301 642 267T583 209T506 172T425 152L411 150V61Q417 55 421 53T447 48T511 46H538V0H526Q502 3 361 3T196 0H184V46H211Q231 46 245 46T270 47T286 48T297 51T303 54T307 57T312 61V150H310Q309 151 289 153T232 166T160 195Q149 201 136 210T103 238T69 284T56 342Q56 414 128 467T294 530Q309 532 310 533H312V622ZM170 342Q170 207 307 188H312V495H309Q301 495 282 491T231 469T186 423Q170 389 170 342ZM415 188Q487 199 519 236T551 342Q551 384 539 414T507 459T470 481T434 491T415 495H410V188H415Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(6863.1,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(7252.1,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(7824.1,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(8490.9,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(9546.7,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mfrac" transform="translate(10118.7,0)"><g data-mml-node="mn" transform="translate(220,676)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(220,-686)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g><rect width="700" height="60" x="120" y="220"></rect></g><g data-mml-node="mo" transform="translate(11058.7,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(11447.7,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(12169.9,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(13170.1,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(13636.1,0)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(14087.1,0)"><path data-c="1D453" d="M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(14637.1,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mfrac" transform="translate(15026.1,0)"><g data-mml-node="mi" transform="translate(610.5,676)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="msqrt" transform="translate(220,-920.5)"><g transform="translate(853,0)"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(0,100.5)"><path data-c="221A" d="M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z" style="stroke-width:3;"></path></g><rect width="500" height="60" x="853" y="840.5"></rect></g><rect width="1553" height="60" x="120" y="220"></rect></g><g data-mml-node="mo" transform="translate(16819.1,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(17208.1,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g></g></g>',1),M=[x],k=a("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[a("mi",null,"g"),a("mo",{stretchy:"false"},"("),a("mi",null,"x"),a("mo",{stretchy:"false"},")"),a("mo",null,"="),a("mi",null,"x"),a("mi",null,"p"),a("mo",null,"="),a("mi",null,"x"),a("mi",{mathvariant:"normal"},"Φ"),a("mo",{stretchy:"false"},"("),a("mi",null,"x"),a("mo",{stretchy:"false"},")"),a("mo",null,"="),a("mi",null,"x"),a("mfrac",null,[a("mn",null,"1"),a("mn",null,"2")]),a("mo",{stretchy:"false"},"("),a("mn",null,"1"),a("mo",null,"+"),a("mi",null,"e"),a("mi",null,"r"),a("mi",null,"f"),a("mo",{stretchy:"false"},"("),a("mfrac",null,[a("mi",null,"x"),a("msqrt",null,[a("mn",null,"2")])]),a("mo",{stretchy:"false"},")"),a("mo",{stretchy:"false"},")")])],-1),q=t('<p>erf(x) 与 tanh(x) 比较接近，在代码实现中可以用近似函数来拟合erf(x)。论文给出的两个近似如下：</p><p><img src="'+i+`" alt="img"></p><p>$\\sigma $代表sigmoid激活函数。不过很多框架已经有精确的erf计算函数了，可以直接使用，参考代码如下：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># BERT、GPT-2 的旧式 GELU 实现</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">gelu</span><span style="color:#E1E4E8;">(x):</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> tf.tanh(np.sqrt(</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">np.pi)</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">(x</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">0.044715</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">tf.pow(x,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">))))</span></span>
<span class="line"><span style="color:#6A737D;"># 使用erf函数的 GELU 实现</span></span>
<span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">gelu</span><span style="color:#E1E4E8;">(x):</span></span>
<span class="line"><span style="color:#E1E4E8;">    cdf </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> tf.erf(x </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> tf.sqrt(</span><span style="color:#79B8FF;">2.0</span><span style="color:#E1E4E8;">)))</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> cdf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># BERT、GPT-2 的旧式 GELU 实现</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">gelu</span><span style="color:#24292E;">(x):</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> tf.tanh(np.sqrt(</span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">np.pi)</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">(x</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">0.044715</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">tf.pow(x,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">))))</span></span>
<span class="line"><span style="color:#6A737D;"># 使用erf函数的 GELU 实现</span></span>
<span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">gelu</span><span style="color:#24292E;">(x):</span></span>
<span class="line"><span style="color:#24292E;">    cdf </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">1.0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> tf.erf(x </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> tf.sqrt(</span><span style="color:#005CC5;">2.0</span><span style="color:#24292E;">)))</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> x </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> cdf</span></span></code></pre></div><p><img src="`+c+'" alt="img"></p><p>可以看出，当x越大的时候，就越有可能被保留，x越小就越有可能被归置为0.</p><p><strong>GELU vs Swish</strong></p><p>GELU 与 Swish 激活函数（x · σ(βx)）的函数形式和性质非常相像，一个是固定系数 1.702，另一个是可变系数 β（可以是可训练的参数，也可以是通过搜索来确定的常数），两者的实际应用表现也相差不大。</p><h3 id="glu-gated-linear-unit" tabindex="-1">GLU（Gated Linear Unit) <a class="header-anchor" href="#glu-gated-linear-unit" aria-label="Permalink to &quot;GLU（Gated Linear Unit)&quot;">​</a></h3><p><img src="'+d+'" alt="img"></p><p>圆圈代表哈达玛积 / 点乘 / 按位乘</p><p>在公式中，首先通过中间向量g(x)=xW进行门控操作，使用Sigmoid函数σ将其映射到0到1之间的范围，表示每个元素被保留的概率。然后，将输入向量x与门控后的向量进行逐元素相乘（即 ⊗ 操作），得到最终的输出向量。</p><p>GLU通过门控机制对输出进行把控，像Attention一样可看作是对重要特征的选择。其优势是不仅具有通用激活函数的非线性，而且<strong>反向传播梯度时具有线性通道</strong>，类似ResNet残差网络中的加和操作传递梯度，能够缓解梯度消失问题。</p><h3 id="geglu" tabindex="-1">GEGLU <a class="header-anchor" href="#geglu" aria-label="Permalink to &quot;GEGLU&quot;">​</a></h3><p>是GLU的激活函数变体</p><p>将GLU中的sigmoid替换为GELU，函数形式如下（忽略bias项的书写）：</p><p><img src="'+h+'" alt="img"></p><p>GLU包含W和V两个可学习的参数</p><p>GEGLU也包含W和V两个可学习的参数，用GELU替换SIGMOD</p><h3 id="swiglu-1" tabindex="-1">SwiGLU <a class="header-anchor" href="#swiglu-1" aria-label="Permalink to &quot;SwiGLU&quot;">​</a></h3><p><img src="'+m+'" alt="img"></p><p>在FFN中，即FC-&gt;激活函数-&gt;FC中，ReLU一般定义如下：</p><p><img src="'+g+'" alt="img"></p><p>在T5论文中没有使用偏置项，也就是：</p><p><img src="'+u+'" alt="img"></p><p>在PaLM论文中使用了SwiGLU激活函数：</p><p><img src="'+y+'" alt="img"></p><h3 id="silu" tabindex="-1">SiLU <a class="header-anchor" href="#silu" aria-label="Permalink to &quot;SiLU&quot;">​</a></h3><p>当beta=1是，swish函数就是xsigmoid(x)，SiLU函数就是Swish(xW) \\dot V</p><h2 id="mlp" tabindex="-1">MLP <a class="header-anchor" href="#mlp" aria-label="Permalink to &quot;MLP&quot;">​</a></h2><p><img src="'+f+'" alt="img"></p><p>这里 MLP 的表达式为：</p><p><img src="'+E+'" alt="image-20230926133909560"></p><p>其中 up、down 与 gate 是三个维度相同的 Linear 层。</p><h2 id="gqa-v2-only" tabindex="-1">GQA（v2 only） <a class="header-anchor" href="#gqa-v2-only" aria-label="Permalink to &quot;GQA（v2 only）&quot;">​</a></h2><p>参考：<a href="https://mp.weixin.qq.com/s/wOyDpxcxKATxGrP8W-1w2Q" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/wOyDpxcxKATxGrP8W-1w2Q</a></p><h3 id="kv-cache" tabindex="-1">KV Cache <a class="header-anchor" href="#kv-cache" aria-label="Permalink to &quot;KV Cache&quot;">​</a></h3><p>Decoder 每次前向，当前 timestep 计算 Attention 要用到的部分，如之前 timestep 的 KV （Key 和 Value）值都计算过的，只是之前每次前向完后给计算结果都丢掉，只保留最后输出。</p><p>于是一个很自然的想法就是 <strong>Cache</strong>。这很像斐波那契递归函数，naive 版本，也会出现不断重复计算问题，加个 cache 瞬间提速。</p><p>每次前向完，给 <strong>KV 都保留下来，用于之后计算</strong>。</p><p>瓶颈：SRAM内存昂贵且有限；而GPU显存DRAM有<strong>内存墙</strong>问题，即内存读取速度限制了整体速度。</p><h3 id="mqa-和-gqa" tabindex="-1">MQA 和 GQA <a class="header-anchor" href="#mqa-和-gqa" aria-label="Permalink to &quot;MQA 和 GQA&quot;">​</a></h3><p><strong>MHA(Multi-Head Attention)</strong>，QKV 三部分有相同数量的头，且一一对应。</p><p><strong>MQA(Multi-Query Attention)</strong> 则是让 <strong>Q 仍然保持原来的头数</strong>，但 <strong>K 和 V 只有一个头</strong>，相当于所有的 Q 头共享一组 K 和 V 头，所以叫做 Multi-Query 了。实现改变了会不会影响效果呢？确实会影响但相对它能带来的收益，性能的些微降低是可以接受的。能带来多大的收益呢，实验发现一般能<strong>提高 30%-40% 的吞吐</strong>。收益主要就是由降低了 KV cache 带来的，实际上 MQA 运算量和 MHA 是差不多的。</p><p><strong>GQA(Group-Query Attention)</strong> 是 MHA 和 MQA 的折衷方案，既不想损失性能太多，又想获得 MQA 带来的推理加速好处。具体思想是，不是所有 Q 头共享一组 KV，而是<strong>分组一定头数 Q 共享一组 KV</strong>，比如上面图片就是两组 Q 共享一组 KV。</p><p><img src="'+L+'" alt="图片"></p>',46);function A(P,V,G,F,D,S){return s(),e("div",null,[H,a("mjx-container",_,[(s(),e("svg",w,M)),k]),q])}const R=l(b,[["render",A]]);export{v as __pageData,R as default};
