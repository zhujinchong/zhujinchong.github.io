import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const q=JSON.parse('{"title":"FastAPI请求","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Python/101FastAPI开发请求.md","filePath":"articles/Python/101FastAPI开发请求.md","lastUpdated":null}'),p={name:"articles/Python/101FastAPI开发请求.md"},l=e(`<h1 id="fastapi请求" tabindex="-1">FastAPI请求 <a class="header-anchor" href="#fastapi请求" aria-label="Permalink to &quot;FastAPI请求&quot;">​</a></h1><h2 id="web服务代码" tabindex="-1">web服务代码 <a class="header-anchor" href="#web服务代码" aria-label="Permalink to &quot;web服务代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import time</span></span>
<span class="line"><span style="color:#e1e4e8;">import shutil</span></span>
<span class="line"><span style="color:#e1e4e8;">import os</span></span>
<span class="line"><span style="color:#e1e4e8;">from fastapi import FastAPI, File, UploadFile</span></span>
<span class="line"><span style="color:#e1e4e8;">from fastapi.responses import StreamingResponse, FileResponse</span></span>
<span class="line"><span style="color:#e1e4e8;">import io</span></span>
<span class="line"><span style="color:#e1e4e8;">import base64</span></span>
<span class="line"><span style="color:#e1e4e8;">import uvicorn</span></span>
<span class="line"><span style="color:#e1e4e8;">import json</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">app = FastAPI()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">def image_to_base64():</span></span>
<span class="line"><span style="color:#e1e4e8;">    with open(&#39;test.png&#39;, &quot;rb&quot;) as image_file:</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 读取图片文件的二进制数据</span></span>
<span class="line"><span style="color:#e1e4e8;">        image_binary = image_file.read()</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 进行Base64编码（byte）</span></span>
<span class="line"><span style="color:#e1e4e8;">        encoded_image = base64.b64encode(image_binary)</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 将字节数据转换为字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">        encoded_image_string = encoded_image.decode(&#39;utf-8&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    return encoded_image_string</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 流式返回数据</span></span>
<span class="line"><span style="color:#e1e4e8;">@app.get(&quot;/stream&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">def stream_combined():</span></span>
<span class="line"><span style="color:#e1e4e8;">    def data_generator():</span></span>
<span class="line"><span style="color:#e1e4e8;">        for i in range(10000):</span></span>
<span class="line"><span style="color:#e1e4e8;">            time.sleep(0.05)</span></span>
<span class="line"><span style="color:#e1e4e8;">            # yield str(i) + &quot;\\n&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">            yield json.dumps({</span></span>
<span class="line"><span style="color:#e1e4e8;">                &quot;text&quot;: str(i),</span></span>
<span class="line"><span style="color:#e1e4e8;">                &quot;img&quot;: image_to_base64()</span></span>
<span class="line"><span style="color:#e1e4e8;">            }, ensure_ascii=False) + &quot;\\n&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    # 这两种返回数据的格式都可以（一种是二进制，一种是文本，还可以指定其它的如音视频等）</span></span>
<span class="line"><span style="color:#e1e4e8;">    # return StreamingResponse(data_generator(), media_type=&quot;application/octet-stream&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    return StreamingResponse(data_generator(), media_type=&quot;text/plain&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 上传文件的例子</span></span>
<span class="line"><span style="color:#e1e4e8;">@app.post(&quot;/uploadfile/&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">def create_upload_file(file: UploadFile = File(...)):</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 指定保存文件的路径</span></span>
<span class="line"><span style="color:#e1e4e8;">    save_path = &quot;uploads&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    os.makedirs(save_path, exist_ok=True)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    # 将上传的文件保存到指定路径</span></span>
<span class="line"><span style="color:#e1e4e8;">    file_path = os.path.join(save_path, file.filename)</span></span>
<span class="line"><span style="color:#e1e4e8;">    with open(file_path, &quot;wb&quot;) as file_object:</span></span>
<span class="line"><span style="color:#e1e4e8;">        shutil.copyfileobj(file.file, file_object)</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {&quot;filename&quot;: file.filename}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 返回文件的例子</span></span>
<span class="line"><span style="color:#e1e4e8;">@app.post(&quot;/downloadfile/&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">def read_item(arg_dict: dict):</span></span>
<span class="line"><span style="color:#e1e4e8;">    filename = arg_dict.get(&quot;filename&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    return FileResponse(filename)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">uvicorn.run(app=app, host=&#39;0.0.0.0&#39;, port=8000, workers=1)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import time</span></span>
<span class="line"><span style="color:#24292e;">import shutil</span></span>
<span class="line"><span style="color:#24292e;">import os</span></span>
<span class="line"><span style="color:#24292e;">from fastapi import FastAPI, File, UploadFile</span></span>
<span class="line"><span style="color:#24292e;">from fastapi.responses import StreamingResponse, FileResponse</span></span>
<span class="line"><span style="color:#24292e;">import io</span></span>
<span class="line"><span style="color:#24292e;">import base64</span></span>
<span class="line"><span style="color:#24292e;">import uvicorn</span></span>
<span class="line"><span style="color:#24292e;">import json</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">app = FastAPI()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">def image_to_base64():</span></span>
<span class="line"><span style="color:#24292e;">    with open(&#39;test.png&#39;, &quot;rb&quot;) as image_file:</span></span>
<span class="line"><span style="color:#24292e;">        # 读取图片文件的二进制数据</span></span>
<span class="line"><span style="color:#24292e;">        image_binary = image_file.read()</span></span>
<span class="line"><span style="color:#24292e;">        # 进行Base64编码（byte）</span></span>
<span class="line"><span style="color:#24292e;">        encoded_image = base64.b64encode(image_binary)</span></span>
<span class="line"><span style="color:#24292e;">        # 将字节数据转换为字符串</span></span>
<span class="line"><span style="color:#24292e;">        encoded_image_string = encoded_image.decode(&#39;utf-8&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    return encoded_image_string</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 流式返回数据</span></span>
<span class="line"><span style="color:#24292e;">@app.get(&quot;/stream&quot;)</span></span>
<span class="line"><span style="color:#24292e;">def stream_combined():</span></span>
<span class="line"><span style="color:#24292e;">    def data_generator():</span></span>
<span class="line"><span style="color:#24292e;">        for i in range(10000):</span></span>
<span class="line"><span style="color:#24292e;">            time.sleep(0.05)</span></span>
<span class="line"><span style="color:#24292e;">            # yield str(i) + &quot;\\n&quot;</span></span>
<span class="line"><span style="color:#24292e;">            yield json.dumps({</span></span>
<span class="line"><span style="color:#24292e;">                &quot;text&quot;: str(i),</span></span>
<span class="line"><span style="color:#24292e;">                &quot;img&quot;: image_to_base64()</span></span>
<span class="line"><span style="color:#24292e;">            }, ensure_ascii=False) + &quot;\\n&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    # 这两种返回数据的格式都可以（一种是二进制，一种是文本，还可以指定其它的如音视频等）</span></span>
<span class="line"><span style="color:#24292e;">    # return StreamingResponse(data_generator(), media_type=&quot;application/octet-stream&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    return StreamingResponse(data_generator(), media_type=&quot;text/plain&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 上传文件的例子</span></span>
<span class="line"><span style="color:#24292e;">@app.post(&quot;/uploadfile/&quot;)</span></span>
<span class="line"><span style="color:#24292e;">def create_upload_file(file: UploadFile = File(...)):</span></span>
<span class="line"><span style="color:#24292e;">    # 指定保存文件的路径</span></span>
<span class="line"><span style="color:#24292e;">    save_path = &quot;uploads&quot;</span></span>
<span class="line"><span style="color:#24292e;">    os.makedirs(save_path, exist_ok=True)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    # 将上传的文件保存到指定路径</span></span>
<span class="line"><span style="color:#24292e;">    file_path = os.path.join(save_path, file.filename)</span></span>
<span class="line"><span style="color:#24292e;">    with open(file_path, &quot;wb&quot;) as file_object:</span></span>
<span class="line"><span style="color:#24292e;">        shutil.copyfileobj(file.file, file_object)</span></span>
<span class="line"><span style="color:#24292e;">    return {&quot;filename&quot;: file.filename}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 返回文件的例子</span></span>
<span class="line"><span style="color:#24292e;">@app.post(&quot;/downloadfile/&quot;)</span></span>
<span class="line"><span style="color:#24292e;">def read_item(arg_dict: dict):</span></span>
<span class="line"><span style="color:#24292e;">    filename = arg_dict.get(&quot;filename&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    return FileResponse(filename)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">uvicorn.run(app=app, host=&#39;0.0.0.0&#39;, port=8000, workers=1)</span></span></code></pre></div><h2 id="request请求测试" tabindex="-1">request请求测试 <a class="header-anchor" href="#request请求测试" aria-label="Permalink to &quot;request请求测试&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import requests</span></span>
<span class="line"><span style="color:#e1e4e8;">import json</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class RequestHandler:</span></span>
<span class="line"><span style="color:#e1e4e8;">    def post(self, url, **kwargs):</span></span>
<span class="line"><span style="color:#e1e4e8;">        #  URL 后面的键值对，形式为 ?key1=value1&amp;key2=value2</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 此时，faskapi方法参数中必须定义好key</span></span>
<span class="line"><span style="color:#e1e4e8;">        params = kwargs.get(&quot;params&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 发送表单数据</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 此时，faskapi方法参数中必须定义好key</span></span>
<span class="line"><span style="color:#e1e4e8;">        data = kwargs.get(&quot;data&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 发送的 JSON 数据。Content-Type 标头将被设置为 application/json。</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 此时，faskapi方法参数中必须定义好字典dict接收</span></span>
<span class="line"><span style="color:#e1e4e8;">        json = kwargs.get(&quot;json&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        try:</span></span>
<span class="line"><span style="color:#e1e4e8;">            response = requests.post(url, params=params, data=data, json=json)</span></span>
<span class="line"><span style="color:#e1e4e8;">            if response.status_code == 200:</span></span>
<span class="line"><span style="color:#e1e4e8;">                return response.text</span></span>
<span class="line"><span style="color:#e1e4e8;">            else:</span></span>
<span class="line"><span style="color:#e1e4e8;">                return &quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        except Exception as e:</span></span>
<span class="line"><span style="color:#e1e4e8;">            print(&quot;post请求错误: %s&quot; % e)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    def stream(self, url, **kwargs):</span></span>
<span class="line"><span style="color:#e1e4e8;">        params = kwargs.get(&quot;params&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        data = kwargs.get(&quot;data&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        json = kwargs.get(&quot;json&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        try:</span></span>
<span class="line"><span style="color:#e1e4e8;">            response = requests.post(url, params=params, data=data, json=json)</span></span>
<span class="line"><span style="color:#e1e4e8;">            for line in response.iter_lines():</span></span>
<span class="line"><span style="color:#e1e4e8;">                # 如果是二进制，需要decode；如果是文本/json不需要decode</span></span>
<span class="line"><span style="color:#e1e4e8;">                print(line.decode(&quot;utf-8&quot;))</span></span>
<span class="line"><span style="color:#e1e4e8;">        except Exception as e:</span></span>
<span class="line"><span style="color:#e1e4e8;">            print(&quot;post请求错误: %s&quot; % e)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ret = RequestHandler().post(&quot;http://127.0.0.1:8000/downloadfile&quot;, params={&quot;filename&quot;: &quot;haha&quot;})</span></span>
<span class="line"><span style="color:#e1e4e8;">print(ret)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import requests</span></span>
<span class="line"><span style="color:#24292e;">import json</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class RequestHandler:</span></span>
<span class="line"><span style="color:#24292e;">    def post(self, url, **kwargs):</span></span>
<span class="line"><span style="color:#24292e;">        #  URL 后面的键值对，形式为 ?key1=value1&amp;key2=value2</span></span>
<span class="line"><span style="color:#24292e;">        # 此时，faskapi方法参数中必须定义好key</span></span>
<span class="line"><span style="color:#24292e;">        params = kwargs.get(&quot;params&quot;)</span></span>
<span class="line"><span style="color:#24292e;">        # 发送表单数据</span></span>
<span class="line"><span style="color:#24292e;">        # 此时，faskapi方法参数中必须定义好key</span></span>
<span class="line"><span style="color:#24292e;">        data = kwargs.get(&quot;data&quot;)</span></span>
<span class="line"><span style="color:#24292e;">        # 发送的 JSON 数据。Content-Type 标头将被设置为 application/json。</span></span>
<span class="line"><span style="color:#24292e;">        # 此时，faskapi方法参数中必须定义好字典dict接收</span></span>
<span class="line"><span style="color:#24292e;">        json = kwargs.get(&quot;json&quot;)</span></span>
<span class="line"><span style="color:#24292e;">        try:</span></span>
<span class="line"><span style="color:#24292e;">            response = requests.post(url, params=params, data=data, json=json)</span></span>
<span class="line"><span style="color:#24292e;">            if response.status_code == 200:</span></span>
<span class="line"><span style="color:#24292e;">                return response.text</span></span>
<span class="line"><span style="color:#24292e;">            else:</span></span>
<span class="line"><span style="color:#24292e;">                return &quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">        except Exception as e:</span></span>
<span class="line"><span style="color:#24292e;">            print(&quot;post请求错误: %s&quot; % e)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    def stream(self, url, **kwargs):</span></span>
<span class="line"><span style="color:#24292e;">        params = kwargs.get(&quot;params&quot;)</span></span>
<span class="line"><span style="color:#24292e;">        data = kwargs.get(&quot;data&quot;)</span></span>
<span class="line"><span style="color:#24292e;">        json = kwargs.get(&quot;json&quot;)</span></span>
<span class="line"><span style="color:#24292e;">        try:</span></span>
<span class="line"><span style="color:#24292e;">            response = requests.post(url, params=params, data=data, json=json)</span></span>
<span class="line"><span style="color:#24292e;">            for line in response.iter_lines():</span></span>
<span class="line"><span style="color:#24292e;">                # 如果是二进制，需要decode；如果是文本/json不需要decode</span></span>
<span class="line"><span style="color:#24292e;">                print(line.decode(&quot;utf-8&quot;))</span></span>
<span class="line"><span style="color:#24292e;">        except Exception as e:</span></span>
<span class="line"><span style="color:#24292e;">            print(&quot;post请求错误: %s&quot; % e)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ret = RequestHandler().post(&quot;http://127.0.0.1:8000/downloadfile&quot;, params={&quot;filename&quot;: &quot;haha&quot;})</span></span>
<span class="line"><span style="color:#24292e;">print(ret)</span></span></code></pre></div><h1 id="流式传输" tabindex="-1">流式传输 <a class="header-anchor" href="#流式传输" aria-label="Permalink to &quot;流式传输&quot;">​</a></h1><h2 id="底层原理" tabindex="-1">底层原理 <a class="header-anchor" href="#底层原理" aria-label="Permalink to &quot;底层原理&quot;">​</a></h2><p>所有请求都是HTTP协议，HTTP协议支持以下几种技术</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1、分块传输（Chunked Transfer Encoding）：</span></span>
<span class="line"><span style="color:#e1e4e8;">允许服务器在生成数据的同时将其发送给客户端，而不需要等待整个响应完成。这使得客户端可以在接收到一部分数据时就开始处理，而不必等待整个响应完成。</span></span>
<span class="line"><span style="color:#e1e4e8;">分块传输通常通过设置响应头的 Transfer-Encoding: chunked 来实现。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">2、WebSocket协议</span></span>
<span class="line"><span style="color:#e1e4e8;">WebSockets 是一种在单个 TCP 连接上进行全双工通信的协议，允许服务器和客户端之间进行实时双向数据传输。通过建立持久连接，服务器可以异步地向客户端推送数据，而不需要等待客户端的请求。</span></span>
<span class="line"><span style="color:#e1e4e8;">WebSockets 在实现实时通信、推送通知等场景时非常有用。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">3、Server-Sent Events (SSE)</span></span>
<span class="line"><span style="color:#e1e4e8;">SSE 是一种用于服务器向客户端推送实时事件的技术，基于普通的 HTTP 或 HTTPS 连接。服务器可以异步地向客户端发送事件，而客户端通过 EventSource API 接收这些事件。</span></span>
<span class="line"><span style="color:#e1e4e8;">SSE 主要用于单向通信，适用于实时通知和事件推送。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1、分块传输（Chunked Transfer Encoding）：</span></span>
<span class="line"><span style="color:#24292e;">允许服务器在生成数据的同时将其发送给客户端，而不需要等待整个响应完成。这使得客户端可以在接收到一部分数据时就开始处理，而不必等待整个响应完成。</span></span>
<span class="line"><span style="color:#24292e;">分块传输通常通过设置响应头的 Transfer-Encoding: chunked 来实现。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">2、WebSocket协议</span></span>
<span class="line"><span style="color:#24292e;">WebSockets 是一种在单个 TCP 连接上进行全双工通信的协议，允许服务器和客户端之间进行实时双向数据传输。通过建立持久连接，服务器可以异步地向客户端推送数据，而不需要等待客户端的请求。</span></span>
<span class="line"><span style="color:#24292e;">WebSockets 在实现实时通信、推送通知等场景时非常有用。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">3、Server-Sent Events (SSE)</span></span>
<span class="line"><span style="color:#24292e;">SSE 是一种用于服务器向客户端推送实时事件的技术，基于普通的 HTTP 或 HTTPS 连接。服务器可以异步地向客户端发送事件，而客户端通过 EventSource API 接收这些事件。</span></span>
<span class="line"><span style="color:#24292e;">SSE 主要用于单向通信，适用于实时通知和事件推送。</span></span></code></pre></div><h2 id="fastapi的streaingresponse是哪种技术" tabindex="-1">FastAPI的StreaingResponse是哪种技术 <a class="header-anchor" href="#fastapi的streaingresponse是哪种技术" aria-label="Permalink to &quot;FastAPI的StreaingResponse是哪种技术&quot;">​</a></h2><p>FastAPI的StreamingResponse用的基于 Starlette 框架提供的StreamingResponse。</p><p>StreamingResponse是Starlette 框架中用于支持流式传输的响应类型。它的实现基于 ASGI（Asynchronous Server Gateway Interface）。</p><p>增强知识点：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ASGI（Asynchronous Server Gateway Interface）是一个异步的Python Web服务器接口标准。类似于Java中的Java Servlet 规范。</span></span>
<span class="line"><span style="color:#e1e4e8;">FastAPI类似于Java中的SpringBoot开发框架。</span></span>
<span class="line"><span style="color:#e1e4e8;">uvicorn支持ASGI的服务器，所以可以运行FastAPI。就像Tomcat是可以运行Java Web的容器。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ASGI（Asynchronous Server Gateway Interface）是一个异步的Python Web服务器接口标准。类似于Java中的Java Servlet 规范。</span></span>
<span class="line"><span style="color:#24292e;">FastAPI类似于Java中的SpringBoot开发框架。</span></span>
<span class="line"><span style="color:#24292e;">uvicorn支持ASGI的服务器，所以可以运行FastAPI。就像Tomcat是可以运行Java Web的容器。</span></span></code></pre></div><p>问题1：服务器和HTTP协议什么关系</p><p>答：所有请求最开始都是HTTP协议，这些请求被转发到Web服务器。Web服务器增强了静态网页成动态网页。</p><p>问题2：StreamingResponse到底用的是HTTP哪项技术？</p><p>答：在 FastAPI 中，当你使用 StreamingResponse 返回数据时，它会将响应头中的 <code>Transfer-Encoding</code> 设置为 <code>chunked</code>，并且通过异步生成器函数逐块产生数据。所以，FastAPI是通过分块技术实现的。</p><p>问题3：ASGI的异步有什么用？</p><p>答： ASGI 允许应用程序和服务器以异步的方式进行通信。这使得能够有效地处理大量并发连接，而不会阻塞整个应用程序。对于需要处理数千个并发连接的应用，异步的处理方式比传统的同步方式更为高效。等等，还有其他优点。</p><p>问题4：前端怎么接收</p><p>Axios接受</p>`,22),o=[l];function t(c,r,i,y,u,d){return n(),a("div",null,o)}const g=s(p,[["render",t]]);export{q as __pageData,g as default};
