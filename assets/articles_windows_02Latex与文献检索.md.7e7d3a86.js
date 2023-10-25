import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2516552c.js";const l="/assets/190b4f199c7f86e7cfe26945bbdce660.6fb244af.png",p="/assets/14971265-5152fcee7797e56a.bc94f843.png",b=JSON.parse('{"title":"文献检索","description":"","frontmatter":{},"headers":[],"relativePath":"articles/windows/02Latex与文献检索.md","filePath":"articles/windows/02Latex与文献检索.md","lastUpdated":null}'),o={name:"articles/windows/02Latex与文献检索.md"},c=e('<h1 id="文献检索" tabindex="-1">文献检索 <a class="header-anchor" href="#文献检索" aria-label="Permalink to &quot;文献检索&quot;">​</a></h1><h2 id="一、文献分类" tabindex="-1">一、文献分类 <a class="header-anchor" href="#一、文献分类" aria-label="Permalink to &quot;一、文献分类&quot;">​</a></h2><p>按出版形式：</p><ul><li>图书、学术专著</li><li>期刊、连续出版物</li><li>会议文献</li><li>学位论文</li><li>专利文献</li><li>科技报告</li><li>标准文献</li></ul><p>按文献加工深度：</p><ul><li>一次文献：专著、期刊论文、科技报告、学位论文等</li><li>二次文献：目录、索引、文摘</li><li>三次文献：综述、学科年度总结、百科全书</li></ul><h2 id="二、文献信息组织" tabindex="-1">二、文献信息组织 <a class="header-anchor" href="#二、文献信息组织" aria-label="Permalink to &quot;二、文献信息组织&quot;">​</a></h2><p>分类法：</p><ul><li>中图法</li><li>杜威十进分类法</li><li>美国《国会图书馆分类法》</li><li>国际专利分类法</li></ul><p>主题法：</p><ul><li>主题词（作者关键词）</li><li>人工受控词汇（增补关键词）</li></ul><p>其他索引，等等</p><h2 id="三、检索工具" tabindex="-1">三、检索工具 <a class="header-anchor" href="#三、检索工具" aria-label="Permalink to &quot;三、检索工具&quot;">​</a></h2><ol><li>全文数据库（存储的是一次文献，可以下载全文） <ul><li>中文数据库：CNKI、维普、万方、超星数字图书等</li><li>外文数据库：ACM、IEEE、Springer Link等</li></ul></li><li>二次文献数据库（检索工具，存储的是索引，不可以直接下载（其实也可以吧）） 综合类：WOS系列、Scopus数据库 工程类：Ei Village 化学化工类：SciFinder Scholar 物理、电气电子、计算机、控制类：INSPEC (WOS平台) 数学类：MathSciNet 专利类：Derwent Innovations Index(DII)（WOS平台） 学位论文类：PQDT</li><li>建议首选文献索引型数据库检索，看文摘筛选文献，再下载全文</li></ol><h2 id="四、文献检索技术" tabindex="-1">四、文献检索技术 <a class="header-anchor" href="#四、文献检索技术" aria-label="Permalink to &quot;四、文献检索技术&quot;">​</a></h2><p><strong>1、 逻辑算符</strong></p><ul><li>AND或*</li><li>OR或+</li><li>NOT或-</li><li>如：A AND B OR C NOT D</li></ul><p><strong>2、 截词符</strong></p><ul><li>*表示0个或多个字符</li><li>?表示一个字符</li></ul><p><strong>3、 实例：查找“计算机动画电影”方面的资料</strong></p><p>中文检索式：（计算机 OR 电脑）AND（动画 OR 卡通）AND 电影 英文检索式：computer* AND cartoon* AND (movie* OR picture*)</p><h2 id="五、文献管理工具" tabindex="-1">五、文献管理工具 <a class="header-anchor" href="#五、文献管理工具" aria-label="Permalink to &quot;五、文献管理工具&quot;">​</a></h2><p>我最开始用Mendeley，但是发现同步功能很垃圾，发现Zotero还可以，以后可以尝试。</p><h1 id="latex" tabindex="-1">LaTex <a class="header-anchor" href="#latex" aria-label="Permalink to &quot;LaTex&quot;">​</a></h1><h2 id="一、latex是什么" tabindex="-1">一、LaTex是什么？ <a class="header-anchor" href="#一、latex是什么" aria-label="Permalink to &quot;一、LaTex是什么？&quot;">​</a></h2><blockquote><p>建议参考：<a href="https://www.jianshu.com/p/1d99b3c883a6" target="_blank" rel="noreferrer">https://www.jianshu.com/p/1d99b3c883a6</a></p></blockquote><p><strong>Tex引擎</strong>：Tex是一个排版系统，真正的编辑器是Tex引擎，Tex引擎有：</p><ol><li>Knuth Tex：高德纳的原版Tex， 现在已经不用。</li><li>e-Tex：标准Tex，后续Tex编辑器都是基于e-Tex开发的。</li><li>pdfTex：西文世界最常用编辑器。</li><li>XeTex：支持Unicode编码，支持中文。</li></ol><p><strong>基于Tex引擎的格式</strong>：Tex是一个宏语言，当你制作了一些特别基础的宏，那么你可以将其发布为一个格式。基于Tex引擎的格式有：</p><ol><li>plain Tex：这是Knuth搞出来的格式，最为基础。</li><li>LaTex：这是兰伯特搞出来的格式，最为广泛。</li></ol><p><strong>Tex发行版</strong>：是集引擎、格式于一体，面向用户的。有：</p><ol><li>windows：TexLive发行版+TexStudio编辑器（有人推荐的）</li><li>mac：macTex发行版。</li></ol><p>题外话：</p><p>TexLive发行版自带TeXworks编辑器，这个编辑器轻量级、方便，亲自用过很简单。</p><h2 id="二、安装tex-live" tabindex="-1">二、安装TeX Live <a class="header-anchor" href="#二、安装tex-live" aria-label="Permalink to &quot;二、安装TeX Live&quot;">​</a></h2><p>使用中科大镜像网站下载：<a href="https://mirrors.ustc.edu.cn/CTAN/systems/texlive/Images/" target="_blank" rel="noreferrer">https://mirrors.ustc.edu.cn/CTAN/systems/texlive/Images/</a></p><ol><li><ul><li>Windows下点install-tl-windows.bat <ul><li>Linux/macOS，执行./install-tl --gui</li></ul></li></ul></li><li><p>点击Advanced进行更多的安装设置 ()</p><p><img src="'+l+`" alt="img"></p></li><li><p>点击安装等待</p></li></ol><h2 id="三、第一行代码" tabindex="-1">三、第一行代码 <a class="header-anchor" href="#三、第一行代码" aria-label="Permalink to &quot;三、第一行代码&quot;">​</a></h2><h3 id="模板如下" tabindex="-1">模板如下 <a class="header-anchor" href="#模板如下" aria-label="Permalink to &quot;模板如下&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\\documentclass[UTF8]{ctexart} %中文版article排版</span></span>
<span class="line"><span style="color:#e1e4e8;">\\usepackage{amsmath} %公式环境和数学命令</span></span>
<span class="line"><span style="color:#e1e4e8;">\\usepackage{amssymb} %数学符号和生成命令</span></span>
<span class="line"><span style="color:#e1e4e8;">\\usepackage{geometry} %版面尺寸</span></span>
<span class="line"><span style="color:#e1e4e8;">\\usepackage{graphicx} %插图</span></span>
<span class="line"><span style="color:#e1e4e8;">\\usepackage{hyperref} %让目录有链接</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\\begin{document}</span></span>
<span class="line"><span style="color:#e1e4e8;">\\title{My First LaTeX Model}</span></span>
<span class="line"><span style="color:#e1e4e8;">\\author{王二狗}</span></span>
<span class="line"><span style="color:#e1e4e8;">\\date{January 25, 2018}</span></span>
<span class="line"><span style="color:#e1e4e8;">\\maketitle %使上面三个title生效，maketitle必须放在document里面</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\\begin{abstract} %摘要</span></span>
<span class="line"><span style="color:#e1e4e8;">本文主要介绍了如何用LaTeX完成第一个模板。</span></span>
<span class="line"><span style="color:#e1e4e8;">\\end{abstract}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\\tableofcontents %自动生成目录</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\\newpage</span></span>
<span class="line"><span style="color:#e1e4e8;">\\setlength{\\parindent}{0pt} %去除所有首行缩进</span></span>
<span class="line"><span style="color:#e1e4e8;">\\section{换行}</span></span>
<span class="line"><span style="color:#e1e4e8;">\\begin{tabular}{|c|c|}</span></span>
<span class="line"><span style="color:#e1e4e8;">\\hline</span></span>
<span class="line"><span style="color:#e1e4e8;">\\textbackslash par&amp;空行，或者开始新的段落（默认有首行缩进）\\\\</span></span>
<span class="line"><span style="color:#e1e4e8;">\\hline</span></span>
<span class="line"><span style="color:#e1e4e8;">\\textbackslash \\textbackslash &amp;强制换行，不会有缩进\\\\</span></span>
<span class="line"><span style="color:#e1e4e8;">\\hline</span></span>
<span class="line"><span style="color:#e1e4e8;">\\textbackslash newline&amp;强制换行，不会有缩进\\\\</span></span>
<span class="line"><span style="color:#e1e4e8;">\\hline</span></span>
<span class="line"><span style="color:#e1e4e8;">\\end{tabular}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\\section{列表}</span></span>
<span class="line"><span style="color:#e1e4e8;">列表有三种：无序列表、有序列表和描述列表。</span></span>
<span class="line"><span style="color:#e1e4e8;">\\begin{itemize}</span></span>
<span class="line"><span style="color:#e1e4e8;">\\item 无序列表</span></span>
<span class="line"><span style="color:#e1e4e8;">\\item 无序列表</span></span>
<span class="line"><span style="color:#e1e4e8;">\\end{itemize}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\\begin{enumerate}</span></span>
<span class="line"><span style="color:#e1e4e8;">\\item 有序列表</span></span>
<span class="line"><span style="color:#e1e4e8;">\\item 有序列表</span></span>
<span class="line"><span style="color:#e1e4e8;">\\end{enumerate}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\\begin{description}</span></span>
<span class="line"><span style="color:#e1e4e8;">\\item[name] 描述列表</span></span>
<span class="line"><span style="color:#e1e4e8;">\\item[age] 描述列表</span></span>
<span class="line"><span style="color:#e1e4e8;">\\end{description}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\\section{章节目录}</span></span>
<span class="line"><span style="color:#e1e4e8;">\\subsection{节标题}这一小段我们介绍这些内容。</span></span>
<span class="line"><span style="color:#e1e4e8;">\\subsubsection{子标题}这一小段我们介绍这些内容。</span></span>
<span class="line"><span style="color:#e1e4e8;">\\paragraph{段落}这一小段我们介绍这些内容。</span></span>
<span class="line"><span style="color:#e1e4e8;">\\subparagraph{小段}这一小段我们介绍这些内容。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\\section{公式}</span></span>
<span class="line"><span style="color:#e1e4e8;">\\label{sec:gongshi} %章节标签</span></span>
<span class="line"><span style="color:#e1e4e8;">数学公式有两种：行内公式和行间公式。\\newline</span></span>
<span class="line"><span style="color:#e1e4e8;">1.行内公式\\newline</span></span>
<span class="line"><span style="color:#e1e4e8;">From $a+b&gt;c$, we have...\\newline</span></span>
<span class="line"><span style="color:#e1e4e8;">2.行间公式\\newline</span></span>
<span class="line"><span style="color:#e1e4e8;">Since</span></span>
<span class="line"><span style="color:#e1e4e8;">\\begin{equation}\\label{eq:gougu} %开始单行公式环境equation，并添加了书签gougu</span></span>
<span class="line"><span style="color:#e1e4e8;">AB^2=BC^2+AC^2.</span></span>
<span class="line"><span style="color:#e1e4e8;">\\end{equation}</span></span>
<span class="line"><span style="color:#e1e4e8;">we have...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\\section{图片}</span></span>
<span class="line"><span style="color:#e1e4e8;">本节只是插入一张图片 %保证目录下有图片</span></span>
<span class="line"><span style="color:#e1e4e8;">\\begin{figure}[!ht]\\centering %添加图片环境的配置</span></span>
<span class="line"><span style="color:#e1e4e8;">\\includegraphics[scale=0.5]{images/test.png}</span></span>
<span class="line"><span style="color:#e1e4e8;">\\caption{我的第一个图片\\label{fig:img01}}</span></span>
<span class="line"><span style="color:#e1e4e8;">\\end{figure}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\\section{引用}</span></span>
<span class="line"><span style="color:#e1e4e8;">1.引用文献\\\\</span></span>
<span class="line"><span style="color:#e1e4e8;">两边之和大于第三边\\cite{1}。\\\\%引用文献</span></span>
<span class="line"><span style="color:#e1e4e8;">两边之差小于第三边\\cite{2}。\\\\%引用文献</span></span>
<span class="line"><span style="color:#e1e4e8;">2.引用公式\\\\</span></span>
<span class="line"><span style="color:#e1e4e8;">满足式 \\eqref{eq:gougu} 的整数称为\\emph{勾股数}。\\\\%引用公式标签, \\emph表示强调</span></span>
<span class="line"><span style="color:#e1e4e8;">3.引用章节\\\\</span></span>
<span class="line"><span style="color:#e1e4e8;">第 \\ref{sec:gongshi} 节介绍了公式的使用。\\\\</span></span>
<span class="line"><span style="color:#e1e4e8;">4.引用图片\\\\</span></span>
<span class="line"><span style="color:#e1e4e8;">图\\ref{fig:img01}是一个可爱的头像。%引用图片</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\\begin{thebibliography}{99} %参考文献，99表示最大标签号</span></span>
<span class="line"><span style="color:#e1e4e8;">\\bibitem{1}失野健太郎.几何的有名定理.上海科学技术出版社，1986. </span></span>
<span class="line"><span style="color:#e1e4e8;">\\bibitem{2}曲安金.商高、赵爽与刘辉关于勾股定理的证明.数学传播,20(3),1998.</span></span>
<span class="line"><span style="color:#e1e4e8;">\\bibitem{3}克莱因.古今数学思想.上海科学技术出版社，2002.</span></span>
<span class="line"><span style="color:#e1e4e8;">\\end{thebibliography}</span></span>
<span class="line"><span style="color:#e1e4e8;">\\addcontentsline{toc}{section}{参考文献} %用来添加文献的标准方式</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\\begin{appendix} %附录</span></span>
<span class="line"><span style="color:#e1e4e8;">\\section{附录}</span></span>
<span class="line"><span style="color:#e1e4e8;">本文参考的网站\\\\</span></span>
<span class="line"><span style="color:#e1e4e8;">https://www.cnblogs.com/jingwhale/p/4250296.html \\\\</span></span>
<span class="line"><span style="color:#e1e4e8;">https://blog.csdn.net/sotlion/article/details/79591724\\\\</span></span>
<span class="line"><span style="color:#e1e4e8;">\\end{appendix}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\\end{document}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\\documentclass[UTF8]{ctexart} %中文版article排版</span></span>
<span class="line"><span style="color:#24292e;">\\usepackage{amsmath} %公式环境和数学命令</span></span>
<span class="line"><span style="color:#24292e;">\\usepackage{amssymb} %数学符号和生成命令</span></span>
<span class="line"><span style="color:#24292e;">\\usepackage{geometry} %版面尺寸</span></span>
<span class="line"><span style="color:#24292e;">\\usepackage{graphicx} %插图</span></span>
<span class="line"><span style="color:#24292e;">\\usepackage{hyperref} %让目录有链接</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\\begin{document}</span></span>
<span class="line"><span style="color:#24292e;">\\title{My First LaTeX Model}</span></span>
<span class="line"><span style="color:#24292e;">\\author{王二狗}</span></span>
<span class="line"><span style="color:#24292e;">\\date{January 25, 2018}</span></span>
<span class="line"><span style="color:#24292e;">\\maketitle %使上面三个title生效，maketitle必须放在document里面</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\\begin{abstract} %摘要</span></span>
<span class="line"><span style="color:#24292e;">本文主要介绍了如何用LaTeX完成第一个模板。</span></span>
<span class="line"><span style="color:#24292e;">\\end{abstract}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\\tableofcontents %自动生成目录</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\\newpage</span></span>
<span class="line"><span style="color:#24292e;">\\setlength{\\parindent}{0pt} %去除所有首行缩进</span></span>
<span class="line"><span style="color:#24292e;">\\section{换行}</span></span>
<span class="line"><span style="color:#24292e;">\\begin{tabular}{|c|c|}</span></span>
<span class="line"><span style="color:#24292e;">\\hline</span></span>
<span class="line"><span style="color:#24292e;">\\textbackslash par&amp;空行，或者开始新的段落（默认有首行缩进）\\\\</span></span>
<span class="line"><span style="color:#24292e;">\\hline</span></span>
<span class="line"><span style="color:#24292e;">\\textbackslash \\textbackslash &amp;强制换行，不会有缩进\\\\</span></span>
<span class="line"><span style="color:#24292e;">\\hline</span></span>
<span class="line"><span style="color:#24292e;">\\textbackslash newline&amp;强制换行，不会有缩进\\\\</span></span>
<span class="line"><span style="color:#24292e;">\\hline</span></span>
<span class="line"><span style="color:#24292e;">\\end{tabular}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\\section{列表}</span></span>
<span class="line"><span style="color:#24292e;">列表有三种：无序列表、有序列表和描述列表。</span></span>
<span class="line"><span style="color:#24292e;">\\begin{itemize}</span></span>
<span class="line"><span style="color:#24292e;">\\item 无序列表</span></span>
<span class="line"><span style="color:#24292e;">\\item 无序列表</span></span>
<span class="line"><span style="color:#24292e;">\\end{itemize}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\\begin{enumerate}</span></span>
<span class="line"><span style="color:#24292e;">\\item 有序列表</span></span>
<span class="line"><span style="color:#24292e;">\\item 有序列表</span></span>
<span class="line"><span style="color:#24292e;">\\end{enumerate}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\\begin{description}</span></span>
<span class="line"><span style="color:#24292e;">\\item[name] 描述列表</span></span>
<span class="line"><span style="color:#24292e;">\\item[age] 描述列表</span></span>
<span class="line"><span style="color:#24292e;">\\end{description}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\\section{章节目录}</span></span>
<span class="line"><span style="color:#24292e;">\\subsection{节标题}这一小段我们介绍这些内容。</span></span>
<span class="line"><span style="color:#24292e;">\\subsubsection{子标题}这一小段我们介绍这些内容。</span></span>
<span class="line"><span style="color:#24292e;">\\paragraph{段落}这一小段我们介绍这些内容。</span></span>
<span class="line"><span style="color:#24292e;">\\subparagraph{小段}这一小段我们介绍这些内容。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\\section{公式}</span></span>
<span class="line"><span style="color:#24292e;">\\label{sec:gongshi} %章节标签</span></span>
<span class="line"><span style="color:#24292e;">数学公式有两种：行内公式和行间公式。\\newline</span></span>
<span class="line"><span style="color:#24292e;">1.行内公式\\newline</span></span>
<span class="line"><span style="color:#24292e;">From $a+b&gt;c$, we have...\\newline</span></span>
<span class="line"><span style="color:#24292e;">2.行间公式\\newline</span></span>
<span class="line"><span style="color:#24292e;">Since</span></span>
<span class="line"><span style="color:#24292e;">\\begin{equation}\\label{eq:gougu} %开始单行公式环境equation，并添加了书签gougu</span></span>
<span class="line"><span style="color:#24292e;">AB^2=BC^2+AC^2.</span></span>
<span class="line"><span style="color:#24292e;">\\end{equation}</span></span>
<span class="line"><span style="color:#24292e;">we have...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\\section{图片}</span></span>
<span class="line"><span style="color:#24292e;">本节只是插入一张图片 %保证目录下有图片</span></span>
<span class="line"><span style="color:#24292e;">\\begin{figure}[!ht]\\centering %添加图片环境的配置</span></span>
<span class="line"><span style="color:#24292e;">\\includegraphics[scale=0.5]{images/test.png}</span></span>
<span class="line"><span style="color:#24292e;">\\caption{我的第一个图片\\label{fig:img01}}</span></span>
<span class="line"><span style="color:#24292e;">\\end{figure}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\\section{引用}</span></span>
<span class="line"><span style="color:#24292e;">1.引用文献\\\\</span></span>
<span class="line"><span style="color:#24292e;">两边之和大于第三边\\cite{1}。\\\\%引用文献</span></span>
<span class="line"><span style="color:#24292e;">两边之差小于第三边\\cite{2}。\\\\%引用文献</span></span>
<span class="line"><span style="color:#24292e;">2.引用公式\\\\</span></span>
<span class="line"><span style="color:#24292e;">满足式 \\eqref{eq:gougu} 的整数称为\\emph{勾股数}。\\\\%引用公式标签, \\emph表示强调</span></span>
<span class="line"><span style="color:#24292e;">3.引用章节\\\\</span></span>
<span class="line"><span style="color:#24292e;">第 \\ref{sec:gongshi} 节介绍了公式的使用。\\\\</span></span>
<span class="line"><span style="color:#24292e;">4.引用图片\\\\</span></span>
<span class="line"><span style="color:#24292e;">图\\ref{fig:img01}是一个可爱的头像。%引用图片</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\\begin{thebibliography}{99} %参考文献，99表示最大标签号</span></span>
<span class="line"><span style="color:#24292e;">\\bibitem{1}失野健太郎.几何的有名定理.上海科学技术出版社，1986. </span></span>
<span class="line"><span style="color:#24292e;">\\bibitem{2}曲安金.商高、赵爽与刘辉关于勾股定理的证明.数学传播,20(3),1998.</span></span>
<span class="line"><span style="color:#24292e;">\\bibitem{3}克莱因.古今数学思想.上海科学技术出版社，2002.</span></span>
<span class="line"><span style="color:#24292e;">\\end{thebibliography}</span></span>
<span class="line"><span style="color:#24292e;">\\addcontentsline{toc}{section}{参考文献} %用来添加文献的标准方式</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\\begin{appendix} %附录</span></span>
<span class="line"><span style="color:#24292e;">\\section{附录}</span></span>
<span class="line"><span style="color:#24292e;">本文参考的网站\\\\</span></span>
<span class="line"><span style="color:#24292e;">https://www.cnblogs.com/jingwhale/p/4250296.html \\\\</span></span>
<span class="line"><span style="color:#24292e;">https://blog.csdn.net/sotlion/article/details/79591724\\\\</span></span>
<span class="line"><span style="color:#24292e;">\\end{appendix}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\\end{document}</span></span></code></pre></div><h3 id="最终效果如下" tabindex="-1">最终效果如下 <a class="header-anchor" href="#最终效果如下" aria-label="Permalink to &quot;最终效果如下&quot;">​</a></h3><p><img src="`+p+'" alt="image1"><img src="http://upload-images.jianshu.io/upload_images/14971265-2a0f15ba5a14d198.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="image2"><img src="http://upload-images.jianshu.io/upload_images/14971265-b6ef4101fd4f9541.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="image3"><img src="http://upload-images.jianshu.io/upload_images/14971265-b8e4742019439eef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="image5"></p>',42),i=[c];function t(r,y,g,h,u,d){return n(),a("div",null,i)}const x=s(o,[["render",t]]);export{b as __pageData,x as default};
