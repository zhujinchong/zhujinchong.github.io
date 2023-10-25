import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/51SpringBoot/06分页PageHelper.md","filePath":"articles/Java/51SpringBoot/06分页PageHelper.md","lastUpdated":1698198415000}'),l={name:"articles/Java/51SpringBoot/06分页PageHelper.md"},p=e(`<p>1、引入依赖</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!--pagehelper--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;groupId&gt;com.github.pagehelper&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;artifactId&gt;pagehelper-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;version&gt;1.2.10&lt;/version&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/dependency&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!--pagehelper--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;dependency&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;groupId&gt;com.github.pagehelper&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;artifactId&gt;pagehelper-spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;version&gt;1.2.10&lt;/version&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/dependency&gt;</span></span></code></pre></div><p>2、PageHelper插件会接受参数，并将参数自动加入到下一个查询数据库操作。</p><p>如果前端用的是DataTables插件，还需要扩展PageInfo返回数据类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import com.github.pagehelper.PageInfo;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 供前端DataTables用</span></span>
<span class="line"><span style="color:#e1e4e8;">public class DataGrid&lt;T&gt; extends PageInfo&lt;T&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public DataGrid(List&lt;T&gt; list) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        super(list);</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.recordsTotal = getTotal();</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.recordsFiltered = getTotal();</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.data = getList();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private long recordsTotal;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private long recordsFiltered;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    private List&lt;T&gt; data;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public long getRecordsTotal() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return recordsTotal;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public long getRecordsFiltered() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return recordsFiltered;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public List&lt;T&gt; getData() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return data;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public void setRecordsTotal(long recordsTotal) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.recordsTotal = recordsTotal;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public void setRecordsFiltered(long recordsFiltered) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.recordsFiltered = recordsFiltered;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public void setData(List&lt;T&gt; data) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.data = data;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import com.github.pagehelper.PageInfo;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 供前端DataTables用</span></span>
<span class="line"><span style="color:#24292e;">public class DataGrid&lt;T&gt; extends PageInfo&lt;T&gt; {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public DataGrid(List&lt;T&gt; list) {</span></span>
<span class="line"><span style="color:#24292e;">        super(list);</span></span>
<span class="line"><span style="color:#24292e;">        this.recordsTotal = getTotal();</span></span>
<span class="line"><span style="color:#24292e;">        this.recordsFiltered = getTotal();</span></span>
<span class="line"><span style="color:#24292e;">        this.data = getList();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private long recordsTotal;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private long recordsFiltered;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    private List&lt;T&gt; data;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public long getRecordsTotal() {</span></span>
<span class="line"><span style="color:#24292e;">        return recordsTotal;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public long getRecordsFiltered() {</span></span>
<span class="line"><span style="color:#24292e;">        return recordsFiltered;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public List&lt;T&gt; getData() {</span></span>
<span class="line"><span style="color:#24292e;">        return data;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void setRecordsTotal(long recordsTotal) {</span></span>
<span class="line"><span style="color:#24292e;">        this.recordsTotal = recordsTotal;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void setRecordsFiltered(long recordsFiltered) {</span></span>
<span class="line"><span style="color:#24292e;">        this.recordsFiltered = recordsFiltered;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void setData(List&lt;T&gt; data) {</span></span>
<span class="line"><span style="color:#24292e;">        this.data = data;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>3、后台使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@RequestMapping(value = &quot;/category/list&quot;, method = RequestMethod.POST)</span></span>
<span class="line"><span style="color:#e1e4e8;">@ResponseBody</span></span>
<span class="line"><span style="color:#e1e4e8;">public DataGrid&lt;Category&gt; getCategoryListByUser(HttpServletRequest request, HttpSession session) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int start = Integer.parseInt(request.getParameter(&quot;start&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">    int length = Integer.parseInt(request.getParameter(&quot;length&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">    PageHelper.startPage((start / length) + 1, length);</span></span>
<span class="line"><span style="color:#e1e4e8;">    User loginUser = (User) session.getAttribute(&quot;loginUser&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (!StringUtils.isEmpty(loginUser)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        List&lt;Category&gt; categoryList = categoryService.getCategoryByUserId(loginUser.getId());</span></span>
<span class="line"><span style="color:#e1e4e8;">        DataGrid&lt;Category&gt; categoryPageInfo = new DataGrid&lt;&gt;(categoryList);</span></span>
<span class="line"><span style="color:#e1e4e8;">        return categoryPageInfo;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return null;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@RequestMapping(value = &quot;/category/list&quot;, method = RequestMethod.POST)</span></span>
<span class="line"><span style="color:#24292e;">@ResponseBody</span></span>
<span class="line"><span style="color:#24292e;">public DataGrid&lt;Category&gt; getCategoryListByUser(HttpServletRequest request, HttpSession session) {</span></span>
<span class="line"><span style="color:#24292e;">    int start = Integer.parseInt(request.getParameter(&quot;start&quot;));</span></span>
<span class="line"><span style="color:#24292e;">    int length = Integer.parseInt(request.getParameter(&quot;length&quot;));</span></span>
<span class="line"><span style="color:#24292e;">    PageHelper.startPage((start / length) + 1, length);</span></span>
<span class="line"><span style="color:#24292e;">    User loginUser = (User) session.getAttribute(&quot;loginUser&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    if (!StringUtils.isEmpty(loginUser)) {</span></span>
<span class="line"><span style="color:#24292e;">        List&lt;Category&gt; categoryList = categoryService.getCategoryByUserId(loginUser.getId());</span></span>
<span class="line"><span style="color:#24292e;">        DataGrid&lt;Category&gt; categoryPageInfo = new DataGrid&lt;&gt;(categoryList);</span></span>
<span class="line"><span style="color:#24292e;">        return categoryPageInfo;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return null;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>4、前端使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">initCategoryListTable: function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">	$(&#39;#dataListTable&#39;).dataTable({</span></span>
<span class="line"><span style="color:#e1e4e8;">        processing: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">        serverSide: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">        searching: false,//是否开始本地搜索</span></span>
<span class="line"><span style="color:#e1e4e8;">        autoWidth: false,</span></span>
<span class="line"><span style="color:#e1e4e8;">        pagingType: &quot;full_numbers&quot;,//除首页、上一页、下一页、末页四个按钮还有页数按钮</span></span>
<span class="line"><span style="color:#e1e4e8;">        info: true, // 左下角显示记录数</span></span>
<span class="line"><span style="color:#e1e4e8;">        pageLength: 10,         // 初始长度</span></span>
<span class="line"><span style="color:#e1e4e8;">        lengthMenu: [10, 20, 50, 100], // 可选长度</span></span>
<span class="line"><span style="color:#e1e4e8;">        destroy: true, //Cannot reinitialise DataTable,解决重新加载表格内容问题</span></span>
<span class="line"><span style="color:#e1e4e8;">        ajax: {</span></span>
<span class="line"><span style="color:#e1e4e8;">            url: &#39;\${ctx}/category/list&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">            method: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        },</span></span>
<span class="line"><span style="color:#e1e4e8;">        columns: [</span></span>
<span class="line"><span style="color:#e1e4e8;">            {</span></span>
<span class="line"><span style="color:#e1e4e8;">                data: &#39;id&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                title: &#39;No.&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                orderable: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">                render: function (data) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    return data;</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            },</span></span>
<span class="line"><span style="color:#e1e4e8;">            {</span></span>
<span class="line"><span style="color:#e1e4e8;">                data: &#39;name&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                title: &#39;Category&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                render: function (data) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    return data;</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            },</span></span>
<span class="line"><span style="color:#e1e4e8;">            {</span></span>
<span class="line"><span style="color:#e1e4e8;">                data: &#39;id&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                title: &#39;Options&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">                render: function (data, display, row) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    let op = &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    op += &#39;&lt;i class=&quot;bi bi-pencil-fill text-primary mr-3&quot; title=&quot;修改&quot; onclick=&quot;BlogManage.bindEvent.categoryUpdate(&#39; + row.id + &#39;,\\&#39;&#39;+row.name+&#39;\\&#39;)&quot;&gt;&lt;/i&gt;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    op += &#39;&lt;i class=&quot;bi bi-trash-fill text-primary&quot; title=&quot;删除&quot; onclick=&quot;BlogManage.bindEvent.categoryDelete(&#39; + row.id + &#39;)&quot;&gt;&lt;/i&gt;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    return op;</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            },</span></span>
<span class="line"><span style="color:#e1e4e8;">        ],</span></span>
<span class="line"><span style="color:#e1e4e8;">	});</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">initCategoryListTable: function () {</span></span>
<span class="line"><span style="color:#24292e;">	$(&#39;#dataListTable&#39;).dataTable({</span></span>
<span class="line"><span style="color:#24292e;">        processing: true,</span></span>
<span class="line"><span style="color:#24292e;">        serverSide: true,</span></span>
<span class="line"><span style="color:#24292e;">        searching: false,//是否开始本地搜索</span></span>
<span class="line"><span style="color:#24292e;">        autoWidth: false,</span></span>
<span class="line"><span style="color:#24292e;">        pagingType: &quot;full_numbers&quot;,//除首页、上一页、下一页、末页四个按钮还有页数按钮</span></span>
<span class="line"><span style="color:#24292e;">        info: true, // 左下角显示记录数</span></span>
<span class="line"><span style="color:#24292e;">        pageLength: 10,         // 初始长度</span></span>
<span class="line"><span style="color:#24292e;">        lengthMenu: [10, 20, 50, 100], // 可选长度</span></span>
<span class="line"><span style="color:#24292e;">        destroy: true, //Cannot reinitialise DataTable,解决重新加载表格内容问题</span></span>
<span class="line"><span style="color:#24292e;">        ajax: {</span></span>
<span class="line"><span style="color:#24292e;">            url: &#39;\${ctx}/category/list&#39;,</span></span>
<span class="line"><span style="color:#24292e;">            method: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        },</span></span>
<span class="line"><span style="color:#24292e;">        columns: [</span></span>
<span class="line"><span style="color:#24292e;">            {</span></span>
<span class="line"><span style="color:#24292e;">                data: &#39;id&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                title: &#39;No.&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                orderable: true,</span></span>
<span class="line"><span style="color:#24292e;">                render: function (data) {</span></span>
<span class="line"><span style="color:#24292e;">                    return data;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            },</span></span>
<span class="line"><span style="color:#24292e;">            {</span></span>
<span class="line"><span style="color:#24292e;">                data: &#39;name&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                title: &#39;Category&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                render: function (data) {</span></span>
<span class="line"><span style="color:#24292e;">                    return data;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            },</span></span>
<span class="line"><span style="color:#24292e;">            {</span></span>
<span class="line"><span style="color:#24292e;">                data: &#39;id&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                title: &#39;Options&#39;,</span></span>
<span class="line"><span style="color:#24292e;">                render: function (data, display, row) {</span></span>
<span class="line"><span style="color:#24292e;">                    let op = &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">                    op += &#39;&lt;i class=&quot;bi bi-pencil-fill text-primary mr-3&quot; title=&quot;修改&quot; onclick=&quot;BlogManage.bindEvent.categoryUpdate(&#39; + row.id + &#39;,\\&#39;&#39;+row.name+&#39;\\&#39;)&quot;&gt;&lt;/i&gt;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">                    op += &#39;&lt;i class=&quot;bi bi-trash-fill text-primary&quot; title=&quot;删除&quot; onclick=&quot;BlogManage.bindEvent.categoryDelete(&#39; + row.id + &#39;)&quot;&gt;&lt;/i&gt;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">                    return op;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            },</span></span>
<span class="line"><span style="color:#24292e;">        ],</span></span>
<span class="line"><span style="color:#24292e;">	});</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,9),t=[p];function o(c,r,i,y,g,d){return n(),a("div",null,t)}const b=s(l,[["render",o]]);export{h as __pageData,b as default};
