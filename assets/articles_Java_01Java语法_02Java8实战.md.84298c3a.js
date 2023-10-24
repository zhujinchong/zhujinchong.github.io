import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.2516552c.js";const m=JSON.parse('{"title":"函数式接口","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/01Java语法/02Java8实战.md","filePath":"articles/Java/01Java语法/02Java8实战.md","lastUpdated":1698149129000}'),l={name:"articles/Java/01Java语法/02Java8实战.md"},p=e(`<h1 id="函数式接口" tabindex="-1">函数式接口 <a class="header-anchor" href="#函数式接口" aria-label="Permalink to &quot;函数式接口&quot;">​</a></h1><h2 id="行为参数化" tabindex="-1">行为参数化 <a class="header-anchor" href="#行为参数化" aria-label="Permalink to &quot;行为参数化&quot;">​</a></h2><p>函数式编程可以简化代码，提交代码编程效率，是一种思想；Lambda表达式用来简化代码，是一种语法。</p><p>下面讲解函数式编程、Lambda表示式、行为参数化概念。</p><p>现有两个需求：</p><ul><li>筛选出重要大于150的苹果；</li><li>筛选出颜色为green的苹果</li></ul><p>解决方法：</p><ul><li>以下代码使用了策略设计模式，筛选策略是：重量、颜色；</li><li>将策略封装起来，用的时候选择其中一个。</li><li>我们将筛选策略以参数的形式传递给filterApples方法，多种行为/策略，一个参数，这就叫行为参数化。</li></ul><blockquote><p>行为参数化实现方法有：参数化方法、参数化类、匿名类、Lambda表达式。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public interface ApplePredicate{ </span></span>
<span class="line"><span style="color:#e1e4e8;"> boolean test (Apple apple); </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">public class AppleHeavyWeightPredicate implements ApplePredicate{ </span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean test(Apple apple){ </span></span>
<span class="line"><span style="color:#e1e4e8;">     return apple.getWeight() &gt; 150; </span></span>
<span class="line"><span style="color:#e1e4e8;">    } </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">public class AppleGreenColorPredicate implements ApplePredicate{</span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean test(Apple apple){ </span></span>
<span class="line"><span style="color:#e1e4e8;">     return &quot;green&quot;.equals(apple.getColor()); </span></span>
<span class="line"><span style="color:#e1e4e8;">    } </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">public static List&lt;Apple&gt; filterApples(List&lt;Apple&gt; inventory, ApplePredicate p){ </span></span>
<span class="line"><span style="color:#e1e4e8;">    List&lt;Apple&gt; result = new ArrayList&lt;&gt;(); </span></span>
<span class="line"><span style="color:#e1e4e8;">    for(Apple apple: inventory){ </span></span>
<span class="line"><span style="color:#e1e4e8;">        if(p.test(apple)){ </span></span>
<span class="line"><span style="color:#e1e4e8;">         result.add(apple); </span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    } </span></span>
<span class="line"><span style="color:#e1e4e8;">    return result; </span></span>
<span class="line"><span style="color:#e1e4e8;">} </span></span>
<span class="line"><span style="color:#e1e4e8;">// 调用</span></span>
<span class="line"><span style="color:#e1e4e8;">// inventory是一个List，存的是苹果的数据</span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;Apple&gt; redApples = filterApples(inventory, new AppleHeavyWeightPredicate());</span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;Apple&gt; redApples = filterApples(inventory, new AppleGreenColorPredicate());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public interface ApplePredicate{ </span></span>
<span class="line"><span style="color:#24292e;"> boolean test (Apple apple); </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">public class AppleHeavyWeightPredicate implements ApplePredicate{ </span></span>
<span class="line"><span style="color:#24292e;">    public boolean test(Apple apple){ </span></span>
<span class="line"><span style="color:#24292e;">     return apple.getWeight() &gt; 150; </span></span>
<span class="line"><span style="color:#24292e;">    } </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">public class AppleGreenColorPredicate implements ApplePredicate{</span></span>
<span class="line"><span style="color:#24292e;">    public boolean test(Apple apple){ </span></span>
<span class="line"><span style="color:#24292e;">     return &quot;green&quot;.equals(apple.getColor()); </span></span>
<span class="line"><span style="color:#24292e;">    } </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">public static List&lt;Apple&gt; filterApples(List&lt;Apple&gt; inventory, ApplePredicate p){ </span></span>
<span class="line"><span style="color:#24292e;">    List&lt;Apple&gt; result = new ArrayList&lt;&gt;(); </span></span>
<span class="line"><span style="color:#24292e;">    for(Apple apple: inventory){ </span></span>
<span class="line"><span style="color:#24292e;">        if(p.test(apple)){ </span></span>
<span class="line"><span style="color:#24292e;">         result.add(apple); </span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    } </span></span>
<span class="line"><span style="color:#24292e;">    return result; </span></span>
<span class="line"><span style="color:#24292e;">} </span></span>
<span class="line"><span style="color:#24292e;">// 调用</span></span>
<span class="line"><span style="color:#24292e;">// inventory是一个List，存的是苹果的数据</span></span>
<span class="line"><span style="color:#24292e;">List&lt;Apple&gt; redApples = filterApples(inventory, new AppleHeavyWeightPredicate());</span></span>
<span class="line"><span style="color:#24292e;">List&lt;Apple&gt; redApples = filterApples(inventory, new AppleGreenColorPredicate());</span></span></code></pre></div><p>优化代码1：这些策略可以以匿名类的形式创建</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 调用</span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;Apple&gt; redApples = filterApples(inventory, new ApplePredicate() { </span></span>
<span class="line"><span style="color:#e1e4e8;">    public boolean test(Apple a){ </span></span>
<span class="line"><span style="color:#e1e4e8;">     return &quot;red&quot;.equals(a.getColor()); </span></span>
<span class="line"><span style="color:#e1e4e8;">    } </span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 调用</span></span>
<span class="line"><span style="color:#24292e;">List&lt;Apple&gt; redApples = filterApples(inventory, new ApplePredicate() { </span></span>
<span class="line"><span style="color:#24292e;">    public boolean test(Apple a){ </span></span>
<span class="line"><span style="color:#24292e;">     return &quot;red&quot;.equals(a.getColor()); </span></span>
<span class="line"><span style="color:#24292e;">    } </span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><p>优化代码2：还可以用Lambda表达式</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 调用</span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;Apple&gt; redApples = filterApples(inventory, (Apple a)-&gt;&quot;red&quot;.equals(a.getColor()));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 调用</span></span>
<span class="line"><span style="color:#24292e;">List&lt;Apple&gt; redApples = filterApples(inventory, (Apple a)-&gt;&quot;red&quot;.equals(a.getColor()));</span></span></code></pre></div><p>优化代码3：将参数用泛型表示</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public interface Predicate&lt;T&gt;{</span></span>
<span class="line"><span style="color:#e1e4e8;"> boolean test(T t);</span></span>
<span class="line"><span style="color:#e1e4e8;">} </span></span>
<span class="line"><span style="color:#e1e4e8;">public static &lt;T&gt; List&lt;T&gt; filter(List&lt;T&gt; list, Predicate&lt;T&gt; p){</span></span>
<span class="line"><span style="color:#e1e4e8;">    List&lt;T&gt; result = new ArrayList&lt;&gt;(); </span></span>
<span class="line"><span style="color:#e1e4e8;">    for(T e: list){ </span></span>
<span class="line"><span style="color:#e1e4e8;">        if(p.test(e)){ </span></span>
<span class="line"><span style="color:#e1e4e8;">         result.add(e);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    return result; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;Apple&gt; redApples = filter(inventory, (Apple a) -&gt; &quot;red&quot;.equals(a.getColor()));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public interface Predicate&lt;T&gt;{</span></span>
<span class="line"><span style="color:#24292e;"> boolean test(T t);</span></span>
<span class="line"><span style="color:#24292e;">} </span></span>
<span class="line"><span style="color:#24292e;">public static &lt;T&gt; List&lt;T&gt; filter(List&lt;T&gt; list, Predicate&lt;T&gt; p){</span></span>
<span class="line"><span style="color:#24292e;">    List&lt;T&gt; result = new ArrayList&lt;&gt;(); </span></span>
<span class="line"><span style="color:#24292e;">    for(T e: list){ </span></span>
<span class="line"><span style="color:#24292e;">        if(p.test(e)){ </span></span>
<span class="line"><span style="color:#24292e;">         result.add(e);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    return result; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">List&lt;Apple&gt; redApples = filter(inventory, (Apple a) -&gt; &quot;red&quot;.equals(a.getColor()));</span></span></code></pre></div><p>行为参数化例子1：排序</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public interface Comparator&lt;T&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;"> public int compare(T o1, T o2);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">// 匿名类写法</span></span>
<span class="line"><span style="color:#e1e4e8;">inventory.sort(new Comparator&lt;Apple&gt;() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public int compare(Apple a1, Apple a2){</span></span>
<span class="line"><span style="color:#e1e4e8;">     return a1.getWeight().compareTo(a2.getWeight());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">// Lambda表示式写法</span></span>
<span class="line"><span style="color:#e1e4e8;">inventory.sort((Apple a1, Apple a2) -&gt; a1.getWeight().compareTo(a2.getWeight()));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public interface Comparator&lt;T&gt; {</span></span>
<span class="line"><span style="color:#24292e;"> public int compare(T o1, T o2);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">// 匿名类写法</span></span>
<span class="line"><span style="color:#24292e;">inventory.sort(new Comparator&lt;Apple&gt;() {</span></span>
<span class="line"><span style="color:#24292e;">    public int compare(Apple a1, Apple a2){</span></span>
<span class="line"><span style="color:#24292e;">     return a1.getWeight().compareTo(a2.getWeight());</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">// Lambda表示式写法</span></span>
<span class="line"><span style="color:#24292e;">inventory.sort((Apple a1, Apple a2) -&gt; a1.getWeight().compareTo(a2.getWeight()));</span></span></code></pre></div><p>行为参数化例子2：线程</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public interface Runnable{</span></span>
<span class="line"><span style="color:#e1e4e8;"> public void run();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">Thread t = new Thread(new Runnable() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void run(){</span></span>
<span class="line"><span style="color:#e1e4e8;">     System.out.println(&quot;Hello world&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">Thread t = new Thread(() -&gt; System.out.println(&quot;Hello world&quot;));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public interface Runnable{</span></span>
<span class="line"><span style="color:#24292e;"> public void run();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">Thread t = new Thread(new Runnable() {</span></span>
<span class="line"><span style="color:#24292e;">    public void run(){</span></span>
<span class="line"><span style="color:#24292e;">     System.out.println(&quot;Hello world&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">Thread t = new Thread(() -&gt; System.out.println(&quot;Hello world&quot;));</span></span></code></pre></div><h2 id="函数式接口-1" tabindex="-1">函数式接口 <a class="header-anchor" href="#函数式接口-1" aria-label="Permalink to &quot;函数式接口&quot;">​</a></h2><p>函数式接口：只有一个抽象方法的接口。</p><p>上面的Predicate/Comparator/Runnable都是函数式接口，如何设计自己需要的函数式接口？</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1. 定义函数描述：如(int, int)-&gt;int</span></span>
<span class="line"><span style="color:#e1e4e8;">2. 定义函数式接口：</span></span>
<span class="line"><span style="color:#e1e4e8;">    public interface IntBinaryOperator(){</span></span>
<span class="line"><span style="color:#e1e4e8;">        int applyAsInt(int a, int b);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">3. 执行行为</span></span>
<span class="line"><span style="color:#e1e4e8;"> public static int binaryOp(int a, int b, IntBinaryOperator op){</span></span>
<span class="line"><span style="color:#e1e4e8;">  return op.applyAsInt(a, b);</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;">4. 传递Lambda</span></span>
<span class="line"><span style="color:#e1e4e8;"> binaryOp(a, b, (a, b)-&gt;{return a-b;})</span></span>
<span class="line"><span style="color:#e1e4e8;"> binaryOp(a, b, (a, b)-&gt;{return a+b;})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. 定义函数描述：如(int, int)-&gt;int</span></span>
<span class="line"><span style="color:#24292e;">2. 定义函数式接口：</span></span>
<span class="line"><span style="color:#24292e;">    public interface IntBinaryOperator(){</span></span>
<span class="line"><span style="color:#24292e;">        int applyAsInt(int a, int b);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">3. 执行行为</span></span>
<span class="line"><span style="color:#24292e;"> public static int binaryOp(int a, int b, IntBinaryOperator op){</span></span>
<span class="line"><span style="color:#24292e;">  return op.applyAsInt(a, b);</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;">4. 传递Lambda</span></span>
<span class="line"><span style="color:#24292e;"> binaryOp(a, b, (a, b)-&gt;{return a-b;})</span></span>
<span class="line"><span style="color:#24292e;"> binaryOp(a, b, (a, b)-&gt;{return a+b;})</span></span></code></pre></div><h2 id="方法引用-语法糖" tabindex="-1">方法引用（语法糖） <a class="header-anchor" href="#方法引用-语法糖" aria-label="Permalink to &quot;方法引用（语法糖）&quot;">​</a></h2><p>方法引用案例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">之前：lambda表达式</span></span>
<span class="line"><span style="color:#e1e4e8;">inventory.sort((Apple a1, Apple a2) -&gt; a1.getWeight().compareTo(a2.getWeight()));</span></span>
<span class="line"><span style="color:#e1e4e8;">现在：</span></span>
<span class="line"><span style="color:#e1e4e8;">inventory.sort(comparing(Apple::getWeight));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">之前：lambda表达式</span></span>
<span class="line"><span style="color:#24292e;">inventory.sort((Apple a1, Apple a2) -&gt; a1.getWeight().compareTo(a2.getWeight()));</span></span>
<span class="line"><span style="color:#24292e;">现在：</span></span>
<span class="line"><span style="color:#24292e;">inventory.sort(comparing(Apple::getWeight));</span></span></code></pre></div><p>方法引用是Lambda表示式的快捷写法，也就是语法糖，通常Lambda表示更容易理解。方法引用一般有三种：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Lambda: (args) -&gt; ClassName.staticMethod(args)</span></span>
<span class="line"><span style="color:#e1e4e8;">方法引用: ClassName::staticMethod</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Lambda: (objectName, args) -&gt; objectName.instanceMethod(args)</span></span>
<span class="line"><span style="color:#e1e4e8;">方法引用: ClassName::instanceMethod</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Lambda: (args) -&gt; objectName.instanceMethod(args)</span></span>
<span class="line"><span style="color:#e1e4e8;">方法引用: objectName::instanceMethod</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Lambda: (args) -&gt; ClassName.staticMethod(args)</span></span>
<span class="line"><span style="color:#24292e;">方法引用: ClassName::staticMethod</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Lambda: (objectName, args) -&gt; objectName.instanceMethod(args)</span></span>
<span class="line"><span style="color:#24292e;">方法引用: ClassName::instanceMethod</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Lambda: (args) -&gt; objectName.instanceMethod(args)</span></span>
<span class="line"><span style="color:#24292e;">方法引用: objectName::instanceMethod</span></span></code></pre></div><p>方法引用扩展：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Comparator具有一个叫作comparing的静态方法，它可以接受一个Function来提取Comparable键值，并生成一个Comparator对象：</span></span>
<span class="line"><span style="color:#e1e4e8;"> Comparator&lt;Apple&gt; c = Comparator.comparing((Apple a) -&gt; a.getWeight());</span></span>
<span class="line"><span style="color:#e1e4e8;">所以，还可以这样用：</span></span>
<span class="line"><span style="color:#e1e4e8;"> inventory.sort(Comparator.comparing((a) -&gt; a.getWeight())); </span></span>
<span class="line"><span style="color:#e1e4e8;"> inventory.sort(Comparator.comparing(Apple::getWeight));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Comparator具有一个叫作comparing的静态方法，它可以接受一个Function来提取Comparable键值，并生成一个Comparator对象：</span></span>
<span class="line"><span style="color:#24292e;"> Comparator&lt;Apple&gt; c = Comparator.comparing((Apple a) -&gt; a.getWeight());</span></span>
<span class="line"><span style="color:#24292e;">所以，还可以这样用：</span></span>
<span class="line"><span style="color:#24292e;"> inventory.sort(Comparator.comparing((a) -&gt; a.getWeight())); </span></span>
<span class="line"><span style="color:#24292e;"> inventory.sort(Comparator.comparing(Apple::getWeight));</span></span></code></pre></div><h1 id="stream流" tabindex="-1">stream流 <a class="header-anchor" href="#stream流" aria-label="Permalink to &quot;stream流&quot;">​</a></h1><h2 id="使用流" tabindex="-1">使用流 <a class="header-anchor" href="#使用流" aria-label="Permalink to &quot;使用流&quot;">​</a></h2><p>例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">List&lt;String&gt; names = Arrays.asList(&quot;Tom&quot;, &quot;John&quot;, &quot;Cat&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;String&gt; collect = names.stream()</span></span>
<span class="line"><span style="color:#e1e4e8;">        .filter(name -&gt; name.length() &lt; 5)</span></span>
<span class="line"><span style="color:#e1e4e8;">        .limit(3)</span></span>
<span class="line"><span style="color:#e1e4e8;">        .collect(Collectors.toList());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">List&lt;String&gt; names = Arrays.asList(&quot;Tom&quot;, &quot;John&quot;, &quot;Cat&quot;);</span></span>
<span class="line"><span style="color:#24292e;">List&lt;String&gt; collect = names.stream()</span></span>
<span class="line"><span style="color:#24292e;">        .filter(name -&gt; name.length() &lt; 5)</span></span>
<span class="line"><span style="color:#24292e;">        .limit(3)</span></span>
<span class="line"><span style="color:#24292e;">        .collect(Collectors.toList());</span></span></code></pre></div><p>操作分为：中间操作和终端操作；</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">中间操作  描述</span></span>
<span class="line"><span style="color:#e1e4e8;">filter     T -&gt; boolean</span></span>
<span class="line"><span style="color:#e1e4e8;">map   T -&gt; R</span></span>
<span class="line"><span style="color:#e1e4e8;">sorted  (T, T) -&gt; int</span></span>
<span class="line"><span style="color:#e1e4e8;">limit  限制个数</span></span>
<span class="line"><span style="color:#e1e4e8;">skip  跳过，和limit互补</span></span>
<span class="line"><span style="color:#e1e4e8;">distinct 去重</span></span>
<span class="line"><span style="color:#e1e4e8;">flatMap  扁平化（下面详解）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">终端操作</span></span>
<span class="line"><span style="color:#e1e4e8;">forEach  遍历并消费流，返回void</span></span>
<span class="line"><span style="color:#e1e4e8;">count   返回流中元素的个数，返回Long</span></span>
<span class="line"><span style="color:#e1e4e8;">collect  把流归约成一个集合，比如 List、Map 甚至是 Integer。（详见下一节）</span></span>
<span class="line"><span style="color:#e1e4e8;">anyMatch 流中是否有一个元素能匹配给定的谓词（流中有一个匹配就可以），返回boolean</span></span>
<span class="line"><span style="color:#e1e4e8;">allMatch 流中元素是否都能匹配给定的谓词 （都匹配）, 返回boolean</span></span>
<span class="line"><span style="color:#e1e4e8;">noneMatch 确保流中没有任何元素与给定的谓词匹配 （都不匹配）, 返回boolean</span></span>
<span class="line"><span style="color:#e1e4e8;">findAny findFirst 查找，用Optional接收（下面详解）</span></span>
<span class="line"><span style="color:#e1e4e8;">reduce  归约（把一个流中的元素组合起来，下面详解）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">中间操作  描述</span></span>
<span class="line"><span style="color:#24292e;">filter     T -&gt; boolean</span></span>
<span class="line"><span style="color:#24292e;">map   T -&gt; R</span></span>
<span class="line"><span style="color:#24292e;">sorted  (T, T) -&gt; int</span></span>
<span class="line"><span style="color:#24292e;">limit  限制个数</span></span>
<span class="line"><span style="color:#24292e;">skip  跳过，和limit互补</span></span>
<span class="line"><span style="color:#24292e;">distinct 去重</span></span>
<span class="line"><span style="color:#24292e;">flatMap  扁平化（下面详解）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">终端操作</span></span>
<span class="line"><span style="color:#24292e;">forEach  遍历并消费流，返回void</span></span>
<span class="line"><span style="color:#24292e;">count   返回流中元素的个数，返回Long</span></span>
<span class="line"><span style="color:#24292e;">collect  把流归约成一个集合，比如 List、Map 甚至是 Integer。（详见下一节）</span></span>
<span class="line"><span style="color:#24292e;">anyMatch 流中是否有一个元素能匹配给定的谓词（流中有一个匹配就可以），返回boolean</span></span>
<span class="line"><span style="color:#24292e;">allMatch 流中元素是否都能匹配给定的谓词 （都匹配）, 返回boolean</span></span>
<span class="line"><span style="color:#24292e;">noneMatch 确保流中没有任何元素与给定的谓词匹配 （都不匹配）, 返回boolean</span></span>
<span class="line"><span style="color:#24292e;">findAny findFirst 查找，用Optional接收（下面详解）</span></span>
<span class="line"><span style="color:#24292e;">reduce  归约（把一个流中的元素组合起来，下面详解）</span></span></code></pre></div><p>流的扁平化</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 将单词转成字符，并去重</span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;String&gt; c = words.stream()</span></span>
<span class="line"><span style="color:#e1e4e8;">  .map(word -&gt; word.split(&quot;&quot;)) # 单词分割成字符</span></span>
<span class="line"><span style="color:#e1e4e8;">     .flatMap(Arrays::stream)  # 将多个流合并成一个流（扁平化）</span></span>
<span class="line"><span style="color:#e1e4e8;">     .distinct()</span></span>
<span class="line"><span style="color:#e1e4e8;">     .collect(Collectors.toList());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 将单词转成字符，并去重</span></span>
<span class="line"><span style="color:#24292e;">List&lt;String&gt; c = words.stream()</span></span>
<span class="line"><span style="color:#24292e;">  .map(word -&gt; word.split(&quot;&quot;)) # 单词分割成字符</span></span>
<span class="line"><span style="color:#24292e;">     .flatMap(Arrays::stream)  # 将多个流合并成一个流（扁平化）</span></span>
<span class="line"><span style="color:#24292e;">     .distinct()</span></span>
<span class="line"><span style="color:#24292e;">     .collect(Collectors.toList());</span></span></code></pre></div><p>Optional和Find查找元素</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Optional&lt;Integer&gt; optional = someNumbers.stream().filter(x -&gt; x % 3 == 0).findFirst();</span></span>
<span class="line"><span style="color:#e1e4e8;">optional代表一个值存在或不存在，这样就不用返回众所周知容易出问题的null了，它还有许多方法，如：</span></span>
<span class="line"><span style="color:#e1e4e8;"> isPresent()</span></span>
<span class="line"><span style="color:#e1e4e8;"> ifPresent(Consumer&lt;T&gt; block)会在值存在的时候执行给定的代码块</span></span>
<span class="line"><span style="color:#e1e4e8;"> orElse(T other) 值存在时返回值，否则返回一个默认值</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">someNumbers.stream()</span></span>
<span class="line"><span style="color:#e1e4e8;"> .filter(x -&gt; x % 3 == 0)</span></span>
<span class="line"><span style="color:#e1e4e8;"> .findAny()</span></span>
<span class="line"><span style="color:#e1e4e8;"> .ifPresent(x -&gt; System.out.println(x)); // 如果存在就输出</span></span>
<span class="line"><span style="color:#e1e4e8;">String s = names.stream()</span></span>
<span class="line"><span style="color:#e1e4e8;">    .filter(name -&gt; name.length() &lt; 5)</span></span>
<span class="line"><span style="color:#e1e4e8;">    .findFirst().orElse(&quot;&quot;); // 如果存在就返回值，否则就返回&quot;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Optional&lt;Integer&gt; optional = someNumbers.stream().filter(x -&gt; x % 3 == 0).findFirst();</span></span>
<span class="line"><span style="color:#24292e;">optional代表一个值存在或不存在，这样就不用返回众所周知容易出问题的null了，它还有许多方法，如：</span></span>
<span class="line"><span style="color:#24292e;"> isPresent()</span></span>
<span class="line"><span style="color:#24292e;"> ifPresent(Consumer&lt;T&gt; block)会在值存在的时候执行给定的代码块</span></span>
<span class="line"><span style="color:#24292e;"> orElse(T other) 值存在时返回值，否则返回一个默认值</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">someNumbers.stream()</span></span>
<span class="line"><span style="color:#24292e;"> .filter(x -&gt; x % 3 == 0)</span></span>
<span class="line"><span style="color:#24292e;"> .findAny()</span></span>
<span class="line"><span style="color:#24292e;"> .ifPresent(x -&gt; System.out.println(x)); // 如果存在就输出</span></span>
<span class="line"><span style="color:#24292e;">String s = names.stream()</span></span>
<span class="line"><span style="color:#24292e;">    .filter(name -&gt; name.length() &lt; 5)</span></span>
<span class="line"><span style="color:#24292e;">    .findFirst().orElse(&quot;&quot;); // 如果存在就返回值，否则就返回&quot;&quot;</span></span></code></pre></div><p>reduce归约</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 1. 求和</span></span>
<span class="line"><span style="color:#e1e4e8;">// 如果reduce有参数，则返回结果</span></span>
<span class="line"><span style="color:#e1e4e8;">int sum = numbers.stream().reduce(0, (a, b) -&gt; a + b); </span></span>
<span class="line"><span style="color:#e1e4e8;">// 如果reduce没有参数，返回Optional(因为stream可能为空)</span></span>
<span class="line"><span style="color:#e1e4e8;">Optional&lt;Integer&gt; sum = numbers.stream().reduce((a, b) -&gt; (a + b)); </span></span>
<span class="line"><span style="color:#e1e4e8;">// 2. 最小值</span></span>
<span class="line"><span style="color:#e1e4e8;">Optional&lt;Integer&gt; min = numbers.stream().reduce(Integer::min);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 1. 求和</span></span>
<span class="line"><span style="color:#24292e;">// 如果reduce有参数，则返回结果</span></span>
<span class="line"><span style="color:#24292e;">int sum = numbers.stream().reduce(0, (a, b) -&gt; a + b); </span></span>
<span class="line"><span style="color:#24292e;">// 如果reduce没有参数，返回Optional(因为stream可能为空)</span></span>
<span class="line"><span style="color:#24292e;">Optional&lt;Integer&gt; sum = numbers.stream().reduce((a, b) -&gt; (a + b)); </span></span>
<span class="line"><span style="color:#24292e;">// 2. 最小值</span></span>
<span class="line"><span style="color:#24292e;">Optional&lt;Integer&gt; min = numbers.stream().reduce(Integer::min);</span></span></code></pre></div><p>数值流</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 每个Integer都必须拆箱成原始类型再进行求和</span></span>
<span class="line"><span style="color:#e1e4e8;">int calories = menu.stream().map(Dish::getCalories).sum(); </span></span>
<span class="line"><span style="color:#e1e4e8;">// IntStream、DoubleStream和LongStream，避免了装箱成本</span></span>
<span class="line"><span style="color:#e1e4e8;">1. 映射成数值流</span></span>
<span class="line"><span style="color:#e1e4e8;">int calories = mean.stream().mapToInt(Dish::getCalories).sum();</span></span>
<span class="line"><span style="color:#e1e4e8;">2. 转换回对象流</span></span>
<span class="line"><span style="color:#e1e4e8;">IntStream intStream = menu.stream().mapToInt(Dish::getCalories);</span></span>
<span class="line"><span style="color:#e1e4e8;">Stream&lt;Integer&gt; stream = intStream.boxed();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 数值范围：IntStream有静态方法range和rangeClosed生成范围内数值</span></span>
<span class="line"><span style="color:#e1e4e8;">// rangeClosed(x, y)包括两端数字， range()不包括后端数字</span></span>
<span class="line"><span style="color:#e1e4e8;">IntStream evenNumbers = IntStream.rangeClosed(1, 100).filter(n -&gt; n % 2 == 0);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 每个Integer都必须拆箱成原始类型再进行求和</span></span>
<span class="line"><span style="color:#24292e;">int calories = menu.stream().map(Dish::getCalories).sum(); </span></span>
<span class="line"><span style="color:#24292e;">// IntStream、DoubleStream和LongStream，避免了装箱成本</span></span>
<span class="line"><span style="color:#24292e;">1. 映射成数值流</span></span>
<span class="line"><span style="color:#24292e;">int calories = mean.stream().mapToInt(Dish::getCalories).sum();</span></span>
<span class="line"><span style="color:#24292e;">2. 转换回对象流</span></span>
<span class="line"><span style="color:#24292e;">IntStream intStream = menu.stream().mapToInt(Dish::getCalories);</span></span>
<span class="line"><span style="color:#24292e;">Stream&lt;Integer&gt; stream = intStream.boxed();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 数值范围：IntStream有静态方法range和rangeClosed生成范围内数值</span></span>
<span class="line"><span style="color:#24292e;">// rangeClosed(x, y)包括两端数字， range()不包括后端数字</span></span>
<span class="line"><span style="color:#24292e;">IntStream evenNumbers = IntStream.rangeClosed(1, 100).filter(n -&gt; n % 2 == 0);</span></span></code></pre></div><h2 id="构建流" tabindex="-1">构建流 <a class="header-anchor" href="#构建流" aria-label="Permalink to &quot;构建流&quot;">​</a></h2><p>由值创建</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Stream&lt;String&gt; stream = Stream.of(&quot;Java 8 &quot;, &quot;Lambdas &quot;, &quot;In &quot;, &quot;Action&quot;); </span></span>
<span class="line"><span style="color:#e1e4e8;">Stream&lt;String&gt; emptyStream = Stream.empty();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Stream&lt;String&gt; stream = Stream.of(&quot;Java 8 &quot;, &quot;Lambdas &quot;, &quot;In &quot;, &quot;Action&quot;); </span></span>
<span class="line"><span style="color:#24292e;">Stream&lt;String&gt; emptyStream = Stream.empty();</span></span></code></pre></div><p>由数组创建</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">int[] numbers = {2, 3, 5, 7, 11, 13}; </span></span>
<span class="line"><span style="color:#e1e4e8;">int sum = Arrays.stream(numbers).sum();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">int[] numbers = {2, 3, 5, 7, 11, 13}; </span></span>
<span class="line"><span style="color:#24292e;">int sum = Arrays.stream(numbers).sum();</span></span></code></pre></div><p>由文件生成流</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">long uniqueWords = 0; </span></span>
<span class="line"><span style="color:#e1e4e8;">try(Stream&lt;String&gt; lines = Files.lines(Paths.get(&quot;data.txt&quot;))){ </span></span>
<span class="line"><span style="color:#e1e4e8;"> uniqueWords = lines.map(line -&gt; line.split(&quot;&quot;))</span></span>
<span class="line"><span style="color:#e1e4e8;">      .flatMap(Arrays.stream())</span></span>
<span class="line"><span style="color:#e1e4e8;">       .distinct().count(); </span></span>
<span class="line"><span style="color:#e1e4e8;">} </span></span>
<span class="line"><span style="color:#e1e4e8;">catch(IOException e){ </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">long uniqueWords = 0; </span></span>
<span class="line"><span style="color:#24292e;">try(Stream&lt;String&gt; lines = Files.lines(Paths.get(&quot;data.txt&quot;))){ </span></span>
<span class="line"><span style="color:#24292e;"> uniqueWords = lines.map(line -&gt; line.split(&quot;&quot;))</span></span>
<span class="line"><span style="color:#24292e;">      .flatMap(Arrays.stream())</span></span>
<span class="line"><span style="color:#24292e;">       .distinct().count(); </span></span>
<span class="line"><span style="color:#24292e;">} </span></span>
<span class="line"><span style="color:#24292e;">catch(IOException e){ </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>由函数生成流：创建无限流 iterate和generate</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// Stream.iterate 迭代式</span></span>
<span class="line"><span style="color:#e1e4e8;">Stream.iterate(0, n -&gt; n + 2).limit(10).forEach(System.out::println); </span></span>
<span class="line"><span style="color:#e1e4e8;">// Stream.generate 生成</span></span>
<span class="line"><span style="color:#e1e4e8;">Stream.generate(Math::random).limit(5).forEach(System.out::println);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// Stream.iterate 迭代式</span></span>
<span class="line"><span style="color:#24292e;">Stream.iterate(0, n -&gt; n + 2).limit(10).forEach(System.out::println); </span></span>
<span class="line"><span style="color:#24292e;">// Stream.generate 生成</span></span>
<span class="line"><span style="color:#24292e;">Stream.generate(Math::random).limit(5).forEach(System.out::println);</span></span></code></pre></div><h2 id="collect和collectors" tabindex="-1">collect和Collectors <a class="header-anchor" href="#collect和collectors" aria-label="Permalink to &quot;collect和Collectors&quot;">​</a></h2><p>Collectors类提供了许多方法用于创建收集器，能进一步简化代码，主要提供了三种功能：</p><ul><li>将流元素归约和汇总为一个值</li><li>元素分组</li><li>元素分区（分成true和false两组）</li></ul><p>归约/汇总</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">//数量</span></span>
<span class="line"><span style="color:#e1e4e8;">long howManyDishes = menu.stream().collect(Collectors.counting()); </span></span>
<span class="line"><span style="color:#e1e4e8;">//热量和</span></span>
<span class="line"><span style="color:#e1e4e8;">int totalCalories = menu.stream().collect(Collectors.summingInt(Dish::getCalories)); </span></span>
<span class="line"><span style="color:#e1e4e8;">// 平均值</span></span>
<span class="line"><span style="color:#e1e4e8;">double avgCalories = menu.stream().collect(Collectors.averagingInt(Dish::getCalories)); </span></span>
<span class="line"><span style="color:#e1e4e8;">// 字符串拼接</span></span>
<span class="line"><span style="color:#e1e4e8;">String shortMenu = menu.stream().map(Dish::getName).collect(Collectors.joining(&quot;,&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">// List</span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;String&gt; names = mean.stream().map(Dish::getName).collect(Collectors.toList());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">//数量</span></span>
<span class="line"><span style="color:#24292e;">long howManyDishes = menu.stream().collect(Collectors.counting()); </span></span>
<span class="line"><span style="color:#24292e;">//热量和</span></span>
<span class="line"><span style="color:#24292e;">int totalCalories = menu.stream().collect(Collectors.summingInt(Dish::getCalories)); </span></span>
<span class="line"><span style="color:#24292e;">// 平均值</span></span>
<span class="line"><span style="color:#24292e;">double avgCalories = menu.stream().collect(Collectors.averagingInt(Dish::getCalories)); </span></span>
<span class="line"><span style="color:#24292e;">// 字符串拼接</span></span>
<span class="line"><span style="color:#24292e;">String shortMenu = menu.stream().map(Dish::getName).collect(Collectors.joining(&quot;,&quot;));</span></span>
<span class="line"><span style="color:#24292e;">// List</span></span>
<span class="line"><span style="color:#24292e;">List&lt;String&gt; names = mean.stream().map(Dish::getName).collect(Collectors.toList());</span></span></code></pre></div><p>分组</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 分组 (groupingBy还可以嵌套，变成多级分组)</span></span>
<span class="line"><span style="color:#e1e4e8;">Map&lt;Dish.Type, List&lt;Dish&gt;&gt; dishesByType = menu.stream().collect(Collectors.groupingBy(Dish::getType));</span></span>
<span class="line"><span style="color:#e1e4e8;">// 自定义分组</span></span>
<span class="line"><span style="color:#e1e4e8;">Map&lt;CaloricLevel, List&lt;Dish&gt;&gt; dishesByCaloricLevel = menu.stream().collect( </span></span>
<span class="line"><span style="color:#e1e4e8;"> groupingBy(dish -&gt; { </span></span>
<span class="line"><span style="color:#e1e4e8;">        if (dish.getCalories() &lt;= 400) return CaloricLevel.DIET; </span></span>
<span class="line"><span style="color:#e1e4e8;">       else if (dish.getCalories() &lt;= 700) return CaloricLevel.NORMAL; </span></span>
<span class="line"><span style="color:#e1e4e8;">       else return CaloricLevel.FAT;</span></span>
<span class="line"><span style="color:#e1e4e8;">}));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 分组 (groupingBy还可以嵌套，变成多级分组)</span></span>
<span class="line"><span style="color:#24292e;">Map&lt;Dish.Type, List&lt;Dish&gt;&gt; dishesByType = menu.stream().collect(Collectors.groupingBy(Dish::getType));</span></span>
<span class="line"><span style="color:#24292e;">// 自定义分组</span></span>
<span class="line"><span style="color:#24292e;">Map&lt;CaloricLevel, List&lt;Dish&gt;&gt; dishesByCaloricLevel = menu.stream().collect( </span></span>
<span class="line"><span style="color:#24292e;"> groupingBy(dish -&gt; { </span></span>
<span class="line"><span style="color:#24292e;">        if (dish.getCalories() &lt;= 400) return CaloricLevel.DIET; </span></span>
<span class="line"><span style="color:#24292e;">       else if (dish.getCalories() &lt;= 700) return CaloricLevel.NORMAL; </span></span>
<span class="line"><span style="color:#24292e;">       else return CaloricLevel.FAT;</span></span>
<span class="line"><span style="color:#24292e;">}));</span></span></code></pre></div><p>分区（分成true和false两组）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Map&lt;Boolean, List&lt;Dish&gt;&gt; partitionedMenu = menu.stream().collect(partitioningBy(Dish::isVegetarian));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Map&lt;Boolean, List&lt;Dish&gt;&gt; partitionedMenu = menu.stream().collect(partitioningBy(Dish::isVegetarian));</span></span></code></pre></div><h2 id="collector接口" tabindex="-1">Collector接口 <a class="header-anchor" href="#collector接口" aria-label="Permalink to &quot;Collector接口&quot;">​</a></h2><p>我们模仿<code>Collectors.toList()</code>自定义一个方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class ToListCollector&lt;T&gt; implements Collector&lt;T, List&lt;T&gt;, List&lt;T&gt;&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class ToListCollector&lt;T&gt; implements Collector&lt;T, List&lt;T&gt;, List&lt;T&gt;&gt;</span></span></code></pre></div><p>其中Collector接口定义如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// T是流中要收集的项目的泛型</span></span>
<span class="line"><span style="color:#e1e4e8;">// A是累加器的类型，累加器是在收集过程中用于累积部分结果的对象。</span></span>
<span class="line"><span style="color:#e1e4e8;">// R是收集操作得到的对象（通常但并不一定是集合）的类型。</span></span>
<span class="line"><span style="color:#e1e4e8;">public interface Collector&lt;T, A, R&gt; { </span></span>
<span class="line"><span style="color:#e1e4e8;">    Supplier&lt;A&gt; supplier(); </span></span>
<span class="line"><span style="color:#e1e4e8;">    BiConsumer&lt;A, T&gt; accumulator(); </span></span>
<span class="line"><span style="color:#e1e4e8;">    Function&lt;A, R&gt; finisher(); </span></span>
<span class="line"><span style="color:#e1e4e8;">    BinaryOperator&lt;A&gt; combiner(); </span></span>
<span class="line"><span style="color:#e1e4e8;">    Set&lt;Characteristics&gt; characteristics(); </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// T是流中要收集的项目的泛型</span></span>
<span class="line"><span style="color:#24292e;">// A是累加器的类型，累加器是在收集过程中用于累积部分结果的对象。</span></span>
<span class="line"><span style="color:#24292e;">// R是收集操作得到的对象（通常但并不一定是集合）的类型。</span></span>
<span class="line"><span style="color:#24292e;">public interface Collector&lt;T, A, R&gt; { </span></span>
<span class="line"><span style="color:#24292e;">    Supplier&lt;A&gt; supplier(); </span></span>
<span class="line"><span style="color:#24292e;">    BiConsumer&lt;A, T&gt; accumulator(); </span></span>
<span class="line"><span style="color:#24292e;">    Function&lt;A, R&gt; finisher(); </span></span>
<span class="line"><span style="color:#24292e;">    BinaryOperator&lt;A&gt; combiner(); </span></span>
<span class="line"><span style="color:#24292e;">    Set&lt;Characteristics&gt; characteristics(); </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>定义第一个函数：建立新的结果容器，supplier方法</p><blockquote><p>创建一个空的累加器实例，供数据收集过程使用。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public Supplier&lt;List&lt;T&gt;&gt; supplier() {</span></span>
<span class="line"><span style="color:#e1e4e8;"> return () -&gt; new ArrayList&lt;T&gt;(); </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public Supplier&lt;List&lt;T&gt;&gt; supplier() {</span></span>
<span class="line"><span style="color:#24292e;"> return () -&gt; new ArrayList&lt;T&gt;(); </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>定义第二个函数：将元素添加到结果容器，accumulator方法</p><blockquote><p>accumulator方法会返回执行归约操作的函数。当遍历到流中第n个元素时，这个函数执行时会有两个参数：保存归约结果的累加器（已收集了流中的前 n-1 个项目），还有第n个元素本身。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public BiConsumer&lt;List&lt;T&gt;, T&gt; accumulator() { </span></span>
<span class="line"><span style="color:#e1e4e8;"> return (list, item) -&gt; list.add(item); </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public BiConsumer&lt;List&lt;T&gt;, T&gt; accumulator() { </span></span>
<span class="line"><span style="color:#24292e;"> return (list, item) -&gt; list.add(item); </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>定义第三个函数： 对结果容器应用最终转换，finisher方法</p><blockquote><p>在遍历完流后，finisher方法必须返回在累积过程的最后要调用的一个函数，以便将累加器对象转换为整个集合操作的最终结果。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// ToListCollector累加器对象恰好符合预期的最终结果，因此无需进行转换。</span></span>
<span class="line"><span style="color:#e1e4e8;">public Function&lt;List&lt;T&gt;, List&lt;T&gt;&gt; finisher() { </span></span>
<span class="line"><span style="color:#e1e4e8;"> return Function.identity(); </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// ToListCollector累加器对象恰好符合预期的最终结果，因此无需进行转换。</span></span>
<span class="line"><span style="color:#24292e;">public Function&lt;List&lt;T&gt;, List&lt;T&gt;&gt; finisher() { </span></span>
<span class="line"><span style="color:#24292e;"> return Function.identity(); </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>定义第四个函数： 合并两个结果容器：combiner方法</p><blockquote><p>combiner方法会返回一个供归约操作使用的函数，它定义了对流的各个子部分进行并行处理时，各个子部分归约所得的累加器要如何合并。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public BinaryOperator&lt;List&lt;T&gt;&gt; combiner() { </span></span>
<span class="line"><span style="color:#e1e4e8;">    return (list1, list2) -&gt; { </span></span>
<span class="line"><span style="color:#e1e4e8;">    list1.addAll(list2); </span></span>
<span class="line"><span style="color:#e1e4e8;">    return list1; } </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public BinaryOperator&lt;List&lt;T&gt;&gt; combiner() { </span></span>
<span class="line"><span style="color:#24292e;">    return (list1, list2) -&gt; { </span></span>
<span class="line"><span style="color:#24292e;">    list1.addAll(list2); </span></span>
<span class="line"><span style="color:#24292e;">    return list1; } </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>定义第五个函数： characteristics方法</p><blockquote><p>characteristics会返回一个不可变的Characteristics集合，它定义了收集器的行为——尤其是关于流是否可以并行归约，以及可以使用哪些优化的提示。Characteristics是一个包含三个项目的枚举。</p><ul><li>UNORDERED——归约结果不受流中项目的遍历和累积顺序的影响。</li><li>CONCURRENT——accumulator函数可以从多个线程同时调用，且该收集器可以并行归约流。</li><li>IDENTITY_FINISH——这表明完成器方法返回的函数是一个恒等函数，可以跳过。</li></ul></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public Set&lt;Characteristics&gt; characteristics() { </span></span>
<span class="line"><span style="color:#e1e4e8;">    return Collections.unmodifiableSet(EnumSet.of(IDENTITY_FINISH, CONCURRENT));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public Set&lt;Characteristics&gt; characteristics() { </span></span>
<span class="line"><span style="color:#24292e;">    return Collections.unmodifiableSet(EnumSet.of(IDENTITY_FINISH, CONCURRENT));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>将ToListCollector及其方法定义完，就可以用了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">List&lt;Dish&gt; dishes = menuStream.collect(new ToListCollector&lt;Dish&gt;());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">List&lt;Dish&gt; dishes = menuStream.collect(new ToListCollector&lt;Dish&gt;());</span></span></code></pre></div><h1 id="stream并行" tabindex="-1">stream并行 <a class="header-anchor" href="#stream并行" aria-label="Permalink to &quot;stream并行&quot;">​</a></h1><h2 id="并行流" tabindex="-1">并行流 <a class="header-anchor" href="#并行流" aria-label="Permalink to &quot;并行流&quot;">​</a></h2><p><strong>并行流</strong></p><p>Java 7引入了一个叫作分支/合并的框架，让并行处理数据变的简单。stream接口允许你声明性地将顺序流变为并行流，其底层也是用的是分支/合并框架。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public static long parallelRangedSum(long n) { </span></span>
<span class="line"><span style="color:#e1e4e8;">     return LongStream.rangeClosed(1, n)</span></span>
<span class="line"><span style="color:#e1e4e8;">                      .parallel()</span></span>
<span class="line"><span style="color:#e1e4e8;">                      .reduce(0L, Long::sum);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public static long parallelRangedSum(long n) { </span></span>
<span class="line"><span style="color:#24292e;">     return LongStream.rangeClosed(1, n)</span></span>
<span class="line"><span style="color:#24292e;">                      .parallel()</span></span>
<span class="line"><span style="color:#24292e;">                      .reduce(0L, Long::sum);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>正确使用并行流</strong></p><p>下面是另一种实现对前n个自然数求和的方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public static long sideEffectSum(long n) { </span></span>
<span class="line"><span style="color:#e1e4e8;">     Accumulator accumulator = new Accumulator(); </span></span>
<span class="line"><span style="color:#e1e4e8;">     LongStream.rangeClosed(1, n).forEach(accumulator::add); </span></span>
<span class="line"><span style="color:#e1e4e8;">     return accumulator.total; </span></span>
<span class="line"><span style="color:#e1e4e8;">} </span></span>
<span class="line"><span style="color:#e1e4e8;">public class Accumulator { </span></span>
<span class="line"><span style="color:#e1e4e8;">     public long total = 0; </span></span>
<span class="line"><span style="color:#e1e4e8;">     public void add(long value) { total += value; } </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public static long sideEffectSum(long n) { </span></span>
<span class="line"><span style="color:#24292e;">     Accumulator accumulator = new Accumulator(); </span></span>
<span class="line"><span style="color:#24292e;">     LongStream.rangeClosed(1, n).forEach(accumulator::add); </span></span>
<span class="line"><span style="color:#24292e;">     return accumulator.total; </span></span>
<span class="line"><span style="color:#24292e;">} </span></span>
<span class="line"><span style="color:#24292e;">public class Accumulator { </span></span>
<span class="line"><span style="color:#24292e;">     public long total = 0; </span></span>
<span class="line"><span style="color:#24292e;">     public void add(long value) { total += value; } </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>因为它在本质上就是顺序的。每次访问total都会出现数据竞争。如果你尝试用同步来修复，那就出现错误：</p><blockquote><p>共享可变状态会影响并行流以及并行计算。（在段代码就是total就是共享可变状态）</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public static long sideEffectParallelSum(long n) { </span></span>
<span class="line"><span style="color:#e1e4e8;">     Accumulator accumulator = new Accumulator(); </span></span>
<span class="line"><span style="color:#e1e4e8;">     LongStream.rangeClosed(1, n).parallel().forEach(accumulator::add); </span></span>
<span class="line"><span style="color:#e1e4e8;">     return accumulator.total; </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public static long sideEffectParallelSum(long n) { </span></span>
<span class="line"><span style="color:#24292e;">     Accumulator accumulator = new Accumulator(); </span></span>
<span class="line"><span style="color:#24292e;">     LongStream.rangeClosed(1, n).parallel().forEach(accumulator::add); </span></span>
<span class="line"><span style="color:#24292e;">     return accumulator.total; </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>高效使用并行流</strong></p><ul><li>并行流并不总是比顺序流快</li><li>留意装箱，或者用原始数据流（IntStream LongStream DoubleStream）</li><li>limit和findFirst等依赖于元素顺序的操作，它们在并行流上执行的代价非常大。</li><li>对于较小的数据量，选择并行流几乎从来都不是一个好的决定。</li><li>要考虑流背后的数据结构是否易于分解。例如，ArrayList的拆分效率比LinkedList高得多</li><li>还要考虑终端操作中合并步骤的代价是大是小</li></ul><h2 id="分支-合并框架" tabindex="-1">分支/合并框架 <a class="header-anchor" href="#分支-合并框架" aria-label="Permalink to &quot;分支/合并框架&quot;">​</a></h2><blockquote><p>分支/合并框架就是：定义RecursiveTask，并实现它唯一的抽象方法compute</p></blockquote><p>用分支/合并框架执行并行求和</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class ForkJoinSumCalculator extends java.util.concurrent.RecursiveTask&lt;Long&gt; { </span></span>
<span class="line"><span style="color:#e1e4e8;">     private final long[] numbers; </span></span>
<span class="line"><span style="color:#e1e4e8;">     private final int start;</span></span>
<span class="line"><span style="color:#e1e4e8;">     private final int end; </span></span>
<span class="line"><span style="color:#e1e4e8;">     public static final long THRESHOLD = 10_000; </span></span>
<span class="line"><span style="color:#e1e4e8;">     // 公共构造函数，供外部调用</span></span>
<span class="line"><span style="color:#e1e4e8;">     public ForkJoinSumCalculator(long[] numbers) { </span></span>
<span class="line"><span style="color:#e1e4e8;">      this(numbers, 0, numbers.length); </span></span>
<span class="line"><span style="color:#e1e4e8;">     }</span></span>
<span class="line"><span style="color:#e1e4e8;">     // 私有构造函数，以便于调用子任务</span></span>
<span class="line"><span style="color:#e1e4e8;">     private ForkJoinSumCalculator(long[] numbers, int start, int end) { </span></span>
<span class="line"><span style="color:#e1e4e8;">         this.numbers = numbers; </span></span>
<span class="line"><span style="color:#e1e4e8;">         this.start = start; </span></span>
<span class="line"><span style="color:#e1e4e8;">         this.end = end;</span></span>
<span class="line"><span style="color:#e1e4e8;">     } </span></span>
<span class="line"><span style="color:#e1e4e8;">     @Override </span></span>
<span class="line"><span style="color:#e1e4e8;">     protected Long compute() { </span></span>
<span class="line"><span style="color:#e1e4e8;">        int length = end - start; </span></span>
<span class="line"><span style="color:#e1e4e8;">        if (length &lt;= THRESHOLD) { </span></span>
<span class="line"><span style="color:#e1e4e8;">           return computeSequentially(); </span></span>
<span class="line"><span style="color:#e1e4e8;">        } </span></span>
<span class="line"><span style="color:#e1e4e8;">        // 异步执行LeftTask</span></span>
<span class="line"><span style="color:#e1e4e8;">      ForkJoinSumCalculator leftTask = new ForkJoinSumCalculator(numbers, start, start + length/2); </span></span>
<span class="line"><span style="color:#e1e4e8;">      leftTask.fork();</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 同步执行RightTask</span></span>
<span class="line"><span style="color:#e1e4e8;">      ForkJoinSumCalculator rightTask = new ForkJoinSumCalculator(numbers, start + length/2, end); </span></span>
<span class="line"><span style="color:#e1e4e8;">      Long rightResult = rightTask.compute(); </span></span>
<span class="line"><span style="color:#e1e4e8;">      // 读取LeftTask子任务结果，如果尚未完成就等待</span></span>
<span class="line"><span style="color:#e1e4e8;">      Long leftResult = leftTask.join(); </span></span>
<span class="line"><span style="color:#e1e4e8;">      // 返回两个结果</span></span>
<span class="line"><span style="color:#e1e4e8;">      return leftResult + rightResult;</span></span>
<span class="line"><span style="color:#e1e4e8;">     } </span></span>
<span class="line"><span style="color:#e1e4e8;">     // 最小任务顺序计算</span></span>
<span class="line"><span style="color:#e1e4e8;">     private long computeSequentially() { </span></span>
<span class="line"><span style="color:#e1e4e8;">         long sum = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">         for (int i = start; i &lt; end; i++) {{ </span></span>
<span class="line"><span style="color:#e1e4e8;">          sum += numbers[i];</span></span>
<span class="line"><span style="color:#e1e4e8;">         } </span></span>
<span class="line"><span style="color:#e1e4e8;">         return sum; </span></span>
<span class="line"><span style="color:#e1e4e8;">     } </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class ForkJoinSumCalculator extends java.util.concurrent.RecursiveTask&lt;Long&gt; { </span></span>
<span class="line"><span style="color:#24292e;">     private final long[] numbers; </span></span>
<span class="line"><span style="color:#24292e;">     private final int start;</span></span>
<span class="line"><span style="color:#24292e;">     private final int end; </span></span>
<span class="line"><span style="color:#24292e;">     public static final long THRESHOLD = 10_000; </span></span>
<span class="line"><span style="color:#24292e;">     // 公共构造函数，供外部调用</span></span>
<span class="line"><span style="color:#24292e;">     public ForkJoinSumCalculator(long[] numbers) { </span></span>
<span class="line"><span style="color:#24292e;">      this(numbers, 0, numbers.length); </span></span>
<span class="line"><span style="color:#24292e;">     }</span></span>
<span class="line"><span style="color:#24292e;">     // 私有构造函数，以便于调用子任务</span></span>
<span class="line"><span style="color:#24292e;">     private ForkJoinSumCalculator(long[] numbers, int start, int end) { </span></span>
<span class="line"><span style="color:#24292e;">         this.numbers = numbers; </span></span>
<span class="line"><span style="color:#24292e;">         this.start = start; </span></span>
<span class="line"><span style="color:#24292e;">         this.end = end;</span></span>
<span class="line"><span style="color:#24292e;">     } </span></span>
<span class="line"><span style="color:#24292e;">     @Override </span></span>
<span class="line"><span style="color:#24292e;">     protected Long compute() { </span></span>
<span class="line"><span style="color:#24292e;">        int length = end - start; </span></span>
<span class="line"><span style="color:#24292e;">        if (length &lt;= THRESHOLD) { </span></span>
<span class="line"><span style="color:#24292e;">           return computeSequentially(); </span></span>
<span class="line"><span style="color:#24292e;">        } </span></span>
<span class="line"><span style="color:#24292e;">        // 异步执行LeftTask</span></span>
<span class="line"><span style="color:#24292e;">      ForkJoinSumCalculator leftTask = new ForkJoinSumCalculator(numbers, start, start + length/2); </span></span>
<span class="line"><span style="color:#24292e;">      leftTask.fork();</span></span>
<span class="line"><span style="color:#24292e;">      // 同步执行RightTask</span></span>
<span class="line"><span style="color:#24292e;">      ForkJoinSumCalculator rightTask = new ForkJoinSumCalculator(numbers, start + length/2, end); </span></span>
<span class="line"><span style="color:#24292e;">      Long rightResult = rightTask.compute(); </span></span>
<span class="line"><span style="color:#24292e;">      // 读取LeftTask子任务结果，如果尚未完成就等待</span></span>
<span class="line"><span style="color:#24292e;">      Long leftResult = leftTask.join(); </span></span>
<span class="line"><span style="color:#24292e;">      // 返回两个结果</span></span>
<span class="line"><span style="color:#24292e;">      return leftResult + rightResult;</span></span>
<span class="line"><span style="color:#24292e;">     } </span></span>
<span class="line"><span style="color:#24292e;">     // 最小任务顺序计算</span></span>
<span class="line"><span style="color:#24292e;">     private long computeSequentially() { </span></span>
<span class="line"><span style="color:#24292e;">         long sum = 0;</span></span>
<span class="line"><span style="color:#24292e;">         for (int i = start; i &lt; end; i++) {{ </span></span>
<span class="line"><span style="color:#24292e;">          sum += numbers[i];</span></span>
<span class="line"><span style="color:#24292e;">         } </span></span>
<span class="line"><span style="color:#24292e;">         return sum; </span></span>
<span class="line"><span style="color:#24292e;">     } </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>调用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public static long forkJoinSum(long n) { </span></span>
<span class="line"><span style="color:#e1e4e8;">     long[] numbers = LongStream.rangeClosed(1, n).toArray(); </span></span>
<span class="line"><span style="color:#e1e4e8;">     ForkJoinTask&lt;Long&gt; task = new ForkJoinSumCalculator(numbers); </span></span>
<span class="line"><span style="color:#e1e4e8;">     return new ForkJoinPool().invoke(task); </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public static long forkJoinSum(long n) { </span></span>
<span class="line"><span style="color:#24292e;">     long[] numbers = LongStream.rangeClosed(1, n).toArray(); </span></span>
<span class="line"><span style="color:#24292e;">     ForkJoinTask&lt;Long&gt; task = new ForkJoinSumCalculator(numbers); </span></span>
<span class="line"><span style="color:#24292e;">     return new ForkJoinPool().invoke(task); </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>注意点：</p><ul><li>ForkJoinPool使用Runtime.availableProcessors的返回值来决定线程池使用的线程数。</li></ul><h2 id="spliterator" tabindex="-1">Spliterator <a class="header-anchor" href="#spliterator" aria-label="Permalink to &quot;Spliterator&quot;">​</a></h2><p>Spliterator是Java 8中加入的另一个新接口；和Iterator一样，Spliterator也用于遍历数据源中的元素，但它是为了并行执行而设计的。Java 8已经为集合框架中包含的所有数据结构提供了一个默认的Spliterator实现。集合实现了Spliterator接口，接口提供了一个pliterator方法。这个接口定义了若干方法，如下面的代码清单所示。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public interface Spliterator&lt;T&gt; { </span></span>
<span class="line"><span style="color:#e1e4e8;">     boolean tryAdvance(Consumer&lt;? super T&gt; action);   // 和Iterator一样</span></span>
<span class="line"><span style="color:#e1e4e8;">     Spliterator&lt;T&gt; trySplit();        // 用于并行</span></span>
<span class="line"><span style="color:#e1e4e8;">     long estimateSize();          // 估计还剩下多少元素要遍历</span></span>
<span class="line"><span style="color:#e1e4e8;">     int characteristics(); </span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public interface Spliterator&lt;T&gt; { </span></span>
<span class="line"><span style="color:#24292e;">     boolean tryAdvance(Consumer&lt;? super T&gt; action);   // 和Iterator一样</span></span>
<span class="line"><span style="color:#24292e;">     Spliterator&lt;T&gt; trySplit();        // 用于并行</span></span>
<span class="line"><span style="color:#24292e;">     long estimateSize();          // 估计还剩下多少元素要遍历</span></span>
<span class="line"><span style="color:#24292e;">     int characteristics(); </span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>stream流在并行处理时，不断调用trySplit()方法，直到所有的trySplit()返回null</li><li>spliterator也可以自己创建（略）</li></ul>`,110),t=[p];function o(c,i,r,y,u,g){return a(),n("div",null,t)}const h=s(l,[["render",o]]);export{m as __pageData,h as default};
