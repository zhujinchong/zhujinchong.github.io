import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.2516552c.js";const g=JSON.parse('{"title":"Gradio","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/21模型部署/02Gradio.md","filePath":"articles/算法/21模型部署/02Gradio.md","lastUpdated":1698149129000}'),p={name:"articles/算法/21模型部署/02Gradio.md"},l=e(`<h1 id="gradio" tabindex="-1">Gradio <a class="header-anchor" href="#gradio" aria-label="Permalink to &quot;Gradio&quot;">​</a></h1><h2 id="入门" tabindex="-1">入门 <a class="header-anchor" href="#入门" aria-label="Permalink to &quot;入门&quot;">​</a></h2><p>Gradio是一个快速demo的框架，写一个函数即可用。这篇把Gradio基本知识点全覆盖了：</p><p><a href="https://blog.csdn.net/sinat_39620217/article/details/130343655" target="_blank" rel="noreferrer">https://blog.csdn.net/sinat_39620217/article/details/130343655</a></p><h2 id="最佳性能调优" tabindex="-1">最佳性能调优 <a class="header-anchor" href="#最佳性能调优" aria-label="Permalink to &quot;最佳性能调优&quot;">​</a></h2><p>Gradio官方文档 <a href="https://gradio.app/setting-up-a-demo-for-maximum-performance/" target="_blank" rel="noreferrer">https://gradio.app/setting-up-a-demo-for-maximum-performance/</a> 中写了，如何最大化性能。</p><p>1、用<code>queue()</code></p><p>作用：</p><ul><li><p>防止post请求超时，用websockes通信</p></li><li><p>增加交互体验：预测请求的时间</p></li></ul><p>参数：concurrency_count</p><p>参数说明：并发线程数，默认是1，注意：线程越多占用内存越多</p><p>参数：max_size</p><p>参数说明：队列长度，默认None没有限制。当请求队列达到最大数量，用户会收到队列已满的提示消息，增加交互体验。</p><p>参数：api_open</p><p>参数说明：允许用户直接调用接口，而不通过队列。默认True，部署应该False。当为True时，可以通过api并发测试，此时请求不通过queue，线程最大数量不受concurrency_count限制，而受launch中的max_threads限制。</p><p>最佳实践：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">demo.queue(concurrency_count=2, max_size=100, api_open=False)</span></span>
<span class="line"><span style="color:#e1e4e8;">demo.launch(share=False, server_name=&#39;0.0.0.0&#39;, server_port=7888)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">demo.queue(concurrency_count=2, max_size=100, api_open=False)</span></span>
<span class="line"><span style="color:#24292e;">demo.launch(share=False, server_name=&#39;0.0.0.0&#39;, server_port=7888)</span></span></code></pre></div><p>2、gr.Interface中的参数</p><p>参数：batch和max_batch_size</p><p>参数说明：因为深度学习模型可以接受batch数据，所以有这个参数。注意：需要修改输入格式。</p><p>bach输入举例：</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">def</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">trim_words</span><span style="color:#E1E4E8;">(words, lengths):</span></span>
<span class="line"><span style="color:#E1E4E8;">    trimmed_words </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> w, l </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">zip</span><span style="color:#E1E4E8;">(words, lengths):</span></span>
<span class="line"><span style="color:#E1E4E8;">        trimmed_words.append(w[:</span><span style="color:#79B8FF;">int</span><span style="color:#E1E4E8;">(l)])        </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [trimmed_words]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">def</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">trim_words</span><span style="color:#24292E;">(words, lengths):</span></span>
<span class="line"><span style="color:#24292E;">    trimmed_words </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> w, l </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">zip</span><span style="color:#24292E;">(words, lengths):</span></span>
<span class="line"><span style="color:#24292E;">        trimmed_words.append(w[:</span><span style="color:#005CC5;">int</span><span style="color:#24292E;">(l)])        </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [trimmed_words]</span></span></code></pre></div><h2 id="如何记录日志" tabindex="-1">如何记录日志 <a class="header-anchor" href="#如何记录日志" aria-label="Permalink to &quot;如何记录日志&quot;">​</a></h2><p>笔记：官方不支持日志，但是可以把控制台输出以文件形式保存起来</p><p>github issue：</p><p><a href="https://github.com/gradio-app/gradio/issues/2362" target="_blank" rel="noreferrer">https://github.com/gradio-app/gradio/issues/2362</a></p><p>代码：把标准输出写入日志</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import gradio as gr</span></span>
<span class="line"><span style="color:#e1e4e8;">import sys</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Logger:</span></span>
<span class="line"><span style="color:#e1e4e8;">    def __init__(self, filename):</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.terminal = sys.stdout</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.log = open(filename, &quot;w&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    def write(self, message):</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.terminal.write(message)</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.log.write(message)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    def flush(self):</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.terminal.flush()</span></span>
<span class="line"><span style="color:#e1e4e8;">        self.log.flush()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    def isatty(self):</span></span>
<span class="line"><span style="color:#e1e4e8;">        return False</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">sys.stdout = Logger(&quot;output.log&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">def test(x):</span></span>
<span class="line"><span style="color:#e1e4e8;">    a = 1 / int(x)</span></span>
<span class="line"><span style="color:#e1e4e8;">    print(a)</span></span>
<span class="line"><span style="color:#e1e4e8;">    return x</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">def read_logs():</span></span>
<span class="line"><span style="color:#e1e4e8;">    sys.stdout.flush()</span></span>
<span class="line"><span style="color:#e1e4e8;">    with open(&quot;output.log&quot;, &quot;r&quot;) as f:</span></span>
<span class="line"><span style="color:#e1e4e8;">        return f.read()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">with gr.Blocks() as demo:</span></span>
<span class="line"><span style="color:#e1e4e8;">    with gr.Row():</span></span>
<span class="line"><span style="color:#e1e4e8;">        input = gr.Textbox()</span></span>
<span class="line"><span style="color:#e1e4e8;">        output = gr.Textbox()</span></span>
<span class="line"><span style="color:#e1e4e8;">    btn = gr.Button(&quot;Run&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    btn.click(test, input, output)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    logs = gr.Textbox()</span></span>
<span class="line"><span style="color:#e1e4e8;">    demo.load(read_logs, None, logs, every=1)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">demo.queue().launch()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import gradio as gr</span></span>
<span class="line"><span style="color:#24292e;">import sys</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class Logger:</span></span>
<span class="line"><span style="color:#24292e;">    def __init__(self, filename):</span></span>
<span class="line"><span style="color:#24292e;">        self.terminal = sys.stdout</span></span>
<span class="line"><span style="color:#24292e;">        self.log = open(filename, &quot;w&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    def write(self, message):</span></span>
<span class="line"><span style="color:#24292e;">        self.terminal.write(message)</span></span>
<span class="line"><span style="color:#24292e;">        self.log.write(message)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    def flush(self):</span></span>
<span class="line"><span style="color:#24292e;">        self.terminal.flush()</span></span>
<span class="line"><span style="color:#24292e;">        self.log.flush()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    def isatty(self):</span></span>
<span class="line"><span style="color:#24292e;">        return False</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">sys.stdout = Logger(&quot;output.log&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">def test(x):</span></span>
<span class="line"><span style="color:#24292e;">    a = 1 / int(x)</span></span>
<span class="line"><span style="color:#24292e;">    print(a)</span></span>
<span class="line"><span style="color:#24292e;">    return x</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">def read_logs():</span></span>
<span class="line"><span style="color:#24292e;">    sys.stdout.flush()</span></span>
<span class="line"><span style="color:#24292e;">    with open(&quot;output.log&quot;, &quot;r&quot;) as f:</span></span>
<span class="line"><span style="color:#24292e;">        return f.read()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">with gr.Blocks() as demo:</span></span>
<span class="line"><span style="color:#24292e;">    with gr.Row():</span></span>
<span class="line"><span style="color:#24292e;">        input = gr.Textbox()</span></span>
<span class="line"><span style="color:#24292e;">        output = gr.Textbox()</span></span>
<span class="line"><span style="color:#24292e;">    btn = gr.Button(&quot;Run&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    btn.click(test, input, output)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    logs = gr.Textbox()</span></span>
<span class="line"><span style="color:#24292e;">    demo.load(read_logs, None, logs, every=1)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">demo.queue().launch()</span></span></code></pre></div><h2 id="项目启动" tabindex="-1">项目启动 <a class="header-anchor" href="#项目启动" aria-label="Permalink to &quot;项目启动&quot;">​</a></h2><p>日志记录：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 记录到nohup</span></span>
<span class="line"><span style="color:#e1e4e8;">print(name,file=sys.stderr)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 记录到指定文件</span></span>
<span class="line"><span style="color:#e1e4e8;">print(name,file=open(&quot;log_input.log&quot;,&quot;a&quot;))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 记录到nohup</span></span>
<span class="line"><span style="color:#24292e;">print(name,file=sys.stderr)</span></span>
<span class="line"><span style="color:#24292e;"># 记录到指定文件</span></span>
<span class="line"><span style="color:#24292e;">print(name,file=open(&quot;log_input.log&quot;,&quot;a&quot;))</span></span></code></pre></div><p>设置显卡：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import os</span></span>
<span class="line"><span style="color:#e1e4e8;">os.environ[&quot;CUDA_VISIBLE_DEVICES&quot;] = &quot;0&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import os</span></span>
<span class="line"><span style="color:#24292e;">os.environ[&quot;CUDA_VISIBLE_DEVICES&quot;] = &quot;0&quot;</span></span></code></pre></div><p>项目启动：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nohup java -jar test.jar 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span style="color:#e1e4e8;">nohup python web_demo.py &gt; log_err.log 2&gt;&amp;1 &amp;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nohup java -jar test.jar 2&gt;&amp;1 &amp;</span></span>
<span class="line"><span style="color:#24292e;">nohup python web_demo.py &gt; log_err.log 2&gt;&amp;1 &amp;</span></span></code></pre></div><h2 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h2><p>虚增显存，A6000-48G，ChatGLM2-6B-fp16 12G，一周增至21G。两周就要爆显存。</p>`,37),o=[l];function t(c,r,i,d,y,u){return a(),n("div",null,o)}const m=s(p,[["render",t]]);export{g as __pageData,m as default};
