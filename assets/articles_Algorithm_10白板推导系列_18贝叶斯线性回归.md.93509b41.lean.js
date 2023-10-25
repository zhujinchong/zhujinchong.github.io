import{_ as l,o as T,c as t,k as Q,a as e,Q as a}from"./chunks/framework.2516552c.js";const l2=JSON.parse('{"title":"贝叶斯线性回归","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Algorithm/10白板推导系列/18贝叶斯线性回归.md","filePath":"articles/Algorithm/10白板推导系列/18贝叶斯线性回归.md","lastUpdated":null}'),m={name:"articles/Algorithm/10白板推导系列/18贝叶斯线性回归.md"},s=Q("h1",{id:"贝叶斯线性回归",tabindex:"-1"},[e("贝叶斯线性回归 "),Q("a",{class:"header-anchor",href:"#贝叶斯线性回归","aria-label":'Permalink to "贝叶斯线性回归"'},"​")],-1),d=Q("p",null,"我们知道，线性回归当噪声为高斯分布的时候，最小二乘损失导出的结果相当于对概率模型应用 MLE。引入参数的先验时，先验分布是高斯分布，那么 MAP的结果相当于岭回归的正则化；如果先验是拉普拉斯分布，那么相当于 Lasso 的正则化。这两种方案都是点估计方法（频率派）。我们希望利用贝叶斯方法来求解参数的后验分布。",-1),o=Q("p",null,"线性回归的模型假设为：",-1),n={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},r={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-3.819ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.463ex",height:"8.768ex",role:"img",focusable:"false",viewBox:"0 -2187.8 5508.8 3875.6","aria-hidden":"true"},h=a("",1),i=[h],p=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mtable",{displaystyle:"true",columnalign:"right",columnspacing:"",rowspacing:"3pt"},[Q("mtr",null,[Q("mtd",null,[Q("mi",null,"f"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"x"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"="),Q("msup",null,[Q("mi",null,"w"),Q("mi",null,"T")]),Q("mi",null,"x")])]),Q("mtr",null,[Q("mtd",null,[Q("mi",null,"y"),Q("mo",null,"="),Q("mi",null,"f"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"x"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"+"),Q("mi",null,"ε")])]),Q("mtr",null,[Q("mtd",null,[Q("mi",null,"ε"),Q("mo",null,"∼"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",{"data-mjx-variant":"-tex-calligraphic",mathvariant:"script"},"N")]),Q("mo",{stretchy:"false"},"("),Q("mn",null,"0"),Q("mo",null,","),Q("msup",null,[Q("mi",null,"σ"),Q("mn",null,"2")]),Q("mo",{stretchy:"false"},")")])])])])],-1),g=Q("p",null,"在贝叶斯方法中，需要解决推断和预测两个问题。",-1),H=Q("h2",{id:"推断",tabindex:"-1"},[e("推断 "),Q("a",{class:"header-anchor",href:"#推断","aria-label":'Permalink to "推断"'},"​")],-1),c=Q("p",null,"引入高斯先验：",-1),L={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},u={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.65ex"},xmlns:"http://www.w3.org/2000/svg",width:"16.274ex",height:"2.435ex",role:"img",focusable:"false",viewBox:"0 -789 7192.9 1076.2","aria-hidden":"true"},w=a("",1),f=[w],y=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"w"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"="),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",{"data-mjx-variant":"-tex-calligraphic",mathvariant:"script"},"N")]),Q("mo",{stretchy:"false"},"("),Q("mn",null,"0"),Q("mo",null,","),Q("msub",null,[Q("mi",{mathvariant:"normal"},"Σ"),Q("mi",null,"p")]),Q("mo",{stretchy:"false"},")")])],-1),x=Q("p",null,"对参数的后验分布进行推断：",-1),M={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.423ex"},xmlns:"http://www.w3.org/2000/svg",width:"49.074ex",height:"5.726ex",role:"img",focusable:"false",viewBox:"0 -1460 21690.8 2531","aria-hidden":"true"},V=a("",1),Z=[V],_=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"w"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"X"),Q("mo",null,","),Q("mi",null,"Y"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"="),Q("mfrac",null,[Q("mrow",null,[Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"w"),Q("mo",null,","),Q("mi",null,"Y"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"X"),Q("mo",{stretchy:"false"},")")]),Q("mrow",null,[Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"Y"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"X"),Q("mo",{stretchy:"false"},")")])]),Q("mo",null,"="),Q("mfrac",null,[Q("mrow",null,[Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"Y"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"w"),Q("mo",null,","),Q("mi",null,"X"),Q("mo",{stretchy:"false"},")"),Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"w"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"X"),Q("mo",{stretchy:"false"},")")]),Q("mrow",null,[Q("mo",{"data-mjx-texclass":"OP"},"∫"),Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"Y"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"w"),Q("mo",null,","),Q("mi",null,"X"),Q("mo",{stretchy:"false"},")"),Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"w"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"X"),Q("mo",{stretchy:"false"},")"),Q("mi",null,"d"),Q("mi",null,"w")])])])],-1),D={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},b={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"14.61ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 6457.6 1000","aria-hidden":"true"},v=a("",1),j=[v],C=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"w"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"X"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"="),Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"w"),Q("mo",{stretchy:"false"},")")])],-1),R={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},A={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.819ex"},xmlns:"http://www.w3.org/2000/svg",width:"41.171ex",height:"6.74ex",role:"img",focusable:"false",viewBox:"0 -1733 18197.6 2978.9","aria-hidden":"true"},O=a("",1),S=[O],X=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"w"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"X"),Q("mo",null,","),Q("mi",null,"Y"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"∝"),Q("munderover",null,[Q("mo",{"data-mjx-texclass":"OP",movablelimits:"false"},"∏"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"i"),Q("mo",null,"="),Q("mn",null,"1")]),Q("mi",null,"N")]),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",{"data-mjx-variant":"-tex-calligraphic",mathvariant:"script"},"N")]),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"i")]),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("msup",null,[Q("mi",null,"w"),Q("mi",null,"T")]),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"i")]),Q("mo",null,","),Q("msup",null,[Q("mi",null,"σ"),Q("mn",null,"2")]),Q("mo",{stretchy:"false"},")"),Q("mo",null,"⋅"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",{"data-mjx-variant":"-tex-calligraphic",mathvariant:"script"},"N")]),Q("mo",{stretchy:"false"},"("),Q("mn",null,"0"),Q("mo",null,","),Q("msub",null,[Q("mi",{mathvariant:"normal"},"Σ"),Q("mi",null,"p")]),Q("mo",{stretchy:"false"},")")])],-1),B=Q("p",null,"高斯分布取高斯先验的共轭分布依然是高斯分布，于是可以得到后验分布也是一个高斯分布。第一项：",-1),E={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},P={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-7.448ex"},xmlns:"http://www.w3.org/2000/svg",width:"68.458ex",height:"16.027ex",role:"img",focusable:"false",viewBox:"0 -3792.1 30258.5 7084.1","aria-hidden":"true"},N=a("",1),I=[N],Y=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mtable",{displaystyle:"true",columnalign:"right left",columnspacing:"0em",rowspacing:"3pt"},[Q("mtr",null,[Q("mtd",null,[Q("munderover",null,[Q("mo",{"data-mjx-texclass":"OP",movablelimits:"false"},"∏"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"i"),Q("mo",null,"="),Q("mn",null,"1")]),Q("mi",null,"N")]),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",{"data-mjx-variant":"-tex-calligraphic",mathvariant:"script"},"N")]),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"i")]),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("msup",null,[Q("mi",null,"w"),Q("mi",null,"T")]),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"i")]),Q("mo",null,","),Q("msup",null,[Q("mi",null,"σ"),Q("mn",null,"2")]),Q("mo",{stretchy:"false"},")")]),Q("mtd",null,[Q("mi"),Q("mo",null,"="),Q("mfrac",null,[Q("mn",null,"1"),Q("mrow",null,[Q("mo",{stretchy:"false"},"("),Q("mn",null,"2"),Q("mi",null,"π"),Q("msup",null,[Q("mo",{stretchy:"false"},")"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"N"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"/")]),Q("mn",null,"2")])]),Q("msup",null,[Q("mi",null,"σ"),Q("mi",null,"N")])])]),Q("mi",null,"exp"),Q("mo",{"data-mjx-texclass":"NONE"},"⁡"),Q("mo",{stretchy:"false"},"("),Q("mo",null,"−"),Q("mfrac",null,[Q("mn",null,"1"),Q("mrow",null,[Q("mn",null,"2"),Q("msup",null,[Q("mi",null,"σ"),Q("mn",null,"2")])])]),Q("munderover",null,[Q("mo",{"data-mjx-texclass":"OP",movablelimits:"false"},"∑"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"i"),Q("mo",null,"="),Q("mn",null,"1")]),Q("mi",null,"N")]),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"y"),Q("mi",null,"i")]),Q("mo",null,"−"),Q("msup",null,[Q("mi",null,"w"),Q("mi",null,"T")]),Q("msub",null,[Q("mi",null,"x"),Q("mi",null,"i")]),Q("msup",null,[Q("mo",{stretchy:"false"},")"),Q("mn",null,"2")]),Q("mo",{stretchy:"false"},")")])]),Q("mtr",null,[Q("mtd"),Q("mtd",null,[Q("mi"),Q("mo",null,"="),Q("mfrac",null,[Q("mn",null,"1"),Q("mrow",null,[Q("mo",{stretchy:"false"},"("),Q("mn",null,"2"),Q("mi",null,"π"),Q("msup",null,[Q("mo",{stretchy:"false"},")"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",null,"N"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"/")]),Q("mn",null,"2")])]),Q("msup",null,[Q("mi",null,"σ"),Q("mi",null,"N")])])]),Q("mi",null,"exp"),Q("mo",{"data-mjx-texclass":"NONE"},"⁡"),Q("mo",{stretchy:"false"},"("),Q("mo",null,"−"),Q("mfrac",null,[Q("mn",null,"1"),Q("mn",null,"2")]),Q("mo",{stretchy:"false"},"("),Q("mi",null,"Y"),Q("mo",null,"−"),Q("mi",null,"X"),Q("mi",null,"w"),Q("msup",null,[Q("mo",{stretchy:"false"},")"),Q("mi",null,"T")]),Q("mo",{stretchy:"false"},"("),Q("msup",null,[Q("mi",null,"σ"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"−"),Q("mn",null,"2")])]),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",{mathvariant:"double-struck"},"I")]),Q("mo",{stretchy:"false"},")"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"Y"),Q("mo",null,"−"),Q("mi",null,"X"),Q("mi",null,"w"),Q("mo",{stretchy:"false"},")"),Q("mo",{stretchy:"false"},")")])]),Q("mtr",null,[Q("mtd"),Q("mtd",null,[Q("mi"),Q("mo",null,"="),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",{"data-mjx-variant":"-tex-calligraphic",mathvariant:"script"},"N")]),Q("mo",{stretchy:"false"},"("),Q("mi",null,"X"),Q("mi",null,"w"),Q("mo",null,","),Q("msup",null,[Q("mi",null,"σ"),Q("mn",null,"2")]),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",{mathvariant:"double-struck"},"I")]),Q("mo",{stretchy:"false"},")")])])])])],-1),J=Q("p",null,"代入上面的式子：",-1),z={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},G={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.654ex"},xmlns:"http://www.w3.org/2000/svg",width:"62.837ex",height:"4.69ex",role:"img",focusable:"false",viewBox:"0 -1342 27774.1 2072.9","aria-hidden":"true"},F=a("",1),$=[F],U=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"w"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"X"),Q("mo",null,","),Q("mi",null,"Y"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"∝"),Q("mi",null,"exp"),Q("mo",{"data-mjx-texclass":"NONE"},"⁡"),Q("mo",{stretchy:"false"},"("),Q("mo",null,"−"),Q("mfrac",null,[Q("mn",null,"1"),Q("mrow",null,[Q("mn",null,"2"),Q("msup",null,[Q("mi",null,"σ"),Q("mn",null,"2")])])]),Q("mo",{stretchy:"false"},"("),Q("mi",null,"Y"),Q("mo",null,"−"),Q("mi",null,"X"),Q("mi",null,"w"),Q("msup",null,[Q("mo",{stretchy:"false"},")"),Q("mi",null,"T")]),Q("msup",null,[Q("mi",null,"σ"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"−"),Q("mn",null,"2")])]),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",{mathvariant:"double-struck"},"I")]),Q("mo",{stretchy:"false"},"("),Q("mi",null,"Y"),Q("mo",null,"−"),Q("mi",null,"X"),Q("mi",null,"w"),Q("mo",{stretchy:"false"},")"),Q("mo",null,"−"),Q("mfrac",null,[Q("mn",null,"1"),Q("mn",null,"2")]),Q("msup",null,[Q("mi",null,"w"),Q("mi",null,"T")]),Q("msubsup",null,[Q("mi",{mathvariant:"normal"},"Σ"),Q("mi",null,"p"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"−"),Q("mn",null,"1")])]),Q("mi",null,"w"),Q("mo",{stretchy:"false"},")")])],-1),q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},K={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"10.645ex",height:"2.351ex",role:"img",focusable:"false",viewBox:"0 -789 4705.2 1039","aria-hidden":"true"},W=a("",1),Q1=[W],T1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",{"data-mjx-variant":"-tex-calligraphic",mathvariant:"script"},"N")]),Q("mo",{stretchy:"false"},"("),Q("msub",null,[Q("mi",null,"μ"),Q("mi",null,"w")]),Q("mo",null,","),Q("msub",null,[Q("mi",{mathvariant:"normal"},"Σ"),Q("mi",null,"w")]),Q("mo",{stretchy:"false"},")")])],-1),t1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},a1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.654ex"},xmlns:"http://www.w3.org/2000/svg",width:"29.317ex",height:"4.69ex",role:"img",focusable:"false",viewBox:"0 -1342 12958.3 2072.9","aria-hidden":"true"},e1=a("",1),l1=[e1],m1=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mo",null,"−"),Q("mfrac",null,[Q("mn",null,"1"),Q("mrow",null,[Q("mn",null,"2"),Q("msup",null,[Q("mi",null,"σ"),Q("mn",null,"2")])])]),Q("msup",null,[Q("mi",null,"w"),Q("mi",null,"T")]),Q("msup",null,[Q("mi",null,"X"),Q("mi",null,"T")]),Q("mi",null,"X"),Q("mi",null,"w"),Q("mo",null,"−"),Q("mfrac",null,[Q("mn",null,"1"),Q("mn",null,"2")]),Q("msup",null,[Q("mi",null,"w"),Q("mi",null,"T")]),Q("msubsup",null,[Q("mi",{mathvariant:"normal"},"Σ"),Q("mi",null,"p"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"−"),Q("mn",null,"1")])]),Q("mi",null,"w")])],-1),s1=Q("p",null,"于是：",-1),d1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},o1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.869ex"},xmlns:"http://www.w3.org/2000/svg",width:"27.038ex",height:"2.887ex",role:"img",focusable:"false",viewBox:"0 -891.7 11950.6 1275.9","aria-hidden":"true"},n1=a("",1),r1=[n1],h1=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("msubsup",null,[Q("mi",{mathvariant:"normal"},"Σ"),Q("mi",null,"w"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"−"),Q("mn",null,"1")])]),Q("mo",null,"="),Q("msup",null,[Q("mi",null,"σ"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"−"),Q("mn",null,"2")])]),Q("msup",null,[Q("mi",null,"X"),Q("mi",null,"T")]),Q("mi",null,"X"),Q("mo",null,"+"),Q("msubsup",null,[Q("mi",{mathvariant:"normal"},"Σ"),Q("mi",null,"p"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"−"),Q("mn",null,"1")])]),Q("mo",null,"="),Q("mi",null,"A")])],-1),i1=Q("p",null,"一次项：",-1),p1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},g1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.654ex"},xmlns:"http://www.w3.org/2000/svg",width:"25.522ex",height:"4.69ex",role:"img",focusable:"false",viewBox:"0 -1342 11280.6 2072.9","aria-hidden":"true"},H1=a("",1),c1=[H1],L1=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mfrac",null,[Q("mn",null,"1"),Q("mrow",null,[Q("mn",null,"2"),Q("msup",null,[Q("mi",null,"σ"),Q("mn",null,"2")])])]),Q("mn",null,"2"),Q("msup",null,[Q("mi",null,"Y"),Q("mi",null,"T")]),Q("mi",null,"X"),Q("mi",null,"w"),Q("mo",null,"="),Q("msup",null,[Q("mi",null,"σ"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"−"),Q("mn",null,"2")])]),Q("msup",null,[Q("mi",null,"Y"),Q("mi",null,"T")]),Q("mi",null,"X"),Q("mi",null,"w")])],-1),u1=Q("p",null,"于是：",-1),w1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},f1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.576ex"},xmlns:"http://www.w3.org/2000/svg",width:"39.977ex",height:"2.594ex",role:"img",focusable:"false",viewBox:"0 -891.7 17669.9 1146.5","aria-hidden":"true"},y1=a("",1),x1=[y1],M1=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("msubsup",null,[Q("mi",null,"μ"),Q("mi",null,"w"),Q("mi",null,"T")]),Q("msubsup",null,[Q("mi",{mathvariant:"normal"},"Σ"),Q("mi",null,"w"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"−"),Q("mn",null,"1")])]),Q("mo",null,"="),Q("msup",null,[Q("mi",null,"σ"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"−"),Q("mn",null,"2")])]),Q("msup",null,[Q("mi",null,"Y"),Q("mi",null,"T")]),Q("mi",null,"X"),Q("mo",{stretchy:"false"},"⇒"),Q("msub",null,[Q("mi",null,"μ"),Q("mi",null,"w")]),Q("mo",null,"="),Q("msup",null,[Q("mi",null,"σ"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"−"),Q("mn",null,"2")])]),Q("msup",null,[Q("mi",null,"A"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"−"),Q("mn",null,"1")])]),Q("msup",null,[Q("mi",null,"X"),Q("mi",null,"T")]),Q("mi",null,"Y")])],-1),k1=Q("h2",{id:"预测",tabindex:"-1"},[e("预测 "),Q("a",{class:"header-anchor",href:"#预测","aria-label":'Permalink to "预测"'},"​")],-1),V1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Z1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.282ex",height:"1.59ex",role:"img",focusable:"false",viewBox:"0 -691.8 1008.6 702.8","aria-hidden":"true"},_1=a("",1),D1=[_1],b1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("msup",null,[Q("mi",null,"x"),Q("mo",null,"∗")])])],-1),v1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},j1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.096ex",height:"2.029ex",role:"img",focusable:"false",viewBox:"0 -691.8 926.6 896.8","aria-hidden":"true"},C1=a("",1),R1=[C1],A1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("msup",null,[Q("mi",null,"y"),Q("mo",null,"∗")])])],-1),O1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},S1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.331ex",height:"2.47ex",role:"img",focusable:"false",viewBox:"0 -841.7 5892.5 1091.7","aria-hidden":"true"},X1=a("",1),B1=[X1],E1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",null,"f"),Q("mo",{stretchy:"false"},"("),Q("msup",null,[Q("mi",null,"x"),Q("mo",null,"∗")]),Q("mo",{stretchy:"false"},")"),Q("mo",null,"="),Q("msup",null,[Q("mi",null,"x"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"∗"),Q("mi",null,"T")])]),Q("mi",null,"w")])],-1),P1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},N1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"27.788ex",height:"2.47ex",role:"img",focusable:"false",viewBox:"0 -841.7 12282.4 1091.7","aria-hidden":"true"},I1=a("",1),Y1=[I1],J1=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("msup",null,[Q("mi",null,"x"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"∗"),Q("mi",null,"T")])]),Q("mi",null,"w"),Q("mo",null,"∼"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",{"data-mjx-variant":"-tex-calligraphic",mathvariant:"script"},"N")]),Q("mo",{stretchy:"false"},"("),Q("msup",null,[Q("mi",null,"x"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"∗"),Q("mi",null,"T")])]),Q("msub",null,[Q("mi",null,"μ"),Q("mi",null,"w")]),Q("mo",null,","),Q("msup",null,[Q("mi",null,"x"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"∗"),Q("mi",null,"T")])]),Q("msub",null,[Q("mi",{mathvariant:"normal"},"Σ"),Q("mi",null,"w")]),Q("msup",null,[Q("mi",null,"x"),Q("mo",null,"∗")]),Q("mo",{stretchy:"false"},")")])],-1),z1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},G1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.046ex"},xmlns:"http://www.w3.org/2000/svg",width:"108.57ex",height:"5.125ex",role:"img",focusable:"false",viewBox:"0 -1361 47988 2265.1","aria-hidden":"true"},F1=a("",1),$1=[F1],U1=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("msup",null,[Q("mi",null,"y"),Q("mo",null,"∗")]),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"X"),Q("mo",null,","),Q("mi",null,"Y"),Q("mo",null,","),Q("msup",null,[Q("mi",null,"x"),Q("mo",null,"∗")]),Q("mo",{stretchy:"false"},")"),Q("mo",null,"="),Q("msub",null,[Q("mo",{"data-mjx-texclass":"OP"},"∫"),Q("mi",null,"w")]),Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("msup",null,[Q("mi",null,"y"),Q("mo",null,"∗")]),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"w"),Q("mo",null,","),Q("mi",null,"X"),Q("mo",null,","),Q("mi",null,"Y"),Q("mo",null,","),Q("msup",null,[Q("mi",null,"x"),Q("mo",null,"∗")]),Q("mo",{stretchy:"false"},")"),Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"w"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"X"),Q("mo",null,","),Q("mi",null,"Y"),Q("mo",null,","),Q("msup",null,[Q("mi",null,"x"),Q("mo",null,"∗")]),Q("mo",{stretchy:"false"},")"),Q("mi",null,"d"),Q("mi",null,"w"),Q("mo",null,"="),Q("msub",null,[Q("mo",{"data-mjx-texclass":"OP"},"∫"),Q("mi",null,"w")]),Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("msup",null,[Q("mi",null,"y"),Q("mo",null,"∗")]),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"w"),Q("mo",null,","),Q("msup",null,[Q("mi",null,"x"),Q("mo",null,"∗")]),Q("mo",{stretchy:"false"},")"),Q("mi",null,"p"),Q("mo",{stretchy:"false"},"("),Q("mi",null,"w"),Q("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),Q("mi",null,"X"),Q("mo",null,","),Q("mi",null,"Y"),Q("mo",{stretchy:"false"},")"),Q("mi",null,"d"),Q("mi",null,"w"),Q("mspace",{linebreak:"newline"}),Q("mo",null,"="),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mi",{"data-mjx-variant":"-tex-calligraphic",mathvariant:"script"},"N")]),Q("mo",{stretchy:"false"},"("),Q("msup",null,[Q("mi",null,"x"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"∗"),Q("mi",null,"T")])]),Q("msub",null,[Q("mi",null,"μ"),Q("mi",null,"w")]),Q("mo",null,","),Q("msup",null,[Q("mi",null,"x"),Q("mrow",{"data-mjx-texclass":"ORD"},[Q("mo",null,"∗"),Q("mi",null,"T")])]),Q("msub",null,[Q("mi",{mathvariant:"normal"},"Σ"),Q("mi",null,"w")]),Q("msup",null,[Q("mi",null,"x"),Q("mo",null,"∗")]),Q("mo",null,"+"),Q("msup",null,[Q("mi",null,"σ"),Q("mn",null,"2")]),Q("mo",{stretchy:"false"},")")])],-1);function q1(K1,W1,Q2,T2,t2,a2){return T(),t("div",null,[s,d,o,Q("mjx-container",n,[(T(),t("svg",r,i)),p]),g,H,c,Q("mjx-container",L,[(T(),t("svg",u,f)),y]),x,Q("mjx-container",M,[(T(),t("svg",k,Z)),_]),Q("p",null,[e("分母和参数无关，由于 "),Q("mjx-container",D,[(T(),t("svg",b,j)),C]),e("，代入先验得到：")]),Q("mjx-container",R,[(T(),t("svg",A,S)),X]),B,Q("mjx-container",E,[(T(),t("svg",P,I)),Y]),J,Q("mjx-container",z,[(T(),t("svg",G,$)),U]),Q("p",null,[e("假定最后得到的高斯分布为："),Q("mjx-container",q,[(T(),t("svg",K,Q1)),T1]),e("。对于上面的分布，采用配方的方式来得到最终的分布，指数上面的二次项为：")]),Q("mjx-container",t1,[(T(),t("svg",a1,l1)),m1]),s1,Q("mjx-container",d1,[(T(),t("svg",o1,r1)),h1]),i1,Q("mjx-container",p1,[(T(),t("svg",g1,c1)),L1]),u1,Q("mjx-container",w1,[(T(),t("svg",f1,x1)),M1]),k1,Q("p",null,[e("给定一个 "),Q("mjx-container",V1,[(T(),t("svg",Z1,D1)),b1]),e("，求解 "),Q("mjx-container",v1,[(T(),t("svg",j1,R1)),A1]),e("，所以 "),Q("mjx-container",O1,[(T(),t("svg",S1,B1)),E1]),e("，代入参数后验，有 "),Q("mjx-container",P1,[(T(),t("svg",N1,Y1)),J1]),e("，添上噪声项：")]),Q("mjx-container",z1,[(T(),t("svg",G1,$1)),U1])])}const m2=l(m,[["render",q1]]);export{l2 as __pageData,m2 as default};
