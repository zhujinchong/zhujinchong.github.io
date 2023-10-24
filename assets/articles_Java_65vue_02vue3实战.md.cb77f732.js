import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.2516552c.js";const h=JSON.parse('{"title":"环境","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/65vue/02vue3实战.md","filePath":"articles/Java/65vue/02vue3实战.md","lastUpdated":1698165159000}'),p={name:"articles/Java/65vue/02vue3实战.md"},l=a(`<h1 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h1><h2 id="_1-安装node" tabindex="-1">1. 安装node <a class="header-anchor" href="#_1-安装node" aria-label="Permalink to &quot;1. 安装node&quot;">​</a></h2><p><strong>安装</strong></p><p>下载并安装，一直next，可以选择安装路径，如D:\\nodejs\\</p><p>安装版本&gt;=14</p><p><strong>环境变量</strong></p><p>即使不进行此步骤的环境变量配置也不影响node.js的使用，但是如果不进行环境变量配置，那么在我们使用命令安装node.js全局模块，例如npm install -g express时，会默认安装到C盘的路径C:\\Users\\hua\\AppData\\Roaming\\npm中，所以在这边配置全局安装模块以及缓存目录的环境变量</p><ol><li><p>首先在node.js的安装目录新建两个文件夹node_global和node_cache</p></li><li><p>创建完两个文件夹后，在cmd窗口中输入以下命令（两个路径即是两个文件夹的路径）</p></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm config set prefix &quot;D:\\install\\nodejs\\node_global&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">npm config set cache &quot;D:\\install\\nodejs\\node_cache&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm config set prefix &quot;D:\\install\\nodejs\\node_global&quot;</span></span>
<span class="line"><span style="color:#24292e;">npm config set cache &quot;D:\\install\\nodejs\\node_cache&quot;</span></span></code></pre></div><ol start="3"><li>在【系统变量】新建环境变量 NODE_PATH，值为D:\\install\\nodejs\\node_global\\node_modules，其中D:\\install\\nodejs\\node_global是上述创建的全局模块安装路径文件夹</li><li>修改【用户变量】中的path变量，将C:\\Users\\hua\\AppData\\Roaming\\npm修改为D:\\install\\nodejs\\node_global</li><li>测试是否配置成功，在cmd窗口中输入以下指定全局安装express模块</li></ol><p><strong>国内镜像网站配置</strong></p><p>npm配置成国内源</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm config set registry https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#e1e4e8;">npm config get registry</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm config set registry https://registry.npm.taobao.org</span></span>
<span class="line"><span style="color:#24292e;">npm config get registry</span></span></code></pre></div><h2 id="_2-安装vue项目" tabindex="-1">2. 安装vue项目 <a class="header-anchor" href="#_2-安装vue项目" aria-label="Permalink to &quot;2. 安装vue项目&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">第一种方式：（非vite方式）</span></span>
<span class="line"><span style="color:#e1e4e8;">vue create xxx-project 这种方式是webpack打包方式，编译比较慢</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">第二种方式：（vite方式）</span></span>
<span class="line"><span style="color:#e1e4e8;">npm init vite@latest 这种方式基于vite</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">第一种方式：（非vite方式）</span></span>
<span class="line"><span style="color:#24292e;">vue create xxx-project 这种方式是webpack打包方式，编译比较慢</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">第二种方式：（vite方式）</span></span>
<span class="line"><span style="color:#24292e;">npm init vite@latest 这种方式基于vite</span></span></code></pre></div><h2 id="_3-项目结构" tabindex="-1">3. 项目结构 <a class="header-anchor" href="#_3-项目结构" aria-label="Permalink to &quot;3. 项目结构&quot;">​</a></h2><p>项目结构</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public 放静态资源，但不会被vite所编译</span></span>
<span class="line"><span style="color:#e1e4e8;">src</span></span>
<span class="line"><span style="color:#e1e4e8;">	assets		放静态资源</span></span>
<span class="line"><span style="color:#e1e4e8;">	components 	自定义公共组件</span></span>
<span class="line"><span style="color:#e1e4e8;">	App.vue 	vue全局入口文件</span></span>
<span class="line"><span style="color:#e1e4e8;">	main.ts 	全局配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">	style.css 	可以删除</span></span>
<span class="line"><span style="color:#e1e4e8;">	vite-env.d.ts 声明文件扩充：选了ts,ts不认识vue后缀，此文件定义了文件扩充</span></span>
<span class="line"><span style="color:#e1e4e8;">index.html 项目首页，vue的App.vue就挂在这里</span></span>
<span class="line"><span style="color:#e1e4e8;">package.json 依赖包版本，以及打包、运行命令</span></span>
<span class="line"><span style="color:#e1e4e8;">tsconfig.json</span></span>
<span class="line"><span style="color:#e1e4e8;">vite</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">public和assets相同点</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 资源都可以在html中使用</span></span>
<span class="line"><span style="color:#e1e4e8;">public和assets不同点</span></span>
<span class="line"><span style="color:#e1e4e8;"> * public不会被webpack编译, 它会被直接复制到打包的目录下，所以需要用绝对路径引用</span></span>
<span class="line"><span style="color:#e1e4e8;">public和assets建议：</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 自己的放assets, 第三方放public, 上千个动态引用的图片放public</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public 放静态资源，但不会被vite所编译</span></span>
<span class="line"><span style="color:#24292e;">src</span></span>
<span class="line"><span style="color:#24292e;">	assets		放静态资源</span></span>
<span class="line"><span style="color:#24292e;">	components 	自定义公共组件</span></span>
<span class="line"><span style="color:#24292e;">	App.vue 	vue全局入口文件</span></span>
<span class="line"><span style="color:#24292e;">	main.ts 	全局配置文件</span></span>
<span class="line"><span style="color:#24292e;">	style.css 	可以删除</span></span>
<span class="line"><span style="color:#24292e;">	vite-env.d.ts 声明文件扩充：选了ts,ts不认识vue后缀，此文件定义了文件扩充</span></span>
<span class="line"><span style="color:#24292e;">index.html 项目首页，vue的App.vue就挂在这里</span></span>
<span class="line"><span style="color:#24292e;">package.json 依赖包版本，以及打包、运行命令</span></span>
<span class="line"><span style="color:#24292e;">tsconfig.json</span></span>
<span class="line"><span style="color:#24292e;">vite</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">public和assets相同点</span></span>
<span class="line"><span style="color:#24292e;"> * 资源都可以在html中使用</span></span>
<span class="line"><span style="color:#24292e;">public和assets不同点</span></span>
<span class="line"><span style="color:#24292e;"> * public不会被webpack编译, 它会被直接复制到打包的目录下，所以需要用绝对路径引用</span></span>
<span class="line"><span style="color:#24292e;">public和assets建议：</span></span>
<span class="line"><span style="color:#24292e;"> * 自己的放assets, 第三方放public, 上千个动态引用的图片放public</span></span></code></pre></div><p>单文件结构</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">// 只能有一个</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">// 可以有多个，但是setup属性的只能有一个</span></span>
<span class="line"><span style="color:#e1e4e8;">// setup lang=&quot;ts&quot; 是vue的语法糖，方便开发者直接将代码写在这里面，而不是先写export default {}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">// 可以有多个</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">// 只能有一个</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">// 可以有多个，但是setup属性的只能有一个</span></span>
<span class="line"><span style="color:#24292e;">// setup lang=&quot;ts&quot; 是vue的语法糖，方便开发者直接将代码写在这里面，而不是先写export default {}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#24292e;">// 可以有多个</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h1 id="开发" tabindex="-1">开发 <a class="header-anchor" href="#开发" aria-label="Permalink to &quot;开发&quot;">​</a></h1><h2 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h2><p>src下面会自己创建一个文件夹，一般如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public 放静态资源，但不会被vite所编译</span></span>
<span class="line"><span style="color:#e1e4e8;">src</span></span>
<span class="line"><span style="color:#e1e4e8;">	mock		mock模拟后端返回数据</span></span>
<span class="line"><span style="color:#e1e4e8;">	request		封装aoixs和api</span></span>
<span class="line"><span style="color:#e1e4e8;">	router		存放路由</span></span>
<span class="line"><span style="color:#e1e4e8;">	store		存放公共变量（vuex / pinia）</span></span>
<span class="line"><span style="color:#e1e4e8;">	views		页面</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	assets		放静态资源</span></span>
<span class="line"><span style="color:#e1e4e8;">	components 	自定义公共组件</span></span>
<span class="line"><span style="color:#e1e4e8;">	App.vue 	vue全局入口文件</span></span>
<span class="line"><span style="color:#e1e4e8;">	main.ts 	全局配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">	style.css 	可以删除</span></span>
<span class="line"><span style="color:#e1e4e8;">	vite-env.d.ts 声明文件扩充：选了ts,ts不认识vue后缀，此文件定义了文件扩充</span></span>
<span class="line"><span style="color:#e1e4e8;">index.html 项目首页，vue的App.vue就挂在这里</span></span>
<span class="line"><span style="color:#e1e4e8;">package.json 依赖包版本，以及打包、运行命令</span></span>
<span class="line"><span style="color:#e1e4e8;">tsconfig.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public 放静态资源，但不会被vite所编译</span></span>
<span class="line"><span style="color:#24292e;">src</span></span>
<span class="line"><span style="color:#24292e;">	mock		mock模拟后端返回数据</span></span>
<span class="line"><span style="color:#24292e;">	request		封装aoixs和api</span></span>
<span class="line"><span style="color:#24292e;">	router		存放路由</span></span>
<span class="line"><span style="color:#24292e;">	store		存放公共变量（vuex / pinia）</span></span>
<span class="line"><span style="color:#24292e;">	views		页面</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	assets		放静态资源</span></span>
<span class="line"><span style="color:#24292e;">	components 	自定义公共组件</span></span>
<span class="line"><span style="color:#24292e;">	App.vue 	vue全局入口文件</span></span>
<span class="line"><span style="color:#24292e;">	main.ts 	全局配置文件</span></span>
<span class="line"><span style="color:#24292e;">	style.css 	可以删除</span></span>
<span class="line"><span style="color:#24292e;">	vite-env.d.ts 声明文件扩充：选了ts,ts不认识vue后缀，此文件定义了文件扩充</span></span>
<span class="line"><span style="color:#24292e;">index.html 项目首页，vue的App.vue就挂在这里</span></span>
<span class="line"><span style="color:#24292e;">package.json 依赖包版本，以及打包、运行命令</span></span>
<span class="line"><span style="color:#24292e;">tsconfig.json</span></span></code></pre></div><h2 id="常用组件" tabindex="-1">常用组件 <a class="header-anchor" href="#常用组件" aria-label="Permalink to &quot;常用组件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">axios			操作http请求，一般封装后再用</span></span>
<span class="line"><span style="color:#e1e4e8;">js-cookie		操作cookie的方法的封装，直接使用</span></span>
<span class="line"><span style="color:#e1e4e8;">element-plus</span></span>
<span class="line"><span style="color:#e1e4e8;">pinia			公共变量</span></span>
<span class="line"><span style="color:#e1e4e8;">vue-router		路由</span></span>
<span class="line"><span style="color:#e1e4e8;">less			less语法</span></span>
<span class="line"><span style="color:#e1e4e8;">less-loader</span></span>
<span class="line"><span style="color:#e1e4e8;">echarts			图形/地图</span></span>
<span class="line"><span style="color:#e1e4e8;">moment.js		常用方法的封装包</span></span>
<span class="line"><span style="color:#e1e4e8;">animate.css		动画效果的css类的封装包</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 一般上官网看看怎么用。安装：</span></span>
<span class="line"><span style="color:#e1e4e8;">npm i js-cookie</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">axios			操作http请求，一般封装后再用</span></span>
<span class="line"><span style="color:#24292e;">js-cookie		操作cookie的方法的封装，直接使用</span></span>
<span class="line"><span style="color:#24292e;">element-plus</span></span>
<span class="line"><span style="color:#24292e;">pinia			公共变量</span></span>
<span class="line"><span style="color:#24292e;">vue-router		路由</span></span>
<span class="line"><span style="color:#24292e;">less			less语法</span></span>
<span class="line"><span style="color:#24292e;">less-loader</span></span>
<span class="line"><span style="color:#24292e;">echarts			图形/地图</span></span>
<span class="line"><span style="color:#24292e;">moment.js		常用方法的封装包</span></span>
<span class="line"><span style="color:#24292e;">animate.css		动画效果的css类的封装包</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 一般上官网看看怎么用。安装：</span></span>
<span class="line"><span style="color:#24292e;">npm i js-cookie</span></span></code></pre></div><h2 id="axios封装" tabindex="-1">axios封装 <a class="header-anchor" href="#axios封装" aria-label="Permalink to &quot;axios封装&quot;">​</a></h2><p>先单独文件封装request.ts</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import Cookies from &#39;js-cookie&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const instance = axios.create({</span></span>
<span class="line"><span style="color:#e1e4e8;">    // baseURL: &#39;http://120.24.64.5:8088/mall-admin&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    baseURL: &#39;&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    timeout: 10000</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 拦截器</span></span>
<span class="line"><span style="color:#e1e4e8;">instance.interceptors.request.use(config =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 设置cookie</span></span>
<span class="line"><span style="color:#e1e4e8;">    let token = Cookies.get(&#39;token&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (token){</span></span>
<span class="line"><span style="color:#e1e4e8;">        config.headers = config.headers || {}</span></span>
<span class="line"><span style="color:#e1e4e8;">        config.headers.Authorization = token;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return config</span></span>
<span class="line"><span style="color:#e1e4e8;">}, err =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return Promise.reject(err)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">instance.interceptors.response.use(result =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return result</span></span>
<span class="line"><span style="color:#e1e4e8;">}, err =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return Promise.reject(err)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default instance</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#24292e;">import Cookies from &#39;js-cookie&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const instance = axios.create({</span></span>
<span class="line"><span style="color:#24292e;">    // baseURL: &#39;http://120.24.64.5:8088/mall-admin&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    baseURL: &#39;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    timeout: 10000</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 拦截器</span></span>
<span class="line"><span style="color:#24292e;">instance.interceptors.request.use(config =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    // 设置cookie</span></span>
<span class="line"><span style="color:#24292e;">    let token = Cookies.get(&#39;token&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    if (token){</span></span>
<span class="line"><span style="color:#24292e;">        config.headers = config.headers || {}</span></span>
<span class="line"><span style="color:#24292e;">        config.headers.Authorization = token;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return config</span></span>
<span class="line"><span style="color:#24292e;">}, err =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    return Promise.reject(err)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">instance.interceptors.response.use(result =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    return result</span></span>
<span class="line"><span style="color:#24292e;">}, err =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    return Promise.reject(err)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default instance</span></span></code></pre></div><p>再定义其他文件写api，如api.ts</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import request from &quot;./request&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 登录</span></span>
<span class="line"><span style="color:#e1e4e8;">export const userLoginApi = (data: any) =&gt; request.post(&quot;/user/login&quot;, data);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 获取用户菜单</span></span>
<span class="line"><span style="color:#e1e4e8;">export const getUserInfoApi = () =&gt; request.get(&#39;/user/menu&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import request from &quot;./request&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 登录</span></span>
<span class="line"><span style="color:#24292e;">export const userLoginApi = (data: any) =&gt; request.post(&quot;/user/login&quot;, data);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 获取用户菜单</span></span>
<span class="line"><span style="color:#24292e;">export const getUserInfoApi = () =&gt; request.get(&#39;/user/menu&#39;);</span></span></code></pre></div><p>其他页面使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { getUserList } from &#39;../../request/api&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// axios默认是异步的，还可以加async和await变成同步</span></span>
<span class="line"><span style="color:#e1e4e8;">getUserList().then((res: any) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (res.data.code == 200) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        tableData.value = res.data.data</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(res.data.message);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { getUserList } from &#39;../../request/api&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// axios默认是异步的，还可以加async和await变成同步</span></span>
<span class="line"><span style="color:#24292e;">getUserList().then((res: any) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    if (res.data.code == 200) {</span></span>
<span class="line"><span style="color:#24292e;">        tableData.value = res.data.data</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(res.data.message);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h2 id="router使用" tabindex="-1">router使用 <a class="header-anchor" href="#router使用" aria-label="Permalink to &quot;router使用&quot;">​</a></h2><p>前端页面</p><p>app.vue</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 一级路由页面都放这里</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;router-view&gt;&lt;/router-view&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 一级路由页面都放这里</span></span>
<span class="line"><span style="color:#24292e;">&lt;router-view&gt;&lt;/router-view&gt;</span></span></code></pre></div><p>index.vue</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;header&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;Menu&gt;&lt;/Menu&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div class=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	// 二级路由页面都放这里</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div class=&quot;header&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;Menu&gt;&lt;/Menu&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;div class=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	// 二级路由页面都放这里</span></span>
<span class="line"><span style="color:#24292e;">	&lt;router-view&gt;&lt;/router-view&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span></code></pre></div><p>定义路由 index.ts （这里代码不全正确，模板仅供参考）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { createRouter, createWebHistory, RouteRecordRaw } from &quot;vue-router&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">import Vue from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// import appStore from &quot;../store/index&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">import Cookies from &quot;js-cookie&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">import { userLoginApi, getUserInfoApi } from &quot;../request/api&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// const { getMenu, setMenu } = appStore.menuStore;</span></span>
<span class="line"><span style="color:#e1e4e8;">import { useMenuStoreSetup } from &quot;../store/menuStore&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">import menu from &quot;../mock/data/menu&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 静态路由配置</span></span>
<span class="line"><span style="color:#e1e4e8;">const routes: RouteRecordRaw[] = [</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">    path: &quot;/login&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &quot;login&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    component: () =&gt; import(&quot;../views/login/login.vue&quot;),</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  {</span></span>
<span class="line"><span style="color:#e1e4e8;">    path: &quot;/&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    redirect: &quot;/index&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &quot;home&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    component: () =&gt; import(&quot;../views/home/home.vue&quot;),</span></span>
<span class="line"><span style="color:#e1e4e8;">    children: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        path: &quot;/index&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        name: &quot;homepage&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        component: () =&gt; import(&quot;../views/home/default.vue&quot;),</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">];</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const router = createRouter({</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 路由模式：hash模式,带#号; histroy模式,不带#号</span></span>
<span class="line"><span style="color:#e1e4e8;">  history: createWebHistory(),</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 路由配置</span></span>
<span class="line"><span style="color:#e1e4e8;">  routes: routes,</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 前置导航守卫</span></span>
<span class="line"><span style="color:#e1e4e8;">router.beforeEach((to, from, next) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;to.path: &quot;, to.path);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  // 判断用户是否登录</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (Cookies.get(&quot;token&quot;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const { getMenu, setMenu } = useMenuStoreSetup();</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 获取用户的菜单权限</span></span>
<span class="line"><span style="color:#e1e4e8;">    const menuList: object = getMenu();</span></span>
<span class="line"><span style="color:#e1e4e8;">    const arr: Array&lt;any&gt; = Object.keys(menuList); // menuList的长度</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (!menuList || arr.length &lt;= 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&quot;setMenu&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">      setMenu().then(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 动态路由</span></span>
<span class="line"><span style="color:#e1e4e8;">        const menuObj: any = getMenu();</span></span>
<span class="line"><span style="color:#e1e4e8;">        let modules = i<wbr>mport.meta.glob(&quot;../views/**/*.vue&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (let key in menuObj) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          const iRoute: RouteRecordRaw = {</span></span>
<span class="line"><span style="color:#e1e4e8;">            path: menuObj[key].path,</span></span>
<span class="line"><span style="color:#e1e4e8;">            name: menuObj[key].name,</span></span>
<span class="line"><span style="color:#e1e4e8;">            component: () =&gt; import(&quot;../views/home/home.vue&quot;),</span></span>
<span class="line"><span style="color:#e1e4e8;">            children: [],</span></span>
<span class="line"><span style="color:#e1e4e8;">          };</span></span>
<span class="line"><span style="color:#e1e4e8;">          for (let j = 0; j &lt; menuObj[key].children?.length; j++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            iRoute.children?.push({</span></span>
<span class="line"><span style="color:#e1e4e8;">              path: menuObj[key].children[j].path,</span></span>
<span class="line"><span style="color:#e1e4e8;">              name: menuObj[key].children[j].name,</span></span>
<span class="line"><span style="color:#e1e4e8;">              component:</span></span>
<span class="line"><span style="color:#e1e4e8;">                modules[\`../views\${menuObj[key].children[j].path}.vue\`],</span></span>
<span class="line"><span style="color:#e1e4e8;">            });</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">          // 添加路由规则</span></span>
<span class="line"><span style="color:#e1e4e8;">          router.addRoute(iRoute);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        // 第一次不能直接next()，只能再来一次next()</span></span>
<span class="line"><span style="color:#e1e4e8;">        next(to.path);</span></span>
<span class="line"><span style="color:#e1e4e8;">      });</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">      next();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  } else if (to.path === &quot;/login&quot;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    next();</span></span>
<span class="line"><span style="color:#e1e4e8;">  } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">    next(&#39;/login&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  // end cookie</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">// end 前置导航守卫</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default router;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { createRouter, createWebHistory, RouteRecordRaw } from &quot;vue-router&quot;;</span></span>
<span class="line"><span style="color:#24292e;">import Vue from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292e;">// import appStore from &quot;../store/index&quot;;</span></span>
<span class="line"><span style="color:#24292e;">import Cookies from &quot;js-cookie&quot;;</span></span>
<span class="line"><span style="color:#24292e;">import { userLoginApi, getUserInfoApi } from &quot;../request/api&quot;;</span></span>
<span class="line"><span style="color:#24292e;">// const { getMenu, setMenu } = appStore.menuStore;</span></span>
<span class="line"><span style="color:#24292e;">import { useMenuStoreSetup } from &quot;../store/menuStore&quot;;</span></span>
<span class="line"><span style="color:#24292e;">import menu from &quot;../mock/data/menu&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 静态路由配置</span></span>
<span class="line"><span style="color:#24292e;">const routes: RouteRecordRaw[] = [</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">    path: &quot;/login&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &quot;login&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    component: () =&gt; import(&quot;../views/login/login.vue&quot;),</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  {</span></span>
<span class="line"><span style="color:#24292e;">    path: &quot;/&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    redirect: &quot;/index&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    name: &quot;home&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    component: () =&gt; import(&quot;../views/home/home.vue&quot;),</span></span>
<span class="line"><span style="color:#24292e;">    children: [</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        path: &quot;/index&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        name: &quot;homepage&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        component: () =&gt; import(&quot;../views/home/default.vue&quot;),</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">];</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const router = createRouter({</span></span>
<span class="line"><span style="color:#24292e;">  // 路由模式：hash模式,带#号; histroy模式,不带#号</span></span>
<span class="line"><span style="color:#24292e;">  history: createWebHistory(),</span></span>
<span class="line"><span style="color:#24292e;">  // 路由配置</span></span>
<span class="line"><span style="color:#24292e;">  routes: routes,</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 前置导航守卫</span></span>
<span class="line"><span style="color:#24292e;">router.beforeEach((to, from, next) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;to.path: &quot;, to.path);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 判断用户是否登录</span></span>
<span class="line"><span style="color:#24292e;">  if (Cookies.get(&quot;token&quot;)) {</span></span>
<span class="line"><span style="color:#24292e;">    const { getMenu, setMenu } = useMenuStoreSetup();</span></span>
<span class="line"><span style="color:#24292e;">    // 获取用户的菜单权限</span></span>
<span class="line"><span style="color:#24292e;">    const menuList: object = getMenu();</span></span>
<span class="line"><span style="color:#24292e;">    const arr: Array&lt;any&gt; = Object.keys(menuList); // menuList的长度</span></span>
<span class="line"><span style="color:#24292e;">    if (!menuList || arr.length &lt;= 0) {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&quot;setMenu&quot;);</span></span>
<span class="line"><span style="color:#24292e;">      setMenu().then(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        // 动态路由</span></span>
<span class="line"><span style="color:#24292e;">        const menuObj: any = getMenu();</span></span>
<span class="line"><span style="color:#24292e;">        let modules = i<wbr>mport.meta.glob(&quot;../views/**/*.vue&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        for (let key in menuObj) {</span></span>
<span class="line"><span style="color:#24292e;">          const iRoute: RouteRecordRaw = {</span></span>
<span class="line"><span style="color:#24292e;">            path: menuObj[key].path,</span></span>
<span class="line"><span style="color:#24292e;">            name: menuObj[key].name,</span></span>
<span class="line"><span style="color:#24292e;">            component: () =&gt; import(&quot;../views/home/home.vue&quot;),</span></span>
<span class="line"><span style="color:#24292e;">            children: [],</span></span>
<span class="line"><span style="color:#24292e;">          };</span></span>
<span class="line"><span style="color:#24292e;">          for (let j = 0; j &lt; menuObj[key].children?.length; j++) {</span></span>
<span class="line"><span style="color:#24292e;">            iRoute.children?.push({</span></span>
<span class="line"><span style="color:#24292e;">              path: menuObj[key].children[j].path,</span></span>
<span class="line"><span style="color:#24292e;">              name: menuObj[key].children[j].name,</span></span>
<span class="line"><span style="color:#24292e;">              component:</span></span>
<span class="line"><span style="color:#24292e;">                modules[\`../views\${menuObj[key].children[j].path}.vue\`],</span></span>
<span class="line"><span style="color:#24292e;">            });</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">          // 添加路由规则</span></span>
<span class="line"><span style="color:#24292e;">          router.addRoute(iRoute);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        // 第一次不能直接next()，只能再来一次next()</span></span>
<span class="line"><span style="color:#24292e;">        next(to.path);</span></span>
<span class="line"><span style="color:#24292e;">      });</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">      next();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  } else if (to.path === &quot;/login&quot;) {</span></span>
<span class="line"><span style="color:#24292e;">    next();</span></span>
<span class="line"><span style="color:#24292e;">  } else {</span></span>
<span class="line"><span style="color:#24292e;">    next(&#39;/login&#39;);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  // end cookie</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">// end 前置导航守卫</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default router;</span></span></code></pre></div><p>在main.ts中注册下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// router: 在./router中定义具体内容</span></span>
<span class="line"><span style="color:#e1e4e8;">import router from &#39;./router&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">app.use(router)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// router: 在./router中定义具体内容</span></span>
<span class="line"><span style="color:#24292e;">import router from &#39;./router&#39;</span></span>
<span class="line"><span style="color:#24292e;">app.use(router)</span></span></code></pre></div><p>其他页面使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { useRouter } from &#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">let router = useRouter()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 登录方法 -----------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">const loginFn = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    ruleFormRef.value.validate().then(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(&#39;校验通过&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        userLoginApi({</span></span>
<span class="line"><span style="color:#e1e4e8;">            &#39;username&#39;: ruleForm.value.username,</span></span>
<span class="line"><span style="color:#e1e4e8;">            &#39;password&#39;: ruleForm.value.password,</span></span>
<span class="line"><span style="color:#e1e4e8;">        }).then((res: any) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (res.data.code == 200) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                Cookies.set(&#39;token&#39;, res.data.data, { expires: 7 })</span></span>
<span class="line"><span style="color:#e1e4e8;">                router.push(&#39;/&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">            } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">                console.log(res.data.message);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        })</span></span>
<span class="line"><span style="color:#e1e4e8;">    }).catch(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(&#39;校验不通过&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { useRouter } from &#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#24292e;">let router = useRouter()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 登录方法 -----------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">const loginFn = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    ruleFormRef.value.validate().then(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(&#39;校验通过&#39;);</span></span>
<span class="line"><span style="color:#24292e;">        userLoginApi({</span></span>
<span class="line"><span style="color:#24292e;">            &#39;username&#39;: ruleForm.value.username,</span></span>
<span class="line"><span style="color:#24292e;">            &#39;password&#39;: ruleForm.value.password,</span></span>
<span class="line"><span style="color:#24292e;">        }).then((res: any) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">            if (res.data.code == 200) {</span></span>
<span class="line"><span style="color:#24292e;">                Cookies.set(&#39;token&#39;, res.data.data, { expires: 7 })</span></span>
<span class="line"><span style="color:#24292e;">                router.push(&#39;/&#39;)</span></span>
<span class="line"><span style="color:#24292e;">            } else {</span></span>
<span class="line"><span style="color:#24292e;">                console.log(res.data.message);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        })</span></span>
<span class="line"><span style="color:#24292e;">    }).catch(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(&#39;校验不通过&#39;);</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,45),o=[l];function t(c,r,i,y,u,d){return n(),e("div",null,o)}const m=s(p,[["render",t]]);export{h as __pageData,m as default};
