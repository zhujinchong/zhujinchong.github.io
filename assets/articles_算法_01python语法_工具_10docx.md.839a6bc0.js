import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.2516552c.js";const h=JSON.parse('{"title":"window下doc docx互转，转pdf","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/01python语法&工具/10docx.md","filePath":"articles/算法/01python语法&工具/10docx.md","lastUpdated":null}'),e={name:"articles/算法/01python语法&工具/10docx.md"},l=p(`<h1 id="window下doc-docx互转-转pdf" tabindex="-1">window下doc docx互转，转pdf <a class="header-anchor" href="#window下doc-docx互转-转pdf" aria-label="Permalink to &quot;window下doc docx互转，转pdf&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from win32com import client</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 转换doc为pdf</span></span>
<span class="line"><span style="color:#e1e4e8;">def doc2pdf(fn):</span></span>
<span class="line"><span style="color:#e1e4e8;">    word = client.Dispatch(&quot;Word.Application&quot;)  # 打开word应用程序</span></span>
<span class="line"><span style="color:#e1e4e8;">    # for file in files:</span></span>
<span class="line"><span style="color:#e1e4e8;">    doc = word.Documents.Open(fn)  # 打开word文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    doc.SaveAs(&quot;{}.pdf&quot;.format(fn[:-4]), 17)  # 另存为后缀为&quot;.pdf&quot;的文件，其中参数17表示为pdf</span></span>
<span class="line"><span style="color:#e1e4e8;">    doc.Close()  # 关闭原来word文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    word.Quit()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 转换docx为pdf</span></span>
<span class="line"><span style="color:#e1e4e8;">def docx2pdf(fn):</span></span>
<span class="line"><span style="color:#e1e4e8;">    word = client.Dispatch(&quot;Word.Application&quot;)  # 打开word应用程序</span></span>
<span class="line"><span style="color:#e1e4e8;">    # for file in files:</span></span>
<span class="line"><span style="color:#e1e4e8;">    doc = word.Documents.Open(fn)  # 打开word文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    doc.SaveAs(&quot;{}.pdf&quot;.format(fn[:-5]), 17)  # 另存为后缀为&quot;.pdf&quot;的文件，其中参数17表示为pdf    </span></span>
<span class="line"><span style="color:#e1e4e8;">    doc.Close()  # 关闭原来word文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    word.Quit()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">docx2pdf(r&#39;C:\\Users\\asuka\\Desktop\\新建文件夹\\1.docx&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">doc2pdf(r&#39;C:\\Users\\asuka\\Desktop\\新建文件夹\\2.doc&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from win32com import client</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 转换doc为pdf</span></span>
<span class="line"><span style="color:#24292e;">def doc2pdf(fn):</span></span>
<span class="line"><span style="color:#24292e;">    word = client.Dispatch(&quot;Word.Application&quot;)  # 打开word应用程序</span></span>
<span class="line"><span style="color:#24292e;">    # for file in files:</span></span>
<span class="line"><span style="color:#24292e;">    doc = word.Documents.Open(fn)  # 打开word文件</span></span>
<span class="line"><span style="color:#24292e;">    doc.SaveAs(&quot;{}.pdf&quot;.format(fn[:-4]), 17)  # 另存为后缀为&quot;.pdf&quot;的文件，其中参数17表示为pdf</span></span>
<span class="line"><span style="color:#24292e;">    doc.Close()  # 关闭原来word文件</span></span>
<span class="line"><span style="color:#24292e;">    word.Quit()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 转换docx为pdf</span></span>
<span class="line"><span style="color:#24292e;">def docx2pdf(fn):</span></span>
<span class="line"><span style="color:#24292e;">    word = client.Dispatch(&quot;Word.Application&quot;)  # 打开word应用程序</span></span>
<span class="line"><span style="color:#24292e;">    # for file in files:</span></span>
<span class="line"><span style="color:#24292e;">    doc = word.Documents.Open(fn)  # 打开word文件</span></span>
<span class="line"><span style="color:#24292e;">    doc.SaveAs(&quot;{}.pdf&quot;.format(fn[:-5]), 17)  # 另存为后缀为&quot;.pdf&quot;的文件，其中参数17表示为pdf    </span></span>
<span class="line"><span style="color:#24292e;">    doc.Close()  # 关闭原来word文件</span></span>
<span class="line"><span style="color:#24292e;">    word.Quit()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">docx2pdf(r&#39;C:\\Users\\asuka\\Desktop\\新建文件夹\\1.docx&#39;)</span></span>
<span class="line"><span style="color:#24292e;">doc2pdf(r&#39;C:\\Users\\asuka\\Desktop\\新建文件夹\\2.doc&#39;)</span></span></code></pre></div><h1 id="linux下doc-docx互转-转pdf" tabindex="-1">linux下doc docx互转，转pdf <a class="header-anchor" href="#linux下doc-docx互转-转pdf" aria-label="Permalink to &quot;linux下doc docx互转，转pdf&quot;">​</a></h1><p>安装</p><div class="language-undefined vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">undefined</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yum install libreoffice</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yum install libreoffice</span></span></code></pre></div><p>测试</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">libreoffice --version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">libreoffice --version</span></span></code></pre></div><p>命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">libreoffice --headless --convert-to pdf --outdir /your/output/dir /your/doc_docx_wps/files/*.{dosx,doc,wps}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">libreoffice --headless --convert-to pdf --outdir /your/output/dir /your/doc_docx_wps/files/*.{dosx,doc,wps}</span></span></code></pre></div><h1 id="pdf转docx" tabindex="-1">pdf转docx <a class="header-anchor" href="#pdf转docx" aria-label="Permalink to &quot;pdf转docx&quot;">​</a></h1><p>安装</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pdf2docx</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pymupdf</span></span>
<span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">python-docx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pdf2docx</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pymupdf</span></span>
<span class="line"><span style="color:#6F42C1;">pip</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">python-docx</span></span></code></pre></div><p>代码</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> pdf2docx </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Converter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">pdf_file </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;/path/to/sample.pdf&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">docx_file </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;path/to/sample.docx&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># convert pdf to docx</span></span>
<span class="line"><span style="color:#E1E4E8;">cv </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Converter(pdf_file)</span></span>
<span class="line"><span style="color:#E1E4E8;">cv.convert(docx_file) </span><span style="color:#6A737D;"># 默认参数start=0, end=None</span></span>
<span class="line"><span style="color:#E1E4E8;">cv.close()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> pdf2docx </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Converter</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">pdf_file </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;/path/to/sample.pdf&#39;</span></span>
<span class="line"><span style="color:#24292E;">docx_file </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;path/to/sample.docx&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># convert pdf to docx</span></span>
<span class="line"><span style="color:#24292E;">cv </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Converter(pdf_file)</span></span>
<span class="line"><span style="color:#24292E;">cv.convert(docx_file) </span><span style="color:#6A737D;"># 默认参数start=0, end=None</span></span>
<span class="line"><span style="color:#24292E;">cv.close()</span></span></code></pre></div><h1 id="解析pdf" tabindex="-1">解析pdf <a class="header-anchor" href="#解析pdf" aria-label="Permalink to &quot;解析pdf&quot;">​</a></h1><p>安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install pdfplumber</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install pdfplumber</span></span></code></pre></div><h1 id="解析docx" tabindex="-1">解析docx <a class="header-anchor" href="#解析docx" aria-label="Permalink to &quot;解析docx&quot;">​</a></h1><p>安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install python-docx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install python-docx</span></span></code></pre></div>`,20),o=[l];function c(t,i,d,r,y,f){return a(),n("div",null,o)}const E=s(e,[["render",c]]);export{h as __pageData,E as default};
