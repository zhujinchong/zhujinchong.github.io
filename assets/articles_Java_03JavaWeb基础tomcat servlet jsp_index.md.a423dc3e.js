import{_ as e,o as s,c as a,Q as l}from"./chunks/framework.2516552c.js";const n="/assets/image-20210324212705148.86972ca1.png",t="/assets/image-20210324213305749.b9dff109.png",p="/assets/image-20210324213557584.bc35eb18.png",o="/assets/image-20210325180022489.f7c7e8d0.png",i="/assets/image-20210325212547290.cb894117.png",c="/assets/image-20210326102623235.77fde600.png",r="/assets/image-20210326103417150.1c38f551.png",u="/assets/image-20210326105724416.ae253586.png",f=JSON.parse('{"title":"1  Tomcat","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/03JavaWeb基础tomcat servlet jsp/index.md","filePath":"articles/Java/03JavaWeb基础tomcat servlet jsp/index.md","lastUpdated":null}'),d={name:"articles/Java/03JavaWeb基础tomcat servlet jsp/index.md"},g=l(`<h1 id="_1-tomcat" tabindex="-1">1 Tomcat <a class="header-anchor" href="#_1-tomcat" aria-label="Permalink to &quot;1  Tomcat&quot;">​</a></h1><h2 id="_1-1-安装和启动" tabindex="-1">1.1 安装和启动 <a class="header-anchor" href="#_1-1-安装和启动" aria-label="Permalink to &quot;1.1  安装和启动&quot;">​</a></h2><p>常见的Java相关的web服务器：</p><ul><li>webLogic：oracle公司，大型JavaEE服务器，收费，性能好。</li><li>webSphere：IBM公司，大型JavaEE服务器，收费，性能好。</li><li>JBOSS：JBOSS公司，大型JavaEE服务器，收费。</li><li>Tomcat：Apache基金组织的，中小型的JavaEE服务器，仅仅支持少量的Java规范，开源免费。</li></ul><p>Tomcat：</p><ol><li>下载：进入官网，选择版本，从Core中选择<code>64-bit-windows.zip</code></li><li>安装：解压即可。</li><li>卸载：删除目录即可。</li></ol><p>Tomcat目录结构：</p><ol><li>bin：可执行文件</li><li>conf：配置文件</li><li>lib：依赖的jar包（不管）</li><li>temp：临时文件</li><li>webapps：存放web项目（html静态动态资源）</li><li>work：存放运行时的数据</li></ol><p>Tomcat启动、关闭：</p><ul><li>启动：双击<code>bin/startup.bat</code>；浏览器访问<code>127.0.0.1:8080</code></li><li>关闭：双击<code>bin/shutdown.bat</code> ；（直接关闭窗口表示强制关闭）</li></ul><p>Tomcat启动可能遇到的问题：</p><ol><li><p>启动时DOS窗口一闪而过：Java环境变量配置问题。</p></li><li><p>启动报错：端口号占用、已经启动</p></li><li><p>修改端口号：从文间<code>conf/server.xml</code>中修改端口号<code>&lt;Connector port=&quot;80&quot;</code></p><p>一般修改为80，80是http默认端口，因此在访问时 不用写端口号。</p></li></ol><h2 id="_1-2-tomcat部署项目" tabindex="-1">1.2 Tomcat部署项目 <a class="header-anchor" href="#_1-2-tomcat部署项目" aria-label="Permalink to &quot;1.2  Tomcat部署项目&quot;">​</a></h2><p>一共三种，推荐第三种：</p><ol><li><p>直接将项目放在webapps目录下；浏览器访问<code>localhost:8080/test/index.html</code></p><ul><li>简化部署：项目打包成war包，复制war包到webapps目录即可。</li></ul></li><li><p>项目不放webapps下，需要配置<code>conf/server.xml</code>文件，里面添加一段内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 文件最后面，&lt;Host&gt;&lt;/Host&gt;之间</span></span>
<span class="line"><span style="color:#e1e4e8;">// docBase项目目录</span></span>
<span class="line"><span style="color:#e1e4e8;">// path浏览器访问的虚拟目录</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!--项目部署--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;Context docBase=&quot;F:\\test&quot; path=&quot;/test&quot; /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 文件最后面，&lt;Host&gt;&lt;/Host&gt;之间</span></span>
<span class="line"><span style="color:#24292e;">// docBase项目目录</span></span>
<span class="line"><span style="color:#24292e;">// path浏览器访问的虚拟目录</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--项目部署--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;Context docBase=&quot;F:\\test&quot; path=&quot;/test&quot; /&gt;</span></span></code></pre></div></li><li><p>在目录<code>conf/Catalina/localhost</code>目录下面创建文件<code>bbb.xml</code>（名字随意）；</p><p>文件中编辑内容：<code>&lt;Context docBase=&quot;F:\\test&quot; /&gt;</code> ；</p><p>浏览器访问地址为：<code>localhost:8080/bbb/index.html</code></p></li></ol><h2 id="_1-3-idea集成tomcat" tabindex="-1">1.3 IDEA集成Tomcat <a class="header-anchor" href="#_1-3-idea集成tomcat" aria-label="Permalink to &quot;1.3  IDEA集成Tomcat&quot;">​</a></h2><p><strong>将Tomcat集成到IDEA中，方便启动</strong></p><ol><li>打开<code>Run-&gt;Edit Configures-&gt;Templates-&gt;Tomcat Server-&gt;Local</code>面板</li><li>Server选项卡下面的Configures配置 安装目录，确定即可。</li></ol><p><img src="`+n+'" alt="image-20210324212705148"></p><h2 id="_1-4-idea创建web项目" tabindex="-1">1.4 IDEA创建web项目 <a class="header-anchor" href="#_1-4-idea创建web项目" aria-label="Permalink to &quot;1.4  IDEA创建web项目&quot;">​</a></h2><p>创建web项目或者模块：</p><ul><li><p>在项目中创建一个module</p><ul><li>Java Enterprise</li><li>Java EE version=Java EE 7 （JavaEE8也行）</li><li>addition libraries：选择Web Application</li><li>versions==3.1 （选择Create web.xml，学会servlet就可以不选)</li></ul><p><img src="'+t+'" alt="image-20210324213305749"></p></li><li><p>在web文件夹下面的index.jsp文件内写<code>Hello world</code></p></li><li><p>启动，自动打开浏览器显示。<img src="'+p+`" alt="image-20210324213557584"></p></li></ul><p><strong>修改tomcat配置</strong></p><ul><li>打开run-&gt;edit conf-&gt;tomcat server-&gt;Server面板 <ul><li>on Update action == Update classes and resources</li><li>on frame deactivation == Update classes and resource 这样就不用经常重启Tomcat</li></ul></li><li>-&gt;Deployment面板，可以配置虚拟目录 <ul><li>Application context == &quot;/虚拟目录&quot;</li></ul></li></ul><p><strong>java动态项目的目录结构</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">--项目名称(根目录)</span></span>
<span class="line"><span style="color:#e1e4e8;">	--WEB-INF目录(有WEB-INF目录，才是动态Web项目)</span></span>
<span class="line"><span style="color:#e1e4e8;">		--web.xml：web项目的核心配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">		--classes目录：放置字节码文件的目录</span></span>
<span class="line"><span style="color:#e1e4e8;">		--lib目录：放置依赖的jar包</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">--项目名称(根目录)</span></span>
<span class="line"><span style="color:#24292e;">	--WEB-INF目录(有WEB-INF目录，才是动态Web项目)</span></span>
<span class="line"><span style="color:#24292e;">		--web.xml：web项目的核心配置文件</span></span>
<span class="line"><span style="color:#24292e;">		--classes目录：放置字节码文件的目录</span></span>
<span class="line"><span style="color:#24292e;">		--lib目录：放置依赖的jar包</span></span></code></pre></div><h1 id="_2-servlet" tabindex="-1">2 Servlet <a class="header-anchor" href="#_2-servlet" aria-label="Permalink to &quot;2  Servlet&quot;">​</a></h1><p>Servlet Filter Listener是JavaWeb的三大组件。</p><p>服务器中的动态资源就是Java类，这个Java类并不普通，它依赖服务器，由服务器执行该类，并且遵循一定规则（接口），该规则/接口就是Servlet。</p><p>Servlet接口定义了Java类被浏览器/Tomcat识别的规则。</p><h2 id="_2-1-servlet原理" tabindex="-1">2.1 Servlet原理 <a class="header-anchor" href="#_2-1-servlet原理" aria-label="Permalink to &quot;2.1  Servlet原理&quot;">​</a></h2><p>概念：是一个Java类，没有主方法，运行在服务器端的小程序，由Tomcat执行。</p><p>本质：是一个接口，定义了Java类被服务器识别的规则。我们需要自定义类，实现Servlet接口，重写方法。</p><p>快速实现一个Servlet类：</p><ol><li><p>创建JavaEE模块（见1.4）；</p></li><li><p>定义一个类<code>xx.xx.ServletDemo.java</code>，实现Servlet接口，重写方法（5个方法）</p></li><li><p>在<code>service()</code>方法中输入<code>System.out.println(&quot;hello world&quot;);</code></p></li><li><p>配置Servlet，在WEB-INF中的web.xml文件中</p><p>注意，放在<code>&lt;web-app&gt;</code>标签内</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!--配置servlet--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!--给servlet起一个名--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;servlet&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;servlet-name&gt;demo1&lt;/servlet-name&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;servlet-class&gt;xx.xx.ServletDemo&lt;/servlet-class&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/servlet&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!--servlet的映射路径--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;servlet-mapping&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;servlet-name&gt;demo1&lt;/servlet-name&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;url-pattern&gt;/demo1&lt;/url-pattern&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/servlet-mapping&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!--配置servlet--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--给servlet起一个名--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;servlet&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;servlet-name&gt;demo1&lt;/servlet-name&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;servlet-class&gt;xx.xx.ServletDemo&lt;/servlet-class&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/servlet&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;!--servlet的映射路径--&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;servlet-mapping&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;servlet-name&gt;demo1&lt;/servlet-name&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;url-pattern&gt;/demo1&lt;/url-pattern&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/servlet-mapping&gt;</span></span></code></pre></div></li><li><p>运行，浏览器访问<code>localhost:8080/demo1</code>（也有可能是<code>localhost:8080/xxx项目名/demo1</code>）</p></li></ol><p>Tomcat执行原理（Tomcat要访问Servlet的实现类，用到反射机制）：</p><ol><li>服务器收到客户端的请求，解析URL，获取访问Servlet的资源路径；</li><li>查找web.xml文件，找到对应的全类名；</li><li>将全类名对应的字节码文件加载进内存，并创建其对象；</li><li>调用其中的方法。</li></ol><h2 id="_2-2-servlet中的方法" tabindex="-1">2.2 Servlet中的方法 <a class="header-anchor" href="#_2-2-servlet中的方法" aria-label="Permalink to &quot;2.2  Servlet中的方法&quot;">​</a></h2><p>查看API，发现servlet有五个抽象方法：</p><ol><li><code>void init()</code> 初始化方法，服务器开启时执行，加载资源</li><li><code>void destroy()</code> 销毁方法，服务器正常关闭时执行，释放资源</li><li><code>void service()</code> 提供服务方法，每次都执行</li><li><code>ServletConfig getServletConfig()</code> 获取ServletConfig对象</li><li><code>String getServletInfo()</code> 获取Servlet信息，如版本、作者等，一般不用。</li></ol><p>Servlet生命周期</p><ol><li>被创建：执行init方法，只执行一次</li><li>被销毁：执行destroy方法，只执行一次</li><li>提供服务：执行service方法，执行多次</li></ol><p><strong>init()方法</strong>：默认情况下，第一次被访问时，Servlet被创建，执行init方法；也可以配置Servlet创建时刻。</p><ol><li><p>定义init执行时刻/Servlet被创建时刻：（在web.xml的<code>&lt;servlet&gt;</code>标签中配置）</p><ul><li><p>启动服务器时创建：</p><p><code>&lt;load-on-startup&gt;0或正数&lt;load-on-startup&gt;</code></p></li><li><p>第一次访问时创建（默认）：</p><p><code>&lt;load-on-startup&gt;负数&lt;load-on-startup&gt;</code></p></li></ul></li><li><p>多个用户访问Servlet时，可能存在线程安全问题：</p><ul><li>解决方法：尽量不要定义成员变量，可以定义局部变量。</li></ul></li></ol><h2 id="_2-3-servlet3-0" tabindex="-1">2.3 Servlet3.0 <a class="header-anchor" href="#_2-3-servlet3-0" aria-label="Permalink to &quot;2.3  Servlet3.0&quot;">​</a></h2><p>好处：</p><ol><li>支持注解配置，可以不用web.xml</li></ol><p>步骤：</p><ol><li><p>创建JavaEE项目/模块（见1.4节），选择Servlet的版本在3.0以上，不用选web.xml文件。</p></li><li><p>定义一个类，实现servlet接口，重写方法</p></li><li><p>在类上使用<code>@WebServlet(&quot;/demo&quot;)</code>注解，其中/demo表示资源路径名</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@WebServlet(&quot;/demo&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public class ServletDemo implements Servlet {</span></span>
<span class="line"><span style="color:#e1e4e8;">	...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@WebServlet(&quot;/demo&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public class ServletDemo implements Servlet {</span></span>
<span class="line"><span style="color:#24292e;">	...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></li></ol><p>访问Servlet路径：</p><ol><li>一个servlet可以定义多个访问路径：<code>@WebServlet({&quot;/demo1&quot;, &quot;/demo2&quot;})</code>；</li><li>两层路径：<code>@WebServlet(&quot;/demo/xxx&quot;)</code>；</li><li>通配符：<code>@WebServlet(&quot;/demo/*&quot;)</code> 其中星号表示所有字符串都可以；</li><li>还可以这样写：<code>@WebServlet(&quot;*.do&quot;)</code> 这里不要写<code>/</code>；</li></ol><h2 id="_2-4-idea与tomcat的相关配置" tabindex="-1">2.4 IDEA与Tomcat的相关配置 <a class="header-anchor" href="#_2-4-idea与tomcat的相关配置" aria-label="Permalink to &quot;2.4  IDEA与Tomcat的相关配置&quot;">​</a></h2><p>IDEA会为每一个web项目单独建立一份配置文件：</p><ul><li><p>运行项目，控制台有一行输出是：<code>Using CATALINA_BASE: &quot;C:\\Users\\...&quot;</code>，这里就是配置文件路径</p></li><li><p>这个配置文件类似于Tomcat第三种部署项目的方式（见1.2节）：</p><ul><li><p><code>config-&gt;Catalina-&gt;localhost-&gt;xxx.xml</code>文件里面定义了项目实际地址，文件内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;?xml version=&quot;1.0&quot;?&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;Context docBase=&quot;E:\\IDEA\\JavaTest\\out\\artifacts\\day10_tomcat2_war_exploded&quot; path=&quot;/day10_tomcat2_war_exploded&quot;/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;?xml version=&quot;1.0&quot;?&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;Context docBase=&quot;E:\\IDEA\\JavaTest\\out\\artifacts\\day10_tomcat2_war_exploded&quot; path=&quot;/day10_tomcat2_war_exploded&quot;/&gt;</span></span></code></pre></div></li><li><p><code>config-&gt;server.xml</code>里面可以配置端口等；</p></li></ul></li></ul><h2 id="_2-5-servlet体系结构" tabindex="-1">2.5 Servlet体系结构 <a class="header-anchor" href="#_2-5-servlet体系结构" aria-label="Permalink to &quot;2.5  Servlet体系结构&quot;">​</a></h2><p>servlet接口的实现类：</p><ol><li>GenericServlet：只需要重写service方法，其他方法已经默认空实现。</li><li>HttpServlet：对http协议的封装，简化操作：（推荐使用） <ul><li>定义类继承HttpServlet</li><li>重写doGet/doPost方法</li></ul></li></ol><p>原因：</p><p>servlet中的service方法是为了处理http请求，第一步就要判断http请求是那种协议：</p><p>get/post等一共7中，get/post最常用，所以我们要在HttpServlet继承类中重写常用的doGet/doPost方法。</p><h1 id="_3-http" tabindex="-1">3 Http <a class="header-anchor" href="#_3-http" aria-label="Permalink to &quot;3  Http&quot;">​</a></h1><p>HTTP超文本传输协议：定义客户端和服务器之间传输数据的格式</p><p>特点：</p><ul><li>基于TCP/IP的高级协议</li><li>默认端口号：80</li><li>基于请求/响应模型：一次请求对应一次响应 (request/response)</li><li>无状态的：每次请求之间相互独立</li></ul><p>历史版本：</p><ul><li>1.0：每次请求响应都会建立新的连接（一个网页需要多个请求，如传文本、传图片等）</li><li>1.1：复用连接</li></ul><p>传输过程：</p><ol><li>tomcat根据请求url中的资源路径，根据配置文件找到Servlet实现类，并创建对象；</li><li>tomcat创建request和response对象，requeset对象中封装http的请求消息；</li><li>tomcat调用service方法；</li><li>程序员在service中，根据请求消息，设置相应数据；</li><li>tomcat将response返给浏览器。</li></ol><h2 id="_3-1-request" tabindex="-1">3.1 Request <a class="header-anchor" href="#_3-1-request" aria-label="Permalink to &quot;3.1  Request&quot;">​</a></h2><p><img src="`+o+`" alt="image-20210325180022489"></p><p>如上图，请求消息数据格式为以下四部分：</p><ol><li><p>请求行 <code>请求方式 请求url 请求协议/版本</code></p></li><li><p>请求头 <code>请求头名称：请求头值</code> （多个请求头）</p><ul><li>User-Agent：浏览器版本等信息，解决兼容等问题</li><li>Referer：请求来自哪个网站</li></ul></li><li><p>请求空行：就是一个空行</p></li><li><p>请求体：</p></li></ol><ul><li>GET没有请求体，Get请求参数在url后面，且长度有限制； <ul><li>POST有请求体，请求的url长度不限，相对安全；</li></ul></li></ul><p><strong>request接口/类：</strong></p><ul><li><p>ServletRequest 接口</p></li><li><p>HttpServletrequest 接口，继承上面的接口</p></li><li><p>org.apache.catalina.connector.RequestFacade 类，由Tomcat实现，继承上面接口</p></li><li><p>所以，Tomcat自己可以实现request类，然后传给Java程序，让程序员处理。</p></li></ul><h2 id="_3-1-request对象的方法" tabindex="-1">3.1 Request对象的方法 <a class="header-anchor" href="#_3-1-request对象的方法" aria-label="Permalink to &quot;3.1  Request对象的方法&quot;">​</a></h2><p><strong>重要、常用、必须记住的方法已经加粗显示</strong></p><ol><li>获取请求行数据（如请求地址是<code>http://localhost/day04/demo?name=tom&amp;age=2</code>） <ul><li>获取请求方式：<code>String getMethod()</code> 得到<code>GET</code></li><li><strong>获取程序虚拟目录：</strong><code>String getContextPath()</code> 得到<code>/day04</code></li><li>获取Servlet路径：<code>String getServletPath()</code> 得到<code>/demo</code></li><li>获取get方式请求参数：<code>String getQueryString()</code> 得到<code>name=Tom&amp;age=2</code></li><li><strong>获取统一资源定位符URI：</strong><code>String getRequestURI()</code> 如<code>/day04/demo</code> 得到<code>/day04/demo</code></li><li>获取统一资源标识符URL：<code>StringBuffer getRequestURL()</code> 得到 <code>http://localhost/day04/demo</code></li><li>获取协议和版本：<code>String getProtocol()</code> 得到<code>HTTP/1.1</code></li><li>获取客户机IP地址：<code>String getRemoteAddr()</code></li></ul></li><li>获取请求头数据 <ul><li><strong>根据请求头名称获得值：</strong><code>String getHeader(String name)</code></li><li>获取所有请求头名称：<code>Enumeration&lt;String&gt; getHeaderNames()</code></li></ul></li><li>获取请求体数据 （POST请求方式） <ul><li>字符流 <code>BufferedReader getReader()</code> 字节流<code>ServletInputstream getInputStream()</code></li></ul></li></ol><p><strong>其他方法：（都很重要）</strong></p><blockquote><p>GET方式在Tomcat8中中文乱码已经解决；</p><p>POST方式会遇到中文乱码，需要先设置<code>req.setCharacterEncoding(&quot;utf-8&quot;)</code></p></blockquote><ul><li><p><strong>获取请求参数的通用方法</strong> （GET和POST都可以，所以代码可以重用<code>this.doPost(req, resp)</code>）</p><ul><li><code>String getParameter(String name)</code> 更根据参数名称获取参数值</li><li><code>String[] getParameterValues(String name)</code> 更根据参数名称获取参数值数组（复选框中的值）</li><li><code>Enumeration&lt;String&gt; getParameterNames()</code> 获取所有请求的参数名称，可以遍历</li><li><code>Map&lt;String String[]&gt; getParameterNames()</code> 获取所有请求的参数map集合</li></ul></li><li><p>**请求转发：**服务器内部的资源跳转方式（如Demo1转到Demo2）</p><ul><li><code>req.getRequestDispatcher(&quot;/demo2&quot;).forward(req, resp);</code></li><li>特点：浏览器地址栏不会变化,相当于只请求一次；只能转发到当前服务器内部资源。</li></ul></li><li><p><strong>共享数据：</strong> （主要用于请求转发中，第一个Servlet给第二个Servlet传数据）</p><ul><li><p>域对象：一个有作用范围的对象，可以在范围内共享数据</p></li><li><p>request域：代表一次请求的范围，一般用于<strong>请求转发</strong>的多个资源中共享数据</p><ol><li><code>setAttribute(String name, Object obj)</code> 存储数据</li><li><code>Object getAttrbute(String name)</code> 通过键获取值</li><li><code>removeAttribute(String name)</code> 通过键移除键值对</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">例如：两个servlet,分别是/demo1 和 /demo2</span></span>
<span class="line"><span style="color:#e1e4e8;">step1 在/demo1中        req.setAttribute(&quot;msg&quot;, &quot;hello&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">step2 在/demo1中请求转发	req.getRequestDispatcher(&quot;/demo2&quot;).forward(req, resp);</span></span>
<span class="line"><span style="color:#e1e4e8;">step3 在/demo2中接收	 String s = req.getAttribute(&quot;msg&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">例如：两个servlet,分别是/demo1 和 /demo2</span></span>
<span class="line"><span style="color:#24292e;">step1 在/demo1中        req.setAttribute(&quot;msg&quot;, &quot;hello&quot;);</span></span>
<span class="line"><span style="color:#24292e;">step2 在/demo1中请求转发	req.getRequestDispatcher(&quot;/demo2&quot;).forward(req, resp);</span></span>
<span class="line"><span style="color:#24292e;">step3 在/demo2中接收	 String s = req.getAttribute(&quot;msg&quot;);</span></span></code></pre></div></li></ul></li><li><p>获取ServletContext</p><ul><li><code>ServletContext req.getServletContext()</code> 后面再讲</li></ul></li></ul><h2 id="_3-1-request案例-用户登录" tabindex="-1">3.1 Request案例：用户登录 <a class="header-anchor" href="#_3-1-request案例-用户登录" aria-label="Permalink to &quot;3.1  Request案例：用户登录&quot;">​</a></h2><p>用户登录案例需求：</p><ol><li>编写login.html登录页面</li><li>使用Druid数据库连接池技术，操作mysql数据库中user表</li><li>使用JdbcTemplate技术封装JDBC</li><li>登录成功跳转到SuccessServlet；登录失败跳转到FailServlet</li></ol><p>实现代码：</p><ol><li><p>创建JavaEE项目/模块</p><p><img src="`+i+'" alt="image-20210325212547290"></p></li><li><p>导入Jar包，以及<code>druid.properties</code></p><ul><li><code>druid.properties</code>放在src目录下面；</li><li>在web目录中创建WEB-INF目录，再创建lib目录，放入msql驱动；druid连接池；jdbc Tempalte；</li><li>右键lib目录<code>Add as Library</code></li></ul><p><img src="'+c+`" alt="image-20210326102623235"></p></li><li><p>创建数据库db1中的user表</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">CREATE DATABASE IF NOT EXISTS db1;</span></span>
<span class="line"><span style="color:#e1e4e8;">USE db1;</span></span>
<span class="line"><span style="color:#e1e4e8;">DROP TABLE IF EXISTS USER;</span></span>
<span class="line"><span style="color:#e1e4e8;">CREATE TABLE USER</span></span>
<span class="line"><span style="color:#e1e4e8;">(</span></span>
<span class="line"><span style="color:#e1e4e8;">   id INT PRIMARY KEY AUTO_INCREMENT,</span></span>
<span class="line"><span style="color:#e1e4e8;">   username VARCHAR(20) UNIQUE NOT NULL,</span></span>
<span class="line"><span style="color:#e1e4e8;">   password  VARCHAR(20) NOT NULL</span></span>
<span class="line"><span style="color:#e1e4e8;">);</span></span>
<span class="line"><span style="color:#e1e4e8;">INSERT INTO USER VALUES</span></span>
<span class="line"><span style="color:#e1e4e8;">(NULL, &#39;tom&#39;, &#39;tom&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">(NULL, &#39;jack&#39;, &#39;jack&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">CREATE DATABASE IF NOT EXISTS db1;</span></span>
<span class="line"><span style="color:#24292e;">USE db1;</span></span>
<span class="line"><span style="color:#24292e;">DROP TABLE IF EXISTS USER;</span></span>
<span class="line"><span style="color:#24292e;">CREATE TABLE USER</span></span>
<span class="line"><span style="color:#24292e;">(</span></span>
<span class="line"><span style="color:#24292e;">   id INT PRIMARY KEY AUTO_INCREMENT,</span></span>
<span class="line"><span style="color:#24292e;">   username VARCHAR(20) UNIQUE NOT NULL,</span></span>
<span class="line"><span style="color:#24292e;">   password  VARCHAR(20) NOT NULL</span></span>
<span class="line"><span style="color:#24292e;">);</span></span>
<span class="line"><span style="color:#24292e;">INSERT INTO USER VALUES</span></span>
<span class="line"><span style="color:#24292e;">(NULL, &#39;tom&#39;, &#39;tom&#39;),</span></span>
<span class="line"><span style="color:#24292e;">(NULL, &#39;jack&#39;, &#39;jack&#39;);</span></span></code></pre></div></li><li><p>创建JDBCUtils工具类（获取连接池，获取链接对象）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class JDBCUtils {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private static DataSource ds;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    static {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Properties pro = new Properties();</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            pro.load(JDBCUtils.class.getClassLoader().getResourceAsStream(&quot;druid.properties&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">            ds = DruidDataSourceFactory.createDataSource(pro);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (IOException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static DataSource getDataSource() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return ds;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public static Connection getConnection() throws SQLException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return ds.getConnection();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class JDBCUtils {</span></span>
<span class="line"><span style="color:#24292e;">    private static DataSource ds;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    static {</span></span>
<span class="line"><span style="color:#24292e;">        Properties pro = new Properties();</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            pro.load(JDBCUtils.class.getClassLoader().getResourceAsStream(&quot;druid.properties&quot;));</span></span>
<span class="line"><span style="color:#24292e;">            ds = DruidDataSourceFactory.createDataSource(pro);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (IOException e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static DataSource getDataSource() {</span></span>
<span class="line"><span style="color:#24292e;">        return ds;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public static Connection getConnection() throws SQLException {</span></span>
<span class="line"><span style="color:#24292e;">        return ds.getConnection();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></li><li><p>在domain包中创建User类</p></li><li><p>在dao包中创建UserDao类，实现login方法（使用JDBCTemplate执行sql查询）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class UserDao {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private JdbcTemplate template = new JdbcTemplate(JDBCUtils.getDataSource());</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public User login(User loginUser) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            String sql = &quot;select * from user where username = ? and password = ?&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">            User user = template.queryForObject(sql,</span></span>
<span class="line"><span style="color:#e1e4e8;">                    new BeanPropertyRowMapper&lt;User&gt;(User.class),</span></span>
<span class="line"><span style="color:#e1e4e8;">                    loginUser.getUsername(), loginUser.getPassword());</span></span>
<span class="line"><span style="color:#e1e4e8;">            return user;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (DataAccessException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            return null;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class UserDao {</span></span>
<span class="line"><span style="color:#24292e;">    private JdbcTemplate template = new JdbcTemplate(JDBCUtils.getDataSource());</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public User login(User loginUser) {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            String sql = &quot;select * from user where username = ? and password = ?&quot;;</span></span>
<span class="line"><span style="color:#24292e;">            User user = template.queryForObject(sql,</span></span>
<span class="line"><span style="color:#24292e;">                    new BeanPropertyRowMapper&lt;User&gt;(User.class),</span></span>
<span class="line"><span style="color:#24292e;">                    loginUser.getUsername(), loginUser.getPassword());</span></span>
<span class="line"><span style="color:#24292e;">            return user;</span></span>
<span class="line"><span style="color:#24292e;">        } catch (DataAccessException e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            return null;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></li><li><p>创建<code>LoginServlet</code>类：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@WebServlet(&quot;/loginServlet&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">public class LoginServlet extends HttpServlet {</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.doPost(req, resp);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        req.setCharacterEncoding(&quot;utf-8&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        String username = req.getParameter(&quot;username&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        String password = req.getParameter(&quot;password&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        User loginUser = new User();</span></span>
<span class="line"><span style="color:#e1e4e8;">        loginUser.setUsername(username);</span></span>
<span class="line"><span style="color:#e1e4e8;">        loginUser.setPassword(password);</span></span>
<span class="line"><span style="color:#e1e4e8;">        UserDao dao = new UserDao();</span></span>
<span class="line"><span style="color:#e1e4e8;">        User user = dao.login(loginUser);</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (user == null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 登录失败</span></span>
<span class="line"><span style="color:#e1e4e8;">            req.getRequestDispatcher(&quot;/failLoginServlet&quot;).forward(req, resp);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            req.setAttribute(&quot;user&quot;, user);</span></span>
<span class="line"><span style="color:#e1e4e8;">            req.getRequestDispatcher(&quot;/successLoginServlet&quot;).forward(req, resp);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@WebServlet(&quot;/loginServlet&quot;)</span></span>
<span class="line"><span style="color:#24292e;">public class LoginServlet extends HttpServlet {</span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {</span></span>
<span class="line"><span style="color:#24292e;">        this.doPost(req, resp);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {</span></span>
<span class="line"><span style="color:#24292e;">        req.setCharacterEncoding(&quot;utf-8&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        String username = req.getParameter(&quot;username&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        String password = req.getParameter(&quot;password&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        User loginUser = new User();</span></span>
<span class="line"><span style="color:#24292e;">        loginUser.setUsername(username);</span></span>
<span class="line"><span style="color:#24292e;">        loginUser.setPassword(password);</span></span>
<span class="line"><span style="color:#24292e;">        UserDao dao = new UserDao();</span></span>
<span class="line"><span style="color:#24292e;">        User user = dao.login(loginUser);</span></span>
<span class="line"><span style="color:#24292e;">        if (user == null) {</span></span>
<span class="line"><span style="color:#24292e;">            // 登录失败</span></span>
<span class="line"><span style="color:#24292e;">            req.getRequestDispatcher(&quot;/failLoginServlet&quot;).forward(req, resp);</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            req.setAttribute(&quot;user&quot;, user);</span></span>
<span class="line"><span style="color:#24292e;">            req.getRequestDispatcher(&quot;/successLoginServlet&quot;).forward(req, resp);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></li><li><p>创建<code>SuccessLoginServlet</code>类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">User user = (User) req.getAttribute(&quot;user&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">if (user != null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	resp.setContentType(&quot;text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">	resp.getWriter().write(&quot;登录成功&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">User user = (User) req.getAttribute(&quot;user&quot;);</span></span>
<span class="line"><span style="color:#24292e;">if (user != null) {</span></span>
<span class="line"><span style="color:#24292e;">	resp.setContentType(&quot;text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span style="color:#24292e;">	resp.getWriter().write(&quot;登录成功&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div></li><li><p>创建<code>FailLoginServlet</code>类</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">resp.setContentType(&quot;text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">resp.getWriter().write(&quot;登录失败!&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">resp.setContentType(&quot;text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span style="color:#24292e;">resp.getWriter().write(&quot;登录失败!&quot;);</span></span></code></pre></div></li><li><p>创建index.html</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;form action=&quot;/loginServlet&quot; method=&quot;post&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    用户名：&lt;input type=&quot;text&quot; name=&quot;username&quot;&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    密码：&lt;input type=&quot;password&quot; name=&quot;password&quot;&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;input type=&quot;submit&quot; value=&quot;登录&quot;&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;form action=&quot;/loginServlet&quot; method=&quot;post&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    用户名：&lt;input type=&quot;text&quot; name=&quot;username&quot;&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">    密码：&lt;input type=&quot;password&quot; name=&quot;password&quot;&gt;&lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;input type=&quot;submit&quot; value=&quot;登录&quot;&gt;</span></span></code></pre></div></li><li><p>运行tomcat前，查看<code>Edit Configurations</code> （这里IDEA会自动识别，一般不用改，如果报错，请查看）</p><p><img src="`+r+`" alt="image-20210326103417150"></p></li><li><p>如果出现错误<code>Artifact xxx:war exploded: Error during artifact deployment. </code></p><ul><li>jar包位置，或者add as libraray；</li><li>servlet编写错误；servlet注解<code>@WebServlet(&quot;/xxx&quot;)</code> ；或者自己百度去吧。</li></ul></li></ol><p>BeanUtils工具类：简化 请求参数 的封装</p><ol><li>导入jar包<code>commons-beanutils-1.8.0.jar</code></li><li>User类必须符合JavaBean标准（私有成员变量，空参构造，Getter Setter）</li></ol><p>BeanUtils代码：(LoginServlet中)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 设置请求数据编码</span></span>
<span class="line"><span style="color:#e1e4e8;">req.setCharacterEncoding(&quot;UTF-8&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">// 获取提交数据</span></span>
<span class="line"><span style="color:#e1e4e8;">Map&lt;String, String[]&gt; map = req.getParameterMap();</span></span>
<span class="line"><span style="color:#e1e4e8;">// 创建对象</span></span>
<span class="line"><span style="color:#e1e4e8;">User loginUser = new User();</span></span>
<span class="line"><span style="color:#e1e4e8;">// 封装对象</span></span>
<span class="line"><span style="color:#e1e4e8;">BeanUtils.populate(loginUser, map);  // try-catch捕获</span></span>
<span class="line"><span style="color:#e1e4e8;">// 登录判断</span></span>
<span class="line"><span style="color:#e1e4e8;">UserDao dao = new UserDao();</span></span>
<span class="line"><span style="color:#e1e4e8;">User user = dao.login(loginUser);</span></span>
<span class="line"><span style="color:#e1e4e8;">if (user == null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	req.getRequestDispatcher(&quot;/failLoginServlet&quot;).forward(req, resp);</span></span>
<span class="line"><span style="color:#e1e4e8;">} else {</span></span>
<span class="line"><span style="color:#e1e4e8;">	req.setAttribute(&quot;user&quot;, user);</span></span>
<span class="line"><span style="color:#e1e4e8;">    req.getRequestDispatcher(&quot;/successLoginServlet&quot;).forward(req, resp);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 设置请求数据编码</span></span>
<span class="line"><span style="color:#24292e;">req.setCharacterEncoding(&quot;UTF-8&quot;);</span></span>
<span class="line"><span style="color:#24292e;">// 获取提交数据</span></span>
<span class="line"><span style="color:#24292e;">Map&lt;String, String[]&gt; map = req.getParameterMap();</span></span>
<span class="line"><span style="color:#24292e;">// 创建对象</span></span>
<span class="line"><span style="color:#24292e;">User loginUser = new User();</span></span>
<span class="line"><span style="color:#24292e;">// 封装对象</span></span>
<span class="line"><span style="color:#24292e;">BeanUtils.populate(loginUser, map);  // try-catch捕获</span></span>
<span class="line"><span style="color:#24292e;">// 登录判断</span></span>
<span class="line"><span style="color:#24292e;">UserDao dao = new UserDao();</span></span>
<span class="line"><span style="color:#24292e;">User user = dao.login(loginUser);</span></span>
<span class="line"><span style="color:#24292e;">if (user == null) {</span></span>
<span class="line"><span style="color:#24292e;">	req.getRequestDispatcher(&quot;/failLoginServlet&quot;).forward(req, resp);</span></span>
<span class="line"><span style="color:#24292e;">} else {</span></span>
<span class="line"><span style="color:#24292e;">	req.setAttribute(&quot;user&quot;, user);</span></span>
<span class="line"><span style="color:#24292e;">    req.getRequestDispatcher(&quot;/successLoginServlet&quot;).forward(req, resp);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_3-2-response" tabindex="-1">3.2 Response <a class="header-anchor" href="#_3-2-response" aria-label="Permalink to &quot;3.2  Response&quot;">​</a></h2><p><img src="`+u+`" alt="image-20210326105724416"></p><p>响应消息格式：</p><ol><li>响应行：<code>协议/版本 响应状态码 状态码描述</code> （<code>HTTP/1.1 200 OK</code>） <ul><li>响应状态码：都是3位数，分为5类 <ul><li>1xx 服务器收到消息，但没有接收完成，告诉浏览器；</li><li>2xx 成功200</li><li>3xx 重定向 （302重定向 304不用再传，访问缓存吧）</li><li>4xx 客户端错误 （404请求路径错误 405请求方法没有对应的doXx方法）</li><li>5xx 服务器错误 （500服务内部出现异常）</li></ul></li></ul></li><li>响应头 <code>头名称：值</code><ul><li>Content-type：响应数据格式(html)，以及编码格式</li><li>Content-disposition：以什么格式打开响应数据 <ul><li>in-line，默认值，在当前页面打开；</li><li>attachment，以附件的形式打开；</li></ul></li></ul></li><li>响应空行：空行</li><li>响应体：HTML代码/图片的编码</li></ol><h2 id="_3-2-response对象的方法" tabindex="-1">3.2 Response对象的方法 <a class="header-anchor" href="#_3-2-response对象的方法" aria-label="Permalink to &quot;3.2  Response对象的方法&quot;">​</a></h2><p><strong>常用方法</strong></p><ol><li>设置响应行：<code>resp.setStatus(int sc)</code></li><li>设置响应头：<code>setHeader(String name, String value)</code></li><li>设置响应体：字符输出流<code>getWriter()</code>、字节输出流<code>getOutputStream()</code></li></ol><p><strong>其他方法</strong></p><ol><li><p>重定向：<code>resp.sendRedirect(&quot;/day04/ServletDemo2&quot;)</code></p><ul><li>重定向特点：地址栏发生变化，属于两次请求，可以访问其他站点资源，不能共享数据</li><li>转发特点：地址栏不变，是一次请求，只能访问当前站点资源，能共享数据</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">String contextPath = req.getContextPath();	// 虚拟目录</span></span>
<span class="line"><span style="color:#e1e4e8;">req.getRequestDispatcher(&quot;/demo2&quot;).forward(req, resp); // 方法可能自己找到的虚拟目录</span></span>
<span class="line"><span style="color:#e1e4e8;">resp.sendRedirect(contextPath + &quot;/demo2&quot;);   // 这样需要自己加虚拟目录</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">String contextPath = req.getContextPath();	// 虚拟目录</span></span>
<span class="line"><span style="color:#24292e;">req.getRequestDispatcher(&quot;/demo2&quot;).forward(req, resp); // 方法可能自己找到的虚拟目录</span></span>
<span class="line"><span style="color:#24292e;">resp.sendRedirect(contextPath + &quot;/demo2&quot;);   // 这样需要自己加虚拟目录</span></span></code></pre></div></li><li><p>告诉浏览器编码方式两种方式，一般用第二种</p><ul><li><code>resp.setHeader(&quot;content-type&quot;, &quot;text/html;charset=utf-8&quot;);</code></li><li><code>resp.setContentType(&quot;text/html;charset=utf-8&quot;);</code></li></ul></li><li><p>字符流</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">resp.setContentType(&quot;text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">PrintWriter pw = resp.getWriter();</span></span>
<span class="line"><span style="color:#e1e4e8;">pw.write(&quot;你好 hello&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">resp.setContentType(&quot;text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span style="color:#24292e;">PrintWriter pw = resp.getWriter();</span></span>
<span class="line"><span style="color:#24292e;">pw.write(&quot;你好 hello&quot;);</span></span></code></pre></div></li><li><p>字节流（注意，文本一般用字符流，图片才是字节流，这里只是示例用法）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">resp.setContentType(&quot;text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">ServletOutputStream os = resp.getOutputStream();</span></span>
<span class="line"><span style="color:#e1e4e8;">os.write(&quot;你好&quot;.getBytes(&quot;utf-8&quot;));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">resp.setContentType(&quot;text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span style="color:#24292e;">ServletOutputStream os = resp.getOutputStream();</span></span>
<span class="line"><span style="color:#24292e;">os.write(&quot;你好&quot;.getBytes(&quot;utf-8&quot;));</span></span></code></pre></div></li></ol><h2 id="_3-3-servletcontext" tabindex="-1">3.3 ServletContext <a class="header-anchor" href="#_3-3-servletcontext" aria-label="Permalink to &quot;3.3  ServletContext&quot;">​</a></h2><p>概念：代表整个web应用，可以和程序的服务器交互</p><p>获取ServletContext对象：</p><ol><li><code>ServletContext servletContext = req.getServletContext();</code></li><li><code>ServletContext servletContext = this.getServletContext();</code> （建议使用）</li></ol><p>功能：</p><ol><li><p>获取MIME类型</p><ul><li><p>MIME类型：互联网通信定义的一种文件数据类型</p></li><li><p>MIME格式：<code>大类型/小类型</code>， 如 <code>text/html</code></p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">  ServletContext servletContext = req.getServletContext();</span></span>
<span class="line"><span style="color:#e1e4e8;">  String filename = &quot;a.jpg&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  System.out.println(servletContext.getMimeType(filename)); // 输出image/jpeg</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">  ServletContext servletContext = req.getServletContext();</span></span>
<span class="line"><span style="color:#24292e;">  String filename = &quot;a.jpg&quot;;</span></span>
<span class="line"><span style="color:#24292e;">  System.out.println(servletContext.getMimeType(filename)); // 输出image/jpeg</span></span></code></pre></div></li></ul></li><li><p>域对象：共享数据：所有用户，所有数据</p><ul><li><code>servletContext.setAttribute(String, Object);</code> （可以在另一个servlet中获取）</li><li><code>servletContext.getAttribute(String);</code></li><li><code>servletContext.removeAttribute(String)</code></li></ul></li><li><p>获取文件真实的路径 （注意和request区分）</p><ul><li>真实路径是指：tomcat配置文件中指向程序真实存放的地址</li><li>a.txt在src目录下；b.txt在web目录下；c.txt在web/WEB-INF目录下；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ServletContext c = this.getServletContext();</span></span>
<span class="line"><span style="color:#e1e4e8;">String path = c.getRealPath(&quot;/b.txt&quot;);  </span></span>
<span class="line"><span style="color:#e1e4e8;">// E:\\IDEA\\JavaTest2\\out\\artifacts\\day03_tomcat2_war_exploded\\b.txt</span></span>
<span class="line"><span style="color:#e1e4e8;">String path2 = c.getRealPath(&quot;/web/c.txt&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">// E:\\IDEA\\JavaTest2\\out\\artifacts\\day03_tomcat2_war_exploded\\WEB-INF\\c.txt</span></span>
<span class="line"><span style="color:#e1e4e8;">String path2 = c.getContextPath(&quot;/WEB-INF/classes/a.class&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">// 和上面一样</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ServletContext c = this.getServletContext();</span></span>
<span class="line"><span style="color:#24292e;">String path = c.getRealPath(&quot;/b.txt&quot;);  </span></span>
<span class="line"><span style="color:#24292e;">// E:\\IDEA\\JavaTest2\\out\\artifacts\\day03_tomcat2_war_exploded\\b.txt</span></span>
<span class="line"><span style="color:#24292e;">String path2 = c.getRealPath(&quot;/web/c.txt&quot;);</span></span>
<span class="line"><span style="color:#24292e;">// E:\\IDEA\\JavaTest2\\out\\artifacts\\day03_tomcat2_war_exploded\\WEB-INF\\c.txt</span></span>
<span class="line"><span style="color:#24292e;">String path2 = c.getContextPath(&quot;/WEB-INF/classes/a.class&quot;);</span></span>
<span class="line"><span style="color:#24292e;">// 和上面一样</span></span></code></pre></div></li></ol><h2 id="_3-3-servletcontext案例-文件下载" tabindex="-1">3.3 ServletContext案例：文件下载 <a class="header-anchor" href="#_3-3-servletcontext案例-文件下载" aria-label="Permalink to &quot;3.3  ServletContext案例：文件下载&quot;">​</a></h2><p>现在浏览器比较高级，一些文件可以自动转到下载功能。</p><p>对于任何格式文件，如何实现下载功能（让浏览器下载）：</p><ul><li>使用响应头设置资源的打开方式：<code>content-disposition:attachment;filename=xxx</code>（以附件形式打开）</li></ul><p>实现：</p><ol><li>超链接指向servlet （传递文件名）；</li><li>servlet获取文件名；加载文件进内存；指定response响应头；将文件写到response输出流中。</li></ol><p>代码：</p><ol><li><p>html页面：</p><ul><li>图片放在<code>web/img/687.png</code></li><li>servlet是虚拟目录，demo是servlet资源路径</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> &lt;a href=&quot;/servlet/demo?filename=1.png&quot;&gt;图片下载&lt;/a&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"> &lt;a href=&quot;/servlet/demo?filename=1.png&quot;&gt;图片下载&lt;/a&gt;</span></span></code></pre></div></li><li><p>servlet编程：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 获取参数</span></span>
<span class="line"><span style="color:#e1e4e8;">String filename = req.getParameter(&quot;filename&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">// 找到资源路径</span></span>
<span class="line"><span style="color:#e1e4e8;">ServletContext c = this.getServletContext();</span></span>
<span class="line"><span style="color:#e1e4e8;">String realPath = c.getRealPath(&quot;/img/&quot; + filename); // E:\\xx\\xx_war\\img\\1.png</span></span>
<span class="line"><span style="color:#e1e4e8;">// 设置响应头（文件类型）</span></span>
<span class="line"><span style="color:#e1e4e8;">String mimeType = c.getMimeType(filename);</span></span>
<span class="line"><span style="color:#e1e4e8;">resp.setHeader(&quot;content-type&quot;, mimeType);</span></span>
<span class="line"><span style="color:#e1e4e8;">// 设置响应头（浏览器打开方式）</span></span>
<span class="line"><span style="color:#e1e4e8;">resp.setHeader(&quot;content-disposition&quot;, &quot;attachment;filename=&quot;+filename);</span></span>
<span class="line"><span style="color:#e1e4e8;">// 字节流加载</span></span>
<span class="line"><span style="color:#e1e4e8;">FileInputStream is = new FileInputStream(realPath);</span></span>
<span class="line"><span style="color:#e1e4e8;">// 字节流输出</span></span>
<span class="line"><span style="color:#e1e4e8;">ServletOutputStream os = resp.getOutputStream();</span></span>
<span class="line"><span style="color:#e1e4e8;">byte[] buff = new byte[2014 * 8];</span></span>
<span class="line"><span style="color:#e1e4e8;">int len = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">while ((len = is.read(buff)) != -1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    os.write(buff, 0, len);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">is.close();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 获取参数</span></span>
<span class="line"><span style="color:#24292e;">String filename = req.getParameter(&quot;filename&quot;);</span></span>
<span class="line"><span style="color:#24292e;">// 找到资源路径</span></span>
<span class="line"><span style="color:#24292e;">ServletContext c = this.getServletContext();</span></span>
<span class="line"><span style="color:#24292e;">String realPath = c.getRealPath(&quot;/img/&quot; + filename); // E:\\xx\\xx_war\\img\\1.png</span></span>
<span class="line"><span style="color:#24292e;">// 设置响应头（文件类型）</span></span>
<span class="line"><span style="color:#24292e;">String mimeType = c.getMimeType(filename);</span></span>
<span class="line"><span style="color:#24292e;">resp.setHeader(&quot;content-type&quot;, mimeType);</span></span>
<span class="line"><span style="color:#24292e;">// 设置响应头（浏览器打开方式）</span></span>
<span class="line"><span style="color:#24292e;">resp.setHeader(&quot;content-disposition&quot;, &quot;attachment;filename=&quot;+filename);</span></span>
<span class="line"><span style="color:#24292e;">// 字节流加载</span></span>
<span class="line"><span style="color:#24292e;">FileInputStream is = new FileInputStream(realPath);</span></span>
<span class="line"><span style="color:#24292e;">// 字节流输出</span></span>
<span class="line"><span style="color:#24292e;">ServletOutputStream os = resp.getOutputStream();</span></span>
<span class="line"><span style="color:#24292e;">byte[] buff = new byte[2014 * 8];</span></span>
<span class="line"><span style="color:#24292e;">int len = 0;</span></span>
<span class="line"><span style="color:#24292e;">while ((len = is.read(buff)) != -1) {</span></span>
<span class="line"><span style="color:#24292e;">    os.write(buff, 0, len);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">is.close();</span></span></code></pre></div></li></ol><p>中文乱码：刚才下载的文件，如果是中文名，不同浏览器显示不一样的编码。</p><p>解决思路：</p><ol><li>获取客户端使用的浏览器版本信息</li><li>根据不同的版本，设置不同的编码方式</li></ol><p>代码：</p><ol><li>将DownLoadUtils.java文件（工具类）放在utils工具包</li><li>servlet中编码 String agent = req.getHeader(&quot;user-agent&quot;); filename = DownLoadUtils.getFileName(agent, filename);</li></ol><h1 id="_4-会话" tabindex="-1">4 会话 <a class="header-anchor" href="#_4-会话" aria-label="Permalink to &quot;4  会话&quot;">​</a></h1><p>会话：一个会话中包含多次请求和响应。</p><p>一次会话：浏览器第一次给服务器资源发送请求、会话建立，直到一方断开为止。</p><p>功能：在一次会话的范围内的多次请求间，共享数据</p><p>方式：</p><ul><li>客户端会话技术：Cookie，数据保存在客户端</li><li>服务器端会话技术：Session，数据保存在服务器</li></ul><h2 id="_4-1-cookie" tabindex="-1">4.1 Cookie <a class="header-anchor" href="#_4-1-cookie" aria-label="Permalink to &quot;4.1  Cookie&quot;">​</a></h2><p>实现步骤：</p><ol><li><p>服务器(Servlet)创建cookie对象，绑定数据</p><p><code>new Cookie(String name, String value)</code>；</p></li><li><p>服务器发送cookie对象（浏览器自动存储）</p><p><code>resp.addCookie(cookie)</code></p></li><li><p>浏览器第二次访问服务器时，服务器会获取cookie对象，拿到数据</p><p><code>Cookie[] req.getCookies()</code>。</p></li></ol><p>cookie原理：</p><ul><li>cookie是存在请求头和响应头传递</li></ul><p>cookie细节：</p><ol><li>一次 可不可以发送多个cookie？ <ul><li>可以，多创建几个cookie对象，添加就可以了。</li></ul></li><li>cookie在浏览器保存多长时间？ <ul><li>默认情况下，浏览器关闭，cookie被销毁。</li><li>持久化存储： <ul><li><code>cookie.setMaxAge(正数)</code> 存到硬盘xx秒；</li><li><code>cookie.setMaxAge(负数)</code> 默认值；</li><li><code>cookie.setMaxAge(0)</code> 删除cookie信息。</li></ul></li></ul></li><li>cookie能不能存中文？ <ul><li>在tomcat 8之前，不可以存储中文。</li><li>在tomcat 8之后，可以存储中文，但是不支持特殊字符，需要URL编码： <ul><li>编码 <code>str = URLEncoder.encode(str, &quot;utf-8&quot;);</code></li><li>解码 <code>str = URLDecoder.decode(str, &quot;utf-8&quot;);</code></li></ul></li></ul></li><li>cookie数据共享范围？ <ul><li>一个服务器，部署多个web项目之间，默认不能共享</li><li>默认是设置 <code>cookie.setPath(&quot;/当前虚拟路径&quot;)</code></li><li>如果整个服务器 共享，可以设置为 ：<code>cookie.setPath(&quot;/&quot;)</code></li></ul></li></ol><p>cookie特点：</p><ol><li>cookie存储在客户端</li><li>单个cookie的大小限制在4kb，并且同一个域名下的总的cookie数量也有限制。</li><li>cookie一般存储少量的不太敏感的数据</li><li>在不登录的情况下，完成服务器对客户端的身份识别。</li></ol><h2 id="_4-1-cookie案例" tabindex="-1">4.1 Cookie案例 <a class="header-anchor" href="#_4-1-cookie案例" aria-label="Permalink to &quot;4.1  Cookie案例&quot;">​</a></h2><p>需求：访问Servlet，如果是第一次访问，提示&quot;欢迎您首次访问&quot;；否则，显示上次访问时间。</p><p>创建一个servlet，在doPost()方法中即可完成：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">		resp.setContentType(&quot;text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        Cookie[] cookies = req.getCookies();</span></span>
<span class="line"><span style="color:#e1e4e8;">        boolean flag = false;</span></span>
<span class="line"><span style="color:#e1e4e8;">        String date = new Date().toString();</span></span>
<span class="line"><span style="color:#e1e4e8;">        date = URLEncoder.encode(date, &quot;utf-8&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (cookies != null &amp;&amp; cookies.length &gt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            for (Cookie c : cookies) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                String name = c.getName();</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (name.equals(&quot;lastTime&quot;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    flag = true;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    String value = URLDecoder.decode(c.getValue(), &quot;utf-8&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    resp.getWriter().write(&quot;&lt;h1&gt;上次访问时间：&quot; + value + &quot;&lt;/h1&gt;&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    // 重设时间</span></span>
<span class="line"><span style="color:#e1e4e8;">                    c.setValue(date);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    c.setMaxAge(60 * 60); // 1小时</span></span>
<span class="line"><span style="color:#e1e4e8;">                    resp.addCookie(c);</span></span>
<span class="line"><span style="color:#e1e4e8;">                    break;</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (flag == false) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            Cookie c = new Cookie(&quot;lastTime&quot;, date);</span></span>
<span class="line"><span style="color:#e1e4e8;">            c.setMaxAge(60 * 60);</span></span>
<span class="line"><span style="color:#e1e4e8;">            resp.addCookie(c);</span></span>
<span class="line"><span style="color:#e1e4e8;">            resp.getWriter().write(&quot;欢迎首次访问&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">		resp.setContentType(&quot;text/html;charset=utf-8&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        Cookie[] cookies = req.getCookies();</span></span>
<span class="line"><span style="color:#24292e;">        boolean flag = false;</span></span>
<span class="line"><span style="color:#24292e;">        String date = new Date().toString();</span></span>
<span class="line"><span style="color:#24292e;">        date = URLEncoder.encode(date, &quot;utf-8&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        if (cookies != null &amp;&amp; cookies.length &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">            for (Cookie c : cookies) {</span></span>
<span class="line"><span style="color:#24292e;">                String name = c.getName();</span></span>
<span class="line"><span style="color:#24292e;">                if (name.equals(&quot;lastTime&quot;)) {</span></span>
<span class="line"><span style="color:#24292e;">                    flag = true;</span></span>
<span class="line"><span style="color:#24292e;">                    String value = URLDecoder.decode(c.getValue(), &quot;utf-8&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                    resp.getWriter().write(&quot;&lt;h1&gt;上次访问时间：&quot; + value + &quot;&lt;/h1&gt;&quot;);</span></span>
<span class="line"><span style="color:#24292e;">                    // 重设时间</span></span>
<span class="line"><span style="color:#24292e;">                    c.setValue(date);</span></span>
<span class="line"><span style="color:#24292e;">                    c.setMaxAge(60 * 60); // 1小时</span></span>
<span class="line"><span style="color:#24292e;">                    resp.addCookie(c);</span></span>
<span class="line"><span style="color:#24292e;">                    break;</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        if (flag == false) {</span></span>
<span class="line"><span style="color:#24292e;">            Cookie c = new Cookie(&quot;lastTime&quot;, date);</span></span>
<span class="line"><span style="color:#24292e;">            c.setMaxAge(60 * 60);</span></span>
<span class="line"><span style="color:#24292e;">            resp.addCookie(c);</span></span>
<span class="line"><span style="color:#24292e;">            resp.getWriter().write(&quot;欢迎首次访问&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span></code></pre></div><h2 id="_4-2-session" tabindex="-1">4.2 Session <a class="header-anchor" href="#_4-2-session" aria-label="Permalink to &quot;4.2  Session&quot;">​</a></h2><p>实现步骤：</p><ol><li><p>存储session</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">HttpSession session = req.getSession();</span></span>
<span class="line"><span style="color:#e1e4e8;">session.setAttribute(&quot;msg&quot;, &quot;hello&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">HttpSession session = req.getSession();</span></span>
<span class="line"><span style="color:#24292e;">session.setAttribute(&quot;msg&quot;, &quot;hello&quot;);</span></span></code></pre></div></li><li><p>获取session (另一个servlet文件)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">HttpSession session = req.getSession();</span></span>
<span class="line"><span style="color:#e1e4e8;">Object msg = session.getAttribute(&quot;msg&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">System.out.println(msg);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">HttpSession session = req.getSession();</span></span>
<span class="line"><span style="color:#24292e;">Object msg = session.getAttribute(&quot;msg&quot;);</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(msg);</span></span></code></pre></div></li></ol><p>session原理：（session依赖cookie）</p><ol><li>第一次创建session对象时；</li><li>服务器会创建一个cookie，cookie指向session；（<code>JSESSIONID: xxx</code>）</li><li>第二次访问时，服务器会根据cookie信息，查找到session对象。</li></ol><p>session细节：</p><ol><li><p>当客户端关闭后，服务器不关闭，两次获取session是同一个吗？</p><ul><li><p>默认不是，如果需要，创建cookie，设置最大存储时间：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">HttpSession session = req.getSession();</span></span>
<span class="line"><span style="color:#e1e4e8;">Cookie c = new Cookie(&quot;JSESSIONID&quot;, session.getId());</span></span>
<span class="line"><span style="color:#e1e4e8;">c.setMaxAge(60*60); // 1小时</span></span>
<span class="line"><span style="color:#e1e4e8;">resp.addCookie(c);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">HttpSession session = req.getSession();</span></span>
<span class="line"><span style="color:#24292e;">Cookie c = new Cookie(&quot;JSESSIONID&quot;, session.getId());</span></span>
<span class="line"><span style="color:#24292e;">c.setMaxAge(60*60); // 1小时</span></span>
<span class="line"><span style="color:#24292e;">resp.addCookie(c);</span></span></code></pre></div></li></ul></li><li><p>当客户端不关闭，服务器关闭后，两次获取session是同一个吗？</p><ul><li>不是，因为创建了两次对象，地址不一样，但是tomcat自动完成以下工作： <ul><li>session的钝化：在服务器关闭前，将session对象存储在硬盘上</li><li>session的活化：在服务器启动后，将session文件转化为对象</li></ul></li></ul></li><li><p>session什么时候被销毁？</p><ul><li>服务器关闭</li><li>session对象调用invalidate()</li><li>session默认失效时间 30分钟 <ul><li>修改tomcat配置文件<code>tomcat/conf/web.xml</code> （这是所有项目的父配置文件）</li><li>修改<code>&lt;session-timout&gt;30&lt;/session-timeout&gt;</code></li><li>也可以在项目的<code>web/WEB-INF/web.xml</code>修改</li></ul></li></ul></li></ol><p>session特点：</p><ol><li>用于存储一次会话、多次请求的数据，存储在服务器</li><li>可以存储任意大小的数据</li></ol><p>session与cookie区别：</p><ul><li>session存储服务器端，cookie存储客户端</li><li>session数据安全，cookie相对不安全</li><li>session没有数据大小限制，cookie有数据大小限制</li></ul><h1 id="_5-jsp" tabindex="-1">5 JSP <a class="header-anchor" href="#_5-jsp" aria-label="Permalink to &quot;5  JSP&quot;">​</a></h1><p>（学会就好，现在都快淘汰了吧）</p><p>概念：Java Server Pages，Java服务器端页面。</p><p>服务器解析jsp过程：</p><ol><li>服务器解析浏览器请求，找到<code>xx.jsp</code>页面</li><li>将<code>xx.jsp</code>转换成<code>xx.java</code>文件</li><li>生成<code>xx.class</code>字节码文件</li><li>由字节码文件响应。（只有servlet才可以被外界访问） <ul><li><strong>因此jsp本质上是一个servlet</strong></li><li>该字节码文件(servlet)将页面内容响应给浏览器</li></ul></li></ol><h2 id="_5-1-jsp语法" tabindex="-1">5.1 JSP语法 <a class="header-anchor" href="#_5-1-jsp语法" aria-label="Permalink to &quot;5.1  JSP语法&quot;">​</a></h2><p>jsp的脚本：jsp定义Java代码的方式：</p><ol><li><code>&lt;% 代码 %&gt;</code> 定义的Java代码，在jsp转换后的servlet类的service方法中的语句；</li><li><code>&lt;%! 代码 %&gt; </code> 定义的Java代码，在jsp转换后的servlet类的成员位置；</li><li><code>&lt;%= 代码 %&gt;</code> 定义的Java代码，会输出到页面。</li></ol><p>jsp指令</p><ul><li>作用：用于配置jsp页面，导入资源文件</li><li>格式：<code>&lt;%@ 指令名称 属性名1=属性值1 属性名2=属性值2 ... %&gt;</code></li></ul><p>jsp的三种指令：</p><ol><li><p>page：配置jsp页面 <code>&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot;&gt;</code></p><ul><li><code>contentType=&quot;text/html;charset=UTF-8&quot;</code>:设置响应体的mime类型;设置当前页面的编码</li><li><code>language=&quot;java&quot;</code> 语言，虽然只能使用java语言</li><li><code>buffer=&quot;16kb&quot;</code> 字符输出流缓冲区，默认8kb</li><li><code>import=&quot;java.util.ArrayList&quot;</code> 导包</li><li><code>errorPage=</code>&quot;xxx.jsp&quot; 当前页面发生异常后，会自动跳转到指定的错误页面</li><li><code>iserrorPage=</code>&quot;true&quot; 默认是false，在错误页面设置为true，可以使用exception对象</li></ul></li><li><p>include：页面包含，如一样的页面头，页面尾</p></li></ol><ul><li><code>&lt;%@ include file=&quot;top.jsp&quot; %&gt;</code></li></ul><ol start="3"><li>taglib 导入标签库 <ul><li>格式 <code>&lt;%@ taglib prefix=&quot;前缀&quot; uri=&quot;标签库地址&quot; %&gt;</code></li><li>如JSTL标签库 <code>&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;</code></li></ul></li></ol><p>jsp注释：</p><ol><li>html注释：<code>&lt;!--注释--&gt;</code> ，只能注释html代码</li><li>jsp注释：<code>&lt;%--注释--%&gt;</code>， 可以注释所有</li></ol><h2 id="_5-2-jsp内置对象" tabindex="-1">5.2 JSP内置对象 <a class="header-anchor" href="#_5-2-jsp内置对象" aria-label="Permalink to &quot;5.2  JSP内置对象&quot;">​</a></h2><p>jsp本质是一个servlet，因此许多对象如 requst, response不需要定义，可以直接使用。如</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">String contextPath = request.getContextPath();</span></span>
<span class="line"><span style="color:#e1e4e8;">out.print(contextPath);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">String contextPath = request.getContextPath();</span></span>
<span class="line"><span style="color:#24292e;">out.print(contextPath);</span></span></code></pre></div><p>jsp一共有9个内置对象：</p><ol><li><p>request：（和在servlet使用一样）</p></li><li><p>response：（和在servlet使用一样）</p></li><li><p>pageContext：</p><ul><li><p>当前页面共享数据，<code>pageContext.setAttribute(&quot;msg&quot;, &quot;hello&quot;);</code> （类似于servlet中，request.setAttribute, request.getAttribute）</p></li><li><p>获取其他8个对象：<code>pageContext.getOut()</code></p></li></ul></li><li><p>session：HttpServletRequest类型</p></li><li><p>application：和ServletContext一样，所有用户共享数据</p></li><li><p>page：Object类型，当前页面(Servlet)的对象 this</p></li><li><p>out：JspWriter类型，字符输出流对象，可以将数据输出到页面上，和<code>resp.getWriter()</code>类似</p><ul><li><code>resp.getWriter().write(String)</code>不管定义在什么位置，都会优先于out输出。</li><li><code>out.write()</code>定义在什么位置输出在什么位置；</li></ul></li><li><p>config：ServletConfig类型，Servlet的配置对象</p></li><li><p>exception：Throwable类型，异常对象</p></li></ol><h2 id="_5-3-el表达式" tabindex="-1">5.3 EL表达式 <a class="header-anchor" href="#_5-3-el表达式" aria-label="Permalink to &quot;5.3  EL表达式&quot;">​</a></h2><p>概念：expression language表达式语言</p><p>作用：替换和简化jsp页面中java代码的编写</p><p>用途：取值、运算</p><p>语法：<code>\${ 表达式 }</code></p><p>注意：jsp默认支持EL表达式。如果需要忽略:</p><ul><li>忽略所有：加入指令<code>&lt;%@ page isELIgnored=&quot;true&quot; %&gt;</code></li><li>忽略一个：加一个转义字符，<code>\\\${ ... }</code></li></ul><p>EL运算符：（比Java多几个，可以几个字母表示）</p><ol><li>算数运算符：<code>+ - * / % div mod</code></li><li>比较运算符：<code>&gt; &lt; &gt;= &lt;= == !=</code></li><li>逻辑运算符：<code>&amp;&amp; || ! and or not</code></li><li>空运算符：<code>empty</code> （用于判断字符串、集合、数组是否为null，长度是否为0）</li></ol><p><strong>EL表达式只能从域对象中获取值</strong>，语法如下：</p><ol><li><code>\${域名.键名}</code>：从指定域中获取指定键的值</li><li>简化写法<code>\${键名}</code>：表示依次从最小的域中找键名</li><li>list集合写法：<code>\${域名.集合名[索引]}</code></li><li>map集合写法：<code>\${域名.集合名.key名}</code></li></ol><p>域对象一个四个：</p><ol><li>pageScope 对应pageContent类型</li><li>requestScope 对应request类型</li><li>sessionScope 对应session类型</li><li>applicationScope 对应application(Servletcontext)类型</li></ol><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;%</span></span>
<span class="line"><span style="color:#e1e4e8;">  request.setAttribute(&quot;name&quot;, &quot;Tom&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">%&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">\${requestScope.name}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;%</span></span>
<span class="line"><span style="color:#e1e4e8;">  User user = new User(&quot;张三&quot;, 18, new Date());</span></span>
<span class="line"><span style="color:#e1e4e8;">  request.setAttribute(&quot;u&quot;, user);</span></span>
<span class="line"><span style="color:#e1e4e8;">%&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">\${requestScope.u.name} &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">\${u.name} &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">\${u.birthday} &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;%</span></span>
<span class="line"><span style="color:#e1e4e8;">  List list = new ArrayList();</span></span>
<span class="line"><span style="color:#e1e4e8;">  list.add(&quot;aaa&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  list.add(&quot;bbb&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  request.setAttribute(&quot;list&quot;, list);</span></span>
<span class="line"><span style="color:#e1e4e8;">%&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">\${requestScope.list} &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">\${requestScope.list[0]}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;%</span></span>
<span class="line"><span style="color:#24292e;">  request.setAttribute(&quot;name&quot;, &quot;Tom&quot;);</span></span>
<span class="line"><span style="color:#24292e;">%&gt;</span></span>
<span class="line"><span style="color:#24292e;">\${requestScope.name}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;%</span></span>
<span class="line"><span style="color:#24292e;">  User user = new User(&quot;张三&quot;, 18, new Date());</span></span>
<span class="line"><span style="color:#24292e;">  request.setAttribute(&quot;u&quot;, user);</span></span>
<span class="line"><span style="color:#24292e;">%&gt;</span></span>
<span class="line"><span style="color:#24292e;">\${requestScope.u.name} &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">\${u.name} &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">\${u.birthday} &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;%</span></span>
<span class="line"><span style="color:#24292e;">  List list = new ArrayList();</span></span>
<span class="line"><span style="color:#24292e;">  list.add(&quot;aaa&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  list.add(&quot;bbb&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  request.setAttribute(&quot;list&quot;, list);</span></span>
<span class="line"><span style="color:#24292e;">%&gt;</span></span>
<span class="line"><span style="color:#24292e;">\${requestScope.list} &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">\${requestScope.list[0]}</span></span></code></pre></div><p>EL表达式中有11个隐式对象（上面介绍了四个）</p><ul><li>pageContext可以获取其它8个隐式对象，如<code>\${pageContext.request.contextPath}</code> （动态获取虚拟目录）</li></ul><h2 id="_5-4-jstl标签库" tabindex="-1">5.4 JSTL标签库 <a class="header-anchor" href="#_5-4-jstl标签库" aria-label="Permalink to &quot;5.4  JSTL标签库&quot;">​</a></h2><p>概念：JavaServer Pages Tag Library, JSP标准标签库，是Apache组织提供的开源的免费的jsp标签</p><p>作用：用于简化和替换jsp页面上的java代码</p><p>使用步骤：</p><ol><li>导入jstl相关的jar包</li><li>引入标签库<code>&lt;%@ taglib prefix=&quot;c&quot; uri=&quot;http://java.sun.com/jsp/jstl/core&quot; %&gt;</code></li><li>使用标签</li></ol><p>常用的JSTL标签（只看三个）：</p><ol><li>if 相当于java中的if语句</li><li>choose 相当于java中的switch语句</li><li>foreach 相当于java中的for语句</li></ol><p>if</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;c:if test=&quot;\${s == &#39;haha&#39;}&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"> &lt;h1&gt; 如果是真，显示当前内容 &lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/c:if&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;c:if test=&quot;\${s == &#39;haha&#39;}&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"> &lt;h1&gt; 如果是真，显示当前内容 &lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/c:if&gt;</span></span></code></pre></div><p>choose</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;%</span></span>
<span class="line"><span style="color:#e1e4e8;">  request.setAttribute(&quot;number&quot;, 13);</span></span>
<span class="line"><span style="color:#e1e4e8;">%&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;c:choose&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;c:when test=&quot;\${number == 6}&quot;&gt;周六&lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;c:when test=&quot;\${number == 7}&quot;&gt;周日&lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;c:otherwise&gt;不是星期天&lt;/c:otherwise&gt;}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/c:choose&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;%</span></span>
<span class="line"><span style="color:#24292e;">  request.setAttribute(&quot;number&quot;, 13);</span></span>
<span class="line"><span style="color:#24292e;">%&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;c:choose&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;c:when test=&quot;\${number == 6}&quot;&gt;周六&lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;c:when test=&quot;\${number == 7}&quot;&gt;周日&lt;/c:when&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;c:otherwise&gt;不是星期天&lt;/c:otherwise&gt;}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/c:choose&gt;</span></span></code></pre></div><p>foreach 第一种用法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;c:forEach begin=&quot;1&quot; end=&quot;10&quot; var=&quot;i&quot; step=&quot;1&quot; varStatus=&quot;s&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  \${i} \${s.index} \${s.count} &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/c:forEach&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;c:forEach begin=&quot;1&quot; end=&quot;10&quot; var=&quot;i&quot; step=&quot;1&quot; varStatus=&quot;s&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  \${i} \${s.index} \${s.count} &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/c:forEach&gt;</span></span></code></pre></div><p>其中 varStatus可以不用，varStatus表示循环状态</p><p>s.index表示容器中元素的索引，从0开始</p><p>s.count表示循环次数</p><p>foreach 第二种用法 遍历容器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;%</span></span>
<span class="line"><span style="color:#e1e4e8;">  List list = new ArrayList();</span></span>
<span class="line"><span style="color:#e1e4e8;">  list.add(&quot;aaa&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  list.add(&quot;bbb&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  request.setAttribute(&quot;list&quot;, list);</span></span>
<span class="line"><span style="color:#e1e4e8;">%&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;c:forEach items=&quot;\${list}&quot; var=&quot;str&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  \${str} &lt;br&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/c:forEach&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;%</span></span>
<span class="line"><span style="color:#24292e;">  List list = new ArrayList();</span></span>
<span class="line"><span style="color:#24292e;">  list.add(&quot;aaa&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  list.add(&quot;bbb&quot;);</span></span>
<span class="line"><span style="color:#24292e;">  request.setAttribute(&quot;list&quot;, list);</span></span>
<span class="line"><span style="color:#24292e;">%&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;c:forEach items=&quot;\${list}&quot; var=&quot;str&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  \${str} &lt;br&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/c:forEach&gt;</span></span></code></pre></div><h1 id="_6-filter" tabindex="-1">6 Filter <a class="header-anchor" href="#_6-filter" aria-label="Permalink to &quot;6  Filter&quot;">​</a></h1><p>Servlet Filter Listener是JavaWeb的三大组件。</p><p>过滤器一般用于完成通用的操作，如：登录验证、统一编码、敏感字符过滤等</p><p>过滤器执行流程：</p><ul><li>客户端请求资源-》对request过滤-》访问资源-》对response过滤-》返给客户端。</li></ul><h2 id="_6-1-定义过滤器" tabindex="-1">6.1 定义过滤器 <a class="header-anchor" href="#_6-1-定义过滤器" aria-label="Permalink to &quot;6.1  定义过滤器&quot;">​</a></h2><p>定义一个过滤器的步骤：（和定义servlet相似）</p><ol><li>定义一个类，实现接口Filter</li><li>重写其中方法 （init(), doFilter(), destroy()）</li><li>配置拦截路径 <code>@WebFilter(&quot;/*&quot;)</code> （对所有路径过滤）</li><li>在<code>doFilter(servletRequest, servletResponse, filterChain)</code>方法中过滤内容</li></ol><h2 id="_6-2-过滤器配置" tabindex="-1">6.2 过滤器配置 <a class="header-anchor" href="#_6-2-过滤器配置" aria-label="Permalink to &quot;6.2  过滤器配置&quot;">​</a></h2><p>拦截路径配置：</p><ul><li>具体资源路径：<code>@WebFilter(/index.jsp)</code></li><li>目录拦截：<code>@WebFilter(/user/*)</code></li><li>后缀名拦截：<code>@WebFilter(*.jsp)</code></li><li>拦截所有资源：<code>@WebFilter(/*)</code></li></ul><p>拦截方式配置：（设置dispatcherTypes属性）</p><ul><li>REQUEST: 默认值，浏览器直接请求资源时，拦截过滤</li><li>FORWARD: 转发访问资源时，拦截过滤</li><li>INCLUDE: 包含访问资源（不讲）</li><li>ERROR: 错误跳转资源（不讲）</li><li>ASYNC: 异步访问资源 （先不讲，涉及到Ajax）</li></ul><p>还可以拦截多个请求方式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@WebFilter(value=&quot;/*&quot;,dispatcherTypes={DispatcherTypes.REQUEST, DispatcherTypes.FORWARD})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@WebFilter(value=&quot;/*&quot;,dispatcherTypes={DispatcherTypes.REQUEST, DispatcherTypes.FORWARD})</span></span></code></pre></div><h2 id="_6-3-过滤器链" tabindex="-1">6.3 过滤器链 <a class="header-anchor" href="#_6-3-过滤器链" aria-label="Permalink to &quot;6.3  过滤器链&quot;">​</a></h2><p>如果有多个过滤器，访问资源前，按顺序过滤；访问资源后，按相反顺序过滤。</p><p>过滤顺序可以进行配置：</p><ol><li>注解配置方式：按照类名的字符串比较，值小的先执行</li><li>web.xml配置方式 <ul><li><code>&lt;filter-mapping&gt;&lt;/filter-mapping&gt;</code> 谁定义在上面，谁先执行</li></ul></li></ol><h2 id="_6-4-案例-用户登录" tabindex="-1">6.4 案例：用户登录 <a class="header-anchor" href="#_6-4-案例-用户登录" aria-label="Permalink to &quot;6.4  案例：用户登录&quot;">​</a></h2><p>如果用户登录，直接放行；如果没有，跳转到登录页面。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@Override</span></span>
<span class="line"><span style="color:#e1e4e8;">public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 转成HttpServlet</span></span>
<span class="line"><span style="color:#e1e4e8;">    HttpServletRequest req = (HttpServletRequest) servletRequest;</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 获取资源请求路径</span></span>
<span class="line"><span style="color:#e1e4e8;">    String uri = req.getRequestURI();</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 判断是否包含登陆相关资源：js,css,图片等</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (uri.contains(&quot;/login.jsp&quot;) || uri.contains(&quot;/loginServlet&quot;) || uri.contains(&quot;/css/&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    || uri.contains(&quot;/js/&quot;) || uri.contains(&quot;/fonts/&quot;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 如果正在登陆，直接放行</span></span>
<span class="line"><span style="color:#e1e4e8;">        filterChain.doFilter(servletRequest, servletResponse);</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 访问的是非登陆资源，判断是否已经登陆</span></span>
<span class="line"><span style="color:#e1e4e8;">        Object user = req.getSession().getAttribute(&quot;user&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (user != null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 已经登陆， 直接放行</span></span>
<span class="line"><span style="color:#e1e4e8;">            filterChain.doFilter(servletRequest, servletResponse);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            req.setAttribute(&quot;login_msg&quot;, &quot;请先登陆&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">            req.getRequestDispatcher(&quot;/login.jsp&quot;).forward(servletRequest, servletResponse);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@Override</span></span>
<span class="line"><span style="color:#24292e;">public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {</span></span>
<span class="line"><span style="color:#24292e;">    // 转成HttpServlet</span></span>
<span class="line"><span style="color:#24292e;">    HttpServletRequest req = (HttpServletRequest) servletRequest;</span></span>
<span class="line"><span style="color:#24292e;">    // 获取资源请求路径</span></span>
<span class="line"><span style="color:#24292e;">    String uri = req.getRequestURI();</span></span>
<span class="line"><span style="color:#24292e;">    // 判断是否包含登陆相关资源：js,css,图片等</span></span>
<span class="line"><span style="color:#24292e;">    if (uri.contains(&quot;/login.jsp&quot;) || uri.contains(&quot;/loginServlet&quot;) || uri.contains(&quot;/css/&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    || uri.contains(&quot;/js/&quot;) || uri.contains(&quot;/fonts/&quot;)) {</span></span>
<span class="line"><span style="color:#24292e;">        // 如果正在登陆，直接放行</span></span>
<span class="line"><span style="color:#24292e;">        filterChain.doFilter(servletRequest, servletResponse);</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">        // 访问的是非登陆资源，判断是否已经登陆</span></span>
<span class="line"><span style="color:#24292e;">        Object user = req.getSession().getAttribute(&quot;user&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        if (user != null) {</span></span>
<span class="line"><span style="color:#24292e;">            // 已经登陆， 直接放行</span></span>
<span class="line"><span style="color:#24292e;">            filterChain.doFilter(servletRequest, servletResponse);</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            req.setAttribute(&quot;login_msg&quot;, &quot;请先登陆&quot;);</span></span>
<span class="line"><span style="color:#24292e;">            req.getRequestDispatcher(&quot;/login.jsp&quot;).forward(servletRequest, servletResponse);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h1 id="_7-listener" tabindex="-1">7 Listener <a class="header-anchor" href="#_7-listener" aria-label="Permalink to &quot;7  Listener&quot;">​</a></h1><p>（理论了解即可，后续用的少）</p><p>Servlet Filter Listener是JavaWeb的三大组件。</p><p>事件监听机制：</p><ul><li>事件：一件事情（如：单击、双击）</li><li>事件源：事件发生的地方（如：按钮、鼠标、键盘）</li><li>监听器：一个对象</li><li>注册监听：将事件、事件源、监听器绑定在一起。</li></ul><p>JavaWeb中有很多监听器对象，先只学习其中一个：ServletContextListener</p><p>ServletContextListener：监听ServletContext对象的创建和销毁</p><ul><li>void contextDestroyed: ServletContextListener对象被销毁前调用该方法</li><li>void contextInitialized: ServletContextListener对象被创建后调用该方法</li></ul><p>实现步骤：</p><ol><li>定义一个类，继承ServletContextListener类；</li><li>重写上面的两个方法；（如，创建对象后，加载项目全局的配置文件）</li><li>添加注解 <code>@WebListener</code></li></ol>`,236),y=[g];function q(h,v,m,b,S,x){return s(),a("div",null,y)}const C=e(d,[["render",q]]);export{f as __pageData,C as default};
