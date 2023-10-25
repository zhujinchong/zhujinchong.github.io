import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.2516552c.js";const m=JSON.parse('{"title":"1. Excel2003与Excel2007","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/01Java语法/10Java读大数据量excel.md","filePath":"articles/Java/01Java语法/10Java读大数据量excel.md","lastUpdated":1698198415000}'),l={name:"articles/Java/01Java语法/10Java读大数据量excel.md"},p=a(`<p>本文主要是用于POI解析大文件Excel容易出现内存溢出的现象而提出解决方案，故此解决了大数据量的Excel文件解析的难度，在此拿出来贡献给大家，谢谢！</p><h1 id="_1-excel2003与excel2007" tabindex="-1">1. Excel2003与Excel2007 <a class="header-anchor" href="#_1-excel2003与excel2007" aria-label="Permalink to &quot;1. Excel2003与Excel2007&quot;">​</a></h1><p>2003版最大行数是65536行，最大列数是256列。 2007版及以后的版本最大行数是1048576行，最大列数是16384列。 excel2003是以二进制的方式存储，这种格式不易被其他软件读取使用；而excel2007采用了基于XML的ooxml开放文档标准，ooxml使用XML和ZIP技术结合进行文件存储，XML是一个基于文本的格式，而且ZIP容器支持内容的压缩，所以其一大优势是可以大大减小文件的尺寸。</p><h1 id="_2-poi解析excel" tabindex="-1">2. POI解析Excel <a class="header-anchor" href="#_2-poi解析excel" aria-label="Permalink to &quot;2. POI解析Excel&quot;">​</a></h1><p>Apache POI是Apache软件基金会的开放源码函式库，POI提供API给Java程序对Microsoft Office格式档案读和写的功能。</p><p>POI<strong>读取</strong>Excel有两种模式，一种是用户模式，一种是SAX事件驱动模式，将xlsx格式的文档转换成CSV格式后进行读取。用户模式API接口丰富，使用POI的API可以很容易读取Excel，但用户模式消耗的内存很大，当遇到很大sheet、大数据网格，假空行、公式等问题时，很容易导致内存溢出。POI官方推荐解决内存溢出的方式使用CVS格式解析，即SAX事件驱动模式。</p><p>用户模式提供的方法：</p><ul><li>HSSFWorkbook － 提供读写Microsoft Excel格式档案的功能。(2003版本，xls)</li><li>XSSFWorkbook － 提供读写Microsoft Excel OOXML格式档案的功能。(2007版本，xlsx)</li></ul><p>如果是大数据量，上面HSSF和XSSF容易内存溢出。所以POI3.8提供了SXSSFWorkbook类，采用缓存方式进行大批量写文件。SAX事件驱动模式读取大文件。</p><h1 id="_3-poi版本" tabindex="-1">3. POI版本 <a class="header-anchor" href="#_3-poi版本" aria-label="Permalink to &quot;3. POI版本&quot;">​</a></h1><p>POI3.17版本和POI3.9版本差别巨大，因为项目已才用3.9版本，不好升级，所以解决POI3.9版本大文件读的问题。</p><p><strong>如果方便请采用POI3.17版本，另外可以使用Hutools或者Alibaba EasyExcel工具读写大文件，他们都是基于POI3.17，调用更方便。</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;poi-ooxml&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;version&gt;3.9&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;poi&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;version&gt;3.9&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!--有xercesImpl才可以用sax--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;xerces&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;xercesImpl&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;version&gt;2.9.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;poi-ooxml&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;3.9&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;org.apache.poi&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;poi&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;3.9&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--有xercesImpl才可以用sax--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;xerces&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;xercesImpl&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;2.9.1&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><h1 id="_4-代码" tabindex="-1">4. 代码 <a class="header-anchor" href="#_4-代码" aria-label="Permalink to &quot;4. 代码&quot;">​</a></h1><p>注意：</p><ul><li>2007代码只支持字符串和数字。</li><li>2003代码虽然有公式，但是没有进行测试。</li><li>2003代码会遍历所有sheet；2007代码可以仅仅读取指定sheet。</li></ul><h2 id="_1-业务逻辑接口" tabindex="-1">1. 业务逻辑接口 <a class="header-anchor" href="#_1-业务逻辑接口" aria-label="Permalink to &quot;1. 业务逻辑接口&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public interface ExcelRowReaderInterface {</span></span>
<span class="line"><span style="color:#e1e4e8;">    void getRows(int sheetIndex, int curRow, List&lt;String&gt; rowlist);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public interface ExcelRowReaderInterface {</span></span>
<span class="line"><span style="color:#24292e;">    void getRows(int sheetIndex, int curRow, List&lt;String&gt; rowlist);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_2-读excel2003" tabindex="-1">2. 读Excel2003 <a class="header-anchor" href="#_2-读excel2003" aria-label="Permalink to &quot;2. 读Excel2003&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.eventusermodel.EventWorkbookBuilder.SheetRecordCollectingListener;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.eventusermodel.FormatTrackingHSSFListener;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.eventusermodel.HSSFEventFactory;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.eventusermodel.HSSFListener;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.eventusermodel.HSSFRequest;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.eventusermodel.MissingRecordAwareHSSFListener;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.eventusermodel.dummyrecord.LastCellOfRowDummyRecord;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.eventusermodel.dummyrecord.MissingCellDummyRecord;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.model.HSSFFormulaParser;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.record.BOFRecord;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.record.BlankRecord;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.record.BoolErrRecord;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.record.BoundSheetRecord;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.record.FormulaRecord;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.record.LabelRecord;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.record.LabelSSTRecord;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.record.NumberRecord;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.record.Record;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.record.SSTRecord;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.record.StringRecord;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.hssf.usermodel.HSSFWorkbook;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.poifs.filesystem.POIFSFileSystem;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import java.io.File;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.io.FileInputStream;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.io.IOException;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.ArrayList;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.Arrays;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.Collections;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.List;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public class ExcelReader03EventModel implements HSSFListener {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private int minColumns = -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    private int maxColNum;   // 第一行确定maxColNum</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private POIFSFileSystem fs;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private int lastRowNumber;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private int lastColumnNumber;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * Should we output the formula, or the value it has?</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    private boolean outputFormulaValues = true;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * For parsing Formulas</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    private SheetRecordCollectingListener workbookBuildingListener;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // excel2003工作薄</span></span>
<span class="line"><span style="color:#e1e4e8;">    private HSSFWorkbook stubWorkbook;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // Records we pick up as we process</span></span>
<span class="line"><span style="color:#e1e4e8;">    private SSTRecord sstRecord;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private FormatTrackingHSSFListener formatListener;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 表索引</span></span>
<span class="line"><span style="color:#e1e4e8;">    private int sheetIndex = -1;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private int onSheet = -1;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private BoundSheetRecord[] orderedBSRs;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    private ArrayList boundSheetRecords = new ArrayList();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // For handling formulas with string results</span></span>
<span class="line"><span style="color:#e1e4e8;">    private int nextRow;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private int nextColumn;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private boolean outputNextStringRecord;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 当前行</span></span>
<span class="line"><span style="color:#e1e4e8;">    private int curRow = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 存储行记录的容器</span></span>
<span class="line"><span style="color:#e1e4e8;">    private List&lt;String&gt; rowlist = new ArrayList&lt;String&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @SuppressWarnings(&quot;unused&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    private String sheetName;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private ExcelRowReaderInterface rowReader;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public ExcelReader03EventModel(ExcelRowReaderInterface rowReader) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.rowReader = rowReader;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 遍历excel下所有的sheet</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void processOneSheet(File file, int onSheet) throws IOException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.onSheet = onSheet;</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.fs = new POIFSFileSystem(new FileInputStream(file));</span></span>
<span class="line"><span style="color:#e1e4e8;">        MissingRecordAwareHSSFListener listener = new MissingRecordAwareHSSFListener(this);</span></span>
<span class="line"><span style="color:#e1e4e8;">        formatListener = new FormatTrackingHSSFListener(listener);</span></span>
<span class="line"><span style="color:#e1e4e8;">        HSSFEventFactory factory = new HSSFEventFactory();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        HSSFRequest request = new HSSFRequest();</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (outputFormulaValues) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            request.addListenerForAllRecords(formatListener);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            workbookBuildingListener = new SheetRecordCollectingListener(formatListener);</span></span>
<span class="line"><span style="color:#e1e4e8;">            request.addListenerForAllRecords(workbookBuildingListener);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        factory.processWorkbookEvents(request, fs);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public void processAllSheet(File file) throws IOException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.fs = new POIFSFileSystem(new FileInputStream(file));</span></span>
<span class="line"><span style="color:#e1e4e8;">        MissingRecordAwareHSSFListener listener = new MissingRecordAwareHSSFListener(this);</span></span>
<span class="line"><span style="color:#e1e4e8;">        formatListener = new FormatTrackingHSSFListener(listener);</span></span>
<span class="line"><span style="color:#e1e4e8;">        HSSFEventFactory factory = new HSSFEventFactory();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        HSSFRequest request = new HSSFRequest();</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (outputFormulaValues) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            request.addListenerForAllRecords(formatListener);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            workbookBuildingListener = new SheetRecordCollectingListener(formatListener);</span></span>
<span class="line"><span style="color:#e1e4e8;">            request.addListenerForAllRecords(workbookBuildingListener);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        factory.processWorkbookEvents(request, fs);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">     /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * HSSFListener 监听方法，处理 Record</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void processRecord(Record record) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 此处是我提取出来的，可以和下面switch代码合并。</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 提取的原因是读取指定sheet，否则代码会遍历所有sheet</span></span>
<span class="line"><span style="color:#e1e4e8;">        switch (record.getSid()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            case BoundSheetRecord.sid:</span></span>
<span class="line"><span style="color:#e1e4e8;">                boundSheetRecords.add(record);</span></span>
<span class="line"><span style="color:#e1e4e8;">                break;</span></span>
<span class="line"><span style="color:#e1e4e8;">            case SSTRecord.sid:</span></span>
<span class="line"><span style="color:#e1e4e8;">                sstRecord = (SSTRecord) record;</span></span>
<span class="line"><span style="color:#e1e4e8;">                break;</span></span>
<span class="line"><span style="color:#e1e4e8;">            case BOFRecord.sid:</span></span>
<span class="line"><span style="color:#e1e4e8;">                BOFRecord br = (BOFRecord) record;</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (br.getType() == BOFRecord.TYPE_WORKSHEET) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    // 如果有需要，则建立子工作薄</span></span>
<span class="line"><span style="color:#e1e4e8;">                    if (workbookBuildingListener != null &amp;&amp; stubWorkbook == null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        stubWorkbook = workbookBuildingListener.getStubHSSFWorkbook();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">                    sheetIndex++;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    if (orderedBSRs == null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        orderedBSRs = BoundSheetRecord.orderByBofPosition(boundSheetRecords);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    sheetName = orderedBSRs[sheetIndex].getSheetname();</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">                break;</span></span>
<span class="line"><span style="color:#e1e4e8;">            default:</span></span>
<span class="line"><span style="color:#e1e4e8;">                break;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (this.onSheet != -1 &amp;&amp; this.sheetIndex &gt; this.onSheet) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (this.onSheet == -1 || this.sheetIndex == this.onSheet) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            int thisRow = -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">            int thisColumn = -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">            String thisStr = null;</span></span>
<span class="line"><span style="color:#e1e4e8;">            String value = null;</span></span>
<span class="line"><span style="color:#e1e4e8;">            switch (record.getSid()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                case BlankRecord.sid:</span></span>
<span class="line"><span style="color:#e1e4e8;">                    BlankRecord brec = (BlankRecord) record;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    thisRow = brec.getRow();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    thisColumn = brec.getColumn();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    thisStr = &quot;&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    rowlist.add(thisColumn, thisStr);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    break;</span></span>
<span class="line"><span style="color:#e1e4e8;">                case BoolErrRecord.sid: // 单元格为布尔类型</span></span>
<span class="line"><span style="color:#e1e4e8;">                    BoolErrRecord berec = (BoolErrRecord) record;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    thisRow = berec.getRow();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    thisColumn = berec.getColumn();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    thisStr = berec.getBooleanValue() + &quot;&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    rowlist.add(thisColumn, thisStr);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    break;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">                case FormulaRecord.sid: // 单元格为公式类型</span></span>
<span class="line"><span style="color:#e1e4e8;">                    FormulaRecord frec = (FormulaRecord) record;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    thisRow = frec.getRow();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    thisColumn = frec.getColumn();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    if (outputFormulaValues) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        if (Double.isNaN(frec.getValue())) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            // Formula result is a string</span></span>
<span class="line"><span style="color:#e1e4e8;">                            // This is stored in the next record</span></span>
<span class="line"><span style="color:#e1e4e8;">                            outputNextStringRecord = true;</span></span>
<span class="line"><span style="color:#e1e4e8;">                            nextRow = frec.getRow();</span></span>
<span class="line"><span style="color:#e1e4e8;">                            nextColumn = frec.getColumn();</span></span>
<span class="line"><span style="color:#e1e4e8;">                        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            thisStr = formatListener.formatNumberDateCell(frec);</span></span>
<span class="line"><span style="color:#e1e4e8;">                        }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        thisStr = &#39;&quot;&#39; + HSSFFormulaParser.toFormulaString(stubWorkbook, frec.getParsedExpression()) + &#39;&quot;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    rowlist.add(thisColumn, thisStr);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    break;</span></span>
<span class="line"><span style="color:#e1e4e8;">                case StringRecord.sid:// 单元格中公式的字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">                    if (outputNextStringRecord) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        // String for formula</span></span>
<span class="line"><span style="color:#e1e4e8;">                        StringRecord srec = (StringRecord) record;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        thisStr = srec.getString();</span></span>
<span class="line"><span style="color:#e1e4e8;">                        thisRow = nextRow;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        thisColumn = nextColumn;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        outputNextStringRecord = false;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    break;</span></span>
<span class="line"><span style="color:#e1e4e8;">                case LabelRecord.sid:</span></span>
<span class="line"><span style="color:#e1e4e8;">                    LabelRecord lrec = (LabelRecord) record;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    curRow = thisRow = lrec.getRow();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    thisColumn = lrec.getColumn();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    value = lrec.getValue().trim();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    value = value.equals(&quot;&quot;) ? &quot; &quot; : value;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    this.rowlist.add(thisColumn, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    break;</span></span>
<span class="line"><span style="color:#e1e4e8;">                case LabelSSTRecord.sid: // 单元格为字符串类型</span></span>
<span class="line"><span style="color:#e1e4e8;">                    LabelSSTRecord lsrec = (LabelSSTRecord) record;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    curRow = thisRow = lsrec.getRow();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    thisColumn = lsrec.getColumn();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    if (sstRecord == null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        rowlist.add(thisColumn, &quot; &quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        value = sstRecord.getString(lsrec.getSSTIndex()).toString().trim();</span></span>
<span class="line"><span style="color:#e1e4e8;">                        value = value.equals(&quot;&quot;) ? &quot; &quot; : value;</span></span>
<span class="line"><span style="color:#e1e4e8;">                        rowlist.add(thisColumn, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    break;</span></span>
<span class="line"><span style="color:#e1e4e8;">                   case NumberRecord.sid: // 单元格为数字类型</span></span>
<span class="line"><span style="color:#e1e4e8;">                    NumberRecord numrec = (NumberRecord) record;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    curRow = thisRow = numrec.getRow();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    thisColumn = numrec.getColumn();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    value = formatListener.formatNumberDateCell(numrec).trim();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    value = value.equals(&quot;&quot;) ? &quot; &quot; : value;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    // 向容器加入列值</span></span>
<span class="line"><span style="color:#e1e4e8;">                    rowlist.add(thisColumn, value);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    break;</span></span>
<span class="line"><span style="color:#e1e4e8;">                default:</span></span>
<span class="line"><span style="color:#e1e4e8;">                    break;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            // 遇到新行的操作</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (thisRow != -1 &amp;&amp; thisRow != lastRowNumber) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                lastColumnNumber = -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            // 空值的操作</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (record instanceof MissingCellDummyRecord) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                MissingCellDummyRecord mc = (MissingCellDummyRecord) record;</span></span>
<span class="line"><span style="color:#e1e4e8;">                curRow = thisRow = mc.getRow();</span></span>
<span class="line"><span style="color:#e1e4e8;">                thisColumn = mc.getColumn();</span></span>
<span class="line"><span style="color:#e1e4e8;">                rowlist.add(thisColumn, &quot; &quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            // 取最大行</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (thisRow == 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                maxColNum = thisColumn + 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 更新行和列的值</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (thisRow &gt; -1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                lastRowNumber = thisRow;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (thisColumn &gt; -1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                lastColumnNumber = thisColumn;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            // 行结束时的操作</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (record instanceof LastCellOfRowDummyRecord) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (minColumns &gt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    // 列值重新置空</span></span>
<span class="line"><span style="color:#e1e4e8;">                    if (lastColumnNumber == -1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        lastColumnNumber = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">                lastColumnNumber = -1;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">                // 每行结束时， 调用getRows() 方法</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (rowlist.size() &lt; maxColNum) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    for (int i = rowlist.size(); i &lt; maxColNum; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        rowlist.add(&quot;&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">                List&lt;String&gt; curList = new ArrayList&lt;&gt;(rowlist.size());</span></span>
<span class="line"><span style="color:#e1e4e8;">                for (String s : rowlist) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    curList.add(s);</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">                rowReader.getRows(sheetIndex, curRow, curList);</span></span>
<span class="line"><span style="color:#e1e4e8;">                // 清空容器</span></span>
<span class="line"><span style="color:#e1e4e8;">                rowlist.clear();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ExcelRowReaderInterface rowReader = new ExcelRowReaderImpl();</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            ExcelReader03EventModel excelReader03EventModel = new ExcelReader03EventModel(rowReader);</span></span>
<span class="line"><span style="color:#e1e4e8;">            excelReader03EventModel.processAllSheet(new File(&quot;D://test//BTS Information.xls&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.eventusermodel.EventWorkbookBuilder.SheetRecordCollectingListener;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.eventusermodel.FormatTrackingHSSFListener;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.eventusermodel.HSSFEventFactory;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.eventusermodel.HSSFListener;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.eventusermodel.HSSFRequest;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.eventusermodel.MissingRecordAwareHSSFListener;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.eventusermodel.dummyrecord.LastCellOfRowDummyRecord;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.eventusermodel.dummyrecord.MissingCellDummyRecord;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.model.HSSFFormulaParser;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.record.BOFRecord;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.record.BlankRecord;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.record.BoolErrRecord;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.record.BoundSheetRecord;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.record.FormulaRecord;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.record.LabelRecord;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.record.LabelSSTRecord;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.record.NumberRecord;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.record.Record;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.record.SSTRecord;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.record.StringRecord;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.hssf.usermodel.HSSFWorkbook;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.poifs.filesystem.POIFSFileSystem;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import java.io.File;</span></span>
<span class="line"><span style="color:#24292e;">import java.io.FileInputStream;</span></span>
<span class="line"><span style="color:#24292e;">import java.io.IOException;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.ArrayList;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.Arrays;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.Collections;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.List;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class ExcelReader03EventModel implements HSSFListener {</span></span>
<span class="line"><span style="color:#24292e;">    private int minColumns = -1;</span></span>
<span class="line"><span style="color:#24292e;">    private int maxColNum;   // 第一行确定maxColNum</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private POIFSFileSystem fs;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private int lastRowNumber;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private int lastColumnNumber;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * Should we output the formula, or the value it has?</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    private boolean outputFormulaValues = true;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * For parsing Formulas</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    private SheetRecordCollectingListener workbookBuildingListener;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // excel2003工作薄</span></span>
<span class="line"><span style="color:#24292e;">    private HSSFWorkbook stubWorkbook;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // Records we pick up as we process</span></span>
<span class="line"><span style="color:#24292e;">    private SSTRecord sstRecord;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private FormatTrackingHSSFListener formatListener;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 表索引</span></span>
<span class="line"><span style="color:#24292e;">    private int sheetIndex = -1;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private int onSheet = -1;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private BoundSheetRecord[] orderedBSRs;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    private ArrayList boundSheetRecords = new ArrayList();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // For handling formulas with string results</span></span>
<span class="line"><span style="color:#24292e;">    private int nextRow;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private int nextColumn;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private boolean outputNextStringRecord;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 当前行</span></span>
<span class="line"><span style="color:#24292e;">    private int curRow = 0;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 存储行记录的容器</span></span>
<span class="line"><span style="color:#24292e;">    private List&lt;String&gt; rowlist = new ArrayList&lt;String&gt;();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @SuppressWarnings(&quot;unused&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    private String sheetName;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private ExcelRowReaderInterface rowReader;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public ExcelReader03EventModel(ExcelRowReaderInterface rowReader) {</span></span>
<span class="line"><span style="color:#24292e;">        this.rowReader = rowReader;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 遍历excel下所有的sheet</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public void processOneSheet(File file, int onSheet) throws IOException {</span></span>
<span class="line"><span style="color:#24292e;">        this.onSheet = onSheet;</span></span>
<span class="line"><span style="color:#24292e;">        this.fs = new POIFSFileSystem(new FileInputStream(file));</span></span>
<span class="line"><span style="color:#24292e;">        MissingRecordAwareHSSFListener listener = new MissingRecordAwareHSSFListener(this);</span></span>
<span class="line"><span style="color:#24292e;">        formatListener = new FormatTrackingHSSFListener(listener);</span></span>
<span class="line"><span style="color:#24292e;">        HSSFEventFactory factory = new HSSFEventFactory();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        HSSFRequest request = new HSSFRequest();</span></span>
<span class="line"><span style="color:#24292e;">        if (outputFormulaValues) {</span></span>
<span class="line"><span style="color:#24292e;">            request.addListenerForAllRecords(formatListener);</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            workbookBuildingListener = new SheetRecordCollectingListener(formatListener);</span></span>
<span class="line"><span style="color:#24292e;">            request.addListenerForAllRecords(workbookBuildingListener);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        factory.processWorkbookEvents(request, fs);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void processAllSheet(File file) throws IOException {</span></span>
<span class="line"><span style="color:#24292e;">        this.fs = new POIFSFileSystem(new FileInputStream(file));</span></span>
<span class="line"><span style="color:#24292e;">        MissingRecordAwareHSSFListener listener = new MissingRecordAwareHSSFListener(this);</span></span>
<span class="line"><span style="color:#24292e;">        formatListener = new FormatTrackingHSSFListener(listener);</span></span>
<span class="line"><span style="color:#24292e;">        HSSFEventFactory factory = new HSSFEventFactory();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        HSSFRequest request = new HSSFRequest();</span></span>
<span class="line"><span style="color:#24292e;">        if (outputFormulaValues) {</span></span>
<span class="line"><span style="color:#24292e;">            request.addListenerForAllRecords(formatListener);</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            workbookBuildingListener = new SheetRecordCollectingListener(formatListener);</span></span>
<span class="line"><span style="color:#24292e;">            request.addListenerForAllRecords(workbookBuildingListener);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        factory.processWorkbookEvents(request, fs);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">     /**</span></span>
<span class="line"><span style="color:#24292e;">     * HSSFListener 监听方法，处理 Record</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    @SuppressWarnings(&quot;unchecked&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    public void processRecord(Record record) {</span></span>
<span class="line"><span style="color:#24292e;">        // 此处是我提取出来的，可以和下面switch代码合并。</span></span>
<span class="line"><span style="color:#24292e;">        // 提取的原因是读取指定sheet，否则代码会遍历所有sheet</span></span>
<span class="line"><span style="color:#24292e;">        switch (record.getSid()) {</span></span>
<span class="line"><span style="color:#24292e;">            case BoundSheetRecord.sid:</span></span>
<span class="line"><span style="color:#24292e;">                boundSheetRecords.add(record);</span></span>
<span class="line"><span style="color:#24292e;">                break;</span></span>
<span class="line"><span style="color:#24292e;">            case SSTRecord.sid:</span></span>
<span class="line"><span style="color:#24292e;">                sstRecord = (SSTRecord) record;</span></span>
<span class="line"><span style="color:#24292e;">                break;</span></span>
<span class="line"><span style="color:#24292e;">            case BOFRecord.sid:</span></span>
<span class="line"><span style="color:#24292e;">                BOFRecord br = (BOFRecord) record;</span></span>
<span class="line"><span style="color:#24292e;">                if (br.getType() == BOFRecord.TYPE_WORKSHEET) {</span></span>
<span class="line"><span style="color:#24292e;">                    // 如果有需要，则建立子工作薄</span></span>
<span class="line"><span style="color:#24292e;">                    if (workbookBuildingListener != null &amp;&amp; stubWorkbook == null) {</span></span>
<span class="line"><span style="color:#24292e;">                        stubWorkbook = workbookBuildingListener.getStubHSSFWorkbook();</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">                    sheetIndex++;</span></span>
<span class="line"><span style="color:#24292e;">                    if (orderedBSRs == null) {</span></span>
<span class="line"><span style="color:#24292e;">                        orderedBSRs = BoundSheetRecord.orderByBofPosition(boundSheetRecords);</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                    sheetName = orderedBSRs[sheetIndex].getSheetname();</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">                break;</span></span>
<span class="line"><span style="color:#24292e;">            default:</span></span>
<span class="line"><span style="color:#24292e;">                break;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        if (this.onSheet != -1 &amp;&amp; this.sheetIndex &gt; this.onSheet) {</span></span>
<span class="line"><span style="color:#24292e;">            return;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        if (this.onSheet == -1 || this.sheetIndex == this.onSheet) {</span></span>
<span class="line"><span style="color:#24292e;">            int thisRow = -1;</span></span>
<span class="line"><span style="color:#24292e;">            int thisColumn = -1;</span></span>
<span class="line"><span style="color:#24292e;">            String thisStr = null;</span></span>
<span class="line"><span style="color:#24292e;">            String value = null;</span></span>
<span class="line"><span style="color:#24292e;">            switch (record.getSid()) {</span></span>
<span class="line"><span style="color:#24292e;">                case BlankRecord.sid:</span></span>
<span class="line"><span style="color:#24292e;">                    BlankRecord brec = (BlankRecord) record;</span></span>
<span class="line"><span style="color:#24292e;">                    thisRow = brec.getRow();</span></span>
<span class="line"><span style="color:#24292e;">                    thisColumn = brec.getColumn();</span></span>
<span class="line"><span style="color:#24292e;">                    thisStr = &quot;&quot;;</span></span>
<span class="line"><span style="color:#24292e;">                    rowlist.add(thisColumn, thisStr);</span></span>
<span class="line"><span style="color:#24292e;">                    break;</span></span>
<span class="line"><span style="color:#24292e;">                case BoolErrRecord.sid: // 单元格为布尔类型</span></span>
<span class="line"><span style="color:#24292e;">                    BoolErrRecord berec = (BoolErrRecord) record;</span></span>
<span class="line"><span style="color:#24292e;">                    thisRow = berec.getRow();</span></span>
<span class="line"><span style="color:#24292e;">                    thisColumn = berec.getColumn();</span></span>
<span class="line"><span style="color:#24292e;">                    thisStr = berec.getBooleanValue() + &quot;&quot;;</span></span>
<span class="line"><span style="color:#24292e;">                    rowlist.add(thisColumn, thisStr);</span></span>
<span class="line"><span style="color:#24292e;">                    break;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">                case FormulaRecord.sid: // 单元格为公式类型</span></span>
<span class="line"><span style="color:#24292e;">                    FormulaRecord frec = (FormulaRecord) record;</span></span>
<span class="line"><span style="color:#24292e;">                    thisRow = frec.getRow();</span></span>
<span class="line"><span style="color:#24292e;">                    thisColumn = frec.getColumn();</span></span>
<span class="line"><span style="color:#24292e;">                    if (outputFormulaValues) {</span></span>
<span class="line"><span style="color:#24292e;">                        if (Double.isNaN(frec.getValue())) {</span></span>
<span class="line"><span style="color:#24292e;">                            // Formula result is a string</span></span>
<span class="line"><span style="color:#24292e;">                            // This is stored in the next record</span></span>
<span class="line"><span style="color:#24292e;">                            outputNextStringRecord = true;</span></span>
<span class="line"><span style="color:#24292e;">                            nextRow = frec.getRow();</span></span>
<span class="line"><span style="color:#24292e;">                            nextColumn = frec.getColumn();</span></span>
<span class="line"><span style="color:#24292e;">                        } else {</span></span>
<span class="line"><span style="color:#24292e;">                            thisStr = formatListener.formatNumberDateCell(frec);</span></span>
<span class="line"><span style="color:#24292e;">                        }</span></span>
<span class="line"><span style="color:#24292e;">                    } else {</span></span>
<span class="line"><span style="color:#24292e;">                        thisStr = &#39;&quot;&#39; + HSSFFormulaParser.toFormulaString(stubWorkbook, frec.getParsedExpression()) + &#39;&quot;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                    rowlist.add(thisColumn, thisStr);</span></span>
<span class="line"><span style="color:#24292e;">                    break;</span></span>
<span class="line"><span style="color:#24292e;">                case StringRecord.sid:// 单元格中公式的字符串</span></span>
<span class="line"><span style="color:#24292e;">                    if (outputNextStringRecord) {</span></span>
<span class="line"><span style="color:#24292e;">                        // String for formula</span></span>
<span class="line"><span style="color:#24292e;">                        StringRecord srec = (StringRecord) record;</span></span>
<span class="line"><span style="color:#24292e;">                        thisStr = srec.getString();</span></span>
<span class="line"><span style="color:#24292e;">                        thisRow = nextRow;</span></span>
<span class="line"><span style="color:#24292e;">                        thisColumn = nextColumn;</span></span>
<span class="line"><span style="color:#24292e;">                        outputNextStringRecord = false;</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                    break;</span></span>
<span class="line"><span style="color:#24292e;">                case LabelRecord.sid:</span></span>
<span class="line"><span style="color:#24292e;">                    LabelRecord lrec = (LabelRecord) record;</span></span>
<span class="line"><span style="color:#24292e;">                    curRow = thisRow = lrec.getRow();</span></span>
<span class="line"><span style="color:#24292e;">                    thisColumn = lrec.getColumn();</span></span>
<span class="line"><span style="color:#24292e;">                    value = lrec.getValue().trim();</span></span>
<span class="line"><span style="color:#24292e;">                    value = value.equals(&quot;&quot;) ? &quot; &quot; : value;</span></span>
<span class="line"><span style="color:#24292e;">                    this.rowlist.add(thisColumn, value);</span></span>
<span class="line"><span style="color:#24292e;">                    break;</span></span>
<span class="line"><span style="color:#24292e;">                case LabelSSTRecord.sid: // 单元格为字符串类型</span></span>
<span class="line"><span style="color:#24292e;">                    LabelSSTRecord lsrec = (LabelSSTRecord) record;</span></span>
<span class="line"><span style="color:#24292e;">                    curRow = thisRow = lsrec.getRow();</span></span>
<span class="line"><span style="color:#24292e;">                    thisColumn = lsrec.getColumn();</span></span>
<span class="line"><span style="color:#24292e;">                    if (sstRecord == null) {</span></span>
<span class="line"><span style="color:#24292e;">                        rowlist.add(thisColumn, &quot; &quot;);</span></span>
<span class="line"><span style="color:#24292e;">                    } else {</span></span>
<span class="line"><span style="color:#24292e;">                        value = sstRecord.getString(lsrec.getSSTIndex()).toString().trim();</span></span>
<span class="line"><span style="color:#24292e;">                        value = value.equals(&quot;&quot;) ? &quot; &quot; : value;</span></span>
<span class="line"><span style="color:#24292e;">                        rowlist.add(thisColumn, value);</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                    break;</span></span>
<span class="line"><span style="color:#24292e;">                   case NumberRecord.sid: // 单元格为数字类型</span></span>
<span class="line"><span style="color:#24292e;">                    NumberRecord numrec = (NumberRecord) record;</span></span>
<span class="line"><span style="color:#24292e;">                    curRow = thisRow = numrec.getRow();</span></span>
<span class="line"><span style="color:#24292e;">                    thisColumn = numrec.getColumn();</span></span>
<span class="line"><span style="color:#24292e;">                    value = formatListener.formatNumberDateCell(numrec).trim();</span></span>
<span class="line"><span style="color:#24292e;">                    value = value.equals(&quot;&quot;) ? &quot; &quot; : value;</span></span>
<span class="line"><span style="color:#24292e;">                    // 向容器加入列值</span></span>
<span class="line"><span style="color:#24292e;">                    rowlist.add(thisColumn, value);</span></span>
<span class="line"><span style="color:#24292e;">                    break;</span></span>
<span class="line"><span style="color:#24292e;">                default:</span></span>
<span class="line"><span style="color:#24292e;">                    break;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            // 遇到新行的操作</span></span>
<span class="line"><span style="color:#24292e;">            if (thisRow != -1 &amp;&amp; thisRow != lastRowNumber) {</span></span>
<span class="line"><span style="color:#24292e;">                lastColumnNumber = -1;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            // 空值的操作</span></span>
<span class="line"><span style="color:#24292e;">            if (record instanceof MissingCellDummyRecord) {</span></span>
<span class="line"><span style="color:#24292e;">                MissingCellDummyRecord mc = (MissingCellDummyRecord) record;</span></span>
<span class="line"><span style="color:#24292e;">                curRow = thisRow = mc.getRow();</span></span>
<span class="line"><span style="color:#24292e;">                thisColumn = mc.getColumn();</span></span>
<span class="line"><span style="color:#24292e;">                rowlist.add(thisColumn, &quot; &quot;);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            // 取最大行</span></span>
<span class="line"><span style="color:#24292e;">            if (thisRow == 0) {</span></span>
<span class="line"><span style="color:#24292e;">                maxColNum = thisColumn + 1;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            // 更新行和列的值</span></span>
<span class="line"><span style="color:#24292e;">            if (thisRow &gt; -1) {</span></span>
<span class="line"><span style="color:#24292e;">                lastRowNumber = thisRow;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            if (thisColumn &gt; -1) {</span></span>
<span class="line"><span style="color:#24292e;">                lastColumnNumber = thisColumn;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            // 行结束时的操作</span></span>
<span class="line"><span style="color:#24292e;">            if (record instanceof LastCellOfRowDummyRecord) {</span></span>
<span class="line"><span style="color:#24292e;">                if (minColumns &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">                    // 列值重新置空</span></span>
<span class="line"><span style="color:#24292e;">                    if (lastColumnNumber == -1) {</span></span>
<span class="line"><span style="color:#24292e;">                        lastColumnNumber = 0;</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">                lastColumnNumber = -1;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">                // 每行结束时， 调用getRows() 方法</span></span>
<span class="line"><span style="color:#24292e;">                if (rowlist.size() &lt; maxColNum) {</span></span>
<span class="line"><span style="color:#24292e;">                    for (int i = rowlist.size(); i &lt; maxColNum; i++) {</span></span>
<span class="line"><span style="color:#24292e;">                        rowlist.add(&quot;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">                List&lt;String&gt; curList = new ArrayList&lt;&gt;(rowlist.size());</span></span>
<span class="line"><span style="color:#24292e;">                for (String s : rowlist) {</span></span>
<span class="line"><span style="color:#24292e;">                    curList.add(s);</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">                rowReader.getRows(sheetIndex, curRow, curList);</span></span>
<span class="line"><span style="color:#24292e;">                // 清空容器</span></span>
<span class="line"><span style="color:#24292e;">                rowlist.clear();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        ExcelRowReaderInterface rowReader = new ExcelRowReaderImpl();</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            ExcelReader03EventModel excelReader03EventModel = new ExcelReader03EventModel(rowReader);</span></span>
<span class="line"><span style="color:#24292e;">            excelReader03EventModel.processAllSheet(new File(&quot;D://test//BTS Information.xls&quot;));</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_3-读excel2007" tabindex="-1">3. 读Excel2007 <a class="header-anchor" href="#_3-读excel2007" aria-label="Permalink to &quot;3. 读Excel2007&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import org.apache.poi.openxml4j.exceptions.OpenXML4JException;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.openxml4j.opc.OPCPackage;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.xssf.eventusermodel.XSSFReader;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.xssf.model.SharedStringsTable;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.apache.poi.xssf.usermodel.XSSFRichTextString;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.xml.sax.*;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.xml.sax.helpers.DefaultHandler;</span></span>
<span class="line"><span style="color:#e1e4e8;">import org.xml.sax.helpers.XMLReaderFactory;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import java.io.File;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.io.IOException;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.io.InputStream;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.ArrayList;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.Iterator;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.List;</span></span>
<span class="line"><span style="color:#e1e4e8;">import java.util.regex.Pattern;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public class ExcelReader07EventModel {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private int currentRow = -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    private int sheetIndex = -1;</span></span>
<span class="line"><span style="color:#e1e4e8;">    private int maxColNum;</span></span>
<span class="line"><span style="color:#e1e4e8;">    private List&lt;IndexValue&gt; rowData;</span></span>
<span class="line"><span style="color:#e1e4e8;">    private ExcelRowReaderInterface rowReader;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public ExcelReader07EventModel(ExcelRowReaderInterface rowReader) throws Exception {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.rowReader = rowReader;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // onSheet从1开始</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void processOneSheet(File file, int onSheet) throws Exception {</span></span>
<span class="line"><span style="color:#e1e4e8;">        OPCPackage pkg = OPCPackage.open(file);</span></span>
<span class="line"><span style="color:#e1e4e8;">        XSSFReader r = new XSSFReader(pkg);</span></span>
<span class="line"><span style="color:#e1e4e8;">        SharedStringsTable sst = r.getSharedStringsTable();</span></span>
<span class="line"><span style="color:#e1e4e8;">        XMLReader parser = fetchSheetParser(sst);</span></span>
<span class="line"><span style="color:#e1e4e8;">        sheetIndex = onSheet;</span></span>
<span class="line"><span style="color:#e1e4e8;">        InputStream sheet1 = r.getSheet(&quot;rId&quot; + (onSheet + 1));</span></span>
<span class="line"><span style="color:#e1e4e8;">        InputSource sheetSource = new InputSource(sheet1);</span></span>
<span class="line"><span style="color:#e1e4e8;">        parser.parse(sheetSource);</span></span>
<span class="line"><span style="color:#e1e4e8;">        sheet1.close();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public void processAllSheet(File file) throws IOException, OpenXML4JException, SAXException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        OPCPackage pkg = OPCPackage.open(file);</span></span>
<span class="line"><span style="color:#e1e4e8;">        XSSFReader xssfReader = new XSSFReader(pkg);</span></span>
<span class="line"><span style="color:#e1e4e8;">        SharedStringsTable sst = xssfReader.getSharedStringsTable();</span></span>
<span class="line"><span style="color:#e1e4e8;">        XMLReader parser = this.fetchSheetParser(sst);</span></span>
<span class="line"><span style="color:#e1e4e8;">        Iterator&lt;InputStream&gt; sheets = xssfReader.getSheetsData();</span></span>
<span class="line"><span style="color:#e1e4e8;">        while (sheets.hasNext()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            sheetIndex++;</span></span>
<span class="line"><span style="color:#e1e4e8;">            InputStream sheet = sheets.next();</span></span>
<span class="line"><span style="color:#e1e4e8;">            InputSource sheetSource = new InputSource(sheet);</span></span>
<span class="line"><span style="color:#e1e4e8;">            parser.parse(sheetSource);</span></span>
<span class="line"><span style="color:#e1e4e8;">            sheet.close();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private XMLReader fetchSheetParser(SharedStringsTable sst) throws SAXException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        XMLReader parser = XMLReaderFactory.createXMLReader(&quot;org.apache.xerces.parsers.SAXParser&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        ContentHandler handler = new PagingHandler(sst);</span></span>
<span class="line"><span style="color:#e1e4e8;">        parser.setContentHandler(handler);</span></span>
<span class="line"><span style="color:#e1e4e8;">        return parser;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private class PagingHandler extends DefaultHandler {</span></span>
<span class="line"><span style="color:#e1e4e8;">        private SharedStringsTable sst;</span></span>
<span class="line"><span style="color:#e1e4e8;">        private String lastContents;</span></span>
<span class="line"><span style="color:#e1e4e8;">        private boolean nextIsString;</span></span>
<span class="line"><span style="color:#e1e4e8;">        private String index = null;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        private PagingHandler(SharedStringsTable sst) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.sst = sst;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        /**</span></span>
<span class="line"><span style="color:#e1e4e8;">         * 每个单元格开始时的处理</span></span>
<span class="line"><span style="color:#e1e4e8;">         */</span></span>
<span class="line"><span style="color:#e1e4e8;">        @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">        public void startElement(String uri, String localName, String name, Attributes attributes) throws SAXException {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // c =&gt; cell</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (name.equals(&quot;c&quot;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                index = attributes.getValue(&quot;r&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                // System.out.println(index);</span></span>
<span class="line"><span style="color:#e1e4e8;">                //这是一个新行</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (Pattern.compile(&quot;^A[0-9]+$&quot;).matcher(index).find()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    //存储上一行数据</span></span>
<span class="line"><span style="color:#e1e4e8;">                    if (rowData != null &amp;&amp; !rowData.isEmpty()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            List&lt;String&gt; myDataList = getMyDataList();</span></span>
<span class="line"><span style="color:#e1e4e8;">                            rowReader.getRows(sheetIndex, currentRow, myDataList);</span></span>
<span class="line"><span style="color:#e1e4e8;">                        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">                        }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    }</span></span>
<span class="line"><span style="color:#e1e4e8;">                    rowData = new ArrayList&lt;IndexValue&gt;();//新行要先清除上一行的数据</span></span>
<span class="line"><span style="color:#e1e4e8;">                    currentRow++;//当前行+1</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">                // Figure out if the value is an index in the SST</span></span>
<span class="line"><span style="color:#e1e4e8;">                String cellType = attributes.getValue(&quot;t&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (cellType != null &amp;&amp; cellType.equals(&quot;s&quot;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    nextIsString = true;</span></span>
<span class="line"><span style="color:#e1e4e8;">                } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    nextIsString = false;</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            // Clear contents cache</span></span>
<span class="line"><span style="color:#e1e4e8;">            lastContents = &quot;&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">                //每个单元格结束时的处理</span></span>
<span class="line"><span style="color:#e1e4e8;">        @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">        public void endElement(String uri, String localName, String name) throws SAXException {</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (nextIsString) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                int idx = Integer.parseInt(lastContents);</span></span>
<span class="line"><span style="color:#e1e4e8;">                lastContents = new XSSFRichTextString(sst.getEntryAt(idx)).toString();</span></span>
<span class="line"><span style="color:#e1e4e8;">                nextIsString = false;</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (name.equals(&quot;v&quot;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                // System.out.println(lastContents);</span></span>
<span class="line"><span style="color:#e1e4e8;">                rowData.add(new IndexValue(index, lastContents));</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">        public void characters(char[] ch, int start, int length) throws SAXException {</span></span>
<span class="line"><span style="color:#e1e4e8;">            lastContents += new String(ch, start, length);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">        public void endDocument() throws SAXException {</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (rowData != null &amp;&amp; !rowData.isEmpty()) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                try {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    List&lt;String&gt; myDataList = getMyDataList();</span></span>
<span class="line"><span style="color:#e1e4e8;">                    rowReader.getRows(sheetIndex, currentRow, myDataList);</span></span>
<span class="line"><span style="color:#e1e4e8;">                } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private class IndexValue {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String v_index;</span></span>
<span class="line"><span style="color:#e1e4e8;">        String v_value;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        public IndexValue(String v_index, String v_value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            super();</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.v_index = v_index;</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.v_value = v_value;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">        public String toString() {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return &quot;IndexValue [v_index=&quot; + v_index + &quot;, v_value=&quot; + v_value + &quot;]&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        public int getLevel(IndexValue p) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            char[] other = p.v_index.replaceAll(&quot;[0-9]&quot;, &quot;&quot;).toUpperCase().toCharArray();</span></span>
<span class="line"><span style="color:#e1e4e8;">            char[] self = this.v_index.replaceAll(&quot;[0-9]&quot;, &quot;&quot;).toUpperCase().toCharArray();</span></span>
<span class="line"><span style="color:#e1e4e8;">            int self_num = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">            int other_num = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">            for (int i = 0; i &lt; self.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                self_num = self_num * 26 + (self[i] - 64);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            for (int i = 0; i &lt; other.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                other_num = other_num * 26 + (other[i] - 64);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            return self_num - other_num;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">     * 获取真实的数据（处理空格）</span></span>
<span class="line"><span style="color:#e1e4e8;">     */</span></span>
<span class="line"><span style="color:#e1e4e8;">    public List&lt;String&gt; getMyDataList() throws Exception {</span></span>
<span class="line"><span style="color:#e1e4e8;">        List&lt;String&gt; myDataList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (rowData == null || rowData.size() &lt;= 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            return myDataList;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        int j = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (; j &lt; rowData.size() - 1; j++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            //获取当前值,并存储</span></span>
<span class="line"><span style="color:#e1e4e8;">            IndexValue current = rowData.get(j);</span></span>
<span class="line"><span style="color:#e1e4e8;">            myDataList.add(current.v_value);</span></span>
<span class="line"><span style="color:#e1e4e8;">            //预存下一个</span></span>
<span class="line"><span style="color:#e1e4e8;">            IndexValue next = rowData.get(j + 1);</span></span>
<span class="line"><span style="color:#e1e4e8;">            //获取差值</span></span>
<span class="line"><span style="color:#e1e4e8;">            int level = next.getLevel(current);</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (level &lt;= 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                throw new Exception(&quot;超出处理范围&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            for (int k = 0; k &lt; level - 1; k++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                myDataList.add(&quot;&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        myDataList.add(rowData.get(j).v_value);</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (currentRow == 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            maxColNum = myDataList.size();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (int i = myDataList.size(); i &lt; maxColNum; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            myDataList.add(&quot;&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        return myDataList;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span style="color:#e1e4e8;">        File file = new File(&quot;D:\\\\test\\\\zjctest07.xlsx&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        ExcelRowReaderImpl excelRowReader = new ExcelRowReaderImpl();</span></span>
<span class="line"><span style="color:#e1e4e8;">        ExcelReader07EventModel test = new ExcelReader07EventModel(excelRowReader);</span></span>
<span class="line"><span style="color:#e1e4e8;">        test.processOneSheet(file, 0);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import org.apache.poi.openxml4j.exceptions.OpenXML4JException;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.openxml4j.opc.OPCPackage;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.xssf.eventusermodel.XSSFReader;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.xssf.model.SharedStringsTable;</span></span>
<span class="line"><span style="color:#24292e;">import org.apache.poi.xssf.usermodel.XSSFRichTextString;</span></span>
<span class="line"><span style="color:#24292e;">import org.xml.sax.*;</span></span>
<span class="line"><span style="color:#24292e;">import org.xml.sax.helpers.DefaultHandler;</span></span>
<span class="line"><span style="color:#24292e;">import org.xml.sax.helpers.XMLReaderFactory;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import java.io.File;</span></span>
<span class="line"><span style="color:#24292e;">import java.io.IOException;</span></span>
<span class="line"><span style="color:#24292e;">import java.io.InputStream;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.ArrayList;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.Iterator;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.List;</span></span>
<span class="line"><span style="color:#24292e;">import java.util.regex.Pattern;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public class ExcelReader07EventModel {</span></span>
<span class="line"><span style="color:#24292e;">    private int currentRow = -1;</span></span>
<span class="line"><span style="color:#24292e;">    private int sheetIndex = -1;</span></span>
<span class="line"><span style="color:#24292e;">    private int maxColNum;</span></span>
<span class="line"><span style="color:#24292e;">    private List&lt;IndexValue&gt; rowData;</span></span>
<span class="line"><span style="color:#24292e;">    private ExcelRowReaderInterface rowReader;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public ExcelReader07EventModel(ExcelRowReaderInterface rowReader) throws Exception {</span></span>
<span class="line"><span style="color:#24292e;">        this.rowReader = rowReader;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // onSheet从1开始</span></span>
<span class="line"><span style="color:#24292e;">    public void processOneSheet(File file, int onSheet) throws Exception {</span></span>
<span class="line"><span style="color:#24292e;">        OPCPackage pkg = OPCPackage.open(file);</span></span>
<span class="line"><span style="color:#24292e;">        XSSFReader r = new XSSFReader(pkg);</span></span>
<span class="line"><span style="color:#24292e;">        SharedStringsTable sst = r.getSharedStringsTable();</span></span>
<span class="line"><span style="color:#24292e;">        XMLReader parser = fetchSheetParser(sst);</span></span>
<span class="line"><span style="color:#24292e;">        sheetIndex = onSheet;</span></span>
<span class="line"><span style="color:#24292e;">        InputStream sheet1 = r.getSheet(&quot;rId&quot; + (onSheet + 1));</span></span>
<span class="line"><span style="color:#24292e;">        InputSource sheetSource = new InputSource(sheet1);</span></span>
<span class="line"><span style="color:#24292e;">        parser.parse(sheetSource);</span></span>
<span class="line"><span style="color:#24292e;">        sheet1.close();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void processAllSheet(File file) throws IOException, OpenXML4JException, SAXException {</span></span>
<span class="line"><span style="color:#24292e;">        OPCPackage pkg = OPCPackage.open(file);</span></span>
<span class="line"><span style="color:#24292e;">        XSSFReader xssfReader = new XSSFReader(pkg);</span></span>
<span class="line"><span style="color:#24292e;">        SharedStringsTable sst = xssfReader.getSharedStringsTable();</span></span>
<span class="line"><span style="color:#24292e;">        XMLReader parser = this.fetchSheetParser(sst);</span></span>
<span class="line"><span style="color:#24292e;">        Iterator&lt;InputStream&gt; sheets = xssfReader.getSheetsData();</span></span>
<span class="line"><span style="color:#24292e;">        while (sheets.hasNext()) {</span></span>
<span class="line"><span style="color:#24292e;">            sheetIndex++;</span></span>
<span class="line"><span style="color:#24292e;">            InputStream sheet = sheets.next();</span></span>
<span class="line"><span style="color:#24292e;">            InputSource sheetSource = new InputSource(sheet);</span></span>
<span class="line"><span style="color:#24292e;">            parser.parse(sheetSource);</span></span>
<span class="line"><span style="color:#24292e;">            sheet.close();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private XMLReader fetchSheetParser(SharedStringsTable sst) throws SAXException {</span></span>
<span class="line"><span style="color:#24292e;">        XMLReader parser = XMLReaderFactory.createXMLReader(&quot;org.apache.xerces.parsers.SAXParser&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        ContentHandler handler = new PagingHandler(sst);</span></span>
<span class="line"><span style="color:#24292e;">        parser.setContentHandler(handler);</span></span>
<span class="line"><span style="color:#24292e;">        return parser;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private class PagingHandler extends DefaultHandler {</span></span>
<span class="line"><span style="color:#24292e;">        private SharedStringsTable sst;</span></span>
<span class="line"><span style="color:#24292e;">        private String lastContents;</span></span>
<span class="line"><span style="color:#24292e;">        private boolean nextIsString;</span></span>
<span class="line"><span style="color:#24292e;">        private String index = null;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        private PagingHandler(SharedStringsTable sst) {</span></span>
<span class="line"><span style="color:#24292e;">            this.sst = sst;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        /**</span></span>
<span class="line"><span style="color:#24292e;">         * 每个单元格开始时的处理</span></span>
<span class="line"><span style="color:#24292e;">         */</span></span>
<span class="line"><span style="color:#24292e;">        @Override</span></span>
<span class="line"><span style="color:#24292e;">        public void startElement(String uri, String localName, String name, Attributes attributes) throws SAXException {</span></span>
<span class="line"><span style="color:#24292e;">            // c =&gt; cell</span></span>
<span class="line"><span style="color:#24292e;">            if (name.equals(&quot;c&quot;)) {</span></span>
<span class="line"><span style="color:#24292e;">                index = attributes.getValue(&quot;r&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                // System.out.println(index);</span></span>
<span class="line"><span style="color:#24292e;">                //这是一个新行</span></span>
<span class="line"><span style="color:#24292e;">                if (Pattern.compile(&quot;^A[0-9]+$&quot;).matcher(index).find()) {</span></span>
<span class="line"><span style="color:#24292e;">                    //存储上一行数据</span></span>
<span class="line"><span style="color:#24292e;">                    if (rowData != null &amp;&amp; !rowData.isEmpty()) {</span></span>
<span class="line"><span style="color:#24292e;">                        try {</span></span>
<span class="line"><span style="color:#24292e;">                            List&lt;String&gt; myDataList = getMyDataList();</span></span>
<span class="line"><span style="color:#24292e;">                            rowReader.getRows(sheetIndex, currentRow, myDataList);</span></span>
<span class="line"><span style="color:#24292e;">                        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">                            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">                        }</span></span>
<span class="line"><span style="color:#24292e;">                    }</span></span>
<span class="line"><span style="color:#24292e;">                    rowData = new ArrayList&lt;IndexValue&gt;();//新行要先清除上一行的数据</span></span>
<span class="line"><span style="color:#24292e;">                    currentRow++;//当前行+1</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">                // Figure out if the value is an index in the SST</span></span>
<span class="line"><span style="color:#24292e;">                String cellType = attributes.getValue(&quot;t&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                if (cellType != null &amp;&amp; cellType.equals(&quot;s&quot;)) {</span></span>
<span class="line"><span style="color:#24292e;">                    nextIsString = true;</span></span>
<span class="line"><span style="color:#24292e;">                } else {</span></span>
<span class="line"><span style="color:#24292e;">                    nextIsString = false;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            // Clear contents cache</span></span>
<span class="line"><span style="color:#24292e;">            lastContents = &quot;&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">                //每个单元格结束时的处理</span></span>
<span class="line"><span style="color:#24292e;">        @Override</span></span>
<span class="line"><span style="color:#24292e;">        public void endElement(String uri, String localName, String name) throws SAXException {</span></span>
<span class="line"><span style="color:#24292e;">            if (nextIsString) {</span></span>
<span class="line"><span style="color:#24292e;">                int idx = Integer.parseInt(lastContents);</span></span>
<span class="line"><span style="color:#24292e;">                lastContents = new XSSFRichTextString(sst.getEntryAt(idx)).toString();</span></span>
<span class="line"><span style="color:#24292e;">                nextIsString = false;</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            if (name.equals(&quot;v&quot;)) {</span></span>
<span class="line"><span style="color:#24292e;">                // System.out.println(lastContents);</span></span>
<span class="line"><span style="color:#24292e;">                rowData.add(new IndexValue(index, lastContents));</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        @Override</span></span>
<span class="line"><span style="color:#24292e;">        public void characters(char[] ch, int start, int length) throws SAXException {</span></span>
<span class="line"><span style="color:#24292e;">            lastContents += new String(ch, start, length);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        @Override</span></span>
<span class="line"><span style="color:#24292e;">        public void endDocument() throws SAXException {</span></span>
<span class="line"><span style="color:#24292e;">            if (rowData != null &amp;&amp; !rowData.isEmpty()) {</span></span>
<span class="line"><span style="color:#24292e;">                try {</span></span>
<span class="line"><span style="color:#24292e;">                    List&lt;String&gt; myDataList = getMyDataList();</span></span>
<span class="line"><span style="color:#24292e;">                    rowReader.getRows(sheetIndex, currentRow, myDataList);</span></span>
<span class="line"><span style="color:#24292e;">                } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">                    e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private class IndexValue {</span></span>
<span class="line"><span style="color:#24292e;">        String v_index;</span></span>
<span class="line"><span style="color:#24292e;">        String v_value;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        public IndexValue(String v_index, String v_value) {</span></span>
<span class="line"><span style="color:#24292e;">            super();</span></span>
<span class="line"><span style="color:#24292e;">            this.v_index = v_index;</span></span>
<span class="line"><span style="color:#24292e;">            this.v_value = v_value;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        @Override</span></span>
<span class="line"><span style="color:#24292e;">        public String toString() {</span></span>
<span class="line"><span style="color:#24292e;">            return &quot;IndexValue [v_index=&quot; + v_index + &quot;, v_value=&quot; + v_value + &quot;]&quot;;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        public int getLevel(IndexValue p) {</span></span>
<span class="line"><span style="color:#24292e;">            char[] other = p.v_index.replaceAll(&quot;[0-9]&quot;, &quot;&quot;).toUpperCase().toCharArray();</span></span>
<span class="line"><span style="color:#24292e;">            char[] self = this.v_index.replaceAll(&quot;[0-9]&quot;, &quot;&quot;).toUpperCase().toCharArray();</span></span>
<span class="line"><span style="color:#24292e;">            int self_num = 0;</span></span>
<span class="line"><span style="color:#24292e;">            int other_num = 0;</span></span>
<span class="line"><span style="color:#24292e;">            for (int i = 0; i &lt; self.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">                self_num = self_num * 26 + (self[i] - 64);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            for (int i = 0; i &lt; other.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">                other_num = other_num * 26 + (other[i] - 64);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            return self_num - other_num;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /**</span></span>
<span class="line"><span style="color:#24292e;">     * 获取真实的数据（处理空格）</span></span>
<span class="line"><span style="color:#24292e;">     */</span></span>
<span class="line"><span style="color:#24292e;">    public List&lt;String&gt; getMyDataList() throws Exception {</span></span>
<span class="line"><span style="color:#24292e;">        List&lt;String&gt; myDataList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">        if (rowData == null || rowData.size() &lt;= 0) {</span></span>
<span class="line"><span style="color:#24292e;">            return myDataList;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        int j = 0;</span></span>
<span class="line"><span style="color:#24292e;">        for (; j &lt; rowData.size() - 1; j++) {</span></span>
<span class="line"><span style="color:#24292e;">            //获取当前值,并存储</span></span>
<span class="line"><span style="color:#24292e;">            IndexValue current = rowData.get(j);</span></span>
<span class="line"><span style="color:#24292e;">            myDataList.add(current.v_value);</span></span>
<span class="line"><span style="color:#24292e;">            //预存下一个</span></span>
<span class="line"><span style="color:#24292e;">            IndexValue next = rowData.get(j + 1);</span></span>
<span class="line"><span style="color:#24292e;">            //获取差值</span></span>
<span class="line"><span style="color:#24292e;">            int level = next.getLevel(current);</span></span>
<span class="line"><span style="color:#24292e;">            if (level &lt;= 0) {</span></span>
<span class="line"><span style="color:#24292e;">                throw new Exception(&quot;超出处理范围&quot;);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            for (int k = 0; k &lt; level - 1; k++) {</span></span>
<span class="line"><span style="color:#24292e;">                myDataList.add(&quot;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        myDataList.add(rowData.get(j).v_value);</span></span>
<span class="line"><span style="color:#24292e;">        if (currentRow == 0) {</span></span>
<span class="line"><span style="color:#24292e;">            maxColNum = myDataList.size();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        for (int i = myDataList.size(); i &lt; maxColNum; i++) {</span></span>
<span class="line"><span style="color:#24292e;">            myDataList.add(&quot;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return myDataList;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span style="color:#24292e;">        File file = new File(&quot;D:\\\\test\\\\zjctest07.xlsx&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        ExcelRowReaderImpl excelRowReader = new ExcelRowReaderImpl();</span></span>
<span class="line"><span style="color:#24292e;">        ExcelReader07EventModel test = new ExcelReader07EventModel(excelRowReader);</span></span>
<span class="line"><span style="color:#24292e;">        test.processOneSheet(file, 0);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_4-工具类" tabindex="-1">4. 工具类 <a class="header-anchor" href="#_4-工具类" aria-label="Permalink to &quot;4. 工具类&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class ExcelReaderUtil {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static final String EXCEL03_EXTENSION = &quot;.xls&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static final String EXCEL07_EXTENSION = &quot;.xlsx&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // sheetnum从0开始</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void readExcel(ExcelRowReaderInterface reader, File file, int sheetnum) throws Exception {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String fileName = file.getName();</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (fileName.endsWith(EXCEL03_EXTENSION)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            ExcelReader03EventModel excelReader03EventModel = new ExcelReader03EventModel(reader);</span></span>
<span class="line"><span style="color:#e1e4e8;">            excelReader03EventModel.processOneSheet(file, sheetnum);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else if (fileName.endsWith(EXCEL07_EXTENSION)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            ExcelReader07EventModel excelReader07EventModel = new ExcelReader07EventModel(reader);</span></span>
<span class="line"><span style="color:#e1e4e8;">            excelReader07EventModel.processOneSheet(file, sheetnum);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            throw new Exception(&quot;文件格式错误，fileName的扩展名只能是xls或xlsx。&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void readExcel(ExcelRowReaderInterface reader, File file) throws Exception {</span></span>
<span class="line"><span style="color:#e1e4e8;">        String fileName = file.getName();</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (fileName.endsWith(EXCEL03_EXTENSION)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            ExcelReader03EventModel excelReader03EventModel = new ExcelReader03EventModel(reader);</span></span>
<span class="line"><span style="color:#e1e4e8;">            excelReader03EventModel.processAllSheet(file);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else if (fileName.endsWith(EXCEL07_EXTENSION)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            ExcelReader07EventModel excelReader07EventModel = new ExcelReader07EventModel(reader);</span></span>
<span class="line"><span style="color:#e1e4e8;">            excelReader07EventModel.processAllSheet(file);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            throw new Exception(&quot;文件格式错误，fileName的扩展名只能是xls或xlsx。&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ExcelRowReaderInterface rowReader = new ExcelRowReaderImpl();</span></span>
<span class="line"><span style="color:#e1e4e8;">        ExcelReaderUtil.readExcel(rowReader, new File(&quot;D:\\\\test\\\\zjctest03.xls&quot;), 0);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class ExcelReaderUtil {</span></span>
<span class="line"><span style="color:#24292e;">    public static final String EXCEL03_EXTENSION = &quot;.xls&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    public static final String EXCEL07_EXTENSION = &quot;.xlsx&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // sheetnum从0开始</span></span>
<span class="line"><span style="color:#24292e;">    public static void readExcel(ExcelRowReaderInterface reader, File file, int sheetnum) throws Exception {</span></span>
<span class="line"><span style="color:#24292e;">        String fileName = file.getName();</span></span>
<span class="line"><span style="color:#24292e;">        if (fileName.endsWith(EXCEL03_EXTENSION)) {</span></span>
<span class="line"><span style="color:#24292e;">            ExcelReader03EventModel excelReader03EventModel = new ExcelReader03EventModel(reader);</span></span>
<span class="line"><span style="color:#24292e;">            excelReader03EventModel.processOneSheet(file, sheetnum);</span></span>
<span class="line"><span style="color:#24292e;">        } else if (fileName.endsWith(EXCEL07_EXTENSION)) {</span></span>
<span class="line"><span style="color:#24292e;">            ExcelReader07EventModel excelReader07EventModel = new ExcelReader07EventModel(reader);</span></span>
<span class="line"><span style="color:#24292e;">            excelReader07EventModel.processOneSheet(file, sheetnum);</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            throw new Exception(&quot;文件格式错误，fileName的扩展名只能是xls或xlsx。&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void readExcel(ExcelRowReaderInterface reader, File file) throws Exception {</span></span>
<span class="line"><span style="color:#24292e;">        String fileName = file.getName();</span></span>
<span class="line"><span style="color:#24292e;">        if (fileName.endsWith(EXCEL03_EXTENSION)) {</span></span>
<span class="line"><span style="color:#24292e;">            ExcelReader03EventModel excelReader03EventModel = new ExcelReader03EventModel(reader);</span></span>
<span class="line"><span style="color:#24292e;">            excelReader03EventModel.processAllSheet(file);</span></span>
<span class="line"><span style="color:#24292e;">        } else if (fileName.endsWith(EXCEL07_EXTENSION)) {</span></span>
<span class="line"><span style="color:#24292e;">            ExcelReader07EventModel excelReader07EventModel = new ExcelReader07EventModel(reader);</span></span>
<span class="line"><span style="color:#24292e;">            excelReader07EventModel.processAllSheet(file);</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            throw new Exception(&quot;文件格式错误，fileName的扩展名只能是xls或xlsx。&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span style="color:#24292e;">        ExcelRowReaderInterface rowReader = new ExcelRowReaderImpl();</span></span>
<span class="line"><span style="color:#24292e;">        ExcelReaderUtil.readExcel(rowReader, new File(&quot;D:\\\\test\\\\zjctest03.xls&quot;), 0);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,24),o=[p];function t(c,r,i,y,d,u){return n(),e("div",null,o)}const S=s(l,[["render",t]]);export{m as __pageData,S as default};
