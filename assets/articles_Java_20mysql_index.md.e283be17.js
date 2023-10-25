import{_ as e,o as l,c as a,Q as s}from"./chunks/framework.2516552c.js";const h=JSON.parse('{"title":"1  MySQL安装","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Java/20mysql/index.md","filePath":"articles/Java/20mysql/index.md","lastUpdated":null}'),o={name:"articles/Java/20mysql/index.md"},n=s(`<h1 id="_1-mysql安装" tabindex="-1">1 MySQL安装 <a class="header-anchor" href="#_1-mysql安装" aria-label="Permalink to &quot;1  MySQL安装&quot;">​</a></h1><p>MySQL安装</p><ol><li>下载并运行”mysql-5.5.40-win64.msi“；</li><li>选择安装类型，“Custom”用户自定义；</li><li>修改安装路径，“d:\\MySQL\\MySQL Server 5.0”；</li><li>Install</li><li>选择“进入MySQL配置向导”，并单击“Finish”；</li><li>选择配置方式，“Detailed Configuration”手动配置；</li><li>选择服务器类型，“Developer Machine”开发者电脑，占用内存少；</li><li>选择数据库用途，“Multifunctional Database”多用途数据库；</li><li>选择网站并发连接数，“Manual Setting”手动设置20个；</li><li>选择启用TCP/IP连接；选择标准模式（不允许有语法错误）；</li><li>选择编码格式，“Manual Select”手动选择utf8；</li><li>选择作为windows服务；选择自动加入windows路径；</li><li>设置root用户密码，设成&quot;root&quot;；是否远程访问，随意；创建匿名用户，否；</li><li>Execute，四个对号，说明安装成功；</li><li>否则卸载重装</li></ol><p>MySQL服务命令启动与关闭：</p><ol><li>win命令窗口启动服务：<code>net start mysql</code></li><li>win命令窗口关闭服务：<code>net stop mysql</code></li></ol><p>登录MySQL:</p><ol><li>在window命令窗口，输入<code>mysql -uroot -proot</code></li><li>远程连接：<code>mysql -h127.0.0.1 -uroot -proot</code></li></ol><p>卸载：</p><ol><li>停止MySQL服务；</li><li>卸载MySQL；</li><li>删除安装目录下所有文件；</li><li>删除c盘ProgramDate目录中MySQL目录（把隐藏文件显示出来）</li></ol><p>MySQL安装目录：</p><ol><li><code>bin</code> 可执行文件</li><li><code>data</code> 日志、数据</li><li><code>my.ini</code> 配置文件</li></ol><p>MySQL数据目录<code>C:ProgramData\\MySQL\\MySQLServer 5\\data</code>:</p><ul><li>里面的3个文件夹是自带的数据库</li></ul><p>安装SQLyog图形客户端：</p><ol><li>直接安装就行</li><li>安装完成后：新建(名字随便)-&gt;设置主机、用户名、密码、端口(其他不用)-&gt;连接</li><li>输入SQL命令，选中一行，执行，OK.</li></ol><h1 id="_2-mysql基本语法" tabindex="-1">2 MySQL基本语法 <a class="header-anchor" href="#_2-mysql基本语法" aria-label="Permalink to &quot;2  MySQL基本语法&quot;">​</a></h1><p>SQL是标准，各个数据库语言都有各自的定义。</p><p>SQL语句分类：</p><ol><li>DDL数据定义语言：库、表的增删改查</li><li>DML数据操纵语言：字段的 增删改</li><li>DQL数据查询语言：查询表</li><li>DCL数据控制语言：用户权限设置 GRANT/REVOKE</li></ol><p>MySQL语法：</p><ol><li>每条语句分好结尾</li><li>不区分大小写</li><li>三种注释：<code>--空格</code>单行注释，<code>/**/</code>多行注释，<code>#</code>mysql特有注释</li></ol><h2 id="_2-1-ddl语句" tabindex="-1">2.1 DDL语句 <a class="header-anchor" href="#_2-1-ddl语句" aria-label="Permalink to &quot;2.1  DDL语句&quot;">​</a></h2><p><strong>定义数据库：</strong> 查询、创建、修改、删除</p><p>查询数据库</p><ol><li>show databases; 所有</li><li>show create database test; 查询某个数据库定义信息</li></ol><p>创建数据库</p><ol><li>create database db1;</li><li>create database if not exists db2;</li><li>create database db3 default character set gbk; 设置编码</li></ol><p>修改数据库</p><ol><li>alter database db3 character set utf8;</li></ol><p>删除数据库</p><ol><li>drop database db2;</li></ol><p>使用数据库</p><ul><li>use db1;</li></ul><p>查看正在使用的数据库</p><ul><li>select database();</li></ul><p><strong>定义表：</strong></p><p>创建表</p><ul><li><code>create table table_name(字段名1 类型, 字段名2 类型);</code><ul><li>字段有：int/double/varchar/date/等</li></ul></li><li><code>create table 新表名 like 旧表名</code></li></ul><p>查看表</p><ul><li>show tables; 所有</li><li>desc table_name; 查看表结构</li><li>show create table table_name; 查看创建表的SQL语句</li></ul><p>删除表：</p><ul><li><code>drop table table_name</code>;</li><li><code>drop table if exists table_name</code>;</li></ul><p>修改表：</p><ul><li><code>alter table 表明 add 列名 类型;</code></li><li><code>alter table 表明 modify 列名 新的类型;</code></li><li><code>alter table 表明 change 列名 新的列名 类型;</code></li><li><code>alter table 表明 drop 列名;</code></li><li><code>rename table 表明 to 新表名;</code></li><li><code>alter table 表明 character set 字符集;</code></li></ul><h2 id="_2-2-dml语句" tabindex="-1">2.2 DML语句 <a class="header-anchor" href="#_2-2-dml语句" aria-label="Permalink to &quot;2.2  DML语句&quot;">​</a></h2><p>添加</p><ul><li><code>insert into student values (1, &#39;张三&#39;, 18, null, null);</code></li><li><code>insert into student(id, name) values (2, &#39;李四&#39;)</code></li><li><code>insert into student select * from student2;</code></li><li><code>insert into 表1(列1，列2，) select 列1，列2 from 表2;</code></li></ul><p>修改</p><ol><li><code>update student set score=100 at age=18;</code></li></ol><p>删除</p><ol><li><code>delete from student where age=100;</code> 条件删除</li><li><code>delete from student;</code> 清空表（一条一条删除，速度慢）</li><li><code>truncate table student;</code> 清空表（删除表并创建一个一模一样的空表）</li></ol><h2 id="_2-3-dql语句" tabindex="-1">2.3 DQL语句 <a class="header-anchor" href="#_2-3-dql语句" aria-label="Permalink to &quot;2.3  DQL语句&quot;">​</a></h2><p>简单查询</p><ol><li><code>select distinct 列名 from 表名;</code> 显示不重复的数据</li><li><code>select score+10 from student;</code> 将结果运算</li><li>where语句中的运算符 <ul><li><code>&gt; &lt; &lt;= &gt;= = &lt;&gt; !=</code> 后面两个都是不等于</li><li><code>where score between 80 and 100;</code></li><li><code>where age in(18, 19, 20);</code></li><li>like &#39;张%&#39; 模糊查询%表示任意多个字符，_表示一个字符</li><li>is null</li><li>and or not 逻辑运算符</li></ul></li></ol><p>排序查询</p><ol><li><code>select * from db1 order by score asc;</code> 升序排列</li><li><code>select * from db1 order by score desc;</code> 降序排列</li><li><code>select * from db1 order by score asc, sex desc;</code> 第二排序条件</li></ol><p>聚合查询：max, min, avg, count, sum</p><ol><li><code>select ifnull(id, 0) from student;</code> 如果为null，使用0代替</li><li><code>select count(ifnull(id,0)) from student;</code> 统计数量，不遗漏null</li></ol><p>分组查询</p><ol><li><code>select sex, avg(score) from student group by sex;</code></li><li><code>select sex, avg(score) from student group by sex having avg(score)&gt;60;</code> 分组结果筛选</li></ol><p>分页查询</p><ul><li><code>select * from student limit offset,length;</code> 从第offset行开始的length条数据中查询</li><li><code>select * from student limit 10, 5;</code> 从10-15行的数据中查询</li></ul><h2 id="_2-4-约束-主键-非空" tabindex="-1">2.4 约束(主键/非空) <a class="header-anchor" href="#_2-4-约束-主键-非空" aria-label="Permalink to &quot;2.4  约束(主键/非空)&quot;">​</a></h2><ol><li><p>primary key 主键</p><ul><li><code>alter table stu drop primary key;</code> 删除主键</li><li><code>alter table stu add primary key(id);</code> 添加主键</li><li><code>create table stu(id int primary key AUTO_INCREMENT);</code> 自增长主键</li><li><code>create table stu(...) AUTO_INCREMENT=1000;</code> 从1000开始自增长主键</li></ul></li><li><p>unique 唯一</p><ul><li><code>create table stu(name varchar(20) unique) ;</code> 不能重复，但可以为NULL</li></ul></li><li><p>not null 非空</p><ul><li><code>create table stu(age not null);</code> 不能为空</li></ul></li><li><p>foreign key 外键</p><ul><li>创建外键约束</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">create table employee(</span></span>
<span class="line"><span style="color:#e1e4e8;">id int primary key auto_increment,</span></span>
<span class="line"><span style="color:#e1e4e8;">dep_id int,</span></span>
<span class="line"><span style="color:#e1e4e8;">/*添加dep_id的外键, 外键名字为emp_fk*/</span></span>
<span class="line"><span style="color:#e1e4e8;">constraint emp_fk foreign key(dep_id) references department(id)</span></span>
<span class="line"><span style="color:#e1e4e8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">create table employee(</span></span>
<span class="line"><span style="color:#24292e;">id int primary key auto_increment,</span></span>
<span class="line"><span style="color:#24292e;">dep_id int,</span></span>
<span class="line"><span style="color:#24292e;">/*添加dep_id的外键, 外键名字为emp_fk*/</span></span>
<span class="line"><span style="color:#24292e;">constraint emp_fk foreign key(dep_id) references department(id)</span></span>
<span class="line"><span style="color:#24292e;">);</span></span></code></pre></div><ul><li>\`\`alter table employee add constraint...;\` 和上面一样</li><li><code>alter table employee drop foregin key emp_fk;</code> 删除外键</li></ul></li><li><p>级联操作：在修改、删除主表主键时，需要更新或删除 副表的外键</p><ul><li><code>alter table employee add constraint emp_fk foreign key (dep_id) references department(id) on update cascade on delete cascade;</code> 添加修改、删除级联操作</li></ul></li></ol><h1 id="_3-mysql高级" tabindex="-1">3 MySQL高级 <a class="header-anchor" href="#_3-mysql高级" aria-label="Permalink to &quot;3  MySQL高级&quot;">​</a></h1><h2 id="_3-1-范式" tabindex="-1">3.1 范式 <a class="header-anchor" href="#_3-1-范式" aria-label="Permalink to &quot;3.1  范式&quot;">​</a></h2><p>数据设计规则，称为范式，有六种范式，满足第三范式就可以了。</p><ol><li>1NF：每一列就是一列 ，不能拆分成两列 （原子性）</li><li>2NF：每一列都完全依赖于主键（不产生局部依赖）</li><li>3NF：任何非主列不得传递依赖于主键。（不产生传递依赖）</li></ol><h2 id="_3-2-备份和还原" tabindex="-1">3.2 备份和还原 <a class="header-anchor" href="#_3-2-备份和还原" aria-label="Permalink to &quot;3.2  备份和还原&quot;">​</a></h2><p>命令行：</p><ol><li>备份：<code>mysqldump -uroot -proot 数据库名 &gt; d://test.sql</code></li><li>还原： <ol><li>登录数据库 <code>mysql -uroot -proot</code></li><li>创建数据库<code>create database db1;</code></li><li>使用数据库<code>use db1;</code></li><li>执行文件：<code>source d://test.sql;</code></li></ol></li></ol><p>图形工具SQLyog</p><ol><li>备份：数据库右键-&gt;备份/导出-&gt;转存到SQL-&gt;导出</li><li>还原：root右键-&gt;执行脚本-&gt;选择文件</li></ol><h2 id="_3-3-多表查询" tabindex="-1">3.3 多表查询 <a class="header-anchor" href="#_3-3-多表查询" aria-label="Permalink to &quot;3.3  多表查询&quot;">​</a></h2><p>多表查询</p><ol><li>内连接：隐式内连接、显示内连接</li><li>外连接：左连接、右连接</li></ol><p>笛卡尔积，<code>select * from emp,dept;</code> 导致结果太多，所以要联合查询</p><p>隐式内连接：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">不适用JOIN关键字，使用WHERE指定</span></span>
<span class="line"><span style="color:#e1e4e8;">SELECT * FROM emp, dept WHERE emp.\`dept_id\`=dept.\`id\`;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">不适用JOIN关键字，使用WHERE指定</span></span>
<span class="line"><span style="color:#24292e;">SELECT * FROM emp, dept WHERE emp.\`dept_id\`=dept.\`id\`;</span></span></code></pre></div><p>显示内连接：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">使用 JOIN ... ON 语句</span></span>
<span class="line"><span style="color:#e1e4e8;">SELECT * FROM emp JOIN dept ON emp.\`dept_id\`=dept.\`id\`;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">使用 JOIN ... ON 语句</span></span>
<span class="line"><span style="color:#24292e;">SELECT * FROM emp JOIN dept ON emp.\`dept_id\`=dept.\`id\`;</span></span></code></pre></div><p>左连接</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">使用 LEFT JOIN ... ON</span></span>
<span class="line"><span style="color:#e1e4e8;">SELECT * FROM emp LEFT JOIN dept ON emp.\`dept_id\`=dept.\`id\`;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">使用 LEFT JOIN ... ON</span></span>
<span class="line"><span style="color:#24292e;">SELECT * FROM emp LEFT JOIN dept ON emp.\`dept_id\`=dept.\`id\`;</span></span></code></pre></div><p>右连接</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">SELECT * FROM emp RIGHT JOIN dept ON emp.\`dept_id\`=dept.\`id\`;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">SELECT * FROM emp RIGHT JOIN dept ON emp.\`dept_id\`=dept.\`id\`;</span></span></code></pre></div><p>子查询（嵌套查询）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/* 一个结果 */</span></span>
<span class="line"><span style="color:#e1e4e8;">select * from emp where salary = (select max(salary) from emp);</span></span>
<span class="line"><span style="color:#e1e4e8;">/* 一列结果 */</span></span>
<span class="line"><span style="color:#e1e4e8;">select * from dept where id in (select dept_id from emp where salary &gt; 5000);</span></span>
<span class="line"><span style="color:#e1e4e8;">/* 多行多列 */</span></span>
<span class="line"><span style="color:#e1e4e8;">select * from (子查询) where 条件;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/* 一个结果 */</span></span>
<span class="line"><span style="color:#24292e;">select * from emp where salary = (select max(salary) from emp);</span></span>
<span class="line"><span style="color:#24292e;">/* 一列结果 */</span></span>
<span class="line"><span style="color:#24292e;">select * from dept where id in (select dept_id from emp where salary &gt; 5000);</span></span>
<span class="line"><span style="color:#24292e;">/* 多行多列 */</span></span>
<span class="line"><span style="color:#24292e;">select * from (子查询) where 条件;</span></span></code></pre></div><h2 id="_3-4-事务" tabindex="-1">3.4 事务 <a class="header-anchor" href="#_3-4-事务" aria-label="Permalink to &quot;3.4  事务&quot;">​</a></h2><p>事务执行是一个整体，必须保证所有SQL语句执行成功。如转账，小明账号-500，对方账号+500。</p><p>事务的四大特性：</p><ol><li>原子性：整体，要么成功，要么失败</li><li>一致性：数据库在事务执行前后一致</li><li>隔离性：事务之间互不影响</li><li>持久性：一旦执行成功，数据库永久保存。</li></ol><p>MySQL中操作事务的方式：</p><ol><li>手动提交事务 <ul><li>成功：开启事务-》执行SQL语句-》成功提交事务</li><li>失败：开启事务-》执行SQL语句-》事务的回滚</li></ul></li><li>自动提交事务：每条SQL语句都是一个事务</li><li>设置回滚点 <code>savepoint point_name;</code> 和<code>rollback to point_name;</code></li></ol><p>例，手动提交事务的两种情况：(在win命令窗口)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/* 成功 */</span></span>
<span class="line"><span style="color:#e1e4e8;">start transaction;</span></span>
<span class="line"><span style="color:#e1e4e8;">update db1 set money=money-500 where name=‘小明’;</span></span>
<span class="line"><span style="color:#e1e4e8;">update db1 set money=money+500 where name=&#39;老王&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">commit;</span></span>
<span class="line"><span style="color:#e1e4e8;">/* 失败 */</span></span>
<span class="line"><span style="color:#e1e4e8;">start transaction;</span></span>
<span class="line"><span style="color:#e1e4e8;">update db1 set money=money-500 where name=‘小明’;</span></span>
<span class="line"><span style="color:#e1e4e8;">update db1 set money=money+500 where name=&#39;老王&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">rollback;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/* 成功 */</span></span>
<span class="line"><span style="color:#24292e;">start transaction;</span></span>
<span class="line"><span style="color:#24292e;">update db1 set money=money-500 where name=‘小明’;</span></span>
<span class="line"><span style="color:#24292e;">update db1 set money=money+500 where name=&#39;老王&#39;;</span></span>
<span class="line"><span style="color:#24292e;">commit;</span></span>
<span class="line"><span style="color:#24292e;">/* 失败 */</span></span>
<span class="line"><span style="color:#24292e;">start transaction;</span></span>
<span class="line"><span style="color:#24292e;">update db1 set money=money-500 where name=‘小明’;</span></span>
<span class="line"><span style="color:#24292e;">update db1 set money=money+500 where name=&#39;老王&#39;;</span></span>
<span class="line"><span style="color:#24292e;">rollback;</span></span></code></pre></div><p>并发访问数据库，可能存在的问题：</p><ol><li>脏读：一个事务读取另一个事务尚未提交的数据</li><li>不可重复读：一个事务两次读取的内容不一致（update导致）</li><li>幻读：一个事务两次读取的数量不一致（insert/delete导致）</li></ol><p>为了解决并发问题，MySQL事务有四种隔离级别，级别越高，安全性越高，性能越差：</p><ol><li>read uncommitted：默认</li><li>read committed：避免脏读</li><li>repeatable read: 避免脏读、不可重复读</li><li>serializable: 串行化，都可以避免</li></ol><p>设置事务隔离级别：</p><ol><li>查看级别<code>select @@tx_isolation;</code></li><li>设置级别<code>set global transaction isolation level read committed;</code></li><li>设置后需要重启数据库</li></ol><h2 id="_3-5-dcl语句" tabindex="-1">3.5 DCL语句 <a class="header-anchor" href="#_3-5-dcl语句" aria-label="Permalink to &quot;3.5  DCL语句&quot;">​</a></h2><p>创建用户</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 创建用户，只能本地登录</span></span>
<span class="line"><span style="color:#e1e4e8;">create user &#39;user1&#39;@&#39;localhost&#39; identified by &#39;123&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">// 创建用户，可以远程登录</span></span>
<span class="line"><span style="color:#e1e4e8;">create user &#39;user2&#39;@&#39;%&#39; identified by &#39;123&#39;;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 创建用户，只能本地登录</span></span>
<span class="line"><span style="color:#24292e;">create user &#39;user1&#39;@&#39;localhost&#39; identified by &#39;123&#39;;</span></span>
<span class="line"><span style="color:#24292e;">// 创建用户，可以远程登录</span></span>
<span class="line"><span style="color:#24292e;">create user &#39;user2&#39;@&#39;%&#39; identified by &#39;123&#39;;</span></span></code></pre></div><p>查看用户权限：</p><ul><li><code>show grants for &#39;user1&#39;@&#39;localhost&#39;;</code></li></ul><p>新创建用户没有权限，需要授权：</p><ol><li><code>grant 权限1,权限2.. on 数据库.表名 to &#39;用户名&#39;@&#39;主机名&#39;;</code></li><li><code>grant create,insert,update,delete on db1.* to &#39;user1&#39;@&#39;localhost&#39;;</code></li><li><code>grant all on *.* to &#39;user2&#39;@&#39;%&#39;;</code> 给用户2分配所有权限</li></ol><p>撤销授权：</p><ol><li><code>revoke 权限1,权限2.. on 数据库.表名 from &#39;用户&#39;@&#39;主机&#39;;</code></li><li><code>revoke all on db1.* from &#39;user1&#39;@&#39;localhost&#39;;</code> 撤销用户1在db1上的所有权限</li></ol><p>删除用户：<code>drop user &#39;user1&#39;@&#39;localhost&#39;;</code></p><p>修改管理员密码：<code>mysqladmin -uroot -p password 123456</code> 在未登录mysql情况下修改的密码</p><p>修改普通用户密码：<code>set password for &#39;user1&#39;@&#39;localhost&#39;=password(&#39;新棉&#39;);</code></p>`,113),i=[n];function t(p,c,d,r,u,m){return l(),a("div",null,i)}const b=e(o,[["render",t]]);export{h as __pageData,b as default};
