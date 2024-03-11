import{_ as i,o,c as a,k as e,a as n,Q as t}from"./chunks/framework.2516552c.js";const r="/assets/v2-969e03621dc005db65c9b101551fea03_720w.465528fc.webp",c="/assets/image-20240218214155573.4c83eccf.png",s="/assets/image-20240218214404302.7ca868db.png",l="/assets/v2-392afe7058c21d872f205ae1f002efd5_720w.af58d750.webp",d="/assets/v2-8b15803da4c7c0891fe0d10e7b21c6cb_720w.8c448839.webp",p="/assets/v2-05bbeb412f03015deb56383529ef3f33_720w.0cafba21.webp",h="/assets/v2-dae15c46ad6eff6f0a1a8e312c8b4a6e_720w.783bcf0e.webp",u="/assets/v2-3746da7a1cf122205aef99d2ab4f1dbc_720w.7f02adf9.webp",z=JSON.parse('{"title":"Encodec","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Algorithm/99deeplab/03EmotiVoice.md","filePath":"articles/Algorithm/99deeplab/03EmotiVoice.md","lastUpdated":null}'),m={name:"articles/Algorithm/99deeplab/03EmotiVoice.md"},b=t("",45),_={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.489ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.364ex",height:"1.489ex",role:"img",focusable:"false",viewBox:"0 -442 603 658","aria-hidden":"true"},T=e("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[e("g",{"data-mml-node":"math"},[e("g",{"data-mml-node":"mi"},[e("path",{"data-c":"1D707",d:"M58 -216Q44 -216 34 -208T23 -186Q23 -176 96 116T173 414Q186 442 219 442Q231 441 239 435T249 423T251 413Q251 401 220 279T187 142Q185 131 185 107V99Q185 26 252 26Q261 26 270 27T287 31T302 38T315 45T327 55T338 65T348 77T356 88T365 100L372 110L408 253Q444 395 448 404Q461 431 491 431Q504 431 512 424T523 412T525 402L449 84Q448 79 448 68Q448 43 455 35T476 26Q485 27 496 35Q517 55 537 131Q543 151 547 152Q549 153 557 153H561Q580 153 580 144Q580 138 575 117T555 63T523 13Q510 0 491 -8Q483 -10 467 -10Q446 -10 429 -4T402 11T385 29T376 44T374 51L368 45Q362 39 350 30T324 12T288 -4T246 -11Q199 -11 153 12L129 -85Q108 -167 104 -180T92 -202Q76 -216 58 -216Z",style:{"stroke-width":"3"}})])])],-1),k=[T],E=e("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("mi",null,"μ")])],-1),f=e("li",null,"向量量化：合成速度很快，但丢弃了说话者的信息，从而导致重建质量较差。",-1),x=e("li",null,"AudioLM所采用的Encodec：压缩率非常高，可以达到320倍，将24kHz采样率的语音转换为75Hz；重建质量非常高，包含了足够多的说话者信息和声学信息，能够在重建中保持说话者的身份。Encodec除了同时满足重建质量高和压缩程度大这两大要求外，还具有一个优点：Encodec有现成的解码器能够将离散表征转换为声音波形，无需训练额外的声码器。",-1),S=t("",26);function q(Q,V,A,w,L,P){return o(),a("div",null,[b,e("ul",null,[e("li",null,[e("mjx-container",_,[(o(),a("svg",g,k)),E]),n("律变换：将每个时间步的整数值量化到256，但无法压缩序列长度。这个方法的特点就是：重建质量高、生成速度慢；")]),f,x]),S])}const D=i(m,[["render",q]]);export{z as __pageData,D as default};
