import{_ as e,o as a,c as s,Q as t}from"./chunks/framework.2516552c.js";const p="/assets/v2-91a8d2a19de45cd6d3939c6681ce6852_hd.994c7102.jpg",c="/assets/v2-19720b1c70a294558dc9456477156b06_hd.9ea37b91.jpg",_="/assets/v2-5e67529ff0a194c39a45aaa6acec70bd_hd.a513727e.jpg",r="/assets/v2-8ce412caea3b306a3889732cefc627b5_hd.8be3ab70.jpg",o="/assets/v2-f1fed2976da2cbb8443a7725c372ee34_hd.b9ad3fb3.jpg",L=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/12LLM/05GPT02模型.md","filePath":"articles/算法/12LLM/05GPT02模型.md","lastUpdated":1698149129000}'),i={name:"articles/算法/12LLM/05GPT02模型.md"},d=t('<p>《Language Models are Unsupervised Multitask Learners》</p><p>自回归(auto-regression)机制：上一步的输出，作为这一步的输入。</p><p>GPT， TransformerXL，XLNet 本质上都是自回归模型。</p><p>GPT有不同的规模</p><p><img src="'+p+'" alt="img"></p><p>GPT的每个Decoder只有两层</p><p><img src="'+c+'" alt="img"></p><p>GPT词汇表大小为50257，输入之前，先经过嵌入矩阵（嵌入矩阵也是模型训练的一部分）</p><p><img src="'+_+'" alt="img"></p><p>不止有嵌入矩阵，还有位置编码。内容大小1024，表示生成长度最大为1024。</p><p><img src="'+r+'" alt="img"></p><p>模型的输出：输出向量x嵌入矩阵 = 概率</p><p>我们简单地选取得分最高的单词作为输出结果（即 top-k = 1）。但其实如果模型考虑其他候选单词的话，效果通常会更好。通常一个折中的方法是，将 top-k 设为 40，这样模型会考虑注意力得分排名前 40 位的单词。</p><p><img src="'+o+'" alt="img"></p>',14),n=[d];function m(l,g,f,T,b,P){return a(),s("div",null,n)}const u=e(i,[["render",m]]);export{L as __pageData,u as default};
