import{_ as e,o as t,c as a,Q as r}from"./chunks/framework.2516552c.js";const f=JSON.parse('{"title":"FaskApi","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/21模型部署/02FastApi.md","filePath":"articles/算法/21模型部署/02FastApi.md","lastUpdated":1698149129000}'),s={name:"articles/算法/21模型部署/02FastApi.md"},n=r('<p>问：如何记录日志？</p><p>答：用Python中的logging模块：<a href="https://blog.csdn.net/Runner1st/article/details/96481954" target="_blank" rel="noreferrer">https://blog.csdn.net/Runner1st/article/details/96481954</a></p><p>问：如何解决跨域？</p><p>答：用FaskApi中的中间件(CORSMiddleware)：<a href="https://juejin.cn/post/7035788888450793485" target="_blank" rel="noreferrer">https://juejin.cn/post/7035788888450793485</a></p><p>问：如何流式返回结果？</p><p>答：用<em>WwebSocket</em>或<em>Server-sent Events</em> ，这里是<em>Server-sent Events</em>的实现: <a href="https://blog.csdn.net/kidom1412/article/details/130886719" target="_blank" rel="noreferrer">https://blog.csdn.net/kidom1412/article/details/130886719</a></p><p>问：是否要用异步处理？</p><p>答：<a href="https://blog.csdn.net/yyw794/article/details/108859240" target="_blank" rel="noreferrer">https://blog.csdn.net/yyw794/article/details/108859240</a></p><p>总结：</p><p>1、一步一步教你用<em>Server-sent Events</em> 实现ChatGLM2-6b接口：<a href="https://blog.csdn.net/kidom1412/article/details/130886719" target="_blank" rel="noreferrer">https://blog.csdn.net/kidom1412/article/details/130886719</a></p><p>2、用<em>Server-sent Events</em> 实现ChatGLM2-6b接口代码全：</p><h1 id="faskapi" tabindex="-1">FaskApi <a class="header-anchor" href="#faskapi" aria-label="Permalink to &quot;FaskApi&quot;">​</a></h1><p>uvicorn api:app --host &#39;192.168.1.131&#39; --port 7888</p><p>uvicorn api:app --host &#39;192.168.1.131&#39; --port 7888 --workers 2</p><p>这个包含多种微调方式，我用的其中的Lora方法：<a href="https://github.com/hiyouga/ChatGLM-Efficient-Tuning/blob/main/README_zh.md" target="_blank" rel="noreferrer">https://github.com/hiyouga/ChatGLM-Efficient-Tuning/blob/main/README_zh.md</a></p><p>这个只有QLoRA微调代码，也可以改成LoRA训练（我是直接用QLoRA训练，导致模型量化了，最后效果不好。需要改代码。）：<a href="https://github.com/shuxueslpi/chatGLM-6B-QLoRA/tree/main/data" target="_blank" rel="noreferrer">https://github.com/shuxueslpi/chatGLM-6B-QLoRA/tree/main/data</a></p>',16),p=[n];function i(o,l,c,h,d,_){return t(),a("div",null,p)}const b=e(s,[["render",i]]);export{f as __pageData,b as default};
