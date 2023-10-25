import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.2516552c.js";const p="/assets/v2-7f2fa489a5409b762da27fdf174fb389_hd.5c92990f.jpg",o="/assets/v2-bcc457bad5c602fbf0434a14d744fcb5_hd.b6090549.jpg",e="/assets/v2-7e04228b1e7f6ca193a5b75cafb6a4de_hd.bb1c340d.jpg",t="/assets/v2-58f1b16ee1c8958f8dc416fbfa0e0fbf_hd.a9d4df4e.jpg",r="/assets/v2-76f2f27dd24fc452a9a65003e5cdd305_hd.ab4be317.jpg",A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/12机器学习笔记/16Lightgbm.md","filePath":"articles/算法/12机器学习笔记/16Lightgbm.md","lastUpdated":null}'),c={name:"articles/算法/12机器学习笔记/16Lightgbm.md"},i=l('<p>参考：</p><ol><li><a href="https://zhuanlan.zhihu.com/p/91167170" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/91167170</a></li><li><a href="https://zhuanlan.zhihu.com/p/87885678" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/87885678</a></li></ol><hr><p>2017年微软推出</p><p>和XGBoost相比：</p><ul><li>模型精度相当</li><li>训练速度更快</li><li>内存更小</li><li>缺失自动处理</li><li>XGBoost不支持类别特征，需要One-hot编码预处理。LightGBM直接支持类别特征。</li></ul><p>XGBoost复杂度：</p><ul><li><p>由于XGBoost采用的基模型是二叉树，因此生成每片叶子需要分裂一次。而每次分裂，需要遍历所有特征上所有候选分裂点位，计算按照这些候选分裂点位分裂后的全部样本的目标函数增益，找到最大的那个增益对应的特征和候选分裂点位，从而生成一片新叶子。</p></li><li><p>生成一片叶子的复杂度：特征数量 x 候选分裂点数量 x 样本的数量</p></li></ul><p>性能优化原理：</p><ol><li>Histogram算法：直方图算法：减少候选分裂点数量（离散化）</li><li>GOSS算法：基于梯度的单边采样算法：减少样本数量（采样）</li><li>EFB算法：互斥特征捆绑算法：减少特征数量</li><li>基于最大深度的 Leaf-wise 的垂直生长算法；</li><li>类别特征最优分割；</li><li>特征并行和数据并行；</li><li>缓存优化。</li></ol><h3 id="_1-histogram直方图算法" tabindex="-1">1. Histogram直方图算法 <a class="header-anchor" href="#_1-histogram直方图算法" aria-label="Permalink to &quot;1. Histogram直方图算法&quot;">​</a></h3><p><strong>直方图算法</strong></p><p>直方图算法通过将连续特征值离散化到固定数量(如255个)的bins上，使得候选分为点位为常数个(num_bins -1)。 虽然将特征离散化后无法找到精确的分割点，可能会对模型的精度产生一定的影响，但较粗的分割也起到了正则化的效果，一定程度上降低了模型的方差。</p><p><img src="'+p+'" alt="img"></p><p><strong>直方图差加速</strong>：当节点分裂成两个时，右边叶子节点的直方图等于其父节点的直方图减去左边叶子节点的直方图。从而大大减少构建直方图的计算量。</p><p><img src="'+o+'" alt="img"></p><p><strong>稀疏特征优化</strong></p><p>XGBoost 在进行预排序时只考虑非零值进行加速，而 LightGBM 也采用类似策略：只用非零特征构建直方图。</p><h3 id="_2-goss单边梯度采样" tabindex="-1">2. GOSS单边梯度采样 <a class="header-anchor" href="#_2-goss单边梯度采样" aria-label="Permalink to &quot;2. GOSS单边梯度采样&quot;">​</a></h3><p>其主要思想是通过对样本采样的方法来减少计算目标函数增益时候的复杂度。</p><p>但如果对全部样本进行随机采样，势必会对目标函数增益的计算精度造成较大的影响。</p><p>GOSS算法的创新之处在于它只对梯度绝对值较小的样本按照一定比例进行采样，而保留了梯度绝对值较大的样本。</p><p>这就是所谓的单边采样。由于目标函数增益主要来自于梯度绝对值较大的样本，因此这种方法在计算性能和计算精度之间取得了很好的平衡。</p><p><img src="'+e+'" alt="img"></p><h3 id="_3-efb互斥特征捆绑算法" tabindex="-1">3. EFB互斥特征捆绑算法 <a class="header-anchor" href="#_3-efb互斥特征捆绑算法" aria-label="Permalink to &quot;3. EFB互斥特征捆绑算法&quot;">​</a></h3><p>EFB算法可以有效减少用于构建直方图的特征数量，从而降低计算复杂度，尤其是特征中包含大量稀疏特征的时候。</p><p>在许多应用场景下，数据集中会有大量的稀疏特征，这些稀疏特征大部分样本都取值为0，只有少数样本取值非0。</p><p>通常可以认为这些稀疏特征是互斥的，即它们几乎不会同时取非零值。</p><p>利用这种特性，可以通过对某些特征的取值重新编码，将多个这样互斥的特征捆绑成为一个新的特征。</p><p>有趣的是，对于类别特征，如果转换成onehot编码，则这些onehot编码后的多个特征相互之间是互斥的，从而可以被捆绑成为一个特征。</p><p>因此，对于指定为类别特征的特征，LightGBM可以直接将每个类别取值和一个bin关联，从而自动地处理它们，而无需预处理成onehot编码多此一举。</p><p><img src="'+t+'" alt="img"></p><ol><li>哪些特征可以一起捆绑？</li><li>捆绑后，特征值如何确定？</li></ol><p>问题1：</p><p>EFB 算法利用特征和特征间的关系构造一个加权无向图，并将其转换为图着色算法。我们知道图着色是个 NP-Hard 问题，故采用贪婪算法得到近似解，具体步骤如下：</p><ol><li>构造一个加权无向图，顶点是特征，边是两个特征间互斥程度；</li><li>根据节点的度进行降序排序，度越大，与其他特征的冲突越大；</li><li>遍历每个特征，将它分配给现有特征包，或者新建一个特征包，总体冲突最小。</li></ol><p>算法允许两两特征并不完全互斥来增加特征捆绑的数量，通过设置最大互斥率来平衡算法的精度和效率。</p><p>问题2：</p><p>假设 Bundle 中有两个特征值，A 取值为 [0, 10]、B 取值为 [0, 20]，为了保证特征 A、B 的互斥性，我们可以给特征 B 添加一个偏移量转换为 [10, 30]，Bundle 后的特征其取值为 [0, 30]，这样便实现了特征合并。</p><h3 id="_4-带深度限制的leaf-wise算法" tabindex="-1">4. 带深度限制的Leaf-wise算法 <a class="header-anchor" href="#_4-带深度限制的leaf-wise算法" aria-label="Permalink to &quot;4. 带深度限制的Leaf-wise算法&quot;">​</a></h3><p>在建树的过程中有两种策略：</p><ul><li>Level-wise：基于层进行生长，直到达到停止条件；</li><li>Leaf-wise：每次分裂增益最大的叶子节点，直到达到停止条件。</li></ul><p>XGBoost 采用 Level-wise 的增长策略，方便并行计算每一层的分裂节点，提高了训练速度，但同时也因为节点增益过小增加了很多不必要的分裂，降低了计算量；LightGBM 采用 Leaf-wise 的增长策略减少了计算量，配合最大深度的限制防止过拟合，由于每次都需要计算增益最大的节点，所以无法并行分裂。</p><p><img src="'+r+`" alt="img"></p><h3 id="_5-类别特征最优分割" tabindex="-1">5. 类别特征最优分割 <a class="header-anchor" href="#_5-类别特征最优分割" aria-label="Permalink to &quot;5. 类别特征最优分割&quot;">​</a></h3><p>大部分的机器学习算法都不能直接支持类别特征，一般都会对类别特征进行编码，然后再输入到模型中。常见的处理类别特征的方法为 one-hot 编码，但我们知道对于决策树来说并不推荐使用 one-hot 编码：</p><ol><li>会产生样本切分不平衡问题，切分增益会非常小。</li><li>影响决策树学习 。</li></ol><p>LightGBM 原生支持类别特征，采用 many-vs-many 的切分方式将类别特征分为两个子集，实现类别特征的最优切分。</p><h3 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h3><p>库：pip install lightgbm</p><p>from lightgbm import LGBMClassifier</p><p>核心参数：</p><ul><li>boosting：默认gbdt</li><li>objective：回归regression，二分类binary，多分类multiclass</li><li>metric: <ul><li>分类：mae, mse</li><li>回归：binary_logloss, multi_logloss</li></ul></li></ul><p>IO参数：</p><ul><li>categorical_features=[0,1,2]：这3列是类别型变量</li><li>min_bin：连续变离散，离散范围</li></ul><p>学习参数：</p><ul><li>n_estimators</li><li>learning_rate</li><li>max_depth</li><li>num_leaves</li><li>min_data_in_leaf</li><li>colsample_bytree</li><li>subsample</li><li>lambda_l1：正则化</li><li>lambda_l2</li><li>min_split_gain： 描述分裂的最小gain</li></ul><p>代码：</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> pandas </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> pd</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> lightgbm </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> lgb</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> sklearn.datasets </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> load_breast_cancer</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> sklearn.model_selection </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> train_test_split</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> sklearn.model_selection </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> GridSearchCV</span></span>
<span class="line"><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> sklearn </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> metrics</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">cancer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> load_breast_cancer()</span></span>
<span class="line"><span style="color:#E1E4E8;">x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cancer.data</span></span>
<span class="line"><span style="color:#E1E4E8;">y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cancer.target</span></span>
<span class="line"><span style="color:#E1E4E8;">x_train, x_test, y_train, y_test </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> train_test_split(x, y, </span><span style="color:#FFAB70;">test_size</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">random_state</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">data_train </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> lgb.Dataset(x_train, y_train)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">model </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> lgb.LGBMClassifier(</span><span style="color:#FFAB70;">objective</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;binary&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">metric</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;auc&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                           </span><span style="color:#FFAB70;">learning_rate</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0.01</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">                           </span><span style="color:#FFAB70;">n_estimators</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">                           </span><span style="color:#FFAB70;">max_depth</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                           </span><span style="color:#FFAB70;">num_leaves</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                           </span><span style="color:#FFAB70;">min_data_in_leaf</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">31</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                           </span><span style="color:#FFAB70;">min_bin</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                           </span><span style="color:#FFAB70;">subsample</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0.6</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                           </span><span style="color:#FFAB70;">colsample_bytree</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0.7</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                           </span><span style="color:#FFAB70;">lambda_l1</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1e-5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                           </span><span style="color:#FFAB70;">lambda_l2</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1e-5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                           </span><span style="color:#FFAB70;">min_split_gain</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">                          )</span></span>
<span class="line"><span style="color:#E1E4E8;">params </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;n_estimators&#39;: range(100, 200, 20),</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;learning_rate&#39;: [0.1]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;max_depth&#39;: range(3, 8, 1),</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;num_leaves&#39;: range(5, 100, 5),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;min_data_in_leaf&#39;: range(1, 50, 10),</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;min_bin&#39;: range(30, 200, 20),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;subsample&#39;: [0.6, 0.7, 0.8, 0.9, 1.0],</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;colsample_bytree&#39;: [0.6, 0.7, 0.8, 0.9, 1.0],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;lambda_l1&#39;: [1e-5,1e-3,1e-1,0.0,0.1,0.3,0.5,0.7,0.9,1.0],</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;lambda_l2&#39;: [1e-5,1e-3,1e-1,0.0,0.1,0.3,0.5,0.7,0.9,1.0],</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;min_split_gain&#39;: [0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;"># grid = GridSearchCV(estimator=model, param_grid=params, scoring=&#39;roc_auc&#39;, cv=5, n_jobs=-1)</span></span>
<span class="line"><span style="color:#6A737D;"># grid.fit(x_train, y_train)</span></span>
<span class="line"><span style="color:#6A737D;"># print(grid.best_params_, grid.best_score_)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">model.fit(x_train, y_train)</span></span>
<span class="line"><span style="color:#E1E4E8;">y_pre </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> model.predict(x_test)</span></span>
<span class="line"><span style="color:#79B8FF;">print</span><span style="color:#E1E4E8;">(metrics.roc_auc_score(y_test, y_pre))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> pandas </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> pd</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> lightgbm </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> lgb</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> sklearn.datasets </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> load_breast_cancer</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> sklearn.model_selection </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> train_test_split</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> sklearn.model_selection </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> GridSearchCV</span></span>
<span class="line"><span style="color:#D73A49;">from</span><span style="color:#24292E;"> sklearn </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> metrics</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">cancer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> load_breast_cancer()</span></span>
<span class="line"><span style="color:#24292E;">x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cancer.data</span></span>
<span class="line"><span style="color:#24292E;">y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cancer.target</span></span>
<span class="line"><span style="color:#24292E;">x_train, x_test, y_train, y_test </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> train_test_split(x, y, </span><span style="color:#E36209;">test_size</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0.2</span><span style="color:#24292E;">, </span><span style="color:#E36209;">random_state</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">data_train </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> lgb.Dataset(x_train, y_train)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">model </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> lgb.LGBMClassifier(</span><span style="color:#E36209;">objective</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;binary&#39;</span><span style="color:#24292E;">, </span><span style="color:#E36209;">metric</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;auc&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                           </span><span style="color:#E36209;">learning_rate</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0.01</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">                           </span><span style="color:#E36209;">n_estimators</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">                           </span><span style="color:#E36209;">max_depth</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                           </span><span style="color:#E36209;">num_leaves</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                           </span><span style="color:#E36209;">min_data_in_leaf</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">31</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                           </span><span style="color:#E36209;">min_bin</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">30</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                           </span><span style="color:#E36209;">subsample</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0.6</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                           </span><span style="color:#E36209;">colsample_bytree</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0.7</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                           </span><span style="color:#E36209;">lambda_l1</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1e-5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                           </span><span style="color:#E36209;">lambda_l2</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1e-5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                           </span><span style="color:#E36209;">min_split_gain</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">                          )</span></span>
<span class="line"><span style="color:#24292E;">params </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;n_estimators&#39;: range(100, 200, 20),</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;learning_rate&#39;: [0.1]</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;max_depth&#39;: range(3, 8, 1),</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;num_leaves&#39;: range(5, 100, 5),</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;min_data_in_leaf&#39;: range(1, 50, 10),</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;min_bin&#39;: range(30, 200, 20),</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;subsample&#39;: [0.6, 0.7, 0.8, 0.9, 1.0],</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;colsample_bytree&#39;: [0.6, 0.7, 0.8, 0.9, 1.0],</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;lambda_l1&#39;: [1e-5,1e-3,1e-1,0.0,0.1,0.3,0.5,0.7,0.9,1.0],</span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;lambda_l2&#39;: [1e-5,1e-3,1e-1,0.0,0.1,0.3,0.5,0.7,0.9,1.0],</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#6A737D;">#     &#39;min_split_gain&#39;: [0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;"># grid = GridSearchCV(estimator=model, param_grid=params, scoring=&#39;roc_auc&#39;, cv=5, n_jobs=-1)</span></span>
<span class="line"><span style="color:#6A737D;"># grid.fit(x_train, y_train)</span></span>
<span class="line"><span style="color:#6A737D;"># print(grid.best_params_, grid.best_score_)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">model.fit(x_train, y_train)</span></span>
<span class="line"><span style="color:#24292E;">y_pre </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> model.predict(x_test)</span></span>
<span class="line"><span style="color:#005CC5;">print</span><span style="color:#24292E;">(metrics.roc_auc_score(y_test, y_pre))</span></span></code></pre></div>`,59),y=[i];function E(_,m,d,g,F,h){return a(),n("div",null,y)}const f=s(c,[["render",E]]);export{A as __pageData,f as default};
