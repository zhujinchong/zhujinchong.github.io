import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.2516552c.js";const q=JSON.parse('{"title":"1. 原理","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/01Java语法/10Java读大数据量csv.md","filePath":"articles/Java/01Java语法/10Java读大数据量csv.md","lastUpdated":null}'),l={name:"articles/Java/01Java语法/10Java读大数据量csv.md"},p=a(`<h1 id="_1-原理" tabindex="-1">1. 原理 <a class="header-anchor" href="#_1-原理" aria-label="Permalink to &quot;1. 原理&quot;">​</a></h1><p>用Java流的方式，一行一行读取。</p><h1 id="_2-读csv代码" tabindex="-1">2. 读CSV代码 <a class="header-anchor" href="#_2-读csv代码" aria-label="Permalink to &quot;2. 读CSV代码&quot;">​</a></h1><h3 id="_1-业务接口" tabindex="-1">1. 业务接口 <a class="header-anchor" href="#_1-业务接口" aria-label="Permalink to &quot;1. 业务接口&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class CsvRowReaderImpl implements CsvRowReaderInterface{</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void getRows(Long curRow, List&lt;String&gt; rowlist) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(rowlist);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class CsvRowReaderImpl implements CsvRowReaderInterface{</span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public void getRows(Long curRow, List&lt;String&gt; rowlist) {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(rowlist);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_2-实现" tabindex="-1">2. 实现 <a class="header-anchor" href="#_2-实现" aria-label="Permalink to &quot;2. 实现&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class CsvReader {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private CsvRowReaderInterface rowReader;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public CsvReader(CsvRowReaderInterface rowReader) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.rowReader = rowReader;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public void readCsvByBufferReader(File file) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(file), &quot;gbk&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">            String line = null;</span></span>
<span class="line"><span style="color:#e1e4e8;">            Long curRow = -1L;</span></span>
<span class="line"><span style="color:#e1e4e8;">            while ((line = reader.readLine()) != null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                curRow++;</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (!&quot;&quot;.equals(line.trim())) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                 // 因为csv是&quot;,&quot;分割，同时还有这样的数据&quot;&quot;xx,yy&quot;&quot;，因此需要逗号分割，且不能分割双引号里面的数据</span></span>
<span class="line"><span style="color:#e1e4e8;">                    // 如数据：test,aaa,bb,123,&quot;hello,world&quot;,ccc,ddd</span></span>
<span class="line"><span style="color:#e1e4e8;">                    String[] split = line.trim().split(&quot;,(?=([^\\\\\\&quot;]*\\\\\\&quot;[^\\\\\\&quot;]*\\\\\\&quot;)*[^\\\\\\&quot;]*$)&quot;, -1);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    for (int i = 0; i &lt; split.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                  // 去除前后端双引号</span></span>
<span class="line"><span style="color:#e1e4e8;">                        split[i] = split[i].replaceAll(&quot;^\\&quot;|\\&quot;$&quot;, &quot;&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    List&lt;String&gt; strings = Arrays.asList(split);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    // 调用接口</span></span>
<span class="line"><span style="color:#e1e4e8;">                    rowReader.getRows(curRow, strings);</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        CsvRowReaderImpl csvRowReader = new CsvRowReaderImpl();</span></span>
<span class="line"><span style="color:#e1e4e8;">        CsvReader csvReader = new CsvReader(csvRowReader);</span></span>
<span class="line"><span style="color:#e1e4e8;">        csvReader.readCsvByBufferReader(new File(&quot;D:\\\\test\\\\BTS Information.csv&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class CsvReader {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private CsvRowReaderInterface rowReader;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public CsvReader(CsvRowReaderInterface rowReader) {</span></span>
<span class="line"><span style="color:#24292e;">        this.rowReader = rowReader;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void readCsvByBufferReader(File file) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(file), &quot;gbk&quot;));</span></span>
<span class="line"><span style="color:#24292e;">            String line = null;</span></span>
<span class="line"><span style="color:#24292e;">            Long curRow = -1L;</span></span>
<span class="line"><span style="color:#24292e;">            while ((line = reader.readLine()) != null) {</span></span>
<span class="line"><span style="color:#24292e;">                curRow++;</span></span>
<span class="line"><span style="color:#24292e;">                if (!&quot;&quot;.equals(line.trim())) {</span></span>
<span class="line"><span style="color:#24292e;">                 // 因为csv是&quot;,&quot;分割，同时还有这样的数据&quot;&quot;xx,yy&quot;&quot;，因此需要逗号分割，且不能分割双引号里面的数据</span></span>
<span class="line"><span style="color:#24292e;">                    // 如数据：test,aaa,bb,123,&quot;hello,world&quot;,ccc,ddd</span></span>
<span class="line"><span style="color:#24292e;">                    String[] split = line.trim().split(&quot;,(?=([^\\\\\\&quot;]*\\\\\\&quot;[^\\\\\\&quot;]*\\\\\\&quot;)*[^\\\\\\&quot;]*$)&quot;, -1);</span></span>
<span class="line"><span style="color:#24292e;">                    for (int i = 0; i &lt; split.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">                  // 去除前后端双引号</span></span>
<span class="line"><span style="color:#24292e;">                        split[i] = split[i].replaceAll(&quot;^\\&quot;|\\&quot;$&quot;, &quot;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                    List&lt;String&gt; strings = Arrays.asList(split);</span></span>
<span class="line"><span style="color:#24292e;">                    // 调用接口</span></span>
<span class="line"><span style="color:#24292e;">                    rowReader.getRows(curRow, strings);</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        CsvRowReaderImpl csvRowReader = new CsvRowReaderImpl();</span></span>
<span class="line"><span style="color:#24292e;">        CsvReader csvReader = new CsvReader(csvRowReader);</span></span>
<span class="line"><span style="color:#24292e;">        csvReader.readCsvByBufferReader(new File(&quot;D:\\\\test\\\\BTS Information.csv&quot;));</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="_3-工具类" tabindex="-1">3. 工具类 <a class="header-anchor" href="#_3-工具类" aria-label="Permalink to &quot;3. 工具类&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class CsvReaderUtil {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void readCsv(CsvRowReaderInterface reader, File file) throws Exception {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String fileName = file.getName();</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (fileName.endsWith(&quot;.csv&quot;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            CsvReader csvReader = new CsvReader(reader);</span></span>
<span class="line"><span style="color:#e1e4e8;">            csvReader.readCsvByBufferReader(file);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            throw new Exception(&quot;文件格式错误，fileName的扩展名只能是csv。&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span style="color:#e1e4e8;">        CsvRowReaderImpl csvRowReader = new CsvRowReaderImpl();</span></span>
<span class="line"><span style="color:#e1e4e8;">        CsvReaderUtil.readCsv(csvRowReader, new File(&quot;D:\\\\test\\\\BTS Information.csv&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class CsvReaderUtil {</span></span>
<span class="line"><span style="color:#24292e;">    public static void readCsv(CsvRowReaderInterface reader, File file) throws Exception {</span></span>
<span class="line"><span style="color:#24292e;">        String fileName = file.getName();</span></span>
<span class="line"><span style="color:#24292e;">        if (fileName.endsWith(&quot;.csv&quot;)) {</span></span>
<span class="line"><span style="color:#24292e;">            CsvReader csvReader = new CsvReader(reader);</span></span>
<span class="line"><span style="color:#24292e;">            csvReader.readCsvByBufferReader(file);</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            throw new Exception(&quot;文件格式错误，fileName的扩展名只能是csv。&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span style="color:#24292e;">        CsvRowReaderImpl csvRowReader = new CsvRowReaderImpl();</span></span>
<span class="line"><span style="color:#24292e;">        CsvReaderUtil.readCsv(csvRowReader, new File(&quot;D:\\\\test\\\\BTS Information.csv&quot;));</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h1 id="_3-web文件下载" tabindex="-1">3. web文件下载 <a class="header-anchor" href="#_3-web文件下载" aria-label="Permalink to &quot;3. web文件下载&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@RequestMapping(value = &quot;/download/{filename}&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public void download(@PathVariable(&quot;filename&quot;) String filename, HttpServletRequest req, HttpServletResponse resp) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    InputStream in = null;</span></span>
<span class="line"><span style="color:#e1e4e8;">    File file = null;</span></span>
<span class="line"><span style="color:#e1e4e8;">    // filename包含文件路径进行了编码，需要解码</span></span>
<span class="line"><span style="color:#e1e4e8;">    filename = new String(Base64.getDecoder().decode(filename.getBytes()));</span></span>
<span class="line"><span style="color:#e1e4e8;">    try {</span></span>
<span class="line"><span style="color:#e1e4e8;">        file = new File(filename);</span></span>
<span class="line"><span style="color:#e1e4e8;">        in = new FileInputStream(file);</span></span>
<span class="line"><span style="color:#e1e4e8;">        OutputStream out = resp.getOutputStream();</span></span>
<span class="line"><span style="color:#e1e4e8;">        String nameDownload = filename.substring(filename.lastIndexOf(&quot;\\\\&quot;) + 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">        nameDownload = nameDownload.substring(nameDownload.lastIndexOf(&quot;/&quot;) + 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">        resp.addHeader(&quot;Content-Disposition&quot;, &quot;attachment;filename=&quot; + nameDownload);</span></span>
<span class="line"><span style="color:#e1e4e8;">        resp.setContentType(&quot;application/octet-stream&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        IOUtils.copy(in, out);</span></span>
<span class="line"><span style="color:#e1e4e8;">    } catch (IOException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        logger.error(&quot;&quot;, e);</span></span>
<span class="line"><span style="color:#e1e4e8;">    } finally {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (in != null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                in.close();</span></span>
<span class="line"><span style="color:#e1e4e8;">                //file.delete();// 删除文件.</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            // out不需要关</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (IOException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            logger.error(&quot;&quot;, e);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@RequestMapping(value = &quot;/download/{filename}&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public void download(@PathVariable(&quot;filename&quot;) String filename, HttpServletRequest req, HttpServletResponse resp) {</span></span>
<span class="line"><span style="color:#24292e;">    InputStream in = null;</span></span>
<span class="line"><span style="color:#24292e;">    File file = null;</span></span>
<span class="line"><span style="color:#24292e;">    // filename包含文件路径进行了编码，需要解码</span></span>
<span class="line"><span style="color:#24292e;">    filename = new String(Base64.getDecoder().decode(filename.getBytes()));</span></span>
<span class="line"><span style="color:#24292e;">    try {</span></span>
<span class="line"><span style="color:#24292e;">        file = new File(filename);</span></span>
<span class="line"><span style="color:#24292e;">        in = new FileInputStream(file);</span></span>
<span class="line"><span style="color:#24292e;">        OutputStream out = resp.getOutputStream();</span></span>
<span class="line"><span style="color:#24292e;">        String nameDownload = filename.substring(filename.lastIndexOf(&quot;\\\\&quot;) + 1);</span></span>
<span class="line"><span style="color:#24292e;">        nameDownload = nameDownload.substring(nameDownload.lastIndexOf(&quot;/&quot;) + 1);</span></span>
<span class="line"><span style="color:#24292e;">        resp.addHeader(&quot;Content-Disposition&quot;, &quot;attachment;filename=&quot; + nameDownload);</span></span>
<span class="line"><span style="color:#24292e;">        resp.setContentType(&quot;application/octet-stream&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        IOUtils.copy(in, out);</span></span>
<span class="line"><span style="color:#24292e;">    } catch (IOException e) {</span></span>
<span class="line"><span style="color:#24292e;">        logger.error(&quot;&quot;, e);</span></span>
<span class="line"><span style="color:#24292e;">    } finally {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            if (in != null) {</span></span>
<span class="line"><span style="color:#24292e;">                in.close();</span></span>
<span class="line"><span style="color:#24292e;">                //file.delete();// 删除文件.</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            // out不需要关</span></span>
<span class="line"><span style="color:#24292e;">        } catch (IOException e) {</span></span>
<span class="line"><span style="color:#24292e;">            logger.error(&quot;&quot;, e);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,11),o=[p];function t(c,r,i,d,u,y){return e(),n("div",null,o)}const R=s(l,[["render",t]]);export{q as __pageData,R as default};
