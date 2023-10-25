import{_ as l,o as i,c as o,Q as a}from"./chunks/framework.2516552c.js";const m=JSON.parse('{"title":"前馈神经网络","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/10白板推导系列/22NN.md","filePath":"articles/算法/10白板推导系列/22NN.md","lastUpdated":null}'),e={name:"articles/算法/10白板推导系列/22NN.md"},t=a('<h1 id="前馈神经网络" tabindex="-1">前馈神经网络 <a class="header-anchor" href="#前馈神经网络" aria-label="Permalink to &quot;前馈神经网络&quot;">​</a></h1><p>机器学习我们已经知道可以分为两大流派：</p><ol><li><p>频率派，这个流派的方法叫做统计学习，根据具体问题有下面的算法：</p><ol><li><p>正则化，L1，L2 等</p></li><li><p>核化，如核支撑向量机</p></li><li><p>集成化，AdaBoost，RandomForest</p></li><li><p>层次化，神经网络，神经网络有各种不同的模型，有代表性的有：</p><ol><li>多层感知机</li><li>Autoencoder</li><li>CNN</li><li>RNN</li></ol><p>这几种模型又叫做深度神经网络。</p></li></ol></li><li><p>贝叶斯派，这个流派的方法叫概率图模型，根据图特点分为：</p><ol><li>有向图-贝叶斯网络，加入层次化后有深度有向网络，包括 <ol><li>Sigmoid Belief Network</li><li>Variational Autoencoder</li><li>GAN</li></ol></li><li>无向图-马尔可夫网络，加入层次化后有深度玻尔兹曼机。</li><li>混合，加入层次化后有深度信念网络</li></ol><p>这几个加入层次化后的模型叫做深度生成网络。</p></li></ol><p>从广义来说，深度学习包括深度生成网络和深度神经网络。</p><h2 id="from-pla-to-dl" tabindex="-1">From PLA to DL <a class="header-anchor" href="#from-pla-to-dl" aria-label="Permalink to &quot;From PLA to DL&quot;">​</a></h2><ul><li>1958，PLA</li><li>1969，PLA 不能解决 XOR 等非线性数据</li><li>1981，MLP，多层感知机的出现解决了上面的问题</li><li>1986，BP 算法应用在 MLP 上，RNN</li><li>1989，CNN，Univeral Approximation Theorem，但是于此同时，由于深度和宽度的相对效率不知道，并且无法解决 BP 算法的梯度消失问题</li><li>1993，1995，SVM + kernel，AdaBoost，RandomForest，这些算法的发展，DL 逐渐没落</li><li>1997，LSTM</li><li>2006，基于 RBM 的 深度信念网络和深度自编码</li><li>2009，GPU的发展</li><li>2011，在语音方面的应用</li><li>2012，ImageNet</li><li>2013，VAE</li><li>2014，GAN</li><li>2016，AlphaGo</li><li>2018，GNN</li></ul><p>DL 不是一个新的东西，其近年来的大发展主要原因如下：</p><ol><li>数据量变大</li><li>分布式计算的发展</li><li>硬件算力的发展</li></ol><h2 id="非线性问题" tabindex="-1">非线性问题 <a class="header-anchor" href="#非线性问题" aria-label="Permalink to &quot;非线性问题&quot;">​</a></h2><p>对于非线性的问题，有三种方法：</p><ol><li>非线性转换，将低维空间转换到高维空间（Cover 定理），从而变为一个线性问题。</li><li>核方法，由于非线性转换是变换为高维空间，因此可能导致维度灾难，并且可能很难得到这个变换函数，核方法不直接寻找这个转换，而是寻找一个内积。</li><li>神经网络方法，将复合运算变为基本的线性运算的组合。</li></ol>',11),r=[t];function p(n,s,d,c,_,N){return i(),o("div",null,r)}const u=l(e,[["render",p]]);export{m as __pageData,u as default};
