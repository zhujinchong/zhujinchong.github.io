import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.2516552c.js";const q=JSON.parse('{"title":"FastAPI什么时候用async","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Python/01FastAPI什么时候用async.md","filePath":"articles/Python/01FastAPI什么时候用async.md","lastUpdated":null}'),p={name:"articles/Python/01FastAPI什么时候用async.md"},l=e(`<h1 id="fastapi什么时候用async" tabindex="-1">FastAPI什么时候用async <a class="header-anchor" href="#fastapi什么时候用async" aria-label="Permalink to &quot;FastAPI什么时候用async&quot;">​</a></h1><h2 id="并发和并行" tabindex="-1">并发和并行？ <a class="header-anchor" href="#并发和并行" aria-label="Permalink to &quot;并发和并行？&quot;">​</a></h2><p>并发：表面上同时发生，实际上串行。</p><p>并行：物理、实际上的同时发生。</p><p>IO密集型任务，即，读写磁盘很多，如，读写文件，一般并发解决。</p><p>CPU密集型任务，即，复杂计算很多，如，深度学习，一般并行解决。</p><h2 id="异步io解决什么问题" tabindex="-1">异步IO解决什么问题？ <a class="header-anchor" href="#异步io解决什么问题" aria-label="Permalink to &quot;异步IO解决什么问题？&quot;">​</a></h2><p>在一个线程中，CPU执行代码的速度极快，然而，一旦遇到IO操作，如读写文件、发送网络数据时，就需要等待IO操作完成，才能继续进行下一步操作。这种情况称为同步IO。</p><p>因为一个IO操作就阻塞了当前线程，导致其他代码无法执行，所以我们必须使用多线程或者多进程来并发执行代码，为多个用户服务。每个用户都会分配一个线程，如果遇到IO导致线程被挂起，其他用户的线程不受影响。</p><p>多线程和多进程的模型虽然解决了并发问题，但是系统不能无上限地增加线程。由于系统切换线程的开销也很大，所以，一旦线程数量过多，CPU的时间就花在线程切换上了，真正运行代码的时间就少了，结果导致性能严重下降。</p><p><strong>所以：多线程和多进程只是解决IO阻塞的一种方法（并行），另一种解决IO问题的方法是异步IO（并发）。</strong></p><p>当代码需要执行一个耗时的IO操作时，它只发出IO指令，并不等待IO结果，然后就去执行其他代码了。一段时间后，当IO返回结果时，再通知CPU进行处理。</p><h2 id="asyncio对异步io的支持" tabindex="-1">asyncio对异步IO的支持 <a class="header-anchor" href="#asyncio对异步io的支持" aria-label="Permalink to &quot;asyncio对异步IO的支持&quot;">​</a></h2><p><code>asyncio</code>是Python 3.4版本引入的标准库，直接内置了对异步IO的支持。</p><p><code>asyncio</code>的编程模型就是一个消息循环。我们从<code>asyncio</code>模块中直接获取一个<code>EventLoop</code>的引用，然后把需要执行的协程扔到<code>EventLoop</code>中执行，就实现了异步IO。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import threading</span></span>
<span class="line"><span style="color:#e1e4e8;">import asyncio</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">@asyncio.coroutine</span></span>
<span class="line"><span style="color:#e1e4e8;">def hello():</span></span>
<span class="line"><span style="color:#e1e4e8;">    print(&#39;Hello world! (%s)&#39; % threading.currentThread())</span></span>
<span class="line"><span style="color:#e1e4e8;">    yield from asyncio.sleep(1)</span></span>
<span class="line"><span style="color:#e1e4e8;">    print(&#39;Hello again! (%s)&#39; % threading.currentThread())</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">loop = asyncio.get_event_loop()</span></span>
<span class="line"><span style="color:#e1e4e8;">tasks = [hello(), hello()]</span></span>
<span class="line"><span style="color:#e1e4e8;">loop.run_until_complete(asyncio.wait(tasks))</span></span>
<span class="line"><span style="color:#e1e4e8;">loop.close()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import threading</span></span>
<span class="line"><span style="color:#24292e;">import asyncio</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">@asyncio.coroutine</span></span>
<span class="line"><span style="color:#24292e;">def hello():</span></span>
<span class="line"><span style="color:#24292e;">    print(&#39;Hello world! (%s)&#39; % threading.currentThread())</span></span>
<span class="line"><span style="color:#24292e;">    yield from asyncio.sleep(1)</span></span>
<span class="line"><span style="color:#24292e;">    print(&#39;Hello again! (%s)&#39; % threading.currentThread())</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">loop = asyncio.get_event_loop()</span></span>
<span class="line"><span style="color:#24292e;">tasks = [hello(), hello()]</span></span>
<span class="line"><span style="color:#24292e;">loop.run_until_complete(asyncio.wait(tasks))</span></span>
<span class="line"><span style="color:#24292e;">loop.close()</span></span></code></pre></div><p>同时，执行上面代码发现，他们用的是同一个线程，在python里这叫<strong>协程</strong>。</p><h2 id="asyncio中的关键字async" tabindex="-1">asyncio中的关键字async <a class="header-anchor" href="#asyncio中的关键字async" aria-label="Permalink to &quot;asyncio中的关键字async&quot;">​</a></h2><p>为了简化并更好地标识异步IO，从Python 3.5开始引入了新的语法<code>async</code>和<code>await</code>，可以让coroutine的代码更简洁易读。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">async def hello():</span></span>
<span class="line"><span style="color:#e1e4e8;">    print(&quot;Hello world!&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    r = await asyncio.sleep(1)</span></span>
<span class="line"><span style="color:#e1e4e8;">    print(&quot;Hello again!&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">async def hello():</span></span>
<span class="line"><span style="color:#24292e;">    print(&quot;Hello world!&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    r = await asyncio.sleep(1)</span></span>
<span class="line"><span style="color:#24292e;">    print(&quot;Hello again!&quot;)</span></span></code></pre></div><h2 id="faskapi接口什么时候用async" tabindex="-1">faskapi接口什么时候用async？ <a class="header-anchor" href="#faskapi接口什么时候用async" aria-label="Permalink to &quot;faskapi接口什么时候用async？&quot;">​</a></h2><p>官方说，<strong>你是否使用async，FastAPI都将异步工作，以达到Fast的运行速度。</strong></p><p>实际上这里的异步工作是指：<strong>FastAPI既支持异步并发，也支持多线程并行。</strong></p><p>实际分析：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from fastapi import APIRouter</span></span>
<span class="line"><span style="color:#e1e4e8;">import time</span></span>
<span class="line"><span style="color:#e1e4e8;">import asyncio</span></span>
<span class="line"><span style="color:#e1e4e8;">import uvicorn</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">app = APIRouter()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">@app.get(&quot;/a&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">async def a():</span></span>
<span class="line"><span style="color:#e1e4e8;">    time.sleep(1)</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {&quot;message&quot;: &quot;异步模式，内部没有await调用异步方法，最后是串行执行&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">@app.get(&quot;/b&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">async def b():</span></span>
<span class="line"><span style="color:#e1e4e8;">    loop = asyncio.get_event_loop()</span></span>
<span class="line"><span style="color:#e1e4e8;">    await loop.run_in_executor(None, time.sleep, 1)</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {&quot;message&quot;: &quot;异步模式，放到一个event loop中去运行，函数内部用到了await异步方法&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">@app.get(&quot;/c&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">async def c():</span></span>
<span class="line"><span style="color:#e1e4e8;">    await asyncio.sleep(1)</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {&quot;message&quot;: &quot;异步模式，包含异步方法，所以很快&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">@app.get(&quot;/d&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">def d():</span></span>
<span class="line"><span style="color:#e1e4e8;">    time.sleep(1)</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {&quot;message&quot;: &quot;同步模式，但是FastAPI会放在线程池中运行，所以很快&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span style="color:#e1e4e8;">    uvicorn.run(app, host=&quot;0.0.0.0&quot;, port=8000)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from fastapi import APIRouter</span></span>
<span class="line"><span style="color:#24292e;">import time</span></span>
<span class="line"><span style="color:#24292e;">import asyncio</span></span>
<span class="line"><span style="color:#24292e;">import uvicorn</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">app = APIRouter()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">@app.get(&quot;/a&quot;)</span></span>
<span class="line"><span style="color:#24292e;">async def a():</span></span>
<span class="line"><span style="color:#24292e;">    time.sleep(1)</span></span>
<span class="line"><span style="color:#24292e;">    return {&quot;message&quot;: &quot;异步模式，内部没有await调用异步方法，最后是串行执行&quot;}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">@app.get(&quot;/b&quot;)</span></span>
<span class="line"><span style="color:#24292e;">async def b():</span></span>
<span class="line"><span style="color:#24292e;">    loop = asyncio.get_event_loop()</span></span>
<span class="line"><span style="color:#24292e;">    await loop.run_in_executor(None, time.sleep, 1)</span></span>
<span class="line"><span style="color:#24292e;">    return {&quot;message&quot;: &quot;异步模式，放到一个event loop中去运行，函数内部用到了await异步方法&quot;}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">@app.get(&quot;/c&quot;)</span></span>
<span class="line"><span style="color:#24292e;">async def c():</span></span>
<span class="line"><span style="color:#24292e;">    await asyncio.sleep(1)</span></span>
<span class="line"><span style="color:#24292e;">    return {&quot;message&quot;: &quot;异步模式，包含异步方法，所以很快&quot;}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">@app.get(&quot;/d&quot;)</span></span>
<span class="line"><span style="color:#24292e;">def d():</span></span>
<span class="line"><span style="color:#24292e;">    time.sleep(1)</span></span>
<span class="line"><span style="color:#24292e;">    return {&quot;message&quot;: &quot;同步模式，但是FastAPI会放在线程池中运行，所以很快&quot;}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">if __name__ == &quot;__main__&quot;:</span></span>
<span class="line"><span style="color:#24292e;">    uvicorn.run(app, host=&quot;0.0.0.0&quot;, port=8000)</span></span></code></pre></div><p>我们并发100个请求分别测试这4个接口。 结果： /a接口：100秒 /b接口：1秒 /c接口：1秒 /d接口：3秒</p><p><strong>就像官方所说，如果你不清楚你函数里的调用是否异步，那就定义为普通函数。因为它可以采用多线程的方式解决。反之，定义了async函数，里面却是同步的调用（第一个函数），那么这将慢的是灾难！</strong></p><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1>`,28),o=[l];function t(c,i,r,y,u,d){return a(),n("div",null,o)}const _=s(p,[["render",t]]);export{q as __pageData,_ as default};
