import{_ as s,o as e,c as a,k as t,a as Q,Q as T}from"./chunks/framework.2516552c.js";const l="/assets/20200510174301321.f94d24a1.jpg",P1=JSON.parse('{"title":"机器学习和深度学习关系","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Algorithm/10白板推导系列/01介绍.md","filePath":"articles/Algorithm/10白板推导系列/01介绍.md","lastUpdated":null}'),o={name:"articles/Algorithm/10白板推导系列/01介绍.md"},n=T("",7),r={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},i={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.009ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 888 683","aria-hidden":"true"},d=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",style:{"stroke-width":"3"}})])])],-1),m=[d],h=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"N")])],-1),c={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.439ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.138ex",height:"1.439ex",role:"img",focusable:"false",viewBox:"0 -442 503 636","aria-hidden":"true"},x=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D45D",d:"M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",style:{"stroke-width":"3"}})])])],-1),g=[x],w=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"p")])],-1),u={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.882ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2600 1000","aria-hidden":"true"},H=T("",1),f=[H],M=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"p"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"θ"),t("mo",{stretchy:"false"},")")])],-1),L=t("h2",{id:"频率派的观点",tabindex:"-1"},[Q("频率派的观点 "),t("a",{class:"header-anchor",href:"#频率派的观点","aria-label":'Permalink to "频率派的观点"'},"​")],-1),y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},k={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.882ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2600 1000","aria-hidden":"true"},Z=T("",1),b=[Z],v=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"p"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"θ"),t("mo",{stretchy:"false"},")")])],-1),D={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},V={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.061ex",height:"1.618ex",role:"img",focusable:"false",viewBox:"0 -705 469 715","aria-hidden":"true"},j=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D703",d:"M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z",style:{"stroke-width":"3"}})])])],-1),C=[j],A=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"θ")])],-1),S={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},$={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.009ex",height:"1.545ex",role:"img",focusable:"false",viewBox:"0 -683 888 683","aria-hidden":"true"},P=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D441",d:"M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",style:{"stroke-width":"3"}})])])],-1),O=[P],X=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"N")])],-1),R={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},N={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"18.668ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 8251.2 1000","aria-hidden":"true"},E=T("",1),B=[E],I=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"p"),t("mo",{stretchy:"false"},"("),t("mi",null,"X"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"θ"),t("mo",{stretchy:"false"},")"),t("mo",null,"="),t("mo",{"data-mjx-texclass":"OP"},"∏"),t("mi",null,"p"),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"x"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"i")])]),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"θ"),t("mo",{stretchy:"false"},")")])],-1),z={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},J={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.061ex",height:"1.618ex",role:"img",focusable:"false",viewBox:"0 -705 469 715","aria-hidden":"true"},G=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D703",d:"M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z",style:{"stroke-width":"3"}})])])],-1),F=[G],Y=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"θ")])],-1),q={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},U={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.212ex"},xmlns:"http://www.w3.org/2000/svg",width:"50.569ex",height:"4.361ex",role:"img",focusable:"false",viewBox:"0 -950 22351.7 1927.6","aria-hidden":"true"},K=T("",1),W=[K],t1=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("msub",null,[t("mi",null,"θ"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"M"),t("mi",null,"L"),t("mi",null,"E")])]),t("mo",null,"="),t("munder",null,[t("mrow",{"data-mjx-texclass":"OP"},[t("mi",null,"a"),t("mi",null,"r"),t("mi",null,"g"),t("mi",null,"m"),t("mi",null,"a"),t("mi",null,"x")]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"θ")])]),t("mo",{"data-mjx-texclass":"NONE"},"⁡"),t("mi",null,"log"),t("mo",{"data-mjx-texclass":"NONE"},"⁡"),t("mi",null,"p"),t("mo",{stretchy:"false"},"("),t("mi",null,"X"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"θ"),t("mo",{stretchy:"false"},")"),t("munder",null,[t("mrow",{"data-mjx-texclass":"OP"},[t("mo",null,"=")]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"i"),t("mi",null,"i"),t("mi",null,"d")])]),t("mo",{"data-mjx-texclass":"NONE"},"⁡"),t("munder",null,[t("mrow",{"data-mjx-texclass":"OP"},[t("mi",null,"a"),t("mi",null,"r"),t("mi",null,"g"),t("mi",null,"m"),t("mi",null,"a"),t("mi",null,"x")]),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"θ")])]),t("mo",{"data-mjx-texclass":"NONE"},"⁡"),t("mo",{"data-mjx-texclass":"OP"},"∑"),t("mi",null,"log"),t("mo",{"data-mjx-texclass":"NONE"},"⁡"),t("mi",null,"p"),t("mo",{stretchy:"false"},"("),t("msub",null,[t("mi",null,"x"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mi",null,"i")])]),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"θ"),t("mo",{stretchy:"false"},")")])],-1),Q1=t("p",null,"其中iid表示独立同分布。",-1),e1=t("p",null,"频率派认为问题是优化问题：如回归最小二乘、梯度下降；SVM；EM",-1),a1=t("h2",{id:"贝叶斯派的观点",tabindex:"-1"},[Q("贝叶斯派的观点 "),t("a",{class:"header-anchor",href:"#贝叶斯派的观点","aria-label":'Permalink to "贝叶斯派的观点"'},"​")],-1),T1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},s1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"5.882ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2600 1000","aria-hidden":"true"},l1=T("",1),o1=[l1],n1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"p"),t("mo",{stretchy:"false"},"("),t("mi",null,"x"),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"θ"),t("mo",{stretchy:"false"},")")])],-1),r1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},i1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.061ex",height:"1.618ex",role:"img",focusable:"false",viewBox:"0 -705 469 715","aria-hidden":"true"},d1=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D703",d:"M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z",style:{"stroke-width":"3"}})])])],-1),m1=[d1],h1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"θ")])],-1),c1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.023ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.061ex",height:"1.618ex",role:"img",focusable:"false",viewBox:"0 -705 469 715","aria-hidden":"true"},x1=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D703",d:"M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z",style:{"stroke-width":"3"}})])])],-1),g1=[x1],w1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"θ")])],-1),u1={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},_1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.037ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 3552.6 1000","aria-hidden":"true"},H1=T("",1),f1=[H1],M1=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"θ"),t("mo",null,"∼"),t("mi",null,"p"),t("mo",{stretchy:"false"},"("),t("mi",null,"θ"),t("mo",{stretchy:"false"},")")])],-1),L1={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},y1={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.452ex"},xmlns:"http://www.w3.org/2000/svg",width:"1168.326ex",height:"2.149ex",role:"img",focusable:"false",viewBox:"0 -750 516400 950","aria-hidden":"true"},k1=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"merror","data-mjx-error":"You can't use 'macro parameter character #' in math mode",title:"You can't use 'macro parameter character #' in math mode"},[t("rect",{"data-background":"true",width:"516400",height:"950",y:"-200",style:{fill:"yellow",stroke:"none"}}),t("title",null,"You can't use 'macro parameter character #' in math mode"),t("g",{"data-mml-node":"mtext",style:{fill:"red",stroke:"red","font-family":"serif"}},[t("text",{"data-variant":"-explicitFont",transform:"scale(1,-1)","font-size":"884px"}," p(\\theta|X)=\\frac{p(X|\\theta)\\cdot p(\\theta)}{p(X)}=\\frac{p(X|\\theta)\\cdot p(\\theta)}{\\int\\limits _{\\theta}p(X|\\theta)\\cdot p(\\theta)d\\theta} $$ 为了求 $\\theta$ 的值，我们要最大化这个参数后验MAP： $$ \\theta_{MAP}=\\mathop{argmax}\\limits _{\\theta}p(\\theta|X)=\\mathop{argmax}\\limits _{\\theta}p(X|\\theta)\\cdot p(\\theta) $$， 其中第二个等号是由于分母和 $\\theta$ 没有关系。 得到了参数的后验分布后，我们可以将这个分布用于贝叶斯预测： $$ p(x_{new}|X)=\\int_{\\theta}p(x_{new}, \\theta | X) d\\theta=\\int\\limits_{\\theta}p(x_{new}|\\theta) p(\\theta|X)d\\theta $$ ，其中将$\\theta$作为中间桥梁。 贝叶斯派认为问题是积分问题，求后验是推断问题，之后再进行决策（预测）： ## 小结 频率派和贝叶斯派分别给出了一系列的机器学习算法。频率派的观点导出了一系列的统计机器学习算法，而贝叶斯派导出了概率图理论。在应用频率派的 MLE 方法时最优化理论占有重要地位（损失函数），而贝叶斯派的算法无论是后验概率的建模还是应用这个后验进行推断时积分占有重要地位（MCMC采样求积分）。 ")])])])],-1),Z1=[k1],b1=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("merror",{"data-mjx-error":"You can't use 'macro parameter character #' in math mode",title:"You can't use 'macro parameter character #' in math mode"},[t("mtext",null," p(\\theta|X)=\\frac{p(X|\\theta)\\cdot p(\\theta)}{p(X)}=\\frac{p(X|\\theta)\\cdot p(\\theta)}{\\int\\limits _{\\theta}p(X|\\theta)\\cdot p(\\theta)d\\theta} $$ 为了求 $\\theta$ 的值，我们要最大化这个参数后验MAP： $$ \\theta_{MAP}=\\mathop{argmax}\\limits _{\\theta}p(\\theta|X)=\\mathop{argmax}\\limits _{\\theta}p(X|\\theta)\\cdot p(\\theta) $$， 其中第二个等号是由于分母和 $\\theta$ 没有关系。 得到了参数的后验分布后，我们可以将这个分布用于贝叶斯预测： $$ p(x_{new}|X)=\\int_{\\theta}p(x_{new}, \\theta | X) d\\theta=\\int\\limits_{\\theta}p(x_{new}|\\theta) p(\\theta|X)d\\theta $$ ，其中将$\\theta$作为中间桥梁。 贝叶斯派认为问题是积分问题，求后验是推断问题，之后再进行决策（预测）： ## 小结 频率派和贝叶斯派分别给出了一系列的机器学习算法。频率派的观点导出了一系列的统计机器学习算法，而贝叶斯派导出了概率图理论。在应用频率派的 MLE 方法时最优化理论占有重要地位（损失函数），而贝叶斯派的算法无论是后验概率的建模还是应用这个后验进行推断时积分占有重要地位（MCMC采样求积分）。 ")])])],-1);function v1(D1,V1,j1,C1,A1,S1){return e(),a("div",null,[n,t("p",null,[Q("对概率的诠释有两大学派，一种是频率派另一种是贝叶斯派。"),t("mjx-container",r,[(e(),a("svg",i,m)),h]),Q(" 个样本，"),t("mjx-container",c,[(e(),a("svg",p,g)),w]),Q(" 维的数据集表示： $$ X_{N\\times p}=(x_{1},x_{2},\\cdots,x_{N})^{T},x_{i}=(x_{i1},x_{i2},\\cdots,x_{ip}) $$ ，其中每个观测都是由 "),t("mjx-container",u,[(e(),a("svg",_,f)),M]),Q(" 生成的。")]),L,t("p",null,[t("mjx-container",y,[(e(),a("svg",k,b)),v]),Q("中的 "),t("mjx-container",D,[(e(),a("svg",V,C)),A]),Q(" 是一个常量。对于 "),t("mjx-container",S,[(e(),a("svg",$,O)),X]),Q(" 个观测来说观测集的概率为 "),t("mjx-container",R,[(e(),a("svg",N,B)),I]),Q(" 。为了求 "),t("mjx-container",z,[(e(),a("svg",J,F)),Y]),Q(" 的大小，我们采用最大对数似然MLE的方法：")]),t("mjx-container",q,[(e(),a("svg",U,W)),t1]),Q1,e1,a1,t("p",null,[Q("贝叶斯派认为 "),t("mjx-container",T1,[(e(),a("svg",s1,o1)),n1]),Q(" 中的 "),t("mjx-container",r1,[(e(),a("svg",i1,m1)),h1]),Q(" 不是一个常量。这个 "),t("mjx-container",c1,[(e(),a("svg",p1,g1)),w1]),Q(" 满足一个预设的先验的分布 "),t("mjx-container",u1,[(e(),a("svg",_1,f1)),M1]),Q(" 。于是根据贝叶斯定理依赖观测集参数的后验可以写成：")]),t("mjx-container",L1,[(e(),a("svg",y1,Z1)),b1])])}const O1=s(o,[["render",v1]]);export{P1 as __pageData,O1 as default};
