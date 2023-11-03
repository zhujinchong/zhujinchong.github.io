import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.2516552c.js";const m=JSON.parse('{"title":"SQLAlchemy","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Python/02SQLAlchemy.md","filePath":"articles/Python/02SQLAlchemy.md","lastUpdated":null}'),l={name:"articles/Python/02SQLAlchemy.md"},p=e(`<h1 id="sqlalchemy" tabindex="-1">SQLAlchemy <a class="header-anchor" href="#sqlalchemy" aria-label="Permalink to &quot;SQLAlchemy&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>SQLAlchemy 是一个功能强大的Python ORM 工具包</p><p>概念：</p><p>engine：驱动引擎。作用：建立数据库的连接。 Session: 会话。作用：将操作提交/回退，类似于事务。所有对象的载入和保存都需要通过session对象 。 declarative_base: 基模型。作用：所有子类，都对应一张数据表。</p><p>一般工程结构：</p><p>connect.py :底层的数据库连接，定义engine，定义session，定义declarative_base models.py :定义的模型 example_test.py :业务的具体使用</p><p>安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install SQLalchemy</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install SQLalchemy</span></span></code></pre></div><h2 id="建立连接" tabindex="-1">建立连接 <a class="header-anchor" href="#建立连接" aria-label="Permalink to &quot;建立连接&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> sqlalchemy </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> create_engine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果是sqlite</span></span>
<span class="line"><span style="color:#6A737D;"># sqlite:///相对路径/xxx.db</span></span>
<span class="line"><span style="color:#E1E4E8;">engine </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> create_engine(</span><span style="color:#9ECBFF;">&quot;mysql://user:password@hostname/dbname?charset=utf8&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                       </span><span style="color:#FFAB70;">echo</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">True</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                       </span><span style="color:#FFAB70;">pool_size</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                       </span><span style="color:#FFAB70;">pool_recycle</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">60</span><span style="color:#F97583;">*</span><span style="color:#79B8FF;">30</span></span>
<span class="line"><span style="color:#E1E4E8;">                       )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> sqlalchemy </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> create_engine</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 如果是sqlite</span></span>
<span class="line"><span style="color:#6A737D;"># sqlite:///相对路径/xxx.db</span></span>
<span class="line"><span style="color:#24292E;">engine </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> create_engine(</span><span style="color:#032F62;">&quot;mysql://user:password@hostname/dbname?charset=utf8&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                       </span><span style="color:#E36209;">echo</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">True</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                       </span><span style="color:#E36209;">pool_size</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">8</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                       </span><span style="color:#E36209;">pool_recycle</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">60</span><span style="color:#D73A49;">*</span><span style="color:#005CC5;">30</span></span>
<span class="line"><span style="color:#24292E;">                       )</span></span></code></pre></div><p>echo: 当设置为True时会将orm语句转化为sql语句打印，一般debug的时候可用 pool_size: 连接池的大小，默认为5个，设置为0时表示连接无限制 pool_recycle: 设置时间以限制数据库多久没连接自动断开</p><h2 id="模型" tabindex="-1">模型 <a class="header-anchor" href="#模型" aria-label="Permalink to &quot;模型&quot;">​</a></h2><p>所有基于Base的类，sqlalchemy会将它和一个数据表关联起来。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from sqlalchemy.ext.declarative import declarative_base</span></span>
<span class="line"><span style="color:#e1e4e8;">Base = declarative_base()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">class Users(Base):</span></span>
<span class="line"><span style="color:#e1e4e8;">    __tablename__ = &quot;users&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    id = Column(Integer, primary_key=True)</span></span>
<span class="line"><span style="color:#e1e4e8;">    name = Column(String(64), unique=True)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from sqlalchemy.ext.declarative import declarative_base</span></span>
<span class="line"><span style="color:#24292e;">Base = declarative_base()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">class Users(Base):</span></span>
<span class="line"><span style="color:#24292e;">    __tablename__ = &quot;users&quot;</span></span>
<span class="line"><span style="color:#24292e;">    id = Column(Integer, primary_key=True)</span></span>
<span class="line"><span style="color:#24292e;">    name = Column(String(64), unique=True)</span></span></code></pre></div><p>创建所有表：如果存在，则不动，数据不变；不存在，则新建。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Base.metadata.create_all(bind=engine)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Base.metadata.create_all(bind=engine)</span></span></code></pre></div><p>删除所有表</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Base.metadata.drop_all(bind=engine)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Base.metadata.drop_all(bind=engine)</span></span></code></pre></div><h2 id="增、删、查、改" tabindex="-1">增、删、查、改 <a class="header-anchor" href="#增、删、查、改" aria-label="Permalink to &quot;增、删、查、改&quot;">​</a></h2><p>关于会话session，看下一节。</p><p>增</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">add_user = Users(&quot;test&quot;, &quot;test123@qq.com&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">session.add(add_user)</span></span>
<span class="line"><span style="color:#e1e4e8;">session.commit()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">add_user = Users(&quot;test&quot;, &quot;test123@qq.com&quot;)</span></span>
<span class="line"><span style="color:#24292e;">session.add(add_user)</span></span>
<span class="line"><span style="color:#24292e;">session.commit()</span></span></code></pre></div><p>查</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">users </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> session.query(Users).filter_by(</span><span style="color:#FFAB70;">id</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">).all()</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> users:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(item.name)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">users </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> session.query(Users).filter_by(</span><span style="color:#E36209;">id</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">).all()</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> users:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">print</span><span style="color:#24292E;">(item.name)</span></span></code></pre></div><p>删</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">session.query(Users).filter(Users.name == &quot;test&quot;).delete()</span></span>
<span class="line"><span style="color:#e1e4e8;">session.commit()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">session.query(Users).filter(Users.name == &quot;test&quot;).delete()</span></span>
<span class="line"><span style="color:#24292e;">session.commit()</span></span></code></pre></div><h2 id="会话管理" tabindex="-1">会话管理 <a class="header-anchor" href="#会话管理" aria-label="Permalink to &quot;会话管理&quot;">​</a></h2><p>上面写的不规范，规范的是：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">session = SessionLocal()</span></span>
<span class="line"><span style="color:#e1e4e8;">try:</span></span>
<span class="line"><span style="color:#e1e4e8;">	# xxx</span></span>
<span class="line"><span style="color:#e1e4e8;">	session.commit()</span></span>
<span class="line"><span style="color:#e1e4e8;">except:</span></span>
<span class="line"><span style="color:#e1e4e8;">	session.rollback()</span></span>
<span class="line"><span style="color:#e1e4e8;">	raise</span></span>
<span class="line"><span style="color:#e1e4e8;">finally:</span></span>
<span class="line"><span style="color:#e1e4e8;">	session.close()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">session = SessionLocal()</span></span>
<span class="line"><span style="color:#24292e;">try:</span></span>
<span class="line"><span style="color:#24292e;">	# xxx</span></span>
<span class="line"><span style="color:#24292e;">	session.commit()</span></span>
<span class="line"><span style="color:#24292e;">except:</span></span>
<span class="line"><span style="color:#24292e;">	session.rollback()</span></span>
<span class="line"><span style="color:#24292e;">	raise</span></span>
<span class="line"><span style="color:#24292e;">finally:</span></span>
<span class="line"><span style="color:#24292e;">	session.close()</span></span></code></pre></div><p>sqlalchemy中使用session用于创建程序和数据库之间的会话，所有对象的载入和保存都需要通过session对象 。</p><p>定义：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from sqlalchemy.orm import sessionmaker</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 创建session</span></span>
<span class="line"><span style="color:#e1e4e8;">DbSession = sessionmaker(bind=engine)</span></span>
<span class="line"><span style="color:#e1e4e8;">session = DbSession()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from sqlalchemy.orm import sessionmaker</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 创建session</span></span>
<span class="line"><span style="color:#24292e;">DbSession = sessionmaker(bind=engine)</span></span>
<span class="line"><span style="color:#24292e;">session = DbSession()</span></span></code></pre></div><p>工程化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from functools import wraps</span></span>
<span class="line"><span style="color:#e1e4e8;">from contextlib import contextmanager</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># @contextmanager是一个上下文管理器，这样就可以将session_scope变成和with一样的功能。</span></span>
<span class="line"><span style="color:#e1e4e8;"># yield之前代码先执行（打开文件）；yield之后代码后执行（关闭文件）</span></span>
<span class="line"><span style="color:#e1e4e8;">@contextmanager</span></span>
<span class="line"><span style="color:#e1e4e8;">def session_scope():</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;&quot;&quot;上下文管理器用于自动获取 Session, 避免错误&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    session = SessionLocal()</span></span>
<span class="line"><span style="color:#e1e4e8;">    try:</span></span>
<span class="line"><span style="color:#e1e4e8;">        yield session</span></span>
<span class="line"><span style="color:#e1e4e8;">        session.commit()</span></span>
<span class="line"><span style="color:#e1e4e8;">    except:</span></span>
<span class="line"><span style="color:#e1e4e8;">        session.rollback()</span></span>
<span class="line"><span style="color:#e1e4e8;">        raise</span></span>
<span class="line"><span style="color:#e1e4e8;">    finally:</span></span>
<span class="line"><span style="color:#e1e4e8;">        session.close()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># @wraps(f)定义了装饰器，以后就可以用@with_session在函数上。</span></span>
<span class="line"><span style="color:#e1e4e8;">def with_session(f):</span></span>
<span class="line"><span style="color:#e1e4e8;">    @wraps(f)</span></span>
<span class="line"><span style="color:#e1e4e8;">    def wrapper(*args, **kwargs):</span></span>
<span class="line"><span style="color:#e1e4e8;">        with session_scope() as session:</span></span>
<span class="line"><span style="color:#e1e4e8;">            try:</span></span>
<span class="line"><span style="color:#e1e4e8;">                result = f(session, *args, **kwargs)</span></span>
<span class="line"><span style="color:#e1e4e8;">                session.commit()</span></span>
<span class="line"><span style="color:#e1e4e8;">                return result</span></span>
<span class="line"><span style="color:#e1e4e8;">            except:</span></span>
<span class="line"><span style="color:#e1e4e8;">                session.rollback()</span></span>
<span class="line"><span style="color:#e1e4e8;">                raise</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    return wrapper</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from functools import wraps</span></span>
<span class="line"><span style="color:#24292e;">from contextlib import contextmanager</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># @contextmanager是一个上下文管理器，这样就可以将session_scope变成和with一样的功能。</span></span>
<span class="line"><span style="color:#24292e;"># yield之前代码先执行（打开文件）；yield之后代码后执行（关闭文件）</span></span>
<span class="line"><span style="color:#24292e;">@contextmanager</span></span>
<span class="line"><span style="color:#24292e;">def session_scope():</span></span>
<span class="line"><span style="color:#24292e;">    &quot;&quot;&quot;上下文管理器用于自动获取 Session, 避免错误&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;">    session = SessionLocal()</span></span>
<span class="line"><span style="color:#24292e;">    try:</span></span>
<span class="line"><span style="color:#24292e;">        yield session</span></span>
<span class="line"><span style="color:#24292e;">        session.commit()</span></span>
<span class="line"><span style="color:#24292e;">    except:</span></span>
<span class="line"><span style="color:#24292e;">        session.rollback()</span></span>
<span class="line"><span style="color:#24292e;">        raise</span></span>
<span class="line"><span style="color:#24292e;">    finally:</span></span>
<span class="line"><span style="color:#24292e;">        session.close()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># @wraps(f)定义了装饰器，以后就可以用@with_session在函数上。</span></span>
<span class="line"><span style="color:#24292e;">def with_session(f):</span></span>
<span class="line"><span style="color:#24292e;">    @wraps(f)</span></span>
<span class="line"><span style="color:#24292e;">    def wrapper(*args, **kwargs):</span></span>
<span class="line"><span style="color:#24292e;">        with session_scope() as session:</span></span>
<span class="line"><span style="color:#24292e;">            try:</span></span>
<span class="line"><span style="color:#24292e;">                result = f(session, *args, **kwargs)</span></span>
<span class="line"><span style="color:#24292e;">                session.commit()</span></span>
<span class="line"><span style="color:#24292e;">                return result</span></span>
<span class="line"><span style="color:#24292e;">            except:</span></span>
<span class="line"><span style="color:#24292e;">                session.rollback()</span></span>
<span class="line"><span style="color:#24292e;">                raise</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    return wrapper</span></span></code></pre></div><p>示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">@with_session</span></span>
<span class="line"><span style="color:#e1e4e8;">def add_user(session, bean: User):</span></span>
<span class="line"><span style="color:#e1e4e8;">    session.add(bean)</span></span>
<span class="line"><span style="color:#e1e4e8;">    return True</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">@with_session</span></span>
<span class="line"><span style="color:#24292e;">def add_user(session, bean: User):</span></span>
<span class="line"><span style="color:#24292e;">    session.add(bean)</span></span>
<span class="line"><span style="color:#24292e;">    return True</span></span></code></pre></div>`,37),o=[p];function c(t,i,r,y,d,h){return a(),n("div",null,o)}const g=s(l,[["render",c]]);export{m as __pageData,g as default};
