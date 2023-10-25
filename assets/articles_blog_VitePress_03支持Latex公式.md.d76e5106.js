import{_ as e,o as a,c as n,k as s,Q as t}from"./chunks/framework.2516552c.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/blog/VitePress/03支持Latex公式.md","filePath":"articles/blog/VitePress/03支持Latex公式.md","lastUpdated":null}'),l={name:"articles/blog/VitePress/03支持Latex公式.md"},o=t(`<p>参考：<a href="https://blog.csdn.net/delete_you/article/details/130815350" target="_blank" rel="noreferrer">https://blog.csdn.net/delete_you/article/details/130815350</a></p><p>目的：支持Latex数学公式</p><p>分析：由于目前vitepress最新版依旧采用markdown-it作为md渲染库，默认并不支持latex语法，所以我们需要将其替换为另一个渲染库才可以。</p><p>这里使用最新的 <code>markdown-it-mathjax3</code> 作为渲染库。</p><p>先安装。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install markdown-it-mathjax3 -D</span></span>
<span class="line"><span style="color:#e1e4e8;">或者</span></span>
<span class="line"><span style="color:#e1e4e8;">yarn add markdown-it-mathjax3 -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install markdown-it-mathjax3 -D</span></span>
<span class="line"><span style="color:#24292e;">或者</span></span>
<span class="line"><span style="color:#24292e;">yarn add markdown-it-mathjax3 -D</span></span></code></pre></div><p>打开文件夹 <code>.vitepress/config.js</code> 添加如下代码即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import mathjax3 from &quot;markdown-it-mathjax3&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const customElements = [</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;math&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;maction&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;maligngroup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;malignmark&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;menclose&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;merror&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mfenced&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mfrac&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mi&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mlongdiv&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mmultiscripts&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mn&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mo&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mover&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mpadded&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mphantom&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mroot&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mrow&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;ms&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mscarries&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mscarry&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mscarries&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msgroup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mlongdiv&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msline&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mspace&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msqrt&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msrow&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mstyle&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msub&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msubsup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtable&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtd&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtext&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtr&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;munder&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;munderover&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;semantics&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;math&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mi&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mn&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mo&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;ms&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mspace&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtext&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;menclose&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;merror&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mfenced&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mfrac&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mpadded&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mphantom&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mroot&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mrow&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msqrt&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mstyle&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mmultiscripts&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mover&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mprescripts&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msub&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msubsup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;munder&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;munderover&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;none&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;maligngroup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;malignmark&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtable&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtd&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mtr&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mlongdiv&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mscarries&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mscarry&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msgroup&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msline&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;msrow&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;maction&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;semantics&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;annotation&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;annotation-xml&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mjx-container&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;mjx-assistive-mml&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">];</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">	markdown: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		config: (md) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">			md.use(mathjax3);</span></span>
<span class="line"><span style="color:#e1e4e8;">		},</span></span>
<span class="line"><span style="color:#e1e4e8;">	},</span></span>
<span class="line"><span style="color:#e1e4e8;">	vue: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		template: {</span></span>
<span class="line"><span style="color:#e1e4e8;">			compilerOptions: {</span></span>
<span class="line"><span style="color:#e1e4e8;">				isCustomElement: (tag) =&gt; customElements.includes(tag),</span></span>
<span class="line"><span style="color:#e1e4e8;">			},</span></span>
<span class="line"><span style="color:#e1e4e8;">		},</span></span>
<span class="line"><span style="color:#e1e4e8;">	},</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import mathjax3 from &quot;markdown-it-mathjax3&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const customElements = [</span></span>
<span class="line"><span style="color:#24292e;">	&quot;math&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;maction&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;maligngroup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;malignmark&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;menclose&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;merror&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mfenced&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mfrac&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mi&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mlongdiv&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mmultiscripts&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mn&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mo&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mover&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mpadded&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mphantom&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mroot&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mrow&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;ms&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mscarries&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mscarry&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mscarries&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msgroup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mlongdiv&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msline&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mspace&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msqrt&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msrow&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mstyle&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msub&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msubsup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtable&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtd&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtext&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtr&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;munder&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;munderover&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;semantics&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;math&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mi&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mn&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mo&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;ms&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mspace&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtext&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;menclose&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;merror&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mfenced&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mfrac&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mpadded&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mphantom&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mroot&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mrow&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msqrt&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mstyle&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mmultiscripts&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mover&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mprescripts&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msub&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msubsup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;munder&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;munderover&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;none&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;maligngroup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;malignmark&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtable&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtd&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mtr&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mlongdiv&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mscarries&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mscarry&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msgroup&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msline&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;msrow&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mstack&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;maction&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;semantics&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;annotation&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;annotation-xml&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mjx-container&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;mjx-assistive-mml&quot;,</span></span>
<span class="line"><span style="color:#24292e;">];</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">	markdown: {</span></span>
<span class="line"><span style="color:#24292e;">		config: (md) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">			md.use(mathjax3);</span></span>
<span class="line"><span style="color:#24292e;">		},</span></span>
<span class="line"><span style="color:#24292e;">	},</span></span>
<span class="line"><span style="color:#24292e;">	vue: {</span></span>
<span class="line"><span style="color:#24292e;">		template: {</span></span>
<span class="line"><span style="color:#24292e;">			compilerOptions: {</span></span>
<span class="line"><span style="color:#24292e;">				isCustomElement: (tag) =&gt; customElements.includes(tag),</span></span>
<span class="line"><span style="color:#24292e;">			},</span></span>
<span class="line"><span style="color:#24292e;">		},</span></span>
<span class="line"><span style="color:#24292e;">	},</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>latex测试</p><blockquote><p>F = \\sum_{n=-\\infty}^{\\infty}\\left|\\mathscr{F}\\left[f(x)\\right]\\right|^{2}\\Delta x</p></blockquote>`,10),p={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},c={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-2.733ex"},xmlns:"http://www.w3.org/2000/svg",width:"23.735ex",height:"6.268ex",role:"img",focusable:"false",viewBox:"0 -1562.5 10491.1 2770.5","aria-hidden":"true"},r=t('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D439" d="M48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1026.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="munderover" transform="translate(2082.6,0)"><g data-mml-node="mo" transform="translate(393.8,0)"><path data-c="2211" d="M60 948Q63 950 665 950H1267L1325 815Q1384 677 1388 669H1348L1341 683Q1320 724 1285 761Q1235 809 1174 838T1033 881T882 898T699 902H574H543H251L259 891Q722 258 724 252Q725 250 724 246Q721 243 460 -56L196 -356Q196 -357 407 -357Q459 -357 548 -357T676 -358Q812 -358 896 -353T1063 -332T1204 -283T1307 -196Q1328 -170 1348 -124H1388Q1388 -125 1381 -145T1356 -210T1325 -294L1267 -449L666 -450Q64 -450 61 -448Q55 -446 55 -439Q55 -437 57 -433L590 177Q590 178 557 222T452 366T322 544L56 909L55 924Q55 945 60 948Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(0,-1050) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(600,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1378,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(2156,0)"><path data-c="221E" d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z" style="stroke-width:3;"></path></g></g><g data-mml-node="TeXAtom" transform="translate(762.3,1150) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="221E" d="M55 217Q55 305 111 373T254 442Q342 442 419 381Q457 350 493 303L507 284L514 294Q618 442 747 442Q833 442 888 374T944 214Q944 128 889 59T743 -11Q657 -11 580 50Q542 81 506 128L492 147L485 137Q381 -11 252 -11Q166 -11 111 57T55 217ZM907 217Q907 285 869 341T761 397Q740 397 720 392T682 378T648 359T619 335T594 310T574 285T559 263T548 246L543 238L574 198Q605 158 622 138T664 94T714 61T765 51Q827 51 867 100T907 217ZM92 214Q92 145 131 89T239 33Q357 33 456 193L425 233Q364 312 334 337Q285 380 233 380Q171 380 132 331T92 214Z" style="stroke-width:3;"></path></g></g></g><g data-mml-node="msup" transform="translate(4480.9,0)"><g data-mml-node="mrow"><g data-mml-node="mo" transform="translate(0 -0.5)"><path data-c="7C" d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" data-mjx-texclass="ORD" transform="translate(278,0)"><g data-mml-node="mi"><path data-c="2131" d="M258 428Q258 489 322 562T482 685T661 735Q726 735 824 693T977 651Q990 651 990 644Q990 639 971 612T948 581Q947 580 938 580Q878 580 784 621T617 663Q544 663 480 635T379 568T320 492T299 431Q299 387 362 387Q404 387 438 402T493 438T527 486T546 531T551 563Q551 569 550 575T549 584T549 590Q551 593 563 602T579 611Q584 611 592 605T608 584T616 548Q616 513 595 477T554 423Q518 392 464 372T349 351Q258 351 258 428ZM324 187T305 187T286 196Q286 202 301 217Q327 242 383 262T484 290L527 297L567 356Q624 441 643 467T688 521Q715 550 752 581T795 613T804 603T808 587T778 547T702 444T626 300H637Q663 302 685 306L697 308L703 317Q745 376 792 400Q806 406 818 406Q849 406 849 375Q847 355 831 338T797 312T763 296L747 290Q744 289 735 266T724 241Q722 240 702 232T664 217T645 210Q638 210 638 218Q638 224 653 246T669 270Q669 271 668 271Q663 270 624 264L607 263Q570 199 529 152Q513 133 484 106T409 45T305 -13T193 -36Q109 -36 74 -10T39 50Q39 86 64 121T128 158Q171 158 171 121Q171 97 141 83Q125 75 107 75Q93 75 80 83Q76 71 76 62Q76 29 117 15T207 0Q324 0 494 248L501 258H495Q368 239 330 195Q324 187 305 187ZM775 335Q806 358 806 368Q805 369 804 369Q800 369 791 360Q774 336 775 335Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mrow" transform="translate(1434.7,0)"><g data-mml-node="mo"><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(278,0)"><path data-c="1D453" d="M118 -162Q120 -162 124 -164T135 -167T147 -168Q160 -168 171 -155T187 -126Q197 -99 221 27T267 267T289 382V385H242Q195 385 192 387Q188 390 188 397L195 425Q197 430 203 430T250 431Q298 431 298 432Q298 434 307 482T319 540Q356 705 465 705Q502 703 526 683T550 630Q550 594 529 578T487 561Q443 561 443 603Q443 622 454 636T478 657L487 662Q471 668 457 668Q445 668 434 658T419 630Q412 601 403 552T387 469T380 433Q380 431 435 431Q480 431 487 430T498 424Q499 420 496 407T491 391Q489 386 482 386T428 385H372L349 263Q301 15 282 -47Q255 -132 212 -173Q175 -205 139 -205Q107 -205 81 -186T55 -132Q55 -95 76 -78T118 -61Q162 -61 162 -103Q162 -122 151 -136T127 -157L118 -162Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(828,0)"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1217,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(1789,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(2178,0)"><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mo" transform="translate(3890.7,0) translate(0 -0.5)"><path data-c="7C" d="M139 -249H137Q125 -249 119 -235V251L120 737Q130 750 139 750Q152 750 159 735V-235Q151 -249 141 -249H139Z" style="stroke-width:3;"></path></g></g><g data-mml-node="TeXAtom" transform="translate(4201.7,477.1) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g></g><g data-mml-node="mi" transform="translate(9086.1,0)"><path data-c="394" d="M51 0Q46 4 46 7Q46 9 215 357T388 709Q391 716 416 716Q439 716 444 709Q447 705 616 357T786 7Q786 4 781 0H51ZM507 344L384 596L137 92L383 91H630Q630 93 507 344Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(9919.1,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="stroke-width:3;"></path></g></g></g>',1),u=[r],i=s("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("mi",null,"F"),s("mo",null,"="),s("munderover",null,[s("mo",{"data-mjx-texclass":"OP"},"∑"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",null,"n"),s("mo",null,"="),s("mo",null,"−"),s("mi",{mathvariant:"normal"},"∞")]),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",{mathvariant:"normal"},"∞")])]),s("msup",null,[s("mrow",{"data-mjx-texclass":"INNER"},[s("mo",{"data-mjx-texclass":"OPEN"},"|"),s("mrow",{"data-mjx-texclass":"ORD"},[s("mi",{mathvariant:"script"},"F")]),s("mrow",{"data-mjx-texclass":"INNER"},[s("mo",{"data-mjx-texclass":"OPEN"},"["),s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"x"),s("mo",{stretchy:"false"},")"),s("mo",{"data-mjx-texclass":"CLOSE"},"]")]),s("mo",{"data-mjx-texclass":"CLOSE"},"|")]),s("mrow",{"data-mjx-texclass":"ORD"},[s("mn",null,"2")])]),s("mi",{mathvariant:"normal"},"Δ"),s("mi",null,"x")])],-1);function m(q,Q,y,d,T,h){return a(),n("div",null,[o,s("mjx-container",p,[(a(),n("svg",c,u)),i])])}const k=e(l,[["render",m]]);export{x as __pageData,k as default};
