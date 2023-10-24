import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.2516552c.js";const m=JSON.parse('{"title":"1. 前端使用js的BLOB对象分片","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/01Java语法/10Web前后端大文件上传和接收.md","filePath":"articles/Java/01Java语法/10Web前后端大文件上传和接收.md","lastUpdated":1698149129000}'),l={name:"articles/Java/01Java语法/10Web前后端大文件上传和接收.md"},p=a(`<h1 id="_1-前端使用js的blob对象分片" tabindex="-1">1. 前端使用js的BLOB对象分片 <a class="header-anchor" href="#_1-前端使用js的blob对象分片" aria-label="Permalink to &quot;1. 前端使用js的BLOB对象分片&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let curFile = $(&quot;#crmImportForm #importFile&quot;)[0].files[0];</span></span>
<span class="line"><span style="color:#e1e4e8;">let curFilename = new Date().getTime() + curFile.name;</span></span>
<span class="line"><span style="color:#e1e4e8;">let mergeUrl = &#39;\${ctx}/tools/file/uploader&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">if (uploadFile(curFile, curFilename, mergeUrl)){</span></span>
<span class="line"><span style="color:#e1e4e8;"> // 成功</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">uploadFile: function (blob, filename, url) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let bytesPerPiesce = 1024 * 1024 * 10; // 10M</span></span>
<span class="line"><span style="color:#e1e4e8;">    let filesize = blob.size;</span></span>
<span class="line"><span style="color:#e1e4e8;">    let start = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    let end;</span></span>
<span class="line"><span style="color:#e1e4e8;">    let index = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    while (start &lt; filesize) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        end = start + bytesPerPiesce</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (end &gt; filesize) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            end = filesize;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        let chunk = blob.slice(start, end); // 分片</span></span>
<span class="line"><span style="color:#e1e4e8;">        let formData = new FormData();      // 往后台传递参数</span></span>
<span class="line"><span style="color:#e1e4e8;">        formData.append(&#39;file&#39;, chunk);</span></span>
<span class="line"><span style="color:#e1e4e8;">        formData.append(&#39;filename&#39;, filename);  // filename保证每次都一样，并且唯一</span></span>
<span class="line"><span style="color:#e1e4e8;">        formData.append(&#39;index&#39;, index * bytesPerPiesce);</span></span>
<span class="line"><span style="color:#e1e4e8;">        $.ajax({</span></span>
<span class="line"><span style="color:#e1e4e8;">            url: url,</span></span>
<span class="line"><span style="color:#e1e4e8;">            type: &#39;POST&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">            cache: false,</span></span>
<span class="line"><span style="color:#e1e4e8;">            data: formData,</span></span>
<span class="line"><span style="color:#e1e4e8;">            async: false,  // 同步上传</span></span>
<span class="line"><span style="color:#e1e4e8;">            processData: false,</span></span>
<span class="line"><span style="color:#e1e4e8;">            contentType: false,</span></span>
<span class="line"><span style="color:#e1e4e8;">        }).fail(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }).success(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(filename + &quot;: &quot; + index);</span></span>
<span class="line"><span style="color:#e1e4e8;">        });</span></span>
<span class="line"><span style="color:#e1e4e8;">        start = end;</span></span>
<span class="line"><span style="color:#e1e4e8;">        index += 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return true;</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let curFile = $(&quot;#crmImportForm #importFile&quot;)[0].files[0];</span></span>
<span class="line"><span style="color:#24292e;">let curFilename = new Date().getTime() + curFile.name;</span></span>
<span class="line"><span style="color:#24292e;">let mergeUrl = &#39;\${ctx}/tools/file/uploader&#39;;</span></span>
<span class="line"><span style="color:#24292e;">if (uploadFile(curFile, curFilename, mergeUrl)){</span></span>
<span class="line"><span style="color:#24292e;"> // 成功</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">uploadFile: function (blob, filename, url) {</span></span>
<span class="line"><span style="color:#24292e;">    let bytesPerPiesce = 1024 * 1024 * 10; // 10M</span></span>
<span class="line"><span style="color:#24292e;">    let filesize = blob.size;</span></span>
<span class="line"><span style="color:#24292e;">    let start = 0;</span></span>
<span class="line"><span style="color:#24292e;">    let end;</span></span>
<span class="line"><span style="color:#24292e;">    let index = 0;</span></span>
<span class="line"><span style="color:#24292e;">    while (start &lt; filesize) {</span></span>
<span class="line"><span style="color:#24292e;">        end = start + bytesPerPiesce</span></span>
<span class="line"><span style="color:#24292e;">        if (end &gt; filesize) {</span></span>
<span class="line"><span style="color:#24292e;">            end = filesize;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        let chunk = blob.slice(start, end); // 分片</span></span>
<span class="line"><span style="color:#24292e;">        let formData = new FormData();      // 往后台传递参数</span></span>
<span class="line"><span style="color:#24292e;">        formData.append(&#39;file&#39;, chunk);</span></span>
<span class="line"><span style="color:#24292e;">        formData.append(&#39;filename&#39;, filename);  // filename保证每次都一样，并且唯一</span></span>
<span class="line"><span style="color:#24292e;">        formData.append(&#39;index&#39;, index * bytesPerPiesce);</span></span>
<span class="line"><span style="color:#24292e;">        $.ajax({</span></span>
<span class="line"><span style="color:#24292e;">            url: url,</span></span>
<span class="line"><span style="color:#24292e;">            type: &#39;POST&#39;,</span></span>
<span class="line"><span style="color:#24292e;">            cache: false,</span></span>
<span class="line"><span style="color:#24292e;">            data: formData,</span></span>
<span class="line"><span style="color:#24292e;">            async: false,  // 同步上传</span></span>
<span class="line"><span style="color:#24292e;">            processData: false,</span></span>
<span class="line"><span style="color:#24292e;">            contentType: false,</span></span>
<span class="line"><span style="color:#24292e;">        }).fail(function () {</span></span>
<span class="line"><span style="color:#24292e;">            return false;</span></span>
<span class="line"><span style="color:#24292e;">        }).success(function () {</span></span>
<span class="line"><span style="color:#24292e;">            console.log(filename + &quot;: &quot; + index);</span></span>
<span class="line"><span style="color:#24292e;">        });</span></span>
<span class="line"><span style="color:#24292e;">        start = end;</span></span>
<span class="line"><span style="color:#24292e;">        index += 1;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return true;</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><h1 id="_2-后端再合并文件" tabindex="-1">2. 后端再合并文件 <a class="header-anchor" href="#_2-后端再合并文件" aria-label="Permalink to &quot;2. 后端再合并文件&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@PostMapping(value = &quot;/file/uploader&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">@ResponseBody</span></span>
<span class="line"><span style="color:#e1e4e8;">public void webUploaderImport(@RequestParam(&quot;file&quot;) MultipartFile multipartFile, String filename, Long index) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    RandomAccessFile accessFile = null;</span></span>
<span class="line"><span style="color:#e1e4e8;">    BufferedInputStream inputStream = null;</span></span>
<span class="line"><span style="color:#e1e4e8;">    try {</span></span>
<span class="line"><span style="color:#e1e4e8;">     // fileStorePath文件存储路径</span></span>
<span class="line"><span style="color:#e1e4e8;">        File file = new File(fileStorePath, filename);</span></span>
<span class="line"><span style="color:#e1e4e8;">        accessFile = new RandomAccessFile(file, &quot;rw&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 类似于指针定位</span></span>
<span class="line"><span style="color:#e1e4e8;">        accessFile.seek(index);</span></span>
<span class="line"><span style="color:#e1e4e8;">        inputStream = new BufferedInputStream(multipartFile.getInputStream());</span></span>
<span class="line"><span style="color:#e1e4e8;">        byte[] buf = new byte[1024];</span></span>
<span class="line"><span style="color:#e1e4e8;">        int length = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        while ((length = inputStream.read(buf)) != -1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            accessFile.write(buf, 0, length);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">    } finally {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (inputStream != null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                inputStream.close();</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (accessFile != null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                accessFile.close();</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@PostMapping(value = &quot;/file/uploader&quot;)</span></span>
<span class="line"><span style="color:#24292e;">@ResponseBody</span></span>
<span class="line"><span style="color:#24292e;">public void webUploaderImport(@RequestParam(&quot;file&quot;) MultipartFile multipartFile, String filename, Long index) {</span></span>
<span class="line"><span style="color:#24292e;">    RandomAccessFile accessFile = null;</span></span>
<span class="line"><span style="color:#24292e;">    BufferedInputStream inputStream = null;</span></span>
<span class="line"><span style="color:#24292e;">    try {</span></span>
<span class="line"><span style="color:#24292e;">     // fileStorePath文件存储路径</span></span>
<span class="line"><span style="color:#24292e;">        File file = new File(fileStorePath, filename);</span></span>
<span class="line"><span style="color:#24292e;">        accessFile = new RandomAccessFile(file, &quot;rw&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        // 类似于指针定位</span></span>
<span class="line"><span style="color:#24292e;">        accessFile.seek(index);</span></span>
<span class="line"><span style="color:#24292e;">        inputStream = new BufferedInputStream(multipartFile.getInputStream());</span></span>
<span class="line"><span style="color:#24292e;">        byte[] buf = new byte[1024];</span></span>
<span class="line"><span style="color:#24292e;">        int length = 0;</span></span>
<span class="line"><span style="color:#24292e;">        while ((length = inputStream.read(buf)) != -1) {</span></span>
<span class="line"><span style="color:#24292e;">            accessFile.write(buf, 0, length);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">        e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">    } finally {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            if (inputStream != null) {</span></span>
<span class="line"><span style="color:#24292e;">                inputStream.close();</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            if (accessFile != null) {</span></span>
<span class="line"><span style="color:#24292e;">                accessFile.close();</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,4),c=[p];function o(t,i,r,y,u,d){return n(),e("div",null,c)}const h=s(l,[["render",o]]);export{m as __pageData,h as default};
