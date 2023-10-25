import{_ as a,o as i,c as t,Q as l}from"./chunks/framework.2516552c.js";const o="/assets/1042406-20161204194331365-2142863547.3d521e5e.png",e="/assets/1042406-20161204200000787-1988863729.cfa85e03.png",u=JSON.parse('{"title":"1. 分类","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Algorithm/12机器学习笔记/01概述.md","filePath":"articles/Algorithm/12机器学习笔记/01概述.md","lastUpdated":null}'),s={name:"articles/Algorithm/12机器学习笔记/01概述.md"},r=l('<blockquote><p>训练多个个体学习器，通过某种结合策略，形成一个强学习器。</p></blockquote><h1 id="_1-分类" tabindex="-1">1. 分类 <a class="header-anchor" href="#_1-分类" aria-label="Permalink to &quot;1. 分类&quot;">​</a></h1><p>串联：boosting</p><p>并联：bagging和随机森林</p><h1 id="_2-boosting" tabindex="-1">2. boosting <a class="header-anchor" href="#_2-boosting" aria-label="Permalink to &quot;2. boosting&quot;">​</a></h1><p><img src="'+o+'" alt="img"></p><ol><li>初始样本权重，训练一个弱学习器；</li><li>调整样本权重，使之前分类错误的样本权重变高，再训练一个弱学习器；</li><li>得到多个弱学习器后，通过集合策略，得到强学习器。</li></ol><p>Boosting系列的算法主要有：AdaBoost算法和提升数系列算法（梯度提升树）。</p><h1 id="_3-bagging" tabindex="-1">3. bagging <a class="header-anchor" href="#_3-bagging" aria-label="Permalink to &quot;3. bagging&quot;">​</a></h1><p><img src="'+e+'" alt="img"></p><ul><li>多次随机采样，得到多个独立的弱学习器。</li></ul><p>随机采样方法：自助采样法，即每次采样后把样本放回。</p><p>随机森林的特点：</p><ol><li>若学习器都是决策树；</li><li>随机采样+特征选择，即每次选择其中几个特征。</li></ol><h1 id="_4-结合策略" tabindex="-1">4. 结合策略 <a class="header-anchor" href="#_4-结合策略" aria-label="Permalink to &quot;4. 结合策略&quot;">​</a></h1><ol><li>平均法：针对回归问题，有简单平均和加权平均</li><li>投票法：针对分类问题，有： <ul><li>相对多数投票：选择最高票，若平票，则随机选择其中一个；</li><li>绝对多数投票：票数最多，且过半，否则拒绝预测；</li><li>加权投票：票数乘以权重。</li></ul></li><li>学习法：加一层学习器，代表算法stacking。</li></ol><p>end</p>',17),n=[r];function _(c,p,g,d,h,m){return i(),t("div",null,n)}const f=a(s,[["render",_]]);export{u as __pageData,f as default};
