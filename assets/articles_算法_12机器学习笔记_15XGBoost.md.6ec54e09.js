import{_ as p,o as a,c as l,k as s,a as n,Q as o}from"./chunks/framework.2516552c.js";const e="/assets/v2-def00357a06b469b6144d6acb8ab75a9_hd.dee39223.jpg",t="/assets/1102791-20190224220505201-1008340710.0f9825c3.png",r="/assets/1102791-20190224210830251-1308185316.879d6d21.png",C=JSON.parse('{"title":"1. 从GBDT到XGBoost","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/12机器学习笔记/15XGBoost.md","filePath":"articles/算法/12机器学习笔记/15XGBoost.md","lastUpdated":1698149129000}'),c={name:"articles/算法/12机器学习笔记/15XGBoost.md"},i=o('<p>参考：</p><ol><li>刘建平</li><li><a href="https://zhuanlan.zhihu.com/p/92837676" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/92837676</a></li><li><a href="https://www.cnblogs.com/gczr/p/10412609.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/gczr/p/10412609.html</a></li><li><a href="https://blog.csdn.net/dpengwang/article/details/87910480" target="_blank" rel="noreferrer">https://blog.csdn.net/dpengwang/article/details/87910480</a></li></ol><hr><p>作者陈天奇</p><h1 id="_1-从gbdt到xgboost" tabindex="-1">1. 从GBDT到XGBoost <a class="header-anchor" href="#_1-从gbdt到xgboost" aria-label="Permalink to &quot;1. 从GBDT到XGBoost&quot;">​</a></h1><p>xgboost是一个上限特别高的算法，主要改进为：</p><ol><li>算法本身的优化。GBDT只支持决策树，XGBoost支持更多。损失函数加入了正则化。损失函数为二阶泰勒展开。CART节点划分标准不一样。</li><li>算法运行效率的优化。对每个弱学习器，比如决策树建立的过程做并行选择，找到合适的子树分裂特征和特征值。在并行选择之前，先对所有的特征的值进行排序分组，方便前面说的并行选择。对分组的特征，选择合适的分组大小，使用CPU缓存进行读取加速。将各个分组保存到多个硬盘以提高IO速度。</li><li>算法健壮性的优化。对于缺失值的特征，通过枚举所有缺失值在当前节点是进入左子树还是右子树来决定缺失值的处理方式。算法本身加入了L1和L2正则化项，可以防止过拟合，泛化能力更强。</li></ol><h1 id="_2-xgboost" tabindex="-1">2. XGBoost <a class="header-anchor" href="#_2-xgboost" aria-label="Permalink to &quot;2. XGBoost&quot;">​</a></h1><p><img src="'+e+'" alt="img"></p><h3 id="推导过程" tabindex="-1">推导过程： <a class="header-anchor" href="#推导过程" aria-label="Permalink to &quot;推导过程：&quot;">​</a></h3><ol><li>目标函数（广义加法模型）</li><li>第t轮损失，二阶泰勒展开</li><li>化简：去掉常数项，从样本误差累积-&gt;叶子节点误差累积</li><li>目标函数最优点（一元二次方程，导数=0），极值</li><li>叶子节点分裂</li></ol><h3 id="防止过拟合" tabindex="-1">防止过拟合 <a class="header-anchor" href="#防止过拟合" aria-label="Permalink to &quot;防止过拟合&quot;">​</a></h3><p>除了使用正则化项，还使用了权重收缩和列采样技术。</p>',13),y={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},E={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.489ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.124ex",height:"1.489ex",role:"img",focusable:"false",viewBox:"0 -442 497 658","aria-hidden":"true"},_=s("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[s("g",{"data-mml-node":"math"},[s("g",{"data-mml-node":"mi"},[s("path",{"data-c":"1D702",d:"M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q156 442 175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336V326Q503 302 439 53Q381 -182 377 -189Q364 -216 332 -216Q319 -216 310 -208T299 -186Q299 -177 358 57L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),d=[_],m=s("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("mi",null,"η")])],-1),h=o('<p>列采样：和随机森林相同，每次分裂时只考虑一部分随机选择的特征。</p><p>子采样：使用部分样本</p><h3 id="寻找最佳分裂节点" tabindex="-1">寻找最佳分裂节点 <a class="header-anchor" href="#寻找最佳分裂节点" aria-label="Permalink to &quot;寻找最佳分裂节点&quot;">​</a></h3><p>贪心方法：</p><ul><li>遍历每个结点的每个特征；</li><li>对每个特征，按特征值大小将特征值排序；</li><li>线性扫描，找出每个特征的最佳分裂特征值；</li><li>在所有特征中找出最好的分裂点（分裂后增益最大的特征及特征值）</li></ul><p>XGBoost方案：</p><ul><li>**特征预排序+缓存：**XGBoost在训练之前，预先对每个特征按照特征值大小进行排序，然后保存为block结构，后面的迭代中会重复地使用这个结构，使计算量大大减小。</li><li>**分位点近似法：**对每个特征按照特征值排序后，采用类似分位点选取的方式，仅仅选出常数个特征值作为该特征的候选分割点，在寻找该特征的最佳分割点时，从候选分割点中选出最优的一个。</li><li>**并行查找：**由于各个特性已预先存储为block结构，XGBoost支持利用多个线程并行地计算每个特征的最佳分割点，这不仅大大提升了结点的分裂速度，也极利于大规模训练集的适应性扩展。</li></ul><p><strong>1. 特征预排序，存储样本索引：</strong></p><ul><li>每一个块结构包括一个或多个已经排序好的特征；</li><li>缺失特征值将不进行排序；</li><li>每个特征会存储指向样本梯度统计值的索引，方便计算一阶导和二阶导数值；</li></ul><p><img src="'+t+'" alt="img"></p><p><strong>2. 加权分位数算法：weighted quantile sketch</strong></p><p>损失函数经过变换，每个样本的权重正好是二阶偏导hi。</p><p><img src="'+r+`" alt="img"></p><p>计算特征k小于特征值的样本的比例：</p><p>rk(1)=0</p><p>rk(3)=(0.1+0.1)/(1.8)=1/9</p><p>rk(4)=(0.1+0.1+0.1)/(1.8)=1/6</p><p>rk(5)=0.4/1.8=2/9</p><p>rk(12)=0.5/1.8=5/18</p><p>rk(45)=0.6/1.8=1/3</p><p>rk(50)=1.0/1.8=5/9</p><p>rk(99)=1.2/1.8=2/3</p><p>如果取三分位点，那么候选分裂点就是1/3, 2/3对应的特征值45, 99。对45,99计算分裂增益，减少了计算量。</p><p>对于小数据，可以按照上面计算。对于大数据，一次不能访问所有数据，文中解决方案是weighted quantile sketch，证明比较复杂。请看链接<a href="https://blog.csdn.net/ningyanggege/article/details/90437470" target="_blank" rel="noreferrer">https://blog.csdn.net/ningyanggege/article/details/90437470</a></p><p><strong>3. 缓存访问优化</strong></p><p>块结构的设计可以减少节点分裂时的计算量，但特征值通过索引访问样本梯度统计值的设计会导致访问操作的内存空间不连续，这样会造成缓存命中率低，从而影响到算法的效率。</p><p>为了解决缓存命中率低的问题，XGBoost 提出了缓存访问优化算法：为每个线程分配一个连续的缓存区，将需要的梯度信息存放在缓冲区中，这样就是实现了非连续空间到连续空间的转换，提高了算法效率。</p><p>此外适当调整块大小，也可以有助于缓存优化 。</p><p><strong>4. 核外 块计算</strong></p><p>当数据量过大时无法将数据全部加载到内存中，只能先将无法加载到内存中的数据暂存到硬盘中，直到需要时再进行加载计算，而这种操作必然涉及到因内存与硬盘速度不同而造成的资源浪费和性能瓶颈。为了解决这个问题，XGBoost 独立一个线程专门用于从硬盘读入数据，以实现处理数据和读入数据同时进行。</p><p>此外，XGBoost 还用了两种方法来降低硬盘读写的开销：</p><ul><li>**块压缩：**对 Block 进行按列压缩，并在读取时进行解压；</li><li>**块拆分：**将每个块存储到不同的磁盘中，从多个磁盘读取可以增加吞吐量。</li></ul><p><strong>5. 缺点</strong></p><ol><li>虽然利用预排序和近似算法可以降低寻找最佳分裂点的计算量，但在节点分裂过程中仍需要遍历数据集；</li><li>预排序过程的空间复杂度过高，不仅需要存储特征值，还需要存储特征对应样本的梯度统计值的索引，相当于消耗了两倍的内存。</li></ol><h3 id="缺失值-稀疏数据处理" tabindex="-1">缺失值&amp;稀疏数据处理 <a class="header-anchor" href="#缺失值-稀疏数据处理" aria-label="Permalink to &quot;缺失值&amp;稀疏数据处理&quot;">​</a></h3><ol><li>为了保证完备性，将不完整样本分配到左右子树，选择最大增益方向。</li><li>也可以手动指定方向，加快算法训练。</li><li>若训练数据无缺失，预测数据有缺失，自动划分到右子树。</li></ol><h3 id="停止生长" tabindex="-1">停止生长 <a class="header-anchor" href="#停止生长" aria-label="Permalink to &quot;停止生长&quot;">​</a></h3><ol><li>当Gain&lt;0时，损失不再减小，停止</li><li>达到最大深度</li><li>叶子节点的样本权重w_j</li></ol><h1 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h1><p>库：&quot;pip install xgboost&quot;</p><p>xgboost有两种接口风格，一个是原生，一个是sklearn风格。有两个类，一个是&quot;XGBClassifier&quot;，一个是“XGBRegressor”</p><p>sklearn风格的参数又分原生，和sklearn风格参数。这里建议使用sklearn风格参数。</p><ul><li>from xgboost.sklearn import XGBClassifier</li></ul><p>参数：</p><p>XGBoost框架参数：</p><ol><li>booster：学习器，默认&quot;gbtree&quot;，也就是CART。还可以线性学习器&quot;gblinear&quot;</li><li>n_estimators：学习器个数</li><li>n_jobs：线程数，默认1</li></ol><p>学习目标参数</p><ol><li>objective：需要被最小化的损失函数 <ul><li>&quot;reg:linear&quot;：默认，线性回归</li><li>&quot;reg:logistic&quot;：逻辑回归</li><li>“reg:squarederror&quot;，回归平方差，建议使用</li><li>&quot;binary:logistic&quot;，二分类的逻辑回归，返回预测的概率</li><li>&quot;multi:softmax&quot;，使用softmax的多分类器，返回预测的类别，需要设置参数num_class</li><li>&quot;multi:softprob&quot;，和上面一样，但是返回概率</li></ul></li><li>seed：随机数种子</li></ol><p>学习器参数，主要是决策树参数：</p><ol><li>learning_rate：默认0.1，控制每个弱学习器的权重缩减系数。通常和n_estimator一起调。学习率小就需要更多学习器。典型值[0.01-0.2]</li><li>max_depth：树的深度，需要网格搜索。默认3，典型[3-10]</li><li>min_child_weight：最小的子节点权重阈值。这里权重使用的是该节点样本的二阶导数和，类似min_samples_split。</li><li>gamma：决策树分裂所带来的损失减小阈值，需要大于该阈值才能分裂。</li><li>subsample：子采样，不放回抽样。取(0,1]</li><li>reg_alpha/reg_lambda：正则化系数，alpha正则化叶子数，labmbda正则化叶子值</li><li>colsample_bytree/colsample_bylevel/colsample_bynode：这三个参数都是用于特征采样，默认使用所有特征。colsample_bytree控制整棵树的特征采样比例。colsample_bylevel控制某一层特征采样比例。col_sample_bynode控制某个节点的特征采样比例。例如，一共64个特征，如果三个参数都为0.5，则最终才随机采样8个特征。</li><li>scale_pos_weight: 默认1，处理样本不平衡问题，在样本高度不平衡时，将参数设置大于0，可以加快算法收敛。</li><li>max_delta_step：每棵树的最大权重估计，默认0，没有约束。处理不平衡的逻辑回归。典型值[1-10]</li></ol><p>其他参数：</p><ol><li><p>random_state：默认0</p></li><li><p>missing：默认None，是np.nan。在数据中，标注为缺失值的表示</p></li></ol><p>调参指南：</p><ol><li>n_estimators and learning_rate，默认100 and 0.1，调参范围[100-500] and [0.1-0.3]</li><li>max_depth and min_child_weight，默认3、1，调参范围[3-8] and [1-8]</li><li>gamma，默认0，调参范围[0, 0.01, 0.02, 0.03]</li><li>subsample and colsample_bytree，默认1，设为0.8, 0.8, 可调[0.6, 0.7, 0.8, 0.9]</li><li>reg_alpha/reg_lambda，默认0/1，调参范围[0, 0.01, 0.02, 0.03, 0.04, 0.05]</li><li>降低learning_rate，增加n_estimators</li></ol><p>分类代码</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pandas </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> pd</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> numpy </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> np</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> matplotlib.pyplot </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> plt</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> xgboost.sklearn </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> XGBClassifier</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> sklearn.model_selection </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> GridSearchCV</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> sklearn.model_selection </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> train_test_split</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> sklearn.datasets.samples_generator </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> make_classification</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># data</span></span>
<span class="line"><span style="color:#6A737D;"># X为样本特征，y为样本类别输出， 共10000个样本，每个样本20个特征，输出有2个类别，没有冗余特征，每个类别一个簇</span></span>
<span class="line"><span style="color:#E1E4E8;">X, y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> make_classification(</span><span style="color:#FFAB70;">n_samples</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">n_features</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">n_redundant</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">n_clusters_per_class</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">n_classes</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">flip_y</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">X_train, X_test, y_train, y_test </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> train_test_split(X, y, </span><span style="color:#FFAB70;">random_state</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># # model</span></span>
<span class="line"><span style="color:#E1E4E8;">model </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> XGBClassifier(</span><span style="color:#FFAB70;">max_depth</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">learning_rate</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">verbosity</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">objective</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;binary:logistic&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">random_state</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># # cv</span></span>
<span class="line"><span style="color:#6A737D;"># grid = GridSearchCV(model, {</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;max_depth&#39;: [4, 5, 6],</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;n_estimators&#39;: [5, 10, 20],</span></span>
<span class="line"><span style="color:#6A737D;">#     },</span></span>
<span class="line"><span style="color:#6A737D;">#     cv=5)</span></span>
<span class="line"><span style="color:#6A737D;"># grid.fit(X_train, y_train)</span></span>
<span class="line"><span style="color:#6A737D;"># print(grid.best_score_)</span></span>
<span class="line"><span style="color:#6A737D;"># print(grid.best_params_)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># model</span></span>
<span class="line"><span style="color:#E1E4E8;">model </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> XGBClassifier(</span><span style="color:#FFAB70;">max_depth</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">learning_rate</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0.3</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">verbosity</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">objective</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;binary:logistic&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">n_estimators</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">random_state</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">model.fit(X_train, y_train, </span><span style="color:#FFAB70;">early_stopping_rounds</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">eval_metric</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;error&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">eval_set</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">[(X_test, y_test)])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pandas </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> pd</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> numpy </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> np</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> matplotlib.pyplot </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> plt</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> xgboost.sklearn </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> XGBClassifier</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> sklearn.model_selection </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> GridSearchCV</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> sklearn.model_selection </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> train_test_split</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> sklearn.datasets.samples_generator </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> make_classification</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># data</span></span>
<span class="line"><span style="color:#6A737D;"># X为样本特征，y为样本类别输出， 共10000个样本，每个样本20个特征，输出有2个类别，没有冗余特征，每个类别一个簇</span></span>
<span class="line"><span style="color:#24292E;">X, y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> make_classification(</span><span style="color:#E36209;">n_samples</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">10000</span><span style="color:#24292E;">, </span><span style="color:#E36209;">n_features</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">, </span><span style="color:#E36209;">n_redundant</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#E36209;">n_clusters_per_class</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#E36209;">n_classes</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#E36209;">flip_y</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">X_train, X_test, y_train, y_test </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> train_test_split(X, y, </span><span style="color:#E36209;">random_state</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># # model</span></span>
<span class="line"><span style="color:#24292E;">model </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> XGBClassifier(</span><span style="color:#E36209;">max_depth</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#E36209;">learning_rate</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">, </span><span style="color:#E36209;">verbosity</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#E36209;">objective</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;binary:logistic&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">random_state</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># # cv</span></span>
<span class="line"><span style="color:#6A737D;"># grid = GridSearchCV(model, {</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;max_depth&#39;: [4, 5, 6],</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;n_estimators&#39;: [5, 10, 20],</span></span>
<span class="line"><span style="color:#6A737D;">#     },</span></span>
<span class="line"><span style="color:#6A737D;">#     cv=5)</span></span>
<span class="line"><span style="color:#6A737D;"># grid.fit(X_train, y_train)</span></span>
<span class="line"><span style="color:#6A737D;"># print(grid.best_score_)</span></span>
<span class="line"><span style="color:#6A737D;"># print(grid.best_params_)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># model</span></span>
<span class="line"><span style="color:#24292E;">model </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> XGBClassifier(</span><span style="color:#E36209;">max_depth</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#E36209;">learning_rate</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0.3</span><span style="color:#24292E;">, </span><span style="color:#E36209;">verbosity</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#E36209;">objective</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;binary:logistic&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">n_estimators</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#E36209;">random_state</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">model.fit(X_train, y_train, </span><span style="color:#E36209;">early_stopping_rounds</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#E36209;">eval_metric</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;error&quot;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">eval_set</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">[(X_test, y_test)])</span></span></code></pre></div>`,56);function F(g,u,b,A,B,D){return a(),l("div",null,[i,s("p",null,[n("权重收缩：每个树乘上"),s("mjx-container",y,[(a(),l("svg",E,d)),m]),n(" , 类似于梯度下降的学习率")]),h])}const k=p(c,[["render",F]]);export{C as __pageData,k as default};
