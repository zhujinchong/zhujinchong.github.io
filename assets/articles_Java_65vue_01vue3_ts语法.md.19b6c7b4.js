import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const h=JSON.parse('{"title":"搭建环境","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/65vue/01vue3+ts语法.md","filePath":"articles/Java/65vue/01vue3+ts语法.md","lastUpdated":1698165159000}'),l={name:"articles/Java/65vue/01vue3+ts语法.md"},p=e(`<h1 id="搭建环境" tabindex="-1">搭建环境 <a class="header-anchor" href="#搭建环境" aria-label="Permalink to &quot;搭建环境&quot;">​</a></h1><h2 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h2><ol><li><p>安装npm</p></li><li><p>安装vite和项目模板</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm init vite@latest</span></span>
<span class="line"><span style="color:#e1e4e8;">选择vue</span></span>
<span class="line"><span style="color:#e1e4e8;">选择typescript</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm init vite@latest</span></span>
<span class="line"><span style="color:#24292e;">选择vue</span></span>
<span class="line"><span style="color:#24292e;">选择typescript</span></span></code></pre></div></li><li><p>用IDE打开项目，打开终端，初始化包</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install</span></span>
<span class="line"><span style="color:#e1e4e8;">npm install less less-loader</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install</span></span>
<span class="line"><span style="color:#24292e;">npm install less less-loader</span></span></code></pre></div></li><li><p>启动。打开package.json，里面有各环境下的启动命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 启动（相当于npm run dev）</span></span>
<span class="line"><span style="color:#e1e4e8;">vite</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 启动（相当于npm run dev）</span></span>
<span class="line"><span style="color:#24292e;">vite</span></span></code></pre></div></li></ol><h2 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public 放静态资源，但不会被vite所编译</span></span>
<span class="line"><span style="color:#e1e4e8;">src</span></span>
<span class="line"><span style="color:#e1e4e8;">	assets		放静态资源</span></span>
<span class="line"><span style="color:#e1e4e8;">	components 	自定义公共组件</span></span>
<span class="line"><span style="color:#e1e4e8;">	App.vue 	vue全局入口文件</span></span>
<span class="line"><span style="color:#e1e4e8;">	main.ts 	全局配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">	style.css 	可以删除</span></span>
<span class="line"><span style="color:#e1e4e8;">	vite-env.d.ts 声明文件扩充：选了ts,ts不认识vue后缀，此文件定义了文件扩充</span></span>
<span class="line"><span style="color:#e1e4e8;">index.html 项目首页，vue的App.vue就挂在这里</span></span>
<span class="line"><span style="color:#e1e4e8;">package.json 依赖包版本，以及打包、运行命令</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public 放静态资源，但不会被vite所编译</span></span>
<span class="line"><span style="color:#24292e;">src</span></span>
<span class="line"><span style="color:#24292e;">	assets		放静态资源</span></span>
<span class="line"><span style="color:#24292e;">	components 	自定义公共组件</span></span>
<span class="line"><span style="color:#24292e;">	App.vue 	vue全局入口文件</span></span>
<span class="line"><span style="color:#24292e;">	main.ts 	全局配置文件</span></span>
<span class="line"><span style="color:#24292e;">	style.css 	可以删除</span></span>
<span class="line"><span style="color:#24292e;">	vite-env.d.ts 声明文件扩充：选了ts,ts不认识vue后缀，此文件定义了文件扩充</span></span>
<span class="line"><span style="color:#24292e;">index.html 项目首页，vue的App.vue就挂在这里</span></span>
<span class="line"><span style="color:#24292e;">package.json 依赖包版本，以及打包、运行命令</span></span></code></pre></div><h2 id="单文件结构" tabindex="-1">单文件结构 <a class="header-anchor" href="#单文件结构" aria-label="Permalink to &quot;单文件结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">// 可以有多个，但是setup属性的只能有一个</span></span>
<span class="line"><span style="color:#e1e4e8;">// setup lang=&quot;ts&quot; 是vue的语法糖，方便开发者直接将代码写在这里面，而不是先写</span></span>
<span class="line"><span style="color:#e1e4e8;">// export default {}</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">// 只能有一个</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">// 可以有多个</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">// 可以有多个，但是setup属性的只能有一个</span></span>
<span class="line"><span style="color:#24292e;">// setup lang=&quot;ts&quot; 是vue的语法糖，方便开发者直接将代码写在这里面，而不是先写</span></span>
<span class="line"><span style="color:#24292e;">// export default {}</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">// 只能有一个</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#24292e;">// 可以有多个</span></span>
<span class="line"><span style="color:#24292e;">&lt;/style&gt;</span></span></code></pre></div><h1 id="vue" tabindex="-1">vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;vue&quot;">​</a></h1><h2 id="回顾vue语法" tabindex="-1">回顾vue语法 <a class="header-anchor" href="#回顾vue语法" aria-label="Permalink to &quot;回顾vue语法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;button @click=&quot;btnClick&quot;  :style=&quot;myStyle&quot;&gt;button&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;input v-model=&quot;a&quot; type=&quot;text&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div&gt;{{ a }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div :key=&quot;index&quot; v-for=&quot;(item,index) in arr&quot;&gt;{{ item }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">import {ref} from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// v-on:click 或者 @click 绑定事件</span></span>
<span class="line"><span style="color:#e1e4e8;">const btnClick = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;点击事件&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// v-bind:style 绑定属性</span></span>
<span class="line"><span style="color:#e1e4e8;">const myStyle = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  color: &#39;red&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// v-model用于双向绑定表单内容</span></span>
<span class="line"><span style="color:#e1e4e8;">// 用ref reactive才能双向绑定数据</span></span>
<span class="line"><span style="color:#e1e4e8;">const a = ref(&#39;请输入内容&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">const arr: string[] = [&#39;haha&#39;, &#39;hehe&#39;, &#39;lala&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;button @click=&quot;btnClick&quot;  :style=&quot;myStyle&quot;&gt;button&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;input v-model=&quot;a&quot; type=&quot;text&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div&gt;{{ a }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div :key=&quot;index&quot; v-for=&quot;(item,index) in arr&quot;&gt;{{ item }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">import {ref} from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292e;">// v-on:click 或者 @click 绑定事件</span></span>
<span class="line"><span style="color:#24292e;">const btnClick = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;点击事件&quot;);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// v-bind:style 绑定属性</span></span>
<span class="line"><span style="color:#24292e;">const myStyle = {</span></span>
<span class="line"><span style="color:#24292e;">  color: &#39;red&#39;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// v-model用于双向绑定表单内容</span></span>
<span class="line"><span style="color:#24292e;">// 用ref reactive才能双向绑定数据</span></span>
<span class="line"><span style="color:#24292e;">const a = ref(&#39;请输入内容&#39;);</span></span>
<span class="line"><span style="color:#24292e;">const arr: string[] = [&#39;haha&#39;, &#39;hehe&#39;, &#39;lala&#39;]</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><h2 id="虚拟dom" tabindex="-1">虚拟DOM <a class="header-anchor" href="#虚拟dom" aria-label="Permalink to &quot;虚拟DOM&quot;">​</a></h2><p>问题：用JS直接操作DOM比较耗时，因为DOM属性很多。</p><p>解决：用JS的计算性能换取操作DOM的性能。通过JS来生成一个AST节点树，这个节点树就是虚拟DOM。</p><h2 id="diff算法" tabindex="-1">diff算法 <a class="header-anchor" href="#diff算法" aria-label="Permalink to &quot;diff算法&quot;">​</a></h2><p>v-for列表时，如果新增/删除了其中一个，加key可以更快的操作。此时vue作者用了一个diff算法。感兴趣自己去搜。</p><h2 id="ref-reactive" tabindex="-1">ref,reactive <a class="header-anchor" href="#ref-reactive" aria-label="Permalink to &quot;ref,reactive&quot;">​</a></h2><ul><li>ref支持所有类型；reactive只支持object类型，不支持string等类型</li><li>ref和reactive都支持泛型定义，也支持自动类型推断</li><li>ref取值赋值都需要加.value， reactive不需要</li><li>reactive是Proxy对象，类似于指针，直接赋值可能会破坏响应式，解决：数组用push方法；把数组当作对象的一个属性。</li></ul><p>ref代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import {ref} from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">type People = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: string</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">const one = ref&lt;People&gt;({name: &#39;cat&#39;})</span></span>
<span class="line"><span style="color:#e1e4e8;">const two = ref(&#39;hello&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">const changeB = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  one.value.name = &#39;xxxx&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import {ref} from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292e;">type People = {</span></span>
<span class="line"><span style="color:#24292e;">  name: string</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">const one = ref&lt;People&gt;({name: &#39;cat&#39;})</span></span>
<span class="line"><span style="color:#24292e;">const two = ref(&#39;hello&#39;)</span></span>
<span class="line"><span style="color:#24292e;">const changeB = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  one.value.name = &#39;xxxx&#39;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="toref-torefs-toraw" tabindex="-1">toRef,toRefs,toRaw <a class="header-anchor" href="#toref-torefs-toraw" aria-label="Permalink to &quot;toRef,toRefs,toRaw&quot;">​</a></h2><ul><li>toRef只能修改响应式对象，非响应式不能。常用于提取响应式对象中的一部分。</li><li>toRef只能解构一个属性，toRefs能解构多个属性。</li><li>toRaw将响应式变成非响应式</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import {ref,toRef} from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">const one = ref({name: &#39;cat&#39;, age: 18})</span></span>
<span class="line"><span style="color:#e1e4e8;">const age = toRef(one.value, &#39;age&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">const changeB = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  age.value = 20</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import {ref,toRef} from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292e;">const one = ref({name: &#39;cat&#39;, age: 18})</span></span>
<span class="line"><span style="color:#24292e;">const age = toRef(one.value, &#39;age&#39;);</span></span>
<span class="line"><span style="color:#24292e;">const changeB = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  age.value = 20</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="watch侦听器" tabindex="-1">watch侦听器 <a class="header-anchor" href="#watch侦听器" aria-label="Permalink to &quot;watch侦听器&quot;">​</a></h2><p>侦听ref或reactive中的值的变化</p><ul><li>可以侦听多个（用中括号括住）</li><li>如果侦听ref对象，需要打开深度侦听</li><li>如果侦听reactive对象，默认已开启深度侦听</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let message = ref({name:&#39;tom&#39;,age:18})</span></span>
<span class="line"><span style="color:#e1e4e8;">// 打开深度侦听</span></span>
<span class="line"><span style="color:#e1e4e8;">watch(message, (newVal, oldVal) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">	console.log(newVal)</span></span>
<span class="line"><span style="color:#e1e4e8;">},{deep: true})</span></span>
<span class="line"><span style="color:#e1e4e8;">// 侦听对象中的单个属性，需要用个函数返回属性</span></span>
<span class="line"><span style="color:#e1e4e8;">watch(()=&gt;message.value.name, (newVal, oldVal)=&gt;{</span></span>
<span class="line"><span style="color:#e1e4e8;">	console.log(newVal)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let message = ref({name:&#39;tom&#39;,age:18})</span></span>
<span class="line"><span style="color:#24292e;">// 打开深度侦听</span></span>
<span class="line"><span style="color:#24292e;">watch(message, (newVal, oldVal) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	console.log(newVal)</span></span>
<span class="line"><span style="color:#24292e;">},{deep: true})</span></span>
<span class="line"><span style="color:#24292e;">// 侦听对象中的单个属性，需要用个函数返回属性</span></span>
<span class="line"><span style="color:#24292e;">watch(()=&gt;message.value.name, (newVal, oldVal)=&gt;{</span></span>
<span class="line"><span style="color:#24292e;">	console.log(newVal)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h2 id="watcheffect高级侦听器" tabindex="-1">watchEffect高级侦听器 <a class="header-anchor" href="#watcheffect高级侦听器" aria-label="Permalink to &quot;watchEffect高级侦听器&quot;">​</a></h2><p>watchEffect函数中用到的变量都会被侦听，没有用到的不会</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">watchEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;message1&quot;, one)</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;message2&quot;, age)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">watchEffect(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;message1&quot;, one)</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;message2&quot;, age)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h2 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h2><p>这里声明周期是指每个组件的声明周期，包括一个DIV元素，所以每一个DIV元素改变时都会触发。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// beforeCreate created setup语法糖模式是没有这两个生命周期的 setup去替代了</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(&#39;setup&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">// 组件创建</span></span>
<span class="line"><span style="color:#e1e4e8;">onBeforeMount(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;1&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;2&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">// 组件更新</span></span>
<span class="line"><span style="color:#e1e4e8;">onBeforeUpdate(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;3&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">onUpdated(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;4&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">// 组件销毁</span></span>
<span class="line"><span style="color:#e1e4e8;">onBeforeUnmount(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;5&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">onUnmounted(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;6&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// beforeCreate created setup语法糖模式是没有这两个生命周期的 setup去替代了</span></span>
<span class="line"><span style="color:#24292e;">console.log(&#39;setup&#39;)</span></span>
<span class="line"><span style="color:#24292e;">// 组件创建</span></span>
<span class="line"><span style="color:#24292e;">onBeforeMount(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;1&quot;)</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;2&quot;)</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">// 组件更新</span></span>
<span class="line"><span style="color:#24292e;">onBeforeUpdate(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;3&quot;)</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">onUpdated(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;4&quot;)</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">// 组件销毁</span></span>
<span class="line"><span style="color:#24292e;">onBeforeUnmount(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;5&quot;)</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">onUnmounted(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;6&quot;)</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><h2 id="父子组件传参" tabindex="-1">父子组件传参 <a class="header-anchor" href="#父子组件传参" aria-label="Permalink to &quot;父子组件传参&quot;">​</a></h2><p>父传子</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">子组件定义</span></span>
<span class="line"><span style="color:#e1e4e8;">    const props = defineProps({</span></span>
<span class="line"><span style="color:#e1e4e8;">      title: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        type: String,</span></span>
<span class="line"><span style="color:#e1e4e8;">        default: &quot;默认值&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">父组件</span></span>
<span class="line"><span style="color:#e1e4e8;">	// 使用子组件</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;Menu :title=&quot;title&quot;&gt;&lt;/Menu&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	// 值</span></span>
<span class="line"><span style="color:#e1e4e8;">	const title = &#39;菜单1&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">子组件定义</span></span>
<span class="line"><span style="color:#24292e;">    const props = defineProps({</span></span>
<span class="line"><span style="color:#24292e;">      title: {</span></span>
<span class="line"><span style="color:#24292e;">        type: String,</span></span>
<span class="line"><span style="color:#24292e;">        default: &quot;默认值&quot;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">父组件</span></span>
<span class="line"><span style="color:#24292e;">	// 使用子组件</span></span>
<span class="line"><span style="color:#24292e;">	&lt;Menu :title=&quot;title&quot;&gt;&lt;/Menu&gt;</span></span>
<span class="line"><span style="color:#24292e;">	// 值</span></span>
<span class="line"><span style="color:#24292e;">	const title = &#39;菜单1&#39;</span></span></code></pre></div><p>子传父</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">子组件定义</span></span>
<span class="line"><span style="color:#e1e4e8;">    const emit = defineEmits([&#39;on-click&#39;]);</span></span>
<span class="line"><span style="color:#e1e4e8;">    const send = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      emit(&#39;on-click&#39;, &#39;消息xxxx&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">父组件</span></span>
<span class="line"><span style="color:#e1e4e8;">	// 使用子组件</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;Menu @on-click=&quot;getName&quot;&gt;&lt;/Menu&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	// 定义方法获取消息</span></span>
<span class="line"><span style="color:#e1e4e8;">	const getName = (name:string) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  		console.log(name)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">子组件定义</span></span>
<span class="line"><span style="color:#24292e;">    const emit = defineEmits([&#39;on-click&#39;]);</span></span>
<span class="line"><span style="color:#24292e;">    const send = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">      emit(&#39;on-click&#39;, &#39;消息xxxx&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">父组件</span></span>
<span class="line"><span style="color:#24292e;">	// 使用子组件</span></span>
<span class="line"><span style="color:#24292e;">	&lt;Menu @on-click=&quot;getName&quot;&gt;&lt;/Menu&gt;</span></span>
<span class="line"><span style="color:#24292e;">	// 定义方法获取消息</span></span>
<span class="line"><span style="color:#24292e;">	const getName = (name:string) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  		console.log(name)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div><p>子传父2，子组件暴露属性或方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">子组件定义</span></span>
<span class="line"><span style="color:#e1e4e8;">	const msg = &quot;hello father&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    defineExpose({</span></span>
<span class="line"><span style="color:#e1e4e8;">      msg</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">父组件</span></span>
<span class="line"><span style="color:#e1e4e8;">	// 使用子组件</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;Menu ref=&quot;I&quot;&gt;&lt;/Menu&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	// 使用子组件暴露的方法</span></span>
<span class="line"><span style="color:#e1e4e8;">	const I = ref()</span></span>
<span class="line"><span style="color:#e1e4e8;">    onMounted(()=&gt;{</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(I.value?.msg)</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">子组件定义</span></span>
<span class="line"><span style="color:#24292e;">	const msg = &quot;hello father&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    defineExpose({</span></span>
<span class="line"><span style="color:#24292e;">      msg</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">父组件</span></span>
<span class="line"><span style="color:#24292e;">	// 使用子组件</span></span>
<span class="line"><span style="color:#24292e;">	&lt;Menu ref=&quot;I&quot;&gt;&lt;/Menu&gt;</span></span>
<span class="line"><span style="color:#24292e;">	// 使用子组件暴露的方法</span></span>
<span class="line"><span style="color:#24292e;">	const I = ref()</span></span>
<span class="line"><span style="color:#24292e;">    onMounted(()=&gt;{</span></span>
<span class="line"><span style="color:#24292e;">      console.log(I.value?.msg)</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span></code></pre></div><h2 id="局部组件、全局组件、动态组件" tabindex="-1">局部组件、全局组件、动态组件 <a class="header-anchor" href="#局部组件、全局组件、动态组件" aria-label="Permalink to &quot;局部组件、全局组件、动态组件&quot;">​</a></h2><p>局部组件需要这样引入和使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import Content from &#39;./views/layout/Content.vue&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import Content from &#39;./views/layout/Content.vue&#39;</span></span></code></pre></div><p>全局组件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 1. 在main.ts里定义</span></span>
<span class="line"><span style="color:#e1e4e8;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import ContentVue from &#39;./views/layout/Content.vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">export const app = createApp(App)</span></span>
<span class="line"><span style="color:#e1e4e8;">app.component(&#39;Content&#39;, ContentVue)</span></span>
<span class="line"><span style="color:#e1e4e8;">app.mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">// 2. 其他组件中就可以直接使用</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 1. 在main.ts里定义</span></span>
<span class="line"><span style="color:#24292e;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#24292e;">import ContentVue from &#39;./views/layout/Content.vue&#39;</span></span>
<span class="line"><span style="color:#24292e;">export const app = createApp(App)</span></span>
<span class="line"><span style="color:#24292e;">app.component(&#39;Content&#39;, ContentVue)</span></span>
<span class="line"><span style="color:#24292e;">app.mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#24292e;">// 2. 其他组件中就可以直接使用</span></span></code></pre></div><p>动态组件：几个组件公用一个挂载点（Tab页切换）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 通过component</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;button @click=&quot;dynamic&quot;&gt;Vue Tab Button&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;component :is=&quot;comId&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// shallowRef浏览器console不会有警告</span></span>
<span class="line"><span style="color:#e1e4e8;">const comId = shallowRef(AVue)</span></span>
<span class="line"><span style="color:#e1e4e8;">const dynamic = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (comId.value == BVue) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    comId.value = markRaw(AVue)</span></span>
<span class="line"><span style="color:#e1e4e8;">  } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">    comId.value = markRaw(BVue)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 通过component</span></span>
<span class="line"><span style="color:#24292e;">&lt;button @click=&quot;dynamic&quot;&gt;Vue Tab Button&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;component :is=&quot;comId&quot;&gt;&lt;/component&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// shallowRef浏览器console不会有警告</span></span>
<span class="line"><span style="color:#24292e;">const comId = shallowRef(AVue)</span></span>
<span class="line"><span style="color:#24292e;">const dynamic = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  if (comId.value == BVue) {</span></span>
<span class="line"><span style="color:#24292e;">    comId.value = markRaw(AVue)</span></span>
<span class="line"><span style="color:#24292e;">  } else {</span></span>
<span class="line"><span style="color:#24292e;">    comId.value = markRaw(BVue)</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><p>匿名插槽</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 子组建</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    Test</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 父组件 </span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;TestVue&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;template v-slot&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div&gt;匿名插槽插入内容&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/TestVue&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 子组建</span></span>
<span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    Test</span></span>
<span class="line"><span style="color:#24292e;">    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 父组件 </span></span>
<span class="line"><span style="color:#24292e;">&lt;TestVue&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;template v-slot&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div&gt;匿名插槽插入内容&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/TestVue&gt;</span></span></code></pre></div><p>具名插槽</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 子组建</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;slot name=&quot;top&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    Test</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;slot name=&quot;bottom&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 父组件， v-solt:可以简写成#</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;TestVue&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;template v-slot:top&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;div&gt;匿名插槽插入内容&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;template v-slot:bottom&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        &lt;div&gt;哈哈哈&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/TestVue&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 子组建</span></span>
<span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;slot name=&quot;top&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#24292e;">    Test</span></span>
<span class="line"><span style="color:#24292e;">    &lt;slot name=&quot;bottom&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 父组件， v-solt:可以简写成#</span></span>
<span class="line"><span style="color:#24292e;">&lt;TestVue&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;template v-slot:top&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;div&gt;匿名插槽插入内容&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;template v-slot:bottom&gt;</span></span>
<span class="line"><span style="color:#24292e;">        &lt;div&gt;哈哈哈&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/TestVue&gt;</span></span></code></pre></div><h2 id="teleport传递组件" tabindex="-1">Teleport传递组件 <a class="header-anchor" href="#teleport传递组件" aria-label="Permalink to &quot;Teleport传递组件&quot;">​</a></h2><p>Teleport是Vue3内置方法，可以直接用。</p><p>传递组件：如果父级用了position:relative，那么子组件位置可能改变，为了使子组件位置在主窗口位置不变，使用Teleport。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// to表示传送到的元素（id class 元素等都可以）</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;Teleport to=&quot;body&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;TestVue&gt;&lt;TestVue&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/Teleport&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// to表示传送到的元素（id class 元素等都可以）</span></span>
<span class="line"><span style="color:#24292e;">&lt;Teleport to=&quot;body&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;TestVue&gt;&lt;TestVue&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/Teleport&gt;</span></span></code></pre></div><h2 id="keep-alive缓存组件" tabindex="-1">keep-alive缓存组件 <a class="header-anchor" href="#keep-alive缓存组件" aria-label="Permalink to &quot;keep-alive缓存组件&quot;">​</a></h2><p>如果有两个组件，只展示其中一个。另一个可以缓存起来。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;keep-alive&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;AVue v-if=&quot;flag&quot;&gt;&lt;/AVue&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;BVue v-else&gt;&lt;/BVue&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/keep-alive&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// keep-alive还有两个声明周期函数，keep-alive每次切换组件时用。</span></span>
<span class="line"><span style="color:#e1e4e8;">onActiveed()</span></span>
<span class="line"><span style="color:#e1e4e8;">onDeactiveed()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;keep-alive&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;AVue v-if=&quot;flag&quot;&gt;&lt;/AVue&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;BVue v-else&gt;&lt;/BVue&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/keep-alive&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// keep-alive还有两个声明周期函数，keep-alive每次切换组件时用。</span></span>
<span class="line"><span style="color:#24292e;">onActiveed()</span></span>
<span class="line"><span style="color:#24292e;">onDeactiveed()</span></span></code></pre></div><h2 id="transition动画组件" tabindex="-1">transition动画组件 <a class="header-anchor" href="#transition动画组件" aria-label="Permalink to &quot;transition动画组件&quot;">​</a></h2><p>transition：vue提供的实现动画效果的组件。</p><p>animate.css: 封装好的动画效果的css文件。</p><p>先安装animate.css</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install animate.css</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install animate.css</span></span></code></pre></div><p>使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;button @click=&quot;flag = !flag&quot;&gt;showContent&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;transition :duration=&quot;500&quot; enter-active-class=&quot;animate__animated animate__fadeIn&quot; leave-active-class=&quot;animate__animated animate__fadeOut&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div v-if=&quot;flag&quot; class=&quot;content&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/transition&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">import &#39;animate.css&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import {ref} from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">const flag = ref(true)</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;button @click=&quot;flag = !flag&quot;&gt;showContent&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;transition :duration=&quot;500&quot; enter-active-class=&quot;animate__animated animate__fadeIn&quot; leave-active-class=&quot;animate__animated animate__fadeOut&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;div v-if=&quot;flag&quot; class=&quot;content&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/transition&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">import &#39;animate.css&#39;</span></span>
<span class="line"><span style="color:#24292e;">import {ref} from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292e;">const flag = ref(true)</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><p>注意：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">* animate.css如果是4以上版本，class都需要加animate__animated</span></span>
<span class="line"><span style="color:#e1e4e8;">* transition也有生命周期，这里不讲</span></span>
<span class="line"><span style="color:#e1e4e8;">* transition还可以设置初始动画效果，即apper apper-from-class apper-active-class apper-to-class</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">* animate.css如果是4以上版本，class都需要加animate__animated</span></span>
<span class="line"><span style="color:#24292e;">* transition也有生命周期，这里不讲</span></span>
<span class="line"><span style="color:#24292e;">* transition还可以设置初始动画效果，即apper apper-from-class apper-active-class apper-to-class</span></span></code></pre></div><h2 id="依赖注入provide-inject" tabindex="-1">依赖注入Provide / Inject <a class="header-anchor" href="#依赖注入provide-inject" aria-label="Permalink to &quot;依赖注入Provide / Inject&quot;">​</a></h2><p>父向子传递值可以用props，但是如果是深层嵌套子组件，一直用props比较麻烦。</p><p>Provide可以在父组件定义好数据或方法，任何后代都可以使用Inject来接受。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 父组件</span></span>
<span class="line"><span style="color:#e1e4e8;">const test = ref(&#39;haha&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">// provide(&#39;msg&#39;, test)</span></span>
<span class="line"><span style="color:#e1e4e8;">provide(&#39;msg&#39;, readonly(test))</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 子组件（子组件修改，父组件也修改）</span></span>
<span class="line"><span style="color:#e1e4e8;">const msg = inject&lt;Ref&lt;string&gt;&gt;(&#39;msg&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 父组件</span></span>
<span class="line"><span style="color:#24292e;">const test = ref(&#39;haha&#39;)</span></span>
<span class="line"><span style="color:#24292e;">// provide(&#39;msg&#39;, test)</span></span>
<span class="line"><span style="color:#24292e;">provide(&#39;msg&#39;, readonly(test))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 子组件（子组件修改，父组件也修改）</span></span>
<span class="line"><span style="color:#24292e;">const msg = inject&lt;Ref&lt;string&gt;&gt;(&#39;msg&#39;)</span></span></code></pre></div><h2 id="mitt" tabindex="-1">Mitt <a class="header-anchor" href="#mitt" aria-label="Permalink to &quot;Mitt&quot;">​</a></h2><p>vue2兄弟组件传参，使用的是Bus，相当于写一个发布订阅模式。</p><p>vue3中的Bus就是Mitt库。</p><p>安装依赖包</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm install mitt</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm install mitt</span></span></code></pre></div><p>创建Bus.ts</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import mitt from &#39;mitt&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">export default mitt();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import mitt from &#39;mitt&#39;;</span></span>
<span class="line"><span style="color:#24292e;">export default mitt();</span></span></code></pre></div><p>使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 组件A</span></span>
<span class="line"><span style="color:#e1e4e8;">import mitt from &#39;../../Bus&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">const emitter = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  mitt.emit(&#39;helloEvent&#39;, {msg: &#39;hello&#39;})</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 组件B</span></span>
<span class="line"><span style="color:#e1e4e8;">import mitt from &#39;../../Bus&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">mitt.on(&#39;helloEvent&#39;, (p) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&#39;接受参数：&#39;, p)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 组件A</span></span>
<span class="line"><span style="color:#24292e;">import mitt from &#39;../../Bus&#39;</span></span>
<span class="line"><span style="color:#24292e;">const emitter = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  mitt.emit(&#39;helloEvent&#39;, {msg: &#39;hello&#39;})</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 组件B</span></span>
<span class="line"><span style="color:#24292e;">import mitt from &#39;../../Bus&#39;</span></span>
<span class="line"><span style="color:#24292e;">mitt.on(&#39;helloEvent&#39;, (p) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&#39;接受参数：&#39;, p)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h2 id="自定义hook" tabindex="-1">自定义Hook <a class="header-anchor" href="#自定义hook" aria-label="Permalink to &quot;自定义Hook&quot;">​</a></h2><p>hook主要用来处理复用代码逻辑的封装，在vue2中是Mixins。（Mixins有一些问题）</p><p>hook官方封装了很多方法，可以直接使用。本节主要讲解自定义hook</p><p>新建hooks目录，新建ts文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const addFun = (num1:number, num2:number) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(num1 + num2)</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">export default addFun</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const addFun = (num1:number, num2:number) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(num1 + num2)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">export default addFun</span></span></code></pre></div><p>在组件中用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import addFun from &#39;../../hooks/index&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">addFun(1, 2)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import addFun from &#39;../../hooks/index&#39;</span></span>
<span class="line"><span style="color:#24292e;">addFun(1, 2)</span></span></code></pre></div><h2 id="全局函数、全局变量" tabindex="-1">全局函数、全局变量 <a class="header-anchor" href="#全局函数、全局变量" aria-label="Permalink to &quot;全局函数、全局变量&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 在main.ts中直接定义 （方法和变量一样）</span></span>
<span class="line"><span style="color:#e1e4e8;">app.config.globalProperties.$hello = &#39;Hello World&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 在组件中使用</span></span>
<span class="line"><span style="color:#e1e4e8;">{{ $hello }}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 在main.ts中直接定义 （方法和变量一样）</span></span>
<span class="line"><span style="color:#24292e;">app.config.globalProperties.$hello = &#39;Hello World&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 在组件中使用</span></span>
<span class="line"><span style="color:#24292e;">{{ $hello }}</span></span></code></pre></div><h2 id="ui库" tabindex="-1">UI库 <a class="header-anchor" href="#ui库" aria-label="Permalink to &quot;UI库&quot;">​</a></h2><p>web端：</p><p>ElementPlus：setup语法糖模式</p><p>Ant Design：setup函数模式</p><p>IView: options api模式</p><p>移动端：</p><p>Vant: setup函数模式</p><h2 id="样式穿透" tabindex="-1">样式穿透 <a class="header-anchor" href="#样式穿透" aria-label="Permalink to &quot;样式穿透&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;el-input class=&quot;test&quot;&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">.test {</span></span>
<span class="line"><span style="color:#e1e4e8;"> background: red;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">这样写样式不生效，因为scoped把样式放在了代码最后。应该用deep</span></span>
<span class="line"><span style="color:#e1e4e8;">.test{</span></span>
<span class="line"><span style="color:#e1e4e8;">    :deep(input){</span></span>
<span class="line"><span style="color:#e1e4e8;">     background:red;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;el-input class=&quot;test&quot;&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span style="color:#24292e;">.test {</span></span>
<span class="line"><span style="color:#24292e;"> background: red;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">这样写样式不生效，因为scoped把样式放在了代码最后。应该用deep</span></span>
<span class="line"><span style="color:#24292e;">.test{</span></span>
<span class="line"><span style="color:#24292e;">    :deep(input){</span></span>
<span class="line"><span style="color:#24292e;">     background:red;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,98),t=[p];function o(c,i,r,d,y,u){return n(),a("div",null,t)}const v=s(l,[["render",o]]);export{h as __pageData,v as default};
