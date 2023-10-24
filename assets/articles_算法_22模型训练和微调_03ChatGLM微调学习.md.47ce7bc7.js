import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.2516552c.js";const d=JSON.parse('{"title":"chatGLM-6b-QLora","description":"","frontmatter":{},"headers":[],"relativePath":"articles/算法/22模型训练和微调/03ChatGLM微调学习.md","filePath":"articles/算法/22模型训练和微调/03ChatGLM微调学习.md","lastUpdated":1698165159000}'),l={name:"articles/算法/22模型训练和微调/03ChatGLM微调学习.md"},o=p(`<h1 id="chatglm-6b-qlora" tabindex="-1">chatGLM-6b-QLora <a class="header-anchor" href="#chatglm-6b-qlora" aria-label="Permalink to &quot;chatGLM-6b-QLora&quot;">​</a></h1><h2 id="微调环境" tabindex="-1">微调环境 <a class="header-anchor" href="#微调环境" aria-label="Permalink to &quot;微调环境&quot;">​</a></h2><p>容器，用QLora</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 拉镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker pull huggingface/transformers-pytorch-gpu:4.29.1</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker rmi huggingface/transformers-pytorch-gpu:4.29.1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 启动容器; 端口用于查看训练曲线</span></span>
<span class="line"><span style="color:#e1e4e8;">docker run -tid -v /data/zjc/docker:/home -p 58323:58323 --name zjchf huggingface/transformers-pytorch-gpu:4.29.1</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除容器 停止容器 启动容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker rm zjchf</span></span>
<span class="line"><span style="color:#e1e4e8;">docker stop zjchf</span></span>
<span class="line"><span style="color:#e1e4e8;">docker start zjchf</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 进入容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker exec -it zjchf /bin/bash</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装包时网络连接失败，重启docker解决：systemctl restart docker</span></span>
<span class="line"><span style="color:#e1e4e8;">python3 -m pip install --upgrade pip</span></span>
<span class="line"><span style="color:#e1e4e8;">pip install -q -U bitsandbytes</span></span>
<span class="line"><span style="color:#e1e4e8;">pip install -q -U git+https://github.com/huggingface/peft.git</span></span>
<span class="line"><span style="color:#e1e4e8;">pip install transformers==4.30.2</span></span>
<span class="line"><span style="color:#e1e4e8;">pip install accelerate==0.20.3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 拉镜像</span></span>
<span class="line"><span style="color:#24292e;">docker pull huggingface/transformers-pytorch-gpu:4.29.1</span></span>
<span class="line"><span style="color:#24292e;"># 删除镜像</span></span>
<span class="line"><span style="color:#24292e;">docker rmi huggingface/transformers-pytorch-gpu:4.29.1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 启动容器; 端口用于查看训练曲线</span></span>
<span class="line"><span style="color:#24292e;">docker run -tid -v /data/zjc/docker:/home -p 58323:58323 --name zjchf huggingface/transformers-pytorch-gpu:4.29.1</span></span>
<span class="line"><span style="color:#24292e;"># 删除容器 停止容器 启动容器</span></span>
<span class="line"><span style="color:#24292e;">docker rm zjchf</span></span>
<span class="line"><span style="color:#24292e;">docker stop zjchf</span></span>
<span class="line"><span style="color:#24292e;">docker start zjchf</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 进入容器</span></span>
<span class="line"><span style="color:#24292e;">docker exec -it zjchf /bin/bash</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 安装包时网络连接失败，重启docker解决：systemctl restart docker</span></span>
<span class="line"><span style="color:#24292e;">python3 -m pip install --upgrade pip</span></span>
<span class="line"><span style="color:#24292e;">pip install -q -U bitsandbytes</span></span>
<span class="line"><span style="color:#24292e;">pip install -q -U git+https://github.com/huggingface/peft.git</span></span>
<span class="line"><span style="color:#24292e;">pip install transformers==4.30.2</span></span>
<span class="line"><span style="color:#24292e;">pip install accelerate==0.20.3</span></span></code></pre></div><p>微调</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 容器中训练</span></span>
<span class="line"><span style="color:#e1e4e8;">python3 train_qlora.py \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--train_args_json /home/qlora_chatglm6b/chatGLM_6B_QLoRA.json \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--model_name_or_path /home/chatglm2-6b-f16 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--train_data_path data/train.jsonl \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--lora_rank 4 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--lora_dropout 0.05 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--compute_dtype fp16</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">python3 train_qlora.py \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--train_args_json /home/chatGLM-6B-QLoRA-main/chatGLM_6B_QLoRA.json \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--model_name_or_path /home/chatglm2-6b-f16 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--train_data_path data/self_cognition_sai.json \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--lora_rank 8 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--lora_dropout 0.05 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--compute_dtype fp16</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 主机中启动tensorboard</span></span>
<span class="line"><span style="color:#e1e4e8;">tensorboard --logdir runs --port &#39;222&#39; --host 127.0.0.1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 容器中测试训练效果</span></span>
<span class="line"><span style="color:#e1e4e8;">python3 cli_demo.py</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 容器中训练</span></span>
<span class="line"><span style="color:#24292e;">python3 train_qlora.py \\</span></span>
<span class="line"><span style="color:#24292e;">--train_args_json /home/qlora_chatglm6b/chatGLM_6B_QLoRA.json \\</span></span>
<span class="line"><span style="color:#24292e;">--model_name_or_path /home/chatglm2-6b-f16 \\</span></span>
<span class="line"><span style="color:#24292e;">--train_data_path data/train.jsonl \\</span></span>
<span class="line"><span style="color:#24292e;">--lora_rank 4 \\</span></span>
<span class="line"><span style="color:#24292e;">--lora_dropout 0.05 \\</span></span>
<span class="line"><span style="color:#24292e;">--compute_dtype fp16</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">python3 train_qlora.py \\</span></span>
<span class="line"><span style="color:#24292e;">--train_args_json /home/chatGLM-6B-QLoRA-main/chatGLM_6B_QLoRA.json \\</span></span>
<span class="line"><span style="color:#24292e;">--model_name_or_path /home/chatglm2-6b-f16 \\</span></span>
<span class="line"><span style="color:#24292e;">--train_data_path data/self_cognition_sai.json \\</span></span>
<span class="line"><span style="color:#24292e;">--lora_rank 8 \\</span></span>
<span class="line"><span style="color:#24292e;">--lora_dropout 0.05 \\</span></span>
<span class="line"><span style="color:#24292e;">--compute_dtype fp16</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 主机中启动tensorboard</span></span>
<span class="line"><span style="color:#24292e;">tensorboard --logdir runs --port &#39;222&#39; --host 127.0.0.1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 容器中测试训练效果</span></span>
<span class="line"><span style="color:#24292e;">python3 cli_demo.py</span></span></code></pre></div><p>模型导出</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">python3 merge_lora_and_quantize.py \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--lora_path saved_files/chatGLM_6B_QLoRA_t32 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--output_path export_model/merged_qlora_model_4bit \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--remote_scripts_dir remote_scripts/chatglm2-6b \\</span></span>
<span class="line"><span style="color:#e1e4e8;">--qbits 4</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">python3 merge_lora_and_quantize.py \\</span></span>
<span class="line"><span style="color:#24292e;">--lora_path saved_files/chatGLM_6B_QLoRA_t32 \\</span></span>
<span class="line"><span style="color:#24292e;">--output_path export_model/merged_qlora_model_4bit \\</span></span>
<span class="line"><span style="color:#24292e;">--remote_scripts_dir remote_scripts/chatglm2-6b \\</span></span>
<span class="line"><span style="color:#24292e;">--qbits 4</span></span></code></pre></div><h2 id="设置显卡" tabindex="-1">设置显卡 <a class="header-anchor" href="#设置显卡" aria-label="Permalink to &quot;设置显卡&quot;">​</a></h2><p>一定要在文件<strong>最开头</strong>设置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import os</span></span>
<span class="line"><span style="color:#e1e4e8;">os.environ[&quot;CUDA_VISIBLE_DEVICES&quot;] = &quot;0&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">os.environ[&quot;CUDA_VISIBLE_DEVICES&quot;] = &quot;1,2&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import os</span></span>
<span class="line"><span style="color:#24292e;">os.environ[&quot;CUDA_VISIBLE_DEVICES&quot;] = &quot;0&quot;</span></span>
<span class="line"><span style="color:#24292e;">os.environ[&quot;CUDA_VISIBLE_DEVICES&quot;] = &quot;1,2&quot;</span></span></code></pre></div><h1 id="chatglm-efficient-tuning" tabindex="-1">ChatGLM-Efficient-Tuning <a class="header-anchor" href="#chatglm-efficient-tuning" aria-label="Permalink to &quot;ChatGLM-Efficient-Tuning&quot;">​</a></h1><p>训练</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">CUDA_VISIBLE_DEVICES</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">python</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">src/train_bash.py</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--stage</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sft</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--do_train</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--dataset</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">self_cognition_sai</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--finetuning_type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lora</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--output_dir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cognition</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--overwrite_cache</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--per_device_train_batch_size</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--gradient_accumulation_steps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--lr_scheduler_type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cosine</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--logging_steps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--save_steps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--warmup_steps</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--learning_rate</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#9ECBFF;">e-3</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--num_train_epochs</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10.0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--fp16</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--model_name_or_path</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/chatglm2-6b-f16</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">CUDA_VISIBLE_DEVICES</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">python</span><span style="color:#24292E;"> </span><span style="color:#032F62;">src/train_bash.py</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--stage</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sft</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--do_train</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--dataset</span><span style="color:#24292E;"> </span><span style="color:#032F62;">self_cognition_sai</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--finetuning_type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lora</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--output_dir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cognition</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--overwrite_cache</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--per_device_train_batch_size</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--gradient_accumulation_steps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--lr_scheduler_type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cosine</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--logging_steps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--save_steps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--warmup_steps</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--learning_rate</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#032F62;">e-3</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--num_train_epochs</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10.0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--fp16</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--model_name_or_path</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/chatglm2-6b-f16</span></span></code></pre></div><p>测试</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">CUDA_VISIBLE_DEVICES</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">python3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">src/cli_demo.py</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--checkpoint_dir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cognition</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--model_name_or_path</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/chatglm2-6b-f16</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">CUDA_VISIBLE_DEVICES</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">python3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">src/cli_demo.py</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--checkpoint_dir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cognition</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--model_name_or_path</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/chatglm2-6b-f16</span></span></code></pre></div><p>模型导出</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">CUDA_VISIBLE_DEVICES</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">python3</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">src/export_model.py</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--checkpoint_dir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cognition</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--output_dir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">export_model/chatglm2-lora</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">--model_name_or_path</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/home/chatglm2-6b-f16</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">CUDA_VISIBLE_DEVICES</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">python3</span><span style="color:#24292E;"> </span><span style="color:#032F62;">src/export_model.py</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--checkpoint_dir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cognition</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--output_dir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">export_model/chatglm2-lora</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">--model_name_or_path</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/home/chatglm2-6b-f16</span></span></code></pre></div>`,18),e=[o];function t(c,r,y,i,E,_){return a(),n("div",null,e)}const C=s(l,[["render",t]]);export{d as __pageData,C as default};
