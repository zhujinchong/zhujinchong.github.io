import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/31Java并发编程/index.md","filePath":"articles/Java/31Java并发编程/index.md","lastUpdated":1698149129000}'),l={name:"articles/Java/31Java并发编程/index.md"},p=e(`<h2 id="什么juc" tabindex="-1">什么JUC <a class="header-anchor" href="#什么juc" aria-label="Permalink to &quot;什么JUC&quot;">​</a></h2><p>java并发编程是对java.util.concurrent下面的工具类的使用。</p><p>比如：</p><p>Thread只是一个普通的线程类，Runnable没有返回值，效率相对Callable使用率较低。而Callable正是java.util.concurrent下面的类。等等还有很多。</p><h2 id="lock锁" tabindex="-1">Lock锁 <a class="header-anchor" href="#lock锁" aria-label="Permalink to &quot;Lock锁&quot;">​</a></h2><h3 id="synchronized用法" tabindex="-1">synchronized用法 <a class="header-anchor" href="#synchronized用法" aria-label="Permalink to &quot;synchronized用法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Test {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Ticket ticket = new Ticket();</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (int i = 1; i &lt;= 20; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            final int temp = i;</span></span>
<span class="line"><span style="color:#e1e4e8;">            new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                ticket.sale();</span></span>
<span class="line"><span style="color:#e1e4e8;">            }, &quot;Thread-&quot; + temp).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Ticket {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private int number = 10;</span></span>
<span class="line"><span style="color:#e1e4e8;">    public synchronized void sale() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (number &gt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            number -= 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(Thread.currentThread().getName() + &quot;: &quot; + number);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Test {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Ticket ticket = new Ticket();</span></span>
<span class="line"><span style="color:#24292e;">        for (int i = 1; i &lt;= 20; i++) {</span></span>
<span class="line"><span style="color:#24292e;">            final int temp = i;</span></span>
<span class="line"><span style="color:#24292e;">            new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                ticket.sale();</span></span>
<span class="line"><span style="color:#24292e;">            }, &quot;Thread-&quot; + temp).start();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class Ticket {</span></span>
<span class="line"><span style="color:#24292e;">    private int number = 10;</span></span>
<span class="line"><span style="color:#24292e;">    public synchronized void sale() {</span></span>
<span class="line"><span style="color:#24292e;">        if (number &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">            number -= 1;</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(Thread.currentThread().getName() + &quot;: &quot; + number);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="lock用法" tabindex="-1">Lock用法 <a class="header-anchor" href="#lock用法" aria-label="Permalink to &quot;Lock用法&quot;">​</a></h3><blockquote><p>参数可以传true/false：</p><p>true默认：非公平锁：可以插队</p><p>false：公平锁：先来后到</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Ticket {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private int number = 10;</span></span>
<span class="line"><span style="color:#e1e4e8;">    Lock lock = new ReentrantLock();</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void sale() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        lock.lock();</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            if (number &gt; 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                number -= 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">                System.out.println(Thread.currentThread().getName() + &quot;: &quot; + number);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        } finally {</span></span>
<span class="line"><span style="color:#e1e4e8;">            lock.unlock();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Ticket {</span></span>
<span class="line"><span style="color:#24292e;">    private int number = 10;</span></span>
<span class="line"><span style="color:#24292e;">    Lock lock = new ReentrantLock();</span></span>
<span class="line"><span style="color:#24292e;">    public void sale() {</span></span>
<span class="line"><span style="color:#24292e;">        lock.lock();</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            if (number &gt; 0) {</span></span>
<span class="line"><span style="color:#24292e;">                number -= 1;</span></span>
<span class="line"><span style="color:#24292e;">                System.out.println(Thread.currentThread().getName() + &quot;: &quot; + number);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        } finally {</span></span>
<span class="line"><span style="color:#24292e;">            lock.unlock();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="synchronized-vs-lock" tabindex="-1">synchronized vs Lock <a class="header-anchor" href="#synchronized-vs-lock" aria-label="Permalink to &quot;synchronized vs Lock&quot;">​</a></h3><p>区别：</p><ol><li>synchronized是内置关键字，Lock是内置java类</li><li>synchronized无法获取锁的状态，Lock可以判断是否获取到了锁</li><li>synchronized自动释放锁，Lock需要手动释放锁</li><li>synchronized会阻塞其他线程，Lock锁不一定会等待下去</li><li>synchronized是非公平的，Lock可以设置是否公平，默认非公平锁。</li><li>synchronized适合少量代码同步问题，Lock适合锁大量的同步代码</li></ol><h2 id="生产者消费者" tabindex="-1">生产者消费者 <a class="header-anchor" href="#生产者消费者" aria-label="Permalink to &quot;生产者消费者&quot;">​</a></h2><p>生产者消费者问题是线程之间通信问题：</p><p>AB操作同一个变量, A+1, B-1</p><h3 id="synchronized版" tabindex="-1">synchronized版 <a class="header-anchor" href="#synchronized版" aria-label="Permalink to &quot;synchronized版&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Test {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Ticket ticket = new Ticket();</span></span>
<span class="line"><span style="color:#e1e4e8;">        new Thread(() -&gt; { for (int i = 1; i &lt;= 10; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            try {</span></span>
<span class="line"><span style="color:#e1e4e8;">                ticket.increment();</span></span>
<span class="line"><span style="color:#e1e4e8;">            } catch (InterruptedException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }},&quot;A&quot;).start();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        new Thread(() -&gt; { for (int i = 1; i &lt;= 10; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            try {</span></span>
<span class="line"><span style="color:#e1e4e8;">                ticket.decrement();</span></span>
<span class="line"><span style="color:#e1e4e8;">            } catch (InterruptedException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }},&quot;B&quot;).start();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Ticket {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private int number = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public synchronized void increment() throws InterruptedException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        while (number != 0) {  // 不能用if, 会导致虚假唤醒</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.wait(); // 等待</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        number++;</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(Thread.currentThread().getName() + &quot;: &quot; + number);</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.notifyAll(); // 通知</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public synchronized void decrement() throws InterruptedException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        while (number == 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.wait(); // 等待</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        number--;</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(Thread.currentThread().getName() + &quot;: &quot; + number);</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.notifyAll(); // 通知</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Test {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span style="color:#24292e;">        Ticket ticket = new Ticket();</span></span>
<span class="line"><span style="color:#24292e;">        new Thread(() -&gt; { for (int i = 1; i &lt;= 10; i++) {</span></span>
<span class="line"><span style="color:#24292e;">            try {</span></span>
<span class="line"><span style="color:#24292e;">                ticket.increment();</span></span>
<span class="line"><span style="color:#24292e;">            } catch (InterruptedException e) {</span></span>
<span class="line"><span style="color:#24292e;">                e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }},&quot;A&quot;).start();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        new Thread(() -&gt; { for (int i = 1; i &lt;= 10; i++) {</span></span>
<span class="line"><span style="color:#24292e;">            try {</span></span>
<span class="line"><span style="color:#24292e;">                ticket.decrement();</span></span>
<span class="line"><span style="color:#24292e;">            } catch (InterruptedException e) {</span></span>
<span class="line"><span style="color:#24292e;">                e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }},&quot;B&quot;).start();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class Ticket {</span></span>
<span class="line"><span style="color:#24292e;">    private int number = 0;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public synchronized void increment() throws InterruptedException {</span></span>
<span class="line"><span style="color:#24292e;">        while (number != 0) {  // 不能用if, 会导致虚假唤醒</span></span>
<span class="line"><span style="color:#24292e;">            this.wait(); // 等待</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        number++;</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(Thread.currentThread().getName() + &quot;: &quot; + number);</span></span>
<span class="line"><span style="color:#24292e;">        this.notifyAll(); // 通知</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public synchronized void decrement() throws InterruptedException {</span></span>
<span class="line"><span style="color:#24292e;">        while (number == 0) {</span></span>
<span class="line"><span style="color:#24292e;">            this.wait(); // 等待</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        number--;</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(Thread.currentThread().getName() + &quot;: &quot; + number);</span></span>
<span class="line"><span style="color:#24292e;">        this.notifyAll(); // 通知</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="lock版" tabindex="-1">Lock版 <a class="header-anchor" href="#lock版" aria-label="Permalink to &quot;Lock版&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Ticket {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private int number = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    Lock lock = new ReentrantLock();</span></span>
<span class="line"><span style="color:#e1e4e8;">    Condition condition = lock.newCondition();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public void increment() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        lock.lock();</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 业务代码</span></span>
<span class="line"><span style="color:#e1e4e8;">            while (number != 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                condition.await(); // 等待</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            number++;</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(Thread.currentThread().getName() + &quot;: &quot; + number);</span></span>
<span class="line"><span style="color:#e1e4e8;">            condition.signalAll(); // 通知</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        } finally {</span></span>
<span class="line"><span style="color:#e1e4e8;">            lock.unlock();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public void decrement() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        lock.lock();</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            while (number == 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                condition.await(); // 等待</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            number--;</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(Thread.currentThread().getName() + &quot;: &quot; + number);</span></span>
<span class="line"><span style="color:#e1e4e8;">            condition.signalAll(); // 通知</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        } finally {</span></span>
<span class="line"><span style="color:#e1e4e8;">            lock.unlock();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Ticket {</span></span>
<span class="line"><span style="color:#24292e;">    private int number = 0;</span></span>
<span class="line"><span style="color:#24292e;">    Lock lock = new ReentrantLock();</span></span>
<span class="line"><span style="color:#24292e;">    Condition condition = lock.newCondition();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void increment() {</span></span>
<span class="line"><span style="color:#24292e;">        lock.lock();</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            // 业务代码</span></span>
<span class="line"><span style="color:#24292e;">            while (number != 0) {</span></span>
<span class="line"><span style="color:#24292e;">                condition.await(); // 等待</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            number++;</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(Thread.currentThread().getName() + &quot;: &quot; + number);</span></span>
<span class="line"><span style="color:#24292e;">            condition.signalAll(); // 通知</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        } finally {</span></span>
<span class="line"><span style="color:#24292e;">            lock.unlock();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void decrement() {</span></span>
<span class="line"><span style="color:#24292e;">        lock.lock();</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            while (number == 0) {</span></span>
<span class="line"><span style="color:#24292e;">                condition.await(); // 等待</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            number--;</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(Thread.currentThread().getName() + &quot;: &quot; + number);</span></span>
<span class="line"><span style="color:#24292e;">            condition.signalAll(); // 通知</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        } finally {</span></span>
<span class="line"><span style="color:#24292e;">            lock.unlock();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="condition精准通知和唤醒" tabindex="-1">Condition精准通知和唤醒 <a class="header-anchor" href="#condition精准通知和唤醒" aria-label="Permalink to &quot;Condition精准通知和唤醒&quot;">​</a></h3><p>定义多个condition，实现精准通知</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 1...</span></span>
<span class="line"><span style="color:#e1e4e8;">while (xx != 1) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	condition.await(); // 等待</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">xx = 2</span></span>
<span class="line"><span style="color:#e1e4e8;">condition2.signal(); // 通知2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 2...</span></span>
<span class="line"><span style="color:#e1e4e8;">while (xx != 2){</span></span>
<span class="line"><span style="color:#e1e4e8;">	condition2.await();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">xx = 1</span></span>
<span class="line"><span style="color:#e1e4e8;">condition.signal(); // 通知1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 1...</span></span>
<span class="line"><span style="color:#24292e;">while (xx != 1) {</span></span>
<span class="line"><span style="color:#24292e;">	condition.await(); // 等待</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">xx = 2</span></span>
<span class="line"><span style="color:#24292e;">condition2.signal(); // 通知2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 2...</span></span>
<span class="line"><span style="color:#24292e;">while (xx != 2){</span></span>
<span class="line"><span style="color:#24292e;">	condition2.await();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">xx = 1</span></span>
<span class="line"><span style="color:#24292e;">condition.signal(); // 通知1</span></span></code></pre></div><h2 id="synchronized的8锁现象" tabindex="-1">synchronized的8锁现象 <a class="header-anchor" href="#synchronized的8锁现象" aria-label="Permalink to &quot;synchronized的8锁现象&quot;">​</a></h2><p>8锁现象是锁出现的几种情况，本节虽然没有全部列举，但以下代码能让你了解清楚锁。</p><p>锁一般加到方法上：普通方法、加锁的普通方法、加锁的静态方法</p><ol><li>synchronized加锁的对象是方法的调用者。因此，加锁的普通方法 锁在实例对象；加锁的静态方法 锁在class模板。</li><li>普通方法不会受限于上面两种锁，互不干扰。</li><li>实例对象锁 和 Class锁 两者互不烦扰。</li></ol><p>基本代码如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Phone {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public synchronized void sendSms() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        TimeUnit.SECONDS.sleep(4); // 这里需要捕获异常（代码略）</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;发短信&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public synchronized void call() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        TimeUnit.SECONDS.sleep(1); // 这里需要捕获异常（代码略）</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;打电话&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public void hello() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;hello&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    public synchronized static void hello2() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    	System.out.println(&quot;static hello&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Phone {</span></span>
<span class="line"><span style="color:#24292e;">    public synchronized void sendSms() {</span></span>
<span class="line"><span style="color:#24292e;">        TimeUnit.SECONDS.sleep(4); // 这里需要捕获异常（代码略）</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;发短信&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public synchronized void call() {</span></span>
<span class="line"><span style="color:#24292e;">        TimeUnit.SECONDS.sleep(1); // 这里需要捕获异常（代码略）</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;打电话&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public void hello() {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;hello&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    public synchronized static void hello2() {</span></span>
<span class="line"><span style="color:#24292e;">    	System.out.println(&quot;static hello&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>当调用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Phone phone = new Phone();</span></span>
<span class="line"><span style="color:#e1e4e8;">new Thread(() -&gt; phone.sendSms()).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">new Thread(() -&gt; phone.call()).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">new Thread(() -&gt; phone.hello()).start();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Phone phone = new Phone();</span></span>
<span class="line"><span style="color:#24292e;">new Thread(() -&gt; phone.sendSms()).start();</span></span>
<span class="line"><span style="color:#24292e;">new Thread(() -&gt; phone.call()).start();</span></span>
<span class="line"><span style="color:#24292e;">new Thread(() -&gt; phone.hello()).start();</span></span></code></pre></div><p>输出顺序：hello 发短信 打电话</p><p>原因：</p><ol><li>synchronized加锁的对象是他的调用者，在这里就是实例对象。所以发短信 先于 打电话</li><li>hello()方法没有锁，不受锁限制。所以会先执行。</li></ol><p>当调用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Phone phone1 = new Phone();</span></span>
<span class="line"><span style="color:#e1e4e8;">Phone phone2 = new Phone();</span></span>
<span class="line"><span style="color:#e1e4e8;">new Thread(() -&gt; phone1.sendSms()).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">new Thread(() -&gt; phone2.call()).start();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Phone phone1 = new Phone();</span></span>
<span class="line"><span style="color:#24292e;">Phone phone2 = new Phone();</span></span>
<span class="line"><span style="color:#24292e;">new Thread(() -&gt; phone1.sendSms()).start();</span></span>
<span class="line"><span style="color:#24292e;">new Thread(() -&gt; phone2.call()).start();</span></span></code></pre></div><p>输出顺序：打电话 发短信</p><p>原因：两个实例对象是两把锁，两者不会干扰。所以 打电话 先于 发短信</p><p>当调用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Phone phone = new Phone();</span></span>
<span class="line"><span style="color:#e1e4e8;">new Thread(() -&gt; phone.sendSms()).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">new Thread(() -&gt; Phone.hello2()).start();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Phone phone = new Phone();</span></span>
<span class="line"><span style="color:#24292e;">new Thread(() -&gt; phone.sendSms()).start();</span></span>
<span class="line"><span style="color:#24292e;">new Thread(() -&gt; Phone.hello2()).start();</span></span></code></pre></div><p>输出顺序：hello2 发短信</p><p>原因：Class锁 和 实例对象锁 互不干扰。</p><h2 id="集合类不安全" tabindex="-1">集合类不安全 <a class="header-anchor" href="#集合类不安全" aria-label="Permalink to &quot;集合类不安全&quot;">​</a></h2><p>并发下 ArrayList 不安全，可能会报错<code>java.util.ConcurrentModificationException</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">List&lt;Double&gt; list = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">for (int i = 0; i &lt; 100; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        list.add(Math.random());</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(list);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }, String.valueOf(i)).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">List&lt;Double&gt; list = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">for (int i = 0; i &lt; 100; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        list.add(Math.random());</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(list);</span></span>
<span class="line"><span style="color:#24292e;">    }, String.valueOf(i)).start();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>解决方案：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">1. 使用线程安全的集合类，如Vector，底层是synchronized</span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;Double&gt; list = new Vector&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">2. 将集合变成线程安全的</span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;Double&gt; list = Collections.synchronizedList(new ArrayList&lt;&gt;());</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">3. CopyOnWrite 来自 java.util.concurrent 包，底层是Lock锁</span></span>
<span class="line"><span style="color:#e1e4e8;">// 类似的有CopyOnWriteArraySet ConcurrentHashMap</span></span>
<span class="line"><span style="color:#e1e4e8;">List&lt;Double&gt; list = new CopyOnWriteArrayList&lt;&gt;();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">1. 使用线程安全的集合类，如Vector，底层是synchronized</span></span>
<span class="line"><span style="color:#24292e;">List&lt;Double&gt; list = new Vector&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">2. 将集合变成线程安全的</span></span>
<span class="line"><span style="color:#24292e;">List&lt;Double&gt; list = Collections.synchronizedList(new ArrayList&lt;&gt;());</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">3. CopyOnWrite 来自 java.util.concurrent 包，底层是Lock锁</span></span>
<span class="line"><span style="color:#24292e;">// 类似的有CopyOnWriteArraySet ConcurrentHashMap</span></span>
<span class="line"><span style="color:#24292e;">List&lt;Double&gt; list = new CopyOnWriteArrayList&lt;&gt;();</span></span></code></pre></div><h2 id="多线程常用辅助类" tabindex="-1">多线程常用辅助类 <a class="header-anchor" href="#多线程常用辅助类" aria-label="Permalink to &quot;多线程常用辅助类&quot;">​</a></h2><h3 id="coutdownlatch" tabindex="-1">CoutDownLatch <a class="header-anchor" href="#coutdownlatch" aria-label="Permalink to &quot;CoutDownLatch&quot;">​</a></h3><p>减法计数器：当计数器复位时，才能被<code>await()</code>，再继续执行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">CountDownLatch countDownLatch = new CountDownLatch(3);</span></span>
<span class="line"><span style="color:#e1e4e8;">for (int i = 1; i &lt;= 10; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        countDownLatch.countDown(); // 计数器 -1，执行完 +1</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(Thread.currentThread().getName());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }, &quot;thread-&quot; + String.valueOf(i)).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">countDownLatch.await(); // 等待计数器复位，然后再向下执行</span></span>
<span class="line"><span style="color:#e1e4e8;">System.out.println(&quot;成功&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">CountDownLatch countDownLatch = new CountDownLatch(3);</span></span>
<span class="line"><span style="color:#24292e;">for (int i = 1; i &lt;= 10; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        countDownLatch.countDown(); // 计数器 -1，执行完 +1</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(Thread.currentThread().getName());</span></span>
<span class="line"><span style="color:#24292e;">    }, &quot;thread-&quot; + String.valueOf(i)).start();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">countDownLatch.await(); // 等待计数器复位，然后再向下执行</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(&quot;成功&quot;);</span></span></code></pre></div><h3 id="cyclicbarrier" tabindex="-1">CyclicBarrier <a class="header-anchor" href="#cyclicbarrier" aria-label="Permalink to &quot;CyclicBarrier&quot;">​</a></h3><p>加法计数器：当线程数量达到时，再继续执行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">CyclicBarrier cyclicBarrier = new CyclicBarrier(7, () -&gt; System.out.println(&quot;召唤神龙成功&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">for (int i = 1; i &lt;= 7; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(Thread.currentThread().getName());</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(&quot;等待...&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">            cyclicBarrier.await();</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(&quot;成功&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(&quot;失败&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }, &quot;thread-&quot; + String.valueOf(i)).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">CyclicBarrier cyclicBarrier = new CyclicBarrier(7, () -&gt; System.out.println(&quot;召唤神龙成功&quot;));</span></span>
<span class="line"><span style="color:#24292e;">for (int i = 1; i &lt;= 7; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(Thread.currentThread().getName());</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;等待...&quot;);</span></span>
<span class="line"><span style="color:#24292e;">            cyclicBarrier.await();</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;成功&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (Exception e) {</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(&quot;失败&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }, &quot;thread-&quot; + String.valueOf(i)).start();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="semaphore" tabindex="-1">Semaphore <a class="header-anchor" href="#semaphore" aria-label="Permalink to &quot;Semaphore&quot;">​</a></h3><p>Semaphore的意思是信号量</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Semaphore semaphore = new Semaphore(3);</span></span>
<span class="line"><span style="color:#e1e4e8;">for (int i = 1; i &lt;= 7; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        try {</span></span>
<span class="line"><span style="color:#e1e4e8;">            semaphore.acquire();  // 得到信号量</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(Thread.currentThread().getName() + &quot;得到信号量&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">            TimeUnit.SECONDS.sleep(2);</span></span>
<span class="line"><span style="color:#e1e4e8;">        } catch (InterruptedException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">        } finally {</span></span>
<span class="line"><span style="color:#e1e4e8;">            semaphore.release(); // 释放信号量</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(Thread.currentThread().getName() + &quot;释放信号量&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(Thread.currentThread().getName());</span></span>
<span class="line"><span style="color:#e1e4e8;">    }, &quot;thread-&quot; + String.valueOf(i)).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Semaphore semaphore = new Semaphore(3);</span></span>
<span class="line"><span style="color:#24292e;">for (int i = 1; i &lt;= 7; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        try {</span></span>
<span class="line"><span style="color:#24292e;">            semaphore.acquire();  // 得到信号量</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(Thread.currentThread().getName() + &quot;得到信号量&quot;);</span></span>
<span class="line"><span style="color:#24292e;">            TimeUnit.SECONDS.sleep(2);</span></span>
<span class="line"><span style="color:#24292e;">        } catch (InterruptedException e) {</span></span>
<span class="line"><span style="color:#24292e;">            e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">        } finally {</span></span>
<span class="line"><span style="color:#24292e;">            semaphore.release(); // 释放信号量</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(Thread.currentThread().getName() + &quot;释放信号量&quot;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(Thread.currentThread().getName());</span></span>
<span class="line"><span style="color:#24292e;">    }, &quot;thread-&quot; + String.valueOf(i)).start();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="readwritelock" tabindex="-1">ReadWriteLock <a class="header-anchor" href="#readwritelock" aria-label="Permalink to &quot;ReadWriteLock&quot;">​</a></h3><p>ReadWriteLock是一个接口，只有一个实现类ReentrantReadWriteLock。</p><p>作用：多个线程可以同时读，但在写时会加锁。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Test {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        MyCacheLock myCache = new MyCacheLock();</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (int i = 1; i &lt;= 5; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            final int temp = i;</span></span>
<span class="line"><span style="color:#e1e4e8;">            new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                myCache.put(&quot;Thread-&quot; + temp, temp);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }, &quot;Thread-&quot; + temp).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (int i = 1; i &lt;= 5; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            final int temp = i;</span></span>
<span class="line"><span style="color:#e1e4e8;">            new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                myCache.get(&quot;Thread-&quot; + temp);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }, &quot;Thread-&quot; + temp).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class MyCacheLock {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private volatile Map&lt;String, Object&gt; map = new HashMap&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;">    private ReadWriteLock lock = new ReentrantReadWriteLock();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 写的时候只有一个线程</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void put(String key, Object val) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        lock.writeLock().lock();</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(Thread.currentThread().getName() + &quot;写入：&quot; + key);</span></span>
<span class="line"><span style="color:#e1e4e8;">        map.put(key, val);</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(Thread.currentThread().getName() + &quot;写入OK&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        lock.writeLock().unlock();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 读的时候可以多个线程，读为什么还有加锁？为了防止脏读</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void get(String key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        lock.readLock().lock();</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(Thread.currentThread().getName() + &quot;读取：&quot; + key);</span></span>
<span class="line"><span style="color:#e1e4e8;">        Object o = map.get(key);</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(Thread.currentThread().getName() + &quot;读取OK&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        lock.readLock().unlock();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Test {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        MyCacheLock myCache = new MyCacheLock();</span></span>
<span class="line"><span style="color:#24292e;">        for (int i = 1; i &lt;= 5; i++) {</span></span>
<span class="line"><span style="color:#24292e;">            final int temp = i;</span></span>
<span class="line"><span style="color:#24292e;">            new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                myCache.put(&quot;Thread-&quot; + temp, temp);</span></span>
<span class="line"><span style="color:#24292e;">            }, &quot;Thread-&quot; + temp).start();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        for (int i = 1; i &lt;= 5; i++) {</span></span>
<span class="line"><span style="color:#24292e;">            final int temp = i;</span></span>
<span class="line"><span style="color:#24292e;">            new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                myCache.get(&quot;Thread-&quot; + temp);</span></span>
<span class="line"><span style="color:#24292e;">            }, &quot;Thread-&quot; + temp).start();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class MyCacheLock {</span></span>
<span class="line"><span style="color:#24292e;">    private volatile Map&lt;String, Object&gt; map = new HashMap&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;">    private ReadWriteLock lock = new ReentrantReadWriteLock();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 写的时候只有一个线程</span></span>
<span class="line"><span style="color:#24292e;">    public void put(String key, Object val) {</span></span>
<span class="line"><span style="color:#24292e;">        lock.writeLock().lock();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(Thread.currentThread().getName() + &quot;写入：&quot; + key);</span></span>
<span class="line"><span style="color:#24292e;">        map.put(key, val);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(Thread.currentThread().getName() + &quot;写入OK&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        lock.writeLock().unlock();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 读的时候可以多个线程，读为什么还有加锁？为了防止脏读</span></span>
<span class="line"><span style="color:#24292e;">    public void get(String key) {</span></span>
<span class="line"><span style="color:#24292e;">        lock.readLock().lock();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(Thread.currentThread().getName() + &quot;读取：&quot; + key);</span></span>
<span class="line"><span style="color:#24292e;">        Object o = map.get(key);</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(Thread.currentThread().getName() + &quot;读取OK&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        lock.readLock().unlock();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="volatile" tabindex="-1">volatile <a class="header-anchor" href="#volatile" aria-label="Permalink to &quot;volatile&quot;">​</a></h2><p>volatile是java虚拟机提供的轻量级同步机制，特点：</p><p>可见性：变量的修改对所有线程可见</p><p>非原子性：虽然所有线程可见，但是并不能保证操作的原子性</p><p>禁止指令重排：程序编译时，编码顺序不会被重排</p><h3 id="可见性" tabindex="-1">可见性 <a class="header-anchor" href="#可见性" aria-label="Permalink to &quot;可见性&quot;">​</a></h3><p>子线程拿到主线程的变量的副本，当变量在主线程改变时，子线程并不知道。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Test {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static int number = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">            while (number == 0) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                </span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">        TimeUnit.SECONDS.sleep(1);</span></span>
<span class="line"><span style="color:#e1e4e8;">        number = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(&quot;end&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Test {</span></span>
<span class="line"><span style="color:#24292e;">    public static int number = 0;</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span style="color:#24292e;">        new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">            while (number == 0) {</span></span>
<span class="line"><span style="color:#24292e;">                </span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }).start();</span></span>
<span class="line"><span style="color:#24292e;">        TimeUnit.SECONDS.sleep(1);</span></span>
<span class="line"><span style="color:#24292e;">        number = 1;</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(&quot;end&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>解决办法：加关键字volatile</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public volatile static int number = 0;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public volatile static int number = 0;</span></span></code></pre></div><h3 id="非原子性" tabindex="-1">非原子性 <a class="header-anchor" href="#非原子性" aria-label="Permalink to &quot;非原子性&quot;">​</a></h3><p>volatile关键字，并不能保证下面代码结果正确</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Test {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public volatile static int number = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void add() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        number++;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        for (int i = 1; i &lt;= 20; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                for (int j = 0; j &lt; 10000; j++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    add();</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        while (Thread.activeCount() &gt; 2) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            Thread.yield();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(number);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Test {</span></span>
<span class="line"><span style="color:#24292e;">    public volatile static int number = 0;</span></span>
<span class="line"><span style="color:#24292e;">    public static void add() {</span></span>
<span class="line"><span style="color:#24292e;">        number++;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span style="color:#24292e;">        for (int i = 1; i &lt;= 20; i++) {</span></span>
<span class="line"><span style="color:#24292e;">            new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                for (int j = 0; j &lt; 10000; j++) {</span></span>
<span class="line"><span style="color:#24292e;">                    add();</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }).start();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        while (Thread.activeCount() &gt; 2) {</span></span>
<span class="line"><span style="color:#24292e;">            Thread.yield();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(number);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>怎么办呢？</p><p>第一种方法：加synchronized关键字</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public synchronized static void add() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    number++;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public synchronized static void add() {</span></span>
<span class="line"><span style="color:#24292e;">    number++;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>第二种方法：使用java.util.concurrent.atomic下面的类（底层原理是CAS）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public static AtomicInteger number = new AtomicInteger();</span></span>
<span class="line"><span style="color:#e1e4e8;">public static void add() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    number.getAndIncrement(); // +1</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public static AtomicInteger number = new AtomicInteger();</span></span>
<span class="line"><span style="color:#24292e;">public static void add() {</span></span>
<span class="line"><span style="color:#24292e;">    number.getAndIncrement(); // +1</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="callable" tabindex="-1">Callable <a class="header-anchor" href="#callable" aria-label="Permalink to &quot;Callable&quot;">​</a></h2><p>Callable接口类似于Runnable，都是用于线程的可执行类。但是Runnable没有返回结果，也不能抛出异常。</p><p>Callable接口如何和Thread类联系上？</p><ul><li>通过Runnable接口的实现类<code>FutureTask&lt;T&gt;( Callable )</code></li></ul><p>线程用法如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">new Thread(new Runnable() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void run() {</span></span>
<span class="line"><span style="color:#e1e4e8;">		// </span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}).start();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">new Thread(new Runnable() {</span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public void run() {</span></span>
<span class="line"><span style="color:#24292e;">		// </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}).start();</span></span></code></pre></div><p>FutureTask是Runnable接口的实现类，且FutureTask 有参函数 <code>FutureTask( Callable )</code></p><p>所以，线程可以这么用：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">FutureTask&lt;String&gt; stringFutureTask = new FutureTask&lt;&gt;(() -&gt; &quot;haha&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">new Thread(stringFutureTask).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">String s = stringFutureTask.get();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">FutureTask&lt;String&gt; stringFutureTask = new FutureTask&lt;&gt;(() -&gt; &quot;haha&quot;);</span></span>
<span class="line"><span style="color:#24292e;">new Thread(stringFutureTask).start();</span></span>
<span class="line"><span style="color:#24292e;">String s = stringFutureTask.get();</span></span></code></pre></div><h2 id="异步回调" tabindex="-1">异步回调 <a class="header-anchor" href="#异步回调" aria-label="Permalink to &quot;异步回调&quot;">​</a></h2><blockquote><p>这里主要学习一个类</p></blockquote><p>没有返回值的异步回调</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 发起一个异步请求</span></span>
<span class="line"><span style="color:#e1e4e8;">CompletableFuture&lt;Void&gt; completableFuture = CompletableFuture.runAsync(() -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    System.out.println(&quot;runAsync&quot;);;</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">System.out.println(&quot;111&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">// 异步请求的结果</span></span>
<span class="line"><span style="color:#e1e4e8;">completableFuture.get();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 发起一个异步请求</span></span>
<span class="line"><span style="color:#24292e;">CompletableFuture&lt;Void&gt; completableFuture = CompletableFuture.runAsync(() -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    System.out.println(&quot;runAsync&quot;);;</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(&quot;111&quot;);</span></span>
<span class="line"><span style="color:#24292e;">// 异步请求的结果</span></span>
<span class="line"><span style="color:#24292e;">completableFuture.get();</span></span></code></pre></div><p>有返回值的异步回调</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 发起一个异步请求</span></span>
<span class="line"><span style="color:#e1e4e8;">CompletableFuture&lt;String&gt; completableFuture = CompletableFuture.supplyAsync(() -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    System.out.println(&quot;hi&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    return &quot;haha&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span>
<span class="line"><span style="color:#e1e4e8;">System.out.println(&quot;111&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">// 异步请求的结果</span></span>
<span class="line"><span style="color:#e1e4e8;">completableFuture.whenComplete((t, u) -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    System.out.println(t); // t是成功的结果</span></span>
<span class="line"><span style="color:#e1e4e8;">    System.out.println(u); // u是异常信息</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 发起一个异步请求</span></span>
<span class="line"><span style="color:#24292e;">CompletableFuture&lt;String&gt; completableFuture = CompletableFuture.supplyAsync(() -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    System.out.println(&quot;hi&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    return &quot;haha&quot;;</span></span>
<span class="line"><span style="color:#24292e;">});</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(&quot;111&quot;);</span></span>
<span class="line"><span style="color:#24292e;">// 异步请求的结果</span></span>
<span class="line"><span style="color:#24292e;">completableFuture.whenComplete((t, u) -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    System.out.println(t); // t是成功的结果</span></span>
<span class="line"><span style="color:#24292e;">    System.out.println(u); // u是异常信息</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><h2 id="彻底玩转单例模式" tabindex="-1">彻底玩转单例模式 <a class="header-anchor" href="#彻底玩转单例模式" aria-label="Permalink to &quot;彻底玩转单例模式&quot;">​</a></h2><p>饿汉式：假设类中有许多属性，容易占内存。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Hungry {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private Hungry() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    private final static Hungry HUNGRY = new Hungry();</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static Hungry getInstance() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return HUNGRY;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Hungry {</span></span>
<span class="line"><span style="color:#24292e;">    private Hungry() {</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    private final static Hungry HUNGRY = new Hungry();</span></span>
<span class="line"><span style="color:#24292e;">    public static Hungry getInstance() {</span></span>
<span class="line"><span style="color:#24292e;">        return HUNGRY;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>懒汉式：并发下有问题</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Lazy {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private Lazy() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    private static Lazy LAZY;</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static Lazy getInstance() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (LAZY == null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            LAZY = new Lazy();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        return LAZY;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Lazy {</span></span>
<span class="line"><span style="color:#24292e;">    private Lazy() {</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    private static Lazy LAZY;</span></span>
<span class="line"><span style="color:#24292e;">    public static Lazy getInstance() {</span></span>
<span class="line"><span style="color:#24292e;">        if (LAZY == null) {</span></span>
<span class="line"><span style="color:#24292e;">            LAZY = new Lazy();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return LAZY;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>DCL懒汉式：双重锁，并发下没有问题</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class Lazy {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private Lazy() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    private volatile static Lazy LAZY;</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static Lazy getInstance() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (LAZY == null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            synchronized (Lazy.class) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (LAZY == null) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    LAZY = new Lazy(); // 不是一个原子操作，所以需要在属性前加 volatile</span></span>
<span class="line"><span style="color:#e1e4e8;">                    /**</span></span>
<span class="line"><span style="color:#e1e4e8;">                     * 为什么不是原子操作，底层会被编译为：</span></span>
<span class="line"><span style="color:#e1e4e8;">                     * 1. 分配内存空间</span></span>
<span class="line"><span style="color:#e1e4e8;">                     * 2. 执行构造方法，初始化对象</span></span>
<span class="line"><span style="color:#e1e4e8;">                     * 3. 把这个对象指向这个空间</span></span>
<span class="line"><span style="color:#e1e4e8;">                     * 正常是123，如果操作 132 多线程是容易出错。因此要禁止指令重拍，加volatile关键字</span></span>
<span class="line"><span style="color:#e1e4e8;">                     */</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        return LAZY;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class Lazy {</span></span>
<span class="line"><span style="color:#24292e;">    private Lazy() {</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    private volatile static Lazy LAZY;</span></span>
<span class="line"><span style="color:#24292e;">    public static Lazy getInstance() {</span></span>
<span class="line"><span style="color:#24292e;">        if (LAZY == null) {</span></span>
<span class="line"><span style="color:#24292e;">            synchronized (Lazy.class) {</span></span>
<span class="line"><span style="color:#24292e;">                if (LAZY == null) {</span></span>
<span class="line"><span style="color:#24292e;">                    LAZY = new Lazy(); // 不是一个原子操作，所以需要在属性前加 volatile</span></span>
<span class="line"><span style="color:#24292e;">                    /**</span></span>
<span class="line"><span style="color:#24292e;">                     * 为什么不是原子操作，底层会被编译为：</span></span>
<span class="line"><span style="color:#24292e;">                     * 1. 分配内存空间</span></span>
<span class="line"><span style="color:#24292e;">                     * 2. 执行构造方法，初始化对象</span></span>
<span class="line"><span style="color:#24292e;">                     * 3. 把这个对象指向这个空间</span></span>
<span class="line"><span style="color:#24292e;">                     * 正常是123，如果操作 132 多线程是容易出错。因此要禁止指令重拍，加volatile关键字</span></span>
<span class="line"><span style="color:#24292e;">                     */</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return LAZY;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>但是单例模式不安全（反射可以破解，但是反射不能破解枚举类型）</p><h2 id="cas" tabindex="-1">CAS <a class="header-anchor" href="#cas" aria-label="Permalink to &quot;CAS&quot;">​</a></h2><blockquote><p>java没办法操作内存，但是java可以调用 c++, 通过c++操作内存。即native方法</p></blockquote><p>CAS：compare and set，比较当前工作内存中的值和主内存中的值，如果是期望值，则操作！如果不是期望值，则一致循环（自旋锁）！</p><p>缺点：</p><ol><li>循环会耗时</li><li>一次性只能保证一个共享变量的原子性</li><li>ABA问题：线程1将A-&gt;B-&gt;A，但是线程2并不知道A改变过！</li></ol><p>解决ABA问题：（原子操作+版本号/时间戳）</p><ul><li>可以去搜<code>AtomicStampedReference</code>类的原理和使用。</li></ul><p>AtomicInteger可以原子操作，就是使用了CAS，看下面代码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// CAS操作如下 </span></span>
<span class="line"><span style="color:#e1e4e8;">AtomicInteger atomicInteger = new AtomicInteger();</span></span>
<span class="line"><span style="color:#e1e4e8;">atomicInteger.getAndIncrement(); // +1</span></span>
<span class="line"><span style="color:#e1e4e8;">System.out.println(atomicInteger.get());</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// getAndIncrement() 的源代码如下:</span></span>
<span class="line"><span style="color:#e1e4e8;">// 这也是比较并交换的源码：</span></span>
<span class="line"><span style="color:#e1e4e8;">public final int getAndAddInt(Object o, long offset, int delta) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int v;</span></span>
<span class="line"><span style="color:#e1e4e8;">    do {</span></span>
<span class="line"><span style="color:#e1e4e8;">    	v = getIntVolatile(o, offset);</span></span>
<span class="line"><span style="color:#e1e4e8;">    } while (!weakCompareAndSetInt(o, offset, v, v + delta));</span></span>
<span class="line"><span style="color:#e1e4e8;">    return v;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// CAS操作如下 </span></span>
<span class="line"><span style="color:#24292e;">AtomicInteger atomicInteger = new AtomicInteger();</span></span>
<span class="line"><span style="color:#24292e;">atomicInteger.getAndIncrement(); // +1</span></span>
<span class="line"><span style="color:#24292e;">System.out.println(atomicInteger.get());</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// getAndIncrement() 的源代码如下:</span></span>
<span class="line"><span style="color:#24292e;">// 这也是比较并交换的源码：</span></span>
<span class="line"><span style="color:#24292e;">public final int getAndAddInt(Object o, long offset, int delta) {</span></span>
<span class="line"><span style="color:#24292e;">    int v;</span></span>
<span class="line"><span style="color:#24292e;">    do {</span></span>
<span class="line"><span style="color:#24292e;">    	v = getIntVolatile(o, offset);</span></span>
<span class="line"><span style="color:#24292e;">    } while (!weakCompareAndSetInt(o, offset, v, v + delta));</span></span>
<span class="line"><span style="color:#24292e;">    return v;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="各种锁的理解" tabindex="-1">各种锁的理解 <a class="header-anchor" href="#各种锁的理解" aria-label="Permalink to &quot;各种锁的理解&quot;">​</a></h2><h3 id="公平锁、非公平锁" tabindex="-1">公平锁、非公平锁 <a class="header-anchor" href="#公平锁、非公平锁" aria-label="Permalink to &quot;公平锁、非公平锁&quot;">​</a></h3><p>公平锁：非常公平，不可以插队！</p><p>非公平锁：不公平，可以插队！（像超市小商品优先结算）</p><h3 id="可重入锁" tabindex="-1">可重入锁 <a class="header-anchor" href="#可重入锁" aria-label="Permalink to &quot;可重入锁&quot;">​</a></h3><p>又叫递归锁（嵌套锁）</p><p>以下是synchronized版，也有lock版</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Test {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Phone phone = new Phone();</span></span>
<span class="line"><span style="color:#e1e4e8;">        new Thread(() -&gt; phone.sms(), &quot;A&quot;).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">        new Thread(() -&gt; phone.sms(), &quot;B&quot;).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Phone {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public synchronized void sms() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(Thread.currentThread().getName() + &quot;: sms&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        call();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    public synchronized void call() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(Thread.currentThread().getName() + &quot;: call&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Test {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        Phone phone = new Phone();</span></span>
<span class="line"><span style="color:#24292e;">        new Thread(() -&gt; phone.sms(), &quot;A&quot;).start();</span></span>
<span class="line"><span style="color:#24292e;">        new Thread(() -&gt; phone.sms(), &quot;B&quot;).start();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class Phone {</span></span>
<span class="line"><span style="color:#24292e;">    public synchronized void sms() {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(Thread.currentThread().getName() + &quot;: sms&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        call();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    public synchronized void call() {</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(Thread.currentThread().getName() + &quot;: call&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="自旋锁" tabindex="-1">自旋锁 <a class="header-anchor" href="#自旋锁" aria-label="Permalink to &quot;自旋锁&quot;">​</a></h3><p>创建一个锁（里面用到了自旋锁，自旋锁是一个循环的方法）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">class SpinlockDemo {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 默认值是null</span></span>
<span class="line"><span style="color:#e1e4e8;">    AtomicReference&lt;Thread&gt; atomic = new AtomicReference&lt;&gt;();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 加锁</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void myLock() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Thread thread = Thread.currentThread();</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(thread.getName() + &quot;-&gt; mylock&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 自旋锁</span></span>
<span class="line"><span style="color:#e1e4e8;">        while (!atomic.compareAndSet(null, thread)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // 解锁</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void myUnLock() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        Thread thread = Thread.currentThread();</span></span>
<span class="line"><span style="color:#e1e4e8;">        System.out.println(thread.getName() + &quot;-&gt; myUnLock&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        atomic.compareAndSet(thread, null);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">class SpinlockDemo {</span></span>
<span class="line"><span style="color:#24292e;">    // 默认值是null</span></span>
<span class="line"><span style="color:#24292e;">    AtomicReference&lt;Thread&gt; atomic = new AtomicReference&lt;&gt;();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 加锁</span></span>
<span class="line"><span style="color:#24292e;">    public void myLock() {</span></span>
<span class="line"><span style="color:#24292e;">        Thread thread = Thread.currentThread();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(thread.getName() + &quot;-&gt; mylock&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        // 自旋锁</span></span>
<span class="line"><span style="color:#24292e;">        while (!atomic.compareAndSet(null, thread)) {</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // 解锁</span></span>
<span class="line"><span style="color:#24292e;">    public void myUnLock() {</span></span>
<span class="line"><span style="color:#24292e;">        Thread thread = Thread.currentThread();</span></span>
<span class="line"><span style="color:#24292e;">        System.out.println(thread.getName() + &quot;-&gt; myUnLock&quot;);</span></span>
<span class="line"><span style="color:#24292e;">        atomic.compareAndSet(thread, null);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>测试：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Test {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span style="color:#e1e4e8;">        SpinlockDemo lock = new SpinlockDemo();</span></span>
<span class="line"><span style="color:#e1e4e8;">        new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">            lock.myLock();</span></span>
<span class="line"><span style="color:#e1e4e8;">            try {</span></span>
<span class="line"><span style="color:#e1e4e8;">                TimeUnit.SECONDS.sleep(3);</span></span>
<span class="line"><span style="color:#e1e4e8;">            } catch (InterruptedException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            } finally {</span></span>
<span class="line"><span style="color:#e1e4e8;">                lock.myUnLock();</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }, &quot;T1&quot;).start();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        TimeUnit.SECONDS.sleep(1);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">            lock.myLock();</span></span>
<span class="line"><span style="color:#e1e4e8;">            try {</span></span>
<span class="line"><span style="color:#e1e4e8;">                TimeUnit.SECONDS.sleep(1);</span></span>
<span class="line"><span style="color:#e1e4e8;">            } catch (InterruptedException e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                e.printStackTrace();</span></span>
<span class="line"><span style="color:#e1e4e8;">            } finally {</span></span>
<span class="line"><span style="color:#e1e4e8;">                lock.myUnLock();</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }, &quot;T2&quot;).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Test {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) throws InterruptedException {</span></span>
<span class="line"><span style="color:#24292e;">        SpinlockDemo lock = new SpinlockDemo();</span></span>
<span class="line"><span style="color:#24292e;">        new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">            lock.myLock();</span></span>
<span class="line"><span style="color:#24292e;">            try {</span></span>
<span class="line"><span style="color:#24292e;">                TimeUnit.SECONDS.sleep(3);</span></span>
<span class="line"><span style="color:#24292e;">            } catch (InterruptedException e) {</span></span>
<span class="line"><span style="color:#24292e;">                e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            } finally {</span></span>
<span class="line"><span style="color:#24292e;">                lock.myUnLock();</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }, &quot;T1&quot;).start();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        TimeUnit.SECONDS.sleep(1);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        new Thread(() -&gt; {</span></span>
<span class="line"><span style="color:#24292e;">            lock.myLock();</span></span>
<span class="line"><span style="color:#24292e;">            try {</span></span>
<span class="line"><span style="color:#24292e;">                TimeUnit.SECONDS.sleep(1);</span></span>
<span class="line"><span style="color:#24292e;">            } catch (InterruptedException e) {</span></span>
<span class="line"><span style="color:#24292e;">                e.printStackTrace();</span></span>
<span class="line"><span style="color:#24292e;">            } finally {</span></span>
<span class="line"><span style="color:#24292e;">                lock.myUnLock();</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }, &quot;T2&quot;).start();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="死锁排查" tabindex="-1">死锁排查 <a class="header-anchor" href="#死锁排查" aria-label="Permalink to &quot;死锁排查&quot;">​</a></h3><p>死锁代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">public class Test {</span></span>
<span class="line"><span style="color:#e1e4e8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        new Thread(new MyThread(&quot;A&quot;, &quot;B&quot;), &quot;T1&quot;).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">        new Thread(new MyThread(&quot;B&quot;, &quot;A&quot;), &quot;T2&quot;).start();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class MyThread implements Runnable {</span></span>
<span class="line"><span style="color:#e1e4e8;">    private String lockA;</span></span>
<span class="line"><span style="color:#e1e4e8;">    private String lockB;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    public MyThread(String lockA, String lockB) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.lockA = lockA;</span></span>
<span class="line"><span style="color:#e1e4e8;">        this.lockB = lockB;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    @SneakyThrows</span></span>
<span class="line"><span style="color:#e1e4e8;">    @Override</span></span>
<span class="line"><span style="color:#e1e4e8;">    public void run() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        synchronized (lockA) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            System.out.println(Thread.currentThread().getName() + lockA);</span></span>
<span class="line"><span style="color:#e1e4e8;">            TimeUnit.SECONDS.sleep(2);</span></span>
<span class="line"><span style="color:#e1e4e8;">            synchronized (lockB) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                System.out.println(Thread.currentThread().getName() + lockB);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">public class Test {</span></span>
<span class="line"><span style="color:#24292e;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="color:#24292e;">        new Thread(new MyThread(&quot;A&quot;, &quot;B&quot;), &quot;T1&quot;).start();</span></span>
<span class="line"><span style="color:#24292e;">        new Thread(new MyThread(&quot;B&quot;, &quot;A&quot;), &quot;T2&quot;).start();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class MyThread implements Runnable {</span></span>
<span class="line"><span style="color:#24292e;">    private String lockA;</span></span>
<span class="line"><span style="color:#24292e;">    private String lockB;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    public MyThread(String lockA, String lockB) {</span></span>
<span class="line"><span style="color:#24292e;">        this.lockA = lockA;</span></span>
<span class="line"><span style="color:#24292e;">        this.lockB = lockB;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    @SneakyThrows</span></span>
<span class="line"><span style="color:#24292e;">    @Override</span></span>
<span class="line"><span style="color:#24292e;">    public void run() {</span></span>
<span class="line"><span style="color:#24292e;">        synchronized (lockA) {</span></span>
<span class="line"><span style="color:#24292e;">            System.out.println(Thread.currentThread().getName() + lockA);</span></span>
<span class="line"><span style="color:#24292e;">            TimeUnit.SECONDS.sleep(2);</span></span>
<span class="line"><span style="color:#24292e;">            synchronized (lockB) {</span></span>
<span class="line"><span style="color:#24292e;">                System.out.println(Thread.currentThread().getName() + lockB);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>死锁解决：</p><ol><li>打开cmd窗口，输入jps -l，查看代码进程号</li><li>再输入<code>jstack 进程号</code>查看堆栈信息，发现有死锁。</li></ol>`,129),o=[p];function t(c,i,r,y,d,u){return n(),a("div",null,o)}const m=s(l,[["render",t]]);export{g as __pageData,m as default};
