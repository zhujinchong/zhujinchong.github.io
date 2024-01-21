import{_ as t,o as a,c as e,Q as o}from"./chunks/framework.2516552c.js";const m=JSON.parse('{"title":"一、IP-Adapter","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Algorithm/14LLMVision/05IPAdaptor_PhotoMaker_InstantID.md","filePath":"articles/Algorithm/14LLMVision/05IPAdaptor_PhotoMaker_InstantID.md","lastUpdated":null}'),r={name:"articles/Algorithm/14LLMVision/05IPAdaptor_PhotoMaker_InstantID.md"},n=o('<p><a href="https://zhuanlan.zhihu.com/p/678613724" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/678613724</a></p><h1 id="一、ip-adapter" tabindex="-1">一、IP-Adapter <a class="header-anchor" href="#一、ip-adapter" aria-label="Permalink to &quot;一、IP-Adapter&quot;">​</a></h1><h1 id="二、photomaker" tabindex="-1">二、PhotoMaker <a class="header-anchor" href="#二、photomaker" aria-label="Permalink to &quot;二、PhotoMaker&quot;">​</a></h1><h1 id="三、instantid" tabindex="-1">三、InstantID <a class="header-anchor" href="#三、instantid" aria-label="Permalink to &quot;三、InstantID&quot;">​</a></h1><p><a href="https://mp.weixin.qq.com/s/7d8En7idif4UFSGo_6MFsg" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/7d8En7idif4UFSGo_6MFsg</a></p><p>主题驱动的文本到图像生成，通常需要在多张包含该主题（如人物、风格）的数据集上进行训练，这类方法中的代表工作包括 DreamBooth、Textual Inversion、LoRAs 等，但这类方案因为需要更新整个网络或较长时间的定制化训练，往往无法很有效地兼容社区已有的模型，并无法在真实场景中快速且低成本应用。而目前基于单张图片特征进行嵌入的方法（FaceStudio、PhotoMaker、IP-Adapter），要么需要对文生图模型的全参数训练或 PEFT 微调，影响原本模型的泛化性能，缺乏与社区预训练模型的兼容性，要么无法保持高保真度。</p><p>InstantID 是一个高效的、轻量级、可插拔的适配器，赋予预训练的文本到图像扩散模型以 ID 保存的能力。作者通过:</p><p>（1）将弱对齐的 CLIP 特征替换为强语义的人脸特征；</p><p>（2）人脸图像的特征在 Cross-Attention 中作为 Image Prompt 嵌入；</p><p>（3）提出 IdentityNet 来对人脸施加强语义和弱空间的条件控制，从而增强 ID 的保真度以及文本的控制力。</p>',10),i=[n];function s(p,h,d,_,l,c){return a(),e("div",null,i)}const P=t(r,[["render",s]]);export{m as __pageData,P as default};