import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.2516552c.js";const u=JSON.parse('{"title":"vLLM部署","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Algorithm/21模型部署/12QwenLLM.md","filePath":"articles/Algorithm/21模型部署/12QwenLLM.md","lastUpdated":null}'),l={name:"articles/Algorithm/21模型部署/12QwenLLM.md"},t=n(`<h1 id="vllm部署" tabindex="-1">vLLM部署 <a class="header-anchor" href="#vllm部署" aria-label="Permalink to &quot;vLLM部署&quot;">​</a></h1><p>参数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">--dtypefloat16 bfloat16</span></span>
<span class="line"><span style="color:#e1e4e8;">--max-model-len		模型支持的最大token数。一般在模型的config.json配置文件中有默认最大长度的配置。</span></span>
<span class="line"><span style="color:#e1e4e8;">--tensor-parallel-size  张量并行的数量</span></span>
<span class="line"><span style="color:#e1e4e8;">--pipeline-parallel-size 流水线并行的数量</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">--max-num-batched-tokens 每次迭代的batched的最大token数 None</span></span>
<span class="line"><span style="color:#e1e4e8;">--max-num-seqs 每次迭代的最大序列数 256</span></span>
<span class="line"><span style="color:#e1e4e8;">--max-paddings batch的最大填充数 256</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">--dtypefloat16 bfloat16</span></span>
<span class="line"><span style="color:#24292e;">--max-model-len		模型支持的最大token数。一般在模型的config.json配置文件中有默认最大长度的配置。</span></span>
<span class="line"><span style="color:#24292e;">--tensor-parallel-size  张量并行的数量</span></span>
<span class="line"><span style="color:#24292e;">--pipeline-parallel-size 流水线并行的数量</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">--max-num-batched-tokens 每次迭代的batched的最大token数 None</span></span>
<span class="line"><span style="color:#24292e;">--max-num-seqs 每次迭代的最大序列数 256</span></span>
<span class="line"><span style="color:#24292e;">--max-paddings batch的最大填充数 256</span></span></code></pre></div><h1 id="s-lora部署" tabindex="-1">S-LoRA部署 <a class="header-anchor" href="#s-lora部署" aria-label="Permalink to &quot;S-LoRA部署&quot;">​</a></h1><p><a href="https://github.com/S-LoRA/S-LoRA" target="_blank" rel="noreferrer">https://github.com/S-LoRA/S-LoRA</a></p>`,5),o=[t];function p(c,r,i,d,h,m){return s(),e("div",null,o)}const y=a(l,[["render",p]]);export{u as __pageData,y as default};
