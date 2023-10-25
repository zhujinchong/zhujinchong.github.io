import{_ as e,o as t,c as n,Q as i}from"./chunks/framework.2516552c.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Algorithm/12LLM/41mBART.md","filePath":"articles/Algorithm/12LLM/41mBART.md","lastUpdated":null}'),o={name:"articles/Algorithm/12LLM/41mBART.md"},a=i("<p>Multilingual Translation with Extensible Multilingual Pretraining and Finetuning</p><p>具有可扩展的多语言预训练和微调的多语言翻译</p><p>机构：facebook</p><p>时间：2020</p><p>abstract</p><p>在预训练模型上同时在多个方向上进行多语言微调。我们微调 mBART，使其支持50种语言（原来25种）。</p><p>我们创建了ML50基准，比最强基线模型提高了1BLEU（最强基线是指：从头开始的多语言或双语微调模型）</p><p>intruduction:</p><p>本文三个创新：</p><ul><li>一种有效且新颖的多语言翻译模型方法，具有多语言预训练（使用单语言数据），然后进行多语言微调（使用并行数据）。在多英语环境中，多语言微调比双语微调提高了 3.6 BLEU，与从头开始训练的多语言模型相比提高了 2.6 BLEU。 平均而言，结合多对英语和英语对多、多语言微调，比最强基线提高 1 BLEU 点。</li><li>可以扩展预训练模型未经训练的其他语言，且不损失原始语言性能。开源了mBART-50</li><li>创建了多语言翻译，涵盖高、中、低资源的ML50基准。</li></ul><p>related work</p><p>BERT是encoder-only GPT是decoder-only BART是encoder+decoder。</p><p>BART在encoder端加入了更多的噪声：Token Masking; Token Deletion; Text Infilling; Sentence Permutation; Document Rotation。所以后面又有人叫去噪自编码器。</p><p>mBART：一个seq2seq的去噪自动编码器，使用了BART目标对多种语言的大规模单语语料库进行预训练。</p>",14),l=[a];function p(r,c,s,_,d,T){return t(),n("div",null,l)}const B=e(o,[["render",p]]);export{u as __pageData,B as default};
