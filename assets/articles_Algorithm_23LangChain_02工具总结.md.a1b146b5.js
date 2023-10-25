import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.2516552c.js";const g=JSON.parse('{"title":"向量检索技术","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Algorithm/23LangChain/02工具总结.md","filePath":"articles/Algorithm/23LangChain/02工具总结.md","lastUpdated":null}'),p={name:"articles/Algorithm/23LangChain/02工具总结.md"},l=e(`<h1 id="向量检索技术" tabindex="-1">向量检索技术 <a class="header-anchor" href="#向量检索技术" aria-label="Permalink to &quot;向量检索技术&quot;">​</a></h1><p>向量库区别：</p><p>FAISS：facebook开源产品，也是鼻祖</p><p>Milvus：可应对大数据检索，分布式部署问题。</p><h1 id="rapidocr" tabindex="-1">RapidOCR <a class="header-anchor" href="#rapidocr" aria-label="Permalink to &quot;RapidOCR&quot;">​</a></h1><p>RapidOCR：基于PaddleOCR做的封装，转换为ONNX格式，做成工程化，支持多种编程语言、多种平台。</p><p>ONNX放到了whl包中，安装即可用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install rapidocr-onnxruntime</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install rapidocr-onnxruntime</span></span></code></pre></div><h1 id="bs4" tabindex="-1">bs4 <a class="header-anchor" href="#bs4" aria-label="Permalink to &quot;bs4&quot;">​</a></h1><blockquote><p>参考教程：<a href="https://blog.csdn.net/love666666shen/article/details/77512353" target="_blank" rel="noreferrer">https://blog.csdn.net/love666666shen/article/details/77512353</a></p></blockquote><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">pip install beautifulsoup4</span></span>
<span class="line"><span style="color:#E1E4E8;">pip install lxml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">pip install beautifulsoup4</span></span>
<span class="line"><span style="color:#24292E;">pip install lxml</span></span></code></pre></div><p>其中lxml是解析器，也可以用python自带的解析器，不过lxml更快。</p><p>使用:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from bs4 import BeautifulSoup</span></span>
<span class="line"><span style="color:#e1e4e8;">import lxml</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">html = &quot;&quot;&quot;html内容&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"># python标准库中的HTML解析器</span></span>
<span class="line"><span style="color:#e1e4e8;">soup = BeautifulSoup(html, &#39;html.parser&#39;, from_encoding=&#39;utf-8&#39;) </span></span>
<span class="line"><span style="color:#e1e4e8;"># lxml解析器</span></span>
<span class="line"><span style="color:#e1e4e8;">soup = BeautifulSoup(html, &#39;lxml&#39;, from_encoding=&#39;utf-8&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from bs4 import BeautifulSoup</span></span>
<span class="line"><span style="color:#24292e;">import lxml</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">html = &quot;&quot;&quot;html内容&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;"># python标准库中的HTML解析器</span></span>
<span class="line"><span style="color:#24292e;">soup = BeautifulSoup(html, &#39;html.parser&#39;, from_encoding=&#39;utf-8&#39;) </span></span>
<span class="line"><span style="color:#24292e;"># lxml解析器</span></span>
<span class="line"><span style="color:#24292e;">soup = BeautifulSoup(html, &#39;lxml&#39;, from_encoding=&#39;utf-8&#39;)</span></span></code></pre></div><h1 id="pdfminer3k" tabindex="-1">pdfminer3k <a class="header-anchor" href="#pdfminer3k" aria-label="Permalink to &quot;pdfminer3k&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install pdfminer3k</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install pdfminer3k</span></span></code></pre></div><p>使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from pdfminer.converter import PDFPageAggregator</span></span>
<span class="line"><span style="color:#e1e4e8;">from pdfminer.layout import LAParams</span></span>
<span class="line"><span style="color:#e1e4e8;">from pdfminer.pdfparser import PDFParser, PDFDocument</span></span>
<span class="line"><span style="color:#e1e4e8;">from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter</span></span>
<span class="line"><span style="color:#e1e4e8;">from pdfminer.pdfdevice import PDFDevice</span></span>
<span class="line"><span style="color:#e1e4e8;">from pdfminer.layout import LTTextBoxHorizontal, LAParams</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">def pdf2txt_miner(f_from, f_to):</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 按块识别, 可选中的文字</span></span>
<span class="line"><span style="color:#e1e4e8;">    print(f&#39;start: {f_from}&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    fp = open(f_from, &#39;rb&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 用文件对象来创建一个pdf文档分析器</span></span>
<span class="line"><span style="color:#e1e4e8;">    praser = PDFParser(fp)</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 创建一个PDF文档</span></span>
<span class="line"><span style="color:#e1e4e8;">    doc = PDFDocument()</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 连接分析器 与文档对象</span></span>
<span class="line"><span style="color:#e1e4e8;">    praser.set_document(doc)</span></span>
<span class="line"><span style="color:#e1e4e8;">    doc.set_parser(praser)</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    # 提供初始化密码</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 如果没有密码 就创建一个空的字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">    doc.initialize()</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    # 检测文档是否提供txt转换，不提供就忽略</span></span>
<span class="line"><span style="color:#e1e4e8;">    if not doc.is_extractable:</span></span>
<span class="line"><span style="color:#e1e4e8;">        pass</span></span>
<span class="line"><span style="color:#e1e4e8;">        # raise PDFTextExtractionNotAllowed</span></span>
<span class="line"><span style="color:#e1e4e8;">    else:</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 创建PDf 资源管理器 来管理共享资源</span></span>
<span class="line"><span style="color:#e1e4e8;">        rsrcmgr = PDFResourceManager()</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 创建一个PDF设备对象</span></span>
<span class="line"><span style="color:#e1e4e8;">        laparams = LAParams()</span></span>
<span class="line"><span style="color:#e1e4e8;">        device = PDFPageAggregator(rsrcmgr, laparams=laparams)</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 创建一个PDF解释器对象</span></span>
<span class="line"><span style="color:#e1e4e8;">        interpreter = PDFPageInterpreter(rsrcmgr, device)</span></span>
<span class="line"><span style="color:#e1e4e8;">        with open(f_to, &#39;w&#39;) as f:</span></span>
<span class="line"><span style="color:#e1e4e8;">            # 循环遍历列表，每次处理一个page的内容</span></span>
<span class="line"><span style="color:#e1e4e8;">            for page in doc.get_pages():  # doc.get_pages() 获取page列表</span></span>
<span class="line"><span style="color:#e1e4e8;">                interpreter.process_page(page)</span></span>
<span class="line"><span style="color:#e1e4e8;">                # 接受该页面的LTPage对象</span></span>
<span class="line"><span style="color:#e1e4e8;">                layout = device.get_result()</span></span>
<span class="line"><span style="color:#e1e4e8;">                # 这里layout是一个LTPage对象 里面存放着 这个page解析出的各种对象 一般包括LTTextBox, LTFigure, LTImage, LTTextBoxHorizontal 等等 想要获取文本就获得对象的text属性，</span></span>
<span class="line"><span style="color:#e1e4e8;">                for x in layout:</span></span>
<span class="line"><span style="color:#e1e4e8;">                    if (isinstance(x, LTTextBoxHorizontal)):</span></span>
<span class="line"><span style="color:#e1e4e8;">                        results = x.get_text()</span></span>
<span class="line"><span style="color:#e1e4e8;">                        for gar in garbage_text:</span></span>
<span class="line"><span style="color:#e1e4e8;">                            if results.startswith(gar):</span></span>
<span class="line"><span style="color:#e1e4e8;">                                break</span></span>
<span class="line"><span style="color:#e1e4e8;">                        else:</span></span>
<span class="line"><span style="color:#e1e4e8;">                            print(results)</span></span>
<span class="line"><span style="color:#e1e4e8;">                            f.write(results.replace(&#39;\\n&#39;, &#39; &#39;))</span></span>
<span class="line"><span style="color:#e1e4e8;">    fp.close()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from pdfminer.converter import PDFPageAggregator</span></span>
<span class="line"><span style="color:#24292e;">from pdfminer.layout import LAParams</span></span>
<span class="line"><span style="color:#24292e;">from pdfminer.pdfparser import PDFParser, PDFDocument</span></span>
<span class="line"><span style="color:#24292e;">from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter</span></span>
<span class="line"><span style="color:#24292e;">from pdfminer.pdfdevice import PDFDevice</span></span>
<span class="line"><span style="color:#24292e;">from pdfminer.layout import LTTextBoxHorizontal, LAParams</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">def pdf2txt_miner(f_from, f_to):</span></span>
<span class="line"><span style="color:#24292e;">    # 按块识别, 可选中的文字</span></span>
<span class="line"><span style="color:#24292e;">    print(f&#39;start: {f_from}&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    fp = open(f_from, &#39;rb&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    # 用文件对象来创建一个pdf文档分析器</span></span>
<span class="line"><span style="color:#24292e;">    praser = PDFParser(fp)</span></span>
<span class="line"><span style="color:#24292e;">    # 创建一个PDF文档</span></span>
<span class="line"><span style="color:#24292e;">    doc = PDFDocument()</span></span>
<span class="line"><span style="color:#24292e;">    # 连接分析器 与文档对象</span></span>
<span class="line"><span style="color:#24292e;">    praser.set_document(doc)</span></span>
<span class="line"><span style="color:#24292e;">    doc.set_parser(praser)</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    # 提供初始化密码</span></span>
<span class="line"><span style="color:#24292e;">    # 如果没有密码 就创建一个空的字符串</span></span>
<span class="line"><span style="color:#24292e;">    doc.initialize()</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    # 检测文档是否提供txt转换，不提供就忽略</span></span>
<span class="line"><span style="color:#24292e;">    if not doc.is_extractable:</span></span>
<span class="line"><span style="color:#24292e;">        pass</span></span>
<span class="line"><span style="color:#24292e;">        # raise PDFTextExtractionNotAllowed</span></span>
<span class="line"><span style="color:#24292e;">    else:</span></span>
<span class="line"><span style="color:#24292e;">        # 创建PDf 资源管理器 来管理共享资源</span></span>
<span class="line"><span style="color:#24292e;">        rsrcmgr = PDFResourceManager()</span></span>
<span class="line"><span style="color:#24292e;">        # 创建一个PDF设备对象</span></span>
<span class="line"><span style="color:#24292e;">        laparams = LAParams()</span></span>
<span class="line"><span style="color:#24292e;">        device = PDFPageAggregator(rsrcmgr, laparams=laparams)</span></span>
<span class="line"><span style="color:#24292e;">        # 创建一个PDF解释器对象</span></span>
<span class="line"><span style="color:#24292e;">        interpreter = PDFPageInterpreter(rsrcmgr, device)</span></span>
<span class="line"><span style="color:#24292e;">        with open(f_to, &#39;w&#39;) as f:</span></span>
<span class="line"><span style="color:#24292e;">            # 循环遍历列表，每次处理一个page的内容</span></span>
<span class="line"><span style="color:#24292e;">            for page in doc.get_pages():  # doc.get_pages() 获取page列表</span></span>
<span class="line"><span style="color:#24292e;">                interpreter.process_page(page)</span></span>
<span class="line"><span style="color:#24292e;">                # 接受该页面的LTPage对象</span></span>
<span class="line"><span style="color:#24292e;">                layout = device.get_result()</span></span>
<span class="line"><span style="color:#24292e;">                # 这里layout是一个LTPage对象 里面存放着 这个page解析出的各种对象 一般包括LTTextBox, LTFigure, LTImage, LTTextBoxHorizontal 等等 想要获取文本就获得对象的text属性，</span></span>
<span class="line"><span style="color:#24292e;">                for x in layout:</span></span>
<span class="line"><span style="color:#24292e;">                    if (isinstance(x, LTTextBoxHorizontal)):</span></span>
<span class="line"><span style="color:#24292e;">                        results = x.get_text()</span></span>
<span class="line"><span style="color:#24292e;">                        for gar in garbage_text:</span></span>
<span class="line"><span style="color:#24292e;">                            if results.startswith(gar):</span></span>
<span class="line"><span style="color:#24292e;">                                break</span></span>
<span class="line"><span style="color:#24292e;">                        else:</span></span>
<span class="line"><span style="color:#24292e;">                            print(results)</span></span>
<span class="line"><span style="color:#24292e;">                            f.write(results.replace(&#39;\\n&#39;, &#39; &#39;))</span></span>
<span class="line"><span style="color:#24292e;">    fp.close()</span></span></code></pre></div>`,18),o=[l];function t(r,c,i,d,y,m){return a(),n("div",null,o)}const f=s(p,[["render",t]]);export{g as __pageData,f as default};
