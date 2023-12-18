import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.2516552c.js";const u=JSON.parse('{"title":"window下doc docx互转，转pdf","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Python/10python操作docx文件.md","filePath":"articles/Python/10python操作docx文件.md","lastUpdated":null}'),p={name:"articles/Python/10python操作docx文件.md"},l=e(`<h1 id="window下doc-docx互转-转pdf" tabindex="-1">window下doc docx互转，转pdf <a class="header-anchor" href="#window下doc-docx互转-转pdf" aria-label="Permalink to &quot;window下doc docx互转，转pdf&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from win32com import client</span></span>
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
<span class="line"><span style="color:#24292e;">doc2pdf(r&#39;C:\\Users\\asuka\\Desktop\\新建文件夹\\2.doc&#39;)</span></span></code></pre></div><h1 id="linux下doc-docx互转-转pdf" tabindex="-1">linux下doc docx互转，转pdf <a class="header-anchor" href="#linux下doc-docx互转-转pdf" aria-label="Permalink to &quot;linux下doc docx互转，转pdf&quot;">​</a></h1><p>安装</p><div class="language-undefined vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">undefined</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">yum install libreoffice</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">yum install libreoffice</span></span></code></pre></div><p>测试</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">libreoffice --version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">libreoffice --version</span></span></code></pre></div><p>命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">libreoffice --headless --convert-to pdf --outdir /your/output/dir /your/doc_docx_wps/files/*.{dosx,doc,wps}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">libreoffice --headless --convert-to pdf --outdir /your/output/dir /your/doc_docx_wps/files/*.{dosx,doc,wps}</span></span></code></pre></div><p>单个文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">libreoffice --headless --convert-to pdf path-to-your-doc.doc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">libreoffice --headless --convert-to pdf path-to-your-doc.doc</span></span></code></pre></div><p>用python脚本执行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import os</span></span>
<span class="line"><span style="color:#e1e4e8;">os.system(&quot;libreoffice --headless --convert-to txt path-to-your-doc.doc&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import os</span></span>
<span class="line"><span style="color:#24292e;">os.system(&quot;libreoffice --headless --convert-to txt path-to-your-doc.doc&quot;)</span></span></code></pre></div><h1 id="linux下doc-docx互站-转pdf" tabindex="-1">linux下doc docx互站，转pdf <a class="header-anchor" href="#linux下doc-docx互站-转pdf" aria-label="Permalink to &quot;linux下doc docx互站，转pdf&quot;">​</a></h1><p>上次发现有一个doc文件libreoffice识别不了，pandoc也识别不了。</p><p>最后用一款商业软件aspose解决了。</p><p>下载（从PyPI下载whl解决）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install aspose-words</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install aspose-words</span></span></code></pre></div><p>使用：有水印！！</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import aspose.words as aw</span></span>
<span class="line"><span style="color:#e1e4e8;">from aspose.words import Document</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">doc = aw.Document(&quot;00.doc&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">doc.save(&quot;output.docx&quot;, aw.SaveFormat.DOCX)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import aspose.words as aw</span></span>
<span class="line"><span style="color:#24292e;">from aspose.words import Document</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">doc = aw.Document(&quot;00.doc&quot;)</span></span>
<span class="line"><span style="color:#24292e;">doc.save(&quot;output.docx&quot;, aw.SaveFormat.DOCX)</span></span></code></pre></div><h1 id="pdf转docx" tabindex="-1">pdf转docx <a class="header-anchor" href="#pdf转docx" aria-label="Permalink to &quot;pdf转docx&quot;">​</a></h1><p>在linux和window下都支持pdf2docx。</p><p>安装</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pip</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pdf2docx</span></span>
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
<span class="line"><span style="color:#24292E;">cv.close()</span></span></code></pre></div><h1 id="解析pdf" tabindex="-1">解析pdf <a class="header-anchor" href="#解析pdf" aria-label="Permalink to &quot;解析pdf&quot;">​</a></h1><p>安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install pdfplumber</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install pdfplumber</span></span></code></pre></div><h1 id="解析docx" tabindex="-1">解析docx <a class="header-anchor" href="#解析docx" aria-label="Permalink to &quot;解析docx&quot;">​</a></h1><p>安装（很好用，推荐）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install python-docx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install python-docx</span></span></code></pre></div><p>遍历文本、图片、表格</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import docx</span></span>
<span class="line"><span style="color:#e1e4e8;">from docx.document import Document</span></span>
<span class="line"><span style="color:#e1e4e8;">from docx.oxml.table import CT_Tbl</span></span>
<span class="line"><span style="color:#e1e4e8;">from docx.oxml.text.paragraph import CT_P</span></span>
<span class="line"><span style="color:#e1e4e8;">from docx.parts.image import ImagePart</span></span>
<span class="line"><span style="color:#e1e4e8;">from docx.table import Table, _Cell</span></span>
<span class="line"><span style="color:#e1e4e8;">from docx.text.paragraph import Paragraph</span></span>
<span class="line"><span style="color:#e1e4e8;">import io</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 该行只能有一个图片</span></span>
<span class="line"><span style="color:#e1e4e8;">def is_image(graph: Paragraph, doc: Document):</span></span>
<span class="line"><span style="color:#e1e4e8;">    images = graph._element.xpath(&#39;.//pic:pic&#39;)  # 获取所有图片</span></span>
<span class="line"><span style="color:#e1e4e8;">    print(images)</span></span>
<span class="line"><span style="color:#e1e4e8;">    for image in images:</span></span>
<span class="line"><span style="color:#e1e4e8;">        for img_id in image.xpath(&#39;.//a:blip/@r:embed&#39;):  # 获取图片id</span></span>
<span class="line"><span style="color:#e1e4e8;">            part = doc.part.related_parts[img_id]  # 根据图片id获取对应的图片</span></span>
<span class="line"><span style="color:#e1e4e8;">            if isinstance(part, ImagePart):</span></span>
<span class="line"><span style="color:#e1e4e8;">                return True</span></span>
<span class="line"><span style="color:#e1e4e8;">    return False</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 获取图片（该行只能有一个图片）</span></span>
<span class="line"><span style="color:#e1e4e8;">def get_ImagePart(graph: Paragraph, doc: Document):</span></span>
<span class="line"><span style="color:#e1e4e8;">    images = graph._element.xpath(&#39;.//pic:pic&#39;)  # 获取所有图片</span></span>
<span class="line"><span style="color:#e1e4e8;">    for image in images:</span></span>
<span class="line"><span style="color:#e1e4e8;">        for img_id in image.xpath(&#39;.//a:blip/@r:embed&#39;):  # 获取图片id</span></span>
<span class="line"><span style="color:#e1e4e8;">            part = doc.part.related_parts[img_id]  # 根据图片id获取对应的图片</span></span>
<span class="line"><span style="color:#e1e4e8;">            if isinstance(part, ImagePart):</span></span>
<span class="line"><span style="color:#e1e4e8;">                return part</span></span>
<span class="line"><span style="color:#e1e4e8;">    return None</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">def iter_block_items(parent):</span></span>
<span class="line"><span style="color:#e1e4e8;">    if isinstance(parent, Document):</span></span>
<span class="line"><span style="color:#e1e4e8;">        parent_elm = parent.element.body</span></span>
<span class="line"><span style="color:#e1e4e8;">    elif isinstance(parent, _Cell):</span></span>
<span class="line"><span style="color:#e1e4e8;">        parent_elm = parent._tc</span></span>
<span class="line"><span style="color:#e1e4e8;">    else:</span></span>
<span class="line"><span style="color:#e1e4e8;">        raise ValueError(&quot;something&#39;s not right&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    for child in parent_elm.iterchildren():</span></span>
<span class="line"><span style="color:#e1e4e8;">        if isinstance(child, CT_P):</span></span>
<span class="line"><span style="color:#e1e4e8;">            paragraph = Paragraph(child, parent)</span></span>
<span class="line"><span style="color:#e1e4e8;">            if is_image(paragraph, parent):</span></span>
<span class="line"><span style="color:#e1e4e8;">                yield get_ImagePart(paragraph, parent)</span></span>
<span class="line"><span style="color:#e1e4e8;">            else:</span></span>
<span class="line"><span style="color:#e1e4e8;">                yield Paragraph(child, Paragraph)</span></span>
<span class="line"><span style="color:#e1e4e8;">        elif isinstance(child, CT_Tbl):</span></span>
<span class="line"><span style="color:#e1e4e8;">            yield Table(child, Table)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">doc = docx.Document(&quot;00.docx&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">for part in iter_block_items(doc):</span></span>
<span class="line"><span style="color:#e1e4e8;">    if isinstance(part, Paragraph):</span></span>
<span class="line"><span style="color:#e1e4e8;">        _ctx = part.text.strip()</span></span>
<span class="line"><span style="color:#e1e4e8;">        print(_ctx)</span></span>
<span class="line"><span style="color:#e1e4e8;">    elif isinstance(part, Table):</span></span>
<span class="line"><span style="color:#e1e4e8;">        table_ctx = []</span></span>
<span class="line"><span style="color:#e1e4e8;">        for row in part.rows:</span></span>
<span class="line"><span style="color:#e1e4e8;">            for cell in row.cells:</span></span>
<span class="line"><span style="color:#e1e4e8;">                _ctx = cell.text.strip()</span></span>
<span class="line"><span style="color:#e1e4e8;">                table_ctx.append(_ctx)</span></span>
<span class="line"><span style="color:#e1e4e8;">        print(table_ctx)</span></span>
<span class="line"><span style="color:#e1e4e8;">    elif isinstance(part, ImagePart):</span></span>
<span class="line"><span style="color:#e1e4e8;">        io_file = io.BytesIO(part.blob)</span></span>
<span class="line"><span style="color:#e1e4e8;">        # tmp = ocr_img_io(io_file)</span></span>
<span class="line"><span style="color:#e1e4e8;">        print(&#39;img&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import docx</span></span>
<span class="line"><span style="color:#24292e;">from docx.document import Document</span></span>
<span class="line"><span style="color:#24292e;">from docx.oxml.table import CT_Tbl</span></span>
<span class="line"><span style="color:#24292e;">from docx.oxml.text.paragraph import CT_P</span></span>
<span class="line"><span style="color:#24292e;">from docx.parts.image import ImagePart</span></span>
<span class="line"><span style="color:#24292e;">from docx.table import Table, _Cell</span></span>
<span class="line"><span style="color:#24292e;">from docx.text.paragraph import Paragraph</span></span>
<span class="line"><span style="color:#24292e;">import io</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 该行只能有一个图片</span></span>
<span class="line"><span style="color:#24292e;">def is_image(graph: Paragraph, doc: Document):</span></span>
<span class="line"><span style="color:#24292e;">    images = graph._element.xpath(&#39;.//pic:pic&#39;)  # 获取所有图片</span></span>
<span class="line"><span style="color:#24292e;">    print(images)</span></span>
<span class="line"><span style="color:#24292e;">    for image in images:</span></span>
<span class="line"><span style="color:#24292e;">        for img_id in image.xpath(&#39;.//a:blip/@r:embed&#39;):  # 获取图片id</span></span>
<span class="line"><span style="color:#24292e;">            part = doc.part.related_parts[img_id]  # 根据图片id获取对应的图片</span></span>
<span class="line"><span style="color:#24292e;">            if isinstance(part, ImagePart):</span></span>
<span class="line"><span style="color:#24292e;">                return True</span></span>
<span class="line"><span style="color:#24292e;">    return False</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 获取图片（该行只能有一个图片）</span></span>
<span class="line"><span style="color:#24292e;">def get_ImagePart(graph: Paragraph, doc: Document):</span></span>
<span class="line"><span style="color:#24292e;">    images = graph._element.xpath(&#39;.//pic:pic&#39;)  # 获取所有图片</span></span>
<span class="line"><span style="color:#24292e;">    for image in images:</span></span>
<span class="line"><span style="color:#24292e;">        for img_id in image.xpath(&#39;.//a:blip/@r:embed&#39;):  # 获取图片id</span></span>
<span class="line"><span style="color:#24292e;">            part = doc.part.related_parts[img_id]  # 根据图片id获取对应的图片</span></span>
<span class="line"><span style="color:#24292e;">            if isinstance(part, ImagePart):</span></span>
<span class="line"><span style="color:#24292e;">                return part</span></span>
<span class="line"><span style="color:#24292e;">    return None</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">def iter_block_items(parent):</span></span>
<span class="line"><span style="color:#24292e;">    if isinstance(parent, Document):</span></span>
<span class="line"><span style="color:#24292e;">        parent_elm = parent.element.body</span></span>
<span class="line"><span style="color:#24292e;">    elif isinstance(parent, _Cell):</span></span>
<span class="line"><span style="color:#24292e;">        parent_elm = parent._tc</span></span>
<span class="line"><span style="color:#24292e;">    else:</span></span>
<span class="line"><span style="color:#24292e;">        raise ValueError(&quot;something&#39;s not right&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    for child in parent_elm.iterchildren():</span></span>
<span class="line"><span style="color:#24292e;">        if isinstance(child, CT_P):</span></span>
<span class="line"><span style="color:#24292e;">            paragraph = Paragraph(child, parent)</span></span>
<span class="line"><span style="color:#24292e;">            if is_image(paragraph, parent):</span></span>
<span class="line"><span style="color:#24292e;">                yield get_ImagePart(paragraph, parent)</span></span>
<span class="line"><span style="color:#24292e;">            else:</span></span>
<span class="line"><span style="color:#24292e;">                yield Paragraph(child, Paragraph)</span></span>
<span class="line"><span style="color:#24292e;">        elif isinstance(child, CT_Tbl):</span></span>
<span class="line"><span style="color:#24292e;">            yield Table(child, Table)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">doc = docx.Document(&quot;00.docx&quot;)</span></span>
<span class="line"><span style="color:#24292e;">for part in iter_block_items(doc):</span></span>
<span class="line"><span style="color:#24292e;">    if isinstance(part, Paragraph):</span></span>
<span class="line"><span style="color:#24292e;">        _ctx = part.text.strip()</span></span>
<span class="line"><span style="color:#24292e;">        print(_ctx)</span></span>
<span class="line"><span style="color:#24292e;">    elif isinstance(part, Table):</span></span>
<span class="line"><span style="color:#24292e;">        table_ctx = []</span></span>
<span class="line"><span style="color:#24292e;">        for row in part.rows:</span></span>
<span class="line"><span style="color:#24292e;">            for cell in row.cells:</span></span>
<span class="line"><span style="color:#24292e;">                _ctx = cell.text.strip()</span></span>
<span class="line"><span style="color:#24292e;">                table_ctx.append(_ctx)</span></span>
<span class="line"><span style="color:#24292e;">        print(table_ctx)</span></span>
<span class="line"><span style="color:#24292e;">    elif isinstance(part, ImagePart):</span></span>
<span class="line"><span style="color:#24292e;">        io_file = io.BytesIO(part.blob)</span></span>
<span class="line"><span style="color:#24292e;">        # tmp = ocr_img_io(io_file)</span></span>
<span class="line"><span style="color:#24292e;">        print(&#39;img&#39;)</span></span></code></pre></div>`,34),o=[l];function c(t,i,r,d,y,h){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{u as __pageData,m as default};
