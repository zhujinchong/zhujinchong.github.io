import{_ as e,o as s,c as a,Q as n}from"./chunks/framework.2516552c.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/01Java语法/11Java线程池的使用.md","filePath":"articles/Java/01Java语法/11Java线程池的使用.md","lastUpdated":1698149129000}'),l={name:"articles/Java/01Java语法/11Java线程池的使用.md"},p=n(`<p>线程池使用示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">private static final ThreadPoolExecutor thread = new ThreadPoolExecutor(5, 5, 1L, TimeUnit.MINUTES, new LinkedBlockingQueue&lt;&gt;(10), new ThreadPoolExecutor.CallerRunsPolicy());</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">thread.execute(() -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;"> crmImportService.insertCRMByBatchList(tempList);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">private static final ThreadPoolExecutor thread = new ThreadPoolExecutor(5, 5, 1L, TimeUnit.MINUTES, new LinkedBlockingQueue&lt;&gt;(10), new ThreadPoolExecutor.CallerRunsPolicy());</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">thread.execute(() -&gt; {</span></span>
<span class="line"><span style="color:#24292e;"> crmImportService.insertCRMByBatchList(tempList);</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><p>参数（按顺序）：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">corePoolSize 核心线程数</span></span>
<span class="line"><span style="color:#e1e4e8;">maximumPoolSize 最大线程数</span></span>
<span class="line"><span style="color:#e1e4e8;">keepAliveTime 空闲线程存活时间</span></span>
<span class="line"><span style="color:#e1e4e8;">TimeUnit  时间单位</span></span>
<span class="line"><span style="color:#e1e4e8;">workQueue  阻塞任务队列：如果线程都在用，就会将任务放入阻塞队列</span></span>
<span class="line"><span style="color:#e1e4e8;">threadFactory 新建线程工厂：如果线程池没有线程，使用该方法创建线程。该参数一般省略，使用默认的方法就可以。</span></span>
<span class="line"><span style="color:#e1e4e8;">RejectedExecutionHandler  拒绝机制：当任务数大于maximumPoolSize + wordQueue，就会执行该机制。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">corePoolSize 核心线程数</span></span>
<span class="line"><span style="color:#24292e;">maximumPoolSize 最大线程数</span></span>
<span class="line"><span style="color:#24292e;">keepAliveTime 空闲线程存活时间</span></span>
<span class="line"><span style="color:#24292e;">TimeUnit  时间单位</span></span>
<span class="line"><span style="color:#24292e;">workQueue  阻塞任务队列：如果线程都在用，就会将任务放入阻塞队列</span></span>
<span class="line"><span style="color:#24292e;">threadFactory 新建线程工厂：如果线程池没有线程，使用该方法创建线程。该参数一般省略，使用默认的方法就可以。</span></span>
<span class="line"><span style="color:#24292e;">RejectedExecutionHandler  拒绝机制：当任务数大于maximumPoolSize + wordQueue，就会执行该机制。</span></span></code></pre></div><p>阿里编码规范，不推荐使用Executors工具类，如</p><p><code>public ExecutorService threadPool = Executors.newFixedThreadPool(threadPoolCount);</code></p><p>因为他们的<code>workQueue</code>是无界的，如果数据量大，任务都进入<code>workQueue</code>，容易OOM。</p><p>拒绝机制：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">AbortPolicy 默认抛出异常。</span></span>
<span class="line"><span style="color:#e1e4e8;">CallerRunsPolicy：提交给该任务的线程来执行，任务不会丢。</span></span>
<span class="line"><span style="color:#e1e4e8;">DiscardPolicy：直接丢弃被拒绝的任务。</span></span>
<span class="line"><span style="color:#e1e4e8;">DiscardOldestPolicy: 丢弃队列首部的任务，提交这个新的任务。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">AbortPolicy 默认抛出异常。</span></span>
<span class="line"><span style="color:#24292e;">CallerRunsPolicy：提交给该任务的线程来执行，任务不会丢。</span></span>
<span class="line"><span style="color:#24292e;">DiscardPolicy：直接丢弃被拒绝的任务。</span></span>
<span class="line"><span style="color:#24292e;">DiscardOldestPolicy: 丢弃队列首部的任务，提交这个新的任务。</span></span></code></pre></div>`,9),o=[p];function c(t,i,r,d,u,y){return s(),a("div",null,o)}const m=e(l,[["render",c]]);export{v as __pageData,m as default};
