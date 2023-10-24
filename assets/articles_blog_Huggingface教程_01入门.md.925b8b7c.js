import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.2516552c.js";const _=JSON.parse('{"title":"入门","description":"","frontmatter":{},"headers":[],"relativePath":"articles/blog/Huggingface教程/01入门.md","filePath":"articles/blog/Huggingface教程/01入门.md","lastUpdated":1698165159000}'),l={name:"articles/blog/Huggingface教程/01入门.md"},p=n(`<h1 id="入门" tabindex="-1">入门 <a class="header-anchor" href="#入门" aria-label="Permalink to &quot;入门&quot;">​</a></h1><p>huggingface官网教程</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">https://huggingface.co/learn</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">https://huggingface.co/learn</span></span></code></pre></div><p>安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pip install transformers</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pip install transformers</span></span></code></pre></div><h2 id="pipline函数" tabindex="-1">pipline函数 <a class="header-anchor" href="#pipline函数" aria-label="Permalink to &quot;pipline函数&quot;">​</a></h2><p>pipline把所有东西都封装起来，一个函数即可用，但实际不会这么用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from transformers import pipeline</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 情感分析</span></span>
<span class="line"><span style="color:#e1e4e8;">classifier = pipeline(&quot;sentiment-analysis&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">classifier(&quot;I&#39;ve been waiting for a HuggingFace course my whole life.&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 文本生成</span></span>
<span class="line"><span style="color:#e1e4e8;"># model：指定模型</span></span>
<span class="line"><span style="color:#e1e4e8;">generator = pipeline(&quot;text-generation&quot;, model=&quot;distilgpt2&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">generator(&quot;In this course, we will teach you how to&quot;, max_length=30)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 命名实体识别</span></span>
<span class="line"><span style="color:#e1e4e8;">ner = pipeline(&quot;ner&quot;, grouped_entities=True)</span></span>
<span class="line"><span style="color:#e1e4e8;">ner(&quot;My name is Sylvain and I work at Hugging Face in Brooklyn.&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from transformers import pipeline</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 情感分析</span></span>
<span class="line"><span style="color:#24292e;">classifier = pipeline(&quot;sentiment-analysis&quot;)</span></span>
<span class="line"><span style="color:#24292e;">classifier(&quot;I&#39;ve been waiting for a HuggingFace course my whole life.&quot;)</span></span>
<span class="line"><span style="color:#24292e;"># 文本生成</span></span>
<span class="line"><span style="color:#24292e;"># model：指定模型</span></span>
<span class="line"><span style="color:#24292e;">generator = pipeline(&quot;text-generation&quot;, model=&quot;distilgpt2&quot;)</span></span>
<span class="line"><span style="color:#24292e;">generator(&quot;In this course, we will teach you how to&quot;, max_length=30)</span></span>
<span class="line"><span style="color:#24292e;"># 命名实体识别</span></span>
<span class="line"><span style="color:#24292e;">ner = pipeline(&quot;ner&quot;, grouped_entities=True)</span></span>
<span class="line"><span style="color:#24292e;">ner(&quot;My name is Sylvain and I work at Hugging Face in Brooklyn.&quot;)</span></span></code></pre></div><h2 id="model" tabindex="-1">Model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;Model&quot;">​</a></h2><p>加载模型，模型参数随机初始化，即，未训练的模型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from transformers import BertConfig, BertModel</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">config = BertConfig()</span></span>
<span class="line"><span style="color:#e1e4e8;">model = BertModel(config)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(config)	# config定义了模型结构</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from transformers import BertConfig, BertModel</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">config = BertConfig()</span></span>
<span class="line"><span style="color:#24292e;">model = BertModel(config)</span></span>
<span class="line"><span style="color:#24292e;">print(config)	# config定义了模型结构</span></span></code></pre></div><p>从checkpoint加载模型：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">model = BertModel.from_pretrained(&quot;bert-base-cased&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">model = BertModel.from_pretrained(&quot;bert-base-cased&quot;)</span></span></code></pre></div><p>模型保存：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">model.save_pretrained(&quot;directory_on_my_computer&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 保存后会有两个文件：</span></span>
<span class="line"><span style="color:#e1e4e8;"># config.json 配置+模型结构</span></span>
<span class="line"><span style="color:#e1e4e8;"># pytorch_model.bin 权重字典</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">model.save_pretrained(&quot;directory_on_my_computer&quot;)</span></span>
<span class="line"><span style="color:#24292e;"># 保存后会有两个文件：</span></span>
<span class="line"><span style="color:#24292e;"># config.json 配置+模型结构</span></span>
<span class="line"><span style="color:#24292e;"># pytorch_model.bin 权重字典</span></span></code></pre></div><h2 id="tokenizer" tabindex="-1">Tokenizer <a class="header-anchor" href="#tokenizer" aria-label="Permalink to &quot;Tokenizer&quot;">​</a></h2><p>input数据需要变成batch形式，才可以输入模型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import torch</span></span>
<span class="line"><span style="color:#e1e4e8;">from transformers import AutoTokenizer, AutoModelForSequenceClassification</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">checkpoint = &quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">tokenizer = AutoTokenizer.from_pretrained(checkpoint)</span></span>
<span class="line"><span style="color:#e1e4e8;">model = AutoModelForSequenceClassification.from_pretrained(checkpoint)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">sequence = &quot;I&#39;ve been waiting for a HuggingFace course my whole life.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">tokens = tokenizer.tokenize(sequence)</span></span>
<span class="line"><span style="color:#e1e4e8;">ids = tokenizer.convert_tokens_to_ids(tokens)</span></span>
<span class="line"><span style="color:#e1e4e8;">input_ids = torch.tensor([ids])</span></span>
<span class="line"><span style="color:#e1e4e8;">print(input_ids)</span></span>
<span class="line"><span style="color:#e1e4e8;"># [[ 1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,  2607, 2026,  2878,  2166,  1012]]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">output = model(input_ids)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(&quot;Logits:&quot;, output.logits)</span></span>
<span class="line"><span style="color:#e1e4e8;"># [[-2.7276,  2.8789]]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import torch</span></span>
<span class="line"><span style="color:#24292e;">from transformers import AutoTokenizer, AutoModelForSequenceClassification</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">checkpoint = &quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span></span>
<span class="line"><span style="color:#24292e;">tokenizer = AutoTokenizer.from_pretrained(checkpoint)</span></span>
<span class="line"><span style="color:#24292e;">model = AutoModelForSequenceClassification.from_pretrained(checkpoint)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">sequence = &quot;I&#39;ve been waiting for a HuggingFace course my whole life.&quot;</span></span>
<span class="line"><span style="color:#24292e;">tokens = tokenizer.tokenize(sequence)</span></span>
<span class="line"><span style="color:#24292e;">ids = tokenizer.convert_tokens_to_ids(tokens)</span></span>
<span class="line"><span style="color:#24292e;">input_ids = torch.tensor([ids])</span></span>
<span class="line"><span style="color:#24292e;">print(input_ids)</span></span>
<span class="line"><span style="color:#24292e;"># [[ 1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,  2607, 2026,  2878,  2166,  1012]]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">output = model(input_ids)</span></span>
<span class="line"><span style="color:#24292e;">print(&quot;Logits:&quot;, output.logits)</span></span>
<span class="line"><span style="color:#24292e;"># [[-2.7276,  2.8789]]</span></span></code></pre></div><p>batch填充：tokenizer中都有pad_token_id</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">batched_ids = [</span></span>
<span class="line"><span style="color:#e1e4e8;">    [200, 200, 200],</span></span>
<span class="line"><span style="color:#e1e4e8;">    [200, 200, tokenizer.pad_token_id],</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">batched_ids = [</span></span>
<span class="line"><span style="color:#24292e;">    [200, 200, 200],</span></span>
<span class="line"><span style="color:#24292e;">    [200, 200, tokenizer.pad_token_id],</span></span>
<span class="line"><span style="color:#24292e;">]</span></span></code></pre></div><p>自动填充：进一步简化代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 按最长序列填充 （建议）</span></span>
<span class="line"><span style="color:#e1e4e8;">model_inputs = tokenizer(sequences, padding=&quot;longest&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 模型支持多长，填充到最长（不建议）</span></span>
<span class="line"><span style="color:#e1e4e8;">model_inputs = tokenizer(sequences, padding=&quot;max_length&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 填充到自定义的长度（不建议）</span></span>
<span class="line"><span style="color:#e1e4e8;">model_inputs = tokenizer(sequences, padding=&quot;max_length&quot;, max_length=8)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 按最长序列填充 （建议）</span></span>
<span class="line"><span style="color:#24292e;">model_inputs = tokenizer(sequences, padding=&quot;longest&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 模型支持多长，填充到最长（不建议）</span></span>
<span class="line"><span style="color:#24292e;">model_inputs = tokenizer(sequences, padding=&quot;max_length&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 填充到自定义的长度（不建议）</span></span>
<span class="line"><span style="color:#24292e;">model_inputs = tokenizer(sequences, padding=&quot;max_length&quot;, max_length=8)</span></span></code></pre></div><p>句子截断</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 超过最大长度，就会截断</span></span>
<span class="line"><span style="color:#e1e4e8;">model_inputs = tokenizer(sequences, truncation=True)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 超过最大长度，就会截断</span></span>
<span class="line"><span style="color:#24292e;">model_inputs = tokenizer(sequences, truncation=True)</span></span></code></pre></div><p>自动返回张量：简化代码，不用再写转换张量代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Returns PyTorch tensors</span></span>
<span class="line"><span style="color:#e1e4e8;">model_inputs = tokenizer(sequences, padding=True, return_tensors=&quot;pt&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># Returns TensorFlow tensors</span></span>
<span class="line"><span style="color:#e1e4e8;">model_inputs = tokenizer(sequences, padding=True, return_tensors=&quot;tf&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Returns PyTorch tensors</span></span>
<span class="line"><span style="color:#24292e;">model_inputs = tokenizer(sequences, padding=True, return_tensors=&quot;pt&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># Returns TensorFlow tensors</span></span>
<span class="line"><span style="color:#24292e;">model_inputs = tokenizer(sequences, padding=True, return_tensors=&quot;tf&quot;)</span></span></code></pre></div><p>自动填充特殊token：比如BERT会在句子开头和模型添加特殊字符，此时Tokenizer也做了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">model_inputs = tokenizer(sequence)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(tokenizer.decode(model_inputs[&quot;input_ids&quot;])) # 发现tokenizer自动做了特殊字符填充</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">tokens = tokenizer.tokenize(sequence)</span></span>
<span class="line"><span style="color:#e1e4e8;">ids = tokenizer.convert_tokens_to_ids(tokens)</span></span>
<span class="line"><span style="color:#e1e4e8;">print(tokenizer.decode(ids))  # 自己调用 convert_tokens_to_ids并不会填充</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># &quot;[CLS] i&#39;ve been waiting for a huggingface course my whole life. [SEP]&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"># &quot;i&#39;ve been waiting for a huggingface course my whole life.&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">model_inputs = tokenizer(sequence)</span></span>
<span class="line"><span style="color:#24292e;">print(tokenizer.decode(model_inputs[&quot;input_ids&quot;])) # 发现tokenizer自动做了特殊字符填充</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">tokens = tokenizer.tokenize(sequence)</span></span>
<span class="line"><span style="color:#24292e;">ids = tokenizer.convert_tokens_to_ids(tokens)</span></span>
<span class="line"><span style="color:#24292e;">print(tokenizer.decode(ids))  # 自己调用 convert_tokens_to_ids并不会填充</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># &quot;[CLS] i&#39;ve been waiting for a huggingface course my whole life. [SEP]&quot;</span></span>
<span class="line"><span style="color:#24292e;"># &quot;i&#39;ve been waiting for a huggingface course my whole life.&quot;</span></span></code></pre></div><p>总结：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 填充、截断、返回张量</span></span>
<span class="line"><span style="color:#e1e4e8;">tokens = tokenizer(sequences, padding=True, truncation=True, return_tensors=&quot;pt&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">output = model(**tokens)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 填充、截断、返回张量</span></span>
<span class="line"><span style="color:#24292e;">tokens = tokenizer(sequences, padding=True, truncation=True, return_tensors=&quot;pt&quot;)</span></span>
<span class="line"><span style="color:#24292e;">output = model(**tokens)</span></span></code></pre></div><h2 id="准备数据集" tabindex="-1">准备数据集 <a class="header-anchor" href="#准备数据集" aria-label="Permalink to &quot;准备数据集&quot;">​</a></h2><p>加载数据集：此命令下载并缓存数据集，默认位于 ~/.cache/huggingface/datasets 中。您可以通过设置 HF_HOME 环境变量来自定义缓存文件夹。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from datasets import load_dataset</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">raw_datasets = load_dataset(&quot;glue&quot;, &quot;mrpc&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">raw_datasets</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from datasets import load_dataset</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">raw_datasets = load_dataset(&quot;glue&quot;, &quot;mrpc&quot;)</span></span>
<span class="line"><span style="color:#24292e;">raw_datasets</span></span></code></pre></div><p>批量转换数据集</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">def tokenize_function(example):</span></span>
<span class="line"><span style="color:#e1e4e8;">    return tokenizer(example[&quot;sentence1&quot;], example[&quot;sentence2&quot;], truncation=True)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">raw_datasets = load_dataset(&quot;glue&quot;, &quot;mrpc&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">tokenized_datasets = raw_datasets.map(tokenize_function, batched=True)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">def tokenize_function(example):</span></span>
<span class="line"><span style="color:#24292e;">    return tokenizer(example[&quot;sentence1&quot;], example[&quot;sentence2&quot;], truncation=True)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">raw_datasets = load_dataset(&quot;glue&quot;, &quot;mrpc&quot;)</span></span>
<span class="line"><span style="color:#24292e;">tokenized_datasets = raw_datasets.map(tokenize_function, batched=True)</span></span></code></pre></div><p>动态填充<strong>dynamic padding</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from transformers import DataCollatorWithPadding</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">data_collator = DataCollatorWithPadding(tokenizer=tokenizer)</span></span>
<span class="line"><span style="color:#e1e4e8;">samples = tokenized_datasets[&quot;train&quot;][:8]</span></span>
<span class="line"><span style="color:#e1e4e8;">batch = data_collator(samples)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from transformers import DataCollatorWithPadding</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">data_collator = DataCollatorWithPadding(tokenizer=tokenizer)</span></span>
<span class="line"><span style="color:#24292e;">samples = tokenized_datasets[&quot;train&quot;][:8]</span></span>
<span class="line"><span style="color:#24292e;">batch = data_collator(samples)</span></span></code></pre></div><h2 id="微调" tabindex="-1">微调 <a class="header-anchor" href="#微调" aria-label="Permalink to &quot;微调&quot;">​</a></h2><p>Trainer类就是来帮你微调的，你需要：</p><p>1、准备数据</p><p>2、定义参数TrainingArguments</p><p>3、开启微调trainer.train()</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from datasets import load_dataset</span></span>
<span class="line"><span style="color:#e1e4e8;">from transformers import AutoTokenizer, DataCollatorWithPadding, TrainingArguments, AutoModelForSequenceClassification, Trainer</span></span>
<span class="line"><span style="color:#e1e4e8;">import evaluate</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">checkpoint = &quot;bert-base-uncased&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">tokenizer = AutoTokenizer.from_pretrained(checkpoint)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 注意1：这里修改了BERT模型的输出，定义了分类输出，会出现警告日志</span></span>
<span class="line"><span style="color:#e1e4e8;">model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">raw_datasets = load_dataset(&quot;glue&quot;, &quot;mrpc&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">tokenized_datasets = raw_datasets.map(lambda example: tokenizer(example[&quot;sentence1&quot;], example[&quot;sentence2&quot;], truncation=True), batched=True)</span></span>
<span class="line"><span style="color:#e1e4e8;">data_collator = DataCollatorWithPadding(tokenizer=tokenizer)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 注意2：训练和评估的超参数（这里保留默认）</span></span>
<span class="line"><span style="color:#e1e4e8;">training_args = TrainingArguments(checkpoint, evaluation_strategy=&quot;epoch&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 注意3：这里定义了一个评估方法，参数就是模型的输出</span></span>
<span class="line"><span style="color:#e1e4e8;">def compute_metrics(eval_preds):</span></span>
<span class="line"><span style="color:#e1e4e8;">    metric = evaluate.load(&quot;glue&quot;, &quot;mrpc&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    logits, labels = eval_preds</span></span>
<span class="line"><span style="color:#e1e4e8;">    predictions = np.argmax(logits, axis=-1)</span></span>
<span class="line"><span style="color:#e1e4e8;">    return metric.compute(predictions=predictions, references=labels)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">trainer = Trainer(</span></span>
<span class="line"><span style="color:#e1e4e8;">    model,</span></span>
<span class="line"><span style="color:#e1e4e8;">    training_args,</span></span>
<span class="line"><span style="color:#e1e4e8;">    train_dataset=tokenized_datasets[&quot;train&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">    eval_dataset=tokenized_datasets[&quot;validation&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">    data_collator=data_collator,</span></span>
<span class="line"><span style="color:#e1e4e8;">    tokenizer=tokenizer,</span></span>
<span class="line"><span style="color:#e1e4e8;">    compute_metrics=compute_metrics,</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;">trainer.train()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from datasets import load_dataset</span></span>
<span class="line"><span style="color:#24292e;">from transformers import AutoTokenizer, DataCollatorWithPadding, TrainingArguments, AutoModelForSequenceClassification, Trainer</span></span>
<span class="line"><span style="color:#24292e;">import evaluate</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">checkpoint = &quot;bert-base-uncased&quot;</span></span>
<span class="line"><span style="color:#24292e;">tokenizer = AutoTokenizer.from_pretrained(checkpoint)</span></span>
<span class="line"><span style="color:#24292e;"># 注意1：这里修改了BERT模型的输出，定义了分类输出，会出现警告日志</span></span>
<span class="line"><span style="color:#24292e;">model = AutoModelForSequenceClassification.from_pretrained(checkpoint, num_labels=2)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">raw_datasets = load_dataset(&quot;glue&quot;, &quot;mrpc&quot;)</span></span>
<span class="line"><span style="color:#24292e;">tokenized_datasets = raw_datasets.map(lambda example: tokenizer(example[&quot;sentence1&quot;], example[&quot;sentence2&quot;], truncation=True), batched=True)</span></span>
<span class="line"><span style="color:#24292e;">data_collator = DataCollatorWithPadding(tokenizer=tokenizer)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 注意2：训练和评估的超参数（这里保留默认）</span></span>
<span class="line"><span style="color:#24292e;">training_args = TrainingArguments(checkpoint, evaluation_strategy=&quot;epoch&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 注意3：这里定义了一个评估方法，参数就是模型的输出</span></span>
<span class="line"><span style="color:#24292e;">def compute_metrics(eval_preds):</span></span>
<span class="line"><span style="color:#24292e;">    metric = evaluate.load(&quot;glue&quot;, &quot;mrpc&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    logits, labels = eval_preds</span></span>
<span class="line"><span style="color:#24292e;">    predictions = np.argmax(logits, axis=-1)</span></span>
<span class="line"><span style="color:#24292e;">    return metric.compute(predictions=predictions, references=labels)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">trainer = Trainer(</span></span>
<span class="line"><span style="color:#24292e;">    model,</span></span>
<span class="line"><span style="color:#24292e;">    training_args,</span></span>
<span class="line"><span style="color:#24292e;">    train_dataset=tokenized_datasets[&quot;train&quot;],</span></span>
<span class="line"><span style="color:#24292e;">    eval_dataset=tokenized_datasets[&quot;validation&quot;],</span></span>
<span class="line"><span style="color:#24292e;">    data_collator=data_collator,</span></span>
<span class="line"><span style="color:#24292e;">    tokenizer=tokenizer,</span></span>
<span class="line"><span style="color:#24292e;">    compute_metrics=compute_metrics,</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;">trainer.train()</span></span></code></pre></div><h2 id="训练" tabindex="-1">训练 <a class="header-anchor" href="#训练" aria-label="Permalink to &quot;训练&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from datasets import load_dataset</span></span>
<span class="line"><span style="color:#e1e4e8;">from transformers import AutoTokenizer, DataCollatorWithPadding</span></span>
<span class="line"><span style="color:#e1e4e8;">from torch.utils.data import DataLoader</span></span>
<span class="line"><span style="color:#e1e4e8;">from transformers import AdamW, get_scheduler</span></span>
<span class="line"><span style="color:#e1e4e8;">from tqdm.auto import tqdm</span></span>
<span class="line"><span style="color:#e1e4e8;">import evaluate</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">device = torch.device(&quot;cuda&quot;) if torch.cuda.is_available() else torch.device(&quot;cpu&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">checkpoint = &quot;bert-base-uncased&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">tokenizer = AutoTokenizer.from_pretrained(checkpoint)</span></span>
<span class="line"><span style="color:#e1e4e8;">model = AutoModel.from_pretrained(checkpoint, num_labels=2)</span></span>
<span class="line"><span style="color:#e1e4e8;">model.to(device)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">raw_datasets = load_dataset(&quot;glue&quot;, &quot;mrpc&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">tokenized_datasets = raw_datasets.map(lambda example: tokenizer(example[&quot;sentence1&quot;], example[&quot;sentence2&quot;], truncation=True), batched=True)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除不用的列</span></span>
<span class="line"><span style="color:#e1e4e8;">tokenized_datasets = tokenized_datasets.remove_columns([&quot;sentence1&quot;, &quot;sentence2&quot;, &quot;idx&quot;])</span></span>
<span class="line"><span style="color:#e1e4e8;"># 重命名标签</span></span>
<span class="line"><span style="color:#e1e4e8;">tokenized_datasets = tokenized_datasets.rename_column(&quot;label&quot;, &quot;labels&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 转为张量</span></span>
<span class="line"><span style="color:#e1e4e8;">tokenized_datasets.set_format(&quot;torch&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 动态填充</span></span>
<span class="line"><span style="color:#e1e4e8;">data_collator = DataCollatorWithPadding(tokenizer=tokenizer)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 加载器</span></span>
<span class="line"><span style="color:#e1e4e8;">train_dataloader = DataLoader(</span></span>
<span class="line"><span style="color:#e1e4e8;">    tokenized_datasets[&quot;train&quot;], shuffle=True, batch_size=8, collate_fn=data_collator</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;">eval_dataloader = DataLoader(</span></span>
<span class="line"><span style="color:#e1e4e8;">    tokenized_datasets[&quot;validation&quot;], batch_size=8, collate_fn=data_collator</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 优化器</span></span>
<span class="line"><span style="color:#e1e4e8;">optimizer = AdamW(model.parameters(), lr=5e-5)</span></span>
<span class="line"><span style="color:#e1e4e8;">num_epochs = 3</span></span>
<span class="line"><span style="color:#e1e4e8;"># 学习率线性衰减至0</span></span>
<span class="line"><span style="color:#e1e4e8;">num_training_steps = num_epochs * len(train_dataloader)</span></span>
<span class="line"><span style="color:#e1e4e8;">lr_scheduler = get_scheduler(</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;linear&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    optimizer=optimizer,</span></span>
<span class="line"><span style="color:#e1e4e8;">    num_warmup_steps=0,</span></span>
<span class="line"><span style="color:#e1e4e8;">    num_training_steps=num_training_steps,</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">progress_bar = tqdm(range(num_training_steps))</span></span>
<span class="line"><span style="color:#e1e4e8;">for epoch in range(num_epochs):</span></span>
<span class="line"><span style="color:#e1e4e8;">    model.train()</span></span>
<span class="line"><span style="color:#e1e4e8;">    for batch in train_dataloader:</span></span>
<span class="line"><span style="color:#e1e4e8;">        batch = {k: v.to(device) for k, v in batch.items()}</span></span>
<span class="line"><span style="color:#e1e4e8;">        outputs = model(**batch)</span></span>
<span class="line"><span style="color:#e1e4e8;">        loss = outputs.loss</span></span>
<span class="line"><span style="color:#e1e4e8;">        loss.backward()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        optimizer.step()</span></span>
<span class="line"><span style="color:#e1e4e8;">        lr_scheduler.step()</span></span>
<span class="line"><span style="color:#e1e4e8;">        optimizer.zero_grad()</span></span>
<span class="line"><span style="color:#e1e4e8;">        progress_bar.update(1)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    model.eval()</span></span>
<span class="line"><span style="color:#e1e4e8;">    metric = evaluate.load(&quot;glue&quot;, &quot;mrpc&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    for batch in eval_dataloader:</span></span>
<span class="line"><span style="color:#e1e4e8;">        batch = {k: v.to(device) for k, v in batch.items()}</span></span>
<span class="line"><span style="color:#e1e4e8;">        with torch.no_grad():</span></span>
<span class="line"><span style="color:#e1e4e8;">            outputs = model(**batch)</span></span>
<span class="line"><span style="color:#e1e4e8;">        logits = outputs.logits</span></span>
<span class="line"><span style="color:#e1e4e8;">        predictions = torch.argmax(logits, dim=-1)</span></span>
<span class="line"><span style="color:#e1e4e8;">        metric.add_batch(predictions=predictions, references=batch[&quot;labels&quot;])</span></span>
<span class="line"><span style="color:#e1e4e8;">    metric.compute()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from datasets import load_dataset</span></span>
<span class="line"><span style="color:#24292e;">from transformers import AutoTokenizer, DataCollatorWithPadding</span></span>
<span class="line"><span style="color:#24292e;">from torch.utils.data import DataLoader</span></span>
<span class="line"><span style="color:#24292e;">from transformers import AdamW, get_scheduler</span></span>
<span class="line"><span style="color:#24292e;">from tqdm.auto import tqdm</span></span>
<span class="line"><span style="color:#24292e;">import evaluate</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">device = torch.device(&quot;cuda&quot;) if torch.cuda.is_available() else torch.device(&quot;cpu&quot;)</span></span>
<span class="line"><span style="color:#24292e;">checkpoint = &quot;bert-base-uncased&quot;</span></span>
<span class="line"><span style="color:#24292e;">tokenizer = AutoTokenizer.from_pretrained(checkpoint)</span></span>
<span class="line"><span style="color:#24292e;">model = AutoModel.from_pretrained(checkpoint, num_labels=2)</span></span>
<span class="line"><span style="color:#24292e;">model.to(device)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">raw_datasets = load_dataset(&quot;glue&quot;, &quot;mrpc&quot;)</span></span>
<span class="line"><span style="color:#24292e;">tokenized_datasets = raw_datasets.map(lambda example: tokenizer(example[&quot;sentence1&quot;], example[&quot;sentence2&quot;], truncation=True), batched=True)</span></span>
<span class="line"><span style="color:#24292e;"># 删除不用的列</span></span>
<span class="line"><span style="color:#24292e;">tokenized_datasets = tokenized_datasets.remove_columns([&quot;sentence1&quot;, &quot;sentence2&quot;, &quot;idx&quot;])</span></span>
<span class="line"><span style="color:#24292e;"># 重命名标签</span></span>
<span class="line"><span style="color:#24292e;">tokenized_datasets = tokenized_datasets.rename_column(&quot;label&quot;, &quot;labels&quot;)</span></span>
<span class="line"><span style="color:#24292e;"># 转为张量</span></span>
<span class="line"><span style="color:#24292e;">tokenized_datasets.set_format(&quot;torch&quot;)</span></span>
<span class="line"><span style="color:#24292e;"># 动态填充</span></span>
<span class="line"><span style="color:#24292e;">data_collator = DataCollatorWithPadding(tokenizer=tokenizer)</span></span>
<span class="line"><span style="color:#24292e;"># 加载器</span></span>
<span class="line"><span style="color:#24292e;">train_dataloader = DataLoader(</span></span>
<span class="line"><span style="color:#24292e;">    tokenized_datasets[&quot;train&quot;], shuffle=True, batch_size=8, collate_fn=data_collator</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;">eval_dataloader = DataLoader(</span></span>
<span class="line"><span style="color:#24292e;">    tokenized_datasets[&quot;validation&quot;], batch_size=8, collate_fn=data_collator</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 优化器</span></span>
<span class="line"><span style="color:#24292e;">optimizer = AdamW(model.parameters(), lr=5e-5)</span></span>
<span class="line"><span style="color:#24292e;">num_epochs = 3</span></span>
<span class="line"><span style="color:#24292e;"># 学习率线性衰减至0</span></span>
<span class="line"><span style="color:#24292e;">num_training_steps = num_epochs * len(train_dataloader)</span></span>
<span class="line"><span style="color:#24292e;">lr_scheduler = get_scheduler(</span></span>
<span class="line"><span style="color:#24292e;">    &quot;linear&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    optimizer=optimizer,</span></span>
<span class="line"><span style="color:#24292e;">    num_warmup_steps=0,</span></span>
<span class="line"><span style="color:#24292e;">    num_training_steps=num_training_steps,</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">progress_bar = tqdm(range(num_training_steps))</span></span>
<span class="line"><span style="color:#24292e;">for epoch in range(num_epochs):</span></span>
<span class="line"><span style="color:#24292e;">    model.train()</span></span>
<span class="line"><span style="color:#24292e;">    for batch in train_dataloader:</span></span>
<span class="line"><span style="color:#24292e;">        batch = {k: v.to(device) for k, v in batch.items()}</span></span>
<span class="line"><span style="color:#24292e;">        outputs = model(**batch)</span></span>
<span class="line"><span style="color:#24292e;">        loss = outputs.loss</span></span>
<span class="line"><span style="color:#24292e;">        loss.backward()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        optimizer.step()</span></span>
<span class="line"><span style="color:#24292e;">        lr_scheduler.step()</span></span>
<span class="line"><span style="color:#24292e;">        optimizer.zero_grad()</span></span>
<span class="line"><span style="color:#24292e;">        progress_bar.update(1)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    model.eval()</span></span>
<span class="line"><span style="color:#24292e;">    metric = evaluate.load(&quot;glue&quot;, &quot;mrpc&quot;)</span></span>
<span class="line"><span style="color:#24292e;">    for batch in eval_dataloader:</span></span>
<span class="line"><span style="color:#24292e;">        batch = {k: v.to(device) for k, v in batch.items()}</span></span>
<span class="line"><span style="color:#24292e;">        with torch.no_grad():</span></span>
<span class="line"><span style="color:#24292e;">            outputs = model(**batch)</span></span>
<span class="line"><span style="color:#24292e;">        logits = outputs.logits</span></span>
<span class="line"><span style="color:#24292e;">        predictions = torch.argmax(logits, dim=-1)</span></span>
<span class="line"><span style="color:#24292e;">        metric.add_batch(predictions=predictions, references=batch[&quot;labels&quot;])</span></span>
<span class="line"><span style="color:#24292e;">    metric.compute()</span></span></code></pre></div><h1 id="数据集详解" tabindex="-1">数据集详解 <a class="header-anchor" href="#数据集详解" aria-label="Permalink to &quot;数据集详解&quot;">​</a></h1><h2 id="数据处理" tabindex="-1">数据处理 <a class="header-anchor" href="#数据处理" aria-label="Permalink to &quot;数据处理&quot;">​</a></h2><p>加载本地数据集</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from datasets import load_dataset</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">!wget https://github.com/crux82/squad-it/raw/master/SQuAD_it-train.json.gz</span></span>
<span class="line"><span style="color:#e1e4e8;">!wget https://github.com/crux82/squad-it/raw/master/SQuAD_it-test.json.gz</span></span>
<span class="line"><span style="color:#e1e4e8;">raw_data = load_dataset(&quot;json&quot;, data_files=&quot;SQuAD_it-train.json&quot;, field=&quot;data&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from datasets import load_dataset</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">!wget https://github.com/crux82/squad-it/raw/master/SQuAD_it-train.json.gz</span></span>
<span class="line"><span style="color:#24292e;">!wget https://github.com/crux82/squad-it/raw/master/SQuAD_it-test.json.gz</span></span>
<span class="line"><span style="color:#24292e;">raw_data = load_dataset(&quot;json&quot;, data_files=&quot;SQuAD_it-train.json&quot;, field=&quot;data&quot;)</span></span></code></pre></div><p>打乱和选择</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">drug_sample = drug_dataset[&quot;train&quot;].shuffle(seed=42).select(range(1000))</span></span>
<span class="line"><span style="color:#e1e4e8;">drug_sample[:3]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">drug_sample = drug_dataset[&quot;train&quot;].shuffle(seed=42).select(range(1000))</span></span>
<span class="line"><span style="color:#24292e;">drug_sample[:3]</span></span></code></pre></div><p>过滤None数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">drug_dataset = drug_dataset.filter(lambda x: x[&quot;condition&quot;] is not None)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">drug_dataset = drug_dataset.filter(lambda x: x[&quot;condition&quot;] is not None)</span></span></code></pre></div><p>创建新列</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">drug_dataset = drug_dataset.map(lambda x: {&quot;review_length&quot;: len(x[&quot;review&quot;].split())})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">drug_dataset = drug_dataset.map(lambda x: {&quot;review_length&quot;: len(x[&quot;review&quot;].split())})</span></span></code></pre></div><p>通过batch操作，加速</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">tokenizer = AutoTokenizer.from_pretrained(&quot;bert-base-cased&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">def tokenize_and_split(examples):</span></span>
<span class="line"><span style="color:#e1e4e8;">    return tokenizer(examples[&quot;review&quot;], truncation=True, max_length=128, return_overflowing_tokens=True)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">tokenized_dataset = drug_dataset.map(tokenize_and_split, batched=True)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">tokenizer = AutoTokenizer.from_pretrained(&quot;bert-base-cased&quot;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">def tokenize_and_split(examples):</span></span>
<span class="line"><span style="color:#24292e;">    return tokenizer(examples[&quot;review&quot;], truncation=True, max_length=128, return_overflowing_tokens=True)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">tokenized_dataset = drug_dataset.map(tokenize_and_split, batched=True)</span></span></code></pre></div><p>上面会报错，因为return_overflowing_tokens会导致多出几列，所以还要删除旧列。</p><p>删除所有旧列</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">tokenized_dataset = drug_dataset.map(</span></span>
<span class="line"><span style="color:#e1e4e8;">    tokenize_and_split, batched=True, remove_columns=drug_dataset[&quot;train&quot;].column_names</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">tokenized_dataset = drug_dataset.map(</span></span>
<span class="line"><span style="color:#24292e;">    tokenize_and_split, batched=True, remove_columns=drug_dataset[&quot;train&quot;].column_names</span></span>
<span class="line"><span style="color:#24292e;">)</span></span></code></pre></div><h2 id="数据流" tabindex="-1">数据流 <a class="header-anchor" href="#数据流" aria-label="Permalink to &quot;数据流&quot;">​</a></h2><p>几百G数据怎么处理，流失处理：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pubmed_dataset_streamed = load_dataset(</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;json&quot;, data_files=data_files, split=&quot;train&quot;, streaming=True</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;">next(iter(pubmed_dataset_streamed))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pubmed_dataset_streamed = load_dataset(</span></span>
<span class="line"><span style="color:#24292e;">    &quot;json&quot;, data_files=data_files, split=&quot;train&quot;, streaming=True</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;">next(iter(pubmed_dataset_streamed))</span></span></code></pre></div><p>打乱数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">shuffled_dataset = pubmed_dataset_streamed.shuffle(buffer_size=10_000, seed=42)</span></span>
<span class="line"><span style="color:#e1e4e8;">next(iter(shuffled_dataset))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">shuffled_dataset = pubmed_dataset_streamed.shuffle(buffer_size=10_000, seed=42)</span></span>
<span class="line"><span style="color:#24292e;">next(iter(shuffled_dataset))</span></span></code></pre></div><h1 id="peft" tabindex="-1">PEFT <a class="header-anchor" href="#peft" aria-label="Permalink to &quot;PEFT&quot;">​</a></h1><h2 id="微调代码" tabindex="-1">微调代码 <a class="header-anchor" href="#微调代码" aria-label="Permalink to &quot;微调代码&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from peft import LoraConfig, TaskType, get_peft_model</span></span>
<span class="line"><span style="color:#e1e4e8;">from transformers import AutoModelForSeq2SeqLM, AutoTokenizer</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">checkpoint = &quot;bigscience/mt0-large&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">model = AutoModelForSeq2SeqLM.from_pretrained(checkpoint)</span></span>
<span class="line"><span style="color:#e1e4e8;">tokenizer = AutoTokenizer.from_pretrained(checkpoint)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># peft</span></span>
<span class="line"><span style="color:#e1e4e8;">peft_config = LoraConfig(task_type=TaskType.SEQ_2_SEQ_LM,</span></span>
<span class="line"><span style="color:#e1e4e8;">                         inference_mode=False,</span></span>
<span class="line"><span style="color:#e1e4e8;">                         r=8,</span></span>
<span class="line"><span style="color:#e1e4e8;">                         lora_alpha=32,</span></span>
<span class="line"><span style="color:#e1e4e8;">                         lora_dropout=0.05)</span></span>
<span class="line"><span style="color:#e1e4e8;">model = get_peft_model(model, peft_config)</span></span>
<span class="line"><span style="color:#e1e4e8;">model.print_trainable_parameters()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">train_dataset=</span></span>
<span class="line"><span style="color:#e1e4e8;">eval_dataset=</span></span>
<span class="line"><span style="color:#e1e4e8;">data_collator=</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">trainer = LoRATrainer(</span></span>
<span class="line"><span style="color:#e1e4e8;">    model=model,</span></span>
<span class="line"><span style="color:#e1e4e8;">    args=hf_train_args,</span></span>
<span class="line"><span style="color:#e1e4e8;">    train_dataset=tfrom peft import LoraConfig, TaskType, get_peft_model</span></span>
<span class="line"><span style="color:#e1e4e8;">trainer.train()</span></span>
<span class="line"><span style="color:#e1e4e8;"># 保存得到 adapter_config.json adapter_model.bin</span></span>
<span class="line"><span style="color:#e1e4e8;">trainer.model.save_pretrained(output_dir)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from peft import LoraConfig, TaskType, get_peft_model</span></span>
<span class="line"><span style="color:#24292e;">from transformers import AutoModelForSeq2SeqLM, AutoTokenizer</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">checkpoint = &quot;bigscience/mt0-large&quot;</span></span>
<span class="line"><span style="color:#24292e;">model = AutoModelForSeq2SeqLM.from_pretrained(checkpoint)</span></span>
<span class="line"><span style="color:#24292e;">tokenizer = AutoTokenizer.from_pretrained(checkpoint)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># peft</span></span>
<span class="line"><span style="color:#24292e;">peft_config = LoraConfig(task_type=TaskType.SEQ_2_SEQ_LM,</span></span>
<span class="line"><span style="color:#24292e;">                         inference_mode=False,</span></span>
<span class="line"><span style="color:#24292e;">                         r=8,</span></span>
<span class="line"><span style="color:#24292e;">                         lora_alpha=32,</span></span>
<span class="line"><span style="color:#24292e;">                         lora_dropout=0.05)</span></span>
<span class="line"><span style="color:#24292e;">model = get_peft_model(model, peft_config)</span></span>
<span class="line"><span style="color:#24292e;">model.print_trainable_parameters()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">train_dataset=</span></span>
<span class="line"><span style="color:#24292e;">eval_dataset=</span></span>
<span class="line"><span style="color:#24292e;">data_collator=</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">trainer = LoRATrainer(</span></span>
<span class="line"><span style="color:#24292e;">    model=model,</span></span>
<span class="line"><span style="color:#24292e;">    args=hf_train_args,</span></span>
<span class="line"><span style="color:#24292e;">    train_dataset=tfrom peft import LoraConfig, TaskType, get_peft_model</span></span>
<span class="line"><span style="color:#24292e;">trainer.train()</span></span>
<span class="line"><span style="color:#24292e;"># 保存得到 adapter_config.json adapter_model.bin</span></span>
<span class="line"><span style="color:#24292e;">trainer.model.save_pretrained(output_dir)</span></span></code></pre></div><h2 id="模型加载" tabindex="-1">模型加载 <a class="header-anchor" href="#模型加载" aria-label="Permalink to &quot;模型加载&quot;">​</a></h2><p>加载peft配置，加载base模型，加载peft+base模型</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from transformers import AutoModelForSeq2SeqLM</span></span>
<span class="line"><span style="color:#e1e4e8;">from peft import PeftModel, PeftConfig</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">peft_checkpoint = &quot;smangrul/twitter_complaints_bigscience_T0_3B_LORA_SEQ_2_SEQ_LM&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">peft_config = PeftConfig.from_pretrained(peft_checkpoint)</span></span>
<span class="line"><span style="color:#e1e4e8;">base_model = AutoModelForSeq2SeqLM.from_pretrained(peft_config.base_model_name_or_path).cuda()</span></span>
<span class="line"><span style="color:#e1e4e8;">model = PeftModel.from_pretrained(base_model, peft_checkpoint)</span></span>
<span class="line"><span style="color:#e1e4e8;">tokenizer = AutoTokenizer.from_pretrained(peft_config.base_model_name_or_path)</span></span>
<span class="line"><span style="color:#e1e4e8;">model.eval()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">while True:</span></span>
<span class="line"><span style="color:#e1e4e8;">    try:</span></span>
<span class="line"><span style="color:#e1e4e8;">        query = input(&quot;\\nInput: &quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    except Exception:</span></span>
<span class="line"><span style="color:#e1e4e8;">        raise</span></span>
<span class="line"><span style="color:#e1e4e8;">    response, history = model.chat(tokenizer=tokenizer, query=query)</span></span>
<span class="line"><span style="color:#e1e4e8;">    print(&quot;Output: &quot; + response)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from transformers import AutoModelForSeq2SeqLM</span></span>
<span class="line"><span style="color:#24292e;">from peft import PeftModel, PeftConfig</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">peft_checkpoint = &quot;smangrul/twitter_complaints_bigscience_T0_3B_LORA_SEQ_2_SEQ_LM&quot;</span></span>
<span class="line"><span style="color:#24292e;">peft_config = PeftConfig.from_pretrained(peft_checkpoint)</span></span>
<span class="line"><span style="color:#24292e;">base_model = AutoModelForSeq2SeqLM.from_pretrained(peft_config.base_model_name_or_path).cuda()</span></span>
<span class="line"><span style="color:#24292e;">model = PeftModel.from_pretrained(base_model, peft_checkpoint)</span></span>
<span class="line"><span style="color:#24292e;">tokenizer = AutoTokenizer.from_pretrained(peft_config.base_model_name_or_path)</span></span>
<span class="line"><span style="color:#24292e;">model.eval()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">while True:</span></span>
<span class="line"><span style="color:#24292e;">    try:</span></span>
<span class="line"><span style="color:#24292e;">        query = input(&quot;\\nInput: &quot;)</span></span>
<span class="line"><span style="color:#24292e;">    except Exception:</span></span>
<span class="line"><span style="color:#24292e;">        raise</span></span>
<span class="line"><span style="color:#24292e;">    response, history = model.chat(tokenizer=tokenizer, query=query)</span></span>
<span class="line"><span style="color:#24292e;">    print(&quot;Output: &quot; + response)</span></span></code></pre></div><p>也支持一个方法完成加载</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">from peft import AutoPeftModelForCausalLM</span></span>
<span class="line"><span style="color:#e1e4e8;">peft_model = AutoPeftModelForCausalLM.from_pretrained(&quot;ybelkada/opt-350m-lora&quot;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">from peft import AutoPeftModelForCausalLM</span></span>
<span class="line"><span style="color:#24292e;">peft_model = AutoPeftModelForCausalLM.from_pretrained(&quot;ybelkada/opt-350m-lora&quot;)</span></span></code></pre></div><h2 id="模型导出" tabindex="-1">模型导出 <a class="header-anchor" href="#模型导出" aria-label="Permalink to &quot;模型导出&quot;">​</a></h2><h2 id="qlora" tabindex="-1">QLora <a class="header-anchor" href="#qlora" aria-label="Permalink to &quot;QLora&quot;">​</a></h2>`,75),o=[p];function t(c,i,r,d,u,y){return e(),a("div",null,o)}const g=s(l,[["render",t]]);export{_ as __pageData,g as default};
