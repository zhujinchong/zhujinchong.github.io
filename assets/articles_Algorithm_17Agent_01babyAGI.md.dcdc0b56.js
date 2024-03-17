import{_ as a,o as t,c as e,Q as r}from"./chunks/framework.2516552c.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Algorithm/17Agent/01babyAGI.md","filePath":"articles/Algorithm/17Agent/01babyAGI.md","lastUpdated":null}'),n={name:"articles/Algorithm/17Agent/01babyAGI.md"},o=r('<p>参考：</p><p><a href="https://juejin.cn/post/7218815501433946173" target="_blank" rel="noreferrer">babyagi: 人工智能任务管理系统 - 掘金 (juejin.cn)</a></p><p><a href="https://github.com/yoheinakajima/babyagi/blob/main/README.md" target="_blank" rel="noreferrer">babyagi/README.md at main · yoheinakajima/babyagi (github.com)</a></p><p>背景：</p><p>BabyAGI 是 Twitter 上分享的 <a href="https://twitter.com/yoheinakajima/status/1640934493489070080?s=20" target="_blank" rel="noreferrer">Task-Driven Autonomous Agent</a>（2023 年 3 月 28 日）的精简版本。这个版本减少到 140 行：13 个注释、22 个空白和 105 个代码。为什么叫BabyAGI，因为原作者不认为只是AGI。</p><p>作者发推的时间：2023.3.29</p><p>原理：</p><p>GPT分解任务，并存储在Pinecone的队列中。按队列解决任务。直至任务不能再被分解。</p>',8),i=[o];function s(p,_,c,b,l,m){return t(),e("div",null,i)}const d=a(n,[["render",s]]);export{A as __pageData,d as default};