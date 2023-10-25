import{_ as s,o as T,c as t,k as Q,a as e,Q as a}from"./chunks/framework.2516552c.js";const X=JSON.parse('{"title":"近似推断","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Algorithm/10白板推导系列/24ApproInference.md","filePath":"articles/Algorithm/10白板推导系列/24ApproInference.md","lastUpdated":null}'),l={name:"articles/Algorithm/10白板推导系列/24ApproInference.md"},d=Q("h1",{id:"近似推断",tabindex:"-1"},[e("近似推断 "),Q("a",{class:"header-anchor",href:"#近似推断","aria-label":'Permalink to "近似推断"'},"​")],-1),m=Q("p",null,"这一讲中的近似推断具体描述在深度生成模型中的近似推断。推断的目的有下面几个部分：",-1),o=Q("ol",null,[Q("li",null,"推断本身，根据结果（观测）得到原因（隐变量）。"),Q("li",null,"为参数的学习提供帮助。")],-1),r=Q("p",null,"但是推断本身是一个困难的额任务，计算复杂度往往很高，对于无向图，由于节点之间的联系过多，那么因子分解很难进行，并且相互之间都有耦合，于是很难求解，仅仅在某些情况如 RBM 中可解，在有向图中，常常由于条件独立性问题，如两个节点之间条件相关（explain away），于是求解这些节点的条件概率就很困难，仅仅在某些概率假设情况下可解如高斯模型，于是需要近似推断。",-1),n=Q("p",null,"事实上，我们常常讲推断问题变为优化问题，即：",-1),h={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},i={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.779ex"},xmlns:"http://www.w3.org/2000/svg",width:"27.639ex",height:"4.928ex",role:"img",focusable:"false",viewBox:"0 -950 12216.3 2178.2","aria-hidden":"true"},p=a("",1),H=[p],c=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mi",null,"L"),Q("mi",null,"o"),Q("mi",null,"g"),Q("mo",null,"−"),Q("mi",null,"l"),Q("mi",null,"i"),Q("mi",null,"k"),Q("mi",null,"e"),Q("mi",null,"h"),Q("mi",null,"o"),Q("mi",null,"o"),Q("mi",null,"d"),Q("mo",null,":"),Q("munder",null,[Q("mo",{"data-mjx-texclass":"OP",movablelimits:"false"},"∑"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"v"),Q("mo",null,"∈"),Q("mi",null,"V")])]),Q("mi",null,"log"),Q("mo",{"data-mjx-texclass":"NONE"},"⁡"),Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"v"),Q("mo",{stretchy:"false"},")")])],-1),g=Q("p",null,"对上面这个问题，由于：",-1),L={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.172ex"},xmlns:"http://www.w3.org/2000/svg",width:"47.393ex",height:"5.475ex",role:"img",focusable:"false",viewBox:"0 -1460 20947.6 2420","aria-hidden":"true"},w=a("",1),y=[w],M=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mi",null,"log"),Q("mo",{"data-mjx-texclass":"NONE"},"⁡"),Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"v"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"="),Q("mi",null,"log"),Q("mo",{"data-mjx-texclass":"NONE"},"⁡"),Q("mfrac",null,[Q("mrow",null,[Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"v"),Q("mo",null,","),Q("mi",null,"h"),Q("mo",{stretchy:"false"},")")]),Q("mrow",null,[Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"h"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"v"),Q("mo",{stretchy:"false"},")")])]),Q("mo",null,"="),Q("mi",null,"log"),Q("mo",{"data-mjx-texclass":"NONE"},"⁡"),Q("mfrac",null,[Q("mrow",null,[Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"v"),Q("mo",null,","),Q("mi",null,"h"),Q("mo",{stretchy:"false"},")")]),Q("mrow",null,[Q("mi",null,"q"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"h"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"v"),Q("mo",{stretchy:"false"},")")])]),Q("mo",null,"+"),Q("mi",null,"log"),Q("mo",{"data-mjx-texclass":"NONE"},"⁡"),Q("mfrac",null,[Q("mrow",null,[Q("mi",null,"q"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"h"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"v"),Q("mo",{stretchy:"false"},")")]),Q("mrow",null,[Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"h"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"v"),Q("mo",{stretchy:"false"},")")])])])],-1),Z={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.303ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 576 705","aria-hidden":"true"},u=Q("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[Q("g",{"data-mml-node":"math"},[Q("g",{"data-mml-node":"mi"},[Q("path",{"data-c":"210E",d:"M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z",style:{"stroke-width":"3"}})])])],-1),x=[u],V=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",null,"h")])],-1),_={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},D={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.046ex"},xmlns:"http://www.w3.org/2000/svg",width:"30.234ex",height:"5.125ex",role:"img",focusable:"false",viewBox:"0 -1361 13363.3 2265.1","aria-hidden":"true"},v=a("",1),b=[v],C=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("msub",null,[Q("mo",{"data-mjx-texclass":"OP"},"∫"),Q("mi",null,"h")]),Q("mi",null,"log"),Q("mo",{"data-mjx-texclass":"NONE"},"⁡"),Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"v"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"⋅"),Q("mi",null,"q"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"h"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"v"),Q("mo",{stretchy:"false"},")"),Q("mi",null,"d"),Q("mi",null,"h"),Q("mo",null,"="),Q("mi",null,"log"),Q("mo",{"data-mjx-texclass":"NONE"},"⁡"),Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"v"),Q("mo",{stretchy:"false"},")")])],-1),j=Q("p",null,"右边积分有：",-1),E={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},O={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.172ex"},xmlns:"http://www.w3.org/2000/svg",width:"77.498ex",height:"5.475ex",role:"img",focusable:"false",viewBox:"0 -1460 34254 2420","aria-hidden":"true"},R=a("",1),N=[R],A=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("msub",null,[Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",{mathvariant:"double-struck"},"E")]),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"q"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"h"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"v"),Q("mo",{stretchy:"false"},")")])]),Q("mo",{stretchy:"false"},"["),Q("mi",null,"log"),Q("mo",{"data-mjx-texclass":"NONE"},"⁡"),Q("mfrac",null,[Q("mrow",null,[Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"v"),Q("mo",null,","),Q("mi",null,"h"),Q("mo",{stretchy:"false"},")")]),Q("mrow",null,[Q("mi",null,"q"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"h"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"v"),Q("mo",{stretchy:"false"},")")])]),Q("mo",{stretchy:"false"},"]"),Q("mo",null,"+"),Q("mi",null,"K"),Q("mi",null,"L"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"q"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"h"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"v"),Q("mo",{stretchy:"false"},")"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"h"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"v"),Q("mo",{stretchy:"false"},")"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"="),Q("msub",null,[Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",{mathvariant:"double-struck"},"E")]),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"q"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"h"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"v"),Q("mo",{stretchy:"false"},")")])]),Q("mo",{stretchy:"false"},"["),Q("mi",null,"log"),Q("mo",{"data-mjx-texclass":"NONE"},"⁡"),Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"v"),Q("mo",null,","),Q("mi",null,"h"),Q("mo",{stretchy:"false"},")"),Q("mo",{stretchy:"false"},"]"),Q("mo",null,"+"),Q("mi",null,"H"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"q"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"+"),Q("mi",null,"K"),Q("mi",null,"L"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"q"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"p"),Q("mo",{stretchy:"false"},")")])],-1),B=Q("p",null,"其中前两项是 ELBO，于是这就变成一个优化 ELBO 的问题。",-1);function S(P,F,I,q,J,z){return T(),t("div",null,[d,m,o,r,n,Q("mjx-container",h,[(T(),t("svg",i,H)),c]),g,Q("mjx-container",L,[(T(),t("svg",f,y)),M]),Q("p",null,[e("左右两边对 "),Q("mjx-container",Z,[(T(),t("svg",k,x)),V]),e(" 积分：")]),Q("mjx-container",_,[(T(),t("svg",D,b)),C]),j,Q("mjx-container",E,[(T(),t("svg",O,N)),A]),B])}const $=s(l,[["render",S]]);export{X as __pageData,$ as default};
