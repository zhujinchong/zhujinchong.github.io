import{_ as e,o as r,c as t,Q as a}from"./chunks/framework.2516552c.js";const d=JSON.parse('{"title":"模型工业化部署方案","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/21模型部署/00调研模型工业化部署.md","filePath":"articles/算法/21模型部署/00调研模型工业化部署.md","lastUpdated":1698149129000}'),o={name:"articles/算法/21模型部署/00调研模型工业化部署.md"},n=a('<h1 id="模型工业化部署方案" tabindex="-1">模型工业化部署方案 <a class="header-anchor" href="#模型工业化部署方案" aria-label="Permalink to &quot;模型工业化部署方案&quot;">​</a></h1><p>1、首先推荐两篇文章，入门、了解、初识大模型工业化落地方案</p><ul><li>用C++框架重写，如Caffe, LibTorch</li><li>通过ONNX或者TensorRT加速</li></ul><p>（这几个博客内容都一样，选其中一个就可以）一文详解AI模型部署及工业落地方式（老潘的AI部署以及工业落地学习之路）：</p><p><a href="https://zhuanlan.zhihu.com/p/386488468" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/386488468</a></p><p><a href="https://cloud.tencent.com/developer/article/1841046" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1841046</a></p><p><a href="https://blog.csdn.net/Yong_Qi2015/article/details/118347233" target="_blank" rel="noreferrer">https://blog.csdn.net/Yong_Qi2015/article/details/118347233</a></p><p>[Pytorch项目打包和部署（1）——理论_pytorch 打包_shelleyHLX的博客-CSDN博客]：</p><p><a href="https://blog.csdn.net/qq_27009517/article/details/111312151" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_27009517/article/details/111312151</a></p><p>2、关于ONNX和TensorRT的知识：</p><ul><li>ONNX是跨平台的深度学习框架，主要是为了跨平台，支持CPU、GPU，此外还加速了推理。</li><li>TensorRT是英伟达的推理框架，可以将PyTorch等编写的模型转换为TensorRT格式，然后用TensorRT推理引擎提升速度。</li></ul><p>[PyTorch模型在TensorRT部署小结 - 知乎 (zhihu.com)]：</p><p><a href="https://zhuanlan.zhihu.com/p/638250792" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/638250792</a></p><p>[如何将模型从 PyTorch 转换为 TensorRT 并加速推理 - 知乎 (zhihu.com)]：</p><p><a href="https://zhuanlan.zhihu.com/p/637573579" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/637573579</a></p><p>[(137条消息) pytorch，onnx和tensorrt 的速度对比_tensorrt和pytorch_旺旺棒棒冰的博客-CSDN博客]</p><p><a href="https://blog.csdn.net/ltochange/article/details/120432092" target="_blank" rel="noreferrer">https://blog.csdn.net/ltochange/article/details/120432092</a></p><p>[介绍一下TensorRT，并和onnx对比 - 简书 (jianshu.com)]</p><p><a href="https://www.jianshu.com/p/365f2b6fa94f" target="_blank" rel="noreferrer">https://www.jianshu.com/p/365f2b6fa94f</a></p><p>3、总结常见的服务部署搭配：（老潘的AI部署以及工业落地学习之路）</p><ul><li>triton server + TensorRT/libtorch</li><li>flask + Pytorch</li><li>Tensorflow Server</li></ul><p>其中：</p><p>Tensorflow Server适用于Tensorflow框架写的模型</p><p>Flask + Pytorch并不能加速推理</p><p>Triton Server英伟达的开源的服务器框架，比Flask性能高很多。能够实现不同模型的统一部署和服务。</p><p>LibTroch是Pytorch的C++版，有着前端API和与Pytorch一样的自动求导功能，可以用于训练或者推理。因为libtorch是纯C++实现的，因此libtorch可以集成在各种生产环境中。</p><p>TensorRT是英伟达的推理框架，可以将PyTorch等编写的模型转换为TensorRT格式，然后用TensorRT推理引擎提升速度。</p><p>所以，</p><p>易于实现的是用TensorRT结合一个服务器框架使用，且TensorRT支持Python和C++调用API。</p>',29),l=[n];function p(s,h,c,i,_,T){return r(),t("div",null,l)}const u=e(o,[["render",p]]);export{d as __pageData,u as default};
