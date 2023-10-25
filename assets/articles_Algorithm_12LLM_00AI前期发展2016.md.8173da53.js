import{_ as e,o as a,c as t,Q as p}from"./chunks/framework.2516552c.js";const i="/assets/v2-bfbda65ab4cac2ab17da948847a3bc2a_720w.71d716a5.webp",o="/assets/20201216100525766.785a1858.png",f=JSON.parse('{"title":"三巨头","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Algorithm/12LLM/00AI前期发展2016.md","filePath":"articles/Algorithm/12LLM/00AI前期发展2016.md","lastUpdated":null}'),s={name:"articles/Algorithm/12LLM/00AI前期发展2016.md"},l=p('<h1 id="三巨头" tabindex="-1">三巨头 <a class="header-anchor" href="#三巨头" aria-label="Permalink to &quot;三巨头&quot;">​</a></h1><p>ACM（国际计算机学会）宣布，有“深度学习三巨头”之称的Yoshua Bengio、Yann LeCun、Geoffrey Hinton共同获得了2018年的图灵奖，这是图灵奖1966年建立以来少有的一年颁奖给三位获奖者。ACM同时宣布，将于2019年6月15日在旧金山举行年度颁奖晚宴，届时正式给获奖者颁奖，奖金100万美元。</p><p><img src="'+i+'" alt="img"></p><h1 id="机器学习发展历程" tabindex="-1">机器学习发展历程 <a class="header-anchor" href="#机器学习发展历程" aria-label="Permalink to &quot;机器学习发展历程&quot;">​</a></h1><p><img src="'+o+'" alt="在这里插入图片描述"></p><p>1943：建立了神经元的数学模型，称为MCP模型。</p><p>MCP当时是希望能够用计算机来模拟人的神经元反应的过程，该模型将神经元简化为了三个过程：输入信号线性加权，求和，非线性激活（阈值法）。</p><p><img src="https://pic1.zhimg.com/80/v2-3c42edad1e322afa103dca26b6b3a2ac_720w.webp" alt="img"></p><p>1958：感知机PLA，用于线性分类。</p><ul><li>两层神经元组成的神经网络；</li><li>能够使用梯度下降法从训练样本中自动学习更新权值；</li><li>能够收敛；</li></ul><p>1969：明斯基提出PLA的局限性：无法解决非线性问题，如XOR</p><p>1981：多层感知器MLP</p><p>1986：Geoffrey Hinton提出适用于MLP的BP算法</p><ul><li><p>反向传播</p></li><li><p>采用<strong>Sigmoid</strong>进行非线性映射，有效解决了非线性分类和学习的问题</p></li></ul><p>1989：CNN</p><p>1991：BP算法被指出存在梯度消失问题，也就是说在误差梯度后项传递的过程中，后层梯度以乘性方式叠加到前层，由于Sigmoid函数的饱和特性，后层梯度本来就小，误差梯度传到前层时几乎为0，因此无法对前层进行有效的学习，该问题直接阻碍了深度学习的进一步发展。</p><p>1993-1995：通用逼近定理认为：&gt;=1层的隐藏层即可逼近任意连续函数，那为什么用“会导致梯度消失的多层”？随后导致SVM流派理论体系的完善。</p><p>1995：集成学习Adaboost, RandomForest</p><p>1997：LSTM</p><p>1998：LeCun提出了基于梯度学习的CNN模型——LeNet-5, 并将其成功应用于手写数字字符的识别中。</p><p>2006：Hintom提出Deep Learning该概念，基于RBM的Deep Belief Network。</p><p>2011年，ReLU激活函数被提出，该激活函数能够有效的抑制梯度消失问题。</p><p>2012：Hinton课题组为了证明深度学习的潜力，首次参加ImageNet图像识别比赛，其通过构建的CNN网络AlexNet一举夺得冠军，且碾压第二名（SVM方法）的分类性能。也正是由于该比赛，CNN吸引到了众多研究者的注意。</p><p>2013：VAE</p><p>2014：GAN</p><p>2016：谷歌（Google）旗下DeepMind公司开发的AlphaGo(基于深度学习)与围棋世界冠军、职业九段棋手李世石进行围棋人机大战，以4比1的总比分获胜。</p>',26),r=[l];function n(c,_,d,m,h,g){return a(),t("div",null,r)}const u=e(s,[["render",n]]);export{f as __pageData,u as default};
